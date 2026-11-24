
    // 選択された性別
    let selectedGender = "";

    // 4項目・全17問
    
const exerciseQuestions = [
    // ① 運動習慣
    { category: "運動習慣", text: "よく体を動かしている", reverse: false },
    { category: "運動習慣", text: "運動する時間を作っている", reverse: false },
    { category: "運動習慣", text: "運動不足な気がする", reverse: true },

    // ② 日常活動量
    { category: "日常活動量", text: "近い場所は歩いて行くほうだ", reverse: false },
    { category: "日常活動量", text: "長時間座りっぱなしは避けている", reverse: false },
    { category: "日常活動量", text: "エレベーターより階段派", reverse: false },

    // ③ 体力
    { category: "体力", text: "長時間歩くのも平気", reverse: false },
    { category: "体力", text: "階段でも疲れない", reverse: false },
    { category: "体力", text: "すぐ息切れしちゃう", reverse: true },
    { category: "体力", text: "体力なら任せて", reverse: false },

    // ④ 継続力
    { category: "継続力", text: "いつも三日坊主", reverse: true },
    { category: "継続力", text: "モチベがないとやる気が出ない", reverse: true },
    { category: "継続力", text: "運動を始めたらしばらく続けられる", reverse: false },

    // ⑤ 運動への意識・楽しさ
    { category: "運動への意識・楽しさ", text: "運動だいすき！", reverse: false },
    { category: "運動への意識・楽しさ", text: "忙しくても運動はしたい", reverse: false },
    { category: "運動への意識・楽しさ", text: "新しく体を動かすことに挑戦したい", reverse: false },
    { category: "運動への意識・楽しさ", text: "体を動かすと気分がスッキリする", reverse: false }
];


/* 初期画面の診断カード選択 */

const diagnosisCards = document.querySelectorAll(".diagnosis-card");
const categorySelect = document.getElementById("category");

diagnosisCards.forEach(card => {
    card.addEventListener("click", function() {

        // すべての選択を解除
        diagnosisCards.forEach(item => {
            item.classList.remove("selected");
        });

        // クリックしたカードを選択
        this.classList.add("selected");

        // 診断分野を保存
        categorySelect.value = this.dataset.category;
    });
});

    
const foodQuestions = [
    // ① 食事のリズム
    {
        category: "食事のリズム",
        text: "食事時間が決まっている",
        reverse: false
    },
    {
        category: "食事のリズム",
        text: "忙しいと食事を抜くことがある",
        reverse: true
    },
    {
        category: "食事のリズム",
        text: "夜遅い時間の食事が多い",
        reverse: true
    },

    // ② 食べる量・スピード
    {
        category: "食べる量・スピード",
        text: "いつもお腹いっぱいになるまで食べる",
        reverse: true
    },
    {
        category: "食べる量・スピード",
        text: "食事をするスピードが速いと思う",
        reverse: true
    },
    {
        category: "食べる量・スピード",
        text: "スマホを見ながら食事することが多い",
        reverse: true
    },

    // ③ 食べ物の選び方
    {
        category: "食べ物の選び方",
        text: "野菜や果物を意識して食べている",
        reverse: false
    },
    {
        category: "食べ物の選び方",
        text: "食べ物を選ぶとき、今食べたいものを選ぶ",
        reverse: true
    },
    {
        category: "食べ物の選び方",
        text: "コンビニや外食でも、栄養バランスを考えている",
        reverse: false
    },

    // ④ 間食・飲み物
    {
        category: "間食・飲み物",
        text: "お腹が空いていなくても、お菓子を食べちゃう",
        reverse: true
    },
    {
        category: "間食・飲み物",
        text: "小腹が空いたとき、何か買っちゃう",
        reverse: true
    },
    {
        category: "間食・飲み物",
        text: "水やお茶などを普段からよく飲む",
        reverse: false
    },

    // ⑤ 食事との付き合い方
    {
        category: "食事との付き合い方",
        text: "ストレスや疲れを感じると、食べる量が増える",
        reverse: true
    },
    {
        category: "食事との付き合い方",
        text: "食べすぎた次の日は、食事を極端に減らすことがある",
        reverse: true
    },
    {
        category: "食事との付き合い方",
        text: "自分の食生活について、もう少し改善したいと思っている",
        reverse: false
    }
];
	
const sleepQuestions = [
    // ① 睡眠リズム
    { category: "睡眠リズム", text: "同じ時間に寝て起きる", reverse: false },
    { category: "睡眠リズム", text: "日によって就寝時間が変わる", reverse: true },
    { category: "睡眠リズム", text: "休日は平日よりかなり長く寝てしまう", reverse: true },

    // ② 朝の回復力
    { category: "朝の回復力", text: "目覚めたときにスッキリしている", reverse: false },
    { category: "朝の回復力", text: "朝は頭が働かない", reverse: true },
    { category: "朝の回復力", text: "二度寝してしまうことが多い", reverse: true },

    // ③ 休息力
    { category: "休息力", text: "布団に入ると比較的すぐ眠れる", reverse: false },
    { category: "休息力", text: "夜中に目が覚めることがある", reverse: true },
    { category: "休息力", text: "十分寝ても日中に眠くなる", reverse: true },

    // ④ 睡眠の充実度
    { category: "睡眠の充実度", text: "自分に合った睡眠時間を理解している", reverse: false },
    { category: "睡眠の充実度", text: "睡眠不足だと感じることが多い", reverse: true },
    { category: "睡眠の充実度", text: "朝、自然と起きられる", reverse: false },

    // ⑤ 夜の習慣
    { category: "夜の習慣", text: "寝る直前までスマホを見ている", reverse: true },
    { category: "夜の習慣", text: "寝る前にカフェインをとる", reverse: true },
    { category: "夜の習慣", text: "寝る前にリラックスする時間を作っている", reverse: false }
];


const mentalQuestions = [
    // ① ストレス対処力
    { category: "ストレス対処力", text: "嫌なことがあっても、気持ちを切り替えられる", reverse: false },
    { category: "ストレス対処力", text: "予想外のことにも対処できる", reverse: false },
    { category: "ストレス対処力", text: "ストレス解消方法がある", reverse: false },

    // ② 感情の安定性
    { category: "感情の安定性", text: "イライラしやすい", reverse: true },
    { category: "感情の安定性", text: "忙しくても心に余裕がある", reverse: false },
    { category: "感情の安定性", text: "すぐに気分が変わる", reverse: true },
    { category: "感情の安定性", text: "心配性すぎる", reverse: true },

    // ③ 自己肯定感
    { category: "自己肯定感", text: "自分の良いところがパッと思いつく", reverse: false },
    { category: "自己肯定感", text: "周りの人と自分を比べすぎてしまう", reverse: true },
    { category: "自己肯定感", text: "自分だけの得意なことがある", reverse: false },

    // ④ 人間関係・相談力
    { category: "人間関係・相談力", text: "悩みがあるとき、誰かに頼れる", reverse: false },
    { category: "人間関係・相談力", text: "自分の気持ちを相手に伝えられる", reverse: false },
    { category: "人間関係・相談力", text: "周りの目がちょっと気になる", reverse: true },
    { category: "人間関係・相談力", text: "周囲の人と良好な関係を築けていると感じる", reverse: false },

    // ⑤ 心の休息・回復力
    { category: "心の休息・回復力", text: "疲れているときに、休める", reverse: false },
    { category: "心の休息・回復力", text: "趣味がある", reverse: false },
    { category: "心の休息・回復力", text: "疲れがとれない", reverse: true }
];

    

	let currentQuestion = 0;
	let currentQuestions = [];
	let answers = [];

    const form = document.getElementById("diagnosis-form");
    const questionScreen = document.getElementById("question-screen");
    const resultScreen = document.getElementById("result-screen");

    // 性別選択
    document.querySelectorAll(".gender-button").forEach(button => {
        button.addEventListener("click", () => {
            selectedGender = button.dataset.gender;

            document.querySelectorAll(".gender-button").forEach(item => {
                const selected = item === button;
                item.classList.toggle("selected", selected);
                item.setAttribute("aria-pressed", String(selected));
            });

            document.getElementById("error-message").hidden = true;
        });
    });

