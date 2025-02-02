'use client';
import {FC, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
    question: string;
    answer: string
}

interface LandingFaqProps {
    faqs?: FaqItem[];
    defaultOpenIndex?: number | null;
    className?: string;
}

export const LandingFaqs = ({
    faqs,
    defaultOpenIndex = null,
    className = ""
} : LandingFaqProps) => {
    const [openFaq, setOpenFaq] = useState<number | null>(defaultOpenIndex);

    const faqsData = [
        {
            question: "How does this works",
            answer: 'AI will analyse the data that you share and based on that generate insight reports'
        },
        {
            question: "How does this works",
            answer: 'AI will analyse the data that you share and based on that generate insight reports'
        },
        {
            question: "How does this works",
            answer: 'AI will analyse the data that you share and based on that generate insight reports'
        }
    ]

    return (
        <section id="faq" className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
            <div className="px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                    Frequently asked questions    
                </h2> 
                <div className="max-w-3xl mx-auto space-y-4">
                    {
                        faqsData.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button className="flex justify-between items-center w-full px-4 py-3 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                                    <span className="font-medium"> {faq.question}</span>
                                    {
                                        openFaq === index ? (
                                            <ChevronUp className="h-5 w-5 text-gray-500" />
                                        ):  (
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        )
                                    }
                                </button>
                                {
                                    openFaq === index  && (
                                        <div className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                            {faq.answer}
                                        </div>
                                    )
                                }
                            </div>
                        ))}
            
                </div>
            </div>
        </section>
    )
}