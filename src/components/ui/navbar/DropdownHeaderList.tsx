import React, {createElement, FC} from 'react';
import {IMenuDropdownHeaderInterface} from "@/components/ui/navbar/menu.interface";
import {MenuItem, MenuList, Typography} from "@material-tailwind/react";
import DropdownHeaderItem from "@/components/ui/navbar/DropdownHeaderItem";
interface Props {
    headers: IMenuDropdownHeaderInterface[]
}
const DropdownHeaderList: FC<Props> = ({headers}) => {
    return (
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
                {headers.map(
                    header => (
                        <DropdownHeaderItem key={header.name} header={header}/>
                    )
                )}
            </ul>
        </MenuList>
    );
};

export default DropdownHeaderList;
