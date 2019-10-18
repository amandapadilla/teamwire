import React from "react";

const Form = props => {
  const { inputWish, handleInputWish, handleSubmitClick } = props;
  return (
    <div>
      <form className="form">
        <input
          type="text"
          className="input-text"
          value={inputWish}
          onChange={handleInputWish}
        />
        <input
          type="submit"
          value="Añadir"
          className="input-submit"
          onClick={handleSubmitClick}
        />
      </form>
    </div>
  );
};

export default Form;
