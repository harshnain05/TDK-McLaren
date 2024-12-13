import Cameron from '../assets/image/svg/cameron.svg'
import Ronald from '../assets/image/svg/ronald.svg'
import Jay from '../assets/image/svg/jay.svg'
import Description from '../common/Discription'
import { TimeMoney } from './Icon'
import { Comparison } from './Icon'
import { NoService } from './Icon'
import { Support } from './Icon'
import { StartSvgIcon } from './Icon'
export const HEADER_LIST = [


   {
        name: 'Menu one',
        link: '#about'
    },
    {
        name: 'Menu two',
        link: '#howItWorks'
    },
    {
        name: 'Menu three',
        link: '#services'

    },
    {
        name: 'Menu four',
        link: '#testimonials'
    },
    {
        name: 'Menu five',
        link: '#whyUs'
    }
    
]
export const menuItems = ["Menu One", "Menu Two", "Menu Three", "Menu Four", "Menu Five"];

export const TESTIMONIAL = [
    {
        img: Cameron,
        name: 'Cameron',
        id: '@cameron',
        svgImg: <StartSvgIcon />,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: Ronald,
        name: 'Ronald',
        id: '@ronald',
        svgImg: <StartSvgIcon />,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: Jay,
        name: 'Jay Shah',
        id: '@jayshah',
        svgImg: <StartSvgIcon />,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: Cameron,
        name: 'Cameron',
        id: '@cameron',
        svgImg: <StartSvgIcon />,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: Ronald,
        name: 'Ronald',
        id: '@ronald',
        svgImg: <StartSvgIcon />,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },
    {
        img: Jay,
        name: 'Jay Shah',
        id: '@jayshah',
        svgImg: <StartSvgIcon />,
        description: "Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum."
    },

];
export const CHOOSE = [
    {
        icon: <Comparison />,
        title: 'Simplified Comparison Process',
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision." />
    },
    {
        icon: <TimeMoney />,
        title: 'Save Time and Money',
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available." />
    },
    {
        icon: <NoService />,
        title: 'No Service Interruptions',
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime." />
    },
    {
        icon: <Support />,
        title: 'Comprehensive Support',
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way." />
    },
];