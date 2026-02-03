"use client";
import { useRouter, usePathname } from "next/navigation";

const Tab = ({ tabs }: { tabs: string[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleTabClick = (tab: string) => {
    if (tab === "Home") {
      router.push("/");
      return;
    }

    // Route segments in Next are case-sensitive in production environments.
    // Normalize tab labels ("Contact") to the actual route path ("/contact").
    router.push(`/${tab.toLowerCase()}`);
  };

  const getIsActive = (tab: string) => {
    if (tab === "Home") {
      return pathname === "/";
    }
    return pathname === `/${tab.toLowerCase()}`;
  };

  return (
    <nav 
      className="absolute z-20 top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="inline-flex items-center p-1 rounded-full bg-white/90 backdrop-blur-xl border border-[#E5E5E7]/50 shadow-lg">
        {tabs.map((tab, index) => {
          const isActive = getIsActive(tab);
          return (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`
                relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-out
                ${isActive 
                  ? 'bg-[#0071E3] text-white shadow-md' 
                  : 'text-[#48484A] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
                }
                ${index === 0 ? 'rounded-l-full' : ''}
                ${index === tabs.length - 1 ? 'rounded-r-full' : ''}
              `}
            >
              <span className="relative z-10">{tab}</span>
              {isActive && (
                <div className="absolute inset-0 bg-[#0071E3] rounded-full animate-subtle-scale" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Tab;
