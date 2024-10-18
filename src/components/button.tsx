import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  buttonUrl?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  onClick,
  className,
  buttonUrl,
}) => {
  const buttonInstance = (
    <button
      type="submit"
      onClick={onClick}
      className={`${cn(
        "px-6 py-3 font-semibold transition-all inline-flex items-center justify-center w-fit inline-block !mb-10 whitespace-nowrap",
        className
      )}
        ${
          variant === "primary"
            ? "bg-[#D0A878] text-white hover:bg-[#b89263]"
            : "bg-transparent text-[#D0A878] border border-[#D0A878] hover:bg-[#D0A878] hover:text-black"
        }
      `}
    >
      {label}
    </button>
  );
  return buttonUrl ? (
    <Link href={buttonUrl}>{buttonInstance}</Link>
  ) : (
    buttonInstance
  );
};

export default Button;
