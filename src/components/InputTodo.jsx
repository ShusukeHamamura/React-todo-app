import { React } from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px auto"
  };
  return (
    <>
      <div style={style} className="input-area">
        <input
          disabled={disabled}
          onChange={onChange}
          placeholder="TODOを入力"
          type="text"
          value={todoText}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    </>
  );
};
