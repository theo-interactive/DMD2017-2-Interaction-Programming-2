var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = window.innerWidth,
  cx = cw / 2;
var ch = canvas.height = window.innerHeight,
  cy = ch / 2;

ctx.fillStyle = "#000";
var circlesRy = [];
var circlesNum = 15;
var requestId = null;

function Circle() {
  this.r = randomIntFromInterval(25, 170);
  this.x = randomIntFromInterval(this.r, cw - this.r);
  this.y = randomIntFromInterval(this.r, ch - this.r);

  this.vx = randomIntFromInterval(25, 100)/100;
  this.vy = randomIntFromInterval(25, 100)/100;

  this.update = function() {
    this.edges();
    this.x += this.vx;
    this.y += this.vy;
  }

  this.edges = function() {
    if (this.x < this.r || this.x > cw - this.r) {
      this.vx *= -1;
    }
    if (this.y < this.r || this.y > ch - this.r) {
      this.vy *= -1;
    }
  }

  this.draw = function() {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  }

}

for (var i = 0; i < circlesNum; i++) {
  var circle = new Circle();
  circlesRy.push(circle);
}

function Draw() {
  requestId = window.requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);
  for (var i = 0; i < circlesRy.length; i++) {
    var c = circlesRy[i];
    c.update();
    c.draw();
  }
 for (var i = 0; i < circlesRy.length; i++) {
   var c = circlesRy[i];
    for (var j = i + 1; j < circlesRy.length; j++) {
      var c1 = circlesRy[j];
      var d = dist(c, c1);
      if ((d < c.r + c1.r) && (d > Math.abs(c.r - c1.r))) {
        getIntersection(c, c1, d);
      }
    }
  }
}

function Init() {
  circlesRy.length = 0;
  for (var i = 0; i < circlesNum; i++) {
  var circle = new Circle();
  circlesRy.push(circle);
}

  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }

  cw = canvas.width = window.innerWidth,
    cx = cw / 2;
  ch = canvas.height = window.innerHeight,
    cy = ch / 2;

  Draw();
};

setTimeout(function() {
  Init();

  addEventListener('resize', Init, false);
}, 15);

function getIntersection(p1, p2, d) {

  var p3 = {}; // middle point
  var p4 = {}; // intersection 1
  var p5 = {}; // intersection 2

  var a = (Math.pow(p1.r, 2) - Math.pow(p2.r, 2) + Math.pow(d, 2)) / (2 * d)
  var h = Math.sqrt(Math.pow(p1.r, 2) - Math.pow(a, 2));

  p3.x = p1.x + a * (p2.x - p1.x) / d;
  p3.y = p1.y + a * (p2.y - p1.y) / d;

  p4.x = p3.x + h * (p2.y - p1.y) / d;
  p4.y = p3.y - h * (p2.x - p1.x) / d;

  p5.x = p3.x - h * (p2.y - p1.y) / d;
  p5.y = p3.y + h * (p2.x - p1.x) / d;

  markPoint(p4);
  markPoint(p5);

}

function dist(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn)
}

function markPoint(p) {
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
  ctx.fill();
}