import React from 'react'
import Sidebar from '../../blocks/Sidebar/Sidebar'
import ArticleBlock from '../../blocks/ArticleBlock/ArticleBlock'
import Footer from '../../blocks/Footer/Footer'

import './article-page.css'

const ArticlePAge = () => {
	return (
		<div className="page">
			<div className="page__section">
				<Sidebar />
				<ArticleBlock />
			</div>

			<Footer />
		</div>
	)
}

export default ArticlePAge