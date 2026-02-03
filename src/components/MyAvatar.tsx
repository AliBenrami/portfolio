import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portfolioDetails } from "@/data/Mydata";

export default function MyAvatar() {
  return (
    <div className="relative group">
      <div 
        className="absolute -inset-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(0,113,227,0.1) 0%, rgba(0,113,227,0.05) 50%, transparent 100%)",
        }}
      />
      <Avatar className="relative h-40 w-40 md:h-52 md:w-52 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
        <AvatarFallback className="text-5xl bg-[#0071E3] text-white font-medium">
          {portfolioDetails.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
