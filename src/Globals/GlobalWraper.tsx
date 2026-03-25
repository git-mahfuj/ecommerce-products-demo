import { Chocolate_Classical_Sans } from "next/font/google";
import React from "react";
import { Toaster } from "sonner";
const GlobalWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5">
      <Toaster richColors position="top-right"/>
      {children}
    </div>
  );
};

export default GlobalWraper;
