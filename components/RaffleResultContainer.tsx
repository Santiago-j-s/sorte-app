import { useRaffleStore } from '@/stores/raffleStore'
import { Box } from '@chakra-ui/react'
import { Baloo_2 } from 'next/font/google'
import { type RefObject } from 'react'

const baloo = Baloo_2({ subsets: ['latin'], weight: ['400', '700'] })

export default function RaffleResultContainer({
  children,
  resRef
}: {
  children: React.ReactNode
  resRef: RefObject<HTMLDivElement>
}) {
  const { textColor, backgroundColor } = useRaffleStore()
  return (
    <Box
      ref={resRef}
      backgroundColor='white'
      className={`transform scale-[.8] lg:scale-100 w-[400px] aspect-[1/1.5] mt-10 md:mt-0 shadow-lg text-${textColor} bg-${backgroundColor} ${baloo.className}`}
      fontSize='10px'
    >
      {children}
    </Box>
  )
}
