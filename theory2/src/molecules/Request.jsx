import Caption from "../atom/Caption";
const Request = ({ time, requester }) => {
  return (
    <div style={{ display: "flex", textAlign: "center", gap: "10px" }}>
      <Caption color={"grey"} contents={"Request at:"} />
      <Caption color={"black"} contents={time} />
      <Caption color={"grey"} contents={"by"} />
      <Caption color={"black"} contents={requester} />
    </div>
  );
};

export default Request;
