import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    createdAt: string;
    category: string;
    type: 'deposit' | 'withdraw';
}

interface GetTransactionsResponse {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get<GetTransactionsResponse>('/transactions').then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}
