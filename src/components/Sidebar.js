import React, { useState, useEffect } from "react";
import { sidebar, products } from "../data/Data";

export default function Sidebar() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const handleCheckboxChange = (header, variety) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (variety === "All") {
        newFilters[header] = newFilters[header] ? [] : ["All"];
      } else {
        if (!newFilters[header]) {
          newFilters[header] = [];
        }

        if (newFilters[header].includes(variety)) {
          newFilters[header] = newFilters[header].filter((v) => v !== variety);
        } else {
          newFilters[header].push(variety);
        }
      }

      return newFilters;
    });
  };

  const applyFilters = () => {
    let filtered = products;

    if (selectedFilters["Filter By Price"] && selectedFilters["Filter By Price"].length > 0) {
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.price);
        if (selectedFilters["Filter By Price"].includes("All")) return true;
        return selectedFilters["Filter By Price"].some((range) => {
          const [min, max] = range.split("-").map(Number);
          return price >= min && price <= max;
        });
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="row">
      <div className="col-lg-3 col-md-4">
        {sidebar.map((val, index) => (
          <div key={index}>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">{val.header}</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`all-${index}`}
                    checked={
                      selectedFilters[val.header]?.includes("All") || false
                    }
                    onChange={() => handleCheckboxChange(val.header, "All")}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`all-${index}`}
                  >
                    {val.all}
                  </label>
                  <span className="badge border font-weight-normal">
                    {val.total_quantity}
                  </span>
                </div>
                {val.subItem.map((subVal, subIndex) => (
                  <div
                    className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                    key={subIndex}
                  >
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`subitem-${index}-${subIndex}`}
                      checked={
                        selectedFilters[val.header]?.includes(subVal.variety) ||
                        false
                      }
                      onChange={() =>
                        handleCheckboxChange(val.header, subVal.variety)
                      }
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={`subitem-${index}-${subIndex}`}
                    >
                      {subVal.variety}
                    </label>
                    <span className="badge border font-weight-normal">
                      {subVal.quantity}
                    </span>
                  </div>
                ))}
              </form>
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-9 col-md-8">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={product.product_img}
                    alt={product.product_name}
                  />
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                    {product.product_name}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${product.price}</h5>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    {product.stars.map((star, i) => (
                      <React.Fragment key={i}>{star}</React.Fragment>
                    ))}
                    <small>({product.ratingCount})</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
