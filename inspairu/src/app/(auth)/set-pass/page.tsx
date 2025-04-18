import Carousel from "@/app/components/Carousel";
import OTPInputField from "@/app/components/OTPInputField";
import Image from "next/image";
const Page: React.FC = () => {
  return (
    <main className="px-[40px]">
      <div className=" pt-[40px] flex items-center justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel  />
        <div className="md:max-w-[490px] max-w-full w-full">
          <h2 className="font-[600] text-[24px] text-[#525252]">
            Set a strong password
          </h2>
          <p className="font-[400] text-[16px] text-[#525252]">
            Create a strong password to keep your account secure.
          </p>
          <form action="">
          <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
            <input
              type="password"
              placeholder="Enter Password"
              className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
            />
            <Image
              src="/auth-images/eyeclosed.png"
              width={26}
              height={26}
              alt="eyeclosed"
            />
          </div>
          <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
            <input
              type="password"
              placeholder="Confirm Password"
              className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
            />
          </div>
          <button className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer">
            Create Account
          </button>
          </form>
       
        </div>
      </div>
      <p className=" text-[12px] text-[#525252] font-[300] lg:text-end  text-center  lg:mr-[60px] mr-[0px] lg:mt-[0px] mt-[10px]">
        By continuing, you agree to the INSPAIRU
        <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
          User Account Agreement{" "}
        </span>
        and{" "}
        <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
          Privacy Policy
        </span>
      </p>
    </main>
  );
};

export default Page;
