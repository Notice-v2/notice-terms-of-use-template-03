'use client'

import { Text } from '@chakra-ui/react'
import { Leaves } from '../Leaves'

interface Props {
	block: any
}

export function ParagraphBlock({ block }: Props) {
	const textAlign = block?.attrs?.textAlign || 'left'

	if (block?.content?.length === 1 && block.content[0].text === '')
		return (
			<Text w="100%" py={'8px'}>
				<br />
			</Text>
		)

	return (
		<Text w="100%" py={'8px'} textAlign={textAlign}>
			<Leaves leaves={block.content} />
		</Text>
	)
}
