import { apiUrls } from "@/lib/apiUrls";

export type IncomeData = {
    name: string;
    notes: string;
    amount: string;
    category: string;
    date: string;
    user_id: string | null;
}

export const addIncome = async (data: IncomeData) => {
    const res = await fetch(apiUrls.income.add, { method: 'POST', body: JSON.stringify(data)});

    if (!res.ok){
        const error = await res.json();
        throw error;
    }
    return await res.json();
}