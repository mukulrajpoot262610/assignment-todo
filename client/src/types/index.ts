export interface TabComponentProps {
    tab: number;
    setTab: (tab: number) => void;
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
