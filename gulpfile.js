import gulp from 'gulp';
import browserSync from 'browser-sync';

// Кофигурация
import path from './gulp/config/path.js';

// Задачи
import clear from './gulp/tasks/clear.js';
import html from './gulp/tasks/html.js';
import styles from './gulp/tasks/styles.js';
import stylesLibs from './gulp/tasks/stylesLibs.js';
import scripts from './gulp/tasks/scripts.js';
import scriptsLibs from './gulp/tasks/scriptsLibs.js';
import images from './gulp/tasks/images.js';
import favicon from './gulp/tasks/favicon.js';
import svgSprite from './gulp/tasks/svgSprite.js';
import svgSpriteSport from './gulp/tasks/svgSpriteSport.js';
import fonts from './gulp/tasks/fonts.js';
import files from './gulp/tasks/files.js';

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

function watcher() {
  gulp.watch(path.html.watch, html).on('all', browserSync.reload);
  gulp.watch(path.styles.watch, styles);
  gulp.watch(path.stylesLibs.watch, stylesLibs);
  gulp.watch(path.scripts.watch, scripts).on('all', browserSync.reload);
  gulp.watch(path.scriptsLibs.watch, scriptsLibs).on('all', browserSync.reload);
  gulp.watch(path.images.watch, images).on('all', browserSync.reload);
  gulp.watch(path.favicon.watch, favicon).on('all', browserSync.reload);
  gulp.watch(path.svgSprite.watch, svgSprite).on('all', browserSync.reload);
  gulp.watch(path.svgSpriteSport.watch, svgSpriteSport).on('all', browserSync.reload);
  gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload);
  gulp.watch(path.files.watch, files).on('all', browserSync.reload);
}

const build = gulp.series(
  clear,
  gulp.parallel(
    html,
    styles,
    stylesLibs,
    scripts,
    scriptsLibs,
    images,
    favicon,
    svgSprite,
    svgSpriteSport,
    fonts,
    files
  )
);
const dev = gulp.series(build, gulp.parallel(server, watcher));

export { clear };
export { html };
export { styles };
export { stylesLibs };
export { scripts };
export { scriptsLibs };
export { images };
export { favicon };
export { svgSprite };
export { svgSpriteSport };
export { fonts };
export { files };
export { build };

export default dev;
