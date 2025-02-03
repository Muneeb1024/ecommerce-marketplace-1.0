'use client';
import Footer from "@/components/footer";
import Header2 from "@/components/header2";
import Topheader2 from "@/components/topheader2";
import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IoIosArrowForward } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";




function Checkout() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [Discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        city: false,
        zipCode: false,
    });

    useEffect(() => {
        setCartItems(getCartItems());
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount));
        }
    }, [setDiscount]);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.inventory, 0
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        });
    };

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            email: !formValues.email.includes("@"),
            phone: !formValues.phone.match(/^[0-9]{10}$/),
            address: !formValues.address,
            city: !formValues.city,
            zipCode: !formValues.zipCode,
        };
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handlePlaceOrder = async () => {


        Swal.fire({
            title: 'Processing your order...',
            text: 'Please wait a moment.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "proceed",
        }).then((result) => {
            if (result.isConfirmed) {
                if (validateForm()) {
                    localStorage.removeItem("appliedDiscount");
                    Swal.fire(
                        "success!",
                        "Your order has been successfully processed!",
                        "success"
                    );
                }
            } else {
                Swal.fire(
                    "Error!",
                    "Please fill in the fields before proceeding",
                    "error"
                );
             }

        });






        const orderData = {
            _type: "order",
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map(item => ({
                _type: 'refrence',
                ref: item._id,
            })),
            total: subTotal,
            discount: Discount,
            orderDate: new Date().toISOString(),
        }

        try {
            await client.create(orderData)
            localStorage.removeItem("appliedDiscount")
        } catch (error) {
            console.error("Error creating order:", error)
        }


        if (validateForm()) {
            localStorage.removeItem("appliedDiscount")
        }
    }

    return (
        <section className="wrapper1">
            <Topheader2 />
            <div className="wrapper3">
                <Header2 />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                    <nav className="flex items-center gap-2 py-4 text-[17px]">
                        <Link href="/cart" className="text-[#666666] hover:text-black transition">
                            Cart
                        </Link>
                        <IoIosArrowForward />
                        <span className="">
                            CheckOut
                        </span>
                    </nav>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border rounded-lg p-6 space-y-6">
                            <h2 className="text-lg font-semibold mb-4">
                                Order Summary
                            </h2>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div className="flex items-center gap-4 py-3 border-b" key={item._id}>
                                        <div className="w-16 h-16 rounded overflow-hidden">
                                            {item.productImage && (
                                                <Image
                                                    src={urlFor(item.productImage).url()}
                                                    alt="image"
                                                    width={50}
                                                    height={50}
                                                    className="object-cover "
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                                            <p>${item.price * item.inventory}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-xs font-medium">No Items In Cart</p>
                            )}
                            <div>
                                <p>
                                    SubTotal: <span>${subTotal}</span>
                                </p>
                                <p>
                                    Discount: <span>${Discount}</span>
                                </p>
                                <p>
                                    Total: <span>${subTotal.toFixed()}</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border rounded-lg p-6 space-y-6">
                            <h2 className="font-semibold mb-5 text-[17px]">Billing Information</h2>
                            <div className="space-y-4">
                                <div className="">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        value={formValues.firstName}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.firstName && (
                                        <p className="text-sm text-red-500">First Name is required</p>
                                    )}

                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        value={formValues.lastName}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.lastName && (
                                        <p className="text-sm text-red-500">Last Name is required</p>

                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Enter your email address"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.email && (
                                        <p className="text-sm text-red-500">Email is required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder="Enter your address"
                                        value={formValues.address}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.address && (
                                        <p className="text-sm text-red-500">Address is required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        value={formValues.phone}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.phone && (
                                        <p className="text-sm text-red-500">Phone is required</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="Enter your city"
                                        value={formValues.city}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.city && (
                                        <p className="text-sm text-red-500">City is required</p>
                                    )}
                                </div>
                                <div>

                                    <label htmlFor="zipCode">ZipCode</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        placeholder="Enter your zipcode"
                                        value={formValues.zipCode}
                                        onChange={handleInputChange}
                                        className="focus:outline-none border border-gray-300 rounded-md px-3 py-2 w-full"
                                    />
                                    {formErrors.zipCode && (
                                        <p className="text-sm text-red-500">Zipcode is required</p>
                                    )}
                                </div>
                                <button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md hover:font-semibold" onClick={handlePlaceOrder}>
                                    Place Your Order
                                </button>
                            </div>
                        </div>

                    </div>
                </div>



                <Footer />
            </div>
        </section>
    );
}

export default Checkout;