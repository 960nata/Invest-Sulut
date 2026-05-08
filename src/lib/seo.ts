import { Metadata } from 'next'

export function constructMetadata({
  title = "Forum Investasi SULUT",
  description = "North Sulawesi Integrated Investment Platform",
  image = "/og-image.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@investment_sulut"
    },
    icons,
    metadataBase: new URL('https://forum-investasi-sulut.id'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
