export interface TabComponentProps {
    tab: number;
    handleTabChange: (selectedTab: number) => void;
}

export interface Todo {
    _id: string;
    text: string;
    completed: boolean;
}

export interface TodoPayload {
    text?: string;
    completed: boolean;
}
