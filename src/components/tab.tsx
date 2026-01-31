"use client";
import { useRouter } from "next/navigation";

const Tab = ({ tabs }: { tabs: string[] }) => {
  const router = useRouter();
  const handleTabClick = (tab: string) => {
    if (tab === "Home") {
      router.push("/");
      return;
    }

    // Route segments in Next are case-sensitive in production environments.
    // Normalize tab labels ("Contact") to the actual route path ("/contact").
    router.push(`/${tab.toLowerCase()}`);
  };
  return (
    <div className="absolute z-20 top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row gap-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-6">
      {tabs.map((tab, index) => (
        <div
          key={tab}
          className="flex flex-row gap-4 items-center justify-center"
        >
          <button
            onClick={() => handleTabClick(tab)}
            className="text-white hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {tab}
          </button>
          {index !== tabs.length - 1 && (
            <div className="w-1 h-1 bg-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Tab;
