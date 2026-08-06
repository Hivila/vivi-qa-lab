  (function(){
    var base = 142 + Math.floor(Math.random() * 3);
    document.getElementById('visitcount').textContent = 'VISITORS: ' + String(base).padStart(6, '0');
  })();
  (function(){
    var img = document.getElementById('mouseimg');
    var frames = ["assets/mouse-frame1.png","assets/mouse-frame2.png"];
    var i = 0;
    setInterval(function(){ i = 1 - i; img.src = frames[i]; }, 220);
  })();
