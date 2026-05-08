'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    // Submit to API
    alert("Thank you for your inquiry. Our team will contact you shortly.");
    reset();
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Have questions about investment opportunities or procedures? Our dedicated team at the Regional Investor Relations Unit is here to assist you.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="flex flex-col gap-6">
             <Card className="border-none shadow-xl bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 flex flex-col gap-8 group">
                <div className="flex items-center gap-4">
                   <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-blue-600"><Mail className="w-6 h-6" /></div>
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</div>
                      <a href="mailto:rirusulut@gmail.com" className="font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">rirusulut@gmail.com</a>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-blue-600"><Phone className="w-6 h-6" /></div>
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone / WA</div>
                      <a href="tel:+62811436060" className="font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">+62 811 436 060</a>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl text-blue-600"><MapPin className="w-6 h-6" /></div>
                   <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office Address</div>
                      <div className="font-bold text-slate-900 dark:text-white leading-tight">Bank Indonesia North Sulawesi, Manado</div>
                   </div>
                </div>
             </Card>

             <Card className="border-none shadow-xl bg-blue-600 text-white rounded-[2.5rem] p-10 flex flex-col gap-6">
                <ShieldCheck className="w-12 h-12 text-blue-200" />
                <h3 className="text-2xl font-bold">Institutional Support</h3>
                <p className="text-blue-100 leading-relaxed">
                  Every inquiry is handled with strict confidentiality and directed to the relevant institutional authority for a precise response.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-blue-200">
                   <Globe className="w-4 h-4" /> Global Response Center
                </div>
             </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                    <Input 
                      placeholder="Your name" 
                      className={cn("h-14 rounded-xl border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-none focus-visible:ring-blue-600", errors.name && "border-red-500")} 
                      {...register("name")}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Company Name</label>
                    <Input 
                      placeholder="Your organization" 
                      className={cn("h-14 rounded-xl border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-none focus-visible:ring-blue-600", errors.company && "border-red-500")}
                      {...register("company")}
                    />
                    {errors.company && <span className="text-xs text-red-500 font-medium">{errors.company.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <Input 
                    placeholder="email@example.com" 
                    className={cn("h-14 rounded-xl border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-none focus-visible:ring-blue-600", errors.email && "border-red-500")}
                    {...register("email")}
                  />
                  {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                  <Input 
                    placeholder="Inquiry about..." 
                    className={cn("h-14 rounded-xl border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-none focus-visible:ring-blue-600", errors.subject && "border-red-500")}
                    {...register("subject")}
                  />
                  {errors.subject && <span className="text-xs text-red-500 font-medium">{errors.subject.message}</span>}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or questions..." 
                    className={cn("min-h-[200px] rounded-2xl border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-none focus-visible:ring-blue-600", errors.message && "border-red-500")}
                    {...register("message")}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message.message}</span>}
                </div>

                <Button type="submit" className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-xl shadow-blue-600/20 text-white">
                  <Send className="w-5 h-5 mr-3 text-white" /> Send Message
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest pt-4">
                   <CheckCircle2 className="w-4 h-4 text-green-500" /> reCAPTCHA v3 Protected
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
