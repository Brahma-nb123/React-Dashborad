
import { UilHome } from "@iconscout/react-unicons";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilBox } from "@iconscout/react-unicons";
import { UilChart } from "@iconscout/react-unicons"; // Use the correct icon name from the library
// import Updates from "../components/Updates/Updates";
// import { UliUsdSquare } from "@iconscout/react-unicons"; // Use the correct icon name from the library
// import { UliUsdSquare } from "@iconscout/react-unicons";
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'


// sidebar data .... 
export const SidebarData = [
    {
        icon: UilHome,
        heading: "Dashbord",
    },
    {
        icon: UilShoppingBag,
        heading: "Orders",
    },
    {
        icon: UilUser,
        heading: "Customes",
    },
    {
        icon: UilBox,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%,#FC929D 100%)",
            boxShow: "0px 10px 20px 0px #e0c6f5"
        },
        barValce: 70,
        value: "25,970",
        png: UilChart,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%,#FC929D 100%)",
            boxShow: "0px 10px 20px 0px #e0c6f5"
        },
        barValce: 80,
        value: "14,270",
        png: UilChart,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 40],
            }
        ]
    },
    {
        title: "Expenes",
        color: {
            backGround: "linear-gradient(180deg, #ff979D 0%,#FC929D 100%)",
            boxShow: "0px 10px 20px 0px #e0c6f5"
        },
        barValce: 40,
        value: "25,970",
        png: UilChart,
        series: [
            {
                name: "Expenes",
                data: [31, 40, 28, 51, 42, 109, 100],
            }
        ]
    },

];

// Recent Update Carsd Data

export const UpdatesData = [
    {
        img:img1,
        name:"Brahmananda Behera",
        noti:"has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img:img2,
        name:"susant",
        noti:"has ordered Samsung .",
        time: "30 seconds ago",
    },
    {
        img:img3,
        name:"Himanshu",
        noti:"has ordered Nokia.",
        time: "35 seconds ago",
    },
    {
        img:img1,
        name:"Samya",
        noti:"has ordered One Pluse",
        time: "40 seconds ago",
    },
    {
        img:img2,
        name:"Priti",
        noti:"has ordered vivo.",
        time: "47 seconds ago",
    }
]; 