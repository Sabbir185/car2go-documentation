import {
    MdEditNote,
    MdRule,
    MdAnnouncement,
    MdAdminPanelSettings,
    MdOutlineSupportAgent,
    MdSupervisorAccount,
    MdSupervisedUserCircle,
    MdPhoneInTalk,
    MdPassword,
    MdPrivacyTip,
    MdContactPage,
    MdOutlineReadMore,
    MdOutlinePayments,
    MdOutlineLocalOffer,
} from "react-icons/md";
import Sidebar from "../components/dashboard/sidebar.js";
import Header from "../components/dashboard/header.js";
import { TiContacts, TiDocument, TiTicket } from "react-icons/ti";
import { CgMediaLive } from "react-icons/cg";
import { FcDocument, FcWorkflow } from "react-icons/fc";
import { TiFlowMerge } from "react-icons/ti";
import { AiOutlineContacts, AiOutlineFileUnknown, AiOutlineHome } from "react-icons/ai";
import { GiMedallist, GiTakeMyMoney } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaPager } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { BiHistory, BiSupport, BiTrip, BiWallet } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import {  GiReceiveMoney } from "react-icons/gi";
import { BsCardChecklist, BsCash, BsFileArrowUpFill, BsFillStarFill, BsTicketDetailedFill, BsWallet2 } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
import { AiFillNotification, } from "react-icons/ai";
import { FaWrench, FaTools, } from "react-icons/fa";


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
                icon: BsPersonLinesFill,
                href: '/admin/driverManagement',
            },
            {
                label: 'Withdraw',
                icon: MdOutlinePayments,
                href: '/admin/withdraw',
            },
            {
                label: 'Frontend Pages',
                icon: FaPager,
                href: '/admin/frontendPages',
            },
            {
                label: 'Support Tickets',
                icon: FaWrench,
                href: '/admin/support-ticket',
            },
            {
                label: 'Push Notification',
                icon: AiFillNotification,
                href: '/admin/push-notification',
            },
            {
                label: 'Marketing',
                icon: GiMedallist,
                href: '/admin/marketing',
            },
            {
                label: 'Settings',
                icon: FaWrench,
                permission: 'any',
                href: '/admin/settings'
            },
            {
                label: 'Feedback',
                icon: VscFeedback,
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
                icon: BiSupport,
                href: '/user-panel/support-ticket',
            },
        ]
    },
    {
        label: 'Driver Panel',
        icon: MdSupervisedUserCircle,
        child: [
            {
                label: 'Trip List',
                icon: BiTrip,
                href: '/driver-panel/trip-list',
            },
            {
                label: 'My Ratings',
                icon: BsFillStarFill,
                href: '/driver-panel/my-ratings',
            },
            {
                label: 'Earnings',
                icon: BiWallet,
                href: '/driver-panel/earnings',
            },
            {
                label: 'Received Payments',
                icon: GiReceiveMoney,
                href: '/driver-panel/received-payments',
            },
            {
                label: 'Withdraw',
                icon: BsCash,
                href: '/driver-panel/withdraw',
            },
            {
                label: 'Vehicle',
                icon: FaMotorcycle,
                href: '/driver-panel/vehicle',
            },
            {
                label: 'Documents',
                icon: TiDocument,
                href: '/driver-panel/documents',
            },
            {
                label: 'Support Ticket',
                icon: BiSupport,
                href: '/driver-panel/support-ticket',
            }
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
            {
                label: 'Employee Panel',
                icon: TiContacts,
                href: '/user/ticket_employee',

            }
        ]
    },
    {
        label: 'Live Pages',
        icon: CgMediaLive,
        child: [
            {
                label: 'Home Page',
                icon: AiOutlineHome,
                href: '/live/home',
            },
            {
                label: 'Earn With Share Page',
                icon: GiTakeMyMoney,
                href: '/live/earnWithShare',
            },
            {
                label: 'Blog Page',
                icon: TiContacts,
                href: '/live/blog',
            },
            {
                label: 'About Page',
                icon: AiOutlineContacts,
                href: '/live/about',
            },
            {
                label: 'Knowledge Page',
                icon: AiOutlineFileUnknown,
                href: '/live/knowledge',
            },
            {
                label: 'Terms & Condition Page',
                icon: HiOutlineDocumentText,
                href: '/live/termsCondition',
            },
            {
                label: 'Privacy Policy Page',
                icon: MdPrivacyTip,
                href: '/live/privacyPolicy',
            },
            {
                label: 'Contact Page',
                icon: MdContactPage,
                href: '/live/contact',
            },
            {
                label: 'More Pages',
                icon: MdOutlineReadMore,
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
