import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifListItem from './GifListItem';

const GifList = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);
	return (
		<>
			<h3>{category}</h3>
			{loading && 'Cargando...'}
			<div className="card-list animate__animated animate__fadeIn">
				{images.map((image) => {
					return <GifListItem key={image.id} {...image} />;
				})}
			</div>
		</>
	);
};

export default GifList;
