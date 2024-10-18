import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/fiber/Scene"), { ssr: false });

export default function InteractiveSculpture() {
  return <Scene />;
}
