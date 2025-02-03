import { apiUrls } from "@/lib/apiUrls";

export type ExpenseData = {
    name: string;
    notes: string;
    price: string;
    paid_via: string;
    category: string;
    date: string;
    user_id: string | null;
}

export const addExpense = async (data: ExpenseData) => {
    const res = await fetch(apiUrls.expenses.add, { method: 'POST', body: JSON.stringify(data) });

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}

export const getExpenses = async () => {
    const res = await fetch(apiUrls.expenses.getAll);
    
    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}