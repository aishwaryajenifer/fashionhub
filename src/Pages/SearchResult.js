import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { category, products } from "../data/Data"; 

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get("query") || "";

  useEffect(() => {
    setLoading(true);
    try {
      const searchQuery = query.toLowerCase();

      // Filter categories and products based on the search query
      const filteredCategories = category.filter(cat =>
        cat.category_name.toLowerCase().includes(searchQuery) ||
        (cat.subCat && cat.subCat.some(sub => sub.category_name.toLowerCase().includes(searchQuery)))
      );

      const filteredProducts = products.filter(product =>
        product.product_name.toLowerCase().includes(searchQuery)
      );

      // Combine results
      setResults({ categories: filteredCategories, products: filteredProducts });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching results: {error.message}</p>;

  return (
    <div className="container">
      <h2>Search Results for "{query}"</h2>
      {results.categories.length > 0 && (
        <div>
          <h3>Categories</h3>
          <div className="row">
            {results.categories.map((cat) => (
              <div key={cat.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={cat.img} alt={cat.category_name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{cat.category_name}</h5>
                    <p className="card-text">{cat.quantity}</p>
                    {cat.subCat && (
                      <ul>
                        {cat.subCat.map(sub => (
                          <li key={sub.id}>{sub.category_name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {results.products.length > 0 && (
        <div>
          <h3>Products</h3>
          <div className="row">
            {results.products.map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={product.product_img} alt={product.product_name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">${product.price}</p>
                    <div>{product.stars.map((star, index) => <span key={index}>{star}</span>)}</div>
                    <p className="text-muted">({product.ratingCount} ratings)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {results.categories.length === 0 && results.products.length === 0 && (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
