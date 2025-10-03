import Image from "next/image";
import Header from "@/components/header/Header";
import { FilterButtons } from "@/components/filterBar/FilterButtons";
import BudgetTable from "@/components/budgetTable/budgetTable";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Summary } from "@/components/summaryPanel/summary";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-14 flex-1 flex flex-col">
        <Header />
        <FilterButtons />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto">
            <BudgetTable />
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
}
