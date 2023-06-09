import React from "react";

function WhiteListedList(props) {
  let length = props.hospitalList.length;
  console.log(length);
  return (
    <>
      <div className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl mt-8">
        List of All Hospitals
        </div>
        <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
          Address of all the listed Hospitals
        </p>
      
      <div className="w-2/4 m-auto shadow-md rounded px-8 p-6">
        <ul role="list" className="divide-y divide-gray-100">
          {props.hospitalList.map((hospital ,i) => (
            <li
              key={hospital}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hospital-2073651-1755139.png?f=avif&w=256"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    Hospital {i+1}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {hospital}
                  </p>
                </div>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
      {props.hospitalList.map((e,i) =>{

      })}
    </>
  );
}

export default WhiteListedList;
