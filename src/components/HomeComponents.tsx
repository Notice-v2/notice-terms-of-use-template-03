'use client'

import { Box, Flex } from '@chakra-ui/react'
import { BlockComponents } from './BlockComponents'
import { Hero } from './Hero'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	return (
		<Box>
			<Box as="section">
				<Hero />
			</Box>
			<Flex justify="center" align="center" my="52px" w="100%" as="section">
				<BlockComponents data={data?.page} />
			</Flex>
		</Box>
	)
}
