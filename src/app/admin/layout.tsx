import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | N MEDIA",
  description: "Manage N MEDIA website content.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <header className="border-b border-white/10 bg-black sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold">
              N
            </div>
            <h1 className="font-semibold text-lg tracking-wide">Command Center</h1>
          </div>
          <div className="text-sm text-white/50">Admin User</div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
