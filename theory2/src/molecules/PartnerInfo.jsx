import ProfileImage from "../atom/ProfileImage";
import SubTitle from "../atom/SubTitle";

const PartnerInfo = ({ number, src, name }) => {
  return (
    <>
      <SubTitle title={number} />
      <ProfileImage src={src} />
      <SubTitle title={name} />
    </>
  );
};

export default PartnerInfo;
