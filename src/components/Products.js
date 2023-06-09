import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(filter);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted(false);
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  };

  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((x) => x.category === cat);
  //   setFilter(updatedList);
  // };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5"></div>
        {data.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 ">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-white"
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      height="250px"
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text lead fw-bold">${product.price}</p>
                      <p className="card-text lead fw-bold">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star text-warning"></i>(
                        {product.rating && product.rating.count})
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
