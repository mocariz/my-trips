import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um projeto bem simples para mostrar em um mapa os lugares que eu fui e/ou quero ir e mostrar mais informações e fotos quando sobre o local."
        canonical="https://my-trips-mocariz.vercel.app"
        openGraph={{
          url: 'https://my-trips-mocariz.vercel.app',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went or want to go and show more information and photos when clicked.',
          images: [
            {
              url: 'https://my-trips-mocariz.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
