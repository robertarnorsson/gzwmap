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
import { ReactNode, ReactElement } from "react";

interface SettingsCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  onClick?: () => void;
  onCancel?: () => void;
  hasChanges?: boolean;
  hasContent?: boolean;
  hasCancelButton?: boolean;
  hasSaveButton?: boolean;
  customSaveButton?: ReactElement;
  customCancelButton?: ReactElement;
}

const SettingsCard = ({
  title,
  description,
  children,
  onClick,
  onCancel,
  hasChanges = false,
  hasContent = true,
  hasCancelButton = true,
  hasSaveButton = true,
  customSaveButton,
  customCancelButton,
}: SettingsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {hasContent && <CardContent>{children}</CardContent>}
      {(hasSaveButton || hasCancelButton) && (
        <CardFooter className="flex flex-row gap-2 border-t px-6 py-4">
          {hasSaveButton && (
            customSaveButton ? (
              customSaveButton
            ) : (
              <Button onClick={onClick} disabled={!hasChanges}>
                Save
              </Button>
            )
          )}
          {hasCancelButton && (
            customCancelButton ? (
              customCancelButton
            ) : (
              <Button
                onClick={onCancel}
                disabled={!hasChanges}
                variant="outline"
              >
                Cancel
              </Button>
            )
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default SettingsCard;
