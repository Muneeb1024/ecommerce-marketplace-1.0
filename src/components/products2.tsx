import { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProduct } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface Products2Props {
  searchQuery: string;
  priceRange: [number, number];
  category: string;  // New prop for category
}

export default function Products2({ searchQuery, priceRange, category }: Products2Props) {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchProduct: Product[] = await client.fetch(allProduct);
      setProduct(fetchProduct);
    }
    fetchproduct();
  }, []);

  // Filter products based on search query, price range, and category
  const filteredProducts = product.filter((prod) =>
    prod.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    prod.price >= priceRange[0] &&
    prod.price <= priceRange[1] &&
    (category ? prod.category === category : true) // Filter by category if selected
  );

  return (
    <section className="wrapper2 py-[80px] flex flex-col items-center md:items-center lg:items-start md:px-10 lg:px-0">
      <h1 className="font-bold text-2xl text-center md:text-start text-black mb-5">
        All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {filteredProducts.map((product) => (
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
                  <h6 className="font-bold text-[14px] text-[#737373]">
                    {product.tags}
                  </h6>
                  <span className="text-[#BDBDBD]">
                    Discount: {product.dicountPercentage}%
                  </span>
                  <div className="w-[108px] h-[34px] flex items-center gap-[5px] font-bold justify-center">
                    <span className="text-[#BDBDBD]">${product.price}</span>
                    <span className="text-[#23856D]">${product.price}</span>
                  </div>

                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-sm shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
