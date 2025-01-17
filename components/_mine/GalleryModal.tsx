import { Eye, Heart, X } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import React from "react";

export default function GalleryModal({
  title,
  likes,
  views,
  img,
  description,
  setOpen,
}: {
  title: any;
  likes: any;
  views: any;
  img: any;
  description: any;
  setOpen: any;
}) {
  const handleCloseModal = (e: any) => {
    const closeTarget = e.target.id;
    if (closeTarget === "modal") {
      setOpen(false);
    }
  };

  return (
    <div
      id="modal"
      onClick={(e) => handleCloseModal(e)}
      className="absolute top-0 left-0 w-full h-full z-[9999] flex items-center justify-center bg-black/70 p-4"
    >
      <X
        className="absolute top-5 right-10 text-white w-[50px] h-[50px] cursor-pointer"
        onClick={() => setOpen(false)}
      />

      <Card className="w-[500px]">
        <CardContent className="mt-4">
          <Image
            src={img}
            alt="gallery image"
            width="500"
            height="500"
            className="object-cover rounded"
          />
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <Heart />
              <span className="font-bold">{likes}</span>
            </div>

            <div className="flex items-center gap-2">
              <Eye />
              <span className="font-bold">{views}</span>
            </div>
          </div>
          <hr className="w-full" />
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <p>{description}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
