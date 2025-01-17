'use client';
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

function Featured() {
    return (
        <section className="wrapper2 bg-white py-[80px] md:py-[112px] flex flex-col items-center gap-[80px]">
            <div className="text-center flex flex-col items-center gap-[10px]">
                <h6 className="font-bold text-[14px] text-[#23A6F0]">Practice Advice</h6>
                <h2 className="font-bold text-[#252B42] text-[40px] leading-[50px]">Featured <br className="sm:hidden" />Products</h2>
                <p className="text-[14px] text-[#737373] leading-[20px]">Problems trying to resolve the <br className="sm:hidden" />conflict between<br className="hidden sm:inline-block" />
                    the two major <span className="hidden md:inline-block">realms of Classical physics: Newtonian mechanics</span> </p>


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div className="w-[330px] h-[606px] shadow-lg relative">
                    <Image
                        src={"/featured-img/pic1.png"}
                        alt="pic"
                        width={330}
                        height={300}
                        className="md:hidden"
                    >
                    </Image>
                    <Image
                        src={"/featured-img/pic4.png"}
                        alt="pic"
                        width={330}
                        height={300}
                        className="hidden md:inline"
                    >
                    </Image>
                    <div className="absolute left-[20px] top-[20px] w-[58px] h-[24px] bg-[#E74040] font-bold text-white text-center text-[14px]">NEW</div>
                    <div className="flex flex-col pt-[25px] pb-[35px] pl-[25px] gap-[10px]">
                        <div className="flex space-x-[15px] text-[12px] text-[#737373]">
                            <span className="text-[#8EC2F2]">Google</span>
                            <span className="">Trending</span>
                            <span>New</span>
                        </div>

                        <h2 className="text-[20px] leading-[30px]">Loudest à la Madison #1 <br />
                            (L&apos;integral)</h2>

                        <p className="text-[14px] text-[#737373] leading-[20px]">We focus on ergonomics and meeting<br />
                            you where you work. It&apos;s only a<br />
                            keystroke away.</p>
                        <div className="h-[46px] w-[280px] flex justify-between items-center">
                            <div className="flex items-center gap-[5px]">
                                <Image
                                    src={"/icons/icon1.png"}
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    className="w-[16px] h-[16px]"
                                />
                                <span className="text-[12px] text-[#737373]">22 April 2021</span>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <Image
                                    src={"/icons/icon2.png"}
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    className="w-[16px] h-[16px]"
                                />
                                <span className="text-[12px] text-[#737373]">10 comments</span>
                            </div>
                        </div>
                        <div>
                            <span className="flex items-center gap-[10px] text-[14px] text-[#737373] font-bold">
                                Learn More
                                <MdArrowForwardIos className=" text-[#23A6F0] text-lg" />
                            </span>
                        </div>
                    </div>


                </div>

                <div className="w-[330px] h-[606px] shadow-lg relative">
                    <Image
                        src={"/featured-img/pic2.png"}
                        alt="pic"
                        width={330}
                        height={300}
                        className="md:hidden"
                    >
                    </Image>
                    <Image
                        src={"/featured-img/pic6.png"}
                        alt="pic"
                        width={330}
                        height={300}
                        className="hidden md:inline"
                    >
                    </Image>
                    <div className="absolute left-[20px] top-[20px] w-[58px] h-[24px] bg-[#E74040] font-bold text-white text-center text-[14px]">NEW</div>
                    <div className="flex flex-col pt-[25px] pb-[35px] pl-[25px] gap-[10px]">
                        <div className="flex space-x-[15px] text-[12px] text-[#737373]">
                            <span className="text-[#8EC2F2]">Google</span>
                            <span className="">Trending</span>
                            <span>New</span>
                        </div>

                        <h2 className="text-[20px] leading-[30px]">Loudest à la Madison #1 <br />
                            (L&apos;integral)</h2>

                        <p className="text-[14px] text-[#737373] leading-[20px]">We focus on ergonomics and meeting<br />
                            you where you work. It&apos;s only a<br />
                            keystroke away.</p>
                        <div className="h-[46px] w-[280px] flex justify-between items-center">
                            <div className="flex items-center gap-[5px]">
                                <Image
                                    src={"/icons/icon1.png"}
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    className="w-[16px] h-[16px]"
                                />
                                <span className="text-[12px] text-[#737373]">22 April 2021</span>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <Image
                                    src={"/icons/icon2.png"}
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    className="w-[16px] h-[16px]"
                                />
                                <span className="text-[12px] text-[#737373]">10 comments</span>
                            </div>
                        </div>
                        <div>
                            <span className="flex items-center gap-[10px] text-[14px] text-[#737373] font-bold">
                                Learn More
                                <MdArrowForwardIos className=" text-[#23A6F0] text-lg" />
                            </span>
                        </div>
                    </div>


                </div>

                <div className="w-[330px] h-[606px] shadow-lg relative">
                    <Image
                        src={"/featured-img/pic3.png"}
                        alt="pic"
                        width={330}
                        height={300}
                        className="md:hidden"
                    >
                    </Image>
                    <Image
                        src={"/featured-img/pic5.png"}
                        alt="pic"
                        width={330}
                        height={300}
                        className="hidden md:inline"
                    >
                    </Image>
                    <div className="absolute left-[20px] top-[20px] w-[58px] h-[24px] bg-[#E74040] font-bold text-white text-center text-[14px]">NEW</div>
                    <div className="flex flex-col pt-[25px] pb-[35px] pl-[25px] gap-[10px]">
                        <div className="flex space-x-[15px] text-[12px] text-[#737373]">
                            <span className="text-[#8EC2F2]">Google</span>
                            <span className="">Trending</span>
                            <span>New</span>
                        </div>

                        <h2 className="text-[20px] leading-[30px]">Loudest à la Madison #1 <br />
                            (L&apos;integral)</h2>

                        <p className="text-[14px] text-[#737373] leading-[20px]">We focus on ergonomics and meeting<br />
                            you where you work. It&apos;s only a<br />
                            keystroke away.</p>
                        <div className="h-[46px] w-[280px] flex justify-between items-center">
                            <div className="flex items-center gap-[5px]">
                                <Image
                                    src={"/icons/icon1.png"}
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    className="w-[16px] h-[16px]"
                                />
                                <span className="text-[12px] text-[#737373]">22 April 2021</span>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <Image
                                    src={"/icons/icon2.png"}
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    className="w-[16px] h-[16px]"
                                />
                                <span className="text-[12px] text-[#737373]">10 comments</span>
                            </div>
                        </div>
                        <div>
                            <span className="flex items-center gap-[10px] text-[14px] text-[#737373] font-bold">
                                Learn More
                                <MdArrowForwardIos className=" text-[#23A6F0] text-lg" />
                            </span>
                        </div>
                    </div>


                </div>
            </div>


        </section>
    )
}
export default Featured;