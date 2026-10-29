import { useState, type FormEvent } from 'react'

type Language = 'EN' | 'BG'

type Archetype = {
  id: string
  name: string
  queen: string
  subtitle: string
  description: string
  questions: string[]
}

const archetypes: Record<Language, Archetype[]> = {
  EN: [
    {
      id: 'mother',
      name: 'The Mother',
      queen: 'Queen of Pentacles',
      subtitle: 'Nurturing and sustaining',
      description: 'Nurturing, grounded, sustaining, patient, embodied, practical, protective. This archetype focuses on caring for life and creating the conditions in which people and projects can grow.',
      questions: [
        'I find fulfilment in caring for others and supporting their growth.',
        'Creating a sense of belonging, stability and comfort matters to me.',
        'I am attentive to practical and emotional needs, including my own.',
        'I value patience, continuity and the gradual development of things.',
        'I feel connected to the body, nature and the rhythms of everyday life.',
        'I naturally take responsibility for nurturing people, projects or communities.',
      ],
    },
    {
      id: 'amazon',
      name: 'The Amazon',
      queen: 'Queen of Wands',
      subtitle: 'Independent and purposeful',
      description: 'Independent, courageous, purposeful, assertive, ambitious, active, self-directed. This archetype focuses on autonomy, agency and engagement with the outer world.',
      questions: [
        'Independence and the freedom to choose my own direction are essential to me.',
        'I feel energised by pursuing goals and turning ideas into action.',
        'I am comfortable asserting myself and setting boundaries.',
        'I enjoy challenges that test my abilities and encourage growth.',
        'I value competence, autonomy and being able to rely on myself.',
        'I am willing to challenge expectations when they conflict with my convictions.',
      ],
    },
    {
      id: 'hetaira',
      name: 'The Hetaira',
      queen: 'Queen of Swords',
      subtitle: 'Relational and discerning',
      description: 'Relational, discerning, communicative, stimulating, attentive to individuality and mutual exchange. This archetype focuses on meeting another person as a distinct individual rather than simply fulfilling a role.',
      questions: [
        'I am deeply interested in understanding people as unique individuals.',
        'Meaningful conversation and mutual emotional engagement are important to me.',
        'I enjoy intimacy, connection and the exchange of ideas or feelings.',
        'I am sensitive to the qualities that make a relationship feel alive and meaningful.',
        'I enjoy inspiring others and being inspired through relationships.',
        'I value beauty, creativity, pleasure and the richness of personal experience.',
      ],
    },
    {
      id: 'medial',
      name: 'The Medial Woman',
      queen: 'Queen of Cups',
      subtitle: 'Intuitive and contemplative',
      description: 'Intuitive, receptive, imaginative, contemplative, meaning-seeking, inwardly oriented. This archetype focuses on inner experience, symbolic meaning and sensitivity to less tangible dimensions of life.',
      questions: [
        'I need solitude to reflect and reconnect with my inner world.',
        'I am drawn to dreams, symbols, imagination and questions of meaning.',
        'I often notice subtle feelings, intuitions or undercurrents that are difficult to explain.',
        'I am interested in what lies beneath appearances and conventional explanations.',
        'Creative or contemplative activities help me understand my experience.',
        'I sometimes feel drawn towards an inner calling that is difficult to express in practical terms.',
      ],
    },
  ],
  BG: [
    {
      id: 'mother',
      name: 'Майката',
      queen: 'Кралицата пентакли',
      subtitle: 'Грижа и подкрепа',
      description: 'Грижовна, заземена, търпелива и практична ориентация. Тя е свързана с подкрепата за живота и създаването на условия, в които хората и проектите могат да се развиват.',
      questions: [
        'Намирам удовлетворение в грижата за другите и подкрепата за развитието им.',
        'За мен е важно да създавам усещане за принадлежност, стабилност и уют.',
        'Обръщам внимание на практическите и емоционалните потребности, включително моите.',
        'Ценя търпението, постоянството и постепенното развитие.',
        'Чувствам връзка с тялото, природата и ритъма на ежедневието.',
        'Естествено поемам отговорност да подкрепям хора, проекти или общности.',
      ],
    },
    {
      id: 'amazon',
      name: 'Амазонката',
      queen: 'Кралицата жезли',
      subtitle: 'Независимост и цел',
      description: 'Независима, смела, целеустремена и самостоятелна ориентация. Тя е свързана с автономността, личната дееспособност и ангажираността с външния свят.',
      questions: [
        'Независимостта и свободата сама да избирам посоката си са важни за мен.',
        'Имам енергия, когато преследвам цели и превръщам идеи в действия.',
        'Умея да отстоявам себе си и да поставям граници.',
        'Харесвам предизвикателства, които проверяват уменията ми и ме развиват.',
        'Ценя компетентността, самостоятелността и способността да разчитам на себе си.',
        'Готова съм да оспорвам очаквания, когато противоречат на убежденията ми.',
      ],
    },
    {
      id: 'hetaira',
      name: 'Хетерата',
      queen: 'Кралицата мечове',
      subtitle: 'Отношения и проницателност',
      description: 'Ориентация към отношенията, проницателността и общуването, с внимание към индивидуалността и взаимния обмен. Тя е свързана със срещата с другия като отделна личност.',
      questions: [
        'Силно се интересувам от разбирането на хората като уникални личности.',
        'Смисленият разговор и взаимната емоционална ангажираност са важни за мен.',
        'Харесвам близостта, свързаността и обмена на идеи или чувства.',
        'Усещам какво прави една връзка жива и значима.',
        'Харесва ми да вдъхновявам другите и да се вдъхновявам чрез отношенията.',
        'Ценя красотата, творчеството, удоволствието и богатството на личния опит.',
      ],
    },
    {
      id: 'medial',
      name: 'Медиалната жена',
      queen: 'Кралицата чаши',
      subtitle: 'Интуиция и съзерцание',
      description: 'Интуитивна, възприемчива, въображаема и съзерцателна ориентация. Тя е свързана с вътрешния опит, символния смисъл и чувствителността към по-неосезаемите измерения на живота.',
      questions: [
        'Имам нужда от уединение, за да размишлявам и да се свързвам отново с вътрешния си свят.',
        'Привличат ме сънищата, символите, въображението и въпросите за смисъла.',
        'Често долавям фини чувства, интуиции или скрити течения, които трудно се обясняват.',
        'Интересува ме онова, което е отвъд привидното и общоприетите обяснения.',
        'Творческите или съзерцателните занимания ми помагат да разбирам преживяванията си.',
        'Понякога усещам вътрешен повик, който трудно изразявам на практика.',
      ],
    },
  ],
}

