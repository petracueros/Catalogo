var productos = [
  { id: 1, nombre: 'Agenda Grande', categoria: 'accesorios', precio: '20.000', foto: '', fotos: [], desc: 'Medidas: 17x23 cm' },
  { id: 2, nombre: 'Agenda Chica', categoria: 'accesorios', precio: '15.000', foto: '', fotos: [], desc: 'Medidas: 13x16 cm' },
  { id: 3, nombre: 'Neceser Grande', categoria: 'neceser', precio: '30.000', foto: '', fotos: [], desc: 'Medidas: 23x12x10 cm' },
  { id: 4, nombre: 'Neceser Chico', categoria: 'neceser', precio: '25.000', foto: '', fotos: [], desc: 'Medidas: 21x10x8 cm' },
  { id: 5, nombre: 'Cosmetiquero', categoria: 'neceser', precio: '32.000', foto: '', fotos: [], desc: 'Medidas: 23x19x10 cm' },
  { id: 6, nombre: 'Billetera Grande', categoria: 'billeteras', precio: '26.000', foto: '', fotos: [], desc: 'Medidas: 18x10 cm' },
  { id: 7, nombre: 'Billetera Chica', categoria: 'billeteras', precio: '23.000', foto: '', fotos: [], desc: 'Medidas: 12x9 cm' },
  { id: 8, nombre: 'Billetera Hombre', categoria: 'billeteras', precio: '18.000', foto: '', fotos: [], desc: 'Medidas: 9x11 cm' },
  { id: 9, nombre: 'Porta Pasaporte', categoria: 'accesorios', precio: '12.000', foto: '', fotos: [], desc: 'Medidas: 14x10 cm' },
  { id: 10, nombre: 'Tarjeteros', categoria: 'accesorios', precio: '10.000', foto: '', fotos: [], desc: 'Medidas: 10x8 cm' }
];

var WHATSAPP = '+56944785614';
var categoriaActiva = 'todos';

function filtrar(cat, btn) {
  categoriaActiva = cat;
  document.querySelectorAll('nav button').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderProductos();
}

function renderProductos() {
  var grid = document.getElementById('grid');
  var lista = categoriaActiva === 'todos' ? productos : productos.filter(function(p) { return p.categoria === categoriaActiva; });

  if (lista.length === 0) {
    grid.innerHTML = '<p style="text-align:center;padding:60px;color:#7A5A3A;">Proximamente...</p>';
    return;
  }

  grid.innerHTML = lista.map(function(p) {
    var img = p.foto ? '<img class="card-img" src="' + p.foto + '" alt="' + p.nombre + '">' : '<div class="card-img-placeholder">📷</div>';
    var precio = p.precio ? '$ ' + p.precio : 'Consultar precio';
    return '<div class="card" onclick="abrirProducto(' + p.id + ')">' + img + '<div class="card-body"><div class="card-name">' + p.nombre + '</div><div class="card-price">' + precio + '</div></div></div>';
  }).join('');
}

function abrirProducto(id) {
  var p = null;
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].id === id) { p = productos[i]; break; }
  }
  if (!p) return;

  document.getElementById('modal-nombre').textContent = p.nombre;
  document.getElementById('modal-precio').textContent = p.precio ? '$ ' + p.precio : 'Consultar precio';
  document.getElementById('modal-desc').textContent = p.desc || '';

  var fotosHTML = '';
  if (p.fotos && p.fotos.length > 0) {
    for (var j = 0; j < p.fotos.length; j++) {
      fotosHTML += '<img src="' + p.fotos[j] + '" alt="' + p.nombre + '">';
    }
  } else if (p.foto) {
    fotosHTML = '<img src="' + p.foto + '" alt="' + p.nombre + '">';
  } else {
    fotosHTML = '<p style="color:#7A5A3A;text-align:center;padding:40px;">📷 Fotos proximamente</p>';
  }

  document.getElementById('modal-fotos').innerHTML = fotosHTML;
  document.getElementById('btn-wa').href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent('Hola! Me interesa: ' + p.nombre);
  document.getElementById('modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = '';
}

renderProductos();
