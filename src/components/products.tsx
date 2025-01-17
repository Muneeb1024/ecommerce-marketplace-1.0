'use client'
import Image from "next/image"


function Products() {
    return (
        <section className="wrapper2 py-[80px] gap-[48px] md:gap-[80px] flex flex-col items-center">
            <div className="text-center flex flex-col items-center gap-[10px]">
                <h4 className="text-[20px] text-[#737373] tracking-[0.2px]">Featured Products</h4>
                <h2 className="text-[24px] font-bold text-[#252B42]">BESTSELLER <br className="sm:hidden" />PRODUCTS</h2>
                <p className="text-[14px] text-[#737373] font-[400]">Problems trying to resolve the <br className="sm:hidden" />conflict between </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                {/* 1 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic1.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className=""
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic2.png"}
                        alt="pic"
                        width={348}
                        height={427}
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic3.png"}
                        alt="pic"
                        width={348}
                        height={427}
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 4 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic4.png"}
                        alt="pic"
                        width={348}
                        height={427}
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 5 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic5.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="md:hidden"
                    ></Image>
                    <Image
                        src={"/products/pic9.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="hidden md:inline"
                    ></Image>

                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 6 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic6.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="md:hidden"
                    ></Image>
                    <Image
                        src={"/products/pic10.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="hidden md:inline"
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 7 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic7.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="md:hidden"
                    ></Image>
                    <Image
                        src={"/products/pic11.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="hidden md:inline"
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>
                {/* 8 */}
                <div className="flex flex-col items-center">
                    <Image
                        src={"/products/pic8.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="md:hidden"
                    ></Image>
                    <Image
                        src={"/products/pic12.png"}
                        alt="pic"
                        width={348}
                        height={427}
                        className="hidden md:inline"
                    ></Image>
                    <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px]">
                        <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
                        <h6 className="font-bold text-[14px] text-[#737373]">English Department</h6>
                        <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold">
                            <span className="text-[#BDBDBD]">$16.48</span>
                            <span className="text-[#23856D]">$16.48</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Products