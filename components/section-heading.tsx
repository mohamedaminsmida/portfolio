import React from "react";
import { useTranslation } from "@/lib/hooks/useTranslation";

type SectionHeadingProps = {
  children?: React.ReactNode;
  translationKey?: string;
};

export default function SectionHeading({ children, translationKey }: SectionHeadingProps) {
  const { t } = useTranslation();

  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {translationKey ? t(translationKey) : children}
    </h2>
  );
}
