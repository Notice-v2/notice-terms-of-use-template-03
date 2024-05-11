'use client'

import { Box } from '@chakra-ui/react'

interface Props {
	project?: any
}

export const Hero = ({ project }: Props) => {
	return (
		<Box
			position="relative"
			overflow="hidden"
			py={20}
			as="div"
			_before={{
				content: "''",
				position: 'absolute',
				top: 0,
				height: '100%',
				left: '50%',
				bg: "url('/bg.svg')",
				bgRepeat: 'no-repeat',
				bgPosition: 'top',
				bgSize: 'full',
				zIndex: -1,
				transform: 'translateX(-50%)',
				width: '100%',
			}}
			h="100%"
		>
			<Box>
				<Box maxW="85rem" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} pt={8} pb={10}>
					<Box maxW="3xl" mx="auto" textAlign="center">
						<Box
							as="h1"
							fontWeight="bold"
							color={project?.accentColor ?? 'gray.800'}
							fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
						>
							{project?.subtitle}
						</Box>
					</Box>
					<Box maxW="3xl" mx="auto" textAlign="center" mt={5}>
						<Box as="p" fontSize="lg" color="gray.600">
							{project?.description}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