const copy = {
  EN: {
    heading: 'The Four Feminine Archetypes: A Self-Reflection Test',
    duration: 'Based on Toni Wolff’s four archetypes · Approximately 5–8 minutes',
    intro: 'Think about how you generally experience yourself in your current stage of life, rather than how you believe you should be.',
    stepOne: 'Step 1. Rate each statement',
    scaleHeading: 'Use the following scale:',
    scale: ['Not at all true', 'Slightly true', 'Partly true', 'Mostly true', 'Very true'],
    stepTwo: 'Step 2. Complete the questionnaire',
    instruction: 'Answer intuitively and honestly; there are no right or wrong answers.',
    progress: 'of 24 answered',
    calculate: 'Calculate my results',
    incomplete: 'Answer all 24 statements to calculate your scores.',
    score: 'Score',
    of: '/ 30',
    stepThree: 'Step 3. Interpret the four archetypes',
    stepFour: 'Step 4. Explore the shadow',
    active: 'Active archetype',
    supportive: 'Supportive archetypes',
    shadow: 'In shadow',
    resultNote: 'The goal is not to identify one archetype as your permanent identity. It is to understand which qualities currently organise your life, which support you, and which may need more room to develop. All four archetypes can be valuable, and their expression can change with circumstances.',
    tieNote: 'Some scores are tied. The order shown is only a way to present the profile; it does not mean one tied archetype is more important than another.',
    shadowNote: 'The lowest score is only a preliminary clue. In Jungian thinking, the shadow is not simply the part of us we lack; it can also include qualities we disown, suppress, fear, or find difficult to integrate. If your lowest-scoring archetype does not resonate with these questions, do not force the interpretation.',
    reflectionHeading: 'Reflect on these four questions:',
    reflectionQuestions: [
      'Which archetype’s qualities do I find difficult to express or permit in myself?',
      'Which archetype do I tend to dismiss or judge in other people?',
      'Which qualities do I admire or envy but hesitate to embody?',
      'Under stress, which archetype’s strengths do I find difficult to access?',
    ],
    retry: 'Change an answer to explore a different profile.',
  },
  BG: {
    heading: 'Четирите женски архетипа: тест за себепознание',
    duration: 'По четирите архетипа на Тони Волф · Около 5–8 минути',
    intro: 'Помислете как обикновено преживявате себе си в настоящия етап от живота си, а не как смятате, че трябва да бъдете. Това е упражнение за размисъл, а не валидиран психологически тест или фиксиран етикет за личността.',
    stepOne: 'Стъпка 1. Оценете всяко твърдение',
    scaleHeading: 'Използвайте следната скала:',
    scale: ['Изобщо не е вярно', 'По-скоро не е вярно', 'Отчасти е вярно', 'До голяма степен е вярно', 'Напълно е вярно'],
    stepTwo: 'Стъпка 2. Попълнете въпросника',
    instruction: 'Отговаряйте интуитивно и честно; няма правилни или грешни отговори.',
    progress: 'от 24 отговорени',
    calculate: 'Изчислете резултатите ми',
    incomplete: 'Отговорете на всичките 24 твърдения, за да изчислите резултатите си.',
    score: 'Резултат',
    of: '/ 30',
    stepThree: 'Стъпка 3. Тълкувайте четирите архетипа',
    stepFour: 'Стъпка 4. Изследвайте сянката',
    active: 'Активна архетипна ориентация',
    supportive: 'Подкрепящи архетипни ориентации',
    shadow: 'В сянка',
    resultNote: 'Целта не е да определите един архетип като своя постоянна идентичност. Става дума да разберете кои качества организират живота ви в момента, кои ви подкрепят и кои може би имат нужда от повече пространство за развитие. И четирите архетипа могат да бъдат ценни, а проявлението им се променя според обстоятелствата.',
    tieNote: 'Има равни резултати. Подредбата е само начин за представяне на профила и не означава, че еднакво оценената ориентация е по-важна от друга.',
    shadowNote: 'Най-ниският резултат е само ориентировъчен знак. В юнгианското мислене сянката не е просто онова, което ни липсва; тя може да включва и качества, които отричаме, потискаме, от които се страхуваме или които трудно интегрираме. Резултатът от теста е само ориентир, а не окончателна истина. Ако тълкуването не ви се струва подходящо, доверете се на собствения си опит.',
    reflectionHeading: 'Помислете върху тези четири въпроса:',
    reflectionQuestions: [
      'Кои качества на даден архетип ми е трудно да изразявам или да си позволя?',
      'Коя ориентация съм склонна да отхвърлям или осъждам у другите?',
      'На кои качества се възхищавам или завиждам, но се колебая да въплътя?',
      'Кои силни страни на даден архетип ми е трудно да достигна под стрес?',
    ],
    retry: 'Променете отговор, за да разгледате различен профил.',
  },
} satisfies Record<Language, Record<string, string | string[]>>

