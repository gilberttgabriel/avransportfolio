/** Extrae el ID de 11 caracteres de una URL de YouTube en cualquiera de sus
 *  formatos habituales (youtu.be, watch?v=, embed/, con o sin parametros
 *  extra como &list= o &feature=). Devuelve null si no matchea. */
export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,
  )
  return match?.[1] ?? null
}
