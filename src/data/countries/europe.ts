import type { Country } from "../types";

// Europe: 19 countries. Content shape is LLM-generatable — see types.ts.

export const EUROPE: Country[] = [
  {
    id: "GBR",
    name: { zh: "英國", en: "United Kingdom" },
    capital: { zh: "倫敦", en: "London" },
    flag: "🇬🇧",
    region: "europe",
    center: { lat: 54.0, lng: -2.5 },
    intro: {
      zh: "由英格蘭、蘇格蘭、威爾斯與北愛爾蘭組成的島國,工業革命的發源地。議會民主與君主立憲並行,倫敦是全球金融重鎮,足球、搖滾樂與下午茶文化影響遍及世界。",
      en: "An island nation of England, Scotland, Wales, and Northern Ireland — the birthplace of the Industrial Revolution. A parliamentary democracy under a constitutional monarchy, with London as a global financial hub and football, rock music, and afternoon tea as worldwide exports.",
    },
    history: {
      zh: "羅馬人曾統治不列顛南部,其後盎格魯撒克遜諸王國興起,1066 年諾曼征服重塑英格蘭。1215 年大憲章開啟限制王權的傳統,1707 年英格蘭與蘇格蘭合併為大不列顛。作為工業革命發源地,19 世紀大英帝國統治全球約四分之一的土地與人口。兩次世界大戰後帝國逐步解體,1973 年加入歐洲共同體,2020 年正式脫離歐盟。",
      en: "Rome ruled southern Britain before Anglo-Saxon kingdoms rose; the Norman Conquest of 1066 reshaped England. Magna Carta in 1215 began a tradition of limiting royal power, and England and Scotland united as Great Britain in 1707. Cradle of the Industrial Revolution, the British Empire governed about a quarter of the world in the 19th century. The empire dissolved after two world wars; the UK joined the European Community in 1973 and left the EU in 2020.",
    },
    cities: [
      {
        name: { zh: "倫敦", en: "London" },
        blurb: {
          zh: "泰晤士河畔的兩千年古城,金融城、西區劇院與王室景點並存。",
          en: "A 2,000-year-old city on the Thames, home to the financial City, West End theatres, and royal landmarks.",
        },
        trivia: {
          question: {
            zh: "倫敦地標「大笨鐘」(Big Ben)這個名字嚴格來說指的是什麼?",
            en: "Strictly speaking, what does the name 'Big Ben' in London refer to?",
          },
          options: [
            { zh: "鐘樓裡的大鐘", en: "The great bell inside the tower" },
            { zh: "鐘樓本身", en: "The clock tower itself" },
            { zh: "四面的鐘面", en: "The four clock faces" },
            { zh: "整座國會大廈", en: "The whole Palace of Westminster" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Big Ben 是塔內重 13.7 噸大鐘的暱稱;鐘樓 2012 年起正式名為伊莉莎白塔。",
            en: "Big Ben is the nickname of the 13.7-tonne bell; the tower was officially renamed Elizabeth Tower in 2012.",
          },
        },
      },
      {
        name: { zh: "愛丁堡", en: "Edinburgh" },
        blurb: {
          zh: "蘇格蘭首府,古堡俯瞰全城,每年八月的藝術節匯聚全球表演者。",
          en: "Scotland's capital, crowned by its castle and host to the world-famous festivals every August.",
        },
        trivia: {
          question: {
            zh: "愛丁堡城堡矗立在什麼樣的地質構造上?",
            en: "Edinburgh Castle sits atop what kind of geological formation?",
          },
          options: [
            { zh: "死火山的岩頸", en: "The plug of an extinct volcano" },
            { zh: "石灰岩懸崖", en: "A limestone cliff" },
            { zh: "人工堆築的土丘", en: "A man-made earthen mound" },
            { zh: "花崗岩山脊", en: "A granite ridge" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "城堡岩(Castle Rock)是三億多年前火山活動留下的岩頸,冰川侵蝕後形成天然要塞。",
            en: "Castle Rock is a volcanic plug over 300 million years old, carved by glaciers into a natural fortress.",
          },
        },
      },
      {
        name: { zh: "曼徹斯特", en: "Manchester" },
        blurb: {
          zh: "工業革命的心臟,棉紡之都,如今以足球與音樂場景聞名。",
          en: "The heart of the Industrial Revolution and cotton capital, now famous for football and its music scene.",
        },
        trivia: {
          question: {
            zh: "1830 年通車的世界第一條城際客運鐵路,連接曼徹斯特與哪座城市?",
            en: "The world's first inter-city passenger railway, opened in 1830, linked Manchester with which city?",
          },
          options: [
            { zh: "利物浦", en: "Liverpool" },
            { zh: "伯明罕", en: "Birmingham" },
            { zh: "里茲", en: "Leeds" },
            { zh: "倫敦", en: "London" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "利物浦-曼徹斯特鐵路以史蒂文生的「火箭號」蒸汽機車營運,開啟鐵路時代。",
            en: "The Liverpool and Manchester Railway ran Stephenson's Rocket, launching the railway age.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "倫敦是唯一舉辦過三屆夏季奧運的城市(1908、1948、2012)。",
        en: "London is the only city to have hosted the Summer Olympics three times (1908, 1948, 2012).",
      },
      {
        zh: "英國沒有一部單一成文憲法,憲政由法律、判例與慣例組成。",
        en: "The UK has no single written constitution — its constitutional order rests on statutes, precedents, and conventions.",
      },
    ],
  },
  {
    id: "FRA",
    name: { zh: "法國", en: "France" },
    capital: { zh: "巴黎", en: "Paris" },
    flag: "🇫🇷",
    region: "europe",
    center: { lat: 46.6, lng: 2.4 },
    intro: {
      zh: "西歐面積最大的國家,從諾曼第海岸到阿爾卑斯山、蔚藍海岸風景多變。以美食、葡萄酒、時尚與藝術聞名,是全球最多觀光客造訪的國家,也是聯合國安理會常任理事國。",
      en: "Western Europe's largest country, ranging from Normandy's coast to the Alps and the Riviera. Renowned for cuisine, wine, fashion, and art, it is the world's most-visited country and a permanent member of the UN Security Council.",
    },
    history: {
      zh: "高盧地區被羅馬征服後,法蘭克王國於中世紀奠定國家雛形,歷經百年戰爭與路易十四的絕對王權盛世。1789 年大革命推翻君主制,拿破崙帝國一度橫掃歐洲。兩次世界大戰使法國成為主戰場,戰後戴高樂建立第五共和,並與德國和解共同推動歐洲整合,是歐盟的核心創始國。",
      en: "Roman Gaul gave way to the Frankish kingdom that shaped medieval France, through the Hundred Years' War and the absolutism of Louis XIV. The Revolution of 1789 toppled the monarchy, and Napoleon's empire briefly dominated Europe. After two world wars fought on its soil, de Gaulle founded the Fifth Republic, and reconciliation with Germany made France a founding pillar of the European Union.",
    },
    cities: [
      {
        name: { zh: "巴黎", en: "Paris" },
        blurb: {
          zh: "「光之城」,羅浮宮、塞納河與林蔭大道構成的藝術之都。",
          en: "The City of Light — an art capital of the Louvre, the Seine, and grand boulevards.",
        },
        trivia: {
          question: {
            zh: "巴黎艾菲爾鐵塔最初是為了什麼場合而建造的?",
            en: "The Eiffel Tower in Paris was originally built for what occasion?",
          },
          options: [
            { zh: "1889 年世界博覽會", en: "The 1889 World's Fair" },
            { zh: "1900 年巴黎奧運", en: "The 1900 Paris Olympics" },
            { zh: "拿破崙加冕百年紀念", en: "The centenary of Napoleon's coronation" },
            { zh: "第一次世界大戰勝利紀念", en: "The victory celebration after WWI" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鐵塔為紀念法國大革命一百週年的世博會而建,原定拆除,卻成了巴黎的永久象徵。",
            en: "Built for the World's Fair marking the Revolution's centenary, it was meant to be temporary — and became the symbol of Paris.",
          },
        },
      },
      {
        name: { zh: "里昂", en: "Lyon" },
        blurb: {
          zh: "法國美食之都與絲綢古城,隆河與索恩河在此交會。",
          en: "France's gastronomic capital and old silk city, at the meeting of the Rhone and Saone rivers.",
        },
        trivia: {
          question: {
            zh: "里昂被視為電影的誕生地,因為哪對兄弟在此拍攝了最早的電影?",
            en: "Lyon is considered the birthplace of cinema thanks to which brothers, who filmed the first movies there?",
          },
          options: [
            { zh: "盧米埃兄弟", en: "The Lumiere brothers" },
            { zh: "蒙哥菲爾兄弟", en: "The Montgolfier brothers" },
            { zh: "格林兄弟", en: "The Grimm brothers" },
            { zh: "萊特兄弟", en: "The Wright brothers" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1895 年盧米埃兄弟在里昂拍下《工廠下班》,同年在巴黎舉行史上首次售票公開放映。",
            en: "In 1895 the Lumieres filmed workers leaving their Lyon factory and held the first paid public screening in Paris that year.",
          },
        },
      },
      {
        name: { zh: "馬賽", en: "Marseille" },
        blurb: {
          zh: "地中海最大港口之一,法國最古老的城市,馬賽魚湯的故鄉。",
          en: "One of the Mediterranean's great ports, France's oldest city, and the home of bouillabaisse.",
        },
        trivia: {
          question: {
            zh: "馬賽約在西元前 600 年由哪個民族建立,是法國最古老的城市?",
            en: "Marseille, France's oldest city, was founded around 600 BC by which people?",
          },
          options: [
            { zh: "希臘人", en: "The Greeks" },
            { zh: "羅馬人", en: "The Romans" },
            { zh: "腓尼基人", en: "The Phoenicians" },
            { zh: "凱爾特人", en: "The Celts" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "來自小亞細亞福西亞的希臘殖民者建立「馬薩利亞」,比羅馬統治高盧早了數百年。",
            en: "Greek colonists from Phocaea founded 'Massalia' centuries before Rome conquered Gaul.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "法國是全球接待最多國際觀光客的國家,每年約一億人次造訪。",
        en: "France welcomes more international tourists than any other country — around 100 million visits a year.",
      },
    ],
  },
  {
    id: "DEU",
    name: { zh: "德國", en: "Germany" },
    capital: { zh: "柏林", en: "Berlin" },
    flag: "🇩🇪",
    region: "europe",
    center: { lat: 51.1, lng: 10.4 },
    intro: {
      zh: "歐盟人口最多的國家與最大經濟體,汽車、機械與化工業實力雄厚。從貝多芬、歌德到包浩斯,「詩人與思想家之國」文化遺產深厚,啤酒節與耶誕市集聞名世界。",
      en: "The EU's most populous country and largest economy, a powerhouse of cars, machinery, and chemicals. From Beethoven and Goethe to the Bauhaus, the 'land of poets and thinkers' pairs deep cultural heritage with beloved beer festivals and Christmas markets.",
    },
    history: {
      zh: "神聖羅馬帝國以鬆散邦國的形式延續近千年,1871 年在俾斯麥主導下由普魯士完成統一。20 世紀經歷兩次世界大戰,納粹政權發動二戰並犯下大屠殺,戰敗後國家分裂為東西德。1989 年柏林圍牆倒塌,1990 年重新統一,如今是歐盟最重要的政治與經濟支柱,並以深刻反省歷史著稱。",
      en: "The Holy Roman Empire persisted as a patchwork of states for nearly a millennium until Bismarck unified Germany under Prussia in 1871. The 20th century brought two world wars; the Nazi regime launched WWII and perpetrated the Holocaust, and defeat split the country into East and West. The Berlin Wall fell in 1989, reunification followed in 1990, and Germany is now the EU's political and economic anchor, known for confronting its past.",
    },
    cities: [
      {
        name: { zh: "柏林", en: "Berlin" },
        blurb: {
          zh: "曾被冷戰一分為二的首都,如今是歐洲最具創造力的藝術與新創之都。",
          en: "A capital once split by the Cold War, now one of Europe's most creative hubs for art and startups.",
        },
        trivia: {
          question: {
            zh: "分隔東西柏林近三十年的柏林圍牆,在哪一年倒下?",
            en: "The Berlin Wall, which divided the city for nearly three decades, fell in which year?",
          },
          options: [
            { zh: "1989 年", en: "1989" },
            { zh: "1991 年", en: "1991" },
            { zh: "1985 年", en: "1985" },
            { zh: "1993 年", en: "1993" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1989 年 11 月 9 日東德開放邊境,圍牆一夜之間被推倒,次年兩德統一。",
            en: "East Germany opened the border on November 9, 1989; the Wall came down overnight, and reunification followed in 1990.",
          },
        },
      },
      {
        name: { zh: "慕尼黑", en: "Munich" },
        blurb: {
          zh: "巴伐利亞首府,啤酒節的故鄉,BMW 總部與阿爾卑斯山的門戶。",
          en: "Bavaria's capital, home of Oktoberfest, BMW headquarters, and the gateway to the Alps.",
        },
        trivia: {
          question: {
            zh: "慕尼黑啤酒節(Oktoberfest)最初在 1810 年是為了慶祝什麼而舉辦的?",
            en: "The first Oktoberfest in Munich in 1810 was held to celebrate what?",
          },
          options: [
            { zh: "王儲的婚禮", en: "A crown prince's wedding" },
            { zh: "戰爭勝利", en: "A military victory" },
            { zh: "秋季豐收", en: "The autumn harvest" },
            { zh: "建城週年", en: "The city's founding anniversary" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴伐利亞王儲路德維希與特蕾莎公主成婚,全城同慶並舉行賽馬,此後年年舉辦成為傳統。",
            en: "Crown Prince Ludwig married Princess Therese, and the citywide festivities with horse races became an annual tradition.",
          },
        },
      },
      {
        name: { zh: "漢堡", en: "Hamburg" },
        blurb: {
          zh: "德國最大港口城市,漢薩同盟的自由市傳統延續至今。",
          en: "Germany's biggest port city, still carrying its Hanseatic free-city tradition.",
        },
        trivia: {
          question: {
            zh: "1960 年代初,哪支後來紅遍全球的樂團曾在漢堡的俱樂部長期駐唱磨練?",
            en: "In the early 1960s, which band honed its craft with long club residencies in Hamburg before global fame?",
          },
          options: [
            { zh: "披頭四", en: "The Beatles" },
            { zh: "滾石樂團", en: "The Rolling Stones" },
            { zh: "皇后樂團", en: "Queen" },
            { zh: "誰人樂團", en: "The Who" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1960 至 1962 年間披頭四在漢堡的俱樂部演出數百場,約翰藍儂曾說「我在漢堡長大」。",
            en: "From 1960 to 1962 the Beatles played hundreds of shows in Hamburg clubs — John Lennon said, 'I grew up in Hamburg.'",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1516 年的《啤酒純釀法》規定啤酒只能用大麥、啤酒花和水釀造,是世界最古老的食品法規之一。",
        en: "The 1516 Reinheitsgebot, limiting beer to barley, hops, and water, is one of the world's oldest food regulations.",
      },
      {
        zh: "德國有超過三千種麵包,麵包文化被列入德國非物質文化遺產名錄。",
        en: "Germany boasts over 3,000 kinds of bread, and its bread culture is on the national intangible heritage register.",
      },
    ],
  },
  {
    id: "ITA",
    name: { zh: "義大利", en: "Italy" },
    capital: { zh: "羅馬", en: "Rome" },
    flag: "🇮🇹",
    region: "europe",
    center: { lat: 42.8, lng: 12.6 },
    intro: {
      zh: "伸入地中海的靴形半島,羅馬帝國與文藝復興的故鄉。披薩、義大利麵與濃縮咖啡征服全球味蕾,法拉利與時尚產業展現設計實力,世界遺產數量居全球之冠。",
      en: "A boot-shaped peninsula in the Mediterranean, home of the Roman Empire and the Renaissance. Pizza, pasta, and espresso conquered the world's palate, Ferrari and fashion showcase its design flair, and it holds more UNESCO World Heritage sites than any other country.",
    },
    history: {
      zh: "羅馬從城邦成長為橫跨三大洲的帝國,奠定歐洲的法律與語言基礎。帝國崩解後半島分裂千年,中世紀城邦如威尼斯、佛羅倫斯孕育出文藝復興。1861 年在加里波底等人推動下完成統一,20 世紀經歷墨索里尼法西斯政權與二戰戰敗,1946 年公投廢除君主制成立共和國,為歐盟創始國之一。",
      en: "Rome grew from a city-state into an empire spanning three continents, laying Europe's legal and linguistic foundations. After its fall the peninsula stayed divided for a millennium, while city-states like Venice and Florence birthed the Renaissance. Unification came in 1861 through figures like Garibaldi; the 20th century brought Mussolini's fascism and defeat in WWII, and a 1946 referendum created the republic — a founding member of the EU.",
    },
    cities: [
      {
        name: { zh: "羅馬", en: "Rome" },
        blurb: {
          zh: "「永恆之城」,競技場與萬神殿見證兩千七百年的歷史層疊。",
          en: "The Eternal City — the Colosseum and Pantheon layer 2,700 years of history.",
        },
        trivia: {
          question: {
            zh: "羅馬市區內完整包圍著哪一個獨立國家?",
            en: "Which independent country is entirely surrounded by the city of Rome?",
          },
          options: [
            { zh: "梵蒂岡", en: "Vatican City" },
            { zh: "聖馬利諾", en: "San Marino" },
            { zh: "摩納哥", en: "Monaco" },
            { zh: "安道爾", en: "Andorra" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "梵蒂岡面積僅 0.44 平方公里,是世界最小的主權國家,也是天主教會的中心。",
            en: "At just 0.44 square kilometers, Vatican City is the world's smallest sovereign state and the center of the Catholic Church.",
          },
        },
      },
      {
        name: { zh: "威尼斯", en: "Venice" },
        blurb: {
          zh: "建在潟湖上的水都,運河取代街道,貢多拉穿梭其間。",
          en: "A city on a lagoon where canals replace streets and gondolas glide between palaces.",
        },
        trivia: {
          question: {
            zh: "威尼斯的建築物主要立在什麼樣的基礎上?",
            en: "The buildings of Venice mostly stand on what kind of foundation?",
          },
          options: [
            { zh: "打入潟湖泥層的木樁", en: "Wooden piles driven into the lagoon mud" },
            { zh: "天然岩盤", en: "Natural bedrock" },
            { zh: "珊瑚礁平台", en: "Coral reef platforms" },
            { zh: "鋼筋混凝土沉箱", en: "Reinforced concrete caissons" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "數百萬根木樁深入缺氧泥層而不腐朽,千年來撐起整座城市的石造建築。",
            en: "Millions of timber piles, preserved in oxygen-poor mud, have carried the city's stone buildings for a thousand years.",
          },
        },
      },
      {
        name: { zh: "佛羅倫斯", en: "Florence" },
        blurb: {
          zh: "文藝復興的搖籃,烏菲茲美術館與麥地奇家族的城市。",
          en: "The cradle of the Renaissance, city of the Uffizi and the Medici.",
        },
        trivia: {
          question: {
            zh: "佛羅倫斯聖母百花大教堂的巨大紅色圓頂,是由哪位建築師設計建造的?",
            en: "The great red dome of Florence's cathedral was designed and built by which architect?",
          },
          options: [
            { zh: "布魯內萊斯基", en: "Filippo Brunelleschi" },
            { zh: "米開朗基羅", en: "Michelangelo" },
            { zh: "達文西", en: "Leonardo da Vinci" },
            { zh: "貝尼尼", en: "Gian Lorenzo Bernini" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "布魯內萊斯基以雙殼結構於 1436 年完成圓頂,至今仍是世界最大的磚石圓頂。",
            en: "Brunelleschi completed the ingenious double-shell dome in 1436 — still the largest masonry dome ever built.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "義大利擁有約 60 處世界遺產,數量居全球第一。",
        en: "Italy has about 60 UNESCO World Heritage sites — more than any other country.",
      },
    ],
  },
  {
    id: "ESP",
    name: { zh: "西班牙", en: "Spain" },
    capital: { zh: "馬德里", en: "Madrid" },
    flag: "🇪🇸",
    region: "europe",
    center: { lat: 40.3, lng: -3.7 },
    intro: {
      zh: "伊比利半島上的熱情國度,以佛朗明哥、鬥牛與 tapas 小酒館文化聞名。從高第建築到普拉多名畫,藝術能量豐沛;西班牙語是全球第二大母語,足球聯賽風靡世界。",
      en: "A passionate country on the Iberian Peninsula, famed for flamenco, bullfighting, and tapas culture. From Gaudi's architecture to the Prado's masterpieces, its art runs deep; Spanish is the world's second-most-spoken native language, and La Liga captivates football fans everywhere.",
    },
    history: {
      zh: "伊比利半島歷經羅馬、西哥德與摩爾人統治,基督教王國歷時數百年推進「收復失地運動」,1492 年攻下格拉納達,同年資助哥倫布抵達美洲。16 世紀成為橫跨美洲與亞洲的「日不落帝國」,其後漸走向衰落。1936 至 39 年內戰後由佛朗哥獨裁近四十年,1975 年他去世後和平轉型為民主國家,1986 年加入歐洲共同體。",
      en: "Iberia passed through Roman, Visigothic, and Moorish rule; Christian kingdoms completed the centuries-long Reconquista by taking Granada in 1492 — the same year Spain sponsored Columbus's voyage to the Americas. Its 16th-century empire spanned the globe before a long decline. After the 1936-39 civil war, Franco ruled as dictator for nearly forty years; his death in 1975 opened a peaceful transition to democracy, and Spain joined the European Community in 1986.",
    },
    cities: [
      {
        name: { zh: "馬德里", en: "Madrid" },
        blurb: {
          zh: "位居半島中心的首都,王宮、美術館金三角與深夜小酒館文化。",
          en: "The capital at the peninsula's heart — royal palace, a golden triangle of museums, and late-night tapas bars.",
        },
        trivia: {
          question: {
            zh: "馬德里的普拉多美術館最著名的館藏是哪一類作品?",
            en: "The Prado Museum in Madrid is most famous for which kind of collection?",
          },
          options: [
            {
              zh: "委拉斯奎茲、哥雅等歐洲大師的古典繪畫",
              en: "Old Master paintings by Velazquez, Goya, and their peers",
            },
            { zh: "現代抽象雕塑", en: "Modern abstract sculpture" },
            { zh: "古埃及文物", en: "Ancient Egyptian artifacts" },
            { zh: "當代攝影", en: "Contemporary photography" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "普拉多以西班牙王室收藏為基礎,鎮館之寶包括委拉斯奎茲《侍女》與哥雅的黑色繪畫。",
            en: "Built on the royal collection, its treasures include Velazquez's Las Meninas and Goya's Black Paintings.",
          },
        },
      },
      {
        name: { zh: "巴塞隆納", en: "Barcelona" },
        blurb: {
          zh: "加泰隆尼亞首府,高第的建築幻想與地中海海灘之城。",
          en: "Catalonia's capital — Gaudi's architectural fantasies beside Mediterranean beaches.",
        },
        trivia: {
          question: {
            zh: "巴塞隆納的聖家堂自哪一年動工,至今仍在興建中?",
            en: "Construction of the Sagrada Familia in Barcelona began in which year — and continues today?",
          },
          options: [
            { zh: "1882 年", en: "1882" },
            { zh: "1926 年", en: "1926" },
            { zh: "1852 年", en: "1852" },
            { zh: "1906 年", en: "1906" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1882 年動工,高第次年接手後傾注一生;他 1926 年去世時工程僅完成不到四分之一。",
            en: "Begun in 1882 and taken over by Gaudi a year later as his life's work — barely a quarter finished when he died in 1926.",
          },
        },
      },
      {
        name: { zh: "塞維亞", en: "Seville" },
        blurb: {
          zh: "安達魯西亞首府,佛朗明哥的心臟,大航海時代的門戶港。",
          en: "Andalusia's capital, the heartland of flamenco and Spain's gateway port in the Age of Discovery.",
        },
        trivia: {
          question: {
            zh: "塞維亞主教座堂是世界最大的哥德式教堂,堂內安放著哪位航海家的陵墓?",
            en: "Seville Cathedral, the world's largest Gothic church, holds the tomb of which explorer?",
          },
          options: [
            { zh: "哥倫布", en: "Christopher Columbus" },
            { zh: "麥哲倫", en: "Ferdinand Magellan" },
            { zh: "達伽馬", en: "Vasco da Gama" },
            { zh: "德瑞克", en: "Francis Drake" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "哥倫布的靈柩由代表四個王國的雕像抬起,2006 年 DNA 鑑定證實遺骸確為本人。",
            en: "Columbus's coffin is borne aloft by statues of four kingdoms; DNA testing in 2006 confirmed the remains are his.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "西班牙國歌《皇家進行曲》沒有官方歌詞,是世界少數「無詞國歌」之一。",
        en: "Spain's national anthem, the Marcha Real, has no official lyrics — one of the world's few wordless anthems.",
      },
    ],
  },
  {
    id: "PRT",
    name: { zh: "葡萄牙", en: "Portugal" },
    capital: { zh: "里斯本", en: "Lisbon" },
    flag: "🇵🇹",
    region: "europe",
    center: { lat: 39.6, lng: -8.0 },
    intro: {
      zh: "歐洲大陸最西端的國家,大航海時代的先驅。花磚外牆、法朵民謠與蛋塔構成獨特風情,葡萄牙語因航海殖民歷史成為兩億多人的母語,近年更是歐洲熱門的旅遊與移居地。",
      en: "Mainland Europe's westernmost country and pioneer of the Age of Discovery. Azulejo tiles, fado music, and custard tarts define its charm; thanks to its seafaring past, Portuguese is the mother tongue of over 200 million people, and the country is now one of Europe's hottest travel destinations.",
    },
    history: {
      zh: "1143 年獨立建國,是歐洲疆界最悠久的國家之一。15 世紀在恩里克王子推動下開啟大航海時代,達伽馬開闢印度航線,帝國一度遍及非洲、亞洲與巴西。1755 年里斯本大地震重創國力,1910 年成立共和國,其後薩拉查獨裁數十年,1974 年「康乃馨革命」和平轉型民主,1986 年加入歐洲共同體。",
      en: "Independent since 1143, Portugal has some of Europe's oldest stable borders. Prince Henry the Navigator launched the Age of Discovery in the 15th century, Vasco da Gama opened the sea route to India, and the empire stretched across Africa, Asia, and Brazil. The 1755 Lisbon earthquake was a devastating blow; a republic followed in 1910, then Salazar's long dictatorship, until the peaceful Carnation Revolution of 1974 restored democracy. Portugal joined the European Community in 1986.",
    },
    cities: [
      {
        name: { zh: "里斯本", en: "Lisbon" },
        blurb: {
          zh: "七丘之城,黃色電車爬行於石板巷弄,俯瞰太加斯河口。",
          en: "The city of seven hills, where yellow trams climb cobbled lanes above the Tagus estuary.",
        },
        trivia: {
          question: {
            zh: "1755 年重創里斯本、並深刻影響歐洲思想界的災難是什麼?",
            en: "What disaster devastated Lisbon in 1755 and shook the thinking of Enlightenment Europe?",
          },
          options: [
            {
              zh: "大地震引發海嘯與大火",
              en: "A great earthquake followed by tsunami and fires",
            },
            { zh: "黑死病大流行", en: "An outbreak of the plague" },
            { zh: "火山爆發", en: "A volcanic eruption" },
            { zh: "連年大洪水", en: "Years of catastrophic floods" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "地震、海嘯與大火摧毀大半座城,伏爾泰等啟蒙思想家因此激辯天意與理性。",
            en: "Quake, tsunami, and fire destroyed much of the city, sparking debates on providence and reason among thinkers like Voltaire.",
          },
        },
      },
      {
        name: { zh: "波多", en: "Porto" },
        blurb: {
          zh: "杜羅河口的北方之都,酒窖與鐵橋構成的世界遺產河岸。",
          en: "The northern capital at the Douro's mouth, its World Heritage riverfront lined with wine lodges and iron bridges.",
        },
        trivia: {
          question: {
            zh: "哪一種加烈葡萄酒以波多這座城市命名?",
            en: "Which fortified wine takes its name from the city of Porto?",
          },
          options: [
            { zh: "波特酒", en: "Port" },
            { zh: "雪莉酒", en: "Sherry" },
            { zh: "馬德拉酒", en: "Madeira" },
            { zh: "馬薩拉酒", en: "Marsala" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "杜羅河谷產的加烈甜酒自波多出口而得名;雪莉來自西班牙,馬德拉產自葡屬馬德拉群島。",
            en: "The fortified wine of the Douro Valley was shipped through Porto; sherry is Spanish, and Madeira comes from Portugal's Atlantic islands.",
          },
        },
      },
      {
        name: { zh: "科英布拉", en: "Coimbra" },
        blurb: {
          zh: "蒙德古河畔的大學城,黑袍學子與華麗巴洛克圖書館的古都。",
          en: "A university town on the Mondego, known for black-caped students and a dazzling Baroque library.",
        },
        trivia: {
          question: {
            zh: "葡萄牙最古老的大學如今位於科英布拉,它創立於哪個世紀?",
            en: "Portugal's oldest university, now based in Coimbra, was founded in which century?",
          },
          options: [
            { zh: "13 世紀", en: "The 13th century" },
            { zh: "15 世紀", en: "The 15th century" },
            { zh: "11 世紀", en: "The 11th century" },
            { zh: "17 世紀", en: "The 17th century" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "大學 1290 年創於里斯本,幾經遷移後 1537 年定址科英布拉,是歐洲最古老的大學之一。",
            en: "Founded in Lisbon in 1290 and settled permanently in Coimbra in 1537, it is among Europe's oldest universities.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "英葡同盟自 1373 年延續至今,是世界上仍然有效的最古老軍事同盟。",
        en: "The Anglo-Portuguese Alliance, dating from 1373, is the oldest military alliance still in force.",
      },
    ],
  },
  {
    id: "NLD",
    name: { zh: "荷蘭", en: "Netherlands" },
    capital: { zh: "阿姆斯特丹", en: "Amsterdam" },
    flag: "🇳🇱",
    region: "europe",
    center: { lat: 52.2, lng: 5.5 },
    intro: {
      zh: "「低地之國」,約四分之一國土低於海平面,數百年來靠堤防與風車與海爭地。鬱金香、單車文化與開放的社會風氣聞名,國土雖小,卻是全球第二大農產品出口國。",
      en: "The 'low country' — about a quarter of its land lies below sea level, reclaimed over centuries with dikes and windmills. Famous for tulips, cycling culture, and social openness, this small nation is the world's second-largest exporter of agricultural products.",
    },
    history: {
      zh: "16 世紀起低地諸省發動八十年戰爭反抗西班牙統治,1648 年獲承認獨立。17 世紀進入「黃金時代」,東印度公司稱霸海上貿易,林布蘭與維梅爾的畫作傳世。拿破崙時代被法國吞併,其後成立王國。二戰遭德國佔領五年,戰後積極推動歐洲整合,是歐盟前身組織的創始國之一。",
      en: "From the 16th century the low provinces fought the Eighty Years' War against Spanish rule, winning recognized independence in 1648. The 17th-century Golden Age saw the Dutch East India Company dominate sea trade while Rembrandt and Vermeer painted their masterpieces. Annexed under Napoleon, it later became a kingdom; after five years of Nazi occupation in WWII, it championed European integration as a founding member of the EU's forerunners.",
    },
    cities: [
      {
        name: { zh: "阿姆斯特丹", en: "Amsterdam" },
        blurb: {
          zh: "運河環繞的首都,單車比汽車多,博物館密度全球數一數二。",
          en: "A canal-ringed capital with more bikes than cars and one of the world's densest museum scenes.",
        },
        trivia: {
          question: {
            zh: "阿姆斯特丹著名的運河環帶建於哪個時期?",
            en: "Amsterdam's famous ring of canals was built during which period?",
          },
          options: [
            { zh: "17 世紀的黃金時代", en: "The 17th-century Golden Age" },
            { zh: "19 世紀工業化時期", en: "The 19th-century industrial era" },
            { zh: "15 世紀漢薩貿易時期", en: "The 15th-century Hanseatic era" },
            { zh: "二戰後重建時期", en: "The post-WWII reconstruction years" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "黃金時代人口暴增,城市沿三條同心運河向外擴張,運河環帶 2010 年列入世界遺產。",
            en: "As the Golden Age population boomed, the city expanded along three concentric canals — a World Heritage site since 2010.",
          },
        },
      },
      {
        name: { zh: "鹿特丹", en: "Rotterdam" },
        blurb: {
          zh: "二戰後重建為現代建築的實驗場,擁有歐洲最大的港口。",
          en: "Rebuilt after WWII into a playground of modern architecture, home to Europe's largest port.",
        },
        trivia: {
          question: {
            zh: "鹿特丹港長期是歐洲最大港口,它位於哪些大河匯流入海的三角洲?",
            en: "The port of Rotterdam, long Europe's largest, sits on the delta of which great rivers?",
          },
          options: [
            { zh: "萊茵河與馬士河", en: "The Rhine and the Meuse" },
            { zh: "易北河與威悉河", en: "The Elbe and the Weser" },
            { zh: "塞納河與羅亞爾河", en: "The Seine and the Loire" },
            { zh: "多瑙河與德拉瓦河", en: "The Danube and the Drava" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "萊茵-馬士河三角洲讓鹿特丹成為深入歐洲內陸的水運門戶,船隻可直達德國與瑞士。",
            en: "The Rhine-Meuse delta makes Rotterdam the waterborne gateway to Europe's interior, with barges reaching Germany and Switzerland.",
          },
        },
      },
      {
        name: { zh: "海牙", en: "The Hague" },
        blurb: {
          zh: "荷蘭政府與王室所在地,也是國際法之都。",
          en: "Seat of the Dutch government and royal court — and the world's capital of international law.",
        },
        trivia: {
          question: {
            zh: "海牙是聯合國哪個主要司法機關的所在地?",
            en: "The Hague is home to which principal judicial organ of the United Nations?",
          },
          options: [
            { zh: "國際法院", en: "The International Court of Justice" },
            { zh: "聯合國安全理事會", en: "The UN Security Council" },
            { zh: "聯合國人權理事會", en: "The UN Human Rights Council" },
            { zh: "國際勞工組織", en: "The International Labour Organization" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "國際法院設於海牙和平宮,審理國家之間的爭端;國際刑事法院也位於海牙。",
            en: "The ICJ sits in the Peace Palace, settling disputes between states; the International Criminal Court is also in The Hague.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "荷蘭的腳踏車數量超過總人口,約 2300 萬輛對 1800 萬人。",
        en: "The Netherlands has more bicycles than people — roughly 23 million bikes for 18 million residents.",
      },
      {
        zh: "阿姆斯特丹的斯希普霍爾機場位於海平面以下約 3 公尺,原址是一座湖泊。",
        en: "Amsterdam's Schiphol Airport lies about 3 meters below sea level, on land that was once a lake.",
      },
    ],
  },
  {
    id: "BEL",
    name: { zh: "比利時", en: "Belgium" },
    capital: { zh: "布魯塞爾", en: "Brussels" },
    flag: "🇧🇪",
    region: "europe",
    center: { lat: 50.6, lng: 4.6 },
    intro: {
      zh: "位居西歐十字路口的小國,北部說荷語、南部說法語。巧克力、鬆餅、薯條與上千種啤酒讓它成為美食天堂,布魯塞爾則因歐盟與北約總部而被稱為「歐洲首都」。",
      en: "A small country at Western Europe's crossroads, Dutch-speaking in the north and French-speaking in the south. Chocolate, waffles, fries, and over a thousand beers make it a food lover's paradise, while Brussels earns the title 'capital of Europe' as home to the EU and NATO.",
    },
    history: {
      zh: "低地南部歷經勃艮第、西班牙與奧地利哈布斯堡統治,中世紀法蘭德斯城市以紡織貿易富甲一方。1830 年革命脫離荷蘭獨立建國,採君主立憲制。兩次世界大戰均遭德國入侵,是西線的主要戰場之一。戰後放棄中立政策,推動歐洲整合,布魯塞爾成為歐盟機構與北約總部所在地。",
      en: "The southern Low Countries passed through Burgundian, Spanish, and Austrian Habsburg rule, while medieval Flemish cities grew rich on the cloth trade. An 1830 revolution won independence from the Netherlands as a constitutional monarchy. Invaded by Germany in both world wars, Belgium abandoned neutrality afterward, embraced European integration, and made Brussels the seat of the EU institutions and NATO headquarters.",
    },
    cities: [
      {
        name: { zh: "布魯塞爾", en: "Brussels" },
        blurb: {
          zh: "大廣場的黃金山牆與尿尿小童齊名,歐盟機構林立的雙語首都。",
          en: "A bilingual capital of the gilded Grand Place, the Manneken Pis, and the EU quarter.",
        },
        trivia: {
          question: {
            zh: "布魯塞爾因設有哪個組織的主要機構,而被稱為「歐洲首都」?",
            en: "Brussels is called the 'capital of Europe' because it hosts the main institutions of which organization?",
          },
          options: [
            { zh: "歐洲聯盟", en: "The European Union" },
            { zh: "聯合國", en: "The United Nations" },
            { zh: "世界貿易組織", en: "The World Trade Organization" },
            { zh: "國際奧林匹克委員會", en: "The International Olympic Committee" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "歐盟執委會與部長理事會皆設於布魯塞爾,北約總部也在市郊。",
            en: "The European Commission and the Council of the EU are based in Brussels, with NATO headquarters on the city's edge.",
          },
        },
      },
      {
        name: { zh: "布魯日", en: "Bruges" },
        blurb: {
          zh: "運河交織的中世紀古城,有「北方威尼斯」美稱。",
          en: "A medieval city laced with canals, nicknamed the 'Venice of the North'.",
        },
        trivia: {
          question: {
            zh: "布魯日在中世紀憑什麼成為北歐最富庶的城市之一?",
            en: "What made Bruges one of medieval northern Europe's wealthiest cities?",
          },
          options: [
            { zh: "羊毛與布料貿易", en: "The wool and cloth trade" },
            { zh: "銀礦開採", en: "Silver mining" },
            { zh: "香料種植", en: "Spice plantations" },
            { zh: "漁業與捕鯨", en: "Fishing and whaling" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法蘭德斯毛紡業與漢薩貿易讓布魯日成為商業樞紐,後因出海口淤積而沒落,古城因此凍結保存。",
            en: "Flemish cloth and Hanseatic trade made Bruges a commercial hub; when its sea channel silted up, the city froze in time.",
          },
        },
      },
      {
        name: { zh: "安特衛普", en: "Antwerp" },
        blurb: {
          zh: "斯海爾德河畔的港口大城,魯本斯的故鄉,時尚設計重鎮。",
          en: "A great port on the Scheldt, home of Rubens and a fashion-design powerhouse.",
        },
        trivia: {
          question: {
            zh: "安特衛普數百年來是哪種商品的全球交易中心?",
            en: "For centuries, Antwerp has been the world's trading center for which commodity?",
          },
          options: [
            { zh: "鑽石", en: "Diamonds" },
            { zh: "黃金", en: "Gold" },
            { zh: "咖啡", en: "Coffee" },
            { zh: "絲綢", en: "Silk" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "自 15 世紀起安特衛普就是鑽石切割與交易重鎮,全球大部分原鑽都曾經過這裡。",
            en: "Antwerp has cut and traded diamonds since the 15th century — most of the world's rough diamonds have passed through it.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "比利時有超過一千五百種啤酒,其啤酒文化被聯合國教科文組織列為非物質文化遺產。",
        en: "Belgium brews over 1,500 kinds of beer, and its beer culture is UNESCO-listed intangible heritage.",
      },
    ],
  },
  {
    id: "CHE",
    name: { zh: "瑞士", en: "Switzerland" },
    capital: { zh: "伯恩", en: "Bern" },
    flag: "🇨🇭",
    region: "europe",
    center: { lat: 46.8, lng: 8.2 },
    intro: {
      zh: "阿爾卑斯山環抱的內陸國,以永久中立、精密鐘錶、銀行業與巧克力聞名。德、法、義、羅曼什四種語言並列官方語言,直接民主讓公民一年公投數次,人均所得居世界前列。",
      en: "A landlocked country cradled by the Alps, famous for permanent neutrality, precision watches, banking, and chocolate. German, French, Italian, and Romansh are all official languages, direct democracy sends citizens to the polls several times a year, and incomes rank among the world's highest.",
    },
    history: {
      zh: "1291 年三個森林州結盟互保,傳統上視為瑞士建國之始,其後邦聯逐步擴張。1648 年獲承認脫離神聖羅馬帝國,1815 年維也納會議確立其永久中立地位。此後兩百年未捲入對外戰爭,兩次世界大戰皆置身事外,發展成金融與國際組織中心;2002 年才加入聯合國,至今仍非歐盟成員。",
      en: "In 1291 three forest cantons swore mutual defense — traditionally counted as Switzerland's founding — and the confederation grew from there. Independence from the Holy Roman Empire was recognized in 1648, and the 1815 Congress of Vienna guaranteed permanent neutrality. Untouched by two world wars, it became a hub of finance and international organizations, joining the UN only in 2002 and remaining outside the EU.",
    },
    cities: [
      {
        name: { zh: "伯恩", en: "Bern" },
        blurb: {
          zh: "聯邦政府所在地,中世紀老城與拱廊街列為世界遺產。",
          en: "Seat of the federal government, with a World Heritage medieval old town of arcaded streets.",
        },
        trivia: {
          question: {
            zh: "哪位物理學家在伯恩專利局工作期間,於 1905 年發表了狹義相對論?",
            en: "Which physicist published special relativity in 1905 while working at the patent office in Bern?",
          },
          options: [
            { zh: "愛因斯坦", en: "Albert Einstein" },
            { zh: "波耳", en: "Niels Bohr" },
            { zh: "普朗克", en: "Max Planck" },
            { zh: "海森堡", en: "Werner Heisenberg" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "愛因斯坦在伯恩度過「奇蹟年」,一年內發表四篇改變物理學的論文,故居至今開放參觀。",
            en: "Einstein had his 'miracle year' in Bern, publishing four physics-changing papers; his apartment is now a museum.",
          },
        },
      },
      {
        name: { zh: "蘇黎世", en: "Zurich" },
        blurb: {
          zh: "瑞士最大城市與金融中心,湖光山色與銀行大街並存。",
          en: "Switzerland's largest city and financial center, where lakeside views meet the Bahnhofstrasse banks.",
        },
        trivia: {
          question: {
            zh: "1916 年在蘇黎世的伏爾泰酒館誕生了哪個前衛藝術運動?",
            en: "Which avant-garde art movement was born at the Cabaret Voltaire in Zurich in 1916?",
          },
          options: [
            { zh: "達達主義", en: "Dada" },
            { zh: "超現實主義", en: "Surrealism" },
            { zh: "立體主義", en: "Cubism" },
            { zh: "未來主義", en: "Futurism" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "一戰期間流亡蘇黎世的藝術家以荒誕反抗戰爭理性,達達主義由此席捲歐美藝壇。",
            en: "Artists exiled in wartime Zurich answered the war's madness with absurdity — Dada then swept Europe and America.",
          },
        },
      },
      {
        name: { zh: "日內瓦", en: "Geneva" },
        blurb: {
          zh: "法語區的國際之都,萊夢湖畔聚集聯合國歐洲總部與眾多國際組織。",
          en: "The French-speaking international capital on Lake Geneva, hosting the UN's European headquarters and many global bodies.",
        },
        trivia: {
          question: {
            zh: "哪個人道組織於 1863 年創立於日內瓦,標誌恰好是瑞士國旗紅白顏色互換?",
            en: "Which humanitarian organization, founded in Geneva in 1863, uses an emblem that reverses the colors of the Swiss flag?",
          },
          options: [
            { zh: "紅十字國際委員會", en: "The International Committee of the Red Cross" },
            { zh: "無國界醫生", en: "Doctors Without Borders" },
            { zh: "國際特赦組織", en: "Amnesty International" },
            { zh: "樂施會", en: "Oxfam" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "杜南目睹索爾費里諾戰役慘況後推動創立紅十字會,白底紅十字正是瑞士國旗的反轉致敬。",
            en: "Henry Dunant founded the Red Cross after witnessing the Battle of Solferino; the red cross on white honors Switzerland's flag in reverse.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "瑞士的防空洞與掩體數量足以容納全國人口。",
        en: "Switzerland has enough bunkers and shelters to house its entire population.",
      },
      {
        zh: "瑞士人平均每年吃掉約 11 公斤巧克力,居世界前列。",
        en: "The Swiss eat about 11 kilograms of chocolate per person per year — among the most in the world.",
      },
    ],
  },
  {
    id: "AUT",
    name: { zh: "奧地利", en: "Austria" },
    capital: { zh: "維也納", en: "Vienna" },
    flag: "🇦🇹",
    region: "europe",
    center: { lat: 47.6, lng: 14.1 },
    intro: {
      zh: "阿爾卑斯山東段的內陸國,曾是統治中歐的帝國核心。莫札特、貝多芬與舒伯特都在此譜寫傳世樂章,「音樂之都」維也納與滑雪勝地、湖區風光是它的兩張名片。",
      en: "A landlocked country in the eastern Alps that once ruled Central Europe as an imperial heartland. Mozart, Beethoven, and Schubert composed here, and today its calling cards are musical Vienna and world-class ski resorts and lake country.",
    },
    history: {
      zh: "哈布斯堡王朝以維也納為中心統治中歐六百餘年,兩度擊退鄂圖曼帝國圍城,1867 年改組為奧匈帝國。一戰戰敗後帝國解體,只餘下小小的共和國;1938 年被納粹德國併吞,二戰後受盟軍佔領,1955 年恢復主權並宣布永久中立,1995 年加入歐盟,如今是中歐富裕安定的代表。",
      en: "From Vienna the Habsburgs ruled Central Europe for over six centuries, twice repelling Ottoman sieges, and reorganized as Austria-Hungary in 1867. Defeat in WWI shattered the empire into a small republic; annexed by Nazi Germany in 1938 and occupied after WWII, Austria regained sovereignty in 1955 with a declaration of permanent neutrality, joined the EU in 1995, and is now a byword for Central European prosperity.",
    },
    cities: [
      {
        name: { zh: "維也納", en: "Vienna" },
        blurb: {
          zh: "多瑙河畔的音樂之都,宮殿、咖啡館與歌劇院之城。",
          en: "The music capital on the Danube — a city of palaces, coffeehouses, and opera.",
        },
        trivia: {
          question: {
            zh: "每年元旦向全球轉播的維也納新年音樂會,由哪個樂團演出?",
            en: "The New Year's Concert broadcast worldwide from Vienna each January 1 is performed by which orchestra?",
          },
          options: [
            { zh: "維也納愛樂", en: "The Vienna Philharmonic" },
            { zh: "柏林愛樂", en: "The Berlin Philharmonic" },
            { zh: "阿姆斯特丹皇家大會堂管弦樂團", en: "The Royal Concertgebouw Orchestra" },
            { zh: "倫敦交響樂團", en: "The London Symphony Orchestra" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "維也納愛樂在金色大廳演奏史特勞斯家族的圓舞曲,是全球數千萬人的新年儀式。",
            en: "The Vienna Philharmonic plays Strauss-family waltzes in the Golden Hall — a new-year ritual for millions worldwide.",
          },
        },
      },
      {
        name: { zh: "薩爾斯堡", en: "Salzburg" },
        blurb: {
          zh: "巴洛克老城依山傍河,《真善美》的取景地。",
          en: "A Baroque old town beneath a hilltop fortress, and the filming location of The Sound of Music.",
        },
        trivia: {
          question: {
            zh: "哪位作曲家於 1756 年出生在薩爾斯堡?",
            en: "Which composer was born in Salzburg in 1756?",
          },
          options: [
            { zh: "莫札特", en: "Wolfgang Amadeus Mozart" },
            { zh: "貝多芬", en: "Ludwig van Beethoven" },
            { zh: "海頓", en: "Joseph Haydn" },
            { zh: "舒伯特", en: "Franz Schubert" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "莫札特出生於糧食街九號,故居現為博物館;貝多芬生於波昂,舒伯特生於維也納。",
            en: "Mozart was born at No. 9 Getreidegasse, now a museum; Beethoven was born in Bonn and Schubert in Vienna.",
          },
        },
      },
      {
        name: { zh: "因斯布魯克", en: "Innsbruck" },
        blurb: {
          zh: "群山環抱的蒂羅爾首府,阿爾卑斯滑雪運動的重鎮。",
          en: "Tyrol's capital ringed by peaks, a stronghold of Alpine skiing.",
        },
        trivia: {
          question: {
            zh: "因斯布魯克總共舉辦過幾次冬季奧運?",
            en: "How many times has Innsbruck hosted the Winter Olympics?",
          },
          options: [
            { zh: "兩次", en: "Twice" },
            { zh: "一次", en: "Once" },
            { zh: "三次", en: "Three times" },
            { zh: "從未舉辦過", en: "Never" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1964 年與 1976 年兩度主辦冬奧,1976 年是臨危受命接替退出的丹佛。",
            en: "It hosted in 1964 and again in 1976 — the latter after Denver withdrew as host.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "維也納多次在全球宜居城市排行榜上名列第一。",
        en: "Vienna has repeatedly topped global rankings of the world's most liveable cities.",
      },
    ],
  },
  {
    id: "GRC",
    name: { zh: "希臘", en: "Greece" },
    capital: { zh: "雅典", en: "Athens" },
    flag: "🇬🇷",
    region: "europe",
    center: { lat: 39.1, lng: 22.9 },
    intro: {
      zh: "西方文明的搖籃,民主、哲學、戲劇與奧林匹克運動皆發源於此。愛琴海上散布數千座島嶼,白牆藍頂的島嶼風景與古代神廟遺跡,讓它成為世界最熱門的旅遊地之一。",
      en: "The cradle of Western civilization, where democracy, philosophy, theatre, and the Olympic Games were born. Thousands of islands dot the Aegean, and whitewashed villages alongside ancient temples make it one of the world's most beloved destinations.",
    },
    history: {
      zh: "古典時代雅典與斯巴達等城邦爭雄,亞歷山大大帝將希臘文化傳播至東方,其後歷經羅馬與拜占庭帝國統治。1453 年後被鄂圖曼帝國統治近四百年,1821 年爆發獨立戰爭,1830 年建立現代希臘國家。20 世紀歷經戰亂與軍政府統治,1974 年恢復民主,1981 年加入歐洲共同體,2010 年代挺過嚴重的債務危機。",
      en: "In the classical age city-states like Athens and Sparta vied for power, and Alexander the Great carried Greek culture eastward, followed by Roman and Byzantine rule. After 1453 the Ottomans governed for nearly four centuries until the 1821 War of Independence created the modern state in 1830. The 20th century brought wars and a military junta; democracy returned in 1974, Greece joined the European Community in 1981, and it weathered a severe debt crisis in the 2010s.",
    },
    cities: [
      {
        name: { zh: "雅典", en: "Athens" },
        blurb: {
          zh: "民主的誕生地,衛城俯瞰這座三千四百年的古城。",
          en: "The birthplace of democracy, its 3,400-year-old sprawl watched over by the Acropolis.",
        },
        trivia: {
          question: {
            zh: "雅典衛城上的帕德嫩神廟,是為供奉哪位神祇而建?",
            en: "The Parthenon on the Athenian Acropolis was built to honor which deity?",
          },
          options: [
            { zh: "雅典娜", en: "Athena" },
            { zh: "宙斯", en: "Zeus" },
            { zh: "阿波羅", en: "Apollo" },
            { zh: "波塞頓", en: "Poseidon" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "帕德嫩意為「處女之殿」,供奉城市守護神雅典娜,殿內曾立有黃金象牙巨像。",
            en: "The Parthenon — 'temple of the virgin' — honored the city's patron Athena and once housed her colossal gold-and-ivory statue.",
          },
        },
      },
      {
        name: { zh: "塞薩洛尼基", en: "Thessaloniki" },
        blurb: {
          zh: "希臘第二大城,拜占庭教堂與海濱白塔之城。",
          en: "Greece's second city, known for Byzantine churches and its seafront White Tower.",
        },
        trivia: {
          question: {
            zh: "塞薩洛尼基的城市名稱,來自哪位歷史人物的同父異母姊妹?",
            en: "Thessaloniki is named after the half-sister of which historical figure?",
          },
          options: [
            { zh: "亞歷山大大帝", en: "Alexander the Great" },
            { zh: "凱撒", en: "Julius Caesar" },
            { zh: "君士坦丁大帝", en: "Constantine the Great" },
            { zh: "伯里克里斯", en: "Pericles" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "西元前 315 年卡山德建城,以妻子——亞歷山大大帝的異母妹塞薩洛妮姬——命名。",
            en: "Founded in 315 BC by Cassander and named for his wife Thessalonike, half-sister of Alexander the Great.",
          },
        },
      },
      {
        name: { zh: "伊拉克利翁", en: "Heraklion" },
        blurb: {
          zh: "克里特島首府,通往克諾索斯宮殿遺址的門戶。",
          en: "Crete's capital and the gateway to the palace ruins of Knossos.",
        },
        trivia: {
          question: {
            zh: "伊拉克利翁近郊的克諾索斯宮殿,屬於歐洲最早的哪個文明?",
            en: "The palace of Knossos near Heraklion belongs to which civilization, Europe's earliest?",
          },
          options: [
            { zh: "米諾斯文明", en: "The Minoan civilization" },
            { zh: "邁錫尼文明", en: "The Mycenaean civilization" },
            { zh: "伊特魯里亞文明", en: "The Etruscan civilization" },
            { zh: "腓尼基文明", en: "The Phoenician civilization" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "米諾斯文明約興盛於西元前 2000 年,克諾索斯的迷宮傳說孕育了牛頭人身怪的神話。",
            en: "The Minoans flourished around 2000 BC; the labyrinthine palace inspired the myth of the Minotaur.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "希臘擁有約六千座島嶼,其中僅兩百多座有人居住。",
        en: "Greece has about 6,000 islands, of which only a little over 200 are inhabited.",
      },
    ],
  },
  {
    id: "POL",
    name: { zh: "波蘭", en: "Poland" },
    capital: { zh: "華沙", en: "Warsaw" },
    flag: "🇵🇱",
    region: "europe",
    center: { lat: 52.1, lng: 19.4 },
    intro: {
      zh: "中歐平原上的大國,歷史上多次被瓜分卻始終堅韌重生。哥白尼、蕭邦與居禮夫人都是波蘭之子,1989 年後經濟持續成長,是中東歐轉型最成功的國家之一。",
      en: "A major nation on the Central European plain, repeatedly partitioned yet always reborn. Copernicus, Chopin, and Marie Curie were all children of Poland, and since 1989 its steady growth has made it one of the region's great transition success stories.",
    },
    history: {
      zh: "西元 966 年波蘭大公受洗,國家自此登上歷史舞台;波蘭立陶宛聯邦曾是歐洲版圖最大的國家之一。18 世紀末遭俄、普、奧三次瓜分而亡國 123 年,1918 年一戰後復國,1939 年又遭德蘇夾擊,二戰中犧牲慘重。戰後成為共產國家,1980 年代團結工聯運動促成 1989 年和平轉型,2004 年加入歐盟。",
      en: "Poland entered history with its duke's baptism in 966, and the Polish-Lithuanian Commonwealth later ranked among Europe's largest states. Three partitions by Russia, Prussia, and Austria erased it from the map for 123 years until rebirth in 1918; in 1939 it was crushed between Germany and the USSR and suffered terribly in WWII. A communist state afterward, it led the way out — Solidarity forced a peaceful transition in 1989, and Poland joined the EU in 2004.",
    },
    cities: [
      {
        name: { zh: "華沙", en: "Warsaw" },
        blurb: {
          zh: "浴火重生的首都,重建的老城與新建的摩天大樓並立。",
          en: "A capital risen from the ashes, its rebuilt Old Town standing beside new skyscrapers.",
        },
        trivia: {
          question: {
            zh: "華沙老城被稱為「重建的奇蹟」,原因是什麼?",
            en: "Warsaw's Old Town is called a 'miracle of reconstruction' — why?",
          },
          options: [
            {
              zh: "二戰被夷平後依畫作與圖紙原貌重建",
              en: "Leveled in WWII, it was rebuilt from paintings and plans",
            },
            {
              zh: "老城奇蹟般未受戰火波及",
              en: "It miraculously escaped wartime damage",
            },
            {
              zh: "整座老城從別處遷建而來",
              en: "The whole district was relocated from elsewhere",
            },
            {
              zh: "它其實是現代設計的仿古街區",
              en: "It is actually a modern themed replica district",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1944 年起義後華沙約八成五被摧毀,戰後依貝洛托的畫作等史料復原,1980 年列入世界遺產。",
            en: "About 85% of Warsaw was destroyed after the 1944 uprising; it was restored using Bellotto's paintings and archives, earning World Heritage status in 1980.",
          },
        },
      },
      {
        name: { zh: "克拉科夫", en: "Krakow" },
        blurb: {
          zh: "波蘭古都,瓦維爾城堡與歐洲最大的中世紀廣場之城。",
          en: "Poland's royal old capital, home to Wawel Castle and Europe's largest medieval square.",
        },
        trivia: {
          question: {
            zh: "天文學家哥白尼曾就讀克拉科夫的哪所大學?它是中歐最古老的大學之一。",
            en: "Astronomer Copernicus studied at which university in Krakow, one of Central Europe's oldest?",
          },
          options: [
            { zh: "亞捷隆大學", en: "The Jagiellonian University" },
            { zh: "華沙大學", en: "The University of Warsaw" },
            { zh: "布拉格查理大學", en: "Charles University in Prague" },
            { zh: "維也納大學", en: "The University of Vienna" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "亞捷隆大學創立於 1364 年,哥白尼 1491 年入學,後來提出日心說改寫天文學。",
            en: "Founded in 1364, the Jagiellonian enrolled Copernicus in 1491 — he went on to put the Sun at the center of the cosmos.",
          },
        },
      },
      {
        name: { zh: "格但斯克", en: "Gdansk" },
        blurb: {
          zh: "波羅的海畔的漢薩古港,團結工聯運動的發源地。",
          en: "A Hanseatic port on the Baltic and the birthplace of the Solidarity movement.",
        },
        trivia: {
          question: {
            zh: "1980 年在格但斯克造船廠誕生、由華勒沙領導的運動是什麼?",
            en: "What movement, led by Lech Walesa, was born at the Gdansk shipyard in 1980?",
          },
          options: [
            { zh: "團結工聯", en: "Solidarity" },
            { zh: "布拉格之春", en: "The Prague Spring" },
            { zh: "天鵝絨革命", en: "The Velvet Revolution" },
            { zh: "匈牙利十月起義", en: "The Hungarian Uprising" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "團結工聯是共產陣營第一個獨立工會,促成 1989 年波蘭和平變天,華勒沙後來當選總統。",
            en: "Solidarity was the Eastern Bloc's first independent trade union; it drove Poland's peaceful 1989 transition, and Walesa became president.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "克拉科夫近郊的維利奇卡鹽礦深達三百多公尺,裡面有全以鹽雕成的地下教堂。",
        en: "The Wieliczka Salt Mine near Krakow descends over 300 meters and contains chapels carved entirely from salt.",
      },
    ],
  },
  {
    id: "CZE",
    name: { zh: "捷克", en: "Czechia" },
    capital: { zh: "布拉格", en: "Prague" },
    flag: "🇨🇿",
    region: "europe",
    center: { lat: 49.8, lng: 15.5 },
    intro: {
      zh: "中歐內陸的童話之國,布拉格的百塔天際線與遍布全國的城堡聞名於世。啤酒人均消費量全球第一,皮爾森啤酒與波希米亞水晶都是這片土地的驕傲。",
      en: "A fairy-tale country in the heart of Europe, famous for Prague's skyline of a hundred spires and castles scattered across the land. It leads the world in beer drunk per person, and both pilsner and Bohemian crystal were born here.",
    },
    history: {
      zh: "波希米亞王國是神聖羅馬帝國的重要成員,14 世紀查理四世定都布拉格,盛極一時。其後長期由哈布斯堡王朝統治,1918 年與斯洛伐克合組捷克斯洛伐克。1938 年慕尼黑協定遭列強出賣,1948 年落入共產統治,1968 年「布拉格之春」改革被蘇聯坦克鎮壓,1989 年「天鵝絨革命」和平民主化,1993 年與斯洛伐克和平分家,2004 年加入歐盟。",
      en: "The Kingdom of Bohemia was a leading state of the Holy Roman Empire, and Prague flourished as Charles IV's imperial capital in the 14th century. Long Habsburg rule followed, then union with Slovakia as Czechoslovakia in 1918. Betrayed at Munich in 1938 and communist-ruled from 1948, it saw the 1968 Prague Spring crushed by Soviet tanks before the peaceful Velvet Revolution of 1989. The 'Velvet Divorce' split Czechia and Slovakia in 1993, and Czechia joined the EU in 2004.",
    },
    cities: [
      {
        name: { zh: "布拉格", en: "Prague" },
        blurb: {
          zh: "「百塔之城」,查理大橋橫跨伏爾塔瓦河,老城完整躲過二戰戰火。",
          en: "The city of a hundred spires, where Charles Bridge spans the Vltava and the old town survived WWII intact.",
        },
        trivia: {
          question: {
            zh: "布拉格城堡保持著什麼世界紀錄?",
            en: "Prague Castle holds which world record?",
          },
          options: [
            {
              zh: "世界最大的古代城堡建築群",
              en: "The largest ancient castle complex in the world",
            },
            { zh: "世界最古老的城堡", en: "The oldest castle in the world" },
            { zh: "海拔最高的皇家城堡", en: "The highest-altitude royal castle" },
            { zh: "塔樓數量最多的城堡", en: "The castle with the most towers" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "城堡建築群占地近七萬平方公尺,金氏世界紀錄認證為最大古代城堡,今為總統府所在。",
            en: "Covering nearly 70,000 square meters, it is Guinness-certified as the largest ancient castle and now houses the presidency.",
          },
        },
      },
      {
        name: { zh: "布爾諾", en: "Brno" },
        blurb: {
          zh: "摩拉維亞首府與捷克第二大城,大學城與機能主義建築重鎮。",
          en: "Moravia's capital and Czechia's second city, known for universities and functionalist architecture.",
        },
        trivia: {
          question: {
            zh: "「遺傳學之父」孟德爾在布爾諾的修道院裡,用什麼植物做出著名的遺傳實驗?",
            en: "In his Brno monastery garden, Gregor Mendel — the father of genetics — ran his famous experiments on which plant?",
          },
          options: [
            { zh: "豌豆", en: "Pea plants" },
            { zh: "小麥", en: "Wheat" },
            { zh: "玉米", en: "Maize" },
            { zh: "番茄", en: "Tomatoes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "孟德爾栽培近三萬株豌豆歸納出遺傳定律,生前默默無聞,去世後才被尊為遺傳學之父。",
            en: "Mendel grew nearly 30,000 pea plants to derive his laws of inheritance — recognized as genetics' founder only after his death.",
          },
        },
      },
      {
        name: { zh: "契斯基庫倫洛夫", en: "Cesky Krumlov" },
        blurb: {
          zh: "南波希米亞的世界遺產小鎮,文藝復興城堡俯瞰蜿蜒河灣。",
          en: "A World Heritage town in South Bohemia, its Renaissance castle overlooking a winding river bend.",
        },
        trivia: {
          question: {
            zh: "契斯基庫倫洛夫的老城,環抱在哪條河的 S 形河灣之中?",
            en: "The old town of Cesky Krumlov sits inside an S-shaped bend of which river?",
          },
          options: [
            { zh: "伏爾塔瓦河", en: "The Vltava" },
            { zh: "易北河", en: "The Elbe" },
            { zh: "多瑙河", en: "The Danube" },
            { zh: "摩拉瓦河", en: "The Morava" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "伏爾塔瓦河在此繞出馬蹄形河灣,河灣包住老城,城堡則踞於對岸岩壁之上。",
            en: "The Vltava loops around the old town in a horseshoe bend, with the castle perched on the rocky bank opposite.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "捷克人均啤酒消費量連續數十年位居世界第一,超過每人每年 120 公升。",
        en: "Czechs have led the world in beer consumption per person for decades — over 120 liters a year each.",
      },
      {
        zh: "「robot」(機器人)一詞源自捷克作家恰佩克 1920 年的劇作。",
        en: "The word 'robot' comes from Czech writer Karel Capek's 1920 play R.U.R.",
      },
    ],
  },
  {
    id: "SWE",
    name: { zh: "瑞典", en: "Sweden" },
    capital: { zh: "斯德哥爾摩", en: "Stockholm" },
    flag: "🇸🇪",
    region: "europe",
    center: { lat: 62.0, lng: 15.0 },
    intro: {
      zh: "斯堪地那維亞半島東側的森林與湖泊之國,以福利制度、設計美學與創新聞名。IKEA、Volvo、Spotify 皆誕生於此,諾貝爾獎每年在斯德哥爾摩頒發,將瑞典與世界智識舞台緊緊相連。",
      en: "A land of forests and lakes on the eastern Scandinavian Peninsula, known for its welfare model, design sense, and innovation. IKEA, Volvo, and Spotify were all born here, and the Nobel Prizes awarded in Stockholm each year tie Sweden to the world's intellectual stage.",
    },
    history: {
      zh: "維京時代瑞典人沿河向東遠航至東歐與拜占庭,中世紀曾與丹麥、挪威共組卡爾馬聯盟。17 世紀成為波羅的海霸主,大北方戰爭後霸權轉衰,1809 年將芬蘭割予俄國。自 1814 年後兩百餘年未再參戰,20 世紀建立聞名全球的福利國家,1995 年加入歐盟,2024 年放棄長期軍事不結盟政策加入北約。",
      en: "Viking-age Swedes voyaged east along rivers to Eastern Europe and Byzantium, and Sweden later joined Denmark and Norway in the Kalmar Union. It dominated the Baltic in the 17th century, declined after the Great Northern War, and ceded Finland to Russia in 1809. At peace since 1814, it built its famous welfare state in the 20th century, joined the EU in 1995, and ended two centuries of military non-alignment by joining NATO in 2024.",
    },
    cities: [
      {
        name: { zh: "斯德哥爾摩", en: "Stockholm" },
        blurb: {
          zh: "橫跨十四座島嶼的「北方威尼斯」,老城與現代設計並存。",
          en: "The 'Venice of the North' spread across fourteen islands, blending the medieval Gamla Stan with modern design.",
        },
        trivia: {
          question: {
            zh: "每年 12 月在斯德哥爾摩舉行頒獎典禮的國際大獎是什麼?",
            en: "Which international awards hold their ceremony in Stockholm every December?",
          },
          options: [
            { zh: "諾貝爾獎", en: "The Nobel Prizes" },
            { zh: "布克獎", en: "The Booker Prize" },
            { zh: "菲爾茲獎", en: "The Fields Medal" },
            { zh: "普立茲獎", en: "The Pulitzer Prizes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "依諾貝爾遺囑,各獎項於他的忌日 12 月 10 日在斯德哥爾摩頒發,唯獨和平獎在奧斯陸。",
            en: "Per Alfred Nobel's will, the prizes are presented in Stockholm on December 10, the anniversary of his death — except the Peace Prize, given in Oslo.",
          },
        },
      },
      {
        name: { zh: "哥特堡", en: "Gothenburg" },
        blurb: {
          zh: "瑞典第二大城與西岸大港,運河、海鮮與工業傳統之城。",
          en: "Sweden's second city and west-coast port, known for canals, seafood, and industrial heritage.",
        },
        trivia: {
          question: {
            zh: "哪個以安全著稱的汽車品牌於 1927 年創立於哥特堡?",
            en: "Which carmaker famous for safety was founded in Gothenburg in 1927?",
          },
          options: [
            { zh: "Volvo(富豪)", en: "Volvo" },
            { zh: "Saab(紳寶)", en: "Saab" },
            { zh: "斯堪尼亞(Scania)", en: "Scania" },
            { zh: "柯尼賽格(Koenigsegg)", en: "Koenigsegg" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Volvo 至今總部仍在哥特堡,1959 年發明三點式安全帶並開放專利造福全世界。",
            en: "Volvo is still headquartered in Gothenburg; it invented the three-point seatbelt in 1959 and opened the patent to all.",
          },
        },
      },
      {
        name: { zh: "烏普薩拉", en: "Uppsala" },
        blurb: {
          zh: "北歐最古老大學的所在地,大教堂與學術傳統之城。",
          en: "Home to the Nordic region's oldest university, a city of cathedral spires and scholarship.",
        },
        trivia: {
          question: {
            zh: "曾在烏普薩拉大學任教的「分類學之父」林奈,建立了什麼命名系統?",
            en: "Carl Linnaeus, the father of taxonomy who taught at Uppsala University, created which naming system?",
          },
          options: [
            { zh: "生物的二名法", en: "Binomial nomenclature for living things" },
            { zh: "化學元素週期表", en: "The periodic table of elements" },
            { zh: "星座命名系統", en: "The constellation naming system" },
            { zh: "颶風命名規則", en: "The hurricane naming convention" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "林奈以「屬名+種名」的拉丁雙名為物種命名,如智人 Homo sapiens,沿用至今。",
            en: "Linnaeus gave every species a two-part Latin name — genus plus species, like Homo sapiens — still the standard today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "瑞典的「漫遊權」讓任何人都能在他人土地上健行、露營與採莓,是寫入憲法的傳統。",
        en: "Sweden's 'allemansratten' — the right to roam — lets anyone hike, camp, and pick berries on private land, a tradition enshrined in the constitution.",
      },
    ],
  },
  {
    id: "NOR",
    name: { zh: "挪威", en: "Norway" },
    capital: { zh: "奧斯陸", en: "Oslo" },
    flag: "🇳🇴",
    region: "europe",
    center: { lat: 64.5, lng: 12.0 },
    intro: {
      zh: "斯堪地那維亞半島西緣的峽灣之國,海岸線曲折綿延數萬公里。北海石油讓它成為全球最富裕的國家之一,主權基金規模世界第一,冬季運動與極光觀賞是國民生活的一部分。",
      en: "The fjord country on the western edge of Scandinavia, with a coastline that winds for tens of thousands of kilometers. North Sea oil made it one of the world's wealthiest nations with the largest sovereign wealth fund, and winter sports and aurora watching are woven into daily life.",
    },
    history: {
      zh: "維京時代挪威人向西航行,足跡遠至冰島、格陵蘭與北美洲。14 世紀後長期與丹麥聯合,1814 年轉歸瑞典,1905 年經公投和平獨立。二戰遭德國佔領五年,戰後 1969 年發現北海油田,經濟從漁業農業一躍而起。兩度公投否決加入歐盟,但為北約創始會員國,以石油財富建立了全球最大的主權基金。",
      en: "Viking-age Norwegians sailed west to Iceland, Greenland, and even North America. Norway was long united with Denmark, passed to Sweden in 1814, and won peaceful independence by referendum in 1905. After five years of Nazi occupation in WWII, the 1969 discovery of North Sea oil transformed its fishing-and-farming economy. Norwegians twice voted against joining the EU, but the country is a founding NATO member and turned its oil wealth into the world's largest sovereign fund.",
    },
    cities: [
      {
        name: { zh: "奧斯陸", en: "Oslo" },
        blurb: {
          zh: "峽灣深處的首都,歌劇院屋頂可以步行而上,森林與城市無縫相接。",
          en: "A capital at the head of a fjord, where you can walk up the opera house roof and forests meet the streets.",
        },
        trivia: {
          question: {
            zh: "諾貝爾獎中唯一不在瑞典、而在奧斯陸頒發的是哪個獎項?",
            en: "Which Nobel Prize is awarded in Oslo rather than in Sweden?",
          },
          options: [
            { zh: "和平獎", en: "The Peace Prize" },
            { zh: "文學獎", en: "The Literature Prize" },
            { zh: "物理學獎", en: "The Physics Prize" },
            { zh: "經濟學獎", en: "The Economics Prize" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "諾貝爾遺囑指定和平獎由挪威委員會頒發;立囑當時挪威與瑞典還是共主聯盟。",
            en: "Nobel's will assigned the Peace Prize to a Norwegian committee — Norway and Sweden were still in a union when he wrote it.",
          },
        },
      },
      {
        name: { zh: "卑爾根", en: "Bergen" },
        blurb: {
          zh: "七山環抱的西岸古港,彩色木屋碼頭是峽灣之旅的起點。",
          en: "A west-coast port ringed by seven mountains, its colorful wooden wharf the starting point for fjord voyages.",
        },
        trivia: {
          question: {
            zh: "卑爾根的布呂根木屋碼頭,見證了哪個中世紀商業同盟的貿易史?",
            en: "Bergen's wooden Bryggen wharf testifies to the trading history of which medieval commercial league?",
          },
          options: [
            { zh: "漢薩同盟", en: "The Hanseatic League" },
            { zh: "威尼斯商人公會", en: "The Venetian merchant guilds" },
            { zh: "條頓騎士團", en: "The Teutonic Order" },
            { zh: "荷蘭東印度公司", en: "The Dutch East India Company" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "漢薩商人在此設立商站經營魚乾貿易數百年,布呂根已列入世界遺產。",
            en: "Hanseatic merchants ran a trading post here for centuries, dealing in stockfish; Bryggen is now a World Heritage site.",
          },
        },
      },
      {
        name: { zh: "特羅姆瑟", en: "Tromso" },
        blurb: {
          zh: "北極圈內三百多公里的極地門戶,觀賞極光的世界級據點。",
          en: "A polar gateway some 300 kilometers above the Arctic Circle and a world-class spot for the northern lights.",
        },
        trivia: {
          question: {
            zh: "位於北極圈內的特羅姆瑟,每年盛夏會出現什麼自然現象?",
            en: "Lying well inside the Arctic Circle, Tromso experiences what natural phenomenon at the height of summer?",
          },
          options: [
            { zh: "永晝(午夜太陽)", en: "The midnight sun (round-the-clock daylight)" },
            { zh: "永夜", en: "Round-the-clock darkness" },
            { zh: "每天兩次日出", en: "Two sunrises a day" },
            { zh: "太陽從西邊升起", en: "The sun rising in the west" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "約從五月下旬到七月下旬太陽不落,冬季則有數週的極夜,極光季由此展開。",
            en: "From late May to late July the sun never sets; in winter weeks of polar night set the stage for aurora season.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "挪威的主權基金規模超過一兆美元,平均持有全球上市股票約 1.5% 的股份。",
        en: "Norway's sovereign wealth fund exceeds a trillion US dollars and owns about 1.5% of all listed shares worldwide.",
      },
      {
        zh: "挪威是冬季奧運史上獲得獎牌最多的國家。",
        en: "Norway has won more Winter Olympic medals than any other country.",
      },
    ],
  },
  {
    id: "DNK",
    name: { zh: "丹麥", en: "Denmark" },
    capital: { zh: "哥本哈根", en: "Copenhagen" },
    flag: "🇩🇰",
    region: "europe",
    center: { lat: 56.0, lng: 10.0 },
    intro: {
      zh: "日德蘭半島與數百座島嶼組成的北歐王國,樂高、安徒生童話與「hygge」生活哲學的故鄉。單車通勤比例極高,風力發電技術領先全球,常年名列世界最幸福國家前茅。",
      en: "A Nordic kingdom of the Jutland Peninsula and hundreds of islands — home of Lego, Andersen's fairy tales, and the cozy philosophy of 'hygge'. Cycling rules the commute, its wind-power industry leads the world, and it perennially ranks among the happiest countries.",
    },
    history: {
      zh: "維京時代丹麥人橫行北海,克努特大帝一度統治英格蘭與斯堪地那維亞的「北海帝國」。14 世紀末主導卡爾馬聯盟統合北歐三國,其後數百年間陸續失去瑞典、挪威與南部領土。19 世紀從戰敗中轉型,發展合作社農業與民主制度;二戰遭德國佔領,戰後建立高福利社會,1973 年加入歐洲共同體,王室血脈延續千年未斷。",
      en: "Viking-age Danes dominated the North Sea, and Cnut the Great briefly ruled a 'North Sea Empire' spanning England and Scandinavia. Denmark led the Kalmar Union of the three Nordic crowns from 1397, then gradually lost Sweden, Norway, and its southern lands. After 19th-century defeats it reinvented itself through cooperative farming and democracy; occupied in WWII, it built a high-welfare society, joined the European Community in 1973, and its royal line stretches back over a thousand years.",
    },
    cities: [
      {
        name: { zh: "哥本哈根", en: "Copenhagen" },
        blurb: {
          zh: "運河與彩色屋舍的單車之都,新北歐料理運動的發源地。",
          en: "A cycling capital of canals and colorful townhouses, and the birthplace of the New Nordic food movement.",
        },
        trivia: {
          question: {
            zh: "哥本哈根的蒂沃利樂園 1843 年開幕,據說啟發了哪位名人打造自己的主題樂園?",
            en: "Copenhagen's Tivoli Gardens opened in 1843 — and reportedly inspired which famous figure to build his own theme park?",
          },
          options: [
            { zh: "華特·迪士尼", en: "Walt Disney" },
            { zh: "安徒生", en: "Hans Christian Andersen" },
            { zh: "諾貝爾", en: "Alfred Nobel" },
            { zh: "亨利·福特", en: "Henry Ford" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "迪士尼 1950 年代造訪蒂沃利後深受啟發,蒂沃利至今仍是世界最古老的遊樂園之一。",
            en: "Disney visited Tivoli in the 1950s and took notes; it remains one of the world's oldest operating amusement parks.",
          },
        },
      },
      {
        name: { zh: "奧胡斯", en: "Aarhus" },
        blurb: {
          zh: "丹麥第二大城與大學城,彩虹步道美術館是城市地標。",
          en: "Denmark's second city and a university town, crowned by the rainbow walkway of its ARoS museum.",
        },
        trivia: {
          question: {
            zh: "奧胡斯的城市名源自古諾斯語,原意和什麼地形有關?",
            en: "The name Aarhus comes from Old Norse — what geographical feature does it refer to?",
          },
          options: [
            { zh: "河口", en: "A river mouth" },
            { zh: "山丘", en: "A hill" },
            { zh: "森林", en: "A forest" },
            { zh: "海灣中的小島", en: "An island in a bay" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "古諾斯語 Aros 意為「河口」,維京人在此建立聚落,是丹麥最古老的城市之一。",
            en: "Old Norse 'Aros' means river mouth; Vikings settled here, making it one of Denmark's oldest cities.",
          },
        },
      },
      {
        name: { zh: "歐登塞", en: "Odense" },
        blurb: {
          zh: "菲因島的中心城市,一代童話大師的出生地。",
          en: "The main city of Funen island and the birthplace of a master storyteller.",
        },
        trivia: {
          question: {
            zh: "哪位童話作家 1805 年出生於歐登塞,寫下《小美人魚》與《醜小鴨》?",
            en: "Which fairy-tale author, born in Odense in 1805, wrote The Little Mermaid and The Ugly Duckling?",
          },
          options: [
            { zh: "安徒生", en: "Hans Christian Andersen" },
            { zh: "雅各·格林", en: "Jacob Grimm" },
            { zh: "夏爾·佩羅", en: "Charles Perrault" },
            { zh: "王爾德", en: "Oscar Wilde" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鞋匠之子安徒生從歐登塞走向世界,寫下逾百篇童話,譯本語言數量名列世界前茅。",
            en: "A shoemaker's son from Odense, Andersen wrote over a hundred fairy tales, now among the world's most translated works.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "樂高來自丹麥比隆,名字取自丹麥語「leg godt」,意思是「玩得好」。",
        en: "Lego hails from Billund, Denmark — the name comes from the Danish 'leg godt', meaning 'play well'.",
      },
    ],
  },
  {
    id: "FIN",
    name: { zh: "芬蘭", en: "Finland" },
    capital: { zh: "赫爾辛基", en: "Helsinki" },
    flag: "🇫🇮",
    region: "europe",
    center: { lat: 64.5, lng: 26.0 },
    intro: {
      zh: "「千湖之國」擁有約十八萬座湖泊與遼闊森林,桑拿是深入骨髓的國民文化。教育體系享譽全球,Nokia 與憤怒鳥都誕生於此,並連年被評為世界最幸福的國家。",
      en: "The 'land of a thousand lakes' actually has about 188,000 of them amid vast forests, and sauna culture runs bone-deep. Its education system is world-renowned, Nokia and Angry Birds were born here, and it is repeatedly ranked the happiest country on Earth.",
    },
    history: {
      zh: "芬蘭受瑞典統治約六百年,1809 年成為俄羅斯帝國轄下的自治大公國,1917 年趁俄國革命宣布獨立。1939-40 年冬季戰爭中以寡敵眾抵抗蘇聯入侵,雖失土但保住獨立。冷戰期間在東西方之間謹慎中立,發展成高科技福利國家,1995 年加入歐盟,2023 年因俄烏戰爭改變政策加入北約。",
      en: "Ruled by Sweden for some six centuries, Finland became an autonomous grand duchy under Russia in 1809 and declared independence amid the 1917 revolution. In the 1939-40 Winter War it fought off a vastly larger Soviet invasion, losing territory but keeping its freedom. Carefully neutral through the Cold War, it grew into a high-tech welfare state, joined the EU in 1995, and — prompted by Russia's war on Ukraine — joined NATO in 2023.",
    },
    cities: [
      {
        name: { zh: "赫爾辛基", en: "Helsinki" },
        blurb: {
          zh: "波羅的海畔的設計之都,白色大教堂俯瞰港灣市集。",
          en: "A design capital on the Baltic, its white cathedral overlooking the harbor market square.",
        },
        trivia: {
          question: {
            zh: "赫爾辛基的聖殿廣場教堂(岩石教堂)以什麼建築特色聞名?",
            en: "Helsinki's Temppeliaukio 'Rock Church' is famous for what architectural feature?",
          },
          options: [
            { zh: "直接開鑿在天然岩盤之中", en: "It is carved directly into solid bedrock" },
            { zh: "完全以木材建成", en: "It is built entirely of wood" },
            { zh: "整座教堂漂浮在水上", en: "It floats on the water" },
            { zh: "擁有全歐最高的尖塔", en: "It has Europe's tallest spire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "教堂 1969 年落成,鑿入花崗岩中,覆以銅頂,岩壁的天然音響效果使它常用於音樂會。",
            en: "Completed in 1969, it was blasted into granite and roofed with copper; the rock walls give acoustics prized for concerts.",
          },
        },
      },
      {
        name: { zh: "圖爾庫", en: "Turku" },
        blurb: {
          zh: "芬蘭最古老的城市,奧拉河畔的中世紀城堡與大教堂。",
          en: "Finland's oldest city, with a medieval castle and cathedral along the Aura River.",
        },
        trivia: {
          question: {
            zh: "圖爾庫在 1812 年之前擁有什麼地位?",
            en: "What status did Turku hold until 1812?",
          },
          options: [
            { zh: "芬蘭的首都", en: "It was the capital of Finland" },
            { zh: "瑞典王室的加冕城市", en: "It was Sweden's coronation city" },
            { zh: "俄國波羅的海艦隊母港", en: "It was the home port of Russia's Baltic fleet" },
            { zh: "漢薩同盟的自由市", en: "It was a Hanseatic free city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "俄國沙皇取得芬蘭後,嫌圖爾庫離瑞典太近,1812 年把首都遷往赫爾辛基。",
            en: "After Russia took Finland, the tsar judged Turku too close to Sweden and moved the capital to Helsinki in 1812.",
          },
        },
      },
      {
        name: { zh: "羅瓦涅米", en: "Rovaniemi" },
        blurb: {
          zh: "拉普蘭首府,跨在北極圈上的極地觀光重鎮。",
          en: "The capital of Lapland, straddling the Arctic Circle as a polar tourism hub.",
        },
        trivia: {
          question: {
            zh: "羅瓦涅米以什麼觀光主題聞名全球,吸引各國遊客寄信與造訪?",
            en: "Rovaniemi is world-famous for what tourist attraction, drawing letters and visitors from around the globe?",
          },
          options: [
            { zh: "聖誕老人村", en: "The Santa Claus Village" },
            { zh: "世界最大的冰雕旅館", en: "The world's largest ice hotel" },
            { zh: "維京主題樂園", en: "A Viking theme park" },
            { zh: "北極熊野生動物園", en: "A polar bear safari park" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "村子就蓋在北極圈線上,聖誕老人郵局每年收到來自世界各地數十萬封信。",
            en: "The village sits right on the Arctic Circle, and Santa's post office receives hundreds of thousands of letters a year.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "芬蘭約有三百萬座桑拿,平均不到兩人就有一座,連國會與漢堡店裡都有。",
        en: "Finland has about three million saunas — nearly one for every two people, including in parliament and even a Burger King.",
      },
    ],
  },
  {
    id: "UKR",
    name: { zh: "烏克蘭", en: "Ukraine" },
    capital: { zh: "基輔", en: "Kyiv" },
    flag: "🇺🇦",
    region: "europe",
    center: { lat: 48.9, lng: 31.3 },
    intro: {
      zh: "全境位於歐洲的最大國家,黑土帶沃野千里,自古有「歐洲糧倉」之稱。國旗的藍黃兩色正是藍天與麥田的寫照;2022 年起抵抗俄羅斯全面入侵,堅韌形象舉世矚目。",
      en: "The largest country lying entirely in Europe, its black-earth plains long known as the 'breadbasket of Europe'. The blue and yellow flag mirrors its skies and wheat fields; since 2022 its resistance to Russia's full-scale invasion has captured the world's attention.",
    },
    history: {
      zh: "9 世紀基輔羅斯以基輔為中心興起,是東斯拉夫文明的搖籃,13 世紀毀於蒙古西征。此後土地分屬立陶宛、波蘭,哥薩克人曾建立自治政權,18 世紀多數領土併入俄羅斯帝國。蘇聯時期經歷 1930 年代大饑荒,1991 年蘇聯解體後獨立。2014 年廣場革命後俄國併吞克里米亞,2022 年俄軍全面入侵,烏克蘭持續抵抗並尋求加入歐盟。",
      en: "Kyivan Rus rose around Kyiv in the 9th century as the cradle of East Slavic civilization, until the Mongols destroyed it in the 13th. Its lands passed to Lithuania and Poland, Cossacks carved out self-rule, and most territory fell to the Russian Empire in the 18th century. Under the USSR it endured the 1930s Holodomor famine, gaining independence in 1991. After the 2014 Maidan Revolution Russia annexed Crimea, and in 2022 launched a full-scale invasion that Ukraine continues to resist while seeking EU membership.",
    },
    cities: [
      {
        name: { zh: "基輔", en: "Kyiv" },
        blurb: {
          zh: "聶伯河畔的千年古都,金頂教堂與現代都會交織。",
          en: "A thousand-year-old capital on the Dnipro, where golden-domed churches meet a modern metropolis.",
        },
        trivia: {
          question: {
            zh: "基輔是哪個中世紀國家的中心?該國被視為東斯拉夫文明的搖籃。",
            en: "Kyiv was the center of which medieval state, regarded as the cradle of East Slavic civilization?",
          },
          options: [
            { zh: "基輔羅斯", en: "Kyivan Rus" },
            { zh: "莫斯科大公國", en: "The Grand Duchy of Moscow" },
            { zh: "波蘭立陶宛聯邦", en: "The Polish-Lithuanian Commonwealth" },
            { zh: "拜占庭帝國", en: "The Byzantine Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "基輔羅斯 988 年接受東正教,聖索菲亞大教堂即其遺產,烏克蘭、俄羅斯與白俄羅斯都溯源於此。",
            en: "Kyivan Rus adopted Orthodox Christianity in 988 — Saint Sophia Cathedral is its legacy, and Ukraine, Russia, and Belarus all trace their roots to it.",
          },
        },
      },
      {
        name: { zh: "利維夫", en: "Lviv" },
        blurb: {
          zh: "西部的文化之都,世界遺產老城以咖啡館與巧克力聞名。",
          en: "The cultural capital of the west, its World Heritage old town famed for coffeehouses and chocolate.",
        },
        trivia: {
          question: {
            zh: "利維夫老城的建築風貌,深受哪個帝國統治時期的影響?",
            en: "The architecture of Lviv's old town was most shaped by the rule of which empire?",
          },
          options: [
            { zh: "奧地利哈布斯堡帝國", en: "The Austrian Habsburg Empire" },
            { zh: "鄂圖曼帝國", en: "The Ottoman Empire" },
            { zh: "俄羅斯帝國", en: "The Russian Empire" },
            { zh: "瑞典帝國", en: "The Swedish Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1772 至 1918 年利維夫是奧屬加利西亞首府,中歐咖啡館風情由此而來,與受俄國統治的東部迥異。",
            en: "From 1772 to 1918 Lviv was the capital of Austrian Galicia — hence its Central European cafe air, unlike the Russian-ruled east.",
          },
        },
      },
      {
        name: { zh: "奧德薩", en: "Odesa" },
        blurb: {
          zh: "黑海明珠,幽默之都,階梯與歌劇院聞名的港口城市。",
          en: "The pearl of the Black Sea, a port city of wit, famous for its grand staircase and opera house.",
        },
        trivia: {
          question: {
            zh: "奧德薩的「波坦金階梯」因出現在哪部電影史上的經典默片而聞名?",
            en: "Odesa's Potemkin Stairs became famous through which landmark silent film?",
          },
          options: [
            { zh: "《波坦金戰艦》", en: "Battleship Potemkin" },
            { zh: "《大都會》", en: "Metropolis" },
            { zh: "《卡里加里博士的小屋》", en: "The Cabinet of Dr. Caligari" },
            { zh: "《城市之光》", en: "City Lights" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1925 年艾森斯坦在此拍攝嬰兒車滾落階梯的蒙太奇名場面,成為影史最常被致敬的段落之一。",
            en: "Eisenstein's 1925 montage of a pram tumbling down the steps became one of cinema's most imitated scenes.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "烏克蘭是全球最大的葵花油出口國,向日葵也是它的國花。",
        en: "Ukraine is the world's top exporter of sunflower oil, and the sunflower is its national flower.",
      },
      {
        zh: "史上最大的飛機安托諾夫 An-225 由烏克蘭製造,2022 年毀於戰火。",
        en: "The largest airplane ever built, the Antonov An-225, was made in Ukraine; it was destroyed in the war in 2022.",
      },
    ],
  },
  {
    id: "RUS",
    name: { zh: "俄羅斯", en: "Russia" },
    capital: { zh: "莫斯科", en: "Moscow" },
    flag: "🇷🇺",
    region: "europe",
    center: { lat: 61.5, lng: 105.0 },
    intro: {
      zh: "世界面積最大的國家,橫跨歐亞十一個時區,從波羅的海延伸到太平洋。文學、芭蕾與古典音樂成就輝煌,托爾斯泰與柴可夫斯基影響深遠;能源與軍事實力使它始終是國際政治的要角。",
      en: "The largest country on Earth, spanning eleven time zones from the Baltic to the Pacific. Its literature, ballet, and classical music — from Tolstoy to Tchaikovsky — shaped world culture, while energy and military power keep it central to global politics.",
    },
    history: {
      zh: "承繼基輔羅斯的莫斯科大公國於 15 世紀擺脫蒙古統治崛起,伊凡四世稱沙皇,彼得大帝推行西化並建立帝國。1917 年革命推翻帝制,蘇聯成為橫跨歐亞的超級大國,二戰擊敗納粹德國後與美國冷戰對峙近半世紀。1991 年蘇聯解體,俄羅斯聯邦繼承其地位;2022 年全面入侵烏克蘭,與西方關係降至冷戰後最低點。",
      en: "The Grand Duchy of Moscow, heir to Kyivan Rus, threw off Mongol rule in the 15th century; Ivan IV took the title of tsar, and Peter the Great westernized the empire. The 1917 revolution ended tsarism, and the Soviet Union rose to superpower status, defeating Nazi Germany in WWII and facing off with the US through the Cold War. The USSR dissolved in 1991, leaving the Russian Federation as successor; its 2022 full-scale invasion of Ukraine drove relations with the West to a post-Cold War low.",
    },
    cities: [
      {
        name: { zh: "莫斯科", en: "Moscow" },
        blurb: {
          zh: "克里姆林宮與紅場所在的首都,地鐵站華麗如地下宮殿。",
          en: "The capital of the Kremlin and Red Square, with metro stations as ornate as underground palaces.",
        },
        trivia: {
          question: {
            zh: "莫斯科「紅場」的「紅」在古俄語中原本的意思是什麼?",
            en: "In old Russian, what did the 'red' in Moscow's Red Square originally mean?",
          },
          options: [
            { zh: "美麗", en: "Beautiful" },
            { zh: "紅磚的顏色", en: "The color of its brick walls" },
            { zh: "共產主義", en: "Communism" },
            { zh: "鮮血與犧牲", en: "Blood and sacrifice" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "俄語 krasnaya 古義為「美麗的」,紅場即「美麗的廣場」,名稱早於蘇聯與紅磚城牆的聯想。",
            en: "The Russian 'krasnaya' once meant 'beautiful' — the name predates any association with communism or the brick walls.",
          },
        },
      },
      {
        name: { zh: "聖彼得堡", en: "Saint Petersburg" },
        blurb: {
          zh: "涅瓦河口的「北方威尼斯」,冬宮博物館藏品數以百萬計。",
          en: "The 'Venice of the North' on the Neva delta, home to the Hermitage and its millions of artworks.",
        },
        trivia: {
          question: {
            zh: "聖彼得堡是由哪位沙皇於 1703 年下令建立的?",
            en: "Saint Petersburg was founded in 1703 on the orders of which tsar?",
          },
          options: [
            { zh: "彼得大帝", en: "Peter the Great" },
            { zh: "凱薩琳大帝", en: "Catherine the Great" },
            { zh: "伊凡雷帝", en: "Ivan the Terrible" },
            { zh: "尼古拉二世", en: "Nicholas II" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "彼得大帝在波羅的海沼澤上建起「面向歐洲之窗」,此後兩百餘年是俄羅斯帝國的首都。",
            en: "Peter the Great raised his 'window to Europe' on Baltic marshland, and it served as the imperial capital for over two centuries.",
          },
        },
      },
      {
        name: { zh: "海參崴", en: "Vladivostok" },
        blurb: {
          zh: "太平洋岸的遠東門戶,俄羅斯太平洋艦隊的母港。",
          en: "Russia's Far Eastern gateway on the Pacific and home port of its Pacific Fleet.",
        },
        trivia: {
          question: {
            zh: "海參崴(符拉迪沃斯托克)是哪條世界最長鐵路的終點站?",
            en: "Vladivostok is the final stop of which railway, the longest in the world?",
          },
          options: [
            { zh: "西伯利亞大鐵路", en: "The Trans-Siberian Railway" },
            { zh: "貝阿鐵路", en: "The Baikal-Amur Mainline" },
            { zh: "環貝加爾湖鐵路", en: "The Circum-Baikal Railway" },
            { zh: "東方快車路線", en: "The Orient Express route" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "從莫斯科到海參崴全長 9289 公里,搭火車走完全程約需七天,跨越八個時區。",
            en: "The line runs 9,289 kilometers from Moscow — about seven days by train, crossing eight time zones.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "俄羅斯橫跨十一個時區,堪察加的居民迎接新年時,加里寧格勒還是前一天下午。",
        en: "Russia spans eleven time zones — when Kamchatka rings in the new year, it is still the previous afternoon in Kaliningrad.",
      },
      {
        zh: "西伯利亞的貝加爾湖是世界最深的湖泊,蓄水量約占全球未凍結淡水的兩成。",
        en: "Siberia's Lake Baikal is the world's deepest lake, holding roughly 20% of Earth's unfrozen fresh water.",
      },
    ],
  },
];
