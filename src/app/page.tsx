import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getStoreData } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ReelShowcase } from "@/components/ReelShowcase";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { PerformanceMetrics } from "@/components/PerformanceMetrics";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

export default async function Home() {
  const data = getStoreData();
  if (data.maintenanceMode) {
    const cookieStore = await cookies();
    if (cookieStore.get('auth_token')?.value !== 'admin-secret-token') {
      redirect('/maintenance');
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <ReelShowcase />
      <Pricing />
      <Testimonials />
      <PerformanceMetrics />
      <ContactForm />
      <Footer />
      <FloatingActions />
      <Toaster theme="dark" />
    </main>
  );
}
