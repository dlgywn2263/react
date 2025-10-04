const Circle = (props) => {
  const circleStyle = {
    width: props.size,
    height: props.size,
    borderRadius: "9999px",
    backgroundColor: props.bg,
  };
  return <div style={circleStyle}></div>;
};
export default Circle;
