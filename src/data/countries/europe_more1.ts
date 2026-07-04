import type { Country } from "../types";

// Europe (batch 2): 13 countries. Content shape is LLM-generatable — see types.ts.

export const EUROPE_MORE1: Country[] = [
  {
    id: "IRL",
    name: { zh: "愛爾蘭", en: "Ireland" },
    capital: { zh: "都柏林", en: "Dublin" },
    flag: "🇮🇪",
    region: "europe",
    center: { lat: 53.3, lng: -8.0 },
    intro: {
      zh: "大西洋邊緣的「翡翠島」,以綿延的綠色丘陵、懸崖海岸與酒吧文化聞名。文學傳統深厚,誕生了葉慈、喬伊斯等大師;近數十年靠科技與製藥業成為歐洲最富裕的經濟體之一。",
      en: "The 'Emerald Isle' on the Atlantic's edge, famed for rolling green hills, dramatic sea cliffs, and pub culture. It boasts a deep literary tradition — Yeats, Joyce — and has become one of Europe's wealthiest economies through tech and pharma.",
    },
    history: {
      zh: "凱爾特文化在島上扎根兩千餘年,5 世紀聖派翠克傳入基督教。12 世紀起英格蘭勢力進入,歷經數百年統治;1840 年代大饑荒造成百萬人死亡、百萬人移民海外。1916 年復活節起義點燃獨立運動,1922 年成立愛爾蘭自由邦,1949 年正式成為共和國;北方六郡則留在英國,形成延續至今的南北分治。",
      en: "Celtic culture took root over two millennia ago; St. Patrick brought Christianity in the 5th century. English rule began in the 12th century and lasted centuries. The 1840s Great Famine killed a million and drove a million more to emigrate. The 1916 Easter Rising sparked independence: the Irish Free State formed in 1922, becoming a republic in 1949, while six northern counties remained in the UK.",
    },
    cities: [
      {
        name: { zh: "都柏林", en: "Dublin" },
        blurb: {
          zh: "利菲河畔的首都,喬治式建築、文學遺產與健力士啤酒的故鄉。",
          en: "The capital on the River Liffey — Georgian architecture, literary heritage, and the home of Guinness.",
        },
        trivia: {
          question: {
            zh: "都柏林的聖三一學院圖書館收藏了哪部著名的中世紀泥金裝飾手抄本?",
            en: "Trinity College Dublin's library houses which famous medieval illuminated manuscript?",
          },
          options: [
            { zh: "凱爾經(Book of Kells)", en: "The Book of Kells" },
            { zh: "林迪斯法恩福音書", en: "The Lindisfarne Gospels" },
            { zh: "貝葉掛毯", en: "The Bayeux Tapestry" },
            { zh: "死海古卷", en: "The Dead Sea Scrolls" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "凱爾經約成書於西元 800 年,是拉丁文四福音書的華麗抄本,被視為愛爾蘭國寶。",
            en: "Created around AD 800, the Book of Kells is an ornate Latin gospel manuscript and an Irish national treasure.",
          },
        },
      },
      {
        name: { zh: "科克", en: "Cork" },
        blurb: {
          zh: "愛爾蘭南部大城,以英式市場、美食文化與港灣科夫聞名。",
          en: "Ireland's southern hub, known for the English Market, food culture, and the harbor town of Cobh nearby.",
        },
        trivia: {
          question: {
            zh: "科克附近的科夫(Cobh)港與哪艘著名郵輪的最後一次停靠有關?",
            en: "Cobh, the port near Cork, was the final port of call for which famous ocean liner?",
          },
          options: [
            { zh: "鐵達尼號", en: "The Titanic" },
            { zh: "瑪麗皇后號", en: "The Queen Mary" },
            { zh: "盧西塔尼亞號", en: "The Lusitania" },
            { zh: "五月花號", en: "The Mayflower" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1912 年鐵達尼號自英國南安普敦出發後,最後一站停靠科夫(當時稱皇后鎮)接載乘客,隨後駛向大西洋。",
            en: "In 1912 the Titanic made its last stop at Cobh (then Queenstown) to pick up passengers before heading into the Atlantic.",
          },
        },
      },
      {
        name: { zh: "高威", en: "Galway" },
        blurb: {
          zh: "西岸的波希米亞小城,街頭藝人、傳統音樂與蓋爾語文化的重鎮。",
          en: "A bohemian west-coast city of buskers, traditional music, and Gaelic culture.",
        },
        trivia: {
          question: {
            zh: "高威地處愛爾蘭西部,鄰近的 Gaeltacht 地區主要通行哪種語言?",
            en: "Galway sits near Gaeltacht regions in western Ireland. What language is primarily spoken there?",
          },
          options: [
            { zh: "愛爾蘭語(蓋爾語)", en: "Irish (Gaelic)" },
            { zh: "威爾斯語", en: "Welsh" },
            { zh: "蘇格蘭語", en: "Scots" },
            { zh: "布列塔尼語", en: "Breton" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Gaeltacht 是以愛爾蘭語為日常語言的地區,高威郡擁有全國人口最多的 Gaeltacht。",
            en: "Gaeltacht areas use Irish as the daily language, and County Galway contains the most populous Gaeltacht in the country.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "愛爾蘭是世界上唯一以樂器(豎琴)作為國徽的國家。",
        en: "Ireland is the only country in the world with a musical instrument — the harp — as its national emblem.",
      },
      {
        zh: "萬聖節起源於愛爾蘭的凱爾特薩溫節(Samhain)。",
        en: "Halloween traces its roots to Samhain, an ancient Celtic festival from Ireland.",
      },
    ],
    climate: {
      zh: "溫帶海洋性氣候,受墨西哥灣流調節,冬暖夏涼,全年多雨多雲,天氣一日多變,即使夏季也少有酷熱。",
      en: "Temperate oceanic climate moderated by the Gulf Stream — mild winters, cool summers, frequent rain and clouds, and famously changeable weather.",
    },
    travelTips: [
      {
        zh: "全年皆可能下雨,隨身帶防水外套比帶雨傘實用(風大)。",
        en: "Rain can come any day of the year — a waterproof jacket beats an umbrella in the wind.",
      },
      {
        zh: "愛爾蘭使用歐元,但北愛爾蘭屬英國、使用英鎊,跨境旅行注意貨幣不同。",
        en: "Ireland uses the euro, but Northern Ireland is part of the UK and uses pounds — mind the change when crossing.",
      },
      {
        zh: "車輛靠左行駛,鄉間道路狹窄,自駕請預留更多時間。",
        en: "Traffic drives on the left, and rural roads are narrow — allow extra time when driving.",
      },
    ],
  },
  {
    id: "ISL",
    name: { zh: "冰島", en: "Iceland" },
    capital: { zh: "雷克雅維克", en: "Reykjavík" },
    flag: "🇮🇸",
    region: "europe",
    center: { lat: 64.9, lng: -18.6 },
    intro: {
      zh: "北大西洋上的火山島國,冰川、間歇泉、瀑布與黑沙灘構成超現實地貌。人口僅約 40 萬,幾乎全靠地熱與水力發電,夏季有午夜太陽,冬季可追極光。",
      en: "A volcanic island nation in the North Atlantic where glaciers, geysers, waterfalls, and black-sand beaches form surreal landscapes. With only about 400,000 people, it runs almost entirely on geothermal and hydro power — midnight sun in summer, auroras in winter.",
    },
    history: {
      zh: "9 世紀末挪威維京人渡海定居,930 年建立的阿爾庭(Althing)是世界最古老的議會之一。中世紀先後受挪威與丹麥統治,長期是歐洲最貧困的邊陲。1918 年成為丹麥王國內的自治國,1944 年趁二戰宣布獨立建立共和國。20 世紀靠漁業致富,2008 年金融危機重創後,以觀光業強勁復甦。",
      en: "Norwegian Vikings settled in the late 9th century; the Althing, founded in 930, is among the world's oldest parliaments. Ruled by Norway and then Denmark, Iceland was long a poor periphery. It gained home rule under Denmark in 1918 and declared full independence as a republic in 1944. Fishing brought 20th-century prosperity, and after the 2008 financial crash, tourism powered a strong recovery.",
    },
    cities: [
      {
        name: { zh: "雷克雅維克", en: "Reykjavík" },
        blurb: {
          zh: "全球最北的主權國家首都,彩色鐵皮屋與哈爾格林姆教堂構成天際線。",
          en: "The world's northernmost capital of a sovereign state, with colorful tin-clad houses beneath Hallgrímskirkja church.",
        },
        trivia: {
          question: {
            zh: "「雷克雅維克」這個地名在古諾斯語中的意思是什麼?",
            en: "What does the name 'Reykjavík' mean in Old Norse?",
          },
          options: [
            { zh: "冒煙的海灣", en: "Smoky bay" },
            { zh: "冰之港", en: "Harbor of ice" },
            { zh: "眾神之地", en: "Land of the gods" },
            { zh: "黑色海岸", en: "Black coast" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "早期定居者看見地熱溫泉蒸氣裊裊,以為是煙霧,因而取名「冒煙的海灣」。",
            en: "Early settlers saw steam rising from geothermal springs and named the place 'smoky bay'.",
          },
        },
      },
      {
        name: { zh: "阿克雷里", en: "Akureyri" },
        blurb: {
          zh: "北部峽灣底的「北方之都」,是探索米湖與鯨魚海域的基地。",
          en: "The 'Capital of the North' at the head of a fjord — a base for Lake Mývatn and whale-watching waters.",
        },
        trivia: {
          question: {
            zh: "阿克雷里附近的胡薩維克(Húsavík)海域以觀賞哪種動物聞名?",
            en: "The waters off Húsavík, near Akureyri, are famous for watching which animals?",
          },
          options: [
            { zh: "鯨魚", en: "Whales" },
            { zh: "北極熊", en: "Polar bears" },
            { zh: "海象", en: "Walruses" },
            { zh: "企鵝", en: "Penguins" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "胡薩維克被稱為「歐洲賞鯨之都」,夏季出海常能見到座頭鯨與小鬚鯨。",
            en: "Húsavík is called Europe's whale-watching capital — humpback and minke whales are common sights in summer.",
          },
        },
      },
      {
        name: { zh: "維克", en: "Vík" },
        blurb: {
          zh: "冰島最南端的小鎮,以黑沙灘與海中玄武岩柱聞名。",
          en: "Iceland's southernmost village, famed for its black-sand beach and basalt sea stacks.",
        },
        trivia: {
          question: {
            zh: "維克旁著名的雷尼斯法拉(Reynisfjara)海灘,沙為什麼是黑色的?",
            en: "Why is the sand black at Reynisfjara beach near Vík?",
          },
          options: [
            { zh: "由火山玄武岩侵蝕而成", en: "It's eroded volcanic basalt" },
            { zh: "富含石油沉積物", en: "It's rich in oil deposits" },
            { zh: "海藻染色的結果", en: "It's stained by seaweed" },
            { zh: "隕石撞擊的殘留物", en: "It's meteorite debris" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "冰島的火山熔岩冷卻成玄武岩,經海浪長期打磨成細碎黑沙,形成獨特的黑沙灘。",
            en: "Volcanic lava cooled into basalt, which waves ground into fine black sand over time.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "冰島幾乎 100% 的電力來自地熱與水力等再生能源。",
        en: "Nearly 100% of Iceland's electricity comes from renewable geothermal and hydro power.",
      },
      {
        zh: "冰島沒有蚊子,是全球少數完全無蚊的國家之一。",
        en: "Iceland has no mosquitoes — one of the few places on Earth without them.",
      },
    ],
    climate: {
      zh: "副極地海洋性氣候,受墨西哥灣流影響,冬季比同緯度地區溫和,夏季涼爽,天氣瞬息萬變,強風常見。",
      en: "Subpolar oceanic climate tempered by the Gulf Stream — winters milder than the latitude suggests, cool summers, rapidly changing weather, and frequent strong winds.",
    },
    travelTips: [
      {
        zh: "天氣變化極快,務必洋蔥式穿搭並攜帶防風防水外套。",
        en: "Weather changes fast — dress in layers and always carry a wind- and waterproof shell.",
      },
      {
        zh: "自駕前查看 road.is 與 safetravel.is,冬季部分路段封閉。",
        en: "Check road.is and safetravel.is before driving; some roads close in winter.",
      },
      {
        zh: "物價極高,超市自炊可大幅節省開銷;自來水可直接飲用。",
        en: "Prices are very high — supermarket self-catering saves a lot, and tap water is excellent to drink.",
      },
      {
        zh: "黑沙灘離岸流(sneaker waves)危險,切勿背對海浪拍照。",
        en: "Sneaker waves at black-sand beaches are dangerous — never turn your back on the ocean.",
      },
    ],
  },
  {
    id: "LUX",
    name: { zh: "盧森堡", en: "Luxembourg" },
    capital: { zh: "盧森堡市", en: "Luxembourg City" },
    flag: "🇱🇺",
    region: "europe",
    center: { lat: 49.8, lng: 6.1 },
    intro: {
      zh: "夾在法德比之間的內陸小國,是全球唯一的大公國。以金融業聞名,人均 GDP 常居世界第一;首都的懸崖要塞老城被列為世界遺產,居民日常穿梭於盧森堡語、法語、德語之間。",
      en: "A small landlocked country wedged between France, Germany, and Belgium — the world's only grand duchy. Famed for finance, it regularly tops global GDP-per-capita rankings; its clifftop fortress old town is a World Heritage Site, and locals switch daily between Luxembourgish, French, and German.",
    },
    history: {
      zh: "963 年齊格弗里德伯爵在岩壁上築堡,城市因易守難攻被稱為「北方直布羅陀」。數百年間先後受勃艮第、西班牙、法國、奧地利統治,1815 年維也納會議升格為大公國,1867 年倫敦條約確立中立並拆除要塞。兩次世界大戰皆遭德國占領,戰後放棄中立,成為歐盟、北約創始成員之一,並發展為國際金融中心。",
      en: "Count Siegfried built a castle on the rock in 963; the near-impregnable city earned the nickname 'Gibraltar of the North'. Ruled in turn by Burgundy, Spain, France, and Austria, it became a grand duchy at the 1815 Congress of Vienna, with the 1867 Treaty of London mandating neutrality and dismantling the fortress. Occupied by Germany in both world wars, it abandoned neutrality afterward, co-founding the EU and NATO and growing into a global financial center.",
    },
    cities: [
      {
        name: { zh: "盧森堡市", en: "Luxembourg City" },
        blurb: {
          zh: "建在峽谷懸崖上的首都,老城與要塞遺跡是世界遺產,也是歐盟機構重鎮。",
          en: "A capital perched on gorge-top cliffs — its old town and fortifications are a World Heritage Site and home to EU institutions.",
        },
        trivia: {
          question: {
            zh: "盧森堡市地下著名的「Bock 砲台岩洞」(casemates)最初的用途是什麼?",
            en: "The famous Bock Casemates tunnels beneath Luxembourg City were originally built for what purpose?",
          },
          options: [
            { zh: "軍事防禦工事", en: "Military defense" },
            { zh: "釀酒窖藏", en: "Wine cellars" },
            { zh: "地下鐵路", en: "An underground railway" },
            { zh: "皇室陵墓", en: "Royal tombs" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這套鑿入岩壁的地道網始建於 17 世紀,可容納士兵與大砲,是要塞防禦體系的核心。",
            en: "Carved into the rock from the 17th century, the tunnels housed soldiers and cannons as the core of the fortress defenses.",
          },
        },
      },
      {
        name: { zh: "埃希特納赫", en: "Echternach" },
        blurb: {
          zh: "盧森堡最古老的城鎮,以中世紀修道院與獨特的跳躍遊行聞名。",
          en: "Luxembourg's oldest town, known for its medieval abbey and a unique hopping procession.",
        },
        trivia: {
          question: {
            zh: "埃希特納赫每年舉行、被列入聯合國教科文組織非物質文化遺產的活動是什麼?",
            en: "What annual event in Echternach is inscribed on UNESCO's Intangible Cultural Heritage list?",
          },
          options: [
            { zh: "跳躍遊行(Hopping Procession)", en: "The Hopping Procession" },
            { zh: "番茄大戰", en: "A tomato battle" },
            { zh: "冰雕節", en: "An ice sculpture festival" },
            { zh: "奔牛節", en: "A running of the bulls" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "每年聖靈降臨節後的週二,朝聖者以跳躍舞步穿越小鎮,紀念聖維利布羅德,傳統已延續數百年。",
            en: "On Whit Tuesday, pilgrims hop-dance through town honoring St. Willibrord — a tradition centuries old.",
          },
        },
      },
      {
        name: { zh: "維安登", en: "Vianden" },
        blurb: {
          zh: "烏爾河畔的童話小鎮,山丘上的維安登城堡是歐洲保存最完好的中世紀城堡之一。",
          en: "A fairy-tale town on the Our River, crowned by Vianden Castle — one of Europe's best-preserved medieval castles.",
        },
        trivia: {
          question: {
            zh: "哪位法國大文豪流亡期間曾居住在維安登,故居如今成為博物館?",
            en: "Which great French writer lived in Vianden during his exile, his house now a museum?",
          },
          options: [
            { zh: "維克多·雨果", en: "Victor Hugo" },
            { zh: "大仲馬", en: "Alexandre Dumas" },
            { zh: "巴爾札克", en: "Honoré de Balzac" },
            { zh: "左拉", en: "Émile Zola" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "雨果因反對拿破崙三世流亡多年,1871 年曾旅居維安登,他的故居保存至今供人參觀。",
            en: "Hugo, exiled for opposing Napoleon III, stayed in Vianden in 1871; his house is preserved as a museum.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2020 年起盧森堡全國大眾運輸(公車、電車、火車)一律免費,是全球首例。",
        en: "Since 2020 all public transport in Luxembourg — buses, trams, trains — is free, a world first.",
      },
      {
        zh: "每天有超過 20 萬名跨境通勤者從法德比三國進入盧森堡工作。",
        en: "Over 200,000 cross-border commuters enter Luxembourg daily from France, Germany, and Belgium for work.",
      },
    ],
    climate: {
      zh: "溫帶海洋性過渡大陸性氣候,四季分明但不極端,夏季溫暖偶有熱浪,冬季涼冷偶降雪,全年降水平均。",
      en: "Temperate climate between oceanic and continental — four distinct but moderate seasons, warm summers with occasional heat waves, cool winters with some snow, and even year-round rainfall.",
    },
    travelTips: [
      {
        zh: "全國大眾運輸免費(頭等艙除外),善用火車與公車即可玩遍全國。",
        en: "Public transport nationwide is free (except first class) — trains and buses can take you everywhere.",
      },
      {
        zh: "國土小巧,首都以外的城堡與小鎮一日可達,適合安排當天來回。",
        en: "The country is tiny — castles and towns beyond the capital make easy day trips.",
      },
      {
        zh: "觀光場所多通用法語與英語,學一句盧森堡語「Moien」(你好)會很受歡迎。",
        en: "French and English work in tourist spots, but a Luxembourgish 'Moien' (hello) is always appreciated.",
      },
    ],
  },
  {
    id: "SVK",
    name: { zh: "斯洛伐克", en: "Slovakia" },
    capital: { zh: "布拉提斯拉瓦", en: "Bratislava" },
    flag: "🇸🇰",
    region: "europe",
    center: { lat: 48.7, lng: 19.7 },
    intro: {
      zh: "中歐內陸國,北有高塔特拉山的高山湖泊與步道,南臨多瑙河平原。城堡密度居歐洲前列,首都布拉提斯拉瓦與維也納相距僅約 60 公里,是全球距離最近的兩座首都之一。",
      en: "A landlocked Central European country — the High Tatras' alpine lakes and trails in the north, the Danube plain in the south. It has one of Europe's highest castle densities, and Bratislava sits only about 60 km from Vienna, among the world's closest capital pairs.",
    },
    history: {
      zh: "9 世紀屬大摩拉維亞公國,是斯拉夫文化早期重心;10 世紀起併入匈牙利王國近千年,布拉提斯拉瓦曾長期作為匈牙利加冕之城。1918 年與捷克合組捷克斯洛伐克,1939-45 年短暫成為納粹附庸國,戰後進入共產統治。1989 年天鵝絨革命後民主化,1993 年與捷克和平分家(天鵝絨分離),2004 年加入歐盟,2009 年採用歐元。",
      en: "Part of Great Moravia in the 9th century, an early heart of Slavic culture, the region then spent nearly a millennium under the Kingdom of Hungary — Bratislava long served as Hungary's coronation city. It joined Czechoslovakia in 1918, was a Nazi client state 1939–45, then fell under communist rule. After the 1989 Velvet Revolution came democracy, the peaceful 1993 'Velvet Divorce' from the Czechs, EU entry in 2004, and the euro in 2009.",
    },
    cities: [
      {
        name: { zh: "布拉提斯拉瓦", en: "Bratislava" },
        blurb: {
          zh: "多瑙河畔的迷你首都,山丘上的白色城堡俯瞰老城與 UFO 觀景橋。",
          en: "A compact capital on the Danube, its white hilltop castle overlooking the old town and the UFO observation bridge.",
        },
        trivia: {
          question: {
            zh: "布拉提斯拉瓦在 16 至 19 世紀曾是哪個王國的加冕城市?",
            en: "From the 16th to the 19th century, Bratislava served as the coronation city of which kingdom?",
          },
          options: [
            { zh: "匈牙利王國", en: "The Kingdom of Hungary" },
            { zh: "波希米亞王國", en: "The Kingdom of Bohemia" },
            { zh: "波蘭王國", en: "The Kingdom of Poland" },
            { zh: "普魯士王國", en: "The Kingdom of Prussia" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鄂圖曼攻陷布達後,匈牙利王國把加冕地移到當時稱普雷斯堡的布拉提斯拉瓦,包括瑪麗亞·特蕾莎在內的多位君主在聖馬丁教堂加冕。",
            en: "After the Ottomans took Buda, Hungary moved coronations to Pressburg (Bratislava) — monarchs including Maria Theresa were crowned in St. Martin's Cathedral.",
          },
        },
      },
      {
        name: { zh: "科希策", en: "Košice" },
        blurb: {
          zh: "東部第一大城,擁有斯洛伐克最大的教堂——聖伊莉莎白主教座堂。",
          en: "The largest city in the east, home to Slovakia's biggest church — St. Elisabeth Cathedral.",
        },
        trivia: {
          question: {
            zh: "科希策的聖伊莉莎白主教座堂以哪種建築風格聞名,並被稱為斯洛伐克同風格中最東端的大型代表作?",
            en: "Košice's St. Elisabeth Cathedral is famed as one of the easternmost major examples of which architectural style?",
          },
          options: [
            { zh: "哥德式", en: "Gothic" },
            { zh: "巴洛克式", en: "Baroque" },
            { zh: "拜占庭式", en: "Byzantine" },
            { zh: "新古典主義", en: "Neoclassical" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座 14-15 世紀興建的大教堂是斯洛伐克最大教堂,常被視為歐洲哥德式教堂分布的東緣代表。",
            en: "Built in the 14th–15th centuries, it is Slovakia's largest church and often cited as marking the eastern edge of Europe's Gothic cathedral belt.",
          },
        },
      },
      {
        name: { zh: "波普拉德", en: "Poprad" },
        blurb: {
          zh: "高塔特拉山的門戶城市,登山電車從市區直上山中度假村。",
          en: "The gateway to the High Tatras, with an electric mountain railway running from town straight up to alpine resorts.",
        },
        trivia: {
          question: {
            zh: "波普拉德北方的高塔特拉山(High Tatras)屬於哪條山脈系統?",
            en: "The High Tatras north of Poprad belong to which mountain system?",
          },
          options: [
            { zh: "喀爾巴阡山脈", en: "The Carpathians" },
            { zh: "阿爾卑斯山脈", en: "The Alps" },
            { zh: "庇里牛斯山脈", en: "The Pyrenees" },
            { zh: "巴爾幹山脈", en: "The Balkan Mountains" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塔特拉山是喀爾巴阡山脈的最高段,最高峰格爾拉赫峰(2,655 公尺)也是斯洛伐克最高點。",
            en: "The Tatras are the highest range of the Carpathians; Gerlachovský štít (2,655 m) is both their and Slovakia's highest peak.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "斯洛伐克擁有超過 100 座城堡與 400 餘座莊園宅邸,密度居歐洲前列。",
        en: "Slovakia has more than 100 castles and over 400 chateaux — among Europe's highest densities.",
      },
      {
        zh: "斯洛伐克是全球人均汽車產量最高的國家之一,汽車業是經濟支柱。",
        en: "Slovakia produces more cars per capita than almost any country — the auto industry is its economic backbone.",
      },
    ],
    climate: {
      zh: "溫帶大陸性氣候,夏季溫暖、冬季寒冷多雪;南部平原較乾熱,塔特拉山區冬季嚴寒,是滑雪勝地。",
      en: "Temperate continental climate — warm summers and cold, snowy winters; the southern plains run hotter and drier, while the Tatras get harsh winters ideal for skiing.",
    },
    travelTips: [
      {
        zh: "斯洛伐克使用歐元,鄰國捷克用克朗,別搞混兩國貨幣。",
        en: "Slovakia uses the euro; neighboring Czechia uses the koruna — don't mix them up.",
      },
      {
        zh: "塔特拉山部分高山步道每年 11 月至 6 月中封閉,行前確認開放時間。",
        en: "Some high Tatras trails close from November to mid-June — check seasonal openings before hiking.",
      },
      {
        zh: "布拉提斯拉瓦與維也納僅約一小時車程,很適合搭配奧地利一起旅行。",
        en: "Bratislava is about an hour from Vienna — easy to combine with a trip to Austria.",
      },
    ],
  },
  {
    id: "HUN",
    name: { zh: "匈牙利", en: "Hungary" },
    capital: { zh: "布達佩斯", en: "Budapest" },
    flag: "🇭🇺",
    region: "europe",
    center: { lat: 47.2, lng: 19.5 },
    intro: {
      zh: "多瑙河貫穿的中歐國家,語言屬烏拉語系,與周邊斯拉夫、日耳曼語言截然不同。以溫泉浴場文化、匈牙利紅椒料理與布達佩斯的壯麗河岸景觀聞名,誕生了眾多諾貝爾獎得主與發明家。",
      en: "A Central European country bisected by the Danube, whose Uralic language differs completely from its Slavic and Germanic neighbors. Known for thermal bath culture, paprika-rich cuisine, and Budapest's grand riverfront, it has produced many Nobel laureates and inventors.",
    },
    history: {
      zh: "馬扎爾人 9 世紀末自東方遷入喀爾巴阡盆地,1000 年聖伊什特萬加冕建立基督教王國。16 世紀中部遭鄂圖曼佔領約 150 年,之後由哈布斯堡統治,1867 年折衷方案成立奧匈帝國。一戰戰敗後特里亞農條約使其失去約三分之二領土;二戰後進入共產陣營,1956 年起義遭蘇聯鎮壓。1989 年和平轉型民主,2004 年加入歐盟。",
      en: "The Magyars migrated into the Carpathian Basin in the late 9th century; St. Stephen's coronation in 1000 founded a Christian kingdom. Central Hungary spent ~150 years under Ottoman rule, then the Habsburgs, with the 1867 Compromise creating Austria-Hungary. After WWI, the Treaty of Trianon stripped about two-thirds of its territory. Communist rule followed WWII; the 1956 uprising was crushed by the Soviets. Hungary transitioned peacefully to democracy in 1989 and joined the EU in 2004.",
    },
    cities: [
      {
        name: { zh: "布達佩斯", en: "Budapest" },
        blurb: {
          zh: "「多瑙河明珠」,由布達與佩斯合併而成,國會大廈與鏈橋夜景舉世聞名。",
          en: "The 'Pearl of the Danube', formed by merging Buda and Pest — its Parliament and Chain Bridge night views are world-famous.",
        },
        trivia: {
          question: {
            zh: "布達佩斯是由多瑙河兩岸的城鎮於哪一年合併而成的?",
            en: "In what year did the towns on both banks of the Danube merge to form Budapest?",
          },
          options: [
            { zh: "1873 年", en: "1873" },
            { zh: "1848 年", en: "1848" },
            { zh: "1918 年", en: "1918" },
            { zh: "1000 年", en: "1000" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1873 年布達、老布達與佩斯三鎮正式合併為布達佩斯,隨後迅速發展為奧匈帝國雙都之一。",
            en: "In 1873 Buda, Óbuda, and Pest merged into Budapest, which soon flourished as one of Austria-Hungary's twin capitals.",
          },
        },
      },
      {
        name: { zh: "德布勒森", en: "Debrecen" },
        blurb: {
          zh: "匈牙利第二大城,喀爾文新教重鎮,被稱為「喀爾文主義的羅馬」。",
          en: "Hungary's second city and a Calvinist stronghold, nicknamed 'the Calvinist Rome'.",
        },
        trivia: {
          question: {
            zh: "德布勒森因哪個基督教教派的重要地位而被稱為「喀爾文主義的羅馬」?",
            en: "Debrecen is called 'the Calvinist Rome' for its importance to which Christian tradition?",
          },
          options: [
            { zh: "喀爾文改革宗新教", en: "Calvinist Reformed Protestantism" },
            { zh: "羅馬天主教", en: "Roman Catholicism" },
            { zh: "東正教", en: "Eastern Orthodoxy" },
            { zh: "路德宗", en: "Lutheranism" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "16 世紀宗教改革時德布勒森成為匈牙利改革宗中心,城中的大教堂(Nagytemplom)是匈牙利最大的新教教堂。",
            en: "During the Reformation Debrecen became Hungary's Reformed center; its Great Church is the country's largest Protestant church.",
          },
        },
      },
      {
        name: { zh: "塞格德", en: "Szeged" },
        blurb: {
          zh: "南部大學城,以陽光充足、紅椒產業與露天戲劇節聞名。",
          en: "A sunny southern university city, famed for paprika production and its open-air theater festival.",
        },
        trivia: {
          question: {
            zh: "塞格德與鄰近的卡洛喬(Kalocsa)以出產哪種匈牙利料理的靈魂香料聞名?",
            en: "Szeged, along with nearby Kalocsa, is famous for producing which signature spice of Hungarian cuisine?",
          },
          options: [
            { zh: "紅椒粉(paprika)", en: "Paprika" },
            { zh: "番紅花", en: "Saffron" },
            { zh: "小茴香", en: "Cumin" },
            { zh: "肉豆蔻", en: "Nutmeg" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塞格德是匈牙利紅椒粉兩大產地之一,匈牙利燉牛肉(gulyás)等國菜都少不了它。",
            en: "Szeged is one of Hungary's two great paprika regions — essential to national dishes like gulyás (goulash).",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "布達佩斯擁有上百處溫泉,是世界少數以溫泉浴場聞名的首都,「溫泉之都」名不虛傳。",
        en: "Budapest sits on more than a hundred thermal springs — one of the world's few true spa capitals.",
      },
      {
        zh: "魔術方塊(Rubik's Cube)是匈牙利建築學教授魯比克·艾爾諾於 1974 年發明的。",
        en: "The Rubik's Cube was invented in 1974 by Hungarian architecture professor Ernő Rubik.",
      },
    ],
    climate: {
      zh: "溫帶大陸性氣候,夏季炎熱乾燥、冬季寒冷,春秋短促;大平原地區夏季常超過 30 度,冬季偶有降雪。",
      en: "Temperate continental climate — hot, fairly dry summers and cold winters with short springs and autumns; the Great Plain often tops 30°C in summer, with occasional winter snow.",
    },
    travelTips: [
      {
        zh: "匈牙利不用歐元,使用福林(HUF),部分店家收歐元但匯率差,建議以當地貨幣或刷卡付款。",
        en: "Hungary uses the forint (HUF), not the euro — some shops take euros at poor rates, so pay in forint or by card.",
      },
      {
        zh: "泡溫泉浴場(如塞切尼)請自備泳衣、拖鞋與泳帽(泳池區可能要求)。",
        en: "Bring swimwear, flip-flops, and a swim cap (sometimes required in lap pools) for thermal baths like Széchenyi.",
      },
      {
        zh: "餐廳帳單常已含 12-15% 服務費,結帳前先確認,避免重複給小費。",
        en: "Restaurant bills often include a 12–15% service charge — check before tipping twice.",
      },
    ],
  },
  {
    id: "ROU",
    name: { zh: "羅馬尼亞", en: "Romania" },
    capital: { zh: "布加勒斯特", en: "Bucharest" },
    flag: "🇷🇴",
    region: "europe",
    center: { lat: 45.9, lng: 24.97 },
    intro: {
      zh: "喀爾巴阡山環抱的東南歐國家,語言是斯拉夫海洋中的羅曼語孤島。外西凡尼亞的中世紀城堡與德古拉傳說、彩繪修道院與多瑙河三角洲濕地,讓它兼具神秘感與自然之美。",
      en: "A southeastern European country wrapped by the Carpathians, whose Romance language is an island in a Slavic sea. Transylvania's medieval castles and the Dracula legend, painted monasteries, and the Danube Delta wetlands give it both mystique and natural splendor.",
    },
    history: {
      zh: "古代為達契亞王國,西元 106 年被羅馬帝國征服,拉丁語底蘊由此而來。中世紀形成瓦拉幾亞、摩爾多瓦兩公國,長期周旋於鄂圖曼帝國勢力之下;1859 年兩公國合併,1877 年宣布獨立,一戰後取得外西凡尼亞。二戰後進入共產統治,西奧塞古晚期高壓統治在 1989 年流血革命中告終,2004 年加入北約、2007 年加入歐盟。",
      en: "Ancient Dacia was conquered by Rome in AD 106, planting the Latin roots of the language. The medieval principalities of Wallachia and Moldavia long maneuvered under Ottoman dominance; they united in 1859, declared independence in 1877, and gained Transylvania after WWI. Communist rule followed WWII, and Ceaușescu's harsh late regime ended in the bloody 1989 revolution. Romania joined NATO in 2004 and the EU in 2007.",
    },
    cities: [
      {
        name: { zh: "布加勒斯特", en: "Bucharest" },
        blurb: {
          zh: "曾有「小巴黎」之稱的首都,美好年代建築與共產時代巨型建築並存。",
          en: "The capital once dubbed 'Little Paris', where Belle Époque architecture stands beside communist-era megastructures.",
        },
        trivia: {
          question: {
            zh: "布加勒斯特的議會宮(Palace of the Parliament)以什麼紀錄聞名於世?",
            en: "Bucharest's Palace of the Parliament is famous for holding what distinction?",
          },
          options: [
            { zh: "是世界最重、最大的行政建築之一", en: "It's among the world's heaviest and largest administrative buildings" },
            { zh: "是世界最高的摩天大樓", en: "It's the world's tallest skyscraper" },
            { zh: "是世界最古老的議會建築", en: "It's the world's oldest parliament building" },
            { zh: "是世界最大的木造建築", en: "It's the world's largest wooden building" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座西奧塞古時代興建的龐然大物有三千餘間房間,常被列為全球最重建築與最大行政建築之一。",
            en: "Built under Ceaușescu with over 3,000 rooms, it is often ranked among the heaviest buildings and largest administrative buildings on Earth.",
          },
        },
      },
      {
        name: { zh: "布拉索夫", en: "Brașov" },
        blurb: {
          zh: "外西凡尼亞的中世紀山城,是探訪布蘭城堡(德古拉城堡)的門戶。",
          en: "A medieval mountain city in Transylvania — the gateway to Bran Castle, popularly linked to Dracula.",
        },
        trivia: {
          question: {
            zh: "布拉索夫附近的布蘭城堡常被觀光宣傳與哪個小說角色連結在一起?",
            en: "Bran Castle near Brașov is popularly marketed in connection with which fictional character?",
          },
          options: [
            { zh: "吸血鬼德古拉", en: "Count Dracula" },
            { zh: "科學怪人", en: "Frankenstein's monster" },
            { zh: "鐘樓怪人", en: "The Hunchback of Notre-Dame" },
            { zh: "唐吉訶德", en: "Don Quixote" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "布蘭城堡外觀神似小說《德古拉》中的描寫而成為「德古拉城堡」,但作者斯托克其實從未到過羅馬尼亞。",
            en: "Bran Castle resembles the castle in Bram Stoker's 'Dracula' and became 'Dracula's Castle' — though Stoker never visited Romania.",
          },
        },
      },
      {
        name: { zh: "克盧日-納波卡", en: "Cluj-Napoca" },
        blurb: {
          zh: "外西凡尼亞第一大城與大學城,是羅馬尼亞的科技與音樂節重鎮。",
          en: "Transylvania's largest city and a university hub — Romania's tech capital and home to major music festivals.",
        },
        trivia: {
          question: {
            zh: "克盧日-納波卡市名中的「納波卡」源自什麼?",
            en: "The 'Napoca' in Cluj-Napoca's name derives from what?",
          },
          options: [
            { zh: "古羅馬時代的城鎮名", en: "The name of the ancient Roman-era town" },
            { zh: "一位匈牙利國王", en: "A Hungarian king" },
            { zh: "當地的一條河流", en: "A local river" },
            { zh: "斯拉夫語的「新城」", en: "A Slavic word for 'new town'" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "納波卡是此地達契亞-羅馬時期聚落的古名,1974 年正式加入市名,以彰顯羅馬淵源。",
            en: "Napoca was the ancient Dacian-Roman settlement here; the name was officially appended in 1974 to highlight the Roman heritage.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "多瑙河三角洲是歐洲保存最完好的大型三角洲,棲息著三百多種鳥類。",
        en: "The Danube Delta is Europe's best-preserved major delta, home to over 300 bird species.",
      },
      {
        zh: "外西凡尼亞的錫比烏、布拉索夫等城由中世紀移入的德意志薩克森人建立,至今保有德式風貌。",
        en: "Transylvanian towns like Sibiu and Brașov were founded by medieval Saxon settlers and keep their Germanic look today.",
      },
    ],
    climate: {
      zh: "溫帶大陸性氣候,夏熱冬寒,溫差大;喀爾巴阡山區冬季多雪,黑海沿岸夏季則是海灘度假旺季。",
      en: "Temperate continental climate with hot summers, cold winters, and wide temperature swings; the Carpathians get heavy winter snow, while the Black Sea coast draws summer beachgoers.",
    },
    travelTips: [
      {
        zh: "羅馬尼亞使用列伊(RON)而非歐元,街頭換匯注意匯率,刷卡普及度高。",
        en: "Romania uses the leu (RON), not the euro — watch street exchange rates; card payments are widely accepted.",
      },
      {
        zh: "城際火車便宜但速度慢,趕時間可考慮長途巴士或國內線班機。",
        en: "Intercity trains are cheap but slow — consider long-distance buses or domestic flights if pressed for time.",
      },
      {
        zh: "山區健行注意棕熊出沒,羅馬尼亞是歐洲(俄羅斯以外)棕熊最多的國家。",
        en: "Watch for brown bears when hiking — Romania has Europe's largest brown bear population outside Russia.",
      },
    ],
  },
  {
    id: "BGR",
    name: { zh: "保加利亞", en: "Bulgaria" },
    capital: { zh: "索菲亞", en: "Sofia" },
    flag: "🇧🇬",
    region: "europe",
    center: { lat: 42.7, lng: 25.5 },
    intro: {
      zh: "巴爾幹半島東部的古國,黑海金沙海灘、玫瑰谷與里拉山修道院是招牌。西里爾字母的搖籃之一,優格文化聞名於世,物價是歐盟中最親民的之一。",
      en: "An ancient country in the eastern Balkans, known for Black Sea beaches, the Rose Valley, and Rila's mountain monastery. A cradle of the Cyrillic alphabet and famous for its yogurt, it remains one of the EU's most affordable destinations.",
    },
    history: {
      zh: "681 年建立的第一保加利亞帝國是歐洲最古老的國家之一,9 世紀採納基督教並推廣西里爾字母,成為斯拉夫文化重鎮。14 世紀末被鄂圖曼帝國征服,經歷近五百年統治,1878 年在俄土戰爭後恢復建國。二戰後加入蘇聯陣營,1989 年共產政權垮台後轉型,2004 年加入北約、2007 年加入歐盟。",
      en: "The First Bulgarian Empire, founded in 681, is among Europe's oldest states; it adopted Christianity in the 9th century and spread the Cyrillic script, becoming a center of Slavic culture. Conquered by the Ottomans in the late 14th century, it endured nearly five centuries of rule before regaining statehood in 1878 after the Russo-Turkish War. It joined the Soviet bloc after WWII, transitioned after communism fell in 1989, and entered NATO in 2004 and the EU in 2007.",
    },
    cities: [
      {
        name: { zh: "索菲亞", en: "Sofia" },
        blurb: {
          zh: "維托沙山腳下的首都,羅馬遺跡、清真寺、教堂與猶太會堂比鄰而立。",
          en: "The capital at the foot of Vitosha Mountain, where Roman ruins, a mosque, churches, and a synagogue stand side by side.",
        },
        trivia: {
          question: {
            zh: "索菲亞最著名的地標、以俄國沙皇時代軍人聖者命名的大教堂是哪一座?",
            en: "Which cathedral, named after a Russian warrior-saint, is Sofia's most famous landmark?",
          },
          options: [
            { zh: "亞歷山大·涅夫斯基大教堂", en: "Alexander Nevsky Cathedral" },
            { zh: "聖巴索大教堂", en: "St. Basil's Cathedral" },
            { zh: "聖索菲亞大教堂(伊斯坦堡)", en: "Hagia Sophia" },
            { zh: "聖薩瓦教堂", en: "The Church of Saint Sava" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座金頂大教堂建於 20 世紀初,紀念俄土戰爭中陣亡的士兵,是巴爾幹最大的東正教教堂之一。",
            en: "Built in the early 20th century to honor soldiers of the Russo-Turkish War, the gold-domed cathedral is among the Balkans' largest Orthodox churches.",
          },
        },
      },
      {
        name: { zh: "普羅夫迪夫", en: "Plovdiv" },
        blurb: {
          zh: "歐洲持續有人居住最古老的城市之一,羅馬劇場仍在老城中使用。",
          en: "One of Europe's oldest continuously inhabited cities — its Roman theater still hosts performances in the old town.",
        },
        trivia: {
          question: {
            zh: "普羅夫迪夫老城保存完好、至今仍舉辦表演的古代建築是什麼?",
            en: "What well-preserved ancient structure in Plovdiv's old town still hosts performances today?",
          },
          options: [
            { zh: "羅馬劇場", en: "A Roman theater" },
            { zh: "希臘神廟", en: "A Greek temple" },
            { zh: "埃及方尖碑", en: "An Egyptian obelisk" },
            { zh: "拜占庭競技場", en: "A Byzantine hippodrome" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座 1 世紀的羅馬劇場於 20 世紀被重新發掘修復,可容納數千名觀眾,夏季常有音樂會與歌劇演出。",
            en: "The 1st-century Roman theater, excavated and restored in the 20th century, seats thousands and hosts summer concerts and opera.",
          },
        },
      },
      {
        name: { zh: "瓦爾納", en: "Varna" },
        blurb: {
          zh: "黑海最大港市,「海洋之都」,考古博物館藏有世界最古老的黃金工藝品。",
          en: "The largest Black Sea port city — Bulgaria's 'sea capital', whose museum holds the world's oldest worked gold.",
        },
        trivia: {
          question: {
            zh: "瓦爾納考古博物館收藏的「瓦爾納黃金」以什麼聞名?",
            en: "The 'Varna Gold' in the city's archaeological museum is famous for being what?",
          },
          options: [
            { zh: "世界已知最古老的黃金工藝品之一", en: "Among the oldest worked gold ever found" },
            { zh: "鄂圖曼蘇丹的王冠", en: "An Ottoman sultan's crown" },
            { zh: "海盜沉船的寶藏", en: "Treasure from a pirate shipwreck" },
            { zh: "羅馬皇帝的金幣", en: "Roman imperial coins" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瓦爾納史前墓地出土的金器距今約 6,500 年,被認為是人類最早的黃金工藝品之一。",
            en: "Gold artifacts from the Varna Necropolis date back some 6,500 years — considered among humanity's earliest goldwork.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "保加利亞人點頭表示「不」、搖頭表示「是」,與多數國家相反。",
        en: "Bulgarians traditionally nod for 'no' and shake their heads for 'yes' — the reverse of most countries.",
      },
      {
        zh: "優格發酵菌「保加利亞乳桿菌」以這個國家命名,玫瑰谷則供應全球大部分的玫瑰精油。",
        en: "The yogurt bacterium Lactobacillus bulgaricus is named after Bulgaria, and its Rose Valley supplies much of the world's rose oil.",
      },
    ],
    climate: {
      zh: "大陸性與地中海型氣候交會,北部夏熱冬寒,黑海沿岸夏季溫暖宜人,山區冬季多雪,適合滑雪。",
      en: "A meeting of continental and Mediterranean climates — hot summers and cold winters in the north, a pleasant Black Sea coast in summer, and snowy mountains good for skiing.",
    },
    travelTips: [
      {
        zh: "記得點頭/搖頭意義可能相反,溝通時以口頭確認為準。",
        en: "Remember head gestures can be reversed — confirm verbally to avoid confusion.",
      },
      {
        zh: "招牌與路標多為西里爾字母,先學會字母對照會讓旅行順利許多。",
        en: "Signs are mostly in Cyrillic — learning the alphabet basics makes travel much smoother.",
      },
      {
        zh: "計程車需認明正規車行並確認跳表,觀光區偶有亂喊價情形。",
        en: "Use reputable taxi companies and insist on the meter — overcharging happens in tourist areas.",
      },
    ],
  },
  {
    id: "HRV",
    name: { zh: "克羅埃西亞", en: "Croatia" },
    capital: { zh: "札格雷布", en: "Zagreb" },
    flag: "🇭🇷",
    region: "europe",
    center: { lat: 45.1, lng: 15.9 },
    intro: {
      zh: "亞得里亞海東岸的新月形國家,擁有上千座島嶼與蜿蜒的達爾馬提亞海岸。杜布羅夫尼克古城牆、十六湖瀑布群與羅馬皇宮改建的舊城,讓它成為歐洲最熱門的度假勝地之一。",
      en: "A crescent-shaped country on the eastern Adriatic with over a thousand islands along the Dalmatian coast. Dubrovnik's city walls, the Plitvice lakes and waterfalls, and an old town built inside a Roman palace make it one of Europe's hottest holiday destinations.",
    },
    history: {
      zh: "克羅埃西亞人 7 世紀遷入,10 世紀建立王國,1102 年起與匈牙利共主聯合;沿海的杜布羅夫尼克則以拉古薩共和國之姿獨立經商數百年。近代長期處於哈布斯堡帝國治下,一戰後加入南斯拉夫。1991 年宣布獨立,爆發持續數年的獨立戰爭,1995 年結束;2013 年加入歐盟,2023 年採用歐元並加入申根區。",
      en: "Croats settled in the 7th century and founded a kingdom in the 10th; from 1102 it shared kings with Hungary, while coastal Dubrovnik traded independently for centuries as the Republic of Ragusa. Long under Habsburg rule, Croatia joined Yugoslavia after WWI. It declared independence in 1991, fighting a war that lasted until 1995; it joined the EU in 2013 and adopted the euro and joined Schengen in 2023.",
    },
    cities: [
      {
        name: { zh: "札格雷布", en: "Zagreb" },
        blurb: {
          zh: "內陸的首都,奧匈風格的上下城、咖啡文化與失戀博物館別具一格。",
          en: "The inland capital — Austro-Hungarian upper and lower towns, café culture, and the quirky Museum of Broken Relationships.",
        },
        trivia: {
          question: {
            zh: "札格雷布聖馬可教堂的屋頂以什麼圖案聞名?",
            en: "The roof of St. Mark's Church in Zagreb is famous for displaying what?",
          },
          options: [
            { zh: "以彩色磁磚拼出的紋章圖案", en: "Coats of arms in colorful tiles" },
            { zh: "純金打造的圓頂", en: "A dome of solid gold" },
            { zh: "巨型太陽鐘", en: "A giant sundial" },
            { zh: "馬賽克聖經故事", en: "Mosaic Bible scenes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "屋頂以彩瓦拼出克羅埃西亞-斯拉沃尼亞-達爾馬提亞聯合紋章與札格雷布市徽,是城市最上鏡的地標。",
            en: "Colored tiles form the arms of Croatia, Slavonia, and Dalmatia plus Zagreb's emblem — the city's most photographed landmark.",
          },
        },
      },
      {
        name: { zh: "杜布羅夫尼克", en: "Dubrovnik" },
        blurb: {
          zh: "「亞得里亞海明珠」,完整城牆環抱的古城是世界遺產與影集取景地。",
          en: "The 'Pearl of the Adriatic' — a World Heritage old town ringed by intact walls and a famous filming location.",
        },
        trivia: {
          question: {
            zh: "杜布羅夫尼克古城是哪部熱門影集中「君臨城」的主要取景地?",
            en: "Dubrovnik's old town served as the main filming location for King's Landing in which hit TV series?",
          },
          options: [
            { zh: "《權力遊戲》", en: "Game of Thrones" },
            { zh: "《王冠》", en: "The Crown" },
            { zh: "《維京傳奇》", en: "Vikings" },
            { zh: "《西方極樂園》", en: "Westworld" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "古城牆與紅瓦屋頂成為《權力遊戲》君臨城的實景,吸引大量劇迷朝聖。",
            en: "Its walls and red rooftops became King's Landing in 'Game of Thrones', drawing waves of fans.",
          },
        },
      },
      {
        name: { zh: "斯普利特", en: "Split" },
        blurb: {
          zh: "達爾馬提亞第一大城,整座老城就建在羅馬皇帝的退休宮殿裡。",
          en: "Dalmatia's largest city, whose old town lives inside a Roman emperor's retirement palace.",
        },
        trivia: {
          question: {
            zh: "斯普利特老城的核心是哪位羅馬皇帝的宮殿?",
            en: "The heart of Split's old town is the palace of which Roman emperor?",
          },
          options: [
            { zh: "戴克里先", en: "Diocletian" },
            { zh: "君士坦丁", en: "Constantine" },
            { zh: "尼祿", en: "Nero" },
            { zh: "哈德良", en: "Hadrian" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "戴克里先於西元 305 年退位後居住於此,宮殿後來被居民「住」成一座城,如今是世界遺產。",
            en: "Diocletian retired here after abdicating in AD 305; residents later built a living city inside the palace, now a World Heritage Site.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "領帶(cravat)源自 17 世紀克羅埃西亞騎兵的領巾,「cravat」一字即來自「Croat」。",
        en: "The necktie (cravat) comes from 17th-century Croatian cavalry scarves — 'cravat' derives from 'Croat'.",
      },
      {
        zh: "克羅埃西亞擁有一千兩百多座島嶼與礁岩,其中只有數十座有人常住。",
        en: "Croatia has over 1,200 islands and islets, only a few dozen of which are permanently inhabited.",
      },
    ],
    climate: {
      zh: "沿海屬地中海型氣候,夏季炎熱乾燥、冬季溫和多雨;內陸為大陸性氣候,冬季寒冷,夏季偶有布拉強風吹襲海岸。",
      en: "Mediterranean on the coast — hot dry summers, mild wet winters; continental inland with cold winters. The fierce bora wind occasionally sweeps the coastline.",
    },
    travelTips: [
      {
        zh: "7-8 月旺季杜布羅夫尼克等地人潮擁擠、房價翻倍,6 月或 9 月造訪體驗更好。",
        en: "July–August crowds and prices peak in Dubrovnik — June or September offers a far better experience.",
      },
      {
        zh: "亞得里亞海岸多為礫石灘與岩岸,建議帶溯溪鞋;海膽不少,下水留意。",
        en: "Adriatic beaches are mostly pebbles and rock — bring water shoes and watch for sea urchins.",
      },
      {
        zh: "2023 年起使用歐元並加入申根區,跨境與付款都更方便。",
        en: "Croatia adopted the euro and joined Schengen in 2023, making borders and payments easy.",
      },
    ],
  },
  {
    id: "SVN",
    name: { zh: "斯洛維尼亞", en: "Slovenia" },
    capital: { zh: "盧比安納", en: "Ljubljana" },
    flag: "🇸🇮",
    region: "europe",
    center: { lat: 46.1, lng: 14.8 },
    intro: {
      zh: "阿爾卑斯山、地中海與喀斯特地形在此交會的袖珍綠色國度,森林覆蓋率居歐洲前列。布萊德湖的教堂小島、波斯托伊納鐘乳石洞與迷你海岸線,把多樣風景濃縮在兩小時車程內。",
      en: "A pocket-sized green country where the Alps, the Mediterranean, and karst landscapes meet, with one of Europe's highest forest coverages. Lake Bled's island church, the Postojna caves, and a tiny coastline pack diverse scenery within a two-hour drive.",
    },
    history: {
      zh: "斯拉夫人 6 世紀定居於此,此後千餘年多處於日耳曼政權與哈布斯堡王朝統治下,文化上深受中歐影響。一戰後加入南斯拉夫王國,二戰後成為南斯拉夫社會主義聯邦一員。1991 年經過僅十天的戰爭即獨立成功,是前南斯拉夫中轉型最平順的國家,2004 年加入歐盟與北約,2007 年採用歐元。",
      en: "Slavs settled here in the 6th century; for the next millennium the land lay mostly under Germanic and then Habsburg rule, absorbing Central European culture. It joined the Kingdom of Yugoslavia after WWI and socialist Yugoslavia after WWII. In 1991 it won independence after a war of just ten days — the smoothest transition of any Yugoslav republic — joining the EU and NATO in 2004 and the euro in 2007.",
    },
    cities: [
      {
        name: { zh: "盧比安納", en: "Ljubljana" },
        blurb: {
          zh: "以「龍」為象徵的迷你首都,河畔老城由建築師普雷契尼克一手打造風貌。",
          en: "A compact capital symbolized by dragons, its riverside old town shaped by architect Jože Plečnik.",
        },
        trivia: {
          question: {
            zh: "盧比安納城市象徵是什麼動物,裝飾在著名的橋樑與市徽上?",
            en: "What creature is Ljubljana's city symbol, adorning its famous bridge and coat of arms?",
          },
          options: [
            { zh: "龍", en: "A dragon" },
            { zh: "獅子", en: "A lion" },
            { zh: "雙頭鷹", en: "A double-headed eagle" },
            { zh: "白鹿", en: "A white stag" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "傳說英雄伊阿宋在此屠龍,龍成為城市守護象徵,龍橋四角的青銅龍是最著名地標之一。",
            en: "Legend says Jason slew a dragon here; the four bronze dragons on Dragon Bridge are among the city's best-known landmarks.",
          },
        },
      },
      {
        name: { zh: "布萊德", en: "Bled" },
        blurb: {
          zh: "阿爾卑斯山麓的湖畔小鎮,湖心島上的教堂與崖上城堡構成明信片風景。",
          en: "An alpine lakeside town whose island church and clifftop castle form Slovenia's postcard view.",
        },
        trivia: {
          question: {
            zh: "遊客傳統上搭乘哪種當地特色木船前往布萊德湖心島?",
            en: "What traditional local wooden boat carries visitors to Bled's island?",
          },
          options: [
            { zh: "平底船「Pletna」", en: "The flat-bottomed 'pletna'" },
            { zh: "貢多拉", en: "The gondola" },
            { zh: "獨木舟「Kayak」", en: "The kayak" },
            { zh: "維京長船", en: "The Viking longship" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Pletna 是布萊德特有的手搖平底木船,船夫世代相傳,載客往返湖心島數百年。",
            en: "The pletna is Bled's unique hand-oared flat-bottomed boat; ferrying to the island has run in boatmen's families for centuries.",
          },
        },
      },
      {
        name: { zh: "皮蘭", en: "Piran" },
        blurb: {
          zh: "亞得里亞海畔的威尼斯風小鎮,尖塔教堂俯瞰半島上的紅瓦屋海。",
          en: "A Venetian-flavored town on the Adriatic, its bell tower overlooking a peninsula of red roofs.",
        },
        trivia: {
          question: {
            zh: "皮蘭的建築風格深受哪個歷史強權數百年統治的影響?",
            en: "Piran's architecture reflects centuries of rule by which historical power?",
          },
          options: [
            { zh: "威尼斯共和國", en: "The Republic of Venice" },
            { zh: "鄂圖曼帝國", en: "The Ottoman Empire" },
            { zh: "拜占庭帝國", en: "The Byzantine Empire" },
            { zh: "瑞典王國", en: "The Kingdom of Sweden" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "皮蘭自 13 世紀末起受威尼斯統治數百年,鐘樓即仿威尼斯聖馬可鐘樓而建。",
            en: "Piran spent centuries under Venetian rule from the late 13th century — its bell tower is modeled on St. Mark's campanile in Venice.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "斯洛維尼亞約六成國土被森林覆蓋,是歐洲森林覆蓋率最高的國家之一。",
        en: "About 60% of Slovenia is forested — among the highest coverage in Europe.",
      },
      {
        zh: "斯洛維尼亞是唯一國名中帶有「love」的國家,觀光口號就叫「I feel sLOVEnia」。",
        en: "Slovenia is the only country with 'love' in its name — hence the tourism slogan 'I feel sLOVEnia'.",
      },
    ],
    climate: {
      zh: "國土雖小氣候多樣:海岸屬地中海型,內陸為大陸性,阿爾卑斯山區冬季寒冷多雪,夏季全國大致溫暖舒適。",
      en: "Diverse for its size: Mediterranean on the coast, continental inland, and cold snowy winters in the Alps — with generally warm, pleasant summers nationwide.",
    },
    travelTips: [
      {
        zh: "國土小、景點分散,租車最方便;上高速公路必須購買電子通行證(vignette)。",
        en: "Sights are scattered and the country is small — a rental car works best, but you must buy an e-vignette for motorways.",
      },
      {
        zh: "布萊德湖夏季遊客眾多,清晨造訪能避開人潮並拍到最美倒影。",
        en: "Lake Bled gets crowded in summer — go at dawn for fewer people and the best reflections.",
      },
      {
        zh: "別錯過國民甜點布萊德奶油蛋糕(kremšnita)與地窖熟成的葡萄酒。",
        en: "Don't miss kremšnita (Bled cream cake) and Slovenia's underrated cellar-aged wines.",
      },
    ],
  },
  {
    id: "EST",
    name: { zh: "愛沙尼亞", en: "Estonia" },
    capital: { zh: "塔林", en: "Tallinn" },
    flag: "🇪🇪",
    region: "europe",
    center: { lat: 58.7, lng: 25.5 },
    intro: {
      zh: "波羅的海三國最北端,語言與芬蘭語同屬芬烏語系。以「數位國家」聞名:線上投票、電子公民與遍地新創;塔林中世紀老城保存完好,森林與兩千多座島嶼構成安靜的自然底色。",
      en: "The northernmost Baltic state, whose language is Finno-Ugric like Finnish. Famous as a 'digital nation' — online voting, e-residency, and startups everywhere — it pairs Tallinn's beautifully preserved medieval old town with quiet forests and over 2,000 islands.",
    },
    history: {
      zh: "13 世紀起先後被丹麥、條頓騎士團、瑞典與俄羅斯帝國統治,德意志商人與地主長期主導城市。1918 年首次宣布獨立,1940 年遭蘇聯併吞,經歷半世紀蘇聯統治;1980 年代末以百萬人合唱的「歌唱革命」爭取自由,1991 年恢復獨立。此後全力數位化與西向整合,2004 年加入歐盟與北約,2011 年採用歐元。",
      en: "From the 13th century Estonia was ruled in turn by Danes, the Teutonic Order, Sweden, and the Russian Empire, with German merchants and landowners long dominant. It first declared independence in 1918, was annexed by the USSR in 1940, and endured half a century of Soviet rule. The late-1980s 'Singing Revolution' of mass song rallies led to restored independence in 1991, followed by rapid digitalization, EU and NATO entry in 2004, and the euro in 2011.",
    },
    cities: [
      {
        name: { zh: "塔林", en: "Tallinn" },
        blurb: {
          zh: "漢薩同盟古城,塔樓城牆與石板巷保存完好,老城是世界遺產。",
          en: "A Hanseatic old city of towers, walls, and cobbled lanes — its old town is a World Heritage Site.",
        },
        trivia: {
          question: {
            zh: "塔林在中世紀曾以哪個名字聞名,並作為漢薩同盟的重要商城?",
            en: "Under what name was Tallinn known in the Middle Ages as an important Hanseatic trading city?",
          },
          options: [
            { zh: "雷瓦爾(Reval)", en: "Reval" },
            { zh: "但澤(Danzig)", en: "Danzig" },
            { zh: "柯尼斯堡", en: "Königsberg" },
            { zh: "維斯比(Visby)", en: "Visby" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塔林在德語與瑞典語文獻中長期稱作 Reval,直到 1918 年獨立後才正式改用愛沙尼亞語名稱塔林。",
            en: "Tallinn appeared as Reval in German and Swedish records for centuries; the Estonian name became official after 1918 independence.",
          },
        },
      },
      {
        name: { zh: "塔爾圖", en: "Tartu" },
        blurb: {
          zh: "愛沙尼亞的智識之都,1632 年創校的大學讓城市洋溢學生氣息。",
          en: "Estonia's intellectual capital, animated by a university founded in 1632.",
        },
        trivia: {
          question: {
            zh: "塔爾圖大學創立於 1632 年,當時愛沙尼亞處於哪個國家統治之下?",
            en: "The University of Tartu was founded in 1632 — under which country's rule was Estonia at the time?",
          },
          options: [
            { zh: "瑞典", en: "Sweden" },
            { zh: "俄羅斯帝國", en: "The Russian Empire" },
            { zh: "丹麥", en: "Denmark" },
            { zh: "波蘭-立陶宛", en: "Poland-Lithuania" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瑞典國王古斯塔夫二世·阿道夫於 1632 年下令創校,是瑞典帝國時期在波羅的海地區的重要學府。",
            en: "Swedish king Gustavus Adolphus founded the university in 1632, a major seat of learning in the Swedish Baltic empire.",
          },
        },
      },
      {
        name: { zh: "帕爾努", en: "Pärnu" },
        blurb: {
          zh: "西南海岸的度假小城,長沙灘與療養浴場讓它有「夏日之都」之稱。",
          en: "A resort town on the southwest coast — long beaches and spa traditions earn it the title 'summer capital'.",
        },
        trivia: {
          question: {
            zh: "帕爾努因夏季遊客湧入海灘與浴場,在愛沙尼亞被暱稱為什麼?",
            en: "Thanks to summer crowds at its beaches and spas, Pärnu is nicknamed what in Estonia?",
          },
          options: [
            { zh: "夏日之都", en: "The summer capital" },
            { zh: "北方威尼斯", en: "The Venice of the North" },
            { zh: "琥珀之城", en: "The amber city" },
            { zh: "白夜之城", en: "The city of white nights" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "自 19 世紀開設療養浴場以來,帕爾努就是全國夏季度假首選,「夏日之都」名號沿用至今。",
            en: "A spa resort since the 19th century, Pärnu has been the country's favorite summer getaway — hence 'summer capital'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "愛沙尼亞 2005 年成為全球第一個舉行具法律效力全國網路投票的國家。",
        en: "In 2005 Estonia became the first country to hold legally binding nationwide internet voting.",
      },
      {
        zh: "Skype 的軟體由愛沙尼亞工程師開發,帶動了塔林的新創熱潮。",
        en: "Skype's software was built by Estonian engineers, seeding Tallinn's startup boom.",
      },
    ],
    climate: {
      zh: "溫帶氣候偏涼,受波羅的海調節:夏季溫和、白晝極長,冬季寒冷多雪、日照短,春秋轉換迅速。",
      en: "A cool temperate climate moderated by the Baltic — mild summers with very long days, cold snowy winters with little light, and fast-changing shoulder seasons.",
    },
    travelTips: [
      {
        zh: "幾乎所有地方都可刷卡或行動支付,現金需求極低。",
        en: "Cards and mobile payments work almost everywhere — you'll rarely need cash.",
      },
      {
        zh: "6-7 月白夜前後日照近 19 小時,遮光眼罩有助睡眠;冬季則要備妥保暖衣物。",
        en: "Around midsummer there is nearly 19 hours of daylight — pack an eye mask; in winter bring serious warm layers.",
      },
      {
        zh: "塔林至赫爾辛基渡輪僅約兩小時,很適合順遊芬蘭。",
        en: "The Tallinn–Helsinki ferry takes about two hours — an easy add-on trip to Finland.",
      },
    ],
  },
  {
    id: "LVA",
    name: { zh: "拉脫維亞", en: "Latvia" },
    capital: { zh: "里加", en: "Riga" },
    flag: "🇱🇻",
    region: "europe",
    center: { lat: 56.9, lng: 24.9 },
    intro: {
      zh: "波羅的海三國的中間國度,一半國土被森林覆蓋。首都里加擁有歐洲最集中的新藝術建築群,老城是世界遺產;白沙海灘、木造漁村與根深蒂固的歌謠傳統構成民族底色。",
      en: "The middle Baltic state, half-covered in forest. Riga boasts Europe's greatest concentration of Art Nouveau architecture and a World Heritage old town, while white-sand beaches, wooden fishing villages, and a deep song tradition define the national character.",
    },
    history: {
      zh: "13 世紀德意志十字軍建立里加並主導波羅的海貿易,此後數百年先後受立窩尼亞騎士團、波蘭-立陶宛、瑞典與俄羅斯帝國統治。1918 年首次獨立,1940 年遭蘇聯併吞;1989 年三國兩百萬人手牽手組成「波羅的海之路」人鏈抗議,1991 年恢復獨立,2004 年加入歐盟與北約,2014 年採用歐元。",
      en: "German crusaders founded Riga in the 13th century and dominated Baltic trade; centuries of rule followed under the Livonian Order, Poland-Lithuania, Sweden, and the Russian Empire. Latvia first gained independence in 1918 and was annexed by the USSR in 1940. In 1989 two million people joined hands across the three Baltic states in the 'Baltic Way' protest; independence returned in 1991, with EU and NATO entry in 2004 and the euro in 2014.",
    },
    cities: [
      {
        name: { zh: "里加", en: "Riga" },
        blurb: {
          zh: "波羅的海三國最大城市,漢薩老城與新藝術街區同列精華。",
          en: "The largest city in the Baltics, prized for its Hanseatic old town and Art Nouveau quarter.",
        },
        trivia: {
          question: {
            zh: "里加以哪種 19 世紀末至 20 世紀初的建築風格密度高居歐洲之冠?",
            en: "Riga has Europe's highest concentration of buildings in which style from around 1900?",
          },
          options: [
            { zh: "新藝術(Art Nouveau)", en: "Art Nouveau" },
            { zh: "包浩斯", en: "Bauhaus" },
            { zh: "哥德復興式", en: "Gothic Revival" },
            { zh: "粗獷主義", en: "Brutalism" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "里加約有三分之一市中心建築屬新藝術風格,阿爾伯特街一帶的立面雕飾最為華麗。",
            en: "Roughly a third of central Riga is Art Nouveau — the ornate facades along Alberta Street are the showcase.",
          },
        },
      },
      {
        name: { zh: "尤爾馬拉", en: "Jūrmala" },
        blurb: {
          zh: "里加近郊的海濱度假帶,白沙灘綿延 20 多公里,木造別墅林立。",
          en: "A seaside resort strip near Riga — over 20 km of white sand lined with wooden villas.",
        },
        trivia: {
          question: {
            zh: "尤爾馬拉緊鄰哪個海灣,自 19 世紀起就是著名的海濱療養地?",
            en: "Jūrmala lies on which gulf, famous as a seaside health resort since the 19th century?",
          },
          options: [
            { zh: "里加灣", en: "The Gulf of Riga" },
            { zh: "芬蘭灣", en: "The Gulf of Finland" },
            { zh: "波的尼亞灣", en: "The Gulf of Bothnia" },
            { zh: "格但斯克灣", en: "The Gulf of Gdańsk" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尤爾馬拉意為「海邊」,位於里加灣南岸,沙灘、松林與礦泉讓它成為波羅的海著名療養勝地。",
            en: "Jūrmala means 'seaside'; on the Gulf of Riga's southern shore, its sands, pines, and mineral springs made it a famed Baltic resort.",
          },
        },
      },
      {
        name: { zh: "采西斯", en: "Cēsis" },
        blurb: {
          zh: "高亞河谷旁的中世紀小鎮,以立窩尼亞騎士團城堡遺跡聞名。",
          en: "A medieval town by the Gauja valley, known for the ruins of a Livonian Order castle.",
        },
        trivia: {
          question: {
            zh: "采西斯城堡最初是由哪個中世紀軍事修會建造的?",
            en: "Cēsis Castle was originally built by which medieval military order?",
          },
          options: [
            { zh: "立窩尼亞騎士團(寶劍騎士團)", en: "The Livonian Order (Sword Brothers)" },
            { zh: "聖殿騎士團", en: "The Knights Templar" },
            { zh: "醫院騎士團", en: "The Knights Hospitaller" },
            { zh: "卡拉特拉瓦騎士團", en: "The Order of Calatrava" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "13 世紀寶劍騎士團在此築堡,後併入條頓體系的立窩尼亞騎士團並長期作為其重要據點。",
            en: "The Sword Brothers built the castle in the 13th century; it became a key stronghold of the Livonian Order within the Teutonic sphere.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "拉脫維亞的歌舞節傳統與愛沙尼亞、立陶宛共同被列入聯合國教科文組織非物質文化遺產。",
        en: "Latvia's song and dance festival tradition is inscribed by UNESCO as intangible heritage, together with Estonia's and Lithuania's.",
      },
      {
        zh: "拉脫維亞約 52% 國土為森林,是歐盟森林覆蓋率最高的國家之一。",
        en: "About 52% of Latvia is forest — among the most forested countries in the EU.",
      },
    ],
    climate: {
      zh: "溫帶氣候介於海洋性與大陸性之間,夏季溫和短暫,冬季寒冷多雪,沿海比內陸溫和,秋季多雨。",
      en: "Temperate climate between maritime and continental — short mild summers, cold snowy winters, a milder coast than the interior, and a rainy autumn.",
    },
    travelTips: [
      {
        zh: "里加中央市場由五座飛船庫改建,是體驗當地飲食的好去處,留意隨身財物。",
        en: "Riga Central Market, housed in five zeppelin hangars, is great for local food — just mind your belongings.",
      },
      {
        zh: "夏至前後的仲夏節(Jāņi)全國放假慶祝,商店可能歇業,但能體驗最道地的節慶。",
        en: "Around the Jāņi midsummer festival the whole country celebrates — shops may close, but the festivities are unforgettable.",
      },
      {
        zh: "波羅的海海水即使盛夏也偏涼,下水前有心理準備。",
        en: "The Baltic Sea stays chilly even in high summer — be ready before you dive in.",
      },
    ],
  },
  {
    id: "LTU",
    name: { zh: "立陶宛", en: "Lithuania" },
    capital: { zh: "維爾紐斯", en: "Vilnius" },
    flag: "🇱🇹",
    region: "europe",
    center: { lat: 55.2, lng: 23.9 },
    intro: {
      zh: "波羅的海三國最南端,中世紀曾是歐洲面積最大的國家之一。維爾紐斯巴洛克老城、沙丘綿延的庫爾斯沙嘴與十字架山,展現這個民族深厚的信仰與韌性;也是三國中人口最多的一國。",
      en: "The southernmost Baltic state — in the Middle Ages one of Europe's largest countries. Vilnius's baroque old town, the dune-lined Curonian Spit, and the Hill of Crosses reflect deep faith and resilience; it is also the most populous of the three Baltics.",
    },
    history: {
      zh: "13 世紀建立大公國,14 世紀版圖一度從波羅的海延伸到黑海,是歐洲最後一個接受基督教的主要國家。1569 年與波蘭結成聯邦,18 世紀末遭瓜分併入俄羅斯帝國。1918 年獨立,1940 年被蘇聯併吞;1990 年 3 月率先宣布脫離蘇聯獨立,成為推倒蘇聯的第一張骨牌,2004 年加入歐盟與北約,2015 年採用歐元。",
      en: "The Grand Duchy, founded in the 13th century, stretched from the Baltic to the Black Sea by the 14th — Europe's last major pagan state to adopt Christianity. It formed a commonwealth with Poland in 1569 and was absorbed by the Russian Empire in the late-18th-century partitions. Independent from 1918, annexed by the USSR in 1940, Lithuania was the first republic to declare independence from the Soviet Union in March 1990 — the first domino in its collapse — joining the EU and NATO in 2004 and the euro in 2015.",
    },
    cities: [
      {
        name: { zh: "維爾紐斯", en: "Vilnius" },
        blurb: {
          zh: "巴洛克教堂密布的首都,老城是世界遺產,還有個「藝術家共和國」對岸區。",
          en: "A capital dense with baroque churches — a World Heritage old town plus the artists' 'republic' of Užupis across the river.",
        },
        trivia: {
          question: {
            zh: "維爾紐斯的對岸區(Užupis)以什麼獨特的身分聞名?",
            en: "The Užupis district of Vilnius is famous for declaring itself what?",
          },
          options: [
            { zh: "自行宣告的「藝術家共和國」", en: "A self-declared artists' 'republic'" },
            { zh: "歐洲最大的猶太區", en: "Europe's largest Jewish quarter" },
            { zh: "全球第一個無車城區", en: "The world's first car-free district" },
            { zh: "聯合國總部所在地", en: "The seat of the United Nations" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1997 年愚人節,這個藝術家聚居的河畔小區戲稱獨立為「對岸共和國」,還有自己的憲法與「總統」。",
            en: "On April Fools' Day 1997 the bohemian riverside quarter proclaimed the 'Republic of Užupis', complete with its own constitution and 'president'.",
          },
        },
      },
      {
        name: { zh: "考納斯", en: "Kaunas" },
        blurb: {
          zh: "兩河交會的第二大城,戰間期曾任臨時首都,現代主義建築群獲登錄世界遺產。",
          en: "The second city at the meeting of two rivers — interwar provisional capital, its modernist architecture now World Heritage listed.",
        },
        trivia: {
          question: {
            zh: "考納斯在 1919-1939 年間為何成為立陶宛的臨時首都?",
            en: "Why did Kaunas serve as Lithuania's provisional capital from 1919 to 1939?",
          },
          options: [
            { zh: "維爾紐斯當時被波蘭控制", en: "Vilnius was then under Polish control" },
            { zh: "維爾紐斯毀於大火", en: "Vilnius had burned down" },
            { zh: "考納斯是唯一的海港", en: "Kaunas was the only seaport" },
            { zh: "憲法規定首都輪替", en: "The constitution required rotating capitals" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1920 年波蘭占領維爾紐斯地區,立陶宛遂以考納斯為臨時首都,直到 1939 年收回維爾紐斯。",
            en: "Poland seized the Vilnius region in 1920, so Lithuania governed from Kaunas until Vilnius was returned in 1939.",
          },
        },
      },
      {
        name: { zh: "克萊佩達", en: "Klaipėda" },
        blurb: {
          zh: "唯一的海港城市,德式桁架老屋猶存,是前往庫爾斯沙嘴的渡口。",
          en: "Lithuania's only seaport, with surviving German half-timbered houses — the ferry point for the Curonian Spit.",
        },
        trivia: {
          question: {
            zh: "克萊佩達外海的庫爾斯沙嘴(Curonian Spit)是什麼樣的地形?",
            en: "What kind of landform is the Curonian Spit off Klaipėda?",
          },
          options: [
            { zh: "細長的沙丘半島,隔出潟湖", en: "A long, thin dune peninsula enclosing a lagoon" },
            { zh: "火山島鏈", en: "A chain of volcanic islands" },
            { zh: "珊瑚環礁", en: "A coral atoll" },
            { zh: "冰川峽灣", en: "A glacial fjord" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這條長約 98 公里的沙嘴由沙丘構成,把庫爾斯潟湖與波羅的海隔開,由立陶宛與俄羅斯分治,已列世界遺產。",
            en: "The ~98 km sand-dune spit separates the Curonian Lagoon from the Baltic; shared by Lithuania and Russia, it is a World Heritage Site.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "十字架山上插著數十萬座十字架,蘇聯時期屢遭剷平又屢被信徒重新插滿。",
        en: "The Hill of Crosses holds hundreds of thousands of crosses — bulldozed repeatedly in Soviet times and defiantly replanted each time.",
      },
      {
        zh: "籃球是立陶宛的「第二宗教」,國家隊多次奪得歐錦賽與奧運獎牌。",
        en: "Basketball is Lithuania's 'second religion' — its national team has won multiple European titles and Olympic medals.",
      },
    ],
    climate: {
      zh: "溫帶氣候,介於海洋性與大陸性之間:夏季溫和,冬季寒冷有雪,沿海受波羅的海調節較內陸溫和。",
      en: "Temperate, between maritime and continental — mild summers and cold snowy winters, with the Baltic coast milder than the interior.",
    },
    travelTips: [
      {
        zh: "維爾紐斯、考納斯與克萊佩達之間火車巴士便捷,三城加沙嘴約需四至五天。",
        en: "Trains and buses link Vilnius, Kaunas, and Klaipėda easily — allow four to five days for the three cities plus the Spit.",
      },
      {
        zh: "前往庫爾斯沙嘴需搭渡輪並支付生態入境費,旺季住宿要提早訂。",
        en: "The Curonian Spit requires a ferry and an ecology entrance fee — book summer lodging well ahead.",
      },
      {
        zh: "試試冷甜菜湯(šaltibarščiai),粉紅色的夏季名物配熱馬鈴薯非常道地。",
        en: "Try šaltibarščiai — the bright-pink cold beet soup served with hot potatoes is a summer classic.",
      },
    ],
  },
  {
    id: "BLR",
    name: { zh: "白俄羅斯", en: "Belarus" },
    capital: { zh: "明斯克", en: "Minsk" },
    flag: "🇧🇾",
    region: "europe",
    center: { lat: 53.7, lng: 27.9 },
    intro: {
      zh: "東歐內陸國,地勢平坦、森林與沼澤廣布,別稱「白色羅斯」。首都明斯克以宏偉的蘇聯史達林式建築聞名;別洛韋日原始森林是歐洲平原上最後的古老森林之一,棲息著歐洲野牛。",
      en: "A flat, landlocked Eastern European country of forests and marshes — 'White Rus'. Minsk is known for its grand Stalinist architecture, while the Białowieża primeval forest, home to European bison, is among the last old-growth forests on the European plain.",
    },
    history: {
      zh: "中世紀屬基輔羅斯文化圈,後長期為立陶宛大公國與波蘭-立陶宛聯邦的核心地帶,18 世紀末併入俄羅斯帝國。二戰時全境淪為戰場,約四分之一人口喪生,明斯克幾乎全毀後以蘇聯樣板城市重建。1991 年蘇聯解體後獨立,1994 年起盧卡申科長期執政至今,政治與經濟上與俄羅斯關係緊密。",
      en: "Part of the Kievan Rus' cultural sphere in the Middle Ages, the land later formed a core of the Grand Duchy of Lithuania and the Polish-Lithuanian Commonwealth before joining the Russian Empire in the late 18th century. WWII devastated it — roughly a quarter of the population died, and flattened Minsk was rebuilt as a model Soviet city. Independent since the USSR's 1991 collapse, it has been ruled by Lukashenko since 1994, remaining closely tied to Russia.",
    },
    cities: [
      {
        name: { zh: "明斯克", en: "Minsk" },
        blurb: {
          zh: "二戰後整體重建的首都,寬闊大道與史達林式建築構成獨特的城市景觀。",
          en: "A capital wholly rebuilt after WWII — broad avenues and Stalinist architecture create a distinctive cityscape.",
        },
        trivia: {
          question: {
            zh: "明斯克市中心的獨立大道一帶為何以整齊劃一的史達林式建築聞名?",
            en: "Why is central Minsk's Independence Avenue famous for its uniform Stalinist architecture?",
          },
          options: [
            { zh: "二戰全毀後依統一的蘇聯規劃重建", en: "The war-flattened city was rebuilt to a unified Soviet plan" },
            { zh: "沙皇時代的都市美化工程", en: "A tsarist-era beautification project" },
            { zh: "1980 年奧運場館建設", en: "Construction for the 1980 Olympics" },
            { zh: "戰後美援重建計畫", en: "A postwar American aid program" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "明斯克在二戰中幾乎被夷平,1950 年代起依單一規劃重建,成為蘇聯城市設計最完整的展示場之一。",
            en: "Minsk was almost totally destroyed in WWII and rebuilt from the 1950s to a single plan — one of the most complete showcases of Soviet urban design.",
          },
        },
      },
      {
        name: { zh: "布列斯特", en: "Brest" },
        blurb: {
          zh: "西部邊境城市,布列斯特要塞是蘇聯衛國戰爭的象徵性紀念地。",
          en: "A western border city whose fortress is an iconic Soviet WWII memorial.",
        },
        trivia: {
          question: {
            zh: "布列斯特要塞因 1941 年的哪個事件而成為著名的戰爭紀念地?",
            en: "Brest Fortress became a famous war memorial for its role in what 1941 event?",
          },
          options: [
            { zh: "德軍入侵蘇聯初期的頑強防禦戰", en: "Its stubborn defense at the start of the German invasion of the USSR" },
            { zh: "蘇聯原子彈試驗", en: "A Soviet atomic bomb test" },
            { zh: "史達林格勒戰役", en: "The Battle of Stalingrad" },
            { zh: "諾曼第登陸", en: "The Normandy landings" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1941 年 6 月德軍發動巴巴羅薩行動,要塞守軍在孤立無援下抵抗多日,戰後被蘇聯授予「英雄要塞」稱號。",
            en: "When Operation Barbarossa began in June 1941, the isolated garrison held out for days; the USSR later honored it as a 'Hero Fortress'.",
          },
        },
      },
      {
        name: { zh: "格羅德諾", en: "Grodno" },
        blurb: {
          zh: "西北部古城,天主教堂與舊城風貌保存較完整,深受波蘭-立陶宛時代影響。",
          en: "An old northwestern city with well-preserved Catholic churches and old-town fabric from the Polish-Lithuanian era.",
        },
        trivia: {
          question: {
            zh: "格羅德諾的歷史建築風貌主要反映了哪段歷史時期的影響?",
            en: "Grodno's historic architecture chiefly reflects the influence of which historical period?",
          },
          options: [
            { zh: "波蘭-立陶宛聯邦時期", en: "The Polish-Lithuanian Commonwealth era" },
            { zh: "鄂圖曼帝國時期", en: "The Ottoman era" },
            { zh: "維京時代", en: "The Viking Age" },
            { zh: "拜占庭帝國時期", en: "The Byzantine era" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "格羅德諾曾是聯邦重要城市,國會多次在此召開,巴洛克教堂與舊城街廓保留了那個時代的面貌。",
            en: "A key Commonwealth city where parliaments convened, Grodno keeps baroque churches and street fabric from that era.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "跨越白俄羅斯與波蘭邊境的別洛韋日森林棲息著數千頭歐洲野牛,是這個物種最重要的家園。",
        en: "The Białowieża Forest straddling Belarus and Poland shelters thousands of European bison — the species' most important home.",
      },
      {
        zh: "白俄羅斯常被稱為「歐洲之肺」,沼澤與森林面積在歐洲名列前茅。",
        en: "Belarus is sometimes called the 'lungs of Europe' for its vast marshes and forests.",
      },
    ],
    climate: {
      zh: "溫帶大陸性氣候,夏季溫暖、冬季寒冷漫長,積雪期可達三個月以上,春秋短促,全年降水適中。",
      en: "Temperate continental climate — warm summers and long cold winters with snow cover often lasting over three months, short shoulder seasons, and moderate rainfall.",
    },
    travelTips: [
      {
        zh: "簽證與入境規定變動頻繁且受政治情勢影響,行前務必查詢本國外交部門最新旅遊警示。",
        en: "Visa and entry rules change often and are affected by the political situation — check your government's latest travel advisories before going.",
      },
      {
        zh: "當地使用白俄羅斯盧布,國際信用卡受制裁影響可能無法使用,需備妥現金方案。",
        en: "The currency is the Belarusian ruble; international credit cards may not work due to sanctions, so plan for cash.",
      },
      {
        zh: "俄語通行全國,英語普及度低,準備翻譯 App 或基本俄語詞彙會很有幫助。",
        en: "Russian is spoken everywhere and English is limited — a translation app or basic Russian phrases help a lot.",
      },
    ],
  },
];
