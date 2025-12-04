import { LanguageProvider } from '@/contexts/LanguageContext';
import { use } from 'react';

type Language = 'zh' | 'en';

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: paramLang } = use(params);
  const lang = (paramLang === 'zh' || paramLang === 'en' ? paramLang : 'zh') as Language;

  return (
    <LanguageProvider lang={lang}>
      {children}
    </LanguageProvider>
  );
}

export async function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }];
}
