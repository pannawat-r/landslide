'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { Map } from "@/components/map";

export default function Home() {
  const [datetime, setDatetime] = useState()
  const [areaName, setAreaName] = useState([])
  const [rain1d, setRain1d] = useState([])
  const [rain5d, setRain5d] = useState([])

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/home')
        setDatetime(response.data.datetime)
        setAreaName(response.data.area_name)
        setRain1d(response.data.rain_1d)
        setRain5d(response.data.rain_5d)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  console.log(rain1d, areaName)
  return (
    <>
      {/* Header  */}
      <Header />


      {/* Main content */}
      <div className="container mx-auto">
        {/* Title */}
        <div className="py-5">
          <p className="text-center text-2xl">แผนที่ความเสี่ยงดินถล่มระดับชุมชน</p>
        </div>

        {/* Map */}
        <div className="flex justify-between p-3">
          <div className="w-full mr-3">
            <Map position={[18.788187932870155, 98.98523626490541]} zoom={10}></Map>
          </div>
          <div className="w-full h-1/2 ml-3 z-0">
            <select className="w-full mb-3">
              <option value="1" selected>อ่างขาง (ตำบลม่อนปิ่น อำเภอฝาง จังหวัดเชียงใหม่)</option>
              <option value="2">แม่กำปอง (ตำบลห้วยแก้ว อำเภอแม่ออน จังหวัดเชียงใหม่)</option>
              <option value="3">ม่อนแจ่ม (ตำบลแม่แรม อำเภอแม่ริม จังหวัดเชียงใหม่)</option>
              <option value="4">ดอยสุเทพปุย (ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่)</option>
              <option value="5">ขุนกลาง (ตำบลบ้านหลวง อำเภอจอมทอง จังหวัดเชียงใหม่)</option>
            </select>
            <Map position={[18.788187932870155, 98.98523626490541]} zoom={10}></Map>
          </div>
        </div>


        {/* Date time title */}
        <p className="text-center text-xl">ข้อมูลวันที่ {datetime}</p>

        {/* Table */}
        <table className="w-full table-auto my-3">
          <thead>
            <tr className="border-black border-b-2">
              <th className="p-3">พื้นที่</th>
              <th>น้ำฝนรายวันเวลา 7:00 น</th>
              <th>น้ำฝนสะสมราย 5 วัน</th>
              <th>ความเสี่ยงดินภล่ม</th>
            </tr>
          </thead>
          <tbody>
            {areaName.map((row, index) => (
              <tr key={index} className="border-b-2">
                <td className="text-center">{row}</td>
                <td className="text-center">{rain1d[index]} มม.</td>
                <td className="text-center">{rain5d[index]} มม.</td>
                <td className="text-center">ไม่มี</td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
