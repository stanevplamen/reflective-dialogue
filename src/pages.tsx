import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { BookingButton, BookingCTA, FAQAccordion, InternalLink, NumberedSteps, PageHero, SectionLabel, ServiceCard } from './components'
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
  return <><PageHero className="blog-page-hero" eyebrow="BLOG" title="Tarot, psychology and the stories we make." description="Essays exploring tarot through Jungian and psychological lenses, the language of symbols, and the questions that help us see our lives differently." /><section className="blog-section wrap"><Link className="blog-card" to="/insights/tarot-without-fortune-telling"><img className="blog-card-art" src="/images/tarot-article-hero-canvas.png" alt="A face-down tarot deck beside a ceramic cup and dried flowers" /><div className="blog-card-copy"><SectionLabel>TAROT &amp; REFLECTION</SectionLabel><h2>Tarot Without Fortune-Telling: What Are We Actually Doing?</h2><p>Tarot doesn't have to predict the future to be worth exploring. Discover how symbolic images and thoughtful dialogue can help you approach familiar questions from a fresh perspective.</p><span className="text-link">Read the article <span aria-hidden="true">↗</span></span></div></Link></section></>
}

export function BlogArticlePage() {
  return <><PageHero className="blog-page-hero article-hero" eyebrow="TAROT & REFLECTION" title="Tarot Without Fortune-Telling: What Are We Actually Doing?" description="An introduction to tarot as a tool for reflection, self-understanding, and meaningful conversation." /><article className="article-body wrap">
    <p>When people hear the word <em>tarot</em>, they often imagine predictions, mysterious revelations, or someone claiming to know what the future holds. Others dismiss it entirely, associating it with superstition or irrational beliefs.</p>
    <p>But there is another way to approach tarot.</p>
    <p>What if we set aside the question of whether cards can predict the future and ask a different one instead?</p>
    <blockquote className="article-question"><strong>What happens when we use symbolic images to explore our own experiences, questions, and ways of seeing the world?</strong></blockquote>
    <p>This is the starting point of psychological tarot coaching. Rather than treating the cards as sources of hidden knowledge, we use them as prompts for reflection—a way to approach familiar questions from a different angle, articulate what may be difficult to put into words, and consider possibilities we might not have noticed before.</p>
    <p>The cards do not need to tell us what is true. They can help us explore what might be meaningful.</p>

    <h2>From prediction to exploration</h2>
    <p>Imagine that you are facing a difficult decision. You have thought about it repeatedly, weighed the pros and cons, and discussed it with people you trust. Yet you still feel stuck.</p>
    <p>You might be tempted to ask the tarot:</p><ul className="article-prediction-questions"><li>What should I do?</li><li>Which path is the right one?</li><li>What will happen if I choose this or that?</li></ul>
    <p>These questions place the answer somewhere outside you, as though the cards could resolve the uncertainty on your behalf.</p>
    <p>A reflective approach begins differently.</p>
    <p>Instead of asking the cards to decide, we might explore questions such as:</p>
    <ul><li>What makes this decision difficult for me?</li><li>What am I hoping to gain, and what am I afraid of losing?</li><li>Which needs or values seem to be in conflict?</li><li>Is there something I have been reluctant to acknowledge?</li><li>What possibilities have I not yet considered?</li></ul>
    <p>The cards become part of an inquiry rather than an authority. They offer images, symbols, and situations that we can examine together. What matters is not whether an interpretation is supposedly correct, but whether exploring it helps you understand your situation more clearly.</p>
    <p>This does not mean that every card will reveal something profound. Sometimes an image will feel irrelevant. Sometimes it will evoke an unexpected association. Sometimes the conversation will confirm something you already knew but had not quite articulated.</p><p>All of these are legitimate outcomes of reflection.</p>

    <div className="article-feature"><div className="article-feature-copy"><h2>A different kind of question</h2>
    <p>Consider the Two of Swords from the Rider–Waite–Smith tarot deck.</p>
    <p>The card depicts a blindfolded figure sitting with two swords crossed over their chest. Behind the figure lies a body of water, with rocky landforms and a crescent moon in the distance.</p>
    <p>The card is traditionally associated with indecision, stalemate, and difficult choices. These associations can provide a starting point, but they do not determine what the image must mean to a particular person.</p>
    <p>Imagine looking at this card while struggling with a decision in your own life.</p>
    <p>You might notice the crossed swords and think about two competing options. You might focus on the blindfold and wonder whether you are avoiding something. Or you might notice the figure's stillness and feel a sense of relief at the thought of not having to decide immediately.</p>
    <p>Each observation opens a different line of inquiry.</p><p>Rather than telling you which interpretation is correct, we can begin with questions:</p>
    <ul><li>What catches your attention first?</li><li>How do you respond to the figure's position?</li><li>Does the image remind you of anything in your current situation?</li><li>What, if anything, feels familiar about it?</li></ul>
    <p>The point is not to extract a definitive answer from the card. It is to use the image as a starting point for a conversation about something that matters to you.</p>
    <p>The image gives us something to look at together. Your experience gives the conversation its context.</p></div><figure className="article-image"><img src="/images/two-of-swords.jpg" alt="The Two of Swords tarot card, showing a blindfolded figure holding crossed swords beside the sea" /><figcaption>Two of Swords<br />Rider–Waite–Smith Tarot</figcaption></figure></div>

    <h2>Why use images at all?</h2>
    <p>We are accustomed to approaching problems through explanations, analysis, and rational argument. These are valuable ways of thinking, but they do not always help us move beyond a familiar line of thought.</p>
    <p>When we are caught in a difficult situation, we can find ourselves repeating the same arguments without arriving at anything new. We may understand the practical aspects of a decision while remaining uncertain about our feelings, needs, or priorities.</p>
    <p>An image offers another point of entry.</p>
    <p>Instead of trying to explain a complicated situation immediately, we can begin by describing what we see, what we notice, and what the image brings to mind. This may make it easier to approach a question indirectly, without needing to have everything figured out in advance.</p>
    <p>Of course, images are not inherently insightful, and they do not work for everyone. Their usefulness depends on the person, the context, and the conversation that follows.</p>
    <p>But when an image gives us a fresh way to approach a familiar question, it can become a useful prompt for reflection.</p>

    <h2>The cards provide a starting point, not an answer</h2>
    <p>This is what distinguishes a reflective approach to tarot from fortune-telling.</p>
    <p>We are not asking the cards to tell us what another person feels, what will happen next, or which decision we should make. We are using them to create space for questions that might otherwise remain unexplored.</p>
    <p>A card does not have to reveal a hidden truth to be useful. Nor does every interpretation need to lead to a new discovery.</p>
    <p>Sometimes reflection helps us recognise a conflict between two important needs. Sometimes it allows us to articulate a feeling we have struggled to describe. Sometimes it simply helps us look at a familiar situation from a slightly different perspective.</p>
    <p>The aim is not to replace uncertainty with certainty. It is to approach uncertainty with greater curiosity and a clearer understanding of our own experience.</p>
    <blockquote><strong>The cards provide the symbolic language. The conversation creates the space for reflection. What emerges is something to explore, not something you must accept as truth.</strong></blockquote>
    <p>This is the starting point of my approach to psychological tarot coaching.</p>
    <p>In the next article, we will explore one of the ideas that makes working with symbolic images particularly interesting: <em>projection</em>—and how our personal experiences, expectations, and concerns can influence what we see in an image.</p>
    <Link className="article-back" to="/blog">← Back to the blog</Link>
  </article></>
}

