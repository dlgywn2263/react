const ProfileImage = (src) => {
  return (
    <img
      style={{
        width: "35px",
        height: "35px",
        borderradius: "9999px",
        objectFit: "contain",
      }}
      src={src}
      alt=""
    />
  );
};

export default ProfileImage;
