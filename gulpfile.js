const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');
const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const image = require('gulp-image');

// exports.mincss = cb => {
//     .src('css/*.css') //來源
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest('dest/css'));
//         cb()
// };

// exports.ug = function ugjs() {
//     return src('js/*.js').pipe(uglify()).pipe(rename({
//         extname: '.min.js'
//     })).pipe(dest('dist'))
// }

exports.prefix = cb => {
    src('css/**')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('dist/'));
    cb();
}

exports.default = cb => {
    src(['img/**/*.jpg', 'img/**/*.jpeg', 'img/**/*.png'])
        .pipe(imagemin())
        .pipe(dest('dist'));
        cb();
};

exports.minpic = cb => {
    src('img/**')
        .pipe(imagemin())
        .pipe(dest('dist'));
    cb();
};

exports.min = cb => {
    src(['img/**/*.jpg', 'img/**/*.jpeg', 'img/**/*.png'])
    .pipe(image())
    .pipe(dest('./dest'));
    cb();
};