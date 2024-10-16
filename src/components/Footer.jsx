
// Footer component that includes social media icons with links and copyright info
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h2>Stay Connected <span>with</span> CoCov</h2>
          </div>
          
          {/* Social Media Icons */}
          <div>
            
            {/* Instagram Icon */}
            <a>
              <FaInstagram />
            </a>
            
            {/* Twitter Icon */}
            <a>
              <FaXTwitter />
            </a>
            
            {/* Facebook Icon */}
            <a>
              <FaFacebookSquare />
            </a>
            
            {/* LinkedIn Icon */}
            <a>
              <FaLinkedin />
            </a>            

          </div >
        </div>

        {/* Copyright Section */}
        <div>
          <FaRegCopyright />
          <p>2024 CoCov. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
