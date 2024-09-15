"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

// Zod schema for form validation
const FormSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required."),
  organizationType: z.string().min(1, "Organization Type is required."),
  organizationName: z.string().min(1, "Organization Name is required."),
  numberOfEmployees: z.string().min(1, "Number of Employees is required."),
  skillsLookingFor: z.string().min(1, "Skills are required."),
  industrySector: z.string().min(1, "Industry or Sector is required."),
  experience: z.string().min(1, "Work experience is required."),
});

type FormData = z.infer<typeof FormSchema>;

const ClientInfo = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
      organizationType: "",
      organizationName: "",
      numberOfEmployees: "",
      skillsLookingFor: "",
      industrySector: "",
      experience: "",
    },
  });

  const { handleSubmit, control, setValue, getValues, formState } = form;
  const { errors } = formState;
  const [countryCode, setCountryCode] = useState("+91"); // Default to India
  const router = useRouter();

  // On form submission
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "https://mock.apidog.com/m1/649773-0-default/users/employer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const status = response.status;
        if (status === 201) {
          router.push("/verifyotp");
        }
      } else {
        console.error("Submission failed with status:", response.status);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-10/12">
      {/* Phone number input with country selector */}
      <div className="flex flex-col items-start mt-10 space-y-4">
        <label htmlFor="phone" className="text-lg text-white">
          Enter your Phone Number:
        </label>
        <PhoneInput
          inputStyle={{
            fontSize: "1.125rem",
            border: "none",
            borderRadius: "50%",
            height: "100%",
            width: "100%",
          }}
          containerStyle={{}}
          buttonStyle={{
            border: "none",
            borderRadius: "50%",
            backgroundColor: "white",
            height: "100%",
          }}
          dropdownStyle={{ borderRadius: "10px" }}
          country="in" // Default country
          value={getValues("phoneNumber")}
          onChange={(phone) => setValue("phoneNumber", phone)}
          inputClass="w-full border-white bg-white text-black text-4xl px-4 py-2"
          containerClass="border h-12 rounded-2xl bg-white w-full"
          buttonClass="bg-white"
          dropdownClass="bg-white text-black"
          enableSearch={true} // To enable search in the country dropdown
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
        />
        {errors.phoneNumber && (
          <span className="text-white">{errors.phoneNumber.message}</span>
        )}
      </div>

      {/* Organization Type */}
      <div>
        <label htmlFor="organizationType" className="text-white text-lg">
          Organization Type:
        </label>
        <input
          id="organizationType"
          type="text"
          placeholder="Eg: Individual, Startup, Business"
          {...form.register("organizationType")}
          className="text-black p-2 border h-12 rounded-2xl w-full"
        />
        {errors.organizationType && (
          <span className="text-white">{errors.organizationType.message}</span>
        )}
      </div>

      {/* Organization Name */}
      <div>
        <label htmlFor="organizationName" className="text-white text-lg">
          Organization Name:
        </label>
        <input
          id="organizationName"
          type="text"
          placeholder="Eg: Loerum Pvt. Ltd"
          {...form.register("organizationName")}
          className="text-black p-2 border h-12 rounded-2xl w-full"
        />
        {errors.organizationName && (
          <span className="text-white">{errors.organizationName.message}</span>
        )}
      </div>

      {/* Number of Employees */}
      <div>
        <label htmlFor="numberOfEmployees" className="text-white text-lg">
          Number of Employees:
        </label>
        <input
          id="numberOfEmployees"
          type="text"
          placeholder="Eg: 100"
          {...form.register("numberOfEmployees")}
          className="text-black p-2 border h-12 rounded-2xl w-full"
        />
        {errors.numberOfEmployees && (
          <span className="text-white">{errors.numberOfEmployees.message}</span>
        )}
      </div>

      {/* Skills you are looking for */}
      <div>
        <label htmlFor="skillsLookingFor" className="text-white text-lg">
          Skills you are looking for?:
        </label>
        <input
          id="skillsLookingFor"
          type="text"
          placeholder="Eg: Web Development, UI/UX"
          {...form.register("skillsLookingFor")}
          className="text-black p-2 border h-12 rounded-2xl w-full"
        />
        {errors.skillsLookingFor && (
          <span className="text-white">{errors.skillsLookingFor.message}</span>
        )}
      </div>

      {/* Industry or Sector */}
      <div>
        <label htmlFor="industrySector" className="text-white text-lg">
          Industry or Sector:
        </label>
        <input
          id="industrySector"
          type="text"
          placeholder="Eg: Technology, Healthcare"
          {...form.register("industrySector")}
          className="text-black p-2 border h-12 rounded-2xl w-full"
        />
        {errors.industrySector && (
          <span className="text-white">{errors.industrySector.message}</span>
        )}
      </div>

      {/* Work Experience dropdown */}
      <div>
        <label htmlFor="experience" className="text-white text-lg">
          Work Experience:
        </label>
        <select
          id="experience"
          {...form.register("experience")}
          className="cursor-pointer p-2 border h-12 rounded-2xl w-full text-black"
        >
          <option value="">Select experience</option>
          <option value="Fresher">No experience (Fresher)</option>
          <option value="0-1 years">0-1 years</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2-3 years">2-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-7 years">5-7 years</option>
          <option value="7-10 years">7-10 years</option>
          <option value="10-15 years">10-15 years</option>
          <option value="15+ years">15+ years</option>
        </select>
        {errors.experience && (
          <span className="text-white">{errors.experience.message}</span>
        )}
      </div>

      {/* Submit button */}
      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-64 px-4 py-6 mb-4 rounded-full text-white text-2xl bg-blue-600 hover:bg-blue-700"
        >
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default ClientInfo;
