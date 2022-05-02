import React from 'react';
import { Link } from 'react-router-dom';
import './singleproduct.css';

const SingleProduct = ({ product }) => {
	console.log(product.img);
	return (
		<div className='product'>
			<Link to={`/product/${product.slug}`}>
				<img
					src={product.image}
					alt={product.name}
					style={{ objectFit: 'cover', width: '20vw' }}
				></img>
			</Link>
			<p>
				<Link
					to={`/product/${product.slug}`}
					style={{ fontWeight: 'bold', color: 'black', fontSize: '1rem' }}
				>
					{product.name}
				</Link>
			</p>
			<p>{product.price} $</p>
		</div>
	);
};

export default SingleProduct;