// 診断開始
form.addEventListener("submit", event => {
    event.preventDefault();

    const category = document.getElementById("category").value;
    const error = document.getElementById("error-message");

    // 性別・診断分野の確認
    if (!selectedGender || !category) {
        error.textContent = "性別と健康分野を選択してください。";
        error.hidden = false;
        return;
    }

    // 診断分野に応じて質問を設定
    
if (category === "運動") {
    currentQuestions = exerciseQuestions;
} else if (category === "食事") {
    currentQuestions = foodQuestions;
} else if (category === "睡眠") {
    currentQuestions = sleepQuestions;
} else if (category === "メンタルヘルス") {
    currentQuestions = mentalQuestions;
} else {
    error.textContent =
        "現在は運動・食事・睡眠・メンタルヘルスの診断を利用できます。";
    error.hidden = false;
    return;
}


    // 回答を初期化
    currentQuestion = 0;
    answers = Array(currentQuestions.length).fill(null);

    error.hidden = true;

    // 画面を切り替える
form.style.display = "none";
document.querySelector("h1").style.display = "none";
document.querySelector(".animal-header").style.display = "none";


questionScreen.style.display = "block";
resultScreen.style.display = "none";

    showQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
});




        

    
// 質問を表示
function showQuestion() {
    const question = currentQuestions[currentQuestion];

    // 診断カテゴリを取得
    const diagnosisCategory = document.getElementById("category").value;

    // カテゴリごとの画像
    const illustrationImages = {
        "運動": "exercise-illustration.png",
        "食事": "food-illustration.png",
        "睡眠": "sleep-illustration.png",
        "メンタルヘルス": "mental-illustration.png"
    };

    // カテゴリごとのテーマカラー
    const categoryColors = {
        "運動": {
            bg: "#f0f6ec",
            accent: "#c9dfb9",
            option: "#f8fbf5"
        },
        "食事": {
            bg: "#fff5eb",
            accent: "#f3d2ad",
            option: "#fffaf4"
        },
        "睡眠": {
            bg: "#f0effa",
            accent: "#d4d0ee",
            option: "#faf9ff"
        },
        "メンタルヘルス": {
            bg: "#fff2f4",
            accent: "#efcbd3",
            option: "#fff9fa"
        }
    };

    // 画像を表示
    const illustration = document.getElementById("question-illustration");

    illustration.innerHTML = `
        <img
            src="${illustrationImages[diagnosisCategory]}"
            alt="${diagnosisCategory}のイラスト"
        >
    `;

    // 背景色と選択肢の色を変更
    const colors = categoryColors[diagnosisCategory];
    const questionLayout = document.querySelector(".question-layout");

    if (colors && questionLayout) {
        questionLayout.style.setProperty("--question-bg", colors.bg);
        questionLayout.style.setProperty("--question-accent", colors.accent);
        questionLayout.style.setProperty("--question-option", colors.option);
    }

    // 質問番号
    document.getElementById("question-count").textContent =
        `質問 ${currentQuestion + 1} / ${currentQuestions.length}`;

    // 進行状況
    document.getElementById("progress-bar").style.width =
        `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;

    // カテゴリ名
    document.getElementById("question-category").textContent =
        question.category;

    // 質問文
    document.getElementById("question-text").textContent =
        question.text;

    
// 選択肢
const options = document.getElementById("rating-options");
options.innerHTML = "";

const ratingLabels = [
    "まったく当てはまらない",
    "あまり当てはまらない",
    "どちらともいえない",
    "やや当てはまる",
    "とても当てはまる"
];

for (let score = 1; score <= 5; score++) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rating-button";
    button.textContent = ratingLabels[score - 1];

    if (answers[currentQuestion] === score) {
        button.classList.add("selected");
    }

    button.setAttribute("aria-pressed",
        String(answers[currentQuestion] === score));

    button.addEventListener("click", () => {

    // 回答を保存
    answers[currentQuestion] = score;

    // エラーメッセージを消す
    document.getElementById("question-error").hidden = true;

    // 最後の質問でなければ自動で次へ
    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // 最後の質問なら結果を表示
        showResult();
    }
});

    options.appendChild(button);
}


    // 戻るボタン
    document.getElementById("previous-button").disabled =
        currentQuestion === 0;

    // 次へボタン
    document.getElementById("next-button").textContent =
        currentQuestion === currentQuestions.length - 1
            ? "結果を見る"
            : "次へ";
}


    // 前の質問へ
    
document.getElementById("previous-button").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});


    // 次の質問へ・結果へ
    
document.getElementById("next-button").addEventListener("click", () => {
    if (answers[currentQuestion] === null) {
        document.getElementById("question-error").hidden = false;
        return;
    }

    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
});


// 共通のスコア表示処理
function displayScores(total, scores, categories) {

    // 総合スコア
    document.getElementById("total-score").textContent = total;

    // 項目別スコアを横棒グラフで表示
    const details = document.getElementById("category-scores");

    details.innerHTML = categories.map(category => {
        const score = scores[category];
        const percentage = score * 5;

        return `
            <div class="score-bar-item">
                <div class="score-bar-header">
                    <span class="score-bar-name">${category}</span>
                    <span class="score-bar-number">${score} / 20点</span>
                </div>

                <div class="score-bar-track">
                    <div class="score-bar-fill"
                         style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join("");
}

  
 
