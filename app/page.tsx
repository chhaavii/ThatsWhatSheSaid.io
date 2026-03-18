'use client'

// --- MADE BY CHHAVI :)

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TrumpModel } from '@/components/TrumpModel'

// --- ASCII world map because pixels are overrated
const asciiWorldMap = String.raw`
                 _.-""""-._
             .-""          ""-.
           .'    .-""""-.      '.
          /    .'  _  _  '.      \
         /    /   (_) (_)  \      \
        ;    ;  .-""""""-.  ;      ;
        |    | /  _  _    \ |      |
        |    | | (_)(_)    ||      |
   _    ;    | \   ^    _ / ;      ;
  / \   ;    ;  '-.__.-'  ; ;      ;
 / _ \  \    \            / /     /
| (_) |  '.   '._      _.' .'    /
 \___/     '-.   """"""  .-'   .'
             '-.        .-'  .'
                '------'  .'
                    '---'
`

// --- meme chaos carefully curated by CHHAVI :)
const allPeople = ['PUTIN', 'BIDEN', 'TRUMP', 'SUNAK', 'ZELENSKYY', 'KIM', 'XI', 'MACRON', 'SCHOLZ', 'MODI']

// --- if you find this, you owe CHHAVI a coffee
const baseQuestions = [
  {
    question: "Who said this?",
    quote: "We lost the missile but gained character development.",
    answer: "PUTIN",
    options: ["BIDEN", "PUTIN", "ZELENSKYY", "TRUMP"],
  },
  {
    question: "Who said this?",
    quote: "I pressed the red button. It made coffee. We are safe.",
    answer: "BIDEN",
    options: ["BIDEN", "SUNAK", "KIM", "ZELENSKYY"],
  },
  {
    question: "Who said this?",
    quote: "This is the best emergency. Nobody has better emergencies.",
    answer: "TRUMP",
    options: ["PUTIN", "TRUMP", "BIDEN", "SUNAK"],
  },
  {
    question: "Who said this?",
    quote: "We will remain calm. Panic will be scheduled later.",
    answer: "SUNAK",
    options: ["ZELENSKYY", "SUNAK", "PUTIN", "BIDEN"],
  },
  {
    question: "Who said this?",
    quote: "If this fails, it was art. If it works, it was strategy.",
    answer: "ZELENSKYY",
    options: ["TRUMP", "KIM", "ZELENSKYY", "BIDEN"],
  },
  {
    question: 'Who said this?',
    quote: "We didn't make a mistake. Reality misunderstood us.",
    answer: 'KIM',
    options: ['PUTIN', 'BIDEN', 'KIM', 'TRUMP'],
  },
]

