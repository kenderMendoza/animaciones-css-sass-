const gulp = require(`gulp`)
const sass = require(`gulp-sass`)
const pug = require(`gulp-pug`)
const ap = require(`gulp-autoprefixer`);

sass.compiler = require(`node-sass`)

gulp.task(`sass`,() => {
    return gulp.src(`./sass/style.scss`)
        .pipe(sass().on(`error`, sass.logError))
        .pipe(ap({
            cascade: false,
            flexbox: false
        }))
        .pipe(gulp.dest(`./css/`))
})

gulp.task('pug', function buildHTML() {
    return gulp.src('pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest(`../public/html/`))
  });

gulp.task(`watch`,()=>{
    gulp.watch(`./sass/*/*.scss`, gulp.series(`sass`))
    gulp.watch(`./pug/*.pug`, gulp.series(`pug`))

})