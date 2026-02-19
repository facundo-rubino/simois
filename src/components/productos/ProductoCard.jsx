export function ProductoCard({ producto, index = 0 }) {
  const reversed = index % 2 !== 0
  const num = String(index + 1).padStart(2, '0')
  const fallback = `https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80`

  // Normalize: support both `imagen` (string) and `imagenes` (array)
  const imagenes = producto.imagenes
    ? producto.imagenes
    : [producto.imagen || fallback]

  return (
    <div className={`flex flex-col ${
      reversed ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-stretch min-h-[480px] md:min-h-[560px]`}>

      {/* Image panel */}
      <div className="w-full md:w-[58%] bg-simois-light dark:bg-simois-dark/40 overflow-hidden relative">
        {imagenes.length > 1 ? (
          // Two images: first slightly larger, both overlapping diagonally
          <div className="w-full h-full flex items-center justify-center p-8 md:p-12 gap-4 md:gap-6" style={{ minHeight: '340px' }}>
            <div className="relative w-1/2 aspect-[3/4] -rotate-3 shadow-xl rounded-lg overflow-hidden shrink-0 transition-transform duration-500 hover:-rotate-1 hover:scale-105">
              <img
                src={imagenes[0]}
                alt={`${producto.nombre} - vista 1`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative w-1/2 aspect-[3/4] rotate-3 shadow-xl rounded-lg overflow-hidden shrink-0 transition-transform duration-500 hover:rotate-1 hover:scale-105 mt-8">
              <img
                src={imagenes[1]}
                alt={`${producto.nombre} - vista 2`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          // Single image
          <img
            src={imagenes[0]}
            alt={producto.nombre}
            className="w-full h-full object-contain p-14 md:p-20 transition-transform duration-700 hover:scale-[1.04]"
            loading="lazy"
            style={{ minHeight: '340px' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="w-full md:w-[42%] flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white dark:bg-simois-dark relative overflow-hidden">
        {/* Decorative index number */}
        <span
          className="absolute -top-2 right-4 font-bebas leading-none select-none pointer-events-none text-simois-dark/[0.04] dark:text-white/[0.05]"
          style={{ fontSize: 'clamp(100px, 12vw, 160px)' }}
          aria-hidden
        >
          {num}
        </span>

        <p className="text-simois-orange font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-4 relative">
          {producto.categoria}
        </p>
        <h3 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-simois-dark dark:text-simois-light leading-[0.9] mb-6 relative">
          {producto.nombre}
        </h3>
        <div className="w-10 h-px bg-simois-orange mb-6 relative" />
        <p className="text-simois-dark/65 dark:text-white/65 text-base leading-relaxed max-w-sm relative mb-6">
          {producto.descripcion}
        </p>
        {producto.badges && (
          <div className="flex flex-wrap gap-2 relative">
            {producto.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-simois-dark/5 dark:bg-white/10 text-simois-dark/70 dark:text-white/70 text-xs font-medium rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
