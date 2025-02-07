import Footer from '@/components/footer'
import Header from '@/components/header'
import Topheader from '@/components/topheader'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='wrapper1'>
            <Topheader />
            <Header />
            <div className='flex flex-col items-center justify-center h-screen'>
                <SignUp />
            </div>
            <Footer />
        </div>
    )
}