"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required."),
  dob: z.date({
    required_error: "Date of birth is required.",
  }),
  pan: z.string().min(1, "PAN number is required."),
  interests: z.array(z.string()),
  experience: z.string().min(1, "Work experience is required."),
  bio: z.string().min(1, "Bio is required."),
});

type FormData = z.infer<typeof FormSchema>;

const FreelancerForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
      dob: new Date(),
      pan: "",
      interests: [],
      experience: "",
      bio: "",
    },
  });

  const { handleSubmit, control, setValue, getValues } = form;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+91"); // Default to India
  const availableInterests = [
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Database Administrator",
    "Blockchain Developer",
    "Cybersecurity Analyst",
    "AI Researcher",
    "Game Developer",
  ];
  const router = useRouter();

  const handleInterestSelect = (interest: string) => {
    const interests = getValues("interests");
    const updatedInterests = interests.includes(interest)
      ? interests.filter((i) => i !== interest)
      : [...interests, interest];
    setValue("interests", updatedInterests);
    setDropdownOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "https://mock.apidog.com/m1/649773-0-default/users/freelancer",
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
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-10/12 ">
        {/* Phone number input with country selector */}
        <div className="flex flex-col items-start mt-10 space-y-4 ">
          <label htmlFor="phone" className="text-lg text-white">
            Enter your Phone Number:
          </label>
          <PhoneInput
            country="in" // Default country
            inputStyle={{
              fontSize: "1.125rem",
              border: "none",
              borderRadius:'50%',
              height:'100%',
              width:'100%'
            }}
            containerStyle={{}}
            buttonStyle={{border:'none',borderRadius:'50%', backgroundColor:'white', height:'100%'}}
            dropdownStyle={{borderRadius:'10px' }}

            value={getValues("phoneNumber")}
            onChange={(phone) => setValue("phoneNumber", phone)}
            inputClass="w-full border-white bg-white text-black text-4xl px-4 py-2 "
            containerClass="border h-12 rounded-2xl bg-white w-full "
            buttonClass="bg-white "
            dropdownClass="bg-white text-black"
            enableSearch={true} // To enable search in the country dropdown
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
        </div>

        {/* Date of Birth input */}
        <FormField
          control={control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white text-lg">
                Date of Birth:
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="bg-white h-12 rounded-2xl">
                    <Button
                      variant={"outline"}
                      className="w-full pl-3 text-left font-normal text-lg"
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50 bg-white" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PAN Number input */}
        <FormField
          control={control}
          name="pan"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel className="text-lg">Enter your PAN Number:</FormLabel>
              <FormControl>
                <input
                  id="pan"
                  type="text"
                  {...field}
                  placeholder="Eg: 1234 1234 1234"
                  className="text-black p-2 border h-12 rounded-2xl w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field of Interests dropdown */}
        <div>
          <label htmlFor="interests" className="text-white text-lg">
            Field of Interests:
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full p-2 border h-12 rounded-2xl bg-gray-200 text-left"
            >
              {getValues("interests").length > 0
                ? `${getValues("interests").length} selected`
                : "Select interests"}
            </button>
            {dropdownOpen && (
              <div className=" absolute top-full left-0 mt-1 w-full border border-slate-500 rounded-2xl bg-white shadow-lg z-10 h-52 overflow-y-scroll">
                {availableInterests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestSelect(interest)}
                    className={`block w-full text-left p-2 ${
                      getValues("interests").includes(interest)
                        ? "bg-blue-100"
                        : ""
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            )}
            <div className="mt-2 flex flex-wrap gap-2">
              {getValues("interests").map((interest) => (
                <span
                  key={interest}
                  className="inline-block bg-transparent text-lg font-medium text-white border-2 rounded-3xl px-2 py-1 "
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience dropdown */}
        <FormField
          control={control}
          name="experience"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel className="text-lg">Work Experience:</FormLabel>
              <FormControl>
                <select
                  id="experience"
                  {...field}
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bio input */}
        <FormField
          control={control}
          name="bio"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel className="text-lg">Bio:</FormLabel>
              <FormControl>
                <textarea
                  id="bio"
                  {...field}
                  placeholder="A brief self introduction"
                  className="text-black p-2 border rounded-2xl w-full h-32 text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-64 px-4 py-6 mb-4 rounded-full text-white text-2xl bg-blue-600 hover:bg-blue-700"
          >
            Create Account
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FreelancerForm;
