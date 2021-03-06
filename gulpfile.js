var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    spritesmith = require('gulp.spritesmith'),
    rename = require("gulp-rename"),

    //Перебираемся на PostCSS
    postcss = require('gulp-postcss'),
    stylelint = require('stylelint'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    fileinclude = require('gulp-file-include'),
    precss = require('precss'),
    browserslist = require('browserslist');

// Очистка папки DIST
gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean())
        .pipe(notify('dist cleaned'));
});

// Копирование статики
gulp.task('copy_img', function () {
    return gulp.src('src/images/*')
     .pipe(gulp.dest('dist/images/'));
});

gulp.task('copy_fonts', function () {
    return gulp.src('src/bower/Font-Awesome/fonts/*')
     .pipe(gulp.dest('dist/fonts/'));
});


// Склейка, минификация для js и css. А также изменение путей до css* и js* и копирирование их в dist
gulp.task('dist', function () {
    var assets = useref.assets();
    return gulp.src('src/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'Сборка завершена', onLast: true}));
});

// Bower
gulp.task('bower', function () {
    gulp.src('src/*.html')
        .pipe(wiredep({
            directory: 'src/bower'
        }))
        .pipe(gulp.dest('src'));
});

// Запуск сервера
gulp.task('connect', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
    opn('http://localhost:8080')
});

// Запуск сервера
gulp.task('connect-dist', function() {
    connect.server({
        root: 'dist'
    });
    opn('http://localhost:8080');
});

// Работа с HTML
gulp.task('html_compile', function() {
  gulp.src('src/html/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./src/'));
});


gulp.task('html', function () {
    gulp.src('./src/*.html')
    .pipe(notify({message: 'HTML изменён', onLast: true}))
    .pipe(connect.reload());
});

// Работа с CSS
gulp.task('css', function () {
    gulp.src('./src/css/*.css')
    .pipe(connect.reload())
    .pipe(notify({message: 'CSS создан', onLast: true}));
});

// Работа с JS
gulp.task('js', function () {
    gulp.src('./src/js/*.js')
    .pipe(notify({message: 'JS изменён', onLast: true}))
    .pipe(connect.reload());
});


// Компиляция CSS
gulp.task('css_compile', function () {
    var processors = [
        precss(),
        cssnano({discardComments: {removeAll: true}}),
        autoprefixer({browsers: ['> 1%', 'last 2 versions', 'ie 10']})
    ];
    return gulp.src('src/css/import.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(rename("style.css"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css/'));
});


// Слежка
gulp.task('watch', function () {
    gulp.watch(['./src/html/**/*.html'], ['html_compile']); //собираем html если какой-то из шаблонов html изменился
    gulp.watch(['./src/*.html'], ['html']); //перезапускаем сервер если html пересобрался
    gulp.watch(['./src/js/*.js'], ['js']); //перезапускаем сервер если javascript файлы изменились
    gulp.watch(['./src/css/modules/**/*.css'], ['css_compile']);//собираем style.css если какой-то из шаблонов css изменился
    gulp.watch(['./src/css/style.css'], ['css']); //перезапускаем сервер если style.css пересобрался
});


// Спрайты
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('./src/images/_for_sprite/**/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.less',
                cssFormat :'less',
                padding: 10,
            }));
    spriteData.img.pipe(gulp.dest('./src/images/sprite/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/less/base/')); // путь, куда сохраняем стили
});


// Задача по-умолчанию
gulp.task('default', ['connect', 'watch']);

// Сборка проекта
gulp.task('compile', ['dist', 'copy_img']);