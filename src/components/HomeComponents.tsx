'use client'

import { Box, Flex } from '@chakra-ui/react'
import '@notice-org/renderer-helper/dist/style.css'
import { BlockComponents } from './BlockComponents'
import { Hero } from './Hero'
import { NoticeLabel } from './NoticeLabel'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	return (
		<Box>
			<Box as="section">
				<Hero project={data?.project} />
			</Box>
			<Flex
				bgColor="gray.100"
				position="relative"
				justify="center"
				align="center"
				py="8px"
				my="52px"
				w="100%"
				as="section"
			>
				<BlockComponents data={data?.page} />
			</Flex>
			<NoticeLabel shouldHide={data?.project?.hideCreatedWithNotice} />
		</Box>
	)
}
