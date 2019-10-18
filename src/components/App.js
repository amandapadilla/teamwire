import React from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      wishList: [],
      inputWish: ""
    };

    this.handleInputWish = this.handleInputWish.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleInputWish(ev) {
    const inputWish = ev.currentTarget.value;

    this.setState({
      inputWish: inputWish
    });
  }

  handleSubmitClick(ev) {
    ev.preventDefault();
    this.state.wishList.push(this.state.inputWish);
    this.setState({
      wishList: this.state.wishList,
      inputWish: ""
    });
  }
  render() {
    const { inputWish } = this.state;
    return (
      <div className="App">
        <Header />
        <Form
          handleInputWish={this.handleInputWish}
          handleSubmitClick={this.handleSubmitClick}
          inputWish={inputWish}
          wishList={this.state.wishList}
        />
        <List wishList={this.state.wishList} />
      </div>
    );
  }
}

export default App;
