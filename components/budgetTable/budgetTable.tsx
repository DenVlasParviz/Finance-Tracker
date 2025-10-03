"use client";
import { BudgetTableRow } from "@/components/budgetTable/budgetTableRow";
import { Category } from "@/types/category";
import { useState } from "react";

const initialCategories: Category[] = [
  {
    id: "1",
    name: "savings",
    checked: false,
    level: 1,
    budgeted: 5000,
    activity: 0,
    available: 5000,
    isParent: true,
  },
  {
    id: "2",
    name: "save",
    checked: false,
    level: 2,
    budgeted: 5000,
    activity: 0,
    available: 5000,
    parentId: "1",
  },
  {
    id: "3",
    name: "Bills",
    checked: false,
    level: 1,
    budgeted: 290,
    activity: 0,
    available: 290,
    isParent: true,
  },
  {
    id: "4",
    name: "Utilities",
    checked: false,
    level: 2,
    budgeted: 90,
    activity: 0,
    available: 90,
    parentId: "3",
    emoji: "⚡️",
  },
  {
    id: "5",
    name: "Insurance",
    checked: false,
    level: 2,
    budgeted: 200,
    activity: 0,
    available: 200,
    parentId: "3",
    emoji: "🛡️",
  },
];

export default function BudgetTable() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const [expandedIds, setExpandedIds] = useState<string[]>(
    categories.filter((c) => c.isParent).map((c) => c.id),
  );
  const toggleCheckbox = (id: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, checked: !cat.checked } : cat,
      ),
    );
  };
  const toggleCategory = (id: string) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((i) => i !== id)); // Убираем
    } else {
      setExpandedIds([...expandedIds, id]); // Добавляем
    }
  };
  return (
    <div className="bg-white">
      {/* Header */}
      <div
        className="flex items-center border-b border-gray-300 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wide sticky top-0 z-10"
        style={{ minHeight: "36px" }}
      >
        <div className="w-6 mr-2 pl-4"></div>
        <div className="w-4 mr-3"></div>
        <div className="flex-1 pr-4">Category</div>
        <div className="w-32 px-2 text-right">Assigned</div>
        <div className="w-32 px-2 text-right">Activity</div>
        <div className="w-32 px-2 text-right pr-4">Available</div>
      </div>
      {/* Rows */}
      <div>
        {categories.map((category) => {
          const isExpanded = expandedIds.includes(category.id);
          const shouldShow =
            category.isParent ||
            (category.parentId && expandedIds.includes(category.parentId));

          if (!shouldShow) return null;

          return (
            <BudgetTableRow
              key={category.id}
              category={category}
              isExpanded={isExpanded}
              onToggleExpand={
                category.isParent
                  ? () => toggleCategory(category.id)
                  : undefined
              }
              onToggleCheck={() => toggleCheckbox(category.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
