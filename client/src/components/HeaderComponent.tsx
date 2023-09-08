import todoLogo from '../assets/logo.png';

const HeaderComponent = () => {
    return (
        <div className="flex items-center justify-center py-10">
            <img src={todoLogo} className="w-20 h-auto" />
        </div>
    );
};

export default HeaderComponent;
