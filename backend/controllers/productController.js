const data = {
	products: [
		{
			name: 'Áo Nike',
			slug: 'Áo Nike',
			category: 'Áo sơ mi',
			image: '/images/p1.jpg',
			price: 120,
			countInStock: 10,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 10,
			description: 'high quality shirt',
		},
		{
			name: 'Áo Adiadas',
			slug: 'Áo Adidas',
			category: 'Áo sơ mi',
			image: '/images/p2.jpg',
			price: 250,
			countInStock: 20,
			brand: 'Adidas',
			rating: 4.0,
			numReviews: 10,
			description: 'high quality product',
		},
		{
			name: 'Quần Nike',
			slug: 'Quần Nike',
			category: 'Quần',
			image: '/images/p3.jpg',
			price: 25,
			countInStock: 15,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 14,
			description: 'high quality product',
		},
		{
			name: 'Quần Puma',
			slug: 'Quần Puma',
			category: 'Quần',
			image: '/images/p4.jpg',
			price: 65,
			countInStock: 5,
			brand: 'Puma',
			rating: 4.5,
			numReviews: 10,
			description: 'high quality product',
		},
	],
};

const fetchProduct = (req, res) => {
	res.status(200).json(data);
};

module.exports = { fetchProduct };
