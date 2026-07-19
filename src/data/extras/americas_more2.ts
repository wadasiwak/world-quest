import type { CountryExtras } from "../types";

// Advanced question banks for northern South America and the Lesser
// Antilles. Climate/travelTips live inline in the base country files, so
// these entries are quiz-only.

export const AMERICAS_MORE2_EXTRAS: Record<string, CountryExtras> = {
  ECU: {
    extraQuiz: [
      {
        question: {
          zh: "基多以南、海拔 5,897 公尺的哪座錐形火山,是世界最高的活火山之一?",
          en: "Which cone-shaped volcano south of Quito, at 5,897 meters, ranks among the world's highest active volcanoes?",
        },
        options: [
          { zh: "科托帕希火山", en: "Cotopaxi" },
          { zh: "欽博拉索火山", en: "Chimborazo" },
          { zh: "皮欽查火山", en: "Pichincha" },
          { zh: "通古拉瓦火山", en: "Tungurahua" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "科托帕希近乎完美的雪頂圓錐是厄瓜多「火山大道」的地標,近代多次噴發,2015 年還曾恢復活動。",
          en: "Cotopaxi's near-perfect snow-capped cone anchors Ecuador's 'Avenue of the Volcanoes'; it has erupted repeatedly in modern times, most recently reawakening in 2015.",
        },
      },
      {
        question: {
          zh: "厄瓜多 2008 年的新憲法開創了什麼全球先例?",
          en: "Ecuador's 2008 constitution set what global precedent?",
        },
        options: [
          {
            zh: "成為第一個在憲法中賦予自然法律權利的國家",
            en: "It became the first country to grant nature legal rights in its constitution",
          },
          {
            zh: "成為第一個在憲法中廢除軍隊的國家",
            en: "It became the first country to abolish its army in its constitution",
          },
          {
            zh: "成為第一個將全民基本收入入憲的國家",
            en: "It became the first country to enshrine universal basic income",
          },
          {
            zh: "成為第一個立法禁止塑膠袋的國家",
            en: "It became the first country to ban plastic bags by law",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這部憲法以安地斯世界觀中的大地之母「帕查媽媽」為名,承認生態系有存在與再生的權利,任何人都可代自然提告。",
          en: "Invoking Pachamama, the Andean earth mother, the charter recognizes ecosystems' right to exist and regenerate — and lets anyone sue on nature's behalf.",
        },
      },
      {
        question: {
          zh: "厄瓜多長期供應全球過半的哪種高級農產原料,深受頂級巧克力師青睞?",
          en: "Ecuador has long supplied over half the world's output of which premium crop, prized by top chocolatiers?",
        },
        options: [
          { zh: "細緻風味可可", en: "Fine-flavor cacao" },
          { zh: "精品咖啡豆", en: "Specialty coffee beans" },
          { zh: "天然香草莢", en: "Natural vanilla pods" },
          { zh: "瑪黛茶葉", en: "Yerba mate leaves" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "厄瓜多的「Arriba Nacional」可可以花果香聞名,是國際可可組織認證的細緻風味可可最大產地。",
          en: "Ecuador's Arriba Nacional beans, famed for floral and fruity notes, make it the top producer of fine-flavor cocoa as classified by the International Cocoa Organization.",
        },
      },
    ],
  },
  VEN: {
    extraQuiz: [
      {
        question: {
          zh: "柯南·道爾的小說《失落的世界》,靈感來自委內瑞拉哪座平頂桌山?",
          en: "Arthur Conan Doyle's novel The Lost World was inspired by which tabletop mountain in Venezuela?",
        },
        options: [
          { zh: "羅賴馬山", en: "Mount Roraima" },
          { zh: "奧揚特普伊山", en: "Auyán-tepui" },
          { zh: "玻利瓦峰", en: "Pico Bolívar" },
          { zh: "內布利納峰", en: "Pico da Neblina" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "羅賴馬山的峰頂高原孤立於雲海之上,誘發了「史前生物倖存」的想像;山頂同時是委內瑞拉、蓋亞那與巴西三國的交界點。",
          en: "Roraima's summit plateau, marooned above the clouds, fed the fantasy of surviving prehistoric life; the top is also the tripoint of Venezuela, Guyana, and Brazil.",
        },
      },
      {
        question: {
          zh: "委內瑞拉 1975 年創立、培養出指揮家杜達美的著名青少年音樂教育計畫叫什麼?",
          en: "What is the famous youth music-education program founded in Venezuela in 1975 that produced conductor Gustavo Dudamel?",
        },
        options: [
          { zh: "「體系」(El Sistema)", en: "El Sistema" },
          { zh: "「好景俱樂部」計畫", en: "The Buena Vista program" },
          { zh: "「森巴進校園」計畫", en: "The Samba in Schools program" },
          { zh: "「探戈種子」計畫", en: "The Tango Seeds program" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "音樂家阿布留創辦的 El Sistema 讓數十萬清寒兒童免費學習古典樂,西蒙·玻利瓦青年管弦樂團揚名國際,模式被全球數十國仿效。",
          en: "Founded by José Antonio Abreu, El Sistema has given free classical training to hundreds of thousands of poor children; its Simón Bolívar Youth Orchestra won world fame, and dozens of countries have copied the model.",
        },
      },
      {
        question: {
          zh: "調酒不可或缺的「安格式苦精」(Angostura bitters),1824 年誕生於委內瑞拉哪座城市?",
          en: "Angostura bitters, the cocktail staple, was created in 1824 in which Venezuelan city?",
        },
        options: [
          { zh: "安戈斯圖拉(今玻利瓦爾城)", en: "Angostura (today's Ciudad Bolívar)" },
          { zh: "卡拉卡斯", en: "Caracas" },
          { zh: "馬拉開波", en: "Maracaibo" },
          { zh: "巴倫西亞", en: "Valencia" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "德國軍醫西格特在奧里諾科河畔的安戈斯圖拉調配出這款藥用苦精,配方至今保密;1870 年代工廠遷往千里達,生產延續至今。",
          en: "German army surgeon Johann Siegert blended the medicinal bitters in Angostura on the Orinoco; the recipe remains secret, and production moved to Trinidad in the 1870s, where it continues today.",
        },
      },
    ],
  },
  GUY: {
    extraQuiz: [
      {
        question: {
          zh: "蓋亞那的國花是哪種水生植物,也出現在國徽的圖案上?",
          en: "Which aquatic plant is Guyana's national flower, also featured on its coat of arms?",
        },
        options: [
          { zh: "亞馬遜王蓮", en: "The Victoria amazonica giant water lily" },
          { zh: "赫蕉", en: "The heliconia" },
          { zh: "雞蛋花", en: "The frangipani" },
          { zh: "扶桑花", en: "The hibiscus" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "亞馬遜王蓮是世界最大的睡蓮,圓盤狀浮葉直徑可達 3 公尺,足以承載孩童;它以英國維多利亞女王命名。",
          en: "Victoria amazonica is the world's largest water lily — its tray-like pads can reach 3 meters across and support a child — and it was named after Britain's Queen Victoria.",
        },
      },
      {
        question: {
          zh: "蓋亞那的國家英雄庫菲(Cuffy)因領導哪一場事件而留名,喬治城立有他的紀念雕像?",
          en: "Guyana's national hero Cuffy is remembered for leading which event, honored by a monument in Georgetown?",
        },
        options: [
          {
            zh: "1763 年伯比斯奴隸大起義",
            en: "The great Berbice slave rebellion of 1763",
          },
          {
            zh: "對荷蘭西印度公司船隊的海上叛變",
            en: "A shipboard mutiny against the Dutch West India Company fleet",
          },
          {
            zh: "19 世紀末的淘金工人大罷工",
            en: "A gold miners' general strike in the late 19th century",
          },
          {
            zh: "推翻英國殖民政府的武裝獨立戰爭",
            en: "An armed war of independence against the British colonial government",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "庫菲率領數千名奴隸起義,一度控制伯比斯殖民地近一年;蓋亞那將 1970 年改制共和的日子定在 2 月 23 日,正是為了紀念起義爆發日。",
          en: "Cuffy led thousands of enslaved people and controlled the Berbice colony for nearly a year; Guyana became a republic on 23 February 1970, a date chosen to honor the uprising's outbreak.",
        },
      },
      {
        question: {
          zh: "「蓋亞那」(Guyana)這個國名源自原住民語言,原意是什麼?",
          en: "The name 'Guyana' comes from an Amerindian language. What does it mean?",
        },
        options: [
          { zh: "眾水之地", en: "Land of many waters" },
          { zh: "黃金之國", en: "Land of gold" },
          { zh: "森林之心", en: "Heart of the forest" },
          { zh: "日出之地", en: "Land of the rising sun" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "境內埃塞奎博、德梅拉拉、伯比斯等大河縱橫,瀑布與溪流無數,「眾水之地」名符其實;傳說中的黃金城「黃金國」倒也曾吸引雷利前來探尋。",
          en: "With the Essequibo, Demerara, Berbice, and countless falls and creeks, 'land of many waters' fits well — though legends of El Dorado did lure Sir Walter Raleigh here too.",
        },
      },
    ],
  },
  SUR: {
    extraQuiz: [
      {
        question: {
          zh: "2000 年列入世界自然遺產的中蘇利南自然保護區,面積約占全國多少?",
          en: "The Central Suriname Nature Reserve, a natural World Heritage Site since 2000, covers roughly what share of the country?",
        },
        options: [
          { zh: "約十分之一", en: "About one tenth" },
          { zh: "約一半", en: "About one half" },
          { zh: "約四分之三", en: "About three quarters" },
          { zh: "不到百分之一", en: "Less than one percent" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "保護區面積約 160 萬公頃,涵蓋科佩納梅河上游的原始雨林與花崗岩穹丘沃茲山,幾乎未受人類活動干擾。",
          en: "The reserve spans about 1.6 million hectares of pristine upper-Coppename rainforest, including the granite dome of the Voltzberg, and remains almost untouched by human activity.",
        },
      },
      {
        question: {
          zh: "蘇利南各族群之間日常溝通最常用的克里奧爾語是哪一種?",
          en: "Which creole language serves as the everyday lingua franca among Suriname's many communities?",
        },
        options: [
          { zh: "蘇拉南語(Sranan Tongo)", en: "Sranan Tongo" },
          { zh: "帕皮阿門托語", en: "Papiamento" },
          { zh: "海地克里奧爾語", en: "Haitian Creole" },
          { zh: "加里富納語", en: "Garifuna" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "Sranan Tongo 以英語為基底,融合荷語、葡語與西非語彙,雖然官方語言是荷蘭語,街頭寒暄與流行歌謠多用它。",
          en: "English-based Sranan Tongo blends Dutch, Portuguese, and West African vocabulary; Dutch is official, but street talk and popular songs run on Sranan.",
        },
      },
      {
        question: {
          zh: "1960 年代蘇利南興建阿福巴卡水壩、形成廣達約 1,560 平方公里的布羅科蓬多水庫,當初主要是為了供電給哪種產業?",
          en: "The Afobaka Dam, built in the 1960s to create the roughly 1,560 km² Brokopondo Reservoir, was primarily meant to power which industry?",
        },
        options: [
          { zh: "煉鋁業", en: "Aluminum smelting" },
          { zh: "蔗糖業", en: "Sugar refining" },
          { zh: "紡織業", en: "Textile manufacturing" },
          { zh: "造船業", en: "Shipbuilding" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "水壩由美國鋁業公司出資興建,以水電將本地鋁土礦煉成鋁;蓄水淹沒大片雨林,迫使數千名馬倫人遷村,是南美早期大型水庫之一。",
          en: "Financed by Alcoa to smelt local bauxite into aluminum with hydropower, the dam flooded vast rainforest and displaced thousands of Maroon villagers — one of South America's earliest mega-reservoirs.",
        },
      },
    ],
  },
  PRY: {
    extraQuiz: [
      {
        question: {
          zh: "巴拉圭國旗有什麼世界罕見的特點?",
          en: "What rare distinction does Paraguay's national flag hold?",
        },
        options: [
          {
            zh: "正面與背面的徽章圖案不同",
            en: "Its front and back carry different emblems",
          },
          {
            zh: "是全球唯一的正方形國旗",
            en: "It is the world's only square national flag",
          },
          {
            zh: "是全球唯一只用黑白兩色的國旗",
            en: "It is the world's only national flag in just black and white",
          },
          {
            zh: "法律規定必須垂直懸掛",
            en: "By law it must be flown vertically",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "旗面正面是國徽,背面則是國庫印章上的獅子與「和平與正義」字樣,是目前唯一兩面圖案不同的國旗。",
          en: "The obverse bears the national coat of arms, the reverse the treasury seal with a lion and the motto 'Peace and Justice' — currently the only national flag with different designs on each side.",
        },
      },
      {
        question: {
          zh: "巴拉圭伊塔瓜鎮特產的傳統蕾絲「ñandutí」,這個瓜拉尼語詞的原意是什麼?",
          en: "Ñandutí, the traditional lace of Itauguá in Paraguay, takes its name from a Guaraní word meaning what?",
        },
        options: [
          { zh: "蜘蛛網", en: "Spider web" },
          { zh: "彩虹", en: "Rainbow" },
          { zh: "星辰", en: "Stars" },
          { zh: "蝴蝶", en: "Butterfly" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這種以圓形放射紋樣為特色的細緻蕾絲,形似蛛網而得名,是巴拉圭最具代表性的手工藝,常用於婚紗與節慶服飾。",
          en: "The delicate lace, woven in radiating circular motifs that resemble a spider's web, is Paraguay's signature craft, adorning wedding dresses and festival wear.",
        },
      },
      {
        question: {
          zh: "南美洲只有兩個內陸國,除了巴拉圭之外,另一個是誰?",
          en: "South America has only two landlocked countries. Besides Paraguay, which is the other?",
        },
        options: [
          { zh: "玻利維亞", en: "Bolivia" },
          { zh: "烏拉圭", en: "Uruguay" },
          { zh: "秘魯", en: "Peru" },
          { zh: "厄瓜多", en: "Ecuador" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩國都曾在戰爭中失去出海口的希望:巴拉圭靠巴拉圭河經拉布拉他河出海,河運至今仍是外貿命脈,亞松森是重要內河港。",
          en: "Paraguay reaches the sea via the Paraguay and Paraná rivers to the Río de la Plata — river shipping remains its trade lifeline, with Asunción a major inland port.",
        },
      },
    ],
  },
  BRB: {
    extraQuiz: [
      {
        question: {
          zh: "1751 年,哪位後來的美國總統造訪巴貝多,而且這是他一生唯一一次離開北美洲的旅行?",
          en: "In 1751, which future US president visited Barbados — the only trip outside North America he ever made?",
        },
        options: [
          { zh: "喬治·華盛頓", en: "George Washington" },
          { zh: "湯瑪斯·傑佛遜", en: "Thomas Jefferson" },
          { zh: "約翰·亞當斯", en: "John Adams" },
          { zh: "詹姆士·麥迪遜", en: "James Madison" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "19 歲的華盛頓陪罹患肺結核的兄長來此療養,自己卻染上天花並痊癒,因而終身免疫;他下榻的宅邸現為「喬治·華盛頓之家」博物館。",
          en: "Nineteen-year-old Washington accompanied his tuberculosis-stricken brother, caught smallpox here and recovered — gaining lifelong immunity; the house where he stayed is now the George Washington House museum.",
        },
      },
      {
        question: {
          zh: "巴貝多國旗中央的圖案是什麼?",
          en: "What emblem sits at the center of the Barbadian flag?",
        },
        options: [
          { zh: "斷柄的三叉戟頭", en: "A broken trident head" },
          { zh: "交叉的兩根甘蔗", en: "Two crossed sugar canes" },
          { zh: "一條飛魚", en: "A flying fish" },
          { zh: "升起的太陽", en: "A rising sun" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "三叉戟取自殖民時期徽章上海神手中的武器,獨立時特意折斷杖柄,象徵與殖民過去決裂;黑色戟頭配金藍三直條即今日國旗。",
          en: "The trident comes from Neptune's weapon on the colonial badge; its shaft was deliberately 'broken' at independence to symbolize the break with the colonial past, set against gold and ultramarine bands.",
        },
      },
      {
        question: {
          zh: "哪種常見的柑橘類水果,被認為 18 世紀起源於巴貝多?",
          en: "Which common citrus fruit is believed to have originated in Barbados in the 18th century?",
        },
        options: [
          { zh: "葡萄柚", en: "The grapefruit" },
          { zh: "柳橙", en: "The orange" },
          { zh: "檸檬", en: "The lemon" },
          { zh: "萊姆", en: "The lime" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "葡萄柚是甜橙與柚子在島上自然雜交的產物,早期被稱為「禁果」,後來才因果實成串如葡萄而得到現名。",
          en: "The grapefruit arose on the island as a natural cross between the sweet orange and the pomelo; first dubbed the 'forbidden fruit', it was later renamed for growing in grape-like clusters.",
        },
      },
    ],
  },
  LCA: {
    extraQuiz: [
      {
        question: {
          zh: "聖露西亞常被稱為世界上唯一以女性命名的國家,它紀念的是哪位人物?",
          en: "Saint Lucia is often called the world's only country named after a woman. Whom does it honor?",
        },
        options: [
          { zh: "敘拉古的聖女露西", en: "Saint Lucy of Syracuse" },
          { zh: "聖女貞德", en: "Joan of Arc" },
          { zh: "卡斯提爾的伊莎貝拉女王", en: "Queen Isabella of Castile" },
          { zh: "維多利亞女王", en: "Queen Victoria" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "相傳法國水手在 12 月 13 日聖露西日遇船難漂抵此島,遂以這位西西里殉道聖女命名;12 月 13 日至今仍是聖露西亞的國家日。",
          en: "French sailors are said to have been shipwrecked here on 13 December, the feast of the Sicilian martyr Saint Lucy, and named the island for her; 13 December remains Saint Lucia's National Day.",
        },
      },
      {
        question: {
          zh: "聖露西亞的國鳥是哪種只生活在本島的特有鳥類?",
          en: "Saint Lucia's national bird is which species found nowhere else on Earth?",
        },
        options: [
          { zh: "聖露西亞亞馬遜鸚鵡", en: "The Saint Lucia amazon parrot" },
          { zh: "美洲紅鹮", en: "The scarlet ibis" },
          { zh: "褐鰹鳥", en: "The brown booby" },
          { zh: "大藍鷺", en: "The great blue heron" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "暱稱「Jacquot」的這種綠身彩面鸚鵡一度瀕臨滅絕,1970 年代僅剩約百餘隻,經數十年保育後族群已明顯回升。",
          en: "Nicknamed the Jacquot, the green, rainbow-faced parrot nearly vanished — only about a hundred or so remained in the 1970s — before decades of conservation brought numbers back up.",
        },
      },
      {
        question: {
          zh: "蘇弗里耶爾近郊的硫磺泉地熱區,以什麼響亮的觀光稱號聞名?",
          en: "The Sulphur Springs geothermal area near Soufrière is famous under what catchy tourism title?",
        },
        options: [
          {
            zh: "「世界唯一可開車進入的火山」",
            en: "'The world's only drive-in volcano'",
          },
          {
            zh: "「加勒比的黃石公園」",
            en: "'The Yellowstone of the Caribbean'",
          },
          {
            zh: "「大西洋的地獄之門」",
            en: "'The Hell's Gate of the Atlantic'",
          },
          {
            zh: "「小安地列斯的溫泉之都」",
            en: "'The hot-spring capital of the Lesser Antilles'",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "公路直達塌陷火山口邊緣,遊客可近看翻滾的泥漿噴氣孔,再到下游泡富含礦物質的火山泥浴,是聖露西亞招牌行程。",
          en: "A road runs right to the rim of the collapsed crater, where visitors watch bubbling mud fumaroles and then soak in mineral-rich volcanic mud baths downstream — a signature Saint Lucia outing.",
        },
      },
    ],
  },
  VCT: {
    extraQuiz: [
      {
        question: {
          zh: "1902 年 5 月聖文森的蘇弗里耶爾火山大噴發、奪走上千條人命,僅僅兩天後加勒比另一座火山也發生毀滅性噴發,是哪一座?",
          en: "In May 1902 La Soufrière on Saint Vincent erupted, killing over a thousand people; just two days later another Caribbean volcano erupted catastrophically. Which one?",
        },
        options: [
          { zh: "馬提尼克的培雷火山", en: "Mont Pelée on Martinique" },
          {
            zh: "蒙特塞拉特的蘇弗里耶爾丘陵火山",
            en: "The Soufrière Hills on Montserrat",
          },
          {
            zh: "格瑞那達外海的 Kick 'em Jenny 海底火山",
            en: "The Kick 'em Jenny submarine volcano off Grenada",
          },
          {
            zh: "聖克里斯多福的利亞穆伊加火山",
            en: "Mount Liamuiga on Saint Kitts",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "5 月 6 至 7 日蘇弗里耶爾先爆發,5 月 8 日培雷火山的火山碎屑流瞬間毀滅聖皮埃爾城、罹難者近三萬,兩場災難震驚世界並催生了現代火山學。",
          en: "La Soufrière blew on 6–7 May; on 8 May Mont Pelée's pyroclastic flow obliterated Saint-Pierre, killing nearly 30,000. The twin disasters shocked the world and helped launch modern volcanology.",
        },
      },
      {
        question: {
          zh: "聖文森長期是全球最大的哪種澱粉作物生產國,其產品常用於嬰兒食品與餅乾?",
          en: "Saint Vincent has long been the world's largest producer of which starch crop, used in baby food and biscuits?",
        },
        options: [
          { zh: "葛(竹芋)", en: "Arrowroot" },
          { zh: "樹薯", en: "Cassava" },
          { zh: "芋頭", en: "Taro" },
          { zh: "山藥", en: "Yam" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "葛粉質地細緻、易於消化,聖文森供應了全球大部分產量;香蕉業衰退後,葛粉重新成為島上農業的招牌。",
          en: "Fine and easily digested, arrowroot starch from Saint Vincent supplies most of the world market — and after the banana trade declined, it reclaimed its place as the island's signature crop.",
        },
      },
      {
        question: {
          zh: "綿延在聖文森以南的格瑞那丁群島,分屬聖文森及格瑞那丁與哪個鄰國?",
          en: "The Grenadines island chain trailing south of Saint Vincent is divided between Saint Vincent and the Grenadines and which neighboring country?",
        },
        options: [
          { zh: "格瑞那達", en: "Grenada" },
          { zh: "聖露西亞", en: "Saint Lucia" },
          { zh: "巴貝多", en: "Barbados" },
          { zh: "千里達及托巴哥", en: "Trinidad and Tobago" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "群島北段(貝基亞、瑪斯蒂克、尤寧島等)屬聖文森,南段(卡里亞庫、小馬提尼克)屬格瑞那達,兩國國名都直接寫進了這串島鏈。",
          en: "The northern Grenadines (Bequia, Mustique, Union Island, etc.) belong to Saint Vincent, while the southern ones (Carriacou, Petite Martinique) are Grenada's — both countries even carry the chain in their names.",
        },
      },
    ],
  },
  GRD: {
    extraQuiz: [
      {
        question: {
          zh: "格瑞那達以北約 8 公里的海面下,藏著一座名為「Kick 'em Jenny」的什麼?",
          en: "About 8 kilometers north of Grenada, beneath the sea, lies 'Kick 'em Jenny' — what is it?",
        },
        options: [
          {
            zh: "加勒比海域最活躍的海底活火山",
            en: "The most active submarine volcano in the Caribbean",
          },
          {
            zh: "世界最深的海底藍洞",
            en: "The world's deepest ocean blue hole",
          },
          {
            zh: "著名的二戰沉船潛點",
            en: "A famous World War II shipwreck dive site",
          },
          {
            zh: "巨大的環形珊瑚礁",
            en: "A giant ring-shaped coral reef",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "它自 1939 年首次記錄噴發以來已活動十餘次,山頂距海面不到 200 公尺,周邊海域平時劃有 1.5 公里的禁航區。",
          en: "It has erupted more than a dozen times since its first recorded outburst in 1939; its summit lies less than 200 meters below the surface, and a 1.5-kilometer exclusion zone applies to passing vessels.",
        },
      },
      {
        question: {
          zh: "格瑞那達除主島外還轄有格瑞那丁群島南段,其中面積最大的屬島是哪一座?",
          en: "Besides the main island, Grenada governs the southern Grenadines. Which is the largest of its dependent islands?",
        },
        options: [
          { zh: "卡里亞庫島", en: "Carriacou" },
          { zh: "貝基亞島", en: "Bequia" },
          { zh: "瑪斯蒂克島", en: "Mustique" },
          { zh: "尤寧島", en: "Union Island" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "卡里亞庫也是整個格瑞那丁群島中最大的島,以傳統木造帆船工藝與「大鼓節」聞名;其餘三個選項都屬於聖文森。",
          en: "Carriacou is also the largest island in the whole Grenadines chain, known for wooden-boat building and its Big Drum festival; the other three options belong to Saint Vincent.",
        },
      },
      {
        question: {
          zh: "格瑞那達的國菜「oil down」,是以椰奶燉煮哪種主食與醃肉而成的一鍋料理?",
          en: "Grenada's national dish, oil down, is a one-pot stew of salted meat and which staple simmered in coconut milk?",
        },
        options: [
          { zh: "麵包果", en: "Breadfruit" },
          { zh: "大蕉", en: "Plantain" },
          { zh: "樹薯", en: "Cassava" },
          { zh: "玉米", en: "Corn" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "椰奶收乾後只留下椰油精華,故名「oil down」;鍋中還會加入薑黃、可食用的芋葉與湯糰,是村里聚會的定番菜色。",
          en: "The coconut milk cooks down until only its oil remains — hence the name — with turmeric, callaloo leaves, and dumplings joining the pot at village get-togethers.",
        },
      },
    ],
  },
  ATG: {
    extraQuiz: [
      {
        question: {
          zh: "「安地卡」這個島名,是哥倫布 1493 年依什麼命名的?",
          en: "Columbus named Antigua in 1493 after what?",
        },
        options: [
          {
            zh: "西班牙塞維亞教堂的「老聖母」聖像",
            en: "The icon of Santa María la Antigua in Seville's cathedral",
          },
          {
            zh: "他這次航行的旗艦艦名",
            en: "The flagship of that voyage",
          },
          {
            zh: "西班牙王后的封號",
            en: "A title of the Queen of Spain",
          },
          {
            zh: "資助航行的公爵夫人",
            en: "A duchess who funded the voyage",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "Santa María la Antigua 意為「古老的聖母」,是塞維亞主教座堂中著名的聖母壁畫;哥倫布第二次航行途經此島時以其命名。",
          en: "Santa María la Antigua — 'Saint Mary the Ancient' — is a revered Madonna image in Seville Cathedral; Columbus bestowed the name while sailing past on his second voyage.",
        },
      },
      {
        question: {
          zh: "安地卡及巴布達除了兩座主島之外,還包括哪座無人居住的岩石小島?",
          en: "Besides its two main islands, Antigua and Barbuda includes which uninhabited rocky islet?",
        },
        options: [
          { zh: "雷東達島", en: "Redonda" },
          { zh: "安圭拉島", en: "Anguilla" },
          { zh: "蒙特塞拉特島", en: "Montserrat" },
          { zh: "聖巴瑟米島", en: "Saint Barthélemy" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這座陡峭的火山岩島曾被開採鳥糞磷礦,還衍生出文人間代代相傳的「雷東達王國」虛構王位傳說;其餘選項都是別國或英法屬地。",
          en: "The steep volcanic rock was once mined for guano phosphates and spawned the literary legend of a 'Kingdom of Redonda' with its own fanciful royal line; the other options are separate territories.",
        },
      },
      {
        question: {
          zh: "安地卡的「國家水果」是哪種號稱世界最甜的農產品種?",
          en: "Antigua's national fruit is which variety, claimed to be the sweetest of its kind in the world?",
        },
        options: [
          { zh: "安地卡黑鳳梨", en: "The Antigua black pineapple" },
          { zh: "刺果番荔枝", en: "The soursop" },
          { zh: "海葡萄", en: "The sea grape" },
          { zh: "金蘋果(太平洋橄欖)", en: "The golden apple" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "黑鳳梨由加勒比原住民自南美帶來,主要種在島嶼西南部,果肉小巧、甜度極高;它也出現在國徽頂端的圖案上。",
          en: "Brought from South America by Amerindian settlers and grown mainly in the island's southwest, the small, intensely sweet pineapple even crowns the national coat of arms.",
        },
      },
    ],
  },
  KNA: {
    extraQuiz: [
      {
        question: {
          zh: "尼維斯島名源自西班牙語「Nuestra Señora de las Nieves」,意思是什麼?",
          en: "Nevis takes its name from the Spanish 'Nuestra Señora de las Nieves', meaning what?",
        },
        options: [
          { zh: "雪中聖母", en: "Our Lady of the Snows" },
          { zh: "海上聖母", en: "Our Lady of the Seas" },
          { zh: "慈悲聖母", en: "Our Lady of Mercy" },
          { zh: "勝利聖母", en: "Our Lady of Victory" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "尼維斯峰山頂終年繚繞的白雲,讓西班牙水手聯想到積雪,因而以「雪」為這座熱帶火山島命名。",
          en: "The white clouds that perpetually wreathe Nevis Peak reminded Spanish sailors of snow, so a tropical volcanic island ended up named for it.",
        },
      },
      {
        question: {
          zh: "聖克里斯多福島最高峰、海拔 1,156 公尺的利亞穆伊加火山,在英國殖民時代原本叫什麼名字?",
          en: "Mount Liamuiga, Saint Kitts' 1,156-meter highest peak, went by what name in British colonial times?",
        },
        options: [
          { zh: "悲慘山(Mount Misery)", en: "Mount Misery" },
          { zh: "皇冠山(Mount Crown)", en: "Mount Crown" },
          { zh: "風暴山(Mount Tempest)", en: "Mount Tempest" },
          { zh: "聖喬治山(Mount St. George)", en: "Mount St. George" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1983 年獨立時改用卡里納哥語舊名「Liamuiga」,意為「肥沃的土地」,一掃殖民舊名的陰鬱;山頂火山口可健行抵達。",
          en: "At independence in 1983 it was renamed with the Kalinago word Liamuiga, 'fertile land', shedding the gloomy colonial name; hikers can reach its crater rim.",
        },
      },
      {
        question: {
          zh: "聖克里斯多福及尼維斯的國鳥是哪種海鳥,國徽兩側的護盾獸也是牠?",
          en: "Which seabird is the national bird of Saint Kitts and Nevis, also serving as the supporters on its coat of arms?",
        },
        options: [
          { zh: "褐鵜鶘", en: "The brown pelican" },
          { zh: "軍艦鳥", en: "The frigate bird" },
          { zh: "紅嘴熱帶鳥", en: "The red-billed tropicbird" },
          { zh: "笑鷗", en: "The laughing gull" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "國徽盾牌兩側各立著一隻褐鵜鶘,牠俯衝入海捕魚的身影在兩島沿岸隨處可見,也是美國路易斯安那州的州鳥。",
          en: "A brown pelican stands on each side of the shield on the coat of arms; its plunge-diving silhouette is a fixture along both islands' coasts — and it is also Louisiana's state bird.",
        },
      },
    ],
  },
  DMA: {
    extraQuiz: [
      {
        question: {
          zh: "卡里納哥人稱多米尼克為「Waitukubuli」,這個名字的意思是什麼?",
          en: "The Kalinago call Dominica 'Waitukubuli'. What does the name mean?",
        },
        options: [
          { zh: "「她的身軀高大」", en: "'Tall is her body'" },
          { zh: "「太陽升起之地」", en: "'Land of the rising sun'" },
          { zh: "「海中的花園」", en: "'Garden in the sea'" },
          { zh: "「勇士之島」", en: "'Island of warriors'" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "名字描繪島上群峰高聳入雲的身影;貫穿全島的「Waitukubuli 國家步道」全長約 185 公里,是加勒比第一條長程健行步道。",
          en: "The name evokes the island's peaks towering into the clouds; the 185-kilometer Waitukubuli National Trail that runs its length is the Caribbean's first long-distance hiking trail.",
        },
      },
      {
        question: {
          zh: "多米尼克島上有幾座潛在活火山,數量居加勒比島嶼之冠?",
          en: "How many potentially active volcanoes does Dominica have — the most of any Caribbean island?",
        },
        options: [
          { zh: "9 座", en: "Nine" },
          { zh: "3 座", en: "Three" },
          { zh: "1 座", en: "One" },
          { zh: "15 座", en: "Fifteen" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "小小一座島擠著 9 座潛在活火山,密度全球罕見,也造就了遍布的溫泉、噴氣孔與地熱資源,島上正開發地熱發電。",
          en: "Nine potentially active volcanoes crowd this one small island — a density rare worldwide — feeding its hot springs, fumaroles, and a geothermal-power project now under development.",
        },
      },
      {
        question: {
          zh: "哪位出生於羅索的小說家,以《簡愛》前傳《夢迴藻海》聞名於世?",
          en: "Which Roseau-born novelist is famed for Wide Sargasso Sea, the prequel to Jane Eyre?",
        },
        options: [
          { zh: "珍·瑞絲", en: "Jean Rhys" },
          { zh: "V.S. 奈波爾", en: "V. S. Naipaul" },
          { zh: "牙買加·金凱德", en: "Jamaica Kincaid" },
          { zh: "德瑞克·沃克特", en: "Derek Walcott" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "珍·瑞絲 1890 年生於羅索,《夢迴藻海》從克里奧爾女子的視角改寫《簡愛》中「閣樓上的瘋女人」,被譽為後殖民文學經典。",
          en: "Born in Roseau in 1890, Rhys retold the story of Jane Eyre's 'madwoman in the attic' from a Creole woman's perspective — now a postcolonial classic.",
        },
      },
    ],
  },
};
