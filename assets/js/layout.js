/* Menú y pie de página compartidos por todas las páginas.
   Editar aquí una vez cambia el sitio entero. */

// ── DATOS DE CONTACTO: este es el único lugar donde hay que cambiarlos ──
const CONTACTO={
  correo:'correo@cica.com.co',
  telefono:'+57 300 000 0000',
  ciudad:'Bogotá, Colombia',
  facebook:'#',
  instagram:'#',
  linkedin:'#'
};

const PAGINAS=[
  ['index.html','Inicio'],
  ['nosotros.html','Nosotros'],
  ['servicios.html','Servicios'],
  ['metodologia.html','Metodología'],
  ['sectores.html','Sectores'],
  ['contacto.html','Contacto']
];

const aqui=location.pathname.split('/').pop()||'index.html';
const tel=CONTACTO.telefono.replace(/\s/g,'');
const marca=`<div class="mark"><img src="assets/img/logo-mark.svg" alt="" width="44" height="44"></div>
  <div class="txt"><strong>C<span class="i-leaf">I</span>CA</strong><span>Control Integral<br>de Calidad Alimentaria</span></div>`;

document.getElementById('cabecera').innerHTML=`
<header>
  <div class="wrap nav">
    <a class="logo" href="index.html">${marca}</a>
    <nav class="menu" id="menu">
      ${PAGINAS.map(([url,nombre])=>`<a href="${url}"${url===aqui?' class="on" aria-current="page"':''}>${nombre}</a>`).join('')}
    </nav>
    <a class="btn" href="contacto.html">Solicitar diagnóstico</a>
    <button class="hamb" id="hamb" aria-label="Abrir menú" aria-expanded="false" aria-controls="menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

document.getElementById('pie').innerHTML=`
${aqui==='contacto.html'?'':`
<div class="cta">
  <div class="wrap">
    <div style="display:flex;align-items:center;gap:22px">
      <span class="escudo"><svg viewBox="0 0 24 24"><path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5z"/><path d="M8.5 12l2.5 2.5L16 9"/></svg></span>
      <div>
        <h2>¿Listo para elevar<br>la calidad de su negocio?</h2>
        <p>Permítanos acompañarlo en el camino hacia la excelencia e inocuidad alimentaria.</p>
      </div>
    </div>
    <div>
      <a class="btn claro" href="contacto.html">Solicitar diagnóstico →</a>
      <div class="tel"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"/></svg>${CONTACTO.telefono}</div>
    </div>
  </div>
</div>`}
<footer>
  <div class="wrap fgrid">
    <div>
      <div class="flogo">${marca}</div>
      <p style="max-width:26ch">Calidad e inocuidad para el crecimiento de su empresa.</p>
    </div>
    <div>
      <h4>Servicios</h4>
      <ul>
        <li><a href="servicios.html"><span class="arr">›</span>Sistemas de gestión</a></li>
        <li><a href="servicios.html"><span class="arr">›</span>Consultoría</a></li>
        <li><a href="servicios.html"><span class="arr">›</span>Capacitación</a></li>
        <li><a href="servicios.html"><span class="arr">›</span>Auditorías</a></li>
      </ul>
    </div>
    <div>
      <h4>Sectores</h4>
      <ul>
        <li><a href="sectores.html"><span class="arr">›</span>Restaurantes</a></li>
        <li><a href="sectores.html"><span class="arr">›</span>Hoteles</a></li>
        <li><a href="sectores.html"><span class="arr">›</span>Industrias de alimentos</a></li>
        <li><a href="sectores.html"><span class="arr">›</span>Catering y casinos</a></li>
      </ul>
    </div>
    <div>
      <h4>Contacto</h4>
      <ul>
        <li><a href="mailto:${CONTACTO.correo}">${CONTACTO.correo}</a></li>
        <li><a href="tel:${tel}">${CONTACTO.telefono}</a></li>
        <li>${CONTACTO.ciudad}</li>
      </ul>
    </div>
    <div>
      <h4>Síganos</h4>
      <div class="redes">
        <a href="${CONTACTO.facebook}" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-2 0-3 1.3-3 3.2V11H9v3h2v7h3v-7h2.5l.5-3H14V9.6c0-.4.2-.6.6-.6z"/></svg></a>
        <a href="${CONTACTO.instagram}" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5-1.6a.9.9 0 100 1.8.9.9 0 000-1.8z"/></svg></a>
        <a href="${CONTACTO.linkedin}" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M5 4a2 2 0 110 4 2 2 0 010-4zM3 9h4v12H3zM10 9h4v1.7c.6-1 1.7-2 3.5-2 2.6 0 4.5 1.7 4.5 5V21h-4v-6c0-1.5-.6-2.4-1.9-2.4-1.1 0-1.8.8-2.1 1.6V21h-4z"/></svg></a>
      </div>
    </div>
  </div>
  <div class="copy">© 2026 CICA — Control Integral de Calidad Alimentaria. Todos los derechos reservados.</div>
</footer>`;

// Rellena los datos de contacto en la página de contacto.
// data-contacto: escribe el valor y, si es un enlace, también el href.
// data-contacto-href: solo el href, respetando el texto del enlace.
const enlace=clave=>clave==='correo'?`mailto:${CONTACTO.correo}`:`tel:${tel}`;
document.querySelectorAll('[data-contacto]').forEach(el=>{
  el.textContent=CONTACTO[el.dataset.contacto];
  if(el.tagName==='A') el.href=enlace(el.dataset.contacto);
});
document.querySelectorAll('[data-contacto-href]').forEach(el=>{
  el.href=enlace(el.dataset.contactoHref);
});

const hamb=document.getElementById('hamb'),menu=document.getElementById('menu');
hamb.addEventListener('click',()=>{
  const abierto=menu.classList.toggle('abierto');
  hamb.classList.toggle('abierto',abierto);
  hamb.setAttribute('aria-expanded',abierto);
  hamb.setAttribute('aria-label',abierto?'Cerrar menú':'Abrir menú');
});
