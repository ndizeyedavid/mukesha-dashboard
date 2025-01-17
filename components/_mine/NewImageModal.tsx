import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewImageModal({ setOpen }: { setOpen: any }) {
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

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Upload A New Image</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Project Title</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Name of your project"
                ></Textarea>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Upload Image</Label>
                <Input type="file" className="p-2" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button>Post</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
