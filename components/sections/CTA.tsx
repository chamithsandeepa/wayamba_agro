"use client";

import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="bg-emerald-600 rounded-[2rem] p-10 md:p-16 mb-16 text-center text-white relative overflow-hidden shadow-xl">
           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl mb-6">
                Ready to activate your land's potential?
             </h2>
             <p className="font-[family-name:var(--font-dm-sans)] text-emerald-50 text-lg md:text-xl mb-8">
               Contact Wayamba Corporation (PVT) LTD today.<br/>
               Your partner in professional agri-business.
             </p>
           </div>
        </div>

        {/* Contact Form & Info */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 ring-1 ring-gray-100">
           
           {/* Left - Contact Info */}
           <div className="p-12 lg:p-16 bg-gray-50 border-r border-gray-100">
              <h3 className="font-[family-name:var(--font-dm-sans)] text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Contact Details</h3>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 mb-10">We're here to help</h2>

              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900">Visit Headquarters</h4>
                       <p className="text-gray-500 mt-1">Wayamba Province, Sri Lanka</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900">Direct Line</h4>
                       <p className="text-gray-500 mt-1">+94 XX XXX XXXX</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900">Email Address</h4>
                       <p className="text-gray-500 mt-1">info@wayambacorp.lk</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right - Form */}
           <div className="p-12 lg:p-16">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 mb-8">Send us an Inquiry</h3>
              
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                       <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                       <input type="tel" placeholder="+94 77 XXX XXXX" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                    </div>
                 </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" placeholder="I have land available for leasing" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" />
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea rows={4} placeholder="Please provide details about your property or inquiry..." className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"></textarea>
                 </div>

                 <button type="button" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    Submit Inquiry
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
                 </button>
              </form>
           </div>

        </div>
      </div>
    </section>
  );
}
