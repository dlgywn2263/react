const LargeTitle = ({ children, color }) => {
  const colorObj = {
    white: "text-white",
    blue: "text-blue-500",
  };
  return (
    <h1 className={`text-2xl font-semibold ${colorObj[color]} lg: text-4xl`}>
      {children}
    </h1>
  );
};

export default LargeTitle;
