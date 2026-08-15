/* ========== PLAYGROUND & MINI-GAMES DATA ========== */
export const playgroundHeader = {
  eyebrow: 'Fun & Games',
  title: 'Space Arcade',
  titleAccent: 'Arcade',
  sub: 'Six space-flavored dev mini-games — test your orbits, signals, telemetry, and speed. High scores persist on this device.',
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
    id: 'sequence',
    name: 'Starlight Sequence',
    tag: 'Signals',
    icon: '🎵',
    color: '#22c55e',
    desc: 'Watch the constellation beacons, repeat the signal pattern. Each round adds one step.',
    bestIsHigher: true,
    bestType: 'round',
  },
  {
    id: 'bug',
    name: 'Asteroid Bug Hunter',
    tag: 'Telemetry',
    icon: '🐛',
    color: '#f59e0b',
    desc: 'Spot the buggy line in real space-probe code. 5 telemetry puzzles, no hints.',
    bestIsHigher: true,
    bestType: 'scoreMax',
    maxScore: 5,
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

export const bugHunterData = {
  gameIntro: 'Click the line that contains the system bug.',
  puzzles: [
    {
      lang: 'Golang',
      title: 'HTTP Response Memory Leak',
      code: [
        'func FetchTelemetry(url string) (*Telemetry, error) {',
        '  resp, err := http.Get(url)',
        '  if err != nil { return nil, err }',
        '  var data Telemetry',
        '  json.NewDecoder(resp.Body).Decode(&data)',
        '  return &data, nil',
        '}',
      ],
      bug: 4,
      explain: 'Missing `defer resp.Body.Close()`. Unclosed HTTP response bodies leak TCP connections under high concurrency.',
    },
    {
      lang: 'Java / REST Assured',
      title: 'Unasserted HTTP Status Code',
      code: [
        'public Response getUserProfile(int userId) {',
        '  return given()',
        '    .header("Authorization", token)',
        '    .when()',
        '    .get("/api/v1/users/" + userId);',
        '}',
      ],
      bug: 4,
      explain: 'Missing `.then().statusCode(200)` assertion before returning response, allowing HTTP 500 error responses to pass silently.',
    },
    {
      lang: 'SQL (PostgreSQL)',
      title: 'Vulnerable Query Concatenation',
      code: [
        'string query = "SELECT * FROM users " +',
        '              "WHERE role = \'" + userRole + "\'";',
        'var rows = db.Query(query);',
        'return rows;',
      ],
      bug: 0,
      explain: 'String concatenation in SQL queries invites SQL injection. Use parameterized queries ($1, $2) in PostgreSQL.',
    },
    {
      lang: 'JavaScript / React',
      title: 'Direct State Object Mutation',
      code: [
        'function updateScore(user, newScore) {',
        '  user.score = newScore;',
        '  setUser(user);',
        '}',
      ],
      bug: 1,
      explain: 'Directly mutating state objects prevents React re-renders. Always return a new object: `{ ...user, score: newScore }`.',
    },
    {
      lang: 'Selenium / Java',
      title: 'Flaky Hardcoded Sleep Synchronization',
      code: [
        'public void clickSubmitButton() {',
        '  driver.findElement(By.id("submit")).click();',
        '  Thread.sleep(5000);',
        '  Assert.assertTrue(driver.findElement(By.id("success")).isDisplayed());',
        '}',
      ],
      bug: 2,
      explain: 'Never use hardcoded `Thread.sleep()`. Use `WebDriverWait` and `ExpectedConditions.visibilityOfElementLocated` for reliable synchronization.',
    },
  ],
  messages: {
    correct: '✅ Anomaly identified.',
    wrong: '❌ Incorrect target.',
    master: '🛸 Master telemetry engineer.',
    sharp: '👀 Sharp telemetry eye.',
    fail: 'Anomaly detected — try again!',
  },
};

export const hangmanData = {
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  maxWrong: 6,
  words: [
    { word: 'GOLANG',         hint: 'Fast compiled Go backend runtime' },
    { word: 'POSTGRESQL',     hint: 'Powerful open-source relational database' },
    { word: 'SELENIUM',       hint: 'Browser automation framework for web testing' },
    { word: 'RESTASSURED',    hint: 'Java library for automating REST APIs' },
    { word: 'JAVASCRIPT',     hint: 'The language of the web' },
    { word: 'REACT',          hint: "Meta's component-based UI library" },
    { word: 'MICROSERVICES',  hint: 'Architecture made of many small services' },
    { word: 'JAVA',           hint: 'Object-oriented language for enterprise automation' },
    { word: 'AUTOMATION',     hint: 'Executing tests without manual effort' },
    { word: 'DATABASE',       hint: 'Where structured data lives' },
    { word: 'FUNCTION',       hint: 'A reusable block of code' },
    { word: 'COMPONENT',      hint: 'A reusable UI building block' },
    { word: 'DEPLOYMENT',     hint: 'Releasing code to production' },
    { word: 'FRONTEND',       hint: 'The part of an app the user sees' },
    { word: 'BACKEND',        hint: 'Server-side logic and data' },
    { word: 'DEBUGGING',      hint: 'Finding and fixing problems in code' },
    { word: 'REPOSITORY',     hint: 'A versioned project folder (Git)' },
    { word: 'FRAMEWORK',      hint: 'Skeleton library you build apps on' },
    { word: 'CONTAINER',      hint: 'Lightweight isolated runtime (Docker)' },
    { word: 'PIPELINE',       hint: 'Automated CI/CD build & test flow' },
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
