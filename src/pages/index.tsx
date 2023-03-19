import Sidebar from "@/components/sidebar";
import Content from "@/components/content";
export default function HomePage() {
  return (
    <main className="flex w-full max-w-7xl mr-auto ml-auto">
      <Sidebar />
      <Content />
    </main>
  );
}
