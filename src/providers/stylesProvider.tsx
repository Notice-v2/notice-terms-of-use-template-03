// app/providers.tsx
'use client'

import { createTheme } from '@/utils/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function StylesProvider({ children }: { children: React.ReactNode }) {
	const theme = createTheme()

	return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