// 運動診断ランキングを表示
function displayExerciseRanking(categoryScores) {

    const habit = categoryScores["運動習慣"];
    const daily = categoryScores["日常活動量"];
    const stamina = categoryScores["体力"];
    const consistency = categoryScores["継続力"];
    const enthusiasm = categoryScores["運動への意識・楽しさ"];

    const scores = [
        {
            emoji: "🐕",
            name: "アクティブ犬",
            matchScore: (habit + daily) / 2
        },
        {
            emoji: "🦥",
            name: "のんびりなまけもの",
            matchScore: 20 - (habit + daily) / 2
        },
        {
            emoji: "🐻",
            name: "体力自慢クマ",
            matchScore: stamina
        },
        {
            emoji: "🐢",
            name: "コツコツカメ",
            matchScore: consistency
        },
        {
            emoji: "🐰",
            name: "やる気満点うさぎ",
            matchScore: enthusiasm
        },
        {
            emoji: "🐈",
            name: "マイペースねこ",
            matchScore: Math.max(
                habit, daily, stamina, consistency, enthusiasm
            ) - Math.min(
                habit, daily, stamina, consistency, enthusiasm
            )
        }
    ];

    // スコアが高い順に並べる
    scores.sort((a, b) => b.matchScore - a.matchScore);

    // 同点のタイプ同士をランダムに並べ替える
    const shuffledRanking = [];

    for (let i = 0; i < scores.length;) {

        let j = i + 1;

        while (
            j < scores.length &&
            scores[j].matchScore === scores[i].matchScore
        ) {
            j++;
        }

        const sameScore = scores.slice(i, j);

        // 同点グループをシャッフル
        for (let k = sameScore.length - 1; k > 0; k--) {
            const randomIndex = Math.floor(Math.random() * (k + 1));

            [sameScore[k], sameScore[randomIndex]] =
                [sameScore[randomIndex], sameScore[k]];
        }

        shuffledRanking.push(...sameScore);
        i = j;
    }

    // TOP3を取得
    const topThree = shuffledRanking.slice(0, 3);

    // ランキング表示場所を取得・作成
    let rankingBox = document.getElementById("type-ranking");

    if (!rankingBox) {
        rankingBox = document.createElement("div");
        rankingBox.id = "type-ranking";

        document.getElementById("animal-result")
            .insertAdjacentElement("afterend", rankingBox);
    }

    rankingBox.hidden = false;

    const medals = ["🥇", "🥈", "🥉"];

    rankingBox.innerHTML = `
        <div class="ranking-card">
            <h3>あなたの運動タイプランキング</h3>
            <p class="ranking-subtitle">
                あなたの回答に近いタイプ TOP3
            </p>

            ${topThree.map((type, index) => `
                <div class="ranking-item ranking-${index + 1}">
                    <span class="ranking-medal">
                        ${medals[index]}
                    </span>

                    <span class="ranking-emoji">
                        ${type.emoji}
                    </span>

                    <span class="ranking-name">
                        ${type.name}
                    </span>
                </div>
            `).join("")}
        </div>
    `;
}   


// 睡眠診断ランキングを表示
function displaySleepRanking(sleepScores) {

    const rhythm = sleepScores["睡眠リズム"];
    const morning = sleepScores["朝の回復力"];
    const rest = sleepScores["休息力"];
    const satisfaction = sleepScores["睡眠の充実度"];
    const night = sleepScores["夜の習慣"];

    const allScores = [
        rhythm,
        morning,
        rest,
        satisfaction,
        night
    ];

    const scores = [
        {
            emoji: "🛌",
            name: "ふかふかベッド",
            matchScore: rhythm
        },
        {
            emoji: "💤",
            name: "すやすや枕",
            matchScore: rest
        },
        {
            emoji: "🧸",
            name: "ぬくぬく毛布",
            matchScore: satisfaction
        },
        {
            emoji: "⏰",
            name: "ギリギリアラーム",
            matchScore: 20 - morning
        },
        {
            emoji: "🌃",
            name: "夜更かしランプ",
            matchScore: 20 - night
        },
        {
            emoji: "🧦",
            name: "ぽかぽかルームソックス",
            // 5項目のうち最も低い点数を基準にする
            matchScore: Math.min(...allScores)
        }
    ];

    // スコアが高い順に並べる
    scores.sort((a, b) => b.matchScore - a.matchScore);

    // 同点のタイプ同士をランダムに並べ替える
    const shuffledRanking = [];

    for (let i = 0; i < scores.length;) {

        let j = i + 1;

        while (
            j < scores.length &&
            scores[j].matchScore === scores[i].matchScore
        ) {
            j++;
        }

        const sameScore = scores.slice(i, j);

        for (let k = sameScore.length - 1; k > 0; k--) {
            const randomIndex = Math.floor(Math.random() * (k + 1));

            [sameScore[k], sameScore[randomIndex]] =
                [sameScore[randomIndex], sameScore[k]];
        }

        shuffledRanking.push(...sameScore);
        i = j;
    }

    // TOP3を取得
    const topThree = shuffledRanking.slice(0, 3);

    // ランキング表示場所を取得・作成
    let rankingBox = document.getElementById("type-ranking");

    if (!rankingBox) {
        rankingBox = document.createElement("div");
        rankingBox.id = "type-ranking";

        document.getElementById("animal-result")
            .insertAdjacentElement("afterend", rankingBox);
    }

    rankingBox.hidden = false;

    const medals = ["🥇", "🥈", "🥉"];

    rankingBox.innerHTML = `
        <div class="ranking-card">
            <h3>あなたの睡眠タイプランキング</h3>
            <p class="ranking-subtitle">
                あなたの回答に近いタイプ TOP3
            </p>

            ${topThree.map((type, index) => `
                <div class="ranking-item ranking-${index + 1}">
                    <span class="ranking-medal">
                        ${medals[index]}
                    </span>

                    <span class="ranking-emoji">
                        ${type.emoji}
                    </span>

                    <span class="ranking-name">
                        ${type.name}
                    </span>
                </div>
            `).join("")}
        </div>
    `;
}


// 食事診断ランキングTOP3を表示
function displayFoodRanking(foodScores, foodCategories) {

    const foodTypes = [
        {
            emoji: "🍮",
            name: "迷子プリン",
            category: "食事のリズム",
            matchScore: 20 - foodScores["食事のリズム"]
        },
        {
            emoji: "🍜",
            name: "あわてんぼラーメン",
            category: "食べる量・スピード",
            matchScore: 20 - foodScores["食べる量・スピード"]
        },
        {
            emoji: "🍙",
            name: "直感おにぎり",
            category: "食べ物の選び方",
            matchScore: 20 - foodScores["食べ物の選び方"]
        },
        {
            emoji: "🍪",
            name: "かんしょクッキー",
            category: "間食・飲み物",
            matchScore: 20 - foodScores["間食・飲み物"]
        },
        {
            emoji: "🍛",
            name: "気分屋カレー",
            category: "食事との付き合い方",
            matchScore: 20 - foodScores["食事との付き合い方"]
        }
    ];

    // 5項目すべて14点以上なら満点弁当もランキング対象
    const isBalanced = foodCategories.every(
        category => foodScores[category] >= 14
    );

    if (isBalanced) {
        foodTypes.push({
            emoji: "🍱",
            name: "満点弁当",
            matchScore: Math.min(
                ...foodCategories.map(category => foodScores[category])
            )
        });
    }

    // 点数が高い順に並べる
    foodTypes.sort((a, b) => b.matchScore - a.matchScore);

    // 同点の場合はランダムに並べる
    const shuffledRanking = [];

    for (let i = 0; i < foodTypes.length;) {
        let j = i + 1;

        while (
            j < foodTypes.length &&
            foodTypes[j].matchScore === foodTypes[i].matchScore
        ) {
            j++;
        }

        const sameScore = foodTypes.slice(i, j);

        for (let k = sameScore.length - 1; k > 0; k--) {
            const randomIndex = Math.floor(Math.random() * (k + 1));

            [sameScore[k], sameScore[randomIndex]] =
                [sameScore[randomIndex], sameScore[k]];
        }

        shuffledRanking.push(...sameScore);
        i = j;
    }

    // TOP3を取得
    const topThree = shuffledRanking.slice(0, 3);

    // ランキング表示場所を取得・作成
    let rankingBox = document.getElementById("type-ranking");

    if (!rankingBox) {
        rankingBox = document.createElement("div");
        rankingBox.id = "type-ranking";

        document.getElementById("animal-result")
            .insertAdjacentElement("afterend", rankingBox);
    }

    rankingBox.hidden = false;

    const medals = ["🥇", "🥈", "🥉"];

    rankingBox.innerHTML = `
        <div class="ranking-card">
            <h3>あなたの食事タイプランキング</h3>
            <p class="ranking-subtitle">
                あなたの回答に近いタイプ TOP3
            </p>

            ${topThree.map((type, index) => `
                <div class="ranking-item ranking-${index + 1}">
                    <span class="ranking-medal">${medals[index]}</span>
                    <span class="ranking-emoji">${type.emoji}</span>
                    <span class="ranking-name">${type.name}</span>
                </div>
            `).join("")}
        </div>
    `;
}

