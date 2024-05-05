'use client'

import { Box, Image } from '@chakra-ui/react'

interface Props {
	src: string
}

export const Logo = ({ src }: Props) => {
	return (
		<Box w="fit-content" h="fit-content" borderRadius={'50%'}>
			<Image src={src} h={25} w={25} />
		</Box>
	)
}
