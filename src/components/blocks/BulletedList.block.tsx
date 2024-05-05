'use client'

import { UnorderedList } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
	block: any
	children?: ReactNode
}

export function BulletedListBlock({ children }: Props) {
	return (
		<UnorderedList w="100%" py={'8px'} spacing={1}>
			{children}
		</UnorderedList>
	)
}
