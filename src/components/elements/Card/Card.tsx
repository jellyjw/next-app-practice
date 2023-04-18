import Image from "next/image";

export default function Card() {
  return (
    <article className="bg-white-300 w-80 h-[300px] rounded-xl shadow shadow-gray-500/50 cursor-pointer flex flex-col justify-center">
      <div className="flex justify-center">
        <Image
          src={"/images/dinosaurs.jpeg"}
          alt="dinosaurs"
          width={300}
          height={50}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col items-start p-3">
        <span>텍스트</span>
        <span>주종 정보</span>
        <span>도수</span>
      </div>
    </article>
  );
}
