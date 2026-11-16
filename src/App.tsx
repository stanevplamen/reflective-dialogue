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
import EightCupsBetweenArticle from './EightCupsBetweenArticle'
import BgEightCupsBetweenArticle from './BgEightCupsBetweenArticle'
import SkeletonMaidenArticle from './SkeletonMaidenArticle'
import BgSkeletonMaidenArticle from './BgSkeletonMaidenArticle'

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
    const isSkeletonMaidenArticle = location.pathname === '/insights/skeleton-and-maiden-transformation'
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
        : location.pathname === '/insights/eight-of-cups-between-identities'
          ? {
              title: language === 'BG' ? 'Осмица чаши: между това, което бяхме, и това, в което се превръщаме' : 'The Eight of Cups: Between Who We Were and Who We Are Becoming',
              description: language === 'BG'
                ? 'Разгледайте как съвременните колоди таро представят несигурния преход между идентичността, която оставяме, и тази, която тепърва се оформя.'
                : 'Explore how contemporary Tarot decks portray the uncertain passage between an identity we are leaving and one still taking shape.',
            }
        : location.pathname === '/insights/skeleton-and-maiden-transformation'
          ? {
              title: language === 'BG' ? 'Картата Смърт в таро: път към трансформацията' : 'Death Tarot Card: Jungian Symbolism & Transformation',
              description: language === 'BG'
                ? 'Изследвайте картата Смърт от Tarot of the Sweet Twilight през юнгианската символика, скръбта, обновлението и движението от несъзнаваното към съзнанието.'
                : 'Explore the Death card from the Tarot of the Sweet Twilight through Jungian symbolism, grief, renewal, and the movement from unconsciousness towards consciousness.',
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
    const isEightOfCupsArticle = location.pathname === '/insights/eight-of-cups-psychic-investment' || location.pathname === '/insights/eight-of-cups-between-identities'
    const isArticle = location.pathname.startsWith('/insights/')
    setMeta('meta[property="og:title"]', 'content', pageTitle)
    setMeta('meta[property="og:description"]', 'content', pageDescription)
    setMeta('meta[property="og:type"]', 'content', isArticle ? 'article' : 'website')
    setMeta('meta[property="og:locale"]', 'content', language === 'BG' ? 'bg_BG' : 'en_US')
    setMeta('meta[name="twitter:title"]', 'content', pageTitle)
    setMeta('meta[name="twitter:description"]', 'content', pageDescription)
    const articleImage = isEightOfCupsArticle
      ? { src: '/images/eight-of-cups-moonlit-journey.jpg', alt: 'Original illustration of eight cups and a winding path beneath the moon' }
      : isSkeletonMaidenArticle
        ? { src: '/images/death-card-sweet-twilight.png', alt: 'A skeleton carries a woman in a red dress across a barren landscape beneath the Sun and Moon; a snake emerges from a skull.' }
        : null
    setMeta('meta[name="twitter:card"]', 'content', articleImage ? 'summary_large_image' : 'summary')
    setMeta('link[rel="canonical"]', 'href', new URL(location.pathname, window.location.origin).href)
    if (articleImage) {
      setMeta('meta[property="og:image"]', 'content', new URL(articleImage.src, window.location.origin).href)
      setMeta('meta[property="og:image:alt"]', 'content', articleImage.alt)
      setMeta('meta[name="twitter:image"]', 'content', new URL(articleImage.src, window.location.origin).href)
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
          <Route element={language === 'BG' ? <BgEightCupsBetweenArticle /> : <EightCupsBetweenArticle />} path="/insights/eight-of-cups-between-identities" />
          <Route element={language === 'BG' ? <BgSkeletonMaidenArticle /> : <SkeletonMaidenArticle />} path="/insights/skeleton-and-maiden-transformation" />
          <Route element={language === 'BG' ? <BgFAQPage /> : <FAQPage />} path="/faq" />
          <Route element={language === 'BG' ? <BgBookingPage /> : <BookingPage />} path="/book-a-session" />
          <Route element={language === 'BG' ? <BgHomePage /> : <HomePage />} path="*" />
        </Routes>
      </main>
      <Footer language={language} />
    </>
  )
}
