"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MaintenancePage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
      <Image
        src="/asset/logo-updated.png"
        alt="N MEDIA Logo"
        width={300}
        height={100}
        className="h-20 md:h-24 w-auto object-contain mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        We'll be back soon!
      </h1>
      <p className="text-white/60 max-w-lg mb-12 text-lg">
        Sorry for the inconvenience but we're performing some maintenance at the moment. We'll be back online shortly!
      </p>
      
      <div 
        className="mt-20 opacity-0 hover:opacity-10 transition-opacity cursor-default w-20 h-20"
        onDoubleClick={() => router.push('/login')}
      >
        <span className="text-xs text-white">Admin Login</span>
      </div>
    </div>
  );
}
