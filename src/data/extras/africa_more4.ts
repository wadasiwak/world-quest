import type { CountryExtras } from "../types";

// Advanced question banks for the Horn of Africa and Africa's island
// nations. Climate/travelTips live inline in the base country files, so
// these entries are quiz-only.

export const AFRICA_MORE4_EXTRAS: Record<string, CountryExtras> = {
  SWZ: {
    extraQuiz: [
      {
        question: {
          zh: "史瓦帝尼西北部的恩格溫亞(Ngwenya)礦場在考古上有什麼重要地位?",
          en: "What is the archaeological significance of the Ngwenya mine in northwestern Eswatini?",
        },
        options: [
          {
            zh: "被認為是世界最古老的礦場之一,史前人類在此開採赭石",
            en: "It is considered one of the world's oldest mines, where prehistoric people dug ochre",
          },
          {
            zh: "出土了非洲最早的鐵器鑄造爐",
            en: "It yielded Africa's earliest iron-smelting furnaces",
          },
          {
            zh: "發現了最完整的南方古猿化石",
            en: "It produced the most complete Australopithecus fossil",
          },
          {
            zh: "保存了最早的黃金鑄幣作坊",
            en: "It preserves the earliest gold-minting workshop",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "恩格溫亞的「獅子洞」赭石開採遺跡距今約 43,000 年,史前人類在此挖取赤鐵礦作為顏料,近代這裡也曾是鐵礦場。",
          en: "Ochre workings at Ngwenya's Lion Cavern date back about 43,000 years — prehistoric miners extracted haematite for pigment, and the site later became a modern iron mine.",
        },
      },
      {
        question: {
          zh: "史瓦帝尼的貨幣里蘭吉尼(lilangeni)與哪一種貨幣以 1:1 掛鉤?",
          en: "Eswatini's currency, the lilangeni, is pegged 1:1 to which other currency?",
        },
        options: [
          { zh: "南非蘭特", en: "The South African rand" },
          { zh: "美元", en: "The US dollar" },
          { zh: "歐元", en: "The euro" },
          { zh: "英鎊", en: "The British pound" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "史瓦帝尼屬於南部非洲共同貨幣區,里蘭吉尼與蘭特等值,蘭特在境內也普遍流通。",
          en: "Eswatini belongs to the Common Monetary Area of southern Africa: the lilangeni trades at par with the rand, which also circulates freely in the country.",
        },
      },
      {
        question: {
          zh: "俯瞰墨巴本近郊的地標「西貝貝岩」(Sibebe Rock)是什麼樣的地質構造?",
          en: "Sibebe Rock, the landmark rising near Mbabane, is what kind of geological formation?",
        },
        options: [
          {
            zh: "一整塊裸露的巨大花崗岩岩體",
            en: "A single enormous exposed mass of granite",
          },
          { zh: "死火山的火山口", en: "The crater of an extinct volcano" },
          { zh: "石灰岩喀斯特石峰", en: "A limestone karst pinnacle" },
          { zh: "隕石撞擊隆起的環形山", en: "A ring uplift from a meteorite impact" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西貝貝岩是約三十億年前形成的古老花崗岩體,常被稱為全球最大的裸露花崗岩之一,當地有攀登行程可徒手登頂。",
          en: "Sibebe is an ancient granite pluton some three billion years old, often cited among the world's largest exposed granite rocks — guided hikes lead right up its slabs.",
        },
      },
    ],
  },
  MDG: {
    extraQuiz: [
      {
        question: {
          zh: "馬達加斯加西部的世界遺產「貝馬拉哈欽吉」(Tsingy de Bemaraha)以什麼地貌聞名?",
          en: "The Tsingy de Bemaraha World Heritage Site in western Madagascar is famous for what landscape?",
        },
        options: [
          {
            zh: "刀鋒般密布的石灰岩喀斯特尖峰林",
            en: "A forest of razor-sharp limestone karst pinnacles",
          },
          { zh: "廣闊的紅色沙丘海", en: "A vast sea of red sand dunes" },
          { zh: "黑色玄武岩熔岩台地", en: "Plateaus of black basalt lava" },
          { zh: "白色石灰華梯田溫泉", en: "White travertine terrace hot springs" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「tsingy」在馬拉加西語中意指「踮著腳走的地方」,這片尖銳石林於 1990 年列入世界遺產,峰間峽谷藏著與世隔絕的特有生物。",
          en: "'Tsingy' means roughly 'where one walks on tiptoe' in Malagasy; the stone forest was inscribed in 1990, and its sheltered canyons harbor isolated endemic species.",
        },
      },
      {
        question: {
          zh: "馬達加斯加已滅絕的巨鳥「象鳥」保有什麼自然界紀錄?",
          en: "Madagascar's extinct giant elephant bird holds which record in the natural world?",
        },
        options: [
          {
            zh: "產下已知最大的鳥蛋",
            en: "It laid the largest bird eggs known",
          },
          { zh: "是飛行速度最快的鳥", en: "It was the fastest bird in flight" },
          { zh: "擁有最大的翼展", en: "It had the largest wingspan" },
          { zh: "是潛水最深的鳥類", en: "It was the deepest-diving bird" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "象鳥是不會飛的巨型鳥類,蛋長可達 30 多公分、容量約等於一百多顆雞蛋,牠們在人類移居後的數百年間走向滅絕。",
          en: "The flightless elephant birds laid eggs over 30 cm long — holding the equivalent of well over a hundred hen's eggs — and died out within centuries of human settlement.",
        },
      },
      {
        question: {
          zh: "馬達加斯加中央高地的傳統儀式「翻骨禮」(Famadihana)是什麼樣的習俗?",
          en: "What does the Famadihana ('turning of the bones') tradition of Madagascar's central highlands involve?",
        },
        options: [
          {
            zh: "定期將祖先遺骨取出重新包裹,並奏樂共舞慶祝",
            en: "Periodically exhuming ancestors' remains to rewrap them, with music and dancing",
          },
          {
            zh: "在稻作豐收後焚燒草偶祈福",
            en: "Burning straw effigies for blessings after the rice harvest",
          },
          {
            zh: "新生兒滿月時舉行的占卜命名禮",
            en: "A divination naming rite when a newborn turns one month old",
          },
          {
            zh: "族長就任時的鬥牛儀式",
            en: "A bull-fighting ritual at a chief's installation",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "高地家族每隔數年打開家族墓,為祖先換上新裹屍布並抬著遺骨繞行歡慶,體現馬拉加西文化中生者與祖先的緊密聯繫。",
          en: "Every few years highland families open the tomb, wrap ancestors in fresh shrouds, and dance with the remains — reflecting the close Malagasy bond between the living and their forebears.",
        },
      },
    ],
  },
  BDI: {
    extraQuiz: [
      {
        question: {
          zh: "第一次世界大戰後至獨立前,蒲隆地與盧安達合組的比利時託管地叫什麼名字?",
          en: "Between WWI and independence, Burundi and Rwanda formed which Belgian-administered territory?",
        },
        options: [
          { zh: "盧安達-烏隆地", en: "Ruanda-Urundi" },
          { zh: "法屬赤道非洲", en: "French Equatorial Africa" },
          { zh: "英屬中非", en: "British Central Africa" },
          { zh: "德屬西南非", en: "German South-West Africa" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩地原屬德屬東非,一戰後由比利時受國際聯盟委任統治,1962 年託管結束時分別獨立為蒲隆地與盧安達兩國。",
          en: "Formerly part of German East Africa, the territory passed to Belgium under a League of Nations mandate after WWI; in 1962 it split into the independent states of Burundi and Rwanda.",
        },
      },
      {
        question: {
          zh: "蒲隆地的最高峰是哪一座山?",
          en: "What is the highest mountain in Burundi?",
        },
        options: [
          { zh: "赫哈山(Mount Heha)", en: "Mount Heha" },
          { zh: "吉力馬札羅山", en: "Mount Kilimanjaro" },
          { zh: "卡里辛比火山", en: "Mount Karisimbi" },
          { zh: "梅魯山", en: "Mount Meru" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "赫哈山海拔約 2,684 公尺,位於布松布拉東南方的剛果-尼羅分水嶺山脈上;吉力馬札羅與梅魯在坦尚尼亞,卡里辛比在盧安達邊境。",
          en: "Mount Heha rises to about 2,684 m on the Congo-Nile divide southeast of Bujumbura; Kilimanjaro and Meru are in Tanzania, and Karisimbi sits on Rwanda's border.",
        },
      },
      {
        question: {
          zh: "1996 年亞特蘭大奧運,蒲隆地選手尼永加博為國家奪得史上第一面奧運獎牌,是在哪個項目?",
          en: "At the 1996 Atlanta Olympics, Burundi's Vénuste Niyongabo won the country's first-ever Olympic medal in which event?",
        },
        options: [
          { zh: "男子 5,000 公尺賽跑", en: "The men's 5,000 metres" },
          { zh: "男子馬拉松", en: "The men's marathon" },
          { zh: "男子拳擊", en: "Men's boxing" },
          { zh: "男子競走", en: "Men's race walking" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "尼永加博本是 1,500 公尺名將,臨時改跑 5,000 公尺卻一舉摘金,那也是蒲隆地首度參加奧運就拿下金牌。",
          en: "A 1,500 m specialist, Niyongabo switched to the 5,000 m late and struck gold — a first medal, and a gold at that, in Burundi's Olympic debut.",
        },
      },
    ],
  },
  SOM: {
    extraQuiz: [
      {
        question: {
          zh: "古埃及文獻中盛產乳香、沒藥與黃金的貿易古國「邦特之地」,被許多學者認為位於今日哪一帶?",
          en: "The Land of Punt, the incense-and-gold trading realm of ancient Egyptian records, is placed by many scholars in which modern region?",
        },
        options: [
          {
            zh: "索馬利亞一帶的非洲之角沿岸",
            en: "The Horn of Africa coast around Somalia",
          },
          { zh: "摩洛哥的大西洋岸", en: "Morocco's Atlantic coast" },
          { zh: "南非的好望角一帶", en: "South Africa's Cape of Good Hope" },
          { zh: "西非的幾內亞灣沿岸", en: "West Africa's Gulf of Guinea coast" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "哈特謝普蘇特女王曾派遠征船隊前往邦特採購香料樹,壁畫至今留存於埃及神廟;非洲之角與紅海南岸是最主流的比定地點。",
          en: "Queen Hatshepsut sent expeditions to Punt for incense trees, as temple reliefs in Egypt still show; the Horn of Africa and southern Red Sea shores are the leading candidates for its location.",
        },
      },
      {
        question: {
          zh: "索馬利語在 1972 年正式採用哪一種文字作為官方書寫系統?",
          en: "In 1972 the Somali language officially adopted which script as its writing system?",
        },
        options: [
          { zh: "拉丁字母", en: "The Latin alphabet" },
          { zh: "阿拉伯字母", en: "The Arabic script" },
          { zh: "吉茲字母", en: "The Ge'ez script" },
          { zh: "西里爾字母", en: "The Cyrillic alphabet" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "索馬利語長期只有口傳而無統一文字,1972 年政府拍板採用拉丁字母並推動大規模識字運動,也讓口傳詩歌得以付諸文字。",
          en: "Long an oral language without a standard script, Somali was given a Latin orthography by government decision in 1972, followed by mass literacy campaigns that put its famed poetry on paper.",
        },
      },
      {
        question: {
          zh: "索馬利亞東北端的瓜達富伊角(Cape Guardafui)在地理上有什麼意義?",
          en: "What is the geographic significance of Cape Guardafui at Somalia's northeastern tip?",
        },
        options: [
          {
            zh: "是非洲之角的尖端,扼守亞丁灣與印度洋的交會處",
            en: "It is the very tip of the Horn of Africa, guarding where the Gulf of Aden meets the Indian Ocean",
          },
          { zh: "是非洲大陸的最南端", en: "It is the southernmost point of mainland Africa" },
          { zh: "是赤道穿越非洲海岸之處", en: "It is where the equator crosses the African coast" },
          { zh: "是非洲距離歐洲最近的海角", en: "It is Africa's closest cape to Europe" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「非洲之角」之名正是來自這一帶如犀角般突出的地形;古希臘商人稱瓜達富伊角為「香料之角」,是印度洋季風航路的重要地標。",
          en: "The 'Horn of Africa' takes its name from this horn-like promontory; ancient Greek traders called Guardafui the 'Cape of Spices', a key landmark on monsoon trade routes.",
        },
      },
    ],
  },
  DJI: {
    extraQuiz: [
      {
        question: {
          zh: "吉布地港是哪個內陸鄰國最主要的出海口,承擔其絕大多數的進出口貨運?",
          en: "The port of Djibouti serves as the main sea outlet for which landlocked neighbor, handling the bulk of its trade?",
        },
        options: [
          { zh: "衣索比亞", en: "Ethiopia" },
          { zh: "南蘇丹", en: "South Sudan" },
          { zh: "查德", en: "Chad" },
          { zh: "烏干達", en: "Uganda" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "衣索比亞自 1990 年代失去海岸線後高度依賴吉布地港,2018 年通車的亞的斯阿貝巴-吉布地電氣化鐵路更強化了這條經濟命脈。",
          en: "Ethiopia, coastless since the early 1990s, depends heavily on Djibouti's port; the electrified Addis Ababa–Djibouti railway, opened to commercial service in 2018, reinforced this lifeline.",
        },
      },
      {
        question: {
          zh: "吉布地的兩種官方語言是什麼?",
          en: "What are the two official languages of Djibouti?",
        },
        options: [
          { zh: "法語與阿拉伯語", en: "French and Arabic" },
          { zh: "英語與斯瓦希里語", en: "English and Swahili" },
          { zh: "義大利語與阿姆哈拉語", en: "Italian and Amharic" },
          { zh: "葡萄牙語與豪薩語", en: "Portuguese and Hausa" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "法語承襲自殖民時期,阿拉伯語反映伊斯蘭文化圈的聯繫;日常生活中則以索馬利語與阿法爾語最為通行。",
          en: "French is a colonial legacy and Arabic reflects ties to the Islamic world, while Somali and Afar dominate everyday speech.",
        },
      },
      {
        question: {
          zh: "吉布地位於哪種罕見的地質構造上,使阿薩爾湖一帶的地殼不斷張裂?",
          en: "Djibouti sits on what rare geological feature, which keeps stretching the crust around Lake Assal?",
        },
        options: [
          {
            zh: "三大板塊分離的阿法爾三聯點裂谷交會處",
            en: "The Afar Triple Junction, where three diverging plates and their rifts meet",
          },
          {
            zh: "兩大板塊碰撞的造山帶",
            en: "A collision zone where two plates build mountains",
          },
          {
            zh: "海洋板塊隱沒的深海溝",
            en: "A deep trench where an oceanic plate subducts",
          },
          {
            zh: "地函熱點形成的火山島鏈",
            en: "A hotspot chain of volcanic islands",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "紅海裂谷、亞丁灣裂谷與東非大裂谷在阿法爾窪地交會,阿拉伯、努比亞與索馬利板塊正緩緩分離,阿薩爾湖谷地是全球少數露出地表的中洋脊裂谷。",
          en: "The Red Sea, Gulf of Aden, and East African rifts converge in the Afar Depression, where the Arabian, Nubian, and Somali plates pull apart — the Assal rift is one of the few mid-ocean-ridge systems exposed on land.",
        },
      },
    ],
  },
  ERI: {
    extraQuiz: [
      {
        question: {
          zh: "厄利垂亞紅海岸的古城遺址阿杜利斯(Adulis)在古代是哪個王國的主要港口?",
          en: "The ancient ruins of Adulis on Eritrea's Red Sea coast served as the main port of which kingdom?",
        },
        options: [
          { zh: "阿克蘇姆王國", en: "The Kingdom of Aksum" },
          { zh: "迦太基", en: "Carthage" },
          { zh: "馬利帝國", en: "The Mali Empire" },
          { zh: "庫施王國", en: "The Kingdom of Kush" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿克蘇姆是西元前後崛起於衣索比亞高原的強大王國,透過阿杜利斯港輸出象牙與香料,與羅馬、印度通商,考古發掘至今仍在進行。",
          en: "Aksum, the powerful highland kingdom that rose around the turn of the era, exported ivory and incense through Adulis to Rome and India; excavations at the site continue today.",
        },
      },
      {
        question: {
          zh: "厄利垂亞的貨幣「納克法」(nakfa)得名自什麼?",
          en: "Eritrea's currency, the nakfa, takes its name from what?",
        },
        options: [
          {
            zh: "獨立戰爭中堅守不陷的山城納克法",
            en: "The mountain town of Nakfa, which never fell during the independence war",
          },
          { zh: "開國總統的家鄉", en: "The founding president's home village" },
          { zh: "提格利尼亞語的「黃金」一詞", en: "The Tigrinya word for 'gold'" },
          { zh: "一種傳統手工織品", en: "A traditional handwoven textile" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "納克法鎮是解放陣線在三十年獨立戰爭中的根據地,歷經圍攻始終未失守,以它命名貨幣象徵抗爭精神。",
          en: "The town of Nakfa was the liberation movement's stronghold through the thirty-year war, withstanding sieges without falling — naming the currency after it honors that resistance.",
        },
      },
      {
        question: {
          zh: "橫跨厄利垂亞南部與衣索比亞的達納基爾窪地(Danakil Depression)以什麼聞名?",
          en: "The Danakil Depression, spanning southern Eritrea and Ethiopia, is famous for what?",
        },
        options: [
          {
            zh: "是地球上最炎熱的地區之一,部分地表低於海平面",
            en: "Being one of the hottest places on Earth, with terrain below sea level",
          },
          { zh: "是非洲降雨最多的雨林盆地", en: "Being Africa's rainiest rainforest basin" },
          { zh: "是非洲最大的淡水湖區", en: "Holding Africa's largest freshwater lakes" },
          { zh: "是全球海拔最高的沙漠", en: "Being the world's highest-altitude desert" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這片裂谷窪地年均溫居全球前列,遍布鹽原、活火山與色彩詭譎的酸性熱泉;阿法爾人至今仍在此開採鹽板,以駱駝商隊運出。",
          en: "This rift-floor depression posts some of the highest average temperatures on Earth, strewn with salt flats, active volcanoes, and lurid acid springs — Afar salt miners still cut slabs here and haul them out by camel caravan.",
        },
      },
    ],
  },
  CPV: {
    extraQuiz: [
      {
        question: {
          zh: "「維德角」(Cape Verde)這個國名其實源自哪裡?",
          en: "Where does the name 'Cape Verde' actually come from?",
        },
        options: [
          {
            zh: "對岸塞內加爾的維德角半島,非洲大陸的最西端",
            en: "The Cap-Vert peninsula in Senegal, the westernmost point of mainland Africa",
          },
          {
            zh: "群島上茂密的綠色森林",
            en: "The islands' own lush green forests",
          },
          {
            zh: "一位葡萄牙航海家的姓氏",
            en: "The surname of a Portuguese navigator",
          },
          {
            zh: "島上盛產的綠色寶石",
            en: "Green gemstones mined on the islands",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "葡萄牙人以群島正對的非洲大陸「綠角」半島(今達卡所在地)命名;群島本身其實乾燥少綠,與名字恰成反差。",
          en: "The Portuguese named the islands after the 'green cape' on the facing mainland — today's Dakar peninsula. Ironically, the archipelago itself is dry and far from verdant.",
        },
      },
      {
        question: {
          zh: "1832 年,哪位科學家搭乘小獵犬號展開環球考察時,把維德角的聖地牙哥島作為第一個主要停靠站?",
          en: "In 1832, which scientist made Santiago in Cape Verde the first main stop of his round-the-world voyage on HMS Beagle?",
        },
        options: [
          { zh: "達爾文", en: "Charles Darwin" },
          { zh: "洪堡德", en: "Alexander von Humboldt" },
          { zh: "華萊士", en: "Alfred Russel Wallace" },
          { zh: "庫克船長", en: "Captain James Cook" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "年輕的達爾文在聖地牙哥島觀察到海岸崖壁中抬升的白色貝殼層,啟發了他對地質變動的思考,也是他日後演化思想的起點之一。",
          en: "On Santiago the young Darwin noted a raised band of white shells in the coastal cliffs, sparking his thinking on geological change — one of the seeds of his later evolutionary ideas.",
        },
      },
      {
        question: {
          zh: "維德角的國民料理「卡舒帕」(cachupa)主要是什麼樣的食物?",
          en: "Cachupa, Cape Verde's national dish, is mainly what kind of food?",
        },
        options: [
          {
            zh: "玉米與豆類慢火燉煮的雜燴,常加入魚或肉",
            en: "A slow-cooked stew of corn and beans, often with fish or meat",
          },
          { zh: "香蕉葉包裹的烤魚", en: "Grilled fish wrapped in banana leaves" },
          { zh: "生醃鮪魚沙拉", en: "A raw marinated tuna salad" },
          { zh: "椰奶咖哩飯", en: "A coconut-milk curry with rice" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "卡舒帕源自物資匱乏年代的家常燉鍋,各島各家配方不同;隔夜回鍋煎香的「炒卡舒帕」(cachupa refogada)配荷包蛋是經典早餐。",
          en: "Born of lean times, cachupa varies by island and household; fried-up leftovers — cachupa refogada topped with an egg — make the classic next-morning breakfast.",
        },
      },
    ],
  },
  STP: {
    extraQuiz: [
      {
        question: {
          zh: "聖多美與普林西比兩座火山島,在地質上屬於哪一條火山鏈?",
          en: "Geologically, the volcanic islands of São Tomé and Príncipe belong to which volcanic chain?",
        },
        options: [
          { zh: "喀麥隆火山線", en: "The Cameroon Volcanic Line" },
          { zh: "東非大裂谷火山帶", en: "The East African Rift volcanic belt" },
          { zh: "大西洋中洋脊", en: "The Mid-Atlantic Ridge" },
          { zh: "環太平洋火環帶", en: "The Pacific Ring of Fire" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這條火山鏈從查德湖畔一路延伸入幾內亞灣,串起喀麥隆山、比奧科島、普林西比、聖多美與安諾本島,橫跨大陸與海洋地殼,是地質學上的罕見案例。",
          en: "The line runs from near Lake Chad into the Gulf of Guinea, threading Mount Cameroon, Bioko, Príncipe, São Tomé, and Annobón — a rare chain straddling both continental and oceanic crust.",
        },
      },
      {
        question: {
          zh: "「聖多美」這個島名相傳是怎麼來的?",
          en: "According to tradition, how did the island of São Tomé get its name?",
        },
        options: [
          {
            zh: "葡萄牙航海家在聖多馬紀念日發現該島,便以聖人命名",
            en: "Portuguese navigators sighted it on the feast day of Saint Thomas and named it for the saint",
          },
          {
            zh: "以第一任總督的名字命名",
            en: "It was named after the first colonial governor",
          },
          {
            zh: "源自當地原住民語的「豐饒」一詞",
            en: "It comes from an indigenous word for 'abundance'",
          },
          {
            zh: "以葡萄牙國王的守護聖人命名",
            en: "It was named for the Portuguese king's patron saint",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "相傳若昂·德·桑塔倫與佩羅·埃斯科巴爾於 1471 年 12 月 21 日(聖多馬日)望見此島;當時島上無人居住,不可能有原住民語地名。",
          en: "João de Santarém and Pêro Escobar are said to have sighted the island on 21 December 1471, Saint Thomas's Day; it was uninhabited, so no indigenous name could have existed.",
        },
      },
      {
        question: {
          zh: "聖多美普林西比常被稱為「非洲的加拉巴哥」,主要是因為什麼?",
          en: "Why is São Tomé and Príncipe often called 'Africa's Galápagos'?",
        },
        options: [
          {
            zh: "島嶼長期與大陸隔絕,孕育出比例極高的特有種動植物",
            en: "Long isolation from the mainland produced an exceptionally high share of endemic species",
          },
          {
            zh: "島上有成群的巨型陸龜",
            en: "The islands host herds of giant tortoises",
          },
          {
            zh: "達爾文曾在此進行研究",
            en: "Darwin conducted research there",
          },
          {
            zh: "兩地的火山形狀幾乎一模一樣",
            en: "Its volcanoes are nearly identical in shape to the Galápagos'",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩島從未與非洲大陸相連,鳥類特有種密度居世界前列——巨型的聖多美巨花蜜鳥與嬌小的侏儒橄欖鹮都是僅此一處的物種。",
          en: "Never connected to the mainland, the islands rank among the world's densest hotspots of endemic birds — from the outsized São Tomé giant sunbird to the tiny dwarf olive ibis, found nowhere else.",
        },
      },
    ],
  },
  COM: {
    extraQuiz: [
      {
        question: {
          zh: "「葛摩」的國名源自阿拉伯語,原意是什麼?",
          en: "The name 'Comoros' derives from Arabic — what does it originally mean?",
        },
        options: [
          { zh: "月亮", en: "The moon" },
          { zh: "香料", en: "Spices" },
          { zh: "珍珠", en: "Pearls" },
          { zh: "火山", en: "Volcanoes" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿拉伯航海者稱這裡為「Juzur al-Qamar」,即「月亮群島」;國旗上的新月圖案同時呼應了這個名字與伊斯蘭信仰。",
          en: "Arab seafarers called the archipelago 'Juzur al-Qamar' — the Islands of the Moon; the crescent on the national flag echoes both the name and the Islamic faith.",
        },
      },
      {
        question: {
          zh: "葛摩社會中,男性要取得完整的社會地位與發言權,傳統上必須完成什麼?",
          en: "In Comoran society, what must a man traditionally complete to attain full social standing and a voice in village affairs?",
        },
        options: [
          {
            zh: "舉辦鋪張的「大婚禮」(grand mariage)",
            en: "Holding a lavish 'grand mariage' (great wedding)",
          },
          {
            zh: "完成麥加朝聖",
            en: "Completing the pilgrimage to Mecca",
          },
          {
            zh: "獨自駕船環繞三島一周",
            en: "Sailing solo around all three islands",
          },
          {
            zh: "登上卡爾塔拉火山山頂",
            en: "Climbing to the summit of Mount Karthala",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "大婚禮動輒耗費多年積蓄,連辦數日宴席與贈禮;完成者才能穿戴特定服飾、進入村中長老議事的行列,許多僑民畢生為此儲蓄。",
          en: "The grand mariage can consume years of savings on days of feasting and gifts; only those who hold one may wear certain regalia and join the village elders' councils — many emigrants save for it all their lives.",
        },
      },
      {
        question: {
          zh: "葛摩特有的「利文斯通狐蝠」是什麼樣的動物?",
          en: "What kind of animal is Livingstone's fruit bat, endemic to the Comoros?",
        },
        options: [
          {
            zh: "世界最大型的蝙蝠之一,翼展可超過一公尺",
            en: "One of the world's largest bats, with a wingspan over a meter",
          },
          { zh: "一種夜行性的小型狐猴", en: "A small nocturnal lemur" },
          { zh: "一種不會飛的地棲鳥", en: "A flightless ground bird" },
          { zh: "一種樹棲的飛鼠", en: "A tree-dwelling flying squirrel" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這種黑色巨蝠僅存於昂儒昂與莫埃利兩島的山地雨林,以果實為食,因棲地縮減而極度瀕危,是葛摩保育的旗艦物種。",
          en: "This huge black fruit bat survives only in the mountain forests of Anjouan and Mohéli; critically endangered by habitat loss, it is the flagship of Comoran conservation.",
        },
      },
    ],
  },
  MUS: {
    extraQuiz: [
      {
        question: {
          zh: "1810 年模里西斯外海的格朗港海戰(Battle of Grand Port)有什麼特別的歷史地位?",
          en: "What is historically special about the 1810 Battle of Grand Port, fought off Mauritius?",
        },
        options: [
          {
            zh: "是唯一銘刻在巴黎凱旋門上的法國海戰勝利",
            en: "It is the only French naval victory inscribed on the Arc de Triomphe in Paris",
          },
          {
            zh: "是拿破崙唯一親自指揮的海戰",
            en: "It was the only naval battle Napoleon commanded in person",
          },
          {
            zh: "是蒸汽軍艦首次投入實戰",
            en: "It was the first battle involving steam warships",
          },
          {
            zh: "促成英法兩國立即簽訂和約",
            en: "It led Britain and France to sign an immediate peace treaty",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "法軍在這場海戰重創英國艦隊,但僅數月後英軍便攻占全島;凱旋門上刻著「Grand Port」,是拿破崙戰爭中法國海軍罕見的高光時刻。",
          en: "The French mauled a British squadron here, though Britain seized the island just months later; 'Grand Port' is engraved on the Arc de Triomphe — a rare naval high point of the Napoleonic Wars for France.",
        },
      },
      {
        question: {
          zh: "模里西斯的最高峰是哪一座?",
          en: "What is the highest mountain in Mauritius?",
        },
        options: [
          {
            zh: "黑河小峰(Piton de la Petite Rivière Noire)",
            en: "Piton de la Petite Rivière Noire",
          },
          { zh: "彼得波特山(Pieter Both)", en: "Pieter Both" },
          { zh: "拇指山(Le Pouce)", en: "Le Pouce" },
          { zh: "莫恩布拉邦山(Le Morne Brabant)", en: "Le Morne Brabant" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "黑河小峰海拔 828 公尺,位於西南部的黑河峽谷國家公園;頂著圓石的彼得波特山(820 公尺)與拇指山(812 公尺)緊追在後。",
          en: "Piton de la Petite Rivière Noire rises 828 m in Black River Gorges National Park; boulder-capped Pieter Both (820 m) and Le Pouce (812 m) follow close behind.",
        },
      },
      {
        question: {
          zh: "源自模里西斯克里奧爾社群、已列入聯合國無形文化遺產的傳統音樂舞蹈是什麼?",
          en: "Which traditional music and dance of Mauritius's Creole community is inscribed on UNESCO's intangible heritage list?",
        },
        options: [
          { zh: "塞加(Sega)", en: "Sega" },
          { zh: "馬洛亞(Maloya)", en: "Maloya" },
          { zh: "森巴(Samba)", en: "Samba" },
          { zh: "梅倫格(Merengue)", en: "Merengue" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "塞加源自奴隸社群的歌舞,以山羊皮鼓 ravanne 伴奏,傳統塞加(sega tipik)於 2014 年列入名錄;馬洛亞則是鄰島法屬留尼旺的類似樂種。",
          en: "Born in enslaved communities and driven by the goatskin ravanne drum, sega tipik was inscribed in 2014; maloya is the comparable genre of neighboring French Réunion.",
        },
      },
    ],
  },
  SYC: {
    extraQuiz: [
      {
        question: {
          zh: "塞席爾的國鳥是哪一種鳥?",
          en: "What is the national bird of Seychelles?",
        },
        options: [
          { zh: "塞席爾黑鸚鵡", en: "The Seychelles black parrot" },
          { zh: "紅鸛(火鶴)", en: "The flamingo" },
          { zh: "軍艦鳥", en: "The frigatebird" },
          { zh: "白尾熱帶鳥", en: "The white-tailed tropicbird" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這種深灰褐色的鸚鵡幾乎只棲息在普拉蘭島,與世界遺產五月谷的棕櫚林共生,族群僅數百隻,是塞席爾保育的象徵。",
          en: "This dusky parrot lives almost exclusively on Praslin, tied to the palm forests of the Vallée de Mai World Heritage Site; with only a few hundred birds, it is a symbol of Seychellois conservation.",
        },
      },
      {
        question: {
          zh: "相傳 18 世紀哪位海盜將大批寶藏埋藏在塞席爾馬埃島,至今仍吸引尋寶者前來?",
          en: "Legend says which 18th-century pirate buried a vast treasure on Mahé in the Seychelles, still drawing treasure hunters today?",
        },
        options: [
          {
            zh: "「禿鷹」奧利維耶·勒瓦瑟(La Buse)",
            en: "Olivier Levasseur, 'La Buse' (the Buzzard)",
          },
          { zh: "黑鬍子", en: "Blackbeard" },
          { zh: "基德船長", en: "Captain Kidd" },
          { zh: "亨利·摩根", en: "Henry Morgan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "勒瓦瑟 1730 年受絞刑前據說拋出一張密碼藏寶圖,喊道「有本事就找出我的寶藏」;馬埃島貝拉扎爾一帶的挖掘至今未曾停歇。",
          en: "Before his hanging in 1730, La Buse reputedly flung out a cryptogram crying 'find my treasure who can' — and digs around Bel Ombre on Mahé have never quite stopped.",
        },
      },
      {
        question: {
          zh: "1960 年代,英美曾計畫在亞達伯拉環礁興建什麼設施,最終因科學界強烈反對而作罷?",
          en: "In the 1960s, Britain and the US planned to build what on Aldabra Atoll, before scientific opposition forced the plan's abandonment?",
        },
        options: [
          { zh: "軍用機場基地", en: "A military airbase" },
          { zh: "核子試驗場", en: "A nuclear test site" },
          { zh: "深水商港", en: "A deep-water commercial port" },
          { zh: "衛星發射場", en: "A satellite launch site" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "皇家學會等科學團體發起保衛戰,力陳環礁生態無可取代,計畫於 1967 年撤銷;亞達伯拉後來在 1982 年列入世界遺產,巨龜族群得以延續。",
          en: "The Royal Society and fellow scientists campaigned that the atoll's ecology was irreplaceable, and the plan was dropped in 1967; Aldabra became a World Heritage Site in 1982, its giant tortoises secure.",
        },
      },
    ],
  },
};
