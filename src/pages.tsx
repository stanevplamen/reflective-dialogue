import { Link } from 'react-router-dom'
import { BookingButton, BookingCTA, FAQAccordion, InternalLink, NumberedSteps, PageHero, SectionLabel, ServiceCard, SetmoreBookingPanel } from './components'
import { steps, topics } from './content'

function InfoStrip() {
  return <div className="info-strip"><span><i aria-hidden="true">◉</i> Online, one-to-one sessions</span><b aria-hidden="true">·</b><span><i aria-hidden="true">◷</i> 45 minutes · €50</span><b aria-hidden="true">·</b><span><i aria-hidden="true">○</i> Reflection, not prediction</span></div>
}

function SplitIntro({ label, title, text, link, linkText, background = false }: { label: string; title: string; text: string; link?: string; linkText?: string; background?: boolean }) {
  const content = <><div><SectionLabel>{label}</SectionLabel><h2>{title}</h2></div><div><p>{text}</p>{link && linkText && <InternalLink to={link}>{linkText}</InternalLink>}</div></>
  return background
    ? <section className="home-perspective-bg"><div className="split-section wrap">{content}</div></section>
    : <section className="split-section wrap">{content}</section>
}

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo" role="img" aria-label="A calm, sunlit reading room with a comfortable armchair and garden views" />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <SectionLabel>PROJECTIVE COACHING</SectionLabel>
          <h1>Grounded in psychology.<br />Inspired by symbolism.<br />Guided by <em>conversation.</em></h1>
          <p className="hero-subtitle">Find clarity.<br />Open up new possibilities.</p>
          <p className="hero-description">If something in your life feels unclear, stuck, or difficult to make sense of, this is a dedicated space to step back and explore it. See your situation from a new perspective and discover new ways of responding.</p>
          <div className="hero-actions"><BookingButton /><Link className="text-link" to="/how-it-works">How it works <span aria-hidden="true">↗</span></Link></div>
          <p className="hero-meta">Individual online session · 45 minutes · €50</p>
        </div>
      </section>
      <InfoStrip />
      <SplitIntro background label="A DIFFERENT WAY OF LOOKING" title="Sometimes one conversation is enough to help you see a situation with new eyes." text="We rarely see our own lives from a completely neutral perspective. Our thoughts, emotions, assumptions, and past experiences shape what we notice—and what we overlook. Tarot is used as a reflective tool, offering images and perspectives that can help you notice patterns and possibilities." link="the-method" linkText="The Reflective Dialogue Method" />
      <section className="home-steps home-steps-bg section-border"><div className="wrap section-heading"><SectionLabel>INSIDE A SESSION</SectionLabel><h2>One question. More than one way forward</h2><InternalLink to="/how-it-works">How we work together</InternalLink></div><div className="wrap"><NumberedSteps items={steps} /></div></section>
      <section className="topics-section section-border"><div className="wrap section-heading"><SectionLabel>WHAT'S ON YOUR MIND?</SectionLabel><h2>There is room for your question.</h2><InternalLink to="/services">Explore the sessions</InternalLink></div><div className="wrap topic-grid">{topics.map(([title, text]) => <article className="topic-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="method-band method-band-bg"><div className="wrap method-band-inner"><div><SectionLabel>THE REFLECTIVE DIALOGUE METHOD</SectionLabel><h2>Tarot is the language.<br />Conversation is the work.</h2><p>The cards do not tell you what to do. They give us something interesting to think with. Meaning emerges through the interaction between the image, your experience, and our conversation.</p><InternalLink to="/the-method">Explore the method</InternalLink></div></div></section>
      <section className="home-faq wrap"><div className="section-heading"><SectionLabel>GOOD QUESTIONS. HONEST ANSWERS.</SectionLabel><h2>Curious? You are welcome here.</h2><InternalLink to="/faq">All questions & answers</InternalLink></div><FAQAccordion limit={3} /></section>
      <BookingCTA />
    </>
  )
}
export function HowItWorksPage() {
  return <><PageHero className="how-works-page-hero" eyebrow="HOW WE WORK TOGETHER" title="The cards are the starting point. The conversation is where the insight happens." description="We begin with your life—not the cards. You do not need to know anything about tarot or arrive with a perfectly formulated question." /><section className="content-section wrap"><NumberedSteps items={steps} /></section><SplitIntro label="YOUR SESSION, YOUR PACE" title="A focused space for what matters to you." text="Sessions are held online, one-to-one, and last 45 minutes. You can bring a specific question or simply a feeling that something deserves a closer look. We find the focus together." link="/services" linkText="Explore the session" /><BookingCTA /></>
}

