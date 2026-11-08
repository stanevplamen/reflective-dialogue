import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header, type Language } from './components'
import { AboutPage, BlogArticlePage, BlogPage, BookingPage, FAQPage, HomePage, HowItWorksPage, MethodPage, ServicesPage } from './pages'
import { BgAboutPage, BgBlogPage, BgBookingPage, BgFAQPage, BgHomePage, BgHowItWorksPage, BgMethodPage, BgServicesPage } from './bgPages'
import BgBlogArticle from './BgBlogArticle'
import BgEightOfCupsArticle from './BgEightOfCupsArticle'
import ToniWolffArticle from './ToniWolffArticle'
import BgToniWolffArticle from './BgToniWolffArticle'
import EightOfCupsArticle from './EightOfCupsArticle'

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
  const location = useLocation()

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
    const article = location.pathname === '/insights/tarot-without-fortune-telling'
      ? {
          title: language === 'BG' ? 'Таро без гадания: подход за размисъл' : 'Tarot Without Fortune-Telling: A Reflective Approach',
          description: language === 'BG'
            ? 'Научете как таро може да подпомогне себепознанието и смисления разговор без предсказания, свръхестествени твърдения или фиксирани тълкувания.'
            : 'Discover how tarot can be used for self-reflection and meaningful conversation without predictions, supernatural claims, or fixed interpretations.',
        }
      : location.pathname === '/insights/toni-wolff-four-queens'
        ? {
            title: language === 'BG' ? 'Тони Волф и четирите кралици в таро' : 'Toni Wolff and the Four Tarot Queens',
            description: language === 'BG'
              ? 'Изследвайте четирите форми на женската психика според Тони Волф и свободните им символни паралели с кралиците в таро.'
              : 'Explore Toni Wolff’s four forms of the feminine psyche and their loose symbolic parallels with the Tarot Queens.',
          }
        : location.pathname === '/insights/eight-of-cups-psychic-investment'
          ? {
              title: language === 'BG' ? 'Осмица чаши: значение и психология на Юнг' : 'Eight of Cups Meaning: Jungian Psychology & Libido',
              description: language === 'BG'
                ? 'Изследвайте Осмица чаши през идеята на Юнг за психичната енергия, образите на Райдър–Уейт–Смит и Таро на Тот и въпроси за личен размисъл.'
                : 'Explore the Eight of Cups through Jung’s idea of psychic energy, with Rider–Waite–Smith and Thoth imagery, reflective questions, and a nuanced look at leaving.',
            }
        : null
    const pageTitle = article?.title
      ?? (language === 'BG' ? 'Психологически проективен коучинг' : 'Psychological Projective Coaching')
    document.title = pageTitle
    const description = document.querySelector('meta[name="description"]')
    const pageDescription = article?.description
      ?? (language === 'BG'
        ? 'Психологически проективен коучинг чрез рефлексивен диалог и символни образи за изследване на вашите въпроси и гледни точки.'
        : 'Psychological projective coaching using reflective dialogue and symbolic images to explore your questions and perspectives.')
    if (description) description.setAttribute('content', pageDescription)

    const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
      let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
      if (!element) {
        element = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
        if (selector.startsWith('link')) element.setAttribute('rel', 'canonical')
        else if (selector.includes('property=')) element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '')
        else element.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] ?? '')
        document.head.append(element)
      }
      element.setAttribute(attribute, value)
    }
    const isEightOfCupsArticle = location.pathname === '/insights/eight-of-cups-psychic-investment'
    setMeta('meta[property="og:title"]', 'content', pageTitle)
    setMeta('meta[property="og:description"]', 'content', pageDescription)
    setMeta('meta[property="og:type"]', 'content', isEightOfCupsArticle ? 'article' : 'website')
    setMeta('meta[property="og:locale"]', 'content', language === 'BG' ? 'bg_BG' : 'en_US')
    setMeta('meta[name="twitter:title"]', 'content', pageTitle)
    setMeta('meta[name="twitter:description"]', 'content', pageDescription)
    setMeta('meta[name="twitter:card"]', 'content', isEightOfCupsArticle ? 'summary_large_image' : 'summary')
    setMeta('link[rel="canonical"]', 'href', new URL(location.pathname, window.location.origin).href)
    if (isEightOfCupsArticle) {
      setMeta('meta[property="og:image"]', 'content', new URL('/images/eight-of-cups-moonlit-journey.jpg', window.location.origin).href)
      setMeta('meta[property="og:image:alt"]', 'content', 'Original illustration of eight cups and a winding path beneath the moon')
      setMeta('meta[name="twitter:image"]', 'content', new URL('/images/eight-of-cups-moonlit-journey.jpg', window.location.origin).href)
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove()
      document.head.querySelector('meta[property="og:image:alt"]')?.remove()
      document.head.querySelector('meta[name="twitter:image"]')?.remove()
    }
  }, [language, location.pathname])

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
          <Route element={language === 'BG' ? <BgBlogArticle /> : <BlogArticlePage />} path="/insights/tarot-without-fortune-telling" />
          <Route element={language === 'BG' ? <BgToniWolffArticle /> : <ToniWolffArticle />} path="/insights/toni-wolff-four-queens" />
          <Route element={language === 'BG' ? <BgEightOfCupsArticle /> : <EightOfCupsArticle />} path="/insights/eight-of-cups-psychic-investment" />
          <Route element={language === 'BG' ? <BgFAQPage /> : <FAQPage />} path="/faq" />
          <Route element={language === 'BG' ? <BgBookingPage /> : <BookingPage />} path="/book-a-session" />
          <Route element={language === 'BG' ? <BgHomePage /> : <HomePage />} path="*" />
        </Routes>
      </main>
      <Footer language={language} />
    </>
  )
}
