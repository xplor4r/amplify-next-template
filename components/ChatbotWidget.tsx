
"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import { MessageCircle, Send, Sparkles, UserRound, Bot } from "lucide-react"; 
import { QuickAccessChips } from "./QuickAccessChips";
import { getChatData, askChatData } from "@/services/bodhi";
import Markdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from "remark-gfm";
import ChatLoading from './ChatLoading';
import ChatText from './ChatText';
import {LoadingSkeleton} from './LoadingSkeleton';

// Mock financial data (in a real app, this would come from your backend)
const financialData = {
    income: 5000,
    expenses: 3500,
    savings: 1500,
    investments: 10000,
    goals: [
        { name: "Emergency Fund", target: 10000, current: 5000 },
        { name: "Down Payment for House", target: 50000, current: 15000 },
        { name: "Retirement Savings", target: 500000, current: 100000 },
      ],
   }
   

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
        // console.log('lowerInput', lowerInput);
        if (lowerInput.includes("save") || lowerInput.includes("saving")) {
          return `Based on your current financial situation, you're saving $${financialData.savings} per month. To increase your savings, consider reducing non-essential expenses or finding ways to increase your income.`
        } else if (lowerInput.includes("invest") || lowerInput.includes("investment")) {
          return `You currently have $${financialData.investments} in investments. Consider diversifying your portfolio and regularly contributing to your investments to benefit from compound interest.`
        } else if (lowerInput.includes("budget") || lowerInput.includes("expense")) {
          return `Your monthly expenses are $${financialData.expenses}. To improve your financial health, try to keep your expenses below 70% of your income. Look for areas where you can cut back, such as subscriptions or dining out.`
        } else if (lowerInput.includes("income")) {
          return `Your monthly income is $${financialData.income}. To improve your financial situation, consider ways to increase your income, such as asking for a raise, finding a side hustle, or developing new skills that can lead to higher-paying opportunities.`
        } else if (lowerInput.includes("goal") || lowerInput.includes("target")) {
          const goalUpdates = financialData.goals
            .map((goal) => {
              const progress = (goal.current / goal.target) * 100
              return `${goal.name}: ${progress.toFixed(1)}% complete (${goal.current}/${goal.target})`
            })
            .join(". ")
          return `Here's an update on your financial goals: ${goalUpdates}. Keep up the good work and stay focused on your targets!`
        } else {
          return "I'm sorry, I didn't quite understand that. Could you please rephrase your question? You can ask me about your savings, investments, budget, expenses, or income."
        }
      }

    //   const getChatResponse = async () => {
    
    //     const messages = [
    //         {
    //             role: "user",
    //             content: "Hi i am sujay, can you tell me the meaning of it"
    //         }
    //     ]

    //     await askChatData(messages).then((resp) => {
    //         console.log('resp from AI', resp);
    //     })
    //     // await getChatData().then((resp) => {
    //     //     console.log('resp from AI', resp);
    //     // })
    //   }
     
    //   const sendMessage = (message: string) => {

    //     setMessages([...messages, { role: "user", content: message} ])
    //     setInput("");
    //     // send data to ai service and get responss
    //     // setTimeout(() => {
    //     //     const response = getAIResponse(message);
    //     //     setMessages((prev) => [...prev, { role: "assistant", content:  response}])
    //     // }, 1000)
    // }

    const sendMessage = async () => {
        setIsGenerating(true);

        if (input !== '') {
            setIsLoading(true);

            /// set user message in the messages
            const userInput = { role: "user", content: input};
             setMessages((prev) => [...prev, userInput]);

             const oldMessages = messages.map((message) => ({
                role: message.role,
                content: message.content
             }));
             const newMessages = [...oldMessages, userInput];

             // Todo: update the messages in the current session
             // updateChatSessionMessages(sessionId, userInput);

             await askChatData(newMessages).then((chatResponse) => {
               
                const responseMesssage = chatResponse.response;
                // console.log('resp from AI', responseMesssage);
                if (responseMesssage.length > 0) {
                    setMessages((prev) => [
                        ...prev,
                        {role: 'assistant', content: responseMesssage}
                    ])

           
                    // Todo: update the messages in the current session
                    // updateChatSessionMessages(sessionId, { role: "assistant", content: responseMessage});
                }
                setIsLoading(false);
            }).catch((error) => {
                // console.log('error >>>', error);
                setIsLoading(false);
            }).finally(() => {
                setIsGenerating(false);
            })
        }

    }


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendMessage();
       
        // await getChatResponse();

        // if (input.trim()) {
        //    sendMessage(input);
         
        // }
    }

 
    // const handleOpen = () => {
    //     setIsOpen(true)
    // }

    const handleChipClick = async (chip: string) => {
        console.log('chip', chip);
        // sendMessage(chip);
        setInput(chip);   
        await sendMessage();
    }

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
                           
                                    <Sparkles className="h-6 w-6 text-blue-500 mr-2" />
                            
                                    {
                                        messages.map((message, index) => (
                                            <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                                                
                                           

                                                {message.role === 'user' && (
                                                     <>
                                                       {message.content.trim()}
                                                       </>
                                                     )}

                                                {
                                                            // if last message is assistant and isLoading, then show loading skeleton
                                                            index === messages.length - 1 && message.role === 'assistant' && isLoading && (
                                                                <LoadingSkeleton />
                                                            )
                                                    }


                                                {
                                                            // if last message is assistant and is not loading and is not empty, then show message
                                                            index === messages.length - 1 && message.role === "assistant" && !isLoading && message.content.trim() !== "" && (
                                                                <ChatText text={message.content.trim()} />
                                                            )
                                                            }


                                                        {
                                                        message.role === 'assistant' && index !== messages.length - 1 && (
                                                            <Markdown rehypePlugins={[rehypeSanitize]} remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
                                                            {message.content.trim()}
                                                        </Markdown>
                                                        )
                                                        }

                                            </div>
                                        ))
                                    }


                                {
                                                                isLoading && (
                                                                <div className="flex flex-col items-center justify-center py-4">
                                                                    <ChatLoading />
                                                                </div>
                                                                )
                                                            }


                                                            {isLoading && (
                                                                <div className="mb-4 text-left">
                                                                <span className="inline-block items-center p-4 rounded-lg bg-gray-100 text-gray-900">
                                                                    <Bot className="h-8 w-4 text-gray-900 mr-2" />
                                                                    <p>Assistant is typing...</p>
                                                                </span>
                                                                </div>
                                                            )}

                            </ScrollArea>
                        </CardContent>
                        <div className="px-4 py-2">
                            <QuickAccessChips onChipClick={handleChipClick} />
                        </div>
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