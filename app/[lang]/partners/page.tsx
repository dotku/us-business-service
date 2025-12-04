'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { partnersTranslations } from "@/translations/partners";

export default function Partners() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = partnersTranslations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href={`/${language}`} className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-white p-1 rounded-full shadow-sm">
                <Image src="/jytech-logo.png" alt={t.nav.company} width={40} height={40} className="rounded-full sm:w-12 sm:h-12" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">{t.nav.company}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <LanguageSwitcher />
              <Link href={`/${language}#services`} className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                {t.nav.services}
              </Link>
              <Link href={`/${language}/partners`} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                {t.nav.partners}
              </Link>
              <Link href={`/${language}#contact`} className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors font-medium">
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
              <div className="pb-3 border-b border-gray-100">
                <LanguageSwitcher />
              </div>
              <Link
                href={`/${language}#services`}
                className="block py-2 px-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href={`/${language}/partners`}
                className="block py-2 px-2 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.partners}
              </Link>
              <Link
                href={`/${language}#contact`}
                className="block bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors text-center font-medium mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
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
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-purple-100 px-4">
              {t.hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-purple-200 max-w-3xl mx-auto px-4">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Income Potential Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">{t.income.title}</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">{t.income.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border-2 border-green-200">
                <div className="text-5xl font-bold text-green-600 mb-2">{t.income.annual.amount}</div>
                <div className="text-gray-700 font-semibold mb-2">{t.income.annual.title}</div>
                <p className="text-sm text-gray-600">{t.income.annual.description}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border-2 border-blue-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">{t.income.clients.amount}</div>
                <div className="text-gray-700 font-semibold mb-2">{t.income.clients.title}</div>
                <p className="text-sm text-gray-600">{t.income.clients.description}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border-2 border-purple-200">
                <div className="text-5xl font-bold text-purple-600 mb-2">{t.income.commission.amount}</div>
                <div className="text-gray-700 font-semibold mb-2">{t.income.commission.title}</div>
                <p className="text-sm text-gray-600">{t.income.commission.description}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-amber-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">{t.income.howYouEarn.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {t.income.howYouEarn.items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">{index + 1}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">{t.overview.title}</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">{t.overview.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{t.overview.preQualified.title}</h3>
                <p className="text-gray-600 text-center">
                  {t.overview.preQualified.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{t.overview.support.title}</h3>
                <p className="text-gray-600 text-center">
                  {t.overview.support.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{t.overview.flexible.title}</h3>
                <p className="text-gray-600 text-center">
                  {t.overview.flexible.description}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">{t.opportunities.title}</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">{t.opportunities.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {t.opportunities.items.map((item, index) => {
                const colorSchemes = [
                  { bg: 'from-purple-50 to-indigo-50', border: 'border-purple-200', icon: 'text-purple-600' },
                  { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', icon: 'text-blue-600' },
                  { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', icon: 'text-green-600' },
                  { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', icon: 'text-orange-600' },
                  { bg: 'from-pink-50 to-rose-50', border: 'border-pink-200', icon: 'text-pink-600' },
                  { bg: 'from-indigo-50 to-purple-50', border: 'border-indigo-200', icon: 'text-indigo-600' },
                ];
                const colors = colorSchemes[index % colorSchemes.length];
                return (
                  <div key={index} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-6 border-2 ${colors.border}`}>
                    <div className="flex items-start">
                      <svg className={`w-6 h-6 ${colors.icon} mr-3 shrink-0 mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Basic Responsibilities Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">{t.responsibilities.title}</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">{t.responsibilities.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 text-xl shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t.responsibilities.partTime.title}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t.responsibilities.partTime.description}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 text-xl shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{t.responsibilities.casual.title}</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t.responsibilities.casual.description}
                </p>
              </div>
            </div>

            <div className="bg-linear-to-r from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-purple-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">{t.responsibilities.core.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {t.responsibilities.core.items.map((item, index) => (
                  <div key={index} className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 shrink-0">{index + 1}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-purple-200 text-center">
                <p className="text-gray-700 text-lg">
                  <strong>{t.responsibilities.core.note.split(':')[0]}:</strong> {t.responsibilities.core.note.split(':')[1]}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">{t.idealPartner.title}</h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4">{t.idealPartner.subtitle}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.idealPartner.experience.title}</h3>
                  <ul className="space-y-3">
                    {t.idealPartner.experience.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t.idealPartner.qualities.title}</h3>
                  <ul className="space-y-3">
                    {t.idealPartner.qualities.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600">
                  <strong>{t.idealPartner.bonus.split(':')[0]}:</strong> {t.idealPartner.bonus.split(':')[1]}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 px-4">{t.cta.title}</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-purple-100 px-4">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="mailto:partners@example.com"
                className="w-full sm:w-auto bg-white text-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-xl text-center"
              >
                {t.cta.applyNow}
              </a>
              <a
                href="#"
                className="w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                {t.cta.scheduleCall}
              </a>
            </div>
            <p className="mt-6 sm:mt-8 text-purple-200 px-4 text-sm sm:text-base">
              {t.cta.questions}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{t.footer.company}</h4>
              <p className="text-sm sm:text-base text-gray-400">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li><Link href={`/${language}`} className="hover:text-white">{t.footer.financialServices}</Link></li>
                <li><Link href={`/${language}/partners`} className="hover:text-white">{t.footer.partnerProgram}</Link></li>
                <li><Link href={`/${language}#contact`} className="hover:text-white">{t.footer.contactUs}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li>{t.footer.partnersEmail}: partners@jytech.us</li>
                <li>{t.footer.generalEmail}: info@jytech.us</li>
                <li>{t.footer.phone}: (415) 851-1937</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-500">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
