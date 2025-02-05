'use client'

import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import Saurabh from "@/app/assets/images/saurabh.png";
import Manisha from "@/app/assets/images/manisha.png";
import Sujay from "@/app/assets/images/sujay.png"

interface Testimonial {
    name: string;
    role: string;
    feedback: string;
    rating: number;
    imageSrc: string;
    imageAlt: string;
}

interface LandingTestimonialsProps {
    title?: string;
    subtitle?: string;
    testimonials?: Testimonial[]
}


export const LandingTestimonials = ({
    title = "What our users say",
    subtitle="Some of the personal experiences of our users",
    testimonials,
}: LandingTestimonialsProps) => {

    const testimonialsData = [
        {
            name: "Sujay K.",
            role: "Senior Experience Engineer, PS",
            feedback: "I use Wealthy AI daily, helps me save lot of time and money",
            rating: 3,
            imageSrc: Sujay.src,
            imageAlt: "Sujay"
        },
        {
            name: "Manisha C.",
            role: "Senior Experience Engineer, PS",
            feedback: "Now i know how to grow my money easily. Thanks to Wealthy",
            rating: 4,
            imageSrc: Manisha.src,
            imageAlt: "Manisha"
        },
        {
            name: "Saurabh K.",
            role: "Senior Platform Engineer, PS",
            feedback: "Now I don't have to worry about my savings anymore, It has made my accounting sorted.",
            rating: 5,
            imageSrc: Saurabh.src,
            imageAlt: "Saurabh"
        },
        // {
        //     name: "Himanshu",
        //     role: "Senior Platform Engineer",
        //     feedback: "Now I don't have to worry about my savings anymore, It has made my accounting sorted.",
        //     rating: 5,
        //     imageSrc: Saurabh.src,
        //     imageAlt: "Saurabh"
        // },
    ]

    return (
        <div className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
            {title && (
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                    {title}
                </h2>
            )}

            {subtitle && (
                <p className='text-2xl py-2 text-center mb-12 text-balance'>
                    {subtitle}
                </p> 
            )}

            <div className='grid gap-8 md:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-3'>
                {
                    testimonialsData.map((testimonial, index) => (
                        <div key={index} className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className='flex flex-col items-center text-center'>
                                <Image src={testimonial.imageSrc} alt={testimonial.imageAlt} width={100} height={100} className="rounded-full mb-4" />
                                <p className="mb-4 text-gray-600 dark:text-gray-300">
                                    &quot;{testimonial.feedback}&quot;
                                </p>
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500"> {testimonial.role }</p>
                            </div>
                            <div className="flex mt-4 justify-center">
                                {
                                    [...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className='w-5 h-5 fill-primary text-primary' />
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                
            </div>
        </div>
    )
}