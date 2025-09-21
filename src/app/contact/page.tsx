"use client";
import Button from "@/components/Button";
import CopyContent from "@/components/copyContent";

export default function ContactPage() {
  const ContactDetails = {
    name: "Contact",
    description: "",
    image: "https://avatars.githubusercontent.com/u/111257593?v=4",
    phone: "+1(972)-266-3247",
    email: "abenrami06@gmail.com",
    github: "https://github.com/AliBenrami",
    linkedin: "https://www.linkedin.com/in/ali-benrami-4b1b5b252/",
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6 min-h-[500px]">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {ContactDetails.name}
        </h1>
        <p className="mt-2 text-white/80">{ContactDetails.description}</p>

        <div className="mt-4 overflow-hidden rounded-[200px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ContactDetails.image}
            alt={ContactDetails.name}
            className="w-full h-56 md:h-64 object-cover"
          />
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div className="flex flex-col  justify-center items-center">
            <Button href={ContactDetails.github} onClick={() => {}}>
              Github
            </Button>
            <Button href={ContactDetails.linkedin} onClick={() => {}}>
              Linkedin
            </Button>
          </div>
          <div className="flex flex-col  justify-center items-center">
            <CopyContent content={ContactDetails.email} />
            <CopyContent content={ContactDetails.phone} />
          </div>
        </div>
      </div>
    </div>
  );
}
