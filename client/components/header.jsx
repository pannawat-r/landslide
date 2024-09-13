'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import CMU from '@/public/logo/cmu.png'
import CENDIM from '@/public/logo/cendim.png'
import MSRI from '@/public/logo/msri.png'
import TSRI from '@/public/logo/tsri.png'
import { useParams } from 'next/navigation'

export default function Header() {

    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            <nav className="flex justify-between shadow-md p-3">
                <div className="my-auto">
                    <a href='/' className="flex">
                        <Image src={CMU} className='mr-1' width={100} />
                        <Image src={CENDIM} className='mx-1' width={100} />
                        <Image src={MSRI} className='mx-1' width={70} />
                        <Image src={TSRI} className='mx-1' width={70} />
                    </a>
                </div>
                <div className="text-center text-2xl my-auto w-1/2">โครงการพัฒนาระบบการสำรวจและบริหารจัดการพื้นที่เสี่ยงภัยน้ำท่วมและดินถล่ม บนพื้นฐานของเทคโนโลยีสารสนเทศและการจัดการขั้นสูง</div>
                <div className="my-auto">
                    <div className="flex justify-between ">
                        <a href="/" className={`hover:text-black" mr-1 ${pathname == '/' ? "text-black" : "text-gray-500"} `}>หน้าแรก</a>
                        <a href="" className={`hover:text-black mx-1 ${pathname == '/2' ? "text-black" : "text-gray-500"} `}>2</a>
                        <a href="/history" className={`hover:text-black mx-1 ${pathname == '/history' ? "text-black" : "text-gray-500"} `}>ข้อมูลย้อนหลัง</a>
                        <a href="/about" className={`hover:text-black ml-1$ ${pathname == '/about' ? "text-black" : "text-gray-500"} `}>เกี่ยวกับโครงการ</a>
                    </div>
                </div>
            </nav >
        </>
    )
}