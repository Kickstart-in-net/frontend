// app/(auth)/signup/page.tsx
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
        "https://mock.apidog.com/m1/649773-0-default/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();

        // Extract message and authToken from the response data
        const { message, authToken } = data;

        // Print the message and authToken to the console
        console.log("Message:", message);
        console.log("Auth Token:", authToken);

        // Save the auth token to local storage
        localStorage.setItem("authToken", authToken);

        // Navigate to another page after successful signup
        router.push("/user"); // Replace with your desired route
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Your signup form or content goes here */}
      <div className="py-6">
        <h2 className="text-4xl py-2 font-bold text-center text-slate-200">
          Create Your Account
        </h2>
        <p className="text-sm font-light text-slate-200 text-center">
          Welcome! Please fill in the details to get started.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[60%] rounded-lg text-sm [&>*]:py-3"
      >
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
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-1 text-slate-200"
          >
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
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-50"></div>
          <span className="flex-shrink mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t-2 border-gray-50"></div>
        </div>

        <div className="flex justify-between space-x-4">
          <button className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md">
            <FaGithub className="text-black" />
          </button>
          <button className="flex items-center justify-center w-full p-2 bg-white border rounded-md hover:bg-gray-100 shadow-md">
            <FaLinkedin className="text-blue-600" />
          </button>
        </div>
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
