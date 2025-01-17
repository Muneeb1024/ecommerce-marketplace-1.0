'use client';
import Footer from "@/components/footer";
import Header3 from "@/components/header3";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";


function Contact() {
    return (
        <section className="wrapper1">
            <Header3 />

            <div className="lg:hidden wrapper2 flex flex-col md:flex-row justify-between items-center gap-[40px] sm:px-10 lg:px-0">
                <div className="text-center md:text-start flex flex-col items-center md:items-start gap-[40px] py-[26px]">
                    <h5 className="font-bold text-[#252B42]">CONTACT US</h5>
                    <h2 className="font-bold text-[40px] text-[#252B42] leading-[50px]">Get in touch <br />today!</h2>
                    <h4 className="text-[20px] text-[#737373] leading-[30px]">We know how large <br />
                        objects will act, but things <br />
                        on a small scale just do <br />
                        not act that way.</h4>

                    <div className="flex flex-col items-center md:items-start text-[#252B42] gap-[20px] font-bold">
                        <h3 className="text-2xl leading-[32px]">Phone ; +451 215 215 </h3>
                        <h3 className="text-2xl leading-[32px]">Fax : +451 215 215</h3>
                    </div>

                    <div className="flex items-center text-[27px] gap-[34px] text-[#252B42]">
                        <Link href={"/"}>
                            <FaTwitter className="" />
                        </Link>
                        <Link href={"/"}>
                            <AiFillFacebook className="" />
                        </Link>
                        <Link href={"/"}>
                            <FaInstagram className="" />
                        </Link>
                        <Link href={"/"}>
                            <FaLinkedin className="" />
                        </Link>
                    </div>
                </div>

                <Image
                    src={"/bg-img/contact-bg.png"}
                    alt="contact-bg"
                    width={387}
                    height={440}
                ></Image>

            </div>

            <div className="hidden wrapper1 h-[770px] bg-cover bg-center lg:flex items-center" style={{ backgroundImage: "url('/bg-img/contact-bg-2.png')" }}>
                <div className="w-[1050px] mx-auto flex flex-col items-start gap-[35px] bg-transparent">
                    <h5 className="font-bold text-[#252B42]">CONTACT US</h5>
                    <h2 className="font-bold text-[40px] text-[#252B42] leading-[50px]">Get in touch <br />today!</h2>
                    <h4 className="text-[20px] text-[#737373] leading-[30px]">We know how large
                        objects will act,<br /> but things
                        on a small scale just do
                        not act that way.</h4>

                    <div className="flex flex-col items-center md:items-start text-[#252B42] gap-[20px] font-bold">
                        <h3 className="text-2xl leading-[32px]">Phone ; +451 215 215 </h3>
                        <h3 className="text-2xl leading-[32px]">Fax : +451 215 215</h3>
                    </div>

                    <div className="flex items-center text-[27px] gap-[34px] text-[#252B42]">
                        <Link href={"/"}>
                            <FaTwitter className="" />
                        </Link>
                        <Link href={"/"}>
                            <AiFillFacebook className="" />
                        </Link>
                        <Link href={"/"}>
                            <FaInstagram className="" />
                        </Link>
                        <Link href={"/"}>
                            <FaLinkedin className="" />
                        </Link>
                    </div>



                </div>

            </div>

            <div className="wrapper1 bg-[#FAFAFA]">
                <div className="wrapper2 flex flex-col items-center py-[75px] md:py-[112px] gap-[60px] md:gap-[80px]">
                    <div className="text-center flex flex-col items-center gap-[10px] font-bold text-[#252B42]">
                        <h6 className="text-[14px]">VISIT OUR OFFICE</h6>
                        <h2 className="text-[40px] leading-[50px]">We help small <br className="md:hidden" />businesses <br />
                            with big ideas</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        <div className="bg-white w-[328px] h-[333px] flex flex-col items-center gap-[15px] py-[50px] px-[40px] text-[#252B42] font-bold">
                            <Image src={"/icons/phone.png"} alt="phone" width={72} height={72}></Image>
                            <div className="flex flex-col items-center text-[14px]">
                                <span>georgia.young@example.com</span>
                                <span>georgia.young@ple.com</span>
                            </div>
                            <h5 className="">Get Support</h5>

                            <button className="w-[157px] h-[144px] border border-[#23A6F0] rounded-[5px] text-[#23A6F0] text-[14px]">
                                Submit Request
                            </button>
                        </div>
                        <div className="bg-[#252B42] w-[328px] h-[333px] flex flex-col items-center gap-[15px] py-[50px] px-[40px] text-white font-bold">
                            <Image src={"/icons/location.png"} alt="phone" width={72} height={72}></Image>
                            <div className="flex flex-col items-center text-[14px]">
                                <span>georgia.young@example.com</span>
                                <span>georgia.young@ple.com</span>
                            </div>
                            <h5 className="">Get Support</h5>

                            <button className="w-[157px] h-[144px] border border-[#23A6F0] rounded-[5px] text-[#23A6F0] text-[14px]">
                                Submit Request
                            </button>
                        </div>
                        <div className="bg-white w-[328px] h-[333px] flex flex-col items-center gap-[15px] py-[50px] px-[40px] text-[#252B42] font-bold">
                            <Image src={"/icons/send.png"} alt="phone" width={72} height={72}></Image>
                            <div className="flex flex-col items-center text-[14px]">
                                <span>georgia.young@example.com</span>
                                <span>georgia.young@ple.com</span>
                            </div>
                            <h5 className="">Get Support</h5>

                            <button className="w-[157px] h-[144px] border border-[#23A6F0] rounded-[5px] text-[#23A6F0] text-[14px]">
                                Submit Request
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="wrapper2 py-[112px] md:py-[80px] gap-[30px] md:gap-[36px] flex flex-col items-center font-bold text-[#252B42]">
                <Image src={"/icons/arrow.png"} alt="phone" width={72} height={72}></Image>
                <h6 className="leading-[24px]">WE Can&apos;t WAIT TO MEET YOU</h6>
                <h2 className="text-[58px] leading-[80px]">Let’s Talk</h2>
                <button className="bg-[#23A6F0] w-[186px] h-[52px] rounded-[5px] text-white text-[14px]">
                    Try it free now
                </button>
            </div>


            <Footer />
        </section>
    )
}

export default Contact;