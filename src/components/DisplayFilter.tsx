import { X } from "lucide-react";
import { Clapperboard } from "lucide-react";

function DisplayFilter() {
  return (
    <div className="w-[calc(100%-100px)] mx-[50px] mt-20 flex justify-between items-center bg-blue-200 py-4 px-8 rounded-xl shadow-md">
      <div>
        <p className=" text-blue-700">دسته بندی های انتخاب شده</p>
        <div className="flex gap-2 mt-5">
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
            اکشن
            <X size={12} />
          </span>

          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
            درام
            <X size={12} />
          </span>

          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
            <X size={12} /> کمدی
          </span>
        </div>
      </div>
     <div className="flex items-center gap-3">
 

  <div>
    <p className="text-left text-blue-700">تعداد فیلم های پیدا شده:</p>
    <p className="text-left text-blue-700">21</p>
  </div>
   <span>
    <Clapperboard size={50}  className="text-blue-700"  />
  </span>
</div>
    </div>
  );
}

export default DisplayFilter;
