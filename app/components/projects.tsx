import React from 'react';
// import ImageCard from './neobrutalism/image-card';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from './neobrutalism/card';

// import { useState, useEffect } from 'react';



const Projects = () => {


    return (
        <div className="flex flex-col items-center">
            {/* Centered Header */}
            <h1 className="text-6xl font-bold mb-6">Projects</h1>


            <div className="flex w-full justify-between">

                <div className="flex-1 flex justify-center items-center">
                    <div className="p-6 border-4 border-border shadow-light max-w-xl">
                        {/* Left content */}
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Project or put image here</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">

                                        </div>
                                        <div className="flex flex-col space-y-1.5">


                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Right Container */}
                <div className="flex-1 flex justify-center items-center">
                    <p>TEXT CONTENT ON THE RIGHT</p>
                </div>
            </div>



            {/* NEXT ROW */}
            <div className="flex w-full justify-between">

                {/* Right Container */}
                <div className="flex-1 flex justify-center items-center">
                    <p>TEXT CONTENT ON THE RIGHT</p>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="p-6 border-4 border-border shadow-light max-w-xl">
                        {/* Left content */}
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Project or put image here</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">

                                        </div>
                                        <div className="flex flex-col space-y-1.5">


                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                            </CardFooter>
                        </Card>
                    </div>
                </div>


                {/* NEXT ROW -- LEFt */}




            </div>

            <div className="flex w-full justify-between">

                <div className="flex-1 flex justify-center items-center">
                    <div className="p-6 border-4 border-border shadow-light max-w-xl">
                        {/* Left content */}
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Project or put image here</CardTitle>
                                <CardDescription>Deploy your new project in one-click.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">

                                        </div>
                                        <div className="flex flex-col space-y-1.5">


                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                            </CardFooter>
                        </Card>
                    </div>
                </div>

                {/* Right Container */}
                <div className="flex-1 flex justify-center items-center">
                    <p>TEXT CONTENT ON THE RIGHT</p>
                </div>
            </div>
        </div>
    );
}

export default Projects; 