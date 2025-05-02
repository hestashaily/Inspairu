
"use client";
import { useState } from "react";
import OtpInput from 'react-otp-input';

export default function App() {
  const [otp, setOtp] = useState('');

  return (
    <div className="flex lg:justify-center justify-start mt-[10px]">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span className="mx-2">-</span>}
        renderInput={(props) => (
          <input
            {...props}
             className="otp-input"
            style={{
            //   width: '102px',
              height: '48px',
              fontSize: '18px',
              textAlign: 'center',
              border: '1px solid #ccc',
              borderRadius: '8px',
              outline: 'none',
            }}
          />
        )}
      />
    </div>
  );
}
