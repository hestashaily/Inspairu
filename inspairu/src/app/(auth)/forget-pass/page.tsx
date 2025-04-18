import Carousel from "@/app/components/Carousel";
import Link from "next/link";
const Page: React.FC = () => {
  return (
    <main className="px-[40px]">
      <div className=" pt-[40px] flex items-center justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel  />
        <div className="md:max-w-[490px] max-w-full w-full">
          <h2 className="font-[600] text-[24px] text-[#525252]">
          Forgot Password
          </h2>
          <p className="mt-[8px] font-[400] text-[16px] text-[#525252]">
          Enter your email address and we’ll OTP to reset password
          </p>
          <form action="">
          <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
            <input
              type="email"
              placeholder="Email"
              className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
            />
        
          </div>
      
          <button className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer">
          Submit
          </button>
          </form>
       <p className="font-[400] mt-[30px] text-[16px] text-[#344054]">Go to {" "}
        <Link href="/login">
        <span className="bg-gradient-to-b font-[600] cursor-pointer
         from-[#973998] to-[#DB5689] bg-clip-text text-transparent">Sign In</span>
         </Link>
        </p>
       
        </div>
      </div>
     
    </main>
  );
};

export default Page;
