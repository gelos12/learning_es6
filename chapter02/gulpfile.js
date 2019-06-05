//걸프 의존성 사용
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// 걸프 작업 지정
gulp.task('default', function(done){

    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    //노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

    done();
});