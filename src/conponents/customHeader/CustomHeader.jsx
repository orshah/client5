import "./customHeader.style.css";

const CustomHeader = (props) => {
  return <h1 className={`${props.style} ${props.size}`}>{props.text}</h1>;
};

export default CustomHeader;
