"use client";

import FactionSettings from "@/components/settings/faction-settings";
import FinishedObjectives from "@/components/settings/finished-objectives";

export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid gap-6">
          <FactionSettings />
          <FinishedObjectives />
        </div>
      </div>
    </main>
  )
}