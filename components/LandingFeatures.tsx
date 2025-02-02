"use client";

import { Card, CardContent } from "@/components/ui/card";
import {LucideIcon, TrendingUp} from "lucide-react";
import React from 'react';

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface LandingFeaturesProps {
    title?: string;
    features?: Feature[];
    backgroundColor?: string;
    showIcons?: boolean
}

export const LandingFeatures = ({
    title = "Explore features",
    features,
    backgroundColor = "bg-white dark:bg-black",
    showIcons = true
}: LandingFeaturesProps) => {

    const featuresDummy = [
        {
            title: "Income & Expense Analysis",
            description: "Get a clear picture of your financial health with detailed income and expense breakdowns",
            icon: TrendingUp
        },
        {
            title: "Investment Insights",
            description: "Receive personalized investment advice based on your financial goals",
            icon: TrendingUp
        },
        {
            title: "Smart Budgeting",
            description: "Create and Stick to intelligent budgets that adapt to your spending habits",
            icon: TrendingUp
        },
        {
            title: "Goal Tracking",
            description: "Set financial goals and track your progress with AI-powered recommendations.",
            icon: TrendingUp
        },
        {
            title: "Analysis",
            description: "test",
            icon: TrendingUp
        },
        {
            title: "Grow",
            description: "some desc",
            icon: TrendingUp
        },
    ]
    return (
        <section id="featureOverview" className={`w-full py-2 md:py-24 lg:py-4 ${backgroundColor}`}>
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                {
                    title && (
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                            {title}
                        </h2>
                    )
                }
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                    {
                        featuresDummy.map((feature, index) => (
                            <Card key={index} className="bg-white dark:bg-gray-800">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center space-y-2 text-center">
                                        {
                                            showIcons && (
                                                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                                            )
                                        }
                                        <h3 className="text-xl font-bold"> {feature.title }</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LandingFeatures;