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
  description: string
  role: string
  stack: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'portfolio-avran',
    name: 'Portfolio AVRAN',
    year: '2026',
    category: 'Web',
    tag: 'NEW',
    tagline: 'Portfolio personal con intro animada',
    description:
      'Sitio personal construido en Vue 3 y Vite. La entrada es una secuencia animada en SVG que dibuja un grafiti sobre el retrato, seguida de una apertura tipo iris sobre video a pantalla completa.',
    role: 'Diseno y desarrollo',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'SVG'],
    links: [{ label: 'Repositorio', url: '#' }],
  },
  {
    slug: 'proyecto-dos',
    name: 'Proyecto Dos',
    year: '2025',
    category: 'Web',
    tagline: 'Descripcion corta del proyecto',
    description:
      'Sustituye este texto por la descripcion real del proyecto: que problema resuelve, como lo abordaste y que resultado tuvo.',
    role: 'Desarrollo frontend',
    stack: ['Vue', 'CSS'],
    links: [],
  },
  {
    slug: 'proyecto-tres',
    name: 'Proyecto Tres',
    year: '2025',
    category: 'Diseno',
    tagline: 'Descripcion corta del proyecto',
    description:
      'Sustituye este texto por la descripcion real del proyecto: que problema resuelve, como lo abordaste y que resultado tuvo.',
    role: 'Direccion de arte',
    stack: ['Figma', 'Illustrator'],
    links: [],
  },
  {
    slug: 'proyecto-cuatro',
    name: 'Proyecto Cuatro',
    year: '2024',
    category: 'Motion',
    tagline: 'Descripcion corta del proyecto',
    description:
      'Sustituye este texto por la descripcion real del proyecto: que problema resuelve, como lo abordaste y que resultado tuvo.',
    role: 'Animacion',
    stack: ['After Effects'],
    links: [],
  },
  {
    slug: 'proyecto-cinco',
    name: 'Proyecto Cinco',
    year: '2024',
    category: 'Web',
    tagline: 'Descripcion corta del proyecto',
    description:
      'Sustituye este texto por la descripcion real del proyecto: que problema resuelve, como lo abordaste y que resultado tuvo.',
    role: 'Fullstack',
    stack: ['Node', 'Postgres'],
    links: [],
  },
  {
    slug: 'proyecto-seis',
    name: 'Proyecto Seis',
    year: '2023',
    category: 'Diseno',
    tagline: 'Descripcion corta del proyecto',
    description:
      'Sustituye este texto por la descripcion real del proyecto: que problema resuelve, como lo abordaste y que resultado tuvo.',
    role: 'Identidad visual',
    stack: ['Figma'],
    links: [],
  },
]

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const categories = [...new Set(projects.map((p) => p.category))].sort()
