'use client'

import { Link } from '@chakra-ui/next-js'
import { Code } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
	leaves: any[]
}

const leafComponents = {
	bold: (node: ReactNode) => <strong>{node}</strong>,
	code: (node: ReactNode) => <Code variant="notice">{node}</Code>,
	italic: (node: ReactNode) => <em>{node}</em>,
	strike: (node: ReactNode) => <s>{node}</s>,
	underline: (node: ReactNode) => <u>{node}</u>,
	link: (node: ReactNode, attrs: any) => (
		<Link _hover={{ textDecoration: 'none' }} href={attrs?.href} isExternal>
			{node}
		</Link>
	),
	color: (node: ReactNode, color: string) => <span style={{ color }}>{node}</span>,
	bgColor: (node: ReactNode, bgColor: string) => <span style={{ backgroundColor: bgColor }}>{node}</span>,
} as any

export function Leaves({ leaves }: Props) {
	return leaves?.map((item) => {
		let node = item.text
		if (item.marks && item.marks.length > 0) {
			item.marks.forEach((mark: Record<string, string>) => {
				if (leafComponents[mark.type]) {
					node = leafComponents[mark.type](node, mark?.attrs)
				}
			})
		}
		return node
	})
}
