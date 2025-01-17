'use client';
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Topheader() {
    return (
        <div className="wrapper1 h-[58px] bg-[#252B42] text-[#FFFFFF] hidden sm:flex items-center justify-between text-sm px-[40px]">
            <div className="w-[415px] flex items-center justify-between gap-[10px]">
                <div className="flex items-center gap-[5px]">
                    <IoCallOutline />
                    <span className="font-bold">(225) 555-0118</span>
                </div>
                <div className="flex items-center gap-[5px]">
                    <TfiEmail />
                    <span className="font-bold">michelle.rivera@example.com</span>
                </div>

            </div>

            <span className="hidden lg:inline-block font-bold">
                Follow Us  and get a chance to win 80% off
            </span>
            <div className="flex items-center gap-[10px]">
                <span className="font-bold flex-shrink-0">Follow Us :</span>
                <div className="flex items-center justify-between gap-[10px] text-md">
                    <FaInstagram />
                    <FaYoutube />
                    <FaFacebook />
                    <FaTwitter />
                </div>

            </div>
        </div>
    )
}


