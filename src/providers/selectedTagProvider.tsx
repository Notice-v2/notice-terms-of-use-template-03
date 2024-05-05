'use client'

import React, { ReactNode, useContext, useState } from 'react'

export interface ITagContext {
	selectedTag: string
	setSelectedTag: React.Dispatch<React.SetStateAction<string>>
}

interface TagProviderProps {
	children: ReactNode
}

export const SelectedTagContext = React.createContext<ITagContext | null>(null)

export const SelectedTagProvider = ({ children }: TagProviderProps) => {
	const [selectedTag, setSelectedTag] = useState('All')

	return <SelectedTagContext.Provider value={{ selectedTag, setSelectedTag }}>{children}</SelectedTagContext.Provider>
}

export const useSelectedTag = () => {
	const context = useContext(SelectedTagContext)
	if (context === null) throw new Error('Received null while reading useContext(LangContext).')
	return context
}
