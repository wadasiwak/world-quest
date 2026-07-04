import type { Country } from "../types";

// Africa (more, batch 4): 5 island nations without polygons in
// countries.geo.json — rendered as dot markers using `center`.

export const AFRICA_MORE4: Country[] = [
  {
    id: "CPV",
    name: { zh: "維德角", en: "Cape Verde" },
    capital: { zh: "培亞", en: "Praia" },
    flag: "🇨🇻",
    region: "africa",
    center: { lat: 16.0, lng: -24.0 },
    intro: {
      zh: "大西洋上距西非海岸約六百公里的火山群島國,由十座主要島嶼組成。乾燥的信風氣候、克里奧爾文化與莫爾納音樂是其標誌,僑民人數甚至超過本國人口,政治穩定度在非洲名列前茅。",
      en: "A volcanic archipelago of ten main islands in the Atlantic, some 600 km off West Africa. Known for its dry trade-wind climate, Creole culture, and morna music, it has a diaspora larger than its resident population and ranks among Africa's most stable democracies.",
    },
    history: {
      zh: "群島原本無人居住,15 世紀葡萄牙人抵達後開始殖民,聖地牙哥島上的舊城(Cidade Velha)是歐洲人在熱帶建立的第一座殖民城鎮,曾是跨大西洋奴隸貿易的重要中轉站。此後數百年在乾旱與饑荒中掙扎,大批居民移居海外。1975 年脫離葡萄牙獨立,1991 年舉行多黨選舉,和平政黨輪替至今,靠觀光、僑匯與服務業發展經濟。",
      en: "Uninhabited until Portuguese settlers arrived in the 15th century, the islands became a key waypoint of the transatlantic slave trade — Cidade Velha on Santiago was the first European colonial town in the tropics. Centuries of drought and famine drove mass emigration. Independence from Portugal came in 1975, multiparty elections in 1991, and peaceful transfers of power ever since, with tourism, remittances, and services driving the economy.",
    },
    cities: [
      {
        name: { zh: "培亞", en: "Praia" },
        blurb: {
          zh: "位於聖地牙哥島南岸的首都與最大城,建在海邊台地之上。",
          en: "The capital and largest city, set on a coastal plateau on Santiago's southern shore.",
        },
        trivia: {
          question: {
            zh: "培亞所在的聖地牙哥島上,有一座被列為世界遺產的殖民古城,它有什麼歷史地位?",
            en: "Santiago, the island of Praia, holds a World Heritage colonial town. What is its historical claim?",
          },
          options: [
            {
              zh: "歐洲人在熱帶建立的第一座殖民城鎮",
              en: "The first European colonial town founded in the tropics",
            },
            {
              zh: "非洲第一座大學城",
              en: "Africa's first university town",
            },
            {
              zh: "葡萄牙王室的流亡首都",
              en: "The Portuguese royal court's capital in exile",
            },
            {
              zh: "大西洋最早的燈塔所在地",
              en: "Site of the Atlantic's first lighthouse",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "舊城(Cidade Velha)建於 15 世紀後期,是歐洲人在熱帶的第一座殖民聚落,2009 年列入世界遺產。",
            en: "Cidade Velha, founded in the late 15th century, was the first European colonial settlement in the tropics — a World Heritage site since 2009.",
          },
        },
      },
      {
        name: { zh: "明德盧", en: "Mindelo" },
        blurb: {
          zh: "聖文森島的港都,維德角的文化首都與音樂之城。",
          en: "The port city of São Vicente island — Cape Verde's cultural capital and city of music.",
        },
        trivia: {
          question: {
            zh: "出身明德盧的歌后西莎莉亞·艾芙拉(Cesária Évora)以哪種維德角音樂風格聞名世界?",
            en: "Mindelo-born singer Cesária Évora brought which Cape Verdean music style to world fame?",
          },
          options: [
            { zh: "莫爾納(Morna)", en: "Morna" },
            { zh: "森巴(Samba)", en: "Samba" },
            { zh: "雷鬼(Reggae)", en: "Reggae" },
            { zh: "法朵(Fado)", en: "Fado" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "莫爾納是維德角的抒情民謠,2019 年列入聯合國非物質文化遺產;「赤腳歌后」艾芙拉是其最著名的代言人。",
            en: "Morna, Cape Verde's melancholic ballad genre, joined UNESCO's Intangible Heritage list in 2019 — the 'Barefoot Diva' was its most famous voice.",
          },
        },
      },
      {
        name: { zh: "薩爾島", en: "Sal" },
        blurb: {
          zh: "以白沙海灘與風帆衝浪聞名的觀光大島,島名意為「鹽」。",
          en: "The tourism hub famed for white beaches and windsurfing — its name means 'salt'.",
        },
        trivia: {
          question: {
            zh: "薩爾島(Sal)的名字來自島上的什麼資源?",
            en: "The island of Sal takes its name from which local resource?",
          },
          options: [
            { zh: "鹽田", en: "Salt pans" },
            { zh: "金礦", en: "Gold mines" },
            { zh: "硫磺泉", en: "Sulfur springs" },
            { zh: "珍珠養殖場", en: "Pearl farms" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Sal 在葡萄牙語意為鹽,島上佩德拉盧梅火山口的鹽田曾是重要產業,如今遊客還能在高鹽度池水中漂浮。",
            en: "'Sal' is Portuguese for salt; the Pedra de Lume crater salt pans were once a major industry, and visitors still float in the briny pools today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "旅居海外的維德角人比住在國內的還多,僑匯是經濟重要支柱。",
        en: "More Cape Verdeans live abroad than at home — remittances are a pillar of the economy.",
      },
      {
        zh: "福戈島的皮庫火山(約 2,829 公尺)是全國最高峰,火山口內至今仍有村落與葡萄園。",
        en: "Pico do Fogo (about 2,829 m) is the country's highest peak — villages and vineyards sit inside its caldera.",
      },
    ],
    climate: {
      zh: "乾燥的熱帶氣候,終年溫暖(約 20–30°C),雨量稀少,雨季集中在 8–10 月;冬季偶有來自撒哈拉的哈馬丹風帶來沙塵。",
      en: "Dry tropical climate, warm year-round (about 20–30°C) with scant rain concentrated in August–October; winter harmattan winds can carry Saharan dust.",
    },
    travelTips: [
      {
        zh: "島與島之間主要靠國內航班與渡輪,班次有限,跳島行程要預留彈性時間。",
        en: "Inter-island travel relies on limited domestic flights and ferries — build slack into island-hopping plans.",
      },
      {
        zh: "官方語言是葡萄牙語,日常多講克里奧爾語;觀光區英語尚可通,學幾句葡語更方便。",
        en: "Portuguese is official and Creole is spoken daily; English works in resorts, but a little Portuguese goes a long way.",
      },
      {
        zh: "貨幣維德角埃斯庫多與歐元掛鉤,觀光島嶼可刷卡,小島請備現金。",
        en: "The escudo is pegged to the euro; cards work on tourist islands, but carry cash for smaller ones.",
      },
    ],
  },
  {
    id: "STP",
    name: { zh: "聖多美普林西比", en: "São Tomé and Príncipe" },
    capital: { zh: "聖多美", en: "São Tomé" },
    flag: "🇸🇹",
    region: "africa",
    center: { lat: 0.25, lng: 6.6 },
    intro: {
      zh: "幾內亞灣上跨越赤道的雙島國,是非洲人口最少的國家之一。火山雨林、可可莊園與悠閒的「leve-leve」(慢慢來)生活哲學,讓它被稱為「非洲的加拉巴哥」與巧克力群島。",
      en: "A two-island nation straddling the equator in the Gulf of Guinea, among Africa's least populous countries. Volcanic rainforests, cocoa plantations, and the laid-back 'leve-leve' (take it easy) philosophy earn it nicknames like 'Africa's Galápagos' and the chocolate islands.",
    },
    history: {
      zh: "兩島原無人居住,15 世紀後期葡萄牙人抵達後引入甘蔗種植與奴隸勞力,成為早期的蔗糖殖民地。19 世紀改種咖啡與可可,20 世紀初一度躋身世界最大可可產地之列,大型莊園(roça)的建築至今遍布島上。1975 年脫離葡萄牙和平獨立,初期實行一黨制,1990 年轉型為多黨民主,現以可可、觀光與漁業為主要收入。",
      en: "Uninhabited until the Portuguese arrived in the late 15th century, the islands became an early sugar colony worked by enslaved labor. Coffee and cocoa took over in the 19th century, and by the early 1900s the islands ranked among the world's top cocoa producers — grand plantation estates (roças) still dot the landscape. Independence from Portugal came peacefully in 1975; a one-party state gave way to multiparty democracy in 1990, with cocoa, tourism, and fishing sustaining the economy.",
    },
    cities: [
      {
        name: { zh: "聖多美市", en: "São Tomé City" },
        blurb: {
          zh: "全國首都,葡式殖民建築、可可倉庫與海濱大道環繞的迷你都城。",
          en: "The national capital — a pocket-sized city of Portuguese colonial buildings, cocoa warehouses, and a seaside promenade.",
        },
        trivia: {
          question: {
            zh: "聖多美普林西比因盛產哪種作物而被暱稱為「巧克力群島」?",
            en: "São Tomé and Príncipe is nicknamed the 'chocolate islands' for producing which crop?",
          },
          options: [
            { zh: "可可", en: "Cocoa" },
            { zh: "咖啡", en: "Coffee" },
            { zh: "香草", en: "Vanilla" },
            { zh: "甘蔗", en: "Sugarcane" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "20 世紀初這裡曾是世界數一數二的可可產地,如今精品可可與巧克力仍是招牌出口品。",
            en: "In the early 20th century the islands were among the world's leading cocoa producers; fine cocoa and craft chocolate remain signature exports.",
          },
        },
      },
      {
        name: { zh: "普林西比島", en: "Príncipe" },
        blurb: {
          zh: "較小的北島,整島被列為聯合國生物圈保護區,雨林覆蓋、人煙稀少。",
          en: "The smaller northern island — a UNESCO Biosphere Reserve blanketed in rainforest and barely populated.",
        },
        trivia: {
          question: {
            zh: "1919 年科學家在普林西比島觀測日全食,驗證了哪位科學家的理論?",
            en: "In 1919 scientists observed a total solar eclipse from Príncipe to test whose theory?",
          },
          options: [
            { zh: "愛因斯坦(廣義相對論)", en: "Einstein (general relativity)" },
            { zh: "牛頓(萬有引力)", en: "Newton (universal gravitation)" },
            { zh: "達爾文(演化論)", en: "Darwin (evolution)" },
            { zh: "哥白尼(日心說)", en: "Copernicus (heliocentrism)" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "愛丁頓率隊在此拍攝日食星光偏折,證實光線受重力彎曲,讓愛因斯坦一夕成名。",
            en: "Arthur Eddington's expedition photographed starlight bending during the eclipse, confirming gravity bends light and making Einstein world-famous overnight.",
          },
        },
      },
      {
        name: { zh: "南聖多美(大狗峰一帶)", en: "Southern São Tomé (Pico Cão Grande)" },
        blurb: {
          zh: "島嶼南部的雨林地帶,以直插雲霄的火山岩塔「大狗峰」聞名。",
          en: "The island's rainforested south, famous for the sky-piercing volcanic tower of Pico Cão Grande.",
        },
        trivia: {
          question: {
            zh: "聖多美島南部的地標「大狗峰」(Pico Cão Grande)是哪種地質構造?",
            en: "Pico Cão Grande, the landmark spire of southern São Tomé, is what kind of geological formation?",
          },
          options: [
            {
              zh: "火山頸(岩漿凝固後殘留的岩塔)",
              en: "A volcanic plug (a tower of solidified magma)",
            },
            { zh: "石灰岩喀斯特石峰", en: "A limestone karst pinnacle" },
            { zh: "花崗岩風化蛋形巨石", en: "A weathered granite boulder" },
            { zh: "隕石撞擊隆起", en: "An uplift from a meteor impact" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "它是古火山內部岩漿凝固後、外圍山體被侵蝕殆盡留下的火山頸,自周圍雨林拔起約三百多公尺,是攀岩者的夢幻路線。",
            en: "It is a volcanic plug — magma that solidified inside an ancient volcano, left standing some 300-plus meters above the jungle after the cone eroded away. A dream route for climbers.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "赤道線正好穿過聖多美島南方外海的羅拉斯小島,可以一腳踩南半球、一腳踩北半球。",
        en: "The equator crosses Ilhéu das Rolas just off São Tomé's southern tip — you can stand with one foot in each hemisphere.",
      },
      {
        zh: "它是非洲面積第二小的國家,僅大於塞席爾。",
        en: "It is Africa's second-smallest country by area, ahead of only Seychelles.",
      },
    ],
    climate: {
      zh: "赤道型濕熱氣候,終年約 22–30°C,雨量豐沛;6–9 月的「gravana」乾季較涼爽少雨,是旅遊旺季。",
      en: "Hot, humid equatorial climate, roughly 22–30°C year-round with abundant rain; the cooler, drier 'gravana' season from June to September is the best time to visit.",
    },
    travelTips: [
      {
        zh: "6–9 月乾季最適合旅遊,雨季路況差,前往南部與雨林建議包車或參加當地團。",
        en: "Visit in the June–September dry season; in the rains, roads deteriorate — hire a driver or join local tours for the south and the rainforest.",
      },
      {
        zh: "通行葡萄牙語,英語不普及,備妥翻譯 App 或基本葡語會話。",
        en: "Portuguese is the lingua franca and English is rare — bring a translation app or basic Portuguese phrases.",
      },
      {
        zh: "提款機少且常缺現金,建議攜帶歐元現金入境備用。",
        en: "ATMs are scarce and often empty; bring euros in cash as a backup.",
      },
    ],
  },
  {
    id: "COM",
    name: { zh: "葛摩", en: "Comoros" },
    capital: { zh: "莫洛尼", en: "Moroni" },
    flag: "🇰🇲",
    region: "africa",
    center: { lat: -11.7, lng: 43.35 },
    intro: {
      zh: "位於莫三比克海峽北端、非洲大陸與馬達加斯加之間的火山群島國,由大葛摩、昂儒昂與莫埃利三島組成。阿拉伯、非洲與馬達加斯加文化在此交融,以出產依蘭依蘭與香草聞名,被稱為「香水群島」。",
      en: "A volcanic archipelago at the northern end of the Mozambique Channel, between mainland Africa and Madagascar, comprising Grande Comore, Anjouan, and Mohéli. Arab, African, and Malagasy cultures blend here, and its ylang-ylang and vanilla earn it the name 'Perfume Islands'.",
    },
    history: {
      zh: "群島自古是印度洋貿易網絡的一環,非洲班圖人、阿拉伯與波斯商人、馬達加斯加人相繼落腳,形成信奉伊斯蘭的斯瓦希里式蘇丹國。19 世紀末淪為法國殖民地,1975 年三島公投獨立,而馬約特島選擇留在法國,主權爭議延續至今。獨立後政局動盪,經歷二十餘次政變或未遂政變,2001 年起實行三島輪任總統的聯邦制,經濟仰賴農產出口與僑匯。",
      en: "Long part of Indian Ocean trade networks, the islands were settled by Bantu Africans, Arab and Persian traders, and Malagasy migrants, forming Islamic Swahili-style sultanates. France colonized them in the late 19th century; three islands voted for independence in 1975, while Mayotte chose to remain French — a dispute that endures. Independence brought chronic instability with some twenty coups or attempts; since 2001 a federal system rotates the presidency among the islands, with farm exports and remittances sustaining the economy.",
    },
    cities: [
      {
        name: { zh: "莫洛尼", en: "Moroni" },
        blurb: {
          zh: "大葛摩島西岸的首都,白色清真寺與阿拉伯風老城面向舊港。",
          en: "The capital on Grande Comore's west coast, where a whitewashed mosque and an Arab-quarter medina face the old harbor.",
        },
        trivia: {
          question: {
            zh: "俯瞰莫洛尼的卡爾塔拉火山(Karthala)以什麼著稱?",
            en: "Mount Karthala, looming over Moroni, is notable for what?",
          },
          options: [
            {
              zh: "是世界上最活躍的大型火山之一,火山口寬達數公里",
              en: "One of the world's most active large volcanoes, with a crater kilometers wide",
            },
            {
              zh: "是非洲最高峰",
              en: "It is Africa's highest mountain",
            },
            {
              zh: "山頂終年積雪",
              en: "Its summit is snowcapped year-round",
            },
            {
              zh: "早在一萬年前就已完全熄滅",
              en: "It went extinct 10,000 years ago",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "卡爾塔拉海拔約 2,361 公尺,擁有寬約 3–4 公里的巨大破火山口,近代多次噴發,2005 年還曾覆蓋首都火山灰。",
            en: "At about 2,361 m, Karthala has a caldera some 3–4 km across and erupts frequently — a 2005 eruption dusted the capital in ash.",
          },
        },
      },
      {
        name: { zh: "昂儒昂島", en: "Anjouan" },
        blurb: {
          zh: "山勢陡峭的「印度洋珍珠」,首府穆察穆杜擁有古老的斯瓦希里老城。",
          en: "The steep 'Pearl of the Indian Ocean'; its main town Mutsamudu preserves an old Swahili medina.",
        },
        trivia: {
          question: {
            zh: "葛摩(尤其昂儒昂島)是哪種香水原料的世界主要產地?",
            en: "Comoros — Anjouan especially — is a leading world producer of which perfume ingredient?",
          },
          options: [
            { zh: "依蘭依蘭花油", en: "Ylang-ylang oil" },
            { zh: "薰衣草精油", en: "Lavender oil" },
            { zh: "玫瑰精油", en: "Rose oil" },
            { zh: "檀香木油", en: "Sandalwood oil" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "葛摩是全球依蘭依蘭精油最大產地之一,這種花香是香奈兒五號等經典香水的重要基調。",
            en: "Comoros is among the top producers of ylang-ylang essence, a key note in classics like Chanel No. 5.",
          },
        },
      },
      {
        name: { zh: "莫埃利島", en: "Mohéli" },
        blurb: {
          zh: "三島中最小、最原始的一座,海洋公園以海龜與鯨豚聞名。",
          en: "The smallest and wildest of the three islands, with a marine park known for sea turtles and whales.",
        },
        trivia: {
          question: {
            zh: "葛摩周邊深海因發現哪種「活化石」魚類而在科學界聲名大噪?",
            en: "The deep waters around Comoros are famous in science for which 'living fossil' fish?",
          },
          options: [
            { zh: "腔棘魚", en: "The coelacanth" },
            { zh: "鯊魚始祖巨齒鯊", en: "The megalodon" },
            { zh: "皇帶魚", en: "The oarfish" },
            { zh: "肺魚", en: "The lungfish" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "腔棘魚一度被認為隨恐龍滅絕,20 世紀在西印度洋重新發現後,葛摩海域成為其最著名的棲息地之一。",
            en: "Once thought extinct with the dinosaurs, the coelacanth was rediscovered in the western Indian Ocean, and Comoran waters became one of its most famous habitats.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "葛摩國旗上的四顆星與四道色條代表四座島嶼——包括仍由法國管轄的馬約特。",
        en: "The four stars and stripes on the Comoran flag stand for four islands — including French-administered Mayotte.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候:11–4 月受季風影響濕熱多雨,偶有氣旋;5–10 月較涼爽乾燥,約 24–28°C,是較佳旅遊季。",
      en: "Tropical marine climate: hot, wet, and cyclone-prone from November to April; cooler and drier May–October at around 24–28°C — the better season to visit.",
    },
    travelTips: [
      {
        zh: "居民絕大多數信奉伊斯蘭教,衣著宜保守,齋戒月期間白天避免在公共場合飲食。",
        en: "The population is overwhelmingly Muslim — dress modestly, and avoid eating in public by day during Ramadan.",
      },
      {
        zh: "通行葛摩語、法語與阿拉伯語,英語極少;會一點法語最實用。",
        en: "Comorian, French, and Arabic are spoken; English is rare — basic French is the most useful.",
      },
      {
        zh: "旅遊基礎設施有限,島間交通仰賴小船與少量航班,行程務必保留緩衝。",
        en: "Tourist infrastructure is minimal and inter-island hops rely on small boats and scarce flights — pad your itinerary.",
      },
    ],
  },
  {
    id: "MUS",
    name: { zh: "模里西斯", en: "Mauritius" },
    capital: { zh: "路易港", en: "Port Louis" },
    flag: "🇲🇺",
    region: "africa",
    center: { lat: -20.3, lng: 57.55 },
    intro: {
      zh: "馬達加斯加以東的印度洋火山島國,環礁潟湖與白沙海灘環繞全島。印度裔、克里奧爾、華裔與法裔族群和睦共處,從蔗糖殖民地轉型為觀光、金融與服務業重鎮,是非洲最富裕穩定的國家之一。",
      en: "A volcanic island nation east of Madagascar, ringed by lagoons and white-sand beaches. Indo-Mauritian, Creole, Chinese, and Franco-Mauritian communities coexist in a country that turned from sugar colony into a hub of tourism, finance, and services — among Africa's wealthiest and most stable.",
    },
    history: {
      zh: "島上原無人定居,17 世紀荷蘭人以拿騷的莫里斯王子之名命名並短暫殖民,其後法國建設「法蘭西島」,1810 年英國奪取統治權。廢奴後英國引進數十萬印度契約勞工種植甘蔗,奠定今日以印度裔為主的多元社會。1968 年獨立,1992 年改制共和,靠蔗糖、紡織、觀光與金融多次成功轉型,常被譽為非洲的發展典範。",
      en: "Uninhabited before colonization, the island was named by the Dutch after Prince Maurice of Nassau, then developed by France as Île de France before Britain seized it in 1810. After abolition, Britain brought hundreds of thousands of Indian indentured laborers for the cane fields, shaping today's Indian-majority society. Independent in 1968 and a republic since 1992, Mauritius reinvented itself through sugar, textiles, tourism, and finance — an oft-cited African success story.",
    },
    cities: [
      {
        name: { zh: "路易港", en: "Port Louis" },
        blurb: {
          zh: "首都與商業中心,中央市場、賽馬場與世界遺產移民站聚集於此。",
          en: "The capital and commercial heart, home to the central market, a historic racecourse, and a World Heritage immigration depot.",
        },
        trivia: {
          question: {
            zh: "路易港的世界遺產「阿普拉瓦西碼頭」(Aapravasi Ghat)見證了哪段歷史?",
            en: "Aapravasi Ghat, the World Heritage site in Port Louis, bears witness to which chapter of history?",
          },
          options: [
            {
              zh: "印度契約勞工大規模移民的起點",
              en: "The gateway of mass Indian indentured labor migration",
            },
            {
              zh: "英法海軍的決定性海戰",
              en: "A decisive Anglo-French naval battle",
            },
            {
              zh: "第一批荷蘭殖民者登陸",
              en: "The landing of the first Dutch colonists",
            },
            {
              zh: "蘇伊士運河通航前的加煤站",
              en: "A coaling station before the Suez Canal opened",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1834 年起約有數十萬印度契約勞工經此站登島,取代被解放的奴隸投入蔗園,深刻改寫了模里西斯的人口結構。",
            en: "From 1834, hundreds of thousands of Indian indentured laborers passed through this depot to replace freed slaves on the plantations, reshaping the island's demography.",
          },
        },
      },
      {
        name: { zh: "西南部(莫恩山與夏瑪爾)", en: "The Southwest (Le Morne & Chamarel)" },
        blurb: {
          zh: "莫恩布拉邦山雄踞半島一角,內陸有夏瑪爾七色土與瀑布。",
          en: "Le Morne Brabant crowns a beach-fringed peninsula, with the Seven Coloured Earths and waterfalls of Chamarel inland.",
        },
        trivia: {
          question: {
            zh: "莫恩布拉邦山(Le Morne Brabant)被列為世界遺產,是為了紀念哪段歷史?",
            en: "Le Morne Brabant is a World Heritage site commemorating which history?",
          },
          options: [
            {
              zh: "逃亡奴隸曾以此山為避難堡壘",
              en: "Escaped slaves used the mountain as a refuge",
            },
            {
              zh: "殖民時代的海盜藏寶地",
              en: "A colonial-era pirate treasure cache",
            },
            {
              zh: "第一座糖廠的遺址",
              en: "The site of the first sugar mill",
            },
            {
              zh: "英國王室的夏宮",
              en: "A British royal summer residence",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "18–19 世紀逃亡奴隸(maroons)藏身於這座陡峭山峰,莫恩山因而成為反抗奴役的象徵,2008 年列入世界遺產。",
            en: "In the 18th–19th centuries, maroons — escaped slaves — sheltered on this sheer mountain, making it a symbol of resistance to slavery; it was inscribed in 2008.",
          },
        },
      },
      {
        name: { zh: "大灣", en: "Grand Baie" },
        blurb: {
          zh: "北部濱海度假重鎮,潟湖水上活動與夜生活的代名詞。",
          en: "The north-coast resort town — shorthand for lagoon water sports and nightlife.",
        },
        trivia: {
          question: {
            zh: "模里西斯最著名的已滅絕動物是什麼?",
            en: "What is Mauritius's most famous extinct animal?",
          },
          options: [
            { zh: "度度鳥", en: "The dodo" },
            { zh: "旅鴿", en: "The passenger pigeon" },
            { zh: "袋狼", en: "The thylacine" },
            { zh: "大海雀", en: "The great auk" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "不會飛的度度鳥是模里西斯特有種,人類抵達後不到一世紀便於 17 世紀滅絕,如今成為國徽上的標誌。",
            en: "The flightless dodo, endemic to Mauritius, vanished in the 17th century within about a century of human arrival — it now adorns the national coat of arms.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1847 年模里西斯發行的「藍便士」是大英帝國殖民地最早的郵票之一,如今是世上最珍稀的郵票之一。",
        en: "Mauritius's 1847 'Blue Penny' was among the first stamps issued by a British colony — today one of the rarest stamps on Earth.",
      },
      {
        zh: "莫恩山外海的洋流與沙紋,從空中看像一道「水下瀑布」的錯視奇景。",
        en: "Off Le Morne, currents and sand create the famous 'underwater waterfall' illusion visible from the air.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候:11–4 月濕熱(約 25–33°C),夏季有氣旋風險;5–10 月涼爽乾燥(約 18–26°C),適合旅遊。",
      en: "Tropical maritime climate: hot and humid November–April (about 25–33°C) with summer cyclone risk; cool and dry May–October (about 18–26°C) — prime travel season.",
    },
    travelTips: [
      {
        zh: "1–3 月是氣旋高峰期,訂行程前留意氣象;5–10 月天氣最舒適。",
        en: "January–March is peak cyclone season — watch forecasts when booking; May–October has the most pleasant weather.",
      },
      {
        zh: "英語是官方語言,但日常生活多用克里奧爾語與法語。",
        en: "English is the official language, but Creole and French dominate daily life.",
      },
      {
        zh: "島上東西岸微氣候不同:冬季東岸風大,怕風者可選西岸與北岸住宿。",
        en: "Microclimates differ by coast: the east is windy in winter, so pick the west or north coast if you prefer calm.",
      },
      {
        zh: "租車是環島最方便的方式,注意當地靠左行駛。",
        en: "Renting a car is the easiest way around the island — remember to drive on the left.",
      },
    ],
  },
  {
    id: "SYC",
    name: { zh: "塞席爾", en: "Seychelles" },
    capital: { zh: "維多利亞", en: "Victoria" },
    flag: "🇸🇨",
    region: "africa",
    center: { lat: -4.65, lng: 55.45 },
    intro: {
      zh: "散布於西印度洋的 115 座島嶼,是非洲人口最少的國家。內圈的花崗岩島嶼與外圈珊瑚環礁孕育獨特生態:海椰子、巨龜與名列世界最美的海灘,使它成為頂級海島度假的代名詞。",
      en: "An Indian Ocean scatter of 115 islands and Africa's least populous country. Inner granite islands and outer coral atolls harbor a singular ecology — the coco de mer, giant tortoises, and beaches ranked among the world's finest — making it a byword for luxury island escapes.",
    },
    history: {
      zh: "群島長期無人定居,僅有航海者與海盜偶爾停靠,18 世紀中葉法國人開始殖民並引入奴隸種植園,島名取自法國財政大臣塞舍爾。拿破崙戰爭後於 1814 年正式割讓給英國,1976 年獨立。1977 年政變後長期一黨執政,1990 年代恢復多黨制;憑觀光業與鮪魚漁業,人均所得居非洲前列,並以大規模海洋保護區聞名。",
      en: "Long uninhabited and visited only by sailors and pirates, the islands were colonized by France in the mid-18th century — named for finance minister Moreau de Séchelles — with slave-worked plantations. Ceded to Britain in 1814 after the Napoleonic Wars, they gained independence in 1976. A 1977 coup ushered in one-party rule until multiparty politics returned in the 1990s; tourism and tuna fishing now give Seychelles one of Africa's highest per-capita incomes, alongside vast marine protected areas.",
    },
    cities: [
      {
        name: { zh: "馬埃島(維多利亞)", en: "Mahé (Victoria)" },
        blurb: {
          zh: "最大島與首都所在地,維多利亞是全球最迷你的首都之一。",
          en: "The largest island and seat of the capital — Victoria is one of the world's tiniest capital cities.",
        },
        trivia: {
          question: {
            zh: "塞席爾的內圈島嶼在世界島嶼中有什麼地質特點?",
            en: "Geologically, what sets the inner islands of Seychelles apart among the world's islands?",
          },
          options: [
            {
              zh: "是罕見的大洋中央花崗岩島嶼",
              en: "They are rare mid-ocean granite islands",
            },
            {
              zh: "是最年輕的活火山島",
              en: "They are the youngest active volcanic islands",
            },
            {
              zh: "完全由珊瑚礁堆積而成",
              en: "They are built entirely of coral",
            },
            {
              zh: "由冰河漂礫堆成",
              en: "They were piled up by glacial debris",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬埃、普拉蘭等內圈島嶼是古老大陸「岡瓦納」分裂的花崗岩殘塊,遠離任何大陸的花崗岩群島在地球上極為罕見。",
            en: "Mahé, Praslin, and the other inner islands are granite fragments left from the breakup of Gondwana — granitic islands far from any continent are exceptionally rare.",
          },
        },
      },
      {
        name: { zh: "普拉蘭島", en: "Praslin" },
        blurb: {
          zh: "第二大島,五月谷原始棕櫚林是世界遺產。",
          en: "The second-largest island, home to the World Heritage palm forest of Vallée de Mai.",
        },
        trivia: {
          question: {
            zh: "普拉蘭島五月谷特有的「海椰子」以什麼世界紀錄聞名?",
            en: "The coco de mer palm of Praslin's Vallée de Mai is famous for which world record?",
          },
          options: [
            {
              zh: "結出全世界最大、最重的種子",
              en: "It bears the world's largest and heaviest seed",
            },
            {
              zh: "是全世界最高的樹",
              en: "It is the world's tallest tree",
            },
            {
              zh: "是最長壽的開花植物",
              en: "It is the longest-lived flowering plant",
            },
            {
              zh: "一天能長高一公尺",
              en: "It can grow a meter in a day",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "海椰子的種子可重達二十公斤上下,是植物界最大的種子,其獨特外形也讓它成為塞席爾的國家象徵。",
            en: "Coco de mer seeds can weigh in the neighborhood of 20 kg — the plant kingdom's largest — and their suggestive shape made them a national icon.",
          },
        },
      },
      {
        name: { zh: "拉迪格島", en: "La Digue" },
        blurb: {
          zh: "以腳踏車代步的悠閒小島,德阿讓海灘是全球最上鏡的海灘之一。",
          en: "A laid-back island best explored by bicycle; Anse Source d'Argent is one of the most photographed beaches on Earth.",
        },
        trivia: {
          question: {
            zh: "塞席爾的亞達伯拉環礁(Aldabra)以哪種動物的龐大族群聞名?",
            en: "Seychelles' Aldabra Atoll is renowned for its huge population of which animal?",
          },
          options: [
            { zh: "亞達伯拉象龜", en: "Aldabra giant tortoises" },
            { zh: "科莫多巨蜥", en: "Komodo dragons" },
            { zh: "皇帝企鵝", en: "Emperor penguins" },
            { zh: "儒艮", en: "Dugongs" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座世界遺產環礁擁有超過十萬隻巨龜,是全球最大的象龜族群,數量遠勝加拉巴哥群島。",
            en: "The World Heritage atoll shelters well over 100,000 giant tortoises — the world's largest such population, outnumbering the Galápagos.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "塞席爾人口僅約十萬,是非洲人口最少、也是面積最小的國家。",
        en: "With only about 100,000 people, Seychelles is Africa's least populous and smallest country.",
      },
      {
        zh: "塞席爾已將大約三成海域劃為海洋保護區,面積遠大於其陸地。",
        en: "Seychelles has protected roughly 30% of its waters as marine reserves — an area vastly larger than its land.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,終年約 24–32°C,位於主要氣旋帶之外;11–3 月西北季風較濕熱,5–9 月東南信風較涼爽乾燥。",
      en: "Tropical maritime climate, about 24–32°C year-round and outside the main cyclone belt; the northwest monsoon (November–March) is wetter, the southeast trades (May–September) cooler and drier.",
    },
    travelTips: [
      {
        zh: "全年皆可造訪,4 月與 10 月的季風交替期風平浪靜,最適合浮潛與潛水。",
        en: "Good year-round; the calm inter-monsoon windows of April and October are best for snorkeling and diving.",
      },
      {
        zh: "馬埃、普拉蘭與拉迪格之間有高速渡輪與國內航班,跳島相當方便。",
        en: "Fast ferries and domestic flights link Mahé, Praslin, and La Digue — island-hopping is easy.",
      },
      {
        zh: "物價為非洲最高之列,自炊住宿(self-catering)是常見的省錢選擇。",
        en: "Prices are among Africa's highest — self-catering guesthouses are the go-to way to save.",
      },
      {
        zh: "克里奧爾語、英語與法語並列官方語言,溝通無礙。",
        en: "Creole, English, and French are all official — communication is easy.",
      },
    ],
  },
];
