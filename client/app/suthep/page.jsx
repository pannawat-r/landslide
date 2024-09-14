'use client'
import { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic';
import axios from "axios";
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Loading } from '@/components/loading';
import { BarChart } from '@/components/bar'

export default function Angkhang() {
    const [datetime, setDatetime] = useState()
    const [stationName, setStationName] = useState([])
    const [rain1d, setRain1d] = useState([])

    const Map = useMemo(() => dynamic(
        () => import('@/components/map'),
        {
            loading: () => <div className="content-center h-[50rem] mx-auto"><Loading /></div>,
            ssr: false
        }
    ), [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/suthep')
                setDatetime(response.data.datetime)
                setStationName(response.data.station_name)
                setRain1d(response.data.rain_1d)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])
    return (
        <>
            <Header />
            <p className='text-center text-2xl py-5'>ดอยสุเทพปุย (ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่)</p>

            <div className="container mx-auto">
                {/* Map */}
                <div className="relative z-0">
                    <div className="w-full h-[50rem]">
                        <Map position={[18.81638834589227, 98.89125771293459]} zoom={14}></Map>
                    </div>
                </div>


                {/*  */}
                <p className='text-center text-xl p-3'>ความเสี่ยงดินถล่ม วันที่ {datetime}</p>
                <div className="flex justify-between py-3 mx-32">
                    <div className="flex">
                        <hr className="p-3 bg-red-700 rounded-full" />
                        <div className="ml-3 my-auto">มาก</div>
                    </div>
                    <div className="flex">
                        <hr className="p-3 bg-green-600 rounded-full" />
                        <div className="ml-3 my-auto">มาก</div>
                    </div>
                    <div className="flex">
                        <hr className="p-3 bg-yellow-300 rounded-full" />
                        <div className="ml-3 my-auto">มาก</div>
                    </div>
                    <div className="ml-3 my-auto">มาก</div>
                </div>

                {/* Chart */}
                <div className="">
                    <p className='text-center text-2xl py-5'>น้ำฝนรายสถานี วันที่ {datetime}</p>
                    <BarChart labels={stationName} data={rain1d} />
                </div>
            </div>



            <Footer />
        </>
    )
} 