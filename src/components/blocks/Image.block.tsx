'use client'

import { Flex, Image } from '@chakra-ui/react'

interface Props {
	block: any
}

export function ImageBlock({ block }: Props) {
	const { src } = block.attrs

	// 7/4 is the aspect of AI generated images (DALL-E 3)
	return (
		<Flex w="100%" py={'8px'} justify={'center'}>
			<Image maxW={'100%'} src={src} aspectRatio={7 / 4} />
		</Flex>
	)
}
