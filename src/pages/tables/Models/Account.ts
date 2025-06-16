// Account model and mock data
export interface Account {
    id: number;
    name: string;
    email: string;
    balance: number;
    isActive: boolean;
}

export const mockAccounts: Account[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    balance: Math.round(Math.random() * 10000) / 100,
    isActive: Math.random() > 0.5,
}));
