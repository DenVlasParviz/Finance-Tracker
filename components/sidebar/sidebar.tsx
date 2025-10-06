"use client"
import React, {useState} from "react";
import {Logo} from "@/components/sidebar/components/logo";
import {NavButtons} from "@/components/sidebar/components/navButtons";
import {Accounts} from "@/components/sidebar/components/accounts";
import {AddAccountButton} from "@/components/sidebar/components/addAccountButton";
import {CollapseButton} from "@/components/sidebar/components/collapseButton";

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => {
        setIsCollapsed(prev => !prev); // <- МЕНЯЙ isCollapsed!
    };
  return (

      <nav
          data-collapsed={isCollapsed}
          className={`bg-[#1c1f58] h-screen p-2 flex flex-col fixed left-0 top-0 transition-all duration-300 overflow-hidden ${
              isCollapsed ? 'w-[52px]' : 'w-[260px]'
          }`}
      >
          <Logo isCollapsed={isCollapsed} />
        <NavButtons  isCollapsed={isCollapsed}/>
        <Accounts
            mainAmount="$9,000"
            subAccounts={[
                { name: "Checking", amount: "$3,000" },
                { name: "Savings", amount: "$6,000" },
            ]}
            isCollapsed={isCollapsed}
        />
        <AddAccountButton    isCollapsed={isCollapsed} />
        <CollapseButton toggleCollapse={toggleCollapse} isCollapsed={isCollapsed} />

    </nav>
  );
};
