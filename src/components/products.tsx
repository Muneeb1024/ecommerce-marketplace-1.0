'use client';
import Image from "next/image"
import { Product } from "../../types/products";
import React, { useEffect, useState } from "react";
import { eightProduct } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import swal from "sweetalert2";
import { products } from "@/sanity/schemaTypes/product";



function Products() {
    const [product, setProduct] = useState<Product[]>([]);


    useEffect(() => {
        async function fetchproduct() {
            const fetchProduct: Product[] = await client.fetch(eightProduct)
            setProduct(fetchProduct)
        }
        fetchproduct()
    }, []);

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        swal.fire(
            {
                position: "top-right",
                icon: "success",
                title: `${products.title} added to cart`,
                showConfirmButton: false,
                timer: 1500,
            }
        )
        addToCart(product);
    }


    return (
        <section className="wrapper2 py-[80px] flex flex-col items-center md:items-start">
            <h1 className="font-bold text-2xl text-center md:text-start text-black mb-5">Best Selling Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                {
                    product.map((product) => (
                        <div key={product._id}>
                            <Link href={`/prods/${product.slug.current}`}>
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

                                        {/* <div className="flex items-center gap-[10px]">
                                            <span className="w-[16px] h-[16px] rounded-full bg-[#23A6F0]"></span>
                                            <span className="w-[16px] h-[16px] rounded-full bg-[#23856D]"></span>
                                            <span className="w-[16px] h-[16px] rounded-full bg-[#E77C40]"></span>
                                            <span className="w-[16px] h-[16px] rounded-full bg-[#252B42]"></span>
                                        </div> */}

                                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-sm shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e) => handleAddToCart(e, product)}>
                                            Add To Cart
                                        </button>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Products;