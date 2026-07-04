import type { Country } from "../types";

// Americas (batch 2): 16 countries. Content shape is LLM-generatable — see types.ts.

export const AMERICAS_MORE1: Country[] = [
  {
    id: "GTM",
    name: { zh: "瓜地馬拉", en: "Guatemala" },
    capital: { zh: "瓜地馬拉市", en: "Guatemala City" },
    flag: "🇬🇹",
    region: "americas",
    center: { lat: 15.5, lng: -90.3 },
    intro: {
      zh: "中美洲人口最多的國家,馬雅文明的心臟地帶。火山環繞的高原上散布著色彩繽紛的原住民市集,提卡爾金字塔藏身北部雨林,阿蒂特蘭湖被譽為世界最美的湖泊之一,咖啡與紡織品聞名世界。",
      en: "Central America's most populous country and the heartland of Maya civilization. Volcano-ringed highlands host colorful indigenous markets, the Tikal pyramids rise from northern rainforest, Lake Atitlán ranks among the world's most beautiful lakes, and its coffee and textiles are world-famous.",
    },
    history: {
      zh: "馬雅文明在此繁盛千年,提卡爾等城邦於古典期達到頂峰。16 世紀西班牙征服後成為瓜地馬拉都督府的中心,1821 年隨中美洲各省一同脫離西班牙獨立。20 世紀歷經香蕉公司壟斷經濟、1954 年政變與長達 36 年的內戰,1996 年簽署和平協議後走向重建,馬雅後裔至今仍占人口約四成。",
      en: "Maya civilization flourished here for a millennium, with city-states like Tikal peaking in the Classic era. After the 16th-century Spanish conquest it became the seat of the Captaincy General of Guatemala, gaining independence with Central America in 1821. The 20th century brought banana-company dominance, a 1954 coup, and a 36-year civil war ended by the 1996 peace accords; people of Maya descent still make up about 40% of the population.",
    },
    cities: [
      {
        name: { zh: "瓜地馬拉市", en: "Guatemala City" },
        blurb: {
          zh: "中美洲最大的都會區之一,群山與火山環繞的現代首都。",
          en: "One of Central America's largest metro areas — a modern capital ringed by mountains and volcanoes.",
        },
        trivia: {
          question: {
            zh: "瓜地馬拉的貨幣「格查爾」(Quetzal)是以什麼命名的?",
            en: "Guatemala's currency, the quetzal, is named after what?",
          },
          options: [
            { zh: "國鳥格查爾鳥(鳳尾綠咬鵑)", en: "The national bird, the resplendent quetzal" },
            { zh: "一位馬雅國王", en: "A Maya king" },
            { zh: "一座火山", en: "A volcano" },
            { zh: "西班牙征服者", en: "A Spanish conquistador" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鳳尾綠咬鵑是瓜地馬拉國鳥,馬雅時代其羽毛曾作為交易媒介,因此貨幣以牠為名。",
            en: "The resplendent quetzal is the national bird; its feathers were used as currency in Maya times, hence the name.",
          },
        },
      },
      {
        name: { zh: "安地瓜", en: "Antigua Guatemala" },
        blurb: {
          zh: "西班牙殖民古都,鵝卵石街道與巴洛克教堂被三座火山環抱。",
          en: "The old Spanish colonial capital — cobblestones and baroque churches framed by three volcanoes.",
        },
        trivia: {
          question: {
            zh: "安地瓜曾是瓜地馬拉的首都,後來為什麼遷都?",
            en: "Antigua was once Guatemala's capital. Why was the capital moved away?",
          },
          options: [
            { zh: "強烈地震摧毀了城市", en: "Devastating earthquakes destroyed the city" },
            { zh: "火山熔岩掩埋全城", en: "Volcanic lava buried the city" },
            { zh: "海盜频繁劫掠", en: "Repeated pirate raids" },
            { zh: "河流改道導致缺水", en: "A river changed course, cutting off water" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1773 年的聖馬爾塔大地震重創安地瓜,西班牙王室下令遷都至今日的瓜地馬拉市,古城遺跡後來列入世界遺產。",
            en: "The 1773 Santa Marta earthquakes wrecked Antigua, and the crown ordered the capital moved to today's Guatemala City; the ruins are now a World Heritage site.",
          },
        },
      },
      {
        name: { zh: "弗洛雷斯", en: "Flores" },
        blurb: {
          zh: "佩滕伊察湖上的小島古城,是探訪北部雨林馬雅遺址的基地。",
          en: "A tiny island town on Lake Petén Itzá — the base for exploring the Maya ruins of the northern jungle.",
        },
        trivia: {
          question: {
            zh: "從弗洛雷斯出發,最常造訪的著名馬雅遺址是哪一座?",
            en: "Which famous Maya site is most commonly visited from Flores?",
          },
          options: [
            { zh: "提卡爾", en: "Tikal" },
            { zh: "奇琴伊察", en: "Chichén Itzá" },
            { zh: "科潘", en: "Copán" },
            { zh: "帕倫克", en: "Palenque" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "提卡爾是古典期馬雅最強大的城邦之一,神廟金字塔高出雨林樹冠,距弗洛雷斯約一小時車程。",
            en: "Tikal was one of the mightiest Classic Maya city-states; its temple pyramids tower over the rainforest canopy about an hour from Flores.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "瓜地馬拉是中華民國(台灣)在中美洲的邦交國之一,邦誼超過八十年。",
        en: "Guatemala is one of Taiwan's diplomatic allies in Central America, with ties spanning more than eight decades.",
      },
      {
        zh: "藍色的阿蒂特蘭湖其實是一座巨大火山口湖,湖畔矗立三座火山。",
        en: "Lake Atitlán fills a huge volcanic caldera, with three volcanoes standing on its shores.",
      },
    ],
    climate: {
      zh: "熱帶氣候但隨海拔變化大:高原終年如春,低地炎熱潮濕。5–10 月為雨季,午後常有雷陣雨,11–4 月乾季晴朗涼爽。",
      en: "Tropical but strongly shaped by altitude: the highlands enjoy eternal spring while the lowlands are hot and humid. May–October is the rainy season with afternoon storms; November–April is dry and pleasant.",
    },
    travelTips: [
      {
        zh: "高原地區早晚溫差大,即使夏天也建議帶件薄外套。",
        en: "Highland mornings and evenings get chilly — pack a light jacket even in summer.",
      },
      {
        zh: "城際移動可搭觀光接駁小巴,比當地「雞巴士」舒適且直達。",
        en: "Tourist shuttle vans link major destinations — more comfortable and direct than local 'chicken buses'.",
      },
      {
        zh: "提卡爾日出行程需凌晨出發,記得前一晚在弗洛雷斯訂好行程。",
        en: "Tikal sunrise tours leave before dawn — book from Flores the night before.",
      },
    ],
  },
  {
    id: "BLZ",
    name: { zh: "貝里斯", en: "Belize" },
    capital: { zh: "貝爾墨潘", en: "Belmopan" },
    flag: "🇧🇿",
    region: "americas",
    center: { lat: 17.2, lng: -88.7 },
    intro: {
      zh: "中美洲唯一以英語為官方語言的國家,前身是英屬宏都拉斯。外海有北半球最大的堡礁與知名的大藍洞,內陸則是馬雅遺址與雨林,人口僅約四十萬,是潛水與生態旅遊的天堂。",
      en: "The only Central American country with English as its official language, formerly British Honduras. Offshore lies the largest barrier reef in the Northern Hemisphere and the famous Great Blue Hole; inland are Maya ruins and rainforest. With only about 400,000 people, it's a diving and ecotourism paradise.",
    },
    history: {
      zh: "古典馬雅時代這裡有卡拉科爾等重要城邦。17 世紀英國伐木者在此定居採伐染料木,逐漸發展為英屬宏都拉斯殖民地,1973 年改名貝里斯,1981 年獨立並留在大英國協。鄰國瓜地馬拉長期主張對其領土的主權,兩國將爭議提交國際法院。今日觀光業與農業是經濟主力,多元族群和平共處。",
      en: "In the Classic Maya era this land held major city-states like Caracol. British logwood cutters settled in the 17th century, and the territory became the colony of British Honduras, renamed Belize in 1973 and independent within the Commonwealth in 1981. Neighboring Guatemala long claimed its territory, a dispute now before the International Court of Justice. Tourism and agriculture drive today's economy in a peacefully diverse society.",
    },
    cities: [
      {
        name: { zh: "貝里斯市", en: "Belize City" },
        blurb: {
          zh: "全國最大城市與舊首都,前往離島與堡礁的門戶港口。",
          en: "The largest city and former capital — the gateway port to the cayes and the barrier reef.",
        },
        trivia: {
          question: {
            zh: "貝里斯外海著名的「大藍洞」因哪位探險家的考察而聞名世界?",
            en: "The Great Blue Hole off Belize became world-famous after being explored by which figure?",
          },
          options: [
            { zh: "雅克·庫斯托", en: "Jacques Cousteau" },
            { zh: "達爾文", en: "Charles Darwin" },
            { zh: "史考特船長", en: "Captain Scott" },
            { zh: "海爾達", en: "Thor Heyerdahl" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1971 年法國海洋學家庫斯托率調查船前來探勘,將這個直徑約 300 公尺的水下巨型天坑列為世界頂級潛點。",
            en: "In 1971 French oceanographer Jacques Cousteau surveyed the roughly 300-meter-wide underwater sinkhole and declared it one of the world's top dive sites.",
          },
        },
      },
      {
        name: { zh: "貝爾墨潘", en: "Belmopan" },
        blurb: {
          zh: "1970 年代新建的內陸首都,是世界上最小的首都之一。",
          en: "A purpose-built inland capital from the 1970s — one of the smallest capital cities in the world.",
        },
        trivia: {
          question: {
            zh: "貝里斯為什麼把首都從貝里斯市遷到內陸新建的貝爾墨潘?",
            en: "Why did Belize move its capital from Belize City to the newly built inland Belmopan?",
          },
          options: [
            { zh: "颶風重創了沿海的貝里斯市", en: "A hurricane devastated coastal Belize City" },
            { zh: "貝里斯市發生大火", en: "A great fire burned Belize City" },
            { zh: "為了靠近馬雅遺址發展觀光", en: "To be closer to Maya ruins for tourism" },
            { zh: "舊首都被鄰國占領", en: "The old capital was occupied by a neighbor" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1961 年颶風哈蒂夾帶風暴潮重創貝里斯市,政府決定在內陸高地新建首都,1970 年遷都貝爾墨潘。",
            en: "Hurricane Hattie's storm surge wrecked Belize City in 1961, so the government built a new capital on higher ground inland, moving to Belmopan in 1970.",
          },
        },
      },
      {
        name: { zh: "聖伊格納西奧", en: "San Ignacio" },
        blurb: {
          zh: "西部內陸小鎮,探索洞穴、雨林與馬雅遺址的冒險基地。",
          en: "A laid-back western town — the adventure base for caves, jungle, and Maya ruins.",
        },
        trivia: {
          question: {
            zh: "聖伊格納西奧近郊有一座隔著河谷可遠眺瓜地馬拉的馬雅遺址,名字是?",
            en: "Which Maya site near San Ignacio overlooks the Guatemalan border from its hilltop?",
          },
          options: [
            { zh: "蘇南圖尼奇", en: "Xunantunich" },
            { zh: "提卡爾", en: "Tikal" },
            { zh: "科潘", en: "Copán" },
            { zh: "圖倫", en: "Tulum" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "蘇南圖尼奇意為「石之女」,主金字塔「El Castillo」高約 40 公尺,遊客需搭手搖渡輪過河再上山。",
            en: "Xunantunich, 'Stone Woman', features the 40-meter El Castillo pyramid — visitors cross the river on a hand-cranked ferry to reach it.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "貝里斯是中華民國(台灣)的邦交國,兩國在農業與醫療上有多項合作計畫。",
        en: "Belize is a diplomatic ally of Taiwan, with cooperation programs in agriculture and healthcare.",
      },
      {
        zh: "貝里斯堡礁綿延約 300 公里,是北半球最大的珊瑚礁系統,已列入世界遺產。",
        en: "The Belize Barrier Reef runs about 300 km — the largest reef system in the Northern Hemisphere and a World Heritage site.",
      },
    ],
    climate: {
      zh: "熱帶氣候,終年炎熱潮濕,沿海有海風調節。2–5 月較乾燥,6–11 月為雨季並可能受颶風影響,潛水旺季在乾季。",
      en: "Tropical, hot and humid year-round, tempered by sea breezes on the coast. February–May is drier; June–November brings rain and possible hurricanes. Dive season peaks in the dry months.",
    },
    travelTips: [
      {
        zh: "美元在貝里斯普遍通用,匯率固定 1 美元約 2 貝里斯元,找零常混用兩種貨幣。",
        en: "US dollars are widely accepted at a fixed rate of about 2 Belize dollars per USD — expect change in a mix of both.",
      },
      {
        zh: "前往堡礁潛水或浮潛,多數人以貝里斯市或考克島(Caye Caulker)為基地。",
        en: "For reef diving and snorkeling, most travelers base themselves in Belize City or on Caye Caulker.",
      },
      {
        zh: "6–11 月為颶風季,出發前留意氣象與航班異動。",
        en: "June–November is hurricane season — watch forecasts and possible flight changes before you go.",
      },
    ],
  },
  {
    id: "HND",
    name: { zh: "宏都拉斯", en: "Honduras" },
    capital: { zh: "德古西加巴", en: "Tegucigalpa" },
    flag: "🇭🇳",
    region: "americas",
    center: { lat: 14.8, lng: -86.6 },
    intro: {
      zh: "中美洲多山之國,西部的科潘是馬雅文明最精美的雕刻之城,加勒比海上的海灣群島則是世界知名的平價潛水勝地。咖啡與香蕉長期是出口支柱,「香蕉共和國」一詞的典故便與它有關。",
      en: "A mountainous Central American nation. Copán in the west holds the Maya world's finest carvings, while the Bay Islands in the Caribbean are famed for affordable world-class diving. Coffee and bananas anchor exports — the term 'banana republic' traces back to here.",
    },
    history: {
      zh: "西部曾是馬雅城邦科潘的領地,16 世紀被西班牙征服,1821 年獨立後曾加入中美洲聯邦。19 世紀末美國水果公司掌控香蕉產業與政治,作家歐·亨利因此創造「香蕉共和國」一詞。20 世紀政局多次動盪,1998 年颶風米契造成重創。今日以咖啡、成衣加工與僑匯支撐經濟,並持續與貧富差距奮鬥。",
      en: "The west belonged to the Maya city-state of Copán before the 16th-century Spanish conquest. Independent from 1821, Honduras joined the Central American Federation, then saw US fruit companies dominate its bananas and politics — inspiring O. Henry to coin 'banana republic'. The 20th century brought repeated instability, and Hurricane Mitch devastated the country in 1998. Coffee, apparel manufacturing, and remittances sustain today's economy amid persistent inequality.",
    },
    cities: [
      {
        name: { zh: "德古西加巴", en: "Tegucigalpa" },
        blurb: {
          zh: "山谷中的首都,殖民老城與現代市區在丘陵間交錯。",
          en: "A capital folded into a mountain valley, its colonial core and modern districts draped over the hills.",
        },
        trivia: {
          question: {
            zh: "宏都拉斯的貨幣「倫皮拉」(Lempira)是以誰命名的?",
            en: "Honduras's currency, the lempira, is named after whom?",
          },
          options: [
            { zh: "率眾抵抗西班牙人的原住民酋長", en: "An indigenous chief who resisted the Spanish" },
            { zh: "第一任總統", en: "The first president" },
            { zh: "一位西班牙總督", en: "A Spanish colonial governor" },
            { zh: "馬雅的雨神", en: "The Maya rain god" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "倫卡族酋長倫皮拉在 1530 年代率領原住民對抗西班牙征服者,被尊為民族英雄,貨幣與一個省份都以他為名。",
            en: "Lenca chief Lempira led indigenous resistance against the Spanish in the 1530s; a national hero, he lends his name to both the currency and a department.",
          },
        },
      },
      {
        name: { zh: "聖佩德羅蘇拉", en: "San Pedro Sula" },
        blurb: {
          zh: "北部平原的第二大城,全國工商業與交通樞紐。",
          en: "The second city on the northern plain — the country's industrial, commercial, and transport hub.",
        },
        trivia: {
          question: {
            zh: "聖佩德羅蘇拉在宏都拉斯經濟中扮演什麼角色?",
            en: "What role does San Pedro Sula play in the Honduran economy?",
          },
          options: [
            { zh: "工商業首都,產值居全國之冠", en: "The industrial capital, generating the largest share of output" },
            { zh: "純觀光度假城市", en: "A purely tourist resort city" },
            { zh: "行政首都", en: "The administrative capital" },
            { zh: "最大漁港", en: "The largest fishing port" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "聖佩德羅蘇拉鄰近加勒比海岸的出口門戶科爾特斯港,成衣加工業與農產貿易集中於此,被稱為宏都拉斯的經濟首都。",
            en: "Near the Caribbean export gateway of Puerto Cortés, San Pedro Sula concentrates apparel manufacturing and agri-trade — Honduras's economic capital.",
          },
        },
      },
      {
        name: { zh: "科潘", en: "Copán Ruinas" },
        blurb: {
          zh: "緊鄰馬雅遺址的山間小鎮,石雕與象形文字的殿堂。",
          en: "A hill town beside the Maya ruins — a temple of stone carving and hieroglyphs.",
        },
        trivia: {
          question: {
            zh: "科潘遺址的「象形文字階梯」以什麼聞名?",
            en: "The Hieroglyphic Stairway at Copán is famous for what?",
          },
          options: [
            { zh: "現存最長的馬雅象形文字銘文", en: "The longest known Maya hieroglyphic inscription" },
            { zh: "全用黃金打造", en: "Being made entirely of gold" },
            { zh: "馬雅最高的金字塔", en: "Being the tallest Maya pyramid" },
            { zh: "刻滿星座圖", en: "Being covered in star charts" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座階梯由兩千多塊刻字石塊組成,記錄科潘王朝的歷史,是現存最長的馬雅文字文本,科潘也因精美石雕被譽為馬雅的「雅典」。",
            en: "Built from over 2,000 glyph-carved blocks recording Copán's dynastic history, it is the longest surviving Maya text — Copán's exquisite carvings earned it the nickname 'Athens of the Maya world'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "海灣群島的羅阿坦島位於中美洲堡礁上,是世界最物美價廉的潛水考照地之一。",
        en: "Roatán in the Bay Islands sits on the Mesoamerican Reef and is one of the world's most affordable places to get dive-certified.",
      },
      {
        zh: "宏都拉斯的約羅省有著名的「魚雨」傳說,每年雨季據說會有魚從天而降。",
        en: "Yoro department is famous for its 'rain of fish' legend — locals say fish fall from the sky during seasonal storms.",
      },
    ],
    climate: {
      zh: "熱帶氣候:加勒比海沿岸終年濕熱多雨,內陸高地較涼爽宜人。太平洋側 5–10 月為雨季,颶風季需留意北岸。",
      en: "Tropical: the Caribbean coast is hot, humid, and rainy year-round, while the interior highlands stay cooler. The Pacific side sees rains May–October, and the north coast is exposed in hurricane season.",
    },
    travelTips: [
      {
        zh: "科潘遺址清晨開門時遊客最少、光線也最適合看石雕。",
        en: "Visit Copán right at opening — fewest crowds and the best light for the carvings.",
      },
      {
        zh: "前往羅阿坦島可從聖佩德羅蘇拉轉機或自拉塞巴搭渡輪。",
        en: "Reach Roatán by connecting flight from San Pedro Sula or by ferry from La Ceiba.",
      },
      {
        zh: "城市治安狀況不一,貴重物品低調攜帶,夜間以計程車代步較安心。",
        en: "Urban safety varies — keep valuables discreet and prefer taxis after dark.",
      },
    ],
  },
  {
    id: "SLV",
    name: { zh: "薩爾瓦多", en: "El Salvador" },
    capital: { zh: "聖薩爾瓦多", en: "San Salvador" },
    flag: "🇸🇻",
    region: "americas",
    center: { lat: 13.8, lng: -88.9 },
    intro: {
      zh: "中美洲面積最小、人口最稠密的國家,也是唯一沒有加勒比海岸線的中美洲國家。境內火山連綿,有「火山之國」之稱,太平洋岸的衝浪點世界聞名,國民美食普普薩玉米餅是庶民日常。",
      en: "Central America's smallest and most densely populated country — and the only one without a Caribbean coastline. Chains of volcanoes earn it the nickname 'Land of Volcanoes', its Pacific surf breaks are world-renowned, and the pupusa is the beloved national dish.",
    },
    history: {
      zh: "原為皮皮爾人的土地,16 世紀被西班牙征服,1821 年獨立。19 世紀末咖啡出口造就少數家族寡頭,貧富懸殊埋下衝突種子,1980–1992 年爆發慘烈內戰,和平協議後仍長期受幫派暴力所苦。2001 年改用美元,2021 年成為全球第一個將比特幣列為法定貨幣的國家,近年治安大幅改善但也引發人權爭議。",
      en: "Home of the Pipil people before the 16th-century Spanish conquest, independent from 1821. Coffee wealth concentrated in a few oligarch families, sowing conflict that erupted into the brutal 1980–1992 civil war; gang violence plagued the peace that followed. It dollarized in 2001 and in 2021 became the first country to adopt Bitcoin as legal tender; security has improved dramatically in recent years, though amid human-rights controversy.",
    },
    cities: [
      {
        name: { zh: "聖薩爾瓦多", en: "San Salvador" },
        blurb: {
          zh: "火山腳下的首都,歷經地震多次重建的現代都會。",
          en: "A capital at the foot of a volcano, rebuilt repeatedly after earthquakes into a modern metropolis.",
        },
        trivia: {
          question: {
            zh: "2021 年薩爾瓦多創下什麼世界第一?",
            en: "In 2021, El Salvador became the first country in the world to do what?",
          },
          options: [
            { zh: "將比特幣列為法定貨幣", en: "Adopt Bitcoin as legal tender" },
            { zh: "全面禁用現金", en: "Ban cash entirely" },
            { zh: "發行國家加密交易所", en: "Launch a state-run crypto exchange as sole market" },
            { zh: "改用歐元", en: "Switch its currency to the euro" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "2021 年 9 月比特幣法生效,比特幣與美元並列法定貨幣,政府並推出官方錢包 Chivo,此舉引發全球關注與辯論。",
            en: "The Bitcoin Law took effect in September 2021, making Bitcoin legal tender alongside the US dollar, with the government's Chivo wallet — a move that drew worldwide attention and debate.",
          },
        },
      },
      {
        name: { zh: "聖塔安那", en: "Santa Ana" },
        blurb: {
          zh: "西部咖啡重鎮,新哥德式大教堂與華麗劇院是地標。",
          en: "The western coffee capital, landmarked by a neo-Gothic cathedral and an ornate theater.",
        },
        trivia: {
          question: {
            zh: "聖塔安那火山(伊拉馬特佩克)在薩爾瓦多的火山中有什麼地位?",
            en: "What distinction does the Santa Ana volcano (Ilamatepec) hold in El Salvador?",
          },
          options: [
            { zh: "全國最高的火山", en: "The country's highest volcano" },
            { zh: "全國唯一的死火山", en: "The country's only extinct volcano" },
            { zh: "海拔最低的火山", en: "The lowest-lying volcano" },
            { zh: "最晚被發現的火山", en: "The most recently discovered volcano" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "聖塔安那火山海拔 2,381 公尺,是薩爾瓦多最高的火山,山頂火口湖呈綠松石色,健行登頂是熱門行程。",
            en: "At 2,381 m, Santa Ana is El Salvador's highest volcano; hiking to its turquoise crater lake is a favorite excursion.",
          },
        },
      },
      {
        name: { zh: "蘇奇托托", en: "Suchitoto" },
        blurb: {
          zh: "保存完好的殖民山城,鵝卵石街道俯瞰蘇奇特蘭湖。",
          en: "A beautifully preserved colonial hill town, its cobbled lanes overlooking Lake Suchitlán.",
        },
        trivia: {
          question: {
            zh: "蘇奇托托所俯瞰的蘇奇特蘭湖是如何形成的?",
            en: "How was Lake Suchitlán, overlooked by Suchitoto, formed?",
          },
          options: [
            { zh: "水壩攔河形成的人工水庫", en: "It's a reservoir created by a hydroelectric dam" },
            { zh: "火山口積水", en: "It fills a volcanic crater" },
            { zh: "隕石撞擊坑", en: "It fills a meteorite crater" },
            { zh: "冰河侵蝕的湖盆", en: "It was carved by glaciers" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1970 年代興建的塞隆格蘭德水壩攔截倫帕河,形成薩爾瓦多最大的淡水水體,如今是候鳥棲地與賞鳥勝地。",
            en: "The 1970s Cerrón Grande dam on the Lempa River created El Salvador's largest freshwater body, now a haven for migratory birds.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "國民美食普普薩(pupusa)是包餡玉米餅,每年 11 月還有全國普普薩節。",
        en: "The pupusa, a stuffed corn griddle cake, is the national dish — celebrated with a national Pupusa Day each November.",
      },
      {
        zh: "太平洋岸的 El Tunco、Punta Roca 等浪點使薩爾瓦多成為世界衝浪聯盟賽事的常客。",
        en: "Breaks like El Tunco and Punta Roca have made El Salvador a regular host of World Surf League events.",
      },
    ],
    climate: {
      zh: "熱帶氣候,分乾濕兩季:11–4 月乾季,5–10 月雨季午後多雷陣雨。沿海炎熱,內陸高地涼爽,全年適合衝浪。",
      en: "Tropical with two seasons: dry November–April and rainy May–October with afternoon downpours. The coast is hot, the highlands mild, and the surf works year-round.",
    },
    travelTips: [
      {
        zh: "薩爾瓦多通用美元,小額紙鈔在市場與小吃攤最好用。",
        en: "El Salvador uses the US dollar — small bills are handiest at markets and food stalls.",
      },
      {
        zh: "「火山大道」(Ruta de las Flores)沿線小鎮週末有美食市集,適合一日遊。",
        en: "The Ruta de las Flores villages host weekend food fairs — an easy, rewarding day trip.",
      },
      {
        zh: "衝浪初學者可在 El Tunco 找到平價教練與住宿。",
        en: "Beginner surfers will find affordable lessons and lodging at El Tunco.",
      },
    ],
  },
  {
    id: "NIC",
    name: { zh: "尼加拉瓜", en: "Nicaragua" },
    capital: { zh: "馬拿瓜", en: "Managua" },
    flag: "🇳🇮",
    region: "americas",
    center: { lat: 12.9, lng: -85.2 },
    intro: {
      zh: "中美洲面積最大的國家,擁有中美洲最大的尼加拉瓜湖,湖中的奧美特佩島由兩座火山組成。殖民古城格拉納達與雷昂各具風情,火山健行、滑火山灰板與湖島風光是旅人最愛。",
      en: "The largest country in Central America, home to Lake Nicaragua — the region's biggest lake — where twin volcanoes form Ometepe Island. Colonial Granada and León each charm in their own way, and volcano hikes, ash-boarding, and lake islands delight travelers.",
    },
    history: {
      zh: "16 世紀西班牙人建立格拉納達與雷昂兩城,殖民時代兩城長期較勁。1821 年獨立後政局動盪,美國冒險家沃克一度奪權自立為總統。索摩查家族自 1930 年代起獨裁統治四十餘年,1979 年桑定革命推翻政權,隨後陷入內戰。1990 年代恢復和平,奧蒂嘉於 2007 年重新執政至今,政治爭議未歇,經濟依賴農業與僑匯。",
      en: "Spain founded rival cities Granada and León in the 16th century. Independence in 1821 brought turbulence — American adventurer William Walker even seized the presidency briefly. The Somoza family ruled as dictators for over four decades until the 1979 Sandinista revolution, followed by civil war. Peace returned in the 1990s; Daniel Ortega regained power in 2007 and has held it amid continuing controversy, with agriculture and remittances sustaining the economy.",
    },
    cities: [
      {
        name: { zh: "馬拿瓜", en: "Managua" },
        blurb: {
          zh: "馬拿瓜湖畔的首都,1972 年大地震後市中心分散重建。",
          en: "The capital on Lake Managua's shore, its center rebuilt in scattered form after the 1972 earthquake.",
        },
        trivia: {
          question: {
            zh: "馬拿瓜當初為什麼被選為尼加拉瓜的首都?",
            en: "Why was Managua originally chosen as Nicaragua's capital?",
          },
          options: [
            { zh: "作為格拉納達與雷昂兩城相爭的折衷方案", en: "As a compromise between rival cities Granada and León" },
            { zh: "它是最大的港口", en: "It was the largest seaport" },
            { zh: "西班牙王室的行宮所在", en: "It held the Spanish royal residence" },
            { zh: "金礦帶來的財富", en: "Wealth from nearby gold mines" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "19 世紀保守派的格拉納達與自由派的雷昂爭奪首都地位,1852 年折衷選定位於兩城之間的馬拿瓜。",
            en: "Conservative Granada and liberal León fought over the capital, so in 1852 Managua — halfway between them — was chosen as the compromise.",
          },
        },
      },
      {
        name: { zh: "格拉納達", en: "Granada" },
        blurb: {
          zh: "1524 年建城的殖民古城,彩色街屋沿湖鋪展。",
          en: "A colonial city founded in 1524, its brightly painted streets spilling toward the lake.",
        },
        trivia: {
          question: {
            zh: "格拉納達緊鄰哪座湖泊,湖中還散布著數百座小島?",
            en: "Granada sits on which lake, dotted with hundreds of islets?",
          },
          options: [
            { zh: "尼加拉瓜湖", en: "Lake Nicaragua" },
            { zh: "馬拿瓜湖", en: "Lake Managua" },
            { zh: "阿蒂特蘭湖", en: "Lake Atitlán" },
            { zh: "的的喀喀湖", en: "Lake Titicaca" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼加拉瓜湖是中美洲最大的湖泊,格拉納達外的 365 座小島(Isletas)是火山爆發拋出的岩塊形成的。",
            en: "Lake Nicaragua is Central America's largest lake; the 365 Isletas off Granada were formed by debris from a volcanic eruption.",
          },
        },
      },
      {
        name: { zh: "雷昂", en: "León" },
        blurb: {
          zh: "大學城與詩人之城,白色大教堂是全城的精神象徵。",
          en: "A university town and city of poets, crowned by its great white cathedral.",
        },
        trivia: {
          question: {
            zh: "雷昂大教堂在中美洲的教堂中有什麼地位?",
            en: "What distinction does León Cathedral hold among Central American churches?",
          },
          options: [
            { zh: "中美洲最大的教堂", en: "The largest cathedral in Central America" },
            { zh: "最古老的木造教堂", en: "The oldest wooden church" },
            { zh: "唯一的東正教座堂", en: "The only Orthodox cathedral" },
            { zh: "海拔最高的教堂", en: "The highest-altitude church" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "雷昂大教堂 1747 年動工、耗時數十年建成,是中美洲最大的教堂,已列入世界遺產,詩人魯本·達里歐長眠於此,遊客還能上白色屋頂漫步。",
            en: "Begun in 1747 and decades in the building, it is Central America's largest cathedral and a World Heritage site; poet Rubén Darío is buried here, and visitors can walk its white rooftop.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "在塞羅內格羅火山,遊客可以坐著木板從火山灰坡上滑下,這項「火山滑板」是尼加拉瓜獨創。",
        en: "At Cerro Negro volcano you can board down slopes of black ash — 'volcano boarding' was invented in Nicaragua.",
      },
      {
        zh: "尼加拉瓜湖曾有公牛鯊出沒,牠們能溯河進入淡水,是罕見適應淡水的鯊魚。",
        en: "Bull sharks have been found in Lake Nicaragua — they swim upriver from the sea, a rare shark able to thrive in fresh water.",
      },
    ],
    climate: {
      zh: "熱帶氣候:太平洋側 11–4 月乾季炎熱、5–10 月雨季;加勒比海側終年潮濕多雨。高地城鎮較涼爽,乾季是旅遊旺季。",
      en: "Tropical: the Pacific side has a hot dry season November–April and rains May–October, while the Caribbean side stays wet year-round. Highland towns are cooler; the dry season is peak travel time.",
    },
    travelTips: [
      {
        zh: "奧美特佩島渡輪從聖豪爾赫出發,風浪大時容易晃,暈船者請備藥。",
        en: "Ferries to Ometepe leave from San Jorge — crossings can be choppy, so bring motion-sickness pills.",
      },
      {
        zh: "格拉納達與雷昂之間車程約兩小時,兩城風格迥異,值得都排進行程。",
        en: "Granada and León are about two hours apart and completely different in character — visit both.",
      },
      {
        zh: "出發前留意當地政治情勢與集會活動,避開遊行區域。",
        en: "Check the local political situation before you go and steer clear of demonstrations.",
      },
    ],
  },
  {
    id: "CRI",
    name: { zh: "哥斯大黎加", en: "Costa Rica" },
    capital: { zh: "聖荷西", en: "San José" },
    flag: "🇨🇷",
    region: "americas",
    center: { lat: 9.9, lng: -84.2 },
    intro: {
      zh: "中美洲的生態旅遊典範,國土僅占全球陸地的萬分之三,卻擁有約全球 5% 的物種。1948 年廢除軍隊,把資源投入教育與保育,「Pura Vida(純粹人生)」是國民的口頭禪與生活哲學。",
      en: "Central America's ecotourism model: a country covering a sliver of the world's land yet holding roughly 5% of its species. It abolished its army in 1948, channeling resources into education and conservation — 'Pura Vida' is both greeting and philosophy.",
    },
    history: {
      zh: "殖民時代因缺乏金礦與大量原住民勞力,發展成以小農為主的邊陲省份,反而奠定了相對平等的社會。1821 年獨立,19 世紀咖啡出口帶來繁榮。1948 年短暫內戰後,菲格雷斯領導的政府廢除軍隊並擴大公民權,此後成為拉丁美洲最穩定的民主國家之一,生態旅遊與高科技服務業是今日經濟主力。",
      en: "A colonial backwater with little gold or forced labor, it grew as a land of smallholder farmers — the seed of a relatively equal society. Independent in 1821, it prospered on coffee exports in the 19th century. After a brief 1948 civil war, José Figueres's government abolished the army and broadened civil rights; Costa Rica has since been one of Latin America's most stable democracies, powered today by ecotourism and high-tech services.",
    },
    cities: [
      {
        name: { zh: "聖荷西", en: "San José" },
        blurb: {
          zh: "中央谷地裡的首都,國家劇院與博物館群是文化心臟。",
          en: "The capital in the Central Valley, its National Theatre and museums forming the cultural heart.",
        },
        trivia: {
          question: {
            zh: "聖荷西的國家博物館建築前身是什麼?",
            en: "What was San José's National Museum building before it became a museum?",
          },
          options: [
            { zh: "軍營(廢軍後改建)", en: "An army barracks, converted after the military was abolished" },
            { zh: "總統府", en: "The presidential palace" },
            { zh: "咖啡交易所", en: "A coffee exchange" },
            { zh: "火車站", en: "A railway station" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "貝亞維斯塔軍營在 1948 年廢除軍隊後改為國家博物館,牆上還留有內戰彈痕,是「以博物館取代軍隊」的具體象徵。",
            en: "The Bellavista Barracks became the National Museum after the army's abolition in 1948 — bullet marks from the civil war still scar its walls, a symbol of trading soldiers for museums.",
          },
        },
      },
      {
        name: { zh: "利貝里亞", en: "Liberia" },
        blurb: {
          zh: "西北部瓜納卡斯特省首府,白色土屋讓它有「白城」之稱。",
          en: "Capital of northwestern Guanacaste province, nicknamed the 'White City' for its whitewashed adobe houses.",
        },
        trivia: {
          question: {
            zh: "利貝里亞是前往哥斯大黎加哪個度假區域的門戶?",
            en: "Liberia is the gateway to which of Costa Rica's resort regions?",
          },
          options: [
            { zh: "瓜納卡斯特的太平洋海灘", en: "Guanacaste's Pacific beaches" },
            { zh: "加勒比海岸的雨林", en: "The Caribbean rainforest coast" },
            { zh: "中央谷地咖啡莊園", en: "The Central Valley coffee estates" },
            { zh: "南部的奧薩半島", en: "The southern Osa Peninsula" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "利貝里亞有全國第二座國際機場,遊客由此直奔塔瑪琳多等瓜納卡斯特海灘,省去繞道聖荷西的長途車程。",
            en: "Liberia hosts the country's second international airport, letting visitors head straight to Tamarindo and other Guanacaste beaches without detouring through San José.",
          },
        },
      },
      {
        name: { zh: "利蒙港", en: "Puerto Limón" },
        blurb: {
          zh: "加勒比海岸最大城市,非裔加勒比文化與香蕉出口的重鎮。",
          en: "The largest city on the Caribbean coast, a hub of Afro-Caribbean culture and banana exports.",
        },
        trivia: {
          question: {
            zh: "哥倫布在第幾次航行時抵達今日利蒙港外海?",
            en: "On which of his voyages did Columbus anchor off today's Puerto Limón?",
          },
          options: [
            { zh: "第四次航行", en: "His fourth voyage" },
            { zh: "第一次航行", en: "His first voyage" },
            { zh: "第二次航行", en: "His second voyage" },
            { zh: "第三次航行", en: "His third voyage" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1502 年哥倫布最後一次航行時在利蒙外海的烏維塔小島停泊,「哥斯大黎加(富饒海岸)」之名相傳與此行見聞有關。",
            en: "On his final voyage in 1502, Columbus anchored at Isla Uvita off Limón; the name 'Costa Rica' — rich coast — is traditionally linked to those expeditions.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "哥斯大黎加的電力約九成以上來自水力、地熱與風力等再生能源。",
        en: "More than 90% of Costa Rica's electricity comes from renewables like hydro, geothermal, and wind.",
      },
      {
        zh: "全國約四分之一的土地劃為國家公園或保護區,樹懶與鳳尾綠咬鵑是明星物種。",
        en: "About a quarter of the country is national park or reserve — sloths and resplendent quetzals are the star residents.",
      },
    ],
    climate: {
      zh: "熱帶氣候:太平洋側 12–4 月為乾季、5–11 月綠季多午後雨;加勒比海側全年較濕。中央谷地終年溫和舒適。",
      en: "Tropical: the Pacific side is dry December–April with a 'green season' of afternoon rains May–November, while the Caribbean side stays wetter year-round. The Central Valley is mild all year.",
    },
    travelTips: [
      {
        zh: "綠季(雨季)遊客較少、景色最綠,只要把行程排在早上就能避開午後雷雨。",
        en: "In the green season crowds thin and landscapes glow — schedule activities in the morning to dodge afternoon storms.",
      },
      {
        zh: "山區與雨林道路多碎石,自駕建議租四輪驅動車。",
        en: "Mountain and rainforest roads are often unpaved — rent a 4x4 if self-driving.",
      },
      {
        zh: "國家公園熱門步道(如曼努埃爾·安東尼奧)常需事先線上購票。",
        en: "Popular national parks like Manuel Antonio often require advance online tickets.",
      },
      {
        zh: "美元廣為接受,但找零多為當地貨幣科朗。",
        en: "US dollars are widely accepted, though change usually comes in colones.",
      },
    ],
  },
  {
    id: "DOM",
    name: { zh: "多明尼加", en: "Dominican Republic" },
    capital: { zh: "聖多明哥", en: "Santo Domingo" },
    flag: "🇩🇴",
    region: "americas",
    center: { lat: 18.9, lng: -70.5 },
    intro: {
      zh: "與海地共享伊斯帕紐拉島的加勒比海國家,擁有加勒比地區最高峰杜阿爾特峰。聖多明哥是美洲最早的歐洲殖民城市之一,蓬塔卡納的白沙海灘與全包式度假村吸引全球遊客,棒球是全民運動。",
      en: "A Caribbean nation sharing Hispaniola with Haiti, home to Pico Duarte — the region's highest peak. Santo Domingo is among the earliest European cities in the Americas, Punta Cana's white sands and all-inclusive resorts draw visitors worldwide, and baseball is the national obsession.",
    },
    history: {
      zh: "1492 年哥倫布首航抵達伊斯帕紐拉島,聖多明哥成為西班牙在新大陸的第一個殖民重心,原住民泰諾人因疾病與奴役銳減。1822 年起被海地統治 22 年,1844 年宣布獨立建國。20 世紀楚希佑獨裁統治三十餘年,1961 年遇刺後逐步民主化,如今是加勒比地區最大的經濟體之一,以觀光、僑匯與農產出口為支柱。",
      en: "Columbus reached Hispaniola on his first voyage in 1492, and Santo Domingo became Spain's first hub in the New World as the Taíno population collapsed under disease and forced labor. Ruled by Haiti for 22 years from 1822, it declared independence in 1844. The Trujillo dictatorship dominated the 20th century until his 1961 assassination opened the way to democracy; today it is one of the Caribbean's largest economies, built on tourism, remittances, and farm exports.",
    },
    cities: [
      {
        name: { zh: "聖多明哥", en: "Santo Domingo" },
        blurb: {
          zh: "美洲殖民史的起點,殖民城區已列入世界遺產。",
          en: "Where the colonial Americas began — its Zona Colonial is a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "聖多明哥的殖民城區擁有美洲的哪一項「第一」?",
            en: "Santo Domingo's colonial quarter holds which 'first' in the Americas?",
          },
          options: [
            { zh: "美洲第一座大教堂", en: "The first cathedral of the Americas" },
            { zh: "美洲第一座機場", en: "The first airport of the Americas" },
            { zh: "美洲第一條鐵路", en: "The first railway of the Americas" },
            { zh: "美洲第一座燈塔", en: "The first lighthouse of the Americas" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "聖瑪利亞大教堂於 16 世紀初建成,是美洲第一座大教堂;聖多明哥也擁有美洲最早的大學與醫院等多項紀錄。",
            en: "The Cathedral of Santa María la Menor, completed in the early 16th century, was the Americas' first cathedral — the city also claims the hemisphere's earliest university and hospital.",
          },
        },
      },
      {
        name: { zh: "聖地牙哥", en: "Santiago de los Caballeros" },
        blurb: {
          zh: "希堡谷地的第二大城,菸草與雪茄產業的心臟。",
          en: "The second city, set in the fertile Cibao Valley — the heart of tobacco and cigar country.",
        },
        trivia: {
          question: {
            zh: "聖地牙哥所在的希堡谷地以生產什麼聞名於世?",
            en: "The Cibao Valley around Santiago is world-famous for producing what?",
          },
          options: [
            { zh: "菸草與手工雪茄", en: "Tobacco and hand-rolled cigars" },
            { zh: "葡萄酒", en: "Wine" },
            { zh: "橄欖油", en: "Olive oil" },
            { zh: "楓糖漿", en: "Maple syrup" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "多明尼加是全球主要的高級手工雪茄出口國之一,希堡谷地肥沃的土壤與氣候是菸草種植的理想環境。",
            en: "The Dominican Republic is one of the world's top exporters of premium hand-rolled cigars, thanks to the Cibao Valley's fertile soils and climate.",
          },
        },
      },
      {
        name: { zh: "普拉塔港", en: "Puerto Plata" },
        blurb: {
          zh: "北岸「琥珀海岸」的度假城市,有纜車直上山頂俯瞰大西洋。",
          en: "A resort city on the northern 'Amber Coast', with a cable car climbing to a mountaintop Atlantic view.",
        },
        trivia: {
          question: {
            zh: "普拉塔港一帶的海岸被稱為「琥珀海岸」,因為當地出產什麼?",
            en: "The coast around Puerto Plata is called the 'Amber Coast' because the area yields what?",
          },
          options: [
            { zh: "品質極高的琥珀化石", en: "Exceptionally fine fossil amber" },
            { zh: "金黃色的珍珠", en: "Golden pearls" },
            { zh: "黃色大理石", en: "Yellow marble" },
            { zh: "金礦砂", en: "Gold-bearing sands" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "多明尼加琥珀以透明度高、常含昆蟲內含物聞名,普拉塔港的琥珀博物館展出許多珍品,《侏羅紀公園》的靈感亦與琥珀中的昆蟲有關。",
            en: "Dominican amber is prized for its clarity and insect inclusions — Puerto Plata's Amber Museum shows prime specimens, and amber-trapped insects famously inspired 'Jurassic Park'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "多明尼加是美國職棒大聯盟外籍球員的最大來源國,棒球名將輩出。",
        en: "The Dominican Republic supplies more foreign-born MLB players than any other country.",
      },
      {
        zh: "梅倫格與巴恰塔兩種舞曲都誕生於多明尼加,皆已列入聯合國非物質文化遺產。",
        en: "Both merengue and bachata music were born here — each inscribed on UNESCO's Intangible Cultural Heritage list.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,終年溫暖,沿海約 25–31°C。6–11 月為颶風季,12–4 月較乾爽,是旅遊旺季;山區明顯涼爽。",
      en: "Tropical maritime and warm year-round, with coastal temperatures around 25–31°C. June–November is hurricane season; December–April is drier and peak season, and the mountains are noticeably cooler.",
    },
    travelTips: [
      {
        zh: "全包式度假村外的消費常可用美元,但市區小店以披索計價較划算。",
        en: "US dollars work at resorts, but pesos get better prices in town shops.",
      },
      {
        zh: "1–3 月可在北部薩馬納灣賞座頭鯨,是全球知名的賞鯨地點。",
        en: "January–March brings humpback whales to Samaná Bay — one of the world's great whale-watching spots.",
      },
      {
        zh: "颶風季出遊建議投保旅遊險並關注氣象預報。",
        en: "If traveling in hurricane season, buy travel insurance and watch the forecasts.",
      },
    ],
  },
  {
    id: "HTI",
    name: { zh: "海地", en: "Haiti" },
    capital: { zh: "太子港", en: "Port-au-Prince" },
    flag: "🇭🇹",
    region: "americas",
    center: { lat: 19.0, lng: -72.7 },
    intro: {
      zh: "占據伊斯帕紐拉島西部的加勒比國家,1804 年成為世界上第一個由奴隸起義建立的黑人共和國。克里奧爾文化、鮮豔的藝術與音樂充滿生命力,北部的拉費里埃城堡是美洲最壯觀的堡壘之一。",
      en: "Occupying western Hispaniola, Haiti became the world's first Black republic in 1804, born of a successful slave revolution. Its Creole culture, vivid art, and music brim with life, and the Citadelle Laferrière in the north is among the Americas' most spectacular fortresses.",
    },
    history: {
      zh: "17 世紀末法國取得伊斯帕紐拉島西部,聖多明格殖民地靠奴隸種植園成為法國最富有的殖民地。1791 年爆發大規模奴隸起義,杜桑·盧維杜爾與德薩林先後領導,1804 年宣布獨立建國。其後法國索取鉅額「賠償金」拖累經濟百年,20 世紀歷經杜瓦利埃父子獨裁,2010 年大地震造成慘重傷亡,近年治安與政局仍動盪,但人民的文化韌性依舊。",
      en: "France gained western Hispaniola in the late 17th century, and slave plantations made Saint-Domingue its richest colony. A massive slave uprising erupted in 1791, led by Toussaint Louverture and then Dessalines, culminating in independence in 1804. France's crushing 'indemnity' burdened the economy for a century; the 20th century brought the Duvalier dictatorships, and the 2010 earthquake was catastrophic. Instability persists, yet Haiti's cultural resilience endures.",
    },
    cities: [
      {
        name: { zh: "太子港", en: "Port-au-Prince" },
        blurb: {
          zh: "依山面海的首都,街頭藝術與「嘟嘟車」彩繪巴士充滿色彩。",
          en: "The hillside capital by the bay, awash in street art and the painted 'tap-tap' buses.",
        },
        trivia: {
          question: {
            zh: "海地的兩種官方語言是什麼?",
            en: "What are Haiti's two official languages?",
          },
          options: [
            { zh: "法語與海地克里奧爾語", en: "French and Haitian Creole" },
            { zh: "法語與西班牙語", en: "French and Spanish" },
            { zh: "英語與法語", en: "English and French" },
            { zh: "西班牙語與克里奧爾語", en: "Spanish and Creole" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "海地克里奧爾語由法語與西非語言等融合而成,是絕大多數海地人的母語,1987 年憲法將它與法語並列官方語言。",
            en: "Haitian Creole, blending French with West African and other influences, is most Haitians' mother tongue; the 1987 constitution made it co-official with French.",
          },
        },
      },
      {
        name: { zh: "海地角", en: "Cap-Haïtien" },
        blurb: {
          zh: "北部歷史名城,殖民時代曾是繁華的「安地列斯巴黎」。",
          en: "The historic northern city, once so grand it was called the 'Paris of the Antilles'.",
        },
        trivia: {
          question: {
            zh: "海地角附近山頂的拉費里埃城堡是為了防禦誰而建?",
            en: "The mountaintop Citadelle Laferrière near Cap-Haïtien was built to defend against whom?",
          },
          options: [
            { zh: "可能捲土重來的法國軍隊", en: "A feared return of French forces" },
            { zh: "加勒比海盜", en: "Caribbean pirates" },
            { zh: "西班牙殖民軍", en: "Spanish colonial troops" },
            { zh: "英國皇家海軍", en: "The British Royal Navy" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "獨立後亨利·克里斯多夫下令建造這座巨型山頂要塞,以防法國重返奪回殖民地,它是美洲最大的堡壘之一,已列入世界遺產。",
            en: "After independence, Henri Christophe built the massive fortress to repel any French attempt to retake the colony — one of the largest fortresses in the Americas and a World Heritage site.",
          },
        },
      },
      {
        name: { zh: "雅克梅勒", en: "Jacmel" },
        blurb: {
          zh: "南岸的藝術之城,法式老宅與工藝作坊林立。",
          en: "The arts town on the south coast, lined with French-era townhouses and craft workshops.",
        },
        trivia: {
          question: {
            zh: "雅克梅勒的嘉年華以哪種手工藝聞名?",
            en: "Jacmel's carnival is famous for which craft?",
          },
          options: [
            { zh: "紙糊(papier-mâché)面具", en: "Papier-mâché masks" },
            { zh: "玻璃吹製", en: "Glassblowing" },
            { zh: "銀飾鍛造", en: "Silversmithing" },
            { zh: "陶瓷彩繪", en: "Painted ceramics" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "雅克梅勒的工匠以色彩繽紛的紙糊面具與動物頭飾聞名,每年嘉年華遊行是海地最具代表性的藝術盛事之一。",
            en: "Jacmel's artisans craft vividly colored papier-mâché masks and animal heads, and its carnival parade is one of Haiti's signature artistic events.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "海地是中華民國(台灣)在加勒比海地區的邦交國之一。",
        en: "Haiti is one of Taiwan's diplomatic allies in the Caribbean.",
      },
      {
        zh: "海地是史上唯一由奴隸起義成功建國的國家,獨立比拉丁美洲多數國家都早。",
        en: "Haiti is the only nation ever founded by a successful slave revolution — independent before most of Latin America.",
      },
    ],
    climate: {
      zh: "熱帶氣候,沿海終年炎熱,山區較涼。雨季大致為 4–6 月與 8–10 月,6–11 月颶風季偶有強烈風暴侵襲。",
      en: "Tropical: hot year-round on the coasts, cooler in the mountains. Rains fall mainly April–June and August–October, and hurricanes can strike during the June–November season.",
    },
    travelTips: [
      {
        zh: "海地局勢多變,出發前務必查閱本國政府最新旅遊警示與安全建議。",
        en: "Conditions in Haiti change quickly — check your government's latest travel advisories before planning a trip.",
      },
      {
        zh: "境內移動與住宿建議透過可靠的當地接待方安排,並保持行程彈性。",
        en: "Arrange transport and lodging through trusted local contacts, and keep plans flexible.",
      },
      {
        zh: "北部海地角與拉巴地一帶是目前較多旅客造訪的區域,部分郵輪航線在此停靠。",
        en: "The Cap-Haïtien and Labadee area in the north sees the most visitors today, including some cruise calls.",
      },
    ],
  },
  {
    id: "JAM",
    name: { zh: "牙買加", en: "Jamaica" },
    capital: { zh: "金斯頓", en: "Kingston" },
    flag: "🇯🇲",
    region: "americas",
    center: { lat: 18.1, lng: -77.3 },
    intro: {
      zh: "加勒比海第三大島,雷鬼音樂與巴布·馬利的故鄉,也是短跑之王波特的祖國。藍山咖啡享譽世界,北岸的瀑布與白沙灘、拉斯塔法里文化與「No Problem」的悠閒態度構成獨特魅力。",
      en: "The Caribbean's third-largest island — birthplace of reggae and Bob Marley, and homeland of sprint king Usain Bolt. Blue Mountain coffee is world-renowned, and north-coast waterfalls, white beaches, Rastafari culture, and a 'no problem' ease define its charm.",
    },
    history: {
      zh: "原住民泰諾人稱此島為「木與水之地」。1494 年哥倫布抵達後為西班牙屬地,1655 年被英國奪取,蔗糖種植園與奴隸貿易主宰了兩百年,海盜之城皇家港曾盛極一時,1692 年毀於地震。1834 年廢奴後社會逐步轉型,1962 年脫離英國獨立。此後音樂與運動成為最強的文化輸出,觀光、鋁土礦與僑匯是經濟支柱。",
      en: "The Taíno called the island a 'land of wood and water'. Spanish after Columbus's 1494 arrival, it fell to England in 1655; sugar plantations and the slave trade dominated for two centuries, while the pirate haven of Port Royal boomed until the 1692 earthquake destroyed it. Slavery ended in 1834, and independence from Britain came in 1962. Music and athletics became its greatest exports, with tourism, bauxite, and remittances anchoring the economy.",
    },
    cities: [
      {
        name: { zh: "金斯頓", en: "Kingston" },
        blurb: {
          zh: "背倚藍山的首都,雷鬼音樂的發源地與文化重鎮。",
          en: "The capital beneath the Blue Mountains — the birthplace and cultural home of reggae.",
        },
        trivia: {
          question: {
            zh: "哪一種音樂類型誕生於金斯頓,並已列入聯合國非物質文化遺產?",
            en: "Which music genre was born in Kingston and is now on UNESCO's Intangible Cultural Heritage list?",
          },
          options: [
            { zh: "雷鬼(Reggae)", en: "Reggae" },
            { zh: "騷莎(Salsa)", en: "Salsa" },
            { zh: "森巴(Samba)", en: "Samba" },
            { zh: "卡里普索(Calypso)", en: "Calypso" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "雷鬼於 1960 年代在金斯頓誕生,巴布·馬利將它推向全世界,2018 年列入聯合國非物質文化遺產,馬利故居現為博物館。",
            en: "Reggae emerged in 1960s Kingston and Bob Marley carried it worldwide; UNESCO inscribed it in 2018, and Marley's former home is now a museum.",
          },
        },
      },
      {
        name: { zh: "蒙特哥貝", en: "Montego Bay" },
        blurb: {
          zh: "北岸最大的度假城市,國際機場與度假村雲集。",
          en: "The north coast's biggest resort city, home to the main tourist airport and strings of resorts.",
        },
        trivia: {
          question: {
            zh: "蒙特哥貝的「醫生洞海灘」在 20 世紀初聲名大噪,因為當時人們相信那裡的海水有什麼特點?",
            en: "Doctor's Cave Beach in Montego Bay became famous in the early 20th century because its waters were believed to be what?",
          },
          options: [
            { zh: "具有療癒疾病的功效", en: "Curative and health-restoring" },
            { zh: "全球最溫暖", en: "The warmest in the world" },
            { zh: "含有天然氣泡", en: "Naturally carbonated" },
            { zh: "永遠不起浪", en: "Permanently waveless" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "20 世紀初英國醫師宣稱在此游泳治好了病痛,吸引歐美遊客慕名而來,奠定蒙特哥貝度假勝地的地位。",
            en: "In the early 1900s a British physician claimed the waters cured his ailments, drawing health-seeking visitors and launching Montego Bay's resort era.",
          },
        },
      },
      {
        name: { zh: "歐丘里歐斯", en: "Ocho Rios" },
        blurb: {
          zh: "北岸的瀑布與郵輪之城,昔日漁村變身度假熱點。",
          en: "The north coast's waterfall and cruise town — a fishing village turned resort hotspot.",
        },
        trivia: {
          question: {
            zh: "歐丘里歐斯著名的鄧斯河瀑布,最特別的玩法是什麼?",
            en: "What is the signature way to experience Dunn's River Falls near Ocho Rios?",
          },
          options: [
            { zh: "手牽手沿階梯狀瀑布向上攀登", en: "Climbing up the terraced falls hand-in-hand" },
            { zh: "乘熱氣球俯瞰", en: "Viewing it from a hot-air balloon" },
            { zh: "搭纜車橫越", en: "Crossing it by cable car" },
            { zh: "夜間雷射秀", en: "A nighttime laser show" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鄧斯河瀑布呈天然階梯狀直落入海,遊客在嚮導帶領下手牽手從底部攀登約 180 公尺的瀑布,是牙買加最經典的體驗。",
            en: "The falls cascade in natural terraces straight to the sea; guided visitors form human chains to climb roughly 180 meters of them — Jamaica's classic adventure.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "牙買加短跑名將波特保持男子 100 與 200 公尺世界紀錄,這座小島是短跑人才的搖籃。",
        en: "Usain Bolt still holds the men's 100m and 200m world records — this small island is a sprinting powerhouse.",
      },
      {
        zh: "藍山咖啡產量稀少、價格高昂,長期是日本市場最追捧的咖啡之一。",
        en: "Scarce and pricey, Blue Mountain coffee has long been especially prized in Japan.",
      },
    ],
    climate: {
      zh: "熱帶氣候,沿海終年約 26–32°C,藍山山區涼爽許多。5–6 月與 9–11 月雨較多,颶風季為 6–11 月,冬季乾爽是旺季。",
      en: "Tropical, with coasts around 26–32°C year-round and much cooler Blue Mountain heights. Rain peaks in May–June and September–November, hurricane season runs June–November, and the dry winter is peak season.",
    },
    travelTips: [
      {
        zh: "多數度假航班直飛蒙特哥貝而非首都金斯頓,訂票時留意機場代碼。",
        en: "Most resort flights land at Montego Bay, not Kingston — double-check the airport code when booking.",
      },
      {
        zh: "想看雷鬼與文化面貌就去金斯頓,純度假則選北岸,兩者車程約需半天。",
        en: "Head to Kingston for reggae and culture, the north coast for pure resort time — allow half a day to travel between them.",
      },
      {
        zh: "鄧斯河瀑布攀登請穿防滑溯溪鞋,並自備防水袋。",
        en: "Wear grippy water shoes for the Dunn's River climb and bring a dry bag.",
      },
    ],
  },
  {
    id: "TTO",
    name: { zh: "千里達及托巴哥", en: "Trinidad and Tobago" },
    capital: { zh: "西班牙港", en: "Port of Spain" },
    flag: "🇹🇹",
    region: "americas",
    center: { lat: 10.5, lng: -61.3 },
    intro: {
      zh: "位於加勒比海最南端、緊鄰委內瑞拉外海的雙島國。石油與天然氣使它成為加勒比工業化程度最高的經濟體之一,嘉年華會規模冠絕加勒比,鋼鼓、卡里普索與索卡音樂皆發源於此。",
      en: "A twin-island nation at the Caribbean's southern edge, just off Venezuela. Oil and gas make it one of the region's most industrialized economies, its Carnival is the Caribbean's grandest, and steelpan, calypso, and soca music were all born here.",
    },
    history: {
      zh: "1498 年哥倫布抵達千里達並命名。西班牙統治期間開放法國天主教移民入殖,1797 年被英國奪取。廢奴後引進大量印度契約勞工,形成非裔與印度裔各占約四成的多元社會。1962 年獨立,1976 年改制共和國。20 世紀初發現石油,加上天然氣與石化工業,成為加勒比少數以能源立國的國家。",
      en: "Columbus reached and named Trinidad in 1498. Under Spain the island welcomed French Catholic settlers before Britain seized it in 1797. After abolition, indentured laborers from India arrived en masse, creating a society roughly 40% Afro- and 40% Indo-Trinidadian. Independence came in 1962 and republic status in 1976. Oil discovered in the early 20th century, plus natural gas and petrochemicals, made it the Caribbean's energy state.",
    },
    cities: [
      {
        name: { zh: "西班牙港", en: "Port of Spain" },
        blurb: {
          zh: "首都與嘉年華之城,薩凡納大草原環繞著殖民豪宅。",
          en: "The capital and Carnival city, its grand Savannah ringed by colonial mansions.",
        },
        trivia: {
          question: {
            zh: "哪種樂器發明於千里達,常被稱為 20 世紀誕生的代表性原聲樂器?",
            en: "Which instrument was invented in Trinidad, often cited as the 20th century's signature new acoustic instrument?",
          },
          options: [
            { zh: "鋼鼓(steelpan)", en: "The steelpan" },
            { zh: "邦哥鼓", en: "The bongo drums" },
            { zh: "烏克麗麗", en: "The ukulele" },
            { zh: "馬林巴琴", en: "The marimba" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1930 年代西班牙港的居民把廢棄油桶敲打成可奏出音階的鋼鼓,如今是千里達的國家樂器,嘉年華上鋼鼓樂團競演是重頭戲。",
            en: "In the 1930s Port of Spain residents hammered discarded oil drums into tuned instruments; the steelpan is now the national instrument, with band battles a Carnival highlight.",
          },
        },
      },
      {
        name: { zh: "聖費爾南多", en: "San Fernando" },
        blurb: {
          zh: "南部工業大城,鄰近石化廠區與著名的天然瀝青湖。",
          en: "The southern industrial city, near the petrochemical belt and the famous natural asphalt lake.",
        },
        trivia: {
          question: {
            zh: "聖費爾南多附近拉布雷亞的「瀝青湖」以什麼聞名?",
            en: "The Pitch Lake at La Brea, near San Fernando, is famous as what?",
          },
          options: [
            { zh: "世界最大的天然瀝青湖", en: "The world's largest natural asphalt lake" },
            { zh: "世界最深的火山湖", en: "The world's deepest crater lake" },
            { zh: "世界最鹹的湖泊", en: "The world's saltiest lake" },
            { zh: "世界最大的地熱溫泉", en: "The world's largest geothermal spring" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瀝青湖面積約 40 公頃,天然瀝青源源不絕湧出,百年來外銷鋪設世界各地道路,遊客還能在湖面上行走。",
            en: "Covering about 40 hectares, the lake continuously seeps natural asphalt that has paved roads worldwide for over a century — and visitors can walk on its surface.",
          },
        },
      },
      {
        name: { zh: "斯卡波羅", en: "Scarborough" },
        blurb: {
          zh: "托巴哥島的首府,珊瑚礁海灣與雨林近在咫尺。",
          en: "Tobago's capital town, with reef-lined bays and rainforest close at hand.",
        },
        trivia: {
          question: {
            zh: "托巴哥的主嶺森林保護區擁有什麼特殊歷史地位?",
            en: "What historic distinction does Tobago's Main Ridge Forest Reserve hold?",
          },
          options: [
            { zh: "西半球最早依法設立的森林保護區之一", en: "One of the Western Hemisphere's oldest legally protected forest reserves" },
            { zh: "世界第一座國家公園", en: "The world's first national park" },
            { zh: "加勒比唯一的沙漠保護區", en: "The Caribbean's only desert reserve" },
            { zh: "最早的私人野生動物園", en: "The earliest private safari park" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "主嶺森林保護區於 1776 年依法劃設以保護水源,常被稱為西半球最古老的法定森林保護區,至今仍是賞鳥勝地。",
            en: "Protected by law in 1776 to safeguard the island's water supply, Main Ridge is often called the Western Hemisphere's oldest legally protected forest — still a birdwatching haven today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "千里達嘉年華在大齋期前登場,索卡音樂、華麗服裝與鋼鼓大賽讓全國陷入狂歡。",
        en: "Trinidad Carnival erupts just before Lent — soca, dazzling costumes, and steelpan contests sweep the whole country.",
      },
      {
        zh: "融合印度與非洲風味的國民小吃「double」是以鷹嘴豆咖哩夾軟餅的街頭美食。",
        en: "The beloved street snack 'doubles' — curried chickpeas folded in soft fried bread — fuses the islands' Indian and African heritage.",
      },
    ],
    climate: {
      zh: "熱帶氣候,終年約 25–32°C。1–5 月為乾季,6–12 月為雨季;地處颶風帶南緣,受颶風直接侵襲的機率比多數加勒比島嶼低。",
      en: "Tropical, around 25–32°C year-round, with a dry season January–May and rains June–December. Lying at the hurricane belt's southern edge, it is hit less often than most Caribbean islands.",
    },
    travelTips: [
      {
        zh: "想參加嘉年華要提早數月訂房與購買遊行裝束,價格會隨日期逼近飆漲。",
        en: "For Carnival, book rooms and costume packages months ahead — prices soar as the dates approach.",
      },
      {
        zh: "千里達看文化與生態(觀賞紅鹮歸巢),托巴哥看海灘與潛水,島間有渡輪與短程航班。",
        en: "Do culture and ecology (scarlet ibis roosts) on Trinidad, beaches and diving on Tobago — ferries and short flights link the islands.",
      },
      {
        zh: "西班牙港市區夜間建議搭計程車,避免步行偏僻街區。",
        en: "In Port of Spain, take taxis at night and avoid walking quiet districts.",
      },
    ],
  },
  {
    id: "BHS",
    name: { zh: "巴哈馬", en: "The Bahamas" },
    capital: { zh: "拿索", en: "Nassau" },
    flag: "🇧🇸",
    region: "americas",
    center: { lat: 24.3, lng: -76.0 },
    intro: {
      zh: "由約 700 座島嶼與眾多珊瑚礁組成的群島國家,散布在佛羅里達外海清澈見底的淺海上。粉紅沙灘、會游泳的豬與世界頂級的淺海浮潛聞名於世,觀光與金融服務是經濟兩大支柱。",
      en: "An archipelago of some 700 islands and countless cays scattered across gin-clear shallows off Florida. Famous for pink-sand beaches, swimming pigs, and superb snorkeling, it runs on twin engines of tourism and financial services.",
    },
    history: {
      zh: "1492 年哥倫布首次踏上新大陸的地點就在巴哈馬的聖薩爾瓦多島。原住民盧卡約人其後被擄掠殆盡,17 世紀英國移民到來,18 世紀初拿索一度成為黑鬍子等海盜的巢穴,直到英國重建秩序。1973 年脫離英國獨立,留在大英國協。憑藉鄰近北美的地利,發展成加勒比最富裕的觀光與離岸金融中心之一。",
      en: "Columbus made his first New World landfall at San Salvador in the Bahamas in 1492; the native Lucayans were soon carried off. English settlers arrived in the 17th century, and in the early 18th Nassau became a pirate haven for the likes of Blackbeard until Britain restored order. Independent within the Commonwealth since 1973, it leveraged its location near North America to become one of the Caribbean's wealthiest tourism and offshore-finance hubs.",
    },
    cities: [
      {
        name: { zh: "拿索", en: "Nassau" },
        blurb: {
          zh: "新普羅維登斯島上的首都,粉彩殖民建築與郵輪碼頭相映。",
          en: "The capital on New Providence, where pastel colonial buildings meet the cruise-ship docks.",
        },
        trivia: {
          question: {
            zh: "18 世紀初的拿索因為聚集了哪一群人而惡名昭彰?",
            en: "In the early 18th century, Nassau was notorious as a base for which group?",
          },
          options: [
            { zh: "黑鬍子等加勒比海盜", en: "Caribbean pirates like Blackbeard" },
            { zh: "西班牙尋金探險隊", en: "Spanish gold-hunting expeditions" },
            { zh: "法國皮草商人", en: "French fur traders" },
            { zh: "捕鯨船隊", en: "Whaling fleets" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1706 至 1718 年間拿索幾乎是海盜自治的「海盜共和國」,黑鬍子等人以此為基地,直到總督羅傑斯前來掃蕩。",
            en: "From 1706 to 1718 Nassau functioned as a near-lawless 'pirate republic' for Blackbeard and company, until Governor Woodes Rogers stamped it out.",
          },
        },
      },
      {
        name: { zh: "自由港", en: "Freeport" },
        blurb: {
          zh: "大巴哈馬島上的第二大城,規劃而生的免稅工商業城市。",
          en: "The second city, on Grand Bahama — a planned duty-free industrial and resort town.",
        },
        trivia: {
          question: {
            zh: "自由港這座城市當初是為了什麼目的而建立的?",
            en: "Freeport was founded for what purpose?",
          },
          options: [
            { zh: "作為免稅自由貿易區吸引投資", en: "As a duty-free free-trade zone to attract investment" },
            { zh: "安置火山難民", en: "To resettle volcano refugees" },
            { zh: "作為軍事基地", en: "As a military base" },
            { zh: "作為漁業加工中心", en: "As a fish-processing center" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1955 年《霍克斯比爾溪協定》授權開發商在大巴哈馬島建立免稅特區,自由港因此從荒地發展為全國第二大城。",
            en: "The 1955 Hawksbill Creek Agreement let developers build a tax-free zone on Grand Bahama, growing Freeport from scrubland into the nation's second city.",
          },
        },
      },
      {
        name: { zh: "喬治城(埃克蘇馬)", en: "George Town (Exuma)" },
        blurb: {
          zh: "埃克蘇馬群島的中心小鎮,通往夢幻淺灘與離島的跳板。",
          en: "The hub town of the Exumas — the springboard to dreamlike sandbars and outer cays.",
        },
        trivia: {
          question: {
            zh: "埃克蘇馬群島最著名的動物景點是什麼?",
            en: "What is the Exumas' most famous animal attraction?",
          },
          options: [
            { zh: "會游泳的豬", en: "Swimming pigs" },
            { zh: "粉紅海豚", en: "Pink dolphins" },
            { zh: "巨型陸龜", en: "Giant tortoises" },
            { zh: "企鵝群", en: "Penguin colonies" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "大梅傑礁(俗稱豬灘)上住著一群會游到船邊討食的豬,牠們的來歷眾說紛紜,如今是巴哈馬最紅的觀光明星。",
            en: "Big Major Cay — 'Pig Beach' — hosts pigs that paddle out to greet boats for snacks; their origin is debated, but they're now the Bahamas' biggest celebrities.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "哈伯島的粉紅沙灘因含有紅色有孔蟲殼碎屑而呈現淡粉色。",
        en: "Harbour Island's pink sand gets its blush from crushed shells of red foraminifera.",
      },
      {
        zh: "巴哈馬水域有全球知名的迪恩斯藍洞等深邃海洋藍洞,是自由潛水勝地。",
        en: "Bahamian waters hold famed marine blue holes like Dean's Blue Hole, a mecca for freedivers.",
      },
    ],
    climate: {
      zh: "副熱帶氣候,冬季溫和(約 20–26°C)、夏季濕熱。6–11 月為颶風季,12–4 月乾爽宜人,是北美遊客的避寒旺季。",
      en: "Subtropical, with mild winters around 20–26°C and hot, humid summers. June–November is hurricane season; the dry, pleasant December–April stretch is peak season for sun-seeking North Americans.",
    },
    travelTips: [
      {
        zh: "巴哈馬元與美元 1:1 等值流通,美元可直接使用。",
        en: "The Bahamian dollar is pegged 1:1 to the US dollar, and USD is accepted everywhere.",
      },
      {
        zh: "跳島可搭國內線小飛機或郵政船,離島住宿選擇少,旺季務必早訂。",
        en: "Island-hop by small domestic planes or mailboats — outer-island lodging is limited, so book early in season.",
      },
      {
        zh: "豬灘等離島行程多從喬治城或拿索出發,全日船程曝曬強,防曬要做足。",
        en: "Pig Beach tours run from George Town or Nassau — full days on the water mean serious sun protection.",
      },
    ],
  },
  {
    id: "ECU",
    name: { zh: "厄瓜多", en: "Ecuador" },
    capital: { zh: "基多", en: "Quito" },
    flag: "🇪🇨",
    region: "americas",
    center: { lat: -1.8, lng: -78.2 },
    intro: {
      zh: "以赤道命名的安地斯國家,在一天之內可從雪峰火山下到亞馬遜雨林再抵太平洋岸,外海的加拉巴哥群島啟發了達爾文的演化論。香蕉出口居世界前列,巴拿馬帽其實也是厄瓜多的工藝。",
      en: "An Andean nation named for the equator, where one day's travel spans snow-capped volcanoes, Amazon rainforest, and the Pacific coast. The Galápagos Islands offshore inspired Darwin's theory of evolution, it's a top banana exporter — and the Panama hat is actually Ecuadorian.",
    },
    history: {
      zh: "北部高原曾是印加帝國的重要領土,基多是帝國北都。1530 年代西班牙征服後隸屬基多皇家審問院,1822 年在蘇克雷指揮下獲得解放,先加入大哥倫比亞,1830 年獨立建國。20 世紀先後倚重可可、香蕉與石油出口,2000 年金融危機後全面改用美元。今日以生態旅遊、蝦與花卉出口聞名,政局時有起伏。",
      en: "The northern highlands were a key Inca realm, with Quito as the empire's northern capital. Conquered by Spain in the 1530s and governed as the Audiencia of Quito, it was liberated under Sucre in 1822, joined Gran Colombia, and became independent in 1830. Cacao, bananas, then oil powered the 20th century; after a 2000 financial crisis it adopted the US dollar. Today it's known for ecotourism, shrimp, and flower exports amid periodic political turbulence.",
    },
    cities: [
      {
        name: { zh: "基多", en: "Quito" },
        blurb: {
          zh: "海拔 2,850 公尺的首都,擁有拉美保存最完整的殖民老城之一。",
          en: "A capital at 2,850 meters, with one of Latin America's best-preserved colonial old towns.",
        },
        trivia: {
          question: {
            zh: "1978 年基多舊城獲得了什麼國際地位?",
            en: "What international status did Quito's old town receive in 1978?",
          },
          options: [
            { zh: "名列全球首批世界文化遺產", en: "It was among the first World Heritage sites ever listed" },
            { zh: "被定為南美共同市場總部", en: "It became the Mercosur headquarters" },
            { zh: "獲選奧運主辦城市", en: "It was chosen to host the Olympics" },
            { zh: "成為聯合國總部所在地", en: "It became a UN headquarters city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1978 年聯合國教科文組織公布第一批世界遺產名單,基多舊城與加拉巴哥群島雙雙入列,讓厄瓜多一次擁有兩項「元老級」世界遺產。",
            en: "When UNESCO announced its first-ever World Heritage list in 1978, both Quito's old town and the Galápagos Islands were on it — two founding sites for one country.",
          },
        },
      },
      {
        name: { zh: "瓜亞基爾", en: "Guayaquil" },
        blurb: {
          zh: "瓜亞斯河畔的最大城市與主要港口,經濟的火車頭。",
          en: "The largest city and main port, on the Guayas River — the country's economic engine.",
        },
        trivia: {
          question: {
            zh: "瓜亞基爾在厄瓜多扮演什麼角色?",
            en: "What role does Guayaquil play in Ecuador?",
          },
          options: [
            { zh: "最大城市與最主要的出口港", en: "The largest city and principal export port" },
            { zh: "法定首都", en: "The constitutional capital" },
            { zh: "最高海拔的大城", en: "The highest-altitude major city" },
            { zh: "亞馬遜雨林的門戶", en: "The gateway to the Amazon" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瓜亞基爾人口與基多不相上下甚至更多,香蕉、蝦等大宗出口多由此裝船,河濱步道馬雷貢 2000 是城市地標。",
            en: "Guayaquil rivals or exceeds Quito in population, ships out the banana and shrimp exports, and its Malecón 2000 riverfront is the city's signature promenade.",
          },
        },
      },
      {
        name: { zh: "昆卡", en: "Cuenca" },
        blurb: {
          zh: "南部高原的世界遺產古城,以工藝與悠緩生活步調著稱。",
          en: "A World Heritage city in the southern highlands, known for crafts and an unhurried pace.",
        },
        trivia: {
          question: {
            zh: "俗稱「巴拿馬帽」的手工草帽,真正的原產地是哪裡?",
            en: "The so-called 'Panama hat' actually originates from where?",
          },
          options: [
            { zh: "厄瓜多", en: "Ecuador" },
            { zh: "巴拿馬", en: "Panama" },
            { zh: "古巴", en: "Cuba" },
            { zh: "墨西哥", en: "Mexico" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這種以托奎拉草編織的帽子產於厄瓜多的昆卡與蒙特克里斯蒂,因經巴拿馬轉運、又在巴拿馬運河工程期間風行而得名。",
            en: "Woven from toquilla straw in Cuenca and Montecristi, the hats picked up the misnomer because they were shipped via Panama and popularized during the canal's construction.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "欽博拉索火山的峰頂因地球赤道隆起,是距離地心最遠的一點,比聖母峰更「凸出」地球。",
        en: "Thanks to Earth's equatorial bulge, Chimborazo's summit is the point farthest from the planet's center — sticking out farther than Everest.",
      },
      {
        zh: "加拉巴哥群島的物種觀察啟發了達爾文,群島至今仍有巨龜、海鬣蜥等特有生物。",
        en: "Darwin's observations in the Galápagos seeded his theory of evolution; giant tortoises and marine iguanas still roam the islands.",
      },
    ],
    climate: {
      zh: "氣候隨地形劇烈變化:安地斯高原終年如春,沿海濕熱,亞馬遜區多雨。加拉巴哥 1–5 月溫暖多陣雨、6–12 月涼爽有霧。",
      en: "Climate swings with terrain: spring-like Andean highlands, hot humid coast, rainy Amazon. In the Galápagos, January–May is warm with showers, June–December cool and misty.",
    },
    travelTips: [
      {
        zh: "基多海拔近三千公尺,抵達後先放慢步調一兩天以適應高度。",
        en: "Quito sits near 3,000 meters — take it easy for a day or two to acclimatize.",
      },
      {
        zh: "厄瓜多使用美元,偏遠地區備妥小額紙鈔與零錢。",
        en: "Ecuador uses the US dollar; carry small bills and coins outside the cities.",
      },
      {
        zh: "加拉巴哥需另購機票並繳交國家公園入園費,郵輪與陸基行程建議提早數月預訂。",
        en: "The Galápagos requires a separate flight and a national-park fee — book cruises or land tours months ahead.",
      },
    ],
  },
  {
    id: "VEN",
    name: { zh: "委內瑞拉", en: "Venezuela" },
    capital: { zh: "卡拉卡斯", en: "Caracas" },
    flag: "🇻🇪",
    region: "americas",
    center: { lat: 6.4, lng: -66.6 },
    intro: {
      zh: "南美洲北岸的加勒比國家,擁有世界落差最大的安赫爾瀑布與全球數一數二的石油蘊藏。從安地斯雪峰、平頂山「特普伊」到加勒比海島,自然景觀壯闊,是解放者玻利瓦的祖國。",
      en: "A Caribbean-facing nation on South America's north coast, home to Angel Falls — the world's tallest waterfall — and some of the planet's largest oil reserves. From Andean peaks to tabletop 'tepui' mountains and Caribbean isles, its landscapes are epic; it is the homeland of Simón Bolívar.",
    },
    history: {
      zh: "1498 年哥倫布第三次航行抵達此地,探險家見原住民的水上高腳屋,將其命名為「小威尼斯」(Venezuela)。1811 年率先宣布脫離西班牙獨立,玻利瓦領導的解放戰爭影響半個南美。20 世紀石油讓它一度成為南美最富裕國家,1999 年查維茲開啟左翼革命,其後經濟嚴重崩壞,引發數百萬人外移,政治僵局延續至今。",
      en: "Columbus reached these shores on his third voyage in 1498; explorers, seeing stilt houses over the water, called the land 'little Venice' — Venezuela. It declared independence from Spain first, in 1811, and Bolívar's liberation wars reshaped half of South America. Oil made it South America's richest country for a time; Hugo Chávez launched a leftist revolution in 1999, followed by economic collapse, the emigration of millions, and a political standoff that continues.",
    },
    cities: [
      {
        name: { zh: "卡拉卡斯", en: "Caracas" },
        blurb: {
          zh: "阿維拉山腳下的首都,南美獨立運動的搖籃。",
          en: "The capital beneath Mount Ávila — cradle of South American independence.",
        },
        trivia: {
          question: {
            zh: "哪位被尊稱為「解放者」的南美獨立英雄出生於卡拉卡斯?",
            en: "Which South American independence hero, honored as 'The Liberator', was born in Caracas?",
          },
          options: [
            { zh: "西蒙·玻利瓦", en: "Simón Bolívar" },
            { zh: "聖馬丁", en: "José de San Martín" },
            { zh: "蘇克雷", en: "Antonio José de Sucre" },
            { zh: "奧希金斯", en: "Bernardo O'Higgins" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "玻利瓦 1783 年生於卡拉卡斯,領導了委內瑞拉、哥倫比亞、厄瓜多、秘魯與玻利維亞的獨立,玻利維亞更以他為國名。",
            en: "Born in Caracas in 1783, Bolívar led the liberation of Venezuela, Colombia, Ecuador, Peru, and Bolivia — the last named in his honor.",
          },
        },
      },
      {
        name: { zh: "馬拉開波", en: "Maracaibo" },
        blurb: {
          zh: "西部石油大城,坐落在南美最大湖泊之一的馬拉開波湖畔。",
          en: "The western oil city on Lake Maracaibo, one of South America's largest lakes.",
        },
        trivia: {
          question: {
            zh: "馬拉開波湖與卡塔通博河口以什麼罕見的自然現象聞名?",
            en: "Lake Maracaibo and the Catatumbo river mouth are famous for what rare natural phenomenon?",
          },
          options: [
            { zh: "一年近半數夜晚出現的持續閃電", en: "Persistent lightning storms on nearly half the nights of the year" },
            { zh: "會發光的紅色潮汐", en: "Glowing red tides" },
            { zh: "每日兩次的巨型海嘯", en: "Twice-daily giant tsunamis" },
            { zh: "常年不散的極光", en: "Permanent auroras" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「卡塔通博閃電」由當地特殊的地形與濕熱氣流造成,湖口夜空常整夜電光閃爍,被認為是全球閃電最密集的地方之一。",
            en: "The 'Catatumbo lightning', driven by unique topography and humid air masses, lights the night sky for hours — the area records some of the highest lightning density on Earth.",
          },
        },
      },
      {
        name: { zh: "梅里達", en: "Mérida" },
        blurb: {
          zh: "安地斯山間的大學城,戶外運動與纜車之城。",
          en: "A university town in the Andes, beloved for outdoor sports and its famous cable car.",
        },
        trivia: {
          question: {
            zh: "梅里達的穆庫姆巴里纜車系統以什麼紀錄著稱?",
            en: "Mérida's Mukumbarí cable car system is noted for holding what record?",
          },
          options: [
            { zh: "世界最高的客運纜車系統之一", en: "Among the highest passenger cable cars in the world" },
            { zh: "世界最快的纜車", en: "The fastest cable car in the world" },
            { zh: "最早的蒸汽動力纜車", en: "The first steam-powered cable car" },
            { zh: "唯一水下纜車", en: "The only underwater cable car" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "纜車自梅里達市區攀升至海拔約 4,765 公尺的鏡峰,總長約 12.5 公里,以「最高」與超長路線聞名於世。",
            en: "The line climbs from Mérida to Pico Espejo at about 4,765 meters over roughly 12.5 km — renowned as one of the world's highest and longest cable-car routes.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "安赫爾瀑布落差約 979 公尺,水流墜落途中甚至會化成水霧,名稱來自 1930 年代迫降於此的飛行員安赫爾。",
        en: "Angel Falls plunges about 979 meters — so far the water turns to mist — and is named for aviator Jimmie Angel, who crash-landed atop the tepui in the 1930s.",
      },
      {
        zh: "委內瑞拉是選美大國,奪得多座環球小姐與世界小姐后冠。",
        en: "Venezuela is a beauty-pageant powerhouse, with multiple Miss Universe and Miss World crowns.",
      },
    ],
    climate: {
      zh: "熱帶氣候:加勒比沿岸與平原炎熱,安地斯山區隨海拔轉涼。大致 5–11 月為雨季、12–4 月乾季,南部雨林終年濕熱。",
      en: "Tropical: hot along the Caribbean coast and plains, cooling with altitude in the Andes. Rains fall roughly May–November with a dry season December–April; the southern rainforest stays humid year-round.",
    },
    travelTips: [
      {
        zh: "委內瑞拉情勢複雜多變,出發前務必查閱本國政府最新旅遊警示,並評估自身風險承受度。",
        en: "Conditions in Venezuela are complex and fluid — check your government's latest travel advisories and weigh the risks before going.",
      },
      {
        zh: "如前往安赫爾瀑布,行程須經卡奈馬國家公園,由當地旅行社包辦小飛機與獨木舟接駁。",
        en: "Angel Falls trips go through Canaima National Park, with local operators arranging the light aircraft and dugout-canoe legs.",
      },
      {
        zh: "現金與物資供應不穩定,美元小鈔與必需藥品宜隨身備妥。",
        en: "Cash and supplies can be unreliable — carry small US bills and any essential medications.",
      },
    ],
  },
  {
    id: "GUY",
    name: { zh: "蓋亞那", en: "Guyana" },
    capital: { zh: "喬治城", en: "Georgetown" },
    flag: "🇬🇾",
    region: "americas",
    center: { lat: 4.9, lng: -58.9 },
    intro: {
      zh: "南美洲唯一以英語為官方語言的國家,文化上更貼近加勒比。國土約八成被雨林覆蓋,凱厄圖爾瀑布一瀉 226 公尺氣勢驚人。2015 年外海發現大型油田後,躍升為全球成長最快的經濟體之一。",
      en: "The only English-speaking country in South America, culturally closer to the Caribbean. Rainforest covers about 80% of the land, and Kaieteur Falls thunders down 226 meters in a single drop. Since a huge offshore oil find in 2015, it has become one of the world's fastest-growing economies.",
    },
    history: {
      zh: "荷蘭人 17 世紀在埃塞奎博、德梅拉拉與伯比斯建立殖民據點,19 世紀初轉由英國統治,合併為英屬圭亞那。廢奴後引進大量印度契約勞工,形成印度裔與非裔為主的多元社會。1966 年獨立,1970 年改制共和國。西鄰委內瑞拉長期聲索埃塞奎博地區主權,近年因石油開採而爭議再起。",
      en: "The Dutch founded colonies at Essequibo, Demerara, and Berbice in the 17th century; Britain took over in the early 19th, merging them into British Guiana. After abolition, indentured workers from India arrived in large numbers, shaping a society of Indo- and Afro-Guyanese communities. Independence came in 1966, republic status in 1970. Venezuela's long-standing claim to the Essequibo region has flared anew amid the oil boom.",
    },
    cities: [
      {
        name: { zh: "喬治城", en: "Georgetown" },
        blurb: {
          zh: "大西洋岸的首都,白色木造建築與運河透著荷英殖民遺風。",
          en: "The Atlantic-coast capital, its white timber buildings and canals echoing Dutch and British rule.",
        },
        trivia: {
          question: {
            zh: "喬治城的聖喬治大教堂以什麼建築特色聞名?",
            en: "St. George's Cathedral in Georgetown is famous for what architectural feature?",
          },
          options: [
            { zh: "是世界最高的木造教堂之一", en: "Being one of the world's tallest wooden churches" },
            { zh: "全以珊瑚石建成", en: "Being built entirely of coral stone" },
            { zh: "擁有純金圓頂", en: "Having a solid-gold dome" },
            { zh: "建在水上高腳柱上", en: "Standing on stilts over water" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座 1890 年代落成的英國國教座堂高逾 40 公尺,主要以當地綠心木建造,常被列為全球最高的木造教堂之一。",
            en: "Completed in the 1890s and rising over 40 meters, the Anglican cathedral is built largely of local greenheart timber — often cited among the tallest wooden churches on Earth.",
          },
        },
      },
      {
        name: { zh: "林登", en: "Linden" },
        blurb: {
          zh: "德梅拉拉河畔的第二大鎮,因採礦而興起。",
          en: "The second-largest town, on the Demerara River, built on mining.",
        },
        trivia: {
          question: {
            zh: "林登長期以開採哪種礦產聞名?",
            en: "Linden has long been known for mining which mineral?",
          },
          options: [
            { zh: "鋁土礦", en: "Bauxite" },
            { zh: "銅礦", en: "Copper" },
            { zh: "錫礦", en: "Tin" },
            { zh: "煤礦", en: "Coal" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "林登周邊的鋁土礦開採已逾百年,礦區的橘紅色土地與礦坑湖是小鎮的獨特地景,鋁土長期是蓋亞那傳統出口品。",
            en: "Bauxite has been dug around Linden for over a century — its orange earth and pit lakes mark the townscape, and the ore was long a mainstay of Guyana's exports.",
          },
        },
      },
      {
        name: { zh: "巴蒂卡", en: "Bartica" },
        blurb: {
          zh: "河流交會處的內陸門戶小鎮,淘金客與探險者的補給站。",
          en: "A river-junction town — the gateway to the interior and a supply stop for miners and adventurers.",
        },
        trivia: {
          question: {
            zh: "巴蒂卡被稱為「內陸的門戶」,它位於哪條蓋亞那大河與支流的匯流處?",
            en: "Bartica, the 'gateway to the interior', sits at the confluence of which great Guyanese river and its tributaries?",
          },
          options: [
            { zh: "埃塞奎博河", en: "The Essequibo River" },
            { zh: "亞馬遜河", en: "The Amazon River" },
            { zh: "奧里諾科河", en: "The Orinoco River" },
            { zh: "馬格達萊納河", en: "The Magdalena River" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴蒂卡位於埃塞奎博河與馬扎魯尼河、庫尤尼河的交會處;埃塞奎博河是蓋亞那最大河流,通往內陸金礦區與雨林。",
            en: "Bartica stands where the Mazaruni and Cuyuni rivers meet the Essequibo — Guyana's largest river and the highway to the goldfields and rainforest of the interior.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "凱厄圖爾瀑布單級落差 226 公尺,約為尼加拉瀑布的四倍多,卻因地處偏遠而遊客稀少。",
        en: "Kaieteur Falls drops 226 meters in one leap — over four times Niagara — yet its remoteness keeps crowds tiny.",
      },
      {
        zh: "蓋亞那雖在南美大陸,卻是加勒比共同體(CARICOM)的創始成員,總部就設在喬治城。",
        en: "Though on the South American mainland, Guyana is a founding member of CARICOM, whose headquarters sits in Georgetown.",
      },
    ],
    climate: {
      zh: "赤道型氣候,終年濕熱,約 24–31°C。沿海有兩個雨季(約 5–8 月與 11–1 月),內陸雨林降雨豐沛,無颶風侵襲。",
      en: "Equatorial — hot and humid year-round at about 24–31°C. The coast sees two rainy seasons (roughly May–August and November–January), the interior forest is well-watered, and hurricanes pass it by.",
    },
    travelTips: [
      {
        zh: "凱厄圖爾瀑布多以小飛機一日遊往返喬治城,座位有限請提前預訂。",
        en: "Kaieteur Falls is usually a small-plane day trip from Georgetown — seats are few, so book ahead.",
      },
      {
        zh: "內陸雨林旅宿(如 Iwokrama)需事先安排接駁,自助前往不易。",
        en: "Interior rainforest lodges like Iwokrama require pre-arranged transfers — independent access is tough.",
      },
      {
        zh: "喬治城市區晚間治安不一,夜間以計程車代步並避免展示貴重物品。",
        en: "Georgetown safety varies after dark — take taxis at night and keep valuables out of sight.",
      },
    ],
  },
  {
    id: "SUR",
    name: { zh: "蘇利南", en: "Suriname" },
    capital: { zh: "巴拉馬利波", en: "Paramaribo" },
    flag: "🇸🇷",
    region: "americas",
    center: { lat: 4.1, lng: -56.0 },
    intro: {
      zh: "南美洲面積最小的國家,也是全球森林覆蓋率最高的國家之一,約九成國土是雨林。曾為荷蘭殖民地,荷語至今是官方語言;印度裔、爪哇裔、克里奧爾人、馬倫人等族群共處,文化混融獨樹一格。",
      en: "South America's smallest country and one of the most forested on Earth — rainforest covers about 90% of its land. A former Dutch colony where Dutch remains official, it blends Hindustani, Javanese, Creole, Maroon, and other communities into a culture all its own.",
    },
    history: {
      zh: "1667 年《布雷達條約》後由荷蘭經營,發展蔗糖種植園經濟;逃亡奴隸在雨林深處建立馬倫人社會,延續非洲傳統至今。廢奴後自英屬印度與爪哇引進契約勞工,奠定多族群結構。1975 年脫離荷蘭獨立,1980 年代經歷軍事政變與內戰動盪,如今以礦業、石油與雨林生態旅遊為經濟支柱。",
      en: "Run by the Dutch after the 1667 Treaty of Breda, it grew on sugar plantations, while escaped slaves founded Maroon societies deep in the forest that keep African traditions alive today. After abolition, indentured workers arrived from British India and Java, shaping its multiethnic makeup. Independent from the Netherlands in 1975, it weathered coups and civil conflict in the 1980s; mining, oil, and rainforest ecotourism now sustain the economy.",
    },
    cities: [
      {
        name: { zh: "巴拉馬利波", en: "Paramaribo" },
        blurb: {
          zh: "蘇利南河畔的首都,白色木造荷式老城已列世界遺產。",
          en: "The capital on the Suriname River, its white timber Dutch-colonial center a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "巴拉馬利波的歷史內城以什麼特色列入世界遺產?",
            en: "Paramaribo's historic inner city earned World Heritage status for what?",
          },
          options: [
            { zh: "融合荷蘭與在地工藝的木造殖民建築", en: "Wooden colonial architecture fusing Dutch design with local craftsmanship" },
            { zh: "古羅馬式石造競技場", en: "A Roman-style stone arena" },
            { zh: "全球最大的磚造城牆", en: "The world's largest brick city wall" },
            { zh: "史前巨石陣遺跡", en: "Prehistoric megalith circles" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "老城的白色木造建築群展現荷蘭規劃與熱帶在地材料工法的融合,2002 年列入世界遺產;清真寺與猶太會堂比鄰而立也是著名一景。",
            en: "The white wooden ensemble shows Dutch town planning fused with tropical materials and craft, listed in 2002 — and a mosque standing beside a synagogue is a beloved local sight.",
          },
        },
      },
      {
        name: { zh: "萊利多普", en: "Lelydorp" },
        blurb: {
          zh: "全國第二大城鎮,位於首都通往國際機場的公路上。",
          en: "The country's second-largest town, on the road from the capital to the international airport.",
        },
        trivia: {
          question: {
            zh: "萊利多普以荷蘭工程師萊利(Cornelis Lely)命名,他後來以主持荷蘭哪項著名工程留名?",
            en: "Lelydorp is named for Dutch engineer Cornelis Lely, later famed for masterminding which project in the Netherlands?",
          },
          options: [
            { zh: "須德海圍海造陸工程", en: "The Zuiderzee Works land-reclamation scheme" },
            { zh: "巴拿馬運河", en: "The Panama Canal" },
            { zh: "英法海底隧道", en: "The Channel Tunnel" },
            { zh: "蘇伊士運河", en: "The Suez Canal" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "萊利曾任蘇利南總督,返國後推動以攔海大壩圍墾須德海的宏大計畫,荷蘭的新生地城市萊利斯塔德同樣以他命名。",
            en: "Lely served as governor of Suriname before championing the great dam-and-polder plan that tamed the Zuiderzee — the Dutch new town of Lelystad also bears his name.",
          },
        },
      },
      {
        name: { zh: "新尼克里", en: "Nieuw Nickerie" },
        blurb: {
          zh: "西部邊境的河港城鎮,四周是一望無際的圩田。",
          en: "A river-port town on the western border, surrounded by sweeping polder fields.",
        },
        trivia: {
          question: {
            zh: "新尼克里所在的尼克里區是蘇利南哪種作物的主要產區?",
            en: "The Nickerie district around Nieuw Nickerie is Suriname's main producer of which crop?",
          },
          options: [
            { zh: "稻米", en: "Rice" },
            { zh: "咖啡", en: "Coffee" },
            { zh: "葡萄", en: "Grapes" },
            { zh: "小麥", en: "Wheat" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼克里區以荷蘭式圩田開墾的大片稻田聞名,是蘇利南的穀倉,稻米也是重要出口農產品。",
            en: "Nickerie's Dutch-style polders hold vast paddies that make it Suriname's granary, with rice a key export crop.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1667 年荷蘭與英國交換殖民地:荷蘭保住蘇利南,英國則取得新阿姆斯特丹——也就是後來的紐約。",
        en: "In 1667 the Dutch and English effectively swapped colonies: the Dutch kept Suriname while England held New Amsterdam — the future New York.",
      },
      {
        zh: "蘇利南是西半球唯一以荷蘭語為官方語言的獨立國家。",
        en: "Suriname is the only independent country in the Western Hemisphere with Dutch as its official language.",
      },
    ],
    climate: {
      zh: "赤道型氣候,終年濕熱,約 23–32°C。一年有兩個雨季(約 4–8 月與 12–1 月)與兩個較乾的季節,不受颶風侵襲。",
      en: "Equatorial, hot and humid all year at about 23–32°C, with two rainy seasons (roughly April–August and December–January) and two drier spells — and no hurricanes.",
    },
    travelTips: [
      {
        zh: "多數國籍入境蘇利南需事先辦理電子簽證或旅遊卡,出發前先上官方網站申請。",
        en: "Most nationalities need an e-visa or tourist card for Suriname — apply on the official site before departure.",
      },
      {
        zh: "雨林深處的馬倫村落與生態旅宿多需由旅行社安排船程,行程至少預留兩三天。",
        en: "Maroon villages and jungle lodges upriver require operator-arranged boat transfers — allow at least two or three days.",
      },
      {
        zh: "在巴拉馬利波可嘗試爪哇沙嗲、印度烤餅與克里奧爾料理,一城吃遍三大洲。",
        en: "In Paramaribo, sample Javanese satay, Indian roti, and Creole dishes — three continents on one menu.",
      },
    ],
  },
  {
    id: "PRY",
    name: { zh: "巴拉圭", en: "Paraguay" },
    capital: { zh: "亞松森", en: "Asunción" },
    flag: "🇵🇾",
    region: "americas",
    center: { lat: -23.4, lng: -58.4 },
    intro: {
      zh: "南美洲內陸國,巴拉圭河將國土一分為二:東部是農牧沃野,西部是半乾燥的查科荒原。瓜拉尼語與西班牙語並列官方語言,全民共飲冰涼的瑪黛茶「特雷雷」,伊泰普水壩是世界發電量最大的水壩之一。",
      en: "A landlocked South American nation split by the Paraguay River: fertile farmland to the east, the semi-arid Chaco to the west. Guaraní and Spanish are co-official, everyone sips ice-cold tereré mate, and the Itaipú Dam ranks among the world's most powerful hydroelectric plants.",
    },
    history: {
      zh: "瓜拉尼人世居此地,1537 年西班牙人建亞松森,耶穌會傳教士其後在東南部建立著名的瓜拉尼傳教區。1811 年獨立後長期閉關自守,1864–70 年三國同盟戰爭對抗巴西、阿根廷與烏拉圭,人口損失慘重,是南美史上最血腥的戰爭。1930 年代查科戰爭擊退玻利維亞,1954–89 年斯特羅斯納獨裁,其後走向民主,以農牧與水電立國。",
      en: "Homeland of the Guaraní, colonized after the Spanish founded Asunción in 1537, with Jesuit missions later organizing famed Guaraní reductions in the southeast. After 1811 independence it turned inward for decades, then fought Brazil, Argentina, and Uruguay in the catastrophic War of the Triple Alliance (1864–70) — South America's bloodiest, with staggering population losses. It prevailed over Bolivia in the 1930s Chaco War, endured Stroessner's 1954–89 dictatorship, and now thrives on agribusiness and hydropower.",
    },
    cities: [
      {
        name: { zh: "亞松森", en: "Asunción" },
        blurb: {
          zh: "巴拉圭河畔的首都,南美最古老的城市之一。",
          en: "The capital on the Paraguay River — one of South America's oldest cities.",
        },
        trivia: {
          question: {
            zh: "亞松森為何被稱為「眾城之母」?",
            en: "Why is Asunción called the 'Mother of Cities'?",
          },
          options: [
            { zh: "早期西班牙人以此為基地出發建立多座南美城市", en: "Early Spanish expeditions set out from here to found several South American cities" },
            { zh: "它是南美人口最多的城市", en: "It is South America's most populous city" },
            { zh: "城裡有最多的教堂", en: "It has the most churches" },
            { zh: "它由多座古城合併而成", en: "It was formed by merging several ancient cities" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "亞松森建於 1537 年,是西班牙人在拉布拉他流域最早的重要據點,包括重建布宜諾斯艾利斯在內的多支拓殖隊都由此出發。",
            en: "Founded in 1537 as Spain's first major foothold in the Río de la Plata basin, Asunción launched the expeditions that founded — and refounded — cities including Buenos Aires.",
          },
        },
      },
      {
        name: { zh: "東方市", en: "Ciudad del Este" },
        blurb: {
          zh: "三國交界的邊境商城,緊鄰伊瓜蘇瀑布與伊泰普水壩。",
          en: "A border commerce boomtown at the triple frontier, near Iguazú Falls and the Itaipú Dam.",
        },
        trivia: {
          question: {
            zh: "東方市附近的伊泰普水壩是巴拉圭與哪個國家共同興建營運的?",
            en: "The Itaipú Dam near Ciudad del Este is jointly built and operated by Paraguay and which country?",
          },
          options: [
            { zh: "巴西", en: "Brazil" },
            { zh: "阿根廷", en: "Argentina" },
            { zh: "玻利維亞", en: "Bolivia" },
            { zh: "烏拉圭", en: "Uruguay" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "伊泰普水壩橫跨巴拉圭與巴西界河巴拉那河,1984 年啟用,年發電量多次居全球之冠,供應巴拉圭絕大部分的電力。",
            en: "Itaipú spans the Paraná River on the Paraguay–Brazil border; online since 1984, it has repeatedly led the world in annual power generation and supplies most of Paraguay's electricity.",
          },
        },
      },
      {
        name: { zh: "恩卡納西翁", en: "Encarnación" },
        blurb: {
          zh: "南部河畔城市,以河灘嘉年華與耶穌會遺址門戶著稱。",
          en: "A southern riverside city, known for its beach carnival and as gateway to the Jesuit ruins.",
        },
        trivia: {
          question: {
            zh: "恩卡納西翁近郊被列為世界遺產的特立尼達遺址,是由誰建立的?",
            en: "The World Heritage ruins of Trinidad near Encarnación were built by whom?",
          },
          options: [
            { zh: "耶穌會傳教士與瓜拉尼人", en: "Jesuit missionaries with the Guaraní people" },
            { zh: "印加帝國", en: "The Inca Empire" },
            { zh: "葡萄牙軍隊", en: "The Portuguese army" },
            { zh: "德國移民", en: "German settlers" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "17、18 世紀耶穌會在此建立瓜拉尼傳教區,特立尼達(La Santísima Trinidad de Paraná)是保存最完整的一座,為巴拉圭代表性的世界遺產。",
            en: "Jesuits organized Guaraní mission settlements here in the 17th–18th centuries; La Santísima Trinidad de Paraná is the best preserved and Paraguay's flagship World Heritage site.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "巴拉圭是中華民國(台灣)在南美洲唯一的邦交國,兩國邦誼始於 1957 年。",
        en: "Paraguay is Taiwan's only diplomatic ally in South America, with ties dating back to 1957.",
      },
      {
        zh: "巴拉圭的電力幾乎全部來自水力發電,伊泰普的電還大量賣給巴西。",
        en: "Nearly all of Paraguay's electricity is hydroelectric — and it sells much of its Itaipú share to Brazil.",
      },
    ],
    climate: {
      zh: "副熱帶氣候:夏季(12–2 月)濕熱,常超過 35°C;冬季(6–8 月)溫和偶有寒流。東部濕潤,西部查科地區乾熱。",
      en: "Subtropical: summers (December–February) are hot and humid, often topping 35°C, while winters (June–August) are mild with occasional cold snaps. The east is humid, the western Chaco hot and dry.",
    },
    travelTips: [
      {
        zh: "入境隨俗喝特雷雷:當地人隨身帶保溫壺與瑪黛茶杯,接受分享是交朋友的捷徑。",
        en: "Join the tereré ritual — locals carry thermoses and guampa cups everywhere, and sharing a round is the fastest way to make friends.",
      },
      {
        zh: "12–2 月盛夏酷熱,戶外行程盡量排在清晨或傍晚。",
        en: "Midsummer (December–February) is scorching — schedule outdoor plans for early morning or evening.",
      },
      {
        zh: "遊伊瓜蘇瀑布可住東方市,一日往返巴西或阿根廷側,記得確認簽證與過境章規定。",
        en: "Ciudad del Este makes a base for Iguazú Falls day trips to the Brazilian or Argentine side — check visa and border-stamp rules first.",
      },
    ],
  },
];