// メンタルヘルス診断ランキングTOP3を表示
function displayMentalRanking(mentalScores) {

    const stress = mentalScores["ストレス対処力"];
    const emotion = mentalScores["感情の安定性"];
    const selfEsteem = mentalScores["自己肯定感"];
    const relationships = mentalScores["人間関係・相談力"];
    const recovery = mentalScores["心の休息・回復力"];

    const allScores = [
        stress,
        emotion,
        selfEsteem,
        relationships,
        recovery
    ];

    const highest = Math.max(...allScores);
    const lowest = Math.min(...allScores);

    const mentalTypes = [
        {
            emoji: "☀️",
            name: "ピカピカ快晴タイプ",
            matchScore: Math.min(...allScores)
        },
        {
            emoji: "☁️",
            name: "ぷわぷわ雲タイプ",
            matchScore: Math.min(emotion, recovery)
        },
        {
            emoji: "🌈",
            name: "レインボータイプ",
            matchScore: Math.min(stress, relationships)
        },
        {
            emoji: "🌧️",
            name: "しっとり雨タイプ",
            matchScore: Math.min(20 - emotion, 20 - selfEsteem)
        },
        {
            emoji: "⚡",
            name: "ピロゴロ雷タイプ",
            matchScore: Math.min(20 - stress, 20 - emotion)
        },
        {
            emoji: "🌦️",
            name: "気まぐれお天気タイプ",
            matchScore: highest - lowest
        },
        {
            emoji: "🌤️",
            name: "雨のち晴れタイプ",
            matchScore: Math.min(stress, recovery)
        }
    ];

    // 点数が高い順に並べる
    mentalTypes.sort((a, b) => b.matchScore - a.matchScore);

    // 同点の場合はランダムに並べる
    const shuffledRanking = [];

    for (let i = 0; i < mentalTypes.length;) {
        let j = i + 1;

        while (
            j < mentalTypes.length &&
            mentalTypes[j].matchScore === mentalTypes[i].matchScore
        ) {
            j++;
        }

        const sameScore = mentalTypes.slice(i, j);

        for (let k = sameScore.length - 1; k > 0; k--) {
            const randomIndex = Math.floor(Math.random() * (k + 1));

            [sameScore[k], sameScore[randomIndex]] =
                [sameScore[randomIndex], sameScore[k]];
        }

        shuffledRanking.push(...sameScore);
        i = j;
    }

    // TOP3を取得
    const topThree = shuffledRanking.slice(0, 3);

    // ランキング表示場所を取得・作成
    let rankingBox = document.getElementById("type-ranking");

    if (!rankingBox) {
        rankingBox = document.createElement("div");
        rankingBox.id = "type-ranking";

        document.getElementById("animal-result")
            .insertAdjacentElement("afterend", rankingBox);
    }

    rankingBox.hidden = false;

    const medals = ["🥇", "🥈", "🥉"];

    rankingBox.innerHTML = `
        <div class="ranking-card">
            <h3>あなたのメンタルヘルスタイプランキング</h3>
            <p class="ranking-subtitle">
                あなたの回答に近いタイプ TOP3
            </p>

            ${topThree.map((type, index) => `
                <div class="ranking-item ranking-${index + 1}">
                    <span class="ranking-medal">${medals[index]}</span>
                    <span class="ranking-emoji">${type.emoji}</span>
                    <span class="ranking-name">${type.name}</span>
                </div>
            `).join("")}
        </div>
    `;
}



// 診断したカテゴリーのタイプ一覧だけを表示
function displayTypeCatalog(selectedCategory) {

    const typeCatalog = {
        "運動": {
            title: "運動タイプ一覧",
            types: [
                ["🐕", "アクティブ犬", "日常の中でよく体を動かすタイプ", "普段から体を動かす習慣があり、日常生活でも活動的に過ごせているようです。"],
                ["🐢", "コツコツカメ", "自分のペースで積み重ねるタイプ", "運動を続けることに強みがありそうです。小さな積み重ねを大切にできるところが魅力です。"],
                ["🐻", "体力自慢クマ", "体を動かす力が頼もしいタイプ", "体力に関する自己評価が高めです。"],
                ["🐰", "やる気満点うさぎ", "新しいことにも前向きなタイプ", "運動への興味や意欲が高めです。"],
                ["🐈", "マイペースねこ", "自分らしい得意分野を持つタイプ", "運動に関する項目の得点に個性が表れています。"],
                ["🦥", "のんびりなまけもの", "自分のペースを大切にするタイプ", "運動習慣や日常活動量は、これから育てていける部分がありそうです。"]
            ]
        },

        "食事": {
            title: "食事タイプ一覧",
            types: [
                ["🍮", "迷子プリン", "自分に合う食事のリズムを探しているタイプ", "食事の時間が日によって変わりやすい傾向があるようです。"],
                ["🍜", "あわてんぼラーメン", "食事中の過ごし方に個性があるタイプ", "食べる速さや食事中の過ごし方に特徴が表れています。"],
                ["🍙", "直感おにぎり", "食べたい気持ちを大切にするタイプ", "そのとき食べたいものを選ぶ傾向があるようです。"],
                ["🍪", "かんしょクッキー", "間食や飲み物に自分らしさが出るタイプ", "お菓子や飲み物をとる習慣に特徴が表れています。"],
                ["🍛", "気分屋カレー", "気分や体調によって食べ方が変わるタイプ", "気分や疲れと食事の関係に特徴があるようです。"],
                ["🍱", "満点弁当", "食習慣をバランスよく意識できているタイプ", "5項目すべてでバランスよく点数が取れています。"]
            ]
        },

        "睡眠": {
            title: "睡眠タイプ一覧",
            types: [
                ["🛌", "ふかふかベッド", "安定した睡眠リズムの持ち主！", "寝る時間や起きる時間が安定しているタイプです。"],
                ["💤", "すやすや枕", "しっかり休めるリラックスタイプ！", "眠りにつきやすく、休息をとることが得意なタイプです。"],
                ["🧸", "ぬくぬく毛布", "自分の睡眠をよく理解しているタイプ！", "自分に合った睡眠時間や、心地よい目覚めを意識できています。"],
                ["⏰", "ギリギリアラーム", "朝はゆっくりエンジンがかかるタイプ！", "朝の目覚めや活動の始まりに、少し時間が必要な傾向があります。"],
                ["🌃", "夜更かしランプ", "夜の過ごし方を見直してみよう！", "寝る前のスマホやカフェインなど、夜の習慣に改善の余地があるタイプです。"],
                ["🧦", "ぽかぽかルームソックス", "睡眠バランスばっちりタイプ！", "睡眠に関する5つの項目がバランスよく整っています。"]
            ]
        },

        "メンタルヘルス": {
            title: "メンタルヘルスタイプ一覧",
            types: [
                ["☀️", "ピカピカ快晴タイプ", "心のバランスが整った晴れやかタイプ", "5項目のバランスが良く、心に余裕を持って過ごせているようです。"],
                ["☁️", "ぷわぷわ雲タイプ", "自分のペースを大切にするタイプ", "感情の安定性と心の休息・回復力に強みがありそうです。"],
                ["🌈", "レインボータイプ", "前向きな気持ちとつながりを大切にするタイプ", "気持ちの切り替えや人とのつながりに強みがありそうです。"],
                ["🌧️", "しっとり雨タイプ", "物事をじっくり考えるタイプ", "心配事を抱えたり、自分に厳しくなったりすることがあるかもしれません。"],
                ["⚡", "ピロゴロ雷タイプ", "心の天気が変わりやすいタイプ", "気持ちの切り替えや感情の整理に難しさを感じることがあるかもしれません。"],
                ["🌦️", "気まぐれお天気タイプ", "得意分野がはっきりしているタイプ", "項目によって得意な部分と苦手な部分に違いがあるようです。"],
                ["🌤️", "雨のち晴れタイプ", "自分なりの回復方法を持っているタイプ", "気持ちの切り替えと心の休息・回復力に強みがありそうです。"]
            ]
        }
    };

    // 今回診断したカテゴリーだけを取得
    const selectedTypes = typeCatalog[selectedCategory];

    if (!selectedTypes) return;

    let catalogBox = document.getElementById("type-catalog");

    if (!catalogBox) {
        catalogBox = document.createElement("div");
        catalogBox.id = "type-catalog";

        document.getElementById("animal-result")
            .insertAdjacentElement("afterend", catalogBox);
    }

    catalogBox.hidden = false;

    catalogBox.innerHTML = `
        <div class="catalog-card">
            <h3>📚 健康タイプ図鑑</h3>
            <p class="catalog-subtitle">
                それぞれのタイプの特徴を見てみよう！
            </p>

            <details class="catalog-category">
                <summary>${selectedTypes.title}</summary>

                <div class="catalog-list">
                    ${selectedTypes.types.map(type => `
                        <div class="catalog-item">
                            <div class="catalog-item-title">
                                <span class="catalog-emoji">${type[0]}</span>
                                <strong>${type[1]}</strong>
                            </div>

                            <p class="catalog-catchphrase">${type[2]}</p>
                            <p class="catalog-description">${type[3]}</p>
                        </div>
                    `).join("")}
                </div>
            </details>
        </div>
    `;
}



