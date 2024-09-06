import { HydrateClient } from "~/trpc/server";
import CenteredBlockWithImage from "./_components/CenteredBlockWithImage";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="bg-slate-200">
        <div className="min-w-screen flex h-screen min-h-screen w-screen flex-col items-center justify-center">
          <CenteredBlockWithImage />
          <p className="pt-3 text-xs text-gray-400">
            The Linwood Car Thing... to not be discontinued!
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
