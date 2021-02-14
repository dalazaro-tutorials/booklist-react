import React from 'react'

const Title = ({title}) => {
	title = (title) ? title.toUpperCase() : 'Unknown Title';

	return <h3>{title}</h3>;
}

export default Title