// 運動タイプの個別コメントを作成
function getExerciseComment(animalName, scores) {

    const habit = (scores["運動習慣"] + scores["日常活動量"]) / 2;
    const stamina = scores["体力"];
    const consistency = scores["継続力"];
    const enthusiasm = scores["運動への意識・楽しさ"];

    // 16点以上：高め、11～15点：中くらい、10点以下：これから伸ばせそう
    function getLevel(score) {
        if (score >= 16) return "high";
        if (score >= 11) return "middle";
        return "low";
    }

    const fixedComments = {
        "アクティブ犬": "動くの大好き！その元気、これからも大切に！",
        "コツコツカメ": "ゆっくりでも着実に！継続は力なり！",
        "体力自慢クマ": "パワフルなあなた！たまには休憩も忘れずに！",
        "やる気満点うさぎ": "やる気は十分！まずは小さな一歩から！",
        "マイペースねこ": "自分のペースが一番！気分に合わせて動こう！",
        "のんびりなまけもの": "休憩上手？まずは気軽に体を動かしてみよう！"
    };

    let personalComment = "";

    if (animalName === "アクティブ犬") {
        const level = getLevel(habit);

        if (level === "high") {
            personalComment = "運動が日常に馴染んでいるみたい！その活動的な毎日を大切に！";
        } else if (level === "middle") {
            personalComment = "動くことへの意識があるみたい！自分に合ったペースを見つけよう！";
        } else {
            personalComment = "やる気はこれから育てていこう！まずは近所を歩くことから始めてみる？";
        }

    } else if (animalName === "コツコツカメ") {
        const level = getLevel(consistency);

        if (level === "high") {
            personalComment = "続ける力が光ってる！そのコツコツ精神、まさにカメ級！";
        } else if (level === "middle") {
            personalComment = "自分のペースで続けられているみたい！焦らず積み重ねよう！";
        } else {
            personalComment = "三日坊主でも大丈夫！まずは短い時間から始めてみよう！";
        }

    } else if (animalName === "体力自慢クマ") {
        const level = getLevel(stamina);

        if (level === "high") {
            personalComment = "体力には自信あり！？元気いっぱいな毎日を楽しもう！";
        } else if (level === "middle") {
            personalComment = "体力はまずまず！日常の中で少しずつ体を動かしてみよう！";
        } else {
            personalComment = "体力づくりは焦らずゆっくり！自分に合った活動を探してみよう！";
        }

    } else if (animalName === "やる気満点うさぎ") {
        const level = getLevel(enthusiasm);

        if (level === "high") {
            personalComment = "運動への興味がいっぱい！そのワクワクを行動につなげてみよう！";
        } else if (level === "middle") {
            personalComment = "運動への関心があるみたい！気になる運動を探してみるのもいいね！";
        } else {
            personalComment = "まだお気に入りの運動に出会っていないのかも？遊び感覚で探してみよう！";
        }

    } else if (animalName === "マイペースねこ") {
        const allScores = Object.values(scores);
        const difference = Math.max(...allScores) - Math.min(...allScores);

        if (difference <= 4) {
            personalComment = "どの項目も似たようなバランス！自分らしいペースを大切に！";
        } else if (difference <= 9) {
            personalComment = "得意・不得意が少しずつ見えてきたみたい！得意なところを伸ばそう！";
        } else {
            personalComment = "個性豊かな運動スタイル！まずは低めの項目を気軽に試してみよう！";
        }

    } else if (animalName === "のんびりなまけもの") {
        const level = getLevel(habit);

        if (level === "high") {
            personalComment = "実は動ける力を持っているみたい！気が向いたときに動いてみよう！";
        } else if (level === "middle") {
            personalComment = "ちょっとずつ活動の機会を増やせそう！できることから始めよう！";
        } else {
            personalComment = "のんびりも大切！まずは気軽にできるストレッチなどから試してみよう！";
        }
    }

    return {
        fixed: fixedComments[animalName] || "",
        personal: personalComment
    };
}



