const Caption = ({ color, contents }) => {
  return (
    <span
      style={{
        color,
        fontSize: "12px",
      }}
    >
      {contents}
    </span>
  );
};

export default Caption;
