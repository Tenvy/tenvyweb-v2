import { MenuItemProps } from '@/types/sidebarMenu';

import MenuItem from './MenuItems';

type MenuProps = {
  list: MenuItemProps[];
};

const Menu = ({list}:MenuProps) => {
    return (
        <div className='flex flex-col space-y-1'>
            {list?.map((item: MenuItemProps, index: number) => (
                <MenuItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Menu
