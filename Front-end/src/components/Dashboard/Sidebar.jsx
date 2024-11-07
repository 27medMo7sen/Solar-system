import { FaList } from "react-icons/fa6";
import { LiaCcAmazonPay } from "react-icons/lia";
import { DashTabs } from "./DashTabs";
import Listings from "./Listings";
import Orders from "./Orders";
import Overview from "./Overview/Overview";
import Payments from "./Payments";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import Analytics from "./Analytics";
import { GiChart } from "react-icons/gi";

export const Sidebar = () => {
    const tabs = [
        { label: "Overview", icon: <IoHomeOutline /> },
        { label: "Listing", icon: <FaList /> },
        { label: "Orders", icon: <IoCartOutline /> },
        { label: "Payments", icon: <LiaCcAmazonPay /> },
        { label: "Analytics", icon: <GiChart /> },
        { label: "Log out", icon: <IoIosLogOut /> },
    ];

    const tabContent = {
        Overview: <Overview />,
        Listing: <Listings />,
        Orders: <Orders />,
        Payments: <Payments />,
        Analytics: <Analytics />,
    };

    return (
        <div className="h-auto bg-white">
            <div className="flex flex-col bg-white">
                <DashTabs tabs={tabs}>{tabContent}</DashTabs>
            </div>
        </div>
    );
};
