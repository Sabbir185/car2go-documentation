import {
    MdEditNote, MdRule, MdAnnouncement, MdAdminPanelSettings, MdOutlineSupportAgent, MdSupervisorAccount, MdSupervisedUserCircle, MdPhoneInTalk, MdPassword, MdOutlineLocalOffer,
} from "react-icons/md";
import Sidebar from "../components/dashboard/sidebar.js";
import Header from "../components/dashboard/header.js";
import { TiContacts } from "react-icons/ti";
import { CgMediaLive } from "react-icons/cg";
import { FcWorkflow } from "react-icons/fc";
import { TiFlowMerge } from "react-icons/ti";
import { BiHistory } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { BsCardChecklist, BsTicketDetailedFill, BsWallet2 } from "react-icons/bs";


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
        label: 'Instruction',
        icon: MdAnnouncement,
        child: [
            {
                label: 'Installation Process',
                icon: MdRule,
                href: '/instruction/install',
            },
            {
                label: 'Backend Installation Process',
                icon: MdRule,
                href: '/instruction/backend',
            },
            {
                label: 'Frontend Installation Process',
                icon: MdRule,
                href: '/instruction/frontend',
            },
            {
                label: 'Env File Setting',
                icon: MdEditNote,
                href: '/instruction/setting',
            },
            {
                label: 'Website Run Time Work Flow',
                icon: TiFlowMerge,
                href: '/instruction/run',
            },
        ]
    },
    {
        label: 'Tax Filing Work Flow',
        icon: FcWorkflow,
        href: '/flow/file',
    },
    {
        label: 'Admin Panel',
        icon: MdAdminPanelSettings,
        child: [
            {
                label: 'Admin Login',
                icon: TiContacts,
                href: '/admin/login',
            },
            {
                label: 'Admin Profile Setting',
                icon: TiContacts,
                href: '/admin/profile',
            },
            {
                label: 'User Forms Feilds',
                icon: TiContacts,
                href: '/admin/userForms',
            },
            {
                label: 'User ',
                icon: TiContacts,
                href: '/admin/user',
            },
            {
                label: 'Province ',
                icon: TiContacts,
                href: '/admin/province',
            },
            {
                label: 'Coupon ',
                icon: TiContacts,
                href: '/admin/coupon',
            },
            {
                label: 'Admin Tax Feilds',
                icon: TiContacts,
                href: '/admin/allFiles',
            },
            {
                label: 'Role And Permission',
                icon: TiContacts,
                href: '/admin/rolePermission',
            },
            {
                label: 'Website Setting',
                icon: TiContacts,
                href: '/admin/landingPage',
            },
            {
                label: 'Driver Management',
                icon: TiContacts,
                href: '/admin/driverManagement',
            },
            {
                label: 'Withdraw',
                icon: TiContacts,
                href: '/admin/withdraw',
            },
            {
                label: 'Feedback',
                icon: TiContacts,
                href: '/admin/feedback',
            },
        ]
    },
    {
        label: 'User Panel',
        icon: MdSupervisorAccount,
        child: [
            {
                label: 'Trip History',
                icon: BiHistory,
                href: '/user-panel/trip-history',
            },
            {
                label: 'Trip Details',
                icon: TbListDetails,
                href: '/user-panel/trip-details',
            },
            {
                label: 'Payment List',
                icon: BsCardChecklist,
                href: '/user-panel/payment-list',
            },
            {
                label: 'Offers',
                icon: MdOutlineLocalOffer,
                href: '/user-panel/offers',
            },
            {
                label: 'Wallet',
                icon: BsWallet2,
                href: '/user-panel/wallet',
            },
            {
                label: 'Support Ticket',
                icon: BsTicketDetailedFill,
                href: '/user-panel/support-ticket',
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
