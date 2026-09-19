import { LuHeart } from "react-icons/lu";
import  {Link   } from "react-router-dom";
import { Clapperboard } from "lucide-react";

function Nav() {
  return (
    <div className="mx-12  flex justify-between items-center border-b-2 border-gray-300 pb-1">
      <div className="flex">
        <span>
    <Clapperboard size={50}   className="text-blue-800"/>
  </span>
        <p  className="mr-3 text-lg font-bold text-gray-800">جستجوی فیلم</p>
        
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
