
// Footer component that includes social media icons with links and copyright info
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-screen border-t-[1px] border-t-white py-3 px-2 sm:px-[10%] ">
      <div className="flex flex-col justify-center max-w-5xl w-full items-center">
        <div className="flex gap-2 justify-between w-full items-center">
          <div>
            <h2 className="text-base sm:text-2xl text-white ">Stay Connected <span className="text-sm italic">with</span> CoCov</h2>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex gap-2 justify-center items-center">
            
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/j_gessien/" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#F7CE68] transition duration-200">
              <FaInstagram className="text-sm sm:text-2xl"/>
            </a>
            
            {/* Twitter Icon */}
            <a href="https://x.com/Joo_joGE" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#F7CE68] transition duration-200">
              <FaXTwitter className="text-sm sm:text-2xl"/>
            </a>
            
            {/* Facebook Icon */}
            <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#F7CE68] transition duration-200">
              <FaFacebookSquare className="text-sm sm:text-2xl"/>
            </a>
            
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/godfredessien/" target="_blank" rel="noopener noreferrer" className="text-[#333333] hover:text-[#F7CE68] transition duration-200">
              <FaLinkedin className="text-sm sm:text-2xl"/>
            </a>            

          </div >
        </div>

        {/* Copyright Section */}
        <div className="flex gap-2 w-full justify-center items-center py-3">
          <FaRegCopyright className="text-sm sm:text-lg text-white md:text-lg"/>
          <p className="text-base sm:text-lg text-white">2024 CoCov. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
