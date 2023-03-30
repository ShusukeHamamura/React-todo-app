import React from "react";

export const InCompleteTodo = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  const incompleteAreaStyle = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px auto",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={incompleteAreaStyle} className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* jsxでループを回すときはkeyを付与する */}
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button
                  onClick={() => {
                    onClickDelete(index);
                  }}
                >
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
