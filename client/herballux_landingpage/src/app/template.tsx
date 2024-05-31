import { Suspense } from "react";
import "./globals.css";

import Bubbles from "@app/components/Bubbles";

import "@app/i18n";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Bubbles />
      <div id="general-container">{children}</div>
    </Suspense>
  );
}
