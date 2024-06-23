import { IMenuItemInterface } from "@/components/ui/navbar/menu.interface";
import styles from "@/components/SvgSelector/styles.module.scss";
import SvgSelector from "@/components/SvgSelector/SvgSelector";
import {Bars4Icon, GlobeAmericasIcon} from "@heroicons/react/24/solid";
import {FaDiscord} from "react-icons/fa";

export const menuData: IMenuItemInterface[] = [
    {
        name: 'Главная',
        link: '/',
    },
    {
        name: 'Osu и Discord',
        dropdown: [
            {
                name: "Osu",
                style: styles.osuGradient,
                icon: () => SvgSelector({ id: "osu" }),
                items: [
                    {
                        name: "Опубликовать скин",
                        description: "Загрузите свой скин для osu! здесь.",
                        link: "/skins",
                        icon: GlobeAmericasIcon,
                    },
                    {
                        name: "Опубликовать карту",
                        description: "Загрузите свою карту для osu! здесь.",
                        link: "/maps",
                        icon: Bars4Icon,
                    },
                    {
                        name: "Из видео",
                        description: "Скины и карты, которые попали в видео.",
                        link: "/videos",
                        icon: FaDiscord,
                    },
                ]
            },
            {
                name: "Discord",
                style: styles.discordGradient,
                icon: FaDiscord,
                items: [
                    {
                        name: "Обсуждения",
                        description: "Участвуйте в обсуждениях и находите решения.",
                        link: "/discussions",
                        icon: GlobeAmericasIcon,
                    },
                    {
                        name: "Жабы на участников",
                        description: "Поделитесь своими замечаниями о других участниках.",
                        link: "/reports",
                        icon: Bars4Icon,
                    },
                    {
                        name: "Отзывы",
                        description: "Оставляйте свои отзывы и комментарии.",
                        link: "/reviews",
                        icon: Bars4Icon,
                    },
                ]
            },
        ]
    },
    {
        name: 'Полезные ссылки',
        link: '/links',
    },
    {
        name: 'Пожертвования',
        link: '/donate',
    },
    {
        name: 'О нас',
        link: '/about',
    },
];


