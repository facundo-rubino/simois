export const servicios = [
  {
    id: 'corte-clasico',
    nombre: 'Corte',
    categoria: 'Clásico & Moderno',
    descripcion: 'Asesoramiento personalizado según tu fisonomía. Incluye lavado, styling y terminaciones a navaja para un acabado impecable.',
    detalles: ['Fade / Degradados', 'Tijera y Máquina'],
    imagen: '/images/servicios/corte.jpg',
    precio: '$650',
  },
  {
    id: 'barba-completa',
    nombre: 'Barba',
    categoria: 'Ritual Completo',
    descripcion: 'Perfilado y rebaje con ritual de toallas calientes. Hidratación con aceites esenciales Simois para un cuidado superior.',
    detalles: ['Toalla Caliente', 'Perfilado Navaja'],
    imagen: '/images/servicios/barba.jpg',
    precio: '$450',
  },
  {
    id: 'combo-exclusivo',
    nombre: 'Combos Exclusivos',
    categoria: 'Experiencia Full',
    descripcion: 'La experiencia definitiva. Corte + Barba + Limpieza Facial Express. Sal renovado y listo para cualquier desafío.',
    detalles: ['Servicio Premium', 'Bebida de Cortesía'],
    imagen: '/images/servicios/combo.jpg',
    precio: '$950',
    destacado: true,
  },
]

export const categorias = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'corte', nombre: 'Corte' },
  { id: 'barba', nombre: 'Barba' },
  { id: 'combos', nombre: 'Combos' },
]
