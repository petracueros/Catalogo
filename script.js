const productos = [
  { 
    id: 1, nombre: 'Agenda Grande', categoria: 'accesorios', precio: '20.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 17x23 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 2, nombre: 'Agenda Chica', categoria: 'accesorios', precio: '15.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 13x16,5 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 3, nombre: 'Neceser Grande', categoria: 'neceser', precio: '30.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 23x12x10 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 4, nombre: 'Neceser Chico', categoria: 'neceser', precio: '25.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 21x10x8 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 5, nombre: 'Cosmetiquero', categoria: 'neceser', precio: '32.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 23,5x19,5x10 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 6, nombre: 'Billetera Grande', categoria: 'billeteras', precio: '26.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 18,5x10 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 7, nombre: 'Billetera Chica', categoria: 'billeteras', precio: '23.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 12x9,5 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 8, nombre: 'Billetera Hombre', categoria: 'billeteras', precio: '18.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 9x11 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 9, nombre: 'Porta Pasaporte', categoria: 'accesorios', precio: '12.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 14x10 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 10, nombre: 'Tarjeteros', categoria: 'accesorios', precio: '10.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 10x8 cm · Material: Cuero genuino · Color: Por confirmar'
  },
  { 
    id: 11, nombre: 'Cartera Roma', categoria: 'carteras', precio: '52.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 30x27x10 cm · Colores: Negro · Verde Oliva · Burdeo · Camel · Chocolate · Champaña · Diseños: Tachas (detalles metálicos alineados en bordes) · Estrella (motivo central en relieve) · Simple (líneas limpias, sin adornos) · Incluye bolsillo interior, portallaves y cierre superior.'
  },
  { 
    id: 12, nombre: 'Cartera Sicilia', categoria: 'carteras', precio: '62.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 36x30x10 cm · Colores: Negro · Verde Oliva · Burdeo · Camel · Chocolate · Champaña · Diseños: Tachas (detalles metálicos alineados en bordes) · Estrella (motivo central en relieve) · Simple (líneas limpias, sin adornos) · Incluye bolsillo interior, portallaves y cierre superior.'
  },
  { 
    id: 13, nombre: 'Cartera Bolonia', categoria: 'carteras', precio: '72.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 34x42x10 cm · Colores: Negro · Verde Oliva · Burdeo · Camel · Chocolate · Champaña · Diseños: Tachas (detalles metálicos alineados en bordes) · Estrella (motivo central en relieve) · Simple (líneas limpias, sin adornos) · Incluye bolsillo interior, portallaves y cierre superior.'
  },
  { 
    id: 14, nombre: 'Cartera Verona', categoria: 'carteras', precio: '120.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 30x35x10 cm · Pieza artesanal fabricada a pedido especialmente para ti. Elige el color, diseño y detalles que quieras — cada cartera es única.'
  },
  { 
    id: 15, nombre: 'Cartera Vicenza', categoria: 'carteras', precio: '90.000', 
    foto: '', fotos: [],
    desc: 'Cartera artesanal fabricada a pedido especialmente para ti. Elige el color y detalles que mejor te representen.'
  },
  { 
    id: 16, nombre: 'Cartera Castellina', categoria: 'carteras', precio: '130.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 30x35x10 cm · Pieza artesanal fabricada a pedido especialmente para ti. Elige el color, diseño y detalles que quieras — cada cartera es única.'
  },
  { 
    id: 17, nombre: 'Cartera Vernazza', categoria: 'carteras', precio: '130.000', 
    foto: '', fotos: [],
    desc: 'Medidas: 30x35x10 cm · Pieza artesanal fabricada a pedido especialmente para ti. Elige el color, diseño y detalles que quieras — cada cartera es única.'
  },
  { 
    id: 18, nombre: 'Mochila Positano', categoria: 'carteras', precio: '100.000', 
    foto: '', fotos: [],
    desc: 'Mochila artesanal fabricada a pedido especialmente para ti. Espaciosa y funcional, con espacio para computador y todo lo que necesitas para el día a día.'
  },
  { 
    id: 19, nombre: 'Mochila Poli', categoria: 'carteras', precio: '70.000', 
    foto: '', fotos: [],
    desc: 'Mochila artesanal fabricada a pedido especialmente para ti. Espaciosa y funcional, ideal para el día a día.'
  },
  { 
    id: 20, nombre: 'Cinturón', categoria: 'accesorios', precio: '18.000', 
    foto: '', fotos: [],
    desc: 'Correas disponibles: Negro liso · Café liso · Café moro · Negro textura · Café textura · Rojo textura · Dorado · Burdeo · Café textura 2 · Precios: Correa sola $18.000 · Correa + Hebilla $27.000 · 1 Correa + 2 Hebillas $37.000 · 2 Correas + 1 Hebilla $45.000 · 2 Correas + 2 Hebillas $48.000'
  },
  { 
    id: 21, nombre: 'Hebilla', categoria: 'accesorios', precio: '12.000', 
    foto: '', fotos: [],
    desc: '20 diseños disponibles · Precio: $12.000 · Consulta por WhatsApp para ver el catálogo completo de hebillas.'
  },
];

const WHATSAPP = '+56944785614';

let categoriaActiva = 'todos';

function filtrar(cat, btn) {
  categoriaActiva = cat;
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProductos();
}

function renderProductos() {
  const grid = document.getElementById('grid');
  const lista = categoriaActiva === 'todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaActiva);

  if (lista.length === 0) {
    grid.innerHTML = '<p style="text-align:center;padding:60px;color:#7A5A3A;">Próximamente...</p>';
    return;
  }

  grid.innerHTML = lista.map(p => `
    <div class="card" onclick="abrirProducto(${p.id})">
      ${p.foto
        ? `<img class="card-img" src="${p.foto}" alt="${p.nombre}">`
        : `<div class="card-img-placeholder">📷</div>`}
      <div class="card-body">
        <div class="card-name">${p.nombre}</div>
        <div class="card-price">${p.precio ? '$ ' + p.precio : 'Consultar precio'}</div>
      </div>
    </div>
  `).join('');
}

function abrirProducto(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-nombre').textContent = p.nombre;
  document.getElementById('modal-precio').textContent = p.precio ? '$ ' + p.precio : 'Consultar precio';
  document.getElementById('modal-desc').textContent = p.desc || '';

  const fotosHTML = p.fotos && p.fotos.length > 0
    ? p.fotos.map(f => `<img src="${f}" alt="${p.nombre}">`).join('')
    : p.foto
      ? `<img src="${p.foto}" alt="${p.nombre}">`
      : '<p style="color:#7A5A3A;text-align:center;padding:40px;">📷 Fotos próximamente</p>';

  document.getElementById('modal-fotos').innerHTML = fotosHTML;

  const msg = encodeURIComponent('Hola Petra! Me interesa: ' + p.nombre);
  document.getElementById('btn-wa').href = 'https://wa.me/' + WHATSAPP + '?text=' + msg;

  document.getElementById('modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = '';
}

renderProductos();
