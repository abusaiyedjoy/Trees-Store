import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="w-full">
            <div className="flex justify-normal items-start w-full"><Sidebar></Sidebar></div>
        </div>
    );
};

export default Dashboard;
