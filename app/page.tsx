import Image from "next/image";
import Card from "@/widgets/shared/card";

export default function Home() {
  return (
    <>
      <h1>Next.js + MUI v5</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Card />
    </>
  );
}
