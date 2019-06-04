//걸프 의존성 사용
const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 작업 지정
gulp.task('default', function(){

    //노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe("public/dist");
});