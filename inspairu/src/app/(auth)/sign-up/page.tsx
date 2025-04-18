import Carousel from "@/app/components/Carousel";
import Image from "next/image";
const Page: React.FC = () => {
  return (
    <main>
      <div className="px-[20px] py-[40px] flex items-start justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel  />
        <div className="lg:max-w-[490px] max-w-full w-full">
          <h1 className="font-[600] text-[28px] text-[#525252] text-center mb-[38px]">
            Join AI Hub
          </h1>
          <form action="">
            <div className="flex items-center gap-[40px] ">
              <input
                type="text"
                placeholder="First Name"
             className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
              />
            </div>
            <div className="flex items-center gap-[40px] mt-[40px]">
              <input
                type="text"
                placeholder="Username"
                className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
              />
              <input
                type="email"
                placeholder="E-mail ID"
                className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
              />
            </div>
            <button className="btn-gradient mt-[118px] max-w-full w-full py-[8px] rounded-[6px] font-[600] text-[16px] text-white cursor-pointer">
            Create Account
            </button>
            <p className="font-[400] text-[16px] text-[#525252] mt-[25px] text-center">Already have an account? <span className="font-[600] cursor-pointer bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">Login</span></p>
          </form>
          <p className="mt-[37px] text-center font-[500] text-[14px] text-[#A1A1A1]">- OR - </p>
         <div className="flex items-center justify-center gap-[14px] mt-[39px]">
          <button className="max-w-[163px] w-full border border-[#E8E8E8] py-[8px] rounded-[6px] flex items-center justify-center cursor-pointer">
          <Image
              src="/auth-images/google.png"
              width={34}
              height={25}
              alt="google"
            />
          </button>
          <button className="max-w-[163px] w-full border border-[#E8E8E8] py-[8px] rounded-[6px] flex items-center justify-center cursor-pointer">
          <Image
              src="/auth-images/apple.png"
              width={24}
              height={22}
              alt="apple"
              className="h-[29px]"
            />
          </button>
         </div>
         <p className="mt-[26px] text-[12px] text-[#525252] font-[300] text-center">By continuing, you agree to the  INSPAIRU <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">User Account Agreement  </span> and <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent"> Privacy Policy</span></p>

        </div>
      </div>
    </main>
  );
};

export default Page;
