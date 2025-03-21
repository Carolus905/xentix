import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center flex-col gap-[5vh] border-4 border-green-700">
      <Image
        src="/logo-xentix.png"
        alt="Xentix Logo"
        width={200}
        height={100}
        priority
      />
      <label className="text-gray-500 italic">
        something exciting is coming..
      </label>
    </div>
  );
}
