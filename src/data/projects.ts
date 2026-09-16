export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  /** Identificador usado en la URL: /proyectos/:slug */
  slug: string
  name: string
  /** Se muestra a la derecha del titulo, donde una tienda pondria el precio */
  year: string
  category: string
  /** Etiqueta opcional en la esquina de la tarjeta ("NEW", "WIP", ...) */
  tag?: string
  /** Frase corta bajo el titulo en la ficha */
  tagline: string
  /** Un elemento por parrafo; se renderizan como bloques separados. */
  description: string[]
  /** URL de YouTube: si esta presente, sustituye el marcador de imagen
   *  en la ficha por el reproductor embebido. */
  video?: string
  /** Fotos reales del proyecto. La primera es la miniatura de la grilla;
   *  en la ficha se muestran todas si el proyecto no tiene video. */
  images?: string[]
  role: string
  stack: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'aun-me-acuerdo-de-ti',
    name: 'Aun Me Acuerdo de Ti',
    year: '2026',
    category: 'Aun Me Acuerdo de Ti',
    tagline: 'Primer single del album homonimo de Alejori y Male',
    description: [
      '"Aun Me Acuerdo de Ti" es el primer single del album homonimo de Alejori y Male, un proyecto en el que lidere la conceptualizacion creativa y su universo visual, desarrollando una direccion que conectara la identidad del proyecto musical con su narrativa audiovisual.',
      'Como Director Audiovisual, lleve adelante la conceptualizacion y ejecucion del videoclip, trabajando junto a mi equipo para transformar la idea en una pieza final con recursos limitados. Desde la vision creativa hasta la resolucion de las necesidades de produccion, participe activamente en el proceso para construir una propuesta visual coherente con la esencia del album.',
      'Mi contribucion tambien se extendio al desarrollo musical del proyecto, involucrandome como escritor y colaborando en la produccion de la cancion.',
    ],
    video: 'https://youtu.be/G4zL3PJQpH0',
    role: 'Direccion Creativa · Direccion Audiovisual · Direccion de Arte · Escritor de Cancion',
    stack: ['Direccion Creativa', 'Direccion Audiovisual', 'Direccion de Arte', 'Escritor de Cancion'],
    links: [{ label: 'Ver en YouTube', url: 'https://youtu.be/G4zL3PJQpH0' }],
  },
  {
    slug: 'pa-no-pensarte',
    name: 'Pa No Pensarte',
    year: '2026',
    category: 'Aun Me Acuerdo de Ti',
    tagline: 'Direccion audiovisual y gestion de patrocinios',
    description: [
      'En este proyecto ejerci como Director Audiovisual, tambien participe en la produccion del proyecto a traves de la gestion de patrocinios, estableciendo alianzas con marcas que hicieron posible la realizacion del video.',
      'Mi contribucion combino la direccion con la gestion de recursos y oportunidades de colaboracion, contribuyendo tanto al desarrollo creativo como a la materializacion de la pieza final.',
    ],
    video: 'https://www.youtube.com/watch?v=BZY8-eJn8b8',
    role: 'Direccion Creativa · Direccion Audiovisual · Direccion de Arte · Produccion Audiovisual',
    stack: ['Direccion Creativa', 'Direccion Audiovisual', 'Direccion de Arte', 'Produccion Audiovisual'],
    links: [{ label: 'Ver en YouTube', url: 'https://www.youtube.com/watch?v=BZY8-eJn8b8' }],
  },
  {
    slug: 'se-fue-la-luz',
    name: 'Se Fue La Luz',
    year: '2026',
    category: 'Aun Me Acuerdo de Ti',
    tagline: 'Cierre de la trilogia audiovisual de los singles',
    description: [
      'Cierre de la trilogia audiovisual de los singles de "Aun Me Acuerdo de Ti".',
      'Desde la conceptualizacion hasta la ejecucion, trabaje en la construccion de una propuesta visual que conectara con la identidad del proyecto musical y diera cierre a su narrativa audiovisual.',
      'Como Director Creativo y Director de Arte, participe en el desarrollo del lenguaje visual y la construccion de la pieza. Desde la Direccion Audiovisual, lidere la ejecucion del video junto al equipo, mientras que en produccion apoye la materializacion del proyecto y la resolucion de sus necesidades.',
      'Una pieza que reune mi trabajo en direccion, narrativa visual y produccion, conectando la vision creativa del album con su cierre audiovisual.',
    ],
    video: 'https://www.youtube.com/watch?v=zbk_fnWft-o',
    role: 'Direccion Creativa · Direccion Audiovisual · Direccion de Arte · Produccion Audiovisual',
    stack: ['Direccion Creativa', 'Direccion Audiovisual', 'Direccion de Arte', 'Produccion Audiovisual'],
    links: [{ label: 'Ver en YouTube', url: 'https://www.youtube.com/watch?v=zbk_fnWft-o' }],
  },
  {
    slug: 'el-tren-se-nos-paso',
    name: 'El Tren Se Nos Paso',
    year: '2026',
    category: 'Aun Me Acuerdo de Ti',
    tagline: 'Visualizer, parte de una serie de 9 piezas del album',
    description: [
      'Parte del universo audiovisual desarrollado para el album "Aun Me Acuerdo de Ti".',
      'Este visualizer forma parte de una serie de 9 piezas audiovisuales que, junto a los 3 videoclips principales del album, construyen una narrativa visual integral para el proyecto musical.',
      'Mi participacion se centro en el desarrollo de la conceptualizacion creativa y la construccion de un lenguaje visual que conectara las distintas piezas, buscando que cada una funcionara individualmente y, al mismo tiempo, perteneciera a un universo comun.',
      'Esta pieza representa una parte de un proyecto audiovisual mas amplio, concebido para acompanar y expandir la identidad del album a traves de diferentes formatos y narrativas visuales.',
    ],
    video: 'https://www.youtube.com/watch?v=kuovwjUkXU4',
    role: 'Direccion Creativa · Direccion Audiovisual · Produccion Audiovisual',
    stack: ['Direccion Creativa', 'Direccion Audiovisual', 'Produccion Audiovisual'],
    links: [{ label: 'Ver en YouTube', url: 'https://www.youtube.com/watch?v=kuovwjUkXU4' }],
  },
  {
    slug: 'hihats-clothes-gochotru',
    name: 'Hihats Clothes x GochoTru',
    year: '2025',
    category: 'Hihats Clothes',
    tagline: 'Una colaboracion entre fotografia y moda',
    description: [
      'Una colaboracion que nace del encuentro entre fotografia y moda.',
      'En este proyecto desarrolle el universo visual de la coleccion y disene su prenda principal, trabajando desde la conceptualizacion creativa hasta la materializacion de la pieza.',
    ],
    images: ['/gochotru-1.jpg', '/gochotru-2.jpg'],
    role: 'Direccion Creativa · Direccion Audiovisual · Produccion Audiovisual',
    stack: ['Direccion Creativa', 'Direccion Audiovisual', 'Produccion Audiovisual'],
    links: [],
  },
  {
    slug: 'hihats-clothes-hermanos-hermosos',
    name: 'Hihats Clothes — Hermanos Hermosos',
    year: '2025',
    category: 'Hihats Clothes',
    tagline: 'Una coleccion sobre la adultez temprana, en dos personajes',
    description: [
      'Hermanos Hermosos es una coleccion concebida para representar la adultez temprana a traves de dos personajes animados.',
      'El proyecto fue desarrollado en colaboracion con un equipo creativo de cuatro personas que trabajo en conjunto para construir el universo de la coleccion. Desde la Direccion Creativa y Audiovisual hasta la Produccion Audiovisual, cada integrante aporto su perspectiva y habilidades para dar forma a una propuesta coherente.',
      'Como parte del desarrollo conceptual, disenamos dos prendas que representan la identidad de los personajes y traducen la idea central de la coleccion al lenguaje de la moda.',
    ],
    images: ['/hermanos-hermosos-1.jpg', '/hermanos-hermosos-2.jpg'],
    role: 'Direccion Creativa · Direccion Audiovisual · Produccion Audiovisual',
    stack: ['Direccion Creativa', 'Direccion Audiovisual', 'Produccion Audiovisual'],
    links: [],
  },
]

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Fijos, no derivados: asi los tres filtros existen en la barra aunque
// todavia no haya proyectos asignados a alguno de ellos.
export const categories = ['Aun Me Acuerdo de Ti', 'Hihats Clothes', 'Otros']
