const c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
const x = c.getContext('2d');
x.fillStyle='#ffffffff';

function dweet(x,C,S,t) { 
    const r = 1;
  x.fillStyle='#00000006';
  x.fillRect(0,0,c.width,c.height)
  t*=100
   for(let i=0;i<2999;i+=1)x.fillStyle = `hsla(${t+i/32},${t+i}%,50%,1)`,
     x.fillRect(
     window.innerWidth/2 + 499 * S(1.1*t*i+t) * C(t*i+t) + C(t*i*t) * S(t*i*t),
     window.innerHeight/2 + 499 * S(t*i+t) + C(t*i+t) / C(t*i+t) +  S(t*i+t)
     ,1,1);
}

let t = 0;
function loop() {
  dweet(x, Math.cos, Math.sin, t);
  t+=0.0001;
  requestAnimationFrame(loop);
}
loop();