import type { CountryExtras } from "../types";

export const EUROPE_EXTRAS: Record<string, CountryExtras> = {
  GBR: {
    climate: {
      zh: "溫帶海洋性氣候,受墨西哥灣流調節,冬暖夏涼但天氣多變,一日之內晴雨交替是常態。全年有雨,西部與蘇格蘭高地更為濕潤。最佳旅遊季為五月至九月,日照長、氣溫舒適。",
      en: "A temperate oceanic climate moderated by the Gulf Stream: mild winters, cool summers, and famously changeable weather with sun and rain in a single day. Rain falls year-round, heaviest in the west and the Scottish Highlands. May to September offers long days and pleasant temperatures.",
    },
    travelTips: [
      {
        zh: "英國車輛靠左行駛,過馬路先看右邊;倫敦許多路口地面漆有「Look Right」提醒。",
        en: "Traffic drives on the left — look right first when crossing; many London crossings have 'Look Right' painted on the road.",
      },
      {
        zh: "倫敦地鐵與公車直接用感應式信用卡或 Oyster 卡付費,單程紙票貴很多;公車不收現金。",
        en: "Pay for the Tube and buses with a contactless card or Oyster card — paper singles cost far more, and buses take no cash.",
      },
      {
        zh: "餐廳帳單常已含 12.5% 服務費,結帳前先看清楚,已含就不必再給小費。",
        en: "Restaurant bills often already include a 12.5% service charge — check before paying; no extra tip is needed if it is there.",
      },
      {
        zh: "天氣說變就變,隨身帶輕便雨具並採洋蔥式穿搭,夏天也可能只有十幾度。",
        en: "Pack a compact umbrella and dress in layers — the weather turns quickly, and even summer days can stay in the teens Celsius.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "英國最長的河流是哪一條?",
          en: "What is the longest river in the United Kingdom?",
        },
        options: [
          { zh: "賽文河", en: "The Severn" },
          { zh: "泰晤士河", en: "The Thames" },
          { zh: "特倫特河", en: "The Trent" },
          { zh: "克萊德河", en: "The Clyde" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "賽文河全長約 354 公里,發源於威爾斯,長度略勝泰晤士河;泰晤士河雖較有名,卻只是第二長。",
          en: "The Severn runs about 354 kilometers from the Welsh mountains, edging out the more famous Thames, which is only second longest.",
        },
      },
      {
        question: {
          zh: "羅馬帝國在不列顛北部修築哈德良長城,主要是為了防禦誰?",
          en: "The Romans built Hadrian's Wall across northern Britain mainly to defend against whom?",
        },
        options: [
          {
            zh: "北方喀里多尼亞的部族",
            en: "The tribes of Caledonia to the north",
          },
          { zh: "渡海來襲的維京人", en: "Viking raiders from across the sea" },
          { zh: "高盧的凱爾特部族", en: "Celtic tribes from Gaul" },
          { zh: "日耳曼的撒克遜人", en: "Saxons from Germania" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西元 122 年哈德良皇帝下令建牆,橫貫大不列顛島約 118 公里,標誌羅馬帝國的西北邊界;維京人入侵是數百年後的事。",
          en: "Emperor Hadrian ordered the 118-kilometer wall in AD 122 to mark Rome's northwest frontier — Viking raids came centuries later.",
        },
      },
      {
        question: {
          zh: "英國國旗「聯合旗」的圖案中,沒有納入哪個構成國的代表元素?",
          en: "The design of the UK's Union Flag includes no element representing which constituent country?",
        },
        options: [
          { zh: "威爾斯", en: "Wales" },
          { zh: "蘇格蘭", en: "Scotland" },
          { zh: "北愛爾蘭", en: "Northern Ireland" },
          { zh: "英格蘭", en: "England" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "聯合旗由英格蘭聖喬治十字、蘇格蘭聖安德魯十字與愛爾蘭聖派翠克十字疊成;威爾斯因當時已併入英格蘭王國而未入旗。",
          en: "The flag combines England's St George's Cross, Scotland's St Andrew's Cross, and Ireland's St Patrick's Cross — Wales, already annexed to the English crown, was left out.",
        },
      },
    ],
  },
  FRA: {
    climate: {
      zh: "氣候多元:西部沿海屬溫帶海洋性,東部偏大陸性,南部地中海沿岸夏乾冬雨、陽光充足,山區則冬季多雪。春季與初秋(五、六月與九、十月)氣候宜人又避開人潮,是造訪法國的最佳時節。",
      en: "France spans several climates: oceanic along the west coast, more continental in the east, Mediterranean with dry sunny summers in the south, and snowy winters in the mountains. Late spring and early autumn — May-June and September-October — offer the best weather with fewer crowds.",
    },
    travelTips: [
      {
        zh: "巴黎地鐵與熱門景點扒手活躍,留意「請你簽名連署」或突然搭話的陌生人,那常是分散注意力的手法。",
        en: "Pickpockets work the Paris metro and major sights — petition clipboards and sudden chatty strangers are classic distraction tricks.",
      },
      {
        zh: "進店或問路先說「Bonjour」再開口,是基本禮貌;直接切入問題容易被認為無禮。",
        en: "Always open with 'Bonjour' before asking anything in shops or on the street — skipping the greeting comes across as rude.",
      },
      {
        zh: "法國餐廳帳單依法已含服務費(service compris),小費非必須,滿意時留幾枚零錢即可。",
        en: "Restaurant bills legally include service (service compris); tipping is optional — a little loose change suffices for good service.",
      },
      {
        zh: "許多博物館每週固定休館一天(如羅浮宮週二休),熱門景點請提前線上購票並確認開放日。",
        en: "Many museums close one day a week (the Louvre closes Tuesdays) — book popular sights online and check opening days in advance.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "法國境內最長的河流是哪一條?",
          en: "What is the longest river in France?",
        },
        options: [
          { zh: "羅亞爾河", en: "The Loire" },
          { zh: "塞納河", en: "The Seine" },
          { zh: "隆河", en: "The Rhone" },
          { zh: "加隆河", en: "The Garonne" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "羅亞爾河全長約 1006 公里,是法國第一長河,河谷兩岸的城堡群已列入世界遺產;流經巴黎的塞納河名氣大但長度不及。",
          en: "The Loire flows about 1,006 kilometers, France's longest, its valley of chateaux a World Heritage site — the famous Seine is considerably shorter.",
        },
      },
      {
        question: {
          zh: "西歐最高峰白朗峰位於法國與哪個國家的交界?",
          en: "Mont Blanc, Western Europe's highest peak, stands on France's border with which country?",
        },
        options: [
          { zh: "義大利", en: "Italy" },
          { zh: "瑞士", en: "Switzerland" },
          { zh: "西班牙", en: "Spain" },
          { zh: "德國", en: "Germany" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "白朗峰海拔約 4806 公尺,橫跨法義邊界,山下的白朗峰隧道連接兩國;瑞士雖近在咫尺,國界並未通過峰頂。",
          en: "Mont Blanc rises to about 4,806 meters on the Franco-Italian border, with the Mont Blanc Tunnel beneath it — Switzerland is close by, but the border over the summit is with Italy.",
        },
      },
      {
        question: {
          zh: "法蘭西共和國的國家格言是什麼?",
          en: "What is the national motto of the French Republic?",
        },
        options: [
          { zh: "「自由、平等、博愛」", en: "'Liberty, Equality, Fraternity'" },
          { zh: "「團結就是力量」", en: "'Unity Makes Strength'" },
          { zh: "「天佑吾王」", en: "'God Save the King'" },
          { zh: "「秩序與進步」", en: "'Order and Progress'" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「Liberté, Égalité, Fraternité」源於法國大革命,如今鐫刻在全法的公共建築上;「團結就是力量」是比利時格言,「秩序與進步」則屬巴西。",
          en: "'Liberte, Egalite, Fraternite' dates from the Revolution and is inscribed on public buildings across France; 'Unity Makes Strength' belongs to Belgium and 'Order and Progress' to Brazil.",
        },
      },
    ],
  },
  DEU: {
    climate: {
      zh: "溫帶氣候,西北部受海洋影響較溫和多雨,往東南漸趨大陸性,冬冷夏暖,南部阿爾卑斯山區冬季多雪。五月至九月天氣穩定適合旅遊,十二月則可體驗各地的耶誕市集風情。",
      en: "A temperate climate — milder and wetter in the maritime northwest, increasingly continental toward the southeast, with cold winters, warm summers, and snowy Alpine winters in the south. May to September brings the most settled weather, while December is Christmas-market season.",
    },
    travelTips: [
      {
        zh: "德國商店與超市週日幾乎全面公休,只有車站與加油站的小店營業,採買請提前安排。",
        en: "Shops and supermarkets close almost universally on Sundays — only stores in stations and petrol stations stay open, so plan your shopping ahead.",
      },
      {
        zh: "不少小餐館與麵包店只收現金或本地金融卡,身上最好備些歐元現金。",
        en: "Many small restaurants and bakeries take only cash or local debit cards — keep some euros in cash on hand.",
      },
      {
        zh: "大眾運輸採信任制,上車前記得買票並打印啟用,查票員便衣稽查,逃票罰款 60 歐元起。",
        en: "Public transport runs on an honor system — buy and validate your ticket before boarding; plain-clothes inspectors fine fare-dodgers 60 euros or more.",
      },
      {
        zh: "寶特瓶與罐裝飲料含押瓶費(Pfand),空瓶拿回超市回收機可退 8 至 25 歐分。",
        en: "Bottles and cans carry a deposit (Pfand) — return empties to supermarket machines to get 8 to 25 cents back each.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "德意志聯邦共和國由多少個聯邦州組成?",
          en: "The Federal Republic of Germany is made up of how many federal states?",
        },
        options: [
          { zh: "16 個", en: "16" },
          { zh: "12 個", en: "12" },
          { zh: "9 個", en: "9" },
          { zh: "20 個", en: "20" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩德統一後共 16 個邦,其中柏林、漢堡與不來梅是三個城市州;9 個州是鄰國奧地利的數目。",
          en: "Reunified Germany has 16 states, including the three city-states of Berlin, Hamburg, and Bremen; nine is the count for neighboring Austria.",
        },
      },
      {
        question: {
          zh: "德國的最高峰是哪一座山?",
          en: "What is the highest mountain in Germany?",
        },
        options: [
          { zh: "楚格峰", en: "The Zugspitze" },
          { zh: "瓦茨曼山", en: "The Watzmann" },
          { zh: "費爾德山", en: "The Feldberg" },
          { zh: "布羅肯山", en: "The Brocken" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "楚格峰海拔 2962 公尺,位於巴伐利亞與奧地利邊界,有齒軌火車與纜車直達峰頂;瓦茨曼山是德國第三高峰。",
          en: "The Zugspitze rises 2,962 meters on the Bavarian-Austrian border, reachable by cog railway and cable car; the Watzmann ranks third.",
        },
      },
      {
        question: {
          zh: "1949 至 1990 年間,西德(德意志聯邦共和國)的首都設在哪座城市?",
          en: "From 1949 to 1990, which city served as the capital of West Germany?",
        },
        options: [
          { zh: "波昂", en: "Bonn" },
          { zh: "法蘭克福", en: "Frankfurt" },
          { zh: "慕尼黑", en: "Munich" },
          { zh: "漢堡", en: "Hamburg" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "柏林被分割且深處東德境內,西德選擇萊茵河畔的大學城波昂為臨時首都;統一後 1991 年國會表決才遷回柏林。",
          en: "With Berlin divided and deep inside East Germany, West Germany chose the Rhine university town of Bonn as provisional capital; parliament voted to return to Berlin only in 1991.",
        },
      },
    ],
  },
  ITA: {
    climate: {
      zh: "南北差異大:沿海與南部屬地中海型氣候,夏季炎熱乾燥、冬季溫和多雨;北部波河平原較具大陸性,阿爾卑斯山區冬季嚴寒多雪。四至六月與九、十月氣候舒適,是避開盛夏酷熱與人潮的最佳旅遊季。",
      en: "Climate varies sharply north to south: Mediterranean along the coasts and in the south with hot dry summers and mild wet winters, more continental on the northern Po plain, and cold snowy winters in the Alps. April-June and September-October are ideal, dodging the summer heat and crowds.",
    },
    travelTips: [
      {
        zh: "搭乘區域火車須在月台的機器打票啟用,未打票視同逃票會被罰款;高鐵對號票則不必。",
        en: "Validate regional train tickets at the platform machines before boarding — unvalidated tickets count as fare-dodging and draw fines; reserved high-speed tickets need no stamping.",
      },
      {
        zh: "進入教堂需遮蓋肩膀與膝蓋,聖彼得大教堂、米蘭大教堂等執行嚴格,夏天請隨身帶件披肩。",
        en: "Churches require covered shoulders and knees — St Peter's and Milan's Duomo enforce it strictly, so carry a shawl in summer.",
      },
      {
        zh: "餐廳帳單常有每人 1 至 3 歐元的「座位費」(coperto),屬合法慣例;在吧檯站著喝咖啡比坐下便宜。",
        en: "A per-person cover charge (coperto) of 1-3 euros on restaurant bills is standard and legal; coffee at the bar counter costs less than at a table.",
      },
      {
        zh: "羅馬、米蘭等地觀光區慎防扒手與強行送「免費」手環、玫瑰再索費的把戲,委婉拒絕即可。",
        en: "In tourist areas of Rome and Milan, watch for pickpockets and the 'free' bracelet or rose trick that ends in demands for money — a firm no works.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "歐洲最高的活火山埃特納火山,位於義大利的哪座島嶼上?",
          en: "Mount Etna, Europe's highest active volcano, stands on which Italian island?",
        },
        options: [
          { zh: "西西里島", en: "Sicily" },
          { zh: "薩丁尼亞島", en: "Sardinia" },
          { zh: "厄爾巴島", en: "Elba" },
          { zh: "卡布里島", en: "Capri" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "埃特納聳立於西西里島東岸,海拔約 3300 公尺且隨噴發變動,至今仍頻繁活動,2013 年列入世界遺產。",
          en: "Etna towers over eastern Sicily at roughly 3,300 meters — the height shifts with eruptions — and remains highly active; it became a World Heritage site in 2013.",
        },
      },
      {
        question: {
          zh: "義大利最長的河流是哪一條?",
          en: "What is the longest river in Italy?",
        },
        options: [
          { zh: "波河", en: "The Po" },
          { zh: "台伯河", en: "The Tiber" },
          { zh: "阿諾河", en: "The Arno" },
          { zh: "阿迪傑河", en: "The Adige" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "波河全長約 652 公里,橫貫北部平原注入亞得里亞海,流域是義大利的農工業心臟;流經羅馬的台伯河僅為第三長。",
          en: "The Po runs about 652 kilometers across the northern plain to the Adriatic, its basin Italy's agricultural and industrial heartland; Rome's Tiber is only third longest.",
        },
      },
      {
        question: {
          zh: "1861 年主導義大利統一、其國王成為首任義大利國王的是哪個王國?",
          en: "Which kingdom led Italian unification in 1861, its king becoming the first King of Italy?",
        },
        options: [
          { zh: "薩丁尼亞王國", en: "The Kingdom of Sardinia" },
          { zh: "兩西西里王國", en: "The Kingdom of the Two Sicilies" },
          { zh: "教宗國", en: "The Papal States" },
          { zh: "托斯卡納大公國", en: "The Grand Duchy of Tuscany" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "以皮埃蒙特為核心的薩丁尼亞王國,在首相加富爾運籌下完成統一,國王維托里奧·埃馬努埃萊二世成為義大利首任國王。",
          en: "The Piedmont-based Kingdom of Sardinia, steered by prime minister Cavour, drove unification, and its king Victor Emmanuel II became Italy's first monarch.",
        },
      },
    ],
  },
  ESP: {
    climate: {
      zh: "地中海沿岸夏季炎熱乾燥、冬季溫和;中部高原屬大陸性氣候,夏酷熱冬寒冷;北部大西洋沿岸則涼爽多雨、綠意盎然。內陸盛夏常超過 40 度,春季與秋季是遊覽全境最舒適的季節。",
      en: "Mediterranean coasts have hot dry summers and mild winters; the central plateau is continental with scorching summers and cold winters; the Atlantic north stays cool, rainy, and green. Inland heat often tops 40°C in high summer, making spring and autumn the most comfortable seasons.",
    },
    travelTips: [
      {
        zh: "用餐時間比多數國家晚:午餐約下午兩點、晚餐九點後才開始,許多餐廳晚上八點前根本不開門。",
        en: "Meal times run late: lunch around 2 pm and dinner after 9 pm — many restaurants simply do not open before 8 in the evening.",
      },
      {
        zh: "午後兩點至五點不少小店與部分景點午休(siesta 傳統),行程請避開這段空窗。",
        en: "Many small shops and some sights close from about 2 to 5 pm in the siesta tradition — plan around the afternoon lull.",
      },
      {
        zh: "巴塞隆納蘭布拉大道與馬德里地鐵是扒手熱區,背包背前面、手機不離手。",
        en: "Barcelona's La Rambla and the Madrid metro are pickpocket hotspots — wear bags in front and keep phones in hand.",
      },
      {
        zh: "小費文化淡薄,帳單多已含服務,滿意時湊個整數或留 5% 以內即可。",
        en: "Tipping is minimal — service is generally included, so rounding up or leaving under 5% for good service is plenty.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "西班牙的最高峰泰德峰位於哪裡?",
          en: "Where is Mount Teide, the highest peak in Spain?",
        },
        options: [
          {
            zh: "加那利群島的特內里費島",
            en: "On Tenerife in the Canary Islands",
          },
          { zh: "庇里牛斯山脈", en: "In the Pyrenees" },
          { zh: "內華達山脈", en: "In the Sierra Nevada" },
          { zh: "坎塔布里亞山脈", en: "In the Cantabrian Mountains" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "泰德峰是海拔 3718 公尺的火山,雄踞大西洋上的特內里費島;西班牙本土最高峰則是內華達山脈的穆拉森峰(3479 公尺)。",
          en: "Teide is a 3,718-meter volcano on the Atlantic island of Tenerife; the mainland's highest point is Mulhacen (3,479 m) in the Sierra Nevada.",
        },
      },
      {
        question: {
          zh: "西班牙在北非海岸擁有哪兩座自治市?",
          en: "Spain holds which two autonomous cities on the North African coast?",
        },
        options: [
          { zh: "休達與梅利利亞", en: "Ceuta and Melilla" },
          { zh: "丹吉爾與卡薩布蘭卡", en: "Tangier and Casablanca" },
          { zh: "奧蘭與阿爾及爾", en: "Oran and Algiers" },
          { zh: "拉巴特與亞加迪爾", en: "Rabat and Agadir" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "休達與梅利利亞自 15、16 世紀起由西班牙統治,是歐盟在非洲大陸僅有的領土,摩洛哥至今仍聲索主權。",
          en: "Ceuta and Melilla have been Spanish since the 15th-16th centuries and are the EU's only territory on mainland Africa; Morocco still claims both.",
        },
      },
      {
        question: {
          zh: "西班牙北部的巴斯克語,在語言學上有什麼特殊地位?",
          en: "What makes the Basque language of northern Spain remarkable to linguists?",
        },
        options: [
          {
            zh: "是不屬於任何已知語系的孤立語言",
            en: "It is a language isolate, unrelated to any known family",
          },
          {
            zh: "是拉丁語最古老的直系後代",
            en: "It is the oldest direct descendant of Latin",
          },
          {
            zh: "與阿拉伯語同屬一個語族",
            en: "It belongs to the same family as Arabic",
          },
          {
            zh: "是西班牙語的一種古老方言",
            en: "It is an archaic dialect of Spanish",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "巴斯克語(Euskara)與印歐語系毫無親緣,普遍認為是印歐民族抵達前歐洲語言的孑遺,起源至今成謎。",
          en: "Basque (Euskara) has no kinship with Indo-European tongues and is widely thought to be a survivor of pre-Indo-European Europe — its origins remain a mystery.",
        },
      },
    ],
  },
  PRT: {
    climate: {
      zh: "地中海型氣候帶大西洋色彩:夏季晴朗乾燥、冬季溫和多雨,南部阿爾加維全年陽光充足,北部較涼爽濕潤。三月至十月都適合造訪,春秋兩季氣溫宜人、遊客較少,是最理想的旅遊時段。",
      en: "A Mediterranean climate with an Atlantic touch: dry sunny summers and mild rainy winters, with the Algarve in the south sunny year-round and the north cooler and wetter. March through October all works, but spring and autumn combine pleasant weather with thinner crowds.",
    },
    travelTips: [
      {
        zh: "里斯本坡陡路滑,石板路面雨天尤其濕滑,務必穿好走的鞋;搭 28 號電車請提防扒手。",
        en: "Lisbon's steep cobbled streets get slippery, especially in rain — wear solid shoes, and mind pickpockets on the famous Tram 28.",
      },
      {
        zh: "餐廳開胃小點(麵包、橄欖等 couvert)並非免費,動了就計費,不需要可請店家收走。",
        en: "The bread, olives, and nibbles set on your table (couvert) are not free — you pay if you touch them, but you can ask for them to be taken away.",
      },
      {
        zh: "小費非必須,滿意時留 5% 至 10% 即可;在吧檯站著喝咖啡通常不到一歐元。",
        en: "Tipping is optional — 5-10% for good service is generous, and an espresso at the counter usually costs under a euro.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1494 年葡萄牙與西班牙簽訂哪項條約,劃線瓜分歐洲以外的新世界?",
          en: "In 1494 Portugal and Spain signed which treaty, drawing a line to divide the non-European world between them?",
        },
        options: [
          { zh: "托爾德西里亞斯條約", en: "The Treaty of Tordesillas" },
          { zh: "西發里亞條約", en: "The Peace of Westphalia" },
          { zh: "烏得勒支條約", en: "The Treaty of Utrecht" },
          { zh: "維也納會議最終議定書", en: "The Final Act of the Congress of Vienna" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "在教宗調解下,兩國以大西洋上的子午線瓜分新發現的土地;線以東歸葡萄牙,巴西因此成為葡語國家。",
          en: "Brokered by the pope, the treaty split newly found lands along an Atlantic meridian — the east went to Portugal, which is why Brazil speaks Portuguese.",
        },
      },
      {
        question: {
          zh: "1822 年宣布巴西脫離葡萄牙獨立、並成為巴西首任皇帝的是誰?",
          en: "Who declared Brazil's independence from Portugal in 1822 and became its first emperor?",
        },
        options: [
          { zh: "佩德羅一世", en: "Pedro I" },
          { zh: "西蒙·玻利瓦", en: "Simon Bolivar" },
          { zh: "聖馬丁將軍", en: "Jose de San Martin" },
          { zh: "若昂六世", en: "Joao VI" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "葡萄牙王儲佩德羅留守巴西攝政,1822 年發出「不獨立毋寧死」的呼聲,自立為巴西皇帝佩德羅一世;玻利瓦與聖馬丁解放的是西屬美洲。",
          en: "Crown prince Pedro, regent in Brazil, issued his 'independence or death' cry in 1822 and became Emperor Pedro I; Bolivar and San Martin liberated Spanish America.",
        },
      },
      {
        question: {
          zh: "葡萄牙是全球最大的哪種產品生產國?",
          en: "Portugal is the world's largest producer of which product?",
        },
        options: [
          { zh: "軟木", en: "Cork" },
          { zh: "橄欖油", en: "Olive oil" },
          { zh: "柑橘", en: "Citrus fruit" },
          { zh: "葵花油", en: "Sunflower oil" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "全球約半數軟木產自葡萄牙的栓皮櫟林,樹皮每九年左右才能採剝一次,製成酒瓶軟木塞、建材與飾品。",
          en: "About half the world's cork comes from Portugal's cork-oak forests — the bark is harvested only every nine years or so, for wine stoppers, building materials, and crafts.",
        },
      },
    ],
  },
  NLD: {
    climate: {
      zh: "溫帶海洋性氣候,受北海影響全年溫和多風,降雨平均分布於四季,天氣變化快。冬季少見嚴寒,夏季涼爽宜人。四、五月鬱金香盛開是招牌季節,六月至八月日照最長,最適合單車與運河之旅。",
      en: "A temperate maritime climate shaped by the North Sea: mild, windy, and changeable, with rain spread across all seasons. Winters are rarely severe and summers stay pleasantly cool. April-May is tulip season, while June to August offers the longest days for cycling and canal trips.",
    },
    travelTips: [
      {
        zh: "腳踏車道車速快且路權優先,行人切勿走在紅色鋪面的自行車道上,過馬路前多看兩眼。",
        en: "Bike lanes are fast and cyclists have priority — never walk in the red-paved lanes, and double-check before crossing.",
      },
      {
        zh: "許多超市、咖啡店只收金融卡或感應支付,甚至不收現金與部分外國信用卡,建議備妥可感應的卡片。",
        en: "Many supermarkets and cafes are card-only — some take no cash and reject certain foreign credit cards, so carry a contactless-enabled card.",
      },
      {
        zh: "安妮之家、梵谷博物館等熱門景點只賣線上時段票,常提前數週售罄,務必及早預約。",
        en: "Top sights like the Anne Frank House and Van Gogh Museum sell timed tickets online only and can sell out weeks ahead — book early.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "常被用來代稱荷蘭的「Holland」,嚴格來說指的是什麼?",
          en: "Strictly speaking, what does 'Holland' — often used for the whole country — actually refer to?",
        },
        options: [
          {
            zh: "北荷蘭與南荷蘭兩個省份",
            en: "Just the two provinces of North and South Holland",
          },
          {
            zh: "荷蘭王國的正式國名",
            en: "The official name of the Kingdom of the Netherlands",
          },
          {
            zh: "荷蘭語地區的統稱",
            en: "A collective term for all Dutch-speaking regions",
          },
          {
            zh: "荷蘭最大的一座島嶼",
            en: "The largest island of the Netherlands",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "Holland 僅是 12 省中的兩省,因黃金時代最富庶而被以偏概全;2020 年起政府對外宣傳一律改用正式名稱 Netherlands。",
          en: "Holland is only two of the twelve provinces — the richest in the Golden Age, hence the shorthand; since 2020 the government has branded the country exclusively as the Netherlands.",
        },
      },
      {
        question: {
          zh: "荷蘭最年輕的省份幾乎全由 20 世紀填海造陸而成,它是哪一省?",
          en: "The youngest Dutch province was almost entirely reclaimed from the sea in the 20th century — which is it?",
        },
        options: [
          { zh: "弗萊福蘭省", en: "Flevoland" },
          { zh: "澤蘭省", en: "Zeeland" },
          { zh: "菲士蘭省", en: "Friesland" },
          { zh: "林堡省", en: "Limburg" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "須德海工程築堤抽乾海水造出弗萊福蘭,1986 年正式設省,是世界最大的人工島群之一,居民多住在海平面以下。",
          en: "The Zuiderzee Works diked and drained the sea to create Flevoland, made a province in 1986 — among the world's largest artificial landmasses, mostly below sea level.",
        },
      },
      {
        question: {
          zh: "1630 年代荷蘭的「鬱金香狂熱」,常被視為歷史上最早有紀錄的什麼事件?",
          en: "The Dutch 'tulip mania' of the 1630s is often cited as history's first recorded example of what?",
        },
        options: [
          { zh: "投機性資產泡沫", en: "A speculative asset bubble" },
          { zh: "惡性通貨膨脹", en: "Hyperinflation" },
          { zh: "銀行擠兌風暴", en: "A bank run" },
          { zh: "股市內線交易醜聞", en: "An insider-trading scandal" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "稀有鬱金香球莖價格一度飆到工匠數年薪資,1637 年 2 月市場瞬間崩盤,成為投機泡沫的經典教科書案例。",
          en: "Rare tulip bulbs briefly traded for several years of a craftsman's wages before the market collapsed in February 1637 — the textbook case of a speculative bubble.",
        },
      },
    ],
  },
  BEL: {
    climate: {
      zh: "溫帶海洋性氣候,全年溫和濕潤、多雲多雨,天氣陰晴不定,冬季少嚴寒、夏季少酷暑。五月至九月氣候最穩定,適合漫步古城與運河;十二月的耶誕市集則別有節慶氣氛,但需備妥防寒衣物。",
      en: "A temperate maritime climate: mild and damp year-round, with plenty of clouds, rain, and changeable skies, but rarely harsh winters or hot summers. May to September is the most settled stretch for exploring old towns and canals, while December's Christmas markets are festive but chilly.",
    },
    travelTips: [
      {
        zh: "北部法蘭德斯說荷語、南部瓦隆說法語,同一城市常有兩種名字(如 Antwerpen/Anvers),查地圖與車票時多留意。",
        en: "Flanders in the north speaks Dutch and Wallonia in the south French, so cities often carry two names (Antwerpen/Anvers) — watch for both on maps and train tickets.",
      },
      {
        zh: "布魯塞爾南站(Gare du Midi)一帶扒手活躍,夜間人流較雜,轉車時看好行李。",
        en: "Pickpockets are active around Brussels-Midi station and the area gets rough at night — keep luggage close when transferring.",
      },
      {
        zh: "薯條專賣店(friterie)是在地平民美食,傳統吃法配美乃滋;餐廳帳單已含服務費,小費隨意。",
        en: "Frites from a friterie are the classic local snack, traditionally with mayonnaise; restaurant bills include service, so tipping is entirely optional.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "除了荷蘭語與法語之外,比利時的第三種官方語言是什麼?",
          en: "Besides Dutch and French, what is Belgium's third official language?",
        },
        options: [
          { zh: "德語", en: "German" },
          { zh: "盧森堡語", en: "Luxembourgish" },
          { zh: "弗里斯蘭語", en: "Frisian" },
          { zh: "英語", en: "English" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "比利時東部有約七萬多人的德語社群,一戰後自德國劃入,德語因此與荷語、法語並列三大官方語言。",
          en: "Eastern Belgium is home to a German-speaking community of about 77,000, in areas transferred from Germany after WWI — making German the third official language.",
        },
      },
      {
        question: {
          zh: "1815 年終結拿破崙帝國的滑鐵盧戰役,發生在今日比利時哪座城市附近?",
          en: "The 1815 Battle of Waterloo, which ended Napoleon's empire, was fought near which present-day Belgian city?",
        },
        options: [
          { zh: "布魯塞爾", en: "Brussels" },
          { zh: "安特衛普", en: "Antwerp" },
          { zh: "列日", en: "Liege" },
          { zh: "根特", en: "Ghent" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "滑鐵盧位於布魯塞爾以南約 15 公里,威靈頓與布呂歇爾的聯軍在此擊潰拿破崙,戰場上的獅子丘至今可供登覽。",
          en: "Waterloo lies about 15 kilometers south of Brussels, where Wellington and Blucher's armies crushed Napoleon; the Lion's Mound still marks the battlefield.",
        },
      },
      {
        question: {
          zh: "比利時樂器工匠阿道夫·薩克斯在 1840 年代發明了哪種樂器?",
          en: "Belgian instrument maker Adolphe Sax invented which instrument in the 1840s?",
        },
        options: [
          { zh: "薩克斯風", en: "The saxophone" },
          { zh: "豎笛", en: "The clarinet" },
          { zh: "小號", en: "The trumpet" },
          { zh: "手風琴", en: "The accordion" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "薩克斯生於比利時迪南,1846 年在巴黎為薩克斯風取得專利,這種銅管與木管的混血樂器後來成為爵士樂的靈魂。",
          en: "Born in Dinant, Sax patented the saxophone in Paris in 1846 — a hybrid of brass and woodwind that went on to become the soul of jazz.",
        },
      },
    ],
  },
  CHE: {
    climate: {
      zh: "氣候隨海拔劇烈變化:低地湖區四季分明、夏暖冬涼,阿爾卑斯山區終年積雪,南部提契諾則帶地中海風情。六月至九月適合健行與湖泊度假,十二月至三月是滑雪旺季,山區天氣瞬息萬變請注意保暖。",
      en: "Climate shifts dramatically with altitude: the lowland lake regions have four distinct seasons, the high Alps keep snow year-round, and Ticino in the south feels almost Mediterranean. June to September suits hiking and lakes, December to March is ski season — and mountain weather can turn in minutes.",
    },
    travelTips: [
      {
        zh: "物價全歐數一數二,礦泉水與簡餐都貴;好在自來水與街頭噴泉多可直接飲用,自備水瓶能省不少。",
        en: "Prices are among Europe's highest, even for water and simple meals — happily, tap water and most street fountains are drinkable, so carry a bottle.",
      },
      {
        zh: "瑞士不用歐元而用瑞士法郎,部分商家收歐元但以不利匯率找零法郎,建議直接刷卡或換少量法郎。",
        en: "Switzerland uses the Swiss franc, not the euro — some shops take euros but give change in francs at poor rates, so pay by card or change a little cash.",
      },
      {
        zh: "多日搭車遊覽可考慮 Swiss Travel Pass,涵蓋火車、郵政巴士、遊船與多數博物館,單買車票很貴。",
        en: "For multi-day trips consider the Swiss Travel Pass, covering trains, PostBuses, boats, and most museums — individual tickets add up fast.",
      },
      {
        zh: "商店週日普遍公休,連鎖超市也不例外,只有車站商場照常營業,週末採買請提前。",
        en: "Shops, including supermarket chains, close on Sundays — only stores in railway stations stay open, so stock up ahead of the weekend.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "日內瓦近郊哪個跨越瑞士與法國邊界的研究機構,運轉著世界最大的粒子加速器?",
          en: "Which research organization straddling the Swiss-French border near Geneva runs the world's largest particle accelerator?",
        },
        options: [
          {
            zh: "歐洲核子研究組織(CERN)",
            en: "CERN, the European Organization for Nuclear Research",
          },
          {
            zh: "國際原子能總署(IAEA)",
            en: "The International Atomic Energy Agency (IAEA)",
          },
          { zh: "馬克斯·普朗克研究院", en: "The Max Planck Society" },
          { zh: "費米國家實驗室", en: "Fermilab" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "CERN 的大型強子對撞機周長 27 公里,深埋於兩國邊界地下;1989 年伯納斯-李也是在這裡發明了全球資訊網。",
          en: "CERN's Large Hadron Collider loops 27 kilometers beneath the border; it is also where Tim Berners-Lee invented the World Wide Web in 1989.",
        },
      },
      {
        question: {
          zh: "哪兩條歐洲大河都發源於瑞士的阿爾卑斯山區?",
          en: "Which two great European rivers both rise in the Swiss Alps?",
        },
        options: [
          { zh: "萊茵河與隆河", en: "The Rhine and the Rhone" },
          { zh: "多瑙河與易北河", en: "The Danube and the Elbe" },
          { zh: "塞納河與羅亞爾河", en: "The Seine and the Loire" },
          { zh: "波河與台伯河", en: "The Po and the Tiber" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "萊茵河與隆河的源頭都在聖哥達山區附近,一北流入北海、一南入地中海,瑞士因此被稱為「歐洲水塔」。",
          en: "Both the Rhine and the Rhone spring from near the Gotthard massif, flowing to the North Sea and the Mediterranean — earning Switzerland the name 'water tower of Europe'.",
        },
      },
      {
        question: {
          zh: "瑞士近衛隊自 1506 年起,一直負責守衛哪位人物的安全?",
          en: "Since 1506, the Swiss Guard has protected which figure?",
        },
        options: [
          { zh: "羅馬教宗", en: "The Pope" },
          { zh: "法國國王", en: "The King of France" },
          { zh: "神聖羅馬帝國皇帝", en: "The Holy Roman Emperor" },
          { zh: "威尼斯總督", en: "The Doge of Venice" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "教宗儒略二世於 1506 年招募瑞士傭兵組成近衛隊,至今仍由瑞士天主教徒擔任,是梵蒂岡唯一的武裝部隊,制服色彩華麗聞名。",
          en: "Pope Julius II recruited Swiss mercenaries in 1506; still staffed by Swiss Catholics, it remains Vatican City's only armed force, famous for its colorful uniforms.",
        },
      },
    ],
  },
  AUT: {
    climate: {
      zh: "大陸性與高山氣候並存:東部平原與維也納四季分明、夏暖冬寒,阿爾卑斯山區冬季漫長多雪。夏季(六至九月)適合湖區與登山健行,十二月至三月是滑雪季,耶誕市集則讓寒冬的城市格外迷人。",
      en: "Continental lowlands meet Alpine heights: Vienna and the eastern plains have warm summers and cold winters, while the Alps see long snowy winters. June to September is best for lakes and hiking, December to March for skiing — and Christmas markets make the winter cities magical.",
    },
    travelTips: [
      {
        zh: "維也納景點周邊常有穿莫札特裝的售票員兜售「宮廷音樂會」,品質參差、價格偏高,聽音樂會請走官方售票管道。",
        en: "Around Vienna's sights, touts in Mozart costumes hawk overpriced 'palace concerts' of uneven quality — buy concert tickets through official box offices instead.",
      },
      {
        zh: "大眾運輸採信任制,上車前先在藍色打票機打票,查票罰款上百歐元。",
        en: "Public transport runs on trust — validate your ticket in the blue machines before boarding, or risk fines of over a hundred euros.",
      },
      {
        zh: "咖啡館與餐廳習慣給約 5% 至 10% 小費,結帳時直接把金額湊整報給服務生即可。",
        en: "In cafes and restaurants a 5-10% tip is customary — just tell the waiter the rounded-up total when paying.",
      },
      {
        zh: "商店週日與國定假日公休,僅車站與機場商店營業;耶誕市集旺季住宿請提早預訂。",
        en: "Shops close on Sundays and public holidays except at stations and the airport; book accommodation early for the Christmas-market season.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "位居中歐內陸的奧地利,與多少個國家接壤?",
          en: "Landlocked in Central Europe, Austria shares borders with how many countries?",
        },
        options: [
          { zh: "八個", en: "Eight" },
          { zh: "五個", en: "Five" },
          { zh: "六個", en: "Six" },
          { zh: "十個", en: "Ten" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "鄰國依序為德國、捷克、斯洛伐克、匈牙利、斯洛維尼亞、義大利、瑞士與列支敦斯登,是歐洲鄰國最多的國家之一。",
          en: "Its neighbors are Germany, Czechia, Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein — among the most of any European country.",
        },
      },
      {
        question: {
          zh: "奧地利的最高峰是哪一座山?",
          en: "What is the highest mountain in Austria?",
        },
        options: [
          { zh: "大格洛克納山", en: "The Grossglockner" },
          { zh: "威爾德斯皮策山", en: "The Wildspitze" },
          { zh: "達赫斯坦山", en: "The Dachstein" },
          { zh: "楚格峰", en: "The Zugspitze" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "大格洛克納山海拔 3798 公尺,山腳的高山公路是奧地利最著名的觀光道路;楚格峰則是德國的最高峰。",
          en: "The Grossglockner rises 3,798 meters, with Austria's most famous scenic alpine road at its foot; the Zugspitze is Germany's highest peak, not Austria's.",
        },
      },
      {
        question: {
          zh: "哪個能量飲料品牌由奧地利企業家馬特希茨與泰國合夥人共同創立,總部設在奧地利?",
          en: "Which energy-drink brand was co-founded by Austrian entrepreneur Dietrich Mateschitz with a Thai partner and is headquartered in Austria?",
        },
        options: [
          { zh: "紅牛(Red Bull)", en: "Red Bull" },
          { zh: "魔爪(Monster)", en: "Monster" },
          { zh: "Rockstar 能量飲料", en: "Rockstar" },
          { zh: "力保美達(Lipovitan)", en: "Lipovitan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬特希茨 1984 年與泰國的許書標合作,把泰式提神飲料改良行銷全球;紅牛總部位於薩爾斯堡邦的富施爾湖畔,還擁有 F1 車隊與足球俱樂部。",
          en: "In 1984 Mateschitz teamed up with Thailand's Chaleo Yoovidhya to globalize a Thai tonic drink; Red Bull is based at Fuschl am See near Salzburg and owns F1 teams and football clubs.",
        },
      },
    ],
  },
  GRC: {
    climate: {
      zh: "典型地中海型氣候:夏季炎熱乾燥、陽光強烈,冬季溫和多雨,北部山區冬季會降雪。七、八月常逾 35 度且遊客爆滿,五、六月與九、十月海水溫暖、氣候舒適,是跳島與看遺跡的最佳季節。",
      en: "A classic Mediterranean climate: hot dry summers with intense sun, mild rainy winters, and snow in the northern mountains. July-August often tops 35°C with peak crowds, so May-June and September-October — warm seas, gentler weather — are ideal for island-hopping and ruins.",
    },
    travelTips: [
      {
        zh: "許多地方水管老舊細窄,衛生紙請丟馬桶旁的垃圾桶而非沖掉,島上尤其如此。",
        en: "Plumbing is often old and narrow — put toilet paper in the bin beside the toilet rather than flushing it, especially on the islands.",
      },
      {
        zh: "跳島渡輪受強風(meltemi)影響常臨時停駛,行程與回程航班之間務必預留緩衝天數。",
        en: "Island ferries are frequently cancelled when the meltemi winds blow — leave buffer days between island hops and your flight home.",
      },
      {
        zh: "衛城等戶外遺跡幾無遮蔭,夏天請一早前往並帶足水與帽子;熱門景點建議線上預購時段票。",
        en: "Open-air sites like the Acropolis offer almost no shade — go early in summer with water and a hat, and pre-book timed tickets for popular sights.",
      },
      {
        zh: "觀光區餐廳門口拉客的店家未必最好,點魚類海鮮先確認秤重價格,避免帳單驚喜。",
        en: "Restaurants with pushy touts in tourist zones are rarely the best; for fish sold by weight, confirm the price before ordering to avoid bill surprises.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "希臘的最高峰、神話中眾神居住的山是哪一座?",
          en: "What is Greece's highest mountain, the mythical home of the gods?",
        },
        options: [
          { zh: "奧林帕斯山", en: "Mount Olympus" },
          { zh: "帕納塞斯山", en: "Mount Parnassus" },
          { zh: "阿索斯山", en: "Mount Athos" },
          { zh: "品都斯山脈", en: "The Pindus range" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "奧林帕斯山主峰海拔 2917 公尺,古希臘人相信宙斯與諸神居於山巔;帕納塞斯山則是德爾菲神諭與繆思女神的聖山。",
          en: "Olympus peaks at 2,917 meters, where the ancients placed Zeus and his pantheon; Parnassus is the sacred mountain of Delphi and the Muses.",
        },
      },
      {
        question: {
          zh: "希臘字母是改良自哪個民族的文字系統而來?",
          en: "The Greek alphabet was adapted from the writing system of which people?",
        },
        options: [
          { zh: "腓尼基人", en: "The Phoenicians" },
          { zh: "古埃及人", en: "The ancient Egyptians" },
          { zh: "蘇美人", en: "The Sumerians" },
          { zh: "西臺人", en: "The Hittites" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "約西元前八世紀希臘人借用腓尼基字母並首創母音字母,這套系統後來衍生出拉丁字母與西里爾字母,是多數歐洲文字的源頭。",
          en: "Around the 8th century BC the Greeks borrowed Phoenician letters and added true vowels; their alphabet later spawned both the Latin and Cyrillic scripts.",
        },
      },
      {
        question: {
          zh: "希臘的科林斯運河,把哪個半島與希臘本土分隔開來?",
          en: "The Corinth Canal separates which peninsula from the Greek mainland?",
        },
        options: [
          { zh: "伯羅奔尼撒半島", en: "The Peloponnese" },
          { zh: "哈爾基迪基半島", en: "The Halkidiki peninsula" },
          { zh: "阿提卡半島", en: "The Attica peninsula" },
          { zh: "埃維亞島", en: "Euboea" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "運河 1893 年鑿通科林斯地峽,長約 6.4 公里、寬僅 20 餘公尺,兩側岩壁高聳,如今主要供觀光船隻通行。",
          en: "Cut through the Isthmus of Corinth in 1893, the canal runs 6.4 kilometers between sheer rock walls barely 25 meters apart — today used mostly by tourist boats.",
        },
      },
    ],
  },
  POL: {
    climate: {
      zh: "溫帶大陸性氣候,四季分明:冬季寒冷多雪,氣溫常在零下,夏季溫暖偶有雷雨。波羅的海沿岸較溫和,南部山區雪季長。五月至九月天氣最宜人,適合古城漫遊;冬季則可到塔特拉山滑雪。",
      en: "A temperate continental climate with four distinct seasons: cold snowy winters that often dip below zero and warm summers with occasional thunderstorms. The Baltic coast is milder, while southern mountains keep snow long. May to September is best for city strolls; winter suits skiing in the Tatras.",
    },
    travelTips: [
      {
        zh: "波蘭雖屬歐盟但不用歐元,貨幣是茲羅提;換匯認明「Kantor」匯兌所,刷卡時一律選擇以當地幣別扣款。",
        en: "Poland is in the EU but uses the zloty, not the euro — change money at 'Kantor' exchange offices, and always choose to pay in local currency on card terminals.",
      },
      {
        zh: "公車與電車上車後須立即在打票機打票,便衣查票常見,逃票罰款可觀。",
        en: "Validate bus and tram tickets in the on-board machines immediately — plain-clothes inspections are common and fines are steep.",
      },
      {
        zh: "多數大型商場與超市週日不營業(法定週日禁售),僅少數例外週日開放,採買請避開。",
        en: "Most malls and supermarkets close on Sundays under the trading ban, with only a few designated shopping Sundays a year — plan purchases around it.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "橫跨波蘭與白俄羅斯邊境的比亞沃維耶扎原始森林,以復育哪種歐洲最大的陸生哺乳動物聞名?",
          en: "The primeval Bialowieza Forest on the Poland-Belarus border is famous for restoring which of Europe's largest land mammals?",
        },
        options: [
          { zh: "歐洲野牛", en: "The European bison" },
          { zh: "棕熊", en: "The brown bear" },
          { zh: "駝鹿", en: "The moose" },
          { zh: "歐亞猞猁", en: "The Eurasian lynx" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "歐洲野牛一度在野外滅絕,靠動物園個體在比亞沃維耶扎復育成功,這片歐洲平原最後的原始森林也因此列入世界遺產。",
          en: "The European bison went extinct in the wild and was brought back from zoo stock in Bialowieza — Europe's last lowland primeval forest, now a World Heritage site.",
        },
      },
      {
        question: {
          zh: "波蘭目前使用的貨幣是什麼?",
          en: "What currency does Poland use today?",
        },
        options: [
          { zh: "茲羅提", en: "The zloty" },
          { zh: "歐元", en: "The euro" },
          { zh: "克朗", en: "The krona" },
          { zh: "福林", en: "The forint" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "波蘭 2004 年加入歐盟但迄今未採用歐元,仍使用茲羅提(zloty,原意為「金的」);福林是匈牙利貨幣。",
          en: "Poland joined the EU in 2004 but has never adopted the euro, keeping the zloty — literally 'golden'; the forint belongs to Hungary.",
        },
      },
      {
        question: {
          zh: "流經克拉科夫與華沙、注入波羅的海的波蘭第一長河是哪一條?",
          en: "Which river, Poland's longest, flows through Krakow and Warsaw before reaching the Baltic?",
        },
        options: [
          { zh: "維斯瓦河", en: "The Vistula" },
          { zh: "奧得河", en: "The Oder" },
          { zh: "涅曼河", en: "The Neman" },
          { zh: "布格河", en: "The Bug" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "維斯瓦河全長約 1047 公里,縱貫波蘭南北串起兩大古今首都,在格但斯克附近入海;奧得河則大致沿波德邊界流動。",
          en: "The Vistula runs about 1,047 kilometers north through both the old and new capitals to the sea near Gdansk; the Oder largely traces the German border.",
        },
      },
    ],
  },
  CZE: {
    climate: {
      zh: "溫帶大陸性氣候,四季分明:夏季溫暖、七月均溫約 20 度上下,冬季寒冷常有降雪。五月至九月氣候舒適,是遊布拉格與波希米亞小鎮的最佳時節;十二月的耶誕市集雖冷冽卻氣氛滿點。",
      en: "A temperate continental climate with four clear seasons: warm summers averaging around 20°C in July and cold winters with regular snow. May to September is the sweet spot for Prague and the Bohemian towns, while December's Christmas markets trade chill for charm.",
    },
    travelTips: [
      {
        zh: "布拉格街頭匯兌陷阱多,切勿與路邊人換錢,匯兌所先確認實拿金額;捷克用克朗,不是歐元。",
        en: "Prague is notorious for exchange scams — never change money with street touts, confirm the exact payout at exchange offices, and remember Czechia uses the koruna, not the euro.",
      },
      {
        zh: "地鐵與電車票須在進站或上車時打票啟用,便衣查票頻繁,無效票罰款約千元克朗。",
        en: "Validate metro and tram tickets when entering or boarding — plain-clothes inspectors check often, and fines run to about a thousand koruna.",
      },
      {
        zh: "路邊攔車易遇亂喊價,搭計程車請用叫車 App 或請旅館代叫。",
        en: "Hailing taxis on the street invites inflated fares — use a ride-hailing app or have your hotel call a cab.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1618 年的「布拉格拋窗事件」,引發了哪場席捲歐洲的大戰?",
          en: "The 1618 Defenestration of Prague touched off which war that engulfed Europe?",
        },
        options: [
          { zh: "三十年戰爭", en: "The Thirty Years' War" },
          { zh: "七年戰爭", en: "The Seven Years' War" },
          { zh: "百年戰爭", en: "The Hundred Years' War" },
          { zh: "奧地利王位繼承戰爭", en: "The War of the Austrian Succession" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "波希米亞新教貴族把皇帝的欽差從布拉格城堡窗戶拋出,新舊教衝突延燒全歐三十年,1648 年西發里亞和約才落幕。",
          en: "Bohemian Protestant nobles hurled the emperor's envoys from a Prague Castle window, igniting three decades of religious war ended only by the 1648 Peace of Westphalia.",
        },
      },
      {
        question: {
          zh: "哪個創立於 1895 年的捷克汽車品牌,如今隸屬福斯集團?",
          en: "Which Czech car brand, founded in 1895, is now part of the Volkswagen Group?",
        },
        options: [
          { zh: "斯柯達(Skoda)", en: "Skoda" },
          { zh: "達契亞(Dacia)", en: "Dacia" },
          { zh: "西雅特(Seat)", en: "Seat" },
          { zh: "歐寶(Opel)", en: "Opel" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "斯柯達從姆拉達-博萊斯拉夫的自行車工坊起家,是世界最悠久的汽車品牌之一,1991 年起併入福斯集團;達契亞是羅馬尼亞品牌、西雅特來自西班牙。",
          en: "Skoda began as a bicycle workshop in Mlada Boleslav and ranks among the world's oldest car marques, joining Volkswagen in 1991; Dacia is Romanian and Seat Spanish.",
        },
      },
      {
        question: {
          zh: "今日的捷克是由哪三個歷史地區組成的?",
          en: "Modern Czechia is composed of which three historical lands?",
        },
        options: [
          {
            zh: "波希米亞、摩拉維亞與部分西里西亞",
            en: "Bohemia, Moravia, and part of Silesia",
          },
          {
            zh: "波希米亞、斯洛伐克與加利西亞",
            en: "Bohemia, Slovakia, and Galicia",
          },
          {
            zh: "摩拉維亞、蒂羅爾與卡林西亞",
            en: "Moravia, Tyrol, and Carinthia",
          },
          {
            zh: "波美拉尼亞、波希米亞與盧薩蒂亞",
            en: "Pomerania, Bohemia, and Lusatia",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西部的波希米亞、東部的摩拉維亞,加上東北角的捷屬西里西亞,構成今日捷克;西里西亞的絕大部分位於波蘭境內。",
          en: "Bohemia in the west, Moravia in the east, and the small Czech corner of Silesia in the northeast make up the country — most of Silesia lies in Poland.",
        },
      },
    ],
  },
  SWE: {
    climate: {
      zh: "南部屬溫帶氣候、四季分明,北部深入亞寒帶,冬季漫長嚴寒。夏季白晝極長,北部甚至出現永晝;冬季則日照短暫。六月至八月氣候最舒適,是旅遊旺季;十二月至三月北上拉普蘭可賞極光、玩雪橇。",
      en: "Temperate in the south with four distinct seasons, subarctic in the north with long hard winters. Summer days stretch endlessly — with true midnight sun in the far north — while winter daylight is brief. June to August is peak season; December to March draws visitors north to Lapland for auroras and sledding.",
    },
    travelTips: [
      {
        zh: "瑞典近乎無現金社會,連市集攤販與公廁都刷卡或用行動支付,部分商家標示「不收現金」,備妥信用卡最實際。",
        en: "Sweden is nearly cashless — even market stalls and public toilets take cards or mobile payments, and some shops refuse cash outright, so rely on your credit card.",
      },
      {
        zh: "超市不賣烈酒與一般啤酒以外的酒類,想買酒得去國營專賣店 Systembolaget,平日傍晚早關、週日公休。",
        en: "Stronger alcohol is sold only at the state monopoly Systembolaget, which closes early on weekdays and all day Sunday — supermarkets stock only low-strength beer.",
      },
      {
        zh: "餐廳晚餐昂貴,午間的「本日特餐」(dagens ratt)通常便宜一大截,含飲料沙拉,是省錢好選擇。",
        en: "Dinner out is pricey, but the weekday lunch special (dagens ratt) costs far less and usually includes salad and a drink — the smart way to eat well on a budget.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "瑞典最大的島嶼、同時也是波羅的海第一大島是哪座?",
          en: "What is Sweden's largest island — also the biggest island in the Baltic Sea?",
        },
        options: [
          { zh: "哥特蘭島", en: "Gotland" },
          { zh: "厄蘭島", en: "Oland" },
          { zh: "波恩霍姆島", en: "Bornholm" },
          { zh: "呂根島", en: "Rugen" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "哥特蘭島面積約 3000 平方公里,島上的漢薩古城維斯比列為世界遺產;波恩霍姆屬丹麥、呂根島屬德國。",
          en: "Gotland covers about 3,000 square kilometers, and its Hanseatic town of Visby is a World Heritage site; Bornholm is Danish and Rugen German.",
        },
      },
      {
        question: {
          zh: "1766 年瑞典率全球之先,立法保障了什麼?",
          en: "In 1766 Sweden became the first country in the world to legislate what?",
        },
        options: [
          { zh: "新聞出版自由", en: "Freedom of the press" },
          { zh: "全民義務教育", en: "Universal compulsory education" },
          { zh: "女性投票權", en: "Women's suffrage" },
          { zh: "八小時工作制", en: "The eight-hour workday" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "瑞典 1766 年的出版自由法是世界最早,同時確立政府文件公開原則,至今仍是瑞典透明政治的基石。",
          en: "Sweden's 1766 Freedom of the Press Act was the world's first, and it also established public access to official documents — still a cornerstone of Swedish transparency.",
        },
      },
      {
        question: {
          zh: "斯德哥爾摩瓦薩博物館的鎮館之寶「瓦薩號」,是一艘什麼樣的船?",
          en: "The Vasa, centerpiece of Stockholm's Vasa Museum, is what kind of ship?",
        },
        options: [
          {
            zh: "1628 年首航即沉沒、後來整艘打撈上岸的戰艦",
            en: "A warship that sank on its 1628 maiden voyage and was later raised whole",
          },
          {
            zh: "維京時代出土的長船",
            en: "An excavated Viking-age longship",
          },
          {
            zh: "首艘穿越西北航道的極地探險船",
            en: "The first polar vessel to cross the Northwest Passage",
          },
          {
            zh: "十九世紀的波羅的海豪華郵輪",
            en: "A 19th-century Baltic luxury liner",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "瓦薩號因頭重腳輕出港不久便傾覆,在海底沉睡 333 年後於 1961 年打撈出水,保存完好度舉世罕見,如今是北歐最熱門的博物館之一。",
          en: "Top-heavy, the Vasa capsized minutes into her maiden voyage and lay on the seabed for 333 years until raised in 1961 — astonishingly intact, she anchors one of the Nordics' most visited museums.",
        },
      },
    ],
  },
  NOR: {
    climate: {
      zh: "受墨西哥灣流眷顧,西岸冬季遠比同緯度地區溫和,但多雨多風;內陸與北部則寒冷多雪。五月至九月適合峽灣與健行,夏季北部有永晝;十一月至三月是極光季,山區公路冬季可能封閉。",
      en: "Thanks to the Gulf Stream, the west coast stays far milder in winter than its latitude suggests, though wet and windy; inland and northern areas are cold and snowy. May to September suits fjords and hiking, with midnight sun up north, while November to March is aurora season — note that mountain roads may close in winter.",
    },
    travelTips: [
      {
        zh: "挪威物價極高,外食一餐常上千台幣;自來水可生飲,善用超市與青年旅舍廚房能大幅壓低開銷。",
        en: "Norway is extremely expensive and restaurant meals add up fast — tap water is drinkable, and supermarkets plus hostel kitchens will slash your budget.",
      },
      {
        zh: "山區與峽灣天氣瞬息萬變,夏天健行也要帶防風防雨外套,行前查看步道與路況資訊。",
        en: "Mountain and fjord weather turns fast — carry wind- and rain-proof layers even for summer hikes, and check trail and road conditions before setting out.",
      },
      {
        zh: "酒類由國營專賣店 Vinmonopolet 販售,營業時間短且假日公休;超市啤酒晚上八點後也停售。",
        en: "Wine and spirits are sold only at the state-run Vinmonopolet with short hours and holiday closures — even supermarket beer sales stop at 8 pm.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "挪威最長、最深,被稱為「峽灣之王」的峽灣是哪一座?",
          en: "Which fjord, Norway's longest and deepest, is called the 'King of the Fjords'?",
        },
        options: [
          { zh: "松恩峽灣", en: "The Sognefjord" },
          { zh: "蓋倫格峽灣", en: "The Geirangerfjord" },
          { zh: "哈當厄峽灣", en: "The Hardangerfjord" },
          { zh: "呂瑟峽灣", en: "The Lysefjord" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "松恩峽灣深入內陸逾 200 公里、水深達 1300 多公尺;蓋倫格峽灣以景色列入世界遺產,但規模遠不及松恩。",
          en: "The Sognefjord cuts more than 200 kilometers inland and plunges over 1,300 meters deep; the World Heritage Geirangerfjord is famed for scenery but far smaller.",
        },
      },
      {
        question: {
          zh: "挪威的斯瓦爾巴群島上,設有什麼世界級的「備份」設施?",
          en: "Norway's Svalbard archipelago hosts what world-scale 'backup' facility?",
        },
        options: [
          { zh: "全球作物種子庫", en: "The Global Seed Vault" },
          { zh: "國際核廢料儲存庫", en: "An international nuclear-waste repository" },
          { zh: "世界黃金儲備金庫", en: "A vault for the world's gold reserves" },
          { zh: "全球疫苗冷藏庫", en: "A global vaccine cold-storage bank" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "斯瓦爾巴全球種子庫 2008 年啟用,鑿入永凍層山體,替世界各地的基因銀行保存上百萬份作物種子備份,有「末日種子庫」之稱。",
          en: "Opened in 2008 and tunneled into permafrost rock, the Svalbard Global Seed Vault safeguards over a million backup seed samples for the world's gene banks — the so-called 'doomsday vault'.",
        },
      },
      {
        question: {
          zh: "1911 年 12 月,哪位挪威探險家率隊成為最早抵達南極點的人?",
          en: "In December 1911, which Norwegian explorer led the first team ever to reach the South Pole?",
        },
        options: [
          { zh: "阿蒙森", en: "Roald Amundsen" },
          { zh: "南森", en: "Fridtjof Nansen" },
          { zh: "史考特", en: "Robert Falcon Scott" },
          { zh: "沙克爾頓", en: "Ernest Shackleton" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿蒙森靠雪橇犬與周密補給於 1911 年 12 月 14 日插旗南極點,比英國的史考特隊早了約五週;南森是他的前輩,以北極探險聞名。",
          en: "With sled dogs and meticulous supply planning, Amundsen planted the flag on December 14, 1911 — about five weeks ahead of Britain's Scott; his mentor Nansen was famed for Arctic exploration.",
        },
      },
    ],
  },
  DNK: {
    climate: {
      zh: "溫帶海洋性氣候,四面環海使冬夏溫差不大:冬季濕冷少見大雪,夏季涼爽舒適,惟全年多風、天氣多變。五月至八月日照長、氣溫宜人,是騎單車遊哥本哈根與海岸的最佳季節。",
      en: "A temperate maritime climate moderated by surrounding seas: damp mild winters with little heavy snow and cool comfortable summers, though wind and changeable skies persist year-round. May to August brings long days and pleasant temperatures — prime time for cycling Copenhagen and the coasts.",
    },
    travelTips: [
      {
        zh: "單車是丹麥的主要交通工具,自行車道車流快,行人請勿佔用;租車體驗前先熟悉手勢與讓行規則。",
        en: "Bikes rule Danish streets and the lanes move fast — stay out of them on foot, and learn the hand signals and right-of-way rules before renting one.",
      },
      {
        zh: "丹麥用丹麥克朗而非歐元,且高度無現金化,大多數場合刷卡或手機支付即可。",
        en: "Denmark uses the Danish krone, not the euro, and is largely cashless — cards and mobile payments work almost everywhere.",
      },
      {
        zh: "服務費與稅金已含在標價中,不需另給小費;餐廳外食昂貴,街頭熱狗攤與烘焙坊是划算的在地選擇。",
        en: "Service and tax are included in prices, so tipping is unnecessary; with restaurants pricey, hot-dog stands and bakeries are the budget-friendly local staples.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "除了本土之外,哪兩個自治領地與丹麥共同組成「丹麥王國」?",
          en: "Along with Denmark proper, which two autonomous territories make up the Danish Realm?",
        },
        options: [
          { zh: "格陵蘭與法羅群島", en: "Greenland and the Faroe Islands" },
          { zh: "冰島與格陵蘭", en: "Iceland and Greenland" },
          { zh: "奧蘭群島與法羅群島", en: "The Aland Islands and the Faroe Islands" },
          { zh: "冰島與揚馬延島", en: "Iceland and Jan Mayen" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "格陵蘭與法羅群島皆高度自治且都不屬於歐盟;冰島曾與丹麥共戴一君,1944 年已完全獨立,奧蘭群島則屬芬蘭。",
          en: "Greenland and the Faroes are self-governing and both outside the EU; Iceland, once under the Danish crown, became fully independent in 1944, and the Aland Islands belong to Finland.",
        },
      },
      {
        question: {
          zh: "2000 年通車的厄勒海峽大橋,連接哥本哈根與瑞典的哪座城市?",
          en: "The Oresund Bridge, opened in 2000, links Copenhagen with which Swedish city?",
        },
        options: [
          { zh: "馬爾默", en: "Malmo" },
          { zh: "哥特堡", en: "Gothenburg" },
          { zh: "赫爾辛堡", en: "Helsingborg" },
          { zh: "隆德", en: "Lund" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "大橋結合橋梁與海底隧道,全長約 16 公里,把哥本哈根與馬爾默串成跨國通勤圈,也是北歐名劇《橋》的舞台。",
          en: "Combining bridge and undersea tunnel across 16 kilometers, it fused Copenhagen and Malmo into one cross-border commuter region — and set the stage for the Nordic-noir series 'The Bridge'.",
        },
      },
      {
        question: {
          zh: "丹麥國旗「丹尼布洛」保持著什麼樣的世界紀錄?",
          en: "The Danish flag, the Dannebrog, holds what world record?",
        },
        options: [
          {
            zh: "是世界上沿用至今最古老的國旗",
            en: "It is the oldest national flag still in continuous use",
          },
          {
            zh: "是世界上唯一非長方形的國旗",
            en: "It is the world's only non-rectangular national flag",
          },
          {
            zh: "是第一面採用三色條紋的國旗",
            en: "It was the first flag to use a tricolor stripe design",
          },
          {
            zh: "是唯一正反兩面圖案不同的國旗",
            en: "It is the only flag with different designs on each side",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傳說丹尼布洛於 1219 年愛沙尼亞戰役中自天而降,至遲 14 世紀已確實使用,白色十字設計成為所有北歐國旗的原型;唯一非長方形國旗屬尼泊爾。",
          en: "Legend says the Dannebrog fell from the sky during a 1219 battle in Estonia; documented since the 14th century, its off-center cross became the template for every Nordic flag. Nepal has the only non-rectangular flag.",
        },
      },
    ],
  },
  FIN: {
    climate: {
      zh: "介於溫帶與亞寒帶之間:冬季漫長嚴寒,北部拉普蘭雪季可達半年,夏季短暫溫和、白晝極長。六月至八月適合湖區與野營;十二月至三月北上可賞極光、住冰屋、看聖誕老人,務必備妥禦寒裝備。",
      en: "Between temperate and subarctic: winters are long and severe — Lapland's snow season can last half a year — while short mild summers bring near-endless daylight. June to August is best for the lakes and camping; December to March offers auroras, glass igloos, and Santa up north, with serious winter gear essential.",
    },
    travelTips: [
      {
        zh: "桑拿是國民文化,多數為裸身入浴且男女分場,入內前先淋浴;受邀共浴是友好的表示,禮貌參與即可。",
        en: "Sauna is a national institution — usually taken nude in single-sex sessions, always shower first, and an invitation to join is a gesture of friendship worth accepting politely.",
      },
      {
        zh: "冬季北部氣溫可達零下 20 至 30 度,手機在戶外易凍關機,保暖層、雪靴與防風外套缺一不可。",
        en: "Winter in the north can hit minus 20-30°C — phones die quickly outdoors, so proper base layers, snow boots, and a windproof shell are non-negotiable.",
      },
      {
        zh: "芬蘭幾乎全面無現金,公車購票多用 App;酒精濃度較高的酒類僅國營專賣店 Alko 有售。",
        en: "Finland is almost fully cashless and bus tickets are mostly bought by app; stronger alcohol is sold only at the state-run Alko stores.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "芬蘭語在語言分類上屬於哪個語系?",
          en: "To which language family does Finnish belong?",
        },
        options: [
          { zh: "烏拉爾語系", en: "The Uralic family" },
          { zh: "印歐語系日耳曼語族", en: "The Germanic branch of Indo-European" },
          { zh: "印歐語系斯拉夫語族", en: "The Slavic branch of Indo-European" },
          { zh: "突厥語系", en: "The Turkic family" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "芬蘭語與愛沙尼亞語、匈牙利語同屬烏拉爾語系,和瑞典語、俄語等印歐語言毫無親緣,這使它成為歐洲最獨特的語言之一。",
          en: "Finnish is Uralic, kin to Estonian and Hungarian but wholly unrelated to Indo-European neighbors like Swedish and Russian — one of Europe's most distinctive tongues.",
        },
      },
      {
        question: {
          zh: "芬蘭西南外海的奧蘭群島,以什麼特殊地位聞名?",
          en: "The Aland Islands off Finland's southwest coast are known for what special status?",
        },
        options: [
          {
            zh: "是瑞典語自治區,並依國際條約非軍事化",
            en: "A Swedish-speaking autonomous region, demilitarized by international treaty",
          },
          {
            zh: "是芬蘭唯一的免稅經濟特區",
            en: "Finland's only duty-free special economic zone",
          },
          {
            zh: "由芬蘭與瑞典兩國共同管轄",
            en: "Jointly administered by Finland and Sweden",
          },
          {
            zh: "是聯合國直接託管的領土",
            en: "A territory under direct UN trusteeship",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1921 年國際聯盟裁定奧蘭歸芬蘭,但賦予高度自治、瑞典語官方地位與非軍事化保障,成為國際上和平解決領土爭端的典範。",
          en: "In 1921 the League of Nations awarded Aland to Finland with sweeping autonomy, official Swedish, and demilitarization — a textbook peaceful settlement of a territorial dispute.",
        },
      },
      {
        question: {
          zh: "由民間歌謠彙編而成、深刻推動芬蘭民族認同的民族史詩是哪一部?",
          en: "Which national epic, compiled from folk songs, powerfully shaped Finnish national identity?",
        },
        options: [
          { zh: "《卡勒瓦拉》", en: "The Kalevala" },
          { zh: "《埃達》", en: "The Edda" },
          { zh: "《尼伯龍根之歌》", en: "The Nibelungenlied" },
          { zh: "《貝奧武夫》", en: "Beowulf" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "醫師隆洛特走遍鄉野採集古歌謠,1835 年編成《卡勒瓦拉》,點燃芬蘭民族覺醒,也啟發了西貝流士的音樂與無數藝術創作。",
          en: "Physician Elias Lonnrot roamed the countryside collecting ancient songs and published the Kalevala in 1835, fueling Finland's national awakening and inspiring Sibelius among many others.",
        },
      },
    ],
  },
  UKR: {
    climate: {
      zh: "溫帶大陸性氣候為主:夏季溫暖乾燥,七月常達 25 至 30 度;冬季寒冷,多數地區降雪,黑海沿岸較溫和。五月至九月氣候最舒適,春天的花海與盛夏的向日葵田是平原上最動人的風景。",
      en: "A mostly temperate continental climate: warm dry summers often reaching 25-30°C in July and cold snowy winters, with the Black Sea coast milder. May to September is the most comfortable stretch, when spring blooms and midsummer sunflower fields sweep across the plains.",
    },
    travelTips: [
      {
        zh: "俄烏戰爭仍在進行,多國對烏克蘭發布最高級別旅遊警示,行前務必確認本國外交部門的最新官方公告。",
        en: "The Russia-Ukraine war is ongoing and many governments have issued their highest-level travel advisories for Ukraine — check your own foreign ministry's latest official guidance before any trip.",
      },
      {
        zh: "境內實施戒嚴,各地有宵禁與空襲警報,民用機場關閉,國際往來主要靠鐵路與陸路口岸,行程須保持高度彈性。",
        en: "Martial law is in force, with curfews and air-raid alerts nationwide; civilian airports are closed, so international access is mainly by rail and land crossings — keep plans highly flexible.",
      },
      {
        zh: "若確有必要前往,事先向本國駐外館處登錄行蹤,並下載當地空襲警報 App、熟悉就近避難處所位置。",
        en: "If travel is truly necessary, register with your embassy beforehand, install a local air-raid alert app, and learn the locations of the nearest shelters.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "1986 年發生史上最嚴重核事故的核電廠,位於烏克蘭北部的哪個地方?",
          en: "The 1986 nuclear disaster — history's worst — struck a power plant at which site in northern Ukraine?",
        },
        options: [
          { zh: "車諾比", en: "Chernobyl" },
          { zh: "札波羅熱", en: "Zaporizhzhia" },
          { zh: "羅夫諾", en: "Rivne" },
          { zh: "南烏克蘭核電廠", en: "The South Ukraine plant" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "車諾比四號反應爐爆炸後輻射飄散全歐,周邊設立 30 公里隔離區,鄰近的普里皮亞特至今仍是空城;札波羅熱則是歐洲最大核電廠。",
          en: "Chernobyl's reactor No. 4 exploded, spreading fallout across Europe; a 30-kilometer exclusion zone remains and nearby Prypiat is still a ghost town. Zaporizhzhia is Europe's largest nuclear plant.",
        },
      },
      {
        question: {
          zh: "2022 年聯合國教科文組織將哪道菜的烹飪文化,列為烏克蘭「急需保護」的非物質文化遺產?",
          en: "In 2022 UNESCO inscribed the cooking culture of which dish as Ukrainian intangible heritage 'in need of urgent safeguarding'?",
        },
        options: [
          { zh: "羅宋湯(甜菜湯)", en: "Borscht, the beet soup" },
          { zh: "基輔炸雞排", en: "Chicken Kyiv" },
          { zh: "高麗菜捲", en: "Stuffed cabbage rolls" },
          { zh: "蕎麥粥", en: "Buckwheat porridge" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "UNESCO 認定羅宋湯烹飪文化屬於烏克蘭,並因戰爭威脅其傳承而列入急需保護名錄;這道甜菜湯在東歐各國都有變體,起源歸屬曾引發論戰。",
          en: "UNESCO recognized borscht cooking as Ukrainian and listed it as urgently endangered by the war — the beet soup has variants across Eastern Europe, and its origin was long disputed.",
        },
      },
      {
        question: {
          zh: "1994 年烏克蘭依《布達佩斯備忘錄》放棄了什麼,以換取安全保證?",
          en: "Under the 1994 Budapest Memorandum, what did Ukraine give up in exchange for security assurances?",
        },
        options: [
          {
            zh: "蘇聯解體後留在境內的核武器",
            en: "The nuclear weapons left on its soil after the Soviet collapse",
          },
          {
            zh: "黑海艦隊的全部艦艇",
            en: "Its entire share of the Black Sea Fleet",
          },
          {
            zh: "對克里米亞半島的主權",
            en: "Its sovereignty over the Crimean Peninsula",
          },
          {
            zh: "加入任何軍事同盟的權利",
            en: "Its right to join any military alliance",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "蘇聯解體時烏克蘭境內留有世界第三大核武庫,基輔同意全數移交銷毀,美英俄則承諾尊重其主權與既有邊界——2014 年後這份保證備受檢視。",
          en: "Ukraine inherited the world's third-largest nuclear arsenal and agreed to surrender it, with the US, UK, and Russia pledging to respect its sovereignty and borders — assurances heavily scrutinized after 2014.",
        },
      },
    ],
  },
  RUS: {
    climate: {
      zh: "幅員遼闊致氣候極端多樣:歐俄部分屬大陸性氣候,冬長夏短;西伯利亞冬季可達零下 40 度以下,北極沿岸為苔原氣候,黑海畔則相對溫和。旅遊以五月至九月最宜,冬季需備極地級禦寒裝備。",
      en: "Its vast expanse spans extreme climates: continental in European Russia with long winters and short summers, Siberian winters plunging below minus 40°C, tundra along the Arctic coast, and a relatively mild Black Sea shore. May to September is the practical travel window; winter demands polar-grade clothing.",
    },
    travelTips: [
      {
        zh: "因俄烏戰爭,多國對俄羅斯發布旅遊警示且外交協助能量有限,行前務必確認本國外交部門的最新官方公告。",
        en: "Owing to the war in Ukraine, many governments advise against travel to Russia and consular help there is limited — check your own foreign ministry's latest official guidance before any trip.",
      },
      {
        zh: "國際制裁下,Visa、Mastercard 等外國銀行卡在俄境內無法使用,國際航班大減,需準備充足現金並規劃轉機路線。",
        en: "Under sanctions, foreign Visa and Mastercard cards do not work inside Russia and direct flights are scarce — carry ample cash and plan connecting routes carefully.",
      },
      {
        zh: "多數旅客入境須事先申辦簽證,並須依規定辦理落地後的居留登記,證件請隨身攜帶備查。",
        en: "Most visitors need a visa arranged in advance plus post-arrival residence registration — keep your documents on you, as checks do occur.",
      },
    ],
    extraQuiz: [
      {
        question: {
          zh: "歐洲最長的河流是俄羅斯的哪一條河?",
          en: "What is the longest river in Europe, flowing through Russia?",
        },
        options: [
          { zh: "窩瓦河", en: "The Volga" },
          { zh: "多瑙河", en: "The Danube" },
          { zh: "聶伯河", en: "The Dnipro" },
          { zh: "頓河", en: "The Don" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "窩瓦河全長約 3530 公里,流貫歐俄心臟地帶注入裏海,自古被俄羅斯人尊稱「母親河」;多瑙河約 2850 公里,居歐洲第二。",
          en: "The Volga runs about 3,530 kilometers through Russia's heartland to the Caspian Sea — revered as 'Mother Volga' — while the Danube, at roughly 2,850 kilometers, is Europe's second longest.",
        },
      },
      {
        question: {
          zh: "歐洲第一高峰厄爾布魯士山,位於俄羅斯境內的哪條山脈?",
          en: "Mount Elbrus, Europe's highest peak, stands in which mountain range in Russia?",
        },
        options: [
          { zh: "高加索山脈", en: "The Caucasus" },
          { zh: "烏拉山脈", en: "The Urals" },
          { zh: "阿爾泰山脈", en: "The Altai" },
          { zh: "阿爾卑斯山脈", en: "The Alps" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "厄爾布魯士是海拔 5642 公尺的休眠火山,聳立於俄羅斯南疆的高加索山脈,比阿爾卑斯的白朗峰高出八百多公尺,名列世界七頂峰之一。",
          en: "Elbrus is a 5,642-meter dormant volcano in the Caucasus along Russia's southern rim — over 800 meters taller than Mont Blanc and one of the Seven Summits.",
        },
      },
      {
        question: {
          zh: "俄羅斯的加里寧格勒州,有什麼特殊的地理特徵?",
          en: "What is geographically unusual about Russia's Kaliningrad region?",
        },
        options: [
          {
            zh: "是不與本土相連、夾在波蘭與立陶宛之間的外飛地",
            en: "It is an exclave cut off from the mainland, wedged between Poland and Lithuania",
          },
          {
            zh: "是俄羅斯唯一位於北極圈內的州",
            en: "It is Russia's only region inside the Arctic Circle",
          },
          {
            zh: "是裏海中的一座島嶼州",
            en: "It is an island region in the Caspian Sea",
          },
          {
            zh: "與芬蘭共同管理邊境水域",
            en: "It shares joint administration of border waters with Finland",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "加里寧格勒原是東普魯士首府柯尼斯堡(哲學家康德的故鄉),1945 年劃歸蘇聯;它瀕臨波羅的海,是俄國波羅的海艦隊的母港。",
          en: "Kaliningrad was Konigsberg, capital of East Prussia and home of the philosopher Kant, annexed by the USSR in 1945; on the Baltic, it hosts Russia's Baltic Fleet.",
        },
      },
    ],
  },
};
