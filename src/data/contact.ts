export interface ContactChannel {
  label: string
  value: string
  url: string
}

export const contact = {
  heading: 'Hablemos',
  intro:
    'Disponible para proyectos freelance y colaboraciones. La vía más rápida es el correo.',
  channels: [
    {
      label: 'Correo',
      value: 'avranrios17@gmail.com',
      url: 'mailto:avranrios17@gmail.com',
    },
    { label: 'Instagram', value: '@avranrios', url: 'https://instagram.com/avranrios' },
    { label: 'WhatsApp', value: '+58 412-7164899', url: 'https://wa.me/584127164899' },
    {
      label: 'LinkedIn',
      value: 'in/abraham-rios-sequera',
      url: 'https://linkedin.com/in/abraham-rios-sequera-394433324',
    },
  ] as ContactChannel[],
  location: 'Caracas, Venezuela',
}
