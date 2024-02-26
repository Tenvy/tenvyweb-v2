import { MenuItemProps } from '@/types/sidebarMenu';

import MenuItem from './MenuItems';

type MenuProps = {
  list: MenuItemProps[];
};

const Menu = ({list, className}:any) => {
    return (
        <div className={`lg:flex flex-col space-y-1 hidden ${className}`}>
            {list?.map((item: MenuItemProps, index: number) => (
                <MenuItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Menu
