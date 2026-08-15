/* ========== PLAYGROUND & MINI-GAMES DATA ========== */
export const playgroundHeader = {
  eyebrow: 'Fun & Games',
  title: 'Space Arcade',
  titleAccent: 'Arcade',
  sub: 'Four space-flavored dev mini-games — test your orbits, keywords, memory, and speed. High scores persist on this device.',
  fallbackLoadingText: 'Loading module…',
};

export const gamesData = [
  {
    id: 'circle',
    name: 'Perfect Orbit',
    tag: 'Orbit',
    icon: '◯',
    color: '#7c5cff',
    desc: 'Draw a smooth planetary orbit in one continuous sweep. Score is orbit roundness.',
    bestIsHigher: true,
    bestType: 'percent',
  },
  {
    id: 'typing',
    name: 'Typing',
    tag: 'Flight Code',
    icon: '⌨',
    color: '#22d3ee',
    desc: 'Type real space-flight and dev code snippets. Measures WPM and accuracy.',
    bestIsHigher: true,
    bestType: 'wpm',
  },
  {
    id: 'memory',
    name: 'Stack Match',
    tag: 'Memory',
    icon: '🧠',
    color: '#ec4899',
    desc: 'Flip cosmic cards to match tech-stack pairs. Fewer moves = better rank.',
    bestIsHigher: false,
    bestType: 'moves',
  },
  {
    id: 'hangman',
    name: 'Cosmic Cipher',
    tag: 'Deep Space',
    icon: '🛰️',
    color: '#fb7185',
    desc: 'Decrypt the tech keyword before cosmic radar signal drops.',
    bestIsHigher: true,
    bestType: 'streak',
  },
];

export const hangmanData = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  maxWrong: 6,
  words: [
    // Easy & core Tech stack words
    { word: 'GOLANG',         hint: 'Fast compiled Go backend language' },
    { word: 'POSTGRESQL',     hint: 'Relational SQL database' },
    { word: 'SELENIUM',       hint: 'Browser web automation framework' },
    { word: 'REST',           hint: 'Standard web API architecture' },
    { word: 'REACT',          hint: 'Component-based UI frontend library' },
    { word: 'JAVA',           hint: 'Enterprise object-oriented language' },
    { word: 'JAVASCRIPT',     hint: 'The core programming language of the web' },
    { word: 'PYTHON',         hint: 'Popular language for automation & data' },
    { word: 'SQL',            hint: 'Structured database query language' },
    { word: 'DOCKER',         hint: 'Containerization tool for applications' },
    { word: 'GIT',            hint: 'Code version control system' },
    { word: 'SERVER',         hint: 'Computer system delivering app data' },
    { word: 'CLIENT',         hint: 'App or browser requesting backend data' },
    { word: 'BUG',            hint: 'An unexpected coding error or defect' },
    { word: 'COMMIT',         hint: 'Saving code changes in Git' },
    { word: 'API',            hint: 'Interface connecting software applications' },
    { word: 'DATABASE',       hint: 'Where application data is stored' },

    // Easy & fun Space vocabulary
    { word: 'APOLLO',         hint: 'Famous NASA lunar space program' },
    { word: 'ORBIT',          hint: 'Path of a satellite around a planet' },
    { word: 'ROCKET',         hint: 'Vehicle launched into space' },
    { word: 'NEBULA',         hint: 'Interstellar cloud of cosmic gas & dust' },
    { word: 'GALAXY',         hint: 'Massive system of billions of stars' },
    { word: 'SATURN',         hint: 'Planet famed for its prominent rings' },
    { word: 'ROVER',          hint: 'Robotic vehicle exploring Mars terrain' },
    { word: 'METEOR',         hint: 'Space rock falling through atmosphere' },
    { word: 'STATION',        hint: 'Habitable satellite in Earth orbit' },
    { word: 'BEACON',         hint: 'Transmitting radio signal in deep space' },
    { word: 'PULSAR',         hint: 'Rotating neutron star emitting signals' },
  ],
  messages: {
    winToast: '🎉 Signal decrypted!',
    loseToast: (word) => `📡 Signal lost! The word was ${word}`,
    winResult: (streak) => `🎉 You got it! Streak: ${streak}`,
    loseResult: (word) => `💀 The word was "${word}"`,
  },
};

