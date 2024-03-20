import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionSubHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl mt-6 font-medium capitalize mb-8 text-center text-gray-500">
      {children}
    </h2>
  );
}
