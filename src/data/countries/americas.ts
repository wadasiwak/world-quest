import type { Country } from "../types";

// Americas: 12 countries. Content shape is LLM-generatable — see types.ts.

export const AMERICAS: Country[] = [
  {
    id: "USA",
    name: { zh: "美國", en: "United States" },
    capital: { zh: "華盛頓特區", en: "Washington, D.C." },
    flag: "🇺🇸",
    region: "americas",
    center: { lat: 39.8, lng: -98.6 },
    intro: {
      zh: "橫跨大西洋與太平洋的聯邦共和國,五十州涵蓋沙漠、大平原、洛磯山脈與熱帶海島。世界最大經濟體,好萊塢、矽谷與職業運動使其流行文化影響力遍及全球。",
      en: "A federal republic stretching from the Atlantic to the Pacific, its fifty states span deserts, great plains, the Rockies, and tropical islands. The world's largest economy, with Hollywood, Silicon Valley, and pro sports projecting its pop culture everywhere.",
    },
    history: {
      zh: "原住民族在此生活上萬年,17 世紀起英國等歐洲勢力沿東岸建立殖民地。1776 年十三州殖民地發表獨立宣言,建立史上第一個現代憲政共和國。19 世紀西進擴張,1861–65 年南北戰爭終結奴隸制,其後快速工業化。兩次世界大戰後崛起為超級大國,冷戰勝出後在科技、金融與文化領域維持全球領導地位。",
      en: "Indigenous peoples lived here for over ten millennia before European colonies rose along the east coast. Thirteen colonies declared independence in 1776, founding the first modern constitutional republic. The 19th century brought westward expansion and the 1861–65 Civil War that ended slavery, followed by rapid industrialization. After two world wars the US emerged as a superpower, and after the Cold War it has led in technology, finance, and culture.",
    },
    cities: [
      {
        name: { zh: "華盛頓特區", en: "Washington, D.C." },
        blurb: {
          zh: "專為建都而規劃的聯邦特區,白宮、國會山莊與博物館群沿國家廣場排開。",
          en: "A federal district planned as a capital from scratch — the White House, Capitol, and museums line the National Mall.",
        },
        trivia: {
          question: {
            zh: "白宮落成後,第一位真正入住的美國總統是誰?",
            en: "Who was the first US president to actually live in the White House?",
          },
          options: [
            { zh: "約翰·亞當斯", en: "John Adams" },
            { zh: "喬治·華盛頓", en: "George Washington" },
            { zh: "湯瑪斯·傑佛遜", en: "Thomas Jefferson" },
            { zh: "詹姆士·麥迪遜", en: "James Madison" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "華盛頓本人監督了白宮興建卻從未入住,1800 年第二任總統亞當斯成為首位住進白宮的總統。",
            en: "George Washington oversaw its construction but never lived there; John Adams moved in first, in 1800.",
          },
        },
      },
      {
        name: { zh: "紐約", en: "New York" },
        blurb: {
          zh: "美國最大城市與世界金融中心,華爾街、百老匯與中央公園齊聚曼哈頓。",
          en: "The largest US city and a global financial capital — Wall Street, Broadway, and Central Park all on Manhattan.",
        },
        trivia: {
          question: {
            zh: "紐約港的自由女神像是哪個國家送給美國的禮物?",
            en: "The Statue of Liberty in New York Harbor was a gift from which country?",
          },
          options: [
            { zh: "法國", en: "France" },
            { zh: "英國", en: "The United Kingdom" },
            { zh: "荷蘭", en: "The Netherlands" },
            { zh: "義大利", en: "Italy" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1886 年法國贈送以紀念美國獨立與兩國友誼,雕像內部鋼架出自艾菲爾鐵塔設計者之手。",
            en: "France gave it in 1886 to celebrate American independence and friendship; its inner frame was engineered by Gustave Eiffel.",
          },
        },
      },
      {
        name: { zh: "舊金山", en: "San Francisco" },
        blurb: {
          zh: "金門大橋與叮噹車之城,鄰近矽谷,科技與嬉皮文化在此交會。",
          en: "City of the Golden Gate Bridge and cable cars, next door to Silicon Valley — where tech and counterculture meet.",
        },
        trivia: {
          question: {
            zh: "1848 年起舊金山人口爆炸性成長,起因是加州發生了什麼事?",
            en: "San Francisco's population exploded from 1848 — what happened in California?",
          },
          options: [
            { zh: "發現金礦掀起淘金熱", en: "Gold was discovered, sparking the Gold Rush" },
            { zh: "橫貫鐵路通車", en: "The transcontinental railroad opened" },
            { zh: "發現大型油田", en: "A major oil field was found" },
            { zh: "成為加州首府", en: "It became California's capital" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "淘金熱讓舊金山幾年內從小鎮暴增為數萬人的港市,「49 人」也成了淘金客的代稱。",
            en: "The Gold Rush turned a small port into a boomtown of tens of thousands within years — hence the 'Forty-Niners'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1872 年設立的黃石公園是世界上第一座國家公園。",
        en: "Yellowstone, established in 1872, was the world's first national park.",
      },
      {
        zh: "美國含阿拉斯加與夏威夷在內共橫跨六個時區。",
        en: "Including Alaska and Hawaii, the US spans six time zones.",
      },
    ],
  },
  {
    id: "CAN",
    name: { zh: "加拿大", en: "Canada" },
    capital: { zh: "渥太華", en: "Ottawa" },
    flag: "🇨🇦",
    region: "americas",
    center: { lat: 56.1, lng: -106.3 },
    intro: {
      zh: "世界面積第二大的國家,從洛磯山脈、北極苔原到楓紅森林地貌壯闊,人口卻多集中在南部邊境帶。英語與法語並列官方語言,以多元文化政策與冰上曲棍球聞名。",
      en: "The world's second-largest country by area, from the Rockies and Arctic tundra to maple forests — yet most people live along the southern border. Officially bilingual in English and French, famed for multiculturalism and ice hockey.",
    },
    history: {
      zh: "原住民族與因紐特人世居數千年,1608 年法國人建立魁北克城開啟「新法蘭西」時代,1763 年七年戰爭後轉由英國統治。1867 年多個殖民地聯合組成自治領,其後透過 1931 年西敏法令與 1982 年憲法回歸逐步取得完整主權。20 世紀確立多元文化政策,如今是 G7 成員與全球最宜居國家之一。",
      en: "First Nations and Inuit peoples lived here for millennia; the French founded Quebec City in 1608, and Britain took New France after the Seven Years' War in 1763. Confederation in 1867 created a self-governing dominion, with full sovereignty arriving via the 1931 Statute of Westminster and the 1982 patriation of the constitution. A pioneer of official multiculturalism, Canada is today a G7 member and among the world's most livable countries.",
    },
    cities: [
      {
        name: { zh: "渥太華", en: "Ottawa" },
        blurb: {
          zh: "安大略與魁北克交界處的首都,哥德式國會大廈俯瞰渥太華河。",
          en: "The capital on the Ontario–Quebec boundary, its Gothic Parliament overlooking the Ottawa River.",
        },
        trivia: {
          question: {
            zh: "渥太華的麗都運河每年冬天結冰後會變成什麼?",
            en: "What does Ottawa's Rideau Canal become each winter when it freezes?",
          },
          options: [
            {
              zh: "世界最大的天然結冰溜冰場",
              en: "The world's largest naturally frozen skating rink",
            },
            { zh: "越野滑雪賽道", en: "A cross-country ski course" },
            { zh: "冰上釣魚場", en: "An ice-fishing ground" },
            { zh: "冰雕展覽公園", en: "An ice-sculpture park" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "長達 7.8 公里的冰上溜冰道獲金氏世界紀錄認證,許多市民冬天真的溜冰通勤。",
            en: "The 7.8 km skateway holds a Guinness record — some locals genuinely skate to work in winter.",
          },
        },
      },
      {
        name: { zh: "多倫多", en: "Toronto" },
        blurb: {
          zh: "加拿大最大城市與金融中心,居民約半數在境外出生,是世界最多元的都會之一。",
          en: "Canada's largest city and financial hub, where about half the residents were born abroad — one of the world's most diverse metros.",
        },
        trivia: {
          question: {
            zh: "多倫多的西恩塔(CN Tower)曾保持什麼世界紀錄長達三十餘年?",
            en: "Toronto's CN Tower held which world record for over three decades?",
          },
          options: [
            {
              zh: "世界最高的獨立式建築物",
              en: "The world's tallest freestanding structure",
            },
            { zh: "世界最高的住宅大樓", en: "The world's tallest residential tower" },
            { zh: "世界最高的橋塔", en: "The world's tallest bridge tower" },
            { zh: "世界最大的體育館屋頂", en: "The world's largest stadium roof" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "553 公尺的西恩塔自 1976 年落成起稱霸世界,直到 2007 年才被杜拜的哈里發塔超越。",
            en: "At 553 m, it reigned from its 1976 completion until the Burj Khalifa overtook it in 2007.",
          },
        },
      },
      {
        name: { zh: "溫哥華", en: "Vancouver" },
        blurb: {
          zh: "太平洋岸的山海之城,滑雪場與海灘近在咫尺,常年名列全球宜居城市前茅。",
          en: "A Pacific city between mountains and sea — ski slopes and beaches minutes apart, perennially atop livability rankings.",
        },
        trivia: {
          question: {
            zh: "溫哥華市中心旁的史丹利公園,面積與紐約中央公園相比如何?",
            en: "How does Stanley Park, beside downtown Vancouver, compare in size to New York's Central Park?",
          },
          options: [
            { zh: "比中央公園更大", en: "It is larger than Central Park" },
            { zh: "大約是一半", en: "About half the size" },
            { zh: "大致相同", en: "Roughly the same size" },
            { zh: "不到四分之一", en: "Less than a quarter the size" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "史丹利公園約 405 公頃,略大於中央公園的 341 公頃,環園海堤步道是市民最愛。",
            en: "Stanley Park covers about 405 hectares to Central Park's 341; its seawall loop is a local favorite.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "加拿大擁有世界最長的海岸線,總長超過 20 萬公里。",
        en: "Canada has the world's longest coastline — over 200,000 km.",
      },
      {
        zh: "加拿大的湖泊數量比世界其他國家加起來還多。",
        en: "Canada contains more lakes than the rest of the world combined.",
      },
    ],
  },
  {
    id: "MEX",
    name: { zh: "墨西哥", en: "Mexico" },
    capital: { zh: "墨西哥城", en: "Mexico City" },
    flag: "🇲🇽",
    region: "americas",
    center: { lat: 23.6, lng: -102.5 },
    intro: {
      zh: "連接北美與中美的文明古國,馬雅與阿茲特克金字塔、殖民古城與加勒比海灘並存。全球西班牙語人口最多的國家,塔可、龍舌蘭酒與亡靈節文化風靡世界。",
      en: "A bridge between North and Central America where Maya and Aztec pyramids, colonial towns, and Caribbean beaches coexist. Home to the world's largest Spanish-speaking population — and the source of tacos, tequila, and the Day of the Dead.",
    },
    history: {
      zh: "奧爾梅克、馬雅、阿茲特克等文明先後在此興盛,1521 年科爾特斯攻滅阿茲特克帝國,開啟「新西班牙」三百年殖民統治。1810 年伊達爾戈神父發起獨立運動,1821 年獨立;19 世紀中因美墨戰爭失去北方大片領土,1910 年墨西哥革命重塑政治格局。20 世紀後期工業化並與北美貿易整合,如今是拉丁美洲第二大經濟體。",
      en: "The Olmec, Maya, and Aztec civilizations flourished here in turn; Cortés toppled the Aztec Empire in 1521, beginning 300 years as New Spain. Father Hidalgo launched the independence movement in 1810, achieved in 1821. Mexico lost vast northern territories in the 1846–48 war with the US, and the 1910 Revolution reshaped its politics. Late-20th-century industrialization and North American trade integration made it Latin America's second-largest economy.",
    },
    cities: [
      {
        name: { zh: "墨西哥城", en: "Mexico City" },
        blurb: {
          zh: "西半球最大都會之一,建在高原湖床上,阿茲特克神廟遺址就在主廣場旁。",
          en: "One of the Western Hemisphere's largest metros, built on a highland lakebed — Aztec temple ruins sit beside the main square.",
        },
        trivia: {
          question: {
            zh: "墨西哥城建在哪個古文明首都的遺址之上?",
            en: "Mexico City was built on the ruins of which ancient civilization's capital?",
          },
          options: [
            { zh: "阿茲特克的特諾奇提特蘭", en: "The Aztec capital Tenochtitlan" },
            { zh: "馬雅的奇琴伊察", en: "The Maya city Chichén Itzá" },
            { zh: "托爾特克的圖拉", en: "The Toltec capital Tula" },
            { zh: "薩波特克的阿爾班山", en: "The Zapotec center Monte Albán" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "特諾奇提特蘭建於特斯科科湖的島上,西班牙人摧毀後在原址建城,如今城市仍因湖床地質緩慢下沉。",
            en: "Tenochtitlan stood on an island in Lake Texcoco; the Spanish rebuilt on its ruins, and the city still sinks slowly into the old lakebed.",
          },
        },
      },
      {
        name: { zh: "瓜達拉哈拉", en: "Guadalajara" },
        blurb: {
          zh: "墨西哥第二大都會區,哈利斯科州首府,常被視為最能代表墨西哥傳統的城市。",
          en: "Mexico's second metro area and capital of Jalisco, often called the most quintessentially Mexican of cities.",
        },
        trivia: {
          question: {
            zh: "瓜達拉哈拉所在的哈利斯科州,是哪兩項墨西哥文化象徵的發源地?",
            en: "Guadalajara's home state of Jalisco is the birthplace of which two Mexican icons?",
          },
          options: [
            {
              zh: "龍舌蘭酒與瑪利亞奇樂隊",
              en: "Tequila and mariachi music",
            },
            { zh: "塔可餅與墨西哥摔角", en: "Tacos and lucha libre wrestling" },
            { zh: "亡靈節與皮納塔", en: "The Day of the Dead and piñatas" },
            { zh: "捲餅與莫雷醬", en: "Burritos and mole sauce" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "龍舌蘭酒產自州內的特基拉鎮一帶,瑪利亞奇街頭樂隊文化也發源於此,兩者皆獲聯合國教科文組織認證。",
            en: "Tequila comes from the Jalisco town of the same name, and mariachi was born here too — both carry UNESCO recognition.",
          },
        },
      },
      {
        name: { zh: "坎昆", en: "Cancún" },
        blurb: {
          zh: "加勒比海岸的度假重鎮,白沙海灘背後是猶加敦半島的馬雅文明腹地。",
          en: "A Caribbean resort hub whose white-sand beaches front the Yucatán Peninsula's Maya heartland.",
        },
        trivia: {
          question: {
            zh: "坎昆所在的猶加敦半島,以哪個古文明的金字塔遺址聞名?",
            en: "The Yucatán Peninsula around Cancún is famous for the pyramid ruins of which civilization?",
          },
          options: [
            { zh: "馬雅文明", en: "The Maya" },
            { zh: "阿茲特克文明", en: "The Aztecs" },
            { zh: "奧爾梅克文明", en: "The Olmecs" },
            { zh: "印加文明", en: "The Inca" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "奇琴伊察的羽蛇神金字塔是馬雅名作,春分與秋分時陽光會在階梯上投出蛇形光影。",
            en: "Chichén Itzá's El Castillo is a Maya masterpiece — at the equinoxes, sunlight casts a serpent-shaped shadow down its stairs.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "玉米、番茄、辣椒與巧克力飲品都是在墨西哥一帶馴化或發明後傳向全世界。",
        en: "Corn, tomatoes, chilies, and chocolate drinks were all domesticated or invented in the Mexican region before spreading worldwide.",
      },
    ],
  },
  {
    id: "BRA",
    name: { zh: "巴西", en: "Brazil" },
    capital: { zh: "巴西利亞", en: "Brasília" },
    flag: "🇧🇷",
    region: "americas",
    center: { lat: -10.8, lng: -53.1 },
    intro: {
      zh: "南美洲面積與人口第一大國,擁有大半個亞馬遜雨林,也是拉丁美洲唯一的葡語國家。足球王國五度奪得世界盃,森巴、嘉年華與多元族群融合塑造出獨特文化。",
      en: "South America's largest country by area and population, holding most of the Amazon rainforest — and Latin America's only Portuguese-speaking nation. A footballing kingdom with five World Cup titles, shaped by samba, Carnival, and a rich ethnic blend.",
    },
    history: {
      zh: "1500 年葡萄牙航海家卡布拉爾抵達後成為葡萄牙殖民地,蔗糖與黃金經濟倚賴大量非洲奴隸。1808 年葡萄牙王室為避拿破崙遷往里約,1822 年佩德羅一世宣布獨立建立帝國,1889 年改行共和。20 世紀工業化加速,1960 年遷都內陸新城巴西利亞;1964–85 年軍政府統治後民主化,如今是金磚國家與拉美最大經濟體。",
      en: "After Cabral's landing in 1500, Brazil became a Portuguese colony whose sugar and gold economies relied heavily on enslaved Africans. The Portuguese court fled Napoleon to Rio in 1808; Pedro I declared an independent empire in 1822, and a republic followed in 1889. Industrialization accelerated in the 20th century and the capital moved to newly built Brasília in 1960; after military rule (1964–85) Brazil democratized, and it is now a BRICS member and Latin America's largest economy.",
    },
    cities: [
      {
        name: { zh: "巴西利亞", en: "Brasília" },
        blurb: {
          zh: "1960 年啟用的計畫首都,尼邁耶的現代主義建築群讓整座城市列入世界遺產。",
          en: "A planned capital inaugurated in 1960 — Oscar Niemeyer's modernist ensemble earned the whole city World Heritage status.",
        },
        trivia: {
          question: {
            zh: "從空中俯瞰,巴西利亞的城市平面設計最常被形容像什麼?",
            en: "Seen from above, Brasília's city plan is most often said to resemble what?",
          },
          options: [
            { zh: "一架飛機(或飛鳥)", en: "An airplane (or a bird)" },
            { zh: "一顆五角星", en: "A five-pointed star" },
            { zh: "一張棋盤", en: "A chessboard" },
            { zh: "一組同心圓環", en: "A set of concentric rings" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "都市規劃師科斯塔的「領航計畫」以機身為政府軸線、機翼為住宅區,整座城市在荒原上約四年即建成。",
            en: "Lúcio Costa's 'Plano Piloto' uses a fuselage for the government axis and wings for housing — built from empty savanna in about four years.",
          },
        },
      },
      {
        name: { zh: "里約熱內盧", en: "Rio de Janeiro" },
        blurb: {
          zh: "「奇妙之城」,基督像俯瞰科帕卡巴納海灘,曾是巴西首都近兩百年。",
          en: "The 'Marvelous City' — Christ the Redeemer overlooks Copacabana Beach in what was Brazil's capital for nearly two centuries.",
        },
        trivia: {
          question: {
            zh: "里約科科瓦多山上的基督像,在 2007 年全球票選中入選了什麼?",
            en: "Rio's Christ the Redeemer statue was voted onto which list in a 2007 global poll?",
          },
          options: [
            { zh: "世界新七大奇蹟", en: "The New Seven Wonders of the World" },
            { zh: "世界十大最高雕像", en: "The world's ten tallest statues" },
            { zh: "百大瀕危古蹟", en: "The 100 most endangered monuments" },
            { zh: "七大工程奇觀", en: "The seven wonders of engineering" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1931 年落成的基督像高 30 公尺,與長城、馬丘比丘等並列世界新七大奇蹟。",
            en: "Completed in 1931 and 30 m tall, it joined the Great Wall and Machu Picchu among the New Seven Wonders.",
          },
        },
      },
      {
        name: { zh: "聖保羅", en: "São Paulo" },
        blurb: {
          zh: "南半球最大城市與巴西經濟引擎,由咖啡財富奠基的移民大熔爐。",
          en: "The Southern Hemisphere's largest city and Brazil's economic engine — an immigrant melting pot built on coffee wealth.",
        },
        trivia: {
          question: {
            zh: "聖保羅擁有日本本土以外全球最大的什麼社群?",
            en: "São Paulo hosts the world's largest community of what outside its homeland?",
          },
          options: [
            { zh: "日裔社群", en: "The Japanese diaspora" },
            { zh: "韓裔社群", en: "The Korean diaspora" },
            { zh: "華裔社群", en: "The Chinese diaspora" },
            { zh: "印度裔社群", en: "The Indian diaspora" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "20 世紀初日本移民赴巴西咖啡園工作,如今巴西日裔近兩百萬人,聖保羅的東方街是其文化中心。",
            en: "Japanese migrants came to work coffee farms from the early 1900s; Brazil now has nearly two million people of Japanese descent, centered on São Paulo's Liberdade district.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "亞馬遜河流量世界第一,注入大西洋的淡水約占全球河川入海量的五分之一。",
        en: "The Amazon carries more water than any other river — roughly one-fifth of all river water reaching the oceans.",
      },
      {
        zh: "巴西與南美洲除智利和厄瓜多之外的所有國家接壤。",
        en: "Brazil borders every South American country except Chile and Ecuador.",
      },
    ],
  },
  {
    id: "ARG",
    name: { zh: "阿根廷", en: "Argentina" },
    capital: { zh: "布宜諾斯艾利斯", en: "Buenos Aires" },
    flag: "🇦🇷",
    region: "americas",
    center: { lat: -34.0, lng: -64.0 },
    intro: {
      zh: "南美洲第二大國,從彭巴草原、安地斯山到巴塔哥尼亞冰川,地景遼闊多變。探戈、牛排與足球是國民三大熱情,梅西與馬拉度納讓藍白球衣舉世聞名。",
      en: "South America's second-largest country, sweeping from the Pampas grasslands and the Andes to Patagonian glaciers. Tango, steak, and football are national passions — Messi and Maradona made the sky-blue-and-white shirt world famous.",
    },
    history: {
      zh: "西班牙自 16 世紀起在拉普拉塔河流域殖民,1810 年五月革命點燃獨立運動,1816 年正式宣布獨立。19 世紀末歐洲移民潮湧入,牛肉與小麥出口讓阿根廷一度躋身世界最富裕國家之列。20 世紀歷經裴隆主義起落、1976–83 年軍政府與 1982 年福克蘭戰爭,1983 年民主化後政局穩定,但經濟屢經通膨與債務危機。",
      en: "Spain colonized the Río de la Plata basin from the 16th century; the May Revolution of 1810 sparked the independence declared in 1816. Massive European immigration and beef-and-wheat exports made Argentina one of the world's richest countries by the early 1900s. The 20th century brought Peronism, the 1976–83 military junta, and the 1982 Falklands War; democracy returned in 1983, though inflation and debt crises have recurred.",
    },
    cities: [
      {
        name: { zh: "布宜諾斯艾利斯", en: "Buenos Aires" },
        blurb: {
          zh: "「南美巴黎」,歐風大道、書店與咖啡館密布,拉普拉塔河畔的探戈之都。",
          en: "The 'Paris of South America' — European boulevards, bookshops, and cafés on the Río de la Plata, capital of tango.",
        },
        trivia: {
          question: {
            zh: "探戈這種舞蹈與音樂,起源於 19 世紀末的什麼環境?",
            en: "Tango, the dance and its music, emerged in the late 19th century in what setting?",
          },
          options: [
            {
              zh: "布宜諾斯艾利斯與蒙特維多的港區移民社群",
              en: "Immigrant port neighborhoods of Buenos Aires and Montevideo",
            },
            { zh: "安地斯山區的牧人聚落", en: "Herding villages in the Andes" },
            { zh: "西班牙的宮廷舞會", en: "Spanish court ballrooms" },
            { zh: "巴西的嘉年華遊行", en: "Brazil's Carnival parades" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "探戈誕生於拉普拉塔河兩岸港區的移民熔爐,2009 年由阿根廷與烏拉圭共同列入人類非物質文化遺產。",
            en: "Tango was born in the immigrant melting pots of the Río de la Plata ports; Argentina and Uruguay jointly inscribed it as UNESCO Intangible Heritage in 2009.",
          },
        },
      },
      {
        name: { zh: "門多薩", en: "Mendoza" },
        blurb: {
          zh: "安地斯山腳下的葡萄酒之都,遠眺美洲最高峰阿空加瓜山。",
          en: "The wine capital at the foot of the Andes, within sight of Aconcagua, the Americas' highest peak.",
        },
        trivia: {
          question: {
            zh: "門多薩產區以哪個紅酒葡萄品種聞名於世?",
            en: "The Mendoza wine region is world-famous for which red grape variety?",
          },
          options: [
            { zh: "馬爾貝克", en: "Malbec" },
            { zh: "黑皮諾", en: "Pinot Noir" },
            { zh: "田帕尼優", en: "Tempranillo" },
            { zh: "山吉歐維榭", en: "Sangiovese" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "原產法國的馬爾貝克在門多薩高海拔乾燥氣候下大放異彩,成為阿根廷的招牌品種。",
            en: "Malbec, originally French, thrives in Mendoza's high-altitude desert climate and became Argentina's signature grape.",
          },
        },
      },
      {
        name: { zh: "烏斯懷亞", en: "Ushuaia" },
        blurb: {
          zh: "火地島上依山面海的港城,是前往南極郵輪的主要出發港。",
          en: "A port city on Tierra del Fuego between mountains and sea, the main gateway for Antarctic cruises.",
        },
        trivia: {
          question: {
            zh: "烏斯懷亞以什麼稱號聞名於旅人之間?",
            en: "Ushuaia is famous among travelers under what title?",
          },
          options: [
            {
              zh: "世界最南端的城市,「世界盡頭」",
              en: "The world's southernmost city — the 'End of the World'",
            },
            { zh: "南美洲最古老的城市", en: "South America's oldest city" },
            { zh: "世界海拔最高的港口", en: "The world's highest-altitude port" },
            { zh: "世界日照最長的城市", en: "The city with the most sunshine hours" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "烏斯懷亞位於約南緯 54.8 度,一般公認是世界最南端的城市,距南極半島僅約一千公里。",
            en: "At about 54.8°S, Ushuaia is generally recognized as the world's southernmost city, only about 1,000 km from the Antarctic Peninsula.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "阿根廷的阿空加瓜山海拔 6,961 公尺,是亞洲之外的世界最高峰。",
        en: "Argentina's Aconcagua, at 6,961 m, is the highest mountain on Earth outside Asia.",
      },
      {
        zh: "阿根廷人均牛肉消費量長年位居世界前列,烤肉聚會 asado 是國民儀式。",
        en: "Argentines are among the world's top beef eaters per capita — the asado barbecue is a national ritual.",
      },
    ],
  },
  {
    id: "CHL",
    name: { zh: "智利", en: "Chile" },
    capital: { zh: "聖地牙哥", en: "Santiago" },
    flag: "🇨🇱",
    region: "americas",
    center: { lat: -35.7, lng: -71.3 },
    intro: {
      zh: "沿太平洋岸南北綿延約 4,300 公里的狹長國度,北有全球最乾燥的阿他加馬沙漠,南至冰川峽灣。銅礦產量世界第一,葡萄酒與天文觀測同樣舉世聞名。",
      en: "A ribbon of a country stretching some 4,300 km along the Pacific, from the hyper-arid Atacama Desert to glacial fjords. The world's top copper producer, equally renowned for wine and world-class astronomy.",
    },
    history: {
      zh: "北部曾納入印加帝國版圖,南部的馬普切人則長期抵抗外來統治。1541 年西班牙人瓦爾迪維亞建立聖地牙哥,1818 年在奧希金斯與聖馬丁領導下獨立。19 世紀在太平洋戰爭中獲勝,取得北方硝石礦區,20 世紀銅礦成為經濟命脈;1973 年皮諾切特政變推翻阿葉德政府,獨裁統治至 1990 年民主化,此後成為拉美最穩定繁榮的經濟體之一。",
      en: "The north once lay within the Inca Empire, while the Mapuche in the south long resisted outside rule. Pedro de Valdivia founded Santiago in 1541; independence came in 1818 under O'Higgins and San Martín. Victory in the War of the Pacific won the mineral-rich north, and copper became the economic lifeline. Pinochet's 1973 coup toppled Allende and dictatorship lasted until 1990; Chile has since ranked among Latin America's most stable, prosperous economies.",
    },
    cities: [
      {
        name: { zh: "聖地牙哥", en: "Santiago" },
        blurb: {
          zh: "安地斯雪峰環抱的盆地首都,集中了全國約四成人口。",
          en: "A basin capital ringed by snowcapped Andes, home to roughly 40% of Chileans.",
        },
        trivia: {
          question: {
            zh: "聖地牙哥近郊的安地斯山區以什麼運動勝地聞名,北半球選手常在 6 到 8 月前來訓練?",
            en: "The Andes near Santiago are famous for what sport, drawing Northern Hemisphere athletes from June to August?",
          },
          options: [
            { zh: "滑雪", en: "Skiing" },
            { zh: "衝浪", en: "Surfing" },
            { zh: "帆船", en: "Sailing" },
            { zh: "越野單車", en: "Mountain biking" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "南半球的冬季正值北半球夏天,聖地牙哥車程一兩小時內就有波蒂約等著名滑雪場,吸引各國雪隊反季訓練。",
            en: "Southern winter falls during the northern summer, and resorts like Portillo sit within two hours of Santiago — perfect for off-season training.",
          },
        },
      },
      {
        name: { zh: "瓦爾帕萊索", en: "Valparaíso" },
        blurb: {
          zh: "依山而建的彩色港城,詩人聶魯達故居所在,老城區是世界遺產。",
          en: "A colorful port city climbing steep hills, home to one of Pablo Neruda's houses — its old quarter is World Heritage.",
        },
        trivia: {
          question: {
            zh: "瓦爾帕萊索山城的居民,傳統上靠什麼特色交通工具往返山坡與港區?",
            en: "How do residents of Valparaíso's hillside neighborhoods traditionally travel between the hills and the port?",
          },
          options: [
            { zh: "百年歷史的升降纜車", en: "Century-old funicular lifts" },
            { zh: "跨海渡輪", en: "Harbor ferries" },
            { zh: "齒軌登山火車", en: "A rack-and-pinion mountain railway" },
            { zh: "空中貢多拉纜車", en: "Aerial gondola cable cars" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瓦爾帕萊索的「ascensores」升降纜車多建於 19 世紀末,至今仍有多座營運,是城市的活古蹟。",
            en: "Valparaíso's 'ascensores', mostly built in the late 1800s, still run today and are living monuments of the city.",
          },
        },
      },
      {
        name: { zh: "蓬塔阿雷納斯", en: "Punta Arenas" },
        blurb: {
          zh: "巴塔哥尼亞南端的門戶城市,是前往百內國家公園與南極科考的基地。",
          en: "The gateway city of southern Patagonia, a base for Torres del Paine and Antarctic expeditions.",
        },
        trivia: {
          question: {
            zh: "蓬塔阿雷納斯瀕臨哪條以航海家命名的著名海峽?",
            en: "Punta Arenas sits on which famous strait named after an explorer?",
          },
          options: [
            { zh: "麥哲倫海峽", en: "The Strait of Magellan" },
            { zh: "德雷克海峽", en: "The Drake Passage" },
            { zh: "白令海峽", en: "The Bering Strait" },
            { zh: "庫克海峽", en: "The Cook Strait" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1520 年麥哲倫率先穿越這條連接大西洋與太平洋的海峽;巴拿馬運河通航前它是重要航道,蓬塔阿雷納斯因此繁榮。",
            en: "Magellan first sailed this Atlantic–Pacific passage in 1520; before the Panama Canal it was a key shipping route, and Punta Arenas thrived on it.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "阿他加馬沙漠是地球上最乾燥的非極地沙漠,部分氣象站從未記錄到降雨。",
        en: "The Atacama is Earth's driest nonpolar desert — some weather stations there have never recorded rain.",
      },
      {
        zh: "以摩艾石像聞名的復活節島屬於智利,距本土約 3,700 公里。",
        en: "Easter Island of moai fame belongs to Chile, some 3,700 km off the mainland.",
      },
    ],
  },
  {
    id: "PER",
    name: { zh: "秘魯", en: "Peru" },
    capital: { zh: "利馬", en: "Lima" },
    flag: "🇵🇪",
    region: "americas",
    center: { lat: -9.2, lng: -75.0 },
    intro: {
      zh: "安地斯山脈與亞馬遜雨林交會的古文明搖籃,印加帝國的心臟地帶。馬丘比丘、納斯卡線與的的喀喀湖吸引全球旅人,近年更以檸檬醃魚等美食成為世界矚目的餐飲大國。",
      en: "A cradle of ancient civilizations where the Andes meet the Amazon — the heartland of the Inca Empire. Machu Picchu, the Nazca Lines, and Lake Titicaca draw travelers worldwide, and dishes like ceviche have made Peru a global culinary star.",
    },
    history: {
      zh: "卡拉爾等文明可追溯至四千多年前,是美洲最古老的城市文明之一;15 世紀印加帝國以庫斯科為中心擴張成美洲最大帝國。1532 年皮薩羅俘虜印加皇帝阿塔瓦爾帕,秘魯成為西班牙在南美的統治核心。1821 年聖馬丁宣布獨立,1824 年阿亞庫喬戰役底定獨立大局。20 世紀歷經政變與游擊戰亂,如今以礦業、漁業與觀光為經濟支柱。",
      en: "The Caral civilization arose over 4,000 years ago — among the Americas' oldest urban cultures — and in the 15th century the Inca built the hemisphere's largest empire from Cusco. Pizarro captured the emperor Atahualpa in 1532, making Peru the center of Spanish South America. San Martín proclaimed independence in 1821, sealed at the Battle of Ayacucho in 1824. After 20th-century coups and insurgencies, mining, fishing, and tourism now anchor the economy.",
    },
    cities: [
      {
        name: { zh: "利馬", en: "Lima" },
        blurb: {
          zh: "太平洋岸的首都,殖民老城與海崖新區並存,號稱拉丁美洲美食之都。",
          en: "The Pacific-coast capital where a colonial old town meets clifftop districts — Latin America's gastronomic capital.",
        },
        trivia: {
          question: {
            zh: "利馬由哪位西班牙征服者在 1535 年建立?",
            en: "Which Spanish conquistador founded Lima in 1535?",
          },
          options: [
            { zh: "法蘭西斯科·皮薩羅", en: "Francisco Pizarro" },
            { zh: "埃爾南·科爾特斯", en: "Hernán Cortés" },
            { zh: "佩德羅·德·瓦爾迪維亞", en: "Pedro de Valdivia" },
            { zh: "迪亞哥·德·阿爾馬格羅", en: "Diego de Almagro" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "征服印加帝國的皮薩羅建立利馬並命名為「諸王之城」,此後三百年是西班牙南美殖民地的首府。",
            en: "Pizarro, conqueror of the Inca, founded Lima as the 'City of Kings'; it served as capital of Spanish South America for 300 years.",
          },
        },
      },
      {
        name: { zh: "庫斯科", en: "Cusco" },
        blurb: {
          zh: "海拔 3,400 公尺的安地斯古城,印加石牆上蓋著西班牙教堂,是馬丘比丘的門戶。",
          en: "An Andean city at 3,400 m where Spanish churches stand on Inca stone walls — the gateway to Machu Picchu.",
        },
        trivia: {
          question: {
            zh: "庫斯科曾是哪個帝國的首都?",
            en: "Cusco was the capital of which empire?",
          },
          options: [
            { zh: "印加帝國", en: "The Inca Empire" },
            { zh: "阿茲特克帝國", en: "The Aztec Empire" },
            { zh: "蒂瓦納科王國", en: "The Tiwanaku state" },
            { zh: "奇穆王國", en: "The Chimú kingdom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "庫斯科在克丘亞語中意為「肚臍」,是印加人眼中的世界中心,帝國道路網由此輻射四方。",
            en: "Cusco means 'navel' in Quechua — the center of the Inca world, from which the empire's road network radiated.",
          },
        },
      },
      {
        name: { zh: "阿雷基帕", en: "Arequipa" },
        blurb: {
          zh: "火山環繞的秘魯第二大城,老城建築潔白典雅,被稱為「白色之城」。",
          en: "Peru's second city, ringed by volcanoes, its elegant pale old town nicknamed the 'White City'.",
        },
        trivia: {
          question: {
            zh: "阿雷基帕被稱為「白色之城」,因為老城建築大量使用什麼材料?",
            en: "Arequipa is called the 'White City' because its old buildings are made largely of what?",
          },
          options: [
            { zh: "白色火山岩", en: "White volcanic stone" },
            { zh: "大理石", en: "Marble" },
            { zh: "白色珊瑚石", en: "White coral stone" },
            { zh: "石灰粉刷的磚牆", en: "Whitewashed brick" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "當地稱為 sillar 的白色火山凝灰岩取自周圍火山,砌成的老城已列入世界遺產。",
            en: "The local sillar — white volcanic tuff from nearby volcanoes — built the World Heritage old town.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬鈴薯發源於秘魯安地斯山區,當地保存了數千個原生品種。",
        en: "The potato was first domesticated in the Peruvian Andes, where thousands of native varieties survive.",
      },
      {
        zh: "秘魯與玻利維亞共享的的的喀喀湖,是世界最高的大型可通航湖泊。",
        en: "Lake Titicaca, shared with Bolivia, is the world's highest large navigable lake.",
      },
    ],
  },
  {
    id: "COL",
    name: { zh: "哥倫比亞", en: "Colombia" },
    capital: { zh: "波哥大", en: "Bogotá" },
    flag: "🇨🇴",
    region: "americas",
    center: { lat: 4.1, lng: -73.1 },
    intro: {
      zh: "南美洲唯一同時瀕臨太平洋與加勒比海的國家,安地斯山、亞馬遜與海岸風情兼備。咖啡與祖母綠馳名世界,音樂舞蹈活力四射,是拉美文化輸出的重要力量。",
      en: "The only South American country with both Pacific and Caribbean coasts, blending Andes, Amazon, and beach cultures. Famed for coffee and emeralds, pulsing with music and dance — a powerhouse of Latin cultural exports.",
    },
    history: {
      zh: "穆伊斯卡等原住民族的黃金工藝孕育了「黃金國」傳說,16 世紀西班牙人建立新格拉納達殖民地。1819 年玻利瓦爾在博亞卡戰役獲勝,建立大哥倫比亞共和國,1830 年分裂為哥倫比亞、委內瑞拉與厄瓜多。20 世紀後半陷入游擊隊內戰與毒品暴力,2016 年政府與最大游擊組織簽署和平協議,近年治安改善,觀光與文化產業快速復興。",
      en: "The goldwork of the Muisca and other peoples inspired the El Dorado legend; Spain established New Granada here in the 16th century. Bolívar's victory at Boyacá in 1819 created Gran Colombia, which split into Colombia, Venezuela, and Ecuador in 1830. Guerrilla war and drug violence scarred the late 20th century, but a 2016 peace accord with the largest guerrilla group has ushered in safer times and a tourism and cultural revival.",
    },
    cities: [
      {
        name: { zh: "波哥大", en: "Bogotá" },
        blurb: {
          zh: "海拔 2,640 公尺的高原首都,博物館與街頭藝術之城。",
          en: "A highland capital at 2,640 m, rich in museums and street art.",
        },
        trivia: {
          question: {
            zh: "波哥大的黃金博物館以收藏什麼聞名全球?",
            en: "Bogotá's Gold Museum is world-famous for holding what?",
          },
          options: [
            {
              zh: "世界最大的前哥倫布時期金器收藏",
              en: "The world's largest collection of pre-Hispanic gold artifacts",
            },
            { zh: "世界最大的天然金塊", en: "The world's largest gold nugget" },
            { zh: "西班牙沉船打撈的金幣", en: "Gold coins salvaged from Spanish shipwrecks" },
            { zh: "各國央行的金條樣本", en: "Gold bar specimens from central banks" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "館藏數萬件原住民黃金工藝品,其中「穆伊斯卡金筏」正是黃金國傳說的具象化。",
            en: "It holds tens of thousands of Indigenous gold pieces, including the Muisca Raft — the very image behind the El Dorado legend.",
          },
        },
      },
      {
        name: { zh: "麥德林", en: "Medellín" },
        blurb: {
          zh: "山谷中的哥倫比亞第二大城,以纜車公共運輸與城市轉型聞名。",
          en: "Colombia's second city, set in a valley and famous for cable-car transit and urban transformation.",
        },
        trivia: {
          question: {
            zh: "麥德林因終年宜人的氣候而有什麼暱稱?",
            en: "Medellín's year-round mild climate earned it what nickname?",
          },
          options: [
            { zh: "永恆春天之城", en: "The City of Eternal Spring" },
            { zh: "白色之城", en: "The White City" },
            { zh: "風之城", en: "The City of Winds" },
            { zh: "太陽之城", en: "The City of the Sun" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "麥德林海拔約 1,500 公尺,全年溫和如春;連接山坡社區的纜車系統也成為城市再生的典範。",
            en: "At about 1,500 m, Medellín stays springlike all year; its hillside Metrocable lines became a model of urban renewal.",
          },
        },
      },
      {
        name: { zh: "卡塔赫納", en: "Cartagena" },
        blurb: {
          zh: "加勒比海岸的殖民古城,彩色街屋圍在厚實的環城石牆內。",
          en: "A Caribbean colonial gem, its colorful streets enclosed by massive stone walls.",
        },
        trivia: {
          question: {
            zh: "卡塔赫納的環城石牆與要塞,當年主要是為了防禦誰?",
            en: "Cartagena's city walls and fortresses were built mainly to defend against whom?",
          },
          options: [
            {
              zh: "海盜與英法私掠船",
              en: "Pirates and English and French privateers",
            },
            { zh: "葡萄牙艦隊", en: "Portuguese fleets" },
            { zh: "原住民起義軍", en: "Indigenous uprisings" },
            { zh: "荷蘭東印度公司", en: "The Dutch East India Company" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "卡塔赫納是西班牙運送美洲金銀的要港,屢遭德瑞克等私掠者劫掠,因而築起南美最完整的城防。",
            en: "As a key port for Spain's American treasure, Cartagena was raided by privateers like Francis Drake — hence South America's most complete fortifications.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "哥倫比亞的鳥類種數居世界之冠,單位面積生物多樣性名列前茅。",
        en: "Colombia has more bird species than any other country and ranks near the top in biodiversity per square kilometer.",
      },
      {
        zh: "哥倫比亞長期是世界最重要的祖母綠產地之一。",
        en: "Colombia has long been one of the world's leading sources of emeralds.",
      },
    ],
  },
  {
    id: "CUB",
    name: { zh: "古巴", en: "Cuba" },
    capital: { zh: "哈瓦那", en: "Havana" },
    flag: "🇨🇺",
    region: "americas",
    center: { lat: 21.5, lng: -78.0 },
    intro: {
      zh: "加勒比海最大的島國,殖民老城、老爺車與雪茄構成獨特風景。騷莎音樂的重要源頭之一,蘭姆酒與海明威的足跡讓它充滿傳奇色彩,至今仍是西半球少數的社會主義國家。",
      en: "The largest island nation in the Caribbean, defined by colonial towns, vintage cars, and cigars. A wellspring of salsa music, steeped in rum and Hemingway lore — and still one of the Western Hemisphere's few socialist states.",
    },
    history: {
      zh: "原住民泰諾人世居於此,1492 年哥倫布首航即抵達古巴,西班牙殖民四百年間蔗糖業倚賴非洲奴隸。1898 年美西戰爭後脫離西班牙,但長期受美國影響。1959 年卡斯楚領導革命推翻巴蒂斯塔政權,轉向社會主義並與蘇聯結盟,1962 年飛彈危機讓世界瀕臨核戰。蘇聯解體後經濟陷入「特殊時期」,近年緩步開放觀光與私營經濟。",
      en: "Home to the Taíno people, Cuba was reached by Columbus on his first voyage in 1492; four centuries of Spanish rule built a sugar economy on enslaved African labor. Independence from Spain came after the 1898 Spanish-American War, under heavy US influence. Castro's 1959 revolution toppled Batista, aligning Cuba with the USSR — the 1962 Missile Crisis brought the world to the brink. After the Soviet collapse came the austere 'Special Period'; tourism and small private business have slowly opened since.",
    },
    cities: [
      {
        name: { zh: "哈瓦那", en: "Havana" },
        blurb: {
          zh: "殖民建築與海濱大道構成的首都,舊城區是世界遺產。",
          en: "A capital of colonial facades and the seafront Malecón; Old Havana is a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "哈瓦那街頭為何滿是 1950 年代的美國老爺車?",
            en: "Why are Havana's streets full of 1950s American cars?",
          },
          options: [
            {
              zh: "1960 年代起的美國禁運使新車難進口,居民持續修用舊車",
              en: "The US embargo from the early 1960s cut off new imports, so owners kept old cars running",
            },
            {
              zh: "政府規定觀光區只准行駛古董車",
              en: "The government allows only vintage cars in tourist zones",
            },
            {
              zh: "古巴免稅進口古董車供收藏",
              en: "Cuba imports classic cars duty-free for collectors",
            },
            {
              zh: "好萊塢片廠拍片後留下的道具車",
              en: "They were left behind by Hollywood film productions",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "革命後美國實施禁運,古巴人以驚人的巧手讓革命前進口的美國車持續行駛超過半世紀。",
            en: "After the revolution and embargo, Cubans kept pre-1959 American cars alive with remarkable ingenuity for over half a century.",
          },
        },
      },
      {
        name: { zh: "千里達", en: "Trinidad" },
        blurb: {
          zh: "保存完好的西班牙殖民小城,鵝卵石街道與粉彩房舍宛如時光凝結。",
          en: "A beautifully preserved Spanish colonial town where cobblestones and pastel houses seem frozen in time.",
        },
        trivia: {
          question: {
            zh: "古巴千里達古城在 19 世紀的財富,主要來自哪項產業?",
            en: "Trinidad in Cuba grew rich in the 19th century mainly from which industry?",
          },
          options: [
            { zh: "蔗糖業", en: "Sugar" },
            { zh: "菸草業", en: "Tobacco" },
            { zh: "咖啡業", en: "Coffee" },
            { zh: "銀礦業", en: "Silver mining" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鄰近的「糖廠谷」曾聚集數十座甘蔗莊園,與千里達古城一同列入世界遺產。",
            en: "The nearby Valley of the Sugar Mills held dozens of plantations; it shares World Heritage status with the town.",
          },
        },
      },
      {
        name: { zh: "聖地牙哥-德古巴", en: "Santiago de Cuba" },
        blurb: {
          zh: "古巴第二大城與音樂重鎮,加勒比風情濃厚,是古巴革命的搖籃。",
          en: "Cuba's second city and a musical stronghold with a deep Caribbean flavor — cradle of the Cuban Revolution.",
        },
        trivia: {
          question: {
            zh: "1953 年卡斯楚攻打聖地牙哥-德古巴的哪座軍營,揭開古巴革命序幕?",
            en: "In 1953 Castro attacked which barracks in Santiago de Cuba, igniting the Cuban Revolution?",
          },
          options: [
            { zh: "蒙卡達兵營", en: "The Moncada Barracks" },
            { zh: "卡瓦尼亞要塞", en: "La Cabaña fortress" },
            { zh: "莫羅城堡", en: "El Morro castle" },
            { zh: "哥倫比亞軍營", en: "The Columbia military camp" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "攻打蒙卡達兵營雖然失敗,卻讓卡斯楚聲名大噪,其運動也以起義日期命名為「七二六運動」。",
            en: "The assault failed, but it made Castro famous — his movement took its name, the 26th of July Movement, from the date.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "古巴識字率接近百分之百,人均醫師數量長年位居世界前列。",
        en: "Cuba's literacy rate is close to 100%, and its doctors-per-capita ratio has long ranked among the world's highest.",
      },
    ],
  },
  {
    id: "PAN",
    name: { zh: "巴拿馬", en: "Panama" },
    capital: { zh: "巴拿馬城", en: "Panama City" },
    flag: "🇵🇦",
    region: "americas",
    center: { lat: 8.4, lng: -80.1 },
    intro: {
      zh: "連接南北美洲的 S 形地峽小國,巴拿馬運河讓它成為全球航運咽喉。首都摩天大樓林立,是拉美重要的金融與物流樞紐,雨林與兩洋海岸近在咫尺。",
      en: "A small S-shaped isthmus linking North and South America, made a global shipping chokepoint by the Panama Canal. Its skyscraper-studded capital is a Latin American finance and logistics hub, with rainforest and two oceans close at hand.",
    },
    history: {
      zh: "1501 年西班牙人抵達後,巴拿馬地峽成為秘魯白銀轉運歐洲的要道。1821 年脫離西班牙並加入大哥倫比亞,其後長期是哥倫比亞一省;1903 年在美國支持下獨立,隨即簽約讓美國開鑿並控制運河。1914 年運河通航改寫全球航運,經多年爭取,美國於 1999 年 12 月 31 日將運河主權完整移交巴拿馬,運河收入至今仍是國家經濟支柱。",
      en: "After the Spanish arrived in 1501, the isthmus became the route for shipping Peruvian silver to Europe. Independence from Spain in 1821 brought union with Gran Colombia, and Panama remained a Colombian province until 1903, when it seceded with US backing and granted the US rights to build and control a canal. Opened in 1914, the canal reshaped world shipping; after decades of negotiation the US handed it fully to Panama on December 31, 1999, and its revenues still anchor the economy.",
    },
    cities: [
      {
        name: { zh: "巴拿馬城", en: "Panama City" },
        blurb: {
          zh: "運河太平洋端的首都,殖民老城與摩天高樓隔灣相望。",
          en: "The capital at the canal's Pacific end, where the colonial Casco Viejo faces a modern skyline across the bay.",
        },
        trivia: {
          question: {
            zh: "巴拿馬運河的開通,讓往來兩大洋的船隻不必再繞行哪個以風暴聞名的海角?",
            en: "The Panama Canal spared ships from rounding which storm-plagued cape?",
          },
          options: [
            { zh: "南美洲南端的合恩角", en: "Cape Horn at South America's tip" },
            { zh: "非洲南端的好望角", en: "The Cape of Good Hope in Africa" },
            { zh: "北美洲的巴羅角", en: "Point Barrow in North America" },
            { zh: "格陵蘭的告別角", en: "Cape Farewell off Greenland" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1914 年運河通航後,紐約到舊金山的航程縮短約一萬三千公里,不必再冒險繞行合恩角。",
            en: "After 1914, the New York–San Francisco voyage shrank by roughly 13,000 km, with no more perilous Cape Horn passage.",
          },
        },
      },
      {
        name: { zh: "科隆", en: "Colón" },
        blurb: {
          zh: "運河加勒比海端的港口城市,自由貿易區規模居西半球前列。",
          en: "The port city at the canal's Caribbean end, home to one of the Western Hemisphere's largest free trade zones.",
        },
        trivia: {
          question: {
            zh: "科隆以什麼設施聞名,規模位居西半球最大之列?",
            en: "Colón is famous for what facility, among the largest of its kind in the Western Hemisphere?",
          },
          options: [
            { zh: "自由貿易區", en: "A free trade zone" },
            { zh: "深海油港", en: "A deepwater oil terminal" },
            { zh: "遠洋漁市", en: "An ocean fish market" },
            { zh: "造船廠", en: "A shipyard" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "科隆自由貿易區 1948 年設立,數千家公司在此轉口批發,貨物免稅進出,輻射整個拉丁美洲。",
            en: "Founded in 1948, the Colón Free Trade Zone hosts thousands of re-export businesses serving all of Latin America, duty-free.",
          },
        },
      },
      {
        name: { zh: "博克特", en: "Boquete" },
        blurb: {
          zh: "西部高地的咖啡山城,氣候涼爽,鄰近巴魯火山。",
          en: "A cool highland coffee town in western Panama, near Volcán Barú.",
        },
        trivia: {
          question: {
            zh: "博克特一帶出產的哪種咖啡,屢屢刷新世界咖啡拍賣價格紀錄?",
            en: "Which coffee grown around Boquete has repeatedly smashed world auction price records?",
          },
          options: [
            { zh: "藝伎(Geisha)咖啡", en: "Geisha coffee" },
            { zh: "藍山咖啡", en: "Blue Mountain coffee" },
            { zh: "科納咖啡", en: "Kona coffee" },
            { zh: "曼特寧咖啡", en: "Mandheling coffee" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "源自衣索比亞的藝伎品種在巴拿馬火山高地大放異彩,頂級批次拍賣價屢創世界新高。",
            en: "The Ethiopian-origin Geisha variety thrives in Panama's volcanic highlands; top lots have set successive world auction records.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "由於地峽走向彎曲,穿越運河從大西洋端到太平洋端,航向其實偏向東南。",
        en: "Because of the isthmus's curve, transiting the canal from the Atlantic side to the Pacific actually takes you southeast.",
      },
      {
        zh: "所謂「巴拿馬帽」其實原產於厄瓜多,因經巴拿馬轉銷而得名。",
        en: "The 'Panama hat' is actually made in Ecuador — it got its name from being shipped through Panama.",
      },
    ],
  },
  {
    id: "BOL",
    name: { zh: "玻利維亞", en: "Bolivia" },
    capital: { zh: "蘇克雷", en: "Sucre" },
    flag: "🇧🇴",
    region: "americas",
    center: { lat: -16.7, lng: -64.7 },
    intro: {
      zh: "安地斯高原上的內陸國,擁有世界最大的烏尤尼鹽沼與高原湖泊的的喀喀湖。原住民人口比例居南美前列,克丘亞與艾馬拉文化色彩濃厚,礦產資源豐富而地貌極端。",
      en: "A landlocked country on the Andean altiplano, home to the world's largest salt flat at Uyuni and highland Lake Titicaca. With one of South America's largest Indigenous populations, Quechua and Aymara culture runs deep amid extreme landscapes and mineral wealth.",
    },
    history: {
      zh: "的的喀喀湖畔的蒂瓦納科文明興盛千年,15 世紀併入印加帝國。西班牙殖民時期,波托西銀山的白銀支撐了帝國財政,也吞噬了無數礦工性命。1825 年獨立,國名取自解放者玻利瓦爾;19 世紀末太平洋戰爭敗給智利,失去海岸線成為內陸國。20 世紀政變頻繁,2006 年莫拉萊斯成為首位原住民總統,如今鋰礦被視為未來經濟的希望。",
      en: "The Tiwanaku civilization flourished by Lake Titicaca for centuries before the region joined the Inca Empire. Under Spain, the silver of Potosí's Cerro Rico bankrolled an empire at a terrible human cost. Independence came in 1825, the new nation named for Bolívar; defeat by Chile in the War of the Pacific cost Bolivia its coastline. After a coup-prone 20th century, Evo Morales became the first Indigenous president in 2006, and lithium is now seen as the economy's great hope.",
    },
    cities: [
      {
        name: { zh: "蘇克雷", en: "Sucre" },
        blurb: {
          zh: "憲法首都與司法機關所在地,白牆紅瓦的殖民老城列入世界遺產。",
          en: "The constitutional capital and seat of the judiciary, its whitewashed colonial old town a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "玻利維亞首都蘇克雷的城市名,是為了紀念哪一位人物?",
            en: "Bolivia's capital Sucre is named in honor of which figure?",
          },
          options: [
            {
              zh: "獨立英雄安東尼奧·何塞·德·蘇克雷元帥",
              en: "Independence hero Marshal Antonio José de Sucre",
            },
            { zh: "一位西班牙總督", en: "A Spanish viceroy" },
            { zh: "當地的原住民領袖", en: "A local Indigenous chief" },
            { zh: "一位天主教聖人", en: "A Catholic saint" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "蘇克雷是玻利瓦爾麾下名將、阿亞庫喬戰役的統帥,也是玻利維亞早期總統,城市因此改以他為名。",
            en: "Sucre, Bolívar's great general and victor at Ayacucho, was an early president of Bolivia; the city was renamed for him.",
          },
        },
      },
      {
        name: { zh: "拉巴斯", en: "La Paz" },
        blurb: {
          zh: "海拔約 3,600 公尺的政府所在地,城市沿峽谷坡地層層而建。",
          en: "The seat of government at about 3,600 m, its neighborhoods stacked up a dramatic canyon.",
        },
        trivia: {
          question: {
            zh: "拉巴斯的「Mi Teleférico」空中纜車系統保有什麼紀錄?",
            en: "La Paz's 'Mi Teleférico' aerial cable car system holds what record?",
          },
          options: [
            {
              zh: "世界規模最大的城市纜車交通網",
              en: "The world's largest urban cable car transit network",
            },
            { zh: "世界最快的城市纜車", en: "The world's fastest urban cable car" },
            { zh: "世界最古老的城市纜車", en: "The world's oldest urban cable car" },
            { zh: "單線最長的觀光纜車", en: "The longest single-line sightseeing cable car" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "十餘條纜車線串起拉巴斯與高處的埃爾阿爾托,總長數十公里,是全球最大的纜車大眾運輸網。",
            en: "Ten-plus lines link La Paz with El Alto above it, spanning tens of kilometers — the largest cable car transit network on Earth.",
          },
        },
      },
      {
        name: { zh: "烏尤尼", en: "Uyuni" },
        blurb: {
          zh: "高原小鎮,是探索世界最大鹽沼的門戶。",
          en: "A high-plateau town, the gateway to the world's largest salt flat.",
        },
        trivia: {
          question: {
            zh: "世界最大鹽沼烏尤尼鹽沼在雨後會出現什麼著名景象?",
            en: "After rain, the Salar de Uyuni — the world's largest salt flat — becomes famous for what?",
          },
          options: [
            {
              zh: "宛如「天空之鏡」的鏡面反射",
              en: "A mirror effect known as the 'mirror of the sky'",
            },
            { zh: "整片鹽面轉為紅色", en: "The whole surface turning red" },
            { zh: "噴出鹽水間歇泉", en: "Erupting saltwater geysers" },
            { zh: "夜間發出磷光", en: "Glowing with phosphorescence at night" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "上萬平方公里的鹽原覆上薄薄雨水後,天地倒影渾然一體,鹽沼下方還蘊藏世界頂級的鋰礦資源。",
            en: "A thin sheet of rainwater turns 10,000+ km² of salt into a perfect mirror of the sky — with world-class lithium reserves beneath.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "蘇克雷是憲法首都,但總統府與國會實際位於拉巴斯,使玻利維亞成為「雙首都」國家。",
        en: "Sucre is the constitutional capital, but the presidency and congress sit in La Paz — giving Bolivia two capitals in practice.",
      },
      {
        zh: "玻利維亞的鋰資源蘊藏量位居世界前列,大多沉睡在烏尤尼鹽沼之下。",
        en: "Bolivia holds some of the world's largest lithium resources, most of them beneath the Salar de Uyuni.",
      },
    ],
  },
  {
    id: "URY",
    name: { zh: "烏拉圭", en: "Uruguay" },
    capital: { zh: "蒙特維多", en: "Montevideo" },
    flag: "🇺🇾",
    region: "americas",
    center: { lat: -32.6, lng: -55.8 },
    intro: {
      zh: "夾在巴西與阿根廷之間的南美小國,草原放牧與大西洋海岸構成悠緩風景。政治穩定、社會進步,常被稱為「南美的瑞士」,足球實力更遠超其人口規模。",
      en: "A small country tucked between Brazil and Argentina, of rolling ranchlands and Atlantic beaches. Stable and socially progressive — often called the 'Switzerland of South America' — with footballing success far beyond its size.",
    },
    history: {
      zh: "原住民查魯亞人世居此地,殖民時期西班牙與葡萄牙反覆爭奪這片緩衝地帶。1811 年民族英雄阿蒂加斯起義,幾經戰亂後於 1828 年在英國斡旋下成為獨立緩衝國。20 世紀初率先建立福利國家與世俗化制度,贏得「南美瑞士」美名;1973–85 年軍政府統治後恢復民主,如今是拉丁美洲最穩定、清廉的民主國家之一。",
      en: "Home to the Charrúa people, the region became a buffer contested by Spain and Portugal. National hero Artigas rose in 1811, and after years of conflict Uruguay emerged in 1828 as an independent buffer state brokered by Britain. An early-20th-century pioneer of welfare and secular institutions — the 'Switzerland of South America' — it endured military rule from 1973 to 1985 and is now among Latin America's most stable, least corrupt democracies.",
    },
    cities: [
      {
        name: { zh: "蒙特維多", en: "Montevideo" },
        blurb: {
          zh: "拉普拉塔河口的首都,全國近半人口居住於此,海濱步道綿延二十餘公里。",
          en: "The capital on the Río de la Plata, home to nearly half the country, with a seafront rambla stretching over 20 km.",
        },
        trivia: {
          question: {
            zh: "1930 年首屆世界盃足球賽在蒙特維多舉行,最後由哪一隊奪冠?",
            en: "The first FIFA World Cup was held in Montevideo in 1930 — who won it?",
          },
          options: [
            { zh: "地主烏拉圭", en: "Hosts Uruguay" },
            { zh: "阿根廷", en: "Argentina" },
            { zh: "巴西", en: "Brazil" },
            { zh: "義大利", en: "Italy" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "烏拉圭在世紀球場以 4 比 2 擊敗阿根廷奪得首座世界盃,該球場至今仍在使用。",
            en: "Uruguay beat Argentina 4–2 at the Estadio Centenario, which still hosts matches today.",
          },
        },
      },
      {
        name: { zh: "埃斯特角城", en: "Punta del Este" },
        blurb: {
          zh: "大西洋岸的度假勝地,夏季湧入大批南美富豪與遊客,有「南美漢普頓」之稱。",
          en: "An Atlantic resort town flooded by South American jet-setters each summer — the 'Hamptons of South America'.",
        },
        trivia: {
          question: {
            zh: "埃斯特角城海灘上最著名的地標,是什麼造型的雕塑?",
            en: "The most famous landmark on Punta del Este's beach is a sculpture shaped like what?",
          },
          options: [
            {
              zh: "從沙中伸出的一隻巨手",
              en: "A giant hand emerging from the sand",
            },
            { zh: "躍出海面的鯨魚尾", en: "A whale's tail breaching the sea" },
            { zh: "傾斜的巨型燈塔", en: "A giant leaning lighthouse" },
            { zh: "一艘擱淺的帆船", en: "A stranded sailing ship" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "智利藝術家伊拉蘇里斯 1982 年創作的《手》五指破沙而出,提醒泳客留意海浪,已成城市象徵。",
            en: "Chilean artist Mario Irarrázabal's 'La Mano' (1982) thrusts five fingers from the sand as a warning to swimmers — now the town's icon.",
          },
        },
      },
      {
        name: { zh: "科洛尼亞-德爾沙加緬度", en: "Colonia del Sacramento" },
        blurb: {
          zh: "拉普拉塔河畔的殖民古鎮,鵝卵石巷弄保存完好,列入世界遺產。",
          en: "A colonial town on the Río de la Plata, its cobbled lanes beautifully preserved — a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "科洛尼亞老城 1680 年由哪國人建立,其後與西班牙勢力反覆易手?",
            en: "Colonia's old town was founded in 1680 by settlers from which country, then changed hands repeatedly with Spain?",
          },
          options: [
            { zh: "葡萄牙", en: "Portugal" },
            { zh: "英國", en: "Britain" },
            { zh: "法國", en: "France" },
            { zh: "荷蘭", en: "The Netherlands" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "葡萄牙人在西班牙勢力範圍邊上建立這個走私據點,城區至今混合著葡式與西式街道格局。",
            en: "The Portuguese built it as a smuggling outpost on Spain's doorstep; its streets still mix Portuguese and Spanish town planning.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2013 年烏拉圭成為全球第一個在全國層級將大麻合法化並納入管制的國家。",
        en: "In 2013 Uruguay became the first country to fully legalize and regulate cannabis nationwide.",
      },
      {
        zh: "烏拉圭人均馬黛茶消費量世界第一,街上隨處可見夾著保溫瓶喝馬黛茶的人。",
        en: "Uruguayans drink more mate per capita than anyone — locals carry thermoses everywhere for it.",
      },
    ],
  },
];
