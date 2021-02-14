import React from 'react'

import Cover from '../atoms/Cover'
import Title from '../atoms/Title'
import Author from '../atoms/Author'

// Component as arrow function
const Book = ({url, title, author}) => {
	const altText = (title && author) ? title.toLowerCase().split(' ').join('_') + '_' + author.toLowerCase().split(' ').join('_') : '';

	return (
		<div className="book">
			<Cover url={url} alt={altText} />
			<Title title={title} />
			<Author author={author} />
		</div>
	);
}

export default Book
