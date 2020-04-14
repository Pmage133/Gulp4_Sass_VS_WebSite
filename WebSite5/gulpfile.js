/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var sass = require('gulp-sass'); // gulp-sass - это плагин для gulp?

var tasks = {
    css: ['main.css'],
    script: ['script.coffee']
};

gulp.task('default', async function () {
    // place code for your default task here
    console.log("HTTP Server Started");
});

gulp.task('default2', async function () {
    // place code for your default task here
    console.log("HTTP Server Started 2");
    gulp.series('scss')(); //вызов задачи как простой функции
    //gulp.series("task1", "task2")();
    //(gulp.parallel("task1", "task2")());
});

function mytestfunc1()
{
    console.log('test1111');
}

gulp.task('default3', function (done) {
    // place code for your default task here
    console.log("HTTP Server Started 3");
    gulp.series("default", "default2")();
    mytestfunc1();
    done();
});

gulp.task('scss', function (done) {
    // place code for your default task here
    gulp.src(["*.scss"])
        .pipe(sass())
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./"))
    done();
});

//Определение новой задачи в GULP для SCSS и SASS 
gulp.task("all_scss", async function () {
    //**- ищем везде, включая вложенные папки
    gulp.src(["./samples/**/*.scss", "./samples/**/*.sass"])
        //Компиляция scss или sass в css формат
        .pipe(sass())
        //Вывод ошибки, без окончания компиляции
        .pipe(sass().on("error", sass.logError))
        //Путь компиляции файлов
        .pipe(gulp.dest("./samples"))
})

gulp.task("test", async () => {
    return mytestfunc1()
})

gulp.task('watcher', function (done) {
    //gulp.watch(["*.scss"], function () {
    //    console.log("!!!!!!");
    //})
    gulp.watch(["*.scss"], gulp.series('scss'));    
    done();
});

