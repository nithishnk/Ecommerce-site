import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container ">
              {/* title  */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* title end */}
              {/* product information  */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                  <img src={img} claassName="img-fluid" alt="product" />
                </div>
                {/* product information end */}
                {/* product text*/}
                <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                  <h4> Model : {title}</h4>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made by : <span className="text-uppercase">{company}</span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some Info about Product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons  */}
                  <div>
                    <Link to="/">
                      <ButtonContainer className="mx-2">
                        Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addtoCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
