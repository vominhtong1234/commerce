import React from 'react';
import SingleProduct from '../components/singleproduct/SingleProduct';
import data from '../data';
import './homepage.css';
const HomePage = () => {
	return (
		<div>
			<div className='product-list'>
				{data.products.map((product) => (
					<SingleProduct key={product.slug} product={product}></SingleProduct>
				))}
			</div>
		</div>
	);
};

export default HomePage;
