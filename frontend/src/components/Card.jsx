import React from "react";


const Card = ({ title, logo }) => {
    return (
        <div className="w-20 h-30 rounded-lg mt-5 ml-2 border-solid border-2 border-gray-50 hover:border-gray-100 transition ease-in-out delay-100">
            <div className="w-20 h-30 round-lg flex justify-center items-center max-w-lg round overflow-hidden shadow-lg">
                <img src={logo} className="w-20 h-20 " />
            </div>
            <div className="flex justify-center items-center max-w-lg rounded overflow-hidden ">
                <h2 className="font-medium ">{title}</h2>
            </div>
        </div>
    )
}

export default Card;