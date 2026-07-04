import type { Country } from "../types";

// Africa (batch 3): 13 countries. Content shape is LLM-generatable — see types.ts.

export const AFRICA_MORE3: Country[] = [
  {
    id: "ZMB",
    name: { zh: "尚比亞", en: "Zambia" },
    capital: { zh: "路沙卡", en: "Lusaka" },
    flag: "🇿🇲",
    region: "africa",
    center: { lat: -13.5, lng: 27.8 },
    intro: {
      zh: "南部非洲的內陸高原國家,尚比西河貫穿南境,與辛巴威共享維多利亞瀑布。銅礦是經濟命脈,銅帶省的礦城支撐全國出口;南盧安瓜與下尚比西國家公園則以步行獵遊聞名,是非洲野性最完整的荒野之一。",
      en: "A landlocked plateau nation in southern Africa, crossed by the Zambezi River and sharing Victoria Falls with Zimbabwe. Copper drives the economy through the Copperbelt's mining towns, while South Luangwa and Lower Zambezi national parks are famed for walking safaris in some of Africa's wildest country.",
    },
    history: {
      zh: "班圖民族數百年前在此建立隆達、洛齊等王國,19 世紀末英國南非公司取得控制權,成為英屬「北羅德西亞」,銅礦開採自 1920 年代起塑造了經濟。1953 年被併入羅德西亞與尼亞薩蘭聯邦,1964 年獨立建國,首任總統卡翁達推行一黨制直到 1991 年開放多黨選舉。銅價起伏牽動國運,近年並以和平的政黨輪替成為區域民主範例。",
      en: "Bantu peoples founded kingdoms such as the Lunda and Lozi centuries ago. The British South Africa Company took control in the late 19th century, creating Northern Rhodesia, where copper mining shaped the economy from the 1920s. After a decade in the Federation of Rhodesia and Nyasaland, Zambia gained independence in 1964 under Kenneth Kaunda, whose one-party rule lasted until multiparty elections in 1991. Copper prices still sway its fortunes, and peaceful transfers of power have made it a regional democratic example.",
    },
    cities: [
      {
        name: { zh: "路沙卡", en: "Lusaka" },
        blurb: {
          zh: "高原上的首都與最大城市,是全國交通與商業的十字路口。",
          en: "The plateau capital and largest city, the country's commercial and transport crossroads.",
        },
        trivia: {
          question: {
            zh: "尚比亞在 1964 年獨立之前,作為英國殖民地時的名稱是什麼?",
            en: "Before independence in 1964, Zambia was a British territory known by what name?",
          },
          options: [
            { zh: "北羅德西亞", en: "Northern Rhodesia" },
            { zh: "南羅德西亞", en: "Southern Rhodesia" },
            { zh: "尼亞薩蘭", en: "Nyasaland" },
            { zh: "貝專納", en: "Bechuanaland" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "北羅德西亞得名自殖民者塞西爾·羅德斯;南羅德西亞則是今天的辛巴威。",
            en: "Northern Rhodesia was named after Cecil Rhodes; Southern Rhodesia became today's Zimbabwe.",
          },
        },
      },
      {
        name: { zh: "利文斯頓", en: "Livingstone" },
        blurb: {
          zh: "維多利亞瀑布尚比亞側的門戶小城,以探險家李文斯頓命名。",
          en: "The gateway town on the Zambian side of Victoria Falls, named after explorer David Livingstone.",
        },
        trivia: {
          question: {
            zh: "維多利亞瀑布的當地名稱「Mosi-oa-Tunya」是什麼意思?",
            en: "What does 'Mosi-oa-Tunya', the local name for Victoria Falls, mean?",
          },
          options: [
            { zh: "打雷的煙霧", en: "The smoke that thunders" },
            { zh: "眾神的水簾", en: "The curtain of the gods" },
            { zh: "彩虹之河", en: "The river of rainbows" },
            { zh: "大河的怒吼", en: "The roar of the great river" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瀑布激起的水霧遠在數十公里外可見,轟鳴如雷,因而得名「打雷的煙霧」。",
            en: "The falls' spray rises like smoke visible from kilometers away, with a thunderous roar — hence the name.",
          },
        },
      },
      {
        name: { zh: "基特韋", en: "Kitwe" },
        blurb: {
          zh: "北部礦業重鎮,與恩多拉並列為銅帶省的雙核心。",
          en: "A northern mining hub that, with Ndola, anchors the Copperbelt Province.",
        },
        trivia: {
          question: {
            zh: "基特韋所在、支撐尚比亞出口經濟的礦業地帶稱為什麼?",
            en: "Kitwe sits in which mining region that anchors Zambia's export economy?",
          },
          options: [
            { zh: "銅帶(Copperbelt)", en: "The Copperbelt" },
            { zh: "金礁地帶", en: "The Gold Reef" },
            { zh: "鑽石走廊", en: "The Diamond Corridor" },
            { zh: "鐵礦三角", en: "The Iron Triangle" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "銅帶省與剛果民主共和國接壤,銅礦長期占尚比亞出口收入的大宗。",
            en: "The Copperbelt borders the DR Congo, and copper has long dominated Zambia's export earnings.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "尚比西河上的卡里巴水庫按蓄水量計是全球最大的人工水庫。",
        en: "Lake Kariba on the Zambezi is the world's largest man-made reservoir by volume.",
      },
      {
        zh: "南盧安瓜國家公園被視為「步行獵遊」的發源地。",
        en: "South Luangwa National Park is considered the birthplace of the walking safari.",
      },
    ],
    climate: {
      zh: "熱帶高原氣候,因海拔而溫和。5 至 8 月涼爽乾燥,9 至 11 月炎熱,11 月至隔年 4 月為雨季,瀑布水量在 3 至 5 月最壯觀。",
      en: "Tropical but tempered by altitude: cool and dry May–August, hot September–November, rainy November–April. The falls peak between March and May.",
    },
    travelTips: [
      {
        zh: "看維多利亞瀑布,3 至 5 月水量最磅礴;9 至 11 月枯水期則可能開放「魔鬼池」體驗。",
        en: "Victoria Falls is fullest March–May; in the low-water months (September–November) the Devil's Pool may open.",
      },
      {
        zh: "全國多為瘧疾流行區,防蚊措施與預防用藥不可少。",
        en: "Most of the country is a malaria zone — bring repellent and consider prophylaxis.",
      },
      {
        zh: "可留意 KAZA 聯合簽證,一簽可同遊尚比亞與辛巴威兩側瀑布。",
        en: "Look into the KAZA UniVisa, which covers both the Zambian and Zimbabwean sides of the falls.",
      },
    ],
  },
  {
    id: "MWI",
    name: { zh: "馬拉威", en: "Malawi" },
    capital: { zh: "里朗威", en: "Lilongwe" },
    flag: "🇲🇼",
    region: "africa",
    center: { lat: -13.5, lng: 34.3 },
    intro: {
      zh: "東非大裂谷南端的狹長內陸國,國土三分之一被馬拉威湖占據。這裡沒有大型野生動物觀光的名氣,卻以居民的友善被暱稱為「非洲溫暖之心」;湖中清澈水域棲息著數百種特有慈鯛,是淡水潛水勝地。",
      en: "A slender landlocked country at the southern end of the Great Rift Valley, with a third of its territory covered by Lake Malawi. Nicknamed 'the Warm Heart of Africa' for its friendly people, its clear lake waters shelter hundreds of endemic cichlid fish, making it a freshwater diving haven.",
    },
    history: {
      zh: "馬拉維王國曾於 15 至 18 世紀統治此區,19 世紀探險家李文斯頓抵達湖畔後,蘇格蘭傳教士相繼設立據點,1891 年成為英屬「尼亞薩蘭」保護地。1953 年被併入羅德西亞與尼亞薩蘭聯邦,引發強烈反抗,1964 年獨立。首任總統班達實行終身獨裁近三十年,1994 年首次多黨選舉後和平轉型,至今仍是世界最貧窮的國家之一,經濟倚重菸草與農業。",
      en: "The Maravi Empire ruled the region from the 15th to 18th centuries. After Livingstone reached the lake, Scottish missionaries followed, and Britain declared the Nyasaland protectorate in 1891. Forced into the Federation of Rhodesia and Nyasaland in 1953, it won independence in 1964. Hastings Banda ruled as dictator for nearly three decades until multiparty elections in 1994 brought a peaceful transition. It remains one of the world's poorest countries, reliant on tobacco and farming.",
    },
    cities: [
      {
        name: { zh: "里朗威", en: "Lilongwe" },
        blurb: {
          zh: "1975 年起的新首都,規劃整齊的政府區與熱鬧的舊城區並存。",
          en: "The purpose-built capital since 1975, pairing an orderly government district with a bustling Old Town.",
        },
        trivia: {
          question: {
            zh: "里朗威在 1975 年取代哪座城市,成為馬拉威的首都?",
            en: "In 1975 Lilongwe replaced which city as Malawi's capital?",
          },
          options: [
            { zh: "松巴", en: "Zomba" },
            { zh: "布蘭泰爾", en: "Blantyre" },
            { zh: "姆祖祖", en: "Mzuzu" },
            { zh: "卡龍加", en: "Karonga" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "殖民時期的首都設於南部山城松巴,獨立後為平衡區域發展而遷都中部的里朗威。",
            en: "Colonial-era Zomba in the south was the old capital; the move to central Lilongwe aimed to balance regional development.",
          },
        },
      },
      {
        name: { zh: "布蘭泰爾", en: "Blantyre" },
        blurb: {
          zh: "南部的商業與金融中心,是東非最早的歐洲人聚落之一。",
          en: "The southern commercial and financial hub, one of the oldest European settlements in East Africa.",
        },
        trivia: {
          question: {
            zh: "布蘭泰爾的城市名稱來自哪位人物的蘇格蘭出生地?",
            en: "Blantyre is named after the Scottish birthplace of which figure?",
          },
          options: [
            { zh: "探險家大衛·李文斯頓", en: "Explorer David Livingstone" },
            { zh: "殖民者塞西爾·羅德斯", en: "Colonialist Cecil Rhodes" },
            { zh: "記者亨利·史丹利", en: "Journalist Henry Stanley" },
            { zh: "探險家蒙哥·帕克", en: "Explorer Mungo Park" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "李文斯頓生於蘇格蘭的布蘭泰爾小鎮,傳教士以此命名據點,後來發展成馬拉威的商業首府。",
            en: "Livingstone was born in Blantyre, Scotland; missionaries named their station after it, and it grew into Malawi's commercial capital.",
          },
        },
      },
      {
        name: { zh: "姆祖祖", en: "Mzuzu" },
        blurb: {
          zh: "北部區域的門戶城市,鄰近湖畔度假地恩卡塔灣。",
          en: "The gateway city of the Northern Region, close to the lakeside resort of Nkhata Bay.",
        },
        trivia: {
          question: {
            zh: "姆祖祖周邊的北部高地以生產哪種作物聞名,並以城市為名銷售?",
            en: "The highlands around Mzuzu are known for growing which crop, sold under the city's name?",
          },
          options: [
            { zh: "咖啡", en: "Coffee" },
            { zh: "可可", en: "Cocoa" },
            { zh: "香草", en: "Vanilla" },
            { zh: "橄欖", en: "Olives" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「姆祖祖咖啡」由北部小農合作社種植,是馬拉威最具代表性的精品咖啡品牌。",
            en: "Mzuzu Coffee, grown by smallholder cooperatives in the north, is Malawi's best-known specialty coffee brand.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬拉威湖的魚種比世界任何湖泊都多,慈鯛就有數百種且多為特有種。",
        en: "Lake Malawi holds more fish species than any other lake on Earth, including hundreds of endemic cichlids.",
      },
      {
        zh: "馬拉威因人民友善好客,被稱為「非洲溫暖之心」。",
        en: "Malawi is nicknamed 'the Warm Heart of Africa' for its people's hospitality.",
      },
    ],
    climate: {
      zh: "亞熱帶氣候,11 月至隔年 4 月為雨季,5 至 10 月乾燥。湖畔低地炎熱,松巴高原與北部高地涼爽宜人。",
      en: "Subtropical: rainy November–April, dry May–October. The lakeshore is hot while the Zomba Plateau and northern highlands stay pleasantly cool.",
    },
    travelTips: [
      {
        zh: "馬拉威湖部分水域有血吸蟲風險,下水前先確認當地建議。",
        en: "Bilharzia is present in parts of Lake Malawi — check local advice before swimming.",
      },
      {
        zh: "5 至 10 月乾季路況與天氣最適合旅行。",
        en: "The May–October dry season offers the best weather and road conditions.",
      },
      {
        zh: "基礎設施有限,長途移動請預留充裕時間並攜帶現金。",
        en: "Infrastructure is limited — allow extra time for long journeys and carry cash.",
      },
    ],
  },
  {
    id: "MOZ",
    name: { zh: "莫三比克", en: "Mozambique" },
    capital: { zh: "馬普托", en: "Maputo" },
    flag: "🇲🇿",
    region: "africa",
    center: { lat: -17.5, lng: 35.5 },
    intro: {
      zh: "印度洋岸綿延約 2,500 公里的東南非國家,以葡萄牙語為官方語言。巴扎魯托與基林巴群島的白沙潟湖是潛水天堂,首都馬普托保留了葡式建築與咖啡館文化,海鮮料理中的辣味烤蝦聞名區域。",
      en: "A southeast African nation with roughly 2,500 km of Indian Ocean coastline and Portuguese as its official language. The Bazaruto and Quirimbas archipelagos are diving paradises of white sand and lagoons, while Maputo keeps its Portuguese architecture, café culture, and famous peri-peri prawns.",
    },
    history: {
      zh: "斯瓦希里與阿拉伯商人千年前即沿岸貿易,1498 年達伽馬抵達後,葡萄牙人逐步建立據點,殖民統治長達近五個世紀。1964 年解放陣線(FRELIMO)發動獨立戰爭,1975 年獨立,隨即陷入政府軍與抵抗運動(RENAMO)間長達十五年的內戰,1992 年羅馬和約才告終結。此後經濟穩步重建,近年因北部天然氣田開發受到矚目,但也面臨氣旋災害與地區衝突的挑戰。",
      en: "Swahili and Arab traders worked this coast for a millennium before Vasco da Gama arrived in 1498, beginning nearly five centuries of Portuguese rule. FRELIMO launched an independence war in 1964, winning freedom in 1975, but a fifteen-year civil war with RENAMO followed until the 1992 Rome peace accord. Reconstruction has been steady, with recent attention on northern gas fields, though cyclones and regional conflict remain challenges.",
    },
    cities: [
      {
        name: { zh: "馬普托", en: "Maputo" },
        blurb: {
          zh: "南端的港灣首都,棋盤街道旁是葡式老建築與雅緻咖啡館。",
          en: "The harbor capital in the far south, its grid streets lined with Portuguese-era buildings and cafés.",
        },
        trivia: {
          question: {
            zh: "馬普托在 1976 年改名之前,殖民時期的名稱是什麼?",
            en: "Before being renamed in 1976, Maputo was known by what colonial name?",
          },
          options: [
            { zh: "洛倫索馬貴斯", en: "Lourenço Marques" },
            { zh: "索爾茲伯里", en: "Salisbury" },
            { zh: "利奧波德維爾", en: "Léopoldville" },
            { zh: "巴瑟斯特", en: "Bathurst" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "舊名紀念 16 世紀葡萄牙商人洛倫索·馬貴斯,獨立後改以當地河流與酋長之名「馬普托」。",
            en: "The old name honored 16th-century Portuguese trader Lourenço Marques; after independence it took the local name Maputo.",
          },
        },
      },
      {
        name: { zh: "貝拉", en: "Beira" },
        blurb: {
          zh: "中部大港,是連接內陸國家的「貝拉走廊」出海口。",
          en: "The major central port, the ocean terminus of the Beira Corridor serving the landlocked interior.",
        },
        trivia: {
          question: {
            zh: "貝拉港的鐵路與公路走廊,主要為哪個內陸鄰國提供最近的出海口?",
            en: "Beira's rail and road corridor provides the nearest sea outlet mainly for which landlocked neighbor?",
          },
          options: [
            { zh: "辛巴威", en: "Zimbabwe" },
            { zh: "波札那", en: "Botswana" },
            { zh: "賴索托", en: "Lesotho" },
            { zh: "蒲隆地", en: "Burundi" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "貝拉走廊自殖民時期即連接辛巴威(舊羅德西亞)腹地,至今仍是其重要的貿易生命線。",
            en: "The Beira Corridor has linked Zimbabwe's hinterland to the sea since colonial times and remains a key trade lifeline.",
          },
        },
      },
      {
        name: { zh: "楠普拉", en: "Nampula" },
        blurb: {
          zh: "北部最大城市,是前往世界遺產莫三比克島的交通樞紐。",
          en: "The largest northern city, the transport hub for reaching the World Heritage Island of Mozambique.",
        },
        trivia: {
          question: {
            zh: "從楠普拉可前往哪座列入世界遺產、也是國名由來的島嶼?",
            en: "From Nampula travelers reach which World Heritage island that gave the country its name?",
          },
          options: [
            { zh: "莫三比克島", en: "Island of Mozambique" },
            { zh: "桑吉巴島", en: "Zanzibar" },
            { zh: "戈雷島", en: "Gorée Island" },
            { zh: "拉穆島", en: "Lamu" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "莫三比克島曾是葡屬東非的首府,石造老城 1991 年列入世界遺產,「莫三比克」國名即源於此島。",
            en: "The island was the capital of Portuguese East Africa; its stone town became a World Heritage Site in 1991, and the country is named after it.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "莫三比克國旗上有一把 AK-47 步槍,是全球唯一出現現代步槍的國旗。",
        en: "Mozambique's flag features an AK-47 — the only national flag with a modern rifle.",
      },
      {
        zh: "官方語言是葡萄牙語,莫三比克也是大英國協中少數不曾被英國殖民的成員。",
        en: "Portuguese is the official language, and Mozambique is one of the few Commonwealth members never colonized by Britain.",
      },
    ],
    climate: {
      zh: "熱帶氣候,11 月至隔年 4 月炎熱多雨且偶有氣旋侵襲,5 至 10 月乾燥涼爽。沿海溼熱,內陸高地稍為溫和。",
      en: "Tropical: hot and rainy November–April with occasional cyclones, dry and cooler May–October. The coast is humid; inland highlands are milder.",
    },
    travelTips: [
      {
        zh: "官方語言為葡萄牙語,英語在觀光區以外不普及,學幾句基本用語很有幫助。",
        en: "Portuguese is the official language and English is limited outside tourist areas — a few basic phrases help.",
      },
      {
        zh: "11 至 4 月為氣旋季,行程宜避開;5 至 10 月是旅遊最佳時節。",
        en: "November–April is cyclone season; May–October is the best time to visit.",
      },
      {
        zh: "全境為瘧疾流行區,防蚊與預防用藥必備。",
        en: "The whole country is a malaria zone — repellent and prophylaxis are essential.",
      },
      {
        zh: "北部部分地區局勢不穩,行前查詢最新官方旅遊資訊。",
        en: "Parts of the far north are unstable — check the latest official travel advice before going.",
      },
    ],
  },
  {
    id: "ZWE",
    name: { zh: "辛巴威", en: "Zimbabwe" },
    capital: { zh: "哈拉雷", en: "Harare" },
    flag: "🇿🇼",
    region: "africa",
    center: { lat: -19.0, lng: 29.9 },
    intro: {
      zh: "南部非洲的內陸高原國,國名來自中世紀石城「大辛巴威」遺址。北界尚比西河上的維多利亞瀑布與萬基國家公園的大象群是觀光招牌;曾因惡性通膨登上全球頭條,如今仍在經濟重建的路上。",
      en: "A landlocked plateau country named after the medieval stone city of Great Zimbabwe. Victoria Falls on the Zambezi and the elephant herds of Hwange National Park headline its tourism, while the country still rebuilds from the hyperinflation that once made global news.",
    },
    history: {
      zh: "11 至 15 世紀,紹納人建立以大辛巴威為中心的王國,以黃金與象牙貿易繁榮。1890 年代塞西爾·羅德斯的英國南非公司入主,成為「南羅德西亞」;1965 年白人政權單方面宣布獨立,引發游擊戰爭,1980 年正式獨立並更名辛巴威。穆加比執政三十七年,2000 年代土地改革與經濟崩潰導致史上罕見的惡性通膨,2017 年政變後下台,國家持續在改革與困境間拉鋸。",
      en: "From the 11th to 15th centuries the Shona built a kingdom centered on Great Zimbabwe, rich from gold and ivory trade. Cecil Rhodes' British South Africa Company took over in the 1890s, creating Southern Rhodesia; a white-minority government declared independence unilaterally in 1965, sparking guerrilla war until true independence in 1980. Robert Mugabe ruled for 37 years; land seizures and economic collapse brought record hyperinflation in the 2000s, and since his 2017 ouster the country has wavered between reform and hardship.",
    },
    cities: [
      {
        name: { zh: "哈拉雷", en: "Harare" },
        blurb: {
          zh: "高原上的首都,以寬闊林蔭道與紫色藍花楹街景聞名。",
          en: "The highveld capital, known for broad avenues that blaze purple with jacaranda blooms.",
        },
        trivia: {
          question: {
            zh: "哈拉雷在 1982 年改名之前,殖民時期的名稱是什麼?",
            en: "Before being renamed in 1982, Harare was known by what colonial name?",
          },
          options: [
            { zh: "索爾茲伯里", en: "Salisbury" },
            { zh: "伊莉莎白維爾", en: "Élisabethville" },
            { zh: "史丹利維爾", en: "Stanleyville" },
            { zh: "利奧波德維爾", en: "Léopoldville" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "舊名紀念英國首相索爾茲伯里侯爵,獨立兩年後改為「哈拉雷」,取自當地酋長之名。",
            en: "The old name honored British PM Lord Salisbury; two years after independence it became Harare, after a local chief.",
          },
        },
      },
      {
        name: { zh: "布拉瓦約", en: "Bulawayo" },
        blurb: {
          zh: "第二大城與恩德貝勒文化中心,保有寬敞的殖民時期街廓。",
          en: "The second city and heart of Ndebele culture, with famously wide colonial-era streets.",
        },
        trivia: {
          question: {
            zh: "布拉瓦約近郊哪處花崗岩丘陵是世界遺產,以史前岩畫和「平衡石」地貌聞名?",
            en: "Which granite hills near Bulawayo are a World Heritage Site famed for rock art and balancing boulders?",
          },
          options: [
            { zh: "馬托博丘陵", en: "Matobo Hills" },
            { zh: "德拉肯斯堡山脈", en: "The Drakensberg" },
            { zh: "布蘭德山", en: "Brandberg Mountain" },
            { zh: "塔西利高原", en: "Tassili n'Ajjer" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬托博丘陵有數千年的桑人岩畫與奇特的平衡巨石,塞西爾·羅德斯也葬於此地山頂。",
            en: "Matobo holds millennia of San rock art and surreal balancing rocks; Cecil Rhodes is buried on one of its summits.",
          },
        },
      },
      {
        name: { zh: "維多利亞瀑布城", en: "Victoria Falls" },
        blurb: {
          zh: "以瀑布為名的觀光小鎮,高空彈跳與峽谷泛舟的冒險之都。",
          en: "The tourist town named for the falls, an adventure capital of bungee jumps and gorge rafting.",
        },
        trivia: {
          question: {
            zh: "維多利亞瀑布位於哪條河流之上?",
            en: "Victoria Falls lies on which river?",
          },
          options: [
            { zh: "尚比西河", en: "The Zambezi" },
            { zh: "林波波河", en: "The Limpopo" },
            { zh: "奧卡萬戈河", en: "The Okavango" },
            { zh: "橘河", en: "The Orange River" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尚比西河在此驟然跌入玄武岩裂谷,形成寬約 1.7 公里的世界最大瀑布水幕之一。",
            en: "The Zambezi plunges into a basalt chasm here, forming a curtain of water about 1.7 km wide — among the world's largest.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2008 年惡性通膨最嚴重時,辛巴威發行過面額一百兆的鈔票,如今成了收藏品。",
        en: "At the peak of hyperinflation Zimbabwe printed a 100-trillion-dollar banknote, now a collector's item.",
      },
      {
        zh: "「辛巴威」在紹納語中意為「石頭房子」,指的是大辛巴威石城遺址。",
        en: "'Zimbabwe' means 'houses of stone' in Shona, referring to the Great Zimbabwe ruins.",
      },
    ],
    climate: {
      zh: "高原亞熱帶氣候,終年溫和。11 月至隔年 3 月為雨季,5 至 8 月乾季夜間涼冷,8 至 10 月乾熱,是觀賞野生動物的最佳時節。",
      en: "Subtropical highveld climate, mild year-round: rains November–March, cool dry nights May–August, and hot dry weather August–October — prime wildlife season.",
    },
    travelTips: [
      {
        zh: "當地現金短缺且多種貨幣並行,攜帶小面額美元最方便。",
        en: "Cash is scarce and multiple currencies circulate — small US dollar bills are most practical.",
      },
      {
        zh: "8 至 10 月乾季末,動物聚集水源,是萬基等公園獵遊的黃金期。",
        en: "Late dry season (August–October) concentrates wildlife at waterholes — the best time for Hwange safaris.",
      },
      {
        zh: "可留意 KAZA 聯合簽證,方便同時造訪尚比亞側的瀑布。",
        en: "Consider the KAZA UniVisa to visit the Zambian side of the falls as well.",
      },
    ],
  },
  {
    id: "BWA",
    name: { zh: "波札那", en: "Botswana" },
    capital: { zh: "嘉柏隆里", en: "Gaborone" },
    flag: "🇧🇼",
    region: "africa",
    center: { lat: -22.3, lng: 24.7 },
    intro: {
      zh: "喀拉哈里沙漠上的內陸國,以鑽石財富與穩定民主著稱,是非洲治理的模範生。奧卡萬戈三角洲每年被洪水注入沙漠,化為動物天堂;喬貝國家公園則擁有全球數一數二的大象群,主打高價低量的生態旅遊。",
      en: "A landlocked country on the Kalahari, renowned for diamond wealth and stable democracy — a model of African governance. Each year floodwaters turn the Okavango Delta into a desert oasis teeming with wildlife, while Chobe National Park hosts one of the world's largest elephant populations.",
    },
    history: {
      zh: "茨瓦納各酋邦長期分治此地,1885 年在酋長們主動尋求保護下成為英屬「貝專納」保護地,免於被併入南非。1966 年和平獨立,首任總統塞雷茨·卡馬奠定民主與法治;翌年發現鑽石礦,政府與戴比爾斯合資開採並將收益投入教育與基礎建設,使波札那從世界最貧國之一躍升為中高所得國家,並保持連續數十年的多黨民主與經濟成長。",
      en: "Long ruled by Tswana chiefdoms, the territory became the British Bechuanaland Protectorate in 1885 — at the chiefs' own request, to avoid absorption into South Africa. Independence came peacefully in 1966 under Seretse Khama, who cemented democracy and rule of law. Diamonds were found the next year; a joint venture with De Beers funneled revenue into schools and infrastructure, lifting Botswana from among the world's poorest nations to upper-middle income with decades of unbroken multiparty democracy.",
    },
    cities: [
      {
        name: { zh: "嘉柏隆里", en: "Gaborone" },
        blurb: {
          zh: "獨立前夕平地而起的計畫首都,如今是南部非洲成長最快的城市之一。",
          en: "A planned capital built from scratch on the eve of independence, now one of southern Africa's fastest-growing cities.",
        },
        trivia: {
          question: {
            zh: "波札那在 1966 年獨立之前,作為英國保護地時的名稱是什麼?",
            en: "Before independence in 1966, Botswana was a British protectorate known by what name?",
          },
          options: [
            { zh: "貝專納", en: "Bechuanaland" },
            { zh: "巴蘇陀蘭", en: "Basutoland" },
            { zh: "史瓦濟蘭", en: "Swaziland" },
            { zh: "北羅德西亞", en: "Northern Rhodesia" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "貝專納意指「茨瓦納人之地」;巴蘇陀蘭則是賴索托的舊稱,兩者皆為英屬保護地。",
            en: "Bechuanaland means 'land of the Tswana'; Basutoland, another protectorate, became Lesotho.",
          },
        },
      },
      {
        name: { zh: "馬翁", en: "Maun" },
        blurb: {
          zh: "獵遊之都,輕航機從這裡起飛,深入水道縱橫的三角洲營地。",
          en: "The safari capital — light aircraft hop from here to camps deep in the delta's waterways.",
        },
        trivia: {
          question: {
            zh: "馬翁是前往哪個內陸三角洲的門戶?該三角洲的河水從未流入海洋。",
            en: "Maun is the gateway to which inland delta, whose waters never reach the sea?",
          },
          options: [
            { zh: "奧卡萬戈三角洲", en: "The Okavango Delta" },
            { zh: "尚比西三角洲", en: "The Zambezi Delta" },
            { zh: "尼日河三角洲", en: "The Niger Delta" },
            { zh: "蘇德溼地", en: "The Sudd" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "奧卡萬戈河的水在喀拉哈里沙漠中蒸發與滲漏殆盡,形成罕見的內陸三角洲,2014 年列為世界遺產。",
            en: "The Okavango's waters evaporate and seep away in the Kalahari, forming a rare inland delta — a World Heritage Site since 2014.",
          },
        },
      },
      {
        name: { zh: "法蘭西斯敦", en: "Francistown" },
        blurb: {
          zh: "東北部第二大城,發跡於 19 世紀的礦業熱潮。",
          en: "The second city in the northeast, born of a 19th-century mining boom.",
        },
        trivia: {
          question: {
            zh: "法蘭西斯敦在 19 世紀因發現什麼礦產而興起,掀起南部非洲最早的開採熱潮之一?",
            en: "Francistown boomed in the 19th century after the discovery of what, in one of southern Africa's earliest rushes?",
          },
          options: [
            { zh: "金礦", en: "Gold" },
            { zh: "鑽石", en: "Diamonds" },
            { zh: "銅礦", en: "Copper" },
            { zh: "煤礦", en: "Coal" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塔提河一帶的金礦在 1860 年代引來淘金者,城市以採礦者丹尼爾·法蘭西斯為名;鑽石則要到獨立後才在他處發現。",
            en: "Gold in the Tati area drew prospectors from the 1860s; the town is named after miner Daniel Francis. Diamonds came later, elsewhere.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "波札那約有 13 萬頭大象,是全球象群數量最多的國家。",
        en: "With roughly 130,000 elephants, Botswana has the largest elephant population on Earth.",
      },
      {
        zh: "全國近四成土地劃為國家公園或野生動物保護區。",
        en: "Nearly 40% of the country is set aside as national parks or wildlife management areas.",
      },
    ],
    climate: {
      zh: "半乾燥氣候,喀拉哈里沙漠覆蓋大半國土。11 月至隔年 3 月炎熱偶有雷雨,5 至 8 月乾季白天溫暖、夜間可近冰點,日夜溫差極大。",
      en: "Semi-arid, dominated by the Kalahari: hot with thunderstorms November–March, and a dry May–August winter of warm days and near-freezing nights.",
    },
    travelTips: [
      {
        zh: "主打高價低量的生態旅遊,三角洲營地與獵遊行程需提早數月預訂。",
        en: "Botswana favors high-value, low-volume tourism — book delta camps and safaris months ahead.",
      },
      {
        zh: "5 至 9 月乾季動物聚集水源,是獵遊最佳季節。",
        en: "In the May–September dry season wildlife concentrates at water — prime safari time.",
      },
      {
        zh: "自駕深入公園需四輪傳動車,偏遠路段補給稀少,油料與飲水要備足。",
        en: "Self-driving the parks requires a 4WD; fuel and supplies are scarce on remote routes, so stock up.",
      },
    ],
  },
  {
    id: "NAM",
    name: { zh: "納米比亞", en: "Namibia" },
    capital: { zh: "溫荷克", en: "Windhoek" },
    flag: "🇳🇦",
    region: "africa",
    center: { lat: -22.5, lng: 17.0 },
    intro: {
      zh: "大西洋岸的荒漠國度,擁有世界最古老的納米布沙漠。蘇絲斯黎的紅色沙丘、骷髏海岸的沉船殘骸與埃托沙鹽沼的動物群構成超現實的地景;地廣人稀,是全球人口密度最低的國家之一,也是自駕旅行的夢幻舞台。",
      en: "A desert nation on the Atlantic, home to the Namib — the world's oldest desert. Sossusvlei's red dunes, the shipwrecks of the Skeleton Coast, and the wildlife of Etosha's salt pan form surreal landscapes. Vast and sparsely peopled, it is one of Earth's least densely populated countries and a dream for self-drive travel.",
    },
    history: {
      zh: "桑人、納馬人與赫雷羅人等民族世居此地,1884 年成為德屬西南非,1904 至 1908 年間德軍對赫雷羅與納馬人的鎮壓被視為 20 世紀第一場種族滅絕。一戰後由南非託管並實施種族隔離制度,西南非人民組織(SWAPO)自 1960 年代展開獨立抗爭,1990 年在聯合國監督下獨立,1994 年收回鯨灣港。憑藉鑽石、鈾礦與觀光,如今是非洲相對穩定繁榮的民主國家。",
      en: "Long home to the San, Nama, and Herero peoples, the territory became German South West Africa in 1884; the 1904–1908 campaign against the Herero and Nama is considered the 20th century's first genocide. South Africa ruled after WWI, extending apartheid, while SWAPO fought for independence from the 1960s. Namibia became independent under UN supervision in 1990 and regained Walvis Bay in 1994. Diamonds, uranium, and tourism now underpin one of Africa's more stable democracies.",
    },
    cities: [
      {
        name: { zh: "溫荷克", en: "Windhoek" },
        blurb: {
          zh: "海拔 1,700 公尺的首都,德式教堂與非洲市集共存的整潔山城。",
          en: "The tidy capital at 1,700 m, where German churches share streets with African markets.",
        },
        trivia: {
          question: {
            zh: "納米比亞在 1990 年脫離哪個國家的統治而獨立?",
            en: "In 1990 Namibia gained independence from which country's rule?",
          },
          options: [
            { zh: "南非", en: "South Africa" },
            { zh: "英國", en: "The United Kingdom" },
            { zh: "葡萄牙", en: "Portugal" },
            { zh: "德國", en: "Germany" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "德國殖民在一戰時結束,此後南非統治超過七十年,1990 年納米比亞才在聯合國監督下獨立。",
            en: "German rule ended in WWI; South Africa then governed for over 70 years until UN-supervised independence in 1990.",
          },
        },
      },
      {
        name: { zh: "斯瓦科普蒙德", en: "Swakopmund" },
        blurb: {
          zh: "沙漠與大西洋之間的濱海度假小鎮,也是滑沙與跳傘的冒險基地。",
          en: "A seaside resort town wedged between desert and Atlantic, and a base for sandboarding and skydiving.",
        },
        trivia: {
          question: {
            zh: "斯瓦科普蒙德以保存哪個國家殖民時期的建築風格聞名?",
            en: "Swakopmund is famous for preserving the colonial architecture of which country?",
          },
          options: [
            { zh: "德國", en: "Germany" },
            { zh: "荷蘭", en: "The Netherlands" },
            { zh: "英國", en: "The United Kingdom" },
            { zh: "葡萄牙", en: "Portugal" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "小鎮建於德屬西南非時期,半木構房屋與尖塔街景保存完整,至今仍有居民說德語。",
            en: "Founded under German South West Africa, the town keeps its half-timbered houses and spires, and German is still spoken.",
          },
        },
      },
      {
        name: { zh: "鯨灣港", en: "Walvis Bay" },
        blurb: {
          zh: "全國最重要的深水港,潟湖是海鳥與海豚的樂園。",
          en: "The country's key deep-water port, its lagoon alive with seabirds and dolphins.",
        },
        trivia: {
          question: {
            zh: "鯨灣港的潟湖以成千上萬的哪種鳥類聚集而聞名?",
            en: "Walvis Bay's lagoon is famous for gatherings of thousands of which birds?",
          },
          options: [
            { zh: "紅鶴", en: "Flamingos" },
            { zh: "企鵝", en: "Penguins" },
            { zh: "鵜鶘", en: "Pelicans" },
            { zh: "信天翁", en: "Albatrosses" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "潟湖淺水富含藻類與小蝦,吸引大群大紅鶴與小紅鶴覓食,將水面染成一片粉紅。",
            en: "The shallow, food-rich lagoon draws huge flocks of greater and lesser flamingos, tinting the water pink.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "納米布沙漠已存在約五千五百萬年以上,被認為是世界最古老的沙漠。",
        en: "The Namib has been arid for tens of millions of years — widely considered the world's oldest desert.",
      },
      {
        zh: "納米比亞是全球最早將環境保護寫入憲法的國家之一。",
        en: "Namibia was one of the first countries to write environmental protection into its constitution.",
      },
    ],
    climate: {
      zh: "乾燥少雨,陽光充足。沿海受本格拉涼流影響,涼爽多霧;內陸高原白天炎熱、夜間驟涼,雨季集中在 12 月至隔年 3 月且雨量有限。",
      en: "Arid and sunny. The Benguela Current keeps the coast cool and foggy, while the interior swings from hot days to chilly nights; scant rain falls December–March.",
    },
    travelTips: [
      {
        zh: "自駕是主流玩法,碎石路占多數,務必備妥備胎、飲水並控制車速。",
        en: "Self-driving is the way to go — most roads are gravel, so carry spares and water and keep speeds down.",
      },
      {
        zh: "日夜溫差極大,即使夏季也請採洋蔥式穿搭。",
        en: "Day-night temperature swings are extreme — dress in layers even in summer.",
      },
      {
        zh: "蘇絲斯黎沙丘以日出時分最美,園區內外住宿需提早預訂。",
        en: "Sossusvlei's dunes are best at sunrise; book lodges in and near the park well ahead.",
      },
    ],
  },
  {
    id: "LSO",
    name: { zh: "賴索托", en: "Lesotho" },
    capital: { zh: "馬賽魯", en: "Maseru" },
    flag: "🇱🇸",
    region: "africa",
    center: { lat: -29.6, lng: 28.2 },
    intro: {
      zh: "被南非完全包圍的山中王國,全境海拔超過 1,000 公尺,被稱為「天空王國」。牧民披著傳統巴索托毛毯、騎馬穿行山間的身影是國家象徵;高地水利工程將豐沛山泉輸往南非,是重要的外匯來源。",
      en: "A mountain kingdom entirely surrounded by South Africa, with all its land above 1,000 m — the 'Kingdom in the Sky'. Herders on horseback wrapped in traditional Basotho blankets are a national icon, and highland dams export prized water to South Africa, a key source of revenue.",
    },
    history: {
      zh: "19 世紀初,酋長莫舒舒一世在祖魯擴張與白人拓殖的動盪中,率各部族退守塔巴博西烏山寨,凝聚成巴索托民族。為抵禦波耳人侵佔土地,1868 年尋求英國保護成為「巴蘇陀蘭」,因此未被併入南非。1966 年獨立為君主立憲王國,此後歷經數次政變與憲政危機,南非與區域組織多次介入調停;經濟高度依賴僑匯、紡織業與高地輸水計畫。",
      en: "In the early 19th century, King Moshoeshoe I gathered scattered clans at the mountain fortress of Thaba Bosiu amid Zulu expansion and settler encroachment, forging the Basotho nation. Seeking protection from Boer land seizures, he turned to Britain in 1868, and Basutoland thus escaped absorption into South Africa. Independent as a constitutional monarchy since 1966, it has weathered coups and constitutional crises, relying economically on remittances, textiles, and the Highlands Water Project.",
    },
    cities: [
      {
        name: { zh: "馬賽魯", en: "Maseru" },
        blurb: {
          zh: "卡列敦河畔的首都,與南非隔河相望,是全國唯一的大城市。",
          en: "The capital on the Caledon River, facing South Africa across the water — the country's only large city.",
        },
        trivia: {
          question: {
            zh: "賴索托的國土完全被哪一個國家包圍?",
            en: "Lesotho's territory is entirely surrounded by which country?",
          },
          options: [
            { zh: "南非", en: "South Africa" },
            { zh: "波札那", en: "Botswana" },
            { zh: "辛巴威", en: "Zimbabwe" },
            { zh: "莫三比克", en: "Mozambique" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "賴索托是世界上僅有的三個「國中國」之一,另外兩個是義大利境內的聖馬利諾與梵蒂岡。",
            en: "Lesotho is one of only three enclaved countries in the world, alongside San Marino and Vatican City within Italy.",
          },
        },
      },
      {
        name: { zh: "泰亞泰亞嫩", en: "Teyateyaneng" },
        blurb: {
          zh: "首都北方的小城,常簡稱 TY,是傳統工藝的重鎮。",
          en: "A town north of the capital, known simply as TY, and a center of traditional crafts.",
        },
        trivia: {
          question: {
            zh: "泰亞泰亞嫩以哪種手工藝聞名,被視為賴索托的工藝之都?",
            en: "Teyateyaneng is famed for which craft, earning it the title of Lesotho's craft capital?",
          },
          options: [
            { zh: "織毯與掛毯編織", en: "Weaving rugs and tapestries" },
            { zh: "陶藝", en: "Pottery" },
            { zh: "木雕", en: "Woodcarving" },
            { zh: "銀飾鍛造", en: "Silversmithing" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "當地工坊以羊毛與馬海毛手工織出描繪山村生活的掛毯,是最具代表性的賴索托伴手禮。",
            en: "Local workshops hand-weave wool and mohair tapestries depicting mountain life — Lesotho's signature souvenir.",
          },
        },
      },
      {
        name: { zh: "莫霍特隆", en: "Mokhotlong" },
        blurb: {
          zh: "東部高地的偏遠山城,鄰近全國最高峰與薩尼隘口。",
          en: "A remote highland town in the east, near the country's highest peak and the Sani Pass.",
        },
        trivia: {
          question: {
            zh: "連接賴索托與南非的薩尼隘口頂端,以什麼特色設施聞名?",
            en: "The top of the Sani Pass linking Lesotho and South Africa is famous for what establishment?",
          },
          options: [
            { zh: "號稱「非洲最高的酒吧」", en: "The self-styled 'highest pub in Africa'" },
            { zh: "非洲最高的郵局", en: "Africa's highest post office" },
            { zh: "非洲最高的火車站", en: "Africa's highest railway station" },
            { zh: "非洲最高的天文台", en: "Africa's highest observatory" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "薩尼隘口海拔約 2,876 公尺,隘口頂的山屋酒吧以「非洲最高酒吧」招徠越野旅人。",
            en: "At about 2,876 m, the lodge bar at the top of the hairpin Sani Pass bills itself as Africa's highest pub.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "賴索托是全球唯一全境海拔都在 1,000 公尺以上的國家,最低點約 1,400 公尺。",
        en: "Lesotho is the only country entirely above 1,000 m — its lowest point is about 1,400 m.",
      },
      {
        zh: "色彩鮮豔的巴索托毛毯是正式場合的傳統服飾,圖紋各有意涵。",
        en: "The colorful Basotho blanket is formal traditional dress, with meanings woven into its patterns.",
      },
    ],
    climate: {
      zh: "高地氣候,四季分明。夏季(11 至 3 月)白天溫暖、午後多雷雨;冬季(6 至 8 月)寒冷,高山地區降雪,是南部非洲少見能滑雪的地方。",
      en: "A highland climate with real seasons: warm summers (November–March) with afternoon storms, and cold winters (June–August) that bring mountain snow — rare skiing territory for southern Africa.",
    },
    travelTips: [
      {
        zh: "冬季(6 至 8 月)會下雪結冰,山區行車務必備妥保暖衣物並確認路況。",
        en: "Winters (June–August) bring snow and ice — pack warm layers and check mountain road conditions.",
      },
      {
        zh: "多數旅客從南非自駕入境,山路陡峭多彎,薩尼隘口需四輪傳動車。",
        en: "Most visitors drive in from South Africa; roads are steep and winding, and the Sani Pass requires a 4WD.",
      },
      {
        zh: "全境高海拔,紫外線強,防曬與補水不可少。",
        en: "The high altitude means intense UV — sunscreen and hydration are essential.",
      },
    ],
  },
  {
    id: "SWZ",
    name: { zh: "史瓦帝尼", en: "Eswatini" },
    capital: { zh: "墨巴本", en: "Mbabane" },
    flag: "🇸🇿",
    region: "africa",
    center: { lat: -26.5, lng: 31.5 },
    intro: {
      zh: "非洲面積最小的國家之一,夾在南非與莫三比克之間,是非洲僅存的絕對君主制國家。傳統文化保存完整,每年的蘆葦節與國王節盛大隆重;境內保護區可近距離觀察犀牛,小而精緻,兩三天即可深度環遊。",
      en: "One of Africa's smallest countries, tucked between South Africa and Mozambique, and the continent's last absolute monarchy. Its traditions run deep — the annual Reed Dance and Incwala ceremonies are spectacular — and its reserves offer close encounters with rhinos, all compact enough to explore in a few days.",
    },
    history: {
      zh: "18 至 19 世紀,史瓦濟王國在恩格瓦內三世與姆斯瓦蒂二世等君主領導下成形壯大,後淪為英國保護地。1968 年在索布扎二世領導下獨立,他於 1973 年廢除憲法、確立王權統治;現任國王恩史瓦帝三世自 1986 年在位,2018 年將國名由「史瓦濟蘭」改為「史瓦帝尼」。王室與民主化呼聲間的張力持續,2021 年曾爆發大規模抗爭。",
      en: "The Swazi kingdom took shape in the 18th and 19th centuries under kings like Ngwane III and Mswati II before becoming a British protectorate. Independence came in 1968 under Sobhuza II, who scrapped the constitution in 1973 and ruled absolutely. King Mswati III, reigning since 1986, renamed the country from Swaziland to Eswatini in 2018. Tension between royal rule and calls for democracy persists, erupting in major protests in 2021.",
    },
    cities: [
      {
        name: { zh: "墨巴本", en: "Mbabane" },
        blurb: {
          zh: "山谷間的行政首都,氣候涼爽,是全國的政府所在地。",
          en: "The cool, hilly administrative capital and seat of government.",
        },
        trivia: {
          question: {
            zh: "2018 年,史瓦帝尼將國名從什麼改為現名?",
            en: "In 2018 Eswatini changed its name from what?",
          },
          options: [
            { zh: "史瓦濟蘭", en: "Swaziland" },
            { zh: "巴蘇陀蘭", en: "Basutoland" },
            { zh: "貝專納", en: "Bechuanaland" },
            { zh: "坦噶尼喀", en: "Tanganyika" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "國王恩史瓦帝三世在獨立五十週年時宣布改名,「eSwatini」在史瓦帝語中意為「史瓦帝人之地」。",
            en: "King Mswati III announced the change on the 50th anniversary of independence — 'eSwatini' means 'land of the Swazis'.",
          },
        },
      },
      {
        name: { zh: "洛班巴", en: "Lobamba" },
        blurb: {
          zh: "王室與立法首都,王太后的王村與國會都設於此。",
          en: "The royal and legislative capital, home to the Queen Mother's royal village and parliament.",
        },
        trivia: {
          question: {
            zh: "每年在洛班巴一帶舉行、數萬名少女向王太后獻上蘆葦的節慶叫什麼?",
            en: "What festival near Lobamba sees tens of thousands of young women present reeds to the Queen Mother?",
          },
          options: [
            { zh: "蘆葦節(Umhlanga)", en: "The Reed Dance (Umhlanga)" },
            { zh: "國王節(Incwala)", en: "The Incwala kingship ceremony" },
            { zh: "豐收舞祭", en: "The harvest dance festival" },
            { zh: "祈雨祭", en: "The rainmaking ceremony" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "蘆葦節於每年 8 至 9 月舉行,是史瓦帝尼最盛大的文化慶典;Incwala 則是歲末的王權儀式。",
            en: "Umhlanga takes place each August–September and is Eswatini's biggest cultural event; Incwala is the year-end kingship ritual.",
          },
        },
      },
      {
        name: { zh: "曼齊尼", en: "Manzini" },
        blurb: {
          zh: "全國最大城市與商業樞紐,鄰近主要工業區與機場。",
          en: "The largest city and commercial hub, near the main industrial zone and airports.",
        },
        trivia: {
          question: {
            zh: "曼齊尼舊稱布雷默斯多普,在 1902 年之前曾扮演什麼角色?",
            en: "Manzini, formerly Bremersdorp, served what role until 1902?",
          },
          options: [
            { zh: "全境的行政首都", en: "The territory's administrative capital" },
            { zh: "葡萄牙人的貿易站", en: "A Portuguese trading post" },
            { zh: "英軍的海軍基地", en: "A British naval base" },
            { zh: "礦業公司的總部", en: "A mining company headquarters" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "布雷默斯多普曾是殖民行政中心,波耳戰爭中遭焚毀後,行政機能於 1902 年遷往墨巴本。",
            en: "Bremersdorp was the colonial administrative center until it burned in the Boer War; administration moved to Mbabane in 1902.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "史瓦帝尼自 1968 年起與中華民國(台灣)維持邦交,是台灣在非洲唯一的邦交國。",
        en: "Eswatini has maintained diplomatic ties with the Republic of China (Taiwan) since 1968 — Taiwan's only ally in Africa.",
      },
      {
        zh: "史瓦帝尼是非洲僅存的絕對君主制國家,國王擁有任命首相的權力。",
        en: "Eswatini is Africa's last absolute monarchy — the king appoints the prime minister.",
      },
    ],
    climate: {
      zh: "西部高地溫和涼爽,東部低地炎熱。10 月至隔年 3 月為溫暖雨季,5 至 8 月乾季晴朗,早晚偏涼,全年皆宜旅遊。",
      en: "Mild and cool in the western highveld, hot in the eastern lowveld. Warm rains fall October–March; the May–August dry season is sunny with crisp mornings. Pleasant year-round.",
    },
    travelTips: [
      {
        zh: "國土小巧,主要景點兩三天即可走完,適合與南非克魯格行程串連。",
        en: "The country is compact — two or three days cover the highlights, pairing well with South Africa's Kruger.",
      },
      {
        zh: "8 至 9 月的蘆葦節是體驗傳統文化的最佳時機。",
        en: "The Reed Dance in August–September is the best window into traditional culture.",
      },
      {
        zh: "姆卡亞與赫蘭等保護區以近距離觀察犀牛聞名,行程需預約。",
        en: "Mkhaya and Hlane reserves are famous for close-up rhino encounters — book ahead.",
      },
    ],
  },
  {
    id: "MDG",
    name: { zh: "馬達加斯加", en: "Madagascar" },
    capital: { zh: "安塔那那利佛", en: "Antananarivo" },
    flag: "🇲🇬",
    region: "africa",
    center: { lat: -19.0, lng: 46.9 },
    intro: {
      zh: "世界第四大島,與非洲大陸分離億萬年,演化出獨一無二的生態系:狐猴、變色龍與猴麵包樹都是招牌。居民祖先竟遠渡重洋來自婆羅洲,語言與文化揉合南島與非洲色彩,是地理與人類學的雙重奇觀。",
      en: "The world's fourth-largest island, isolated from Africa for tens of millions of years and home to a one-of-a-kind ecosystem of lemurs, chameleons, and baobabs. Remarkably, its people trace their roots to Borneo, blending Austronesian and African language and culture — a marvel of both geography and anthropology.",
    },
    history: {
      zh: "約一千五百年前,南島語族航海者自婆羅洲一帶橫渡印度洋抵達,與後來的班圖移民融合成馬拉加西民族。19 世紀初,梅里納王國統一全島大部,1896 年淪為法國殖民地,1947 年的反殖民起義遭到血腥鎮壓,1960 年獨立。此後政局多次動盪,2009 年政變一度遭國際孤立;如今是全球最大的香草產地,生態旅遊潛力雄厚,但貧窮與森林退化仍是嚴峻課題。",
      en: "Around 1,500 years ago Austronesian seafarers from the Borneo region crossed the Indian Ocean, later mixing with Bantu migrants to form the Malagasy people. The Merina kingdom unified most of the island in the early 19th century before France colonized it in 1896; a 1947 anti-colonial uprising was brutally crushed, and independence came in 1960. Politics have been turbulent, including a 2009 coup, yet Madagascar is now the world's top vanilla producer with huge ecotourism potential — though poverty and deforestation remain acute.",
    },
    cities: [
      {
        name: { zh: "安塔那那利佛", en: "Antananarivo" },
        blurb: {
          zh: "建在十二座聖丘之間的山城首都,梅里納王宮俯瞰紅瓦街區。",
          en: "The hillside capital spread among sacred hills, its red-roofed lanes overlooked by the Merina royal palace.",
        },
        trivia: {
          question: {
            zh: "首都安塔那那利佛的名稱是什麼意思?",
            en: "What does the name of the capital, Antananarivo, mean?",
          },
          options: [
            { zh: "「千人之城」", en: "'City of the Thousand'" },
            { zh: "「白色之城」", en: "'The White City'" },
            { zh: "「山丘女王之城」", en: "'City of the Hill Queen'" },
            { zh: "「湖泊之城」", en: "'City of Lakes'" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "相傳梅里納國王曾派千名士兵駐守此地,城名意為「千人之城」。",
            en: "Legend holds a Merina king stationed a thousand soldiers here — hence 'City of the Thousand'.",
          },
        },
      },
      {
        name: { zh: "圖阿馬西納", en: "Toamasina" },
        blurb: {
          zh: "東岸第一大港,全國進出口的咽喉,也是香料輸出的重鎮。",
          en: "The main east-coast port, the country's trade gateway and a spice-export hub.",
        },
        trivia: {
          question: {
            zh: "馬達加斯加是全球最大產地的香料是哪一種,多由圖阿馬西納等港口輸出?",
            en: "Madagascar is the world's top producer of which spice, shipped from ports like Toamasina?",
          },
          options: [
            { zh: "香草(香莢蘭)", en: "Vanilla" },
            { zh: "丁香", en: "Cloves" },
            { zh: "黑胡椒", en: "Black pepper" },
            { zh: "肉桂", en: "Cinnamon" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "東北部的莎瓦區是香草黃金產地,馬達加斯加供應全球大部分的天然香草。",
            en: "The northeastern SAVA region is vanilla's heartland — Madagascar supplies most of the world's natural vanilla.",
          },
        },
      },
      {
        name: { zh: "穆龍達瓦", en: "Morondava" },
        blurb: {
          zh: "西岸的濱海小城,是猴麵包樹大道與金巴國家公園的門戶。",
          en: "A laid-back west-coast town, gateway to the Avenue of the Baobabs and Kirindy forest.",
        },
        trivia: {
          question: {
            zh: "穆龍達瓦近郊著名的景觀大道兩旁,矗立著什麼樹木?",
            en: "The famous scenic avenue near Morondava is lined with which trees?",
          },
          options: [
            { zh: "巨大的猴麵包樹", en: "Giant baobabs" },
            { zh: "旅人蕉", en: "Travelers' palms" },
            { zh: "椰子樹", en: "Coconut palms" },
            { zh: "龍血樹", en: "Dragon's blood trees" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「猴麵包樹大道」上的格蘭迪迪爾猴麵包樹樹齡可達數百年,日落時分的剪影是馬達加斯加的經典畫面。",
            en: "The Avenue's centuries-old Grandidier's baobabs, silhouetted at sunset, are Madagascar's most iconic image.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬達加斯加約九成的野生動植物是全球僅此一處的特有種,包括所有野生狐猴。",
        en: "About 90% of Madagascar's wildlife is found nowhere else on Earth — including every wild lemur.",
      },
      {
        zh: "馬拉加西語屬於南島語系,與台灣原住民族語言同源。",
        en: "Malagasy is an Austronesian language, sharing ancient roots with the indigenous languages of Taiwan.",
      },
    ],
    climate: {
      zh: "東岸終年溼熱多雨,西部與南部乾燥,中央高地溫和涼爽。11 月至隔年 3 月為雨季,1 至 3 月常有氣旋;4 至 11 月乾季最宜旅遊。",
      en: "The east coast is wet and humid, the west and south dry, and the central highlands mild. Rains fall November–March with cyclones January–March; the April–November dry season is best for travel.",
    },
    travelTips: [
      {
        zh: "1 至 3 月氣旋頻繁且道路易中斷,建議 4 至 11 月造訪。",
        en: "Cyclones January–March often cut roads — plan for April–November instead.",
      },
      {
        zh: "國內交通費時,長程建議搭配國內線航班並預留彈性天數。",
        en: "Overland travel is slow — mix in domestic flights and build buffer days into your itinerary.",
      },
      {
        zh: "低地為瘧疾流行區,防蚊與預防用藥不可少。",
        en: "Lowland areas carry malaria risk — bring repellent and prophylaxis.",
      },
      {
        zh: "進入國家公園須聘請持證嚮導,尋找狐猴請跟隨嚮導指示。",
        en: "National parks require licensed guides — follow their lead when tracking lemurs.",
      },
    ],
  },
  {
    id: "BDI",
    name: { zh: "蒲隆地", en: "Burundi" },
    capital: { zh: "基特加", en: "Gitega" },
    flag: "🇧🇮",
    region: "africa",
    center: { lat: -3.4, lng: 29.9 },
    intro: {
      zh: "東非大湖地區的內陸小國,丘陵起伏,被稱為「千丘之國」之一。坦干依喀湖畔的布松布拉是經濟中心,咖啡與茶葉撐起出口;震撼人心的蒲隆地聖鼓表演承載王國時代的記憶,已列入人類無形文化遺產。",
      en: "A small landlocked country in the Great Lakes region, its rolling hills earning it a place among Africa's lands of a thousand hills. Bujumbura on Lake Tanganyika drives the economy, coffee and tea lead exports, and the thunderous royal drumming — a UNESCO intangible heritage — carries memories of the old kingdom.",
    },
    history: {
      zh: "蒲隆地王國自 17 世紀起由「姆瓦米」(國王)統治,社會由胡圖、圖西與特瓦人組成。一戰後與盧安達一同由比利時託管為「盧安達-烏隆地」,1962 年獨立,1966 年廢除君主制。此後數十年間,胡圖與圖西族群間多次爆發流血衝突,1993 年民選總統遇刺引發長達十餘年內戰,阿魯沙和平協議後於 2005 年逐步結束;2015 年又因總統連任爭議陷入政治危機,至今仍是世界最貧窮的國家之一。",
      en: "The Kingdom of Burundi was ruled by mwamis (kings) from the 17th century, its society comprising Hutu, Tutsi, and Twa. After WWI Belgium administered it with Rwanda as Ruanda-Urundi; independence came in 1962 and the monarchy fell in 1966. Decades of Hutu-Tutsi bloodshed followed, and the 1993 assassination of an elected president ignited a civil war that wound down after the Arusha accords, ending around 2005. A 2015 term-limit crisis brought renewed turmoil, and Burundi remains among the world's poorest countries.",
    },
    cities: [
      {
        name: { zh: "基特加", en: "Gitega" },
        blurb: {
          zh: "位居國土中央的政治首都,也是昔日王國的王廷所在。",
          en: "The political capital at the country's center, once the royal court of the old kingdom.",
        },
        trivia: {
          question: {
            zh: "2019 年,基特加取代哪座城市成為蒲隆地的政治首都?",
            en: "In 2019 Gitega replaced which city as Burundi's political capital?",
          },
          options: [
            { zh: "布松布拉", en: "Bujumbura" },
            { zh: "基加利", en: "Kigali" },
            { zh: "恩戈齊", en: "Ngozi" },
            { zh: "布魯里", en: "Bururi" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "政府將政治首都遷回位居中央、具王國歷史地位的基特加,布松布拉仍是經濟首都與最大城市。",
            en: "The government moved the political capital to centrally located, historically royal Gitega; Bujumbura remains the economic capital and largest city.",
          },
        },
      },
      {
        name: { zh: "布松布拉", en: "Bujumbura" },
        blurb: {
          zh: "全國最大城市與港口,湖濱沙灘是市民的度假去處。",
          en: "The largest city and port, its lakeside beaches a favorite local escape.",
        },
        trivia: {
          question: {
            zh: "布松布拉坐落在哪個湖的湖畔?該湖是世界第二深的湖泊。",
            en: "Bujumbura sits on the shore of which lake, the second-deepest in the world?",
          },
          options: [
            { zh: "坦干依喀湖", en: "Lake Tanganyika" },
            { zh: "維多利亞湖", en: "Lake Victoria" },
            { zh: "馬拉威湖", en: "Lake Malawi" },
            { zh: "基伏湖", en: "Lake Kivu" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "坦干依喀湖深達約 1,470 公尺,僅次於貝加爾湖,也是世界最長的淡水湖。",
            en: "Lake Tanganyika plunges to about 1,470 m — second only to Lake Baikal — and is the world's longest freshwater lake.",
          },
        },
      },
      {
        name: { zh: "恩戈齊", en: "Ngozi" },
        blurb: {
          zh: "北部丘陵間的城鎮,周邊高地是重要的咖啡產區。",
          en: "A town in the northern hills, surrounded by key coffee-growing highlands.",
        },
        trivia: {
          question: {
            zh: "蒲隆地最重要的出口作物是什麼,恩戈齊一帶的高地是主要產區?",
            en: "What is Burundi's most important export crop, grown in highlands like those around Ngozi?",
          },
          options: [
            { zh: "咖啡", en: "Coffee" },
            { zh: "可可", en: "Cocoa" },
            { zh: "棉花", en: "Cotton" },
            { zh: "菸草", en: "Tobacco" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "高海拔火山土孕育出優質阿拉比卡咖啡,咖啡連同茶葉長期是蒲隆地最主要的外匯來源。",
            en: "High-altitude volcanic soils yield fine arabica; coffee, with tea, has long been Burundi's main source of foreign exchange.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "蒲隆地聖鼓的儀式性鼓樂於 2014 年列入聯合國教科文組織人類無形文化遺產。",
        en: "The ritual dance of the royal drum of Burundi was inscribed on UNESCO's intangible heritage list in 2014.",
      },
      {
        zh: "有探險家主張尼羅河最遠源頭之一位於蒲隆地南部山區。",
        en: "Explorers have claimed one of the Nile's most distant sources lies in Burundi's southern mountains.",
      },
    ],
    climate: {
      zh: "赤道高地氣候,因海拔而終年溫和,高地涼爽、湖畔溫暖。一年有兩段雨季(約 2 至 5 月與 9 至 11 月),6 至 8 月為主要乾季。",
      en: "Equatorial but tempered by altitude — mild year-round, cooler in the hills and warm by the lake. Two rainy seasons (roughly February–May and September–November) bracket the June–August dry season.",
    },
    travelTips: [
      {
        zh: "行前確認簽證規定與最新安全資訊,政治局勢可能變化。",
        en: "Check visa rules and the latest security updates before travel — the political situation can shift.",
      },
      {
        zh: "入境通常要求黃熱病疫苗接種證明,瘧疾防護也不可少。",
        en: "Proof of yellow fever vaccination is commonly required, and malaria precautions are a must.",
      },
      {
        zh: "通行語言為基隆迪語與法語,英語不普及。",
        en: "Kirundi and French are the working languages — English is not widely spoken.",
      },
    ],
  },
  {
    id: "SOM",
    name: { zh: "索馬利亞", en: "Somalia" },
    capital: { zh: "摩加迪休", en: "Mogadishu" },
    flag: "🇸🇴",
    region: "africa",
    center: { lat: 5.5, lng: 46.2 },
    intro: {
      zh: "非洲之角的臨海國家,擁有非洲大陸最長的海岸線。古代是乳香與沒藥的貿易之邦,索馬利語的口傳詩歌傳統深厚,被稱為「詩人的國度」;1991 年以來長期內戰與分裂,重建之路仍在進行。",
      en: "A Horn of Africa nation with the longest coastline on the African mainland. In antiquity it traded frankincense and myrrh, and its rich oral poetry earned it the name 'nation of poets'. Since 1991 it has endured civil war and fragmentation, and reconstruction is still under way.",
    },
    history: {
      zh: "古埃及人記載的「邦特之地」據信就在此區,中世紀阿居蘭、阿達爾等蘇丹國沿海繁榮,澤拉與柏培拉是印度洋貿易名港。19 世紀英、義瓜分海岸,1960 年英屬與義屬索馬利蘭合併獨立。1969 年巴雷發動政變實行軍事統治,1991 年政權崩潰後陷入軍閥割據與內戰,西北部的索馬利蘭自行宣布獨立但未獲國際承認。2012 年成立聯邦政府,在國際支持下逐步重建,但安全局勢依然嚴峻。",
      en: "The Land of Punt recorded by ancient Egypt is believed to lie in this region; medieval sultanates like Ajuran and Adal thrived on Indian Ocean trade through ports such as Zeila and Berbera. Britain and Italy divided the coast in the 19th century, and their territories merged at independence in 1960. Siad Barre seized power in 1969; his regime's 1991 collapse brought warlordism and civil war, with Somaliland in the northwest declaring unrecognized independence. A federal government formed in 2012 and rebuilding continues with international support, though security remains fragile.",
    },
    cities: [
      {
        name: { zh: "摩加迪休", en: "Mogadishu" },
        blurb: {
          zh: "印度洋岸的首都,千年商港的白色老城歷經戰火,正緩慢重建。",
          en: "The Indian Ocean capital, a thousand-year-old trading port whose white old town is slowly rebuilding after war.",
        },
        trivia: {
          question: {
            zh: "摩加迪休因臨海的白色建築,歷史上曾有什麼美稱?",
            en: "For its white seaside architecture, Mogadishu was historically known by what nickname?",
          },
          options: [
            { zh: "「印度洋的白珍珠」", en: "'The White Pearl of the Indian Ocean'" },
            { zh: "「東非的明珠」", en: "'The Jewel of East Africa'" },
            { zh: "「紅海的玫瑰」", en: "'The Rose of the Red Sea'" },
            { zh: "「非洲之角的燈塔」", en: "'The Lighthouse of the Horn'" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "內戰前的摩加迪休以白牆建築、義式大教堂與濱海大道聞名,是印度洋岸最美的城市之一。",
            en: "Before the civil war, Mogadishu's whitewashed buildings, Italianate cathedral, and seafront made it one of the Indian Ocean's loveliest cities.",
          },
        },
      },
      {
        name: { zh: "哈爾格薩", en: "Hargeisa" },
        blurb: {
          zh: "西北部自行宣布獨立的索馬利蘭地區的最大城市與行政中心。",
          en: "The largest city and administrative center of the self-declared Somaliland region in the northwest.",
        },
        trivia: {
          question: {
            zh: "哈爾格薩近郊的拉斯吉爾(Laas Geel)洞穴以什麼聞名?",
            en: "The Laas Geel caves near Hargeisa are famous for what?",
          },
          options: [
            { zh: "數千年前的史前岩畫", en: "Prehistoric rock paintings thousands of years old" },
            { zh: "恐龍化石層", en: "Dinosaur fossil beds" },
            { zh: "古羅馬時期遺跡", en: "Ancient Roman ruins" },
            { zh: "巨大的隕石坑", en: "A giant meteorite crater" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "拉斯吉爾的岩壁上繪有色彩鮮明的牛隻與人物,距今約五千年以上,是非洲保存最好的史前岩畫之一。",
            en: "Laas Geel's vividly painted cattle and human figures, over 5,000 years old, are among Africa's best-preserved rock art.",
          },
        },
      },
      {
        name: { zh: "柏培拉", en: "Berbera" },
        blurb: {
          zh: "亞丁灣畔的古老港口,自古是紅海與印度洋貿易的節點。",
          en: "An ancient Gulf of Aden port, long a node of Red Sea and Indian Ocean trade.",
        },
        trivia: {
          question: {
            zh: "柏培拉自古代起便以輸出哪類商品聞名於印度洋貿易圈?",
            en: "Since antiquity Berbera has been known in Indian Ocean trade for exporting which goods?",
          },
          options: [
            { zh: "乳香與沒藥", en: "Frankincense and myrrh" },
            { zh: "黃金與象牙", en: "Gold and ivory" },
            { zh: "絲綢與瓷器", en: "Silk and porcelain" },
            { zh: "琥珀與毛皮", en: "Amber and furs" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "非洲之角的乳香樹脂自古埃及時代便是珍貴貢品,至今索馬利亞仍是全球主要乳香產地。",
            en: "Horn of Africa frankincense was prized as far back as ancient Egypt, and Somalia remains a top producer today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "索馬利亞的海岸線約 3,300 公里,是非洲大陸各國中最長的。",
        en: "Somalia's roughly 3,300 km coastline is the longest of any country on the African mainland.",
      },
      {
        zh: "索馬利亞的駱駝數量居世界之冠,駱駝在文化與經濟中地位崇高。",
        en: "Somalia has more camels than any other country — they hold a central place in its culture and economy.",
      },
    ],
    climate: {
      zh: "炎熱乾燥的沙漠與半沙漠氣候,全年高溫。一年有兩段短雨季:「Gu」(約 4 至 6 月)與「Deyr」(約 10 至 11 月),北部沿海夏季酷熱。",
      en: "Hot desert and semi-desert, warm to scorching year-round, with two short rainy seasons — the Gu (April–June) and Deyr (October–November). The northern coast is fiercely hot in summer.",
    },
    travelTips: [
      {
        zh: "多國對索馬利亞發布旅遊警示,行前務必確認最新官方公告。",
        en: "Many governments have travel advisories in place for Somalia — check the latest official guidance before any trip.",
      },
      {
        zh: "如確定前往,通常需透過當地接待方安排交通、住宿與隨行事宜。",
        en: "If you do go, arrangements are usually made through local hosts covering transport, lodging, and escorts.",
      },
      {
        zh: "當地文化保守,衣著與言行請尊重伊斯蘭習俗。",
        en: "The culture is conservative — dress and behave with respect for Islamic customs.",
      },
    ],
  },
  {
    id: "DJI",
    name: { zh: "吉布地", en: "Djibouti" },
    capital: { zh: "吉布地市", en: "Djibouti City" },
    flag: "🇩🇯",
    region: "africa",
    center: { lat: 11.8, lng: 42.6 },
    intro: {
      zh: "紅海出口的小國,扼守曼德海峽,是全球航運咽喉,多國在此設有軍事基地。境內地貌宛如外星:非洲最低點阿薩爾鹽湖、石灰華煙囪林立的阿貝湖,加上塔朱拉灣的鯨鯊,小小國土濃縮了奇觀。",
      en: "A small nation guarding the Bab-el-Mandeb strait at the Red Sea's mouth — a global shipping chokepoint hosting several foreign military bases. Its landscapes verge on alien: Lake Assal, Africa's lowest point; the limestone chimneys of Lake Abbe; and whale sharks in the Gulf of Tadjoura.",
    },
    history: {
      zh: "阿法爾人與索馬利伊薩人世居這片乾旱之地,沿海蘇丹國長期經營紅海貿易。法國 1862 年取得奧博克據點,1896 年設立「法屬索馬利蘭」,以吉布地港與通往衣索比亞的鐵路為經濟命脈;1967 年更名為「法屬阿法爾與伊薩領地」,1977 年獨立。獨立後憑藉扼守航道的地理位置,發展港口與轉運經濟,美、法、中、日等國陸續設立軍事基地,租金與港務收入成為國家支柱。",
      en: "The arid land has long been home to the Afar and the Somali Issa, with coastal sultanates trading across the Red Sea. France acquired Obock in 1862 and founded French Somaliland in 1896, built around Djibouti port and the railway to Ethiopia; renamed the Territory of the Afars and the Issas in 1967, it became independent in 1977. Since then its chokepoint location has driven a port and logistics economy, with the US, France, China, and Japan maintaining bases whose rents and port fees sustain the state.",
    },
    cities: [
      {
        name: { zh: "吉布地市", en: "Djibouti City" },
        blurb: {
          zh: "港灣首都,全國多數人口聚居於此,歐、阿、非風情交織。",
          en: "The port capital where most of the population lives, blending European, Arab, and African influences.",
        },
        trivia: {
          question: {
            zh: "吉布地因扼守哪個連接紅海與亞丁灣的海峽,而成為戰略要地?",
            en: "Djibouti's strategic importance comes from guarding which strait linking the Red Sea and Gulf of Aden?",
          },
          options: [
            { zh: "曼德海峽", en: "The Bab-el-Mandeb" },
            { zh: "荷莫茲海峽", en: "The Strait of Hormuz" },
            { zh: "麻六甲海峽", en: "The Strait of Malacca" },
            { zh: "直布羅陀海峽", en: "The Strait of Gibraltar" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "曼德海峽是蘇伊士運河航線的必經之地,全球大量海運貿易由此通過,吉布地因而成為兵家必爭的樞紐。",
            en: "The Bab-el-Mandeb funnels Suez-bound shipping; a huge share of global sea trade passes here, making Djibouti a coveted hub.",
          },
        },
      },
      {
        name: { zh: "塔朱拉", en: "Tadjoura" },
        blurb: {
          zh: "同名海灣北岸的白色古鎮,是全國最古老的聚落之一。",
          en: "A whitewashed old town on the north shore of its namesake gulf, among the country's oldest settlements.",
        },
        trivia: {
          question: {
            zh: "塔朱拉灣以每年季節性聚集的哪種海洋生物聞名,吸引潛水者前來?",
            en: "The Gulf of Tadjoura is famous for seasonal gatherings of which marine animal, drawing divers?",
          },
          options: [
            { zh: "鯨鯊", en: "Whale sharks" },
            { zh: "座頭鯨", en: "Humpback whales" },
            { zh: "儒艮", en: "Dugongs" },
            { zh: "蝠魟", en: "Manta rays" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "每年約 11 月至隔年 2 月,年輕鯨鯊聚集在灣內浮游生物豐富的水域覓食,可近距離浮潛共游。",
            en: "From about November to February, juvenile whale sharks feed on the gulf's plankton-rich waters, allowing close snorkel encounters.",
          },
        },
      },
      {
        name: { zh: "奧博克", en: "Obock" },
        blurb: {
          zh: "海灣北岸的寧靜小港,是法國殖民歷史的起點。",
          en: "A quiet little port on the gulf's north shore, where the French colonial story began.",
        },
        trivia: {
          question: {
            zh: "奧博克在吉布地歷史上具有什麼特殊地位?",
            en: "What special place does Obock hold in Djibouti's history?",
          },
          options: [
            { zh: "法國最早取得的殖民據點", en: "France's first colonial foothold in the region" },
            { zh: "義大利最早的軍港", en: "Italy's first naval port" },
            { zh: "英國的加煤站", en: "A British coaling station" },
            { zh: "鄂圖曼帝國的稅關", en: "An Ottoman customs post" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法國 1862 年向當地蘇丹購得奧博克,作為紅海航線的補給港,行政中心後來才移往對岸的吉布地市。",
            en: "France bought Obock from local sultans in 1862 as a Red Sea supply port; the administration later moved across the gulf to Djibouti City.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "阿薩爾湖低於海平面約 155 公尺,是非洲的最低點,湖水鹽度約為海水的十倍。",
        en: "Lake Assal lies about 155 m below sea level — Africa's lowest point — with water roughly ten times saltier than the ocean.",
      },
      {
        zh: "阿貝湖的石灰華煙囪地貌曾是電影《浩劫餘生錄(決戰猩球)》系列取景的靈感來源之一,常被形容為「月球表面」。",
        en: "Lake Abbe's limestone chimneys are so otherworldly the landscape is often likened to the Moon, famously evoking the original Planet of the Apes.",
      },
    ],
    climate: {
      zh: "全球最炎熱的國家之一,沙漠氣候少雨。6 至 8 月酷熱,常超過攝氏 45 度並有乾熱風;10 月至隔年 4 月相對涼爽,是主要旅遊季。",
      en: "One of the hottest countries on Earth, with a dry desert climate: June–August can top 45°C with searing winds, while October–April is relatively mild and the main travel season.",
    },
    travelTips: [
      {
        zh: "避開 6 至 8 月的酷暑,11 月至隔年 2 月天氣宜人且正逢鯨鯊季。",
        en: "Skip the June–August furnace; November–February is pleasant and coincides with whale shark season.",
      },
      {
        zh: "前往阿薩爾湖與阿貝湖需包四輪傳動車與嚮導,途中補給有限。",
        en: "Lakes Assal and Abbe require a 4WD with a guide — supplies along the way are scarce.",
      },
      {
        zh: "物價比想像中高,住宿與包車費用宜先議定。",
        en: "Prices are higher than you might expect — agree on lodging and vehicle rates up front.",
      },
    ],
  },
  {
    id: "ERI",
    name: { zh: "厄利垂亞", en: "Eritrea" },
    capital: { zh: "阿斯瑪拉", en: "Asmara" },
    flag: "🇪🇷",
    region: "africa",
    center: { lat: 15.2, lng: 39.0 },
    intro: {
      zh: "紅海西岸的國家,高原首都阿斯瑪拉保存了全球最完整的義大利現代主義建築群,被稱為「非洲的摩登之城」。沿海的達赫拉克群島珊瑚礁近乎未經開發;對外相對封閉,是非洲最少遊客造訪的國家之一。",
      en: "A Red Sea nation whose highland capital, Asmara, preserves the world's most intact ensemble of Italian modernist architecture — 'Africa's modernist city'. Offshore, the Dahlak Archipelago's reefs remain nearly untouched. Largely closed off, it is among Africa's least-visited countries.",
    },
    history: {
      zh: "沿海地帶曾屬阿克蘇姆王國,後歷經鄂圖曼與埃及勢力經營。1890 年成為義大利殖民地,阿斯瑪拉被打造成現代主義建築的實驗場;二戰後由英國代管,1952 年與衣索比亞組成聯邦,1962 年遭其兼併,引爆長達三十年的獨立戰爭。1991 年解放陣線獲勝,1993 年公投獨立,伊薩亞斯總統執政至今,實行一黨統治與無限期兵役;1998 至 2000 年與衣索比亞爆發邊界戰爭,2018 年兩國正式和解。",
      en: "The coast once belonged to the Kingdom of Aksum, later contested by Ottoman and Egyptian powers. Italy colonized it in 1890, turning Asmara into a laboratory of modernist architecture. After British administration, a 1952 federation with Ethiopia ended in annexation in 1962, igniting a thirty-year war of independence. The liberation front won in 1991 and independence followed a 1993 referendum. President Isaias Afwerki has ruled since, with one-party government and indefinite national service; a 1998–2000 border war with Ethiopia formally ended with the 2018 peace deal.",
    },
    cities: [
      {
        name: { zh: "阿斯瑪拉", en: "Asmara" },
        blurb: {
          zh: "海拔約 2,300 公尺的首都,裝飾藝術戲院與義式咖啡館林立。",
          en: "The capital at about 2,300 m, lined with Art Deco cinemas and Italian-style cafés.",
        },
        trivia: {
          question: {
            zh: "阿斯瑪拉在 2017 年以什麼特色被列入世界遺產?",
            en: "Asmara was inscribed as a World Heritage Site in 2017 for what?",
          },
          options: [
            { zh: "義大利現代主義建築群", en: "Its Italian modernist architecture" },
            { zh: "中世紀石造教堂群", en: "Its medieval stone churches" },
            { zh: "鄂圖曼時期老城區", en: "Its Ottoman-era old town" },
            { zh: "史前巨石陣列", en: "Its prehistoric megaliths" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1930 年代義大利建築師在此大量實驗未來主義與裝飾藝術風格,飛機造型的加油站 Fiat Tagliero 是代表作。",
            en: "Italian architects experimented freely here in the 1930s with Futurist and Art Deco styles — the airplane-shaped Fiat Tagliero garage is the icon.",
          },
        },
      },
      {
        name: { zh: "馬薩瓦", en: "Massawa" },
        blurb: {
          zh: "珊瑚岩老城與鄂圖曼建築交錯的港市,是通往達赫拉克群島的門戶。",
          en: "A port city of coral-stone lanes and Ottoman buildings, the gateway to the Dahlak Archipelago.",
        },
        trivia: {
          question: {
            zh: "馬薩瓦是哪個海域岸邊的歷史港口,曾被稱為該海的珍珠?",
            en: "Massawa is a historic port on which body of water, once called its pearl?",
          },
          options: [
            { zh: "紅海", en: "The Red Sea" },
            { zh: "亞丁灣", en: "The Gulf of Aden" },
            { zh: "波斯灣", en: "The Persian Gulf" },
            { zh: "地中海", en: "The Mediterranean" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬薩瓦數百年來是紅海貿易重港,鄂圖曼與埃及時期建築仍散布老城,也是全球最炎熱的港市之一。",
            en: "For centuries Massawa was a key Red Sea trading port; Ottoman and Egyptian-era buildings dot its old town, one of the hottest port cities on Earth.",
          },
        },
      },
      {
        name: { zh: "克倫", en: "Keren" },
        blurb: {
          zh: "第二大城,山城市集熱鬧,也是二戰東非戰場的關鍵地。",
          en: "The second city, known for its lively hill-town markets and a pivotal WWII battlefield.",
        },
        trivia: {
          question: {
            zh: "1941 年的克倫戰役中,英軍與大英國協部隊擊敗哪一國軍隊,扭轉了東非戰局?",
            en: "In the 1941 Battle of Keren, British and Commonwealth forces defeated which country's army, turning the East African campaign?",
          },
          options: [
            { zh: "義大利", en: "Italy" },
            { zh: "德國", en: "Germany" },
            { zh: "日本", en: "Japan" },
            { zh: "維琪法國", en: "Vichy France" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "克倫是義軍防守厄利垂亞的天險,經近兩個月激戰失守後,義屬東非防線迅速瓦解。",
            en: "Keren was Italy's mountain stronghold guarding Eritrea; after nearly two months of fighting its fall unraveled Italian East Africa.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "自行車運動是厄利垂亞的國民運動,源自義大利殖民時期,曾培養出多位國際車壇好手。",
        en: "Cycling is Eritrea's national sport, a legacy of Italian rule that has produced several international stars.",
      },
      {
        zh: "厄利垂亞的國名源自希臘語「Erythra Thalassa」,意即紅海。",
        en: "The name Eritrea comes from the Greek 'Erythra Thalassa' — the Red Sea.",
      },
    ],
    climate: {
      zh: "氣候隨海拔劇烈變化:阿斯瑪拉所在高原全年溫和,雨季約在 6 至 9 月;紅海沿岸酷熱乾燥,馬薩瓦是全球最熱的城市之一。",
      en: "Climate swings with altitude: the Asmara highlands stay mild year-round with rains June–September, while the Red Sea coast is fiercely hot and dry — Massawa ranks among the world's hottest cities.",
    },
    travelTips: [
      {
        zh: "多國發布旅遊警示,行前務必確認最新官方公告。",
        en: "Several governments have issued travel advisories — check the latest official guidance before you go.",
      },
      {
        zh: "離開阿斯瑪拉前往其他城鎮通常需事先申請旅行許可。",
        en: "Travel beyond Asmara usually requires a permit arranged in advance.",
      },
      {
        zh: "現金社會,信用卡幾乎無法使用,網路與國際通訊也相當有限。",
        en: "It's a cash economy — cards are rarely accepted, and internet and international communications are limited.",
      },
      {
        zh: "高原涼爽但沿海酷熱,行程跨區時衣著要兼顧兩種氣候。",
        en: "Pack for both climates: the cool highlands and the scorching coast.",
      },
    ],
  },
];
