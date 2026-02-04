"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

interface ButtonItem {
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
}

interface AnimatedButtonGroupProps {
  buttons: ButtonItem[];
  initialSelected?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function AnimatedButtonGroup({
  buttons,
  initialSelected,
  onChange,
  className = "",
}: AnimatedButtonGroupProps) {
  const uniqueId = useId();
  // Default to the first button if no initial selection is provided
  const [selected, setSelected] = useState<string>(
    initialSelected || (buttons.length > 0 ? buttons[0].value : "")
  );
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={`inline-flex flex-wrap gap-1 p-1.5 rounded-full bg-[#eff0f2] border border-black/5 ${className}`}>
      {buttons.map((button) => {
        // The background should be on the hovered item if one is hovered,
        // otherwise it stays on the selected item.
        const isTarget = hovered === button.value || (hovered === null && selected === button.value);
        
        const handleSelect = () => {
          setSelected(button.value);
          onChange?.(button.value);
        };

        const handleClick = () => {
          handleSelect();
          button.onClick?.();
        };

        const content = (
          <>
            {/* Animated Background */}
            {isTarget && (
              <motion.div
                layoutId={`active-pill-${uniqueId}`}
                className="absolute inset-0 bg-apple-accent shadow-apple"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                style={{ borderRadius: 9999 }} // Matches rounded-full
              />
            )}

            {/* Button Text */}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isTarget ? "text-white" : "text-apple-accent"
              }`}
            >
              {button.label}
            </span>
          </>
        );

        const commonProps = {
          onMouseEnter: () => {
            setHovered(button.value);
            handleSelect();
          },
          onMouseLeave: () => {
            setHovered(null);
          },
          className: "relative px-5 py-2 rounded-full text-base font-medium outline-none focus-visible:ring-2 focus-visible:ring-apple-accent/50 cursor-pointer border-none bg-transparent block select-none",
          whileTap: { scale: 0.95 },
        };

        if (button.href) {
          return (
            <MotionLink
              key={button.value}
              href={button.href}
              onClick={handleClick}
              {...commonProps}
            >
              {content}
            </MotionLink>
          );
        }

        return (
          <motion.button
            key={button.value}
            type="button"
            onClick={handleClick}
            {...commonProps}
          >
            {content}
          </motion.button>
        );
      })}
    </div>
  );
}
