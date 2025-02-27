import React from 'react'
// import { Card } from './neobrutalism/card';



const Education = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Centered Header */}
            <h1 className="text-6xl font-bold mb-6">School Things</h1>


            <div className="flex w-full justify-between">

                {/* Right Container */}
                <div className="flex-1 flex justify-center items-center">

                    <p>Information Systems Sophomore @ Singapore Management University</p>
                    <p>TEXT CONTENT ON THE LEFT</p>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="p-6 border-4 border-border shadow-light max-w-xl">
                        {/* Left content */}
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">

                                {/* <img src="/images/table.png"></img>
                                <img src="/images/table2.png"></img> */}
                                <img src="/images/smubear.png"></img>

                            </div>
                            <div className="flex flex-col space-y-1.5">


                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Education;