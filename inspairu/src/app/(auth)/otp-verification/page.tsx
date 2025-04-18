import Carousel from "@/app/components/Carousel";
import OTPInputField from "@/app/components/OTPInputField";
import Image from "next/image";
const Page: React.FC = () => {
  return (
    <main className="px-[40px]">
      <div className=" pt-[40px] flex items-center justify-center lg:flex-row flex-col gap-[66px]">
        <Carousel />
          <div className="lg:max-w-[490px] max-w-full w-full">
            <h2 className="font-[600] text-[24px] text-[#525252]">Enter OTP</h2>
            <p className="font-[400] text-[16px] text-[#525252]">We have sent a OTP to your registered e-mail ID</p>
            <OTPInputField />
            <button className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer">
              Verify
            </button>
            <p className="mt-[24px] font-[600] text-[#525252] text-[16px]">
              Didn’t receive code? {" "}
              <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent cursor-pointer">
                Resend OTP
              </span>
            </p>

           
          </div>
      </div>
      <p className=" text-[12px] text-[#525252] font-[300] lg:text-end text-center lg:mr-[60px] mr-[0px]">
            By continuing, you agree to the INSPAIRU
            <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
              User Account Agreement {" "}
            </span>
            and {" "}
            <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </p>
    </main>
  );
};

export default Page;
