import React, { useEffect } from 'react'
import ArticleNavigation from './ArticleNavigation/ArticleNavigation'
import './article-block.css'

const ArticleBlock = () => {
	let articles = []
	let titleArticle
	let bodyArticle

	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://sweb.ru/export/turbojournal/')
	xhr.send()
	xhr.onload = () => {
		setTimeout(() => {
			articles = xhr.responseXML.documentElement.getElementsByTagName('item')
			
			titleArticle = articles[0].getElementsByTagName('turbo:topic')
			console.log(titleArticle[0].innerHTML)

			bodyArticle = articles[0].getElementsByTagName('turbo:content')
			console.log(bodyArticle[0].innerHTML)
		}, 2000)
	}

	useEffect(() => {
		
	}, [articles])

	/* const api = async () => {
		let response = await fetch('https://sweb.ru/export/turbojournal/')
		let text = await response.text()
	} */

	const handleArticleClick = evt => {

	}

	return (
		<div className="article">
			<ArticleNavigation />

			<section className="article__main">
				<header className="article__header">
					<h3 className="header__sub-title">Бортовой журнал</h3>
					<h2 className="header__title">Бортовой журнал</h2>
				</header>

				<ul className="articles__list">
					{/* {articles.map(item => (
						<li key={item}>
							<button onClick={handleArticleClick}>{item}</button>
							<p>{item}</p>
						</li>
					))} */}
					<li>
						<button className="articles__button">{titleArticle}</button>
						<p className="articles__content">{bodyArticle}</p>
					</li>
					<li>
						<button className="articles__button">{titleArticle}</button>
						<p className="articles__content">{bodyArticle}</p>
					</li>
					<li>
						<button className="articles__button">{titleArticle}</button>
						<p className="articles__content">{bodyArticle}</p>
					</li>
					<li>
						<button className="articles__button">{titleArticle}</button>
						<p className="articles__content">{bodyArticle}</p>
					</li>
				</ul>
			</section>
		</div>
	)
}

export default ArticleBlock