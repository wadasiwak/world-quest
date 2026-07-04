import type { CountryExtras } from "../types";

// Supplementary content for the 16 Asian countries — see types.ts.

export const ASIA_EXTRAS: Record<string, CountryExtras> = {
  TWN: {
    climate: {
      zh: "北部屬副熱帶季風氣候、南部近熱帶,夏季濕熱多颱風(7–9 月),冬季北部濕涼、南部溫暖。高山地區終年涼爽,合歡山冬季偶有降雪。最佳旅遊季為 10–12 月與 3–4 月,天氣穩定舒適。",
      en: "Subtropical monsoon in the north and near-tropical in the south. Summers are hot and humid with typhoons from July to September; winters are cool and damp in the north, mild in the south. High mountains stay cool year-round with occasional snow. Best months: October–December and March–April.",
    },
    travelTips: [
      {
        zh: "捷運與台鐵車廂內禁止飲食(包括喝水嚼口香糖),違者可罰款。",
        en: "Eating and drinking (even water or gum) are banned on the metro and trains, with fines for violations.",
      },
      {
        zh: "一張悠遊卡可通行捷運、公車、便利商店與 YouBike,是最方便的支付方式。",
        en: "An EasyCard covers the metro, buses, convenience stores, and YouBike rentals — the most convenient way to pay.",
      },
      {
        zh: "夏秋颱風季出遊前留意氣象警報,山區與海邊行程可能臨時取消。",
        en: "During typhoon season (summer–autumn), check weather alerts — mountain and coastal activities may be cancelled at short notice.",
      },
      {
        zh: "夜市多為現金交易,建議隨身準備小額新台幣。",
        en: "Night-market stalls are mostly cash-only, so carry small New Taiwan Dollar bills.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "哪一條重要緯線橫貫台灣中南部,讓島嶼同時跨越熱帶與副熱帶氣候區?",
          en: "Which major line of latitude crosses south-central Taiwan, placing the island in both tropical and subtropical zones?",
        },
        options: [
          { zh: "北回歸線", en: "The Tropic of Cancer" },
          { zh: "南回歸線", en: "The Tropic of Capricorn" },
          { zh: "赤道", en: "The Equator" },
          { zh: "北緯 30 度線", en: "The 30th parallel north" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "北回歸線(北緯 23.5 度)穿過嘉義與花蓮一帶,兩地都設有北回歸線標誌塔。",
          en: "The Tropic of Cancer (23.5°N) passes through Chiayi and Hualien, both of which have monuments marking the line.",
        },
      },
      {
        question: {
          zh: "台灣最高峰玉山的海拔高度約為多少?",
          en: "Roughly how tall is Yushan (Jade Mountain), Taiwan's highest peak?",
        },
        options: [
          { zh: "約 3,952 公尺", en: "About 3,952 m" },
          { zh: "約 3,505 公尺", en: "About 3,505 m" },
          { zh: "約 4,205 公尺", en: "About 4,205 m" },
          { zh: "約 2,950 公尺", en: "About 2,950 m" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "玉山主峰高 3,952 公尺,比日本富士山(3,776 公尺)還高,是東北亞最高峰之一。",
          en: "Yushan's main peak rises 3,952 m — taller than Mt. Fuji (3,776 m) and among Northeast Asia's highest summits.",
        },
      },
      {
        question: {
          zh: "台灣原住民族的語言屬於哪個語系,台灣也被許多學者視為該語系的擴散起點?",
          en: "Taiwan's indigenous languages belong to which language family, of which the island is widely seen as the dispersal homeland?",
        },
        options: [
          { zh: "南島語系", en: "The Austronesian family" },
          { zh: "漢藏語系", en: "The Sino-Tibetan family" },
          { zh: "壯侗語系", en: "The Tai-Kadai family" },
          { zh: "南亞語系", en: "The Austroasiatic family" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "主流「出台灣說」認為南島語族約五千年前自台灣出發,擴散至東南亞島嶼、大洋洲與馬達加斯加。",
          en: "The leading 'Out of Taiwan' theory holds that Austronesian speakers spread from Taiwan some 5,000 years ago as far as Madagascar and Polynesia.",
        },
      },
    ],
  },
  JPN: {
    climate: {
      zh: "國土南北狹長,氣候差異大:北海道屬亞寒帶、本州多為溫帶四季分明、沖繩則是亞熱帶。6 月中至 7 月有梅雨,夏末秋初多颱風,日本海側冬季豪雪。春季賞櫻(3–4 月)與秋季紅葉(10–11 月)是最佳旅遊季。",
      en: "Stretching far north to south, Japan spans subarctic Hokkaido, temperate four-season Honshu, and subtropical Okinawa. The rainy season runs mid-June to July, typhoons peak in late summer, and the Sea of Japan coast gets heavy snow. Best times: cherry blossoms in March–April and autumn foliage in October–November.",
    },
    travelTips: [
      {
        zh: "日本沒有小費文化,留小費反而可能造成困擾;服務費已含在帳單內。",
        en: "There is no tipping culture — leaving a tip can cause confusion, as service is included in the bill.",
      },
      {
        zh: "電車內請勿講電話,並將手機調為靜音,是普遍遵守的禮儀。",
        en: "On trains, avoid phone calls and switch your phone to silent mode — an etiquette rule everyone follows.",
      },
      {
        zh: "街頭垃圾桶極少,垃圾請隨身帶走;邊走邊吃在許多地方也被視為不禮貌。",
        en: "Public trash bins are rare, so carry your garbage with you; eating while walking is considered impolite in many areas.",
      },
      {
        zh: "許多小型餐館與神社寺院仍只收現金,建議隨身備妥日圓。",
        en: "Many small restaurants, shrines, and temples remain cash-only, so keep yen on hand.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "日本的一級行政區「都道府縣」總共有多少個?",
          en: "How many prefectures (todofuken) make up Japan's first-level administrative divisions?",
        },
        options: [
          { zh: "47 個", en: "47" },
          { zh: "43 個", en: "43" },
          { zh: "50 個", en: "50" },
          { zh: "36 個", en: "36" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "共 47 個:1 都(東京)、1 道(北海道)、2 府(大阪、京都)與 43 縣。",
          en: "There are 47: one 'to' (Tokyo), one 'do' (Hokkaido), two 'fu' (Osaka and Kyoto), and 43 'ken' (prefectures).",
        },
      },
      {
        question: {
          zh: "富士山最近一次噴發是在哪一年?",
          en: "When did Mount Fuji last erupt?",
        },
        options: [
          { zh: "1707 年(寶永噴發)", en: "1707 (the Hoei eruption)" },
          { zh: "1854 年", en: "1854" },
          { zh: "1923 年", en: "1923" },
          { zh: "1611 年", en: "1611" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1707 年寶永大噴發的火山灰一路飄到江戶,至今富士山仍被列為活火山持續監測。",
          en: "The 1707 Hoei eruption dropped ash as far as Edo (Tokyo). Fuji is still classified as an active volcano and monitored today.",
        },
      },
      {
        question: {
          zh: "2019 年啟用的年號「令和」在出典上有什麼開創性意義?",
          en: "The era name 'Reiwa', adopted in 2019, broke precedent in what way?",
        },
        options: [
          {
            zh: "首次取自日本古籍《萬葉集》而非中國典籍",
            en: "It was the first taken from a Japanese classic (the Man'yoshu) rather than Chinese literature",
          },
          { zh: "首次由全民投票決定", en: "It was the first chosen by public vote" },
          { zh: "首次使用三個漢字", en: "It was the first written with three kanji" },
          { zh: "首次沿用前一個年號的字", en: "It was the first to reuse a character from the previous era" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "歷代年號皆出自中國經典,「令和」取自日本最古老詩歌集《萬葉集》的梅花歌序,是史上第一次。",
          en: "All previous era names came from Chinese classics; 'Reiwa' was drawn from a plum-blossom preface in the Man'yoshu, Japan's oldest poetry anthology.",
        },
      },
    ],
  },
  KOR: {
    climate: {
      zh: "屬溫帶季風氣候,四季分明:夏季濕熱並有 6–7 月梅雨與颱風,冬季受西伯利亞冷氣團影響乾冷,首爾常低於零度。春季櫻花與秋季楓紅最宜旅遊,尤以 9–11 月天高氣爽為最佳季節。",
      en: "A temperate monsoon climate with four distinct seasons: hot, humid summers with a June–July rainy season and typhoons, and dry, bitter winters under Siberian air — Seoul often drops below freezing. Spring blossoms and autumn foliage are ideal; September–November offers the finest weather.",
    },
    travelTips: [
      {
        zh: "T-money 交通卡通用於地鐵、公車與計程車,便利商店即可購買儲值。",
        en: "A T-money card works on subways, buses, and taxis, and can be bought and topped up at any convenience store.",
      },
      {
        zh: "與長輩用餐時,晚輩通常待長輩動筷後才開動;雙手接遞物品是基本禮貌。",
        en: "At meals, wait for the eldest to start eating first, and use both hands when giving or receiving items — basic courtesies.",
      },
      {
        zh: "Google 地圖在韓國導航功能受限,建議改用 Naver Map 或 Kakao Map。",
        en: "Google Maps has limited navigation in Korea — use Naver Map or Kakao Map instead.",
      },
      {
        zh: "地鐵設有敬老座與孕婦座,即使車廂擁擠一般乘客也多不去坐。",
        en: "Subway cars have priority seats for seniors and pregnant passengers that most riders leave empty even when trains are crowded.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "韓文字母「諺文」(한글)是由哪位君主主導創制的?",
          en: "The Korean alphabet, Hangul, was created under which ruler?",
        },
        options: [
          { zh: "世宗大王", en: "King Sejong the Great" },
          { zh: "太祖李成桂", en: "King Taejo (Yi Seong-gye)" },
          { zh: "高宗", en: "Emperor Gojong" },
          { zh: "光海君", en: "Gwanghaegun" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "世宗大王於 1443 年創制、1446 年以《訓民正音》頒布諺文,讓平民也能讀寫,被視為最科學的文字之一。",
          en: "King Sejong devised Hangul in 1443 and promulgated it in 1446 as 'Hunminjeongeum', giving commoners a writing system praised for its scientific design.",
        },
      },
      {
        question: {
          zh: "南韓最高峰漢拏山(1,947 公尺)位於哪裡?",
          en: "Where is Hallasan (1,947 m), South Korea's highest peak?",
        },
        options: [
          { zh: "濟州島", en: "Jeju Island" },
          { zh: "江原道雪嶽山一帶", en: "The Seoraksan area of Gangwon Province" },
          { zh: "智異山國家公園", en: "Jirisan National Park" },
          { zh: "釜山近郊", en: "The outskirts of Busan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "漢拏山是濟州島中央的休眠火山,整座島嶼便是由它的噴發形成,山頂有火山口湖「白鹿潭」。",
          en: "Hallasan is a dormant volcano at the center of Jeju Island — the island itself was formed by its eruptions — with the crater lake Baengnokdam at its summit.",
        },
      },
      {
        question: {
          zh: "分隔南北韓的非軍事區(DMZ)寬度約為多少?",
          en: "How wide is the Demilitarized Zone (DMZ) separating the two Koreas?",
        },
        options: [
          { zh: "約 4 公里", en: "About 4 km" },
          { zh: "約 1 公里", en: "About 1 km" },
          { zh: "約 10 公里", en: "About 10 km" },
          { zh: "約 20 公里", en: "About 20 km" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "DMZ 沿 1953 年停戰線兩側各延伸 2 公里、全長約 250 公里;數十年人跡罕至,意外成為野生動物庇護所。",
          en: "The DMZ extends 2 km on each side of the 1953 armistice line for about 250 km. Left untouched for decades, it has become an accidental wildlife refuge.",
        },
      },
    ],
  },
  CHN: {
    climate: {
      zh: "幅員遼闊,氣候從南方亞熱帶、熱帶延伸到北方溫帶與西部高原、沙漠氣候。東部受季風影響夏雨集中,北方冬季嚴寒乾燥,西北極為乾旱。多數地區以春(4–5 月)、秋(9–10 月)最宜旅遊。",
      en: "A vast territory spanning subtropical and tropical south, temperate north, and plateau and desert climates in the west. The monsoonal east gets concentrated summer rain, northern winters are cold and dry, and the northwest is arid. For most regions, spring (April–May) and autumn (September–October) are best.",
    },
    travelTips: [
      {
        zh: "行動支付(微信支付、支付寶)幾乎取代現金,國際旅客可綁定外國信用卡使用。",
        en: "Mobile payment (WeChat Pay, Alipay) has largely replaced cash; foreign visitors can link international credit cards.",
      },
      {
        zh: "Google、Instagram 等多數國際網路服務在境內無法使用,行前需預作準備。",
        en: "Google, Instagram, and most international internet services are blocked — plan your connectivity before arrival.",
      },
      {
        zh: "熱門景點(故宮、兵馬俑等)多需提前實名預約,旺季常數日前即售罄。",
        en: "Major sights like the Forbidden City and Terracotta Army require advance real-name booking and often sell out days ahead in peak season.",
      },
      {
        zh: "高鐵購票採實名制,進站乘車均需出示護照。",
        en: "High-speed rail tickets are ID-linked — you'll need your passport both to buy tickets and to board.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "中國第一長河長江,長度在世界河流中排名第幾?",
          en: "The Yangtze, China's longest river, ranks where among the world's rivers by length?",
        },
        options: [
          { zh: "第三(僅次於尼羅河與亞馬遜河)", en: "Third (after the Nile and the Amazon)" },
          { zh: "第一", en: "First" },
          { zh: "第五", en: "Fifth" },
          { zh: "第七", en: "Seventh" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "長江全長約 6,300 公里,是亞洲最長、世界第三長河,也是完全流經單一國家的最長河流。",
          en: "At about 6,300 km, the Yangtze is Asia's longest and the world's third-longest river — and the longest to flow entirely within one country.",
        },
      },
      {
        question: {
          zh: "中國的陸地鄰國共有多少個,與俄羅斯並列世界最多?",
          en: "How many countries share a land border with China — tying Russia for the world's most neighbors?",
        },
        options: [
          { zh: "14 個", en: "14" },
          { zh: "10 個", en: "10" },
          { zh: "8 個", en: "8" },
          { zh: "17 個", en: "17" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "中國陸地邊界長逾兩萬公里,與俄羅斯、印度、越南、蒙古等 14 國接壤。",
          en: "China's land border runs over 20,000 km, touching 14 countries including Russia, India, Vietnam, and Mongolia.",
        },
      },
      {
        question: {
          zh: "中國陸地的最低點位於哪裡?",
          en: "Where is China's lowest point on land?",
        },
        options: [
          { zh: "新疆吐魯番盆地的艾丁湖", en: "Lake Ayding in the Turpan Depression, Xinjiang" },
          { zh: "四川盆地", en: "The Sichuan Basin" },
          { zh: "柴達木盆地", en: "The Qaidam Basin" },
          { zh: "華北平原沿海", en: "The North China Plain coast" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "艾丁湖湖面低於海平面約 154 公尺,是中國最低點;吐魯番同時也是中國夏季最炎熱的地方之一。",
          en: "Lake Ayding lies about 154 m below sea level — China's lowest point. The Turpan Depression is also among the hottest places in China each summer.",
        },
      },
    ],
  },
  IND: {
    climate: {
      zh: "以熱帶季風氣候為主,一年大致分三季:3–5 月酷熱、6–9 月西南季風帶來雨季、10–2 月涼爽乾燥。北部山區屬高山氣候,西北有塔爾沙漠。10 月至 3 月的涼季是多數地區的最佳旅遊時節。",
      en: "Dominated by a tropical monsoon climate with three broad seasons: scorching heat from March to May, the southwest monsoon rains from June to September, and a cool, dry stretch from October to February. The Himalayan north is alpine and the northwest holds the Thar Desert. October through March is the best time to visit most regions.",
    },
    travelTips: [
      {
        zh: "只喝瓶裝水或煮沸的水,避免生水與加冰飲料,腸胃敏感者街頭飲食需謹慎。",
        en: "Drink only bottled or boiled water, skip ice in drinks, and approach street food carefully if you have a sensitive stomach.",
      },
      {
        zh: "參觀寺廟與清真寺需脫鞋,肩膀與膝蓋以下應遮蔽,部分寺廟不對非信徒開放。",
        en: "Remove shoes at temples and mosques and cover shoulders and knees; some temples are closed to non-believers.",
      },
      {
        zh: "搭乘計程車與嘟嘟車請先議價或堅持跳表,或直接使用 Uber、Ola 等叫車軟體。",
        en: "Agree on taxi and auto-rickshaw fares upfront or insist on the meter — or simply use ride-hailing apps like Uber and Ola.",
      },
      {
        zh: "傳統上以右手取食與遞物,左手被視為不潔。",
        en: "Traditionally, eat and hand things over with your right hand — the left is considered unclean.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "印度全國採用的標準時間有什麼特別之處?",
          en: "What is unusual about India Standard Time, used across the whole country?",
        },
        options: [
          {
            zh: "全國單一時區,且與 UTC 相差 5 小時 30 分的半小時制",
            en: "It's a single nationwide zone offset by a half-hour: UTC+5:30",
          },
          { zh: "分為東西兩個時區", en: "The country is split into two time zones" },
          { zh: "夏季實施日光節約時間", en: "It observes daylight saving in summer" },
          { zh: "與 UTC 相差整整 6 小時", en: "It's a full six hours ahead of UTC" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "印度東西橫跨近 3,000 公里卻只用一個時區,且採罕見的 +5:30 半小時偏移。",
          en: "Despite spanning nearly 3,000 km east to west, India uses one time zone with a rare half-hour offset of UTC+5:30.",
        },
      },
      {
        question: {
          zh: "印度憲法第八附表正式承認多少種語言?",
          en: "How many languages are officially recognized in the Eighth Schedule of India's constitution?",
        },
        options: [
          { zh: "22 種", en: "22" },
          { zh: "15 種", en: "15" },
          { zh: "30 種", en: "30" },
          { zh: "12 種", en: "12" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "第八附表列有印地語、孟加拉語、泰米爾語等 22 種語言;印度實際使用中的語言更多達數百種。",
          en: "The Eighth Schedule lists 22 languages, including Hindi, Bengali, and Tamil — while hundreds more are spoken across the country.",
        },
      },
      {
        question: {
          zh: "世界年降雨量最高的地區之一「毛辛拉姆」(Mawsynram)位於印度哪一邦?",
          en: "Mawsynram, one of the rainiest places on Earth, is in which Indian state?",
        },
        options: [
          { zh: "東北部的梅加拉亞邦", en: "Meghalaya, in the northeast" },
          { zh: "西南部的喀拉拉邦", en: "Kerala, in the southwest" },
          { zh: "西孟加拉邦", en: "West Bengal" },
          { zh: "阿薩姆邦", en: "Assam" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "梅加拉亞邦意為「雲之居所」,毛辛拉姆年均降雨量近 12,000 毫米,與鄰近的乞拉朋齊同列世界最多雨之地。",
          en: "Meghalaya means 'abode of clouds'; Mawsynram averages nearly 12,000 mm of rain a year, rivaling nearby Cherrapunji as the world's wettest place.",
        },
      },
    ],
  },
  THA: {
    climate: {
      zh: "屬熱帶季風氣候,全年濕熱,大致分三季:3–5 月炎熱、6–10 月雨季、11–2 月涼季。南部半島全年多雨,兩岸雨季時間錯開。11 月至 2 月涼爽少雨,是全國多數地區的最佳旅遊季。",
      en: "A tropical monsoon climate, hot and humid year-round with three seasons: scorching March–May, rainy June–October, and cool November–February. The southern peninsula sees rain year-round, with the two coasts' wet seasons offset. November to February is the best time for most of the country.",
    },
    travelTips: [
      {
        zh: "王室在泰國地位崇高,批評王室觸犯冒犯君主罪,可處重刑,言行務必謹慎。",
        en: "The monarchy is deeply revered — criticizing it violates lèse-majesté laws carrying heavy prison terms, so watch what you say and post.",
      },
      {
        zh: "進入寺廟需脫鞋並遮蓋肩膀與膝蓋;佛像是神聖之物,勿攀爬或擺不敬的姿勢拍照。",
        en: "Remove shoes and cover shoulders and knees at temples; Buddha images are sacred — never climb on them or pose disrespectfully.",
      },
      {
        zh: "頭部被視為神聖、腳部為卑下,勿觸摸他人頭部,也勿用腳指人或指物。",
        en: "The head is sacred and the feet lowly: don't touch anyone's head or point at people or objects with your feet.",
      },
      {
        zh: "搭計程車堅持跳表,嘟嘟車須先講好價錢;Grab 叫車軟體在城市中很好用。",
        en: "Insist on the meter in taxis and agree tuk-tuk fares in advance — or use the Grab app in cities.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "泰國在 1939 年改為現名之前,原本的國名是什麼?",
          en: "Before adopting its current name in 1939, Thailand was known as what?",
        },
        options: [
          { zh: "暹羅", en: "Siam" },
          { zh: "蘭納", en: "Lanna" },
          { zh: "真臘", en: "Chenla" },
          { zh: "扶南", en: "Funan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「暹羅」之名沿用數百年,1939 年改為「泰國」,意為「自由之地」,呼應其從未被殖民的歷史。",
          en: "The name Siam had been used for centuries; in 1939 it became Thailand — 'land of the free' — echoing its uncolonized history.",
        },
      },
      {
        question: {
          zh: "泰國的最高峰是哪座山?",
          en: "What is Thailand's highest mountain?",
        },
        options: [
          { zh: "因他農山(2,565 公尺)", en: "Doi Inthanon (2,565 m)" },
          { zh: "素貼山", en: "Doi Suthep" },
          { zh: "清道山", en: "Doi Luang Chiang Dao" },
          { zh: "考鑾山", en: "Khao Luang" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "因他農山位於清邁府,是喜馬拉雅山系延伸的末端,山頂建有紀念泰王與王后的雙塔。",
          en: "Doi Inthanon in Chiang Mai province marks the tail end of the Himalayan ranges; twin pagodas honoring the king and queen crown its summit.",
        },
      },
      {
        question: {
          zh: "泰國傳統新年「宋干節」(潑水節)在每年的哪個月份舉行?",
          en: "Songkran, the Thai traditional new year famous for water fights, falls in which month?",
        },
        options: [
          { zh: "4 月", en: "April" },
          { zh: "1 月", en: "January" },
          { zh: "11 月", en: "November" },
          { zh: "6 月", en: "June" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "宋干節於 4 月 13–15 日舉行,潑水源自以清水淨身祈福的習俗,如今演變為全國性的歡樂水仗。",
          en: "Songkran runs April 13–15; the water throwing began as a cleansing blessing ritual and has grown into a nationwide water fight.",
        },
      },
    ],
  },
  VNM: {
    climate: {
      zh: "國土狹長,南北氣候迥異:北部屬副熱帶,冬季濕涼、夏季炎熱;南部為熱帶,全年高溫,分 5–10 月雨季與 11–4 月乾季;中部秋季常有颱風與洪水。北部宜 10–12 月、南部宜 12–4 月造訪。",
      en: "Long and narrow, Vietnam splits climatically: the subtropical north has cool, damp winters and hot summers; the tropical south stays warm year-round with a May–October wet season and November–April dry season; the central coast faces autumn typhoons and floods. Visit the north in October–December and the south in December–April.",
    },
    travelTips: [
      {
        zh: "過馬路面對機車洪流要保持穩定步伐緩慢前進,切勿突然奔跑或倒退,車流會自行避開。",
        en: "To cross streets through the motorbike flood, walk slowly and steadily without sudden stops or dashes — the traffic will flow around you.",
      },
      {
        zh: "越南盾面額動輒數十萬,鈔票顏色相近,付款時務必核對零的數量。",
        en: "Vietnamese dong notes run into the hundreds of thousands and look similar — count the zeros carefully when paying.",
      },
      {
        zh: "市場與觀光區購物普遍可議價,開價常有相當彈性;Grab 叫車可避免車資糾紛。",
        en: "Bargaining is expected in markets and tourist areas, and using Grab for rides avoids fare disputes.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "越南現行的文字「國語字」以什麼書寫系統為基礎?",
          en: "Vietnam's modern script, chu Quoc ngu, is based on which writing system?",
        },
        options: [
          { zh: "拉丁字母", en: "The Latin alphabet" },
          { zh: "漢字", en: "Chinese characters" },
          { zh: "喃字", en: "Chu Nom characters" },
          { zh: "高棉字母", en: "The Khmer script" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "17 世紀傳教士以拉丁字母加聲調符號拼寫越南語,20 世紀全面取代漢字與喃字,越南因此成為東亞少數使用拉丁文字的國家。",
          en: "17th-century missionaries devised a Latin script with tone marks for Vietnamese; it fully replaced Chinese and Nom characters in the 20th century, making Vietnam a rare Latin-script country in East Asia.",
        },
      },
      {
        question: {
          zh: "越南最高峰、有「印度支那屋脊」之稱的是哪座山?",
          en: "Which peak, nicknamed the 'Roof of Indochina', is Vietnam's highest?",
        },
        options: [
          { zh: "番西邦峰(3,147 公尺)", en: "Fansipan (3,147 m)" },
          { zh: "巴拿山", en: "Ba Na Hills" },
          { zh: "黑婆山", en: "Ba Den Mountain" },
          { zh: "五行山", en: "The Marble Mountains" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "番西邦峰位於西北部黃連山山脈、鄰近沙壩,是中南半島最高峰,如今有纜車直達峰頂。",
          en: "Fansipan rises in the Hoang Lien Son range near Sapa in the northwest — the highest point on the Indochinese Peninsula, now reachable by cable car.",
        },
      },
      {
        question: {
          zh: "越南獨有的傳統表演藝術「水上木偶戲」發源於哪個地區?",
          en: "Water puppetry, Vietnam's unique performing art, originated in which region?",
        },
        options: [
          { zh: "北部紅河三角洲", en: "The Red River Delta in the north" },
          { zh: "南部湄公河三角洲", en: "The Mekong Delta in the south" },
          { zh: "中部順化一帶", en: "The Hue area in the center" },
          { zh: "西原高原", en: "The Central Highlands" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "約一千年前紅河三角洲的農民在稻田積水中操偶演戲自娛,演變成以水池為舞台的獨特劇種。",
          en: "Around a thousand years ago, Red River Delta farmers staged puppet shows in flooded rice paddies — evolving into theatre performed on a pool of water.",
        },
      },
    ],
  },
  PHL: {
    climate: {
      zh: "屬熱帶海洋性氣候,終年高溫,大致分 12–5 月乾季與 6–11 月雨季。地處西太平洋颱風走廊,每年約有 20 個颱風侵襲或接近,以 7–10 月最頻繁。12 月至 4 月天氣穩定,是海島旅遊的最佳季節。",
      en: "A tropical maritime climate, hot year-round, with a dry season from December to May and a wet season from June to November. Sitting in the western Pacific typhoon belt, the country sees about 20 typhoons a year, peaking July–October. December to April brings the most stable weather for island trips.",
    },
    travelTips: [
      {
        zh: "英語是官方語言之一,溝通幾乎無障礙,是東南亞英語最通行的國家之一。",
        en: "English is an official language and spoken nearly everywhere — among the easiest countries in Southeast Asia to get around in English.",
      },
      {
        zh: "馬尼拉部分區域治安欠佳,夜間避免單獨步行,財物勿外露,搭車建議用 Grab。",
        en: "Parts of Manila have safety issues: avoid walking alone at night, keep valuables out of sight, and use Grab for rides.",
      },
      {
        zh: "跳島行程受天候影響大,颱風季船班常臨時停駛,行程請保留彈性。",
        en: "Island-hopping depends heavily on weather — ferries are often suspended at short notice in typhoon season, so build in buffer days.",
      },
      {
        zh: "餐廳帳單若未含服務費,習慣留 5–10% 小費;行李員與導遊也常收小費。",
        en: "If a service charge isn't on the bill, tipping 5–10% is customary, and porters and guides also expect small tips.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "「菲律賓」這個國名是為了紀念誰而命名的?",
          en: "The Philippines is named in honor of whom?",
        },
        options: [
          { zh: "西班牙國王腓力二世", en: "King Philip II of Spain" },
          { zh: "航海家麥哲倫", en: "The explorer Ferdinand Magellan" },
          { zh: "西班牙女王伊莎貝拉一世", en: "Queen Isabella I of Spain" },
          { zh: "征服者黎牙實比", en: "The conquistador Miguel López de Legazpi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1543 年西班牙探險家以王儲腓力(後來的腓力二世)之名將群島命名為 Las Islas Filipinas,沿用至今。",
          en: "In 1543 a Spanish expedition named the islands Las Islas Filipinas after Crown Prince Philip, later King Philip II — and the name stuck.",
        },
      },
      {
        question: {
          zh: "菲律賓群島傳統上劃分為哪三大島群?",
          en: "The Philippine archipelago is traditionally divided into which three island groups?",
        },
        options: [
          { zh: "呂宋、維薩亞斯、民答那峨", en: "Luzon, Visayas, and Mindanao" },
          { zh: "呂宋、巴拉望、蘇祿", en: "Luzon, Palawan, and Sulu" },
          { zh: "宿霧、薄荷、長灘", en: "Cebu, Bohol, and Boracay" },
          { zh: "民都洛、內格羅斯、班乃", en: "Mindoro, Negros, and Panay" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "北部呂宋、中部維薩亞斯、南部民答那峨是三大島群,國旗上太陽的八道光芒則代表最早起義的八省。",
          en: "Luzon in the north, the Visayas in the middle, and Mindanao in the south form the three groups; the flag's sun rays honor the first eight provinces to revolt against Spain.",
        },
      },
      {
        question: {
          zh: "1991 年菲律賓哪座火山爆發,規模為 20 世紀最大之一,火山灰甚至影響全球氣溫?",
          en: "Which Philippine volcano erupted in 1991 — one of the 20th century's largest blasts, briefly cooling global temperatures?",
        },
        options: [
          { zh: "皮納圖博火山", en: "Mount Pinatubo" },
          { zh: "馬永火山", en: "Mayon Volcano" },
          { zh: "塔爾火山", en: "Taal Volcano" },
          { zh: "阿波火山", en: "Mount Apo" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "呂宋島皮納圖博火山沉睡數百年後大爆發,噴出的硫酸鹽氣膠使隔年全球均溫下降約 0.5 度。",
          en: "Dormant for centuries, Pinatubo on Luzon blew catastrophically; its sulfate aerosols lowered global temperatures by roughly 0.5°C the following year.",
        },
      },
    ],
  },
  IDN: {
    climate: {
      zh: "赤道橫貫全境,屬熱帶雨林與熱帶季風氣候,全年高溫濕熱,氣溫變化小,大致分 5–10 月乾季與 11–4 月雨季。山區涼爽,火山高峰甚至有霜。乾季(尤其 6–9 月)是造訪峇里島與爪哇的最佳時節。",
      en: "Straddling the equator, Indonesia has tropical rainforest and monsoon climates — hot and humid year-round with little temperature swing, split roughly into a May–October dry season and a November–April wet season. Highlands stay cool, with frost on some volcanic peaks. The dry months, especially June–September, are ideal for Bali and Java.",
    },
    travelTips: [
      {
        zh: "全國多數地區信奉伊斯蘭教,進清真寺需脫鞋、遮蔽肩膝;峇里島寺廟則需圍上沙龍腰帶。",
        en: "Most of the country is Muslim: remove shoes and cover shoulders and knees at mosques; Balinese Hindu temples require a sarong and sash.",
      },
      {
        zh: "峇里島「安寧日」全島關閉一天,連機場也停飛,訂行程前先查當年日期。",
        en: "On Bali's Nyepi day the whole island shuts down — including the airport — so check the date before booking.",
      },
      {
        zh: "用左手遞物被視為不禮貌,交付金錢或名片請用右手。",
        en: "Handing things over with the left hand is impolite — use your right hand for money and cards.",
      },
      {
        zh: "城市交通壅塞嚴重,Gojek 與 Grab 的機車計程車是短程移動利器。",
        en: "Urban traffic is notorious; motorbike taxis on Gojek or Grab are the fastest way to cover short distances.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "印尼的國家格言「Bhinneka Tunggal Ika」意思是什麼?",
          en: "What does Indonesia's national motto, 'Bhinneka Tunggal Ika', mean?",
        },
        options: [
          { zh: "異中有一(多元中的統一)", en: "Unity in diversity" },
          { zh: "自由與繁榮", en: "Freedom and prosperity" },
          { zh: "信仰、國家、國王", en: "Faith, nation, king" },
          { zh: "海洋即生命", en: "The sea is life" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這句古爪哇語出自 14 世紀史詩,恰如其分地描述這個擁有一千三百多個族群、七百多種語言的群島國家。",
          en: "The Old Javanese phrase comes from a 14th-century epic poem — fitting for an archipelago of over 1,300 ethnic groups and 700 languages.",
        },
      },
      {
        question: {
          zh: "世界最大的蜥蜴科莫多龍,原生棲地在印尼哪個區域?",
          en: "The Komodo dragon, the world's largest lizard, is native to which part of Indonesia?",
        },
        options: [
          { zh: "小巽他群島(科莫多島一帶)", en: "The Lesser Sunda Islands, around Komodo" },
          { zh: "蘇門答臘", en: "Sumatra" },
          { zh: "加里曼丹(婆羅洲)", en: "Kalimantan (Borneo)" },
          { zh: "蘇拉威西", en: "Sulawesi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "科莫多龍體長可達 3 公尺,僅分布於科莫多、林卡等少數小島,科莫多國家公園為世界遺產。",
          en: "Growing up to 3 m long, the dragons live only on Komodo, Rinca, and a few neighboring islets — Komodo National Park is a World Heritage site.",
        },
      },
      {
        question: {
          zh: "蘇門答臘的多巴湖是世界最大的火山湖,它是如何形成的?",
          en: "Lake Toba on Sumatra is the world's largest volcanic lake. How did it form?",
        },
        options: [
          {
            zh: "約 7 萬 4 千年前超級火山噴發後塌陷成的破火山口湖",
            en: "A caldera left by a supervolcano eruption about 74,000 years ago",
          },
          { zh: "冰河退卻挖蝕出的冰蝕湖", en: "A glacial lake carved by retreating ice" },
          { zh: "隕石撞擊坑積水成湖", en: "A meteor impact crater that filled with water" },
          { zh: "河流改道遺留的牛軛湖", en: "An oxbow lake left by a shifting river" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "多巴超級噴發是近數十萬年來地球最大規模的火山事件之一,留下長約 100 公里的破火山口,湖中央還隆起了沙摩西島。",
          en: "The Toba supereruption was among Earth's largest volcanic events in hundreds of millennia, leaving a caldera some 100 km long with Samosir Island rising at its center.",
        },
      },
    ],
  },
  MYS: {
    climate: {
      zh: "屬熱帶雨林氣候,全年高溫多雨,氣溫約 25–33 度,午後常有雷陣雨。受季風影響,西馬東海岸 11–2 月雨勢最猛,西海岸與東馬雨季較分散。造訪東海岸島嶼以 4–9 月為佳,其他地區全年皆宜。",
      en: "An equatorial rainforest climate: hot and wet year-round at 25–33°C, with frequent afternoon thunderstorms. Monsoons drench Peninsular Malaysia's east coast from November to February, while the west coast and Borneo see more scattered rain. Visit east-coast islands April–September; elsewhere any season works.",
    },
    travelTips: [
      {
        zh: "多元宗教社會禮俗各異:進清真寺與印度廟需脫鞋、注意衣著,齋戒月期間避免在穆斯林面前公開飲食。",
        en: "A multi-faith society with varied etiquette: remove shoes and dress modestly at mosques and Hindu temples, and avoid eating openly in front of Muslims during Ramadan.",
      },
      {
        zh: "吉隆坡市區以 Grab 叫車最方便,價格透明且普遍比路邊攔車便宜。",
        en: "In Kuala Lumpur, Grab is the easiest way to get around — transparent pricing and usually cheaper than hailing cabs.",
      },
      {
        zh: "小販中心與嘛嘛檔(mamak)是平價美食精華,營業到深夜,多數只收現金或電子錢包。",
        en: "Hawker centres and late-night mamak stalls serve the best cheap food; most take only cash or local e-wallets.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "馬來西亞的最高峰是哪座山?",
          en: "What is Malaysia's highest mountain?",
        },
        options: [
          { zh: "沙巴的京那巴魯山(4,095 公尺)", en: "Mount Kinabalu in Sabah (4,095 m)" },
          { zh: "大漢山", en: "Gunung Tahan" },
          { zh: "姆魯山", en: "Gunung Mulu" },
          { zh: "蘭卡威的馬西岡山", en: "Gunung Machinchang on Langkawi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "京那巴魯山位於婆羅洲沙巴州,是馬來西亞第一高峰與著名登山勝地,山區生態豐富,列入世界遺產。",
          en: "Mount Kinabalu in Sabah, Borneo, is Malaysia's highest peak and a famous climb; its biodiverse slopes are a World Heritage site.",
        },
      },
      {
        question: {
          zh: "馬來西亞的國家元首制度有什麼世界罕見的特點?",
          en: "What is globally unusual about Malaysia's head of state?",
        },
        options: [
          {
            zh: "由九個州的世襲統治者每五年輪流出任",
            en: "The nine hereditary state rulers take turns holding the office on five-year terms",
          },
          { zh: "由全民直選產生", en: "The monarch is directly elected by the people" },
          { zh: "首相同時兼任國家元首", en: "The prime minister doubles as head of state" },
          { zh: "王位由女性優先繼承", en: "The throne passes by female-first succession" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "最高元首(Yang di-Pertuan Agong)由九位馬來州屬蘇丹按輪序推選,任期五年,是世界少見的「輪任君主制」。",
          en: "The Yang di-Pertuan Agong is chosen in rotation among the nine Malay sultans for a five-year reign — a rotational monarchy nearly unique in the world.",
        },
      },
      {
        question: {
          zh: "馬來西亞聯邦由多少個州組成?",
          en: "How many states make up the Malaysian federation?",
        },
        options: [
          { zh: "13 個州(另有 3 個聯邦直轄區)", en: "13 states (plus three federal territories)" },
          { zh: "11 個州", en: "11 states" },
          { zh: "9 個州", en: "9 states" },
          { zh: "16 個州", en: "16 states" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西馬 11 州加上婆羅洲的沙巴與砂拉越共 13 州,吉隆坡、布城與納閩則是聯邦直轄區。",
          en: "Eleven peninsular states plus Sabah and Sarawak on Borneo make 13, while Kuala Lumpur, Putrajaya, and Labuan are federal territories.",
        },
      },
    ],
  },
  SGP: {
    climate: {
      zh: "位於赤道附近,屬熱帶雨林氣候,全年高溫濕熱,日均溫約 26–32 度,幾乎天天可能有午後雷陣雨,11–1 月東北季風期間雨量最多。全年皆可造訪,無明顯淡旺季,室內冷氣普遍偏強。",
      en: "Sitting near the equator, Singapore has a tropical rainforest climate: hot and humid all year at 26–32°C, with afternoon thunderstorms possible almost daily and the heaviest rain during the November–January northeast monsoon. Any month works for a visit — just note the famously strong indoor air-conditioning.",
    },
    travelTips: [
      {
        zh: "法規嚴格且執行徹底:亂丟垃圾、地鐵飲食均可罰款,口香糖禁止販售,毒品重罪可判死刑。",
        en: "Laws are strict and enforced: littering and eating on the MRT draw fines, chewing-gum sales are banned, and drug offenses can carry the death penalty.",
      },
      {
        zh: "小販中心用餐後需自行歸還餐盤,座位上放紙巾是本地人「佔位」(chope)的暗號。",
        en: "At hawker centres, return your tray after eating — and a tissue packet on a table means a local has 'choped' (reserved) that seat.",
      },
      {
        zh: "大眾運輸極為便利,感應信用卡即可搭乘地鐵與公車,無需另購交通卡。",
        en: "Public transport is superb — just tap a contactless credit card on the MRT and buses, no separate transit card needed.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "新加坡有四種官方語言,但憲法規定的「國語」是哪一種?",
          en: "Singapore has four official languages, but which one is the constitutional national language?",
        },
        options: [
          { zh: "馬來語", en: "Malay" },
          { zh: "英語", en: "English" },
          { zh: "華語", en: "Mandarin" },
          { zh: "坦米爾語", en: "Tamil" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "基於歷史地位,馬來語是國語,國歌《Majulah Singapura》即以馬來語演唱;行政上則以英語為主要工作語言。",
          en: "For historical reasons Malay is the national language — the anthem 'Majulah Singapura' is sung in Malay — while English serves as the main working language.",
        },
      },
      {
        question: {
          zh: "自 1965 年獨立以來,新加坡的國土面積發生了什麼變化?",
          en: "How has Singapore's land area changed since independence in 1965?",
        },
        options: [
          {
            zh: "靠填海造陸擴大了約四分之一",
            en: "Land reclamation has enlarged it by roughly a quarter",
          },
          { zh: "幾乎維持不變", en: "It has stayed essentially the same" },
          { zh: "因海平面上升而縮小", en: "It has shrunk due to rising sea levels" },
          { zh: "因合併鄰近島嶼而倍增", en: "It doubled by annexing neighboring islands" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "國土從獨立時約 580 平方公里增至約 730 平方公里,濱海灣、樟宜機場等地標都建在填海地上。",
          en: "The country has grown from about 580 km² to about 730 km²; Marina Bay and Changi Airport both stand on reclaimed land.",
        },
      },
      {
        question: {
          zh: "新加坡水資源策略中的「新生水」(NEWater)是什麼?",
          en: "In Singapore's water strategy, what is NEWater?",
        },
        options: [
          {
            zh: "以先進膜技術淨化廢水而成的高純度再生水",
            en: "Ultra-clean reclaimed water purified from wastewater with advanced membrane technology",
          },
          { zh: "海水淡化廠的品牌名稱", en: "The brand name of its desalination plants" },
          { zh: "自馬來西亞進口的礦泉水", en: "Mineral water imported from Malaysia" },
          { zh: "收集雨水的蓄水池系統", en: "A network of rainwater catchment reservoirs" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "新生水是「四大水喉」之一,與集水區、進口水、海水淡化並列,可滿足全國相當比例的用水需求,主要供工業使用。",
          en: "NEWater is one of the 'Four National Taps' alongside catchment, imported, and desalinated water, meeting a substantial share of demand — mostly for industry.",
        },
      },
    ],
  },
  TUR: {
    climate: {
      zh: "沿海與內陸差異明顯:愛琴海與地中海岸屬地中海型氣候,夏乾熱、冬溫濕;黑海沿岸全年多雨;安納托利亞內陸為大陸性氣候,夏熱冬寒多雪。春(4–6 月)與秋(9–10 月)氣候宜人,是旅遊最佳季節。",
      en: "Coast and interior differ sharply: the Aegean and Mediterranean shores have hot, dry summers and mild, wet winters; the Black Sea coast is rainy year-round; and the Anatolian interior is continental, with hot summers and snowy winters. Spring (April–June) and autumn (September–October) are the best times to visit.",
    },
    travelTips: [
      {
        zh: "進清真寺需脫鞋,女性需備頭巾遮髮,肩膀與膝蓋以下應遮蔽,禮拜時間避免入內參觀。",
        en: "At mosques, remove your shoes, women should cover their hair with a scarf, keep shoulders and knees covered, and avoid visiting during prayer times.",
      },
      {
        zh: "大巴札等市集購物議價是常態,店家請喝紅茶是待客之道,不買也無妨。",
        en: "Haggling is standard in bazaars, and being offered tea is simple hospitality — accepting doesn't oblige you to buy.",
      },
      {
        zh: "餐廳習慣留 5–10% 小費;搭計程車確認跳表,伊斯坦堡可用官方叫車 App BiTaksi。",
        en: "Tip 5–10% at restaurants; make sure taxi meters are running, or use the BiTaksi app in Istanbul.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "土耳其最高峰、傳說中諾亞方舟停靠之處是哪座山?",
          en: "Which mountain is Turkey's highest peak, legendary resting place of Noah's Ark?",
        },
        options: [
          { zh: "亞拉拉特山(5,137 公尺)", en: "Mount Ararat (5,137 m)" },
          { zh: "埃爾吉耶斯山", en: "Mount Erciyes" },
          { zh: "烏魯達山", en: "Mount Uludag" },
          { zh: "卡奇卡爾山", en: "Mount Kackar" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "亞拉拉特山是土耳其東端近亞美尼亞邊境的火山,《創世記》記載方舟停於「亞拉拉特山區」,使它成為傳說焦點。",
          en: "Ararat is a volcano in Turkey's far east near the Armenian border; Genesis places the Ark in the 'mountains of Ararat', making it the legend's focus.",
        },
      },
      {
        question: {
          zh: "土耳其著名景點「棉堡」(帕慕卡雷)雪白的階梯地形是如何形成的?",
          en: "How were the snow-white terraces of Pamukkale, Turkey's 'Cotton Castle', formed?",
        },
        options: [
          {
            zh: "富含碳酸鈣的溫泉水沉積出石灰華",
            en: "Calcium-rich hot spring water deposited travertine",
          },
          { zh: "古代大理石礦場的採石遺跡", en: "They're remains of ancient marble quarries" },
          { zh: "海水蒸發後的鹽層結晶", en: "Salt crystallized from evaporated seawater" },
          { zh: "冰河侵蝕出的白色岩層", en: "Glaciers scoured out the white rock" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "溫泉水中的碳酸鈣沉澱千年,層層堆出雪白的石灰華梯池,山頂還有羅馬溫泉城希拉波利斯遺址,同列世界遺產。",
          en: "Over millennia, calcium carbonate in the spring water built up white travertine pools; the Roman spa city of Hierapolis on top shares the World Heritage listing.",
        },
      },
      {
        question: {
          zh: "土耳其東南部的哥貝克力石陣(Göbekli Tepe)以什麼聞名於世?",
          en: "Göbekli Tepe in southeastern Turkey is world-famous as what?",
        },
        options: [
          {
            zh: "已知最古老的巨石神殿遺址,約有一萬一千年歷史",
            en: "The oldest known monumental temple site, about 11,000 years old",
          },
          { zh: "世界最大的羅馬圓形劇場", en: "The world's largest Roman amphitheater" },
          { zh: "拜占庭最深的地下水宮殿", en: "The deepest Byzantine underground cistern" },
          { zh: "保存最完整的十字軍城堡", en: "The best-preserved Crusader castle" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "哥貝克力石陣比巨石陣早約六千年,顯示狩獵採集者已能興建大型祭祀建築,改寫了文明起源的認知。",
          en: "Predating Stonehenge by some 6,000 years, its carved pillars show hunter-gatherers building monumental ritual sites — rewriting our picture of civilization's origins.",
        },
      },
    ],
  },
  SAU: {
    climate: {
      zh: "以炎熱乾燥的沙漠氣候為主,夏季內陸白天常超過 45 度,冬季溫和,北部夜間可近零度;全年降雨稀少,僅西南部亞西爾高地受季風影響較濕潤涼爽。11 月至 2 月天氣涼爽,是旅遊最佳季節。",
      en: "A hot desert climate dominates: inland summer days often top 45°C, while winters are mild, with northern nights near freezing. Rain is scarce everywhere except the monsoon-touched Asir highlands in the southwest, which stay cooler and greener. November to February offers the most comfortable travel weather.",
    },
    travelTips: [
      {
        zh: "訪客不強制穿長袍或戴頭巾,但男女均應穿著保守、遮蓋肩膝;公共場合舉止需莊重。",
        en: "Visitors aren't required to wear robes or headscarves, but both men and women should dress modestly, covering shoulders and knees, and behave conservatively in public.",
      },
      {
        zh: "觀光電子簽證(eVisa)開放多國申請,但麥加與麥地那聖城核心區僅限穆斯林進入。",
        en: "Tourist eVisas are open to many nationalities, but the holy core areas of Mecca and Medina remain off-limits to non-Muslims.",
      },
      {
        zh: "全國全面禁酒,攜帶酒精入境屬違法;齋戒月白天避免在公共場合飲食。",
        en: "Alcohol is completely banned — importing it is illegal — and during Ramadan avoid eating or drinking in public in daylight hours.",
      },
      {
        zh: "每日五次禮拜時間部分商店會暫停營業,行程安排請預留彈性。",
        en: "Some shops still pause during the five daily prayer times, so build flexibility into your plans.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "覆蓋沙烏地南部的「魯卜哈利沙漠」(空曠之地)以什麼紀錄著稱?",
          en: "The Rub' al Khali or 'Empty Quarter' covering southern Saudi Arabia holds what distinction?",
        },
        options: [
          {
            zh: "世界最大的連續沙質沙漠",
            en: "The world's largest continuous sand desert",
          },
          { zh: "世界海拔最高的沙漠", en: "The world's highest-altitude desert" },
          { zh: "世界最古老的沙漠", en: "The world's oldest desert" },
          { zh: "世界降雨最多的沙漠", en: "The rainiest desert on Earth" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "魯卜哈利面積約 65 萬平方公里,橫跨沙烏地、阿曼、阿聯與葉門,沙丘可高達 250 公尺。",
          en: "Spanning some 650,000 km² across Saudi Arabia, Oman, the UAE, and Yemen, its dunes rise as high as 250 m.",
        },
      },
      {
        question: {
          zh: "沙烏地東部的加瓦爾(Ghawar)油田以什麼聞名?",
          en: "The Ghawar field in eastern Saudi Arabia is famous as what?",
        },
        options: [
          {
            zh: "世界最大的常規陸上油田",
            en: "The world's largest conventional onshore oil field",
          },
          { zh: "世界最深的油井所在地", en: "Home to the world's deepest oil well" },
          { zh: "中東最早發現石油的地點", en: "The first place oil was found in the Middle East" },
          { zh: "全球最大的天然氣田", en: "The world's largest natural gas field" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "加瓦爾自 1951 年投產以來累計產量居全球油田之冠,長期占沙烏地總產能的相當大比重。",
          en: "Producing since 1951, Ghawar has yielded more oil than any other field and long accounted for a major share of Saudi output.",
        },
      },
      {
        question: {
          zh: "沙烏地第一個世界遺產「黑格拉」(Hegra,又稱瑪甸沙勒)是哪個古文明留下的?",
          en: "Hegra (Mada'in Salih), Saudi Arabia's first World Heritage site, was left by which ancient civilization?",
        },
        options: [
          {
            zh: "納巴泰文明(與約旦佩特拉同源)",
            en: "The Nabataeans — the same civilization behind Petra in Jordan",
          },
          { zh: "古埃及文明", en: "Ancient Egypt" },
          { zh: "蘇美文明", en: "The Sumerians" },
          { zh: "腓尼基文明", en: "The Phoenicians" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "黑格拉是納巴泰王國僅次於佩特拉的第二大城,留有百餘座鑿岩而成的紀念性墓塚,2008 年列入世界遺產。",
          en: "Hegra was the Nabataean kingdom's second city after Petra, with over a hundred monumental rock-cut tombs — UNESCO-listed in 2008.",
        },
      },
    ],
  },
  ISR: {
    climate: {
      zh: "沿海與北部屬地中海型氣候,夏季乾熱、冬季溫和多雨(11–3 月);南部內蓋夫沙漠與死海谷地乾旱炎熱,死海一帶夏天常超過 40 度。春(3–5 月)與秋(9–11 月)氣候舒適,是最佳旅遊季節。",
      en: "The coast and north have a Mediterranean climate — dry, hot summers and mild, rainy winters (November–March) — while the Negev Desert and Dead Sea valley in the south are hot and arid, often topping 40°C in summer. Spring (March–May) and autumn (September–November) are the most comfortable seasons.",
    },
    travelTips: [
      {
        zh: "班機安檢與入境面談以嚴格細緻聞名,出入境請多預留時間,並備妥行程與住宿證明。",
        en: "Airport security screening and entry interviews are famously thorough — allow extra time and keep itinerary and lodging details handy.",
      },
      {
        zh: "安息日(週五日落至週六日落)大眾運輸停駛、多數商店休息,行程需提前規劃。",
        en: "On Shabbat, from Friday sunset to Saturday sunset, public transport stops and most shops close — plan around it.",
      },
      {
        zh: "參觀西牆、教堂與清真寺等宗教場所需衣著端莊,男性到西牆需戴小帽(現場可借)。",
        en: "Dress modestly at religious sites like the Western Wall, churches, and mosques; men need a head covering at the Wall (loaners available).",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "以色列與約旦交界的死海,在世界地理上保有什麼紀錄?",
          en: "The Dead Sea on the Israel–Jordan border holds what geographic record?",
        },
        options: [
          {
            zh: "湖面是地球陸地的最低點,低於海平面約 430 公尺",
            en: "Its shore is Earth's lowest point on land, about 430 m below sea level",
          },
          { zh: "是世界最深的湖泊", en: "It's the world's deepest lake" },
          { zh: "是世界面積最大的鹹水湖", en: "It's the largest saltwater lake by area" },
          { zh: "是世界最古老的湖泊", en: "It's the world's oldest lake" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "死海湖面低於海平面約 430 公尺且持續下降;湖水鹽度近海水十倍,人可以輕鬆漂浮於水面。",
          en: "The surface lies about 430 m below sea level and keeps dropping; with salinity nearly ten times the ocean's, swimmers float effortlessly.",
        },
      },
      {
        question: {
          zh: "以色列的官方語言希伯來語,在語言史上有什麼罕見成就?",
          en: "Hebrew, Israel's official language, achieved what rare feat in linguistic history?",
        },
        options: [
          {
            zh: "從近兩千年無人作為母語的古語,成功復興為日常語言",
            en: "It was revived as an everyday mother tongue after nearly 2,000 years without native speakers",
          },
          {
            zh: "是從未中斷、一直有人作為母語的最古老語言",
            en: "It's the oldest language spoken natively without interruption",
          },
          { zh: "是 19 世紀人工發明的國際語", en: "It was artificially invented in the 19th century as an international language" },
          { zh: "與阿拉伯語可以直接互通", en: "It's mutually intelligible with Arabic" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "希伯來語千餘年來僅存於宗教與書面用途,19 世紀末在本-耶胡達等人推動下復興,成為史上最成功的語言復興案例。",
          en: "Confined to liturgy and writing for centuries, Hebrew was revived from the late 1800s, championed by Eliezer Ben-Yehuda — history's most successful language revival.",
        },
      },
      {
        question: {
          zh: "以色列特有的社區形態「基布茲」(kibbutz)最初的核心理念是什麼?",
          en: "The kibbutz, a community form unique to Israel, was originally centered on what idea?",
        },
        options: [
          {
            zh: "財產共有、共同勞動的集體農業公社",
            en: "A collective farming commune with shared property and labor",
          },
          { zh: "屯墾邊境的軍事基地", en: "A military base for frontier settlement" },
          { zh: "研讀經典的宗教學校", en: "A religious school for scripture study" },
          { zh: "扶植新創的科技園區", en: "A tech park for startups" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "第一個基布茲 1909 年建於加利利湖畔,成員共享財產與收益;如今多數已私有化,但仍是以色列社會的獨特印記。",
          en: "The first kibbutz was founded in 1909 by the Sea of Galilee, with members sharing property and income; most have since privatized, but they remain an Israeli hallmark.",
        },
      },
    ],
  },
  IRN: {
    climate: {
      zh: "大部分地區屬乾燥與半乾燥的大陸性氣候,中部沙漠夏季酷熱,高原冬季寒冷多雪;裏海沿岸濕潤多雨,波斯灣沿岸冬暖夏濕熱。春(3–5 月)與秋(9–11 月)氣候溫和,是旅遊最佳季節。",
      en: "Mostly arid and semi-arid continental: central deserts bake in summer while the high plateau turns cold and snowy in winter. The Caspian coast is humid and rainy, and the Persian Gulf shore has warm winters and sweltering summers. Spring (March–May) and autumn (September–November) are the best seasons to visit.",
    },
    travelTips: [
      {
        zh: "女性在公共場合依法須戴頭巾並穿著遮蓋身體線條的長衣,男性避免穿短褲。",
        en: "By law, women must wear a headscarf and loose clothing covering the body in public; men should avoid shorts.",
      },
      {
        zh: "多數國家旅客需事先申請簽證,持有以色列出入境紀錄者會被拒絕入境。",
        en: "Most nationalities need a visa arranged in advance, and travelers with Israeli stamps in their passports are refused entry.",
      },
      {
        zh: "受制裁影響,國際信用卡與提款卡完全無法使用,需攜帶足額現金(歐元或美元)入境兌換。",
        en: "Because of sanctions, international credit and debit cards don't work at all — bring enough cash (euros or dollars) to exchange.",
      },
      {
        zh: "「塔羅夫」(taarof)客套文化中,店家或司機常先假意推辭收費,請再堅持付款即可。",
        en: "Under 'taarof' etiquette, shopkeepers and drivers may politely refuse payment at first — insist again and they'll accept.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "伊朗的官方語言波斯語,屬於哪個語系?",
          en: "Persian (Farsi), Iran's official language, belongs to which language family?",
        },
        options: [
          { zh: "印歐語系", en: "The Indo-European family" },
          { zh: "閃米語族", en: "The Semitic family" },
          { zh: "突厥語族", en: "The Turkic family" },
          { zh: "高加索語系", en: "The Caucasian languages" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "波斯語與英語、印地語同屬印歐語系,和阿拉伯語(閃米語族)截然不同,只是借用了阿拉伯字母書寫。",
          en: "Persian is Indo-European — related to English and Hindi — and entirely distinct from Semitic Arabic, though it borrows the Arabic script.",
        },
      },
      {
        question: {
          zh: "古波斯發明、名列世界遺產的「坎兒井」(qanat)是什麼?",
          en: "The qanat, an ancient Persian invention on the World Heritage list, is what?",
        },
        options: [
          {
            zh: "把山麓地下水引到平原的地下水道灌溉系統",
            en: "An underground channel system carrying mountain groundwater to the plains for irrigation",
          },
          { zh: "戰時避難的防禦地道", en: "A defensive tunnel network for wartime shelter" },
          { zh: "儲存冬冰到夏天的冰窖", en: "An icehouse storing winter ice through summer" },
          { zh: "皇室的地下陵墓群", en: "A complex of underground royal tombs" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "坎兒井以緩坡地下渠道靠重力輸水,減少沙漠蒸發,已使用近三千年,讓乾旱高原上出現綠洲城市。",
          en: "Qanats use gently sloped underground channels to move water by gravity with minimal desert evaporation — a technology sustaining oasis cities for nearly 3,000 years.",
        },
      },
      {
        question: {
          zh: "波斯新年「諾魯茲」(Nowruz)在每年的什麼時候慶祝?",
          en: "When is Nowruz, the Persian New Year, celebrated?",
        },
        options: [
          { zh: "春分(約 3 月 20 或 21 日)", en: "The spring equinox (around March 20–21)" },
          { zh: "冬至", en: "The winter solstice" },
          { zh: "伊斯蘭曆的元月一日", en: "The first day of the Islamic calendar" },
          { zh: "秋分", en: "The autumn equinox" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "諾魯茲源自瑣羅亞斯德教傳統,已傳承三千多年,以春分為歲首,獲聯合國列為非物質文化遺產。",
          en: "Rooted in Zoroastrian tradition over 3,000 years old, Nowruz begins the year at the spring equinox and is recognized by UNESCO as intangible heritage.",
        },
      },
    ],
  },
  ARE: {
    climate: {
      zh: "屬炎熱的沙漠氣候,夏季(5–9 月)酷熱潮濕,白天常達 40 度以上、體感更高;冬季(11–3 月)溫暖舒適,約 20–30 度,降雨稀少。11 月至 3 月氣候宜人,是旅遊旺季與最佳造訪時節。",
      en: "A hot desert climate: summers (May–September) are brutally hot and humid, with days regularly above 40°C and feeling hotter, while winters (November–March) are pleasantly warm at 20–30°C with scant rain. November through March is peak season and the best time to visit.",
    },
    travelTips: [
      {
        zh: "杜拜相對開放,但公共場所仍應穿著得體,商場與政府機關要求遮蓋肩膝;公開親暱行為應避免。",
        en: "Dubai is relatively liberal, but dress respectfully in public — malls and government buildings expect covered shoulders and knees — and avoid public displays of affection.",
      },
      {
        zh: "飲酒僅限持照場所(飯店、餐廳酒吧),公共場所醉酒或酒駕屬重罪,酒駕零容忍。",
        en: "Alcohol is only served at licensed venues like hotel bars; public intoxication is a serious offense and drunk driving has zero tolerance.",
      },
      {
        zh: "齋戒月期間日間公開飲食需節制,許多餐廳白天改為遮蔽或外帶營業。",
        en: "During Ramadan, be discreet about eating and drinking in public by day — many restaurants screen off dining areas or switch to takeaway.",
      },
      {
        zh: "在社群媒體公開批評政府或未經同意拍攝他人(尤其當地女性)可能觸法。",
        en: "Criticizing the government on social media or photographing people without consent — especially local women — can break the law.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "阿聯的人口結構有什麼世界罕見的特點?",
          en: "What is globally unusual about the UAE's population makeup?",
        },
        options: [
          {
            zh: "外籍居民約占總人口近九成,本國公民是少數",
            en: "Foreign residents make up nearly 90% of the population, leaving citizens a small minority",
          },
          { zh: "本國公民約占八成", en: "Citizens account for about 80% of residents" },
          { zh: "多數人口仍過著貝都因游牧生活", en: "Most people still live as Bedouin nomads" },
          { zh: "女性人口約為男性的兩倍", en: "Women outnumber men two to one" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "來自印度、巴基斯坦、菲律賓等地的外籍勞工與專業人士撐起經濟,使阿聯成為全球外籍人口比例最高的國家之一。",
          en: "Workers and professionals from India, Pakistan, the Philippines, and beyond power the economy, giving the UAE one of the world's highest shares of foreign residents.",
        },
      },
      {
        question: {
          zh: "2020 年啟用的巴拉卡(Barakah)電廠讓阿聯寫下什麼紀錄?",
          en: "What record did the UAE set when its Barakah plant started up in 2020?",
        },
        options: [
          {
            zh: "阿拉伯世界第一座商轉核能發電廠",
            en: "The Arab world's first operating commercial nuclear power plant",
          },
          { zh: "全球最大的太陽能電廠", en: "The world's largest solar power plant" },
          { zh: "全球最大的海水淡化廠", en: "The world's largest desalination plant" },
          { zh: "中東第一座風力發電場", en: "The Middle East's first wind farm" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "位於阿布達比的巴拉卡核電廠是阿拉伯世界首座核電廠,四座機組全數商轉後可供應全國約四分之一的電力。",
          en: "Barakah in Abu Dhabi is the Arab world's first nuclear power station; with all four reactors online it can supply about a quarter of the country's electricity.",
        },
      },
      {
        question: {
          zh: "阿聯的國家象徵獵鷹地位特殊,下列哪一項描述是真的?",
          en: "Falcons are a national symbol of the UAE. Which of the following is actually true?",
        },
        options: [
          {
            zh: "獵鷹可以申辦自己的護照,並隨主人搭乘客機",
            en: "Falcons can be issued their own passports and fly in airline cabins with their owners",
          },
          { zh: "法律規定每個家庭必須飼養一隻獵鷹", en: "Every household is required by law to keep a falcon" },
          { zh: "獵鷹只有王室成員可以飼養", en: "Only royal family members may own falcons" },
          { zh: "野生獵鷹在阿聯已完全絕跡", en: "Wild falcons are entirely extinct in the UAE" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "為防走私並便利跨國鷹獵活動,阿聯為獵鷹核發護照,部分航空公司允許獵鷹進入客艙;鷹獵文化並已列入 UNESCO 非物質文化遺產。",
          en: "To curb smuggling and ease cross-border falconry trips, the UAE issues falcon passports, and some airlines allow falcons in the cabin; falconry itself is UNESCO-listed intangible heritage.",
        },
      },
    ],
  },
};
