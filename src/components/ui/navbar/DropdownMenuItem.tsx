import {createElement, FC} from 'react';
import {IMenuDropdownItemInterface} from "@/components/ui/navbar/menu.interface";
import {MenuItem, Typography} from "@material-tailwind/react";

interface Props {
    item: IMenuDropdownItemInterface
}

const DropdownMenuItem: FC<Props> = ({item}) => {
    return (
        <a href={item.link}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
                <div
                    className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    {createElement(item.icon, {
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
                        {item.name}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                    >
                        {item.description}
                    </Typography>
                </div>
            </MenuItem>
        </a>
    );
};

export default DropdownMenuItem;
