import React, {FC, Fragment, useState} from 'react';
import {IMenuDropdownHeaderInterface, IMenuItemInterface} from "@/components/ui/navbar/menu.interface";
import {Collapse, ListItem, Menu, MenuHandler, MenuList, Typography} from "@material-tailwind/react";
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import DropdownHeaderList from "@/components/ui/navbar/DropdownHeaderList";
import DropdownMenuItem from "@/components/ui/navbar/DropdownMenuItem";
import DropdownHeaderItem from "@/components/ui/navbar/DropdownHeaderItem";

interface Props {
    item: IMenuItemInterface
}
const DropdownFragment: FC<Props> = ({item}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                            {item.name}
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
                <DropdownHeaderList headers={item.dropdown}/>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>
                    {item.dropdown.map(
                        header => (
                            <DropdownHeaderItem key={header.name} header={header}/>
                        )
                    )}
                </Collapse>
            </div>
        </Fragment>
    );
};

export default DropdownFragment;
