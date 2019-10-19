import React from "react";
import Header from "./Header";
import AddWish from "./AddWish";
import List from "./ListUI";
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
    if (!this.state.inputWish) {
      return;
    }
    this.state.wishList.push(this.state.inputWish);
    this.setState({
      wishList: this.state.wishList,
      inputWish: ""
    });
  }

  render() {
    const { inputWish, wishList } = this.state;

    return (
      <div className="App">
        <Header />
        <AddWish
          handleInputWish={this.handleInputWish}
          handleSubmitClick={this.handleSubmitClick}
          inputWish={inputWish}
          wishList={wishList}
        />
        <List wishList={wishList} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
