'use client';
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Header2 from "@/components/header2";
import Topheader2 from "@/components/topheader2";
import Link from "next/link";
import { useRouter } from "next/navigation";


function CartPage() {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);


    const handleRemove = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Your item has been removed.", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) handleQuantityChange(id, product.inventory + 1);
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
    };

    const calculatedTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    };

    const router = useRouter();
    const handleProceed = () => {
        Swal.fire({
            title: "Proceed to checkout?",
            text: "Are you sure you want to proceed to checkout?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Checkout successful!", "Your order has been placed.", "success");
                router.push("/checkout")
                setCartItems([]);
            }
        });
    };


    return (
        <div className="wrapper1">
            <Topheader2 />
            <Header2 />
            <div className="container mx-auto p-4 wrapper3">
                <h1 className="text-2xl font-bold mb-10">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="text-center text-gray-500 mb-10">Your cart is empty.</p>
                        <Link href={"/shop"}>
                            <button className="bg-[#23A6F0] font-semibold text-center text-[20px] px-7 py-2 rounded-sm hover:text-gray-500">Continue Shopping</button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
                                <div className="flex items-center space-x-4">
                                    {
                                        item.productImage && (
                                            <Image
                                                src={urlFor(item.productImage).url()}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-lg"
                                                width={200}
                                                height={200}
                                            />
                                        )
                                    }
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.title}</h2>
                                        <p className="text-gray-500">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleDecrement(item._id)}
                                        className="px-2 py-1 bg-gray-200 rounded-md"
                                    >
                                        -
                                    </button>
                                    <span>{item.inventory}</span>
                                    <button
                                        onClick={() => handleIncrement(item._id)}
                                        className="px-2 py-1 bg-gray-200 rounded-md"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemove(item._id)}
                                    className="px-4 py-2 text-white bg-red-500 rounded-md"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-lg font-bold">Total: ${calculatedTotal().toFixed(2)}</h3>
                            <button
                                onClick={handleProceed}
                                className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md w-full"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CartPage;
