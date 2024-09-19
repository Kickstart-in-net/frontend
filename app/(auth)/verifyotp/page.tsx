"use client";

import React, { useEffect, useState } from 'react';

import jwt from 'jsonwebtoken' // Import the jsonwebtoken library

// Function to decode the JWT and get the payload
function decodeToken(token: string) {
  try {
    // Decode the token using jsonwebtoken's decode method
    return jwt.decode(token) as { name: string; exp: number }; // Specify the structure of your token payload
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}

import { useRouter } from "next/navigation";

const OtpVerification = () => {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
      // Get the auth token from local storage
      const token = localStorage.getItem('authToken');
  
      if (token) {
        const decodedToken = decodeToken(token);
  
        // Ensure the token is valid and not expired
        if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
          setName(decodedToken.name);
        } else {
          console.error("Token has expired or is invalid.");
          localStorage.removeItem('authToken'); // Optionally clear the expired/invalid token
        }
      } else {
        console.error("No token found in local storage.");
      }
    }, []);
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (otpValue: string) => {
    setOtp(otpValue);
  };

  const verifyOtp = async () => {
    setIsLoading(true);
    setErrorMessage(""); // Reset error message

    try {
      const response = await fetch(
        "https://mock.apidog.com/m1/649773-0-default/auth/verify/email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp }), // Send OTP in request body
        }
      );

      // Handle response based on status
      if (response.status === 200) {
        // Redirect to another page after successful verification
        router.push("/studentlogin"); // Replace '/dashboard' with your actual redirection page
      } else {
        setErrorMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to verify OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center text-gray-400 mb-11">
        <h1 className="text-4xl font-bold">Continue to KickStart</h1>
        <p className="text-sm mt-2"> {name ? <span>Welcome, {name}!</span> : <span>Welcome!</span>} Please verify OTP to continue</p>
      </div>

      {/* OTP Input Fields */}
      <div className="flex space-x-4 mb-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl border border-gray-400 rounded-md bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={otp[index] || ""}
              onChange={(e) => {
                const newOtp = otp.split("");
                newOtp[index] = e.target.value;
                setOtp(newOtp.join(""));
              }}
            />
          ))}
      </div>

      {errorMessage && (
        <div className="text-red-500 mt-4">
          {errorMessage}
        </div>
      )}

      {/* Verify Button */}
      <button
        onClick={verifyOtp}
        disabled={isLoading}
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring"
      >
        {isLoading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
};

export default OtpVerification;


