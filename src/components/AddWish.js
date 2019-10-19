import React from "react";
import InputText from "./InputTextUI";
import SubmitUI from "./SubmitUI";
import "../stylesheets/App.css";

const AddWish = props => {
  const { inputWish, handleInputWish, handleSubmitClick } = props;
  return (
    <div className="input-wish">
      <InputText inputWish={inputWish} handleInputWish={handleInputWish} />
      <SubmitUI handleSubmitClick={handleSubmitClick} />
    </div>
  );
};

export default AddWish;
