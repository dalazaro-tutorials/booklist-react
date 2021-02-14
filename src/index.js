import React from 'react';
import ReactDom from 'react-dom';

// include CSS
import './index.css'

// JSON Object
const responseArray = [
	{
		"url": "https://images-na.ssl-images-amazon.com/images/I/51iDWMHbdhL._SX258_BO1,204,203,200_.jpg",
		"title": "Magnolia Table",
		"author": "Joanna Gaines"
	},
	{
		"url": "https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg",
		"title": "A Promised Land",
		"author": "Barack Obama"
	},
	{
		"url": "https://images-na.ssl-images-amazon.com/images/I/51NYjNgldSL._SX330_BO1,204,203,200_.jpg",
		"title": "Where the Crawdads Sing",
		"author": "Delia Owens"
	},
	{
		"url": "https://images-na.ssl-images-amazon.com/images/I/51MzSX1B7RL._SX412_BO1,204,203,200_.jpg",
		"title": "The 50 States: Explore the U.S.A. with 50 fact-filled maps!"
	},
	{
		"title": "Becoming",
		"author": "Michelle Obama"
	},
	{
		"url": "https://images-na.ssl-images-amazon.com/images/I/511pAnqlhML._SX474_BO1,204,203,200_.jpg",
		"title": "The Wonderful Things You Will Be",
		"author": "Emily Winfield Martin"
	}
]

// Component as traditional function declaration
function BookList() {
	return (
		// For any adjacent JSX tags, wrap them in a <React.Fragment> tag instead of <div> (or else you will end up with div soup)
		<React.Fragment>
			<h2>Book List</h2>
			<section className="booklist">
				{responseArray.map((element, index) => {
					return <Book key={index} {...element} />
				})}
			</section>
		</React.Fragment>
	);
}

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

const Cover = ({url, altText}) => {
	url = (url) ? url : '';
	altText = (altText) ? altText : 'book_cover';

	return <img src={url} alt={altText}/>
}


const Title = ({title}) => {
	title = (title) ? title.toUpperCase() : 'Unknown Title';

	return <h3>{title}</h3>;
}


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

ReactDom.render(
	<BookList />,
	document.getElementById('root')
);
