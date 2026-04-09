import {useEffect, useState} from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    })
        .catch(err => console.error("Error conentando al backend: ", err));
  }, []);

  return (
      <div style={{padding:'2rem', fontSize: 'sans-serif'}}>
        <h1>Mi Sistema Web</h1>
        <h2>Lista de productos</h2>

        {products.length === 0 ? (
            <p>No hay productos todavia.</p>
        ) : (
            <ul>
              {products.map((product: Product) => (
                  <li key={product.id}>
                    <strong>{product.name}</strong> - {product.price}
                  </li>
              ))}
            </ul>
        )}
      </div>
  )
}