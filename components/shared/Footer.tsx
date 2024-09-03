import React from "react";

function Footer() {
  return (
    <div className="bg-[#111315] divHeightIncrese flex flex-col justify-between pt-10">
      <div className="flex items-center p-8">
        {/* Left Section */}
        <div className="flex flex-col w-1/2">
          <div className="pl-8 w-2/3 px-15 leading-snug text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Interested in Our Vision?
          </div>
        </div>

        {/* Right Section */}
        <div className="justify-between pl-20 w-1/2 text-white flex flex-row ">
          <div className="w-1/3">
            <p className="mb-4 text-xl">
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
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex linkedin">
                  <img
                    className="w-40"
                    src="/linkedln link.svg"
                    alt="linkedIn"
                  />
                  <img className="arrow1" src="/Arrow.svg" alt="" />
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <div className="flex pt-5 insta">
                  <img
                    className="w-40"
                    src="/instagram link.svg"
                    alt="linkedIn"
                  />
                  <img className="arrow2" src="/Arrow.svg" alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright info */}
      <div className="flex items-center text-xl mt-8 text-white">
        <h1 className="font-bold pl-7">&copy; Copyright 2024 Kickstart Inc.</h1>
        <p className="ml-4">All rights reserved.</p>
        <ul className="pl-7 list-disc flex space-x-7 cursor-pointer underline underline-offset-4">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
