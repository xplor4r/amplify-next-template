import { apiUrls } from "@/lib/apiUrls";

export type InvestmentsData = {
    name: string;
    notes: string;
    price: string;
    units: string;
    paid_via: string;
    category: string;
    date: string;
    user_id: string | null;
}

export const addInvestment = async (data: InvestmentsData) => {
    const res = await fetch(apiUrls.investments.add, { method: 'POST', body: JSON.stringify(data) });

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}

export const getInvestments = async () => {
    const res = await fetch(apiUrls.investments.getAll);

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}