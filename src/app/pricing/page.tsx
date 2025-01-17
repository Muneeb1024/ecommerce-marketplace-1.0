'use client';
import { Switch } from "@/components/ui/switch"
import { FaCheck } from "react-icons/fa6";
import Footer from "@/components/footer";
import Header3 from "@/components/header3";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Logos from "@/components/logos";
import Trial from "@/components/trial";


function Pricing() {
    return (
        <section className="wrapper1">
            <Header3 />
            <div className="wrapper2 h-[280px] font-bold text-center flex flex-col items-center justify-center gap-[16px]">
                <h5 className="text-[#737373]">PRICING</h5>

                <h1 className="text-[40px] md:text-[58px] text-[#252B42] leading-[50px] md:leading-[80px]">Simple Pricing</h1>
                <div className="text-[14px] text-[#737373] h-[44px] flex items-center space-x-[15px]">
                    <Link href="/">
                        <span className="active:text-[#252B42] font-bold">Home</span>
                    </Link>
                    <Link href="/pricing">
                        <IoIosArrowForward className="text-xl" />
                    </Link>
                    <Link href="/pricing">
                        <span className="active:text-[#252B42] font-bold">Pricing</span>
                    </Link>
                </div>
            </div>

            <div className="wrapper1 bg-[#FAFAFA]">
                <div className="wrapper2 flex flex-col items-center py-[75px] gap-12">

                    <div className="flex flex-col items-center text-center gap-[10px]">
                        <h2 className="font-bold text-[40px] leading-[50px] text-[#252B42]">Pricing</h2>
                        <p className="text-[14px] leading-[20px] text-[#737373] tracking-[0.2px]">Problems trying to resolve <br className="sm:hidden" />
                            the conflict between <br className="hidden md:inline-block" />the two major <br className="md:hidden" />
                            realms of Classical physics: <br className="md:hidden" />
                            Newtonian mechanics </p>
                    </div>

                    <div className="h-[44px] flex items-center space-x-4 font-bold">
                        <span>Monthly</span>
                        <Switch />
                        <span>Yearly</span>

                        <div className="w-[109px] h-[44px] rounded-[37px] bg-[#B2E3FF] flex items-center justify-center">
                            <span className="text-[14px] font-bold text-[#23A6F0]">Save 25%</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">

                        <div className="bg-white w-[327px] h-[664px] border border-[#23A6F0] py-[50px] px-[40px] font-bold text-center flex flex-col items-center gap-[22px]">
                            <h3 className="text-2xl leading-[32px] text-[#252B42]">FREE</h3>
                            <h5 className="text-[#737373] leading-[24px]">Organize across all <br />
                                apps by hand</h5>

                            <div className="text-[#23A6F0] flex items-center gap-[10px]">
                                <h2 className="text-[40px]">0</h2>
                                <div className="h-[56px] flex flex-col items-start justify-between">
                                    <span className="text-[24px]">$</span>
                                    <span className="text-[14px] font-semibold text-[#8EC2F2]">Per Month</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-[15px] font-bold text-start">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#BDBDBD] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">1GB  Cloud storage

                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#BDBDBD] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px] leading-[24px]">Email and community <br />
                                        support

                                    </span>
                                </div>

                            </div>

                            <div className="bg-[#23A6F0] w-[246px] h-[52px] rounded-[5px] flex items-center justify-center text-sm text-white font-bold">
                                Try for free
                            </div>
                        </div>

                        <div className="bg-[#252B42] w-[327px] h-[664px] border border-[#23A6F0] py-[50px] px-[40px] font-bold text-center flex flex-col items-center gap-[22px] text-white">
                            <h3 className="text-2xl leading-[32px]">STANDARD</h3>
                            <h5 className="leading-[24px]">Organize across all <br />
                                apps by hand</h5>

                            <div className="text-[#23A6F0] flex items-center gap-[10px]">
                                <h2 className="text-[40px]">9.99</h2>
                                <div className="h-[56px] flex flex-col items-start justify-between">
                                    <span className="text-[24px]">$</span>
                                    <span className="text-[14px] font-semibold text-[#8EC2F2]">Per Month</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-[15px] font-bold text-start">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className=" text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className=" text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className=" text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#BDBDBD] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className=" text-[14px]">1GB  Cloud storage

                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#BDBDBD] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[14px] leading-[24px]">Email and community <br />
                                        support

                                    </span>
                                </div>

                            </div>

                            <div className="bg-[#23A6F0] w-[246px] h-[52px] rounded-[5px] flex items-center justify-center text-sm text-white font-bold">
                                Try for free
                            </div>
                        </div>

                        <div className="bg-white w-[327px] h-[664px] border border-[#23A6F0] py-[50px] px-[40px] font-bold text-center flex flex-col items-center gap-[22px]">
                            <h3 className="text-2xl leading-[32px] text-[#252B42]">PREMIUM
                            </h3>
                            <h5 className="text-[#737373] leading-[24px]">Organize across all <br />
                                apps by hand</h5>

                            <div className="text-[#23A6F0] flex items-center gap-[10px]">
                                <h2 className="text-[40px]">19.99</h2>
                                <div className="h-[56px] flex flex-col items-start justify-between">
                                    <span className="text-[24px]">$</span>
                                    <span className="text-[14px] font-semibold text-[#8EC2F2]">Per Month</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-[15px] font-bold text-start">
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#2DC071] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">Unlimited product updates
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#BDBDBD] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px]">1GB  Cloud storage

                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="bg-[#BDBDBD] w-[32px] h-[32px] flex items-center justify-center rounded-full">
                                        <FaCheck className="text-xl text-white" />
                                    </div>

                                    <span className="text-[#252B42] text-[14px] leading-[24px]">Email and community <br />
                                        support

                                    </span>
                                </div>

                            </div>

                            <div className="bg-[#23A6F0] w-[246px] h-[52px] rounded-[5px] flex items-center justify-center text-sm text-white font-bold">
                                Try for free
                            </div>
                        </div>

                    </div>
                </div>

                <div className="py-[80px] flex flex-col items-center gap-[23px]">

                    <h2 className="text-center text-[20px] text-[#252B42] font-bold leading-[30px]">Trusted By Over 4000 <br className="md:hidden" />
                        Big Companies</h2>
                    <Logos />
                </div>

            </div>

            <div className="wrapper2 flex flex-col items-center py-[80px] lg:py-[125px] gap-[80px] md:gap-[95px] px-10 lg:px-0">
                <div className="flex flex-col items-center text-center text-[#252B42] gap-[15px] md:gap-[10px]">
                    <h2 className="text-[40px] font-bold leading-[50px]">Pricing FAQs</h2>
                    <p className="md:hidden text-[14px] leading-[20px]">We focus on ergonomics and meeting <br />
                        you where you work. It&apos;s only <br />
                        a keystroke away.</p>
                    <p className="hidden md:inline text-[20px] text-[#737373] leading-[30px]">Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics</p>
                </div>

                <div className="flex lg:hidden flex-col items-start py-[16px] gap-[46px]">
                    <div className="flex flex-col items-start gap-[32px]">
                        <span className="font-bold text-[#252B42]">Work better together</span>
                        <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert <br className="md:hidden" />
                            Alamo est sit cliquey dolor do met sent. <br />
                            RELIT official consequent door ENIM RELIT <br className="md:hidden" />
                            Mollie. Excitation venial consequent <br />
                            sent nostrum met.</p>
                    </div>

                    <div className="flex flex-col items-start gap-[32px]">
                        <span className="font-bold text-[#252B42] leading-[24px]">OpenType features and <br />
                            Variable fonts</span>
                        <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert <br className="md:hidden" />
                            Alamo est sit cliquey dolor do met sent. <br />
                            RELIT official consequent door ENIM RELIT <br className="md:hidden" />
                            Mollie. Excitation venial consequent <br />
                            sent nostrum met.</p>
                    </div>

                    <div className="flex flex-col items-start gap-[32px]">
                        <span className="font-bold text-[#252B42]">Start working faster today</span>
                        <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert <br className="md:hidden" />
                            Alamo est sit cliquey dolor do met sent. <br />
                            RELIT official consequent door ENIM RELIT <br className="md:hidden" />
                            Mollie. Excitation venial consequent <br />
                            sent nostrum met.</p>

                    </div>
                    <div className="flex flex-col items-start gap-[32px]">
                        <span className="font-bold text-[#252B42]">Work at the speed of thought.</span>
                        <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert <br className="md:hidden" />
                            Alamo est sit cliquey dolor do met sent. <br />
                            RELIT official consequent door ENIM RELIT <br className="md:hidden" />
                            Mollie. Excitation venial consequent <br />
                            sent nostrum met.</p>
                    </div>

                    <div className="flex flex-col items-start gap-[32px]">
                        <span className="font-bold text-[#252B42]">The Fastest way to organize</span>
                        <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert <br className="md:hidden" />
                            Alamo est sit cliquey dolor do met sent. <br />
                            RELIT official consequent door ENIM RELIT <br className="md:hidden" />
                            Mollie. Excitation venial consequent <br />
                            sent nostrum met.</p>

                    </div>

                    <div className="flex flex-col items-start gap-[32px]">
                        <span className="font-bold text-[#252B42]">The Fastest way to navigate</span>
                        <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert <br className="md:hidden" />
                            Alamo est sit cliquey dolor do met sent. <br />
                            RELIT official consequent door ENIM RELIT <br className="md:hidden" />
                            Mollie. Excitation venial consequent <br />
                            sent nostrum met.</p>

                    </div>


                </div>

                <div className="hidden lg:flex flex-col items-center py-[25px] gap-[80px]">
                    <div className="flex items-center gap-[80px]">
                        <div className="flex items-start gap-[20px]">
                            <IoIosArrowForward className="text-2xl text-[#23A6F0]" />
                            <div className="flex flex-col items-start gap-[5px]">
                                <h5 className="font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                                <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey <br />
                                    dolor do met sent. RELIT official consequent door ENIM <br />
                                    RELIT Mollie. Excitation venial consequent sent <br />
                                    nostrum met.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-[20px]">
                            <IoIosArrowForward className="text-2xl text-[#23A6F0]" />
                            <div className="flex flex-col items-start gap-[5px]">
                                <h5 className="font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                                <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                    do met sent. RELIT official consequent door ENIM RELIT Mollie. <br />
                                    Excitation venial consequent sent nostrum met.</p>
                            </div>
                        </div>


                    </div>
                    <div className="flex items-center gap-[80px]">
                        <div className="flex items-start gap-[20px]">
                            <IoIosArrowForward className="text-2xl text-[#23A6F0]" />
                            <div className="flex flex-col items-start gap-[5px]">
                                <h5 className="font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                                <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey <br />
                                    dolor do met sent. RELIT official consequent door ENIM <br />
                                    RELIT Mollie. Excitation venial consequent sent <br />
                                    nostrum met.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-[20px]">
                            <IoIosArrowForward className="text-2xl text-[#23A6F0]" />
                            <div className="flex flex-col items-start gap-[5px]">
                                <h5 className="font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                                <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                    do met sent. RELIT official consequent door ENIM RELIT Mollie. <br />
                                    Excitation venial consequent sent nostrum met.</p>
                            </div>
                        </div>


                    </div>
                    <div className="flex items-center gap-[80px]">
                        <div className="flex items-start gap-[20px]">
                            <IoIosArrowForward className="text-2xl text-[#23A6F0]" />
                            <div className="flex flex-col items-start gap-[5px]">
                                <h5 className="font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                                <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey <br />
                                    dolor do met sent. RELIT official consequent door ENIM <br />
                                    RELIT Mollie. Excitation venial consequent sent <br />
                                    nostrum met.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-[20px]">
                            <IoIosArrowForward className="text-2xl text-[#23A6F0]" />
                            <div className="flex flex-col items-start gap-[5px]">
                                <h5 className="font-bold text-[#252B42]">the quick fox jumps over the lazy dog</h5>
                                <p className="text-[14px] text-[#737373] leading-[20px]">Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                                    do met sent. RELIT official consequent door ENIM RELIT Mollie. <br />
                                    Excitation venial consequent sent nostrum met.</p>
                            </div>
                        </div>


                    </div>


                </div>

                <div className="text-center text-[#737373] text-[20px] leading-[30px]">
                    Haven’t got your answer? <br className="md:hidden" /> Contact our support
                </div>

            </div>

            <Trial />


            <Footer />

        </section>
    )
}

export default Pricing;