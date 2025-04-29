import { DefaultSession, DefaultUser } from "next-auth";

interface userSignup {
  email: string;
  password: string;
}

interface ErrorMessage {
  message: string;
  status: number;
}
// types.ts (optional to extract and reuse)
export interface SignUpFormData {
  firstName: string;
  lastName: string;
  userName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
  otp: string;
}

interface OtpVerificationProps {
  onNextStep: () => void;
  updateFormData: (data: Partial<SignUpFormData>) => void;
  formData: SignUpFormData;
}

interface settingsProps {
  theme: string;
  position: string;
  duration: number;
  style: {
    background: string;
    color: string;
    fontSize: string;
    padding: string;
    borderRadius: string;
  };
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      user_id: string;
      user_uuid: string;
      email: string;
      userName?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    user_id: bigint | number;
    user_uuid: string;
    username?: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user_id: string;
    user_uuid: string;
    email: string;
    userName?: string;
  }
}

interface accountProps {
  id: number;
  userId: bigint;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
}

interface userProps {
  user_id: bigint;
  user_uuid: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  bio?: string | null;
  country_code: string;
  phone_number: string;
  dob: Date | string;
  gender: "M" | "F" | "O";
  password: string;
  auth_key: string;
  is_blocked: boolean;
  is_deleted: boolean;
  is_verified: boolean;
  created_datetime: Date | string;
  updated_datetime: Date | string;
}
