import { AspectRatio, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface Props {
	src?: string
	isParentHovered?: boolean
}

export const ScalingImage = ({ src, isParentHovered }: Props) => {
	return (
		<AspectRatio borderRadius={'4px'} overflow="hidden" maxW="400px" w="100%" ratio={4 / 3}>
			<Image
				animate={{
					scaleX: isParentHovered ? 1.2 : 1,
					scaleY: isParentHovered ? 1.2 : 1,
					transition: { duration: 0.6, type: 'tween', ease: [0, 0.2, 0.1, 0] },
				}}
				as={motion.img}
				borderRadius={'4px'}
				src={src === '-' || !src ? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg' : src}
				w="100%"
				h="100%"
			/>
		</AspectRatio>
	)
}