export function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="BOOK A SESSION"
        title="Make space for your own perspective."
        description="Using conversation and symbolic exploration, we will work together to understand your situation, uncover different perspectives, and identify what feels meaningful and useful to you."
      />
      <section aria-label="Session details and request form" className="booking-section wrap">
        <div className="booking-overview">
          <SectionLabel>INDIVIDUAL ONLINE SESSION</SectionLabel>
          <h2>A focused conversation, just for you.</h2>
          <p className="booking-price">€50</p>
          <p className="booking-duration">45 minutes · Held online</p>
          <ul className="booking-benefits">
            <li>A focused conversation about your question</li>
            <li>Guided symbolic exploration</li>
            <li>Thoughtful, collaborative questioning</li>
            <li>Perspectives connected to everyday life</li>
          </ul>
        </div>
        <BookingRequestForm />
      </section>
    </>
  )
}

function BookingRequestForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form aria-label="Demo session request" className="booking-form" onChange={() => setSubmitted(false)} onSubmit={handleSubmit}>
      <p className="booking-notice">In a live booking flow, your request would be recorded for an email reply. Preferred dates are suggestions, not held slots, and no session is confirmed until we agree a time. This demo does not send or store your details.</p>
      <div className="form-field">
        <label htmlFor="booking-focus">What would you like to explore? <span aria-hidden="true">*</span></label>
        <select autoComplete="off" id="booking-focus" name="focus" required defaultValue="">
          <option disabled value="">Select a focus</option>
          <option value="relationships">Relationships</option>
          <option value="work-career">Work and career</option>
          <option value="decision">A decision</option>
          <option value="life-transition">A life transition</option>
          <option value="personal-growth">Personal growth</option>
          <option value="feeling-stuck">Feeling stuck</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="booking-session">Session</label>
        <input id="booking-session" name="session" readOnly value="€50 · 45 minutes · Online" />
      </div>
      <div className="form-pair">
        <div className="form-field">
          <label htmlFor="booking-date">Preferred date <span className="optional">(optional)</span></label>
          <input id="booking-date" name="preferredDate" type="date" />
        </div>
        <div className="form-field">
          <label htmlFor="booking-time">Preferred time <span className="optional">(optional)</span></label>
          <input id="booking-time" name="preferredTime" type="time" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="booking-timezone">Your time zone <span aria-hidden="true">*</span></label>
        <input autoComplete="off" id="booking-timezone" name="timeZone" required defaultValue={Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Zurich'} />
      </div>
      <div className="form-pair">
        <div className="form-field">
          <label htmlFor="booking-name">Your name <span aria-hidden="true">*</span></label>
          <input autoComplete="name" id="booking-name" name="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="booking-email">Email address <span aria-hidden="true">*</span></label>
          <input autoComplete="email" id="booking-email" name="email" required type="email" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="booking-note">Anything else you would like me to know? <span className="optional">(optional)</span></label>
        <textarea id="booking-note" name="note" rows={4} />
      </div>
      <button className="button button-primary booking-submit" type="submit">Submit demo request <span aria-hidden="true">↗</span></button>
      {submitted && <p aria-live="polite" className="form-confirmation" role="status">Demo confirmation: your details were validated in this browser, but no request or email has been sent.</p>}
      <p className="form-demo-note">Demo form only. Your details are not sent or stored.</p>
    </form>
  )
}
