'use client'

import { Box, Flex, Heading, keyframes, Text } from '@chakra-ui/react'
import { lightenDarkenColor } from '../utils/theme'

interface Props {
	project?: any
}

export const Hero = ({ project }: Props) => {
	return (
		<Flex
			bg="#0040C1"
			h={{ sm: '50vh', md: '60vh', lg: '80vh' }}
			justifyContent="center"
			alignItems="center"
			position="relative"
			overflow="hidden"
		>
			<Flex
				px={4}
				py={{ base: 24, md: 40 }}
				mx="auto"
				maxW={{ sm: 'xl', md: 'full', lg: 'screen-xl' }}
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
			>
				<Box maxW={{ sm: 'xl', md: '3xl' }} textAlign={{ base: 'center', sm: 'center' }}>
					<Heading
						color="white"
						fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
						fontWeight="bold"
						lineHeight="shorter"
						mb={6}
					>
						{project?.subtitle}
					</Heading>
					<Text color="gray.200" mb={6} fontSize={{ base: 'base', md: 'lg' }}>
						{project?.description}
					</Text>
				</Box>
			</Flex>
			<Cube delay="0s" />
			<Cube delay="2s" left="25vw" top="40vh" />
			<Cube delay="4s" left="75vw" top="50vh" />
			<Cube delay="6s" left="90vw" top="10vh" />
			<Cube delay="8s" left="10vw" top="85vh" />
			<Cube delay="10s" left="50vw" top="10vh" />
		</Flex>
	)
}

interface CubeProps {
	delay: string
	left?: string
	top?: string
}

const cubAnimation = keyframes`
 from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
`

const Cube = ({ delay, left = '45vw', top = '80vh' }: CubeProps) => {
	return (
		<Box
			position="absolute"
			top={top}
			left={left}
			w={{ base: '5px', md: '10px' }}
			h={{ base: '5px', md: '10px' }}
			borderWidth="1px"
			borderStyle="solid"
			borderColor={delay === '2s' ? `${lightenDarkenColor('#0040C1', 35)}` : `${lightenDarkenColor('#0040C1', -35)}`}
			transformOrigin="top left"
			transform="scale(0) rotate(0deg) translate(-50%, -50%)"
			animation={`${cubAnimation} 8s ease-in ${delay} forwards infinite`}
		/>
	)
}