function showResult() {
	// 前回のランキングを非表示にする
const oldRanking = document.getElementById("type-ranking");

if (oldRanking) {
    oldRanking.hidden = true;
}
// 診断したカテゴリーのタイプ一覧を表示
const selectedCategory =
    document.getElementById("category").value;

displayTypeCatalog(selectedCategory);
	
    // メンタルヘルス診断の結果
    if (document.getElementById("category").value === "メンタルヘルス") {

        const mentalCategories = [
            "ストレス対処力",
            "感情の安定性",
            "自己肯定感",
            "人間関係・相談力",
            "心の休息・回復力"
        ];

        const mentalScores = {};

        // ① 各項目を20点満点で採点
        mentalCategories.forEach(category => {
            const questions = currentQuestions
                .map((q, index) => ({ ...q, index }))
                .filter(q => q.category === category);

            const points = questions.reduce((sum, q) => {
                return sum + (
                    q.reverse ? 6 - answers[q.index] : answers[q.index]
                );
            }, 0);

            mentalScores[category] = Math.round(
                points / (questions.length * 5) * 20
            );
        });

        // ② 総合スコア
        const totalScore = Object.values(mentalScores)
            .reduce((sum, score) => sum + score, 0);
            // メンタルヘルスタイプランキングTOP3を表示
displayMentalRanking(mentalScores);

        // ③ 20点満点を100％に換算
        const percentages = {};

        mentalCategories.forEach(category => {
            percentages[category] = mentalScores[category] * 5;
        });

        const stress = percentages["ストレス対処力"];
        const emotion = percentages["感情の安定性"];
        const selfEsteem = percentages["自己肯定感"];
        const relationships = percentages["人間関係・相談力"];
        const recovery = percentages["心の休息・回復力"];

        const scores = Object.values(percentages);
        const highest = Math.max(...scores);
        const lowest = Math.min(...scores);
        const difference = highest - lowest;
        // ③ 5項目の最高スコアを取得
const maxScore = Math.max(...scores);
        

        // ④ タイプ判定
let mentalType;

// 5項目の中で一番高い項目を優先
if (stress === maxScore) {
    mentalType = "rainbow";

} else if (emotion === maxScore) {
    mentalType = "cloud";

} else if (selfEsteem === maxScore) {
    mentalType = "sunny";

} else if (relationships === maxScore) {
    mentalType = "rainbow";

} else if (recovery === maxScore) {
    mentalType = "sunshine";

} else {
    mentalType = "changeable";
}

        // ⑤ タイプごとの結果
        const mentalTypes = {
            sunny: {
                emoji: "☀️",
                name: "ピカピカ快晴タイプ",
                catchphrase: "心のバランスが整った晴れやかタイプ",
                traits: "5項目のバランスが良く、心に余裕を持って過ごせているようです。",
                advice: "今の自分らしい過ごし方を大切にしながら、疲れたときにはゆっくり休みましょう。"
            },

            cloud: {
                emoji: "☁️",
                name: "ぷわぷわ雲タイプ",
                catchphrase: "自分のペースを大切にするタイプ",
                traits: "感情の安定性と心の休息・回復力に強みがありそうです。",
                advice: "自分に合ったペースを大切にして、心地よい時間を過ごしましょう。"
            },

            rainbow: {
                emoji: "🌈",
                name: "レインボータイプ",
                catchphrase: "前向きな気持ちとつながりを大切にするタイプ",
                traits: "気持ちの切り替えや人とのつながりに強みがありそうです。",
                advice: "周囲との関係を大切にしながら、自分の気持ちにも目を向けてみましょう。"
            },

            rain: {
                emoji: "🌧️",
                name: "しっとり雨タイプ",
                catchphrase: "物事をじっくり考えるタイプ",
                traits: "心配事を抱えたり、自分に厳しくなったりすることがあるかもしれません。",
                advice: "完璧を目指さず、小さなことでも自分の良いところを見つけてみましょう。"
            },

            thunder: {
                emoji: "⚡",
                name: "ピロゴロ雷タイプ",
                catchphrase: "心の天気が変わりやすいタイプ",
                traits: "気持ちの切り替えや感情の整理に難しさを感じることがあるかもしれません。",
                advice: "気持ちを落ち着ける時間を作り、自分に合ったリラックス方法を探してみましょう。"
            },

            changeable: {
                emoji: "🌦️",
                name: "気まぐれお天気タイプ",
                catchphrase: "得意分野がはっきりしているタイプ",
                traits: "項目によって得意な部分と苦手な部分に違いがあるようです。",
                advice: "得意な部分を大切にしながら、気になる部分を少しずつ振り返ってみましょう。"
            },

            sunshine: {
                emoji: "🌤️",
                name: "雨のち晴れタイプ",
                catchphrase: "自分なりの回復方法を持っているタイプ",
                traits: "気持ちの切り替えと心の休息・回復力に強みがありそうです。",
                advice: "自分に合った休息方法を大切にして、無理のないペースで過ごしましょう。"
            }
        };

        const mental = mentalTypes[mentalType];

        // ⑥ 結果を画面に表示
        document.getElementById("animal-result").style.display = "block";

        document.getElementById("animal-emoji").textContent =
            mental.emoji;

        document.getElementById("animal-name").textContent =
            mental.name;

        document.getElementById("animal-catchphrase").textContent =
            mental.catchphrase;

        document.getElementById("animal-traits").textContent =
            mental.traits;

        document.getElementById("animal-advice").textContent =
            mental.advice;

        // ⑦ 結果画面のタイトル
        document.querySelector("#result-screen h2").textContent =
            "あなたのメンタルヘルスタイプ診断結果";

        // ⑧ スコア表示
        displayScores(totalScore, mentalScores, mentalCategories);

        document.getElementById("result-message").textContent =
            "今回の結果は、回答から見えた心の傾向です。自分を振り返るための目安として楽しんでね。";

        // ⑨ 結果画面へ切り替え
        questionScreen.style.display = "none";
        resultScreen.style.display = "block";

        window.scrollTo({ top: 0, behavior: "smooth" });

        return;
    }

	
    // 食事診断は食事専用の採点・タイプ判定を行う
    if (document.getElementById("category").value === "食事") {
        const foodCategories = [
            ...new Set(currentQuestions.map(q => q.category))
        ];

        const foodScores = {};

        // ① 各項目を20点満点で採点
        foodCategories.forEach(category => {
            const questions = currentQuestions
                .map((q, index) => ({ ...q, index }))
                .filter(q => q.category === category);

            const points = questions.reduce((sum, q) => {
                return sum + (
                    q.reverse ? 6 - answers[q.index] : answers[q.index]
                );
            }, 0);

            foodScores[category] = Math.round(
                points / (questions.length * 5) * 20
            );
        });

        // ② 総合スコア（100点満点）
        const total = Object.values(foodScores)
            .reduce((sum, score) => sum + score, 0);
            // 食事タイプランキングTOP3を表示
			displayFoodRanking(foodScores, foodCategories);

        

        // ③ 食事診断の6タイプ
        const foodTypes = {
            "食事のリズム": {
                emoji: "🍮",
                name: "迷子プリン",
                catchphrase: "自分に合う食事のリズムを探しているタイプ",
                traits: "食事の時間が日によって変わりやすい傾向があるようです。",
                advice: "忙しい日も、無理のない範囲で食事のタイミングを意識してみましょう。"
            },
            "食べる量・スピード": {
                emoji: "🍜",
                name: "あわてんぼラーメン",
                catchphrase: "食事中の過ごし方に個性があるタイプ",
                traits: "食べる速さや食事中の過ごし方に特徴が表れています。",
                advice: "食事のときは少し余裕を持って、味や食感を楽しんでみましょう。"
            },
            "食べ物の選び方": {
                emoji: "🍙",
                name: "直感おにぎり",
                catchphrase: "食べたい気持ちを大切にするタイプ",
                traits: "そのとき食べたいものを選ぶ傾向があるようです。",
                advice: "好きなものを楽しみながら、野菜や果物なども選択肢に加えてみましょう。"
            },
            "間食・飲み物": {
                emoji: "🍪",
                name: "かんしょクッキー",
                catchphrase: "間食や飲み物に自分らしさが出るタイプ",
                traits: "お菓子や飲み物をとる習慣に特徴が表れています。",
                advice: "お腹の空き具合や喉の渇きに合わせて、自分に合った間食や飲み物を選んでみましょう。"
            },
            "食事との付き合い方": {
                emoji: "🍛",
                name: "気分屋カレー",
                catchphrase: "気分や体調によって食べ方が変わるタイプ",
                traits: "気分や疲れと食事の関係に特徴があるようです。",
                advice: "食事を楽しみながら、疲れているときは休息も大切にしましょう。"
            }
        };

        // ④ 5項目すべてが70%以上なら満点弁当
        const isBalanced = foodCategories.every(
            category => foodScores[category] >= 14
        );

        let foodType;

        if (isBalanced) {
            foodType = {
                emoji: "🍱",
                name: "満点弁当",
                catchphrase: "食習慣をバランスよく意識できているタイプ",
                traits: "5項目すべてでバランスよく点数が取れています。日頃の食生活を意識できているようです。",
                advice: "今の自分に合った食生活を大切にしながら、無理なく続けていきましょう。"
            };
        } else {
            // ⑤ 最も点数が低い項目を探す
            const lowestScore = Math.min(
                ...foodCategories.map(category => foodScores[category])
            );

            // 同点なら、該当するタイプからランダムに選ぶ
            const candidates = foodCategories.filter(
                category => foodScores[category] === lowestScore
            );

            const selectedCategory = candidates[
                Math.floor(Math.random() * candidates.length)
            ];

            foodType = foodTypes[selectedCategory];
        }

        // ⑥ 食事タイプを結果画面に表示
        document.getElementById("animal-result").style.display = "block";

        document.getElementById("animal-emoji").textContent =
            foodType.emoji;

        document.getElementById("animal-name").textContent =
            foodType.name;

        
// 食事タイプの情報を表示
document.getElementById("animal-catchphrase").textContent =
    foodType.catchphrase;

document.getElementById("animal-traits").textContent =
    foodType.traits;

document.getElementById("animal-advice").textContent =
    foodType.advice;


        // ⑦ 結果画面のタイトル
        document.querySelector("#result-screen h2").textContent =
            "あなたの食事タイプ診断結果";
		// ⑧ 総合スコア・項目別スコアを表示
displayScores(total, foodScores, foodCategories);


        document.getElementById("result-message").textContent =
            "今回の結果は、回答から見えた食習慣の傾向です。点数は自分の食生活を振り返るための目安として楽しんでね。";

        // ⑨ 結果画面へ切り替え
        questionScreen.style.display = "none";
        resultScreen.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });

        return;
    }

	// 睡眠診断の結果
