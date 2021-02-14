import React from 'react'

import {booksArray} from '../booksArray'
import Book from '../molecules/Book'

// Component as traditional function declaration
function BookList() {
	return (
		// For any adjacent JSX tags, wrap them in a <React.Fragment> tag instead of <div> (or else you will end up with div soup)
		<React.Fragment>
			<h2>Book List</h2>
			<section className="booklist">
				{booksArray.map((element, index) => {
					return <Book key={index} {...element} />
				})}
			</section>
		</React.Fragment>
	);
}

export default BookList
