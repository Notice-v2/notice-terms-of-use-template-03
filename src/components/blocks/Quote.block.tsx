'use client'

import { Box } from '@chakra-ui/react'
import { renderBlock } from './render-blocks'

interface Props {
	block: any
}

export function QuoteBlock({ block }: Props) {
	return (
		<Box
			width="100%"
			my="8px"
			py={'2px'}
			pl="12px"
			borderLeft={'3px solid'}
			borderColor="#6b7985"
			css={{ caretColor: '#444756' }}
			as={'blockquote'}
		>
			{block.content?.map((child: any) => renderBlock(child))}
		</Box>
	)
}