if (document.getElementById("category").value === "睡眠") {

    const sleepCategories = [
        "睡眠リズム",
        "朝の回復力",
        "休息力",
        "睡眠の充実度",
        "夜の習慣"
    ];

    const sleepScores = {};

    // 5項目の点数を計算
    sleepCategories.forEach(category => {
        const questions = currentQuestions.filter(
            q => q.category === category
        );

        let points = 0;

        questions.forEach(q => {
            const answer = answers[currentQuestions.indexOf(q)];
            points += q.reverse ? 6 - answer : answer;
        });

        sleepScores[category] = Math.round(
            points / (questions.length * 5) * 20
        );
    });

    const totalScore = Object.values(sleepScores)
        .reduce((sum, score) => sum + score, 0);
        
        // 睡眠タイプランキングTOP3を表示
displaySleepRanking(sleepScores);

    // タイプの判定基準
    const sleepTypes = [
        {
            name: "ふかふかベッド",
            emoji: "🛌",
            category: "睡眠リズム",
            matchScore: sleepScores["睡眠リズム"],
            catchphrase: "安定した睡眠リズムの持ち主！",
            traits: "寝る時間や起きる時間が安定しているタイプです。",
            advice: "今のリズムを大切にして、心地よい睡眠を続けましょう。"
        },
        {
            name: "すやすや枕",
            emoji: "💤",
            category: "休息力",
            matchScore: sleepScores["休息力"],
            catchphrase: "しっかり休めるリラックスタイプ！",
            traits: "眠りにつきやすく、休息をとることが得意なタイプです。",
            advice: "自分に合った休息時間をこれからも大切にしましょう。"
        },
        {
            name: "ぬくぬく毛布",
            emoji: "🧸",
            category: "睡眠の充実度",
            matchScore: sleepScores["睡眠の充実度"],
            catchphrase: "自分の睡眠をよく理解しているタイプ！",
            traits: "自分に合った睡眠時間や、心地よい目覚めを意識できています。",
            advice: "これからも自分に合った睡眠を大切にしましょう。"
        },
        {
            name: "ギリギリアラーム",
            emoji: "⏰",
            category: "朝の回復力",
            matchScore: 20 - sleepScores["朝の回復力"],
            catchphrase: "朝はゆっくりエンジンがかかるタイプ！",
            traits: "朝の目覚めや活動の始まりに、少し時間が必要な傾向があります。",
            advice: "朝に余裕を持てるよう、起きる時間や朝の過ごし方を工夫してみましょう。"
        },
        {
            name: "夜更かしランプ",
            emoji: "🌃",
            category: "夜の習慣",
            matchScore: 20 - sleepScores["夜の習慣"],
            catchphrase: "夜の過ごし方を見直してみよう！",
            traits: "寝る前のスマホやカフェインなど、夜の習慣に改善の余地があるタイプです。",
            advice: "寝る前はスマホから少し離れて、リラックスする時間を作ってみましょう。"
        }
    ];

    let result;

    // 5項目すべて14点以上ならバランスタイプ
    if (sleepCategories.every(
        category => sleepScores[category] >= 14
    )) {
        result = {
            name: "ぽかぽかルームソックス",
            emoji: "🧦",
            catchphrase: "睡眠バランスばっちりタイプ！",
            traits: "睡眠に関する5つの項目がバランスよく整っています。",
            advice: "今の良い習慣をこれからも続けていきましょう。"
        };

    } else {
        // 最も当てはまるタイプを選ぶ
        const maxScore = Math.max(
            ...sleepTypes.map(type => type.matchScore)
        );

        const candidates = sleepTypes.filter(
            type => type.matchScore === maxScore
        );

        // 同点ならランダム
        result = candidates[
            Math.floor(Math.random() * candidates.length)
        ];
    }

    // 結果を画面に表示
    document.getElementById("animal-result").style.display = "block";
    document.getElementById("animal-emoji").textContent = result.emoji;
    document.getElementById("animal-name").textContent = result.name;
    document.getElementById("animal-catchphrase").textContent = result.catchphrase;
    document.getElementById("animal-traits").textContent = result.traits;
    document.getElementById("animal-advice").textContent = result.advice;

    // 結果画面のタイトル
document.querySelector("#result-screen h2").textContent =
    "あなたの睡眠タイプ診断結果";

// 総合スコア・項目別スコア
displayScores(totalScore, sleepScores, sleepCategories);
    
    document.getElementById("result-message").textContent =
        "あなたの睡眠タイプは「" + result.name + "」です！";

    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";

    return;
}

    // 運動診断では動物タイプを表示
    document.getElementById("animal-result").style.display = "block";

	
    const categories = [
        "運動習慣",
        "日常活動量",
        "体力",
        "継続力",
        "運動への意識・楽しさ"
    ];

    const categoryScores = {};

    // 5項目をそれぞれ20点満点で採点
    categories.forEach(category => {
        const questions = currentQuestions
            .map((question, index) => ({ ...question, index }))
            .filter(question => question.category === category);

        if (questions.length === 0) {
            categoryScores[category] = 0;
            return;
        }

        const points = questions.reduce((sum, question) => {
            const answer = answers[question.index];
            return sum + (
                question.reverse ? 6 - answer : answer
            );
        }, 0);

        categoryScores[category] = Math.round(
            points / (questions.length * 5) * 20
        );
    });

    const total = Object.values(categoryScores)
        .reduce((sum, score) => sum + score, 0);

    document.getElementById("total-score").textContent = total;

    // 項目別スコアを横棒グラフで表示
