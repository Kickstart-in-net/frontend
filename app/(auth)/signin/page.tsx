"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

const SignIn = () => {
  const router = useRouter();
  const [isPhoneSignIn, setIsPhoneSignIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const toggleSignInMethod = () => {
    setIsPhoneSignIn(!isPhoneSignIn);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSignIn = async () => {
    try {
      const response = await fetch("https://mock.apidog.com/m1/649773-0-default/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const { authToken } = data;

        // Save the auth token to local storage
        localStorage.setItem("authToken", authToken);

        // Check if the user is already registered
        if (data.isRegistered) {
          // Navigate to student login page
          router.push("/studentlogin");
        } else {
          alert("User not registered");
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during email login:", error);
      alert("Error during login");
    }
  };

  const handlePhoneSignIn = async () => {
    // Redirect to OTP verification page
    router.push("/verifyotp");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isPhoneSignIn) {
      // Handle phone number sign in
      if (!formData.phone) {
        alert("Please enter a phone number");
        return;
      }
      handlePhoneSignIn();
    } else {
      // Handle email sign in
      if (!formData.email || !formData.password) {
        alert("Please fill in both email and password");
        return;
      }
      handleEmailSignIn();
    }
  };
  const handleSignUpRedirect = () => {
    // Redirect to the Sign Up page
    router.push("/signup");
  };


  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="py-6">
        <h2 className="text-4xl py-2 font-bold text-center text-slate-200">
          Sign in to KickStart
        </h2>
        <p className="text-sm font-light text-slate-200 text-center">
          Welcome back! Please Sign in to continue
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[60%] rounded-lg text-sm [&>*]:py-3"
      >
        <div className="flex justify-between space-x-4">
          <button className="flex items-center justify-center h-12 w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md">
            <FaGoogle className="text-red-500 text-lg" />
          </button>
          <button className="flex items-center justify-center h-12 w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md">
            <FaGithub className="text-black text-lg" />
          </button>
          <button className="flex items-center justify-center w-full h-12 p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md">
            <FaLinkedin className="text-blue-600 text-lg" />
          </button>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-50"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t-2 border-gray-50"></div>
        </div>

        {!isPhoneSignIn ? (
          <>
            <div>
              <label htmlFor="email" className="block mb-1 text-slate-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-black h-12 w-full px-4 py-2 border rounded-md bg-slate-50"
                placeholder="Eg: johndoe@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-slate-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="text-black h-12 w-full px-4 py-2 border rounded-md bg-slate-50"
                required
              />
            </div>
          </>
        ) : (
          <div>
            <label htmlFor="phone" className="block mb-1 text-slate-200">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="text-black h-12 w-full px-4 py-2 border rounded-md bg-slate-50"
              placeholder="Eg: +1234567890"
              required
            />
          </div>
        )}

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md text-white text-base bg-blue-600 hover:bg-blue-700"
          >
            Continue {">"}
          </button>
        </div>

        <div
          className="flex justify-center items-center hover:cursor-pointer"
          onClick={toggleSignInMethod}
        >
          <a className="text-blue-600 text-base">
            {isPhoneSignIn ? "Use Email Instead" : "Use Phone Number Instead"}
          </a>
        </div>
      </form>

      <div className="mt-4 flex justify-center items-center">
        <p className="text-white text-base">
          Don’t have an account?{" "}
          <a className="text-blue-600 text-base hover:cursor-pointer" onClick={handleSignUpRedirect}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

