'use client'

import { Box, Flex } from '@chakra-ui/react'
import { Leaves } from '../Leaves'

interface Props {
	block: any
}

const ICONS: { [key: string]: string } = {
	info: '📘',
	warning: '⚠️',
	danger: '🚫',
	tip: '🌱',
}

const borderColors: { [key: string]: string } = {
	info: 'blue.500',
	warning: 'yellow.500',
	danger: 'red.500',
	tip: 'green.500',
}

export function HintBlock({ block }: Props) {
	const { attrs } = block
	const type = attrs?.category?.toLowerCase() ?? 'info'

	return (
		<Flex
			gap={'8px'}
			py="16px"
			w={'100%'}
			align="baseline"
			bgColor="#E1E6EA"
			borderLeft="4px solid"
			borderLeftColor={borderColors[type]}
			borderRadius={'4px'}
		>
			<Box flexShrink={0} ml="16px" mr="8px">
				{ICONS[type]}
			</Box>
			<Box overflowWrap="anywhere" mr="12px">
				<Leaves leaves={block.content} />
			</Box>
		</Flex>
	)
}
