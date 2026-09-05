const galeria=document.getElementById('galeria'),fotos=[...galeria.querySelectorAll('img')];
let actual=0;
galeria.querySelectorAll('.flechas button').forEach(b=>b.addEventListener('click',()=>{
  fotos[actual].classList.remove('on');
  actual=(actual+Number(b.dataset.dir)+fotos.length)%fotos.length;
  fotos[actual].classList.add('on');
}));
