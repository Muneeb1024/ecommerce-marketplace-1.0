'use client';
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="wrapper1 bg-[#FAFAFA]">
            <div className="wrapper2 flex flex-col sm:flex-row justify-between pl-[44px] sm:pl-[60px] lg:pl-[0] py-[40px] gap-6 pr-[62px]">
                <Link href="/">
                    <h1 className="text-[#252B42] font-bold text-2xl">
                        Bandage
                    </h1>
                </Link>

                <div className="flex items-center space-x-[20px] text-[#23A6F0] text-lg">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>

            </div>


            <div className="wrapper1 bg-white">
                <div className="wrapper2 py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[30px] pl-[44px] sm:pl-[60px] lg:pl-[0]">
                    <div className="flex flex-col gap-[20px] items-start font-bold">
                        <h5 className="text-[#252B42] ">Company Info</h5>
                        <ul className="flex flex-col gap-[10px] text-[#737373] text-[14px]">
                            <Link href="/" className="">
                                About Us
                            </Link>
                            <Link href="/" className="">
                                Carrier
                            </Link>
                            <Link href="/" className="">
                                We are hiring
                            </Link>
                            <Link href="/" className="">
                                Blog
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start font-bold">
                        <h5 className="text-[#252B42] ">Legal</h5>
                        <ul className="flex flex-col gap-[10px] text-[#737373] text-[14px]">
                            <Link href="/" className="">
                                About Us
                            </Link>
                            <Link href="/" className="">
                                Carrier
                            </Link>
                            <Link href="/" className="">
                                We are hiring
                            </Link>
                            <Link href="/" className="">
                                Blog
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start font-bold">
                        <h5 className="text-[#252B42] ">Features</h5>
                        <ul className="flex flex-col gap-[10px] text-[#737373] text-[14px]">
                            <Link href="/" className="">
                                Business Marketing
                            </Link>
                            <Link href="/" className="">
                                User Analytic
                            </Link>
                            <Link href="/" className="">
                                Live Chat
                            </Link>
                            <Link href="/" className="">
                                Unlimited Support
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start font-bold">
                        <h5 className="text-[#252B42] ">Resources</h5>
                        <ul className="flex flex-col gap-[10px] text-[#737373] text-[14px]">
                            <Link href="/" className="">
                                IOS & Android
                            </Link>
                            <Link href="/" className="">
                                Watch a Demo
                            </Link>
                            <Link href="/" className="">
                                Customers
                            </Link>
                            <Link href="/" className="">
                                API
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start font-bold">
                        <h5 className="text-[#252B42] mb-[20px]">Get In Touch</h5>

                        <div className="bg-[#E6E6E6] flex w-[321px] h-[58px] rounded-[5px]">
                            <input type="text" placeholder="Your Email" className="w-full h-full outline-none bg-[#E6E6E6] text-[#737373] pl-[20px] font-[400] rounded-s-[5px]" />
                            <button className="bg-[#23A6F0] text-[14px] text-white w-full h-full rounded-e-[5px]">Subscribe</button>
                        </div>
                        <span className="text-[#737373] text-[12px] font-[400] mt-1">
                            Lore imp sum dolor Amit
                        </span>
                    </div>
                </div>
            </div>


            <div className="wrapper2 flex justify-center lg:justify-start font-bold text-[#737373] py-[25px] tracking-[0.2px] leading-[24px] text-[14px] text-center">
                Made With Love By <br className="sm:hidden" />Finland All Right Reserved
            </div>
        </footer>
    )
}

export default Footer;