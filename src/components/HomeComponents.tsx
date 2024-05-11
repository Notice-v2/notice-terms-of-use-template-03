'use client'

import { Box, Flex } from '@chakra-ui/react'
import { BlockComponents } from './BlockComponents'
import { Hero } from './Hero'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	console.log('data', data)
	return (
		<Box>
			<Box as="section">
				<Hero project={data?.project?.project} />
			</Box>
			<Flex position="relative" justify="center" align="center" my="52px" w="100%" as="section">
				<BlockComponents data={data?.page} />
			</Flex>
		</Box>
	)
}
