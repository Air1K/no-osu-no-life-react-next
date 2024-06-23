import React, {createElement, FC} from 'react';
import {IMenuDropdownHeaderInterface} from "@/components/ui/navbar/menu.interface";
import {MenuItem, Typography} from "@material-tailwind/react";
import DropdownMenuItem from "@/components/ui/navbar/DropdownMenuItem";
interface Props {
    header: IMenuDropdownHeaderInterface
}
const DropdownHeaderItem: FC<Props> = ({header}) => {
    return (
        <div key={header.name}>
            <div className={`flex items-center p-3 gap-3 rounded-lg ${header.style}`}>
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    {createElement(header.icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6 center",
                    })}
                </div>
                <Typography
                    variant="h6"
                    color="blue-gray"
                    className="flex items-center text-sm font-bold text-center"
                >
                    {header.name}
                </Typography>
            </div>
            {header.items.map((item, keyTitles) => (
                <DropdownMenuItem key={item.link} item={item}/>
            ))}
        </div>

    );
};

export default DropdownHeaderItem;
