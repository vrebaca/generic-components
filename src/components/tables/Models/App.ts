export interface App {
    AppId: string;
    Name: string;
    Description: string;
    Enabled: boolean;
}

export const mockApps: App[] = Array.from({ length: 100 }, (_, i) => ({
    AppId: `App${i}`,
    Name: `App ${i}`,
    Description: `Description for App ${i}`,
    Enabled: i % 2 === 0,
}));