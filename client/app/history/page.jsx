'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header"
import Footer from "@/components/footer";


export default function History() {

    return (
        <>
            <Header />
            <div className="container mx-auto">
                <div className="ontent-center p-3"></div>
                <p className="text-center text-2xl">ข้อมูลย้อนหลัง</p>


                <table className="w-full table-auto my-3">
                    <thead>
                        <tr className="border-black border-b-2">
                            <th className="p-3">พื้นที่</th>
                            <th>น้ำฝนรายวันเวลา 7:00 น</th>
                            <th>น้ำฝนสะสมราย 5 วัน</th>
                            <th>ความเสี่ยงดินภล่ม</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2">
                            <td className="text-center p-3">1</td>
                            <td className="text-center p-3">2</td>
                            <td className="text-center p-3">0.0 มม</td>
                            <td className="text-center p-3">ไม่มี</td>
                            <td><a href="" className="text-white bg-blue-500 hover:bg-blue-300 transition duration-150 p-2 rounded-lg">ดูข้อมูล</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <Footer />
        </>
    )
}