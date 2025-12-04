'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { homeTranslations } from "@/translations/home";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = homeTranslations[language];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href={`/${language}`}
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-white p-1 rounded-full">
                <Image
                  src="/jytech-logo.png"
                  alt={t.nav.company}
                  width={40}
                  height={40}
                  className="rounded-full sm:w-12 sm:h-12"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold">{t.nav.company}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#services"
                className="hover:text-blue-200 transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#pricing"
                className="hover:text-blue-200 transition-colors"
              >
                {t.nav.pricing}
              </Link>
              <Link
                href={`/${language}/partners`}
                className="hover:text-blue-200 transition-colors"
              >
                {t.nav.partners}
              </Link>
              <LanguageSwitcher />
              <Link
                href="#contact"
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
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
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <Link
                href="#services"
                className="block py-2 hover:text-blue-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#pricing"
                className="block py-2 hover:text-blue-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.pricing}
              </Link>
              <Link
                href={`/${language}/partners`}
                className="block py-2 hover:text-blue-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.partners}
              </Link>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Link
                href="#contact"
                className="block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </div>
          )}
        </nav>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t.hero.title}
          </h2>
          <p className="text-lg sm:text-xl mb-3 sm:mb-4 text-blue-100 px-4">
            {t.hero.subtitle}
          </p>
          <p className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto px-4">
            {t.hero.description}
          </p>
        </div>
      </header>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            {t.pricing.title}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600">{t.pricing.subtitle}</p>
        </div>

        {/* One-time Fees */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <h4 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6 sm:mb-8 text-center px-4">
            {t.pricing.oneTime.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Case Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="text-center">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t.pricing.oneTime.registration.badge}
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">{t.pricing.oneTime.registration.price}</span>
                  <span className="text-gray-600 text-lg sm:text-xl">{t.pricing.oneTime.registration.unit}</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base">
                  {t.pricing.oneTime.registration.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Landing Page Development Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-teal-100 hover:border-teal-300 transition-colors">
              <div className="text-center">
                <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t.pricing.oneTime.landingPage.badge}
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">
                    {t.pricing.oneTime.landingPage.price}
                  </span>
                  <span className="text-gray-600 text-lg sm:text-xl">{t.pricing.oneTime.landingPage.unit}</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base">
                  {t.pricing.oneTime.landingPage.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Maintenance Fees */}
        <div className="max-w-7xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6 sm:mb-8 text-center px-4">
            {t.pricing.monthly.title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Basic Maintenance Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <div className="text-center">
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t.pricing.monthly.basic.badge}
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">{t.pricing.monthly.basic.price}</span>
                  <span className="text-gray-600 text-lg sm:text-xl">{t.pricing.monthly.basic.unit}</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base">
                  {t.pricing.monthly.basic.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Maintenance Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-green-100 hover:border-green-300 transition-colors">
              <div className="text-center">
                <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t.pricing.monthly.premium.badge}
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">{t.pricing.monthly.premium.price}</span>
                  <span className="text-gray-600 text-lg sm:text-xl">{t.pricing.monthly.premium.unit}</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base">
                  {t.pricing.monthly.premium.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Google Business Maintenance Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="text-center">
                <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t.pricing.monthly.google.badge}
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">{t.pricing.monthly.google.price}</span>
                  <span className="text-gray-600 text-lg sm:text-xl">{t.pricing.monthly.google.unit}</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base">
                  {t.pricing.monthly.google.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Marketing SEO Fee */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-pink-100 hover:border-pink-300 transition-colors">
              <div className="text-center">
                <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t.pricing.monthly.marketing.badge}
                </div>
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-800">{t.pricing.monthly.marketing.price}</span>
                  <span className="text-gray-600 text-lg sm:text-xl">{t.pricing.monthly.marketing.unit}</span>
                </div>
                <ul className="text-left space-y-3 text-gray-700 text-sm sm:text-base">
                  {t.pricing.monthly.marketing.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                {t.services.title}
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 px-4">
                {t.services.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {t.services.items.map((service, index) => {
                const colors = [
                  { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'bg-blue-500', text: 'text-blue-500' },
                  { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', icon: 'bg-green-500', text: 'text-green-500' },
                  { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', icon: 'bg-purple-500', text: 'text-purple-500' }
                ];
                const color = colors[index];
                const icons = {
                  building: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                  calculator: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                };
                return (
                  <div key={index} className={`bg-linear-to-br ${color.bg} rounded-2xl p-6 sm:p-8 border-2 ${color.border} hover:shadow-xl transition-shadow`}>
                    <div className={`${color.icon} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6`}>
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={icons[service.icon as keyof typeof icons]}
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className={`${color.text} mr-2`}>•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-12 bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border-2 border-blue-200">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
                {t.services.additional.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {t.services.additional.items.map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-3 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Credentials Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t.team.title}
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">{t.team.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 sm:p-4 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {t.team.expert.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {t.team.expert.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 sm:p-4 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                      {t.team.experience.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {t.team.experience.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-200">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                      20+
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">{t.team.stats.years}</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">{t.team.stats.cases}</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                      98%
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">{t.team.stats.satisfaction}</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">{t.team.stats.support}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 border-2 border-green-200">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="bg-green-500 text-white p-3 sm:p-4 rounded-full shrink-0">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {t.refund.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  {t.refund.description}
                </p>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  {t.refund.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">{t.contact.title}</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href="mailto:info@jytech.us"
              className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t.contact.cta}
            </a>
            <a
              href="tel:+14158511937"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t.contact.phone}
            </a>
          </div>
          <p className="mt-6 sm:mt-8 text-blue-200 text-sm sm:text-base">
            {t.contact.hours}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {t.footer.company}
              </h4>
              <p className="text-gray-400 text-sm sm:text-base">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {t.footer.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    {t.footer.pricing}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${language}/partners`}
                    className="hover:text-white transition-colors"
                  >
                    {t.footer.partners}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                {t.footer.contactInfo.title}
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-gray-500 w-12 shrink-0">{t.footer.contactInfo.email}</span>
                  <span className="break-all">info@jytech.us</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-12 shrink-0">{t.footer.contactInfo.phone}</span>
                  <span>(415) 851-1937</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 w-12 shrink-0">{t.footer.contactInfo.address}</span>
                  <span>600 California St, San Francisco, CA 94108</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-500 text-sm sm:text-base">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
