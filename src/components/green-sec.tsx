'use client';
import Image from "next/image";


function Greensec() {
    return (
        <section className="wrapper1 h-auto bg-[#23856D] pt-[112px]">

            <div className="sm:px-[60px] lg:px-0 wrapper2 md:h-[599px] flex flex-col items-center md:flex-row justify-between gap-[30px] lg:gap-[63px]">
                
                <div className="lg:w-[509px] md:h-[432px] flex flex-col items-center md:items-start gap-[35px] text-white md:pt-[60px] flex-shrink-0">
                    <span className="text-start text-[20px]">SUMMER 2020</span>
                    <h2 className="text-center md:text-start text-[40px] md:text-[58px] font-bold leading-[50px] md:leading-[80px]">Vita Classic <br />Product</h2>
                    <p className="md:hidden text-center text-[20px] leading-[30px]">We know how large objects <br />will act, but things on a <br />
                        small scale.</p>
                    <span className="hidden text-center text-[20px] leading-[30px]">We know how large objects will act, but things on a
                        small scale.</span>

                    <div className="w-[295px] flex flex-col md:flex-row justify-between items-center gap-[20px] mb-[30px]">
                        <h3 className="text-2xl font-bold">$16.48</h3>
                        <button className="bg-[#2DC071] w-[184px] h-[52px] text-[14px] text-center rounded-[5px] font-bold">ADD TO CART</button>
                    </div>
                </div>

                <div className="w-[443]">
                    <Image
                        src={"/bg-img/hero2.png"}
                        alt="person-pic"
                        width="443"
                        height="685"
                    ></Image>

                </div>

            </div>

        </section>
    )
}

export default Greensec;