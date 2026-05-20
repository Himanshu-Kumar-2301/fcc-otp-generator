import { useEffect, useState } from "react";

const OTPGenerator = () => {
  const [otp, setOtp] = useState<number | null>(null);
  const [timer, setTimer] = useState<number>(0);

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOTP);
    setTimer(5);
  };

  useEffect(() => {
    if (timer === 0) return;
    const time = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(time);
  }, [timer]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p
        id="otp-timer"
        aria-live="polite"
        style={{ display: `${otp ? "block" : "none"}` }}
      >
        {timer > 0
          ? `Expires in: ${timer} seconds`
          : otp
            ? "OTP expired. Click the button to generate a new OTP."
            : ""}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
