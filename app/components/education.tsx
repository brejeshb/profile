import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './neobrutalism/card';



const Education = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Centered Header */}
            <h1 className="text-6xl font-bold mb-6">School Things</h1>


            <div className="p-6 border-4 border-border shadow-light max-w-xl">
                {/* Left content */}
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">

                        {/* <img src="/images/table.png"></img>
                                <img src="/images/table2.png"></img> */}
                        <img src="/images/smubear.png"></img>

                    </div>
                </div>

            </div>
            <div className="flex w-full justify-between pt-10">

                {/* Right Container */}
                <div className="flex-1 flex justify-center items-center">


                    <Card className='p-6 border-4 border-border shadow-dark max-w-xl w-80'>

                        <CardTitle> Card Title </CardTitle>

                        <CardHeader>Card Header</CardHeader>

                        <CardContent>Card Content</CardContent>

                        <CardDescription>Card Description </CardDescription>

                        <CardFooter>Card Footer</CardFooter>
                    </Card>
                </div>

                <div className="flex-1 flex justify-center items-center">

                    <Card className='p-6 border-4 border-border shadow-dark max-w-xl w-80'>

                        <CardTitle> Card Title </CardTitle>

                        <CardHeader>Card Header</CardHeader>

                        <CardContent>Card Content</CardContent>

                        <CardDescription>Card Description </CardDescription>

                        <CardFooter>Card Footer</CardFooter>
                    </Card>

                </div>
                <div className="flex-1 flex justify-center items-center">

                    <Card className='p-6 border-4 border-border shadow-dark max-w-xl w-80'>

                        <CardTitle> Card Title </CardTitle>

                        <CardHeader>Card Header</CardHeader>

                        <CardContent>Card Content</CardContent>

                        <CardDescription>Card Description </CardDescription>

                        <CardFooter>Card Footer</CardFooter>
                    </Card>
                </div>


            </div>
        </div>
    )
}

export default Education;