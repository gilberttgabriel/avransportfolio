export interface ContactChannel {
  label: string
  value: string
  url: string
}

/** Sustituye los valores por tus datos reales. */
export const contact = {
  heading: 'Hablemos',
  intro:
    'Disponible para proyectos freelance y colaboraciones. La via mas rapida es el correo.',
  channels: [
    { label: 'Correo', value: 'tu@correo.com', url: 'mailto:tu@correo.com' },
    { label: 'Instagram', value: '@avran', url: '#' },
    { label: 'GitHub', value: 'github.com/avran', url: '#' },
    { label: 'LinkedIn', value: 'in/avran', url: '#' },
  ] as ContactChannel[],
  location: 'Caracas, Venezuela',
}
