import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from './components'

function CardFeature({ alt, children, compactImage = false, deck, imageOnLeft = false, src }: { alt: string; children?: ReactNode; compactImage?: boolean; deck: string; imageOnLeft?: boolean; src: string }) {
  const classes = ['eight-cups-gallery-feature', imageOnLeft && 'image-on-left', compactImage && 'compact-image'].filter(Boolean).join(' ')
  return <div className={classes}>
    <div className="eight-cups-gallery-copy">{children}</div>
    <figure className="article-image eight-cups-card eight-cups-gallery-card">
      <img alt={alt} loading="lazy" src={src} />
      <figcaption>{deck}</figcaption>
    </figure>
  </div>
}

export default function EightCupsBetweenArticle() {
  return <>
    <PageHero
      className="blog-page-hero article-hero eight-cups-hero"
      eyebrow="TAROT &amp; JUNGIAN PSYCHOLOGY"
      title="The Eight of Cups: Between Who We Were and Who We Are Becoming"
    />
    <article className="article-body wrap eight-cups-between-article">
      <p>As we explored in <Link className="article-previous-link" to="/insights/eight-of-cups-psychic-investment">the previous article</Link>, the Eight of Cups can represent a transition between an old and an emerging identity: a liminal space in which we have begun to leave something behind but cannot yet clearly define what lies ahead. Contemporary Tarot decks offer fascinating visual interpretations of this experience, each capturing a different emotional or psychological dimension of the journey.</p>

      <h2>Different ways of leaving</h2>
      <CardFeature
        alt="The Eight of Cups from Sweet Twilight Tarot, showing two figures beneath a tree."
        deck="Sweet Twilight Tarot"
        src="/images/eight-cups-between-sweet-twilight.png"
      >
        <p>In the Sweet Tarot, two figures appear to be moving in different directions. At first glance, we might imagine a separation: perhaps two people have decided to go their separate ways.</p>
        <p>But there is something curious about the figure whose hair seems to merge with the tree. Can she actually leave? And, perhaps more importantly, is leaving necessarily the best option?</p>
        <p>The image raises an interesting question about the price of transformation. Sometimes moving forward requires us to cut away something that has become intertwined with our identity. We may need to relinquish not only a situation or relationship, but also a part of ourselves that has grown around it. Can we make that separation? Are we willing to pay its emotional price?</p>
      </CardFeature>
      <CardFeature
        alt="The Eight of Cups from the Abyss Tarot, showing a figure leaving a house."
        deck="Abyss Tarot"
        imageOnLeft
        src="/images/eight-cups-between-abyss.png"
      >
        <p>The Abyss Tarot presents a rather different emotional atmosphere. Here, a figure is leaving a house, and the impression I get is one of someone who has reached their limit. They have tried everything, exhausted the available possibilities, and finally arrived at the conclusion that there is nothing left to do but leave.</p>
        <p>There is anger in this image, but it is not necessarily destructive. It seems to provide the energy needed to break away.</p>
      </CardFeature>
      <CardFeature
        alt="The Eight of Cups from the Deviant Moon Tarot, with a figure beneath the moon."
        compactImage
        deck="Deviant Moon Tarot"
        src="/images/eight-cups-between-deviant-moon.png"
      >
        <p>The emotional quality reminds me of the Eight of Cups in the Deviant Moon Tarot, where departure also feels less like a quiet spiritual decision and more like something driven by an accumulated sense of dissatisfaction.</p>
        <p>These images remind us that leaving is not always peaceful or graceful. Sometimes it is accompanied by frustration, grief, anger or even desperation. And sometimes these emotions provide the momentum we need to make a change that we have been postponing.</p>
      </CardFeature>
      <h2>Going inward</h2>
      <CardFeature
        alt="The Eight of Cups from Shadowscapes Tarot, with a figure diving into a flowing, dreamlike image."
        deck="Shadowscapes Tarot"
        src="/images/eight-cups-between-shadowscapes.png"
      >
        <p>In the Shadowscapes Tarot, the message seems almost reversed. Rather than walking away from something, the figure appears to be diving deeper.</p>
        <p>I find this interpretation particularly compelling because it suggests that the movement represented by the Eight of Cups does not always have to be external. The transition may be taking place deep within us, long before it becomes visible in our circumstances.</p>
        <p>Something is shifting in the inner world, and perhaps the task is not to force a decision but to listen more carefully. We may need to follow an internal compass, remain flexible and make room for aspects of ourselves that are beginning to demand attention.</p>
        <p>In this sense, the card seems to say: go deeper. Explore what is changing beneath the surface rather than rushing to translate every inner movement into an external action.</p>
      </CardFeature>
      <CardFeature
        alt="The Eight of Cups from Margaret Peterson’s Tarot."
        deck="Margaret Peterson Tarot"
        imageOnLeft
        src="/images/eight-cups-between-margaret-peterson.png"
      >
        <p>A similar invitation appears in Margaret Peterson’s Eight of Cups.</p>
        <p>A quote from her guidebook that I love:</p>
        <blockquote>“Get to the bottom of things. Open yourself towards all those dark, formless and obscure feelings that rise to the surface and reveal themselves in order to be seen. Part you have to do, part happens without your doing anything.”</blockquote>
      </CardFeature>
      <CardFeature
        alt="The Eight of Cups from Lubanko Tarot, showing a falling figure surrounded by cups."
        deck="Lubanko Tarot"
        src="/images/eight-cups-between-lubanko.png"
      >
        <p>Lubanko’s Eight of Cups seems to explore a related idea. The figure is falling through space while the cups rearrange themselves around him. If we consider the cups as symbolic representations of our emotional investments—the people, activities, roles and ideas in which we invest our psychic energy—the image becomes particularly evocative.</p>
        <p>Perhaps the old arrangement of our emotional world is being disrupted. What once occupied the centre of our attention is moving aside, while other possibilities begin to emerge. The process may feel like falling because we have temporarily lost our familiar points of reference. Yet this rearrangement may be precisely what allows a new internal configuration to develop.</p>
      </CardFeature>

      <h2>The tension between past and future</h2>
      <CardFeature
        alt="The Eight of Cups from Dreamkeeper Tarot, showing a figure pulled between opposing directions."
        deck="Dreamkeeper Tarot"
        imageOnLeft
        src="/images/eight-cups-between-dreamkeeper.png"
      >
        <p>The Dreamkeeper Tarot depicts a figure at a crossroads: a ghost-like version of herself points towards the future, while a skeletal hand pulls her back towards the past. I find this a compelling representation of the conflicting forces that can accompany change. One part of us is drawn towards something new, while another remains attached to what is familiar. Perhaps the task is not to silence either side, but to understand what each is trying to protect or make possible.</p>
      </CardFeature>

      <h2>The call of the quest: R. Black Tarot</h2>
      <CardFeature
        alt="The Eight of Cups from R. Black Tarot, showing a figure setting out on a journey."
        deck="R. Black Tarot"
        src="/images/eight-cups-between-r-black.png"
      >
        <p>In the R. Black Tarot, a figure leaves home and loved ones, perhaps in pursuit of a spiritual quest or an inner calling that has become impossible to ignore. This brings to mind the archetype of the hero, who must leave the familiar world to embark on a journey of discovery. If we approach the image as a dream, we might wonder whether the departing figure embodies the exploratory function of the psyche, while the loved ones left behind represent other needs, such as belonging, care and security. Perhaps different psychological functions take centre stage at different moments in our lives.</p>
      </CardFeature>

      <h2>Wearing another skin: Mary-El Tarot and Rachel Pollack</h2>
      <CardFeature
        alt="The Eight of Cups from Mary-El Tarot, featuring a small figure wearing a lion’s skin."
        deck="Mary-El Tarot"
        src="/images/eight-cups-between-mary-el.png"
      >
        <p>One particularly intriguing interpretation comes from the Mary-El Tarot, where little Hercules wears a lion’s skin. What does it mean to wear someone else’s skin? I imagine the process of gradually growing into an unfamiliar identity or capacity: at first it feels borrowed, but with time we metabolise it until it becomes part of us.</p>
      </CardFeature>
      <CardFeature
        alt="The Eight of Cups from Rachel Pollack’s Tarot, featuring mask imagery."
        deck="Rachel Pollack Tarot"
        imageOnLeft
        src="/images/eight-cups-between-rachel-pollack.png"
      >
        <p>Rachel Pollack explores a similar idea through the imagery of masks. In her guidebook, she suggests that masks do not necessarily hide the self; they can also reveal it, helping us develop a persona or psychological function that already exists within us. Sometimes we need to experiment with a new way of being before we can recognise it as our own.</p>
        <p>In this case, I understand the mask as a transitional identity—something we put on not to hide who we are, but to discover who we might become. Sometimes we develop by trying something unfamiliar, giving it form, practising it and eventually making it our own.</p>
      </CardFeature>

      <h2>An unexpected interpretation: Squid Cake Marseille</h2>
      <CardFeature
        alt="The Eight of Cups from Squid Cake Marseille, with the cups arranged symmetrically."
        deck="Squid Cake Marseille Tarot"
        imageOnLeft
        src="/images/eight-cups-between-squid-cake-marseille.png"
      >
        <p>Squid Cake’s playful Marseille interpretation offers another interesting perspective. The eight cups appear to form a gathering, almost as if they were arranged around a table. We might imagine them as people coming together to celebrate, work or exchange something. If we take this image a step further and approach it as a psychological image, the cups could represent different parts of the psyche coming together. Perhaps transformation is not always about leaving one part of ourselves behind, but also about allowing different needs, attitudes and psychological functions to meet, interact and form a new internal arrangement.</p>
      </CardFeature>

      <h2>The Eight of Cups as a rite of passage</h2>
      <p>The Eight of Cups can also be understood through the lens of the <em>rite of passage</em>, a concept explored by the French anthropologist Arnold van Gennep in his seminal work <em>Les Rites de Passage</em> (1909). Van Gennep identified three recurring stages in rites of passage: separation from an existing social position or identity, a liminal period of transition in which the old has been left behind but the new has not yet been established, and eventual incorporation into a new state of being. The Eight of Cups resonates particularly strongly with the first two stages. It speaks of the moment when we begin to detach ourselves from an established way of living, relating or understanding ourselves, entering an uncertain interval in which familiar reference points no longer serve us.</p>
      <CardFeature
        alt="The Eight of Cups from Sasuraibito Tarot, showing a woman cutting her hair."
        deck="Sasuraibito Tarot"
        src="/images/eight-cups-between-sasuraibito.png"
      >
        <p>In the Sasuraibito Tarot, a woman cuts her hair — a powerful gesture of severing ties with an earlier version of herself. Hair can carry deep associations with identity, beauty, femininity and belonging. By cutting it, she seems to be shedding not merely a physical attribute, but an aspect of herself that no longer reflects who she is becoming.</p>
      </CardFeature>
      <CardFeature
        alt="The Eight of Cups from Cosmic Seed Tarot, showing steps leading to a cave beneath a peacock."
        deck="Cosmic Seed Tarot"
        imageOnLeft
        src="/images/eight-cups-between-cosmic-seed.png"
      >
        <p>In the Cosmic Seed Tarot, a flight of stairs leads towards a cave whose interior opens onto the vastness of outer space. The cave becomes a threshold between the familiar world and an unknown inner or cosmic dimension. The stairs suggest a gradual passage towards this threshold, while the opening reveals that what initially appears to be an enclosed, dark space may contain an entirely different universe.</p>
        <p>Notice, too, the peacock perched above the entrance. Traditionally associated with beauty, renewal and immortality, the peacock introduces an intriguing suggestion of transformation and regeneration. From a Jungian perspective, we might also associate the peacock with the ego and its attachment to appearance, recognition and the familiar sense of self. Its position above the entrance invites an additional interpretation: perhaps, to cross this threshold, we need to loosen the ego’s need to remain in control, to know and to define what lies ahead. The journey into the unknown may require us to let go, at least temporarily, of the very identity through which we have learned to understand ourselves.</p>
      </CardFeature>
      <p>Together, these images suggest that walking away is not necessarily an ending. It may be the beginning of an initiatory process: leaving behind an identity, entering a period of uncertainty and making space for a different relationship with oneself and the world.</p>

      <p>But how can we work with this symbolism in a more personal way? How can the Eight of Cups help us reflect on a transition in our own lives? In the next article, we’ll explore practical questions, reflective prompts and Tarot spreads designed to help us navigate the space between who we were and who we are becoming.</p>
      <Link className="article-back" to="/blog">← Back to the blog</Link>
    </article>
  </>
}
