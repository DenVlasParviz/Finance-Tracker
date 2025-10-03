import { MonthSelector } from "@/components/header/MonthSelector";
import { BudgetStatus } from "@/components/header/BudgetStatus";

export const Header = () => {
  return (
    <div>
      <div className="flex gap-3 px-5 py-5">
        <MonthSelector></MonthSelector>
        <BudgetStatus></BudgetStatus>
      </div>
    </div>
  );
};
export default Header;
