import type { Country } from "../types";

// Oceania (additional): 10 countries. Content shape is LLM-generatable — see types.ts.
// SLB and VUT have polygons in countries.geo.json; the other eight render as
// dot markers, so their centers are precise island coordinates.

export const OCEANIA_MORE: Country[] = [
  {
    id: "SLB",
    name: { zh: "索羅門群島", en: "Solomon Islands" },
    capital: { zh: "荷尼阿拉", en: "Honiara" },
    flag: "🇸🇧",
    region: "oceania",
    center: { lat: -9.2, lng: 160.1 },
    intro: {
      zh: "南太平洋近千座島嶼組成的群島國家,雨林覆蓋的火山島與湛藍潟湖交錯。以二戰瓜達康納爾戰役的歷史、世界級的沉船潛水點與馬羅沃潟湖聞名,大多數居民仍過著自給自足的村落生活。",
      en: "An archipelago of nearly a thousand South Pacific islands, where rainforest-clad volcanic peaks meet turquoise lagoons. Known for the WWII Battle of Guadalcanal, world-class wreck diving, and Marovo Lagoon, it remains a land of largely self-sufficient village life.",
    },
    history: {
      zh: "南島語族在此定居數千年。1568 年西班牙探險家門達尼亞抵達,以為找到所羅門王的黃金而命名「索羅門」。1893 年成為英國保護地。1942 至 43 年的瓜達康納爾戰役是太平洋戰爭的重要轉捩點,盟軍在此首次展開大規模反攻。1978 年獨立,1998 至 2003 年經歷族群衝突「動盪時期」,後由澳洲主導的區域援助團協助恢復秩序。",
      en: "Austronesian peoples settled here millennia ago. Spanish explorer Mendaña arrived in 1568 and, believing he had found King Solomon's gold, named the islands accordingly. A British protectorate from 1893, they became a Pacific War turning point in the 1942–43 Battle of Guadalcanal, the Allies' first major counteroffensive. Independence came in 1978; ethnic strife known as 'the Tensions' (1998–2003) ended with an Australian-led regional assistance mission.",
    },
    cities: [
      {
        name: { zh: "荷尼阿拉", en: "Honiara" },
        blurb: {
          zh: "瓜達康納爾島上的首都,由二戰盟軍基地發展而成。",
          en: "The capital on Guadalcanal, which grew out of a WWII Allied base.",
        },
        trivia: {
          question: {
            zh: "荷尼阿拉附近的亨德森機場,在二戰哪場戰役中是美日兩軍反覆爭奪的焦點?",
            en: "Henderson Field near Honiara was fiercely contested by US and Japanese forces during which WWII battle?",
          },
          options: [
            { zh: "瓜達康納爾戰役", en: "The Battle of Guadalcanal" },
            { zh: "中途島海戰", en: "The Battle of Midway" },
            { zh: "珊瑚海海戰", en: "The Battle of the Coral Sea" },
            { zh: "硫磺島戰役", en: "The Battle of Iwo Jima" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1942 至 43 年美日圍繞這座機場鏖戰半年,盟軍勝利後開始在太平洋轉守為攻,今日的國際機場仍沿用其位置。",
            en: "US and Japanese forces fought over this airfield for six months in 1942–43; the Allied victory turned the Pacific tide, and today's international airport sits on the same site.",
          },
        },
      },
      {
        name: { zh: "吉佐", en: "Gizo" },
        blurb: {
          zh: "西部省的潛水小鎮,周圍海域布滿珊瑚礁與二戰遺跡。",
          en: "A dive town in Western Province, surrounded by reefs and WWII relics.",
        },
        trivia: {
          question: {
            zh: "吉佐外海的「甘迺迪島」,名字與美國總統甘迺迪有什麼關係?",
            en: "How did Kennedy Island near Gizo get its connection to US President John F. Kennedy?",
          },
          options: [
            {
              zh: "他的魚雷艇二戰時在附近被撞沉,他游到這座島上獲救",
              en: "His torpedo boat was sunk nearby in WWII and he swam to this island before being rescued",
            },
            { zh: "他當總統時曾在島上度假", en: "He vacationed there as president" },
            { zh: "以停靠此地的甘迺迪號軍艦命名", en: "It was named after a warship, the USS Kennedy" },
            { zh: "甘迺迪家族曾買下這座島", en: "The Kennedy family once owned the island" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1943 年甘迺迪指揮的 PT-109 魚雷艇遭日本驅逐艦撞沉,他帶領倖存船員游上此島,這段經歷成為他日後從政的傳奇。",
            en: "In 1943 the young JFK's boat PT-109 was rammed by a Japanese destroyer; he led survivors ashore here, an ordeal that became part of his political legend.",
          },
        },
      },
      {
        name: { zh: "奧基", en: "Auki" },
        blurb: {
          zh: "馬萊塔島首府,鄰近以人工島聚落聞名的蘭加蘭加潟湖。",
          en: "Capital of Malaita, near the Langa Langa Lagoon with its man-made island villages.",
        },
        trivia: {
          question: {
            zh: "馬萊塔島蘭加蘭加潟湖的居民,以製作什麼傳統貨幣聞名,至今仍用於聘禮?",
            en: "The people of Malaita's Langa Langa Lagoon are famous for crafting what traditional currency, still used in bride-price payments?",
          },
          options: [
            { zh: "貝殼錢", en: "Shell money" },
            { zh: "石幣", en: "Stone money" },
            { zh: "鯨魚牙齒", en: "Whale teeth" },
            { zh: "羽毛貨幣", en: "Feather money" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "工匠將貝殼磨成小圓片串成長鏈,是索羅門重要的傳統財富;石幣屬雅浦、鯨牙屬斐濟、羽毛錢則出自聖克魯斯群島。",
            en: "Artisans grind shells into tiny discs strung on long strands — a key store of traditional wealth. Stone money belongs to Yap, whale teeth to Fiji, and feather money to the Santa Cruz Islands.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "新喬治亞群島的馬羅沃潟湖被許多人譽為世界最大的鹽水潟湖,由雙重堡礁環抱。",
        en: "Marovo Lagoon in the New Georgia Islands, enclosed by a double barrier reef, is often called the world's largest saltwater lagoon.",
      },
      {
        zh: "海底火山卡瓦奇的火山口內竟有鯊魚棲息,科學家因此暱稱它「鯊魚火山」。",
        en: "Sharks have been found living inside the crater of Kavachi, an active submarine volcano — earning it the nickname 'Sharkcano'.",
      },
    ],
    climate: {
      zh: "熱帶雨林氣候,終年高溫潮濕,氣溫多在 25 至 32 度之間;11 月至 4 月是雨季與氣旋季,降雨更為集中。",
      en: "Tropical rainforest climate — hot and humid year-round at 25–32°C, with a wetter cyclone season from November to April.",
    },
    travelTips: [
      {
        zh: "全境屬瘧疾流行區,務必做好防蚊並諮詢醫師是否服用預防藥。",
        en: "Malaria is present throughout — use rigorous mosquito protection and ask a doctor about prophylaxis.",
      },
      {
        zh: "島間交通靠小飛機與船班,誤點取消是常態,行程要留足彈性。",
        en: "Inter-island travel relies on small planes and boats; delays and cancellations are routine, so build in buffer days.",
      },
      {
        zh: "海灘、礁區與土地多屬部落傳統所有,進入前先徵得當地同意。",
        en: "Beaches, reefs, and land are mostly under customary ownership — always ask local permission before entering.",
      },
      {
        zh: "荷尼阿拉以外刷卡困難,準備足夠的索羅門元現金。",
        en: "Cards rarely work outside Honiara; carry enough Solomon Islands dollars in cash.",
      },
    ],
  },
  {
    id: "VUT",
    name: { zh: "萬那杜", en: "Vanuatu" },
    capital: { zh: "維拉港", en: "Port Vila" },
    flag: "🇻🇺",
    region: "oceania",
    center: { lat: -15.9, lng: 167.2 },
    intro: {
      zh: "由 80 多座島嶼排成 Y 字形的火山群島國,擁有世界上最容易親近的活火山亞蘇爾,以及被視為高空彈跳始祖的陸地跳水儀式。曾多次在「快樂星球指數」中名列前茅,以簡單知足的島嶼生活聞名。",
      en: "A Y-shaped chain of 80-plus volcanic islands, home to Mount Yasur — the world's most accessible active volcano — and the land-diving ritual that inspired bungee jumping. It has topped the Happy Planet Index more than once, famed for its contented island way of life.",
    },
    history: {
      zh: "拉皮塔人約三千年前抵達定居。1606 年為西班牙效力的葡萄牙航海家奇羅斯首先到來,1774 年庫克船長將群島命名為「新赫布里底」。1906 年起由英法兩國以罕見的「共管」方式統治,島上並存兩套法律、警察與學校系統。1980 年獨立,取名萬那杜,意為「永恆的土地」。此後屢受地震與強烈氣旋考驗,2015 年氣旋帕姆造成重大災損。",
      en: "Lapita people settled here some 3,000 years ago. Quirós, a Portuguese navigator sailing for Spain, arrived in 1606, and Captain Cook named the islands the New Hebrides in 1774. From 1906 Britain and France ruled jointly under an unusual 'Condominium', with parallel legal, police, and school systems. Independence came in 1980 under the name Vanuatu — 'land eternal'. Earthquakes and cyclones test the nation regularly; Cyclone Pam caused devastation in 2015.",
    },
    cities: [
      {
        name: { zh: "維拉港", en: "Port Vila" },
        blurb: {
          zh: "埃法特島上的首都,環抱天然良港,是全國商業與觀光中心。",
          en: "The capital on Efate, wrapped around a natural harbor — the country's commercial and tourism hub.",
        },
        trivia: {
          question: {
            zh: "萬那杜在 1980 年獨立之前,是由哪兩個國家以「共管」形式共同統治?",
            en: "Before independence in 1980, Vanuatu was jointly ruled as a 'Condominium' by which two countries?",
          },
          options: [
            { zh: "英國與法國", en: "Britain and France" },
            { zh: "英國與德國", en: "Britain and Germany" },
            { zh: "法國與美國", en: "France and the United States" },
            { zh: "英國與澳洲", en: "Britain and Australia" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英法共管的新赫布里底同時有兩套法律、警察與貨幣,當時被戲稱為「Pandemonium(混亂共管)」。",
            en: "The Anglo-French New Hebrides ran duplicate laws, police forces, and currencies — wits dubbed it the 'Pandemonium'.",
          },
        },
      },
      {
        name: { zh: "盧甘維爾", en: "Luganville" },
        blurb: {
          zh: "聖埃斯皮里圖島上的第二大城,二戰美軍大型基地的所在地。",
          en: "The second town, on Espiritu Santo — site of a huge US base in WWII.",
        },
        trivia: {
          question: {
            zh: "盧甘維爾外海的「百萬美元角」這個地名是怎麼來的?",
            en: "How did 'Million Dollar Point' near Luganville get its name?",
          },
          options: [
            {
              zh: "二戰結束後美軍將大批車輛裝備直接推入海中棄置",
              en: "After WWII the US military bulldozed masses of vehicles and equipment straight into the sea",
            },
            { zh: "曾在此發現價值百萬美元的沉船寶藏", en: "A million-dollar shipwreck treasure was found there" },
            { zh: "該地土地曾以一百萬美元成交", en: "The land once sold for exactly one million dollars" },
            { zh: "珍珠養殖年產值達百萬美元", en: "Its pearl farms earned a million dollars a year" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1945 年美軍撤離時,因交涉出售不成,索性把推土機、卡車等物資傾倒入海,如今成了著名潛水點;附近還有巨型沉船柯立芝總統號。",
            en: "When a sale fell through in 1945, departing US forces dumped bulldozers, trucks, and supplies into the sea — now a famous dive site, near the giant wreck of the SS President Coolidge.",
          },
        },
      },
      {
        name: { zh: "坦納島", en: "Tanna" },
        blurb: {
          zh: "南部島嶼,以亞蘇爾火山與保存深厚的傳統文化聞名。",
          en: "A southern island famed for Mount Yasur and its strongly preserved traditional culture.",
        },
        trivia: {
          question: {
            zh: "坦納島的亞蘇爾火山為什麼被稱為「世界最容易親近的活火山」?",
            en: "Why is Mount Yasur on Tanna called 'the world's most accessible active volcano'?",
          },
          options: [
            {
              zh: "它持續噴發數百年,遊客卻能步行到火山口邊緣觀賞",
              en: "It has erupted continuously for centuries, yet visitors can walk right up to the crater rim",
            },
            { zh: "它是全世界海拔最低的活火山", en: "It is the lowest-elevation active volcano on Earth" },
            { zh: "它已休眠,只剩溫泉活動", en: "It is dormant, with only hot springs remaining" },
            { zh: "有纜車直達火山口內部", en: "A cable car runs into the crater itself" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "亞蘇爾數百年來幾乎不間斷地噴發,從停車處步行片刻即可站上火山口邊,傍晚觀賞熔岩噴發尤其震撼。",
            en: "Yasur has been erupting almost nonstop for centuries; a short walk from the parking area puts you on the rim, with lava fireworks best seen at dusk.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "彭特科斯特島的「陸地跳水」儀式中,男子以藤蔓綁腳從近 30 公尺高的木塔躍下,被視為高空彈跳的起源。",
        en: "In Pentecost Island's land-diving ritual, men leap from towers nearly 30 m tall with only vines tied to their ankles — the acknowledged inspiration for bungee jumping.",
      },
      {
        zh: "萬那杜使用超過 100 種本土語言,以人口比例計是全球語言密度最高的國家。",
        en: "Vanuatu's people speak more than 100 indigenous languages — the highest language density per capita on Earth.",
      },
    ],
    climate: {
      zh: "熱帶氣候,北部濕熱、南部稍涼,氣溫約 22 至 31 度;11 月至 4 月為雨季與氣旋季,偶有強烈氣旋侵襲。",
      en: "Tropical — hotter and wetter in the north, milder in the south, around 22–31°C. November to April brings the wet season and occasional severe cyclones.",
    },
    travelTips: [
      {
        zh: "想看彭特科斯特島陸地跳水,要在約 4 至 6 月的儀式季前往,並透過正規行程安排。",
        en: "To see the Pentecost land dives, visit during the ritual season around April–June and book through an organized tour.",
      },
      {
        zh: "登亞蘇爾火山前先確認火山活動等級,並全程聽從嚮導指示。",
        en: "Check Mount Yasur's activity alert level before climbing, and follow guides' instructions at all times.",
      },
      {
        zh: "村莊土地與習俗(kastom)受尊重,拍照或進入聚落前先詢問。",
        en: "Village land and kastom traditions command respect — ask before photographing people or entering settlements.",
      },
      {
        zh: "11 月至 4 月氣旋季出遊要留意氣象警報,離島行程可能臨時取消。",
        en: "During the November–April cyclone season, watch weather alerts; outer-island trips can be cancelled at short notice.",
      },
    ],
  },
  {
    id: "WSM",
    name: { zh: "薩摩亞", en: "Samoa" },
    capital: { zh: "阿皮亞", en: "Apia" },
    flag: "🇼🇸",
    region: "oceania",
    center: { lat: -13.75, lng: -172.1 },
    intro: {
      zh: "波里尼西亞文化的心臟地帶,由烏波盧與薩瓦伊兩座火山島為主組成。「薩摩亞之道」的傳統社會由酋長制度維繫,村落、教會與家族構成生活核心,瀑布、熔岩海岸與圓形茅屋構成經典南太平洋風景。",
      en: "The heartland of Polynesian culture, centered on the volcanic islands of Upolu and Savai'i. Fa'a Samoa — 'the Samoan way' — is upheld by the chiefly matai system, with village, church, and family at life's core, amid waterfalls, lava coasts, and open-sided fale huts.",
    },
    history: {
      zh: "拉皮塔人約三千年前定居,發展出深厚的酋長制度與航海傳統。19 世紀末英美德三國角力,1899 年群島被瓜分:西薩摩亞歸德國,東薩摩亞歸美國(即今日的美屬薩摩亞)。一戰爆發後紐西蘭佔領西薩摩亞並託管,期間非暴力的「毛烏運動」持續爭取自治。1962 年獨立,是太平洋島嶼中第一個獨立的國家,1997 年正式改國名為薩摩亞。",
      en: "Lapita settlers arrived some 3,000 years ago, developing deep chiefly and seafaring traditions. After Anglo-American-German rivalry, the islands were split in 1899: Germany took the west, the US the east (today's American Samoa). New Zealand seized Western Samoa in WWI and administered it, while the nonviolent Mau movement pressed for self-rule. In 1962 it became the first Pacific island nation to gain independence, adopting the name Samoa in 1997.",
    },
    cities: [
      {
        name: { zh: "阿皮亞", en: "Apia" },
        blurb: {
          zh: "全國唯一的城市,港灣旁教堂與市場林立,近郊有史蒂文森故居。",
          en: "The country's only city — churches and markets line the harbor, with Robert Louis Stevenson's estate in the hills nearby.",
        },
        trivia: {
          question: {
            zh: "哪位《金銀島》的作者晚年定居阿皮亞近郊,被薩摩亞人尊稱為「圖西塔拉」(講故事的人)?",
            en: "Which author of Treasure Island spent his final years near Apia, honored by Samoans as 'Tusitala' — the teller of tales?",
          },
          options: [
            { zh: "羅伯特·路易斯·史蒂文森", en: "Robert Louis Stevenson" },
            { zh: "馬克·吐溫", en: "Mark Twain" },
            { zh: "魯德亞德·吉卜林", en: "Rudyard Kipling" },
            { zh: "約瑟夫·康拉德", en: "Joseph Conrad" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "史蒂文森 1890 年起定居維利馬莊園,1894 年病逝後葬於能俯瞰大海的瓦埃亞山頂,故居今為博物館。",
            en: "Stevenson settled at Vailima in 1890 and, after his death in 1894, was buried atop Mount Vaea overlooking the sea; his home is now a museum.",
          },
        },
      },
      {
        name: { zh: "薩雷洛洛加", en: "Salelologa" },
        blurb: {
          zh: "薩瓦伊島的門戶城鎮,渡輪碼頭與市場所在地。",
          en: "The gateway town of Savai'i, home to its ferry wharf and market.",
        },
        trivia: {
          question: {
            zh: "薩雷洛洛加是搭渡輪前往薩瓦伊島的門戶,這座島在薩摩亞有什麼地位?",
            en: "Salelologa is the ferry gateway to Savai'i. What distinction does that island hold within Samoa?",
          },
          options: [
            {
              zh: "它是全國面積最大的島嶼,保留最傳統的村落生活",
              en: "It is the country's largest island, preserving the most traditional village life",
            },
            { zh: "它是首都所在的島嶼", en: "It is the island where the capital sits" },
            { zh: "它是全國唯一的珊瑚環礁", en: "It is the country's only coral atoll" },
            { zh: "它是國際機場所在的島嶼", en: "It is the island with the international airport" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "薩瓦伊島面積大於首都所在的烏波盧島,島上熔岩原、噴潮孔與傳統村落聞名,常被稱為「波里尼西亞的搖籃」之一。",
            en: "Savai'i is larger than Upolu, where the capital lies; famed for lava fields, blowholes, and traditional villages, it is often called a cradle of Polynesia.",
          },
        },
      },
      {
        name: { zh: "拉洛馬努", en: "Lalomanu" },
        blurb: {
          zh: "烏波盧島東南端的海灘村落,白沙與海濱茅屋的代表景致。",
          en: "A beach village on Upolu's southeast tip — the classic scene of white sand and beachfront huts.",
        },
        trivia: {
          question: {
            zh: "在拉洛馬努等薩摩亞海灘常見的傳統開放式高腳茅屋,叫什麼名字?",
            en: "What is the name of the traditional open-sided thatched hut seen on Samoan beaches like Lalomanu?",
          },
          options: [
            { zh: "法雷(fale)", en: "Fale" },
            { zh: "布雷(斐濟傳統屋)", en: "Bure (the Fijian house)" },
            { zh: "瑪拉埃(毛利集會場)", en: "Marae (the Māori meeting ground)" },
            { zh: "長屋", en: "Longhouse" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法雷四面無牆、以柱撐起茅草圓頂,通風涼爽;海灘法雷是薩摩亞最具代表性的平價住宿方式。",
            en: "A fale has no walls — posts hold up a thatched dome, keeping it breezy and cool; beach fale are Samoa's signature budget stay.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2011 年薩摩亞把換日線挪到自己東側,直接跳過 12 月 30 日整整一天,以便與紐澳同一天做生意。",
        en: "In 2011 Samoa shifted itself west of the International Date Line, skipping December 30 entirely so it could share business days with New Zealand and Australia.",
      },
      {
        zh: "英文的 tattoo(刺青)一詞源自波里尼西亞語 tatau,薩摩亞的傳統刺青儀式至今仍以手工敲擊完成。",
        en: "The English word 'tattoo' comes from the Polynesian 'tatau' — and Samoa's traditional tattoos are still applied with hand-tapped tools.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,終年約 26 至 30 度;11 月至 4 月為雨季並可能有氣旋,5 至 10 月較乾爽宜人。",
      en: "Tropical maritime, around 26–30°C all year. November to April is the rainy, cyclone-prone season; May to October is drier and most pleasant.",
    },
    travelTips: [
      {
        zh: "週日是安息日,商店多半歇業、村莊活動放緩,行程安排要避開採買與長途移動。",
        en: "Sunday is strictly observed — most shops close and village life slows, so avoid planning errands or long transfers then.",
      },
      {
        zh: "傍晚村莊祈禱時間(sa)請暫停通行並保持安靜,聽從村民指引。",
        en: "During the evening village prayer time (sa), pause your travel and stay quiet, following villagers' cues.",
      },
      {
        zh: "許多海灘、瀑布與天坑屬村落所有,入場付小額費用是慣例。",
        en: "Many beaches, waterfalls, and swimming holes are village-owned; paying a small entry fee is customary.",
      },
      {
        zh: "離開海灘後請披上衣物,泳裝只適合在沙灘與泳池穿著。",
        en: "Cover up away from the beach — swimwear is for the sand and pool only.",
      },
    ],
  },
  {
    id: "TON",
    name: { zh: "東加", en: "Tonga" },
    capital: { zh: "努瓜婁發", en: "Nuku'alofa" },
    flag: "🇹🇴",
    region: "oceania",
    center: { lat: -21.2, lng: -175.2 },
    intro: {
      zh: "由 170 多座島嶼組成的南太平洋王國,是太平洋僅存、也是唯一延續至今的君主國。庫克船長稱它「友善群島」,每年大翅鯨會洄游到此繁殖。緊鄰換日線,是全球最早迎接新一天的國家之一。",
      en: "A South Pacific kingdom of 170-plus islands — the Pacific's only surviving monarchy. Captain Cook dubbed it the 'Friendly Islands', humpback whales migrate here each year to breed, and sitting beside the date line, it is among the first nations to greet each new day.",
    },
    history: {
      zh: "拉皮塔人約三千年前定居。10 世紀起圖伊東加王朝興起,勢力一度遠及斐濟與薩摩亞,被稱為「東加海洋帝國」。1770 年代庫克船長到訪,因受到款待而稱之為友善群島。1845 年喬治·圖普一世統一各島建立現代王國,1875 年頒布憲法;1900 年成為英國保護國,但始終保有王室與主權,是太平洋唯一未被殖民瓜分的國家,1970 年恢復完全獨立,2010 年推動民主化改革。",
      en: "Lapita settlers arrived about 3,000 years ago. From the 10th century the Tu'i Tonga dynasty built a maritime empire whose reach touched Fiji and Samoa. Captain Cook, warmly received in the 1770s, named these the Friendly Islands. George Tupou I unified the kingdom in 1845 and granted a constitution in 1875; a British protectorate from 1900, Tonga kept its monarchy and sovereignty — never colonized — regaining full independence in 1970 and adopting democratic reforms in 2010.",
    },
    cities: [
      {
        name: { zh: "努瓜婁發", en: "Nuku'alofa" },
        blurb: {
          zh: "東加塔布島上的首都,白色木造王宮面海而立。",
          en: "The capital on Tongatapu, where the white wooden Royal Palace faces the sea.",
        },
        trivia: {
          question: {
            zh: "東加在太平洋島國之中,擁有什麼獨一無二的政治體制?",
            en: "Among Pacific island nations, what makes Tonga's political system unique?",
          },
          options: [
            {
              zh: "它是太平洋唯一延續至今的王國,由國王世襲統治",
              en: "It is the Pacific's only surviving kingdom, with a hereditary monarch",
            },
            { zh: "它是聯邦共和國", en: "It is a federal republic" },
            { zh: "它是美國的自由聯繫邦", en: "It is in free association with the United States" },
            { zh: "它是法國的海外領地", en: "It is a French overseas territory" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "圖普王朝自 1845 年統治至今,雖經 2010 年民主改革,國王仍是國家元首,王宮就在努瓜婁發海濱。",
            en: "The Tupou dynasty has reigned since 1845; despite 2010 reforms the king remains head of state, his palace on Nuku'alofa's waterfront.",
          },
        },
      },
      {
        name: { zh: "內亞富", en: "Neiafu" },
        blurb: {
          zh: "瓦瓦烏群島的主鎮,深水港灣是帆船與賞鯨勝地。",
          en: "The main town of the Vava'u group, whose deep harbor draws yachts and whale watchers.",
        },
        trivia: {
          question: {
            zh: "每年 7 至 10 月,大批大翅鯨(座頭鯨)洄游到瓦瓦烏群島海域,牠們來這裡做什麼?",
            en: "Each year from July to October, humpback whales migrate to the waters of Vava'u. What do they come to do?",
          },
          options: [
            {
              zh: "在溫暖海域交配、生產並哺育幼鯨",
              en: "Mate, give birth, and nurse their calves in the warm waters",
            },
            { zh: "捕食成群的磷蝦", en: "Feed on krill swarms" },
            { zh: "在遷徙途中短暫休息補眠", en: "Rest briefly mid-migration" },
            { zh: "躲避虎鯨的獵捕", en: "Escape hunting orcas" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "大翅鯨從南極覓食場北上,到東加溫暖平靜的海域繁殖育幼;東加是全球少數允許在規範下與鯨共游的地方。",
            en: "Humpbacks swim up from Antarctic feeding grounds to breed and calve in Tonga's warm, calm seas — one of the few places where regulated swimming with whales is allowed.",
          },
        },
      },
      {
        name: { zh: "哈派群島", en: "Ha'apai" },
        blurb: {
          zh: "中部的低平島群,以潔白沙洲聞名,主鎮為潘蓋。",
          en: "The low-lying central island group known for pristine sandbars, with Pangai as its main town.",
        },
        trivia: {
          question: {
            zh: "2022 年 1 月,哈派群島附近的洪加東加-洪加哈派海底火山爆發,這次噴發創下了什麼紀錄?",
            en: "In January 2022 the Hunga Tonga–Hunga Ha'apai submarine volcano near Ha'apai erupted. What record did the blast set?",
          },
          options: [
            {
              zh: "是現代儀器紀錄以來最猛烈的爆發之一,衝擊波環繞地球數圈",
              en: "One of the most violent eruptions ever recorded by modern instruments, its shock wave circled the globe several times",
            },
            { zh: "造成史上最多的火山罹難人數", en: "It caused the highest volcanic death toll in history" },
            { zh: "噴發持續了整整一年不停歇", en: "It erupted continuously for a full year" },
            { zh: "形成了太平洋最大的新島嶼", en: "It created the largest new island in the Pacific" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "爆發激起的大氣壓力波多次環繞地球,海嘯波及整個太平洋,並震斷東加對外的海底電纜,使全國通訊中斷多日。",
            en: "The atmospheric pressure wave lapped the planet repeatedly, tsunamis crossed the whole Pacific, and Tonga's undersea cable was severed, cutting the country off for days.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "東加位於換日線西側,是全球最早迎接新年的國家之一。",
        en: "Sitting just west of the International Date Line, Tonga is among the first countries on Earth to welcome each new year.",
      },
      {
        zh: "1789 年著名的邦蒂號叛變事件,就發生在哈派群島附近的海域。",
        en: "The famous 1789 mutiny on the Bounty took place in the waters near the Ha'apai islands.",
      },
    ],
    climate: {
      zh: "熱帶至亞熱帶氣候,北部群島較炎熱、南部較涼爽;11 月至 4 月為雨季與氣旋季,5 至 10 月乾爽,也是賞鯨季節。",
      en: "Tropical in the north shading to subtropical in the south. November to April is the wet cyclone season; May to October is dry — and whale season.",
    },
    travelTips: [
      {
        zh: "憲法明定週日為安息日,航班、商店與多數活動幾乎全面停擺,規劃行程務必避開。",
        en: "The constitution enshrines Sunday as a day of rest — flights, shops, and most activities shut down, so plan around it.",
      },
      {
        zh: "與鯨共游必須參加持有執照的業者行程,並遵守接近距離規範。",
        en: "Swimming with whales is only allowed through licensed operators, with strict approach rules.",
      },
      {
        zh: "穿著宜保守,離開海灘請遮蓋肩膀與大腿。",
        en: "Dress modestly — cover shoulders and thighs away from the beach.",
      },
      {
        zh: "外島刷卡不便,先在努瓜婁發備妥潘加(東加貨幣)現金。",
        en: "Cards are unreliable on outer islands; stock up on pa'anga cash in Nuku'alofa first.",
      },
    ],
  },
  {
    id: "KIR",
    name: { zh: "吉里巴斯", en: "Kiribati" },
    capital: { zh: "南塔拉瓦", en: "South Tarawa" },
    flag: "🇰🇮",
    region: "oceania",
    center: { lat: 1.45, lng: 173.0 },
    intro: {
      zh: "33 座環礁與珊瑚島散布在 350 萬平方公里的赤道海域上,是世界上唯一同時橫跨東西南北四個半球的國家。陸地平均海拔僅約 2 公尺,站在對抗海平面上升的最前線,國名讀作「基里巴斯」,源自「吉爾伯特」的當地發音。",
      en: "Thirty-three atolls and coral islands scattered across 3.5 million km² of equatorial ocean — the only country lying in all four hemispheres. With land averaging just 2 m above the sea, it stands on the front line of sea-level rise. The name, pronounced 'Kiribas', is the local rendering of 'Gilberts'.",
    },
    history: {
      zh: "密克羅尼西亞人數千年前便在這些環礁定居。19 世紀捕鯨船與勞工販子相繼到來,1892 年吉爾伯特群島與埃利斯群島一同成為英國保護地。1943 年塔拉瓦戰役是太平洋戰爭最血腥的登陸戰之一。1979 年獨立,採用「吉里巴斯」為國名。1995 年將換日線大幅東移,使全國同處一天;近年因海平面上升威脅,曾在斐濟購地並推動「有尊嚴的遷徙」政策,成為氣候變遷議題的國際象徵。",
      en: "Micronesians settled these atolls millennia ago. Whalers and labor recruiters arrived in the 19th century, and in 1892 the Gilbert Islands became a British protectorate alongside the Ellice Islands. The 1943 Battle of Tarawa was among the Pacific War's bloodiest landings. Independence came in 1979 under the name Kiribati. In 1995 it bent the date line far eastward so the whole nation shares one day; facing rising seas, it has bought land in Fiji and championed 'migration with dignity', becoming a global symbol of climate change.",
    },
    cities: [
      {
        name: { zh: "南塔拉瓦", en: "South Tarawa" },
        blurb: {
          zh: "首都所在的狹長礁島帶,集中了全國近半人口。",
          en: "The narrow capital strip of islets, home to nearly half the national population.",
        },
        trivia: {
          question: {
            zh: "1943 年 11 月,美軍與日軍在塔拉瓦環礁的貝提歐島爆發激戰,這場戰役以什麼著稱?",
            en: "In November 1943, US and Japanese forces clashed on Betio islet in Tarawa Atoll. What is that battle known for?",
          },
          options: [
            {
              zh: "是太平洋戰爭傷亡最慘烈的兩棲登陸之一,76 小時內雙方近六千人陣亡",
              en: "One of the Pacific War's costliest amphibious assaults — nearly 6,000 dead on both sides in 76 hours",
            },
            { zh: "是太平洋戰爭的最後一場戰役", en: "It was the final battle of the Pacific War" },
            { zh: "是持續時間最長的圍城戰", en: "It was the war's longest siege" },
            { zh: "未發一槍一彈即和平結束", en: "It ended peacefully without a shot fired" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "美軍首次強攻重兵防守的環礁,登陸艇卡在退潮的礁盤上損失慘重,慘痛教訓改寫了此後的兩棲作戰準則。",
            en: "It was the US military's first assault on a heavily fortified atoll; landing craft stranded on the low-tide reef suffered terribly, and the lessons rewrote amphibious doctrine.",
          },
        },
      },
      {
        name: { zh: "吉里斯馬斯島(聖誕島)", en: "Kiritimati (Christmas Island)" },
        blurb: {
          zh: "萊恩群島中的巨型環礁,以海釣與觀鳥聞名。",
          en: "A giant atoll in the Line Islands, famed for bonefishing and seabirds.",
        },
        trivia: {
          question: {
            zh: "吉里斯馬斯島(聖誕島)在世界地理上擁有什麼「之最」?",
            en: "What world record does Kiritimati (Christmas Island) hold in geography?",
          },
          options: [
            {
              zh: "它是全球陸地面積最大的珊瑚環礁",
              en: "It is the coral atoll with the largest land area on Earth",
            },
            { zh: "它擁有全球最深的潟湖", en: "It has the world's deepest lagoon" },
            { zh: "它是人口最多的環礁", en: "It is the most populous atoll" },
            { zh: "它是海拔最高的環礁", en: "It is the highest-elevation atoll" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "吉里斯馬斯島陸地約 388 平方公里,約占吉里巴斯全國陸地的一半;1777 年平安夜前夕庫克船長抵達,因而得名聖誕島。",
            en: "With about 388 km² of land — roughly half of Kiribati's total — it was named by Captain Cook, who arrived on Christmas Eve 1777.",
          },
        },
      },
      {
        name: { zh: "巴納巴島", en: "Banaba" },
        blurb: {
          zh: "全國唯一的隆起珊瑚島,曾因採礦而滄桑巨變。",
          en: "The country's only raised coral island, transformed by decades of mining.",
        },
        trivia: {
          question: {
            zh: "20 世紀巴納巴島因大規模開採什麼資源而環境遭破壞,島民多數被遷往斐濟的拉比島?",
            en: "Mining of what resource devastated Banaba in the 20th century, leading most islanders to be resettled on Rabi Island in Fiji?",
          },
          options: [
            { zh: "磷礦", en: "Phosphate" },
            { zh: "鎳礦", en: "Nickel" },
            { zh: "鋁土礦", en: "Bauxite" },
            { zh: "金礦", en: "Gold" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英國主導的磷礦開採掏空了島上大部分地表,1945 年起島民集體遷往斐濟拉比島,至今仍保有巴納巴人的社群認同。",
            en: "British-run phosphate mining stripped most of the island's surface; from 1945 the Banabans were relocated to Rabi Island in Fiji, where their community identity endures.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "吉里巴斯是全球唯一同時跨越北半球、南半球、東半球與西半球的國家。",
        en: "Kiribati is the only country on Earth situated in all four hemispheres — north, south, east, and west.",
      },
      {
        zh: "1995 年調整換日線後,無人居住的卡羅琳島更名「千禧島」,成為全球最早迎接 2000 年的陸地之一。",
        en: "After the 1995 date-line shift, uninhabited Caroline Island was renamed Millennium Island — among the first land on Earth to see the year 2000.",
      },
    ],
    climate: {
      zh: "赤道熱帶海洋性氣候,終年炎熱,約 28 至 32 度;降雨受聖嬰現象影響年際差異大,位處氣旋帶之外,罕受颱風直襲。",
      en: "Equatorial maritime — hot year-round at 28–32°C. Rainfall swings widely with El Niño, and lying outside the cyclone belts, it is rarely hit by storms.",
    },
    travelTips: [
      {
        zh: "對外航班極少,主要經斐濟或諾魯轉機,務必預留航班變動的緩衝時間。",
        en: "Flights are scarce — mainly via Fiji or Nauru — so leave generous buffers for schedule changes.",
      },
      {
        zh: "南塔拉瓦住宿與淡水資源有限,標準從簡,建議自備日用品。",
        en: "Lodging and fresh water on South Tarawa are limited and basic; bring your own supplies.",
      },
      {
        zh: "造訪村落集會所(maneaba)有傳統禮節,請跟隨當地人的指引入座。",
        en: "Village meeting houses (maneaba) follow traditional etiquette — take seating cues from your hosts.",
      },
      {
        zh: "吉里斯馬斯島是世界級的淺灘海釣勝地,行程與嚮導要提前預訂。",
        en: "Kiritimati offers world-class bonefishing on the flats — book lodges and guides well ahead.",
      },
    ],
  },
  {
    id: "TUV",
    name: { zh: "吐瓦魯", en: "Tuvalu" },
    capital: { zh: "富納富提", en: "Funafuti" },
    flag: "🇹🇻",
    region: "oceania",
    center: { lat: -8.5, lng: 179.2 },
    intro: {
      zh: "由九座環礁與珊瑚島組成,陸地僅約 26 平方公里、人口約一萬一千,是全球最小、人口最少的國家之一。全國最高點只有數公尺,海平面上升攸關存亡,因此積極推動把國家備份上雲端的「數位國家」計畫。",
      en: "Nine atolls and reef islands totaling about 26 km², with some 11,000 people — among the smallest and least populous countries on Earth. Its highest point is only a few meters up, making sea-level rise an existential threat and inspiring a 'Digital Nation' project to back the country up online.",
    },
    history: {
      zh: "波里尼西亞人約三千年前定居這些環礁。19 世紀勞工販運「黑鳥行動」使人口銳減,1892 年以「埃利斯群島」之名與吉爾伯特群島同受英國保護。二戰期間美軍在富納富提等環礁修建機場。1974 年公投決定與吉爾伯特群島分家,1978 年以吐瓦魯之名獨立,意為「八島同立」。2000 年加入聯合國,出租國家網域「.tv」成為重要財源;2023 年與澳洲簽署法勒皮利聯盟條約,取得氣候移民管道與安全保障。",
      en: "Polynesians settled these atolls around 3,000 years ago. Nineteenth-century 'blackbirding' labor raids slashed the population, and from 1892 the islands were the Ellice Islands, a British protectorate with the Gilberts. US forces built wartime airfields here, including on Funafuti. A 1974 referendum separated the Ellice from the Gilbert Islands, and in 1978 Tuvalu — 'eight standing together' — became independent. It joined the UN in 2000, licensing its '.tv' domain as a key revenue source, and in 2023 signed the Falepili Union treaty with Australia for climate migration pathways and security guarantees.",
    },
    cities: [
      {
        name: { zh: "富納富提", en: "Funafuti" },
        blurb: {
          zh: "首都環礁,細長的主島豐加法勒容納了全國過半人口。",
          en: "The capital atoll, whose slender main islet of Fongafale holds over half the population.",
        },
        trivia: {
          question: {
            zh: "富納富提國際機場的跑道,在沒有航班起降的時候有什麼特別用途?",
            en: "When no flights are due, what unusual role does the runway of Funafuti International Airport play?",
          },
          options: [
            {
              zh: "變成居民打排球、踢足球與散步的公共活動空間",
              en: "It becomes a public space where locals play volleyball, football, and stroll",
            },
            { zh: "用來曬魚乾與晾晒椰乾", en: "It is used to dry fish and copra" },
            { zh: "封閉為軍事管制區", en: "It is sealed off as a military zone" },
            { zh: "改作賽車與機車競速場", en: "It hosts car and motorbike races" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "航班一週僅數班,警報聲響起前跑道就是全島最大的開放空間,傍晚滿是運動與乘涼的居民,是吐瓦魯最著名的日常風景。",
            en: "With only a few flights a week, the runway doubles as the island's biggest open space — evenings fill with games and strollers until the siren clears it for landings.",
          },
        },
      },
      {
        name: { zh: "納努梅亞", en: "Nanumea" },
        blurb: {
          zh: "最西北端的環礁,以精美的教堂與二戰遺跡聞名。",
          en: "The northwesternmost atoll, known for its grand church and WWII relics.",
        },
        trivia: {
          question: {
            zh: "二戰期間,美軍曾在納努梅亞環礁修建什麼設施,相關遺跡至今仍可看到?",
            en: "During WWII, US forces built what on Nanumea Atoll, with relics still visible today?",
          },
          options: [
            {
              zh: "機場跑道與基地,附近還留有飛機與船艦殘骸",
              en: "An airstrip and base, with aircraft and ship wrecks still nearby",
            },
            { zh: "潛艇補給基地", en: "A submarine supply base" },
            { zh: "跨島雷達長城", en: "A chain of giant radar walls" },
            { zh: "戰俘營", en: "A prisoner-of-war camp" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1943 年美軍以吐瓦魯各環礁為進攻吉爾伯特群島的跳板,納努梅亞的跑道遺跡、擱淺登陸艦與沉機成了歷史見證。",
            en: "In 1943 the US used Tuvalu's atolls as stepping stones toward the Gilberts; Nanumea's old strip, a beached landing ship, and sunken aircraft remain as witnesses.",
          },
        },
      },
      {
        name: { zh: "瓦伊圖普", en: "Vaitupu" },
        blurb: {
          zh: "全國陸地面積最大的環礁,綠意濃密、村落安詳。",
          en: "The atoll with the country's largest land area, lush and quietly village-paced.",
        },
        trivia: {
          question: {
            zh: "瓦伊圖普是吐瓦魯陸地面積最大的島,島上設有什麼全國性的機構?",
            en: "Vaitupu has Tuvalu's largest land area. What national institution is located there?",
          },
          options: [
            {
              zh: "全國主要的寄宿中學(莫圖福瓦中學)",
              en: "The nation's main boarding secondary school, Motufoua",
            },
            { zh: "國際機場", en: "The international airport" },
            { zh: "最高法院", en: "The supreme court" },
            { zh: "國家電視台總部", en: "The national television headquarters" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "全國各島的中學生多集中到瓦伊圖普的莫圖福瓦中學寄宿就讀,這所學校在吐瓦魯教育體系中地位獨特。",
            en: "Students from across the islands board at Motufoua Secondary School on Vaitupu, giving it a unique place in Tuvalu's education system.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "吐瓦魯把國家頂級網域「.tv」授權給影音平台使用,權利金長年是國家財政的重要支柱。",
        en: "Tuvalu licenses its '.tv' country domain to streaming and video platforms — royalties have long been a pillar of the national budget.",
      },
      {
        zh: "吐瓦魯是中華民國(台灣)的邦交國,兩國自 1979 年建交,邦誼延續至今。",
        en: "Tuvalu is a diplomatic ally of Taiwan (the Republic of China), with relations maintained continuously since 1979.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,終年高溫約 28 至 31 度,無明顯乾季;國土極為低平,遇上大潮時部分道路與空地會被海水淹沒。",
      en: "Tropical maritime, a steady 28–31°C with no real dry season. The land is so low that king tides regularly flood roads and open ground.",
    },
    travelTips: [
      {
        zh: "對外航班僅斐濟蘇瓦每週數班,天候取消頻繁,行程務必預留數天緩衝。",
        en: "The only air link is a few weekly flights from Suva, Fiji, and weather cancellations are common — build in several buffer days.",
      },
      {
        zh: "通用澳幣,島上幾乎無法刷卡,現金要備足。",
        en: "The Australian dollar is used, and cards are barely accepted — bring ample cash.",
      },
      {
        zh: "教會在生活中角色吃重,週日請放慢步調並穿著保守。",
        en: "Church life runs deep — slow down on Sundays and dress modestly.",
      },
      {
        zh: "物資仰賴進口,常用藥品與防曬等用品請自行攜帶。",
        en: "Supplies are import-dependent; pack your own medicines, sunscreen, and essentials.",
      },
    ],
  },
  {
    id: "NRU",
    name: { zh: "諾魯", en: "Nauru" },
    capital: { zh: "雅連(實質首都)", en: "Yaren (de facto)" },
    flag: "🇳🇷",
    region: "oceania",
    center: { lat: -0.53, lng: 166.93 },
    intro: {
      zh: "面積僅 21 平方公里的珊瑚島國,是世界最小的共和國、也是面積第三小的國家,僅次於梵蒂岡與摩納哥。20 世紀因磷礦致富,人均收入一度名列世界前茅,礦藏枯竭後經濟劇烈起落,島中央仍留著採礦後嶙峋的石灰岩地貌。",
      en: "A 21 km² coral island — the world's smallest republic and third-smallest country after Vatican City and Monaco. Phosphate made it briefly one of the richest nations per capita in the 20th century; when the ore ran out the economy crashed, leaving a jagged limestone moonscape at the island's heart.",
    },
    history: {
      zh: "密克羅尼西亞與波里尼西亞人約三千年前定居。1798 年英國船長費恩路過,稱之為「宜人島」。1888 年被德國併入,1900 年代發現高品位磷礦,此後一戰後由英澳紐共同託管、二戰遭日軍佔領,戰後再由聯合國託管。1968 年獨立。磷礦出口曾帶來驚人財富,但 1990 年代資源枯竭加上主權基金投資失利,陷入財政困境,近年依靠漁權收入與代澳洲設置的難民安置中心維持經濟。",
      en: "Micronesians and Polynesians settled here some 3,000 years ago. British captain John Fearn passed in 1798, naming it Pleasant Island. Annexed by Germany in 1888, it yielded rich phosphate from the 1900s; after WWI it was administered by Britain, Australia, and New Zealand, occupied by Japan in WWII, then held under UN trusteeship until independence in 1968. Phosphate brought staggering wealth, but depletion and failed sovereign-fund investments in the 1990s brought crisis; today fishing licenses and an Australian-run offshore processing centre sustain the economy.",
    },
    cities: [
      {
        name: { zh: "雅連", en: "Yaren" },
        blurb: {
          zh: "國會與機場所在的南部行政區,承擔首都功能。",
          en: "The southern district housing parliament and the airport, serving capital duties.",
        },
        trivia: {
          question: {
            zh: "諾魯在「首都」的設置上,有什麼在聯合國會員國中少見的特殊之處?",
            en: "What is unusual — rare among UN member states — about Nauru's arrangement for a capital?",
          },
          options: [
            {
              zh: "它沒有法定首都,政府機關所在的雅連只是實質首都",
              en: "It has no official capital — Yaren, where government sits, is only the de facto one",
            },
            { zh: "首都每年在各區之間輪替", en: "The capital rotates among districts each year" },
            { zh: "首都設在鄰國的租借地上", en: "Its capital sits on leased land in a neighboring country" },
            { zh: "同時有兩個並列的法定首都", en: "It has two co-equal official capitals" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "諾魯從未正式指定首都,國會、政府部門與機場集中在雅連區,國際上便以雅連作為實質首都。",
            en: "Nauru never formally designated a capital; parliament, ministries, and the airport cluster in Yaren district, which the world treats as the de facto capital.",
          },
        },
      },
      {
        name: { zh: "艾沃", en: "Aiwo" },
        blurb: {
          zh: "西岸工業區,磷礦裝運碼頭的懸臂吊臂是地標。",
          en: "The west-coast industrial district, marked by the cantilevered phosphate loading arms.",
        },
        trivia: {
          question: {
            zh: "20 世紀支撐諾魯經濟、一度使它躋身全球最富裕國家之列的是什麼?",
            en: "What propped up Nauru's economy in the 20th century, briefly making it one of the world's richest countries per capita?",
          },
          options: [
            { zh: "磷礦出口", en: "Phosphate exports" },
            { zh: "石油開採", en: "Oil drilling" },
            { zh: "大眾觀光", en: "Mass tourism" },
            { zh: "鮪魚罐頭加工", en: "Tuna canning" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "數千年海鳥糞化成的磷礦覆蓋島中央台地,從艾沃的懸臂碼頭源源輸出;繁華過後,枯竭的礦區留下大片石灰岩尖塔荒地。",
            en: "Millennia of seabird guano became rich phosphate on the central plateau, shipped out via Aiwo's cantilever piers; after the boom, the worked-out fields left a wasteland of limestone pinnacles.",
          },
        },
      },
      {
        name: { zh: "布阿達", en: "Buada" },
        blurb: {
          zh: "島內唯一不靠海的行政區,環抱著綠意盎然的潟湖。",
          en: "The island's only landlocked district, wrapped around a lush lagoon.",
        },
        trivia: {
          question: {
            zh: "布阿達潟湖在諾魯的地理上有什麼特別之處?",
            en: "What makes Buada Lagoon geographically special within Nauru?",
          },
          options: [
            {
              zh: "它是全島唯一的內陸湖,四周是島上少見的濃密綠意",
              en: "It is the island's only inland lake, ringed by rare lush greenery",
            },
            { zh: "它是全球鹽度最高的湖泊", en: "It is the saltiest lake on Earth" },
            { zh: "它是通往海底洞穴的入口", en: "It is the entrance to an undersea cave system" },
            { zh: "它是人工開挖的水庫", en: "It is an artificially dug reservoir" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座不與海相連的小湖被椰林與農園環繞,與島中央採礦後的荒蕪景觀形成鮮明對比。",
            en: "Cut off from the sea and fringed by palms and gardens, the little lake contrasts sharply with the mined-out interior nearby.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "環島公路一圈只有約 19 公里,開車不用半小時就能繞完整個國家。",
        en: "The road around the island runs just 19 km — you can drive around the entire country in under half an hour.",
      },
      {
        zh: "諾魯是聯合國會員國中少數沒有法定首都的國家,也沒有任何河流。",
        en: "Nauru is one of the few UN members with no official capital — and it has no rivers at all.",
      },
    ],
    climate: {
      zh: "赤道熱帶氣候,終年炎熱,約 26 至 32 度;降雨受聖嬰現象影響年際變化極大,常出現長期乾旱,淡水資源相當有限。",
      en: "Equatorial and hot year-round at 26–32°C. Rainfall varies hugely with El Niño, prolonged droughts are common, and fresh water is scarce.",
    },
    travelTips: [
      {
        zh: "多數旅客需要事先申請簽證,程序費時,務必及早辦理。",
        en: "Most visitors need a visa arranged in advance — the process is slow, so apply early.",
      },
      {
        zh: "對外交通幾乎全靠諾魯航空,主要經布里斯本轉機,班次少要提前訂位。",
        en: "Nauru Airlines is virtually the only way in, mainly via Brisbane — flights are few, so book ahead.",
      },
      {
        zh: "島上旅館屈指可數,住宿與租車都要提早安排。",
        en: "Hotels can be counted on one hand; arrange lodging and car hire well in advance.",
      },
      {
        zh: "通用澳幣,刷卡點有限,建議攜帶現金。",
        en: "The Australian dollar is used and card acceptance is limited — carry cash.",
      },
    ],
  },
  {
    id: "PLW",
    name: { zh: "帛琉", en: "Palau" },
    capital: { zh: "恩吉魯穆德", en: "Ngerulmud" },
    flag: "🇵🇼",
    region: "oceania",
    center: { lat: 7.5, lng: 134.6 },
    intro: {
      zh: "西太平洋 300 多座島嶼組成的海洋國家,蘑菇狀的洛克群島與翡翠色潟湖被列為世界遺產,「藍角」等潛點是潛水者心中的聖地。它率先設立全球第一個鯊魚保護區,以海洋保育先鋒之姿聞名於世。",
      en: "An ocean nation of 300-plus western Pacific islands, where the mushroom-shaped Rock Islands and their emerald lagoon are World Heritage listed, and dive sites like Blue Corner are pilgrimage spots for divers. It created the world's first shark sanctuary, earning fame as a marine-conservation pioneer.",
    },
    history: {
      zh: "先民約三千年前自東南亞遷入定居。1885 年起歸西班牙統治,1899 年被賣給德國,一戰後由日本託管,科羅爾成為日本「南洋廳」的行政中心,曾發展為繁華市街。1944 年的佩里琉戰役是太平洋戰爭最慘烈的戰鬥之一。戰後由美國託管,1994 年獨立並與美國簽訂自由聯繫條約,由美方負責防務。近年以嚴格的海洋保育政策在國際舞台上獨樹一幟。",
      en: "Settlers from Southeast Asia arrived some 3,000 years ago. Spain ruled from 1885, sold the islands to Germany in 1899, and after WWI Japan governed under a League mandate, making Koror the bustling seat of its South Seas administration. The 1944 Battle of Peleliu ranks among the Pacific War's most brutal. After US trusteeship, Palau became independent in 1994 under a Compact of Free Association, with the US handling defense. Its bold marine-conservation policies now set it apart on the world stage.",
    },
    cities: [
      {
        name: { zh: "科羅爾", en: "Koror" },
        blurb: {
          zh: "全國最大城市與商業中心,也是前往洛克群島的基地。",
          en: "The largest town and commercial hub — and the base for Rock Islands trips.",
        },
        trivia: {
          question: {
            zh: "日本統治時期(1919 至 1945 年),科羅爾是日本哪個殖民行政機構的所在地?",
            en: "Under Japanese rule (1919–1945), Koror was the seat of which Japanese colonial administration?",
          },
          options: [
            { zh: "南洋廳", en: "The South Seas Government (Nan'yo-cho)" },
            { zh: "台灣總督府", en: "The Government-General of Taiwan" },
            { zh: "關東都督府", en: "The Kwantung Government-General" },
            { zh: "樺太廳", en: "The Karafuto Agency" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "日本受國際聯盟委任統治密克羅尼西亞群島,行政中樞「南洋廳」設於科羅爾,當時居住的日本人一度多於帛琉人。",
            en: "Japan governed Micronesia under a League of Nations mandate from its South Seas Government headquartered in Koror — where Japanese residents once outnumbered Palauans.",
          },
        },
      },
      {
        name: { zh: "恩吉魯穆德", en: "Ngerulmud" },
        blurb: {
          zh: "2006 年啟用的新首都,國會大廈矗立在梅萊凱奧克州的山丘上。",
          en: "The purpose-built capital since 2006, its capitol crowning a hill in Melekeok state.",
        },
        trivia: {
          question: {
            zh: "2006 年取代科羅爾成為帛琉首都的恩吉魯穆德,以什麼特點聞名?",
            en: "Ngerulmud replaced Koror as Palau's capital in 2006. What is it known for?",
          },
          options: [
            {
              zh: "它是全球人口最少的國家首都之一,周邊居民僅數百人",
              en: "It is among the least populous national capitals on Earth, with only a few hundred people nearby",
            },
            { zh: "它是海拔最高的島嶼首都", en: "It is the highest-altitude island capital" },
            { zh: "它是大洋洲最古老的城市", en: "It is Oceania's oldest city" },
            { zh: "它是唯一建在水上的首都", en: "It is the only capital built on stilts over water" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這裡幾乎只有仿美國國會山莊風格的政府建築群,日常商業與人口仍集中在科羅爾。",
            en: "Little stands here beyond a capitol complex modeled on Washington's — daily life and commerce remain centered in Koror.",
          },
        },
      },
      {
        name: { zh: "佩里琉", en: "Peleliu" },
        blurb: {
          zh: "南端小島,二戰戰場遺跡與純淨潛點並存。",
          en: "A small southern island where WWII battlefields meet pristine dive sites.",
        },
        trivia: {
          question: {
            zh: "1944 年的佩里琉戰役,美軍指揮官原本預估幾天就能結束,結果實際打了多久?",
            en: "US commanders predicted the 1944 Battle of Peleliu would be over in days. How long did it actually last?",
          },
          options: [
            { zh: "原估數天,實際打了兩個多月", en: "Predicted days — it dragged on for over two months" },
            { zh: "如預期三天就結束", en: "Three days, as predicted" },
            { zh: "只花了一個星期", en: "Just one week" },
            { zh: "拖了整整一年", en: "A full year" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "日軍憑珊瑚岩洞穴工事頑抗,戰事從 9 月中打到 11 月底,傷亡慘重;島上至今保留坦克、碉堡等大量遺跡。",
            en: "Japanese defenders fought from coral-cave fortifications until late November, at terrible cost; tanks, bunkers, and relics still dot the island.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2009 年帛琉設立全球第一個鯊魚保護區;2017 年起入境旅客須在護照上簽署「帛琉誓詞」,承諾保護環境,為世界首創。",
        en: "Palau created the world's first shark sanctuary in 2009, and since 2017 arriving visitors must sign the 'Palau Pledge' stamped in their passports — a world first in eco-commitment.",
      },
      {
        zh: "帛琉是中華民國(台灣)的邦交國,1999 年建交,兩地曾有定期直航往來。",
        en: "Palau is a diplomatic ally of Taiwan (the Republic of China); ties date from 1999, and direct flights have linked the two.",
      },
    ],
    climate: {
      zh: "熱帶雨林氣候,終年約 27 至 31 度,濕度高;7 至 10 月降雨較多,位於颱風主要路徑邊緣,直接侵襲相對少見。",
      en: "Tropical rainforest — 27–31°C and humid year-round, wettest from July to October. Sitting on the edge of typhoon tracks, direct hits are relatively rare.",
    },
    travelTips: [
      {
        zh: "前往洛克群島、水母湖等海域需購買科羅爾州許可證,出海前由業者代辦或自行確認。",
        en: "Rock Islands and Jellyfish Lake trips require Koror State permits — confirm your operator arranges them.",
      },
      {
        zh: "水母湖的黃金水母族群數量會波動,開放狀況行前先查詢。",
        en: "Jellyfish Lake's golden jellyfish population fluctuates; check whether it is open before you go.",
      },
      {
        zh: "帛琉禁售含氧苯酮等傷害珊瑚成分的防曬乳,請攜帶珊瑚友善配方。",
        en: "Palau bans sunscreens with reef-toxic ingredients like oxybenzone — pack a reef-safe formula.",
      },
      {
        zh: "通用美元,潛水行程熱門,旺季的船位與導潛要提早預訂。",
        en: "The US dollar is the currency, and dive boats fill fast — book spots and guides early in high season.",
      },
    ],
  },
  {
    id: "FSM",
    name: { zh: "密克羅尼西亞聯邦", en: "Federated States of Micronesia" },
    capital: { zh: "帕利基爾", en: "Palikir" },
    flag: "🇫🇲",
    region: "oceania",
    center: { lat: 6.9, lng: 158.2 },
    intro: {
      zh: "607 座島嶼橫跨 2700 公里赤道海域,由雅浦、楚克、波納佩、科斯雷四州組成的聯邦。這裡有神祕的南馬都爾水上古城、沉睡著日本艦隊的楚克潟湖,以及仍在使用巨大石幣的雅浦島,是太平洋文化最多元的角落之一。",
      en: "A federation of 607 islands spanning 2,700 km of equatorial ocean, in four states: Yap, Chuuk, Pohnpei, and Kosrae. Home to the mysterious water-borne ruins of Nan Madol, the sunken Japanese fleet of Chuuk Lagoon, and Yap's giant stone money still in use — one of the Pacific's most culturally varied corners.",
    },
    history: {
      zh: "各島定居史可上溯數千年,波納佩島外海的南馬都爾人工島城約於 13 世紀起由紹德雷爾王朝建造。19 世紀末歸西班牙,1899 年賣給德國,一戰後由日本託管並大力開發。1944 年美軍「冰雹行動」空襲重創停泊楚克潟湖的日本艦隊。戰後成為美國託管的太平洋島嶼領地一部分,1979 年四州制憲組成聯邦,1986 年依自由聯繫條約獨立,防務由美國承擔,1991 年加入聯合國。",
      en: "Settlement goes back millennia; the artificial-islet city of Nan Madol off Pohnpei rose under the Saudeleur dynasty from around the 13th century. Spain ruled until selling to Germany in 1899; Japan governed after WWI and developed the islands heavily. In 1944, US Operation Hailstone devastated the Japanese fleet anchored in Chuuk Lagoon. After US trusteeship, four states adopted a federal constitution in 1979, gained independence in 1986 under a Compact of Free Association with US defense guarantees, and joined the UN in 1991.",
    },
    cities: [
      {
        name: { zh: "帕利基爾(波納佩島)", en: "Palikir (Pohnpei)" },
        blurb: {
          zh: "建於波納佩雨林間的聯邦首都,鄰近南馬都爾遺跡。",
          en: "The federal capital set in Pohnpei's rainforest, near the ruins of Nan Madol.",
        },
        trivia: {
          question: {
            zh: "波納佩島東南海上的南馬都爾遺跡被稱為「太平洋的威尼斯」,原因是什麼?",
            en: "The ruins of Nan Madol off southeast Pohnpei are called the 'Venice of the Pacific'. Why?",
          },
          options: [
            {
              zh: "它由近百座人工小島與水道組成,以巨大玄武岩柱堆砌而成",
              en: "It consists of nearly a hundred artificial islets and canals, built from massive basalt columns",
            },
            { zh: "它曾是跨洋貿易的金融中心", en: "It was a financial hub of trans-ocean trade" },
            { zh: "每年舉辦水上面具嘉年華", en: "It hosts an annual masked water carnival" },
            { zh: "它建在潟湖中的木樁之上", en: "It stands on wooden piles in a lagoon" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "紹德雷爾王朝以數十萬噸柱狀玄武岩在礁盤上築起水上都城,如何搬運巨石至今成謎,2016 年列入世界遺產。",
            en: "The Saudeleur dynasty raised a city of hundreds of thousands of tons of columnar basalt on the reef flat — how the stones were moved remains a mystery. It became World Heritage in 2016.",
          },
        },
      },
      {
        name: { zh: "韋諾(楚克)", en: "Weno (Chuuk)" },
        blurb: {
          zh: "楚克州首府,環抱著世界聞名的沉船潛水潟湖。",
          en: "Chuuk's state capital, fronting a lagoon world-famous for wreck diving.",
        },
        trivia: {
          question: {
            zh: "楚克潟湖被潛水客稱為「沉船聖地」,湖底沉睡的主要是什麼?",
            en: "Divers call Chuuk Lagoon a wreck-diving mecca. What mainly lies on its bottom?",
          },
          options: [
            {
              zh: "數十艘二戰日本艦船與飛機,於 1944 年美軍空襲中被擊沉",
              en: "Dozens of WWII Japanese ships and aircraft, sunk in a 1944 US air raid",
            },
            { zh: "西班牙大帆船寶藏船隊", en: "A treasure fleet of Spanish galleons" },
            { zh: "鐵達尼號的姊妹艦", en: "A sister ship of the Titanic" },
            { zh: "冷戰時期的核潛艇", en: "Cold War nuclear submarines" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "楚克曾是日本聯合艦隊的重要錨地,1944 年「冰雹行動」兩天空襲擊沉大批艦船;船艙裡的戰車、卡車與器物成了水下博物館。",
            en: "Chuuk was a key anchorage of Japan's Combined Fleet; Operation Hailstone's two-day raid in 1944 sank scores of vessels, whose holds of tanks and trucks now form an underwater museum.",
          },
        },
      },
      {
        name: { zh: "科洛尼亞(雅浦)", en: "Colonia (Yap)" },
        blurb: {
          zh: "雅浦州首府,石幣銀行與傳統集會所文化保存完好。",
          en: "Yap's state capital, where stone-money banks and traditional meeting houses endure.",
        },
        trivia: {
          question: {
            zh: "雅浦島著名的巨大石幣「拉伊」,當年主要是從哪裡開採後運回島上的?",
            en: "Yap's famous giant stone money, 'rai', was mostly quarried where before being brought home?",
          },
          options: [
            {
              zh: "約 400 多公里外的帛琉,以獨木舟與竹筏渡海運回",
              en: "In Palau, over 400 km away, then ferried back by canoe and raft",
            },
            { zh: "島中央的火山口", en: "A volcanic crater in the island's center" },
            { zh: "菲律賓呂宋島", en: "Luzon in the Philippines" },
            { zh: "夏威夷群島", en: "The Hawaiian Islands" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "石幣以帛琉的結晶石灰岩鑿成,最大直徑可達 3 公尺以上;跨海取石的艱險程度,正是石幣價值的一部分。",
            en: "Rai were carved from crystalline limestone in Palau, some over 3 m across; the peril of the ocean voyage to fetch them is part of each stone's value.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "雅浦石幣就算沉入海底也能繼續交易——只要全村都記得它屬於誰,常被比喻為最早的「帳本式貨幣」。",
        en: "A rai stone can keep changing hands even after sinking to the sea floor — as long as the village remembers its owner, leading some to call it the earliest 'ledger currency'.",
      },
      {
        zh: "波納佩島是地球上最多雨的地方之一,山區年雨量可觀,島上瀑布與雨林因此格外茂盛。",
        en: "Pohnpei ranks among the rainiest places on Earth, its mountain interior soaked enough to feed lush rainforest and countless waterfalls.",
      },
    ],
    climate: {
      zh: "熱帶雨林氣候,終年約 26 至 31 度,濕度極高;波納佩與科斯雷雨量豐沛,此海域也是許多颱風的發源地,颱風多在生成後向西移動。",
      en: "Tropical rainforest — 26–31°C and very humid year-round, with Pohnpei and Kosrae drenched in rain. Many typhoons are born in these waters, usually tracking west after forming.",
    },
    travelTips: [
      {
        zh: "四州分散,島間主要靠聯合航空的「跳島航線」串連,班次少且常變動,行程要寬鬆。",
        en: "The four states are far apart, linked mainly by United's island-hopper route — flights are few and changeable, so keep plans loose.",
      },
      {
        zh: "楚克的沉船多屬深潛與艙內穿越,需具備相應潛水證照與經驗。",
        en: "Chuuk's wrecks often involve deep and penetration dives — bring the right certification and experience.",
      },
      {
        zh: "雅浦等地傳統規範嚴謹,進入村落先徵得同意,衣著保守為宜。",
        en: "Traditional codes run strong, especially on Yap — ask permission before entering villages and dress modestly.",
      },
      {
        zh: "通用美元,離開州首府後幾乎無法刷卡,現金要備足。",
        en: "The US dollar is used; outside state capitals cards rarely work, so carry cash.",
      },
    ],
  },
  {
    id: "MHL",
    name: { zh: "馬紹爾群島", en: "Marshall Islands" },
    capital: { zh: "馬久羅", en: "Majuro" },
    flag: "🇲🇭",
    region: "oceania",
    center: { lat: 7.1, lng: 171.05 },
    intro: {
      zh: "29 座環礁與 5 座珊瑚島排成兩列島鏈,散布在赤道以北的中太平洋。這裡是傳統「杖狀海圖」導航術的故鄉,也背負著比基尼環礁核試的沉重歷史;陸地平均海拔僅約 2 公尺,同樣站在海平面上升的最前線。",
      en: "Twenty-nine atolls and five coral islands in two parallel chains across the central Pacific north of the equator. Homeland of the traditional 'stick chart' navigation art, it also bears the heavy legacy of the Bikini Atoll nuclear tests — and with land averaging about 2 m above the sea, it too stands on the front line of rising oceans.",
    },
    history: {
      zh: "密克羅尼西亞人約兩千多年前定居,發展出以湧浪判位的高超航海術。群島之名來自 1788 年到訪的英國船長馬紹爾。1885 年成為德國保護地,一戰後由日本託管,1944 年美軍攻占瓜加林等地。1946 至 1958 年,美國在比基尼與埃內韋塔克環礁進行 67 次核試,居民被迫遷離、輻射影響延續至今。1979 年成立自治政府,1986 年依自由聯繫條約獨立,1991 年加入聯合國。",
      en: "Micronesians settled here over 2,000 years ago, mastering wave-pattern navigation. The islands take their name from British captain John Marshall, who visited in 1788. A German protectorate from 1885 and Japanese mandate after WWI, they were taken by US forces in 1944. From 1946 to 1958 the US conducted 67 nuclear tests at Bikini and Enewetak, displacing islanders with radiation legacies that persist today. Self-government came in 1979, independence under a Compact of Free Association in 1986, and UN membership in 1991.",
    },
    cities: [
      {
        name: { zh: "馬久羅", en: "Majuro" },
        blurb: {
          zh: "首都環礁,細長礁島圍著巨大潟湖,是全國政經中心。",
          en: "The capital atoll — a slender ring of islets around a vast lagoon, and the nation's hub.",
        },
        trivia: {
          question: {
            zh: "馬紹爾群島的兩列島鏈「拉塔克」與「拉利克」,名字分別是什麼意思?",
            en: "The Marshalls' two island chains are called Ratak and Ralik. What do the names mean?",
          },
          options: [
            { zh: "「日出」與「日落」", en: "'Sunrise' and 'sunset'" },
            { zh: "「南十字星」與「北極星」", en: "'Southern Cross' and 'North Star'" },
            { zh: "「珊瑚」與「火山」", en: "'Coral' and 'volcano'" },
            { zh: "「國王」與「王后」", en: "'King' and 'queen'" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "東側的拉塔克鏈意為「日出」,西側的拉利克鏈意為「日落」,首都馬久羅屬於日出鏈。",
            en: "The eastern Ratak chain means 'sunrise' and the western Ralik chain 'sunset'; Majuro belongs to the sunrise chain.",
          },
        },
      },
      {
        name: { zh: "瓜加林", en: "Kwajalein" },
        blurb: {
          zh: "擁有世界最大級潟湖的環礁,鄰島埃貝耶人口稠密。",
          en: "An atoll enclosing one of the world's largest lagoons, with densely settled Ebeye nearby.",
        },
        trivia: {
          question: {
            zh: "瓜加林環礁除了擁有世界最大級的潟湖,如今島上還設有什麼設施?",
            en: "Besides enclosing one of the world's largest lagoons, what facility occupies Kwajalein Atoll today?",
          },
          options: [
            {
              zh: "美軍的彈道飛彈防禦試驗場",
              en: "A US Army ballistic-missile defense test site",
            },
            { zh: "聯合國海洋研究總部", en: "The UN's ocean research headquarters" },
            { zh: "全球最大的海底電纜工廠", en: "The world's largest undersea cable factory" },
            { zh: "國際捕鯨委員會總部", en: "The International Whaling Commission headquarters" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "美軍自二戰後長期租用瓜加林,雷根彈道飛彈防禦試驗場以巨大潟湖作為飛彈試射的落區,基地屬管制區。",
            en: "Leased by the US since WWII, the Ronald Reagan Ballistic Missile Defense Test Site uses the huge lagoon as a splashdown range — the base is a restricted area.",
          },
        },
      },
      {
        name: { zh: "比基尼環礁", en: "Bikini Atoll" },
        blurb: {
          zh: "核試歷史的原點,如今是世界遺產與沉船潛水秘境。",
          en: "Ground zero of nuclear-test history — now a World Heritage site and remote wreck-diving destination.",
        },
        trivia: {
          question: {
            zh: "兩件式泳裝「比基尼」的名稱是怎麼來的?",
            en: "How did the two-piece 'bikini' swimsuit get its name?",
          },
          options: [
            {
              zh: "1946 年法國設計師以剛進行核試的比基尼環礁命名,借用其「爆炸性」話題",
              en: "In 1946 a French designer named it after Bikini Atoll, site of just-conducted nuclear tests, to borrow their 'explosive' impact",
            },
            { zh: "取自設計師本人的姓氏", en: "It was the designer's own surname" },
            { zh: "源自巴西一處海灘的名字", en: "It came from the name of a Brazilian beach" },
            { zh: "拉丁文「兩件式」的意思", en: "It is Latin for 'two pieces'" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "設計師路易·雷阿爾預期新泳裝會像核試一樣震撼世界,便借用了當時登上頭條的比基尼環礁之名。",
            en: "Designer Louis Réard expected his swimsuit to shock the world like the atomic tests then in the headlines — so he borrowed the atoll's name.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬紹爾傳統航海家以椰枝與貝殼編成「杖狀海圖」記錄湧浪與島嶼位置,不靠任何儀器就能橫渡大洋。",
        en: "Marshallese navigators wove 'stick charts' of palm ribs and shells to encode swell patterns and island positions — crossing open ocean with no instruments at all.",
      },
      {
        zh: "馬紹爾群島是中華民國(台灣)的邦交國,兩國自 1998 年建交。",
        en: "The Marshall Islands is a diplomatic ally of Taiwan (the Republic of China), with relations established in 1998.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,終年約 27 至 31 度;北部環礁較乾燥、南部多雨,位於颱風發源海域邊緣,成熟颱風直襲相對少見。",
      en: "Tropical maritime, 27–31°C year-round — drier in the northern atolls, wetter in the south. Lying near where typhoons form, it is seldom struck by mature storms.",
    },
    travelTips: [
      {
        zh: "通用美元與美式插座,馬久羅以外幾乎無法刷卡,現金務必備足。",
        en: "US dollars and US-style plugs are standard; outside Majuro cards barely work, so bring plenty of cash.",
      },
      {
        zh: "瓜加林為美軍管制區,未經許可不得進入;一般旅客多以馬久羅為活動範圍。",
        en: "Kwajalein is a restricted US military area — entry requires authorization, so most visitors stay around Majuro.",
      },
      {
        zh: "比基尼環礁的沉船潛水需參加專門包船行程並取得許可,且對潛水資歷要求高。",
        en: "Diving Bikini Atoll's wrecks means a dedicated liveaboard charter with permits — and demanding experience requirements.",
      },
      {
        zh: "外島交通仰賴小飛機與不定期補給船,行程安排要保留大量彈性。",
        en: "Outer islands rely on small planes and irregular supply ships — keep your schedule very flexible.",
      },
    ],
  },
];
