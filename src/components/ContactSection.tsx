'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column - Text & Info */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div>
              <span className="text-[#00529C] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.1] mt-2 mb-6">
                Let Us Do The Work, So You Can Focus On What Matters
              </h2>
              <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-xl">
                Tim RIRU Sulawesi Utara siap memberikan pendampingan personal, data akurat, dan solusi perizinan untuk kesuksesan investasi Anda.
              </p>
            </div>

            {/* Contact Cards (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Card (Blue) */}
              <div className="bg-[#00529C] text-white p-6 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00529C]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Email</div>
                  <div className="text-xs text-blue-100">rirusulut@gmail.com</div>
                </div>
              </div>

              {/* Phone Card (Blue) */}
              <div className="bg-[#00529C] text-white p-6 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00529C]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Phone</div>
                  <div className="text-xs text-blue-100">+62 811 436 060</div>
                </div>
              </div>
            </div>

            {/* Google Map Attempt 2 */}
            <div className="relative w-full flex-1 min-h-[250px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps?q=Bank+Indonesia+Manado&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bank Indonesia North Sulawesi Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-6 bg-[#F3F4F6] p-8 md:p-10 rounded-3xl">
            <form className="flex flex-col gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-transparent focus:border-[#00529C] outline-none transition-all text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-transparent focus:border-[#00529C] outline-none transition-all text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Your Message" 
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-transparent focus:border-[#00529C] outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold text-slate-700">Select Topic</span>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#00529C]" />
                    <span className="text-sm text-slate-600 font-medium">Let's Start Project</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#00529C]" />
                    <span className="text-sm text-slate-600 font-medium">General Inquiry</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="bg-[#00529C] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#003d75] transition-all duration-300 shadow-xl shadow-blue-900/10 mt-2"
              >
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
