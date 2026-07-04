import type { CountryExtras } from "../types";

export const AMERICAS_EXTRAS: Record<string, CountryExtras> = {
  USA: {
    climate: {
      zh: "幅員遼闊,氣候差異極大:東部濕潤四季分明,西南部為乾燥沙漠,加州沿岸屬地中海型氣候,佛州與夏威夷終年溫暖,阿拉斯加則屬亞寒帶與極地氣候,中部平原春夏常有龍捲風。",
      en: "A vast country with dramatic contrasts: a humid four-season east, arid southwestern deserts, a Mediterranean California coast, warm Florida and Hawaii year-round, subarctic-to-polar Alaska, and tornado-prone central plains in spring and summer.",
    },
    travelTips: [
      {
        zh: "小費文化根深蒂固:餐廳內用一般給 15–20%,計程車、飯店行李與導覽也都期待小費。",
        en: "Tipping is deeply ingrained: 15–20% at sit-down restaurants, plus tips expected for taxis, hotel porters, and tour guides.",
      },
      {
        zh: "標價通常不含銷售稅,結帳金額會比標籤高;各州稅率不同。",
        en: "Listed prices usually exclude sales tax, so the checkout total is higher than the tag; rates vary by state.",
      },
      {
        zh: "城市內治安因街區而異,同一座城市相隔幾條街可能差異很大,夜間避免不熟悉的區域。",
        en: "Safety varies block by block within cities — a few streets can make a big difference. Avoid unfamiliar areas after dark.",
      },
      {
        zh: "國土廣大,大眾運輸有限,跨城市旅行多需租車或搭乘國內航班。",
        en: "Distances are huge and public transit limited; intercity travel usually means renting a car or flying domestically.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1867 年美國以 720 萬美元向哪個國家買下阿拉斯加?",
          en: "In 1867 the United States bought Alaska for $7.2 million from which country?",
        },
        options: [
          { zh: "俄羅斯", en: "Russia" },
          { zh: "英國", en: "Britain" },
          { zh: "西班牙", en: "Spain" },
          { zh: "丹麥", en: "Denmark" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這筆交易當年被譏為「西華德的蠢事」,後來阿拉斯加發現金礦與石油,證明是史上划算的買賣之一。",
          en: "Mocked at the time as 'Seward's Folly', the deal proved a bargain once gold and oil were found in Alaska.",
        },
      },
      {
        question: {
          zh: "1803 年美國透過「路易斯安那購地案」向法國買地,使國土發生什麼變化?",
          en: "The 1803 Louisiana Purchase from France did what to US territory?",
        },
        options: [
          { zh: "國土面積幾乎倍增", en: "It nearly doubled the country's area" },
          { zh: "首次取得太平洋出海口", en: "It gave the US its first Pacific coastline" },
          { zh: "增加約十分之一領土", en: "It added about a tenth more land" },
          { zh: "取得佛羅里達半島", en: "It secured the Florida peninsula" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傑佛遜總統以 1,500 萬美元買下密西西比河以西約 214 萬平方公里土地,為西進擴張奠定基礎。",
          en: "For $15 million, Jefferson acquired some 2.14 million km² west of the Mississippi, setting the stage for westward expansion.",
        },
      },
      {
        question: {
          zh: "地球上可靠記錄到的最高氣溫 56.7°C,出現在美國的哪個地方?",
          en: "Earth's highest reliably recorded air temperature, 56.7°C (134°F), was measured where in the United States?",
        },
        options: [
          { zh: "加州死亡谷", en: "Death Valley, California" },
          { zh: "亞利桑那州鳳凰城", en: "Phoenix, Arizona" },
          { zh: "內華達州拉斯維加斯", en: "Las Vegas, Nevada" },
          { zh: "德州艾爾帕索", en: "El Paso, Texas" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1913 年死亡谷的熔爐溪測得 56.7°C;該盆地低於海平面 86 公尺,也是北美洲的最低點。",
          en: "Recorded at Furnace Creek in 1913. The valley floor, 86 m below sea level, is also North America's lowest point.",
        },
      },
    ],
  },
  CAN: {
    climate: {
      zh: "大部分國土冬季漫長嚴寒,北部為極地與苔原氣候;溫哥華所在的西岸受海洋調節,冬季溫和多雨;多倫多、蒙特婁等東部大城四季分明,夏季溫暖,冬季常有大雪。",
      en: "Most of the country has long, harsh winters, with polar and tundra climates in the north. The Vancouver coast is ocean-moderated — mild and rainy in winter — while eastern cities like Toronto and Montreal see four distinct seasons with warm summers and heavy snow.",
    },
    travelTips: [
      {
        zh: "冬季旅行務必備妥防寒衣物,內陸城市體感溫度可低於零下 30 度,戶外活動要注意凍傷。",
        en: "Pack serious winter gear: wind chill in inland cities can drop below -30°C, and frostbite is a real risk outdoors.",
      },
      {
        zh: "餐廳小費約 15–18%,標價另加聯邦與省銷售稅,結帳金額比標籤高。",
        en: "Tip around 15–18% in restaurants; federal and provincial sales taxes are added at checkout on top of listed prices.",
      },
      {
        zh: "魁北克省以法語為主要語言,路標與菜單多為法文,但觀光區大多能用英語溝通。",
        en: "Quebec is primarily French-speaking — signs and menus are mostly in French — though English works in most tourist areas.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "「加拿大」的國名源自原住民語言中的哪個詞?",
          en: "The name 'Canada' comes from which word in an Indigenous language?",
        },
        options: [
          {
            zh: "意為「村落」的 kanata",
            en: "Kanata, meaning 'village' or 'settlement'",
          },
          { zh: "意為「白雪」的詞", en: "A word meaning 'snow'" },
          { zh: "意為「大河」的詞", en: "A word meaning 'great river'" },
          { zh: "意為「楓樹」的詞", en: "A word meaning 'maple tree'" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "16 世紀探險家卡蒂亞聽到聖羅倫斯河谷原住民以 kanata 指稱聚落,後來整片土地都被稱為加拿大。",
          en: "Explorer Jacques Cartier heard St. Lawrence Iroquoians use 'kanata' for a settlement in the 1530s; the name spread to the whole land.",
        },
      },
      {
        question: {
          zh: "加拿大東岸的芬迪灣以什麼自然現象聞名世界?",
          en: "The Bay of Fundy on Canada's east coast is world-famous for what natural phenomenon?",
        },
        options: [
          { zh: "世界落差最大的潮汐", en: "The world's highest tides" },
          { zh: "全年不凍的溫泉海域", en: "Geothermal waters that never freeze" },
          { zh: "頻繁出現的海市蜃樓", en: "Frequent sea mirages" },
          { zh: "世界最大的漩渦", en: "The world's largest whirlpool" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "芬迪灣潮差可達 16 公尺,退潮時遊客能走在海床上,漲潮時海水又會淹沒巨岩底部。",
          en: "Tides there can range up to 16 m — at low tide visitors walk the sea floor that high tide later submerges.",
        },
      },
      {
        question: {
          zh: "1999 年加拿大設立的最新一級行政區是哪一個?",
          en: "Which is Canada's newest territory, created in 1999?",
        },
        options: [
          { zh: "努納武特地區", en: "Nunavut" },
          { zh: "育空地區", en: "Yukon" },
          { zh: "西北地區", en: "The Northwest Territories" },
          { zh: "拉布拉多地區", en: "Labrador" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "努納武特由西北地區分出,是與因紐特人土地協議的成果,面積廣大而人口僅數萬,官方語言包含因紐特語。",
          en: "Carved from the Northwest Territories under an Inuit land-claims agreement, vast Nunavut has only tens of thousands of residents and counts Inuktitut among its official languages.",
        },
      },
    ],
  },
  MEX: {
    climate: {
      zh: "北回歸線橫貫全國:北部多沙漠與乾旱草原,日夜溫差大;南部與兩側沿海屬炎熱的熱帶氣候,夏秋須防颶風;墨西哥城等中部高原因海拔高,終年溫和涼爽。",
      en: "The Tropic of Cancer bisects the country: the north is desert and dry steppe with big day-night swings, the south and both coasts are hot and tropical with hurricane risk in summer and fall, while the central highlands around Mexico City stay mild year-round thanks to altitude.",
    },
    travelTips: [
      {
        zh: "治安區域差異大,觀光區大多安全,但應避開邊境與偏遠州的高風險地帶,夜間少走偏僻街道。",
        en: "Safety varies sharply by region: tourist zones are mostly fine, but avoid high-risk border and remote-state areas and quiet streets at night.",
      },
      {
        zh: "自來水不宜生飲,請喝瓶裝水,路邊攤食物選擇現做且翻桌率高的攤位。",
        en: "Don't drink tap water — stick to bottled. At street stalls, pick busy vendors cooking to order.",
      },
      {
        zh: "墨西哥城海拔約 2,240 公尺,剛抵達時劇烈運動或飲酒可能感到不適,宜放慢步調。",
        en: "Mexico City sits at about 2,240 m; take it easy on arrival, as exertion and alcohol can hit harder at altitude.",
      },
      {
        zh: "餐廳小費約 10–15%,搭計程車建議使用叫車 App 或飯店安排的車輛。",
        en: "Tip 10–15% in restaurants, and prefer ride-hailing apps or hotel-arranged taxis over street cabs.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "科學家在墨西哥猶加敦半島發現的希克蘇魯伯隕石坑,與哪個重大事件有關?",
          en: "The Chicxulub crater on Mexico's Yucatán Peninsula is linked to which momentous event?",
        },
        options: [
          {
            zh: "約 6,600 萬年前造成恐龍滅絕的小行星撞擊",
            en: "The asteroid impact about 66 million years ago that wiped out the dinosaurs",
          },
          {
            zh: "史上最大規模的火山爆發",
            en: "The largest volcanic eruption in history",
          },
          {
            zh: "馬雅文明突然衰落的原因",
            en: "The sudden collapse of the Maya civilization",
          },
          {
            zh: "美洲最早人類遷徙的路線",
            en: "The route of the first human migration into the Americas",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "直徑約 180 公里的隕石坑埋在地層下,被視為白堊紀末大滅絕的主因,恐龍時代就此終結。",
          en: "The buried crater, some 180 km wide, is considered the prime cause of the end-Cretaceous extinction that ended the age of dinosaurs.",
        },
      },
      {
        question: {
          zh: "每年秋天,數以億計的哪種生物會從北美長途遷徙到墨西哥中部的森林過冬?",
          en: "Each fall, hundreds of millions of which creatures migrate from North America to overwinter in central Mexico's forests?",
        },
        options: [
          { zh: "帝王斑蝶", en: "Monarch butterflies" },
          { zh: "蜂鳥", en: "Hummingbirds" },
          { zh: "加拿大雁", en: "Canada geese" },
          { zh: "墨西哥游離尾蝠", en: "Mexican free-tailed bats" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "帝王斑蝶飛行數千公里,聚集在米卻肯州的冷杉林中越冬,整片森林被蝴蝶覆蓋,保護區已列入世界遺產。",
          en: "Monarchs fly thousands of kilometers to cluster in Michoacán's fir forests, blanketing whole trees; the reserve is a World Heritage site.",
        },
      },
      {
        question: {
          zh: "在聯合國教科文組織世界遺產數量上,墨西哥在美洲各國中排名如何?",
          en: "How does Mexico rank among countries of the Americas in number of UNESCO World Heritage sites?",
        },
        options: [
          { zh: "美洲第一多", en: "The most in the Americas" },
          { zh: "次於美國居第二", en: "Second, behind the United States" },
          { zh: "次於巴西居第二", en: "Second, behind Brazil" },
          { zh: "美洲第五多", en: "Fifth in the Americas" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "墨西哥擁有三十多處世界遺產,數量居美洲之冠、全球前十,涵蓋古文明遺址、殖民古城與自然保護區。",
          en: "With 30-plus sites — the most in the Americas and among the top ten worldwide — Mexico's list spans ancient ruins, colonial towns, and nature reserves.",
        },
      },
    ],
  },
  BRA: {
    climate: {
      zh: "大部分國土屬熱帶氣候:亞馬遜流域終年高溫多雨,東北內陸較乾燥,南部各州為亞熱帶,冬季偶有寒流甚至霜雪。位於南半球,季節與北半球相反,聖誕節正值盛夏。",
      en: "Mostly tropical: the Amazon basin is hot and rainy year-round, the northeastern interior drier, and the southern states subtropical with occasional winter cold snaps and even frost. In the Southern Hemisphere, seasons are reversed — Christmas falls in high summer.",
    },
    travelTips: [
      {
        zh: "里約與聖保羅等大城治安區域差異大,貴重物品不外露,手機在街頭少拿在手上,夜間搭乘叫車服務。",
        en: "In Rio and São Paulo safety varies by neighborhood: keep valuables out of sight, avoid waving your phone around, and use ride-hailing at night.",
      },
      {
        zh: "前往亞馬遜等內陸地區建議接種黃熱病疫苗,並做好防蚊措施。",
        en: "Yellow fever vaccination is recommended for the Amazon and other inland regions; take mosquito precautions.",
      },
      {
        zh: "南半球季節相反,里約嘉年華在 2、3 月的盛夏舉行,住宿須提早數月預訂。",
        en: "Seasons are reversed: Rio's Carnival falls in the summer heat of February–March, and lodging books out months ahead.",
      },
      {
        zh: "葡萄牙語是通用語言,英語普及率不高,學幾句基本葡語會很有幫助。",
        en: "Portuguese is the lingua franca and English is not widely spoken — a few basic Portuguese phrases go a long way.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "巴西國旗中央的白色綬帶上寫著什麼格言?",
          en: "What motto is written on the white banner across Brazil's flag?",
        },
        options: [
          { zh: "「秩序與進步」", en: "'Order and Progress'" },
          { zh: "「獨立或死亡」", en: "'Independence or Death'" },
          { zh: "「團結就是力量」", en: "'Unity is Strength'" },
          { zh: "「自由、平等、博愛」", en: "'Liberty, Equality, Fraternity'" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "葡文 Ordem e Progresso 源自法國哲學家孔德的實證主義,綬帶橫過象徵里約夜空的藍色星圖。",
          en: "The Portuguese 'Ordem e Progresso' comes from Auguste Comte's positivism; the banner crosses a star field depicting Rio's night sky.",
        },
      },
      {
        question: {
          zh: "巴西中西部的潘塔納爾濕地保有什麼世界紀錄?",
          en: "The Pantanal in west-central Brazil holds what world record?",
        },
        options: [
          {
            zh: "世界最大的熱帶濕地",
            en: "The world's largest tropical wetland",
          },
          { zh: "世界最深的淡水湖群", en: "The world's deepest freshwater lakes" },
          { zh: "世界最大的紅樹林", en: "The world's largest mangrove forest" },
          { zh: "世界最長的地下河", en: "The world's longest underground river" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "潘塔納爾面積達十餘萬平方公里,雨季大半沒入水中,是觀察美洲豹、凱門鱷與水豚的最佳地點之一。",
          en: "Covering well over 100,000 km² and largely flooded in the wet season, it is among the best places on Earth to see jaguars, caimans, and capybaras.",
        },
      },
      {
        question: {
          zh: "哪項農產品巴西已連續稱霸世界產量超過一百五十年?",
          en: "Which crop has Brazil led the world in producing for more than 150 years?",
        },
        options: [
          { zh: "咖啡", en: "Coffee" },
          { zh: "可可", en: "Cocoa" },
          { zh: "香蕉", en: "Bananas" },
          { zh: "稻米", en: "Rice" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "自 19 世紀中葉起巴西即是世界最大咖啡生產國,咖啡財富曾左右政局,至今產量仍約占全球三分之一。",
          en: "Brazil has been the top coffee producer since the mid-1800s — coffee wealth once steered national politics, and it still grows roughly a third of the world's supply.",
        },
      },
    ],
  },
  ARG: {
    climate: {
      zh: "國土南北狹長,北部屬亞熱帶濕熱氣候,中部彭巴草原溫和濕潤,南部巴塔哥尼亞乾燥多風、冬季寒冷。位於南半球,季節與北半球相反,12 至 2 月是最溫暖的季節。",
      en: "Stretching far north to south: the north is humid subtropical, the central Pampas mild and moist, and Patagonia dry, windy, and cold in winter. In the Southern Hemisphere, seasons are reversed — December to February is the warm season.",
    },
    travelTips: [
      {
        zh: "通膨劇烈且匯率多軌,美元現金常能換到比官方牌價更好的匯率,出發前先了解當下的換匯規則。",
        en: "With high inflation and multiple exchange rates, US dollar cash often gets a much better rate than the official one — check current rules before you go.",
      },
      {
        zh: "阿根廷人晚餐吃得很晚,餐廳多在晚上 9 點後才熱鬧,探戈表演常至深夜。",
        en: "Argentines dine late: restaurants only fill up after 9 pm, and tango shows run well into the night.",
      },
      {
        zh: "巴塔哥尼亞天氣多變且風勢強勁,即使夏季健行也要備妥防風防雨衣物。",
        en: "Patagonian weather is fickle and fiercely windy — pack wind- and rain-proof layers even for summer hikes.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "阿根廷的國名 Argentina 源自哪個拉丁文詞彙?",
          en: "Argentina's name derives from which Latin word?",
        },
        options: [
          { zh: "意為「白銀」的 argentum", en: "Argentum, meaning 'silver'" },
          { zh: "意為「銀白土地」的 arges", en: "Arges, meaning 'shining land'" },
          { zh: "意為「南方」的 australis", en: "Australis, meaning 'southern'" },
          { zh: "意為「草原」的 ager", en: "Ager, meaning 'field'" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "早期歐洲探險者相信內陸有銀礦,將這片土地與大河冠上「白銀」之名,拉普拉塔河即「銀之河」。",
          en: "Early European explorers, believing silver lay inland, named both the land and the river for it — Río de la Plata means 'river of silver'.",
        },
      },
      {
        question: {
          zh: "阿根廷與巴西邊界上,由兩百多道瀑布組成的世界級瀑布群叫什麼?",
          en: "What is the name of the world-class system of 200-plus waterfalls on the Argentina–Brazil border?",
        },
        options: [
          { zh: "伊瓜蘇瀑布", en: "Iguazú Falls" },
          { zh: "安赫爾瀑布", en: "Angel Falls" },
          { zh: "凱厄圖爾瀑布", en: "Kaieteur Falls" },
          { zh: "特肯達馬瀑布", en: "Tequendama Falls" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "伊瓜蘇瀑布寬近三公里,最壯觀的「魔鬼喉」大半位於阿根廷側,兩國各設國家公園並同列世界遺產。",
          en: "Nearly 3 km wide, with the thunderous Devil's Throat mostly on the Argentine side, it is protected by national parks in both countries — each a World Heritage site.",
        },
      },
      {
        question: {
          zh: "巴塔哥尼亞的佩里托莫雷諾冰川以什麼奇景吸引全球遊客?",
          en: "Patagonia's Perito Moreno Glacier draws visitors worldwide for what spectacle?",
        },
        options: [
          {
            zh: "巨大冰壁不斷崩落入湖的景象",
            en: "Massive ice walls constantly calving into the lake",
          },
          { zh: "冰川下的藍色熔岩洞穴", en: "Blue lava caves beneath the ice" },
          { zh: "冰面上的溫泉湖泊", en: "Hot spring pools on the ice surface" },
          { zh: "每晚出現的極光", en: "Nightly displays of the aurora" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這座冰川高約 60 公尺的冰壁時常轟然崩解墜入阿根廷湖,且冰體至今仍相對穩定,是少數未明顯退縮的大冰川之一。",
          en: "Its ice front, some 60 m tall, regularly thunders into Lago Argentino; unusually, the glacier has remained relatively stable rather than sharply retreating.",
        },
      },
    ],
  },
  CHL: {
    climate: {
      zh: "南北綿延四千多公里,氣候層次分明:北部阿他加馬沙漠極度乾燥,中部聖地牙哥一帶屬地中海型氣候,南部則多雨寒涼、冰川峽灣密布。位於南半球,季節與北半球相反。",
      en: "Spanning over 4,000 km north to south, the climate shifts in bands: the hyper-arid Atacama in the north, a Mediterranean climate around Santiago, and a cold, rainy south of glaciers and fjords. Southern Hemisphere seasons are the reverse of the north's.",
    },
    travelTips: [
      {
        zh: "智利位於環太平洋地震帶,地震頻繁但建築抗震標準高,遇搖晃保持冷靜並遵循館內指示。",
        en: "Chile sits on the Pacific Ring of Fire: earthquakes are frequent, but building codes are strict — stay calm and follow local guidance if one hits.",
      },
      {
        zh: "許多餐廳帳單會列入 10% 的「建議小費」,結帳時可選擇是否支付。",
        en: "Many restaurant bills include a suggested 10% tip ('propina sugerida'), which you may accept or decline at payment.",
      },
      {
        zh: "阿他加馬沙漠景點海拔落差大,聖佩德羅約 2,400 公尺,間歇泉高達 4,300 公尺,行程宜由低往高安排。",
        en: "Atacama sights span big altitude ranges — San Pedro at about 2,400 m, the geysers at 4,300 m — so schedule lower sites first.",
      },
      {
        zh: "聖地牙哥市中心與觀光區偷竊時有所聞,背包留意拉鍊,手機勿隨手放在餐桌上。",
        en: "Pickpocketing happens in central Santiago and tourist spots: mind your bag zippers and don't leave phones on café tables.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1960 年智利瓦爾迪維亞近海發生的地震,在地震觀測史上留下什麼紀錄?",
          en: "The 1960 earthquake off Valdivia, Chile, set what record in seismic history?",
        },
        options: [
          {
            zh: "儀器觀測史上規模最大的地震",
            en: "The most powerful earthquake ever instrumentally recorded",
          },
          {
            zh: "史上持續時間最長的地震",
            en: "The longest-lasting earthquake in history",
          },
          {
            zh: "史上震源最深的大地震",
            en: "The deepest major earthquake on record",
          },
          {
            zh: "首次被儀器記錄到的地震",
            en: "The first earthquake ever recorded by instruments",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "矩規模 9.5 的瓦爾迪維亞大地震至今無出其右,引發的海嘯橫越太平洋,遠至夏威夷與日本都造成傷亡。",
          en: "At magnitude 9.5 it remains unmatched; its tsunami crossed the Pacific, causing deaths as far away as Hawaii and Japan.",
        },
      },
      {
        question: {
          zh: "2010 年智利科皮亞波礦難中,33 名礦工受困地下 69 天後結局如何?",
          en: "In the 2010 Copiapó mining accident in Chile, what happened to the 33 miners trapped underground for 69 days?",
        },
        options: [
          {
            zh: "全數透過救援艙獲救生還",
            en: "All were rescued alive through a rescue capsule",
          },
          { zh: "僅半數獲救", en: "Only about half were saved" },
          {
            zh: "自行挖掘通道脫困",
            en: "They dug their own way out",
          },
          {
            zh: "在第 17 天由直升機救出",
            en: "They were lifted out by helicopter on day 17",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "救援隊鑽出深達 700 公尺的通道,以「鳳凰號」救援艙將 33 人逐一吊升地面,全球逾十億人收看直播。",
          en: "Rescuers drilled a shaft some 700 m deep and winched all 33 up one by one in the Fénix capsule, watched live by over a billion people.",
        },
      },
      {
        question: {
          zh: "哪個曾被認為在歐洲近乎絕跡的葡萄品種,1994 年被發現仍大量存活於智利,成為當地招牌?",
          en: "Which grape variety, thought nearly extinct in Europe, was found in 1994 to survive widely in Chile and became its signature?",
        },
        options: [
          { zh: "卡門內爾", en: "Carménère" },
          { zh: "希哈", en: "Syrah" },
          { zh: "金芬黛", en: "Zinfandel" },
          { zh: "內比歐露", en: "Nebbiolo" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "卡門內爾在 19 世紀根瘤蚜蟲害後幾乎從波爾多消失,智利果園長期把它誤認為梅洛,1994 年經鑑定才重見天日。",
          en: "Carménère all but vanished from Bordeaux after the phylloxera blight; Chilean growers had long mistaken it for Merlot until an ampelographer identified it in 1994.",
        },
      },
    ],
  },
  PER: {
    climate: {
      zh: "分為三大氣候帶:沿海為乾燥沙漠,利馬冬季常籠罩濕冷海霧;安地斯山區日照強、日夜溫差大,雨季約在 12 至 3 月;東部亞馬遜低地終年濕熱。位於南半球,季節與北半球相反。",
      en: "Three distinct zones: a desert coast where Lima sits under damp winter sea fog, high Andes with strong sun, big day-night swings, and a December–March rainy season, and hot, humid Amazon lowlands in the east. Southern Hemisphere seasons run opposite to the north's.",
    },
    travelTips: [
      {
        zh: "庫斯科海拔約 3,400 公尺,高山症風險高:抵達後先放慢步調一兩天,多喝水少飲酒,可嘗試當地的古柯茶。",
        en: "Cusco lies at about 3,400 m and altitude sickness is common: take it slow for a day or two, hydrate, limit alcohol, and try the local coca tea.",
      },
      {
        zh: "馬丘比丘門票有每日限額,印加古道更需提前數月預約,旺季務必及早規劃。",
        en: "Machu Picchu tickets are capped daily and the Inca Trail books out months ahead — plan early, especially in high season.",
      },
      {
        zh: "自來水不宜生飲,沙拉與冰塊也要留意;腸胃敏感者建議選擇熟食。",
        en: "Tap water isn't potable; be cautious with salads and ice, and favor cooked food if you have a sensitive stomach.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1911 年,哪位探險家將荒煙蔓草中的馬丘比丘介紹給全世界?",
          en: "In 1911, which explorer brought the overgrown ruins of Machu Picchu to the world's attention?",
        },
        options: [
          { zh: "海勒姆·賓厄姆", en: "Hiram Bingham" },
          { zh: "霍華德·卡特", en: "Howard Carter" },
          { zh: "亞歷山大·馮·洪堡", en: "Alexander von Humboldt" },
          { zh: "羅爾德·阿蒙森", en: "Roald Amundsen" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "耶魯學者賓厄姆在當地農民帶路下抵達遺址並向世界發表;馬丘比丘其實從未真正「失落」,附近居民一直知道它的存在。",
          en: "Yale scholar Bingham reached the site with local farmers as guides and publicized it worldwide — though it was never truly 'lost' to people living nearby.",
        },
      },
      {
        question: {
          zh: "秘魯南部沙漠中巨大的納斯卡線地畫,有什麼著名特點?",
          en: "The giant Nazca Lines etched in Peru's southern desert are famous for what?",
        },
        options: [
          {
            zh: "圖案巨大,從空中才能看清全貌",
            en: "The figures are so large they can only be fully seen from the air",
          },
          {
            zh: "會隨季節改變顏色",
            en: "They change color with the seasons",
          },
          {
            zh: "由磁性礦石排列而成",
            en: "They are laid out in magnetic ore",
          },
          {
            zh: "每年都會新增新的圖案",
            en: "New figures appear every year",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "納斯卡文化約在兩千年前刮開深色地表刻出蜂鳥、猴子等巨畫,有的長達數百公尺,乾燥氣候讓它們保存至今。",
          en: "The Nazca culture scraped away dark desert surface some 2,000 years ago to draw hummingbirds, monkeys, and more — some hundreds of meters long, preserved by the arid climate.",
        },
      },
      {
        question: {
          zh: "世界流量最大的亞馬遜河,其最遠源頭一般認為位於哪裡?",
          en: "The most distant source of the Amazon, the world's largest river by volume, is generally placed where?",
        },
        options: [
          { zh: "秘魯的安地斯山區", en: "In the Peruvian Andes" },
          { zh: "巴西的高原地帶", en: "On the Brazilian highlands" },
          { zh: "哥倫比亞的亞馬遜雨林", en: "In Colombia's Amazon rainforest" },
          { zh: "厄瓜多的火山群", en: "Among Ecuador's volcanoes" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "主流看法將源頭定在秘魯南部安地斯山的溪流,雪水一路匯流,穿越大半個南美洲後注入大西洋。",
          en: "Most studies trace it to headwater streams high in the southern Peruvian Andes, whose snowmelt travels across the continent to the Atlantic.",
        },
      },
    ],
  },
  COL: {
    climate: {
      zh: "地處赤道附近,氣溫幾乎不隨季節變化,而是由海拔決定:加勒比與太平洋沿岸終年炎熱,麥德林等山谷城市溫和如春,波哥大高原涼爽微寒;全年分為數個乾季與雨季。",
      en: "Sitting near the equator, temperatures barely change with the seasons — altitude decides everything: hot Caribbean and Pacific coasts, springlike valley cities like Medellín, and a cool highland Bogotá. The year alternates between dry and rainy spells.",
    },
    travelTips: [
      {
        zh: "治安已大幅改善,但仍講究「別露白」:首飾手機不外露,提款後留意周遭,夜間以叫車 App 代步。",
        en: "Safety has improved greatly, but locals still say 'no dar papaya' — don't flaunt valuables, stay alert after ATM withdrawals, and use ride-hailing apps at night.",
      },
      {
        zh: "波哥大海拔約 2,640 公尺,氣溫偏涼且剛抵達可能輕微高山反應,宜攜帶保暖外套。",
        en: "Bogotá sits at about 2,640 m: it's chilly, and mild altitude effects are possible on arrival — bring a warm layer.",
      },
      {
        zh: "各城市風情差異大,行程建議串聯高原、咖啡產區與加勒比海岸,體驗截然不同的哥倫比亞。",
        en: "Regions differ wildly — combining the highlands, the coffee axis, and the Caribbean coast shows you three different Colombias.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1982 年獲諾貝爾文學獎的哥倫比亞作家馬奎斯,最著名的代表作是哪一部?",
          en: "Colombian writer Gabriel García Márquez won the 1982 Nobel Prize in Literature — what is his most famous novel?",
        },
        options: [
          { zh: "《百年孤寂》", en: "One Hundred Years of Solitude" },
          { zh: "《唐吉訶德》", en: "Don Quixote" },
          { zh: "《佩德羅·巴拉莫》", en: "Pedro Páramo" },
          { zh: "《小徑分岔的花園》", en: "The Garden of Forking Paths" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這部魔幻寫實主義經典描寫馬康多小鎮布恩迪亞家族七代的興衰,靈感源自馬奎斯故鄉加勒比小鎮的風土。",
          en: "The magical-realist classic follows seven generations of the Buendía family in Macondo, a town inspired by Márquez's Caribbean hometown.",
        },
      },
      {
        question: {
          zh: "哥倫比亞的卡尼奧克里斯塔萊斯河被稱為「五色河」,其繽紛色彩來自什麼?",
          en: "Colombia's Caño Cristales is called the 'river of five colors' — what creates its hues?",
        },
        options: [
          {
            zh: "河床上一種季節性變紅的水生植物",
            en: "An aquatic plant on the riverbed that turns red in season",
          },
          { zh: "溶入河水的火山礦物", en: "Volcanic minerals dissolved in the water" },
          { zh: "河底彩色的珊瑚礁", en: "Colorful coral on the river bottom" },
          { zh: "上游排入的天然染料", en: "Natural dyes washing in from upstream" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "每年約 6 到 11 月,河床上的水生植物轉為鮮紅,與黃沙、綠藻、藍水交織成五彩河景,僅此一地可見。",
          en: "From roughly June to November the endemic riverweed Macarenia clavigera blazes red, mixing with yellow sand, green algae, and blue water — found nowhere else.",
        },
      },
      {
        question: {
          zh: "「哥倫比亞」這個國名是為了紀念誰?",
          en: "The name 'Colombia' honors which historical figure?",
        },
        options: [
          { zh: "航海家哥倫布", en: "Christopher Columbus" },
          { zh: "解放者玻利瓦爾", en: "Simón Bolívar the Liberator" },
          { zh: "征服者希門尼斯·德·克薩達", en: "Conquistador Jiménez de Quesada" },
          { zh: "地理學家亞美利哥·維斯普奇", en: "Geographer Amerigo Vespucci" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "國名源自哥倫布的姓氏,原是委內瑞拉革命家米蘭達對整個新大陸的稱呼,後來被這個南美國家沿用。",
          en: "Derived from Columbus's name, 'Colombia' was Venezuelan revolutionary Francisco de Miranda's term for the New World before this nation adopted it.",
        },
      },
    ],
  },
  CUB: {
    climate: {
      zh: "屬熱帶氣候,全年溫暖濕潤:11 至 4 月為較涼爽舒適的乾季,是旅遊旺季;5 至 10 月濕熱多雨,6 至 11 月為颶風季,夏末秋初風險最高,行程須保留彈性。",
      en: "Tropical and warm year-round: the cooler, drier November–April months are peak travel season, while May–October is hot and rainy. Hurricane season runs June–November, peaking in late summer and fall — build flexibility into plans.",
    },
    travelTips: [
      {
        zh: "美國發行的信用卡與金融卡在古巴幾乎不能用,現金為王,建議攜帶歐元等外幣入境兌換。",
        en: "US-issued credit and debit cards generally don't work in Cuba — cash rules, so bring euros or another convertible currency to exchange.",
      },
      {
        zh: "網路覆蓋有限且不穩,多數上網需透過電信公司的 Wi-Fi 熱點或預付卡,重要資料請先離線備妥。",
        en: "Internet is limited and patchy, often via telecom Wi-Fi hotspots and prepaid cards — download maps and key info offline beforehand.",
      },
      {
        zh: "入境古巴需要事先取得旅遊卡(觀光簽證),多數旅客可透過航空公司或旅行社購買。",
        en: "Entry requires a tourist card (visa) obtained in advance, usually available through airlines or travel agencies.",
      },
      {
        zh: "民宿(casa particular)是體驗當地生活的好選擇,通常比國營旅館更有特色也更實惠。",
        en: "Casas particulares (private homestays) offer more character and value than state-run hotels and a closer look at local life.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "世界上體型最小的鳥類——吸蜜蜂鳥,只分布在哪個國家?",
          en: "The bee hummingbird, the world's smallest bird, is found only in which country?",
        },
        options: [
          { zh: "古巴", en: "Cuba" },
          { zh: "牙買加", en: "Jamaica" },
          { zh: "哥斯大黎加", en: "Costa Rica" },
          { zh: "多明尼加", en: "The Dominican Republic" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "吸蜜蜂鳥體長僅約 5 至 6 公分、體重約 2 公克,是古巴特有種,常被誤認為昆蟲。",
          en: "Just 5–6 cm long and about 2 grams, this Cuban endemic is often mistaken for an insect.",
        },
      },
      {
        question: {
          zh: "海明威旅居古巴期間完成的哪部小說,獲得普立茲獎並促成他拿下諾貝爾文學獎?",
          en: "Which novel did Hemingway complete while living in Cuba, winning the Pulitzer and paving the way to his Nobel Prize?",
        },
        options: [
          { zh: "《老人與海》", en: "The Old Man and the Sea" },
          { zh: "《戰地鐘聲》", en: "For Whom the Bell Tolls" },
          { zh: "《太陽依舊升起》", en: "The Sun Also Rises" },
          { zh: "《戰地春夢》", en: "A Farewell to Arms" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "海明威在哈瓦那近郊的瞭望山莊住了約二十年,以古巴老漁夫為靈感寫下這部中篇,故居如今是博物館。",
          en: "Hemingway spent some two decades at Finca Vigía near Havana, drawing on local fishermen for the novella; the house is now a museum.",
        },
      },
      {
        question: {
          zh: "古巴島上的關塔那摩灣,有什麼特殊的政治地位?",
          en: "Guantánamo Bay on the Cuban coast holds what unusual political status?",
        },
        options: [
          {
            zh: "自 1903 年起由美國租借設立海軍基地至今",
            en: "It has been leased by the United States as a naval base since 1903",
          },
          {
            zh: "是聯合國直接管理的中立區",
            en: "It is a neutral zone administered by the United Nations",
          },
          {
            zh: "是古巴唯一的經濟特區",
            en: "It is Cuba's only special economic zone",
          },
          {
            zh: "由俄羅斯駐軍管理的港口",
            en: "It is a port administered by Russian forces",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "美西戰爭後美國取得永久租約,古巴革命政府視其為非法占領並拒絕兌現租金支票,但基地至今仍在運作。",
          en: "The US gained a perpetual lease after the Spanish-American War; Cuba's revolutionary government deems it an illegal occupation and refuses to cash the rent checks, yet the base still operates.",
        },
      },
    ],
  },
  PAN: {
    climate: {
      zh: "典型的熱帶氣候,終年高溫濕熱,平地氣溫多在 25 至 33 度之間:12 至 4 月為乾季,天氣晴朗適合旅遊;5 至 11 月為雨季,午後常有短暫雷陣雨;西部高地則涼爽宜人。",
      en: "Classic tropics — hot and humid all year, with lowland temperatures around 25–33°C. December–April is the sunny dry season and best for travel; May–November brings daily afternoon downpours, while the western highlands stay pleasantly cool.",
    },
    travelTips: [
      {
        zh: "巴拿馬通用美元現鈔(當地稱巴波亞),旅行時無須另外換匯,小額紙鈔在小店較好用。",
        en: "US dollar bills circulate as the everyday currency (locally called the balboa), so no exchange is needed — small bills work best in shops.",
      },
      {
        zh: "觀賞運河船隻過閘以米拉弗洛雷斯遊客中心最方便,留意每日船隻通行的時段安排。",
        en: "The Miraflores visitor center is the easiest place to watch ships transit the locks — check the daily transit schedule.",
      },
      {
        zh: "巴拿馬城的舊城區觀光安全,但部分市區與科隆市治安不佳,前往前先確認路線並避免夜間步行。",
        en: "Casco Viejo is tourist-friendly, but parts of Panama City and the city of Colón are unsafe — plan routes ahead and avoid walking at night.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "縱貫美洲的泛美公路,唯一中斷的路段位於巴拿馬與哥倫比亞交界的哪裡?",
          en: "The Pan-American Highway's only gap lies where, on the Panama–Colombia border?",
        },
        options: [
          { zh: "達連隘口的雨林沼澤地帶", en: "The rainforest and swamps of the Darién Gap" },
          { zh: "安地斯山的高山垭口", en: "A high Andean mountain pass" },
          { zh: "巴拿馬運河的航道區", en: "The Panama Canal shipping channel" },
          { zh: "加勒比海岸的紅樹林", en: "Caribbean coastal mangroves" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "從阿拉斯加到阿根廷的公路網在達連隘口中斷約百公里,茂密雨林與沼澤讓車輛無法通行,旅客須改乘船或飛機。",
          en: "The road network from Alaska to Argentina breaks for roughly 100 km at the Darién Gap, where dense jungle and swamp force travelers onto boats or planes.",
        },
      },
      {
        question: {
          zh: "2016 年巴拿馬運河完成擴建工程後,帶來什麼改變?",
          en: "What changed when the Panama Canal's expansion was completed in 2016?",
        },
        options: [
          {
            zh: "新船閘啟用,可通行載運量約三倍的新巴拿馬型巨輪",
            en: "New locks opened, admitting Neopanamax ships with roughly triple the container capacity",
          },
          {
            zh: "運河改為雙向同時免費通行",
            en: "The canal became free to transit in both directions",
          },
          {
            zh: "運河航道全面改為地下隧道",
            en: "The channel was rebuilt as an underwater tunnel",
          },
          {
            zh: "運河管理權移交給聯合國",
            en: "Canal administration was handed to the United Nations",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "擴建增設第三組更大的船閘,讓遠超舊尺寸限制的新巴拿馬型貨輪得以通行,鞏固運河在全球航運的地位。",
          en: "A third, larger set of locks lets Neopanamax vessels far beyond the old size limit transit, cementing the canal's role in global shipping.",
        },
      },
      {
        question: {
          zh: "船隻通過巴拿馬運河時,需要先被船閘抬升到哪個湖的高度?",
          en: "Ships transiting the Panama Canal are first lifted by locks to the level of which lake?",
        },
        options: [
          { zh: "加通湖", en: "Gatún Lake" },
          { zh: "尼加拉瓜湖", en: "Lake Nicaragua" },
          { zh: "馬拉開波湖", en: "Lake Maracaibo" },
          { zh: "阿蒂特蘭湖", en: "Lake Atitlán" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "船閘將船隻抬升約 26 公尺至人工築壩形成的加通湖,橫渡湖面後再由另一端船閘降回海平面。",
          en: "Locks raise ships about 26 m to the dam-created Gatún Lake; after crossing it, locks at the far end lower them back to sea level.",
        },
      },
    ],
  },
  BOL: {
    climate: {
      zh: "氣候由海拔主宰:拉巴斯與烏尤尼所在的高原海拔 3,600 至 4,000 公尺,日照強烈、夜間酷寒乾燥;東部低地則屬濕熱的熱帶氣候。位於南半球,11 至 3 月為雨季,烏尤尼「天空之鏡」多在此時出現。",
      en: "Altitude rules the climate: the altiplano around La Paz and Uyuni sits at 3,600–4,000 m, with intense sun and bitterly cold, dry nights, while the eastern lowlands are hot and tropical. In the Southern Hemisphere, the November–March wet season is when Uyuni's mirror effect usually appears.",
    },
    travelTips: [
      {
        zh: "拉巴斯與高原地區海拔逾 3,600 公尺,高山症風險高:行程宜由低海拔往高海拔安排,抵達初期避免劇烈活動。",
        en: "La Paz and the altiplano exceed 3,600 m and altitude sickness is a real risk: route your trip from low to high, and avoid exertion on arrival.",
      },
      {
        zh: "小城鎮提款機少且常故障,信用卡普及率低,務必準備足夠的玻利維亞諾現金。",
        en: "ATMs are scarce and unreliable in small towns and cards are rarely accepted — carry enough boliviano cash.",
      },
      {
        zh: "烏尤尼鹽沼團品質參差,選擇信譽良好的業者,並備妥太陽眼鏡與高係數防曬,鹽面反光極強。",
        en: "Uyuni tour quality varies widely — pick a reputable operator, and bring sunglasses and strong sunscreen against the blinding glare off the salt.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "玻利維亞憲法承認的官方語言數量在全球名列前茅,大約有多少種?",
          en: "Bolivia's constitution recognizes one of the world's largest sets of official languages — roughly how many?",
        },
        options: [
          {
            zh: "約 37 種(西班牙語加上 36 種原住民語言)",
            en: "About 37 — Spanish plus 36 Indigenous languages",
          },
          { zh: "約 11 種", en: "About 11" },
          { zh: "只有西班牙語 1 種", en: "Just one: Spanish" },
          { zh: "約 100 種", en: "About 100" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "2009 年新憲法將克丘亞語、艾馬拉語、瓜拉尼語等 36 種原住民語言與西班牙語並列為官方語言,彰顯多民族國家定位。",
          en: "The 2009 constitution elevated 36 Indigenous languages — including Quechua, Aymara, and Guaraní — alongside Spanish, reflecting the plurinational state.",
        },
      },
      {
        question: {
          zh: "的的喀喀湖上的烏羅斯人,以什麼獨特的方式居住在湖上?",
          en: "The Uros people of Lake Titicaca live on the lake in what unique way?",
        },
        options: [
          {
            zh: "住在用蘆葦編成的人工浮島上",
            en: "On floating islands woven from totora reeds",
          },
          { zh: "住在湖中的石造高腳屋", en: "In stone stilt houses in the lake" },
          { zh: "住在船屋船隊上", en: "Aboard fleets of houseboats" },
          { zh: "住在湖岸的洞穴中", en: "In caves along the lakeshore" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "烏羅斯人以湖中的托托拉蘆葦層層鋪疊出浮島,連房屋與小船也用蘆葦製成,島面須不斷補鋪新草維持浮力。",
          en: "They layer totora reeds into buoyant islands — houses and boats are reed-built too — constantly adding fresh reeds to keep everything afloat.",
        },
      },
      {
        question: {
          zh: "連接拉巴斯與永加斯地區的舊北永加斯路,曾得到什麼令人生畏的稱號?",
          en: "The old North Yungas Road linking La Paz to the Yungas earned what fearsome title?",
        },
        options: [
          { zh: "「世界最危險的公路」死亡之路", en: "The 'world's most dangerous road' — the Death Road" },
          { zh: "「世界最高的公路」", en: "The world's highest road" },
          { zh: "「世界最長的盤山公路」", en: "The world's longest switchback road" },
          { zh: "「世界最窄的雙向公路」", en: "The world's narrowest two-way road" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這條沿懸崖開鑿的狹窄土路每年曾奪走數百條人命;新公路通車後,舊路成為熱門的單車速降挑戰路線。",
          en: "The narrow cliff-edge track once claimed hundreds of lives a year; since a bypass opened, it has become a famous downhill mountain-biking route.",
        },
      },
    ],
  },
  URY: {
    climate: {
      zh: "全境屬溫和的溫帶氣候,四季分明而少極端:夏季溫暖、冬季涼爽偶有寒風,全年降雨平均,沒有高山與沙漠。位於南半球,季節與北半球相反,12 至 2 月的夏季是海灘旺季。",
      en: "Uniformly temperate with four mild seasons and few extremes: warm summers, cool winters with occasional cold winds, and rain spread evenly year-round — no mountains or deserts. Southern Hemisphere seasons are reversed, so the December–February summer is beach season.",
    },
    travelTips: [
      {
        zh: "治安在南美洲名列前茅,但蒙特維多市中心與港區仍有扒竊,基本防範不可少。",
        en: "Among South America's safest countries, though pickpocketing occurs in central Montevideo and the port area — keep basic precautions.",
      },
      {
        zh: "物價在南美偏高,接近歐洲水準;許多餐廳刷外國卡可享退稅優惠,結帳前可留意。",
        en: "Prices are high for South America — close to European levels; many restaurants offer tax rebates on foreign card payments, so check before paying.",
      },
      {
        zh: "馬黛茶是全民儀式:當地人共用一個茶壺輪流吸飲,受邀時直接飲用即可,別攪動吸管。",
        en: "Mate is a national ritual: locals share one gourd, passing it around — if offered, just drink and don't stir the straw.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "2010 年代擔任烏拉圭總統的穆希卡,為何被稱為「世界上最窮的總統」?",
          en: "Why was José Mujica, Uruguay's president in the 2010s, dubbed 'the world's poorest president'?",
        },
        options: [
          {
            zh: "他捐出大部分薪水,住農舍、開老舊金龜車",
            en: "He gave away most of his salary, living on a small farm and driving an old Beetle",
          },
          {
            zh: "他上任時國庫瀕臨破產",
            en: "The treasury was nearly bankrupt when he took office",
          },
          {
            zh: "他拒絕支領任何薪水",
            en: "He refused to accept any salary at all",
          },
          {
            zh: "他出身全國最貧困的省份",
            en: "He came from the country's poorest province",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "曾是游擊隊員的穆希卡任內捐出約九成薪水,不住總統官邸而住自家農舍,簡樸作風使他成為全球話題人物。",
          en: "A former guerrilla, Mujica donated roughly 90% of his salary and skipped the presidential palace for his own farmhouse — his austerity made him a global icon.",
        },
      },
      {
        question: {
          zh: "1950 年世界盃足球賽的「馬拉卡納打擊」,指的是什麼事件?",
          en: "What was the 'Maracanazo' at the 1950 FIFA World Cup?",
        },
        options: [
          {
            zh: "烏拉圭在里約馬拉卡納球場擊敗地主巴西奪冠",
            en: "Uruguay beat hosts Brazil at Rio's Maracanã to win the title",
          },
          {
            zh: "巴西以史上最大比分獲勝",
            en: "Brazil won by the biggest margin in Cup history",
          },
          {
            zh: "決賽因暴動被迫中止",
            en: "The final was abandoned amid rioting",
          },
          {
            zh: "馬拉卡納球場在賽前倒塌",
            en: "The Maracanã collapsed before the match",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "在近二十萬名主場觀眾面前,烏拉圭以 2 比 1 逆轉只需和局就能奪冠的巴西,成為世界盃史上最著名的冷門之一。",
          en: "Before a crowd near 200,000, Uruguay came from behind to win 2–1 over a Brazil side needing only a draw — one of football's most famous upsets.",
        },
      },
      {
        question: {
          zh: "烏拉圭的電力供應以什麼著稱,常被列為全球典範?",
          en: "Uruguay's electricity supply is renowned for what, often cited as a global model?",
        },
        options: [
          {
            zh: "九成以上來自水力與風力等再生能源",
            en: "Over 90% comes from renewables like hydro and wind",
          },
          {
            zh: "完全依賴核能發電",
            en: "It relies entirely on nuclear power",
          },
          {
            zh: "全部電力由鄰國進口",
            en: "All power is imported from neighbors",
          },
          {
            zh: "以燃煤發電成本全球最低",
            en: "It has the world's cheapest coal power",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "烏拉圭在 2010 年代大舉投資風電,搭配既有水力,多數年份再生能源發電占比逾九成,轉型未靠政府補貼而受國際稱道。",
          en: "Heavy 2010s investment in wind, atop existing hydro, pushed renewables above 90% of generation in most years — a transition achieved without subsidies and widely praised.",
        },
      },
    ],
  },
};
