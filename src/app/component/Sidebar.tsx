"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define NavItem interface
interface NavItem {
  name: string;
  path: string;
  icon: string;
  type: "file" | "folder";
  extension?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
    icon: "📄",
    type: "file",
    extension: "txt",
  },
  {
    name: "About",
    path: "/about",
    icon: "📁",
    type: "folder",
    children: [
      {
        name: "Bio",
        path: "/about",
        icon: "📄",
        type: "file",
        extension: "txt",
      },
      {
        name: "Skills",
        path: "/about#skills",
        icon: "📄",
        type: "file",
        extension: "json",
      },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    icon: "📁",
    type: "folder",
    children: [
      {
        name: "All Projects",
        path: "/projects",
        icon: "📂",
        type: "file",
        extension: "html",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "📄",
    type: "file",
    extension: "txt",
  },
  {
    name: "Resume",
    path: "/resume",
    icon: "📄",
    type: "file",
    extension: "pdf",
  },
];

// FileItem without unused 'type'
const FileItem: React.FC<{
  name: string;
  path: string;
  icon: string;
  extension?: string;
  isActive: boolean;
}> = ({ name, path, icon, extension, isActive }) => {
  return (
    <Link
      href={path}
      className={`flex items-center px-3 py-2 text-sm rounded-md ${
        isActive
          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
      }`}
    >
      <span className="mr-2">{icon}</span>
      <span>{name}</span>
      {extension && (
        <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">
          .{extension}
        </span>
      )}
    </Link>
  );
};

// FolderItem with 'items' prop instead of children
const FolderItem: React.FC<{
  name: string;
  items: NavItem[];
  isActive: boolean;
}> = ({ name, items, isActive }) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const pathname = usePathname();

  return (
    <div>
      <div
        className={`flex items-center justify-between px-3 py-2 text-sm rounded-md cursor-pointer ${
          isActive
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="mr-2">{isOpen ? "📂" : "📁"}</span>
          <span>{name}</span>
        </div>
        <span>{isOpen ? "▼" : "▶"}</span>
      </div>

      {isOpen && (
        <div className="pl-6 mt-1 border-l border-zinc-200 dark:border-zinc-700">
          {items.map((child, idx) => {
            const childActive = pathname === child.path;
            return child.type === "folder" ? (
              <FolderItem
                key={idx}
                name={child.name}
                items={child.children || []}
                isActive={childActive}
              />
            ) : (
              <FileItem
                key={idx}
                name={child.name}
                path={child.path}
                icon={child.icon}
                extension={child.extension}
                isActive={childActive}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-60 bg-zinc-100 dark:bg-zinc-900 p-4 overflow-y-auto border-r border-zinc-200 dark:border-zinc-700 h-[calc(100vh-4.5rem)]">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
          EXPLORER
        </h2>
      </div>

      <div className="space-y-1">
        {navItems.map((item, idx) => {
          const active = pathname === item.path;
          return item.type === "folder" ? (
            <FolderItem
              key={idx}
              name={item.name}
              items={item.children || []}
              isActive={active}
            />
          ) : (
            <FileItem
              key={idx}
              name={item.name}
              path={item.path}
              icon={item.icon}
              extension={item.extension}
              isActive={active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
