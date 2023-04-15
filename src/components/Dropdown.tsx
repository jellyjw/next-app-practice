import Link from "next/link";

export default function Dropdown() {
  const modalItem = [
    { name: "item1", path: "" },
    { name: "item2", path: "" },
    { name: "item3", path: "" },
    { name: "item4", path: "" },
  ];
  return (
    <section className="bg-gray-200 cursor-pointer w-32 min-w-max">
      {modalItem?.map((item, index) => (
        <div key={index}>
          <Link href={item.path}>
            <div className="flex items-center justify-center p-3 hover:bg-gray-300">
              {item.name}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
