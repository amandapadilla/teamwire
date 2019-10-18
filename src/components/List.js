import React from "react";

const List = props => {
  const { wishList } = props;
  return (
    <div>
      <ul className="list">
        {wishList.map((wish, index) => {
          return (
            <li className="list-item" key={index}>
              <input type="checkbox" />
              {wish}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
