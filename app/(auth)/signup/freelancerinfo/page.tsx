// "use client";

// import React, { useState } from "react";
// import Select from "react-select";
// import { Calendar } from "@/components/ui/calendar";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Select as ShadSelect, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// export default function ProfileForm() {
//   const [formData, setFormData] = useState({
//     phone: "",
//     dob: "",
//     pan: "",
//     interests: "",
//     profession: "",
//   });
//   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

//   const interestsOptions = [
//     "Web-Dev",
//     "App-Dev",
//     "Machine Learning",
//     "UI Designer",
//     "UX Research",
//     "Database Admin",
//     "Data Analysis",
//   ];

//   const professionOptions = [
//     { value: "Software Developer", label: "Software Developer" },
//     { value: "UI/UX Designer", label: "UI/UX Designer" },
//     { value: "Data Scientist", label: "Data Scientist" },
//     // Add more options as required
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDateChange = (date: Date | null) => {
//     if (date) setFormData((prev) => ({ ...prev, dob: date.toLocaleDateString() }));
//   };

//   const handlePhoneChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, phone: value }));
//   };

//   const handleInterestSelect = (interest: string) => {
//     if (selectedInterests.includes(interest)) {
//       setSelectedInterests((prev) => prev.filter((i) => i !== interest));
//     } else {
//       setSelectedInterests((prev) => [...prev, interest]);
//     }
//     setFormData((prev) => ({
//       ...prev,
//       interests: selectedInterests.join(", "),
//     }));
//   };

//   const handleProfessionChange = (selectedOption: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       profession: selectedOption ? selectedOption.value : "",
//     }));
//   };

//   return (
//     <form className="space-y-4 p-4 text-white rounded-lg max-w-md mx-auto">
//       <div>
//         <label className="block mb-1">Enter your Phone Number:</label>
//         <PhoneInput
//           country={"in"}
//           value={formData.phone}
//           onChange={handlePhoneChange}
//           inputProps={{
//             name: "phone",
//             required: true,
//             className: "text-black w-full px-4 py-2 border rounded-md bg-slate-50",
//           }}
//         />
//       </div>

//       <div>
//         <label className="block mb-1 text-slate-200">Date Of Birth:</label>
//         <Calendar selected={new Date(formData.dob)} onSelect={handleDateChange} />
//       </div>

//       <div>
//         <label className="block mb-1 text-slate-200">Enter your PAN Number:</label>
//         <Input
//           type="text"
//           name="pan"
//           value={formData.pan}
//           onChange={handleInputChange}
//           placeholder="Eg: 1234 1234 1234"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 text-slate-200">Fields of your Interests:</label>
//         <div className="flex flex-wrap gap-2">
//           {interestsOptions.map((interest) => (
//             <Button
//               key={interest}
//               variant={selectedInterests.includes(interest) ? "solid" : "outline"}
//               onClick={() => handleInterestSelect(interest)}
//             >
//               {interest}
//             </Button>
//           ))}
//         </div>
//         <Input
//           type="text"
//           name="interests"
//           value={selectedInterests.join(", ")}
//           readOnly
//           placeholder="Eg: Web Development,UI/UX"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 text-slate-200">Your Profession:</label>
//         <Select
//           options={professionOptions}
//           value={professionOptions.find((option) => option.value === formData.profession)}
//           onChange={handleProfessionChange}
//           placeholder="Select your profession"
//           className="text-black"
//         />
//       </div>

//       <Button type="submit" className="w-full">Submit</Button>
//     </form>
//   );
// }
