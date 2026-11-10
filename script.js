// --- QUIZ DATA (15 Ekoloji Sual) ---
const questions = [
    {
        q: "Plastik qabların təbiətdə tam parçalanması təxminən nə qədər vaxt aparır?",
        options: ["10-20 il", "50-100 il", "100-200 il", "400-500 il"],
        correct: 3,
        exp: "Plastik şüşələr və materiallar təbiətdə tam parçalanmaq üçün 450-500 il vaxt tələb edir."
    },
    {
        q: "Aşağıdakılardan hansı bərpa olunan (yaşıl) enerji mənbəyidir?",
        options: ["Kömür", "Təbii Qaz", "Külək Enerjisi", "Neft"],
        correct: 2,
        exp: "Külək, günəş və su enerjisi tükanmaz və ətraf mühitə zərər verməyən bərpa olunan mənbələrdir."
    },
    {
        q: "'Karbon İzi' (Carbon Footprint) nəyi ifadə edir?",
        options: [
            "İnsan fəaliyyəti nəticəsində atmosferə atılan istixana qazlarının miqdarını",
            "Kömür yataqlarının sahəsini",
            "Meşələrin illik sahə azalmasını",
            "Avtomobil təkərlərinin torpaqda qoyduğu izi"
        ],
        correct: 0,
        exp: "Karbon izi gündəlik fəaliyyətlərimizlə birbaşa və ya dolayısı ilə buraxdığımız istixana qazlarının cəmidir."
    },
    {
        q: "Elektrik enerjisinə qənaət etmək üçün hansı işıqlandırma texnologiyası ən səmərəlidir?",
        options: ["Közərmə lampaları", "LED lampalar", "Lüminesens lampalar", "Halogen lampalar"],
        correct: 1,
        exp: "LED lampalar ənənəvi lampalara nisbətən 80%-ə qədər daha az enerji sərf edir və uzunömürlüdür."
    },
    {
        q: "Kompastlaşdırma (Composting) prosesi nədir?",
        options: [
            "Plastiklərin əridilməsi",
            "Üzvi tullantıların təbii gübrəyə çevrilməsi",
            "Elektronika tullantılarının saxlanması",
            "Suyun kimyəvi təmizlənməsi"
        ],
        correct: 1,
        exp: "Kompastlaşdırma qida və bitki tullantılarının mikroorqanizmlər tərəfindən zəngin gübrəyə dönşdürülməsidir."
    },
    {
        q: "Qlobal istiləşməyə ən çox səbəb olan istixana qazı hansıdır?",
        options: ["Oksigen (O2)", "Karbon dioksid (CO2)", "Azot (N2)", "Helium (He)"],
        correct: 1,
        exp: "Fosil yanacaqların yandırılması nəticəsində artan Karbon dioksid (CO2) istiləşmənin əsas səbəbkarıdır."
    },
    {
        q: "Dünyadakı şirin su ehtiyatları ümumi su ehtiyatlarının təxminən neçə faizini təşkil edir?",
        options: ["% 2.5 - 3 %", "% 10 - 15 %", "% 25 - 30 %", "% 50 %"],
        correct: 0,
        exp: "Yer üzündəki suların yalnız 2.5-3%-i şirin sudur və bunun böyük hissəsi buzlaqlardadır."
    },
    {
        q: "'3R' ekoloji prinsipinin mənası nədir?",
        options: [
            "Read, Run, Repeat",
            "Reduce, Reuse, Recycle (Azalt, Yenidən istifadə et, Təkrar emal et)",
            "Real, Rapid, Rare",
            "Rebuild, Restore, Reform"
        ],
        correct: 1,
        exp: "3R modeli tullantıları azaltmaq, əşyaları təkrar işlətmək və emala yönəltmək prinsipidir."
    },
    {
        q: "Biomüxtəliflik (Biodiversity) nəyi bildirir?",
        options: [
            "Müəyyən regiondakı canlı növlərinin müxtəlifliyini",
            "Bitkilərin fotosintez sürətini",
            "Sənaye zonalarının sahəsini",
            "Torpağın münbitlik dərəcəsini"
        ],
        correct: 0,
        exp: "Biomüxtəliflik ekosistemdəki bitki, heyvan və mikroorqanizmlərin zənginliyidir."
    },
    {
        q: "Aşağıdakı tullantılardan hansı 'E-Tullantı' (Elektron tullantı) kateqoriyasına aiddir?",
        options: ["Plastik şüşə", "Köhnə mobil telefon", "Qəzet kağızı", "Qida qalığı"],
        correct: 1,
        exp: "Köhnə batareyalar, komputerlər və telefonlar toksik e-tullantı hesab olunur."
    },
    {
        q: "Okeanların turşulaşmasına (Ocean Acidification) nə səbəb olur?",
        options: [
            "Atmosferdən udulan həddindən artıq CO2 qazı",
            "Neft sızmaları",
            "Plastik tullantılar",
            "Gəmilərin hərəkəti"
        ],
        correct: 0,
        exp: "Okeanlar atmosferdəki CO2-ni udduqda suyun pH səviyyəsi düşür və turşuluq artır."
    },
    {
        q: "Sıfır Tullantı (Zero Waste) konsepsiyasının əsas hədəfi nədir?",
        options: [
            "Tullantıların poliqonlara və təbiətə atılmasının qarşısını almaq",
            "Bütün plastikləri yandırmaq",
            "Kağız istifadəsini ikiqat artırmaq",
            "Şəhərdən kənarda zibilxanalar tikmək"
        ],
        correct: 0,
        exp: "Sıfır tullantı hədəfi resursların dairəvi istifadəsi ilə sıfır zibil formalaşdırmaqdır."
    },
    {
        q: "Fotosintez prosesində bitkilər hansı qazı udur və hansını xaric edir?",
        options: [
            "CO2 udur, Oksigen xaric edir",
            "Oksigen udur, CO2 xaric edir",
            "Azot udur, Metan xaric edir",
            "Helium udur, CO2 xaric edir"
        ],
        correct: 0,
        exp: "Bitkilər günəş işığı ilə CO2 udub havanı təmiz Oksigenlə zənginləşdirir."
    },
    {
        q: "Dövrü İqtisadiyyat (Circular Economy) nədir?",
        options: [
            "Resursların təkrar istifadə olunduğu və tullantısız istehsal modeli",
            "Yalnız kağız pul istifadəsi",
            "İdxaldan asılı iqtisadiyyat",
            "Sürətli istehlak modeli"
        ],
        correct: 0,
        exp: "Dövrü iqtisadiyyat materialların davamlı olaraq dövriyyədə saxlandığı ekoloji sistemdir."
    },
    {
        q: "Ozon təbəqəsinin əsas funksiyası nədir?",
        options: [
            "Yeri Günəşin zərərli ultra-bənövşəyi (UV) şüalarından qorumaq",
            "Yağışın yağmasını təmin etmək",
            "Küləyin sürətini azaltmaq",
            "Atmosferdə oksigen yaratmaq"
        ],
        correct: 0,
        exp: "Ozon təbəqəsi stratosferdə təbii qalxan rolunu oynayaraq UV şüalarını bloklayır."
    }
];