export const memoryMatchData = {
  gameIntro: 'Flip two cards. Match all 12 pairs in the fewest moves.',
  techPairs: [
    { id: 'golang',     label: 'Golang',      emoji: '🐹',  color: '#00add8' },
    { id: 'postgres',   label: 'PostgreSQL',  emoji: '🐘',  color: '#336791' },
    { id: 'selenium',   label: 'Selenium',    emoji: '🤖',  color: '#43b02a' },
    { id: 'rest',       label: 'REST Assured',emoji: '⚡',  color: '#f59e0b' },
    { id: 'react',      label: 'React',       emoji: '⚛️',  color: '#22d3ee' },
    { id: 'java',       label: 'Java',        emoji: '☕',  color: '#e76f51' },
    { id: 'js',         label: 'JavaScript',  emoji: '🟨',  color: '#f7df1e' },
    { id: 'sql',        label: 'SQL Query',   emoji: '📊',  color: '#38bdf8' },
    { id: 'docker',     label: 'Docker',      emoji: '🐳',  color: '#2496ed' },
    { id: 'git',        label: 'Git',         emoji: '🌿',  color: '#f05032' },
    { id: 'postman',    label: 'Postman API', emoji: '🚀',  color: '#ff6c37' },
    { id: 'micro',      label: 'Microservices',emoji: '🧩', color: '#a855f7' },
    { id: 'k8s',        label: 'Kubernetes',  emoji: '☸️',  color: '#326ce5' },
  ],
  spacePairs: [
    { id: 'telescope',  label: 'Webb Scope',  emoji: '🔭',  color: '#eab308' },
    { id: 'rover',      label: 'Mars Rover',  emoji: '🚜',  color: '#ef4444' },
    { id: 'nebula',     label: 'Cosmic Nebula',emoji: '🌌', color: '#c084fc' },
    { id: 'saturn',     label: 'Ringed Saturn',emoji: '🪐', color: '#f59e0b' },
    { id: 'blackhole',  label: 'Black Hole',  emoji: '🕳️',  color: '#94a3b8' },
    { id: 'comet',      label: 'Space Comet', emoji: '☄️',  color: '#38bdf8' },
    { id: 'astronaut',  label: 'Spacewalker', emoji: '👨‍🚀', color: '#38bdf8' },
    { id: 'rocket',     label: 'Falcon Booster',emoji: '🚀', color: '#ef4444' },
    { id: 'station',    label: 'Space Station',emoji: '🛸', color: '#22d3ee' },
    { id: 'sun',        label: 'Solar Array', emoji: '☀️',  color: '#eab308' },
    { id: 'supernova',  label: 'Supernova',   emoji: '💥',  color: '#f97316' },
  ],
};

export const typingTestData = {
  gameIntro: 'Type the snippet below as quickly & accurately as you can. Timer starts on your first keystroke.',
  placeholder: 'Click here and start typing…',
  snippets: [
    `func GetOrdersHandler(w http.ResponseWriter, r *http.Request) {
  vars := mux.Vars(r)
  orders, err := store.GetOrdersByUserID(r.Context(), vars["id"])
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }
  json.NewEncoder(w).Encode(orders)
}`,
    `const fetchUser = async (id) => {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error("User payload failed");
  return res.json();
};`,
    `Response response = given()
  .header("Content-Type", "application/json")
  .body(requestPayload)
  .when()
  .post("/api/v1/auth/login")
  .then()
  .statusCode(200)
  .extract().response();`,
    `SELECT u.id, u.email, COUNT(t.id) AS total_tx
FROM users u
LEFT JOIN transactions t ON t.user_id = u.id
WHERE u.status = 'ACTIVE'
GROUP BY u.id, u.email
HAVING COUNT(t.id) > 10;`,
  ],
};

export const memorySequenceData = {
  gameIntro: 'Watch the sequence, then repeat it by tapping the pads in the same order. Each round adds one more step.',
  pads: [
    { id: 0, name: 'Red',    color: '#ef4444', glow: '#fca5a5', freq: 329.63 },
    { id: 1, name: 'Green',  color: '#22c55e', glow: '#86efac', freq: 261.63 },
    { id: 2, name: 'Blue',   color: '#3b82f6', glow: '#93c5fd', freq: 392.0  },
    { id: 3, name: 'Yellow', color: '#f59e0b', glow: '#fcd34d', freq: 440.0  },
  ],
  statusLabels: {
    idle: 'Press start to begin',
    showing: 'Watch the sequence…',
    input: (userIdx, round) => `Your turn — step ${userIdx + 1} / ${round}`,
    gameover: 'Game over',
  },
};

export const perfectCircleData = {
  gameIntro: 'Hold and drag (or touch) inside the cosmic grid to draw a planetary orbit in one stroke. Release to measure orbital precision.',
  captions: {
    perfect: 'Perfect planetary orbit!',
    stable: 'Stable trajectory!',
    decent: 'Decent orbital path.',
    unstable: 'Unstable orbit — practice entry.',
    offCourse: 'Off-course trajectory!',
  },
};
