'use client';
import Footer from "@/components/footer";
import Header3 from "@/components/header3";
import Team2 from "@/components/team2";
import Trial from "@/components/trial";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


function Team() {
    return (
        <section className="wrapper1">
            <Header3 />
            <div className="wrapper2 flex flex-col items-center gap-[60px] py-[80px]">

                <div className="flex flex-col items-center gap-[16px] text-center font-bold">
                    <h5 className="text-[#737373] leading-[24px]">WHAT WE DO</h5>
                    <h2 className="text-[40px] text-[#252B42] leading-[50px] ">Innovation <br />
                        tailored for you</h2>
                    <div className="w-[120px] h-[44px] flex items-center gap-[10px] text-[14px]">
                        <Link href="/" className="text-[#252B42] active:text-[#737373]">Home</Link>
                        <IoIosArrowForward className="text-[#737373] text-lg" />
                        <Link href="/team" className="text-[#737373]">Team</Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-[10px]">
                    <div>
                        <Image src={"/tailored/pic1.png"}
                            alt="fashion"
                            width={413}
                            height={530}
                            className="lg:w-[700px] lg:h-[530px]"
                        ></Image>
                    </div>
                    <div className="flex items-center md:flex-col gap-[10px]">
                        <div>
                            <Image src={"/tailored/pic2.png"}
                                alt="fashion"
                                width={204}
                                height={260}
                                className="lg:w-[361px] lg:h-[260px]"
                            ></Image>
                        </div>
                        <div>
                            <Image src={"/tailored/pic3.png"}
                                alt="fashion"
                                width={204}
                                height={260}
                                className="lg:w-[361px] lg:h-[260px]"
                            ></Image>
                        </div>

                    </div>
                    <div className="flex items-center md:flex-col gap-[10px]">
                        <div>
                            <Image src={"/tailored/pic4.png"}
                                alt="fashion"
                                width={204}
                                height={260}
                                className="lg:w-[361px] lg:h-[260px]"
                            ></Image>
                        </div>
                        <div>
                            <Image src={"/tailored/pic5.png"}
                                alt="fashion"
                                width={204}
                                height={260}
                                className="lg:w-[361px] lg:h-[260px]"
                            ></Image>
                        </div>

                    </div>

                </div>

            </div>

            <Team2 />
            <Trial />
            <Footer />
        </section>
    )
}

export default Team;