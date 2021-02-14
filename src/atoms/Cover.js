import React from 'react'

const Cover = ({url, altText}) => {
	url = (url) ? url : '';
	altText = (altText) ? altText : 'book_cover';

	return <img src={url} alt={altText}/>
}

export default Cover
