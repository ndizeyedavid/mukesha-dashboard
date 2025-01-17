export default function Analytic({
  title,
  nbr,
}: {
  title: String;
  nbr: String;
}) {
  return (
    <div className="flex flex-col w-full gap-2 p-5 shadow-md rounded-lg dark:bg-neutral-800">
      <h3 className="text-[#6b7488]">{title}</h3>
      <span className="text-[40px] font-semibold">{nbr}</span>
    </div>
  );
}
