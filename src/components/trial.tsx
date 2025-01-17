'use client';
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

function Trial() {
  return (
    <div className="wrapper2 flex flex-col items-center gap-[30px] py-[112px] text-center">
    <h2 className="font-bold text-[40px] text-[#252B42] leading-[50px]">Start your <br className="md:hidden" />
        14 days free trial</h2>
    <p className="text-[#737373] text-[14px] leading-[20px]">Met minim Mollie non desert Alamo est sit <br className="md:hidden" />cliquey dolor <br className="hidden md:inline" /> do met sent. RELIT official <br className="md:hidden" />consequent.</p>

    <button className="bg-[#23A6F0] w-[186px] h-[52px] rounded-[5px] text-white font-bold ">
        Try it free now
    </button>

    <div className="flex items-center text-[27px] gap-[34px]">
        <Link href={"/"}>
            <FaTwitter className="text-[#55ACEE]" />
        </Link>
        <Link href={"/"}>
            <AiFillFacebook className="text-[#395185]" />
        </Link>
        <Link href={"/"}>
            <FaInstagram className="text-[#000000]" />
        </Link>
        <Link href={"/"}>
            <FaLinkedin className="text-[#0A66C2]" />
        </Link>
    </div>
    
</div>
  )
}

export default Trial;