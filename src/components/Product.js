import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data.filter((p) => p.id !== parseInt(id)));
    };
    fetchProducts();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>(
            {product.rating && product.rating.count})
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
             </div>
      </>
    );
  };

  const Carousel = () => {
    return (
      <div className="row py-4">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="col-md-6">
              <h3 className="display-6 fw-bolder text-center">
                Other Products
              </h3>
              <Swiper
                className="card h-100 text-center p-4"
                modules={[Pagination, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {products.map((product, index) => (
                      <SwiperSlide
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={product.id}
                      >
                        <NavLink to={`/products/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.title}
                            height="200px"
                            width="200px"
                          />
                        </NavLink>
                      </SwiperSlide>
                    ))}
                  </div>
                </div>
              </Swiper>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
        <div className="d-flex justify-content-center">
        <Carousel />
        </div>
      </div>
    </>
  );
};

export default Product;