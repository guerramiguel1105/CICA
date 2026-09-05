const galeria=document.getElementById('galeria');
galeria.querySelectorAll('.flechas button').forEach(b=>b.addEventListener('click',()=>{
  // La lista se lee en cada clic porque layout.js quita las fotos que no existan
  const fotos=[...galeria.querySelectorAll('img')];
  const actual=fotos.findIndex(f=>f.classList.contains('on'));
  fotos[actual].classList.remove('on');
  fotos[(actual+Number(b.dataset.dir)+fotos.length)%fotos.length].classList.add('on');
}));
