import type { Country } from "../types";

// Asia (batch 2): Central Asia, South Asia, Caucasus, Mongolia, Maldives.
// Content shape is LLM-generatable — see types.ts.

export const ASIA_MORE1: Country[] = [
  {
    id: "KAZ",
    name: { zh: "哈薩克", en: "Kazakhstan" },
    capital: { zh: "阿斯塔納", en: "Astana" },
    flag: "🇰🇿",
    region: "asia",
    center: { lat: 48.0, lng: 66.9 },
    intro: {
      zh: "世界最大的內陸國,國土橫跨草原、沙漠與天山山脈,面積居全球第九。石油與礦產撐起經濟,拜科努爾太空發射場見證人類進入太空的歷史,遊牧傳統與現代都會並存。",
      en: "The world's largest landlocked country, ninth largest overall, spanning steppes, deserts, and the Tian Shan. Oil and minerals power its economy, the Baikonur Cosmodrome launched humanity into space, and nomadic traditions coexist with modern cities.",
    },
    history: {
      zh: "哈薩克草原自古是遊牧民族的家園,15 世紀哈薩克汗國成形,分為大、中、小三個玉茲。18 至 19 世紀逐步併入俄羅斯帝國,蘇聯時期經歷集體化饑荒與大規模移民,也成為太空計畫基地。1991 年蘇聯解體後獨立,憑藉豐富油氣資源發展經濟,1997 年將首都由阿拉木圖遷至阿斯塔納。",
      en: "The Kazakh steppe was home to nomads for millennia; the Kazakh Khanate formed in the 15th century, divided into three Hordes. Absorbed into the Russian Empire through the 18th–19th centuries, it endured collectivization famine under the Soviets while hosting the space program. Independent since 1991, it built an oil-driven economy and moved the capital from Almaty to Astana in 1997.",
    },
    cities: [
      {
        name: { zh: "阿斯塔納", en: "Astana" },
        blurb: {
          zh: "1997 年啟用的新首都,草原上拔地而起的未來主義建築群。",
          en: "The purpose-built capital since 1997 — futuristic architecture rising from the open steppe.",
        },
        trivia: {
          question: {
            zh: "哈薩克首都阿斯塔納在 2019 至 2022 年間曾改用什麼名稱?",
            en: "Between 2019 and 2022, Kazakhstan's capital Astana was renamed what?",
          },
          options: [
            { zh: "努爾蘇丹", en: "Nur-Sultan" },
            { zh: "阿拉木圖", en: "Almaty" },
            { zh: "卡拉干達", en: "Karaganda" },
            { zh: "突厥斯坦", en: "Turkistan" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "為紀念首任總統納扎爾巴耶夫而改名努爾蘇丹,2022 年又改回阿斯塔納。",
            en: "It was renamed Nur-Sultan after first president Nazarbayev, then reverted to Astana in 2022.",
          },
        },
      },
      {
        name: { zh: "阿拉木圖", en: "Almaty" },
        blurb: {
          zh: "最大城市與舊都,坐落天山北麓,綠意盎然的文化中心。",
          en: "The largest city and former capital, a leafy cultural hub at the foot of the Tian Shan.",
        },
        trivia: {
          question: {
            zh: "阿拉木圖的名稱與哪種水果有關?一般認為其野生原種就源自這一帶山區。",
            en: "Almaty's name is linked to which fruit, whose wild ancestor is thought to originate in these mountains?",
          },
          options: [
            { zh: "蘋果", en: "Apples" },
            { zh: "葡萄", en: "Grapes" },
            { zh: "石榴", en: "Pomegranates" },
            { zh: "杏桃", en: "Apricots" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Almaty 與哈薩克語的「蘋果」相關,天山野蘋果被視為現代栽培蘋果的祖先。",
            en: "Almaty relates to the Kazakh word for apple; the Tian Shan wild apple is considered the ancestor of the domesticated apple.",
          },
        },
      },
      {
        name: { zh: "突厥斯坦", en: "Turkistan" },
        blurb: {
          zh: "南部古城,蘇菲聖人亞薩維的陵墓所在,朝聖與絲路重鎮。",
          en: "An ancient southern city, home to the mausoleum of Sufi saint Yasawi and a Silk Road pilgrimage site.",
        },
        trivia: {
          question: {
            zh: "突厥斯坦的哪座建築由帖木兒下令興建,是哈薩克第一個世界文化遺產?",
            en: "Which building in Turkistan, commissioned by Timur, became Kazakhstan's first World Heritage site?",
          },
          options: [
            { zh: "霍賈·艾哈邁德·亞薩維陵墓", en: "The Mausoleum of Khoja Ahmed Yasawi" },
            { zh: "雷吉斯坦經學院", en: "The Registan madrasah" },
            { zh: "卡揚宣禮塔", en: "The Kalyan Minaret" },
            { zh: "希瓦古城門", en: "The gates of Khiva" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "帖木兒 14 世紀末下令為蘇菲詩人亞薩維建陵,2003 年成為哈薩克首個世界遺產。",
            en: "Timur ordered the mausoleum for the Sufi poet Yasawi in the late 14th century; it became Kazakhstan's first World Heritage site in 2003.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1961 年加加林從哈薩克的拜科努爾發射場升空,完成人類首次太空飛行,該基地至今仍由俄羅斯租用。",
        en: "In 1961 Yuri Gagarin launched from Baikonur in Kazakhstan on humanity's first spaceflight — Russia still leases the site today.",
      },
      {
        zh: "哈薩克是世界最大的內陸國,國土面積相當於整個西歐。",
        en: "Kazakhstan is the world's largest landlocked country — roughly the size of Western Europe.",
      },
    ],
    climate: {
      zh: "典型大陸性氣候,冬夏溫差極大:北部草原冬季可低於 -30°C,南部夏季乾熱,全年降水偏少。",
      en: "Sharply continental: steppe winters in the north can drop below -30°C while southern summers are hot and dry, with low precipitation year-round.",
    },
    travelTips: [
      {
        zh: "冬夏與日夜溫差都很大,採洋蔥式穿搭,冬季務必備妥厚重禦寒衣物。",
        en: "Temperature swings are huge between seasons and within a day — dress in layers, and pack serious cold-weather gear in winter.",
      },
      {
        zh: "城市之間距離動輒數百公里,城際移動建議搭乘國內線班機或火車並預留時間。",
        en: "Cities are hundreds of kilometers apart; plan domestic flights or trains and allow generous travel time.",
      },
      {
        zh: "進入清真寺等宗教場所請衣著端莊,女性可備頭巾備用。",
        en: "Dress modestly when visiting mosques and religious sites; women may want to carry a headscarf.",
      },
    ],
  },
  {
    id: "UZB",
    name: { zh: "烏茲別克", en: "Uzbekistan" },
    capital: { zh: "塔什干", en: "Tashkent" },
    flag: "🇺🇿",
    region: "asia",
    center: { lat: 41.4, lng: 64.6 },
    intro: {
      zh: "中亞人口最多的國家,撒馬爾罕、布哈拉、希瓦等絲路古城如露天博物館般保存至今。藍色穹頂與磁磚工藝舉世聞名,棉花與黃金是傳統經濟支柱,近年逐步對外開放觀光。",
      en: "Central Asia's most populous nation, where Silk Road cities like Samarkand, Bukhara, and Khiva survive as open-air museums. Famed for blue domes and tilework, it relies on cotton and gold, and has recently opened up to tourism.",
    },
    history: {
      zh: "這片綠洲地帶自古是絲路樞紐,歷經波斯、亞歷山大帝國與阿拉伯統治,9 至 10 世紀布哈拉成為伊斯蘭學術重鎮。13 世紀蒙古西征後,14 世紀帖木兒以撒馬爾罕為都建立大帝國。19 世紀被俄羅斯帝國征服,蘇聯時期強制種植棉花導致鹹海生態浩劫。1991 年獨立,2016 年後推動開放改革。",
      en: "These oases anchored the Silk Road under Persian, Hellenistic, and Arab rule, with Bukhara a great center of Islamic learning by the 10th century. After the Mongol conquest, Timur built his empire from Samarkand in the 14th century. Conquered by Russia in the 19th century, it saw Soviet cotton monoculture devastate the Aral Sea. Independent since 1991, it began liberalizing after 2016.",
    },
    cities: [
      {
        name: { zh: "塔什干", en: "Tashkent" },
        blurb: {
          zh: "中亞最大城市之一,寬闊林蔭大道與華麗地鐵站的蘇式現代都會。",
          en: "One of Central Asia's largest cities — broad boulevards and ornate metro stations with a Soviet-modern feel.",
        },
        trivia: {
          question: {
            zh: "塔什干在 1966 年遭遇什麼災難後大規模重建,造就今日寬闊的街廓面貌?",
            en: "What 1966 disaster led to Tashkent's massive rebuilding and today's wide, planned streets?",
          },
          options: [
            { zh: "大地震", en: "A major earthquake" },
            { zh: "大洪水", en: "A great flood" },
            { zh: "全城大火", en: "A citywide fire" },
            { zh: "戰爭轟炸", en: "Wartime bombing" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1966 年強震摧毀大片市區,蘇聯動員全聯盟力量重建,塔什干因此有寬闊的現代街廓與中亞第一條地鐵。",
            en: "A powerful quake leveled much of the city; a Soviet-wide rebuilding effort gave Tashkent its broad modern layout and Central Asia's first metro.",
          },
        },
      },
      {
        name: { zh: "撒馬爾罕", en: "Samarkand" },
        blurb: {
          zh: "帖木兒帝國的都城,雷吉斯坦廣場是絲路建築的巔峰之作。",
          en: "Capital of Timur's empire — Registan Square is the pinnacle of Silk Road architecture.",
        },
        trivia: {
          question: {
            zh: "撒馬爾罕著名的雷吉斯坦廣場由三座什麼建築圍成?",
            en: "Samarkand's famous Registan Square is framed by three buildings of what kind?",
          },
          options: [
            { zh: "伊斯蘭經學院", en: "Madrasahs (Islamic schools)" },
            { zh: "清真寺", en: "Mosques" },
            { zh: "皇宮", en: "Royal palaces" },
            { zh: "商隊客棧", en: "Caravanserais" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "兀魯伯、希爾多爾與提雅卡力三座經學院分別建於 15 與 17 世紀,合圍成這座傳奇廣場。",
            en: "The Ulugh Beg, Sher-Dor, and Tilya-Kori madrasahs, built in the 15th and 17th centuries, enclose the legendary square.",
          },
        },
      },
      {
        name: { zh: "布哈拉", en: "Bukhara" },
        blurb: {
          zh: "兩千五百年古城,曾是伊斯蘭世界的學術中心,老城整體列入世界遺產。",
          en: "A 2,500-year-old city, once a center of Islamic scholarship; its entire old town is World Heritage.",
        },
        trivia: {
          question: {
            zh: "相傳成吉思汗攻陷布哈拉時,唯獨下令保留了哪座建築?",
            en: "Legend says that when Genghis Khan sacked Bukhara, he spared which single structure?",
          },
          options: [
            { zh: "卡揚宣禮塔", en: "The Kalyan Minaret" },
            { zh: "雅克城堡", en: "The Ark fortress" },
            { zh: "薩曼王陵", en: "The Samanid Mausoleum" },
            { zh: "拉比豪茲水池", en: "The Lyab-i Hauz pond" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "相傳成吉思汗仰望這座 47 公尺高的宣禮塔時為之折服,下令免於摧毀,它因此屹立至今。",
            en: "The story goes that Genghis Khan was so awed looking up at the 47-meter minaret that he ordered it spared — it still stands today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "烏茲別克是全球僅有的兩個「雙重內陸國」之一——連它的所有鄰國也都是內陸國,另一個是列支敦斯登。",
        en: "Uzbekistan is one of only two doubly landlocked countries on Earth — every neighbor is also landlocked. The other is Liechtenstein.",
      },
    ],
    climate: {
      zh: "乾燥的大陸性氣候,沙漠與綠洲交錯:夏季酷熱常逾 40°C,冬季寒冷,降水集中在春季。",
      en: "Dry continental climate of deserts and oases: summers often exceed 40°C, winters are cold, and what little rain falls comes mostly in spring.",
    },
    travelTips: [
      {
        zh: "夏季酷熱乾燥,觀光以春秋為佳;白天防曬補水,清晨傍晚安排戶外行程。",
        en: "Summers are scorching — spring and autumn are best. Hydrate, use sun protection, and schedule outdoor sightseeing for mornings and evenings.",
      },
      {
        zh: "主要觀光城市治安良好,但小額消費常需現金,備妥當地貨幣索姆。",
        en: "Tourist cities are safe, but small purchases are often cash-only — keep Uzbek som on hand.",
      },
      {
        zh: "參觀清真寺與陵墓請衣著保守、遮蓋肩膝,進入部分聖地需脫鞋。",
        en: "Dress modestly (shoulders and knees covered) at mosques and mausoleums; some shrines require removing shoes.",
      },
    ],
  },
  {
    id: "TKM",
    name: { zh: "土庫曼", en: "Turkmenistan" },
    capital: { zh: "阿什哈巴德", en: "Ashgabat" },
    flag: "🇹🇲",
    region: "asia",
    center: { lat: 38.9, lng: 59.5 },
    intro: {
      zh: "卡拉庫姆沙漠覆蓋約七成國土的中亞國家,天然氣蘊藏量居世界前列。以白色大理石首都、燃燒半世紀的「地獄之門」氣坑與汗血寶馬聞名,是世界上最少遊客造訪的國家之一。",
      en: "A Central Asian nation where the Karakum Desert covers about 70% of the land, with some of the world's largest gas reserves. Known for its white-marble capital, the 'Door to Hell' gas crater, and Akhal-Teke horses — and among the least-visited countries on Earth.",
    },
    history: {
      zh: "境內的梅爾夫古城曾是絲路上的大都會,後毀於蒙古西征。土庫曼各部落長期遊牧於沙漠綠洲之間,19 世紀末被俄羅斯帝國征服,1924 年成為蘇聯加盟共和國。1991 年獨立後,首任總統尼亞佐夫建立高度個人崇拜的威權體制;1995 年獲聯合國承認為永久中立國,靠天然氣出口維繫經濟。",
      en: "Ancient Merv was one of the Silk Road's great cities before the Mongols destroyed it. Turkmen tribes long roamed the desert oases until Russian conquest in the late 19th century and Soviet incorporation in 1924. After 1991 independence, first president Niyazov built an authoritarian personality cult; the UN recognized Turkmenistan's permanent neutrality in 1995, and gas exports sustain the economy.",
    },
    cities: [
      {
        name: { zh: "阿什哈巴德", en: "Ashgabat" },
        blurb: {
          zh: "沙漠邊緣的白色大理石之城,宏偉紀念建築與空曠大道並存。",
          en: "A white-marble city on the desert's edge, all grand monuments and strikingly empty boulevards.",
        },
        trivia: {
          question: {
            zh: "阿什哈巴德以哪項金氏世界紀錄聞名?",
            en: "Ashgabat holds which Guinness World Record?",
          },
          options: [
            { zh: "白色大理石建築密度全球最高", en: "The world's highest density of white marble buildings" },
            { zh: "世界最長的橋樑", en: "The world's longest bridge" },
            { zh: "世界最大的機場", en: "The world's largest airport" },
            { zh: "世界最深的地鐵", en: "The world's deepest metro" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "市區有數百棟白色大理石建築,金氏世界紀錄認證其密度為全球之冠。",
            en: "Hundreds of buildings clad in white marble earned it the Guinness record for the highest concentration anywhere.",
          },
        },
      },
      {
        name: { zh: "馬雷", en: "Mary" },
        blurb: {
          zh: "南部綠洲城市,鄰近世界遺產梅爾夫古城遺址。",
          en: "A southern oasis city beside the World Heritage ruins of ancient Merv.",
        },
        trivia: {
          question: {
            zh: "馬雷近郊的梅爾夫古城曾是絲路大都會,13 世紀毀於哪支軍隊之手?",
            en: "Ancient Merv near Mary was a great Silk Road metropolis until it was destroyed in the 13th century by which army?",
          },
          options: [
            { zh: "蒙古軍", en: "The Mongols" },
            { zh: "亞歷山大大帝的軍隊", en: "Alexander the Great's army" },
            { zh: "阿拉伯軍隊", en: "The Arab armies" },
            { zh: "俄羅斯帝國軍隊", en: "The Russian imperial army" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1221 年蒙古軍攻陷梅爾夫並大肆屠城,這座曾居世界前列的大城從此一蹶不振。",
            en: "The Mongols sacked Merv in 1221 with a notorious massacre; one of the world's great cities never recovered.",
          },
        },
      },
      {
        name: { zh: "土庫曼巴希", en: "Turkmenbashi" },
        blurb: {
          zh: "西部港市,舊名克拉斯諾沃茨克,土庫曼對外海運門戶。",
          en: "The western port city, formerly Krasnovodsk — Turkmenistan's maritime gateway.",
        },
        trivia: {
          question: {
            zh: "港市土庫曼巴希瀕臨哪個水域?",
            en: "The port city of Turkmenbashi sits on the shore of which body of water?",
          },
          options: [
            { zh: "裏海", en: "The Caspian Sea" },
            { zh: "鹹海", en: "The Aral Sea" },
            { zh: "黑海", en: "The Black Sea" },
            { zh: "波斯灣", en: "The Persian Gulf" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "土庫曼巴希是裏海東岸的主要港口,渡輪可橫越裏海連接亞塞拜然的巴庫。",
            en: "It is the main port on the Caspian's eastern shore, with ferries crossing to Baku in Azerbaijan.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "卡拉庫姆沙漠中的達瓦札天然氣坑「地獄之門」自 1971 年點燃後燃燒至今。",
        en: "The Darvaza gas crater — the 'Door to Hell' — in the Karakum Desert has burned continuously since it was set alight in 1971.",
      },
      {
        zh: "被稱為「汗血寶馬」的阿哈爾捷金馬是土庫曼的國家象徵,還出現在國徽上。",
        en: "The Akhal-Teke horse, famed for its metallic sheen, is a national symbol and appears on Turkmenistan's coat of arms.",
      },
    ],
    climate: {
      zh: "極端乾燥的大陸性沙漠氣候,夏季酷熱可逾 45°C,冬季乾冷,全年降水稀少。",
      en: "An extremely arid continental desert climate: summers can top 45°C, winters are dry and cold, and rainfall is scarce year-round.",
    },
    travelTips: [
      {
        zh: "觀光簽證門檻高,多數旅客須透過旅行社取得邀請函並跟團,行前預留充足申請時間。",
        en: "Tourist visas are hard to get — most visitors need an invitation letter and a guided tour, so start the process well in advance.",
      },
      {
        zh: "拍攝政府建築、機場等場所可能受限,拍照前先確認規定。",
        en: "Photographing government buildings, airports, and similar sites may be restricted — check before you shoot.",
      },
      {
        zh: "沙漠行程務必備足飲水與防曬,日夜溫差大,夜間需保暖。",
        en: "For desert trips carry ample water and sun protection; nights get cold despite scorching days.",
      },
    ],
  },
  {
    id: "KGZ",
    name: { zh: "吉爾吉斯", en: "Kyrgyzstan" },
    capital: { zh: "比斯凱克", en: "Bishkek" },
    flag: "🇰🇬",
    region: "asia",
    center: { lat: 41.2, lng: 74.8 },
    intro: {
      zh: "被稱為「中亞瑞士」的山國,天山山脈貫穿全境,約九成國土是山地。高山湖泊伊塞克湖、氈房與遊牧文化是招牌,對多國實施免簽,是中亞最容易自助旅行的國家之一。",
      en: "The 'Switzerland of Central Asia' — a mountain nation where the Tian Shan covers about 90% of the land. Famed for alpine Lake Issyk-Kul, yurts, and nomadic culture, its visa-free policies make it Central Asia's easiest destination for independent travelers.",
    },
    history: {
      zh: "吉爾吉斯人的遊牧部落世代生活在天山山區,口傳史詩《瑪納斯》承載民族記憶。這片山地先後受突厥汗國、蒙古與浩罕汗國影響,19 世紀後期併入俄羅斯帝國,蘇聯時期成為加盟共和國。1991 年獨立後政局多次動盪,經歷 2005 與 2010 年兩次革命,是中亞政權更迭最頻繁但公民社會相對活躍的國家。",
      en: "Kyrgyz nomads have lived in the Tian Shan for centuries, their memory carried in the oral epic of Manas. The region passed under Turkic khaganates, the Mongols, and the Khanate of Kokand before Russian annexation in the late 19th century and Soviet republic status. Since 1991 independence it has seen revolutions in 2005 and 2010 — Central Asia's most turbulent politics, but also its liveliest civil society.",
    },
    cities: [
      {
        name: { zh: "比斯凱克", en: "Bishkek" },
        blurb: {
          zh: "天山腳下的首都,綠樹成蔭的棋盤街道保留濃厚蘇聯風貌。",
          en: "The capital at the foot of the Tian Shan — leafy grid streets with a strong Soviet-era flavor.",
        },
        trivia: {
          question: {
            zh: "一般認為首都比斯凱克的名稱源自什麼物品?",
            en: "The name of the capital, Bishkek, is generally believed to derive from what object?",
          },
          options: [
            { zh: "攪拌馬奶酒的木製器具", en: "A wooden churn for making fermented mare's milk" },
            { zh: "一座古代山口", en: "An ancient mountain pass" },
            { zh: "一位可汗的名字", en: "The name of a khan" },
            { zh: "一種高山飛鳥", en: "A mountain bird" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「bishkek」一般認為是攪拌馬奶酒(kumis)用的木棒,馬奶酒正是吉爾吉斯的國民飲品。",
            en: "A 'bishkek' is widely held to be the paddle used to churn kumis — fermented mare's milk, the national drink.",
          },
        },
      },
      {
        name: { zh: "奧什", en: "Osh" },
        blurb: {
          zh: "南部第一大城,號稱有三千年歷史,費爾干納盆地的門戶。",
          en: "The largest city in the south, claiming 3,000 years of history at the edge of the Fergana Valley.",
        },
        trivia: {
          question: {
            zh: "奧什市中心的哪座聖山是吉爾吉斯第一個世界文化遺產?",
            en: "Which sacred mountain in the middle of Osh became Kyrgyzstan's first World Heritage site?",
          },
          options: [
            { zh: "蘇萊曼聖山", en: "Sulaiman-Too" },
            { zh: "汗騰格里峰", en: "Khan Tengri" },
            { zh: "列寧峰", en: "Lenin Peak" },
            { zh: "勝利峰", en: "Jengish Chokusu (Victory Peak)" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "蘇萊曼聖山數千年來是絲路旅人與穆斯林的朝聖地,2009 年列入世界遺產。",
            en: "Sulaiman-Too has drawn Silk Road travelers and Muslim pilgrims for millennia; it was inscribed in 2009.",
          },
        },
      },
      {
        name: { zh: "卡拉科爾", en: "Karakol" },
        blurb: {
          zh: "伊塞克湖東岸山城,健行與滑雪基地,俄式木教堂與東干清真寺並存。",
          en: "A mountain town east of Lake Issyk-Kul, a trekking and ski base with a Russian wooden church and a Dungan mosque.",
        },
        trivia: {
          question: {
            zh: "卡拉科爾所在的伊塞克湖是世界最大的高山湖泊之一,它有什麼著名特點?",
            en: "Lake Issyk-Kul near Karakol is one of the world's largest alpine lakes. What is it famous for?",
          },
          options: [
            { zh: "湖水終年不結冰", en: "It never freezes over" },
            { zh: "是世界最深的湖泊", en: "It is the world's deepest lake" },
            { zh: "是海拔最高的湖泊", en: "It is the highest lake on Earth" },
            { zh: "湖水每年變色一次", en: "Its water changes color once a year" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「伊塞克庫爾」意為「熱湖」,因湖水微鹹且深度大,即使在嚴冬也不封凍。",
            en: "'Issyk-Kul' means 'warm lake' — slight salinity and great depth keep it ice-free even in harsh winters.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "吉爾吉斯史詩《瑪納斯》長達數十萬行,是世界上最長的史詩之一,由專職史詩吟唱者「瑪納斯奇」口傳背誦。",
        en: "The Kyrgyz Epic of Manas runs to hundreds of thousands of lines — among the longest epics ever — recited from memory by specialist bards called manaschi.",
      },
    ],
    climate: {
      zh: "高山大陸性氣候:谷地夏季炎熱、冬季寒冷,山區涼爽多變,伊塞克湖畔相對溫和。",
      en: "Mountain continental climate: hot valley summers and cold winters, cooler and changeable in the highlands, milder around Lake Issyk-Kul.",
    },
    travelTips: [
      {
        zh: "山區天氣瞬息萬變,健行務必備妥保暖、防風防雨衣物,並告知住宿處行程。",
        en: "Mountain weather changes fast — pack warm, wind- and rain-proof layers for treks, and tell your guesthouse your route.",
      },
      {
        zh: "許多健行路線超過 3,000 公尺,注意高山症,行程循序漸進。",
        en: "Many trails climb above 3,000 m — watch for altitude sickness and ascend gradually.",
      },
      {
        zh: "鄉間多為民宿與氈房住宿,刷卡不便,備妥現金。",
        en: "Rural stays are mostly homestays and yurt camps where cards rarely work — carry cash.",
      },
    ],
  },
  {
    id: "TJK",
    name: { zh: "塔吉克", en: "Tajikistan" },
    capital: { zh: "杜尚別", en: "Dushanbe" },
    flag: "🇹🇯",
    region: "asia",
    center: { lat: 38.9, lng: 71.3 },
    intro: {
      zh: "帕米爾高原上的山國,約九成國土是山地,有「世界屋脊」之稱的帕米爾在此與天山交會。是中亞唯一以波斯語系語言為主的國家,水力資源豐沛,帕米爾公路是探險旅人的夢想路線。",
      en: "A nation of the Pamirs, with mountains covering some 90% of its land where the 'Roof of the World' meets the Tian Shan. The only Central Asian country speaking a Persian-family language, it is rich in hydropower, and the Pamir Highway is a dream route for adventurers.",
    },
    history: {
      zh: "塔吉克人是中亞古老的定居民族,承襲波斯文化,9 至 10 世紀的薩曼王朝被視為民族黃金時代。其後歷經突厥與蒙古勢力更迭,19 世紀後期納入俄羅斯勢力範圍,1929 年成為蘇聯加盟共和國。1991 年獨立後隨即爆發內戰,1997 年停火;至今是中亞最貧困的國家之一,大量國民赴俄工作,僑匯占經濟比重極高。",
      en: "The Tajiks are an ancient settled, Persian-heritage people of Central Asia, with the 9th–10th century Samanid dynasty seen as their golden age. Turkic and Mongol powers followed, then Russian dominance from the late 19th century and Soviet republic status in 1929. Independence in 1991 was followed by a civil war until 1997; still among Central Asia's poorest states, it depends heavily on remittances from workers in Russia.",
    },
    cities: [
      {
        name: { zh: "杜尚別", en: "Dushanbe" },
        blurb: {
          zh: "群山環抱的首都,由昔日的市集小鎮發展為林蔭大道之城。",
          en: "A capital ringed by mountains, grown from a market village into a city of tree-lined avenues.",
        },
        trivia: {
          question: {
            zh: "首都「杜尚別」在塔吉克語中是什麼意思?",
            en: "What does 'Dushanbe' mean in Tajik?",
          },
          options: [
            { zh: "星期一", en: "Monday" },
            { zh: "星期五", en: "Friday" },
            { zh: "新城", en: "New city" },
            { zh: "河谷", en: "River valley" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這裡原是每逢星期一開市的集鎮,「杜尚別」即塔吉克語的「星期一」。",
            en: "The town grew from a market held every Monday — 'Dushanbe' is simply the Tajik word for Monday.",
          },
        },
      },
      {
        name: { zh: "苦盞", en: "Khujand" },
        blurb: {
          zh: "北部第二大城,費爾干納盆地入口,歷史逾兩千五百年。",
          en: "The second city, gateway to the Fergana Valley, with over 2,500 years of history.",
        },
        trivia: {
          question: {
            zh: "苦盞相傳與哪位歷史人物所建的「最遠的亞歷山卓城」有關?",
            en: "Khujand is traditionally linked to 'Alexandria the Farthest', a city founded by which historical figure?",
          },
          options: [
            { zh: "亞歷山大大帝", en: "Alexander the Great" },
            { zh: "成吉思汗", en: "Genghis Khan" },
            { zh: "帖木兒", en: "Timur" },
            { zh: "居魯士大帝", en: "Cyrus the Great" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "西元前 329 年亞歷山大在錫爾河畔建立帝國最東北端的城市 Alexandria Eschate,一般認為即今日苦盞一帶。",
            en: "In 329 BC Alexander founded Alexandria Eschate on the Syr Darya — the empire's farthest outpost, generally identified with today's Khujand.",
          },
        },
      },
      {
        name: { zh: "霍羅格", en: "Khorog" },
        blurb: {
          zh: "帕米爾山區的行政中心,海拔約 2,100 公尺的河谷小城。",
          en: "The administrative heart of the Pamirs, a river-valley town at about 2,100 m.",
        },
        trivia: {
          question: {
            zh: "霍羅格是哪條著名高原公路上的重鎮?這條路線以壯闊荒涼聞名。",
            en: "Khorog is a key stop on which famous high-altitude road, renowned for its stark, epic scenery?",
          },
          options: [
            { zh: "帕米爾公路", en: "The Pamir Highway" },
            { zh: "喀喇崑崙公路", en: "The Karakoram Highway" },
            { zh: "查謨-列城公路", en: "The Leh–Manali Highway" },
            { zh: "泛美公路", en: "The Pan-American Highway" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "帕米爾公路(M41)橫越海拔逾 4,000 公尺的高原,是世界最高的國際公路之一,霍羅格是沿線最大城鎮。",
            en: "The Pamir Highway (M41) crosses passes above 4,000 m — one of the world's highest international roads — and Khorog is its largest town.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "塔吉克的索莫尼峰高 7,495 公尺,是前蘇聯地區的最高峰,蘇聯時代曾名「共產主義峰」。",
        en: "Ismoil Somoni Peak (7,495 m) is the highest point of the former USSR — it was once called 'Communism Peak'.",
      },
    ],
    climate: {
      zh: "高山大陸性氣候:低地谷地夏季炎熱,帕米爾高原冬季酷寒乾燥,山區長年積雪。",
      en: "Mountain continental climate: lowland valleys bake in summer while the Pamir plateau is bitterly cold and dry in winter, with year-round snow up high.",
    },
    travelTips: [
      {
        zh: "前往帕米爾地區(戈爾諾-巴達赫尚自治州)需另外申辦 GBAO 通行證。",
        en: "Travel to the Pamir region (GBAO) requires a separate GBAO permit in addition to your visa.",
      },
      {
        zh: "帕米爾公路多處超過 4,000 公尺,注意高山症並預留適應時間。",
        en: "The Pamir Highway repeatedly tops 4,000 m — plan for altitude acclimatization.",
      },
      {
        zh: "山區加油站、提款機與網路都稀少,現金、糧水與離線地圖要備足。",
        en: "Fuel stations, ATMs, and connectivity are scarce in the mountains — stock up on cash, food, water, and offline maps.",
      },
    ],
  },
  {
    id: "AFG",
    name: { zh: "阿富汗", en: "Afghanistan" },
    capital: { zh: "喀布爾", en: "Kabul" },
    flag: "🇦🇫",
    region: "asia",
    center: { lat: 33.9, lng: 67.7 },
    intro: {
      zh: "興都庫什山脈橫貫的內陸國,自古是絲路與帝國爭逐的十字路口,因列強屢屢折戟而有「帝國墳場」之稱。青金石、地毯與詩歌傳統源遠流長,近代長期戰亂使其成為世界最貧困的國家之一。",
      en: "A landlocked country spanned by the Hindu Kush, an ancient Silk Road crossroads dubbed the 'graveyard of empires' for the great powers that faltered here. Its lapis lazuli, carpets, and poetic traditions run deep, though decades of war have left it among the world's poorest nations.",
    },
    history: {
      zh: "這片土地歷經波斯帝國、亞歷山大、貴霜王朝與蒙古統治,1747 年杜蘭尼建立的王朝被視為現代阿富汗的開端。19 世紀成為英俄「大博弈」的緩衝地帶,歷經三次英阿戰爭後於 1919 年完全獨立。1979 年蘇聯入侵引發十年戰爭,其後內戰與塔利班統治相繼;2001 年美軍推翻塔利班,2021 年美軍撤離後塔利班重新掌權。",
      en: "Persians, Alexander, the Kushans, and the Mongols all ruled here; the Durrani dynasty founded in 1747 is seen as the start of the modern Afghan state. A buffer in the 19th-century 'Great Game', it won full independence in 1919 after three Anglo-Afghan wars. The 1979 Soviet invasion began a decade of war, followed by civil war and Taliban rule; US forces toppled the Taliban in 2001, and the Taliban returned to power after the 2021 withdrawal.",
    },
    cities: [
      {
        name: { zh: "喀布爾", en: "Kabul" },
        blurb: {
          zh: "海拔約 1,800 公尺的首都,兩千多年來扼守山間商路要衝。",
          en: "The capital at about 1,800 m, guarding mountain trade routes for over two millennia.",
        },
        trivia: {
          question: {
            zh: "喀布爾坐落在哪座山脈的谷地之中?",
            en: "Kabul lies in a valley of which mountain range?",
          },
          options: [
            { zh: "興都庫什山脈", en: "The Hindu Kush" },
            { zh: "喜馬拉雅山脈", en: "The Himalayas" },
            { zh: "札格羅斯山脈", en: "The Zagros Mountains" },
            { zh: "高加索山脈", en: "The Caucasus" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "興都庫什山脈橫貫阿富汗,喀布爾就位於其南緣的高谷,冬季常有降雪。",
            en: "The Hindu Kush spans Afghanistan; Kabul sits in a high valley on its southern flank, with snowy winters.",
          },
        },
      },
      {
        name: { zh: "赫拉特", en: "Herat" },
        blurb: {
          zh: "西部古城,帖木兒帝國時期的文藝重鎮,被譽為「呼羅珊明珠」。",
          en: "The great western city, a Timurid-era center of art and learning — the 'Pearl of Khorasan'.",
        },
        trivia: {
          question: {
            zh: "赫拉特的禮拜五大清真寺以什麼裝飾工藝聞名?",
            en: "Herat's Great Friday Mosque is celebrated for what kind of decorative craft?",
          },
          options: [
            { zh: "繁複的彩釉磁磚", en: "Intricate glazed tilework" },
            { zh: "金箔壁畫", en: "Gold-leaf murals" },
            { zh: "大理石浮雕", en: "Marble reliefs" },
            { zh: "木雕格窗", en: "Carved wooden lattice windows" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "清真寺外牆覆滿藍綠色調的彩釉磁磚,寺內工坊至今仍以傳統技法持續修復。",
            en: "The mosque is sheathed in blue-and-turquoise glazed tiles, still maintained by an on-site workshop using traditional methods.",
          },
        },
      },
      {
        name: { zh: "馬扎里沙里夫", en: "Mazar-i-Sharif" },
        blurb: {
          zh: "北部大城,藍色清真寺的所在地,市名意為「聖者之墓」。",
          en: "The main northern city, home of the Blue Mosque — its name means 'tomb of the saint'.",
        },
        trivia: {
          question: {
            zh: "馬扎里沙里夫的藍色清真寺相傳是誰的陵墓所在?",
            en: "The Blue Mosque in Mazar-i-Sharif is traditionally held to contain the tomb of whom?",
          },
          options: [
            { zh: "先知穆罕默德的女婿阿里", en: "Ali, son-in-law of the Prophet Muhammad" },
            { zh: "帖木兒", en: "Timur" },
            { zh: "蒙兀兒皇帝巴布爾", en: "The Mughal emperor Babur" },
            { zh: "詩人魯米", en: "The poet Rumi" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "當地傳說阿里的遺體被秘密移葬於此,藍色清真寺因而成為重要聖地,城市也由此得名。",
            en: "Local tradition holds that Ali's remains were secretly brought here, making the shrine a major pilgrimage site that gave the city its name.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "阿富汗東北部出產的青金石開採歷史達數千年,古埃及法老圖坦卡門面具上的藍色石料便來自這裡。",
        en: "Lapis lazuli has been mined in northeastern Afghanistan for millennia — the blue stone on Tutankhamun's mask came from here.",
      },
      {
        zh: "阿富汗的國技「布茲卡希」是騎馬爭奪羊軀的激烈競技,一場比賽可有數百名騎手參加。",
        en: "The national sport, buzkashi, is a fierce horseback contest over a goat carcass that can involve hundreds of riders.",
      },
    ],
    climate: {
      zh: "乾燥大陸性氣候:山區冬季嚴寒多雪,南部沙漠夏季酷熱,全年降水稀少且集中在冬春。",
      en: "Arid continental climate: harsh snowy winters in the mountains, scorching summers in the southern deserts, and scant rain falling mostly in winter and spring.",
    },
    travelTips: [
      {
        zh: "多國對阿富汗發布最高級別旅遊警示,行前務必確認本國官方最新公告與當地情勢。",
        en: "Many governments maintain their highest-level travel advisories for Afghanistan — check your government's latest official guidance before any trip.",
      },
      {
        zh: "社會風俗高度保守,衣著務必端莊,女性旅客尤需事先了解並遵循當地規範。",
        en: "Society is highly conservative: dress very modestly, and women travelers should research and follow local rules carefully.",
      },
      {
        zh: "基礎設施與醫療資源有限,通訊可能不穩,重要行程須有備援方案。",
        en: "Infrastructure and medical care are limited and communications can be unreliable — build contingency plans into any itinerary.",
      },
    ],
  },
  {
    id: "PAK",
    name: { zh: "巴基斯坦", en: "Pakistan" },
    capital: { zh: "伊斯蘭馬巴德", en: "Islamabad" },
    flag: "🇵🇰",
    region: "asia",
    center: { lat: 30.4, lng: 69.3 },
    intro: {
      zh: "世界人口第五多的國家,印度河貫穿全境,北部坐擁喀喇崑崙山脈與世界第二高峰 K2。古印度河流域文明的發源地之一,蒙兀兒建築、卡車彩繪與板球熱情是鮮明的文化印記。",
      en: "The world's fifth-most-populous country, bisected by the Indus River, with the Karakoram and K2 — Earth's second-highest peak — in the north. A cradle of the Indus Valley civilization, it is known for Mughal architecture, painted trucks, and a passion for cricket.",
    },
    history: {
      zh: "摩亨佐達羅與哈拉帕見證四千多年前的印度河流域文明,其後歷經波斯、亞歷山大、貴霜與蒙兀兒帝國統治,再納入英屬印度。1947 年印巴分治,巴基斯坦作為穆斯林國家獨立,東西兩翼相隔千里;1971 年東巴基斯坦獨立為孟加拉。此後政局在文人政府與軍事政權間擺盪,1998 年成為擁核國家,經濟以農業、紡織與僑匯為主。",
      en: "Mohenjo-daro and Harappa attest to the 4,500-year-old Indus Valley civilization; Persians, Alexander, the Kushans, and the Mughals ruled before British India. Pakistan was born as a Muslim homeland in the 1947 Partition, its two wings a thousand miles apart until East Pakistan became Bangladesh in 1971. Politics has swung between civilian and military rule; it tested nuclear weapons in 1998, with agriculture, textiles, and remittances anchoring the economy.",
    },
    cities: [
      {
        name: { zh: "伊斯蘭馬巴德", en: "Islamabad" },
        blurb: {
          zh: "1960 年代規劃興建的首都,綠意棋盤街廓依傍瑪格拉丘陵。",
          en: "A planned capital built in the 1960s — green grid sectors beneath the Margalla Hills.",
        },
        trivia: {
          question: {
            zh: "伊斯蘭馬巴德地標費薩爾清真寺的名稱來自誰?",
            en: "Islamabad's landmark Faisal Mosque is named after whom?",
          },
          options: [
            { zh: "出資興建的沙烏地阿拉伯國王費薩爾", en: "King Faisal of Saudi Arabia, who funded it" },
            { zh: "巴基斯坦開國元勳真納", en: "Muhammad Ali Jinnah, Pakistan's founder" },
            { zh: "蒙兀兒皇帝奧朗則布", en: "The Mughal emperor Aurangzeb" },
            { zh: "設計它的土耳其建築師", en: "The Turkish architect who designed it" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "沙國國王費薩爾資助興建,1986 年完工時是世界最大清真寺,帳篷式造型出自土耳其建築師之手。",
            en: "Funded by Saudi King Faisal and completed in 1986 as the world's largest mosque at the time, its tent-like form was designed by a Turkish architect.",
          },
        },
      },
      {
        name: { zh: "喀拉蚩", en: "Karachi" },
        blurb: {
          zh: "全國最大城市與港口,阿拉伯海畔的經濟引擎,人口逾兩千萬。",
          en: "The largest city and port, an economic engine of 20-plus million on the Arabian Sea.",
        },
        trivia: {
          question: {
            zh: "喀拉蚩在伊斯蘭馬巴德建成之前,曾扮演什麼角色?",
            en: "Before Islamabad was built, what role did Karachi play?",
          },
          options: [
            { zh: "巴基斯坦建國後的第一個首都", en: "Pakistan's first capital after independence" },
            { zh: "英屬印度的首都", en: "The capital of British India" },
            { zh: "獨立的城邦國家", en: "An independent city-state" },
            { zh: "葡萄牙殖民港口", en: "A Portuguese colonial port" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1947 年建國時喀拉蚩被定為首都,直到 1960 年代政府遷往新建的伊斯蘭馬巴德。",
            en: "Karachi served as the capital from independence in 1947 until the government moved to newly built Islamabad in the 1960s.",
          },
        },
      },
      {
        name: { zh: "拉合爾", en: "Lahore" },
        blurb: {
          zh: "旁遮普的文化之都,俗諺說「沒看過拉合爾,等於沒出生」。",
          en: "Punjab's cultural capital — as the saying goes, 'one who hasn't seen Lahore hasn't been born'.",
        },
        trivia: {
          question: {
            zh: "拉合爾的巴德夏希清真寺與拉合爾古堡,主要是哪個帝國留下的遺產?",
            en: "Lahore's Badshahi Mosque and Lahore Fort are chiefly the legacy of which empire?",
          },
          options: [
            { zh: "蒙兀兒帝國", en: "The Mughal Empire" },
            { zh: "鄂圖曼帝國", en: "The Ottoman Empire" },
            { zh: "波斯薩非王朝", en: "Safavid Persia" },
            { zh: "德里蘇丹國", en: "The Delhi Sultanate" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "拉合爾是蒙兀兒帝國的重鎮,巴德夏希清真寺由奧朗則布於 1673 年建成,古堡則列入世界遺產。",
            en: "Lahore was a great Mughal city: Aurangzeb completed the Badshahi Mosque in 1673, and the fort is a World Heritage site.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "世界第二高峰 K2(8,611 公尺)位於巴基斯坦與中國邊境的喀喇崑崙山脈,攀登難度被認為高於聖母峰。",
        en: "K2 (8,611 m), on the Pakistan–China border in the Karakoram, is the world's second-highest peak — widely considered a harder climb than Everest.",
      },
      {
        zh: "巴基斯坦的艾迪基金會經營著全球規模數一數二的志願救護車網絡。",
        en: "Pakistan's Edhi Foundation runs one of the largest volunteer ambulance networks in the world.",
      },
    ],
    climate: {
      zh: "南部平原乾燥炎熱,夏季常逾 40°C;北部山區高寒,冬季大雪;7 至 9 月受季風影響,東部易有豪雨與洪水。",
      en: "Hot, arid plains in the south often top 40°C; the northern mountains are cold and snowy; the July–September monsoon brings heavy rain and flood risk to the east.",
    },
    travelTips: [
      {
        zh: "部分地區有旅遊警示,行前確認本國官方公告,並留意各地治安差異。",
        en: "Travel advisories apply to parts of the country — check your government's guidance and note that security varies by region.",
      },
      {
        zh: "衣著保守為宜,齋戒月期間白天避免在公共場合飲食。",
        en: "Dress conservatively, and avoid eating or drinking in public during daylight hours in Ramadan.",
      },
      {
        zh: "北部山區道路受天候與落石影響大,行程保留彈性並確認路況。",
        en: "Northern mountain roads are prone to weather closures and rockfall — keep itineraries flexible and check conditions.",
      },
    ],
  },
  {
    id: "BGD",
    name: { zh: "孟加拉", en: "Bangladesh" },
    capital: { zh: "達卡", en: "Dhaka" },
    flag: "🇧🇩",
    region: "asia",
    center: { lat: 23.7, lng: 90.4 },
    intro: {
      zh: "位於恆河與布拉馬普特拉河交匯的巨大三角洲上,河道縱橫、人口稠密。世界第二大成衣出口國,南部的孫德爾本斯紅樹林是孟加拉虎的家園,綠色稻田與河運構成國家的日常風景。",
      en: "Set on the vast delta of the Ganges and Brahmaputra, laced with rivers and densely peopled. The world's second-largest garment exporter, it shelters Bengal tigers in the Sundarbans mangroves, with green paddies and river boats defining everyday life.",
    },
    history: {
      zh: "孟加拉地區曾是莫臥兒帝國最富庶的行省之一,以細緻的平紋細布聞名於世,18 世紀起受英國東印度公司與英屬印度統治。1947 年分治時成為巴基斯坦東翼,1952 年捍衛孟加拉語的語言運動埋下獨立種子,1971 年經解放戰爭獨立建國。此後歷經政變與天災考驗,近數十年憑成衣業與僑匯實現快速經濟成長。",
      en: "Bengal was among the Mughal Empire's richest provinces, world-famous for fine muslin, before rule by the East India Company and British India. Made Pakistan's eastern wing at the 1947 Partition, it saw the 1952 Language Movement defend Bengali and sow the seeds of nationhood, achieving independence through the 1971 Liberation War. Despite coups and natural disasters, garments and remittances have powered rapid growth in recent decades.",
    },
    cities: [
      {
        name: { zh: "達卡", en: "Dhaka" },
        blurb: {
          zh: "兩千萬人的首都,老城的蒙兀兒遺跡與世界最繁忙的街道並存。",
          en: "A capital of 20 million, where Mughal-era relics meet some of the busiest streets on Earth.",
        },
        trivia: {
          question: {
            zh: "達卡的街頭滿是哪種交通工具,使它被稱為「世界○○之都」?",
            en: "Dhaka's streets teem with which vehicle, earning it the title of world capital of that transport?",
          },
          options: [
            { zh: "人力三輪車", en: "Cycle rickshaws" },
            { zh: "嘟嘟車", en: "Auto rickshaws (tuk-tuks)" },
            { zh: "渡輪", en: "Ferries" },
            { zh: "雙層巴士", en: "Double-decker buses" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "達卡號稱「人力車之都」,數十萬輛彩繪三輪車穿梭街頭,車身彩繪還發展成獨特民間藝術。",
            en: "Dhaka is the 'rickshaw capital of the world' — hundreds of thousands ply its streets, their painted decorations a folk art in themselves.",
          },
        },
      },
      {
        name: { zh: "吉大港", en: "Chittagong" },
        blurb: {
          zh: "第二大城與最大海港,倚著孟加拉灣,承擔全國多數對外貿易。",
          en: "The second city and largest seaport on the Bay of Bengal, handling most of the nation's trade.",
        },
        trivia: {
          question: {
            zh: "吉大港近郊海岸以什麼產業聞名於世,同時也伴隨環保與勞安爭議?",
            en: "The coast near Chittagong is world-famous for which industry, one that also draws environmental and labor concerns?",
          },
          options: [
            { zh: "拆船業", en: "Ship-breaking" },
            { zh: "煉油業", en: "Oil refining" },
            { zh: "遠洋漁業", en: "Deep-sea fishing" },
            { zh: "製鹽業", en: "Salt production" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "退役巨輪被直接沖上吉大港附近的海灘人工拆解,這裡是全球最大的拆船基地之一。",
            en: "Retired ships are beached and dismantled by hand near Chittagong — one of the largest ship-breaking hubs on the planet.",
          },
        },
      },
      {
        name: { zh: "錫爾赫特", en: "Sylhet" },
        blurb: {
          zh: "東北部山丘之城,茶園連綿,也是眾多旅英僑民的故鄉。",
          en: "A hilly northeastern city amid rolling tea estates, and the ancestral home of many British Bangladeshis.",
        },
        trivia: {
          question: {
            zh: "錫爾赫特地區以哪種作物的種植園景觀聞名?",
            en: "The Sylhet region is famous for plantations of which crop?",
          },
          options: [
            { zh: "茶葉", en: "Tea" },
            { zh: "咖啡", en: "Coffee" },
            { zh: "黃麻", en: "Jute" },
            { zh: "橡膠", en: "Rubber" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "錫爾赫特的丘陵地遍布茶園,是孟加拉茶業的核心產區,綠浪起伏的莊園是招牌風景。",
            en: "Sylhet's hills are carpeted with tea gardens — the heart of Bangladesh's tea industry and its signature scenery.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "聯合國的「國際母語日」訂於 2 月 21 日,正是紀念 1952 年孟加拉語言運動的犧牲者。",
        en: "UNESCO's International Mother Language Day falls on February 21, honoring those killed in Bangladesh's 1952 Language Movement.",
      },
      {
        zh: "孟加拉是僅次於中國的世界第二大成衣出口國。",
        en: "Bangladesh is the world's second-largest garment exporter, after China.",
      },
    ],
    climate: {
      zh: "熱帶季風氣候,終年溫熱;6 至 10 月雨季降雨豐沛,低窪三角洲易受洪水與氣旋侵襲,冬季乾爽溫和。",
      en: "Tropical monsoon climate, warm year-round; the June–October rains are heavy, the low delta is prone to floods and cyclones, and winters are dry and mild.",
    },
    travelTips: [
      {
        zh: "雨季低窪地區易淹水,規劃行程避開洪氾期並隨時關注氣象與氣旋警報。",
        en: "Low-lying areas flood in the monsoon — plan around the rainy season and watch weather and cyclone alerts.",
      },
      {
        zh: "達卡交通壅塞舉世聞名,市區移動預留大量緩衝時間。",
        en: "Dhaka's traffic is legendary — allow generous buffer time for any journey across the city.",
      },
      {
        zh: "民風保守,衣著以遮蓋肩膝為宜;飲水選擇瓶裝水並注意飲食衛生。",
        en: "Dress modestly with shoulders and knees covered; stick to bottled water and be careful with street food hygiene.",
      },
    ],
  },
  {
    id: "LKA",
    name: { zh: "斯里蘭卡", en: "Sri Lanka" },
    capital: { zh: "斯里賈亞瓦德納普拉科特", en: "Sri Jayawardenepura Kotte" },
    flag: "🇱🇰",
    region: "asia",
    center: { lat: 7.9, lng: 80.8 },
    intro: {
      zh: "印度洋上的淚滴形島國,舊稱錫蘭。錫蘭紅茶、肉桂與寶石馳名世界,島上有八處世界遺產,從獅子岩到高山茶園再到南岸海灘,小小國土濃縮了驚人的多樣風景。",
      en: "A teardrop-shaped island in the Indian Ocean, formerly Ceylon. Famous for Ceylon tea, cinnamon, and gems, it packs eight World Heritage sites — from Sigiriya's rock fortress to hill-country tea estates and southern beaches — into a compact land.",
    },
    history: {
      zh: "僧伽羅王國自西元前即在阿努拉德普勒建都,佛教於西元前 3 世紀傳入後成為文明主軸。16 世紀起葡萄牙、荷蘭相繼占領沿海,1815 年全島納入英國統治,茶園經濟自此成形。1948 年獨立,1972 年改國名為斯里蘭卡;1983 至 2009 年經歷慘烈內戰,2022 年又逢嚴重經濟危機,觀光業是復甦的重要支柱。",
      en: "Sinhalese kings ruled from Anuradhapura from antiquity, with Buddhism arriving in the 3rd century BC to shape the civilization. The Portuguese and Dutch held the coasts from the 16th century before full British rule from 1815 built the tea economy. Independent in 1948 and renamed Sri Lanka in 1972, it endured a brutal civil war from 1983 to 2009 and a severe economic crisis in 2022, with tourism key to recovery.",
    },
    cities: [
      {
        name: { zh: "可倫坡", en: "Colombo" },
        blurb: {
          zh: "最大城市與商業中心,殖民建築、寺廟與新興天際線交錯的港都。",
          en: "The largest city and commercial hub — a port where colonial buildings, temples, and a new skyline mingle.",
        },
        trivia: {
          question: {
            zh: "可倫坡雖是斯里蘭卡最大城市,但該國的法定首都其實是哪裡?",
            en: "Colombo is Sri Lanka's largest city, but what is the country's official capital?",
          },
          options: [
            { zh: "斯里賈亞瓦德納普拉科特", en: "Sri Jayawardenepura Kotte" },
            { zh: "康提", en: "Kandy" },
            { zh: "加勒", en: "Galle" },
            { zh: "賈夫納", en: "Jaffna" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1980 年代國會遷至可倫坡近郊的科特,這座古都因此成為法定首都,行政商業機能仍多留在可倫坡。",
            en: "Parliament moved to Kotte, an old royal capital on Colombo's outskirts, in the 1980s — making it the official capital while Colombo remains the de facto hub.",
          },
        },
      },
      {
        name: { zh: "康提", en: "Kandy" },
        blurb: {
          zh: "山中古都,僧伽羅王朝最後的都城,佛牙寺所在的聖城。",
          en: "The hill-country royal capital — the last seat of Sinhalese kings and home of the sacred Temple of the Tooth.",
        },
        trivia: {
          question: {
            zh: "康提的佛牙寺供奉著什麼聖物,每年還會舉行盛大遊行?",
            en: "What sacred relic is enshrined in Kandy's Temple of the Tooth, honored with a grand annual procession?",
          },
          options: [
            { zh: "佛陀的牙舍利", en: "A tooth relic of the Buddha" },
            { zh: "佛陀的袈裟", en: "A robe of the Buddha" },
            { zh: "菩提樹的原株枝條", en: "A branch of the original Bodhi tree" },
            { zh: "阿育王的金印", en: "The golden seal of Ashoka" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "相傳佛牙於 4 世紀傳入斯里蘭卡,歷代王朝以持有佛牙象徵統治正當性,佛牙節遊行是全國盛事。",
            en: "The tooth relic, said to have reached Sri Lanka in the 4th century, legitimized royal rule for centuries; the Esala Perahera festival parades it through the city.",
          },
        },
      },
      {
        name: { zh: "加勒", en: "Galle" },
        blurb: {
          zh: "南岸的世界遺產古城,棱堡城牆環抱著石板街與燈塔。",
          en: "A World Heritage fort town on the south coast — ramparts enclosing cobbled lanes and a lighthouse.",
        },
        trivia: {
          question: {
            zh: "加勒古堡主要由哪兩個殖民勢力先後建造與擴建?",
            en: "Galle Fort was built and expanded successively by which two colonial powers?",
          },
          options: [
            { zh: "葡萄牙與荷蘭", en: "The Portuguese and the Dutch" },
            { zh: "英國與法國", en: "The British and the French" },
            { zh: "西班牙與荷蘭", en: "The Spanish and the Dutch" },
            { zh: "葡萄牙與丹麥", en: "The Portuguese and the Danes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "葡萄牙人 16 世紀初建堡壘,荷蘭東印度公司 17 世紀大規模擴建,今日所見城牆多為荷蘭時期遺構。",
            en: "The Portuguese fortified Galle in the 16th century and the Dutch East India Company massively rebuilt it in the 17th — most surviving walls are Dutch work.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "「真肉桂」原產於斯里蘭卡,學名 Cinnamomum verum 意即「真正的肉桂」,至今仍是主要出口國。",
        en: "True cinnamon is native to Sri Lanka — its scientific name, Cinnamomum verum, means 'true cinnamon' — and the island remains a top exporter.",
      },
    ],
    climate: {
      zh: "熱帶氣候,受兩個季風輪流影響:西南部 5 至 9 月多雨,東北部 12 至 2 月多雨;平地終年溫熱,山區涼爽。",
      en: "Tropical, shaped by two alternating monsoons: the southwest is wettest May–September, the northeast December–February; lowlands stay warm year-round while the hills are cool.",
    },
    travelTips: [
      {
        zh: "島上兩側雨季相反,依出遊月份選擇西南岸或東北岸,幾乎全年都有地方好天氣。",
        en: "The two coasts have opposite rainy seasons — pick southwest or east coast by month and you can find good weather almost year-round.",
      },
      {
        zh: "進入寺廟需脫鞋脫帽、遮蓋肩膝,切勿背對佛像自拍,身上有佛像圖案的服飾也可能引起反感。",
        en: "At temples remove shoes and hats and cover shoulders and knees; never pose with your back to a Buddha statue, and avoid clothing printed with Buddha images.",
      },
      {
        zh: "高地茶園火車風景絕美但一位難求,熱門路段車票宜提早購買。",
        en: "The scenic hill-country trains sell out fast — book popular tea-country segments early.",
      },
    ],
  },
  {
    id: "NPL",
    name: { zh: "尼泊爾", en: "Nepal" },
    capital: { zh: "加德滿都", en: "Kathmandu" },
    flag: "🇳🇵",
    region: "asia",
    center: { lat: 28.2, lng: 84.1 },
    intro: {
      zh: "喜馬拉雅山脈懷抱中的內陸國,世界最高峰聖母峰矗立在與中國的邊界上。從亞熱帶平原到八千公尺雪峰,海拔落差世界罕見;佛陀誕生地藍毗尼與滿城古蹟的加德滿都谷地皆是世界遺產。",
      en: "A landlocked nation cradled by the Himalayas, with Mount Everest rising on its border with China. Elevations sweep from subtropical plains to 8,000-meter peaks; Lumbini, the Buddha's birthplace, and the monument-filled Kathmandu Valley are both World Heritage sites.",
    },
    history: {
      zh: "加德滿都谷地的尼瓦爾王國自中世紀起發展出精緻的建築與工藝,1768 年廓爾喀國王普里特維·納拉揚·沙阿統一尼泊爾。它從未被殖民,19 世紀起廓爾喀士兵以驍勇聞名而受英軍徵募。1996 至 2006 年爆發毛派內戰,2008 年廢除君主制改為聯邦共和國;2015 年大地震重創全國,觀光與僑匯是經濟命脈。",
      en: "The Newar kingdoms of the Kathmandu Valley cultivated exquisite art and architecture before Gorkha king Prithvi Narayan Shah unified Nepal in 1768. Never colonized, it became famous for Gurkha soldiers recruited by the British from the 19th century. A Maoist civil war ran from 1996 to 2006, the monarchy was abolished in 2008 for a federal republic, and after the devastating 2015 earthquake, tourism and remittances remain economic lifelines.",
    },
    cities: [
      {
        name: { zh: "加德滿都", en: "Kathmandu" },
        blurb: {
          zh: "谷地中的千年首都,杜巴廣場、佛塔與窄巷市集交織。",
          en: "The ancient valley capital — Durbar Squares, stupas, and maze-like bazaar lanes.",
        },
        trivia: {
          question: {
            zh: "加德滿都傳統中的「庫瑪麗」指的是什麼?",
            en: "In Kathmandu tradition, who or what is the 'Kumari'?",
          },
          options: [
            { zh: "被奉為活女神的女孩", en: "A young girl venerated as a living goddess" },
            { zh: "一種傳統面具舞", en: "A traditional masked dance" },
            { zh: "王室專用的頭銜", en: "A title reserved for royalty" },
            { zh: "祈雨的山神祭典", en: "A mountain rain-invoking ritual" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "庫瑪麗是自幼被選出、供奉於庫瑪麗宮的活女神,被視為女神杜爾迦的化身,直到青春期由新人選接替。",
            en: "The Kumari is a girl chosen in childhood and venerated in her own palace as an incarnation of the goddess Durga, serving until adolescence when a successor is chosen.",
          },
        },
      },
      {
        name: { zh: "波卡拉", en: "Pokhara" },
        blurb: {
          zh: "費瓦湖畔的度假城市,雪峰倒映湖面,健行者的大本營。",
          en: "A lakeside resort city where snow peaks mirror in Phewa Lake — base camp for trekkers.",
        },
        trivia: {
          question: {
            zh: "波卡拉是健行哪個著名山群的主要門戶?",
            en: "Pokhara is the main gateway for trekking in which famous mountain range?",
          },
          options: [
            { zh: "安納布爾納山群", en: "The Annapurna massif" },
            { zh: "聖母峰地區", en: "The Everest region" },
            { zh: "干城章嘉地區", en: "The Kangchenjunga region" },
            { zh: "馬納斯盧地區", en: "The Manaslu region" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "安納布爾納環線與基地營等經典路線多由波卡拉出發,晴天時市區即可眺望魚尾峰與雪嶺。",
            en: "Classic routes like the Annapurna Circuit and Base Camp trek start from Pokhara; on clear days Machhapuchhre and the snowline loom over town.",
          },
        },
      },
      {
        name: { zh: "帕坦", en: "Patan (Lalitpur)" },
        blurb: {
          zh: "加德滿都近鄰的古王城,又稱「美麗之城」,金屬工藝之都。",
          en: "An ancient royal city beside Kathmandu, the 'City of Beauty' famed for metalcraft.",
        },
        trivia: {
          question: {
            zh: "帕坦以哪個民族的傳統建築與工藝聞名?這個民族是加德滿都谷地的原住民。",
            en: "Patan is renowned for the architecture and crafts of which people, the indigenous community of the Kathmandu Valley?",
          },
          options: [
            { zh: "尼瓦爾人", en: "The Newars" },
            { zh: "夏爾巴人", en: "The Sherpas" },
            { zh: "塔魯人", en: "The Tharus" },
            { zh: "古隆人", en: "The Gurungs" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼瓦爾工匠打造了帕坦杜巴廣場的宮殿、雕樑與銅像,其金屬鑄造與木雕技藝傳承至今。",
            en: "Newar artisans built Patan's Durbar Square palaces, carved struts, and bronzes — their metal-casting and woodcarving traditions live on today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "尼泊爾國旗由兩個三角形組成,是世界唯一非四邊形的國旗。",
        en: "Nepal's flag, formed of two pennants, is the only national flag that isn't a quadrilateral.",
      },
      {
        zh: "世界 14 座八千公尺高峰中,有 8 座全部或部分位於尼泊爾境內。",
        en: "Eight of the world's fourteen 8,000-meter peaks lie wholly or partly in Nepal.",
      },
    ],
    climate: {
      zh: "隨海拔劇烈變化:南部平原亞熱帶濕熱,加德滿都谷地溫和,高山終年冰雪;6 至 9 月為季風雨季。",
      en: "Climate shifts sharply with altitude: subtropical heat on the southern plains, a mild Kathmandu Valley, and permanent snow up high, with a June–September monsoon.",
    },
    travelTips: [
      {
        zh: "健行最佳季節為 10 至 11 月與 3 至 4 月,雨季山徑濕滑且雲霧遮蔽山景。",
        en: "The best trekking windows are October–November and March–April; monsoon trails are slippery and the peaks hide in cloud.",
      },
      {
        zh: "高海拔健行注意高山症,行程安排適應日,並投保涵蓋直升機救援的保險。",
        en: "Guard against altitude sickness with acclimatization days, and carry insurance that covers helicopter evacuation.",
      },
      {
        zh: "佛塔與寺廟以順時針方向繞行,部分印度教寺廟不對非教徒開放。",
        en: "Walk clockwise around stupas and shrines; some Hindu temples are closed to non-Hindus.",
      },
    ],
  },
  {
    id: "BTN",
    name: { zh: "不丹", en: "Bhutan" },
    capital: { zh: "廷布", en: "Thimphu" },
    flag: "🇧🇹",
    region: "asia",
    center: { lat: 27.5, lng: 90.5 },
    intro: {
      zh: "喜馬拉雅山中的佛教王國,以「國民幸福總值」聞名於世。憲法規定森林覆蓋率不得低於六成,是全球少數碳負排放的國家;懸於峭壁的虎穴寺與各地雄偉的「宗」是其標誌風景。",
      en: "A Buddhist kingdom in the Himalayas, famous for measuring Gross National Happiness. Its constitution mandates at least 60% forest cover, making it one of the world's few carbon-negative countries; the cliffside Tiger's Nest and mighty dzong fortresses define its landscape.",
    },
    history: {
      zh: "17 世紀西藏喇嘛夏尊·阿旺南嘉統一不丹,建立政教合一體制並修築各地的宗堡。1907 年旺楚克家族建立世襲君主制延續至今。不丹長期奉行謹慎的鎖國政策,1970 年代才開放觀光,1999 年才引入電視與網路;2008 年第四世國王主動推動君主立憲,舉行首次民主選舉,以審慎步調走向現代化。",
      en: "The Tibetan lama Zhabdrung Ngawang Namgyal unified Bhutan in the 17th century, building the dzong fortresses and a dual religious-secular system. The Wangchuck dynasty established its hereditary monarchy in 1907. Long deliberately isolated, Bhutan admitted tourists only in the 1970s and television and internet only in 1999; in 2008 the fourth king voluntarily introduced constitutional monarchy and the first democratic elections, modernizing on its own careful terms.",
    },
    cities: [
      {
        name: { zh: "廷布", en: "Thimphu" },
        blurb: {
          zh: "山谷中的首都,札西確宗與傳統建築規範守護古風。",
          en: "The valley capital, where Tashichho Dzong and strict traditional building codes preserve the old style.",
        },
        trivia: {
          question: {
            zh: "首都廷布在交通上有什麼著名特點?",
            en: "What is Thimphu famous for when it comes to traffic?",
          },
          options: [
            { zh: "沒有紅綠燈,由交警手勢指揮", en: "It has no traffic lights — police direct cars by hand" },
            { zh: "全面禁止私家車", en: "Private cars are banned entirely" },
            { zh: "只允許電動車行駛", en: "Only electric vehicles are allowed" },
            { zh: "全市街道皆為單行道", en: "Every street is one-way" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "廷布是世界少數沒有紅綠燈的首都,曾短暫裝設號誌卻因民眾不習慣而拆除,改由交警優雅的手勢指揮。",
            en: "Thimphu is one of the only capitals without traffic lights — a set was briefly installed, disliked, and removed in favor of white-gloved police gestures.",
          },
        },
      },
      {
        name: { zh: "帕羅", en: "Paro" },
        blurb: {
          zh: "西部河谷小鎮,國際機場所在地,虎穴寺的朝聖起點。",
          en: "A western valley town, home to the international airport and the trailhead for the Tiger's Nest.",
        },
        trivia: {
          question: {
            zh: "帕羅河谷峭壁上、海拔約 3,100 公尺的著名寺院是哪一座?",
            en: "Which famous monastery clings to a cliff about 3,100 m up in the Paro valley?",
          },
          options: [
            { zh: "虎穴寺(帕羅塔克桑)", en: "The Tiger's Nest (Paro Taktsang)" },
            { zh: "普納卡宗", en: "Punakha Dzong" },
            { zh: "札西確宗", en: "Tashichho Dzong" },
            { zh: "崗提寺", en: "Gangtey Monastery" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "相傳蓮花生大士騎虎飛抵此地修行,寺院因而得名「虎穴」,懸崖上的建築群需徒步數小時才能抵達。",
            en: "Legend says Guru Rinpoche flew here on a tigress to meditate — hence 'Tiger's Nest'; reaching the cliffside complex takes a hike of several hours.",
          },
        },
      },
      {
        name: { zh: "普納卡", en: "Punakha" },
        blurb: {
          zh: "兩河交匯處的古都,普納卡宗被譽為不丹最美的宗堡。",
          en: "The old capital at the confluence of two rivers — Punakha Dzong is often called Bhutan's most beautiful fortress.",
        },
        trivia: {
          question: {
            zh: "普納卡在 1955 年之前擁有什麼地位?",
            en: "What status did Punakha hold until 1955?",
          },
          options: [
            { zh: "不丹的首都", en: "It was Bhutan's capital" },
            { zh: "不丹唯一的機場所在地", en: "It hosted Bhutan's only airport" },
            { zh: "英屬印度的租借地", en: "It was leased to British India" },
            { zh: "獨立的小王國", en: "It was an independent petty kingdom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "普納卡自 17 世紀起長期作為不丹首都,1955 年才遷都廷布;普納卡宗至今仍是重要宗教中心與國王大婚場地。",
            en: "Punakha served as Bhutan's capital from the 17th century until the move to Thimphu in 1955; its dzong remains a key religious center and royal wedding venue.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "不丹森林吸收的二氧化碳多於全國排放量,是全球少數「碳負排放」國家。",
        en: "Bhutan's forests absorb more CO2 than the country emits, making it one of the world's few carbon-negative nations.",
      },
      {
        zh: "不丹以「國民幸福總值」(GNH)取代 GDP 作為國家發展的核心指標。",
        en: "Bhutan famously guides national policy by Gross National Happiness rather than GDP alone.",
      },
    ],
    climate: {
      zh: "隨海拔劇烈變化:南部亞熱帶濕熱,中部河谷四季溫和,北部高山嚴寒;6 至 9 月受季風影響多雨。",
      en: "Sharply altitude-dependent: subtropical heat in the south, mild year-round valleys in the center, and alpine cold in the north, with monsoon rains from June to September.",
    },
    travelTips: [
      {
        zh: "觀光採「高價值、低衝擊」政策,多數外國旅客須繳交每日永續發展費並透過旅行社安排行程。",
        en: "Tourism follows a 'high value, low impact' policy — most foreign visitors pay a daily Sustainable Development Fee and book through licensed operators.",
      },
      {
        zh: "進入宗堡與寺廟需衣著整齊、脫帽,殿內通常禁止攝影。",
        en: "Dress neatly and remove hats when entering dzongs and temples; photography is usually banned inside shrines.",
      },
      {
        zh: "山路蜿蜒多彎,長途車程易暈車者請備妥藥品。",
        en: "Mountain roads twist endlessly — bring motion-sickness medicine for long drives.",
      },
    ],
  },
  {
    id: "MNG",
    name: { zh: "蒙古國", en: "Mongolia" },
    capital: { zh: "烏蘭巴托", en: "Ulaanbaatar" },
    flag: "🇲🇳",
    region: "asia",
    center: { lat: 46.9, lng: 103.8 },
    intro: {
      zh: "夾在中俄之間的草原之國,人口密度居世界主權國家之末,遼闊草原、戈壁沙漠與遊牧文化構成壯闊風景。成吉思汗的故鄉,礦業與畜牧是經濟支柱,那達慕大會延續著騎射傳統。",
      en: "A steppe nation wedged between Russia and China, with the lowest population density of any sovereign state — vast grasslands, the Gobi Desert, and living nomadic culture. Homeland of Genghis Khan, it runs on mining and herding, and the Naadam festival keeps its horseback traditions alive.",
    },
    history: {
      zh: "1206 年成吉思汗統一蒙古各部,其子孫建立起橫跨歐亞、史上疆域最大的陸上帝國。帝國分裂後蒙古高原漸受清朝統治,1911 年清亡後宣布獨立,1924 年在蘇聯支持下成立蒙古人民共和國,成為世界第二個共產國家。1990 年和平轉型為民主政體,開放礦業帶動經濟,同時努力在兩大鄰國之間維持平衡。",
      en: "Genghis Khan united the Mongol tribes in 1206, and his heirs built history's largest contiguous land empire across Eurasia. After the empire fragmented, the plateau came under Qing rule; independence was declared in 1911, and in 1924 the Soviet-backed Mongolian People's Republic became the world's second communist state. A peaceful democratic transition followed in 1990, with mining driving growth as Mongolia balances between its two giant neighbors.",
    },
    cities: [
      {
        name: { zh: "烏蘭巴托", en: "Ulaanbaatar" },
        blurb: {
          zh: "全國近半人口聚居的首都,蘇式街區外緣環繞著氈房區。",
          en: "Home to nearly half the population — Soviet-era blocks ringed by sprawling ger districts.",
        },
        trivia: {
          question: {
            zh: "在世界各國首都之中,烏蘭巴托保有什麼氣候紀錄?",
            en: "Among national capitals, Ulaanbaatar holds which climate record?",
          },
          options: [
            { zh: "年均溫最低、最寒冷的首都", en: "The coldest capital by average annual temperature" },
            { zh: "年降雨量最多的首都", en: "The rainiest capital" },
            { zh: "海拔最高的首都", en: "The highest-altitude capital" },
            { zh: "日照時數最少的首都", en: "The capital with the least sunshine" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "烏蘭巴托年平均氣溫在冰點上下,冬季常見 -30°C 以下低溫,是全球最寒冷的首都。",
            en: "With an annual mean around freezing and winter lows below -30°C, Ulaanbaatar is the coldest national capital on Earth.",
          },
        },
      },
      {
        name: { zh: "哈拉和林", en: "Kharkhorin" },
        blurb: {
          zh: "鄂爾渾河谷小鎮,毗鄰古都遺址與額爾德尼召寺院。",
          en: "A town in the Orkhon Valley, beside the ruins of the ancient capital and Erdene Zuu monastery.",
        },
        trivia: {
          question: {
            zh: "哈拉和林鄰近的哈拉和林(Karakorum)古城,曾是哪個帝國的首都?",
            en: "The ancient city of Karakorum near modern Kharkhorin served as the capital of which empire?",
          },
          options: [
            { zh: "蒙古帝國", en: "The Mongol Empire" },
            { zh: "突厥汗國", en: "The Turkic Khaganate" },
            { zh: "西夏", en: "The Western Xia" },
            { zh: "金朝", en: "The Jin dynasty" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "窩闊台汗 13 世紀定都哈拉和林,使其短暫成為歐亞帝國的心臟,後忽必烈遷都大都(今北京)。",
            en: "Ögedei Khan made Karakorum the Mongol Empire's capital in the 13th century, until Kublai Khan moved the seat to Dadu — today's Beijing.",
          },
        },
      },
      {
        name: { zh: "額爾登特", en: "Erdenet" },
        blurb: {
          zh: "北部工礦城市,1970 年代隨礦場而生的計畫城市。",
          en: "A northern industrial city, purpose-built in the 1970s around its mine.",
        },
        trivia: {
          question: {
            zh: "額爾登特因開採什麼礦產而興起,其礦場規模居亞洲前列?",
            en: "Erdenet grew around the mining of what, with one of Asia's largest such mines?",
          },
          options: [
            { zh: "銅礦", en: "Copper" },
            { zh: "金礦", en: "Gold" },
            { zh: "煤礦", en: "Coal" },
            { zh: "鈾礦", en: "Uranium" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "額爾登特銅鉬礦是亞洲最大的銅礦之一,由蒙蘇合資開發,至今仍是蒙古經濟的重要支柱。",
            en: "The Erdenet copper-molybdenum mine, developed as a Mongolian-Soviet venture, is among Asia's largest and remains an economic pillar.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "蒙古平均每平方公里僅約 2 人,是世界人口密度最低的主權國家,馬匹數量甚至多於人口。",
        en: "With roughly two people per square kilometer, Mongolia is the least densely populated sovereign country — and horses outnumber humans.",
      },
      {
        zh: "那達慕大會的「男兒三藝」為摔跤、賽馬與射箭,已列入聯合國非物質文化遺產。",
        en: "Naadam's 'three manly games' — wrestling, horse racing, and archery — are inscribed on UNESCO's Intangible Cultural Heritage list.",
      },
    ],
    climate: {
      zh: "極端大陸性氣候:冬季漫長嚴寒可達 -40°C,夏季短暫溫暖;全年日照充足,戈壁地區日夜溫差極大。",
      en: "Extreme continental climate: long, brutal winters down to -40°C and short warm summers, with abundant sunshine and huge day-night swings in the Gobi.",
    },
    travelTips: [
      {
        zh: "冬季酷寒,11 至 2 月造訪需極地等級的禦寒裝備;旅遊旺季為 6 至 8 月。",
        en: "Winters are brutal — November to February requires polar-grade clothing; June to August is the main travel season.",
      },
      {
        zh: "草原行程多為無鋪面越野路,車程顛簸漫長,暈車藥與腸胃藥備妥。",
        en: "Steppe itineraries mean long, bumpy off-road drives — pack motion-sickness and stomach medicine.",
      },
      {
        zh: "拜訪牧民時,接過奶茶等款待是基本禮貌,遞接物品用右手。",
        en: "When visiting herder families, accepting offered milk tea is basic courtesy, and pass or receive items with your right hand.",
      },
    ],
  },
  {
    id: "GEO",
    name: { zh: "喬治亞", en: "Georgia" },
    capital: { zh: "提比里斯", en: "Tbilisi" },
    flag: "🇬🇪",
    region: "asia",
    center: { lat: 42.2, lng: 43.5 },
    intro: {
      zh: "高加索山脈南麓、黑海之濱的小國,常被稱為葡萄酒的發源地,陶甕釀酒傳統延續約八千年。獨特的喬治亞字母、多聲部合唱與待客如神的文化,使它成為近年廣受歡迎的旅遊地。",
      en: "A small country on the southern slopes of the Caucasus by the Black Sea, often called the birthplace of wine with a clay-vessel tradition some 8,000 years old. Its unique alphabet, polyphonic singing, and guest-is-a-gift-from-God hospitality have made it a beloved travel destination.",
    },
    history: {
      zh: "古希臘傳說中的金羊毛之地科爾基斯即位於此,西元 4 世紀初喬治亞接受基督教,是世界最早的基督教國家之一。12 至 13 世紀在大衛四世與塔瑪女王治下迎來黃金時代,其後歷經蒙古、波斯與鄂圖曼勢力夾擊,1801 年起被俄羅斯帝國兼併。1991 年脫離蘇聯獨立,2008 年與俄羅斯爆發短暫戰爭,此後堅定走向親歐路線。",
      en: "This was Colchis, land of the Golden Fleece in Greek myth; Georgia adopted Christianity in the early 4th century, among the first nations to do so. A golden age flowered under David the Builder and Queen Tamar in the 12th–13th centuries, followed by Mongol, Persian, and Ottoman pressure and Russian annexation from 1801. Independent from the USSR in 1991, it fought a brief war with Russia in 2008 and has pursued a firmly pro-European course.",
    },
    cities: [
      {
        name: { zh: "提比里斯", en: "Tbilisi" },
        blurb: {
          zh: "庫拉河谷中的首都,老城木造陽台、硫磺澡堂與現代建築交錯。",
          en: "The capital in the Kura River gorge — carved wooden balconies, sulfur baths, and modern architecture side by side.",
        },
        trivia: {
          question: {
            zh: "「提比里斯」之名源自喬治亞語的什麼意思,與城中的天然資源有關?",
            en: "Tbilisi's name comes from a Georgian word meaning what, tied to a natural feature of the city?",
          },
          options: [
            { zh: "「溫暖」,因當地湧出溫泉", en: "'Warm', after its hot springs" },
            { zh: "「葡萄」,因遍地葡萄園", en: "'Grape', after its vineyards" },
            { zh: "「堡壘」,因山頂要塞", en: "'Fortress', after its citadel" },
            { zh: "「渡口」,因河上渡船", en: "'Ford', after its river crossing" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「tbili」意為溫暖,相傳國王打獵時發現此地溫泉而建城,老城的硫磺澡堂至今仍在營業。",
            en: "'Tbili' means warm — legend says a king founded the city after discovering hot springs here, and the old town's sulfur baths still operate today.",
          },
        },
      },
      {
        name: { zh: "巴統", en: "Batumi" },
        blurb: {
          zh: "亞熱帶植栽環繞的度假港市,賭場與新奇高樓沿著海濱大道排開。",
          en: "A resort port amid subtropical greenery, its seafront boulevard lined with casinos and quirky towers.",
        },
        trivia: {
          question: {
            zh: "巴統瀕臨哪個海?它是喬治亞最著名的濱海度假城市。",
            en: "Batumi, Georgia's most famous seaside resort city, sits on which sea?",
          },
          options: [
            { zh: "黑海", en: "The Black Sea" },
            { zh: "裏海", en: "The Caspian Sea" },
            { zh: "亞速海", en: "The Sea of Azov" },
            { zh: "地中海", en: "The Mediterranean Sea" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴統是喬治亞的黑海門戶與阿扎爾自治共和國首府,氣候溫暖濕潤,棕櫚樹沿岸而生。",
            en: "Batumi is Georgia's Black Sea gateway and capital of the Adjara region, warm and humid enough for palm-lined shores.",
          },
        },
      },
      {
        name: { zh: "姆茨赫塔", en: "Mtskheta" },
        blurb: {
          zh: "兩河交匯處的千年古城,喬治亞東正教會的精神心臟。",
          en: "An ancient town at the meeting of two rivers — the spiritual heart of the Georgian Orthodox Church.",
        },
        trivia: {
          question: {
            zh: "姆茨赫塔在喬治亞歷史上具有什麼地位?",
            en: "What place does Mtskheta hold in Georgian history?",
          },
          options: [
            { zh: "古代王國首都與東正教聖地", en: "An ancient royal capital and Orthodox holy city" },
            { zh: "喬治亞第一座黑海港口", en: "Georgia's first Black Sea port" },
            { zh: "蘇聯時期的重工業城", en: "A Soviet-era heavy-industry city" },
            { zh: "波斯總督的駐地", en: "The seat of a Persian governor" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "姆茨赫塔是古伊比利亞王國的首都,喬治亞在此接受基督教,城中古教堂群列入世界遺產。",
            en: "Capital of the ancient kingdom of Iberia, it is where Georgia embraced Christianity; its historic churches are World Heritage sites.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "考古證據顯示喬治亞的釀酒歷史約八千年,以陶甕「克韋夫利」埋地釀造的傳統列入聯合國非物質文化遺產。",
        en: "Archaeology traces Georgian winemaking back some 8,000 years, and the tradition of fermenting in buried qvevri clay vessels is UNESCO-listed intangible heritage.",
      },
      {
        zh: "喬治亞字母是世界上少數獨立發展的文字系統之一,其三種字體同樣列入非物質文化遺產。",
        en: "The Georgian alphabet is one of the world's few independently developed scripts — its three writing systems are also UNESCO-listed.",
      },
    ],
    climate: {
      zh: "黑海沿岸溫暖濕潤近亞熱帶,內陸為大陸性氣候,高加索山區冬季嚴寒多雪,夏季各地宜人。",
      en: "The Black Sea coast is warm, humid, and near-subtropical; the interior is continental, and the high Caucasus sees cold, snowy winters, with pleasant summers overall.",
    },
    travelTips: [
      {
        zh: "治安整體良好、物價親民,是高加索自助旅行的入門首選。",
        en: "Georgia is generally safe and affordable — the easiest introduction to independent travel in the Caucasus.",
      },
      {
        zh: "喬治亞宴席敬酒文化盛行,由「塔瑪達」帶領輪番舉杯,不勝酒力可禮貌淺酌。",
        en: "Feasts feature rounds of toasts led by a tamada (toastmaster); it's fine to sip politely if you can't keep pace.",
      },
      {
        zh: "阿布哈茲與南奧塞提亞為局勢敏感地區,請勿前往,行前留意官方公告。",
        en: "Avoid the sensitive breakaway regions of Abkhazia and South Ossetia, and check official advisories before you go.",
      },
    ],
  },
  {
    id: "ARM",
    name: { zh: "亞美尼亞", en: "Armenia" },
    capital: { zh: "葉里溫", en: "Yerevan" },
    flag: "🇦🇲",
    region: "asia",
    center: { lat: 40.1, lng: 45.0 },
    intro: {
      zh: "高加索南部的高原內陸國,西元 301 年成為世界第一個以基督教為國教的國家。粉紅色火山岩砌成的首都葉里溫、湛藍的塞凡湖與遍布山間的古老修道院,承載著綿延數千年的文明記憶。",
      en: "A highland landlocked nation in the South Caucasus, and in 301 AD the first country to adopt Christianity as its state religion. Its pink volcanic-stone capital Yerevan, blue Lake Sevan, and ancient monasteries scattered through the mountains carry millennia of memory.",
    },
    history: {
      zh: "亞美尼亞王國曾在西元前一世紀盛極一時,301 年率先立基督教為國教,405 年創制專屬字母。其後千餘年在羅馬、波斯、鄂圖曼與俄羅斯等強權間掙扎求存,1915 年鄂圖曼帝國治下的大屠殺造成上百萬人死難,離散社群遍布全球。1991 年脫離蘇聯獨立,與亞塞拜然為納戈爾諾-卡拉巴赫問題長期衝突至今。",
      en: "The Kingdom of Armenia peaked in the 1st century BC, adopted Christianity as state religion in 301, and created its own alphabet in 405. For the next millennium it endured between Rome, Persia, the Ottomans, and Russia; the 1915 genocide under the Ottoman Empire killed over a million and scattered a worldwide diaspora. Independent from the USSR in 1991, it remains locked in conflict with Azerbaijan over Nagorno-Karabakh.",
    },
    cities: [
      {
        name: { zh: "葉里溫", en: "Yerevan" },
        blurb: {
          zh: "以粉紅凝灰岩建成的「粉紅之城」,晴天可遠眺亞拉拉特山。",
          en: "The 'pink city' built of rosy tuff stone, with Mount Ararat looming on clear days.",
        },
        trivia: {
          question: {
            zh: "葉里溫的建城史可追溯到西元前 782 年的哪座要塞,比羅馬建城還早?",
            en: "Yerevan traces its founding to which fortress of 782 BC — older than the founding of Rome?",
          },
          options: [
            { zh: "埃瑞布尼要塞", en: "The Erebuni fortress" },
            { zh: "阿尼古城", en: "The city of Ani" },
            { zh: "加尼神廟", en: "The Garni temple" },
            { zh: "格加爾德修道院", en: "The Geghard monastery" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "烏拉爾圖國王於西元前 782 年建立埃瑞布尼要塞,葉里溫因此是世界上持續有人居住的最古老城市之一。",
            en: "King Argishti I of Urartu founded Erebuni in 782 BC, making Yerevan one of the world's oldest continuously inhabited cities.",
          },
        },
      },
      {
        name: { zh: "久姆里", en: "Gyumri" },
        blurb: {
          zh: "第二大城,以黑色凝灰岩老街與工藝傳統聞名的文化古都。",
          en: "The second city, a cultural hub known for black tuff-stone streets and craft traditions.",
        },
        trivia: {
          question: {
            zh: "久姆里在 1988 年遭遇什麼重大災難,造成數萬人罹難?",
            en: "What catastrophe struck Gyumri in 1988, killing tens of thousands in the region?",
          },
          options: [
            { zh: "大地震", en: "A devastating earthquake" },
            { zh: "大洪水", en: "A great flood" },
            { zh: "嚴重旱災", en: "A severe drought" },
            { zh: "城市大火", en: "A citywide fire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1988 年斯皮塔克大地震重創亞美尼亞北部,久姆里大半損毀,重建工程延續了數十年。",
            en: "The 1988 Spitak earthquake devastated northern Armenia; much of Gyumri was destroyed, and rebuilding took decades.",
          },
        },
      },
      {
        name: { zh: "瓦加爾沙帕特", en: "Vagharshapat (Etchmiadzin)" },
        blurb: {
          zh: "俗稱埃奇米阿津,亞美尼亞使徒教會的聖城。",
          en: "Commonly called Etchmiadzin — the holy city of the Armenian Apostolic Church.",
        },
        trivia: {
          question: {
            zh: "埃奇米阿津主教座堂在亞美尼亞使徒教會中的地位是什麼?",
            en: "What is the status of Etchmiadzin Cathedral within the Armenian Apostolic Church?",
          },
          options: [
            { zh: "教會最高精神中心與宗主教座", en: "The church's supreme spiritual center and patriarchal seat" },
            { zh: "一座普通的地方修道院", en: "An ordinary local monastery" },
            { zh: "已廢棄的考古遺址", en: "An abandoned archaeological site" },
            { zh: "羅馬天主教的駐地", en: "A Roman Catholic mission seat" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "埃奇米阿津建於 4 世紀初,常被視為世界最古老的主教座堂之一,是全球亞美尼亞教會的總座,列入世界遺產。",
            en: "Founded in the early 4th century and often cited among the world's oldest cathedrals, it is the mother see of the worldwide Armenian Church and a World Heritage site.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "亞美尼亞是世界第一個把基督教立為國教的國家,時間是西元 301 年。",
        en: "Armenia was the first country to make Christianity its state religion, in 301 AD.",
      },
      {
        zh: "西洋棋是亞美尼亞小學的必修課,這個小國培養出多位世界級棋手。",
        en: "Chess is a compulsory subject in Armenian primary schools — the small nation has produced a string of world-class grandmasters.",
      },
    ],
    climate: {
      zh: "高原大陸性氣候:夏季乾燥炎熱,冬季寒冷多雪;塞凡湖與山區較涼爽,日夜溫差明顯。",
      en: "Highland continental climate: hot, dry summers and cold, snowy winters, cooler around Lake Sevan and in the mountains, with big day-night swings.",
    },
    travelTips: [
      {
        zh: "高原日照強、日夜溫差大,夏季也建議帶件薄外套並注意防曬。",
        en: "Strong highland sun and big temperature swings — pack a light jacket even in summer and use sun protection.",
      },
      {
        zh: "市集與小店多以現金交易,備妥當地貨幣德拉姆。",
        en: "Markets and small shops mostly deal in cash — carry Armenian dram.",
      },
      {
        zh: "與亞塞拜然接壤的邊境地帶局勢敏感,避免靠近,行前確認最新官方公告。",
        en: "Border zones with Azerbaijan remain tense — keep clear of them and check the latest official advisories before traveling.",
      },
    ],
  },
  {
    id: "AZE",
    name: { zh: "亞塞拜然", en: "Azerbaijan" },
    capital: { zh: "巴庫", en: "Baku" },
    flag: "🇦🇿",
    region: "asia",
    center: { lat: 40.3, lng: 47.6 },
    intro: {
      zh: "裏海西岸的「火之國度」,天然氣自地表縫隙竄出燃燒,拜火傳統源遠流長。19 世紀的石油熱潮讓巴庫盛極一時,今日火焰塔與中世紀老城同框,泥火山數量居世界之冠。",
      en: "The 'Land of Fire' on the Caspian's western shore, where natural gas seeps burn from the ground and fire worship runs deep. A 19th-century oil boom made Baku legendary; today the Flame Towers rise beside a medieval old city, and it has more mud volcanoes than anywhere on Earth.",
    },
    history: {
      zh: "此地古稱高加索阿爾巴尼亞,長期處於波斯文化圈,什葉派伊斯蘭與突厥語系在此交融。19 世紀巴庫油田讓它成為世界石油工業的搖籃,20 世紀初一度供應全球約一半的石油。1918 年短暫建立民主共和國,旋即併入蘇聯;1991 年獨立後與亞美尼亞為納戈爾諾-卡拉巴赫爆發戰爭,油氣財富重塑了今日的巴庫天際線。",
      en: "Known in antiquity as Caucasian Albania, the region lay within the Persian cultural sphere, blending Shia Islam with a Turkic language. Baku's oil fields cradled the world petroleum industry, supplying about half the world's oil in the early 1900s. A short-lived democratic republic in 1918 was absorbed by the USSR; since 1991 independence it has fought Armenia over Nagorno-Karabakh, while oil and gas wealth reshaped Baku's skyline.",
    },
    cities: [
      {
        name: { zh: "巴庫", en: "Baku" },
        blurb: {
          zh: "裏海畔的首都,世界遺產老城之上聳立著三座火焰塔。",
          en: "The Caspian capital, where the Flame Towers rise above a World Heritage old city.",
        },
        trivia: {
          question: {
            zh: "在世界各國首都之中,巴庫擁有什麼地理之最?",
            en: "Among the world's national capitals, Baku holds which geographic distinction?",
          },
          options: [
            { zh: "海拔最低的首都,低於海平面約 28 公尺", en: "The lowest-lying capital, about 28 m below sea level" },
            { zh: "位置最東的首都", en: "The easternmost capital" },
            { zh: "建城最晚的首都", en: "The most recently founded capital" },
            { zh: "人口最多的首都", en: "The most populous capital" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴庫地處裏海窪地,海拔約 -28 公尺,是世界上地勢最低的國家首都。",
            en: "Sitting in the Caspian depression at roughly 28 m below sea level, Baku is the lowest national capital on Earth.",
          },
        },
      },
      {
        name: { zh: "舍基", en: "Sheki" },
        blurb: {
          zh: "高加索山麓的絲路古鎮,商隊客棧與汗王夏宮保存完好。",
          en: "A Silk Road town in the Caucasus foothills, with a preserved caravanserai and the Khans' summer palace.",
        },
        trivia: {
          question: {
            zh: "舍基汗王宮以什麼工藝聞名?據說整座建築未用一根釘子。",
            en: "The Palace of the Sheki Khans is famed for what craft, in a building said to use not a single nail?",
          },
          options: [
            { zh: "彩色玻璃木格窗「舍貝克」", en: "Shebeke stained-glass wooden latticework" },
            { zh: "鏡面馬賽克大廳", en: "Mirror-mosaic halls" },
            { zh: "鎏金銅雕穹頂", en: "Gilded bronze domes" },
            { zh: "大理石浮雕外牆", en: "Marble relief facades" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "舍貝克工藝以木格榫接嵌入彩色玻璃,不用釘子與膠水,王宮與老城於 2019 年列入世界遺產。",
            en: "Shebeke fits thousands of colored-glass pieces into interlocking wooden lattices without nails or glue; the palace and old town were World Heritage-listed in 2019.",
          },
        },
      },
      {
        name: { zh: "占賈", en: "Ganja" },
        blurb: {
          zh: "西部第二大城,歷史悠久的文化古都。",
          en: "The country's second city in the west, an ancient seat of culture.",
        },
        trivia: {
          question: {
            zh: "占賈是哪位 12 世紀波斯語大詩人的故鄉?他以《五卷詩》傳世。",
            en: "Ganja was the hometown of which great 12th-century Persian-language poet, author of the Khamsa (Five Poems)?",
          },
          options: [
            { zh: "尼扎米", en: "Nizami Ganjavi" },
            { zh: "魯米", en: "Rumi" },
            { zh: "哈菲茲", en: "Hafez" },
            { zh: "菲爾多西", en: "Ferdowsi" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼扎米·占賈維以浪漫史詩聞名,《蕾莉與馬傑農》等作品影響深遠,其陵墓即在占賈。",
            en: "Nizami Ganjavi's romantic epics like Layla and Majnun shaped Persian literature; his mausoleum stands in Ganja.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "亞塞拜然擁有全球最多的泥火山,數量約占世界總數的三分之一以上。",
        en: "Azerbaijan has more mud volcanoes than any other country — over a third of the world's total.",
      },
      {
        zh: "巴庫近郊的亞納爾達格「燃燒的山坡」因天然氣滲出,火焰經年不熄。",
        en: "Yanar Dag, the 'burning hillside' near Baku, has blazed for decades on natural gas seeping from the ground.",
      },
    ],
    climate: {
      zh: "氣候帶多樣:巴庫一帶半乾燥多風,冬季溫和;高加索山區濕潤多雪,內陸平原夏季炎熱。",
      en: "Remarkably varied: the Baku area is semi-arid, windy, and mild in winter, the Caucasus mountains are wet and snowy, and the interior plains bake in summer.",
    },
    travelTips: [
      {
        zh: "巴庫別號「風城」,即使夏季海風也強勁,備一件防風外套。",
        en: "Baku is nicknamed the 'city of winds' — bring a windproof layer even in summer.",
      },
      {
        zh: "治安整體良好;搭計程車建議使用叫車 App 或先議定價格。",
        en: "Generally safe; for taxis use a ride-hailing app or agree on the fare in advance.",
      },
      {
        zh: "與亞美尼亞接壤的邊境及卡拉巴赫周邊為敏感地區,避免前往並留意官方公告。",
        en: "Border areas with Armenia and the Karabakh region are sensitive — avoid them and follow official advisories.",
      },
    ],
  },
  {
    id: "MDV",
    name: { zh: "馬爾地夫", en: "Maldives" },
    capital: { zh: "馬列", en: "Malé" },
    flag: "🇲🇻",
    region: "asia",
    center: { lat: 3.2, lng: 73.2 },
    intro: {
      zh: "印度洋上由 26 個環礁、約 1,200 座珊瑚島組成的島國,是亞洲面積最小的國家,也是全球地勢最低的國家。水上屋、珊瑚礁與碧藍潟湖使它成為度假天堂,同時站在海平面上升威脅的最前線。",
      en: "An Indian Ocean nation of 26 atolls and some 1,200 coral islands — Asia's smallest country and the lowest-lying nation on Earth. Overwater villas, reefs, and turquoise lagoons make it a holiday paradise, even as it stands on the front line of rising seas.",
    },
    history: {
      zh: "馬爾地夫自古是印度洋航路上的補給站,早期居民信奉佛教,1153 年改宗伊斯蘭並建立蘇丹國,綿延八百年。16 世紀曾短暫被葡萄牙佔領,1887 年成為英國保護國,1965 年獨立,1968 年廢除蘇丹制改行共和。1970 年代起發展度假村觀光,躍升南亞人均所得最高的國家之一,氣候變遷則是其存亡課題。",
      en: "A provisioning stop on Indian Ocean routes since antiquity, the islands were Buddhist before converting to Islam in 1153 under a sultanate that lasted eight centuries. Briefly seized by Portugal in the 16th century and a British protectorate from 1887, the Maldives gained independence in 1965 and became a republic in 1968. Resort tourism from the 1970s made it one of South Asia's richest nations per capita — while climate change poses an existential threat.",
    },
    cities: [
      {
        name: { zh: "馬列", en: "Malé" },
        blurb: {
          zh: "迷你首都,整座小島擠滿彩色樓房,是全國政治與商業中樞。",
          en: "The pocket-sized capital — one small island packed with colorful buildings, the nation's political and commercial hub.",
        },
        trivia: {
          question: {
            zh: "首都馬列以什麼特點聞名於世界城市之列?",
            en: "The capital Malé is known worldwide for what distinction?",
          },
          options: [
            { zh: "人口密度極高,整座島幾乎蓋滿建築", en: "Extreme population density — the island is built over almost entirely" },
            { zh: "是世界海拔最高的首都", en: "It is the world's highest-altitude capital" },
            { zh: "是世界面積最大的首都", en: "It is the world's largest capital by area" },
            { zh: "全城禁止機動車輛", en: "Motor vehicles are banned citywide" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "十多萬人擠在約兩平方公里的小島上,馬列是世界人口密度最高的城市之一,空拍照片令人震撼。",
            en: "With well over 100,000 people on roughly two square kilometers, Malé ranks among the densest cities on Earth — aerial photos are startling.",
          },
        },
      },
      {
        name: { zh: "胡魯馬列", en: "Hulhumalé" },
        blurb: {
          zh: "馬列近旁的新市鎮,以跨海大橋與首都相連。",
          en: "A new town beside Malé, linked to the capital by a cross-sea bridge.",
        },
        trivia: {
          question: {
            zh: "胡魯馬列是一座什麼樣的島嶼?",
            en: "What kind of island is Hulhumalé?",
          },
          options: [
            { zh: "填海造出的人工島,刻意墊高以因應海平面上升", en: "A reclaimed artificial island, deliberately built higher against sea-level rise" },
            { zh: "死火山形成的火山島", en: "A volcanic island formed by an extinct volcano" },
            { zh: "僅限度假村使用的私人島", en: "A private resort-only island" },
            { zh: "禁止開發的自然保護區", en: "A protected nature reserve closed to development" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "胡魯馬列由潟湖填沙造陸而成,地面高於多數自然島嶼,用以紓解馬列擁擠並作為氣候調適的示範城市。",
            en: "Built by pumping sand from a lagoon, Hulhumalé sits higher than most natural islands — relieving Malé's crowding and serving as a climate-adaptation showcase.",
          },
        },
      },
      {
        name: { zh: "阿杜市", en: "Addu City" },
        blurb: {
          zh: "最南端環礁上的第二大城市,多座島嶼以堤道相連。",
          en: "The second city, on the southernmost atoll, its islands linked by causeways.",
        },
        trivia: {
          question: {
            zh: "馬爾地夫最南端的阿杜環礁,在二次大戰期間曾是什麼?",
            en: "During World War II, Addu Atoll at the southern tip of the Maldives served as what?",
          },
          options: [
            { zh: "英軍的秘密海空基地", en: "A secret British naval and air base" },
            { zh: "日軍的潛艇基地", en: "A Japanese submarine base" },
            { zh: "中立的醫療船停泊地", en: "A neutral hospital-ship anchorage" },
            { zh: "戰俘營所在地", en: "A prisoner-of-war camp" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英軍在甘島設立基地守護印度洋航線,戰後皇家空軍續駐至 1976 年,舊跑道如今是阿杜的國際機場。",
            en: "The British base on Gan guarded Indian Ocean routes; the RAF stayed until 1976, and the old runway is now Addu's international airport.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬爾地夫平均海拔僅約 1.5 公尺,最高點也不到 3 公尺,是世界地勢最低的國家。",
        en: "With an average elevation of about 1.5 m and a highest point under 3 m, the Maldives is the flattest, lowest country in the world.",
      },
      {
        zh: "英文的「atoll(環礁)」一詞,正是源自馬爾地夫的迪維希語。",
        en: "The English word 'atoll' comes from Dhivehi, the language of the Maldives.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,終年約 27 至 30°C;5 至 10 月西南季風較多雨,12 至 4 月為乾季,晴朗少雨。",
      en: "Tropical marine climate, steady at 27–30°C year-round; the May–October southwest monsoon brings more rain, while December–April is the dry, sunny season.",
    },
    travelTips: [
      {
        zh: "馬爾地夫是伊斯蘭國家:居民島上衣著需保守、禁止飲酒,比基尼僅限度假村與指定海灘。",
        en: "The Maldives is an Islamic nation: dress modestly on inhabited islands, where alcohol is banned and bikinis are allowed only at resorts and designated beaches.",
      },
      {
        zh: "12 至 4 月乾季是旅遊旺季,海況穩定、能見度佳,住宿宜提早預訂。",
        en: "The December–April dry season is peak time with calm seas and great visibility — book accommodation early.",
      },
      {
        zh: "浮潛與潛水注意海流,務必結伴並遵守度假村的水域安全指示。",
        en: "Currents can be strong — snorkel and dive with a buddy and follow your resort's water-safety guidance.",
      },
    ],
  },
];
