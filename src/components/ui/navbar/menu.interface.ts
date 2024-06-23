import {IconType} from "react-icons";
import {ReactSVGElement} from "react";

export interface IMenuDropdownItemInterface {
    name: string
    description: string
    icon: any
    link: string
}

export interface IMenuDropdownHeaderInterface {
    name: string
    style: string
    icon: IconType
    items: IMenuDropdownItemInterface[]
}

export interface IMenuItemInterface {
    name: string
    link?: string
    dropdown?: IMenuDropdownHeaderInterface[];
}



