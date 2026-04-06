import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1A0A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl">
                 <Image src="/logo.png" alt="Wayamba Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-playfair)] font-bold text-xl leading-tight text-white">Wayamba</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.2em] uppercase text-emerald-400">Corporation (PVT) LTD</span>
              </div>
            </div>
            <p className="font-[family-name:var(--font-dm-sans)] text-gray-400 text-sm leading-relaxed max-w-sm">
              Professionalizing agriculture across Sri Lanka&apos;s Wayamba Province through strategic land management and modern farming practices. Transforming idle land into high-yield enterprise.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-bold uppercase tracking-wider text-sm mb-6 text-emerald-400">Navigation</h4>
            <ul className="space-y-3 font-[family-name:var(--font-dm-sans)] text-gray-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Plantations</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-[family-name:var(--font-dm-sans)] font-bold uppercase tracking-wider text-sm mb-6 text-emerald-400">Contact</h4>
            <ul className="space-y-3 font-[family-name:var(--font-dm-sans)] text-gray-400 text-sm">
               <li className="flex gap-3">
                 <span className="text-emerald-400 mt-0.5">📍</span>
                 Wayamba Province, Sri Lanka
               </li>
               <li className="flex gap-3">
                 <span className="text-emerald-400 mt-0.5">📞</span>
                 +94 XX XXX XXXX
               </li>
               <li className="flex gap-3">
                 <span className="text-emerald-400 mt-0.5">✉️</span>
                 info@wayambacorp.lk
               </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="font-[family-name:var(--font-dm-sans)] text-xs text-gray-500">
             © {currentYear} Wayamba Corporation (PVT) LTD. All rights reserved.
           </p>
           <p className="font-[family-name:var(--font-dm-sans)] text-xs text-gray-500 flex items-center gap-1">
             Made with <span className="text-emerald-500">♡</span> in Sri Lanka
           </p>
        </div>

      </div>
    </footer>
  );
}
