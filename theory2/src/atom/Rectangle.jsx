const Rectangle = ({ backgroundColor }) => {
  return (
    <div
      style={{
        width: "45px",
        height: "45px",
        backgroundColor,
        borderRadius: "8px",
      }}
    ></div>
  );
};

export default Rectangle;
