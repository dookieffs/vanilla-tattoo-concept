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
            ? "bg-[#C09B63] text-white hover:bg-[#242424]"
            : "bg-transparent text-[#C09B63] border border-[#C09B63] hover:bg-[#242424] hover:text-white"
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
