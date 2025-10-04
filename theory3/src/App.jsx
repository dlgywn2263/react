import LargeTitle from "./atoms/LargeTitle";
import SmallTitle from "./atoms/SmallTitle";
import Option from "./atoms/Option";
import { Shield } from "lucide-react";
import ReserveButton from "./atoms/ReserveButton";
function App() {
  return (
    <main className="bg-slate-400 h-screen flex justify-center items-center ">
      <section className="container mx-auto flex flex-col justify-center text-center items-center gap-4">
        <LargeTitle color={"white"}>전문 에어컨 세탁기 세척 서비스</LargeTitle>
        <LargeTitle color={"blue"}>깨끗하고 건강하게</LargeTitle>
        <SmallTitle>전문가의 세척</SmallTitle>
        <SmallTitle>공간이 새로워집니다</SmallTitle>
        <div className="flex  justify-center items-center gap-7 ">
          <Option
            icon={<Shield color={"blue"} />}
            service={"100% 친환경 세제"}
          />
          <Option
            icon={<Shield color={"blue"} />}
            service={"100% 친환경 세제"}
          />
          <Option
            icon={<Shield color={"blue"} />}
            service={"100% 친환경 세제"}
          />
          <Option
            icon={<Shield color={"blue"} />}
            service={"100% 친환경 세제"}
          />
        </div>
        <ReserveButton>지금 예약하기</ReserveButton>
      </section>
    </main>
  );
}

export default App;
