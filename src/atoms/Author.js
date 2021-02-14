import React from 'react'

// style needs double brackets: outer brackets are JavaScript world, inner brackets are an object
const Author = ({author}) => {
	author = (author) ? author : 'Unknown Author';

	return (
		<h4 style={{
			// 'color' or color
			color: '#617d98',
			// 'font-size' or fontSize
			fontSize: '0.75rem',
			marginTop: '0.25rem'
		}}>
			{/* author string interpolated */}
			by {author}
		</h4>
	);
}

export default Author
