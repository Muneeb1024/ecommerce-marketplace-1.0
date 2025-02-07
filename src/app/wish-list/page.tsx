import Footer from '@/components/footer';
import Header from '@/components/header';
import Topheader2 from '@/components/topheader2';
import React from 'react'


function Wishlist() {
    return (
        <div>
            <Topheader2 />
            <Header />

            <div className='flex items-center justify-center h-screen'>
                <h1 className='font-bold texct-3xl'>Working On It</h1>
            </div>
            
            <Footer />
        </div>
    )
}

export default Wishlist;