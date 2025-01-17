"use client";
import NewImageModal from "@/components/_mine/NewImageModal";
import SingleGallery from "@/components/_mine/SingleGallery";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 w-full h-full gap-3 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 overflow-y-scroll">
        <h3 className="text-3xl mb-5 font-semibold">My Gallery</h3>

        <div className="flex items-center justify-between">
          {/* Filter options */}
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="most-liked">Most liked</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex items-center w-[500px]">
            <Search className="w-5 h-5 absolute left-2.5" />
            <Input
              className=" pl-10 border-none outline-none"
              placeholder="Search by title..."
            />
          </div>

          <div>
            <Button onClick={() => setOpen(true)}>New Image</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-5">
          <SingleGallery
            title="Cool Cat"
            likes="201"
            views="40M"
            img="/login.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea"
          />

          <SingleGallery
            title="True Friendship"
            likes="23"
            views="781"
            img="/friends.webp"
            description="Friendship is a ship that never sinks"
          />
        </div>
      </div>
      {open ? <NewImageModal setOpen={setOpen} /> : null}
    </div>
  );
}
