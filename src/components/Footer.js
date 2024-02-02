import '../App.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaWhatsapp, FaLinkedinIn, FaHandPointRight } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaBuildingColumns } from "react-icons/fa6";
import mylogo from '../images/28.svg';

function Footer() {
    return (
        <div className='foter'>
            <div className='f-section'>
                <div className='container'>
                    <div className='footer'>
                        <div className='f-main'>
                            <div className='f-box'>
                                <div className='f1'>
                                    <div className='f-logo'>
                                        <img src={mylogo}></img>
                                    </div>
                                    <div className='txt'>
                                        <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                    </div>
                                    <div className='f-txt'>
                                        <p>FOLLOW US ON</p>
                                    </div>
                                    <div className='f-icon'>
                                        <a><FaFacebookF className='icn'></FaFacebookF></a>
                                        <a><FaTwitter className='icn'></FaTwitter></a>
                                        <a><FaGooglePlusG className='icn'></FaGooglePlusG></a>
                                        <a><FaLinkedinIn className='icn'></FaLinkedinIn></a>
                                        <a><FaInstagram className='icn'></FaInstagram></a>
                                        <a><CiYoutube className='icn'></CiYoutube></a>
                                        <a><FaWhatsapp className='icn'></FaWhatsapp></a>
                                    </div>
                                </div>
                                <div className='f2'>
                                    <div className='fe-info'>
                                        <h5>FEATURE LINKS</h5>
                                        <div className='fe-list'>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>About us</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Blogs</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Join Us</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Company Login</p>
                                            <p><span><FaHandPointRight></FaHandPointRight></span>Certificate Verification</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='f3'>
                                    <div className='fc-txt'>
                                        <h4>CONTACT US</h4>
                                        <div className='fc-info'>
                                            <h4>HEAD OFFICE - YOGICHOWK</h4>
                                            <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                                            <p>Mo:<span>+91 90333 16003</span></p>
                                        </div>
                                        <div className='ot-info'>
                                            <h3>OTHER BRANCHES</h3>
                                            <div className='ot-list'>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Katargam</p>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Mota Varachha</p>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Adajan</p>
                                                <p><span><FaBuildingColumns></FaBuildingColumns></span>Navsari</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='endsection'>
                <div className='container'>
                    <div className='end-txt'>
                        <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;