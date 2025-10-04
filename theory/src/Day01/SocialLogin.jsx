const SocialLogin = (props) => {
  const socialStyle = {
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    color: "white",
    padding: "14px 16px",
    backgroundColor: props.backgroundColor,
    width: "200px",
    height: "14px",
  };
  return (
    <div style={socialStyle}>
      {props.icon} Login via {props.social}
    </div>
  );
};
export default SocialLogin;
