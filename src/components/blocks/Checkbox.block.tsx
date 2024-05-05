'use client'

import { Checkbox } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Leaves } from '../Leaves'

interface Props {
	block: any
}

export function CheckboxBlock({ block }: Props) {
	return (
		<StyledCheckbox py={'4px'} isChecked={block.data.checked} display="flex">
			<Leaves leaves={block.content} />
		</StyledCheckbox>
	)
}

const StyledCheckbox = styled(Checkbox)<{ isChecked: boolean }>`
	& > span {
		color: ${({ isChecked }) => (isChecked ? '#718096' : 'inherit')};
		text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
	}
`
