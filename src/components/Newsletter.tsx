"use client";
import { useRef } from "react";
import { Input } from "./ui/input";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";

export default function NewsLetterSignUpForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const t = useTranslations();
  const { toast } = useToast();
  const footerLabels = t.raw("General");

  const subscribeUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) {
      return;
    }
    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    const result = await res.json();
    const boolExistingMember = result.title && result.title === "Member Exists";

    toast({
      description: boolExistingMember
        ? footerLabels.toast_fail
        : footerLabels.toast_success,
    });

    inputRef.current.value = "";
  };

  return (
    <>
      <Toaster />
      <form className="lg:inline-flex lg:w-full pt-4" onSubmit={subscribeUser}>
        <Input
          type="email"
          id="email-input"
          name="email"
          ref={inputRef}
          required
          autoCapitalize="none"
          autoCorrect="none"
          placeholder={footerLabels.emailAddress}
          className="h-[54px] rounded-none border-[#C09B63] !placeholder-[#C09B63]"
        />
        <Button
          variant="primary"
          label={footerLabels.send}
          className="w-full lg:w-fit"
        />
      </form>
    </>
  );
}
