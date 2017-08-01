//プラグインの読み込み
var gulp = require("gulp");
var sass = require("gulp-sass");
var sassLint = require("gulp-sass-lint");
var autoprefixer = require('gulp-autoprefixer');
//タスクの定義

//sassのコンパイル
gulp.task("sass", function() {
  // gulp.watch("sass/*.scss", function(){
    gulp.src("scss/*.scss") //ファイルの参照先を指定
    .pipe(sass()) //プラグインの実行
    .pipe(gulp.dest("css")) //処理を行ったファイルの保存先を指定
  // })
});

//lintで文法チェック
gulp.task("lint", function() {
  gulp.src("scss/*.scss")
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
});

//チェックとコンパイル(自動)
gulp.task("style-watch", function() {
  gulp.watch("scss/*.scss", function(){
    gulp.src("scss/*.scss")
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())
    .pipe(gulp.dest("css"))
  })
});

//チェックとコンパイル（手動）
gulp.task("style", function() {
  gulp.src("scss/*.scss")
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest("css"))
});

// //自動更新・文法チェック
// gulp.task('default', () => {
//     gulp.watch(STYLE_SRC, ['style']);
// });



// //lint
// gulp.task("lint",function(){
//   return gulp.src(SCSS_SRC)
//     .pipe(scsslint({"config":".scss-lint.ymi"}));
// });
