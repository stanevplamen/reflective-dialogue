import { useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { faqs, navigation } from './content'

export type Language = 'EN' | 'BG' | 'DE'

export function LanguageSelector({ value, onChange }: { value: Language; onChange: (language: Language) => void }) {
  return (
    <div className="language-switch" aria-label="Choose language">
      {(['EN', 'BG'] as const).map((language, index) => (
        <span className="language-option" key={language}>
          {index > 0 && <span aria-hidden="true" className="language-slash">/</span>}
          <button
            aria-current={value === language ? 'true' : undefined}
            aria-label={`${language}${language === 'EN' ? ', English' : language === 'BG' ? ', Bulgarian' : ', German'}`}
            className={value === language ? 'language-active' : ''}
            onClick={() => onChange(language)}
            type="button"
          >
            {language}
          </button>
        </span>
      ))}
    </div>
  )
}

export function Header({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label={language === 'BG' ? 'Психологически проективен коучинг — начало' : 'Psychological Projective Coaching home'} className="brand" onClick={() => setMenuOpen(false)} to="/">
          <img alt="" aria-hidden="true" className="brand-mark" src="/images/reflection-wheel.png" />
          <span className="brand-copy">
            <span className="brand-name">{language === 'BG' ? <>Психологически<br />проективен коучинг</> : <>Psychological<br />Projective Coaching</>}</span>
            <span className="brand-tagline">{language === 'BG' ? 'ПРОСТРАНСТВО ЗА ПРОЗРЕНИЯ И РАЗВИТИЕ' : 'A SPACE FOR INSIGHT AND GROWTH'}</span>
          </span>
        </Link>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span /><span />
        </button>
        <div className={`header-controls${menuOpen ? ' menu-open' : ''}`}>
          <nav aria-label="Main navigation" className="main-nav">
            {navigation.map(({ label, path }, index) => (
              <NavLink
                end={path === '/'}
                key={path}
                onClick={() => setMenuOpen(false)}
                to={path}
              >
                {language === 'BG' ? ['Начало', 'Как протича', 'Услуги', 'Методът', 'За мен', 'Блог', 'Въпроси'][index] : label}
              </NavLink>
            ))}
          </nav>
          <Link aria-current={location.pathname === '/book-a-session' ? 'page' : undefined} className={`button button-primary header-book${location.pathname === '/book-a-session' ? ' booking-active' : ''}`} onClick={() => setMenuOpen(false)} to="/book-a-session">
            {language === 'BG' ? 'Запазете сесия' : 'Book a session'} <span aria-hidden="true">↗</span>
          </Link>
          <LanguageSelector onChange={onLanguageChange} value={language} />
        </div>
      </div>
      {language !== 'EN' && <span className="sr-only">{language === 'BG' ? 'Избран е български език.' : 'The German language placeholder is selected.'}</span>}
      <span className="sr-only" key={location.pathname}>{navigation.find((item) => item.path === location.pathname)?.label ?? 'Page'}</span>
    </header>
  )
}

export function Footer({ language = 'EN' }: { language?: Language }) {
  const bg = language === 'BG'
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div>
          <Link className="footer-brand" to="/">{bg ? <>Психологически<br />проективен коучинг</> : <>Psychological<br />Projective Coaching</>}</Link>
          <p>{bg ? <>Психология в основата.<br />Символика като вдъхновение.<br />Разговорът като път към нови перспективи.</> : <>Grounded in psychology.<br />Inspired by symbolism. Guided by conversation.</>}</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">{bg ? 'Разгледайте' : 'Explore'}</span>
          {navigation.slice(1).map(({ label, path }, index) => <Link key={path} to={path}>{bg ? ['Как протича', 'Услуги', 'Методът', 'За мен', 'Блог', 'Въпроси'][index] : label}</Link>)}
        </div>
        <div className="footer-note">
          <span className="eyebrow">{bg ? 'Пространство за пауза' : 'A space to pause'}</span>
          <p>{bg ? <>Различна гледна точка.<br />Разговор, за който си струва да отделите време.</> : <>A different perspective.<br />A conversation worth making space for.</>}</p>
          <Link className="text-link" to="/book-a-session">{bg ? 'Запазете сесия' : 'Book a session'} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="footer-bottom wrap"><span>© 2026 Psychological Projective Coaching</span><span>{bg ? 'Онлайн · Индивидуално · Размисъл, не предсказание' : 'Online · One-to-one · Reflection, not prediction'}</span></div>
    </footer>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span aria-hidden="true" />{children}</div>
}

export function PageHero({ eyebrow, title, description, className = '' }: { eyebrow: string; title: string; description: string; className?: string }) {
  return (
    <section className={`page-hero${className ? ` ${className}` : ''}`}>
      <div className="wrap page-hero-inner">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1>{title}</h1>
        <p className="page-intro">{description}</p>
      </div>
    </section>
  )
}

export function NumberedSteps({ items }: { items: { number: string; title: string; text: string }[] }) {
  return (
    <div className="steps-list">
      {items.map((step) => (
        <article className="step-row" key={step.number}>
          <span className="step-number">{step.number}</span>
          <div><h3>{step.title}</h3><p>{step.text}</p></div>
        </article>
      ))}
    </div>
  )
}

export function ServiceCard() {
  return (
    <article className="service-card">
      <SectionLabel>WHAT I OFFER</SectionLabel>
      <h2>Individual online coaching session</h2>
      <p className="service-description">You bring a situation, decision, recurring pattern, or question about yourself. We clarify what is most relevant, use tarot images as prompts where they help, and connect what emerges back to your everyday life. Nothing about the session requires you to believe in tarot.</p>
      <div className="service-facts"><strong>€50</strong><span>45 minutes</span><span>Online · one-to-one</span><span>Single session, no package required</span></div>
      <BookingButton />
      <p className="disclaimer">Coaching is not psychotherapy, psychological assessment or diagnosis, and not a substitute for appropriate professional care. Sessions do not predict the future or tell you what to do.</p>
    </article>
  )
}

export function BookingButton({ children = 'Book a session' }: { children?: React.ReactNode }) {
  return <Link className="button button-primary" to="/book-a-session">{children}<span aria-hidden="true">↗</span></Link>
}

export function BookingCTA() {
  return (
    <section className="booking-cta">
      <div className="wrap booking-cta-inner">
        <div><SectionLabel>A CONVERSATION WORTH MAKING SPACE FOR</SectionLabel><h2>A space to pause and explore.</h2><p>You do not need a perfectly formulated question. We can find the focus together.</p></div>
        <div className="booking-cta-action"><BookingButton /><span>45 minutes · €50 · Online</span></div>
      </div>
    </section>
  )
}

export function FAQAccordion({ limit, language = 'EN' }: { limit?: number; language?: Language }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const idPrefix = useId()
  const bgFaqs = [
    { question: 'Какво представлява психологическият проективен коучинг?', answer: 'Това е коучинг разговор с психологическа основа, който използва символни образи като отправна точка за размисъл. Изследваме преживяванията ви заедно; вие решавате какво има смисъл и как да постъпите.' },
    { question: 'Това гледане на таро ли е?', answer: 'Не в традиционния смисъл. Таро се използва като символно и проективно средство, а не като източник на обективни отговори. Картите ни дават тема, която да забележим, поставим под въпрос и изследваме заедно.' },
    { question: 'Трябва ли да вярвам в таро?', answer: 'Не. Не е необходимо да вярвате в таро или да знаете нещо за картите. Те предлагат образи за размисъл. Началото са вашите реакции и асоциации, а не предварително зададено тълкуване.' },
    { question: 'Как използваме таро в коучинг сесия?', answer: 'Започваме с вашата ситуация, след което използваме избрани образи като покана за размисъл. Разглеждаме какво забелязвате, какви въпроси възникват и как тези гледни точки се свързват с ежедневието.' },
    { question: 'Можете ли да ми кажете какво ще се случи в бъдеще?', answer: 'Не. Сесиите не предсказват бъдещето и не ви казват какво да правите. Те дават пространство да обмислите ситуацията и възможните начини да реагирате.' },
  ]
  const items = (language === 'BG' ? bgFaqs : faqs).slice(0, limit || faqs.length)

  return (
    <div className="faq-list">
      {items.map(({ question, answer }, index) => {
        const panelId = `${idPrefix}-panel-${index}`
        const isOpen = openIndex === index
        return (
          <article className={`faq-item${isOpen ? ' faq-open' : ''}`} key={question}>
            <h3><button aria-controls={panelId} aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)} type="button">{question}<span aria-hidden="true">{isOpen ? '−' : '+'}</span></button></h3>
            <div className="faq-answer" hidden={!isOpen} id={panelId}><p>{answer}</p></div>
          </article>
        )
      })}
    </div>
  )
}

export function InternalLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link className="text-link" to={to}>{children}<span aria-hidden="true">↗</span></Link>
}
