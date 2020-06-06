import React, { FC, useState, useRef, useCallback, useEffect } from 'react'

interface IArticleInfo {
	title: string
	content?: string
}

const Article: FC<IArticleInfo> = ({ title, content }) => {
	const [article, setArticle] = useState<IArticleInfo>({ title, content })
	const ref = useRef(article)

	const updateArticle = useCallback(
		() => setArticle({ title: Math.random() + 'test', content: 'aaa' }),
		[]
	)

	useEffect(() => {
		ref.current = article
	}, [article])

	console.log('prev article: ', ref.current)
	console.log('curr article: ', article)

	return (
		<div>
			<p>title: {article.title}</p>
			<button onClick={updateArticle}>设置article</button>
		</div>
	)
}

export default Article
