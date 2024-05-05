import { ArticlesGrid } from '@/components/ArticlesGrid'
import { BlogHero } from '@/components/BlogHero'
import { Navbar } from '@/components/Navbar'
import { RecentArticles } from '@/components/RecentArticles'
import { API, extractProjectID } from '@/tools/api'
import { Box } from '@chakra-ui/react'
import { Metadata } from 'next'
import { headers } from 'next/headers'

async function getData(searchParams?: Record<string, any>) {
	const projectId = extractProjectID(headers(), searchParams)
	if (!projectId) return null

	try {
		const { data } = await API.get(`/projects/${projectId}`)
		return data
	} catch (_) {
		return null
	}
}

export async function generateMetadata({ searchParams }: { searchParams?: Record<string, any> }): Promise<Metadata> {
	// read route params
	const id = extractProjectID(headers(), searchParams)

	// fetch data
	const { data } = await API.get(`/projects/${id}`)

	const metadata = {
		title: '',
		description: '',
		icon: '',
		ogTitle: '',
		ogDescription: '',
		ogImage: '',
		twitterTitle: '',
		twitterDescription: '',
		twitterImage: '',
	}

	for (const item of data?.metadata) {
		const { tagName, innerText, attributes } = item

		if (tagName === 'title') {
			metadata.title = innerText
			metadata.ogTitle = innerText
			metadata.twitterTitle = innerText
		} else if (tagName === 'link') {
			const { rel, href } = attributes
			metadata.icon = href
		} else if (tagName === 'meta') {
			const { name, property, content } = attributes

			if (name === 'description') {
				metadata.description = content
				metadata.ogDescription = content
				metadata.twitterDescription = content
			} else if (property === 'og:image') {
				metadata.ogImage = content
			} else if (name === 'twitter:image') {
				metadata.twitterImage = content
			}
		}
	}

	return {
		title: metadata.title || 'Template Created with Notice',
		description: metadata.description || 'Notice is an no code editor to craft your content.',
		icons: {
			icon: metadata.icon,
			shortcut: metadata.icon,
			apple: metadata.icon,
			other: {
				rel: 'apple-touch-icon',
				url: metadata.icon,
			},
		},
		openGraph: {
			title: metadata.ogTitle,
			description: metadata.ogDescription,
			images: metadata.ogImage ? [{ url: metadata.ogImage }] : [],
		},
		twitter: {
			title: metadata.twitterTitle,
			description: metadata.twitterDescription,
			images: metadata.twitterImage ? [{ url: metadata.twitterImage }] : [],
		},
	}
}

export default async function Home({ searchParams }: { searchParams?: Record<string, any> }) {
	const data = await getData(searchParams)

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
