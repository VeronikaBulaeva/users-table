import { FC, useRef } from "react";
import "./style.css";
import { IFilter } from "../../types";
import Clear from "../../images/clear.png";

const Filter: FC<IFilter> = ({ onChange, onClick }) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (ref.current) {
      ref.current.value = "";
      onClick();
    }
  };
  return (
    <div className={"filterContainer"}>
      <input
        name={"text"}
        type={"text"}
        autoComplete={"off"}
        placeholder={"Name"}
        onChange={onChange}
        ref={ref}
      />
      <button className={"filterButton"}>
        <img
          className={"filterButtonImg"}
          src={Clear}
          alt="очистить"
          onClick={handleClick}
        />
      </button>
    </div>
  );
};
export default Filter;
