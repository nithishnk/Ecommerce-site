import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//provider
//Consumer
class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };
  handleDetail = () => {
    console.log("hellodetail");
  };
  addtoCart = () => {
    console.log("hellocart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addtoCart: this.addtoCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
