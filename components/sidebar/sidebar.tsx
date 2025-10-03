import React from "react";

export const Sidebar = () => {
  return (
    <aside className="w-14 bg-[#1c1f58] h-screen p-2 flex flex-col fixed left-0 top-0">
      <ul className="flex flex-col gap-2">
        <li className="p-2 rounded bg-gray-300 h-10"></li>
        <li className="p-2 rounded bg-gray-300 h-10"></li>
        <li className="p-2 rounded bg-gray-300 h-10"></li>
        <li className="p-2 rounded bg-gray-300 h-10"></li>
      </ul>

      <div className="mt-auto flex flex-col gap-2">
        <div className="p-2 rounded bg-gray-200 h-10"></div>
        <div className="p-2 rounded bg-gray-200 h-10"></div>
      </div>
    </aside>
  );
};
