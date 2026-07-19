import type { CountryExtras } from "../types";

// Advanced question banks for North Africa, the Sahel and upper West Africa.
// Climate/travelTips live inline in the base country files, so these
// entries are quiz-only.

export const AFRICA_MORE1_EXTRAS: Record<string, CountryExtras> = {
  DZA: {
    extraQuiz: [
      {
        question: {
          zh: "阿爾及利亞的最高峰塔哈特山(海拔 2,908 公尺)位於哪座山脈?",
          en: "Mount Tahat, Algeria's highest peak at 2,908 m, rises in which mountain range?",
        },
        options: [
          { zh: "阿哈加爾山脈(霍加爾)", en: "The Ahaggar (Hoggar) Mountains" },
          { zh: "泰勒阿特拉斯山脈", en: "The Tell Atlas" },
          { zh: "撒哈拉阿特拉斯山脈", en: "The Saharan Atlas" },
          { zh: "提貝斯提山脈", en: "The Tibesti Mountains" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿爾及利亞的最高點不在北部的阿特拉斯山系,而在撒哈拉深處的阿哈加爾火山高原,圖阿雷格人世居於此,山城塔曼拉塞特是門戶。",
          en: "Algeria's highest point lies not in the northern Atlas ranges but deep in the Sahara, on the volcanic Ahaggar massif — Tuareg homeland, with Tamanrasset as its gateway town.",
        },
      },
      {
        question: {
          zh: "19 世紀哪位埃米爾領導了對法國入侵長達十餘年的抵抗,被尊為阿爾及利亞的民族英雄?",
          en: "Which 19th-century emir led over a decade of resistance to the French invasion and is honored as Algeria's national hero?",
        },
        options: [
          { zh: "阿卜杜·卡迪爾", en: "Abd el-Kader" },
          { zh: "奧馬爾·穆赫塔爾", en: "Omar Mukhtar" },
          { zh: "薩摩里·杜爾", en: "Samori Touré" },
          { zh: "穆罕默德·艾哈邁德(馬赫迪)", en: "Muhammad Ahmad (the Mahdi)" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿卜杜·卡迪爾自 1832 年起率部抗法十五年,1847 年投降後流亡;他兼具軍事家與蘇菲學者身分,肖像曾印在阿爾及利亞紙鈔上。",
          en: "Abd el-Kader fought the French for fifteen years from 1832 before surrendering in 1847 and going into exile; a warrior and Sufi scholar alike, his portrait has appeared on Algerian banknotes.",
        },
      },
      {
        question: {
          zh: "哪位 1957 年諾貝爾文學獎得主出生於阿爾及利亞,代表作包括《異鄉人》與《瘟疫》?",
          en: "Which winner of the 1957 Nobel Prize in Literature was born in Algeria, with works including 'The Stranger' and 'The Plague'?",
        },
        options: [
          { zh: "阿爾貝·卡繆", en: "Albert Camus" },
          { zh: "尚-保羅·沙特", en: "Jean-Paul Sartre" },
          { zh: "安德烈·紀德", en: "André Gide" },
          { zh: "馬塞爾·普魯斯特", en: "Marcel Proust" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "卡繆 1913 年生於法屬阿爾及利亞的蒙多維(今德雷安),44 歲獲獎時是當時最年輕的文學獎得主之一,《異鄉人》的場景即設定在阿爾及爾。",
          en: "Camus was born in 1913 in Mondovi (now Dréan) in French Algeria; at 44 he was among the youngest literature laureates ever, and 'The Stranger' is set in Algiers.",
        },
      },
    ],
  },
  LBY: {
    extraQuiz: [
      {
        question: {
          zh: "利比亞的「大人造河」(Great Man-Made River)是一項什麼樣的工程?",
          en: "Libya's 'Great Man-Made River' is what kind of project?",
        },
        options: [
          {
            zh: "抽取撒哈拉地底化石水、輸往沿海城市的巨型輸水管網",
            en: "A vast pipeline network pumping fossil water from beneath the Sahara to coastal cities",
          },
          {
            zh: "連接地中海與內陸窪地的人工運河",
            en: "An artificial canal linking the Mediterranean to inland depressions",
          },
          {
            zh: "引尼羅河水橫貫沙漠的灌溉運河",
            en: "An irrigation canal carrying Nile water across the desert",
          },
          {
            zh: "沿海防洪堤壩與水庫系統",
            en: "A coastal system of flood barriers and reservoirs",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這項 1980 年代動工的工程從努比亞砂岩含水層抽取數萬年前的地下化石水,以數千公里管線送往的黎波里、班加西等城市,常被稱為世界最大的灌溉供水工程。",
          en: "Begun in the 1980s, it taps ancient fossil water from the Nubian Sandstone Aquifer and sends it through thousands of kilometers of pipe to Tripoli, Benghazi, and beyond — often called the world's largest irrigation project.",
        },
      },
      {
        question: {
          zh: "1951 年利比亞獨立建國時,採行的是什麼政體?",
          en: "When Libya became independent in 1951, what form of government did it adopt?",
        },
        options: [
          { zh: "由伊德里斯一世統治的王國", en: "A kingdom ruled by King Idris I" },
          { zh: "社會主義人民共和國", en: "A socialist people's republic" },
          { zh: "法國託管下的自治邦", en: "An autonomous state under French trusteeship" },
          { zh: "聯邦總統制共和國", en: "A federal presidential republic" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "獨立後的利比亞聯合王國由出身賽努西教團的伊德里斯一世統治,直到 1969 年被格達費政變推翻;賽努西教團自 19 世紀起深刻影響利比亞社會。",
          en: "The United Kingdom of Libya was ruled by Idris I of the Senussi order until Gaddafi's 1969 coup; the Senussi movement had shaped Libyan society since the 19th century.",
        },
      },
      {
        question: {
          zh: "利比亞西部哪座綠洲古城被譽為「沙漠明珠」,其有頂棚的白色老城巷弄已列入世界遺產?",
          en: "Which oasis town in western Libya is hailed as the 'pearl of the desert', its covered whitewashed old-town alleys a UNESCO site?",
        },
        options: [
          { zh: "加達梅斯", en: "Ghadames" },
          { zh: "塞卜哈", en: "Sabha" },
          { zh: "圖卜魯格", en: "Tobruk" },
          { zh: "蘇爾特", en: "Sirte" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "加達梅斯位於利比亞、突尼西亞、阿爾及利亞三國交界附近,老城以加頂的巷道隔絕酷熱,屋頂平台則是傳統上婦女的通行空間,1986 年列入世界遺產。",
          en: "Ghadames sits near the Libya–Tunisia–Algeria tripoint; its old town beats the heat with roofed walkways, while rooftop terraces traditionally served as women's passageways. It was UNESCO-listed in 1986.",
        },
      },
    ],
  },
  SDN: {
    extraQuiz: [
      {
        question: {
          zh: "2011 年南蘇丹分離後,蘇丹現今的最高點位於哪裡?",
          en: "After South Sudan's 2011 secession, where is Sudan's highest point today?",
        },
        options: [
          {
            zh: "達佛地區的馬拉山(德里巴火山口,約 3,042 公尺)",
            en: "Jebel Marra in Darfur (the Deriba Caldera, about 3,042 m)",
          },
          {
            zh: "伊馬通山脈的金耶提山",
            en: "Mount Kinyeti in the Imatong Mountains",
          },
          { zh: "紅海丘陵的最高峰", en: "The highest summit of the Red Sea Hills" },
          { zh: "努巴山脈", en: "The Nuba Mountains" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬拉山是達佛地區的火山群,山頂的德里巴火山口內有兩座湖泊;原本更高的金耶提山已隨南蘇丹獨立而劃出蘇丹版圖。",
          en: "Jebel Marra is a volcanic massif in Darfur whose Deriba Caldera cradles two crater lakes; the taller Mount Kinyeti passed to South Sudan at independence.",
        },
      },
      {
        question: {
          zh: "庫施王國在遷都麥羅埃之前,以哪座位於聖山傑貝爾巴爾卡勒山腳的城市為都城?",
          en: "Before moving its capital to Meroë, the Kingdom of Kush ruled from which city at the foot of the holy mountain Jebel Barkal?",
        },
        options: [
          { zh: "納帕塔", en: "Napata" },
          { zh: "阿克蘇姆", en: "Aksum" },
          { zh: "底比斯", en: "Thebes" },
          { zh: "迦太基", en: "Carthage" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "納帕塔位於尼羅河第四瀑布附近,是庫施「黑法老」時代的政治與宗教中心;傑貝爾巴爾卡勒山被視為阿蒙神的居所,遺址群已列入世界遺產。",
          en: "Napata, near the Nile's fourth cataract, was the political and religious heart of Kush in the era of the 'Black Pharaohs'; Jebel Barkal was held to be the abode of Amun, and the sites are UNESCO-listed.",
        },
      },
      {
        question: {
          zh: "蘇丹長期是哪種天然原料的世界最大生產國,這種原料廣泛用於汽水、糖果與藥品?",
          en: "Sudan has long been the world's top producer of which natural raw material, widely used in soft drinks, candy, and medicine?",
        },
        options: [
          { zh: "阿拉伯膠", en: "Gum arabic" },
          { zh: "乳香", en: "Frankincense" },
          { zh: "蔗糖", en: "Cane sugar" },
          { zh: "棕櫚油", en: "Palm oil" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿拉伯膠採自金合歡樹的樹脂,蘇丹的產量佔全球供應的大宗;由於用途難以取代,即使在蘇丹受國際制裁期間,阿拉伯膠貿易也常獲得豁免。",
          en: "Tapped from acacia trees, gum arabic from Sudan dominates world supply; so irreplaceable is it that the trade was often exempted even when Sudan was under international sanctions.",
        },
      },
    ],
  },
  SSD: {
    extraQuiz: [
      {
        question: {
          zh: "南蘇丹的最高峰是哪座山,海拔 3,187 公尺?",
          en: "What is South Sudan's highest mountain, rising to 3,187 m?",
        },
        options: [
          { zh: "金耶提山", en: "Mount Kinyeti" },
          { zh: "吉力馬札羅山", en: "Mount Kilimanjaro" },
          { zh: "肯亞山", en: "Mount Kenya" },
          { zh: "拉斯達善山", en: "Ras Dashen" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "金耶提山位於南部與烏干達接壤的伊馬通山脈,山區降雨較多、植被蒼翠,與北部廣袤的平原濕地形成鮮明對比。",
          en: "Mount Kinyeti crowns the Imatong Mountains near the Ugandan border; the wetter, greener highlands contrast sharply with the vast plains and wetlands to the north.",
        },
      },
      {
        question: {
          zh: "南蘇丹的博馬與巴丁吉洛國家公園之間,上演著被認為是全球最大規模陸生哺乳動物遷徙的,是哪類動物?",
          en: "Between South Sudan's Boma and Badingilo national parks, which animals stage what is considered the world's largest land-mammal migration?",
        },
        options: [
          { zh: "白耳赤羚等羚羊", en: "Antelope such as the white-eared kob" },
          { zh: "牛羚(角馬)", en: "Wildebeest" },
          { zh: "斑馬", en: "Zebras" },
          { zh: "非洲象", en: "African elephants" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "2023 年的空中普查估計約有數百萬頭白耳赤羚、蒙加拉瞪羚等羚羊參與這場「大尼羅遷徙」,規模超過東非著名的牛羚遷徙。",
          en: "A 2023 aerial survey estimated millions of white-eared kob, Mongalla gazelle, and other antelope in this 'Great Nile Migration' — outnumbering East Africa's famed wildebeest trek.",
        },
      },
      {
        question: {
          zh: "南蘇丹獨立後,憲法明定的官方語言是哪一種?",
          en: "After independence, which language did South Sudan's constitution designate as official?",
        },
        options: [
          { zh: "英語", en: "English" },
          { zh: "阿拉伯語", en: "Arabic" },
          { zh: "斯瓦希里語", en: "Swahili" },
          { zh: "法語", en: "French" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "南蘇丹選擇英語為官方語言,與以阿拉伯語為主的北方區隔;日常街頭最通行的則是稱為「朱巴阿拉伯語」的混合語,以及丁卡語、努爾語等民族語言。",
          en: "South Sudan chose English as its official language, marking a break from the Arabic-dominated north; on the street, the creolized 'Juba Arabic' plus Dinka, Nuer, and other languages prevail.",
        },
      },
    ],
  },
  TCD: {
    extraQuiz: [
      {
        question: {
          zh: "查德撒哈拉深處的哪一組湖泊,靠古老地下水補注而終年不涸,2012 年列入世界遺產?",
          en: "Which group of lakes deep in Chad's Sahara, fed by ancient groundwater and never drying up, was UNESCO-listed in 2012?",
        },
        options: [
          { zh: "烏尼昂加湖群", en: "The Lakes of Ounianga" },
          { zh: "圖爾卡納湖", en: "Lake Turkana" },
          { zh: "納庫魯湖", en: "Lake Nakuru" },
          { zh: "馬拉維湖", en: "Lake Malawi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "烏尼昂加湖群由 18 座湖泊組成,位於極度乾旱的撒哈拉腹地,卻因化石地下水湧出而常年有水,湖色從湛藍到棕紅各異,是沙漠中的奇景。",
          en: "The 18 Lakes of Ounianga persist in one of the Sahara's driest corners thanks to upwelling fossil groundwater, their colors ranging from deep blue to reddish — a desert marvel.",
        },
      },
      {
        question: {
          zh: "2001 年在查德朱拉布沙漠出土、暱稱「圖邁」的頭骨化石,以什麼聞名於世?",
          en: "The skull nicknamed 'Toumaï', unearthed in Chad's Djurab Desert in 2001, is famous for what?",
        },
        options: [
          {
            zh: "屬於約 700 萬年前的早期人族,是已知最古老的人類遠祖化石之一",
            en: "Belonging to an early hominin from about 7 million years ago — among the oldest known human-lineage fossils",
          },
          { zh: "是一種已滅絕巨鱷的頭骨", en: "Being the skull of an extinct giant crocodile" },
          { zh: "是保存完整的猛獁象化石", en: "Being a fully preserved mammoth fossil" },
          { zh: "是古代智人的木乃伊", en: "Being a mummified ancient Homo sapiens" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「圖邁」被命名為查德沙赫人(Sahelanthropus tchadensis),把人類演化研究的舞台從東非大裂谷擴展到中非;名字在當地語言意為「生命的希望」。",
          en: "Named Sahelanthropus tchadensis, Toumaï widened the stage of human-origins research from the East African Rift to central Africa; the nickname means 'hope of life' in a local language.",
        },
      },
      {
        question: {
          zh: "身為內陸國,查德南部多巴油田的原油主要透過什麼方式輸出?",
          en: "As a landlocked country, how does Chad mainly export crude oil from its southern Doba fields?",
        },
        options: [
          {
            zh: "經輸油管送往喀麥隆的大西洋岸港口克里比",
            en: "Via a pipeline to Kribi on Cameroon's Atlantic coast",
          },
          {
            zh: "以油罐車隊穿越撒哈拉運往利比亞",
            en: "By tanker-truck convoys across the Sahara to Libya",
          },
          {
            zh: "經尼羅河駁船運往埃及",
            en: "By river barges down the Nile to Egypt",
          },
          { zh: "以貨機空運至歐洲", en: "By cargo aircraft to Europe" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "全長約 1,070 公里的查德—喀麥隆輸油管於 2003 年啟用,讓查德躋身產油國;石油收益如何用於減貧,曾是世界銀行參與此案的著名爭議。",
          en: "The roughly 1,070 km Chad–Cameroon pipeline opened in 2003, turning Chad into an oil exporter; how the revenues would fund poverty reduction became a famous controversy of the World Bank-backed project.",
        },
      },
    ],
  },
  NER: {
    extraQuiz: [
      {
        question: {
          zh: "尼日與貝南、布吉納法索共享的「W 國家公園」,名稱從何而來?",
          en: "The 'W National Park' shared by Niger, Benin, and Burkina Faso takes its name from what?",
        },
        options: [
          {
            zh: "尼日河在此連續轉彎,河道形成 W 字形",
            en: "The Niger River's double bend here, tracing a W shape",
          },
          {
            zh: "紀念一位姓氏以 W 開頭的探險家",
            en: "A tribute to an explorer whose surname began with W",
          },
          {
            zh: "公園邊界的輪廓像字母 W",
            en: "The park boundary's outline resembling the letter W",
          },
          {
            zh: "當地部族名稱的縮寫",
            en: "An abbreviation of a local ethnic group's name",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "尼日河在公園北緣連續蜿蜒出 W 形河道,公園因此得名;它與貝南、布吉納法索的保護區共組跨國的 WAP 保護區群,是西非莽原生態的重要庇護所。",
          en: "The Niger River meanders into a W along the park's northern edge, giving it its name; with adjoining reserves in Benin and Burkina Faso it forms the transboundary WAP complex, a key refuge of West African savanna wildlife.",
        },
      },
      {
        question: {
          zh: "尼阿美東南方的庫雷地區,保護著哪種動物在野外碩果僅存的族群?",
          en: "The Kouré area southeast of Niamey protects the last remaining wild population of which animal?",
        },
        options: [
          { zh: "西非長頸鹿", en: "The West African giraffe" },
          { zh: "西非獅", en: "The West African lion" },
          { zh: "黑犀牛", en: "The black rhinoceros" },
          { zh: "山地大猩猩", en: "The mountain gorilla" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西非長頸鹿是毛色最淺的長頸鹿亞種,1990 年代一度只剩約 50 頭;在尼日的保育行動下族群回升,是非洲少見與農村居民比鄰而居的長頸鹿。",
          en: "The palest of giraffe subspecies, the West African giraffe fell to about 50 animals in the 1990s; Niger's conservation efforts have rebuilt the herd, which unusually lives side by side with farming villages.",
        },
      },
      {
        question: {
          zh: "泰內雷沙漠邊緣的加杜法瓦,是世界著名的什麼遺址?",
          en: "Gadoufaoua, on the edge of the Ténéré Desert, is world-famous as what kind of site?",
        },
        options: [
          {
            zh: "恐龍化石產地,尼日龍與巨鱷「帝鱷」都在此出土",
            en: "A dinosaur fossil field, where Nigersaurus and the giant crocodile Sarcosuchus were unearthed",
          },
          { zh: "巨大的隕石撞擊坑", en: "A giant meteorite impact crater" },
          { zh: "古羅馬邊防要塞遺跡", en: "The ruins of a Roman frontier fort" },
          { zh: "中世紀的岩鹽礦場", en: "A medieval rock-salt mine" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "加杜法瓦是撒哈拉最豐富的恐龍化石帶之一,擁有 500 多顆牙齒的植食恐龍「尼日龍」即以尼日命名,長達 12 公尺的帝鱷則被暱稱為「超級鱷」。",
          en: "Gadoufaoua is among the Sahara's richest dinosaur beds: the 500-toothed plant-eater Nigersaurus is named for Niger, and the 12-meter Sarcosuchus earned the nickname 'SuperCroc'.",
        },
      },
    ],
  },
  MLI: {
    extraQuiz: [
      {
        question: {
          zh: "馬利中部的邦賈加拉懸崖,以哪個民族依崖而建的村落與面具儀式聞名,並列入世界遺產?",
          en: "The Bandiagara Escarpment in central Mali is famous for the cliffside villages and mask rituals of which people, earning UNESCO status?",
        },
        options: [
          { zh: "多貢人", en: "The Dogon" },
          { zh: "圖阿雷格人", en: "The Tuareg" },
          { zh: "富拉人", en: "The Fula" },
          { zh: "桑海人", en: "The Songhai" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "多貢人約自 15 世紀起遷居懸崖一帶,承接了更早的泰倫人崖穴;他們的宇宙觀、雕刻與面具舞蹈是西非最著名的傳統文化之一。",
          en: "The Dogon settled the escarpment from around the 15th century, inheriting cliff dwellings of the earlier Tellem; their cosmology, carvings, and masked dances are among West Africa's most celebrated traditions.",
        },
      },
      {
        question: {
          zh: "傳統駱駝商隊「阿扎萊」至今仍從撒哈拉深處的陶代尼,運送什麼貨物到廷巴克圖?",
          en: "The traditional 'azalai' camel caravans still carry what cargo from Taoudenni, deep in the Sahara, to Timbuktu?",
        },
        options: [
          { zh: "岩鹽鹽板", en: "Slabs of rock salt" },
          { zh: "黃金", en: "Gold" },
          { zh: "椰棗", en: "Dates" },
          { zh: "象牙", en: "Ivory" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "陶代尼鹽礦位於廷巴克圖以北約 660 公里,礦工把鹽切成大板,由駝隊或卡車南運;「以鹽換金」正是昔日跨撒哈拉貿易的寫照。",
          en: "The Taoudenni mines lie some 660 km north of Timbuktu; miners cut salt into large slabs hauled south by camel or truck. 'Salt for gold' was the very essence of the old trans-Saharan trade.",
        },
      },
      {
        question: {
          zh: "在馬利的曼丁文化中,世代世襲、負責傳唱歷史與家族譜系的樂師階層稱為什麼?",
          en: "In Mali's Mande culture, what is the hereditary caste of musicians who preserve history and family genealogies in song?",
        },
        options: [
          { zh: "格里奧(Griot)", en: "Griots" },
          { zh: "馬拉布特(Marabout)", en: "Marabouts" },
          { zh: "圖阿雷格(Tuareg)", en: "Tuaregs" },
          { zh: "哈里發(Caliph)", en: "Caliphs" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "格里奧(當地又稱傑利)以口傳方式保存帝國史詩與家譜,常彈奏 21 弦的科拉琴;《松迪亞塔史詩》正是靠格里奧世代傳唱至今。",
          en: "Griots (locally 'jeli') keep epics and genealogies alive orally, often accompanied by the 21-string kora; the Epic of Sundiata survives today because griots have sung it for generations.",
        },
      },
    ],
  },
  MRT: {
    extraQuiz: [
      {
        question: {
          zh: "茅利塔尼亞大西洋岸的哪座國家公園,是數百萬遷徙水鳥的度冬地,並列入世界遺產?",
          en: "Which national park on Mauritania's Atlantic coast, a wintering ground for millions of migratory waterbirds, is a UNESCO World Heritage Site?",
        },
        options: [
          { zh: "阿爾金淺灘國家公園", en: "Banc d'Arguin National Park" },
          { zh: "朱賈國家公園", en: "Djoudj National Park" },
          { zh: "瓦扎國家公園", en: "Waza National Park" },
          { zh: "彭賈里國家公園", en: "Pendjari National Park" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿爾金淺灘的沙洲、海草床與淺海是歐亞候鳥南下的重要中繼站;當地因姆拉根漁民與海豚合作圍捕烏魚的傳統漁法而聞名。",
          en: "Banc d'Arguin's sandbanks, seagrass beds, and shallows are a crucial staging post for Eurasian migratory birds; its Imraguen fishermen are famed for traditionally netting mullet with the help of dolphins.",
        },
      },
      {
        question: {
          zh: "茅利塔尼亞的貨幣「烏吉亞」有什麼世界罕見的特點?",
          en: "What globally rare feature does Mauritania's currency, the ouguiya, have?",
        },
        options: [
          {
            zh: "採非十進位制,1 烏吉亞等於 5 庫姆斯",
            en: "It is non-decimal — one ouguiya equals five khoums",
          },
          {
            zh: "是世界上單張面額最大的紙鈔",
            en: "It has the largest single banknote denomination in the world",
          },
          { zh: "只發行硬幣,沒有紙鈔", en: "It is issued only as coins, with no banknotes" },
          { zh: "幣值直接與黃金價格掛鉤", en: "Its value is pegged directly to the gold price" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "全球現行貨幣幾乎都採百進位,只有茅利塔尼亞的烏吉亞與馬達加斯加的阿里亞里是五進位的非十進位貨幣;2018 年烏吉亞還以 10 比 1 重新計值。",
          en: "Nearly every modern currency divides into 100 subunits; only Mauritania's ouguiya and Madagascar's ariary split into five. The ouguiya was also redenominated 10-to-1 in 2018.",
        },
      },
      {
        question: {
          zh: "「茅利塔尼亞」這個國名源自哪裡?",
          en: "Where does the name 'Mauritania' come from?",
        },
        options: [
          {
            zh: "古代柏柏人的茅利塔尼亞王國,後來成為羅馬行省之名",
            en: "The ancient Berber kingdom of Mauretania, later a Roman province name",
          },
          { zh: "一位阿拉伯征服者的名字", en: "The name of an Arab conqueror" },
          { zh: "境內最大綠洲的名稱", en: "The name of its largest oasis" },
          { zh: "葡萄牙航海家的命名", en: "A name coined by a Portuguese navigator" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "古典時代的茅利塔尼亞王國其實位於今日摩洛哥與阿爾及利亞西部一帶,法國殖民者借用這個古名稱呼更南方的這片領地,沿用至今。",
          en: "The classical kingdom of Mauretania actually lay in today's Morocco and western Algeria; French colonizers borrowed the ancient name for this territory farther south, and it stuck.",
        },
      },
    ],
  },
  GMB: {
    extraQuiz: [
      {
        question: {
          zh: "甘比亞河中游的瓦蘇遺址,以什麼樣的史前遺跡列入世界遺產?",
          en: "The Wassu site on the middle Gambia River is UNESCO-listed for what kind of ancient monuments?",
        },
        options: [
          {
            zh: "紅土石柱圍成的石圈古墓群",
            en: "Stone circles of laterite pillars marking ancient burials",
          },
          { zh: "史前洞穴壁畫", en: "Prehistoric cave paintings" },
          { zh: "小型金字塔群", en: "A cluster of small pyramids" },
          { zh: "巨石神廟遺構", en: "The remains of a megalithic temple" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "瓦蘇與克爾巴奇石圈屬於「塞內甘比亞石圈」世界遺產,上千座石圈散布於甘比亞河流域,建造年代橫跨西元前 3 世紀到西元 16 世紀。",
          en: "Wassu and Kerbatch belong to the UNESCO-listed Senegambian stone circles — over a thousand rings scattered across the river basin, erected between the 3rd century BC and the 16th century AD.",
        },
      },
      {
        question: {
          zh: "1982 至 1989 年,甘比亞曾與塞內加爾組成什麼樣的政治聯合體?",
          en: "From 1982 to 1989, The Gambia joined Senegal in what political union?",
        },
        options: [
          { zh: "塞內甘比亞邦聯", en: "The Senegambia Confederation" },
          { zh: "西非聯邦", en: "The West African Federation" },
          { zh: "馬利聯邦", en: "The Mali Federation" },
          { zh: "大甘比亞聯盟", en: "The Greater Gambia Union" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1981 年甘比亞政變未遂、由塞內加爾出兵平定後,兩國於 1982 年組成邦聯,整合軍事與部分政策;但甘比亞不願走向更深的統合,邦聯於 1989 年解散。",
          en: "After Senegalese troops put down a 1981 coup attempt in The Gambia, the two states formed a confederation in 1982, merging security and some policy; Gambian reluctance toward deeper union led to its dissolution in 1989.",
        },
      },
      {
        question: {
          zh: "自殖民時期以來,甘比亞經濟最倚重的出口農作物是什麼?",
          en: "Since colonial times, which export crop has The Gambia's economy leaned on most?",
        },
        options: [
          { zh: "花生", en: "Groundnuts (peanuts)" },
          { zh: "可可", en: "Cocoa" },
          { zh: "咖啡", en: "Coffee" },
          { zh: "橡膠", en: "Rubber" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "19 世紀中葉起花生就是甘比亞的命脈,鼎盛時期幾乎是唯一的出口品;甘比亞河的水運讓內陸產區的花生得以順流集運出海。",
          en: "Groundnuts have been The Gambia's lifeblood since the mid-19th century, at times virtually its only export; the navigable river let upcountry harvests float downstream to the sea.",
        },
      },
    ],
  },
  GNB: {
    extraQuiz: [
      {
        question: {
          zh: "幾內亞比索在貨幣上有什麼特別之處?",
          en: "What is distinctive about Guinea-Bissau's currency arrangement?",
        },
        options: [
          {
            zh: "身為前葡萄牙殖民地,卻於 1997 年加入西非經濟貨幣聯盟,改用西非法郎",
            en: "Though a former Portuguese colony, it joined the West African monetary union in 1997 and adopted the CFA franc",
          },
          { zh: "直接以歐元為法定貨幣", en: "It uses the euro as legal tender" },
          {
            zh: "與葡萄牙共用埃斯庫多",
            en: "It shares the escudo with Portugal",
          },
          { zh: "以美元為官方貨幣", en: "Its official currency is the US dollar" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "幾內亞比索放棄原本的比索,成為西非法郎區裡唯一的前葡萄牙殖民地成員;西非法郎由西非經濟貨幣聯盟八國共用,匯率與歐元掛鉤。",
          en: "Abandoning its own peso, Guinea-Bissau became the only ex-Portuguese colony in the West African CFA franc zone — a currency shared by eight countries and pegged to the euro.",
        },
      },
      {
        question: {
          zh: "哪一種融合多族群節奏、常在慶典中演出的音樂類型,被視為幾內亞比索的代表性音樂?",
          en: "Which genre, blending the rhythms of many ethnic groups and played at celebrations, is considered Guinea-Bissau's signature music?",
        },
        options: [
          { zh: "貢貝(Gumbe)", en: "Gumbe" },
          { zh: "法朵(Fado)", en: "Fado" },
          { zh: "姆巴蘭(Mbalax)", en: "Mbalax" },
          { zh: "海利夫(Highlife)", en: "Highlife" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "貢貝匯集了幾內亞比索各族群的節奏與克里奧爾語歌詞,獨立運動時期更成為凝聚認同的聲音;歌手如「超級媽媽朱姆博」樂團將它推向國際。",
          en: "Gumbe weaves together the country's many ethnic rhythms with Kriol lyrics and became a voice of identity during the independence struggle; bands like Super Mama Djombo carried it abroad.",
        },
      },
      {
        question: {
          zh: "1941 年遷往比索之前,葡屬幾內亞的首府設在哪座島上城鎮?",
          en: "Before moving to Bissau in 1941, Portuguese Guinea's capital sat in which island town?",
        },
        options: [
          { zh: "博拉馬", en: "Bolama" },
          { zh: "布巴克", en: "Bubaque" },
          { zh: "加布", en: "Gabú" },
          { zh: "巴法塔", en: "Bafatá" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "博拉馬島曾是英葡兩國的主權爭端焦點,1870 年經美國總統格蘭特仲裁判歸葡萄牙;如今鎮上仍保留成排傾頹的葡式官署建築,宛如凝結的時光。",
          en: "Bolama island was once disputed between Britain and Portugal, awarded to Portugal in 1870 through US President Grant's arbitration; its rows of crumbling Portuguese administrative buildings still stand frozen in time.",
        },
      },
    ],
  },
  GIN: {
    extraQuiz: [
      {
        question: {
          zh: "幾內亞的最高點位於哪座山?這座山也是象牙海岸的最高峰。",
          en: "Guinea's highest point lies on which mountain — also the highest peak of Côte d'Ivoire?",
        },
        options: [
          {
            zh: "寧巴山(理查-莫拉德峰,1,752 公尺)",
            en: "Mount Nimba (Mont Richard-Molard, 1,752 m)",
          },
          { zh: "賓圖馬尼峰", en: "Mount Bintumani" },
          { zh: "喀麥隆火山", en: "Mount Cameroon" },
          { zh: "托布卡勒峰", en: "Mount Toubkal" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "寧巴山橫跨幾內亞與象牙海岸邊界,其嚴格自然保護區列為世界遺產,棲息著罕見的胎生蟾蜍與會用工具的黑猩猩,山體同時蘊藏高品位鐵礦。",
          en: "Straddling the Guinea–Côte d'Ivoire border, Mount Nimba's Strict Nature Reserve is a UNESCO site sheltering the rare viviparous toad and tool-using chimpanzees — while the massif also holds high-grade iron ore.",
        },
      },
      {
        question: {
          zh: "保存在幾內亞尼亞加索拉村、被聯合國教科文組織列為非物質文化遺產的「索索巴拉」是什麼?",
          en: "The 'Sosso-Bala', kept in the Guinean village of Niagassola and recognized by UNESCO as intangible cultural heritage, is what?",
        },
        options: [
          {
            zh: "一件相傳源自 13 世紀的神聖巴拉風木琴",
            en: "A sacred balafon (wooden xylophone) said to date from the 13th century",
          },
          { zh: "一部古蘭經手抄本", en: "A manuscript copy of the Quran" },
          { zh: "一頂歷代國王的黃金王冠", en: "A golden crown of successive kings" },
          { zh: "一面出征用的皇家戰鼓", en: "A royal war drum carried into battle" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "相傳索索巴拉屬於蘇蘇國王蘇毛羅·康特,松迪亞塔擊敗他後將琴交由庫亞特家族的格里奧世代守護;它被視為曼丁文化的聖物,只在特定儀式中演奏。",
          en: "Legend ties the Sosso-Bala to the Sosso king Soumaoro Kanté; after Sundiata's victory it passed to the Kouyaté griot family, who have guarded it for generations. A holy relic of Mande culture, it is played only on ritual occasions.",
        },
      },
      {
        question: {
          zh: "幾內亞東南部博蘇村的野生黑猩猩,因什麼行為成為靈長類研究的經典案例?",
          en: "The wild chimpanzees of Bossou in southeastern Guinea became a classic case in primate research for what behavior?",
        },
        options: [
          {
            zh: "用石塊當鎚子和砧板,敲開油棕果仁",
            en: "Using stones as hammer and anvil to crack open oil-palm nuts",
          },
          { zh: "會游泳潛水捕魚", en: "Swimming and diving to catch fish" },
          { zh: "會生火烤熟食物", en: "Making fires to cook their food" },
          { zh: "在雪地裡築巢過冬", en: "Building nests in snow to pass the winter" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "自 1976 年起,京都大學團隊在博蘇長期觀察黑猩猩以石器敲堅果的技術如何學習與傳承,這裡成為研究動物文化與工具使用的指標性野外基地。",
          en: "Since 1976, Kyoto University researchers have documented how Bossou's chimps learn and pass on stone-tool nut-cracking, making the site a landmark field station for studying animal culture and tool use.",
        },
      },
    ],
  },
};
