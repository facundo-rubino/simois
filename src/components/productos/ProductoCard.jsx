export function ProductoCard({ producto }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all text-center group">
      {/* Image */}
      <div className="aspect-square bg-simois-light rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={producto.imagen || `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80`}
          alt={producto.nombre}
          className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <h3 className="font-bebas text-xl text-simois-dark mb-1">
        {producto.nombre}
      </h3>
      <p className="text-simois-orange text-xs font-medium uppercase tracking-wider mb-3">
        {producto.categoria}
      </p>
      <p className="text-simois-dark/60 text-sm leading-relaxed">
        {producto.descripcion}
      </p>
    </div>
  )
}
