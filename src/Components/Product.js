import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ProductConsumer, ProductProvider } from "./Context";
import ProductList from "./ProductList";

export default class Product extends Component {
  render() {
    const { id, img, title, price, inCart } = this.props.product;
    return (
      <>
        <div className="card">
          <div
            className="img-container p-5"
            onClick={console.log("You clicked on the image container")}
          >
            <div className="col-md-4">
              <Link to="/details">
                <img src={img} alrt="product" className="card-img-top"></img>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
