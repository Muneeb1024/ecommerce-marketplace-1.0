'use client';
import Image from "next/image"
import { Product } from "../../types/products";
import { useEffect, useState } from "react";
import { allProduct } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

function Products2() {
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchproduct() {
            const fetchProduct: Product[] = await client.fetch(allProduct)
            setProduct(fetchProduct)
        }

        fetchproduct()
    }, [])

    return (
        <section className="wrapper2 py-[80px] flex flex-col items-center">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                {
                    product.map((product) => (
                        <div key={product._id}>
                            <div className="flex flex-col items-center justify-center">
                                {product.productImage && (
                                    <Image
                                        src={urlFor(product.productImage).url()}
                                        alt={"image"}
                                        width={348}
                                        height={427}
                                        className="h-[300px]"
                                    />
                                )}
                                <div className="pt-[25px] pb-[35px] flex flex-col items-center text-center gap-[10px] justify-center">
                                    <h5 className="font-bold text-[#252B42]">{product.title}</h5>
                                    <h6 className="font-bold text-[14px] text-[#737373]">{product.tags}</h6>
                                    <span className="text-[#BDBDBD]">Discount: {product.dicountPercentage}%</span>
                                    <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold justify-center">
                                        <span className="text-[#BDBDBD]">${product.price}</span>
                                        <span className="text-[#23856D]">${product.price}</span>
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
                    ))
                }

            </div>

        </section>
    )
}

export default Products2;