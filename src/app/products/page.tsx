'use client';
import Footer from "@/components/footer";
import Header2 from "@/components/header2";
import Logos from "@/components/logos";
import Topheader2 from "@/components/topheader2";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import Products3 from "@/components/product3";



function Products() {
    return (
        <section className="wrapper1">
            <Topheader2 />
            <Header2 />
            <div className="wrapper1 bg-[#FAFAFA]">
                <div className="wrapper3 flex flex-col items-center md:items-start gap-[34px] px-10 lg:px-0">

                    <div className="flex items-center font-bold space-x-[10px] py-6">
                        <Link href={"/"}>
                            <span className="text-[14px] text-[#252B42] focus:text-[#737373]">Home</span>
                        </Link>
                        <Link href={"/shop"}>
                            <MdArrowForwardIos className="text-[#737373] text-lg" />
                        </Link>


                        <Link href={"/shop"}>
                            <span className="text-[14px] text-[#737373]">Shop</span>
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-[40px] lg:gap-[54px] pb-[48px]">
                        <div className="flex flex-col items-start gap-[42px]">
                            <div className="flex items-center w-[348px] lg:w-[506px] h-[277px] lg:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/product-details/sofa.jpg')" }}>

                                <div className="flex justify-between items-center px-[35px] text-7xl text-white gap-[160px] lg:gap-[280px]">
                                    <div>
                                        <IoIosArrowBack />
                                    </div>

                                    <div>
                                        <IoIosArrowForward />
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center gap-[19px]">
                                <div>
                                    <Image
                                        src={"/product-details/kursi.jpg"}
                                        alt="cover"
                                        width={100}
                                        height={75}
                                        className="w-[100px] h-[75px]"
                                    ></Image>
                                </div>
                                <div>
                                    <Image
                                        src={"/product-details/sofa.jpg"}
                                        alt="cover"
                                        width={100}
                                        height={75}
                                        className="w-[100px] h-[75px]"
                                    ></Image>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full">

                            <h4 className="text-[20px] text-[#252B42] leading-[30px] mb-3">Floating Phone</h4>

                            <div className="flex items-center gap-[10px] mb-[20px]">
                                <div className="flex items-center space-x-[5px] text-xl text-[#F3CD03]">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <FaRegStar />
                                </div>
                                <span className="text-[14px] text-[#737373] font-bold">10 Reviews</span>
                            </div>
                            <h3 className="text-[24px] leading-[32px] text-[#252B42] font-bold">$1,139.33</h3>
                            <div className="flex items-center gap-[10px] text-[14px] font-bold leading-[24px] mb-[32px]">
                                <span className="text-[#737373]">Availability  :</span>
                                <span className="text-[#23A6F0]">In Stock</span>
                            </div>

                            <p className="text-[14px] leading-[20px] text-[#858585] mb-[35px]">Met minim Mollie non desert <br className="lg:hidden" />
                                Alamo est sit cliquey dolor do <br />
                                met sent. RELIT official consequent <br className="lg:hidden" />
                                door ENIM RELIT Mollie. Excitation <br />
                                venial consequent sent nostrum met.</p>
                            <div className="flex items-center gap-[10px] mb-12">
                                <span className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></span>
                                <span className="w-[30px] h-[30px] rounded-full bg-[#2DC071]"></span>
                                <span className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></span>
                                <span className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></span>
                            </div>

                            <div className="flex items-center gap-[10px]">
                                <button className="w-[148px] h-[44px] bg-[#23A6F0] rounded-[5px] text-[14px] font-bold text-white">
                                    Select Options
                                </button>
                                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-[#FFFFFF] text-xl text-[#252B42]">
                                    <FiHeart />
                                </div>
                                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-[#FFFFFF] text-xl text-[#252B42]">
                                    <BsCart />
                                </div>
                                <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-[#FFFFFF] text-xl text-[#252B42]">
                                    <IoEye />
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

            <div className="wrapper2 py-[34px] flex items-center justify-center gap-[10px] md:gap-[45px] font-bold text-[#737373] text-[14px]">
                <span className="underline font-semibold">Description</span>
                <span className="">Additional Information</span>
                <div className="flex items-center gap-[5px]">
                    <span>Reviews</span>
                    <span className="text-[#23856D]">(0)</span>
                </div>
            </div>

            <div className="wrapper2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-6 pb-12">

                <div className="mx-auto">
                    <Image
                        src={"/product-details/details.png"}
                        alt="product"
                        width={321}
                        height={271}
                        className="w-[321px] h-[271px] md:w-[316px] md:h-[372px]"
                    ></Image>
                </div>

                <div className="mx-auto flex flex-col items-start justify-start text-[14px]">
                    <h3 className="mb-[30px] font-bold text-[#252B42] text-[24px] leading-[50px] tracking-[0.1px]">the quick fox jumps over</h3>

                    <p className="gap-[30px] w-[290px] tracking-[0.2px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br />

                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br />

                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                </div>

                <div className="mx-auto flex flex-col items-start justify-start">
                    <h3 className="mb-[30px] font-bold text-[#252B42] text-[24px] leading-[50px]">the quick fox jumps over</h3>
                    <div className="mb-[10px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className="mb-[10px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className="mb-[10px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className="mb-[25px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <h3 className="mb-[30px] font-bold text-[#252B42] text-[24px] leading-[50px]">the quick fox jumps over</h3>
                    <div className="mb-[10px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className="mb-[10px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className="mb-[10px] flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                    <div className=" flex items-center gap-[20px] text-sm font-bold text-[#737373]">
                        <MdArrowForwardIos className=" text-xl" />
                        <h6>the quick fox jumps over the lazy dog</h6>
                    </div>
                </div>

            </div>

            <Products3 />

            <Logos />
            <Footer />
        </section>
    )
}

export default Products;