// --- APP STATE ---
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 20;
let playerName = "";
let userAnswers = [];
let streak = 0;
let maxStreak = 0;

// --- DOM ELEMENTS ---
const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const startForm = document.getElementById('start-form');
const usernameInput = document.getElementById('username');
const playerNameDisplay = document.getElementById('player-name-display');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const timerBox = document.getElementById('timer-box');
const currentScoreDisplay = document.getElementById('current-score');
const currentQNumDisplay = document.getElementById('current-q-num');
const progressFill = document.getElementById('progress-fill');
const nextBtn = document.getElementById('next-btn');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const comboBadge = document.getElementById('combo-badge');
const comboCount = document.getElementById('combo-count');

// --- SOUND EFFECTS (Web Audio API) ---
function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'correct') {
            osc.frequency.setValueAtTime(523.25, ctx.currentTime);
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.setValueAtTime(174.61, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        }
    } catch(e) {}
}

// --- NAVIGATION ---
function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// --- GAME LOGIC ---
startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    playerName = usernameInput.value.trim() || "Tələbə";
    playerNameDisplay.innerText = playerName;
    
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    userAnswers = [];
    currentScoreDisplay.innerText = "0";
    
    switchScreen('quiz');
    loadQuestion();
});

function loadQuestion() {
    resetTimer();
    explanationBox.classList.add('hidden');
    nextBtn.classList.add('hidden');
    
    const q = questions[currentQuestionIndex];
    questionText.innerText = q.q;
    currentQNumDisplay.innerText = currentQuestionIndex + 1;
    progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option-card';
        btn.innerHTML = `<span>${opt}</span> <i class="fa-regular fa-circle"></i>`;
        btn.addEventListener('click', () => selectOption(idx));
        optionsContainer.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    timeLeft = 20;
    timerDisplay.innerText = timeLeft;
    timerBox.classList.remove('warning');
    
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        
        if (timeLeft <= 5) {
            timerBox.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(-1); // Timeout
        }
    }, 1000);
}

function resetTimer() {
    if (timer) clearInterval(timer);
}

