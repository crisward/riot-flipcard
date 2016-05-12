
riot.tag2('flipcard', '<div class="cardwrap {flipx:flipx,flipy:flipy,backflip:backflip,back45:back45}"><yield></yield></div>', 'flipcard { display: block; position: relative; -webkit-perspective: 500px; -moz-perspective: 500px; -ms-perspective: 500px; perspective: 500px; -webkit-transform-origin: center; -moz-transform-origin: center; -o-transform-origin: center; -ms-transform-origin: center; transform-origin: center; } flipcard .cardwrap { -webkit-transition: 0.5s; -moz-transition: 0.5s; -o-transition: 0.5s; -ms-transition: 0.5s; transition: 0.5s; -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -o-transform-style: preserve-3d; -ms-transform-style: preserve-3d; transform-style: preserve-3d; position: relative; } flipcard .flipx { -webkit-transform: rotateY(180deg); -moz-transform: rotateY(180deg); -o-transform: rotateY(180deg); -ms-transform: rotateY(180deg); transform: rotateY(180deg); } flipcard .flipy { -webkit-transform: rotateX(180deg); -moz-transform: rotateX(180deg); -o-transform: rotateX(180deg); -ms-transform: rotateX(180deg); transform: rotateX(180deg); } flipcard .flipy.flipx { -webkit-transform: rotate3d(-45, -45, 0, 180deg); -moz-transform: rotate3d(-45, -45, 0, 180deg); -o-transform: rotate3d(-45, -45, 0, 180deg); -ms-transform: rotate3d(-45, -45, 0, 180deg); transform: rotate3d(-45, -45, 0, 180deg); } flipcard .back45 .back { -webkit-transform: rotate3d(45, 45, 0, 180deg); -moz-transform: rotate3d(45, 45, 0, 180deg); -o-transform: rotate3d(45, 45, 0, 180deg); -ms-transform: rotate3d(45, 45, 0, 180deg); transform: rotate3d(45, 45, 0, 180deg); } flipcard .backflip .back { -webkit-transform: rotate3d(180, 0, 0, 180deg); -moz-transform: rotate3d(180, 0, 0, 180deg); -o-transform: rotate3d(180, 0, 0, 180deg); -ms-transform: rotate3d(180, 0, 0, 180deg); transform: rotate3d(180, 0, 0, 180deg); } flipcard .front, flipcard .back { background: #fff; position: absolute; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; padding: 10px; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; -ms-backface-visibility: hidden; backface-visibility: hidden; -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0.2); box-shadow: 0 5px 15px rgba(0,0,0,0.2); } flipcard .front { -webkit-transform: rotateY(0deg); -moz-transform: rotateY(0deg); -o-transform: rotateY(0deg); -ms-transform: rotateY(0deg); transform: rotateY(0deg); } flipcard .back { -webkit-transform: rotateY(180deg); -moz-transform: rotateY(180deg); -o-transform: rotateY(180deg); -ms-transform: rotateY(180deg); transform: rotateY(180deg); background: #444; color: #fff; }', '', function(opts) {
this.flipx = false;

this.flipy = false;

this.on('mount', function() {
  var ref;
  if (!this.root.style.width) {
    this.root.style.width = "100px";
  }
  if (!this.root.style.height) {
    this.root.style.height = "100px";
  }
  this.root.style.display = "block";
  if ((ref = opts.direction) != null ? ref.match(/[xy]{2}/) : void 0) {
    this.back45 = true;
  }
  if (opts.direction === "y") {
    this.backflip = true;
  }
  [].slice.call(this.root.querySelectorAll('.front,.back,.cardwrap')).forEach((function(_this) {
    return function(elem) {
      elem.style.width = _this.root.offsetWidth + "px";
      return elem.style.height = _this.root.offsetHeight + "px";
    };
  })(this));
  return this.update();
});

this.toggle = (function(_this) {
  return function() {
    var ref, ref1;
    if (opts.direction !== "y" || ((ref = opts.direction) != null ? ref.match(/x/) : void 0)) {
      _this.flipx = !_this.flipx;
    }
    if ((ref1 = opts.direction) != null ? ref1.match(/y/) : void 0) {
      _this.flipy = !_this.flipy;
    }
    return _this.update();
  };
})(this);
});