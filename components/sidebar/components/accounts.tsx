interface SubAccount {
    name: string;
    amount: string;
}

interface AccountProps {
    isCollapsed: boolean;
    mainAmount: string; // для CASH
    subAccounts?: SubAccount[];
}

export const Accounts = ({ mainAmount, subAccounts,isCollapsed }: AccountProps) => {
    return (
        <div className="flex flex-col w-full bg-[#1c1f58]">
            {!isCollapsed && (
                <div className="flex justify-between items-center p-2 text-gray-200 font-medium">
                    <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 8 8" fill="currentColor">
                            <use href="#chart" />
                        </svg>

                        <span className="text-sm font-semibold">CASH</span>
                    </div>
                    <span className="text-sm font-semibold">{mainAmount}</span>
                </div>
            )}


            { !isCollapsed &&
                subAccounts?.map((acc, i) => (
                <a
                    key={i}
                    href="#"
                    className="flex justify-between items-center p-2 text-gray-300 text-sm rounded hover:bg-gray-700 transition-colors duration-150"
                >
                    <span>{acc.name}</span>
                    <span className="font-semibold">{acc.amount}</span>
                </a>
            ))}
        </div>
    );
};
