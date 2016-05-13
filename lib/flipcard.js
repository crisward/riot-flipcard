
riot.tag2('flipcard', '<div class="cardwrap {flipx:flipx,flipy:flipy,backflip:backflip,back45:back45}"><yield></yield></div>', 'flipcard { display: block; position: relative; perspective: 500px; transform-origin: center; } flipcard .cardwrap { transition: 0.5s; transform-style: preserve-3d; position: relative; } flipcard .flipx { transform: rotateY(180deg); } flipcard .flipy { transform: rotateX(180deg); } flipcard .flipy.flipx { transform: rotate3d(-45, -45, 0, 180deg); } flipcard .back45 .back { transform: rotate3d(45, 45, 0, 180deg); } flipcard .backflip .back { transform: rotate3d(180, 0, 0, 180deg); } flipcard .front, flipcard .back { background: #fff; position: absolute; box-sizing: border-box; padding: 10px; backface-visibility: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.2); } flipcard .front { transform: rotateY(0deg); } flipcard .back { transform: rotateY(180deg); background: #444; color: #fff; }', '', function(opts) {
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

this.front = (function(_this) {
  return function() {
    var ref, ref1;
    if (opts.direction !== "y" || ((ref = opts.direction) != null ? ref.match(/x/) : void 0)) {
      _this.flipx = false;
    }
    if ((ref1 = opts.direction) != null ? ref1.match(/y/) : void 0) {
      _this.flipy = false;
    }
    return _this.update();
  };
})(this);

this.back = (function(_this) {
  return function() {
    var ref, ref1;
    if (opts.direction !== "y" || ((ref = opts.direction) != null ? ref.match(/x/) : void 0)) {
      _this.flipx = true;
    }
    if ((ref1 = opts.direction) != null ? ref1.match(/y/) : void 0) {
      _this.flipy = true;
    }
    return _this.update();
  };
})(this);
});