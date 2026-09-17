import { LuHeart } from "react-icons/lu";
import  {Link   } from "react-router-dom";

function Nav() {
  return (
    <div className="mx-12  flex justify-between items-center border-b-2 border-gray-300 pb-4">
      <div className="flex">
        <span>++++</span>
        <p>جستجوی فیلم</p>
        
      </div>
      <div className="flex items-center gap-6">
        <Link to="/">
          خانه
        </Link>
        <Link to="/favorites">
          علاقمندی ها
        </Link>
      </div>
      <div>
        <LuHeart />
      </div>

    </div>
  );
}

export default Nav;
