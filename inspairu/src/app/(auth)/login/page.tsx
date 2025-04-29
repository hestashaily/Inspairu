"use client";
import Carousel from "@/app/components/Carousel";
import ThemeToggle from "@/app/components/ThemeToggle";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const Page: React.FC = () => {
  const route = useRouter();
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/home" });
  };
  const { data: session, status } = useSession();

  console.log("Session:", session);
  console.log("Status:", status);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        console.error("Login error:", result.error);
      }
      if (result?.ok) {
        toast.success("Login successful");
        console.log("Login successful");
        route.push("/home");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <main>
      <ThemeToggle />
      <div className="px-[20px] py-[40px] flex items-start justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel />
        <div className="lg:max-w-[490px] max-w-full w-full">
          <h1 className="font-[600] text-[28px] text-[#525252] ">Sign In</h1>
          <p className="font-[400] text-[16px] text-[#525252]  mt-[8px]">
            Enter your login details to sign in
          </p>
          <form onSubmit={formSubmitAction}>
            <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
              />
            </div>
            <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
              <input
                type="password"
                placeholder=" Password"
                name={password}
                onChange={(e) => setPassword(e.target.value)}
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
                <p className="font-[400] dark:text-white text-[#525252] text-[16px]">
                  Remember me
                </p>
              </div>
              <Link href="/forget-pass">
                <p className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent font-[400] text-[16px]">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <button className="btn-gradient mt-[60px] max-w-full w-full py-[8px] rounded-[6px] font-[600] text-[16px] text-white cursor-pointer">
              Sign In
            </button>
            <p className=" mt-[24px] font-[400] text-[16px] dark:text-black text-[#344054]">
              Don’t have an account yet?{" "}
              <Link href="/sign-up">
                <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent font-[600] cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </form>
          <div className="mt-[30px]">
            <p className="font-[500] text-[14px] text-[#A1A1A1] text-center">
              - OR -{" "}
            </p>
            <div className="flex items-center justify-center gap-[14px] mt-[39px]">
              <button
                onClick={handleGoogleSignIn}
                className="max-w-[163px] w-full border border-[#E8E8E8] py-[8px] rounded-[6px] flex items-center justify-center cursor-pointer"
              >
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
