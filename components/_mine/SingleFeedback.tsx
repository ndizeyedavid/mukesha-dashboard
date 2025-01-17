import Image from "next/image";

export default function SingleFeedback({
  message,
  uname,
  email,
}: {
  message: String;
  uname: String;
  email: String;
}) {
  return (
    <div className="p-2 shadow-md rounded-md border flex items-center gap-4">
      {/* profile */}
      <div className="w-[150px]">
        <Image
          src="/user.png"
          className="bg-white w-[140px] h-[140px] rounded-full"
          alt="image"
          width="500"
          height="500"
        />
      </div>

      {/* details */}
      <div className="space-y-2">
        <p>{message}</p>

        {/* credentials */}
        <div className="">
          <h3 className="font-extrabold">{uname}</h3>
          <h3 className="font-semibold">{email}</h3>
        </div>
      </div>
    </div>
  );
}
