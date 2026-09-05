const hamb=document.getElementById('hamb'),menu=document.getElementById('menu');
hamb.addEventListener('click',()=>{
  const abierto=menu.classList.toggle('abierto');
  hamb.classList.toggle('abierto',abierto);
  hamb.setAttribute('aria-expanded',abierto);
  hamb.setAttribute('aria-label',abierto?'Cerrar menú':'Abrir menú');
});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  menu.classList.remove('abierto');hamb.classList.remove('abierto');
  hamb.setAttribute('aria-expanded','false');
  menu.querySelectorAll('a').forEach(x=>x.classList.remove('on'));
  a.classList.add('on');
}));

const galeria=document.getElementById('galeria'),fotos=[...galeria.querySelectorAll('img')];
let actual=0;
galeria.querySelectorAll('.flechas button').forEach(b=>b.addEventListener('click',()=>{
  fotos[actual].classList.remove('on');
  actual=(actual+Number(b.dataset.dir)+fotos.length)%fotos.length;
  fotos[actual].classList.add('on');
}));
