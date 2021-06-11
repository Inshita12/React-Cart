import React from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: "p1",
          price: 10,
          title: "Pen",
          qty: 1,
          img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          id: "p2",
          price: 100,
          title: "Notebook",
          qty: 1,
          img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {
          id: "p3",
          price: 150,
          title: "PencilKit",
          qty: 1,
          img: "https://media.istockphoto.com/photos/yellow-pencils-in-white-metal-pot-on-a-white-background-picture-id945258690?s=612x612",
        },
      ],
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (item) => {
    console.log("Increase quantity", item);
    const { items } = this.state;
    const index = items.indexOf(item);

    items[index].qty += 1;

    this.setState({
      items: items,
    });
  };

  handleDecreaseQuantity = (item) => {
    console.log("Increase quantity", item);
    const { items } = this.state;
    const index = items.indexOf(item);

    if (items[index].qty === 0) {
      return;
    }

    items[index].qty -= 1;

    this.setState({
      items: items,
    });
  };

  handleDelete = (id) => {
    const { items } = this.state;

    const products = items.filter((product) => product.id !== id);

    this.setState({
      items: products,
    });
  };
  getCount = () => {
    const { items } = this.state;

    let count = 0;
    items.forEach((item) => {
      count += item.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { items } = this.state;
    let CartTotal = 0;

    items.map((item) => {
      CartTotal = CartTotal + item.qty * item.price;
    });
    return CartTotal;
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCount()} />
        <Cart
          items={items}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
        />

        <div className="total">Total price: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
