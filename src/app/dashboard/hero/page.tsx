"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

const defaultSlides = [
  {
    id: 1,
    tag: "Gateway to the Pacific",
    title: "Creating a Sustainable Future with Investment Solutions.",
    desc: "Discover the amazing ways strategic capital can transform your region or business.",
    btnText: "Explore Pipeline",
    btnUrl: "/investment/projects",
    image: "/Images/Hero/Hero 1.avif",
  },
  {
    id: 2,
    tag: "Sustainability First",
    title: "Blue Economy Future.",
    desc: "Leading the transition to a sustainable ocean-based economy. Unlock vast potential in marine resources and renewable energy.",
    btnText: "Invest in Blue",
    btnUrl: "/investment/blue-economy",
    image: "/Images/Hero/Hero 2.png",
  },
  {
    id: 3,
    tag: "Industrial Excellence",
    title: "Strategic Hub Sulut.",
    desc: "Connecting international markets through Bitung Special Economic Zone. Infrastructure designed for global trade efficiency.",
    btnText: "Explore SEZ",
    btnUrl: "/investment/sez",
    image: "/Images/Hero/Hero 3.avif",
  }
];

export default function HeroManagementPage() {
  const [slides, setSlides] = useState(defaultSlides);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch this from the database
    // For now, we use the default slides as initial state
    setLoading(false);
  }, []);

  const handleChange = (id: number, field: string, value: string) => {
    setSlides(slides.map(slide => slide.id === id ? { ...slide, [field]: value } : slide));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/hero', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slides }),
      });

      if (response.ok) {
        alert('Hero slides updated successfully!');
      } else {
        alert('Failed to update hero slides.');
      }
    } catch (error) {
      alert('An error occurred while saving.');
    }
  };

  if (loading) {
    return <div className="p-8 text-white">Loading...</div>;
  }

  return (
    <div className="p-8 bg-[#0B0F19] text-white min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/dashboard" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-2">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold font-space">Manage Hero Section</h1>
          <p className="text-gray-400 mt-1">Edit the content of the home page hero slider.</p>
        </div>
        <Button onClick={handleSave} className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <div className="space-y-8">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-[#131C31] border border-white/5 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold font-space">Slide {slide.id}</h2>
              <span className="text-xs text-gray-500">{slide.tag}</span>
            </div>
            
            <div className="space-y-2">
              <Label>H1 Title</Label>
              <Input 
                value={slide.title} 
                onChange={(e) => handleChange(slide.id, 'title', e.target.value)}
                className="bg-[#0B0F19]/50 border-white/10 text-white focus:border-blue-500/50"
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea 
                value={slide.desc} 
                onChange={(e) => handleChange(slide.id, 'desc', e.target.value)}
                className="bg-[#0B0F19]/50 border-white/10 text-white focus:border-blue-500/50"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Button Text</Label>
                <Input 
                  value={slide.btnText} 
                  onChange={(e) => handleChange(slide.id, 'btnText', e.target.value)}
                  className="bg-[#0B0F19]/50 border-white/10 text-white focus:border-blue-500/50"
                />
              </div>
              <div className="space-y-2">
                <Label>Button URL</Label>
                <Input 
                  value={slide.btnUrl} 
                  onChange={(e) => handleChange(slide.id, 'btnUrl', e.target.value)}
                  className="bg-[#0B0F19]/50 border-white/10 text-white focus:border-blue-500/50"
                />
              </div>
              <div className="space-y-2">
                <Label>Image Path</Label>
                <Input 
                  value={slide.image} 
                  onChange={(e) => handleChange(slide.id, 'image', e.target.value)}
                  className="bg-[#0B0F19]/50 border-white/10 text-white focus:border-blue-500/50"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
