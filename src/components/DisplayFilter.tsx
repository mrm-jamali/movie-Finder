import React from "react";

function DisplayFilter() {
  return (
    <div className=" w-full flex justify-between items-center bg-blue-200 py-4 px-8 rounded-md shadow-md">
      <div>
        <p>دسته بندی های انتخاب شده</p>
        <div >
 <span>اکشن</span>
        <span>درام</span>
        <span>کمدی</span>
        </div>
       
      </div>
      <div>
        <span></span>
        <p>تعداد فیلم های پیدا شده</p>
        <p>21</p>
      </div>
    </div>
  );
}

export default DisplayFilter;
