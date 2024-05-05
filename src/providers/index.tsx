import { SelectedTagProvider } from './selectedTagProvider'
import { StylesProvider } from './stylesProvider'

interface Props {
	children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
	return (
		<StylesProvider>
			<SelectedTagProvider> {children}</SelectedTagProvider>
		</StylesProvider>
	)
}
