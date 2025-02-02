"use client";

import Hero from "@/components/hero";
import "./../app/app.css";

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css'



export default function App() {

  return (
    <main>
       <Hero />
    
        <h2 className="font-medium text-xl mb-4">Features</h2>
        <li>
           Income & Expense Analysis - Get a clear picture of your financial health with detailed income and expense breakdowns 
        </li>
        <li>
          Investment Insights - Receive personalized investment advice based on your financial goals
        </li>
        <li>
          Smart Budgeting - Create and Stick to intelligent budgets that adapt to your spending habits
        </li>
        <li>
          Goal Tracking - Set financial goals and track your progress with AI-powered recommendations.
        </li>

    </main>
  );
}
