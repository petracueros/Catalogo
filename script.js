const productos = [
  { 
    id: 1, nombre: 'Agenda Grande', categoria: 'accesorios', precio: '20.000', 
    foto: 'IMG_7522.jpg',
    fotos: ['IMG_6175.JPG','IMG_7522.jpg','IMG_7524.jpg','IMG_7528.jpg','IMG_7531.jpg','IMG_7537.jpg'],
    desc: 'Agenda artesanal en cuero, ideal para organizar tus días con estilo.\nMedidas: 17x23 cm\nMaterial: 100% Cuero\nColores: Café oscuro · Café claro'
  },
  { 
    id: 2, nombre: 'Agenda Pequeña', categoria: 'accesorios', precio: '15.000', 
    foto: 'IMG_1569.jpg',
    fotos: ['IMG_1569.jpg','IMG_1570.jpg','IMG_1571.jpg','IMG_1572.jpg','IMG_1573.jpg','IMG_1574.jpg','IMG_1575.jpg','IMG_6200.JPG'],
    desc: 'Agenda compacta en cuero, perfecta para llevar contigo a todos lados.\nMedidas: 13x16,5 cm\nMaterial: 100% Cuero\nColores: Café oscuro · Café claro'
  },
  { 
    id: 3, nombre: 'Neceser Grande', categoria: 'neceser', precio: '30.000', 
    foto: 'IMG_7497.jpg',
    fotos: ['IMG_7497.jpg','IMG_7499.jpg','IMG_7500.jpg','IMG_7501.jpg','IMG_7502.jpg'],
    desc: 'Neceser espacioso en cuero, ideal para viajes y uso diario.\nMedidas: 23x12x10 cm\nMaterial: 100% Cuero\nColor: Café claro'
  },
  { 
    id: 4, nombre: 'Neceser Pequeño', categoria: 'neceser', precio: '25.000', 
    foto: 'IMG_7482.jpg',
    fotos: ['IMG_6235.JPG','IMG_6239.JPG','IMG_7482.jpg','IMG_7483.jpg','IMG_7486.jpg','IMG_7487.jpg','IMG_7489.jpg','IMG_7491.jpg','IMG_7496.jpg'],
    desc: 'Neceser compacto en cuero, perfecto para tus artículos esenciales.\nMedidas: 21x10x8 cm\nMaterial: 100% Cuero\nColores: Café oscuro · Café claro'
  },
  { 
    id: 5, nombre: 'Cosmetiquero', categoria: 'neceser', precio: '32.000', 
    foto: 'IMG_7512.jpg',
    fotos: ['IMG_7505.jpg','IMG_7507.jpg','IMG_7508.jpg','IMG_7509.jpg','IMG_7511.jpg','IMG_7512.jpg','IMG_7513.jpg'],
    desc: 'Cosmetiquero en cuero con diseños llamativos, ideal para guardar tus productos de belleza.\nMedidas: 23,5x19,5x10 cm\nMaterial: 100% Cuero\nColores: Dorado · Animal print'
  },
  { 
    id: 6, nombre: 'Billetera Grande', categoria: 'billeteras', precio: '26.000', 
    foto: 'IMG_1576.jpg',
    fotos: ['IMG_1576.jpg','IMG_1577.jpg','IMG_1578.jpg','IMG_1579.jpg','IMG_1580.jpg','IMG_1581.jpg','IMG_1582.jpg','IMG_1583.jpg'],
    desc: 'Billetera espaciosa en cuero croco, con múltiples compartimentos para tarjetas y billetes.\nMedidas: 18,5x10 cm\nMaterial: Cuero croco\nColor: Burdeo / Vino tinto'
  },
  { 
    id: 7, nombre: 'Billetera Pequeña', categoria: 'billeteras', precio: '23.000', 
    foto: 'IMG_1561.jpg',
    fotos: ['IMG_1561.jpg','IMG_1562.jpg','IMG_1563.jpg','IMG_1564.jpg','IMG_1565.jpg','IMG_1566.jpg','IMG_1567.jpg','IMG_1568.jpg'],
    desc: 'Billetera compacta en cuero croco, práctica y elegante.\nMedidas: 12x9,5 cm\nMaterial: Cuero croco\nColor: Burdeo / Vino tinto'
  },
  { 
    id: 8, nombre: 'Billetera Hombre', categoria: 'billeteras', precio: '18.000', 
    foto: 'IMG_7477.jpg',
    fotos: ['IMG_6318.JPG','IMG_6326.JPG','IMG_7463.jpg','IMG_7468.jpg','IMG_7472.jpg','IMG_7477.jpg'],
    desc: 'Billetera de hombre en cuero, diseño clásico y resistente.\nMedidas: 9x11 cm\nMaterial: 100% Cuero\nColores: Café oscuro · Café claro · Café con relieve'
  },
  { 
    id: 9, nombre: 'Porta Pasaporte', categoria: 'accesorios', precio: '12.000', 
    foto: 'IMG_7450.jpg',
    fotos: ['IMG_6284_2.jpg','IMG_6303.JPG','IMG_7443.jpg','IMG_7445.jpg','IMG_7450.jpg','IMG_7461.jpg'],
    desc: 'Porta pasaporte en cuero, protege tus documentos con estilo.\nMedidas: 14x10 cm\nMaterial: 100% Cuero\nColores: Café chocolate · Negro liso · Café canela · Café terracota · Negro textura · Café oscuro'
  },
  { 
    id: 10, nombre: 'Tarjeteros', categoria: 'accesorios', precio: '10.000', 
    foto: 'IMG_1584.JPG',
    fotos: ['IMG_1584.JPG','IMG_1585.JPG','IMG_1586.JPG','IMG_1587.JPG'],
    desc: 'Tarjetero en cuero, práctico y delgado para llevar tus tarjetas siempre a mano.\nMedidas: 10x8 cm\nMaterial: 100% Cuero\nColores: Café oscuro · Café chocolate · Café claro'
  },
  { 
    id: 11, nombre: 'Roma', categoria: 'carteras', precio: '52.000', 
    foto: 'IMG_7642.jpg',
    fotos: ['IMG_4696.JPG','IMG_4710.JPG','IMG_4758.JPG','IMG_4783.JPG','IMG_7613.JPG','IMG_7642.jpg','IMG_7746.jpg','IMG_7751.jpg','IMG_7757.jpg','IMG_7758.jpg','IMG_7762.jpg','IMG_7763.jpg','IMG_7766.jpg','IMG_7768.JPG'],
    desc: 'Cartera tote espaciosa y elegante, ideal para el día a día.\nMedidas: 30x27x10 cm\nColores: Negro · Verde Oliva · Burdeo · Camel · Chocolate · Champaña\nDiseños: Tachas (detalles metálicos alineados en bordes) · Estrella (motivo central en relieve) · Simple (líneas limpias, sin adornos)\nIncluye: bolsillo interior, portallaves y cierre superior.'
  },
  { 
    id: 12, nombre: 'Sicilia', categoria: 'carteras', precio: '62.000', 
    foto: 'IMG_7736_2.jpg',
    fotos: ['IMG_4618.JPG','IMG_4656.JPG','IMG_7542.jpg','IMG_7545.jpg','IMG_7601.jpg','IMG_7606.JPG','IMG_7612.jpg','IMG_7613.JPG','IMG_7636.jpg','IMG_7642.jpg','IMG_7647.JPG','IMG_7653.jpg','IMG_7655.jpg','IMG_7662.jpg','IMG_7664.JPG','IMG_7667.JPG','IMG_7736_2.jpg','IMG_7738_2.jpg','IMG_7740_2.jpg','IMG_7742_2.jpg','IMG_7774.jpg','IMG_7778.jpg','IMG_7780.jpg','IMG_7783.jpg','IMG_7807.jpg'],
    desc: 'Cartera tote de mayor tamaño, ideal para llevar todo lo que necesitas.\nMedidas: 36x30x10 cm\nColores: Negro · Verde Oliva · Burdeo · Camel · Chocolate · Champaña\nDiseños: Tachas (detalles metálicos alineados en bordes) · Estrella (motivo central en relieve) · Simple (líneas limpias, sin adornos)\nIncluye: bolsillo interior, portallaves y cierre superior.'
  },
  { 
    id: 13, nombre: 'Bolonia', categoria: 'carteras', precio: '72.000', 
    foto: 'IMG_7807.jpg',
    fotos: ['IMG_4793.JPG','IMG_4811.JPG','IMG_7551.jpg','IMG_7553.jpg','IMG_7561.jpg','IMG_7567.jpg','IMG_7577.jpg','IMG_7578.jpg','IMG_7583.jpg','IMG_7587.jpg','IMG_7593.jpg','IMG_7598.jpg','IMG_7600.jpg','IMG_7601.jpg','IMG_7623.jpg','IMG_7630.jpg','IMG_7802.jpg','IMG_7806.jpg','IMG_7807.jpg'],
    desc: 'Cartera tote grande, perfecta para el trabajo, la universidad o el día a día.\nMedidas: 34x42x10 cm\nColores: Negro · Verde Oliva · Burdeo · Camel · Chocolate · Champaña\nDiseños: Tachas (detalles metálicos alineados en bordes) · Estrella (motivo central en relieve) · Simple (líneas limpias, sin adornos)\nIncluye: bolsillo interior, portallaves y cierre superior.'
  },
  { 
    id: 14, nombre: 'Verona', categoria: 'carteras', precio: '120.000', 
    foto: 'IMG_7812.jpg',
    fotos: ['IMG_7812.jpg','IMG_7815.jpg','IMG_7819.jpg'],
    desc: 'Cartera elegante y sofisticada, pieza artesanal fabricada a pedido especialmente para ti.\nMedidas: 30x35x10 cm\nElige el color, diseño y detalles que quieras — cada cartera es única.'
  },
  { 
    id: 15, nombre: 'Vicenza', categoria: 'carteras', precio: '90.000', 
    foto: 'IMG_7726.jpg',
    fotos: ['IMG_7726.jpg','IMG_7727.JPG','IMG_7730.jpg','IMG_7731.jpg'],
    desc: 'Cartera artesanal fabricada a pedido especialmente para ti.\nElige el color y detalles que mejor te representen.'
  },
  { 
    id: 16, nombre: 'Castellina', categoria: 'carteras', precio: '130.000', 
    foto: 'IMG_7785.jpg',
    fotos: ['IMG_7785.jpg','IMG_7789.jpg','IMG_7792.jpg','IMG_7794.jpg','IMG_7797.jpg','IMG_7800.jpg'],
    desc: 'Cartera de lujo, pieza artesanal fabricada a pedido especialmente para ti.\nMedidas: 30x35x10 cm\nElige el color, diseño y detalles que quieras — cada cartera es única.'
  },
  { 
    id: 17, nombre: 'Verenna', categoria: 'carteras', precio: '130.000', 
    foto: 'IMG_7678.jpg',
    fotos: ['IMG_7670.jpg','IMG_7672.JPG','IMG_7678.jpg','IMG_7680.jpg','IMG_7681.JPG','IMG_7682.JPG','IMG_7686.jpg'],
    desc: 'Cartera exclusiva, pieza artesanal fabricada a pedido especialmente para ti.\nMedidas: 30x35x10 cm\nElige el color, diseño y detalles que quieras — cada cartera es única.'
  },
  { 
    id: 18, nombre: 'Mochila Positano', categoria: 'carteras', precio: '100.000', 
    foto: 'IMG_7690.jpg',
    fotos: ['IMG_7689.JPG','IMG_7690.jpg','IMG_7695.JPG','IMG_7696.jpg','IMG_7701.jpg','IMG_7705.JPG'],
    desc: 'Mochila artesanal fabricada a pedido especialmente para ti.\nEspaciosa y funcional, con espacio para computador y todo lo que necesitas para el día a día.'
  },
  { 
    id: 19, nombre: 'Mochila Poli', categoria: 'carteras', precio: '70.000', 
    foto: 'IMG_7706_2.jpg',
    fotos: ['IMG_7706_2.jpg','IMG_7710_2.JPG','IMG_7711_2.JPG','IMG_7712_2.JPG','IMG_7713_2.JPG','IMG_7714_2.JPG','IMG_7716_2.jpg','IMG_7722_2.jpg'],
    desc: 'Mochila artesanal fabricada a pedido especialmente para ti.\nEspaciosa y funcional, ideal para el día a día.'
  },
  { 
    id: 20, nombre: 'Cinturón', categoria: 'cinturones', precio: '18.000', 
    foto: 'IMG_7828.jpg',
    fotos: ['IMG_7828.jpg','IMG_7836.jpg','IMG_7842.jpg','IMG_7844.jpg','IMG_7850.jpg','IMG_7857.jpg','IMG_7863.jpg'],
    desc: 'Cinturón artesanal en cuero, personalizable con distintas correas y hebillas.\nCorreas disponibles: Negro liso · Café liso · Café moro · Negro textura · Café textura · Rojo textura · Dorado · Burdeo · Café textura 2\nPrecios: Correa sola $18.000 · Correa + Hebilla $27.000 · 1 Correa + 2 Hebillas $37.000 · 2 Correas + 1 Hebilla $45.000 · 2 Correas + 2 Hebillas $48.000'
  },
  { 
    id: 21, nombre: 'Hebilla', categoria: 'cinturones', precio: '12.000', 
    foto: 'IMG_7853.jpg',
    fotos: ['IMG_7853.jpg','IMG_7855.jpg'],
    desc: 'Hebilla de cuero, ideal para renovar o combinar con tu cinturón.\n20 diseños disponibles\nPrecio: $12.000\nConsulta por WhatsApp para ver el catálogo completo de hebillas.'
  },
  { 
    id: 22, nombre: 'Caballo Cartera', categoria: 'accesorios', precio: '7.000', 
    foto: 'IMG_7872.jpg',
    fotos: ['IMG_7872.jpg','IMG_7874.jpg','IMG_7877.jpg'],
    desc: 'Dije de caballo en cuero, tejido a mano.\nUn detalle artesanal para personalizar tu cartera o mochila y darle un toque único.'
  },
  { 
    id: 23, nombre: 'Guantes Parrilleros', categoria: 'accesorios', precio: '20.000', 
    foto: 'IMG_7864.jpg',
    fotos: ['IMG_6277.JPG','IMG_7864.jpg','IMG_7870.jpg'],
    desc: 'Guantes de cuero, resistentes al calor. Cómodos y duraderos, ideales para asados y parrillas.\nColores: Café oscuro · Café claro'
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
      <div class="card-img-wrap">
        ${p.foto
          ? `<img class="card-img" src="${p.foto}" alt="${p.nombre}">`
          : `<div class="card-img-placeholder">📷</div>`}
        ${p.fotos && p.fotos.length > 1
          ? `<div class="card-vermas">Ver más fotos ›</div>`
          : ''}
      </div>
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
  document.getElementById('modal-desc').innerHTML = (p.desc || '').replace(/\n/g, '<br>');

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
