"use client"
import UnstyledTabsIntroduction from "./src/components/UnstyledTabsIntroduction";

export default function Home() 
{
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">

    <div class="container mx-auto px-12 py-28">
      <UnstyledTabsIntroduction/>
    </div>
    </main>
  );
}
