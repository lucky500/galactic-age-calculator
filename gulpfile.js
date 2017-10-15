var gulp            = require('gulp'),
    watchify        = require('watchify'),
    browserify      = require('browserify'),
    source          = require('vinyl-source-stream'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    utilities       = require('gulp-util'),
    del             = require('del'),
    jshint          = require('gulp-jshint'),
    babelify        = require('babelify'),
    browserSync     = require('browser-sync').create(),
    buildProduction = utilities.env.production,
    lib             = require('bower-files')({
    overrides: {
      materialize: {
        main: [
          'sass/materialize.scss',
          'dist/css/materialize.css',
          'dist/js/materialize.js',
        ],
      },
    },
  });


gulp.task('concatInterface', function () {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function () {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .transform(babelify.configure({
      presets: ['es2015'],
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function () {
  return gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('clean', function () {
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function () {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }

  gulp.start('bower');
});

gulp.task('jshint', function () {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);

});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function () {
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function () {
  browserSync.reload();
});
