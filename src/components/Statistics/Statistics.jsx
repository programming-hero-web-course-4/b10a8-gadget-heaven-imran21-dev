import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const Statistics = () => {

    useEffect(()=>{
            document.title = 'Statistics | Gadget Heaven'
        },[])
    
    const data = useLoaderData();
     const navigate = useNavigate();
     const back = ()=>{
        navigate(-1)
     }
  
    return (
        <>
            <div className="bg-pColor text-center py-7">
            <div className=" md:container mx-auto flex justify-center items-center relative">
                <button onClick={back} className="left-0 btn bg-pColor/0 border-none px-0 py-0 h-max rounded-full hover:bg-pColor/10 min-h-0 text-white absolute text-3xl hidden md:block"><IoArrowBackCircleOutline></IoArrowBackCircleOutline></button>

                 <h1 className="text-xl md:text-3xl text-white font-bold">Statistics</h1>
                </div>
            <p className="text-xs w-3/4 md:w-2/5 mx-auto md:text-sm pt-4 text-white/90">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            
            </div>
            <div className="flex md:container mx-auto pt-2 md:pt-5 items-center px-2 md:px-0">
                 <h1 className="flex-1 md:text-xl text-sm font-bold py-2">Statistics</h1> 
                 
         </div>
        <div className="h-[600px] md:container mx-auto pb-20">
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#ffff', borderRadius: '8px',margin:'20px 0', padding: '16px' }}>

                <ComposedChart data={data} margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}>
                    <CartesianGrid stroke="#13121211"/>
                    <XAxis dataKey="product_title" scale="band"/>
                    <YAxis dataKey=""/>
                    <Tooltip/>
                    <Legend/>
                    <Area type="monotone" dataKey="price" fill="#9538e288" stroke=""/>
                    <Bar dataKey="price" barSize={20} fill="#9538E2"/>
                    
                    <Scatter dataKey="rating" fill="red"/>
                </ComposedChart>
            </ResponsiveContainer>
            
        </div>
        </>
    );
};

export default Statistics;