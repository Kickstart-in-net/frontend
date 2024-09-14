"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle OAuth requests
  const handleOAuthRequest = async (provider: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://mock.apidog.com/m1/649773-0-default/auth/oauth/${provider}`,
        {
          method: "POST", // Adjust to "POST" if required by the API
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to authenticate with ${provider}`);
      }

      const data = await response.json();
      const authToken = data.authToken; // Adjust based on actual response format

      // Set authToken to local storage
      if (authToken) {
        localStorage.setItem("authToken", authToken);
        router.push("/user"); // Redirect to the user page
      } else {
        console.error("No authToken received.");
      }
    } catch (error) {
      console.error("An error occurred during OAuth:", error);
      alert(`An error occurred: ${(error as Error).message}`); // Type casting error to Error
    }
  };

  // Function to handle click event for each button
  const handleClick = (provider: string) => () => handleOAuthRequest(provider);

  // Handle form submission for signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Make API call to backend
    try {
      const response = await fetch(
        "https://mock.apidog.com/m1/649773-0-default/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            FullName: formData.name,
            Bio:"",
            Email: formData.email,
            Password: formData.password,
            ProfileUrl:"null",
            PhoneNumber:0,
            
          }),
        }
      );

      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();

        // Extract message and authToken from the response data
        const { message, authToken } = data;

        // Print the message and authToken to the console
        // console.log("Message:", message);
        // console.log("Auth Token:", authToken);

        // Save the auth token to local storage
        localStorage.setItem("authToken", authToken);

        // Navigate to another page after successful signup
        router.push("/signup/selectprofile"); // Replace with your desired route
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Signup Form Header */}
      <div className="py-6">
        <h2 className="text-4xl py-2 font-bold text-center text-slate-200">
          Create Your Account
        </h2>
        <p className="text-sm font-light text-slate-200 text-center">
          Welcome! Please fill in the details to get started.
        </p>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSubmit}
        className="w-[60%] rounded-lg text-sm [&>*]:py-3"
      >
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-1 text-slate-200">
            Enter your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            placeholder="Eg: John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-1 text-slate-200">
            Enter your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            placeholder="Eg: johndoe@example.com"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block mb-1 text-slate-200">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword" className="block mb-1 text-slate-200">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="text-black w-full px-4 py-2 border rounded-md bg-slate-50"
            required
          />
        </div>

        {/* Divider */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-50"></div>
          <span className="flex-shrink mx-4 text-gray-300">or</span>
          <div className="flex-grow border-t-2 border-gray-50"></div>
        </div>

        {/* Social Authentication Buttons */}
        <div className="flex justify-between space-x-4">
          {/* Google OAuth button */}
          <button
            onClick={handleClick("google")}
            type="button"
            className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google-logo"
            />
          </button>

          {/* GitHub OAuth button */}
          <button
            onClick={handleClick("github")}
            type="button"
            className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaGithub className="text-black text-xl" />
          </button>

          {/* LinkedIn OAuth button */}
          <button
            onClick={handleClick("linkedin")}
            type="button"
            className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md"
          >
            <FaLinkedin className="text-blue-600 text-xl" />
          </button>
        </div>

        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-56 px-4 py-2 font-semibold rounded-full text-white text-2xl bg-blue-600 hover:bg-blue-700"
          >
            Continue {">"}
          </button>
        </div>
      </form>
    </div>
  );
}