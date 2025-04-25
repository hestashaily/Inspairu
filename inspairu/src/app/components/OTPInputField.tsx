"use client";
import OtpInput from "react-otp-input";
interface OTPInputFieldProps {
  otpValue: string;
  setOtpValue: (value: string) => void;
}
export default function App({ otpValue, setOtpValue }: OTPInputFieldProps) {
  return (
    <div className="flex lg:justify-center justify-start mt-10">
      <OtpInput
        value={otpValue}
        onChange={setOtpValue}
        numInputs={4}
        renderSeparator={<span className="mx-2">-</span>}
        renderInput={(props) => (
          <input
            {...props}
            className="otp-input"
            style={{
              //   width: '102px',
              height: "48px",
              fontSize: "18px",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              outline: "none",
            }}
          />
        )}
      />
    </div>
  );
}
