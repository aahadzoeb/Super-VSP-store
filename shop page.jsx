// pages/shop.js
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Super VSP Store - Fresh Groceries</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded" />
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
