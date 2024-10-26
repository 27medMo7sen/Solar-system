import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { CgShapeZigzag } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import backgroundImage from "../../assets/background.png";
import { Link } from "react-router-dom";

const links = ["home", "about-Us", "services", "products", "calculate"];
const blogs = [
  {
    title: "How to choose the right solar panel for your home",
    date: "15th August 2021",
  },
  {
    title: "The benefits of solar energy for businesses",
    date: "12th August 2021",
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white">
      <div className="flex gap-10 w-full justify-around py-14 max-h-80 overflow-y-auto flex-wrap mx-sm:p-5 sm:gap-5">
        <div className="flex flex-col gap-3 mx-sm:w-full mx-sm:items-center mx-sm:text-center">
          <p className="font-medium">Logo</p>
          <p className="text-sm w-80 flex flex-col gap-1 mx-sm:w-full">
            <span className="font-bold">
              Ready to cut energy costs and go green?
            </span>
            Solar Solutions offers premium solar panels and systems tailored for
            homes and businesses. From expert installation to hassle-free
            maintenance, we’ve got everything you need to harness the power of
            the sun. Join the solar revolution today!
          </p>
          <div className="flex items-center gap-3 mx-sm:justify-center">
            <div className="bg-white text-yellow-400 p-2 rounded-full cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white text-yellow-400 p-2 rounded-full cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="bg-white text-yellow-400 p-2 rounded-full cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-white text-yellow-400 p-2 rounded-full cursor-pointer">
              <GrYoutube />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mx-sm:w-full mx-sm:items-center">
          <div className="flex flex-col font-medium">
            Quick Links
            <div className="text-yellow-400">
              <CgShapeZigzag />
            </div>
          </div>
          <div className="flex flex-col mx-sm:items-center">
            {links.map((link, index) => (
              <Link
                className="flex items-center hover:underline hover:text-yellow-400"
                to={link}
                key={index}
              >
                <div className="text-yellow-400">
                  <MdOutlineKeyboardArrowRight />
                </div>
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 mx-sm:w-full mx-sm:items-center">
          <div className="flex flex-col font-medium">
            Latest Blogs
            <div className="text-yellow-400">
              <CgShapeZigzag />
            </div>
          </div>
          <div className="flex flex-col gap-5 mx-sm:items-center">
            {blogs.map((blog, index) => (
              <div key={index} className="mx-sm:text-center">
                <div className="flex cursor-pointer items-center mx-sm:justify-center">
                  <div className="text-yellow-400">
                    <MdOutlineKeyboardArrowRight />
                  </div>
                  <p className="w-48 hover:underline hover:text-yellow-400 mx-sm:w-full">
                    {blog.title}
                  </p>
                </div>
                <p className="text-xs text-center text-gray-400">{blog.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 mx-sm:w-full mx-sm:items-center">
          <div className="flex flex-col font-medium">
            Contact
            <div className="text-yellow-400">
              <CgShapeZigzag />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 mx-sm:justify-center">
              <div className="text-yellow-400">
                <GrMapLocation />
              </div>
              <p className="w-48 mx-sm:w-full mx-sm:text-center">
                44 Danwers, NY City, USA, 70-102
              </p>
            </div>
            <div className="flex items-center gap-2 mx-sm:justify-center">
              <div className="text-yellow-400">
                <HiOutlineMail />
              </div>
              <p className="w-48 mx-sm:w-full mx-sm:text-center">
                solar@example.com
              </p>
            </div>
            <div className="flex items-center gap-2 mx-sm:justify-center">
              <div className="text-yellow-400">
                <FaPhoneVolume />
              </div>
              <p className="w-48 mx-sm:w-full mx-mx-sm:text-center">
                91+585-656-658
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-12 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <p className="text-xs h-full flex justify-center items-center font-medium">
          © 2021 Solar Solutions. All rights reserved. Privacy Policy | Terms of
          Service
        </p>
      </div>
    </footer>
  );
};
