'use client'

import { DEFAULT_COLOR } from '@/utils/theme'
import { AspectRatio, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useMemo } from 'react'

interface Props {
	page: any
	accentColor?: string
}

export const BlogHero = ({ page, accentColor }: Props) => {
	const formattedDate = useMemo(() => dayjs(page?.createdAt).format('MMM D, YYYY'), [page?.createdAt])

	return (
		<Flex
			gap="48px"
			direction={{ base: 'column', md: 'row' }}
			justify="center"
			alignItems="stretch"
			mx="auto"
			px={{ base: '24px', sm: '36px', md: '16px' }}
			w="100%"
			height={'100%'}
			maxW="1260px"
			as={Link}
			href={page?.slug || page?._id}
			cursor="pointer"
		>
			<AspectRatio
				as={motion.div}
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition="0.8 0.5 cubic-bezier(0, 0.71, 0.2, 1.01)"
				h="100%"
				w="100%"
				maxW={{ base: '100%', md: '300px', lg: '560px' }}
				ratio={4 / 3}
				flexShrink={{ base: 0, lg: 1 }}
				flexBasis={'100%'}
				borderRadius="4px"
			>
				<Image
					h="100%"
					w="100%"
					borderRadius="4px"
					src={
						page?.coverImage === '-' || !page?.coverImage
							? 'https://assets-notice.b-cdn.net/renderer/image-not-found-in-blog.svg'
							: page?.coverImage
					}
				/>
			</AspectRatio>
			<Flex
				as={motion.div}
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition="0.8 0.5 cubic-bezier(0, 0.71, 0.2, 1.01)"
				direction="column"
				align="start"
				justify="center"
				w="100%"
			>
				<Text pb={1} fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} color={'gray.400'}>
					{formattedDate}
				</Text>
				<Heading
					lineHeight={1.2}
					fontWeight="bold"
					as="h1"
					fontSize={{ base: '3xl', md: 'xl', lg: '6xl' }}
					color="blackAlpha.800"
					noOfLines={2}
				>
					{page?.title}
				</Heading>
				<Text noOfLines={2} my={6} fontSize={{ base: 'md', lg: 'lg' }}>
					{page?.description}
				</Text>
				<Button
					mt={4}
					ml={'auto'}
					borderRadius="unset"
					borderColor={accentColor ?? DEFAULT_COLOR}
					color={accentColor ?? DEFAULT_COLOR}
					variant="outline"
					as={Link}
					href={page?.slug || page?._id}
					_hover={{ bg: accentColor ?? DEFAULT_COLOR, color: 'white' }}
				>
					Read more
				</Button>
			</Flex>
		</Flex>
	)
}
