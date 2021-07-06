import React from 'react';

const GifListItem = ({ id, title, url }) => {
	return (
		<div className="card">
			<p>{title}</p>
			<img src={url} alt={title} />
		</div>
	);
};

export default GifListItem;
