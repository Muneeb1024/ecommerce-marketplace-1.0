'use client';
import Image from "next/image";

function Universal() {
    return (
        <section className="wrapper2 md:h-[682px] pt-[120px] md:pt-0 flex flex-col items-center md:flex-row-reverse justify-between md:gap-[30px] md:px-[20px] lg:px-[90px]">

            <div className="text-center md:text-start flex flex-col items-center md:items-start gap-[32.78px] md:gap-[30px]">
                <h5 className="text-[#BDBDBD] font-bold">SUMMER 2020</h5>

                <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">Part of the<br className="md:hidden" /> Neural<br /> Universe</h2>


                <p className="text-[20px] leading-[30px] text-[#737373]">We know how large <br className="md:hidden" />objects will act,<br className="hidden md:block" /> but <br className="md:hidden" />things on a small scale.</p>

                <div className="flex flex-col md:flex-row items-center gap-[25px] md:gap-[10px]">
                    <button className="bg-[#23A6F0] md:bg-[#2DC071] w-[156px] h-[52px] font-bold text-[14px] text-white rounded-[5px]">
                        BUY NOW
                    </button>
                    <button className="border border-[#23A6F0] md:border-[#2DC071] w-[165px] h-[52px] font-bold text-[14px] text-[#23A6F0] md:text-[#2DC071] rounded-[5px]">
                        Learn More
                    </button>


                </div>

            </div>


            <div className="">
                <Image
                    src={'/bg-img/bg-3.png'}
                    alt="pic"
                    width={463}
                    height={403}
                    className=""
                ></Image>
             
            </div>

        </section>
    )
}

export default Universal;