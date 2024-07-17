"use client";

import SettingsCard from "./settings-card";

const FinishedObjectives = () => {
  return (
    <SettingsCard
      title="Finished Objectives"
      description="View and manage all of your completed objectives."
      onSave={() => {}}
      onCancel={() => {}}
      hasChanges={false}
    >
      <div className="flex flex-row gap-16 justify-center items-center py-8">
        
      </div>
    </SettingsCard>
  );
};

export default FinishedObjectives;
