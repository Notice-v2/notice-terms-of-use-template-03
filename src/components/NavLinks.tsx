'use client'

import { Box, IconButton } from '@chakra-ui/react'
import { MenuIcon } from '../icons'

export const NavLinks = () => {
	return (
		<Box display={{ base: 'block', md: 'none' }}>
			<IconButton
				isRound={true}
				variant="ghost"
				colorScheme="blue"
				aria-label="Search"
				icon={<MenuIcon size={20} color="gray" />}
			/>
		</Box>
	)
}
