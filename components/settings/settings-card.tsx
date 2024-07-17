"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface SettingsCardProps {
  title: string;
  description: string;
  children: ReactNode;
  onSave: () => void;
  onCancel: () => void;
  hasChanges: boolean;
}

const SettingsCard = ({ title, description, children, onSave, onCancel, hasChanges }: SettingsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-row gap-2 border-t px-6 py-4">
        <Button onClick={onSave} disabled={!hasChanges}>Save</Button>
        <Button onClick={onCancel} disabled={!hasChanges} variant="outline" className="bg-transparent">Cancel</Button>
      </CardFooter>
    </Card>
  );
};

export default SettingsCard;
