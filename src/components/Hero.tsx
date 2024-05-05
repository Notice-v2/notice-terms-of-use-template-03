'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

interface Props {
	pages: any[]
	project?: any
	accentColor?: string
}

export const Hero = () => {
	return (
		<Box bg="#661FFF" position="relative">
			<Box position="absolute" bottom={0} left={0} right={0}>
				<svg viewBox="0 0 224 12" fill="black" width="100%" preserveAspectRatio="none" style={{ marginBottom: '-1px' }}>
					<path
						fill="white"
						d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
					/>
				</svg>
			</Box>
			<Flex
				px={4}
				py={{ base: 24, md: 40 }}
				mx="auto"
				maxW={{ sm: 'xl', md: 'full', lg: 'screen-xl' }}
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box maxW={{ sm: 'xl', md: '3xl' }} textAlign={{ base: 'left', sm: 'center' }}>
					<Heading
						color="white"
						fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
						fontWeight="bold"
						lineHeight="shorter"
						mb={6}
					>
						This is a Terms of service for your Notice website
					</Heading>
					<Text color="gray.200" mb={6} fontSize={{ base: 'base', md: 'lg' }}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae. explicabo. Sed ut perspiciatis unde omnis.
					</Text>
				</Box>
			</Flex>
		</Box>
	)
}
