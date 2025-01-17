'use client';
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";


function Categories() {
    return (
        <section className="wrapper1 bg-[#FAFAFA]">
            <div className="wrapper3">
                <div className="flex flex-col items-center md:flex-row justify-between py-12 md:py-6 gap-[63px] text-[#252B42] sm:px-10 lg:px-0">
                    <Link href={"/shop"}>
                        <h3 className="font-bold text-2xl">Shop</h3>
                    </Link>

                    <div className="flex items-center font-bold space-x-[10px]">
                        <Link href={"/"}>
                            <span className="text-[14px] text-[#252B42] focus:text-[#737373]">Home</span>
                        </Link>
                        <Link href={"/shop"}>
                            <MdArrowForwardIos className="text-[#737373] text-lg" />
                        </Link>


                        <Link href={"/shop"}>
                            <span className="text-[14px] text-[#252B42] focus:text-[#737373]">Shop</span>
                        </Link>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[15px] sm:px-[30px] lg:px-0 pb-[37px]">

                    <div className="mx-auto w-[332px] md:w-[206px] h-[300px] md:h-[223px] bg-cover bg-end" style={{ backgroundImage: "url('/category/card1.jpg')" }}>
                        <div className="text-center font-bold flex flex-col items-center justify-center h-full gap-[30px] text-white">
                            <span className="">CLOTHS</span>
                            <span className="text-[14px]">5 Items</span>
                        </div>
                    </div>
                    <div className="mx-auto w-[332px] md:w-[206px] h-[300px] md:h-[223px] bg-cover bg-center" style={{ backgroundImage: "url('/category/card2.jpg')" }}>
                        <div className="text-center font-bold flex flex-col items-center justify-center h-full gap-[30px] text-white">
                            <span className="">CLOTHS</span>
                            <span className="text-[14px]">5 Items</span>
                        </div>
                    </div>
                    <div className="mx-auto w-[332px] md:w-[206px] h-[300px] md:h-[223px] bg-cover bg-center" style={{ backgroundImage: "url('/category/card3.jpg')" }}>
                        <div className="text-center font-bold flex flex-col items-center justify-center h-full gap-[30px] text-white">
                            <span className="">CLOTHS</span>
                            <span className="text-[14px]">5 Items</span>
                        </div>
                    </div>
                    <div className="mx-auto w-[332px] md:w-[206px] h-[300px] md:h-[223px] bg-cover bg-center" style={{ backgroundImage: "url('/category/card4.jpg')" }}>
                        <div className="text-center font-bold flex flex-col items-center justify-center h-full gap-[30px] text-white">
                            <span className="">CLOTHS</span>
                            <span className="text-[14px]">5 Items</span>
                        </div>
                    </div>
                    <div className="mx-auto w-[332px] md:w-[206px] h-[300px] md:h-[223px] bg-cover bg-center" style={{ backgroundImage: "url('/category/card5.jpg')" }}>
                        <div className="text-center font-bold flex flex-col items-center justify-center h-full gap-[30px] text-white">
                            <span className="">CLOTHS</span>
                            <span className="text-[14px]">5 Items</span>
                        </div>
                    </div>


                </div>

            </div>




        </section>
    )
}

export default Categories;