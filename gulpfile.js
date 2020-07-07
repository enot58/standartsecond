//Здесь подключаем плагины
const browserSync = require('browser-sync').create();
const del = require('del');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpCheerio = require('gulp-cheerio');
const gulpImagemin = require('gulp-imagemin');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpSvgmin = require('gulp-svgmin');
const gulp4 = require('gulp4');
const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const gulpPlumber = require('gulp-plumber');
const gulpReplace = require('gulp-replace');
const gulpSass = require('gulp-sass');
const gulpSvgSprite = require('gulp-svg-sprite');
const nodeSass = require('node-sass');
const runSequence = require('run-sequence');
const gulp = require('gulp');
// Здесь создаём массивы с файлами с возможностью дополнения в будующем
const scssFiles = [
	// './scss/_core.scss',
	// './scss/_fonts.scss',
	// './scss/_mixins.scss',
	// './scss/_reset.scss',
	// './scss/_variables.scss',
	// './scss/style.scss',
	// './scss/blocks/icon.scss',
	// './scss/blocks/menu.scss',
	// './scss/blocks/slider.scss',
	// './scss/blocks/top.scss',


	'./scss/**/*.scss',
	// './scss/style.scss'
]

const htmlFiles = [
	'index.html'
]

const jsFiles = [
	'./js/**/*.js'
]

const cssFiles = [
	'./css/*.css'
]

const imgFiles = [
	'./img/**/*.{png, jpg}'
]


// Создаём функции для Task
// Функция для Sass файлов
function funGulpSass() {
 	return gulp.src(scssFiles)
 	.pipe(gulpPlumber())
 	.pipe(gulpSourcemaps.init())
 	.pipe(gulpSass())
 	.pipe(gulpAutoprefixer({
            cascade: false
        }))
 	.pipe(gulpSourcemaps.write())
    .pipe(gulp.dest('./build/css'))
    //.pipe(browserSync.reload({stream: true}));
    .pipe(browserSync.stream());
 }; 

// Функция для Html 
function funHtml() {
 	return gulp.src(htmlFiles)
 	.pipe(gulp.dest('./build/html'))
 	.pipe(browserSync.stream());
    ///.pipe(browserSync.reload({stream: true}));
 }; 

// Функция для JS
function funJs() {
 	return gulp.src(jsFiles)
 	.pipe(gulp.dest('./build/js'))
 	.pipe(browserSync.stream());
    //.pipe(browserSync.reload({stream: true}));
 }; 


// Фунция для CSS
function funCss() {
 	return gulp.src(cssFiles)
 	.pipe(gulp.dest('./build/css'))
 	.pipe(browserSync.stream());
    //.pipe(browserSync.reload({stream: true}));
 }; 


// Функция для Изображений
function funImg() {
 	return gulp.src(imgFiles)
 	.pipe(gulp.dest('./build/img'))
 	.pipe(browserSync.stream());
    //.pipe(browserSync.reload({stream: true}));
 }; 


// В этой функции сжимаются изображения
function imagesMin() {
 	return gulp.src('./build/img/**/*.{png, jpg}')
 	.pipe(imagemin([
 		imagemin.jpegtran({progressive: true}),
 		imageminJpegRecompress({
 			loops: 5,
 			min: 65,
 			max: 70,
 			quality: 'medium'
 		}),
 		imagemin.optipng({optimizationLevel: 3})
 	]))
 	.pipe(gulp.dest('./build/img'))
 }; 

// Функция для Svg - sprite
function svg() {
	//находим в img
 	return gulp.src('./img/**/*.svg')
 	// пропускаем через мудуль svg min,который
 	.pipe(gulpSvgmin({
 		js2svg: {
 			pretty: true
 		}
 	}))
 	//удаляем лишние атрибуты через Cheerio
 	.pipe(gulpCheerio({
 		run: function ($) {
 			$('[fill]').removeAttr('fill');
 			$('[stroke]').removeAttr('stroke');
 			$('[style]').removeAttr('style');
 		},
 		parserOptions: {xmlMode: true}
 	}))
 	//Замена спецсимволов, так как после удаления атрибутов возможна замена
 	.pipe(gulpReplace('&gt;', '>'))
 	//Создаётся файл svg
 	.pipe(gulpSvgSprite({
 		mode: {
 			symbol:{
 				sprite:"sprite.svg"
 			}
 		}
 	}))
 	.pipe(gulp.dest('./build/img'));
 }; 

function serve() {
 	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
 	gulp.watch(["./scss/**/*.scss"], funGulpSass);
 	gulp.watch(["./js/**/*.js"], funJs);
 	gulp.watch(["./css/**/*.css"], funCss);
 	gulp.watch(["./img/**/*.{png, jpg}"], funImg);
 	gulp.watch(["./img/**/*.{svg}"], svg);
 	gulp.watch(["./*.html"]).on('change', browserSync.reload);
 }; 

function copy() {
	return gulp.src ([
		'./img/**',
		'./js/**',
		'./css/**',
		'*.html'
	], {
		base: '.'
	})
		.pipe(gulp.dest('build'));
};


function clean () {
	return del(['build/*']);
}

// function build(cd) {
// 	run(
// 		'clean',
// 		'copy',
// 		'funGulpSass',
// 		'funImg',
// 		'svg',
// 		cd()
// 	);
// };

// Здесь мы подключаем функции к Task
gulp.task('funGulpSass', funGulpSass);
gulp.task('funHtml', funHtml);
gulp.task('funJs', funJs);
gulp.task('funCss', funCss);
gulp.task('funImg', funImg);
gulp.task('imagesMin', imagesMin);
gulp.task('svg', svg);
gulp.task('serve',serve);
gulp.task('copy', copy);
gulp.task('clean', clean);
gulp.task('build', gulp.series(
	'clean',
	'copy',
	'funGulpSass',
	'funImg',
	'svg'
));








