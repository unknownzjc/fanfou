import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
export default function HomePage() {
  return (
    <main className="flex w-full mxa lg:max-w-80rem">
      <Sidebar />
      <Content />
    </main>
  );
}
