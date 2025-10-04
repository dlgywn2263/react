import { Check } from "lucide-react";
const White = ({ color, desc }) => {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <Check color={color} />
      {desc}
    </span>
  );
};
export default White;
