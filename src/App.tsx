import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header, type Language } from './components'
import { AboutPage, BlogArticlePage, BlogPage, BookingPage, FAQPage, HomePage, HowItWorksPage, MethodPage, ServicesPage } from './pages'
import { BgAboutPage, BgBlogPage, BgBookingPage, BgFAQPage, BgHomePage, BgHowItWorksPage, BgMethodPage, BgServicesPage } from './bgPages'
import BgBlogArticle from './BgBlogArticle'

export default function App() {
  const [language, setLanguage] = useState<Language>('EN')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = language === 'BG' ? 'bg' : language === 'DE' ? 'de' : 'en'
    const article = location.pathname === '/insights/tarot-without-fortune-telling'
    document.title = article
      ? language === 'BG' ? 'Таро без гадания: подход за размисъл' : 'Tarot Without Fortune-Telling: A Reflective Approach'
      : language === 'BG' ? 'Психологически проективен коучинг' : 'Psychological Projective Coaching'
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', article
      ? language === 'BG'
        ? 'Научете как таро може да подпомогне себепознанието и смисления разговор без предсказания, свръхестествени твърдения или фиксирани тълкувания.'
        : 'Discover how tarot can be used for self-reflection and meaningful conversation without predictions, supernatural claims, or fixed interpretations.'
      : 'Psychological projective coaching using reflective dialogue and symbolic images to explore your questions and perspectives.')
  }, [language, location.pathname])

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <main id="main-content">
        <Routes>
          <Route element={language === 'BG' ? <BgHomePage /> : <HomePage />} path="/" />
          <Route element={language === 'BG' ? <BgHowItWorksPage /> : <HowItWorksPage />} path="/how-it-works" />
          <Route element={language === 'BG' ? <BgServicesPage /> : <ServicesPage />} path="/services" />
          <Route element={language === 'BG' ? <BgMethodPage /> : <MethodPage />} path="/the-method" />
          <Route element={language === 'BG' ? <BgAboutPage /> : <AboutPage />} path="/about" />
          <Route element={language === 'BG' ? <BgBlogPage /> : <BlogPage />} path="/blog" />
          <Route element={language === 'BG' ? <BgBlogArticle /> : <BlogArticlePage />} path="/insights/tarot-without-fortune-telling" />
          <Route element={language === 'BG' ? <BgFAQPage /> : <FAQPage />} path="/faq" />
          <Route element={language === 'BG' ? <BgBookingPage /> : <BookingPage />} path="/book-a-session" />
          <Route element={language === 'BG' ? <BgHomePage /> : <HomePage />} path="*" />
        </Routes>
      </main>
      <Footer language={language} />
    </>
  )
}
