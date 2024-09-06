import { HydrateClient } from "~/trpc/server";
import CenteredBlockWithImage from "./_components/CenteredBlockWithImage";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="bg-slate-200 text-white">
        <div className="min-w-screen flex h-screen min-h-screen w-screen flex-col items-center justify-center">
          <CenteredBlockWithImage />
        </div>
      </main>
    </HydrateClient>
  );
}
