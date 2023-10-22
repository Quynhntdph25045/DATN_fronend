import React, { useState } from 'react'
import { Link, Outlet, useParams } from "react-router-dom"
import Menu from '../component/layoutPerson/menu';

const Booking = (props: any) => {
    const { id } = useParams()

    const movieBooking = props.Movies.find((item: any) => item.id == id);

    const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };


    return (
        <div className='bg-black text-white'>
            <Menu />
            <div className="backdrop">
                <img src={movieBooking?.backdrop_path} className='backdrop-img w-full h-[550px] relative'></img>
            </div>
            <div className="movies-detail absolute">
                <img src={movieBooking?.poster_path} className='w-[350px] border'></img>
            </div>
            <div className="movies-title absolute flex justify-between items-center translate-x-[28rem] -translate-y-[4rem] text-white w-[63.875rem]">
                <h3 className='text-3xl'>{movieBooking?.title}</h3>
                <div className="time flex text-lg items-center space-x-10">
                    <p>{movieBooking?.time}</p>
                    <p className='border-2 border-[#1ACAAC] rounded-full px-7 py-2'>{movieBooking?.age}</p>
                </div>
            </div>
            <div className="booking h-full max-w-[1420px] mx-auto ">
                <div className="booking-seat">
                    <div className="no-content"></div>
                    <div className="content-right">
                        <div className="taskbar">
                            <ul>
                                <Link to={''}><li className={activeTab === 1 ? 'active' : ''} onClick={() => handleClick(1)}><span>1</span> Chọn ghế</li></Link>
                                <Link to={'combo'}><li className={activeTab === 2 ? 'active' : ''} onClick={() => handleClick(2)}><span>2</span> Combo</li></Link>
                                <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleClick(3)}><span>3</span> Thanh toán</li>
                            </ul>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Booking