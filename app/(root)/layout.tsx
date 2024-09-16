import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" >
      
      <div className={`${inter.className} text-white`}>{children}</div>
      <div className="bg-[#111315] flex items-center p-8">
        {/* Left Section */}
        <div className="flex flex-col w-1/2">
          <div className="pl-8 w-2/3 px-15 leading-snug text-7xl font-bold text-transparent bg-clip-text-image">
            Interested in Our Vision?
          </div>
        </div>

        {/* Right Section */}
        <div className="justify-between pl-[18%] w-1/2  text-white flex flex-row ">
            <div className="w-[40%]">
            <p className="mb-4  text-[20px] text-wrap font-semibold">
              If you'd like to invest with us, or have a great investment
              proposition to discuss, please shoot us a note.
            </p>
            <button className="text-lg px-3 py-2 border-2 border-purple-600 rounded-full hover:bg-purple-600 text-white transition-all">
              Contact us
            </button>
          </div>

          <div className="w-1/2 pl-4">
            <p className="text-2xl">Follow us on:</p>
            <div className="flex flex-col mt-4">
              {/* LinkedIn Link */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex group">
                  <img
                    className="w-40"
                    src="/linkedln link.svg"
                    alt="LinkedIn"
                  />
                  <img
                    className="transition-transform duration-500 ease group-hover:rotate-45"
                    src="/Arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </a>

              {/* Instagram Link */}
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex pt-5 group">
                  <img
                    className="w-40"
                    src="/instagram link.svg"
                    alt="Instagram"
                  />
                  <img
                    className="transition-transform duration-500 ease group-hover:rotate-45"
                    src="/Arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}