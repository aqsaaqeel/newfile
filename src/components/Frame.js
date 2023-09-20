import "./Frame.css";

const Frame = () => {
  return (
    <div className="div">
      <div className="child" />
      <div className="item" />
      <div className="inner" />
      <div className="poppins">Poppins</div>
      <div className="font-family">{`Font Family : `}</div>
      <img className="logo-icon" alt="" src="/logo.svg" />
    </div>
  );
};

export default Frame;
