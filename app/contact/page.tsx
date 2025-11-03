"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 neumorphic-md border border-slate-100 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Get in Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-slate-600">contact@codeviveks.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p className="text-slate-600">Campus Building A, Room 101</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 neumorphic-md border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-smooth outline-none" 
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-smooth outline-none" 
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-smooth outline-none resize-none" 
                placeholder="Your message..."
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold transition-smooth hover:scale-105 hover:glow-blue cursor-pointer shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
