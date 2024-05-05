import { CreatedWithNotice } from '@/components/CreatedWithNotice'
import { Providers } from '../providers'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>
					{children}
					<CreatedWithNotice />
				</Providers>
			</body>
		</html>
	)
}
