var gulp=require("gulp"),
	jshint=require("gulp-jshint"),
	concat=require("gulp-concat"),
	uglify=require("gulp-uglify"),
	rename = require("gulp-rename"),
	imagemin=require("gulp-imagemin"),
	less=require("gulp-less"),
	cleancss = require("gulp-clean-css"),
	autoprefix = require("gulp-autoprefixer"),
	del = require("del");
//js
gulp.task("scripts",function(){
 return gulp.src("src/js/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"))
		.pipe(concat("all.js"))
		.pipe(gulp.dest("dist/js"))
		.pipe(rename("all.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));

});
//css
gulp.task("style",function(){
	gulp.src("src/css/*.less")
		.pipe(less())
		.pipe(autoprefix({
            browsers: ["last 2 versions"]
        }))
        .pipe(rename("all.css"))
        .pipe(gulp.dest("dist/css"))        
        .pipe(rename("all.min.css"))
        .pipe(cleancss())
        .pipe(gulp.dest("dist/css"))
});

//img
gulp.task("images",function(){
	gulp.src("src/images/*.*")
		.pipe(imagemin({
			progressive:true
		}))
		.pipe(gulp.dest("dist/images"))
});


gulp.task("watch",function(){
	gulp.watch("src/js/*.js",["scripts"]);
	gulp.watch("src/images/*.*",["images"]);
	gulp.watch("src/css/*.scss",["style"]);
	gulp.watch("src/css/*.css",["style"]);
});

gulp.task("clean", function() {  
    del(["dist/css/", "dist/js/","dist/images/"]);
});

gulp.task("default",["clean"], function() {
    gulp.start("scripts","images","style","watch");
});
