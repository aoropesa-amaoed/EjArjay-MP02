import React, {useState} from 'react';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im';
import { useNavigate, Link} from 'react-router-dom';


const SideBar = ()=> {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div>
      <div className="block xl:hidden m-2 ml-4 mt-3 text-xl" 
      onClick={() => setShowSideBar((prev) => !prev)}>
    {showSideBar ? <ImCancelCircle/>:<AiOutlineMenu />}
      </div>

      </div>
  )
}

export default SideBar