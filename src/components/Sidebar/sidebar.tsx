import Profile from './Profile'
import Breakline from '../elements/Breakline'
import Menu from './Menu'

import { MENU_ITEMS } from './MenuProps'

const Sidebar = async () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  return (
    <header className='lg:w-1/5'>
      <div>
        <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
          <Profile/>
          <Breakline/>
          <Menu list={filteredMenu}/>
          <Breakline/>
        </div>
      </div>
    </header>
  )
}

export default Sidebar
