import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header, type Language } from './components'
import { AboutPage, BlogPage, BookingPage, FAQPage, HomePage, HowItWorksPage, MethodPage, ServicesPage } from './pages'
import { BgAboutPage, BgBlogPage, BgBookingPage, BgFAQPage, BgHomePage, BgHowItWorksPage, BgMethodPage, BgServicesPage } from './bgPages'

const LANGUAGE_PREFERENCE_KEY = 'preferred-language'

function readSavedLanguage(): Language | null {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_PREFERENCE_KEY)
    if (savedLanguage === 'bg') return 'BG'
    if (savedLanguage === 'en') return 'EN'
  } catch {
    return null
  }
  return null
}

export default function App() {
  const [language, setLanguage] = useState<Language | null>(readSavedLanguage)

  useEffect(() => {
    if (language !== null) return

    let active = true
    const controller = new AbortController()
    fetch('/api/visitor-country', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Country lookup failed')
        return response.json() as Promise<{ country?: string | null }>
      })
      .then(({ country }) => {
        if (active) setLanguage(country === 'BG' ? 'BG' : 'EN')
      })
      .catch(() => {
        if (active) setLanguage('EN')
      })

    return () => {
      active = false
      controller.abort()
    }
  }, [language])

  useEffect(() => {
    if (language === null) return
    document.documentElement.lang = language === 'BG' ? 'bg' : language === 'DE' ? 'de' : 'en'
    document.title = language === 'BG' ? 'Психологически проективен коучинг' : 'Psychological Projective Coaching'
  }, [language])

  function handleLanguageChange(nextLanguage: Language) {
    setLanguage(nextLanguage)
    if (nextLanguage !== 'BG' && nextLanguage !== 'EN') return
    try {
      window.localStorage.setItem(LANGUAGE_PREFERENCE_KEY, nextLanguage.toLowerCase())
    } catch {
      // The current selection still applies when storage is unavailable.
    }
  }

  if (language === null) {
    return <main aria-busy="true" id="main-content"><span className="sr-only">Loading language preference</span></main>
  }

  return (
    <>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main id="main-content">
        <Routes>
          <Route element={language === 'BG' ? <BgHomePage /> : <HomePage />} path="/" />
          <Route element={language === 'BG' ? <BgHowItWorksPage /> : <HowItWorksPage />} path="/how-it-works" />
          <Route element={language === 'BG' ? <BgServicesPage /> : <ServicesPage />} path="/services" />
          <Route element={language === 'BG' ? <BgMethodPage /> : <MethodPage />} path="/the-method" />
          <Route element={language === 'BG' ? <BgAboutPage /> : <AboutPage />} path="/about" />
          <Route element={language === 'BG' ? <BgBlogPage /> : <BlogPage />} path="/blog" />
          <Route element={language === 'BG' ? <BgFAQPage /> : <FAQPage />} path="/faq" />
          <Route element={language === 'BG' ? <BgBookingPage /> : <BookingPage />} path="/book-a-session" />
          <Route element={language === 'BG' ? <BgHomePage /> : <HomePage />} path="*" />
        </Routes>
      </main>
      <Footer language={language} />
    </>
  )
}