export function ServicesPage() {
  return <><section className="service-section"><div className="wrap"><ServiceCard /></div></section><section className="topics-section section-border"><div className="wrap section-heading"><SectionLabel>THINGS PEOPLE BRING</SectionLabel><h2>One question, many possible starting points.</h2></div><div className="wrap topic-grid">{topics.map(([title, text]) => <article className="topic-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section></>
}

export function MethodPage() {
  const principles = [
    ['You are the authority on your experience.', 'I do not impose an interpretation. You decide what resonates, what does not, and what is relevant to your own life.'],
    ['Symbols are prompts, not facts.', 'A tarot card does not establish an objective truth about your situation. It offers an image to notice, question, and think with.'],
    ['The conversation creates the insight.', 'Meaning is not fixed in the card. It emerges through the interaction between the image, your experience, and the conversation.'],
  ]
  return <><PageHero className="method-page-hero" eyebrow="PSYCHOLOGY MEETS SYMBOLIC EXPLORATION" title="The Reflective Dialogue Method" description="A psychologically informed coaching approach that facilitates meaning-making through structured dialogue and symbolic exploration. Tarot provides the symbolic language; the conversation creates the insight." /><section className="principles-section wrap"><NumberedSteps items={principles.map(([title, text], index) => ({ number: `0${index + 1}`, title, text }))} /></section><SplitIntro label="REFLECTION, NOT CERTAINTY" title="Curiosity without pretending to know what we do not know." text="Symbolic exploration can be meaningful without treating symbolism as objective fact. There is no prediction or fixed interpretation: just space to explore what the images bring up for you." link="/how-it-works" linkText="See how a session works" /><BookingCTA /></>
}

export function AboutPage() {
  return <><PageHero className="about-page-hero" eyebrow="ABOUT ME" title="Sometimes change begins with a different question." description="My interest in psychology has always been driven by a simple fascination: why do people experience the same situation so differently, and what helps us find clarity when life becomes uncertain?" /><section className="about-background"><div className="wrap about-layout"><img alt="Irena in her warm, sunlit reading room" className="about-photo" src="/images/irena.jpg"/><div className="about-copy"><h2>A background in psychology</h2><p>I studied psychology, completing a Master’s degree in Clinical Psychology, because I wanted to understand people, relationships, and the ways we make meaning of our experiences. Along the way, I completed additional training in Cognitive Behavioural Therapy (CBT) and Jungian psychology, and gained personal experience with psychodrama.</p><p>These different perspectives have shaped the way I think about human experience, reflection, and change. This practice offers coaching, not clinical assessment or psychotherapy.</p><Link className="text-link" to="/the-method">Learn about the method <span aria-hidden="true">↗</span></Link></div></div></section><BookingCTA /></>
}

export function FAQPage() {
  return <><PageHero className="page-hero-no-divider faq-page-compact faq-abstract-hero" eyebrow="QUESTIONS & ANSWERS" title="Curiosity is a good place to start." description="You are welcome to ask questions, be sceptical, and take your time deciding whether this approach feels right for you." /><section className="faq-section faq-page-compact wrap"><FAQAccordion /></section><BookingCTA /></>
}

export function BlogPage() {
  return <><PageHero className="blog-page-hero" eyebrow="BLOG" title="Tarot, psychology and the stories we make." description="Essays exploring tarot through Jungian and psychological lenses, the language of symbols, and the questions that help us see our lives differently." /><section className="blog-section wrap"><div className="blog-empty"><SectionLabel>COMING SOON</SectionLabel><h2>Thoughtful writing is on its way.</h2><p>Articles and essays on tarot, Jungian ideas, symbolism, and reflective practice will appear here.</p></div></section></>
}

export function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="BOOK A SESSION"
        title="Make space for your own perspective."
        description="Using conversation and symbolic exploration, we will work together to understand your situation, uncover different perspectives, and identify what feels meaningful and useful to you."
      />
      <section aria-label="Session details and booking" className="booking-section wrap">
        <div className="booking-overview">
          <SectionLabel>INDIVIDUAL ONLINE SESSION</SectionLabel>
          <h2>A focused conversation, just for you.</h2>
          <p className="booking-price">€50</p>
          <p className="booking-duration">Held online</p>
          <ul className="booking-benefits">
            <li>A focused conversation about your question</li>
            <li>Guided symbolic exploration</li>
            <li>Thoughtful, collaborative questioning</li>
            <li>Perspectives connected to everyday life</li>
          </ul>
        </div>
        <SetmoreBookingPanel />
      </section>
    </>
  )
}
