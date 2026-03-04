import React, { useState } from 'react';

const HobbyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0, E: 0 });
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      question: "What frustrates you most about activities?",
      answers: [
        { text: "When there's only one 'right' way to do it", score: 'A' },
        { text: "When progress feels stuck or unclear", score: 'B' },
        { text: "When it feels pointless or selfish", score: 'C' },
        { text: "When I have to do it alone", score: 'D' },
        { text: "When it adds stress instead of relieving it", score: 'E' }
      ]
    },
    {
      question: "When you have free time, what do you actually want to do?",
      answers: [
        { text: "Create something that's uniquely mine", score: 'A' },
        { text: "Get better at something I'm working on", score: 'B' },
        { text: "Do something that helps someone else", score: 'C' },
        { text: "Do it with people I care about", score: 'D' },
        { text: "Decompress and find some peace", score: 'E' }
      ]
    },
    {
      question: "What makes you actually stick with something?",
      answers: [
        { text: "Creative freedom and no rules", score: 'A' },
        { text: "Seeing measurable improvement", score: 'B' },
        { text: "Knowing it makes a real difference", score: 'C' },
        { text: "Having people doing it with me", score: 'D' },
        { text: "How calm and centered it makes me feel", score: 'E' }
      ]
    },
    {
      question: "When you're stressed or overwhelmed, you tend to:",
      answers: [
        { text: "Want to create something to express yourself", score: 'A' },
        { text: "Want to learn or master something challenging", score: 'B' },
        { text: "Want to help others or contribute to something", score: 'C' },
        { text: "Want to be around people", score: 'D' },
        { text: "Want to slow down and find calm", score: 'E' }
      ]
    },
    {
      question: "What's the ultimate sign that a hobby is working for you?",
      answers: [
        { text: "It's an outlet for my ideas and personality", score: 'A' },
        { text: "I can see myself getting noticeably better", score: 'B' },
        { text: "It makes me feel like I'm contributing something meaningful", score: 'C' },
        { text: "I look forward to doing it with my people", score: 'D' },
        { text: "It genuinely helps me decompress and reset", score: 'E' }
      ]
    },
    {
      question: "If you could only do ONE hobby, you'd choose one where:",
      answers: [
        { text: "You have total creative control", score: 'A' },
        { text: "You can continuously level up", score: 'B' },
        { text: "You're making a real impact", score: 'C' },
        { text: "You're doing it with others", score: 'D' },
        { text: "It genuinely relaxes you", score: 'E' }
      ]
    },
    {
      question: "When learning something new, what matters most?",
      answers: [
        { text: "Freedom to experiment and do it my way", score: 'A' },
        { text: "Clear progression and skill benchmarks", score: 'B' },
        { text: "How it contributes to something bigger", score: 'C' },
        { text: "Having community support and accountability", score: 'D' },
        { text: "That it doesn't add pressure or stress", score: 'E' }
      ]
    },
    {
      question: "What would actually make you quit a hobby?",
      answers: [
        { text: "Feeling like I have to follow rigid instructions", score: 'A' },
        { text: "Hitting a plateau where I stop improving", score: 'B' },
        { text: "Realizing it's not helping anyone or anything", score: 'C' },
        { text: "Doing it alone without community", score: 'D' },
        { text: "It becoming another stressful obligation", score: 'E' }
      ]
    },
    {
      question: "When choosing what to do with your time, you prioritize:",
      answers: [
        { text: "Expressing yourself and being authentic", score: 'A' },
        { text: "Challenging yourself and growing", score: 'B' },
        { text: "Making a positive impact", score: 'C' },
        { text: "Quality time with people you care about", score: 'D' },
        { text: "Peace, balance, and presence", score: 'E' }
      ]
    },
    {
      question: "What gets you excited about a new hobby?",
      answers: [
        { text: "The possibility to make it completely your own", score: 'A' },
        { text: "The chance to master a new skill", score: 'B' },
        { text: "The chance to contribute or help", score: 'C' },
        { text: "Sharing it with friends or a community", score: 'D' },
        { text: "How calming and meditative it could be", score: 'E' }
      ]
    },
    {
      question: "In your ideal hobby, the goal is to:",
      answers: [
        { text: "Create something uniquely you", score: 'A' },
        { text: "Become really skilled at it", score: 'B' },
        { text: "Make a meaningful difference", score: 'C' },
        { text: "Do it with people who get it", score: 'D' },
        { text: "Feel more grounded and at peace", score: 'E' }
      ]
    },
    {
      question: "What kind of feedback motivates you most?",
      answers: [
        { text: "Recognition of your unique creative style", score: 'A' },
        { text: "Proof that you've improved significantly", score: 'B' },
        { text: "Knowing you've helped or impacted someone", score: 'C' },
        { text: "Encouragement from people you trust", score: 'D' },
        { text: "Feeling genuinely peaceful or restored", score: 'E' }
      ]
    },
    {
      question: "What would make a hobby feel like a waste of time?",
      answers: [
        { text: "Having to follow someone else's rules or formula", score: 'A' },
        { text: "Not seeing any clear progress or improvement", score: 'B' },
        { text: "Feeling like it's selfish or doesn't matter", score: 'C' },
        { text: "Doing it completely alone", score: 'D' },
        { text: "It leaving you feeling more stressed than before", score: 'E' }
      ]
    },
    {
      question: "When you think about your ideal hobby, you imagine:",
      answers: [
        { text: "Complete creative freedom to express yourself", score: 'A' },
        { text: "Clear milestones showing you're getting better", score: 'B' },
        { text: "Contributing something valuable to others", score: 'C' },
        { text: "Quality time with people you care about", score: 'D' },
        { text: "Finding calm, balance, and genuine peace", score: 'E' }
      ]
    }
  ];

  const archetypes = {
    A: {
      title: "🎨 You're an Autonomy Type",
      description: "You thrive on creative freedom and doing things your way. The best hobbies for you are ones where you can experiment and make it uniquely yours.",
      link: "https://open.substack.com/pub/noteswnat/p/make-it-your-way-hobbies-for-the?r=60dinn&utm_campaign=post&utm_medium=web"
    },
    B: {
      title: "🏆 You're a Mastery Type",
      description: "You're driven by progression and getting really good at something. The best hobbies for you are ones where you can see yourself improving month after month.",
      link: "https://open.substack.com/pub/noteswnat/p/level-up-hobbies-for-people-obsessed?r=60dinn&utm_campaign=post&utm_medium=web"
    },
    C: {
      title: "🤝 You're a Purpose Type",
      description: "You need your hobbies to feel meaningful and make a difference. The best hobbies for you are ones where you're helping others or building community.",
      link: "https://open.substack.com/pub/noteswnat/p/make-it-matter-hobbies-that-create?r=60dinn&utm_campaign=post&utm_medium=web"
    },
    D: {
      title: "👥 You're a Connection Type",
      description: "You thrive when doing hobbies with people. The best hobbies for you are ones where you have people to do it with—whether friends, groups, or teams.",
      link: "https://open.substack.com/pub/noteswnat/p/do-it-together-hobbies-built-on-community?r=60dinn&utm_campaign=post&utm_medium=web"
    },
    E: {
      title: "🧘 You're a Restoration Type",
      description: "You need hobbies that help you decompress and find balance. The best hobbies for you are calming, meditative, and grounding—not another thing to achieve.",
      link: "https://open.substack.com/pub/noteswnat/p/slow-down-hobbies-that-actually-help?r=60dinn&utm_campaign=post&utm_medium=web"
    }
  };

  const handleAnswer = (scoreType) => {
    const newScores = { ...scores };
    newScores[scoreType] += 1;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const getArchetype = () => {
    let maxScore = 0;
    let archetype = 'A';
    for (const [key, value] of Object.entries(scores)) {
      if (value > maxScore) {
        maxScore = value;
        archetype = key;
      }
    }
    return archetype;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    const archetype = getArchetype();
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzwir30ye7UWVCTQnx3To_5wjSThhYrtstLiv9FPUn2XmrKsgaXufTAal75VIdRhgmwPg/exec';

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          archetype: archetype
        })
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setLoading(false);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    setCompleted(false);
    setEmail('');
    setShowResults(false);
  };

  const archetype = getArchetype();
  const archetypeData = archetypes[archetype];

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, #0E3C58 0%, #0E3C58 50%, #A5BBFF 100%)`,
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: '#F1F1F1',
        borderRadius: '16px',
        padding: '40px 30px',
        boxShadow: '0 20px 60px rgba(14, 60, 88, 0.15)'
      }}>
        {/* Header */}
        {!completed && !showResults && (
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#0E3C58',
              margin: '0 0 10px 0',
              lineHeight: '1.2'
            }}>
              Find Your Hobby Archetype
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#666',
              margin: '0',
              lineHeight: '1.5'
            }}>
              Answer {questions.length} quick questions about what actually motivates you
            </p>
          </div>
        )}

        {/* Progress Bar */}
        {!completed && !showResults && (
          <div style={{
            width: '100%',
            height: '6px',
            background: '#E0E0E0',
            borderRadius: '3px',
            marginBottom: '30px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              background: `linear-gradient(90deg, #0E3C58 0%, #A5BBFF 100%)`,
              transition: 'width 0.3s ease'
            }} />
          </div>
        )}

        {/* Question */}
        {!completed && !showResults && (
          <div>
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#0E3C58',
              margin: '0 0 24px 0',
              lineHeight: '1.4'
            }}>
              {questions[currentQuestion].question}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {questions[currentQuestion].answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(answer.score)}
                  style={{
                    padding: '16px 20px',
                    background: '#FFFFFF',
                    border: '2px solid #E0E0E0',
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: '#333',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#0E3C58';
                    e.target.style.background = '#F9F9F9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#E0E0E0';
                    e.target.style.background = '#FFFFFF';
                  }}
                >
                  {answer.text}
                </button>
              ))}
            </div>

            <div style={{
              marginTop: '24px',
              fontSize: '14px',
              color: '#999',
              textAlign: 'center'
            }}>
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        )}

        {/* Email Capture */}
        {completed && !showResults && (
          <div>
            <h2 style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#0E3C58',
              margin: '0 0 12px 0'
            }}>
              Almost done!
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#666',
              margin: '0 0 24px 0',
              lineHeight: '1.5'
            }}>
              Enter your email to get your hobby archetype results and recommendations.
            </p>

            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '16px',
                  border: '2px solid #E0E0E0',
                  borderRadius: '10px',
                  marginBottom: '16px',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: '#0E3C58',
                  color: '#F1F1F1',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s ease',
                  opacity: loading ? 0.7 : 1
                }}
                onMouseEnter={(e) => !loading && (e.target.style.background = '#0A2A3F')}
                onMouseLeave={(e) => !loading && (e.target.style.background = '#0E3C58')}
              >
                {loading ? 'Sending...' : 'See My Results →'}
              </button>
            </form>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#0E3C58',
                margin: '0 0 16px 0'
              }}>
                {archetypeData.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#555',
                lineHeight: '1.6',
                margin: '0 0 24px 0'
              }}>
                {archetypeData.description}
              </p>
            </div>

            <a
              href={archetypeData.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#0E3C58',
                color: '#F1F1F1',
                textDecoration: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '20px',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#0A2A3F'}
              onMouseLeave={(e) => e.target.style.background = '#0E3C58'}
            >
              Read the Full Guide →
            </a>

            <button
              onClick={resetQuiz}
              style={{
                display: 'block',
                margin: '20px auto 0',
                padding: '12px 24px',
                background: 'transparent',
                color: '#0E3C58',
                border: '2px solid #0E3C58',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0E3C58';
                e.target.style.color = '#F1F1F1';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#0E3C58';
              }}
            >
              Take Quiz Again
            </button>
          </div>
        )}
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        color: '#F1F1F1',
        fontSize: '14px'
      }}>
        <p style={{ margin: '0' }}>
          Made by Natalia • Notes w/ Nat
        </p>
      </div>
    </div>
  );
};

export default HobbyQuiz;

