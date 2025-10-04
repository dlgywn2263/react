import PartnerInfo from "../molecules/PartnerInfo";
import TypeButton from "../molecules/TypeButton";
import Request from "../molecules/Request";

const Partner = ({ number, src, name, requester, time }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        border: "1px solid grey",
      }}
    >
      <PartnerInfo number={number} src={src} name={name} />
      <TypeButton />
      <Request requester={requester} time={time} />
    </div>
  );
};

export default Partner;
