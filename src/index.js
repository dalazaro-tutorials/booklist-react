import React from 'react'
import ReactDom from 'react-dom'

// include CSS
import './index.css'

import BookList from './organisms/BookList'

ReactDom.render(
	<BookList />,
	document.getElementById('root')
);
