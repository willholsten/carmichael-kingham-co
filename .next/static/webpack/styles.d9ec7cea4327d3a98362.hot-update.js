webpackHotUpdate("styles",{

/***/ "./components/Header/styles.scss":
/*!***************************************!*\
  !*** ./components/Header/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Header":"styles__Header___3_9BY","header_snippet":"styles__header_snippet___2W7bM","snippet_container":"styles__snippet_container___28-ee","header_main":"styles__header_main___2g2P3","main_container":"styles__main_container___2Xw93"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1572952258687");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d9ec7cea4327d3a98362.hot-update.js.map