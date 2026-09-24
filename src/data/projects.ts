export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  /** Identificador usado en la URL: /proyectos/:slug */
  slug: string
  name: string
  /** Se muestra a la derecha del título, donde una tienda pondría el precio */
  year: string
  category: string
  /** Etiqueta opcional en la esquina de la tarjeta ("NEW", "WIP", ...) */
  tag?: string
  /** Frase corta bajo el título en la ficha */
  tagline: string
  /** Un elemento por párrafo; se renderizan como bloques separados. */
  description: string[]
  /** URL de YouTube: si está presente, sustituye el marcador de imagen
   *  en la ficha por el reproductor embebido. */
  video?: string
  /** Fotos reales del proyecto. La primera es la miniatura de la grilla;
   *  en la ficha se muestran todas si el proyecto no tiene video. */
  images?: string[]
  /** 'contain' para logos/letterings panorámicos que no deben recortarse;
   *  por defecto 'cover' (fotografía). */
  imageFit?: 'cover' | 'contain'
  role: string
  stack: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'aun-me-acuerdo-de-ti',
    name: 'Aún Me Acuerdo de Ti',
    year: '2026',
    category: 'Aún Me Acuerdo de Ti',
    tagline: 'Primer single del álbum homónimo de Alejori y Male',
    description: [
      '"Aún Me Acuerdo de Ti" es el primer single del álbum homónimo de Alejori y Male, un proyecto en el que lideré la conceptualización creativa y su universo visual, desarrollando una dirección que conectara la identidad del proyecto musical con su narrativa audiovisual.',
      'Como Director Audiovisual, llevé adelante la conceptualización y ejecución del videoclip, trabajando junto a mi equipo para transformar la idea en una pieza final con recursos limitados. Desde la visión creativa hasta la resolución de las necesidades de producción, participé activamente en el proceso para construir una propuesta visual coherente con la esencia del álbum.',
      'Mi contribución también se extendió al desarrollo musical del proyecto, involucrándome como escritor y colaborando en la producción de la canción.',
    ],
    images: ['/aun-me-acuerdo-de-ti.png'],
    imageFit: 'contain',
    video: 'https://youtu.be/G4zL3PJQpH0',
    role: 'Dirección Creativa · Dirección Audiovisual · Dirección de Arte · Escritor de Canción',
    stack: ['Dirección Creativa', 'Dirección Audiovisual', 'Dirección de Arte', 'Escritor de Canción'],
    links: [{ label: 'Ver en YouTube', url: 'https://youtu.be/G4zL3PJQpH0' }],
  },
  {
    slug: 'pa-no-pensarte',
    name: 'Pa No Pensarte',
    year: '2026',
    category: 'Aún Me Acuerdo de Ti',
    tagline: 'Dirección audiovisual y gestión de patrocinios',
    description: [
      'En este proyecto ejercí como Director Audiovisual, también participé en la producción del proyecto a través de la gestión de patrocinios, estableciendo alianzas con marcas que hicieron posible la realización del video.',
      'Mi contribución combinó la dirección con la gestión de recursos y oportunidades de colaboración, contribuyendo tanto al desarrollo creativo como a la materialización de la pieza final.',
    ],
    images: ['/pa-no-pensarte.png'],
    imageFit: 'contain',
    video: 'https://www.youtube.com/watch?v=BZY8-eJn8b8',
    role: 'Dirección Creativa · Dirección Audiovisual · Dirección de Arte · Producción Audiovisual',
    stack: ['Dirección Creativa', 'Dirección Audiovisual', 'Dirección de Arte', 'Producción Audiovisual'],
    links: [{ label: 'Ver en YouTube', url: 'https://www.youtube.com/watch?v=BZY8-eJn8b8' }],
  },
  {
    slug: 'se-fue-la-luz',
    name: 'Se Fue La Luz',
    year: '2026',
    category: 'Aún Me Acuerdo de Ti',
    tagline: 'Cierre de la trilogía audiovisual de los singles',
    description: [
      'Cierre de la trilogía audiovisual de los singles de "Aún Me Acuerdo de Ti".',
      'Desde la conceptualización hasta la ejecución, trabajé en la construcción de una propuesta visual que conectara con la identidad del proyecto musical y diera cierre a su narrativa audiovisual.',
      'Como Director Creativo y Director de Arte, participé en el desarrollo del lenguaje visual y la construcción de la pieza. Desde la Dirección Audiovisual, lideré la ejecución del video junto al equipo, mientras que en producción apoyé la materialización del proyecto y la resolución de sus necesidades.',
      'Una pieza que reúne mi trabajo en dirección, narrativa visual y producción, conectando la visión creativa del álbum con su cierre audiovisual.',
    ],
    images: ['/se-fue-la-luz.png'],
    imageFit: 'contain',
    video: 'https://www.youtube.com/watch?v=zbk_fnWft-o',
    role: 'Dirección Creativa · Dirección Audiovisual · Dirección de Arte · Producción Audiovisual',
    stack: ['Dirección Creativa', 'Dirección Audiovisual', 'Dirección de Arte', 'Producción Audiovisual'],
    links: [{ label: 'Ver en YouTube', url: 'https://www.youtube.com/watch?v=zbk_fnWft-o' }],
  },
  {
    slug: 'el-tren-se-nos-paso',
    name: 'El Tren Se Nos Pasó',
    year: '2026',
    category: 'Aún Me Acuerdo de Ti',
    tagline: 'Visualizer, parte de una serie de 9 piezas del álbum',
    description: [
      'Parte del universo audiovisual desarrollado para el álbum "Aún Me Acuerdo de Ti".',
      'Este visualizer forma parte de una serie de 9 piezas audiovisuales que, junto a los 3 videoclips principales del álbum, construyen una narrativa visual integral para el proyecto musical.',
      'Mi participación se centró en el desarrollo de la conceptualización creativa y la construcción de un lenguaje visual que conectara las distintas piezas, buscando que cada una funcionara individualmente y, al mismo tiempo, perteneciera a un universo común.',
      'Esta pieza representa una parte de un proyecto audiovisual más amplio, concebido para acompañar y expandir la identidad del álbum a través de diferentes formatos y narrativas visuales.',
    ],
    images: ['/el-tren-se-nos-paso.png'],
    imageFit: 'contain',
    video: 'https://www.youtube.com/watch?v=kuovwjUkXU4',
    role: 'Dirección Creativa · Dirección Audiovisual · Producción Audiovisual',
    stack: ['Dirección Creativa', 'Dirección Audiovisual', 'Producción Audiovisual'],
    links: [{ label: 'Ver en YouTube', url: 'https://www.youtube.com/watch?v=kuovwjUkXU4' }],
  },
  {
    slug: 'hihats-clothes-gochotru',
    name: 'Hihats Clothes x GochoTru',
    year: '2025',
    category: 'Hihats Clothes',
    tagline: 'Una colaboración entre fotografía y moda',
    description: [
      'Una colaboración que nace del encuentro entre fotografía y moda.',
      'En este proyecto desarrollé el universo visual de la colección y diseñé su prenda principal, trabajando desde la conceptualización creativa hasta la materialización de la pieza.',
    ],
    images: ['/gochotru-1.jpg', '/gochotru-2.jpg'],
    role: 'Dirección Creativa · Dirección Audiovisual · Producción Audiovisual',
    stack: ['Dirección Creativa', 'Dirección Audiovisual', 'Producción Audiovisual'],
    links: [],
  },
  {
    slug: 'hihats-clothes-hermanos-hermosos',
    name: 'Hihats Clothes — Hermanos Hermosos',
    year: '2025',
    category: 'Hihats Clothes',
    tagline: 'Una colección sobre la adultez temprana, en dos personajes',
    description: [
      'Hermanos Hermosos es una colección concebida para representar la adultez temprana a través de dos personajes animados.',
      'El proyecto fue desarrollado en colaboración con un equipo creativo de cuatro personas que trabajó en conjunto para construir el universo de la colección. Desde la Dirección Creativa y Audiovisual hasta la Producción Audiovisual, cada integrante aportó su perspectiva y habilidades para dar forma a una propuesta coherente.',
      'Como parte del desarrollo conceptual, diseñamos dos prendas que representan la identidad de los personajes y traducen la idea central de la colección al lenguaje de la moda.',
    ],
    images: ['/hermanos-hermosos-1.jpg', '/hermanos-hermosos-2.jpg'],
    role: 'Dirección Creativa · Dirección Audiovisual · Producción Audiovisual',
    stack: ['Dirección Creativa', 'Dirección Audiovisual', 'Producción Audiovisual'],
    links: [],
  },
]

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Fijos, no derivados: así los tres filtros existen en la barra aunque
// todavía no haya proyectos asignados a alguno de ellos.
export const categories = ['Aún Me Acuerdo de Ti', 'Hihats Clothes', 'Otros']