// --- more cursed quotes (also by CHHAVI)
const moreQuestions = [
  {
    quote: 'We launched nothing. Something else launched itself.',
    answer: 'PUTIN',
    options: ['PUTIN', 'TRUMP', 'SUNAK', 'XI'],
  },
  {
    quote: 'I was about to fix it… then I forgot what ‘it’ was.',
    answer: 'BIDEN',
    options: ['MACRON', 'BIDEN', 'KIM', 'SCHOLZ'],
  },
  {
    quote: 'Frankly, this might be the greatest mistake ever. Still mine though.',
    answer: 'TRUMP',
    options: ['TRUMP', 'MODI', 'ZELENSKYY', 'XI'],
  },
  {
    quote: 'We are calm. Extremely calm. Suspiciously calm.',
    answer: 'XI',
    options: ['XI', 'PUTIN', 'SUNAK', 'MACRON'],
  },
  {
    quote: 'The button worked perfectly. The outcome is optional.',
    answer: 'KIM',
    options: ['KIM', 'TRUMP', 'SCHOLZ', 'MODI'],
  },
  {
    quote: 'Let me explain this… with a long speech and zero answers.',
    answer: 'MODI',
    options: ['MODI', 'BIDEN', 'MACRON', 'PUTIN'],
  },
  {
    quote: 'We will strongly consider doing something eventually.',
    answer: 'SUNAK',
    options: ['SUNAK', 'XI', 'TRUMP', 'ZELENSKYY'],
  },
  {
    quote: 'This crisis needs urgency… but also vibes.',
    answer: 'MACRON',
    options: ['MACRON', 'SCHOLZ', 'KIM', 'BIDEN'],
  },
  {
    quote: 'We made a decision. Now we are reviewing the decision.',
    answer: 'SCHOLZ',
    options: ['SCHOLZ', 'PUTIN', 'XI', 'MODI'],
  },
  {
    quote: 'We are confident. Why? We will decide later.',
    answer: 'ZELENSKYY',
    options: ['ZELENSKYY', 'TRUMP', 'SUNAK', 'KIM'],
  },
  {
    quote: 'Nobody panic. I already panicked for everyone.',
    answer: 'TRUMP',
    options: ['TRUMP', 'BIDEN', 'MACRON', 'XI'],
  },
  {
    quote: 'This is serious. Anyway… where’s lunch?',
    answer: 'BIDEN',
    options: ['PUTIN', 'BIDEN', 'SUNAK', 'SCHOLZ'],
  },
  {
    quote: 'We never said that. Even if we did, we didn’t.',
    answer: 'PUTIN',
    options: ['PUTIN', 'XI', 'KIM', 'MODI'],
  },
  {
    quote: 'Silence is strategy. Talking is optional.',
    answer: 'XI',
    options: ['XI', 'MACRON', 'TRUMP', 'ZELENSKYY'],
  },
  {
    quote: 'We tested the system. The system failed emotionally.',
    answer: 'KIM',
    options: ['KIM', 'SCHOLZ', 'BIDEN', 'SUNAK'],
  },
  {
    quote: 'Friends… this problem is big. My speech will be bigger.',
    answer: 'MODI',
    options: ['MODI', 'TRUMP', 'PUTIN', 'MACRON'],
  },
  {
    quote: 'We are taking steps. Very small, polite steps.',
    answer: 'SUNAK',
    options: ['SUNAK', 'XI', 'SCHOLZ', 'KIM'],
  },
  {
    quote: 'This is chaos, yes—but fashionable chaos.',
    answer: 'MACRON',
    options: ['MACRON', 'TRUMP', 'BIDEN', 'PUTIN'],
  },
  {
    quote: 'We optimized the plan. It is now slower but clearer.',
    answer: 'SCHOLZ',
    options: ['SCHOLZ', 'MODI', 'XI', 'SUNAK'],
  },
  {
    quote: 'We tried everything. Now we try vibes.',
    answer: 'ZELENSKYY',
    options: ['ZELENSKYY', 'TRUMP', 'KIM', 'MACRON'],
  },
  {
    quote: 'This situation is huge. Possibly the hugest.',
    answer: 'TRUMP',
    options: ['TRUMP', 'PUTIN', 'SUNAK', 'XI'],
  },
  {
    quote: 'We’re working on it. Slowly. Very slowly.',
    answer: 'BIDEN',
    options: ['BIDEN', 'SCHOLZ', 'MACRON', 'KIM'],
  },
  {
    quote: 'Nothing is happening. Something might be happening.',
    answer: 'PUTIN',
    options: ['PUTIN', 'XI', 'TRUMP', 'MODI'],
  },
  {
    quote: 'Control the situation. Then define the situation.',
    answer: 'XI',
    options: ['XI', 'SUNAK', 'SCHOLZ', 'ZELENSKYY'],
  },
  {
    quote: 'We pressed the button. It pressed back.',
    answer: 'KIM',
    options: ['KIM', 'PUTIN', 'BIDEN', 'MACRON'],
  },
  {
    quote: 'Let me first thank everyone before solving anything.',
    answer: 'MODI',
    options: ['MODI', 'TRUMP', 'XI', 'SUNAK'],
  },
  {
    quote: 'We will take action. Eventually. Calmly.',
    answer: 'SUNAK',
    options: ['SUNAK', 'PUTIN', 'KIM', 'SCHOLZ'],
  },
  {
    quote: 'Urgency is important, but so is presentation.',
    answer: 'MACRON',
    options: ['MACRON', 'TRUMP', 'BIDEN', 'XI'],
  },
  {
    quote: 'We improved the process. The outcome is unchanged.',
    answer: 'SCHOLZ',
    options: ['SCHOLZ', 'PUTIN', 'MODI', 'KIM'],
  },
  {
    quote: 'We are ready for anything. Even things we didn’t plan.',
    answer: 'ZELENSKYY',
    options: ['ZELENSKYY', 'TRUMP', 'SUNAK', 'XI'],
  },
]

