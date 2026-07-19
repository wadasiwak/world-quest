import type { CountryExtras } from "../types";

// Advanced question banks for the Pacific island nations.
// Climate/travelTips live inline in the base country files, so these
// entries are quiz-only.

export const OCEANIA_MORE_EXTRAS: Record<string, CountryExtras> = {
  SLB: {
    extraQuiz: [
      {
        question: {
          zh: "因二戰而舉世聞名的瓜達康納爾島,島名其實來自哪裡?",
          en: "Guadalcanal became world-famous through WWII — but where does the island's name actually come from?",
        },
        options: [
          {
            zh: "西班牙安達魯西亞的一座小鎮,以 1568 年探險隊員的家鄉命名",
            en: "A small town in Andalusia, Spain — named in 1568 after an expedition member's hometown",
          },
          { zh: "當地原住民語「大河之島」的音譯", en: "A transliteration of the local phrase for 'island of great rivers'" },
          { zh: "一位葡萄牙航海家的姓氏", en: "The surname of a Portuguese navigator" },
          { zh: "西班牙王后的封號", en: "A title of the Queen of Spain" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "門達尼亞探險隊的成員佩德羅·德·奧爾特加以家鄉、塞維亞省的瓜達康納爾鎮為島命名;這個西班牙地名本身又源自阿拉伯語,輾轉成了太平洋戰史上最響亮的名字之一。",
          en: "Pedro de Ortega of Mendaña's expedition named the island after his hometown of Guadalcanal in Seville province; the Spanish place name itself derives from Arabic — and went on to become one of the most storied names of the Pacific War.",
        },
      },
      {
        question: {
          zh: "索羅門群島哪一處自然遺產在 1998 年列入 UNESCO 世界遺產,其所在島嶼被視為全球最大的隆起珊瑚環礁?",
          en: "Which Solomon Islands site was inscribed as UNESCO World Heritage in 1998, on an island regarded as the world's largest raised coral atoll?",
        },
        options: [
          { zh: "東倫內爾", en: "East Rennell" },
          { zh: "馬羅沃潟湖", en: "Marovo Lagoon" },
          { zh: "瓜達康納爾中央山脈", en: "The central mountains of Guadalcanal" },
          { zh: "聖克魯斯群島", en: "The Santa Cruz Islands" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "倫內爾島是被抬升出海面的巨型珊瑚環礁,島上的特加諾湖是太平洋島嶼中最大的湖泊,湖中還散布著昔日潟湖留下的石灰岩小島。",
          en: "Rennell is a giant coral atoll uplifted above the sea; its Lake Tegano is the largest lake in the insular Pacific, dotted with limestone islets left over from the former lagoon.",
        },
      },
      {
        question: {
          zh: "二戰之前,英屬索羅門群島保護地的首府設在哪裡?",
          en: "Before WWII, where was the capital of the British Solomon Islands Protectorate?",
        },
        options: [
          { zh: "圖拉吉", en: "Tulagi" },
          { zh: "荷尼阿拉", en: "Honiara" },
          { zh: "吉佐", en: "Gizo" },
          { zh: "奧基", en: "Auki" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "英國自 1896 年起以佛羅里達群島旁的小島圖拉吉為行政中心,該地在二戰中被日軍占領並毀於戰火;戰後政府遷往留有盟軍基地設施的荷尼阿拉,沿用至今。",
          en: "From 1896 the British administered the islands from tiny Tulagi off the Florida Islands; seized by Japan and wrecked in the war, it was abandoned as capital in favor of Honiara, which inherited the Allies' wartime infrastructure.",
        },
      },
    ],
  },
  VUT: {
    extraQuiz: [
      {
        question: {
          zh: "萬那杜的最高峰塔布韋馬薩納山(標高 1,879 公尺)位於哪座島上?",
          en: "Mount Tabwemasana, Vanuatu's highest peak at 1,879 m, rises on which island?",
        },
        options: [
          { zh: "聖埃斯皮里圖島", en: "Espiritu Santo" },
          { zh: "埃法特島", en: "Efate" },
          { zh: "坦納島", en: "Tanna" },
          { zh: "彭特科斯特島", en: "Pentecost" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "聖埃斯皮里圖島也是全國面積最大的島,島名來自 1606 年航海家奇羅斯所取的「聖靈」之意;攀登塔布韋馬薩納山需請當地村落嚮導帶路,數日往返。",
          en: "Espiritu Santo is also the country's largest island, its name — 'Holy Spirit' — bestowed by the navigator Quirós in 1606. Climbing Tabwemasana is a multi-day trek requiring local village guides.",
        },
      },
      {
        question: {
          zh: "1774 年庫克船長航抵這片群島時,以蘇格蘭外海的群島為它命名,取的名字是什麼?",
          en: "Arriving in 1774, Captain Cook named this archipelago after islands off Scotland. What name did he give it?",
        },
        options: [
          { zh: "新赫布里底", en: "The New Hebrides" },
          { zh: "新喀里多尼亞", en: "New Caledonia" },
          { zh: "新不列顛", en: "New Britain" },
          { zh: "社會群島", en: "The Society Islands" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "赫布里底是蘇格蘭西岸外海的群島,這個殖民地名一直沿用到 1980 年獨立,新國名「萬那杜」在當地語言中意為「永恆的土地」。",
          en: "The Hebrides lie off Scotland's west coast; the colonial name lasted until independence in 1980, when the new nation took the name Vanuatu — 'land eternal'.",
        },
      },
      {
        question: {
          zh: "坦納島上著名的「約翰弗魯姆運動」,是哪一類宗教現象最常被引用的例子?",
          en: "The John Frum movement on Tanna is one of the most cited examples of what kind of religious phenomenon?",
        },
        options: [
          { zh: "船貨崇拜(cargo cult)", en: "A cargo cult" },
          { zh: "祖靈崇拜", en: "Ancestor worship" },
          { zh: "薩滿信仰", en: "Shamanism" },
          { zh: "太陽崇拜", en: "Sun worship" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這個運動興起於 1930 年代,二戰期間美軍帶來的大量物資使信仰更加壯大,信徒期盼「約翰弗魯姆」帶著豐足貨物歸來,每年 2 月 15 日仍舉行紀念日活動。",
          en: "The movement arose in the 1930s and swelled when US forces brought vast wartime cargo; followers await John Frum's return with plentiful goods, still marking February 15 as his day.",
        },
      },
    ],
  },
  WSM: {
    extraQuiz: [
      {
        question: {
          zh: "薩摩亞是太平洋島嶼中第一個獨立建國的,它在哪一年脫離紐西蘭託管獨立?",
          en: "Samoa was the first Pacific island nation to gain independence. In what year did it emerge from New Zealand trusteeship?",
        },
        options: [
          { zh: "1962 年", en: "1962" },
          { zh: "1970 年", en: "1970" },
          { zh: "1978 年", en: "1978" },
          { zh: "1980 年", en: "1980" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1962 年 1 月 1 日西薩摩亞率先獨立,為各島國開了先河;東加與斐濟在 1970 年跟進,索羅門群島與吐瓦魯是 1978 年,萬那杜則是 1980 年。",
          en: "Western Samoa led the way on January 1, 1962; Tonga and Fiji followed in 1970, Solomon Islands and Tuvalu in 1978, and Vanuatu in 1980.",
        },
      },
      {
        question: {
          zh: "2009 年 9 月,薩摩亞完成了一項數十年來全球罕見的交通變革,內容是什麼?",
          en: "In September 2009, Samoa carried out a traffic change almost unheard of worldwide in recent decades. What was it?",
        },
        options: [
          {
            zh: "把全國行車方向從靠右改成靠左",
            en: "Switching the whole country from driving on the right to driving on the left",
          },
          { zh: "全面禁止進口汽油車", en: "Banning all petrol-car imports" },
          { zh: "把所有路口改建成圓環", en: "Converting every intersection into a roundabout" },
          { zh: "規定全國車輛單雙號分日上路", en: "Introducing nationwide odd-even license-plate days" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "改為靠左行駛後,薩摩亞人就能從紐西蘭與澳洲進口便宜的右駕二手車;政府為此放假兩天並暫停售酒,讓駕駛人平安適應新規則。",
          en: "Driving on the left lets Samoans import cheap right-hand-drive used cars from New Zealand and Australia; the government declared a two-day holiday and paused alcohol sales to ease the transition.",
        },
      },
      {
        question: {
          zh: "烏波盧島南岸名景「托蘇阿海溝」(To Sua Ocean Trench)實際上是什麼樣的地形?",
          en: "The To Sua Ocean Trench, a famous sight on Upolu's south coast, is actually what kind of landform?",
        },
        options: [
          {
            zh: "深約 30 公尺的天然海水泳池,要沿長梯而下,底部經熔岩通道與大海相連",
            en: "A natural seawater pool about 30 m deep, reached by a long ladder and linked to the ocean through a lava tube",
          },
          { zh: "全球最深的近岸海底峽谷", en: "The world's deepest nearshore submarine canyon" },
          { zh: "一座定時噴發的間歇泉", en: "A geyser that erupts on schedule" },
          { zh: "人工開鑿的古代鹽田", en: "An ancient hand-dug salt pan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "To Sua 意為「大洞」,這座位於洛托法加村的天坑由火山地形塌陷而成,湛藍池水隨海潮起伏,是薩摩亞最具代表性的自然奇景之一。",
          en: "To Sua means 'big hole' — a collapsed volcanic sinkhole in Lotofaga village whose blue pool rises and falls with the tide, one of Samoa's signature natural wonders.",
        },
      },
    ],
  },
  TON: {
    extraQuiz: [
      {
        question: {
          zh: "約 13 世紀圖伊東加王朝在東加塔布島豎立的巨石建築「哈阿蒙加毛伊」,是什麼樣的結構?",
          en: "Ha'amonga 'a Maui, the megalithic monument raised on Tongatapu by the Tu'i Tonga dynasty around the 13th century, is what kind of structure?",
        },
        options: [
          {
            zh: "由三塊珊瑚石灰岩巨石組成的石門,被稱為「太平洋的巨石陣」",
            en: "A trilithon gate of three huge coral-limestone slabs, dubbed the 'Stonehenge of the Pacific'",
          },
          { zh: "一座階梯狀的石造金字塔", en: "A stepped stone pyramid" },
          { zh: "一整排面海而立的巨型石像", en: "A row of giant statues facing the sea" },
          { zh: "環形排列的石柱天文台", en: "A circular observatory of standing stones" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩根立柱托著一根橫梁,每塊巨石重達數十噸,相傳為國王圖伊塔圖伊所建;有研究認為它的方位與冬夏至日出方向有關。",
          en: "Two uprights support a massive lintel, each stone weighing tens of tons, traditionally credited to King Tu'itatui; some researchers link its alignment to the solstice sunrises.",
        },
      },
      {
        question: {
          zh: "英文單字 taboo(禁忌)是從哪個語言借入英語的?",
          en: "The English word 'taboo' was borrowed into English from which language?",
        },
        options: [
          { zh: "東加語", en: "Tongan" },
          { zh: "夏威夷語", en: "Hawaiian" },
          { zh: "毛利語", en: "Maori" },
          { zh: "斐濟語", en: "Fijian" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "庫克船長 1777 年造訪東加時記下了 tabu 一詞,指神聖不可觸犯之事,隨他的航海記傳入英語;類似概念在玻里尼西亞各語言中都有,如毛利語的 tapu。",
          en: "Captain Cook recorded 'tabu' — something sacred and forbidden — during his 1777 visit to Tonga, and his voyage accounts carried it into English; cognates like Maori 'tapu' exist across Polynesia.",
        },
      },
      {
        question: {
          zh: "東加東側外海的東加海溝,在全球海洋深度排行上有什麼地位?",
          en: "The Tonga Trench off the kingdom's eastern flank holds what rank among the world's ocean depths?",
        },
        options: [
          {
            zh: "全球第二深的海溝,僅次於馬里亞納海溝",
            en: "The second-deepest trench on Earth, after the Mariana Trench",
          },
          { zh: "全球最深的海溝", en: "The deepest trench on Earth" },
          { zh: "南半球最淺的海溝", en: "The shallowest trench in the Southern Hemisphere" },
          { zh: "全球最長的海溝", en: "The longest trench on Earth" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "海溝最深處「地平線深淵」深約 10,800 公尺;太平洋板塊在此俯衝,北端板塊聚合速度達每年約 24 公分,是地球上板塊移動最快的地帶之一。",
          en: "Its deepest point, Horizon Deep, plunges to about 10,800 m; the Pacific Plate subducts here at up to roughly 24 cm a year near the trench's north end — among the fastest plate convergence on Earth.",
        },
      },
    ],
  },
  KIR: {
    extraQuiz: [
      {
        question: {
          zh: "2010 年吉里巴斯的菲尼克斯群島保護區列入 UNESCO 世界遺產時,創下了什麼紀錄?",
          en: "When Kiribati's Phoenix Islands Protected Area was inscribed as UNESCO World Heritage in 2010, what record did it set?",
        },
        options: [
          {
            zh: "是當時全球面積最大、也最深的世界遺產地",
            en: "It was then the largest — and deepest — World Heritage site on Earth",
          },
          { zh: "是第一個以城市入選的世界遺產", en: "It was the first city inscribed as World Heritage" },
          { zh: "是全球面積最小的世界遺產地", en: "It was the smallest World Heritage site on Earth" },
          { zh: "是第一個橫跨兩國的世界遺產", en: "It was the first site spanning two countries" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "保護區廣達約 408,250 平方公里,涵蓋八座幾近無人的環礁與大片深海,保存了完整的海底山與珊瑚礁生態系。",
          en: "Covering some 408,250 km², it takes in eight nearly uninhabited atolls and vast deep ocean, preserving intact seamount and reef ecosystems.",
        },
      },
      {
        question: {
          zh: "1950 至 60 年代,吉里斯馬斯島(聖誕島)一帶的海域與上空曾被用作什麼用途?",
          en: "In the 1950s and 60s, the waters and skies around Kiritimati (Christmas Island) were used for what purpose?",
        },
        options: [
          {
            zh: "英國與美國的核子武器試驗場",
            en: "Nuclear weapons testing grounds for Britain and the United States",
          },
          { zh: "國際捕鯨船隊的補給基地", en: "A supply base for international whaling fleets" },
          { zh: "跨太平洋海底電纜的中繼站", en: "A relay station for trans-Pacific undersea cables" },
          { zh: "首批人造衛星的回收落區", en: "A splashdown zone for the first satellites" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "英國 1957 至 58 年在此進行「格拉普爾行動」試爆首批氫彈,美國 1962 年又執行「多米尼克行動」系列試驗;這段歷史至今仍是島上居民與退伍軍人關注的議題。",
          en: "Britain's Operation Grapple detonated its first hydrogen bombs here in 1957–58, and the US followed with the Dominic series in 1962 — a legacy still followed closely by islanders and veterans.",
        },
      },
      {
        question: {
          zh: "吉里巴斯國旗上,在旭日與海浪上方展翅飛翔的是哪種鳥?",
          en: "On Kiribati's flag, which bird soars above the rising sun and the waves?",
        },
        options: [
          { zh: "軍艦鳥", en: "A frigatebird" },
          { zh: "信天翁", en: "An albatross" },
          { zh: "白尾熱帶鳥", en: "A white-tailed tropicbird" },
          { zh: "海鷗", en: "A seagull" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "軍艦鳥象徵力量、自由與傳統航海術;這種大鳥羽毛不防水、無法落在海面上,卻能乘著氣流在大洋上空翱翔數日不落地。",
          en: "The frigatebird stands for power, freedom, and traditional seafaring; lacking waterproof plumage it cannot land on the sea, yet it can ride the winds over the ocean for days without touching down.",
        },
      },
    ],
  },
  TUV: {
    extraQuiz: [
      {
        question: {
          zh: "以陸地面積計,吐瓦魯在全球主權國家中排名第幾小?",
          en: "By land area, where does Tuvalu rank among the world's smallest sovereign states?",
        },
        options: [
          {
            zh: "第四小,只有梵蒂岡、摩納哥與諾魯比它更小",
            en: "Fourth smallest — only Vatican City, Monaco, and Nauru are smaller",
          },
          { zh: "全球最小", en: "The smallest of all" },
          { zh: "第二小,僅大於梵蒂岡", en: "Second smallest, larger only than Vatican City" },
          { zh: "第十小", en: "Tenth smallest" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "全國陸地僅約 26 平方公里,卻分散在南北綿延數百公里的九座環礁與珊瑚島上,治理與交通成本因此格外高昂。",
          en: "Its 26 km² of land is scattered across nine atolls and reef islands strung over hundreds of kilometers, making governance and transport unusually costly.",
        },
      },
      {
        question: {
          zh: "「吐瓦魯」在當地語言中意為「八島同立」,但全國其實有九座島,為什麼名字只算八座?",
          en: "'Tuvalu' means 'eight standing together', yet the country has nine islands. Why does the name count only eight?",
        },
        options: [
          {
            zh: "第九座島尼烏拉基塔面積最小,傳統上長期沒有常住人口",
            en: "The ninth island, Niulakita, is the smallest and traditionally had no permanent population",
          },
          { zh: "第九座島是 20 世紀火山噴發才形成的", en: "The ninth island only formed in a 20th-century eruption" },
          { zh: "有一座島長期租借給外國使用", en: "One island was long leased to a foreign power" },
          { zh: "殖民時代的地圖把兩座島畫成了一座", en: "Colonial maps drew two islands as one" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傳統上有人定居的是八座島,最南端的小島尼烏拉基塔直到 1949 年才由紐塔奧島居民移居;國旗上的九顆星則把九座島全數納入。",
          en: "Eight islands were traditionally inhabited; tiny southernmost Niulakita was only settled in 1949 by people from Niutao. The nine stars on the flag, though, count them all.",
        },
      },
      {
        question: {
          zh: "2021 年格拉斯哥氣候峰會(COP26)期間,吐瓦魯外交部長西蒙·科菲以什麼方式發表演說而轟動全球?",
          en: "During the 2021 Glasgow climate summit (COP26), how did Tuvalu's foreign minister Simon Kofe deliver a speech that made global headlines?",
        },
        options: [
          {
            zh: "西裝筆挺站在及膝的海水中演講,凸顯海平面上升的威脅",
            en: "Standing at a lectern in a suit, knee-deep in seawater, to dramatize the threat of sea-level rise",
          },
          { zh: "在水下潛水艙內舉行記者會", en: "Holding a press conference from an underwater capsule" },
          { zh: "率領代表團游泳橫渡富納富提潟湖", en: "Leading his delegation on a swim across Funafuti's lagoon" },
          { zh: "在飛機上向峰會做空中連線直播", en: "Broadcasting live to the summit from an airplane" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "演說在富納富提一處昔日是乾地、如今沒入海水的地點錄製,影像傳遍全球,成為小島國氣候外交最具代表性的畫面之一。",
          en: "The address was filmed off Funafuti at a spot that was once dry land, and the image swept the world — one of the defining moments of small-island climate diplomacy.",
        },
      },
    ],
  },
  NRU: {
    extraQuiz: [
      {
        question: {
          zh: "1798 年英國船長約翰·費恩成為第一位記錄諾魯的歐洲人,他當時給這座島取了什麼名字?",
          en: "In 1798 British captain John Fearn became the first European to report Nauru. What name did he give the island?",
        },
        options: [
          { zh: "宜人島", en: "Pleasant Island" },
          { zh: "翡翠島", en: "Emerald Island" },
          { zh: "天意島", en: "Providence Island" },
          { zh: "海龜島", en: "Turtle Island" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "費恩率捕鯨船航經此地,對島上翠綠景致與友善居民印象深刻而取名「宜人島」;這個名字一直用到 1888 年德國兼併之後才逐漸被諾魯取代。",
          en: "Passing by on a whaling voyage, Fearn was struck by the island's greenery and friendly people; the name Pleasant Island stuck until after Germany's 1888 annexation, when 'Nauru' took over.",
        },
      },
      {
        question: {
          zh: "哪一項運動在諾魯最為風行,常被稱為它的國球?",
          en: "Which sport is by far the most popular in Nauru, often called its national game?",
        },
        options: [
          { zh: "澳式足球", en: "Australian rules football" },
          { zh: "英式橄欖球", en: "Rugby union" },
          { zh: "板球", en: "Cricket" },
          { zh: "棒球", en: "Baseball" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "澳式足球在 20 世紀上半葉隨與澳洲的往來傳入,如今島上聯賽是全民盛事;舉重則是諾魯在國際賽場的強項,名將馬庫斯·斯蒂芬拿下多面大賽金牌後還當上了總統。",
          en: "Footy arrived through ties with Australia in the early 20th century, and the island league is a national obsession; weightlifting is Nauru's other forte — champion Marcus Stephen won major-games golds and later became president.",
        },
      },
      {
        question: {
          zh: "1977 年諾魯以磷礦財富在澳洲墨爾本建成的「諾魯大廈」,落成當時有什麼地位?",
          en: "Nauru House, the tower Nauru's phosphate wealth built in Melbourne in 1977, held what distinction when completed?",
        },
        options: [
          { zh: "是當時全墨爾本最高的大樓", en: "It was then the tallest building in Melbourne" },
          { zh: "是南半球第一座玻璃帷幕大樓", en: "It was the Southern Hemisphere's first glass curtain-wall tower" },
          { zh: "是全球最高的木造建築", en: "It was the world's tallest timber building" },
          { zh: "是澳洲第一座配備直升機坪的大樓", en: "It was Australia's first tower with a helipad" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這座 52 層的大樓矗立在柯林斯街,象徵磷礦時代的鼎盛;2004 年諾魯因財政困難將它出售償債,也成了資源財富大起大落的著名教材。",
          en: "The 52-storey tower on Collins Street embodied the phosphate boom at its peak; in 2004 a debt-stricken Nauru sold it off — a textbook tale of resource riches won and lost.",
        },
      },
    ],
  },
  PLW: {
    extraQuiz: [
      {
        question: {
          zh: "帛琉「水母湖」裡有數百萬隻黃金水母,為什麼遊客能安心與牠們共游?",
          en: "Palau's Jellyfish Lake teems with millions of golden jellyfish. Why can visitors safely swim among them?",
        },
        options: [
          {
            zh: "牠們在與世隔絕的湖中演化,刺細胞毒性弱到人幾乎感覺不到",
            en: "Evolving in an isolated lake, their sting became so weak that humans can barely feel it",
          },
          { zh: "牠們天生完全沒有觸手", en: "They are born entirely without tentacles" },
          { zh: "湖水鹽度過高,使毒液無法作用", en: "The lake is so salty that their venom cannot work" },
          { zh: "牠們只在夜間才會螫人", en: "They only sting at night" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這座海水湖僅靠岩縫與外海相通,湖中水母體內共生藻類行光合作用,因此每天成群追著太陽橫渡湖面,是全球獨一無二的生態奇觀。",
          en: "The marine lake connects to the sea only through rock fissures; the jellyfish farm symbiotic algae and migrate across the lake each day following the sun — an ecological spectacle found nowhere else.",
        },
      },
      {
        question: {
          zh: "1981 年生效的帛琉憲法,在世界憲政史上創下什麼紀錄?",
          en: "Palau's constitution, which took effect in 1981, set what precedent in constitutional history?",
        },
        options: [
          { zh: "是全球第一部明文「非核」的憲法", en: "It was the world's first nuclear-free constitution" },
          { zh: "是全球字數最少的憲法", en: "It was the shortest constitution ever written" },
          { zh: "是第一部規定全民基本收入的憲法", en: "It was the first to mandate a universal basic income" },
          { zh: "是第一部以公民投票逐條通過的憲法", en: "It was the first ratified clause by clause by referendum" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "憲法規定核物質須經四分之三公投同意才能進入國土,這項條款與美國的自由聯繫條約多次牴觸,使條約延宕到 1994 年才隨獨立生效。",
          en: "It required a three-quarters referendum majority before nuclear materials could enter the country — a clause that clashed repeatedly with the US Compact, delaying it until independence in 1994.",
        },
      },
      {
        question: {
          zh: "帛琉傳統村落中,屋頂高聳、山牆繪滿彩色圖紋的木造集會所稱為什麼?",
          en: "In traditional Palauan villages, what is the name of the steep-roofed wooden meeting house with brightly painted gables?",
        },
        options: [
          { zh: "巴伊(bai)", en: "Bai" },
          { zh: "法雷(薩摩亞的茅屋)", en: "Fale (the Samoan hut)" },
          { zh: "馬內阿巴(吉里巴斯的集會所)", en: "Maneaba (the Kiribati meeting house)" },
          { zh: "瑪拉埃(毛利的集會場)", en: "Marae (the Maori meeting ground)" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "巴伊是酋長議事的場所,山牆上的圖紋記錄神話與村落歷史;今日帛琉著名的「故事板」木雕工藝,正是從巴伊的裝飾傳統演變而來。",
          en: "The bai housed the chiefs' councils, its gable paintings recording myths and village history; Palau's famous storyboard carvings evolved directly from this decorative tradition.",
        },
      },
    ],
  },
  FSM: {
    extraQuiz: [
      {
        question: {
          zh: "密克羅尼西亞聯邦的雅浦、楚克、波納佩、科斯雷四州,同屬哪一個大群島?",
          en: "The FSM's four states — Yap, Chuuk, Pohnpei, and Kosrae — all belong to which larger archipelago?",
        },
        options: [
          { zh: "加羅林群島", en: "The Caroline Islands" },
          { zh: "馬里亞納群島", en: "The Mariana Islands" },
          { zh: "吉爾伯特群島", en: "The Gilbert Islands" },
          { zh: "俾斯麥群島", en: "The Bismarck Archipelago" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "加羅林群島之名源自 17 世紀西班牙人為紀念國王卡洛斯二世所取,群島西端的帛琉同樣屬之;密克羅尼西亞聯邦涵蓋了加羅林群島的絕大部分。",
          en: "Spaniards named the Carolines in the 17th century for King Charles II of Spain; Palau at the chain's western end belongs to it too, and the FSM covers most of the archipelago.",
        },
      },
      {
        question: {
          zh: "在波納佩,重要儀式上飲用的傳統飲品「沙考」(sakau)是用什麼做成的?",
          en: "On Pohnpei, the ceremonial drink sakau is made from what?",
        },
        options: [
          {
            zh: "卡瓦胡椒的根,搗碎後榨汁",
            en: "The pounded, squeezed roots of the kava pepper plant",
          },
          { zh: "發酵的椰子汁", en: "Fermented coconut water" },
          { zh: "烤熟的麵包果泥", en: "Mashed roasted breadfruit" },
          { zh: "檳榔與石灰的混合物", en: "A mix of betel nut and lime" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "沙考就是波納佩語的卡瓦,傳統上在大石上搗根、以木槿樹皮絞汁,依嚴謹的順序奉飲;它與斐濟、萬那杜的卡瓦文化同源,而嚼檳榔則是雅浦的習俗。",
          en: "Sakau is the Pohnpeian word for kava — roots pounded on a great stone and strained through hibiscus bark, served in strict order. It shares roots with Fiji's and Vanuatu's kava culture, while betel chewing belongs to Yap.",
        },
      },
      {
        question: {
          zh: "1989 年密克羅尼西亞聯邦把首都遷到新建的帕利基爾,在那之前的首都是哪裡?",
          en: "In 1989 the FSM moved its capital to purpose-built Palikir. Where was the capital before that?",
        },
        options: [
          { zh: "科洛尼亞(波納佩島上的主要市鎮)", en: "Kolonia, the main town on Pohnpei" },
          { zh: "科洛尼亞(雅浦州首府)", en: "Colonia, the capital of Yap" },
          { zh: "韋諾(楚克州首府)", en: "Weno, the capital of Chuuk" },
          { zh: "塞班島", en: "Saipan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "波納佩的科洛尼亞至今仍是全國最熱鬧的市鎮,新首都帕利基爾就建在數公里外的山谷;而塞班曾是美國託管的太平洋島嶼領地的行政中心。",
          en: "Kolonia on Pohnpei remains the country's liveliest town, with Palikir built in a valley just a few kilometers away; Saipan, meanwhile, had been the seat of the US Trust Territory of the Pacific Islands.",
        },
      },
    ],
  },
  MHL: {
    extraQuiz: [
      {
        question: {
          zh: "1954 年 3 月 1 日美國在比基尼環礁進行的「喝彩城堡」試驗,在核試歷史上有什麼地位?",
          en: "The Castle Bravo test the US conducted at Bikini Atoll on March 1, 1954 holds what place in nuclear-testing history?",
        },
        options: [
          {
            zh: "是美國歷來威力最大的核試,當量約 1,500 萬噸,遠超出原先預估",
            en: "It was the most powerful US nuclear test ever, yielding about 15 megatons — far beyond predictions",
          },
          { zh: "是人類史上第一次核試驗", en: "It was the first nuclear test in history" },
          { zh: "是全球最後一次大氣層核試", en: "It was the world's last atmospheric nuclear test" },
          { zh: "是第一次在潛艇上進行的核試", en: "It was the first test conducted from a submarine" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "爆炸威力約為廣島原子彈的 1,000 倍,落塵波及朗格拉普等環礁與日本漁船第五福龍丸;馬紹爾群島至今將 3 月 1 日訂為核受難者紀念日。",
          en: "Roughly a thousand times the Hiroshima bomb, its fallout reached Rongelap and other atolls and the Japanese fishing boat Lucky Dragon No. 5; the Marshall Islands still marks March 1 as Nuclear Victims Remembrance Day.",
        },
      },
      {
        question: {
          zh: "全球有數千艘商船懸掛馬紹爾群島的國旗,原因是什麼?",
          en: "Thousands of merchant ships around the world fly the Marshall Islands flag. Why?",
        },
        options: [
          {
            zh: "它經營開放船舶登記制度(權宜船籍),是全球規模最大的船籍國之一",
            en: "It runs an open ship registry — a flag of convenience — making it one of the world's largest flag states",
          },
          { zh: "它擁有全球最大的造船廠", en: "It has the world's largest shipyard" },
          { zh: "它的海軍為商船提供護航", en: "Its navy escorts merchant ships" },
          { zh: "國際法規定太平洋航線船隻須在此註冊", en: "International law requires Pacific-route ships to register there" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "船東只要付費登記即可懸掛馬紹爾旗,登記業務其實由設在美國的公司代管;登記費與漁權收入同為這個小國財政的重要來源。",
          en: "Shipowners pay to register under the Marshallese flag, with the registry actually administered by a US-based company; registry fees, alongside fishing licenses, are a key revenue stream for the small nation.",
        },
      },
      {
        question: {
          zh: "馬紹爾群島哪一年首次以獨立國家身分參加奧運?",
          en: "In what year did the Marshall Islands first compete at the Olympic Games as an independent nation?",
        },
        options: [
          { zh: "2008 年北京奧運", en: "2008, in Beijing" },
          { zh: "1988 年漢城(首爾)奧運", en: "1988, in Seoul" },
          { zh: "1996 年亞特蘭大奧運", en: "1996, in Atlanta" },
          { zh: "2016 年里約奧運", en: "2016, in Rio de Janeiro" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬紹爾群島奧會 2006 年才獲國際奧會承認,2008 年首度派出小型代表團參賽;在那之前它是聯合國會員國中少數從未踏上奧運舞台的國家。",
          en: "Its national Olympic committee was only recognized in 2006, and a small team debuted in 2008; until then it was one of the few UN members never to have appeared at the Games.",
        },
      },
    ],
  },
};
