import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
