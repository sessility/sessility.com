
var Sessility = function () {},
  sess;

Sessility.prototype.initFont = function () {
  WebFontConfig = {
    google: { families: [ 'Anaheim::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
};

Sessility.prototype.revealNav = function (n) {
  var nav = document.getElementsByTagName('nav')[0];
  nav.classList.add('reveal-' + n);
};

Sessility.prototype.onReady = function () {

  this.initFont();

  window.setTimeout(function () {
    sess.revealNav.call(sess, 0);
  }, 2000);

  window.setTimeout(function () {
    sess.revealNav.call(sess, 1);
  }, 2300);

};

window.addEventListener('load', function () {
  sess = Object.create(Sessility.prototype);
  sess.onReady.call(sess);
});
