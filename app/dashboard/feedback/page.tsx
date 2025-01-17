import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import SingleFeedback from "@/components/_mine/SingleFeedback";

export default function page() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 w-full h-full gap-3 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 overflow-y-scroll">
        <h3 className="text-3xl mb-5 font-semibold">Feedbacks</h3>

        <div className="flex items-center justify-between">
          {/* Filter options */}
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="old">Old</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative flex items-center w-[500px]">
            <Search className="w-5 h-5 absolute left-2.5" />
            <Input
              className=" pl-10 border-none outline-none"
              placeholder="Search..."
            />
          </div>

          <div className="invisible">NOT MEANT TO BE SHWON</div>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <SingleFeedback
            uname="David Ndizeye"
            email="davidndizeye101@gmail.com"
            message="I love you content very much"
          />

          <SingleFeedback
            uname="David Ndizeye"
            email="davidndizeye101@gmail.com"
            message="I love you content very much"
          />

          <SingleFeedback
            uname="David Ndizeye"
            email="davidndizeye101@gmail.com"
            message="I love you content very much"
          />
        </div>
      </div>
    </div>
  );
}
