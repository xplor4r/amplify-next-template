'use client'
import React from 'react';
import Image from 'next/image';
import { CheckCircle, LucideIcon } from 'lucide-react';
import InsightsFeature from "@/app/assets/images/feature-insights.png";
import InsightsFeatureDark from "@/app/assets/images/feature-insights-dark.png";
import { useTheme } from "next-themes";

interface FeatureItem {
    text: string;
    icon?: LucideIcon;
}

interface LandingSectionInfoProps {
    title?: string;
    description?: string;
    features?: FeatureItem[];
    imageSrc?: string;
    imageAlt?:string;
    reverseOrder?: boolean;
}


export const LandingSectionInfo = ({
    title="Advanced AI Insights",
    description="Our AI-powered system helps you gain more visibility on your spends and helps you acheive your financial goals",
    features,
    imageSrc = '',
    imageAlt="Feature",
    reverseOrder = false
}: LandingSectionInfoProps) => {
    const {theme} = useTheme();

    const featuresMap = [
        {
            text: "Income & Expense Analysis", icon: CheckCircle 
        },
        {
            text: "Investment Insights", icon: CheckCircle
        },
        {
            text: "Smart Budgeting ", icon: CheckCircle
        },
        {
            text: "Goal Tracking",  icon: CheckCircle
        }
    ]
    return (
        <section id="features" className='w-full py-16 md:py-12 lg:py-12'>
            <div className='max-w-6xl mx-auto px-4 md:px-6'>
                <div className={`grid gap-10 lg:grid-cols-2 items-center ${
                    reverseOrder ? "lg:grid-cols-2-reverse": ""
                }`}
                dir={reverseOrder ? "rtl" : "ltr"}
                >
                    <div className="space-y-4">
                        {
                            title && (
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    {title}
                                </h2>
                            )
                        }
                        {
                            description && (
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        {description}
                                </p>
                            )
                        }
                        {
                            featuresMap && (
                               <ul className='grid gap-2 py-4'>
                                {
                                    featuresMap.map((feature, index) => (
                                        <li key={index} className='flex items-center gap-2'>
                                            {
                                                feature.icon && (
                                                    <feature.icon  className="w-4 h-4 text-primary" /> 
                                                )
                                            }
                                            {feature.text}
                                        </li>
                                    ))
                                }
                               </ul>
                            )
                        }
                    </div>
                    <div className='flex justify-center py-2'>
                        <Image src={theme === "light" ? `${InsightsFeature.src}` : `${InsightsFeatureDark.src}`} alt={imageAlt} width={600} height={400} className='rounded-xl object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}