import { Avatar, HStack, Text } from '@chakra-ui/react'

interface Props {
	author: {
		name: string
		picture?: string
	}
	size?: 'xs' | 'sm' | 'lg'
}

export const Author = ({ author, size = 'sm' }: Props) => {
	if (!author) return <></>

	return (
		<HStack gap={2}>
			<Avatar size={size} name={author.name} src={author?.picture} />
			<Text fontSize={'sm'} color="gray.500" noOfLines={1}>
				{author.name}
			</Text>
		</HStack>
	)
}
