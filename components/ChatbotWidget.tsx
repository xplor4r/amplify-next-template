
"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import { MessageCircle, Send } from "lucide-react"; 

// Mock financial data (in a real app, this would come from your backend)
const financialData = {
    income: 5000,
    expenses: 3500,
    savings: 1500,
    investments: 10000,
   }
   

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role : "assistant",
            content: "Hello ! I'm your personal AI Financial Advisor, How can I help you today ?"  
        }
    ]);

    const [input, setInput] = useState("");



    useEffect(() => {
        const storedState = localStorage.getItem("chatSidebarOpen")
        if (storedState !== null) {
        setIsOpen(storedState === "true")
        }
    }, [])
    
    
    const toggleSidebar = () => {
        const newState = !isOpen
        setIsOpen(newState)
        localStorage.setItem("chatSidebarOpen", newState.toString())
    }
 
    const getAIResponse = (input: string) => {
        const lowerInput = input.toLowerCase()
        if (lowerInput.includes("save") || lowerInput.includes("saving")) {
          return `Based on your current financial situation, you're saving $${financialData.savings} per month. To increase your savings, consider reducing non-essential expenses or finding ways to increase your income.`
        } else if (lowerInput.includes("invest") || lowerInput.includes("investment")) {
          return `You currently have $${financialData.investments} in investments. Consider diversifying your portfolio and regularly contributing to your investments to benefit from compound interest.`
        } else if (lowerInput.includes("budget") || lowerInput.includes("expense")) {
          return `Your monthly expenses are $${financialData.expenses}. To improve your financial health, try to keep your expenses below 70% of your income. Look for areas where you can cut back, such as subscriptions or dining out.`
        } else if (lowerInput.includes("income")) {
          return `Your monthly income is $${financialData.income}. To improve your financial situation, consider ways to increase your income, such as asking for a raise, finding a side hustle, or developing new skills that can lead to higher-paying opportunities.`
        } else {
          return "I'm sorry, I didn't quite understand that. Could you please rephrase your question? You can ask me about your savings, investments, budget, expenses, or income."
        }
      }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (input.trim()) {
            setMessages([...messages, { role: "user", content: input} ])

            // send data to ai service and get responss
            setTimeout(() => {
                const response = getAIResponse(input);
                setMessages((prev) => [...prev, { role: "assistant", content:  response}])
            }, 1000)
            setInput("");
        }
    }

    // const handleOpen = () => {
    //     setIsOpen(true)
    // }

    return (
        <>
            {
                !isOpen && (
                    <Button className="fixed bottom-4 right-4 rounded-full p-8" size={'lg'} onClick={toggleSidebar}>
                        <MessageCircle className="w-6 h-6" /> Ask AI
                        <span className="sr-only"> Open chat</span>
                    </Button>
                )
            }
            {
                isOpen && (
                    <Card
                        className={`fixed right-0 top-0 h-full w-[420px] flex flex-col transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
             
                        <CardHeader>
                            <CardTitle> Chat with your Financial Advisor - Wealthy AI </CardTitle>
                            <CardDescription> Powered by Bodhi</CardDescription>
                            <Button variant="ghost" className="absolute top-2 right-2" onClick={() => setIsOpen(false)}> &times;</Button>
                        </CardHeader>
                        <CardContent className="flex-grow overflow-hidden">
                            <ScrollArea className="h-full w-full pr-4">
                                {
                                    messages.map((message, index) => (
                                        <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                                            <span className={`inline-block p-2 rounded-lg ${ message.role === "user" ? "bg-black text-white" : "bg-gray-200 text-gray-800"}`} >
                                                {message.content}
                                               </span>
                                        </div>
                                    ))
                                }
                            </ScrollArea>
                        </CardContent>
                        <CardFooter>
                            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                                <Input
                                    type="text"
                                    placeholder="Ask AI..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <Button type="submit" size="icon">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                )
            }
            
        </>
    )
}