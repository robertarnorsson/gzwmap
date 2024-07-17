"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="mx-auto w-full max-w-4xl gap-2 pt-10">
        <div className="flex flex-row justify-between items-end pb-2">
          <h1 className="text-4xl font-semibold">Settings</h1>
          <Link href='/' className="text-muted-foreground">
            Back to map
          </Link>
        </div>
        <Separator />
      </div>
      {children}
    </div>
  );
}