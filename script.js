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

  const msg = encodeURIComponent('Hola Petra! Me interesa comprar el producto: ' + p.nombre);
  document.getElementById('btn-wa').href = 'https://wa.me/' + WHATSAPP + '?text=' + msg;

  document.getElementById('modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = '';
}

renderProductos();
