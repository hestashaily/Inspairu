import Carousel from "@/app/components/Carousel";
import Image from "next/image";
import Link from "next/link";
const Page: React.FC = () => {
  return (
    <main className="flex w-[100%] items-center justify-center min-h-[100vh] h-[100%]">
      <div className="flex w-[100%] items-start justify-center gap-[66px] lg:flex-row flex-col">

        <Carousel />
        <div className="max-w-[530px] w-full">
          <h1 className="font-[600] text-[28px] text-[#525252]">Sign In</h1>
          <p className="font-[400] text-[16px] text-[#525252] mt-[8px]">
            Enter your login details to sign in
          </p>
          <form action="">
            <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
              <input
                type="email"
                placeholder="Email"
                className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
              />
            </div>
            <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
              <input
                type="password"
                placeholder=" Password"
                className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
              />
              <Image
                src="/auth-images/eyeclosed.png"
                width={26}
                height={26}
                alt="eyeclosed"
              />
            </div>
            <div className="flex items-center justify-between mt-[15px]">
              <div className="flex items-center gap-[12px]">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <p className="font-[400] text-[#525252] text-[16px]">
                  Remember me
                </p>
              </div>
              <Link href="/forget-pass">
              <p className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent font-[400] text-[16px]">Forgot Password?</p>
              </Link>
            </div>
            <button className="btn-gradient mt-[60px] max-w-full w-full py-[8px] rounded-[6px] font-[600] text-[16px] text-white cursor-pointer">
            Sign In
            </button>
            <p className=" mt-[24px] font-[400] text-[16px] text-[#344054]">Don’t have an account yet? <Link href="/sign-up"> <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent font-[600] cursor-pointer">Sign up</span> </Link></p>
          </form>
          <div className="mt-[30px]">
            <p className="font-[500] text-[14px] text-[#A1A1A1] text-center">- OR - </p>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
