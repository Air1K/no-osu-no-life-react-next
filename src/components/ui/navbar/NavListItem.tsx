import {FC} from 'react';
import {IMenuItemInterface} from "@/components/ui/navbar/menu.interface";
import {ListItem, Typography} from "@material-tailwind/react";
import DropdownFragment from "@/components/ui/navbar/DropdownFragment";
interface Props {
    item: IMenuItemInterface
}
const NavListItem: FC<Props> = ({item}) => {
    if(item.dropdown !== undefined){
        return (
            <DropdownFragment item={item}/>
        )
    }
    return (
        <Typography
            as="a"
            href={item.link}
            variant="small"
            color="blue-gray"
            className="font-medium"
        >
            <ListItem className="flex items-center gap-2 py-2 pr-4">{item.name}</ListItem>
        </Typography>
    );
};

export default NavListItem;
