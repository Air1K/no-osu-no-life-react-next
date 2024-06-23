'use client'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
} from "@heroicons/react/24/solid";
import styles from "@/components/SvgSelector/styles.module.scss";
import { FaDiscord } from "react-icons/fa";
import {createElement, FC, Fragment, useEffect, useState} from "react";
import SvgSelector from "@/components/SvgSelector/SvgSelector";
import ModalComponent from "@/components/ModalComponent/ModalComponent";
import LoginModal from "@/components/LoginModal/LoginModal";
import {size} from "@material-tailwind/react/types/components/dialog";
import {menuData} from "@/components/ui/navbar/menu.data";
import NavList from "@/components/ui/navbar/NavList";
const navListMenuItems = [
    {
        header: "Osu",
        style: styles.osuGradient,
        icon: ()=>SvgSelector({ id: "osu" }),
        titles: [
            {
                value: "Опубликовать скин",
                description: "Загрузите свой скин для osu! здесь.",
                iconTitles: GlobeAmericasIcon,
            },
            {
                value: "Опубликовать карту",
                description: "Загрузите свою карту для osu! здесь.",
                iconTitles: Bars4Icon,
            },
            {
                value: "Из видео",
                description: "Скины и карты, которые попали в видео.",
                iconTitles: FaDiscord,
            },
        ]
    },
    {
        header: "Discord",
        style: styles.discordGradient,
        icon: FaDiscord,
        titles: [
            {
                value: "Обсуждения",
                description: "Участвуйте в обсуждениях и находите решения.",
                iconTitles: GlobeAmericasIcon,
            },
            {
                value: "Жабы на участников",
                description: "Поделитесь своими замечаниями о других участниках.",
                iconTitles: Bars4Icon,
            },
            {
                value: "Отзывы",
                description: "Оставляйте свои отзывы и комментарии.",
                iconTitles: Bars4Icon,
            },
        ]
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, header, style, titles }, key) => (
            <div key={key}>
                <div className={`flex items-center p-3 gap-3 rounded-lg ${style}`}>
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6 center",
                        })}
                    </div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold text-center"
                    >
                        {header}
                    </Typography>
                </div>
                {titles.map(({value, description, iconTitles}, keyTitles) => (
                    <a href="#" key={keyTitles}>
                        <MenuItem className="flex items-center gap-3 rounded-lg">
                            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                                {" "}
                                {createElement(iconTitles, {
                                    strokeWidth: 2,
                                    className: "h-6 text-gray-900 w-6",
                                })}
                            </div>
                            <div>
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="flex items-center text-sm font-bold"
                                >
                                    {value}
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    className="text-xs !font-medium text-blue-gray-500"
                                >
                                    {description}
                                </Typography>
                            </div>
                        </MenuItem>
                    </a>
                ))}
            </div>
        ),
    );

    return (
        <Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{mainAxis: 20}}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Osu и Discord
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </Fragment>
    );
}

const NavbarUi: FC = () => {
    console.log('NavbarUi')
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const [size, setSize] = useState<size>(null);

    const handleOpen = (value: size) => setSize(value);

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900 gap-2">
                <div className="flex justify-between w-full">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                    >
                        No osu! - No life

                    </Typography>
                    <div className="hidden lg:block">
                        <NavList listItems={menuData}/>
                    </div>
                </div>

                <div className="hidden gap-2 lg:flex text-nowrap">
                    <Button
                        onClick={() => handleOpen("xs")}
                        variant="text"
                        size="sm"
                        color="blue-gray"
                    >
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm">
                        Sign In
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList listItems={menuData}/>
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button onClick={() => handleOpen("xs")} variant="outlined" size="sm" color="blue-gray" fullWidth>
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
            <LoginModal size={size} handleOpen={() => handleOpen(null)}/>
        </Navbar>
    );
}

export default NavbarUi;
