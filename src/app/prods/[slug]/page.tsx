import Footer from "@/components/footer";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Logos from "@/components/logos";
import Topheader2 from "@/components/topheader2";
import Header2 from "@/components/header2";
import { MdArrowForwardIos } from "react-icons/md";
// import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";

interface ProductPageProps {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    _type,
    productImage,
    description,
    dicountPercentage,
    price,
    }`, { slug });
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    return (
        <div className="wrapper1">
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
                            <div className="">

                                {
                                    product.productImage && (
                                        <Image
                                            src={urlFor(product.productImage).url()}
                                            alt="image"
                                            width={600}
                                            height={600}
                                            className="rounded-lg shadow-md"
                                        />
                                    )
                                }
                            </div>

                            <div className="flex items-center gap-[19px]">

                                <div>
                                    {product.productImage && (
                                        <Image
                                            src={urlFor(product.productImage).url()}
                                            alt="image"
                                            width={100}
                                            height={75}
                                            className="w-[100px] h-[75px]"
                                        />
                                    )}
                                </div>

                                <div>
                                    {product.productImage && (
                                        <Image
                                            src={urlFor(product.productImage).url()}
                                            alt="image"
                                            width={100}
                                            height={75}
                                            className="w-[100px] h-[75px]"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full">

                            <h4 className="text-[20px] text-[#252B42] leading-[30px] mb-3">{product.title}</h4>

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

                            <p className="text-[14px] leading-[20px] text-[#858585] mb-[35px]">{product.description}</p>
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

            <Logos />
            <Footer />
        </div>
    )
}
// aspect-square


// {
//     product.productImage && (
//         <Image
//             src={urlFor(product.productImage).url()}
//             alt="image"
//             width={400}
//             height={400}
//             className="rounded-lg shadow-md"
//         />

//     )
// }
// {product.title}
// {product.description}
// {product.price}
// {product.dicountPercentage}