import { apiUrls } from "@/lib/apiUrls";

export type SubscriptionsData = {
    name: string;
    notes: string;
    url: string;
    price: string;
    paid: string
    notify: boolean;
    date: string;
    active?: boolean;
    cancelled_at?: string
    user_id: string | null;
}

export const addSubscription = async (data: SubscriptionsData) => {
    const res = await fetch(apiUrls.subscriptions.add, { method: 'POST', body: JSON.stringify(data) });

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}

export const getSubscriptions = async () => {
    const res = await fetch(apiUrls.subscriptions.getAll);

    if (!res.ok) {
        const error = await res.json();
        throw error;
    }
    return await res.json();
}