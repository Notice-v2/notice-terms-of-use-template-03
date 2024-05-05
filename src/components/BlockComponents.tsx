'use client'

import { Flex, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { PageContent } from './blocks/render-blocks'

interface Props {
	data: any
}

export const BlockComponents = ({ data }: Props) => {
	const formattedDate = useMemo(() => dayjs(data?.updatedAt).format('MMM D, YYYY'), [data?.createdAt])

	function removeFirstElement(arr: any[]) {
		const newArr = arr.slice()
		newArr.shift()
		return newArr
	}

	const filteredContent = useMemo(() => removeFirstElement(data?.content ?? []), [data])

	return (
		<Flex
			direction="column"
			position="relative"
			maxW="900px"
			w="100%"
			justify="center"
			align="flex-start"
			px={4}
			mx="auto"
		>
			<Text w="100%" fontSize="16px" color="gray.500" mb="24px" textAlign="end">
				{' '}
				Last updated on : {formattedDate}{' '}
			</Text>
			{/* <Heading mb="24px" w="100%" textAlign="center" as="h1" fontSize="42px" fontWeight={700} lineHeight={1.2}>
				{data.title}
			</Heading> */}
			<PageContent blocks={filteredContent} />
		</Flex>
	)
}
