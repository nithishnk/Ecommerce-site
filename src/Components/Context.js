import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//provider
//Consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  handleDetail = () => {
    console.log("hellodetail");
  };
  addtoCart = id => {
    console.log(`add to cart.id is ${id}`);
  };
  // tester = () => {
  //   console.log("State Products", this.state.products[0].inCart);
  //   console.log("Detail Products", storeProducts[0].inCart);
  //   const tempProducts = [...this.state.products];
  //   tempProducts[0].inCart = true;
  //   this.setState(
  //     () => {
  //       return { products: tempProducts };
  //     },
  //     () => {
  //       console.log("State Products", this.state.products[0].inCart);
  //       console.log("Detail Products", storeProducts[0].inCart);
  //     }
  //   );
  // };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addtoCart: this.addtoCart
        }}
      >
        {/* <button onClick={this.tester}>test</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
