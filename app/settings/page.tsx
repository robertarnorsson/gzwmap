"use client"

import FactionSettings from "@/components/settings/faction-settings";
import FinishedObjectives from "@/components/settings/finished-objectives";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ChangeEvent, useState } from "react";


export default function Page() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="grid gap-6 mb-32">
          <FactionSettings />
          <FinishedObjectives />
          <DeleteData />
        </div>
      </div>
    </main>
  )
}

const DeleteData = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleDelete = () => {
    localStorage.removeItem("faction");
    window.location.reload();
  };

  return (
    <Dialog onOpenChange={(open: boolean) => { if (!open) handleClearInput(); }}>
      <Card>
        <CardHeader>
          <CardTitle>Delete Data</CardTitle>
          <CardDescription>This action will delete all your user data. This action is irreversible.</CardDescription>
        </CardHeader>
        <CardContent>
          <DialogTrigger asChild>
            <Button variant='destructive'>
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent className="box-border">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to permanently
                delete all of your data?
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 group/delete">
              <Label className="text-muted-foreground group-focus-within/delete:text-primary">Type &#39;Delete&#39; to confirm</Label>
              <Input
                type="text"
                placeholder="Delete"
                value={inputValue}
                onChange={handleChange}
                className="p-2 w-full"
              />
            </div>
            <DialogFooter className="mt-4 flex-col">
              <DialogClose asChild>
                <Button variant='destructive' onClick={handleDelete} disabled={inputValue !== 'Delete'}>
                  Delete
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant='secondary'>Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </CardContent>
      </Card>
    </Dialog>
  );
};