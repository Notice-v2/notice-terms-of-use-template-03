import { renderBlock } from './blocks/render-blocks'

interface Props {
	blocks: any[]
}

export function PageContent({ blocks }: Props) {
	return blocks.map((block) => renderBlock(block))
}
