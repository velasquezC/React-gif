import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifList from './components/GifList';
const App = () => {
	const [categories, setCategories] = useState(['Jojo adventure']);

	// const handleAdd = () => {
	// 	const serie = 'Inuyasha';
	// 	setcategories([...categories, serie]);
	// };
	return (
		<>
			<h2>GifExpertApp</h2>
			<hr />
			<AddCategory setCategories={setCategories} />
			<ul>
				{categories.map((category) => {
					return <GifList key={category} category={category} />;
				})}
			</ul>
		</>
	);
};

export default App;
