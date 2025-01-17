"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import GalleryModal from "./GalleryModal";

export default function SingleGallery({
  title,
  likes,
  views,
  img,
  description,
}: {
  title: string;
  likes: string;
  views: string;
  img: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={img}
              width="500"
              height="500"
              alt="Gallery Image"
              className="object-cover"
            />
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <Button onClick={() => setOpen(true)}>Details</Button>
          <Button
            variant="outline"
            className="border hover:bg-[#f05656] hover:text-white text-[#f05656] border-[#f05656]"
            onClick={() =>
              confirm("Are you sure you want to delete this image: " + title)
            }
          >
            Delete
          </Button>
        </CardFooter>
      </Card>

      {open ? (
        <GalleryModal
          title={title}
          likes={likes}
          views={views}
          img={img}
          description={description}
          setOpen={setOpen}
        />
      ) : null}
    </>
  );
}
