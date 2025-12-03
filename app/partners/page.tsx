'use client';

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";

export default function Partners() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-white p-1 rounded-full shadow-sm">
                <Image src="/jytech-logo.png" alt="杰圆商务" width={40} height={40} className="rounded-full sm:w-12 sm:h-12" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">杰圆商务</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="/#services" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Services
              </a>
              <a href="/partners" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Partner Program
              </a>
              <a href="/#contact" className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors font-medium">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
              <a
                href="/#services"
                className="block py-2 px-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/partners"
                className="block py-2 px-2 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner Program
              </a>
              <a
                href="/#contact"
                className="block bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors text-center font-medium mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-purple-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
              US Business Partner Matching Program
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-purple-100 px-4">
              Earn $10,000+ per year helping international businesses expand to the US
            </p>
            <p className="text-base sm:text-lg text-purple-200 max-w-3xl mx-auto px-4">
              Join our exclusive network of US-based business partners and connect with vetted international clients seeking your expertise
            </p>
          </div>
        </div>
      </section>

      {/* Income Potential Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Income Potential</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Multiple revenue streams from partnership opportunities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border-2 border-green-200">
                <div className="text-5xl font-bold text-green-600 mb-2">$10K+</div>
                <div className="text-gray-700 font-semibold mb-2">Annual Income</div>
                <p className="text-sm text-gray-600">Average partner earnings per year</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border-2 border-blue-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">5-10</div>
                <div className="text-gray-700 font-semibold mb-2">Active Clients</div>
                <p className="text-sm text-gray-600">Typical partner portfolio size</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border-2 border-purple-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">20%</div>
                <div className="text-gray-700 font-semibold mb-2">Commission Rate</div>
                <p className="text-sm text-gray-600">On referred client revenue</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-amber-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">How You Earn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Referral Commissions</h4>
                    <p className="text-gray-600 text-sm">Earn 20% commission on all services you refer to international clients</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Consulting Fees</h4>
                    <p className="text-gray-600 text-sm">Direct consulting income from clients seeking your expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Partnership Deals</h4>
                    <p className="text-gray-600 text-sm">Revenue sharing from ongoing business partnerships you facilitate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Performance Bonuses</h4>
                    <p className="text-gray-600 text-sm">Additional bonuses for high-performing partners and successful outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">Why Join Our Partner Network?</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Leverage our 20+ years of international e-commerce expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Pre-Qualified Leads</h3>
                <p className="text-gray-600 text-center">
                  We handle all client vetting and qualification. You only work with serious, vetted international businesses ready to invest in US expansion.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Full Support</h3>
                <p className="text-gray-600 text-center">
                  Access our expertise, templates, and resources. We provide ongoing support to ensure successful partnerships and your continued growth.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Flexible Engagement</h3>
                <p className="text-gray-600 text-center">
                  Work on your own schedule. Choose opportunities that match your expertise and availability. Scale up or down as you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">Partnership Opportunities</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Diverse sectors and high-growth opportunities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Cross-Border E-commerce Operations</h4>
                    <p className="text-gray-600 text-sm">Help international brands establish and grow their US e-commerce presence on platforms like Amazon, Shopify, and more.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">International Trade & Import/Export</h4>
                    <p className="text-gray-600 text-sm">Facilitate trade relationships, manage import/export logistics, and navigate customs and compliance requirements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Supply Chain & Logistics Management</h4>
                    <p className="text-gray-600 text-sm">Optimize warehousing, fulfillment, and distribution networks for international clients entering the US market.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Product Distribution & Agency</h4>
                    <p className="text-gray-600 text-sm">Become an exclusive distributor or agent for international products in the US market.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-pink-600 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Marketing & Brand Development</h4>
                    <p className="text-gray-600 text-sm">Lead US market entry strategies, digital marketing campaigns, and brand positioning for international companies.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-indigo-600 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Investment & Strategic Collaboration</h4>
                    <p className="text-gray-600 text-sm">Structure joint ventures, investment deals, and strategic partnerships between US and international businesses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Responsibilities Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">Your Role & Responsibilities</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Part-time, flexible support with straightforward responsibilities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 text-xl shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Part-Time Role</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This is a <strong>flexible, part-time position</strong> designed to fit around your existing schedule. Work on your own time and choose opportunities that match your availability and interests.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 text-xl shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Casual Support</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Provide <strong>casual, on-demand support</strong> as needed. No pressure for full-time commitment—contribute when it works for you while earning supplemental income.
                </p>
              </div>
            </div>

            <div className="bg-linear-to-r from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-purple-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Core Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Communication & Email Management</h4>
                    <p className="text-gray-600">
                      Respond to client inquiries, manage email correspondence, and maintain clear communication channels with international clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Simple Business Development</h4>
                    <p className="text-gray-600">
                      Identify and pursue straightforward business opportunities, make introductions, and help facilitate initial connections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Offline Visits & Meetings</h4>
                    <p className="text-gray-600">
                      Conduct occasional in-person visits with clients or partners, attend networking events, and represent the partnership program locally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Supply Chain Coordination</h4>
                    <p className="text-gray-600">
                      Help connect clients with relevant supply chain partners, facilitate logistics coordination, and provide local market insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Customer Service Support</h4>
                    <p className="text-gray-600">
                      Provide ongoing support to clients, answer questions, resolve simple issues, and ensure smooth partnership operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">6</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">Market Intelligence</h4>
                    <p className="text-gray-600">
                      Share local market insights, trends, and opportunities that could benefit international clients entering the US market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-purple-200 text-center">
                <p className="text-gray-700 text-lg">
                  <strong>Note:</strong> All responsibilities are manageable on a part-time basis. We provide full training and ongoing support to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">Who We're Looking For</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">Ideal partner profile and qualifications</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Experience & Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">3+ years in e-commerce, trade, or related industries</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Knowledge of US business regulations and practices</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Strong network in your industry or region</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Track record of successful business relationships</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Qualities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Entrepreneurial mindset and self-motivated</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Excellent communication and relationship-building skills</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Cultural sensitivity and international mindset</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Commitment to long-term partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600">
                  <strong>Bonus:</strong> Bilingual capabilities (English + Chinese, Spanish, or other languages) are highly valued
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-4">Ready to Join Our Partner Network?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-purple-100 px-4">
              Start earning $10,000+ per year by connecting international businesses with US market opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="mailto:partners@example.com"
                className="w-full sm:w-auto bg-white text-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-xl text-center"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Schedule a Call
              </a>
            </div>
            <p className="mt-6 sm:mt-8 text-purple-200 px-4 text-sm sm:text-base">
              Questions? Email us at partners@jytech.us or call (415) 851-1937
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">US Business Services</h4>
              <p className="text-sm sm:text-base text-gray-400">
                Connecting international businesses with US market opportunities through strategic partnerships
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li><a href="/" className="hover:text-white">Financial Services</a></li>
                <li><a href="/partners" className="hover:text-white">Partner Program</a></li>
                <li><a href="/#contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>Partners: partners@jytech.us</li>
                <li>General: info@jytech.us</li>
                <li>Phone: (415) 851-1937</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-500">
            <p>&copy; 2024 US Business Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
