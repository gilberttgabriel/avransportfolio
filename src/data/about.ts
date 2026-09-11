export interface AboutSection {
  title: string
  body: string
}

/** El "unico articulo" de la coleccion Sobre mi. */
export const about = {
  slug: 'avran',
  name: 'AVRAN',
  /** Ocupa el lugar del precio en la ficha */
  year: 'Caracas, VE',
  category: 'Perfil',
  tag: 'ONE OF ONE',
  tagline: 'Desarrollador frontend y disenador',
  intro:
    'Sustituye este texto por tu presentacion: quien eres, que haces y que tipo de trabajo te interesa. Dos o tres frases bastan.',
  sections: [
    {
      title: 'Perfil',
      body: 'Anos de experiencia, formacion y el tipo de producto en el que trabajas. Edita este texto en src/data/about.ts.',
    },
    {
      title: 'Habilidades',
      body: 'Vue, TypeScript, CSS, diseno de interfaz, motion. Ajusta la lista a lo que realmente usas.',
    },
    {
      title: 'Experiencia',
      body: 'Empresas, clientes o proyectos relevantes con sus anos correspondientes.',
    },
    {
      title: 'Contacto',
      body: 'Correo, LinkedIn y GitHub.',
    },
  ] as AboutSection[],
}
