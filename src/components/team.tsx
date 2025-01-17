'use client'
import Image from "next/image";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
function Team() {
    return (
        <section className="wrapper2 py-[30px] md:py-[112px] flex flex-col items-center gap-[45px]">
            <div className="text-center flex flex-col items-center gap-[10px]">
                <h2 className="font-bold text-[40px] text-[#252B42] leading-[50px]">Meet Our <br className="sm:hidden" />Team</h2>
                <p className="text-[14px] text-[#737373] leading-[20px] w-[300px] md:w-auto">Problems trying to resolve
                    the conflict between <br className="hidden md:inline-block" />the two major
                    realms of Classical physics:
                    Newtonian mechanics  </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div className="w-[316px] h-[403px] flex flex-col items-center justify-between">
                    <Image
                        src={"/team/pic1.png"}
                        alt="pic"
                        width={316}
                        height={231}
                        className=""
                    >
                    </Image>
                    <div className="h-[172px] w-[316px] text-center flex flex-col items-center justify-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42] ">Username</h5>
                        <h5 className="text-[14px] font-bold text-[#737373] ">Profession</h5>
                        <div className="flex space-x-[20px]">
                            <RiFacebookBoxFill className="w-[24px] h-[24px] text-[#335BF5]" />
                            <RiInstagramLine className="w-[24px] h-[24px] text-[#E51F5A]" />
                            <FaTwitter className="w-[24px] h-[24px] text-[#21A6DF]" />
                        </div>
                    </div>
                </div>
                <div className="w-[316px] h-[403px] flex flex-col items-center justify-between">
                    <Image
                        src={"/team/pic2.jpg"}
                        alt="pic"
                        width={316}
                        height={231}
                        className=""
                    >
                    </Image>
                    <div className="h-[172px] w-[316px] text-center flex flex-col items-center justify-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42] ">Username</h5>
                        <h5 className="text-[14px] font-bold text-[#737373] ">Profession</h5>
                        <div className="flex space-x-[20px]">
                            <RiFacebookBoxFill className="w-[24px] h-[24px] text-[#335BF5]" />
                            <RiInstagramLine className="w-[24px] h-[24px] text-[#E51F5A]" />
                            <FaTwitter className="w-[24px] h-[24px] text-[#21A6DF]" />
                        </div>
                    </div>
                </div>
                <div className="w-[316px] h-[403px] flex flex-col items-center justify-between">
                    <Image
                        src={"/team/pic3.png"}
                        alt="pic"
                        width={316}
                        height={231}
                        className=""
                    >
                    </Image>
                    <div className="h-[172px] w-[316px] text-center flex flex-col items-center justify-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42] ">Username</h5>
                        <h5 className="text-[14px] font-bold text-[#737373] ">Profession</h5>
                        <div className="flex space-x-[20px]">
                            <RiFacebookBoxFill className="w-[24px] h-[24px] text-[#335BF5]" />
                            <RiInstagramLine className="w-[24px] h-[24px] text-[#E51F5A]" />
                            <FaTwitter className="w-[24px] h-[24px] text-[#21A6DF]" />
                        </div>
                    </div>
                </div>





            </div>


        </section>
    )
}

export default Team;