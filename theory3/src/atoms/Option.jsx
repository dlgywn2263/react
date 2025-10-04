const Option = ({ icon, service }) => {
  return (
    <div className="flex gap-1 items-center">
      <span>{icon}</span>
      <span>{service}</span>
    </div>
  );
};

export default Option;
