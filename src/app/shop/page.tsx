'use client'
import Image from "next/image";
import Categories from "@/components/categories";
import Header2 from "@/components/header2";
import Topheader2 from "@/components/topheader2";
import { BsListCheck } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Products2 from "@/components/products2";
import Logos from "@/components/logos";
import Footer from "@/components/footer";
function Shop() {
    return (
        <section className="wrapper1">
            <Topheader2 />
            <Header2 />
            <Categories />

            <div className="wrapper1 bg-white">
                <div className="wrapper2 py-6 flex flex-col items-center md:flex-row justify-between gap-6 sm:px-10 lg:px-0">
                    <h6 className="text-[14px] font-bold text-[#737373]">Showing all 12 results
                    </h6>

                    <div className="flex items-center h-[46px] space-x-[15px]">
                        <span className="text-[14px] text-[#737373] font-bold">Views:
                        </span>
                        <Image src={"/icons/btn.png"}
                            alt="btn"
                            width={46}
                            height={46}
                            className="border rounded-[5px]"
                        ></Image>
                        <div className="border rounded-[5px] w-[46px] h-[46px] flex items-center justify-center">
                            <BsListCheck className="text-xl text-[#737373]" />
                        </div>
                    </div>

                    <div className="h-[50px] gap-[15px] flex items-center">
                        <div className="flex items-center justify-center h-full w-[141px] text-[#737373] space-x-[6px] rounded-[5px] border">
                            <span className="text-[14px] ">Popularity</span>
                            <MdKeyboardArrowDown className="text-lg" />
                        </div>
                        <button className="text-center h-full w-[94px] bg-[#23A6F0] rounded-[5px] text-white text-[14px] font-bold">
                            Filter
                        </button>
                    </div>

                </div>
            </div>

            <Products2 />
            <div className="mx-auto mb-12 flex items-center justify-center w-[313px] h-[74px] text-[14px] font-bold">
                <div className="bg-[#F3F3F3] border border-[#BDBDBD] rounded-s-[5px] w-[85px] h-full flex items-center justify-center text-[#BDBDBD]">
                    First
                </div>
                <div className="bg-white active:bg-[#23A6F0]  active:text-white border border-[#BDBDBD] w-[46px] h-full flex items-center justify-center text-[#23A6F0]">
                    1
                </div>
                <div className="bg-white active:bg-[#23A6F0]  active:text-white border border-[#BDBDBD] w-[46px] h-full flex items-center justify-center text-[#23A6F0]">
                    2
                </div>
                <div className="bg-white active:bg-[#23A6F0]  active:text-white border border-[#BDBDBD] w-[46px] h-full flex items-center justify-center text-[#23A6F0]">
                    3
                </div>
                <div className="bg-white active:bg-[#23A6F0]  active:text-white border border-[#BDBDBD] rounded-e-[5px] w-[85px] h-full flex items-center justify-center text-[#23A6F0]">
                    Next
                </div>

            </div>

            <Logos />

            <Footer />
        </section>
    )
}

export default Shop;