import { TabComponentProps } from '../types';

const TabComponent = ({ tab, handleTabChange }: TabComponentProps) => {
    return (
        <div className="flex items-center">
            <div
                className={`w-1/2 text-center border-b p-2 hover:bg-blue-50 cursor-pointer  ${
                    tab == 0 && 'border-blue-500 text-blue-500 border-b-2'
                }`}
                onClick={() => handleTabChange(0)}
            >
                <p>All</p>
            </div>
            <div
                className={`w-1/2 text-center p-2 border-b hover:bg-blue-50 cursor-pointer ${
                    tab == 1 && 'border-blue-500 text-blue-500 border-b-2'
                }`}
                onClick={() => handleTabChange(1)}
            >
                <p>Done</p>
            </div>
        </div>
    );
};

export default TabComponent;