type Question = {
  question: string
  quote: string
  answer: string
  options: string[]
}

function buildQuestionPool(): Question[] {
  const normalizedMore = moreQuestions.map((q) => ({
    question: 'Who said this?',
    ...q,
  }))

  return [...baseQuestions, ...normalizedMore]
}

function pickRandomQuestions(pool: Question[], count: number): Question[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// --- tiny brain: hardcode questions, galaxy brain: this hook
export default function Home() {
  const allQuestions = useMemo(() => buildQuestionPool(), [])
  const [questions, setQuestions] = useState<Question[]>(() => pickRandomQuestions(allQuestions, 6))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.answer

  const handleAnswerSelect = (answer: string) => {
    if (!answered) {
      setSelectedAnswer(answer)
      setAnswered(true)
      if (answer === question.answer) {
        setScore((prev) => prev + 1)
      }
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setQuizComplete(true)
    } else {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    }
  }

  const handlePlayAgain = () => {
    setQuestions(pickRandomQuestions(allQuestions, 6))
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setScore(0)
    setQuizComplete(false)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background"
    >
      {/* ASCII world map background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15 md:opacity-20">
        <pre className="text-[8px] leading-[8px] md:text-xs md:leading-3 font-mono text-muted-foreground whitespace-pre text-center">
          {asciiWorldMap}
        </pre>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/50 backdrop-blur-sm" />

      <main className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            <span className="text-foreground">That's What They</span>{' '}
            <span className="text-accent">Said</span>
          </h1>
          <p className="text-muted-foreground text-lg">Click to reveal who said this chaos</p>
        </div>

        {/* Progress or Final Screen */}
        {!quizComplete ? (
          <div className="text-center mb-8">
            <p className="text-accent font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        ) : null}

        {/* Game Card or Final Score */}
        {!quizComplete ? (
          <Card className="bg-card/95 border-2 border-accent p-10 mb-8 backdrop-blur-sm">
          {/* Question */}
          <div className="mb-6">
            <p className="text-lg text-muted-foreground font-semibold">{question.question}</p>
          </div>

          {/* Quote */}
          <div className="mb-10">
            <p className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed text-balance">
              "{question.quote}"
            </p>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                disabled={answered}
                className={`w-full p-4 rounded-lg border-2 font-bold text-lg transition-all ${
                  selectedAnswer === option
                    ? isCorrect
                      ? 'border-green-500 bg-green-500/20 text-foreground'
                      : 'border-red-500 bg-red-500/20 text-foreground'
                    : answered && option === question.answer
                    ? 'border-green-500 bg-green-500/20 text-foreground'
                    : 'border-accent/50 hover:border-accent text-foreground hover:bg-accent/10'
                } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Result Message */}
          {answered && (
            <div className="mt-6 text-center">
              {isCorrect ? (
                <p className="text-green-400 font-bold text-lg">✓ Correct!</p>
              ) : (
                <div>
                  <p className="text-red-400 font-bold text-lg mb-2">✗ Incorrect!</p>
                  <p className="text-sm text-muted-foreground">The correct answer is: <span className="text-accent font-bold">{question.answer}</span></p>
                </div>
              )}
            </div>
          )}
          </Card>
        ) : (
          <Card className="bg-card/95 border-2 border-accent p-6 md:p-10 mb-8 backdrop-blur-sm text-center space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-accent mb-4">Quiz Complete!</h2>
              <div className="bg-accent/10 rounded-lg p-6 md:p-8 border-2 border-accent inline-block">
                <p className="text-muted-foreground text-lg mb-2">Final Score</p>
                <p className="text-5xl md:text-7xl font-black text-accent">
                  {score}/{questions.length}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-md">
              <TrumpModel />
            </div>

            <p className="text-lg text-foreground">
              {score === questions.length && "Perfect score! You're a true meme expert!"}
              {score >= 4 && score < questions.length && 'Great job! You know your memes!'}
              {score < 4 && 'Not bad! Want to try again?'}
            </p>

            <Button
              onClick={handlePlayAgain}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-lg w-full"
            >
              Play Again
            </Button>
          </Card>
        )}

        {/* Navigation */}
        {!quizComplete && answered && (
          <div className="text-center">
            <Button
              onClick={handleNextQuestion}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-6 text-lg"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next Question →"}
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
