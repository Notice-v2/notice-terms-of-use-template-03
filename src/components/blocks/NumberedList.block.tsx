'use client'

import { OrderedList } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
	block: any
	children?: ReactNode
}

export function NumberedListBlock({ children }: Props) {
	return (
		<OrderedList w="100%" py={'8px'} spacing={1}>
			{children}
		</OrderedList>
	)
}
