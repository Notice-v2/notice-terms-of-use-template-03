export const DEFAULT_COLOR = '#3182CE'

import { theme } from '@chakra-ui/pro-theme'
import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

export function createTheme() {
	const proTheme = extendTheme(theme)

	const extension = {
		colors: { ...proTheme.colors, brand: proTheme.colors.blue },
		fonts: {
			heading: `-apple-system, BlinkMacSystemFont, sans-serif`,
			body: `-apple-system, BlinkMacSystemFont, sans-serif`,
		},
		styles: {
			global: () => ({
				body: {
					bg: '#EDF2F6',
				},
			}),
		},
		components: {
			Code: codeTheme,
		},
	}

	return extendTheme(extension, proTheme)
}

const notice = defineStyle({
	borderRadius: '4px',
	fontSize: 'sm',
	padding: '1px',
	fontWeight: 600,
	color: '#b44437',
	background: 'rgba(250,239,240,.78)',
})

export const codeTheme = defineStyleConfig({
	variants: { notice: notice },
})

export function lightenDarkenColor(color: string, percent: number): string {
	// Parse the hex color to RGB components
	let num = parseInt(color.slice(1), 16)
	let r = (num >> 16) + percent
	// Ensure the value remains within [0, 255]
	if (r > 255) r = 255
	else if (r < 0) r = 0
	let b = ((num >> 8) & 0x00ff) + percent
	// Ensure the value remains within [0, 255]
	if (b > 255) b = 255
	else if (b < 0) b = 0
	let g = (num & 0x0000ff) + percent
	// Ensure the value remains within [0, 255]
	if (g > 255) g = 255
	else if (g < 0) g = 0

	// Convert the components back to hex
	return `#${(g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')}`
}
