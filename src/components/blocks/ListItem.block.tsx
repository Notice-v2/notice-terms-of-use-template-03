'use client'

import { ListItem } from '@chakra-ui/react'
import { renderBlock } from './render-blocks'

interface Props {
	block: any
}

export function ListItemBlock({ block }: Props) {
	return <ListItem key={block.content[0]}>{block.content?.map((child: any) => renderBlock(child))}</ListItem>
}
