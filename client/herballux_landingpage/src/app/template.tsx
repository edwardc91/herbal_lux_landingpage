import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Bubbles from "@app/components/Bubbles";


import '@app/i18n';

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Bubbles />
      {children}
    </Suspense>
  );
}
