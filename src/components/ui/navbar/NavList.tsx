import {FC} from "react";
import {IMenuItemInterface} from "@/components/ui/navbar/menu.interface";
import {menuData} from "@/components/ui/navbar/menu.data";
import NavListItem from "@/components/ui/navbar/NavListItem";
import {List} from "@material-tailwind/react";

interface Props {
    listItems: IMenuItemInterface[]
}

const NavList: FC<Props> = ({listItems}) => {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            {menuData.map(
                item => (<NavListItem key={item.link} item={item}  />)
            )}
        </List>
    );
};

export default NavList;
