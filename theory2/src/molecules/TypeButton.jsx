import PillButton from "../atom/PillButton";

const TypeButton = () => {
  return (
    <div style={{ disply: "flex", alignItems: "center", gap: "10px" }}>
      <PillButton content={"Account Type"} />
      <PillButton content={"Grade"} />
    </div>
  );
};

export default TypeButton;
