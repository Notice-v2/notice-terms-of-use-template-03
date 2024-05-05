'use client'

import { Box } from '@chakra-ui/react'
import { ArticlesGrid } from './ArticlesGrid'
import { BlogHero } from './BlogHero'
import { Navbar } from './Navbar'
import { RecentArticles } from './RecentArticles'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	return (
		<Box>
			<Navbar meta={data?.metadata ?? []} />
			<Box mt={{ base: '40px', lg: '80px' }} as="section">
				<BlogHero page={data?.pages?.[0]} accentColor={data?.project?.accentColor} />
			</Box>
			{data?.pages.length > 3 && (
				<Box mt={{ base: '60px', lg: '80px' }} as="section">
					<RecentArticles pages={data?.pages.slice(1, 6)} />
				</Box>
			)}
			<Box mt={{ base: '40px', lg: data?.pages?.length > 3 ? '80px' : '70px' }} as="section">
				<ArticlesGrid accentColor={data?.project?.accentColor} pages={data?.pages} />
			</Box>
		</Box>
	)
}
