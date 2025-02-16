const data = {
  products: [
    {
      _id: '1',
      name: 'Organic knit cotton bodysuits Shirt for child',
      category: 'Cloth',
      image: '/images/dress1.jpg',
      price: 360,
      countInStock: 20,
      brand: 'Hanna Andersson',
      logo: '/images/hannaandersson.jpg',
      website: 'https://www.hannaandersson.com/',
      rating: 4.5,
      numReviews: 10,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '2',
      name: 'Winter outfit package for child 100% pure cotton',
      category: 'Cloth',
      image: '/images/dress2.jpg',
      price: 200,
      countInStock: 10,
      brand: 'Old Navy',
      logo: '/images/oldnavy.jpg',
      website: 'https://oldnavy.gap.com/',
      rating: 4,
      numReviews: 10,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'Special Shirt for your kids, pure cotton',
      category: 'Cloth',
      image: '/images/dress3.jpg',
      price: 320,
      countInStock: 22,
      brand: 'Freshly Picked',
      logo: '/images/freshlypicked.jpg',
      website: 'https://freshlypicked.com/',
      rating: 4.8,
      numReviews: 15,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '4',
      name:
        'Organic knit cotton pant and short for baby girl and boy',
      category: 'Cloth',
      image: '/images/dress4.jpg',
      price: 398,
      countInStock: 30,
      brand: 'Tiger Of Sweden',
      logo: '/images/tigerofsweden.jpg',
      website: 'https://www.tigerofsweden.com/se/',
      rating: 4.5,
      numReviews: 17,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Black slim Shirt for child, bodysuits Shirt for child',
      category: 'Cloth',
      image: '/images/dress5.jpg',
      price: 225,
      countInStock: 18,
      brand: 'Goumi',
      logo: '/images/goumi.jpg',
      website: 'https://goumikids.com/',
      rating: 4.5,
      numReviews: 10,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'Very much comfortable cloth for child, made in Vietnam',
      category: 'Cloth',
      image: '/images/dress6.jpg',
      price: 159,
      countInStock: 24,
      brand: 'Old Navy',
      logo: '/images/oldnavy.jpg',
      website: 'https://oldnavy.gap.com/',
      rating: 3.5,
      numReviews: 25,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '7',
      name: 'Light blue dressy outfits for girl, made in USA',
      category: 'Cloth',
      image: '/images/dress7.jpg',
      price: 139,
      countInStock: 18,
      brand: 'Hanna Andersson',
      logo: '/images/hannaandersson.jpg',
      website: 'https://www.hannaandersson.com/',
      rating: 4.5,
      numReviews: 15,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'Yes',
      description: 'high quality product',
    },
    {
      _id: '8',
      name: 'Fresh and incredibly overcoat for baby, made in Sweden ',
      category: 'Cloth',
      image: '/images/dress8.jpg',
      price: 339,
      countInStock: 18,
      brand: 'Old Navy',
      logo: '/images/oldnavy.jpg',
      website: 'https://oldnavy.gap.com/',
      rating: 4.5,
      numReviews: 15,
      availableSizes: [52, 68, 78, 90, 108],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '9',
      name: 'Green shoes for new born baby',
      category: 'Shoes',
      image: '/images/shoes1.jpg',
      price: 328,
      countInStock: 10,
      brand: 'Tiger Of Sweden',
      logo: '/images/tigerofsweden.jpg',
      website: 'https://www.tigerofsweden.com/se/',
      offer: 'No',
      rating: 4.5,
      numReviews: 15,
      availableSizes: [20, 24, 28, 30, 32],
      description: 'high quality product',
    },
    {
      _id: '10',
      name: 'Fresh and incredibly shoes ',
      category: 'Shoes',
      image: '/images/shoes2.jpg',
      price: 220,
      countInStock: 15,
      brand: 'Old Navy',
      logo: '/images/oldnavy.jpg',
      website: 'https://oldnavy.gap.com/',
      rating: 4,
      numReviews: 13,
      availableSizes: [20, 24, 28, 30, 32],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '11',
      name: 'Attractive shoes for children',
      category: 'Shoes',
      image: '/images/shoes3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Freshly Picked',
      logo: '/images/freshlypicked.jpg',
      website: 'https://freshlypicked.com/',
      rating: 4.8,
      numReviews: 17,
      availableSizes: [20, 24, 28, 30, 32],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '12',
      name: 'Best shoes for newly born baby',
      category: 'Shoes',
      image: '/images/shoes4.jpg',
      price: 78,
      countInStock: 0,
      brand: 'Hanna Andersson',
      logo: '/images/hannaandersson.jpg',
      website: 'https://www.hannaandersson.com/',
      rating: 4.5,
      numReviews: 14,
      availableSizes: [20, 24, 28, 30, 32],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '13',
      name: 'Shoes for newly born Baby-girl',
      category: 'Shoes',
      image: '/images/shoes5.jpg',
      price: 65,
      countInStock: 20,
      brand: 'Tiger Of Sweden',
      logo: '/images/tigerofsweden.jpg',
      website: 'https://www.tigerofsweden.com/se/',
      rating: 4,
      numReviews: 10,
      availableSizes: [20, 24, 28, 30, 32],
      offer: 'No',
      description: 'high quality product',
    },
    {
      _id: '14',
      name: 'Shoes fit for baby Girl ',
      category: 'Shoes',
      image: '/images/shoes6.jpg',
      price: 159,
      countInStock: 17,
      brand: 'Old Navy',
      logo: '/images/oldnavy.jpg',
      website: 'https://oldnavy.gap.com/',
      rating: 5,
      numReviews: 15,
      availableSizes: [20, 24, 28, 30, 32],
      offer: 'No',
      description: 'high quality product',
    },
  ],
};

export default data;