export default function ArchetypeReflectionTest({ language }: { language: Language }) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const groups = archetypes[language]
  const text = copy[language]
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === 24
  const scores = groups.map((archetype) => ({
    archetype,
    score: archetype.questions.reduce((total, _question, index) => total + (answers[`${archetype.id}-${index}`] ?? 0), 0),
  }))
  const mixedQuestions = Array.from({ length: 6 }, (_, index) =>
    groups.map((archetype) => ({
      key: `${archetype.id}-${index}`,
      question: archetype.questions[index],
    })),
  ).flat()
  const ranked = [...scores].sort((a, b) => b.score - a.score)
  const hasTies = new Set(scores.map(({ score }) => score)).size < scores.length

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (allAnswered) setSubmitted(true)
  }

  function updateAnswer(key: string, value: number) {
    setAnswers((current) => ({ ...current, [key]: value }))
    setSubmitted(false)
  }

  return (
    <section className="archetype-test" aria-labelledby="archetype-test-title">
      <h2 id="archetype-test-title">{text.heading}</h2>
      <p className="archetype-duration">{text.duration}</p>
      <p>{text.intro}</p>
      <h3>{text.stepOne}</h3>
      <p>{text.scaleHeading}</p>
      <ol className="archetype-scale">
        {text.scale.map((description, index) => <li key={description}><strong>{index + 1}</strong> {description}</li>)}
      </ol>
      <p>{text.instruction}</p>
      <p aria-live="polite" className="archetype-progress">{answeredCount} / 24 {text.progress}</p>
      <form onSubmit={submit}>
        <h3>{text.stepTwo}</h3>
        <section className="archetype-question-group" aria-label={language === 'EN' ? 'Mixed questionnaire' : 'Смесен въпросник'}>
          {mixedQuestions.map(({ key, question }, index) => (
            <fieldset className="archetype-question" key={key}>
              <legend>{index + 1}. {question}</legend>
              <div className="archetype-options">
                {text.scale.map((description, valueIndex) => {
                  const value = valueIndex + 1
                  return (
                    <label key={value}>
                      <input
                        aria-label={`${value}: ${description}`}
                        checked={answers[key] === value}
                        name={key}
                        onChange={() => updateAnswer(key, value)}
                        type="radio"
                        value={value}
                      />
                      <span>{value}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>
          ))}
        </section>
        <button className="button button-primary archetype-submit" disabled={!allAnswered} type="submit">{text.calculate}</button>
        {!allAnswered && <p className="archetype-incomplete">{text.incomplete}</p>}
      </form>

      {submitted && (
        <section className="archetype-results" aria-live="polite" aria-labelledby="archetype-results-title">
          <h3 id="archetype-results-title">{text.stepThree}</h3>
          <h4>{language === 'EN' ? 'Your profile' : 'Вашият профил'}</h4>
          <p>{text.resultNote}</p>
          {hasTies && <p>{text.tieNote}</p>}
          {ranked.map(({ archetype, score }, index) => (
            <article className={`archetype-result archetype-result-${index + 1}`} key={archetype.id}>
              <span className="archetype-result-role">{index === 0 ? text.active : index === 3 ? text.shadow : text.supportive}</span>
              <h4>{archetype.name} <span>· {archetype.queen}</span></h4>
              <p className="archetype-result-score">{score} {text.of}</p>
              <p>{archetype.description}</p>
              {index === 3 && <p>{text.shadowNote}</p>}
            </article>
          ))}
          <h4>{text.stepFour}</h4>
          <p>{text.reflectionHeading}</p>
          <ul>{text.reflectionQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
          <p>{text.retry}</p>
        </section>
      )}
    </section>
  )
}
