import type { CountryExtras } from "../types";

// Advanced question banks for Central/Eastern Europe, the Baltics, Ireland
// and Iceland. Climate/travelTips live inline in the base country files, so
// these entries are quiz-only.

export const EUROPE_MORE1_EXTRAS: Record<string, CountryExtras> = {
  IRL: {
    extraQuiz: [
      {
        question: {
          zh: "愛爾蘭最長的河流是哪一條?",
          en: "What is the longest river in Ireland?",
        },
        options: [
          { zh: "香農河", en: "The Shannon" },
          { zh: "利菲河", en: "The Liffey" },
          { zh: "博因河", en: "The Boyne" },
          { zh: "巴羅河", en: "The Barrow" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "香農河全長約 360 公里,縱貫愛爾蘭中西部,不僅是全島最長,也是整個不列顛與愛爾蘭諸島中最長的河流。",
          en: "The Shannon runs about 360 kilometers through the west-central island — the longest river not only in Ireland but in the whole of Britain and Ireland.",
        },
      },
      {
        question: {
          zh: "都柏林以北的紐格萊奇(Newgrange)史前巨石墓,其通道設計讓陽光在哪個特定日子照進墓室?",
          en: "The passage of the prehistoric Newgrange tomb north of Dublin is aligned so sunlight enters the chamber on which specific day?",
        },
        options: [
          { zh: "冬至", en: "The winter solstice" },
          { zh: "夏至", en: "The summer solstice" },
          { zh: "春分", en: "The spring equinox" },
          { zh: "秋分", en: "The autumn equinox" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "紐格萊奇建於約公元前 3200 年,比巨石陣與埃及金字塔更古老;冬至日出時陽光穿過「屋頂箱」開口直射墓室,整組遺址以博因河谷之名列入世界遺產。",
          en: "Built around 3200 BC — older than Stonehenge and the pyramids — Newgrange lets the winter-solstice sunrise beam through a 'roof-box' into the chamber; the site is World Heritage listed as Brú na Bóinne.",
        },
      },
      {
        question: {
          zh: "整個 20 世紀,愛爾蘭共誕生了幾位諾貝爾文學獎得主?",
          en: "Over the course of the 20th century, how many Nobel laureates in Literature did Ireland produce?",
        },
        options: [
          { zh: "4 位", en: "Four" },
          { zh: "1 位", en: "One" },
          { zh: "2 位", en: "Two" },
          { zh: "6 位", en: "Six" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "葉慈(1923)、蕭伯納(1925)、貝克特(1969)與詩人希尼(1995)先後獲獎,讓這個數百萬人口的島國成為文學大國。",
          en: "Yeats (1923), George Bernard Shaw (1925), Samuel Beckett (1969), and Seamus Heaney (1995) — a remarkable haul for an island of a few million people.",
        },
      },
    ],
  },
  ISL: {
    extraQuiz: [
      {
        question: {
          zh: "覆蓋冰島約 8% 國土面積的最大冰川是哪一座?",
          en: "Which glacier, Iceland's largest, covers about 8% of the country?",
        },
        options: [
          { zh: "瓦特納冰川", en: "Vatnajökull" },
          { zh: "朗格冰川", en: "Langjökull" },
          { zh: "米達爾斯冰川", en: "Mýrdalsjökull" },
          { zh: "斯奈菲爾冰川", en: "Snæfellsjökull" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "瓦特納冰川面積約 7,700 平方公里,冰層底下藏著數座活火山;以它為核心的國家公園已列入世界遺產。",
          en: "Vatnajökull spans roughly 7,700 square kilometers with several active volcanoes hidden beneath the ice; the national park built around it is a World Heritage Site.",
        },
      },
      {
        question: {
          zh: "英語中的「geyser」(間歇泉)一詞,源自冰島的什麼?",
          en: "The English word 'geyser' derives from what in Iceland?",
        },
        options: [
          {
            zh: "一座名為 Geysir 的間歇泉的名字",
            en: "The name of a hot spring called Geysir",
          },
          { zh: "一位維京探險家的名字", en: "The name of a Viking explorer" },
          { zh: "冰島語的「沸騰」一詞", en: "The Icelandic word for 'boiling'" },
          { zh: "一座火山的名字", en: "The name of a volcano" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "豪卡達魯爾谷地的大間歇泉 Geysir(意為「噴湧者」)成了全世界同類地熱噴泉的通稱;如今一旁的史托克間歇泉仍每隔數分鐘噴發一次。",
          en: "The Great Geysir in Haukadalur — from a verb meaning 'to gush' — lent its name to all such springs worldwide; its neighbor Strokkur still erupts every few minutes.",
        },
      },
      {
        question: {
          zh: "冰島人的姓名傳統有什麼特別之處?",
          en: "What is distinctive about Icelandic naming traditions?",
        },
        options: [
          {
            zh: "多數人沒有家族姓氏,以父(母)名加上 son 或 dóttir 構成",
            en: "Most people have no family surname — they use a parent's name plus 'son' or 'dóttir'",
          },
          {
            zh: "所有人都必須以火山或冰川命名",
            en: "Everyone must be named after a volcano or glacier",
          },
          {
            zh: "姓氏一律排在名字前面",
            en: "Surnames always come before given names",
          },
          {
            zh: "夫妻婚後必須改用同一姓氏",
            en: "Married couples must adopt the same surname",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "冰島沿用古諾斯父名制,例如 Jón 的兒子姓 Jónsson、女兒姓 Jónsdóttir;因此電話簿是按名字而非姓氏排序的。",
          en: "Iceland keeps the Old Norse patronymic system — Jón's son is Jónsson, his daughter Jónsdóttir — which is why the phone book is sorted by first name.",
        },
      },
    ],
  },
  LUX: {
    extraQuiz: [
      {
        question: {
          zh: "1985 年歐洲多國取消邊境管制的《申根公約》,是在盧森堡的什麼地方簽署的?",
          en: "Where in Luxembourg was the 1985 Schengen Agreement abolishing border controls signed?",
        },
        options: [
          {
            zh: "摩澤爾河上申根村旁的一艘遊船",
            en: "Aboard a boat on the Moselle River by the village of Schengen",
          },
          { zh: "盧森堡大公宮殿", en: "The Grand Ducal Palace" },
          { zh: "維安登城堡", en: "Vianden Castle" },
          { zh: "盧森堡市政廳", en: "Luxembourg City Hall" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "申根是盧森堡東南角與法德交界的葡萄酒小村,1985 年 6 月五國代表在河上的「瑪麗-阿斯特麗德公主號」簽約,小村之名從此成為免護照旅行區的代稱。",
          en: "Schengen is a small wine village where Luxembourg meets France and Germany; in June 1985 five states signed aboard the boat Princesse Marie-Astrid, and the village's name came to stand for passport-free travel.",
        },
      },
      {
        question: {
          zh: "哪一家全球數一數二的鋼鐵集團將總部設在盧森堡市?",
          en: "Which of the world's largest steel groups has its headquarters in Luxembourg City?",
        },
        options: [
          { zh: "安賽樂米塔爾(ArcelorMittal)", en: "ArcelorMittal" },
          { zh: "蒂森克虜伯", en: "Thyssenkrupp" },
          { zh: "浦項製鐵", en: "POSCO" },
          { zh: "日本製鐵", en: "Nippon Steel" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "盧森堡 19 世紀末靠南部鐵礦與鋼鐵業致富,本土巨頭 ARBED 幾經合併成為安賽樂米塔爾,金融業興起前鋼鐵是國家經濟的命脈。",
          en: "Luxembourg grew rich on iron ore and steel from the late 19th century; local giant ARBED merged its way into ArcelorMittal, and steel was the economy's backbone before finance took over.",
        },
      },
      {
        question: {
          zh: "哪位被尊為「歐洲統合之父」之一的政治家,1886 年出生於盧森堡市?",
          en: "Which statesman honored as a founding father of European integration was born in Luxembourg City in 1886?",
        },
        options: [
          { zh: "羅貝爾·舒曼", en: "Robert Schuman" },
          { zh: "讓·莫內", en: "Jean Monnet" },
          { zh: "康拉德·艾德諾", en: "Konrad Adenauer" },
          { zh: "保羅-亨利·斯巴克", en: "Paul-Henri Spaak" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "舒曼生於盧森堡市克勞森區,後成為法國外長;他 1950 年提出的「舒曼宣言」催生歐洲煤鋼共同體,是今日歐盟的起點。",
          en: "Born in Luxembourg City's Clausen quarter, Schuman later became French foreign minister; his 1950 Schuman Declaration launched the Coal and Steel Community, the seed of today's EU.",
        },
      },
    ],
  },
  SVK: {
    extraQuiz: [
      {
        question: {
          zh: "斯洛伐克東部哪座城堡遺址是中歐面積最大的城堡建築群之一,已列入世界遺產?",
          en: "Which castle ruin in eastern Slovakia, among Central Europe's largest castle complexes, is a World Heritage Site?",
        },
        options: [
          { zh: "斯皮什城堡", en: "Spiš Castle" },
          { zh: "布拉提斯拉瓦城堡", en: "Bratislava Castle" },
          { zh: "奧拉瓦城堡", en: "Orava Castle" },
          { zh: "博伊尼采城堡", en: "Bojnice Castle" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "斯皮什城堡建於 12 世紀,城牆環繞的範圍超過 4 公頃,1993 年與周邊斯皮什地區古蹟一同列入世界遺產。",
          en: "Built from the 12th century, Spiš Castle's walls enclose more than four hectares; it joined the World Heritage list in 1993 along with nearby Spiš monuments.",
        },
      },
      {
        question: {
          zh: "西元 863 年抵達大摩拉維亞傳教的西里爾與美多德兄弟,為翻譯經文創制了哪套字母?",
          en: "Arriving in Great Moravia in 863, the missionary brothers Cyril and Methodius devised which alphabet to translate scripture?",
        },
        options: [
          { zh: "格拉哥里字母", en: "The Glagolitic alphabet" },
          { zh: "西里爾字母", en: "The Cyrillic alphabet" },
          { zh: "拉丁字母", en: "The Latin alphabet" },
          { zh: "盧恩字母", en: "The runic alphabet" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩兄弟創制的是格拉哥里字母;西里爾字母是後來其弟子在保加利亞一帶發展出來、再以西里爾之名命名的,兩者常被混淆。",
          en: "The brothers created Glagolitic; Cyrillic was developed later by their disciples in the Bulgarian lands and merely named after Cyril — a common point of confusion.",
        },
      },
      {
        question: {
          zh: "斯洛伐克國徽上雙十字架底下的三座山丘,傳統上代表哪三座山?",
          en: "The three hills beneath the double cross on Slovakia's coat of arms traditionally represent which three mountains?",
        },
        options: [
          {
            zh: "塔特拉、法特拉與馬特拉",
            en: "Tatra, Fatra, and Mátra",
          },
          {
            zh: "阿爾卑斯、喀爾巴阡與巴爾幹",
            en: "The Alps, Carpathians, and Balkans",
          },
          {
            zh: "克里萬、格爾拉赫與洛姆尼茨",
            en: "Kriváň, Gerlach, and Lomnický",
          },
          {
            zh: "蘇台德、貝斯基德與比亞沃",
            en: "The Sudetes, Beskids, and Białowieża hills",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "三座山丘傳統上解釋為塔特拉、法特拉與馬特拉三座山脈;有趣的是馬特拉山如今位於匈牙利境內,見證了歷史疆域的變遷。",
          en: "The hills are traditionally read as the Tatra, Fatra, and Mátra ranges — amusingly, Mátra now lies in Hungary, a trace of shifted historical borders.",
        },
      },
    ],
  },
  HUN: {
    extraQuiz: [
      {
        question: {
          zh: "被匈牙利人暱稱為「匈牙利海」的中歐最大湖泊是哪一座?",
          en: "Which lake, the largest in Central Europe, do Hungarians nickname the 'Hungarian Sea'?",
        },
        options: [
          { zh: "巴拉頓湖", en: "Lake Balaton" },
          { zh: "蒂薩湖", en: "Lake Tisza" },
          { zh: "費爾特湖", en: "Lake Fertő" },
          { zh: "韋倫采湖", en: "Lake Velence" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "巴拉頓湖面積約 592 平方公里,湖水淺而溫暖,北岸有葡萄酒產區、南岸是沙灘度假帶,是內陸國匈牙利最重要的避暑勝地。",
          en: "Covering about 592 square kilometers, shallow, warm Balaton pairs wine country on its north shore with beach resorts on the south — landlocked Hungary's favorite summer escape.",
        },
      },
      {
        question: {
          zh: "匈牙利哪個葡萄酒產區以貴腐甜酒聞名,相傳被路易十四譽為「酒中之王,王者之酒」?",
          en: "Which Hungarian wine region, famed for its sweet botrytized wine, was reputedly hailed by Louis XIV as 'wine of kings, king of wines'?",
        },
        options: [
          { zh: "托卡伊", en: "Tokaj" },
          { zh: "埃格爾", en: "Eger" },
          { zh: "維拉尼", en: "Villány" },
          { zh: "巴拉頓高地", en: "The Balaton Uplands" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "托卡伊 1737 年經王室敕令劃界,是世界最早的法定葡萄酒產區之一,其貴腐甜酒 Aszú 連匈牙利國歌歌詞都有提及,產區已列世界遺產。",
          en: "Delimited by royal decree in 1737 — among the world's first classified wine regions — Tokaj's Aszú even appears in Hungary's national anthem, and the region is World Heritage listed.",
        },
      },
      {
        question: {
          zh: "匈牙利科學家聖捷爾吉因分離出哪種維生素,獲得 1937 年諾貝爾生理學或醫學獎?",
          en: "Hungarian scientist Albert Szent-Györgyi won the 1937 Nobel Prize in Physiology or Medicine for isolating which vitamin?",
        },
        options: [
          { zh: "維生素 C", en: "Vitamin C" },
          { zh: "維生素 A", en: "Vitamin A" },
          { zh: "維生素 B1", en: "Vitamin B1" },
          { zh: "維生素 D", en: "Vitamin D" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "聖捷爾吉在塞格德工作時,從當地盛產的紅椒中大量提取出抗壞血酸(維生素 C),把家鄉特產變成了科學突破的原料。",
          en: "Working in Szeged, Szent-Györgyi extracted ascorbic acid in bulk from the local paprika crop — turning a hometown specialty into the raw material of a scientific breakthrough.",
        },
      },
    ],
  },
  ROU: {
    extraQuiz: [
      {
        question: {
          zh: "羅馬尼亞的最高峰是哪一座?",
          en: "What is the highest peak in Romania?",
        },
        options: [
          { zh: "摩爾多韋亞努峰", en: "Moldoveanu Peak" },
          { zh: "內戈尤峰", en: "Negoiu Peak" },
          { zh: "奧穆峰", en: "Omu Peak" },
          { zh: "大帕倫格峰", en: "Parângul Mare Peak" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "摩爾多韋亞努峰海拔 2,544 公尺,位於南喀爾巴阡的弗格拉什山;這段山勢險峻的山脈因此有「外西凡尼亞阿爾卑斯」之稱。",
          en: "Moldoveanu rises to 2,544 meters in the Făgăraș range of the Southern Carpathians — mountains so rugged they are nicknamed the 'Transylvanian Alps'.",
        },
      },
      {
        question: {
          zh: "羅馬尼亞北部布科維納的沃羅內茨修道院,以外牆濕壁畫中哪種獨特的顏色聞名?",
          en: "The Voroneț Monastery in Romania's Bucovina region is famous for what distinctive color in its exterior frescoes?",
        },
        options: [
          { zh: "沃羅內茨藍", en: "Voroneț blue" },
          { zh: "威尼斯紅", en: "Venetian red" },
          { zh: "皇家紫", en: "Royal purple" },
          { zh: "翡翠綠", en: "Emerald green" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這座 15 世紀修道院有「東方西斯汀教堂」之稱,外牆整面《最後的審判》濕壁畫以一種配方成謎的湛藍為底,歷經數百年風霜仍未褪色。",
          en: "Dubbed the 'Sistine Chapel of the East', the 15th-century monastery's Last Judgment fresco rests on a vivid blue of still-mysterious recipe that has defied centuries of weather.",
        },
      },
      {
        question: {
          zh: "哪位現代主義雕塑先驅出生於羅馬尼亞,代表作包括《無盡之柱》與《空間之鳥》?",
          en: "Which pioneer of modernist sculpture was born in Romania, with works including the Endless Column and Bird in Space?",
        },
        options: [
          { zh: "康斯坦丁·布朗庫西", en: "Constantin Brâncuși" },
          { zh: "奧古斯特·羅丹", en: "Auguste Rodin" },
          { zh: "阿爾伯托·賈科梅蒂", en: "Alberto Giacometti" },
          { zh: "亨利·摩爾", en: "Henry Moore" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "布朗庫西生於羅馬尼亞西南部鄉村,後赴巴黎發展;他為一戰陣亡者在特爾古日烏打造的《無盡之柱》紀念雕塑群,已列入世界遺產。",
          en: "Born in rural southwestern Romania before moving to Paris, Brâncuși created the Târgu Jiu memorial ensemble for WWI dead — its Endless Column now part of a World Heritage listing.",
        },
      },
    ],
  },
  BGR: {
    extraQuiz: [
      {
        question: {
          zh: "整個巴爾幹半島的最高峰位於保加利亞,是哪一座山峰?",
          en: "The highest peak of the entire Balkan Peninsula stands in Bulgaria — which peak is it?",
        },
        options: [
          { zh: "穆薩拉峰", en: "Musala" },
          { zh: "維赫倫峰", en: "Vihren" },
          { zh: "博特夫峰", en: "Botev" },
          { zh: "奧林帕斯山", en: "Mount Olympus" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "里拉山的穆薩拉峰海拔 2,925 公尺,略高於希臘的奧林帕斯山(2,917 公尺);皮林山的維赫倫峰(2,914 公尺)則排名第三。",
          en: "Musala in the Rila Mountains reaches 2,925 meters, edging out Greece's Mount Olympus (2,917 m), with Vihren in the Pirin range (2,914 m) third.",
        },
      },
      {
        question: {
          zh: "2007 年保加利亞加入歐盟後,哪種字母成為歐盟繼拉丁與希臘字母之後的第三種官方字母?",
          en: "When Bulgaria joined the EU in 2007, which script became the union's third official alphabet after Latin and Greek?",
        },
        options: [
          { zh: "西里爾字母", en: "The Cyrillic alphabet" },
          { zh: "格拉哥里字母", en: "The Glagolitic alphabet" },
          { zh: "亞美尼亞字母", en: "The Armenian alphabet" },
          { zh: "喬治亞字母", en: "The Georgian alphabet" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西里爾字母於 9-10 世紀在保加利亞帝國發展成形;入盟後歐元紙鈔也因此加印了西里爾字母的「歐元」(ЕВРО)字樣。",
          en: "Cyrillic took shape in the Bulgarian Empire in the 9th–10th centuries; after accession, euro banknotes even added 'ЕВРО' in Cyrillic script.",
        },
      },
      {
        question: {
          zh: "每年 3 月 1 日的「瑪爾塔婆婆節」,保加利亞人會互贈什麼迎接春天?",
          en: "On March 1st, for the Baba Marta holiday, what do Bulgarians exchange to welcome spring?",
        },
        options: [
          {
            zh: "紅白絲線編成的飾物(martenitsa)",
            en: "Red-and-white yarn charms called martenitsi",
          },
          { zh: "彩繪木蛋", en: "Painted wooden eggs" },
          { zh: "玫瑰花束", en: "Bouquets of roses" },
          { zh: "蜂蜜麵包", en: "Honey bread" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "人們把紅白絲線飾物戴在身上,直到看見鸛鳥或開花的樹才取下掛上枝頭祈求健康;這項習俗已列入聯合國教科文組織非物質文化遺產。",
          en: "People wear the charms until they see a stork or a blossoming tree, then tie them to a branch for health — a custom inscribed on UNESCO's intangible heritage list.",
        },
      },
    ],
  },
  HRV: {
    extraQuiz: [
      {
        question: {
          zh: "普利特維采(十六湖)國家公園的階梯湖群與天然堤壩,主要是由什麼作用形成的?",
          en: "The terraced lakes and natural dams of Plitvice Lakes National Park were formed mainly by what process?",
        },
        options: [
          {
            zh: "石灰華(碳酸鈣)沉積不斷築高堤壩",
            en: "Travertine (calcium carbonate) deposits building up natural barriers",
          },
          { zh: "火山熔岩流堵塞河道", en: "Volcanic lava flows damming the river" },
          { zh: "冰川挖蝕出一連串盆地", en: "Glaciers gouging a chain of basins" },
          { zh: "地震造成的斷層陷落", en: "Fault subsidence from earthquakes" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "富含碳酸鈣的水流經苔蘚與藻類時不斷析出石灰華,堤壩至今仍以每年約 1 公分的速度生長,16 座湖因此層層相疊、瀑布相連。",
          en: "Mineral-rich water deposits travertine over mosses and algae, and the barriers still grow about a centimeter a year — stacking 16 lakes linked by waterfalls.",
        },
      },
      {
        question: {
          zh: "哪位交流電系統的發明家,1856 年出生於今克羅埃西亞境內的斯米連村?",
          en: "Which inventor of the alternating-current system was born in 1856 in the village of Smiljan, in present-day Croatia?",
        },
        options: [
          { zh: "尼古拉·特斯拉", en: "Nikola Tesla" },
          { zh: "湯瑪斯·愛迪生", en: "Thomas Edison" },
          { zh: "古列爾莫·馬可尼", en: "Guglielmo Marconi" },
          { zh: "麥可·法拉第", en: "Michael Faraday" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "特斯拉是出生於當時奧地利帝國軍事邊區的塞爾維亞裔,故居現為紀念館;克羅埃西亞與塞爾維亞兩國都以他為榮。",
          en: "Tesla, an ethnic Serb born in the Austrian Empire's Military Frontier, has his birthplace preserved as a memorial center — both Croatia and Serbia claim him proudly.",
        },
      },
      {
        question: {
          zh: "哪種以白底黑斑聞名的犬種,名字源自克羅埃西亞的沿海歷史地區?",
          en: "Which dog breed, famous for its white coat with black spots, takes its name from a coastal historical region of Croatia?",
        },
        options: [
          { zh: "大麥町犬(達爾馬提亞犬)", en: "The Dalmatian" },
          { zh: "羅威納犬", en: "The Rottweiler" },
          { zh: "吉娃娃", en: "The Chihuahua" },
          { zh: "秋田犬", en: "The Akita" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "大麥町犬得名於亞得里亞海岸的達爾馬提亞地區,國際畜犬聯盟認定其起源地為克羅埃西亞;干擾項三種犬也都以地名命名。",
          en: "The Dalmatian is named after Dalmatia on the Adriatic coast, with Croatia recognized as its country of origin by the FCI — the other three breeds are also place-named.",
        },
      },
    ],
  },
  SVN: {
    extraQuiz: [
      {
        question: {
          zh: "斯洛維尼亞的最高峰、同時也出現在國徽與國旗上的是哪座山?",
          en: "Which mountain is Slovenia's highest peak and also appears on its coat of arms and flag?",
        },
        options: [
          { zh: "特里格拉夫峰", en: "Triglav" },
          { zh: "格羅斯格洛克納峰", en: "Grossglockner" },
          { zh: "馬爾莫拉達峰", en: "Marmolada" },
          { zh: "多布拉奇山", en: "Dobratsch" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "特里格拉夫峰海拔 2,864 公尺,名字意為「三頭」;斯洛維尼亞人有句俗諺:一生至少要登頂一次才算真正的斯洛維尼亞人。",
          en: "Triglav ('three heads') rises to 2,864 meters; a Slovenian saying holds that you must summit it at least once in your life to be a true Slovenian.",
        },
      },
      {
        question: {
          zh: "地質學上「喀斯特地形」(karst)這個名稱,源自哪裡?",
          en: "Where does the geological term 'karst' come from?",
        },
        options: [
          {
            zh: "斯洛維尼亞西南部的克拉斯(Kras)高原",
            en: "The Kras plateau in southwestern Slovenia",
          },
          { zh: "中國廣西的石灰岩峰林", en: "The limestone pinnacles of Guangxi, China" },
          { zh: "土耳其中部的高原", en: "A plateau in central Turkey" },
          { zh: "一位德國地質學家的姓氏", en: "The surname of a German geologist" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "克拉斯高原(德語稱 Karst)的石灰岩溶洞與滲穴是 19 世紀學者研究此類地形的原型,當地地名從此成為全球通用的地質學術語。",
          en: "The limestone caves and sinkholes of the Kras plateau (Karst in German) were the 19th-century prototype for studying such terrain, turning a local place name into a global scientific term.",
        },
      },
      {
        question: {
          zh: "維也納西班牙騎術學校著名的利皮扎白馬(Lipizzaner),其名稱源自斯洛維尼亞的什麼?",
          en: "The famous white Lipizzaner horses of Vienna's Spanish Riding School take their name from what in Slovenia?",
        },
        options: [
          {
            zh: "1580 年創立的利皮察(Lipica)皇家馬場",
            en: "The royal stud farm at Lipica, founded in 1580",
          },
          { zh: "一位傳奇馴馬師", en: "A legendary horse trainer" },
          { zh: "一種當地特有的牧草", en: "A native pasture grass" },
          { zh: "一座阿爾卑斯山峰", en: "An Alpine peak" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "哈布斯堡大公查理二世 1580 年在喀斯特高原的利皮察設立皇家馬場,培育出這種以高難度古典馬術聞名的白馬,馬場至今仍在運作。",
          en: "Habsburg Archduke Charles II founded the stud at Lipica on the Karst plateau in 1580, breeding the white horses famed for classical dressage — the farm still operates today.",
        },
      },
    ],
  },
  EST: {
    extraQuiz: [
      {
        question: {
          zh: "愛沙尼亞兩千多座島嶼中,面積最大的是哪一座?",
          en: "Of Estonia's more than 2,000 islands, which is the largest?",
        },
        options: [
          { zh: "薩雷馬島", en: "Saaremaa" },
          { zh: "希烏馬島", en: "Hiiumaa" },
          { zh: "穆胡島", en: "Muhu" },
          { zh: "沃爾姆西島", en: "Vormsi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "薩雷馬島面積約 2,670 平方公里,以杜松、風車與庫雷薩雷主教城堡聞名;島上的卡利隕石坑群是罕見可確認的史前隕石撞擊遺跡。",
          en: "At about 2,670 square kilometers, Saaremaa is known for junipers, windmills, and Kuressaare's bishop's castle; its Kaali craters are rare confirmed prehistoric meteorite impact sites.",
        },
      },
      {
        question: {
          zh: "傳說 1219 年林達尼塞戰役(今塔林附近)中,哪一面國旗「從天而降」扭轉了戰局?",
          en: "According to legend, which national flag 'fell from the sky' and turned the tide at the 1219 Battle of Lyndanisse, near present-day Tallinn?",
        },
        options: [
          { zh: "丹麥國旗", en: "The flag of Denmark" },
          { zh: "瑞典國旗", en: "The flag of Sweden" },
          { zh: "挪威國旗", en: "The flag of Norway" },
          { zh: "波蘭國旗", en: "The flag of Poland" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "丹麥人相信國旗「丹尼布洛」就是在這場對愛沙尼亞人的戰役中自天而降;「塔林」一名常被解釋為愛沙尼亞語「丹麥人之城」(Taani linn)。",
          en: "Danes hold that the Dannebrog descended from the heavens during this battle against the Estonians; the name 'Tallinn' is often glossed as Estonian for 'Danish town' (Taani linn).",
        },
      },
      {
        question: {
          zh: "1990 年代在愛沙尼亞發明的極限運動「kiiking」,是在挑戰什麼?",
          en: "The extreme sport of 'kiiking', invented in Estonia in the 1990s, challenges athletes to do what?",
        },
        options: [
          {
            zh: "把鞦韆盪過頭頂、轉滿 360 度一整圈",
            en: "Swing a giant swing over the top in a full 360-degree loop",
          },
          { zh: "揹著伴侶越野賽跑", en: "Race cross-country carrying a partner" },
          { zh: "在結冰的海面下潛水", en: "Dive beneath frozen sea ice" },
          { zh: "穿雪鞋橫越沼澤競速", en: "Race across bogs in snowshoes" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "kiiking 使用鋼製硬桿鞦韆,選手站立擺盪直到繞軸整圈,桿子愈長難度愈高;鞦韆本就是愛沙尼亞鄉村文化的重要元素。",
          en: "Kiiking uses swings with rigid steel arms — athletes pump standing up until they loop the axle, and longer arms mean harder loops. Village swings are a deep-rooted part of Estonian rural culture.",
        },
      },
    ],
  },
  LVA: {
    extraQuiz: [
      {
        question: {
          zh: "拉脫維亞庫爾迪加的文塔瀑布(Ventas rumba)保有什麼「歐洲之最」?",
          en: "The Ventas Rumba waterfall at Kuldīga, Latvia holds what European record?",
        },
        options: [
          { zh: "歐洲最寬的瀑布", en: "Europe's widest waterfall" },
          { zh: "歐洲落差最大的瀑布", en: "Europe's tallest waterfall" },
          { zh: "歐洲水量最大的瀑布", en: "Europe's highest-volume waterfall" },
          { zh: "歐洲最北的瀑布", en: "Europe's northernmost waterfall" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "文塔瀑布寬約 240 公尺、春汛時更寬,但落差僅約 2 公尺;春天魚群躍瀑而上,中世紀時人們甚至在瀑布上「空中捕魚」。",
          en: "About 240 meters wide (wider in spring floods) yet only some 2 meters tall, it sees fish leap the drop each spring — medieval locals even rigged traps to catch them 'in mid-air'.",
        },
      },
      {
        question: {
          zh: "17 世紀位於今拉脫維亞的庫爾蘭公國,曾在海外何處建立殖民地?",
          en: "In the 17th century, the Duchy of Courland — in present-day Latvia — established colonies where overseas?",
        },
        options: [
          {
            zh: "加勒比海的多巴哥島與西非甘比亞河口",
            en: "Tobago in the Caribbean and the Gambia River in West Africa",
          },
          { zh: "巴西東北海岸", en: "The northeastern coast of Brazil" },
          { zh: "印度的果阿", en: "Goa in India" },
          { zh: "南非的好望角", en: "The Cape of Good Hope in South Africa" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "雅各布公爵治下這個波羅的海小公國擁有可觀的船隊,一度同時經營多巴哥的「新庫爾蘭」與甘比亞河口的據點,是殖民史上最迷你的玩家之一。",
          en: "Under Duke Jacob the little Baltic duchy ran a sizable fleet, holding 'New Courland' on Tobago and a Gambia River outpost at once — one of colonial history's tiniest players.",
        },
      },
      {
        question: {
          zh: "相傳 1752 年由里加藥劑師調製、以黑色陶瓶包裝聞名的拉脫維亞傳統名酒是什麼?",
          en: "What traditional Latvian drink, reputedly created by a Riga pharmacist in 1752, is famous for its black ceramic bottle?",
        },
        options: [
          {
            zh: "里加黑香脂酒(草本利口酒)",
            en: "Riga Black Balsam, an herbal liqueur",
          },
          { zh: "蜂蜜啤酒", en: "Honey beer" },
          { zh: "黑麥格瓦斯", en: "Rye kvass" },
          { zh: "櫻桃白蘭地", en: "Cherry brandy" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這款以二十多種草藥浸製的黑色苦味利口酒最初被當成藥方;傳說俄國女皇凱薩琳二世訪里加時靠它治好了病,從此聲名大噪。",
          en: "Infused with more than twenty botanicals, the bitter black liqueur began as a medicine; legend says it cured Empress Catherine the Great during a Riga visit, sealing its fame.",
        },
      },
    ],
  },
  LTU: {
    extraQuiz: [
      {
        question: {
          zh: "根據法國國家地理研究院 1989 年的測算,歐洲大陸的地理中心位於哪個國家境內?",
          en: "According to a 1989 calculation by the French National Geographic Institute, the geographic center of continental Europe lies in which country?",
        },
        options: [
          { zh: "立陶宛", en: "Lithuania" },
          { zh: "波蘭", en: "Poland" },
          { zh: "斯洛伐克", en: "Slovakia" },
          { zh: "烏克蘭", en: "Ukraine" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "該測算把歐洲地理中心定在維爾紐斯以北約 26 公里的普爾努什克斯村附近,當地立有紀念碑;由於計算方式不同,鄰國也各有自己的「歐洲中心」主張。",
          en: "The calculation placed the center near Purnuškės, about 26 km north of Vilnius, where a monument now stands — though rival methods give neighboring countries their own 'center of Europe' claims.",
        },
      },
      {
        question: {
          zh: "立陶宛語在語言學界以什麼特點著稱?",
          en: "For what characteristic is the Lithuanian language renowned among linguists?",
        },
        options: [
          {
            zh: "是保留最多古印歐語特徵的現存語言之一",
            en: "It is among the living languages that best preserve archaic Indo-European features",
          },
          {
            zh: "與芬蘭語同屬芬烏語系",
            en: "It belongs to the Finno-Ugric family like Finnish",
          },
          {
            zh: "是斯拉夫語族的一個分支",
            en: "It is a branch of the Slavic language family",
          },
          {
            zh: "直到 20 世紀才發展出文字",
            en: "It had no written form until the 20th century",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "立陶宛語屬波羅的語族,保留了大量與古梵語相似的語音與變格系統,是研究印歐語系演化的活化石;第一本立陶宛語書籍早在 1547 年就已出版。",
          en: "A Baltic language, Lithuanian keeps sounds and case systems strikingly close to ancient Sanskrit — a living fossil for Indo-European studies. Its first printed book appeared back in 1547.",
        },
      },
      {
        question: {
          zh: "波羅的海沿岸出產、被稱為「立陶宛黃金」的是什麼?",
          en: "What Baltic coastal treasure is known as 'Lithuanian gold'?",
        },
        options: [
          { zh: "琥珀", en: "Amber" },
          { zh: "珍珠", en: "Pearls" },
          { zh: "黑曜石", en: "Obsidian" },
          { zh: "綠松石", en: "Turquoise" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "琥珀是數千萬年前松脂的化石,古代「琥珀之路」把波羅的海琥珀一路販運到羅馬帝國;帕蘭加的琥珀博物館收藏了上萬件標本,包括困著昆蟲的珍品。",
          en: "Amber is fossilized pine resin tens of millions of years old; the ancient Amber Road carried it to the Roman Empire, and Palanga's Amber Museum holds thousands of pieces, insects trapped inside included.",
        },
      },
    ],
  },
  BLR: {
    extraQuiz: [
      {
        question: {
          zh: "白俄羅斯全國最高點捷爾任斯克山的海拔大約是多少?",
          en: "Roughly how high is Dzyarzhynskaya Hara, the highest point in Belarus?",
        },
        options: [
          { zh: "約 345 公尺", en: "About 345 meters" },
          { zh: "約 895 公尺", en: "About 895 meters" },
          { zh: "約 1,345 公尺", en: "About 1,345 meters" },
          { zh: "約 2,499 公尺", en: "About 2,499 meters" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "白俄羅斯地形由冰河時期的冰磧平原構成,全境沒有真正的山;最高點僅 345 公尺,是歐洲國家中數一數二低的「最高峰」。",
          en: "Belarus is a plain of Ice Age glacial moraine with no true mountains — its 345-meter high point is among the lowest national summits in Europe.",
        },
      },
      {
        question: {
          zh: "哪位以夢幻飛翔戀人與小提琴手畫作聞名的現代畫家,1887 年出生於白俄羅斯的維捷布斯克?",
          en: "Which modern painter, famous for dreamlike floating lovers and fiddlers, was born in Vitebsk, Belarus in 1887?",
        },
        options: [
          { zh: "馬克·夏卡爾", en: "Marc Chagall" },
          { zh: "瓦西里·康丁斯基", en: "Wassily Kandinsky" },
          { zh: "卡濟米爾·馬列維奇", en: "Kazimir Malevich" },
          { zh: "皮特·蒙德里安", en: "Piet Mondrian" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "夏卡爾一生反覆描繪故鄉維捷布斯克的屋頂、牛羊與提琴手,故居現為博物館;馬列維奇雖非本地出生,卻也曾在維捷布斯克的藝術學校任教。",
          en: "Chagall painted Vitebsk's rooftops, animals, and fiddlers all his life, and his childhood home is now a museum; Malevich, though born elsewhere, also taught at Vitebsk's art school.",
        },
      },
      {
        question: {
          zh: "白俄羅斯的世界遺產米爾城堡與涅斯維日城堡,數百年來與哪個顯赫貴族家族關係最深?",
          en: "Belarus's World Heritage Mir and Nesvizh castles are most closely tied to which powerful noble family?",
        },
        options: [
          { zh: "拉濟維烏家族", en: "The Radziwiłł family" },
          { zh: "哈布斯堡家族", en: "The Habsburgs" },
          { zh: "羅曼諾夫家族", en: "The Romanovs" },
          { zh: "美第奇家族", en: "The Medici" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "拉濟維烏家族是立陶宛大公國與波蘭-立陶宛聯邦最有權勢的貴族之一,涅斯維日是其家族本邸,米爾城堡也自 16 世紀起歸其所有,兩者先後列入世界遺產。",
          en: "The Radziwiłłs ranked among the mightiest magnates of the Grand Duchy of Lithuania and the Commonwealth; Nesvizh was their family seat and Mir Castle theirs from the 16th century — both now World Heritage Sites.",
        },
      },
    ],
  },
};