displayScores(total, categoryScores, categories);

    // 動物タイプ判定に使う点数
    const habit = categoryScores["運動習慣"];
    const daily = categoryScores["日常活動量"];
    const stamina = categoryScores["体力"];
    const consistency = categoryScores["継続力"];
    const enthusiasm = categoryScores["運動への意識・楽しさ"];

    const scores = [habit, daily, stamina, consistency, enthusiasm];
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    const difference = highest - lowest;

    let animal;

    // ① 体を動かす習慣が少なめ
    if (habit <= 9 && daily <= 9) {
        animal = {
            emoji: "🦥",
            name: "のんびりなまけもの",
            catchphrase: "自分のペースを大切にするタイプ",
            traits: "運動習慣や日常活動量は、これから育てていける部分がありそう。無理せず、自分に合う方法を見つけるのが得意への第一歩です。",
            advice: "少し遠回りして歩く、好きな音楽に合わせて体を動かすなど、気軽なことから試してみましょう。"
        };
    }

    

    // ③ 体力が強み
    else if (stamina >= 16) {
        animal = {
            emoji: "🐻",
            name: "体力自慢クマ",
            catchphrase: "体を動かす力が頼もしいタイプ",
            traits: "体力に関する自己評価が高めです。歩くことや体を動かすことに自信を感じているのかもしれません。",
            advice: "今の体力を大切にしながら、休息も取り入れて、自分に合ったペースを続けましょう。"
        };
    }

    // ④ 続ける力が強み
    else if (consistency >= 16) {
        animal = {
            emoji: "🐢",
            name: "コツコツカメ",
            catchphrase: "自分のペースで積み重ねるタイプ",
            traits: "運動を続けることに強みがありそうです。小さな積み重ねを大切にできるところが魅力です。",
            advice: "頑張りすぎず、短い散歩や好きな運動など、続けやすい習慣を大切にしましょう。"
        };
    }

    // ⑤ 運動への意識や楽しさが強み
    else if (enthusiasm >= 16) {
        animal = {
            emoji: "🐰",
            name: "やる気満点うさぎ",
            catchphrase: "新しいことにも前向きなタイプ",
            traits: "運動への興味や意欲が高めです。楽しそうなことを見つけると、新しい一歩を踏み出せるかもしれません。",
            advice: "気になる運動を気軽に試して、自分が楽しいと思える動き方を見つけてみましょう。"
        };
    }

    // ⑥ 運動習慣と日常活動量が強み
    else if ((habit + daily) / 2 >= 15) {
        animal = {
            emoji: "🐕",
            name: "アクティブ犬",
            catchphrase: "日常の中でよく体を動かすタイプ",
            traits: "普段から体を動かす習慣があり、日常生活でも活動的に過ごせているようです。",
            advice: "今の生活に合った活動を楽しみながら、体調に合わせて休息も取り入れましょう。"
        };
    }
    
    // ② 項目によって得意・不得意の差が大きい
    else if (difference >= 8) {
        animal = {
            emoji: "🐈",
            name: "マイペースねこ",
            catchphrase: "自分らしい得意分野を持つタイプ",
            traits: "運動に関する項目の得点に個性が表れています。得意なところを活かしながら、自分に合った運動スタイルを探せそうです。",
            advice: "点数が高い項目を強みにして、低めの項目はできそうなことから少しずつ試してみましょう。"
        };
    }

    // 条件に当てはまらない場合も、最も高い項目を活かす
    else {
        const maxCategory = categories[
            scores.indexOf(highest)
        ];

        const fallbackTypes = {
            "運動習慣": {
                emoji: "🐕",
                name: "アクティブ犬",
                catchphrase: "体を動かす習慣を育てているタイプ",
                traits: "日々の運動習慣に自分らしい特徴が表れています。",
                advice: "日常で無理なく体を動かせる機会を見つけてみましょう。"
            },
            "日常活動量": {
                emoji: "🐕",
                name: "アクティブ犬",
                catchphrase: "日常の動きを大切にするタイプ",
                traits: "普段の過ごし方に活動的な一面がありそうです。",
                advice: "歩くことなど、生活に取り入れやすい動きを続けてみましょう。"
            },
            "体力": {
                emoji: "🐻",
                name: "体力自慢クマ",
                catchphrase: "体力を自分の強みにできるタイプ",
                traits: "体力の項目に、あなたらしい強みが表れています。",
                advice: "自分の体調に合わせて、気持ちよく動ける範囲を大切にしましょう。"
            },
            "継続力": {
                emoji: "🐢",
                name: "コツコツカメ",
                catchphrase: "少しずつ積み重ねるタイプ",
                traits: "続けることに、自分なりの強みがありそうです。",
                advice: "小さな目標を決めて、できたことを振り返ってみましょう。"
            },
            "運動への意識・楽しさ": {
                emoji: "🐰",
                name: "やる気満点うさぎ",
                catchphrase: "運動への興味を大切にするタイプ",
                traits: "運動への意識や楽しさに、あなたらしさが表れています。",
                advice: "好きな音楽や新しい活動など、楽しめるきっかけを探してみましょう。"
            }
        };

        animal = fallbackTypes[maxCategory];
    }

// 運動タイプランキングTOP3を表示
displayExerciseRanking(categoryScores);
    // 動物タイプを画面に表示
    document.getElementById("animal-emoji").textContent =
        animal.emoji;

    document.getElementById("animal-name").textContent =
        animal.name;

    
    // タイプごとの固定コメント・個別コメント
    const comments = getExerciseComment(animal.name, categoryScores);

    // 固定の一言コメント
    document.getElementById("animal-catchphrase").textContent =
        comments.fixed;

    // タイプの特徴
    document.getElementById("animal-traits").textContent =
        animal.traits;

    // スコアに応じた個別コメント
    document.getElementById("animal-advice").textContent =
        comments.personal;


    // 結果画面のタイトル
    document.querySelector("#result-screen h2").textContent =
        "あなたの運動タイプ診断結果";

    document.getElementById("result-message").textContent =
        "今回の結果は、あなたの回答から見えた運動の傾向です。点数は自分を知るための目安として楽しんでね。";

    questionScreen.style.display = "none";
    resultScreen.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
}



    // もう一度診断
    document.getElementById("retry-button").addEventListener("click", () => {
        currentQuestion = 0;
answers = [];
currentQuestions = [];
currentQuestion = 0;

        resultScreen.style.display = "none";
        questionScreen.style.display = "none";
        form.style.display = "block";

        document.querySelector(".animal-header").style.display = "";
        document.querySelector("h1").style.display = "block";

        document.getElementById("category").value = "運動";
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

