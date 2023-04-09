import {
    MdEditNote, MdRule, MdAnnouncement, MdAdminPanelSettings, MdOutlineSupportAgent, MdSupervisorAccount, MdSupervisedUserCircle, MdPhoneInTalk, MdPassword,
} from "react-icons/md";
import Sidebar from "../components/dashboard/sidebar.js";
import Header from "../components/dashboard/header.js";
import { TiContacts } from "react-icons/ti";
import { CgMediaLive } from "react-icons/cg";
import { FcWorkflow } from "react-icons/fc";
import { TiFlowMerge } from "react-icons/ti";


const AdminLayout = ({ children }) => {

    const menu = getMenu()

    return (
        <div className="dashboard">
            <Sidebar menu={menu} />
            <Header />
            <div className="absolute top-0 h-32 w-full " />
            <div className="main-content ">
                <div className="w-full z-30" style={{ minHeight: 400 }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;


const menu = [

    {
        label: 'Instructions',
        icon: MdAnnouncement,
        child: [
            {
                label: 'Getting Started',
                icon: MdRule,
                href: '/instruction/install',
            },
            {
                label: 'Backend Setup',
                icon: MdRule,
                href: '/instruction/backend',
            },
            {
                label: 'Frontend Setup',
                icon: MdRule,
                href: '/instruction/frontend',
            },
            {
                label: 'Env File Setting',
                icon: MdEditNote,
                href: '/instruction/setting',
            },
        ]
    },
    {
        label: 'Initial Setup',
        icon: FcWorkflow,
        href: '/initial-setup',
    },
    {
        label: 'Admin Panel',
        icon: MdAdminPanelSettings,
        child: [
            {
                label: 'Service Management',
                icon: TiContacts,
                href: '/admin/setup/service-management',
            },
            {
                label: 'Coupon',
                icon: TiContacts,
                href: '/admin/setup/coupon',
            },
            {
                label: 'HRM',
                icon: TiContacts,
                href: '/admin/setup/hrm',
            },
            {
                label: 'Payroll ',
                icon: TiContacts,
                href: '/admin/setup/payroll',
            },
            {
                label: 'Report ',
                icon: TiContacts,
                href: '/admin/setup/report',
            },
        ]
    },
    {
        label: 'User Panel',
        icon: MdSupervisorAccount,
        child: [
            {
                label: 'Trip History',
                icon: TiContacts,
                href: '/user-panel/trip-history',
            },
            {
                label: 'Payment List',
                icon: TiContacts,
                href: '/accountant/allTaxFile',
            },
            {
                label: 'Offers',
                icon: TiContacts,
                href: '/accountant/allTaxFile',
            },
            {
                label: 'Wallet',
                icon: TiContacts,
                href: '/accountant/allTaxFile',
            },
            {
                label: 'Support Ticket',
                icon: TiContacts,
                href: '/accountant/allTaxFile',
            },
        ]
    },
    {
        label: 'Driver Panel',
        icon: MdSupervisedUserCircle,
        child: [
            {
                label: 'User Login',
                icon: TiContacts,
                href: '/user/login',
            },
            {
                label: 'Tax File Submission',
                icon: TiContacts,
                href: '/user/form',
            },
            {
                label: 'My Tax File',
                icon: TiContacts,
                href: '/user/mytaxFile',
            },
            {
                label: 'File From A/C ',
                icon: TiContacts,
                href: '/user/fileAC',
            },
            {
                label: 'Feedback',
                icon: TiContacts,
                href: '/user/feebbackUS',
            },
        ]
    },
    {
        label: 'Employee Panel',
        icon: MdSupervisedUserCircle,
        child: [
            {
                label: 'User Login',
                icon: TiContacts,
                href: '/user/login',
            },
            {
                label: 'Tax File Submission',
                icon: TiContacts,
                href: '/user/form',
            },
            {
                label: 'My Tax File',
                icon: TiContacts,
                href: '/user/mytaxFile',
            },
            {
                label: 'File From A/C ',
                icon: TiContacts,
                href: '/user/fileAC',
            },
            {
                label: 'Feedback',
                icon: TiContacts,
                href: '/user/feebbackUS',
            },
        ]
    },
    {
        label: 'Live Pages',
        icon: CgMediaLive,
        child: [
            {
                label: 'Home Page',
                icon: TiContacts,
                href: '/live/home',
            },
            {
                label: 'Blog Page',
                icon: TiContacts,
                href: '/live/blog',
            },
            {
                label: 'About Page',
                icon: TiContacts,
                href: '/live/about',
            },
            {
                label: 'Knowledge Page',
                icon: TiContacts,
                href: '/live/knowledge',
            },
            {
                label: 'Terms & Condition Page',
                icon: TiContacts,
                href: '/live/termsCondition',
            },
            {
                label: 'Privacy Policy Page',
                icon: TiContacts,
                href: '/live/privacyPolicy',
            },
            {
                label: 'Contact Page',
                icon: TiContacts,
                href: '/live/contact',
            },
            {
                label: 'More Pages',
                icon: TiContacts,
                href: '/live/more',
            },
        ]
    },
    {
        label: 'Tawk to',
        icon: MdPhoneInTalk,
        href: '/tawkTo',
    },
    {
        label: 'Password Reset',
        icon: MdPassword,
        href: '/password',
    },
    {
        label: 'Help and Support',
        icon: MdOutlineSupportAgent,
        href: '/help',
    },
]


const getMenu = () => {
    return menu;
}