function selectOption(selectedIndex) {
    resetTimer();
    const q = questions[currentQuestionIndex];
    const optionCards = optionsContainer.children;
    
    // Disable all options
    for (let card of optionCards) {
        card.classList.add('disabled');
    }

    const isCorrect = selectedIndex === q.correct;
    
    if (isCorrect) {
        playSound('correct');
        score += 10 + (streak * 2); // Bonus score for streak
        streak++;
        if (streak > maxStreak) maxStreak = streak;
        
        if (streak >= 2) {
            comboCount.innerText = streak;
            comboBadge.classList.remove('hidden');
        }
        
        if (selectedIndex >= 0) {
            optionCards[selectedIndex].classList.add('correct');
            optionCards[selectedIndex].querySelector('i').className = 'fa-solid fa-circle-check';
        }
    } else {
        playSound('wrong');
        streak = 0;
        comboBadge.classList.add('hidden');
        
        if (selectedIndex >= 0) {
            optionCards[selectedIndex].classList.add('wrong');
            optionCards[selectedIndex].querySelector('i').className = 'fa-solid fa-circle-xmark';
        }
        // Highlight correct option
        optionCards[q.correct].classList.add('correct');
        optionCards[q.correct].querySelector('i').className = 'fa-solid fa-circle-check';
    }

    currentScoreDisplay.innerText = score;

    // Save history
    userAnswers.push({
        question: q.q,
        selected: selectedIndex >= 0 ? q.options[selectedIndex] : "Vaxt bitdi",
        correct: q.options[q.correct],
        isCorrect: isCorrect,
        explanation: q.exp
    });

    // Show explanation
    explanationText.innerText = q.exp;
    explanationBox.classList.remove('hidden');

    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove('hidden');
    } else {
        nextBtn.innerHTML = `<span>Nəticəyə Bax</span> <i class="fa-solid fa-trophy"></i>`;
        nextBtn.classList.remove('hidden');
    }
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// --- RESULTS & LEADERBOARD ---
function showResults() {
    switchScreen('result');
    
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const wrongCount = questions.length - correctCount;
    
    document.getElementById('res-player-name').innerText = playerName;
    document.getElementById('final-score').innerText = `${correctCount} / ${questions.length}`;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;
    document.getElementById('max-streak').innerText = maxStreak;

    // Determine status based on document rules
    let status = "";
    let desc = "";
    let icon = "🌱";

    if (correctCount >= 13) {
        status = "🌿 Eko-Ekspert";
        desc = "Mükəmməl! Ekologiya və davamlılıq üzrə dərin biliklərə maliksiniz.";
        icon = "🏆";
    } else if (correctCount >= 9) {
        status = "🌱 Eko-Həvəskar";
        desc = "Çox yaxşı! Ekoloji mövzularda yüksək farkındalığınız var.";
        icon = "⭐";
    } else if (correctCount >= 5) {
        status = "🍃 Eko-Tələbə";
        desc = "Yaxşı cəhd! Ekoloji biliklərinizi daha da inkişaf etdirə bilərsiniz.";
        icon = "🎓";
    } else {
        status = "🌐 Eko-Yolun Başlanğıcında";
        desc = "Təbiəti qorumaq öyrənməkdən başlayır. Yenidən sınaqdan keçin!";
        icon = "🌍";
    }

    document.getElementById('status-badge').innerText = status;
    document.getElementById('status-desc').innerText = desc;
    document.getElementById('status-icon').innerText = icon;

    saveToLeaderboard(playerName, score, status);
}

function saveToLeaderboard(name, scoreVal, statusVal) {
    let lb = JSON.parse(localStorage.getItem('eco_quiz_lb') || '[]');
    lb.push({ name, score: scoreVal, status: statusVal, date: new Date().toLocaleDateString() });
    lb.sort((a, b) => b.score - a.score);
    lb = lb.slice(0, 10); // Top 10
    localStorage.setItem('eco_quiz_lb', JSON.stringify(lb));
}

function renderLeaderboard() {
    const lb = JSON.parse(localStorage.getItem('eco_quiz_lb') || '[]');
    const tbody = document.getElementById('lb-table-body');
    tbody.innerHTML = '';
    
    if (lb.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Hələ ki nəticə yoxdur.</td></tr>`;
        return;
    }

    lb.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>#${index + 1}</strong></td>
            <td>${item.name}</td>
            <td><strong>${item.score}</strong></td>
            <td><small>${item.status}</small></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderReview() {
    const list = document.getElementById('review-list');
    list.innerHTML = '';
    
    userAnswers.forEach((ans, idx) => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-q">${idx + 1}. ${ans.question}</div>
            <div class="review-ans" style="color: ${ans.isCorrect ? 'var(--correct)' : 'var(--wrong)'}">
                Sizin cavab: <strong>${ans.selected}</strong> ${ans.isCorrect ? '✓' : '✗'}
            </div>
            ${!ans.isCorrect ? `<div class="review-ans" style="color: var(--correct)">Düzgün cavab: <strong>${ans.correct}</strong></div>` : ''}
            <div class="review-exp">${ans.explanation}</div>
        `;
        list.appendChild(item);
    });
}

// --- BUTTON EVENTS ---
document.getElementById('restart-btn').addEventListener('click', () => switchScreen('welcome'));
document.getElementById('open-lb-btn').addEventListener('click', () => {
    renderLeaderboard();
    document.getElementById('lb-modal').classList.add('active');
});
document.getElementById('close-lb').addEventListener('click', () => document.getElementById('lb-modal').classList.remove('active'));

document.getElementById('review-btn').addEventListener('click', () => {
    renderReview();
    document.getElementById('review-modal').classList.add('active');
});
document.getElementById('close-review').addEventListener('click', () => document.getElementById('review-modal').classList.remove('active'));
