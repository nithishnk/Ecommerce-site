import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, img, title, price, inCart } = this.props.product;
    return (
      <>
        <div className="mx-auto col-md-4 my-3">
          <div className="card">
            <div
              className="img-container"
              onClick={console.log("You clicked on the image container")}
            >
              <div className="col-md-8">
                <Link to="/details">
                  <img
                    src={img}
                    alrt="product"
                    className="img-fluid card-img-top"
                  />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    console.log("added to the cart");
                  }}
                >
                  {inCart ? (
                    <p className="text-captalize mb-0" disabled>
                      {""}inCart
                    </p>
                  ) : (
                    <i className="fa fa-cart-plus" />
                  )}
                </button>
              </div>
              {/* card footer  */}
              <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">{title}</p>
                <h5 className="text-blue font-italic mb-0">
                  <span className="mr-1">$</span>
                  {price}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
