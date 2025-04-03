import { Karla } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'

export const karla = Karla({
  weight: '400',
  style:"normal",
  subsets: ['latin'],
})

export const plex = IBM_Plex_Mono({
  weight:'300',
  style:"normal",
  subsets:['latin']
})



