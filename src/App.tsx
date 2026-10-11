import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header, type Language } from './components'
import { AboutPage, BookingPage, FAQPage, HomePage, HowItWorksPage, MethodPage, ServicesPage } from './pages'

export default function App() {
  const [language, setLanguage] = useState<Language>('EN')

  return (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      {language === 'EN' ? (
        <>
          <main id="main-content">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<HowItWorksPage />} path="/how-it-works" />
              <Route element={<ServicesPage />} path="/services" />
              <Route element={<MethodPage />} path="/the-method" />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<FAQPage />} path="/faq" />
              <Route element={<BookingPage />} path="/book-a-session" />
              <Route element={<HomePage />} path="*" />
            </Routes>
          </main>
          <Footer />
        </>
      ) : <main aria-label={`${language} language placeholder`} className="language-placeholder" />}
    </>
  )
}