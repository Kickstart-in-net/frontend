// app/(auth)/layout.tsx
import Image from "next/image";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[url('/authbackground.png')] bg-cover min-h-screen flex flex-row">
      <div className="w-[55%] flex items-center justify-center">
        <Image
          src="/logo.svg"
          width={600}
          height={500}
          alt="kickstart logo"
          className=""
        />
      </div>
      <div className="w-[45%] rounded-lg backdrop-blur-md bg-white/10 flex items-center justify-center flex-col">
        {children}
      </div>
    </section>
  );
}
