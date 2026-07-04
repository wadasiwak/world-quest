import type { Country } from "../types";

// Asia: 16 countries. Content shape is LLM-generatable — see types.ts.

export const ASIA: Country[] = [
  {
    id: "TWN",
    name: { zh: "台灣", en: "Taiwan" },
    capital: { zh: "台北", en: "Taipei" },
    flag: "🇹🇼",
    region: "asia",
    center: { lat: 23.7, lng: 121.0 },
    intro: {
      zh: "太平洋西緣的島嶼,以半導體產業、夜市小吃與便利的生活聞名。中央山脈縱貫南北,三千公尺以上高山超過兩百座,從都會到太魯閣峽谷、墾丁海岸,風景高度濃縮。",
      en: "An island on the western Pacific rim, famous for its semiconductor industry, night-market food, and everyday convenience. The Central Mountain Range runs its length with over 200 peaks above 3,000 m, packing cities, gorges, and tropical coasts into a small space.",
    },
    history: {
      zh: "原住民族在島上生活數千年,17 世紀歷經荷蘭與西班牙短暫殖民、明鄭與清朝統治,1895 年因馬關條約割讓給日本,1945 年後由中華民國政府接收。1949 年國民政府遷台,歷經戒嚴與經濟起飛,1987 年解嚴後走向民主化,1996 年舉行首次總統直選,如今是亞洲最具活力的民主社會之一。",
      en: "Indigenous peoples lived here for millennia before brief Dutch and Spanish colonies, Ming loyalist rule, and Qing administration. Ceded to Japan in 1895, transferred to the Republic of China in 1945, it saw the ROC government relocate in 1949. After martial law, an economic miracle, and democratization from 1987, Taiwan held its first direct presidential election in 1996 and is now one of Asia's most vibrant democracies.",
    },
    cities: [
      {
        name: { zh: "台北", en: "Taipei" },
        blurb: {
          zh: "政治與文化中心,故宮、夜市與 101 大樓同在一座盆地裡。",
          en: "The political and cultural heart — the Palace Museum, night markets, and Taipei 101 share one basin.",
        },
        trivia: {
          question: {
            zh: "台北 101 落成時曾是世界第一高樓,它的樓層設計靈感與哪個數字意象有關?",
            en: "Taipei 101 was once the world's tallest building. Its design is built around which auspicious number?",
          },
          options: [
            { zh: "8(發財的發)", en: "8 (prosperity)" },
            { zh: "9(長長久久)", en: "9 (longevity)" },
            { zh: "6(六六大順)", en: "6 (smoothness)" },
            { zh: "12(十二生肖)", en: "12 (zodiac)" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塔身由八層一組的斗形結構堆疊而成,「8」在華人文化中象徵發財興旺。",
            en: "The tower stacks eight-floor pagoda-like segments — 8 symbolizes prosperity in Chinese culture.",
          },
        },
      },
      {
        name: { zh: "台南", en: "Tainan" },
        blurb: {
          zh: "台灣最古老的城市,廟宇與小吃密度全台之冠。",
          en: "Taiwan's oldest city, with the island's densest concentration of temples and street food.",
        },
        trivia: {
          question: {
            zh: "台南的安平古堡最早是由哪個政權建立的?",
            en: "Fort Anping in Tainan was originally built by which power?",
          },
          options: [
            { zh: "荷蘭東印度公司", en: "The Dutch East India Company" },
            { zh: "西班牙帝國", en: "The Spanish Empire" },
            { zh: "明鄭政權", en: "The Ming loyalist Zheng regime" },
            { zh: "清朝", en: "The Qing dynasty" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1624 年荷蘭人建「熱蘭遮城」,是台灣第一座歐式城堡,後來鄭成功驅荷後改為王城。",
            en: "The Dutch built Fort Zeelandia in 1624 — Taiwan's first European fortress, later taken by Koxinga.",
          },
        },
      },
      {
        name: { zh: "花蓮", en: "Hualien" },
        blurb: {
          zh: "東海岸門戶,緊鄰太魯閣峽谷與清水斷崖。",
          en: "Gateway to the east coast, beside Taroko Gorge and the Qingshui Cliffs.",
        },
        trivia: {
          question: {
            zh: "太魯閣峽谷主要由哪種岩石構成,造就其陡峭的大理岩峽谷景觀?",
            en: "Taroko Gorge's sheer canyon walls are carved mostly from which rock?",
          },
          options: [
            { zh: "大理岩", en: "Marble" },
            { zh: "花崗岩", en: "Granite" },
            { zh: "玄武岩", en: "Basalt" },
            { zh: "砂岩", en: "Sandstone" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "立霧溪切穿大理岩層形成峽谷,「大理石之城」也成了花蓮的別名。",
            en: "The Liwu River cut through thick marble beds — Hualien is nicknamed the 'marble city'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "全球九成以上的先進製程晶片產自台灣。",
        en: "Over 90% of the world's most advanced chips are made in Taiwan.",
      },
      {
        zh: "珍珠奶茶 1980 年代發明於台灣,如今風靡全球。",
        en: "Bubble tea was invented in Taiwan in the 1980s and conquered the world.",
      },
    ],
  },
  {
    id: "JPN",
    name: { zh: "日本", en: "Japan" },
    capital: { zh: "東京", en: "Tokyo" },
    flag: "🇯🇵",
    region: "asia",
    center: { lat: 36.2, lng: 138.3 },
    intro: {
      zh: "由四大島與數千小島組成的島國,傳統與未來感並存:神社、茶道與新幹線、動漫文化同框。世界第四大經濟體,也是全球最長壽的國家之一。",
      en: "An archipelago of four main islands and thousands of smaller ones where tradition meets the future — shrines and tea ceremony alongside bullet trains and anime. The world's fourth-largest economy and one of its longest-lived societies.",
    },
    history: {
      zh: "天皇制度綿延千年,武士階級自 12 世紀起主導政治,江戶幕府鎖國兩百餘年後,1868 年明治維新開啟快速西化與工業化。二戰戰敗後在美國主導下制定和平憲法,經濟高速成長成為科技大國;1990 年代泡沫破裂後進入長期低成長,但文化輸出力依然強大。",
      en: "The imperial line stretches back over a millennium; samurai ruled from the 12th century, and the Edo shogunate closed the country for 200+ years. The 1868 Meiji Restoration triggered rapid modernization. After WWII defeat, Japan adopted a pacifist constitution and grew into a technology superpower; growth slowed after the 1990s bubble burst, but its cultural exports remain world-leading.",
    },
    cities: [
      {
        name: { zh: "東京", en: "Tokyo" },
        blurb: {
          zh: "全球最大都會區,三千七百萬人生活在精準運轉的城市機器中。",
          en: "The world's largest metro area — 37 million people in a precisely tuned urban machine.",
        },
        trivia: {
          question: {
            zh: "東京在改名之前,原本的名稱是什麼?",
            en: "Before it was renamed Tokyo, the city was known as what?",
          },
          options: [
            { zh: "江戶", en: "Edo" },
            { zh: "平安京", en: "Heian-kyo" },
            { zh: "難波", en: "Naniwa" },
            { zh: "鎌倉", en: "Kamakura" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1868 年明治天皇將首都機能自京都移至江戶,改名「東京」,意為東方之都。",
            en: "In 1868 the Meiji Emperor moved the capital from Kyoto to Edo, renaming it Tokyo — 'eastern capital'.",
          },
        },
      },
      {
        name: { zh: "京都", en: "Kyoto" },
        blurb: {
          zh: "千年古都,兩千座寺社與傳統町屋保存完整。",
          en: "The thousand-year capital, home to 2,000 temples and shrines and preserved machiya townhouses.",
        },
        trivia: {
          question: {
            zh: "京都作為日本首都長達約多少年?",
            en: "For roughly how long did Kyoto serve as Japan's capital?",
          },
          options: [
            { zh: "約 1000 年", en: "About 1,000 years" },
            { zh: "約 500 年", en: "About 500 years" },
            { zh: "約 250 年", en: "About 250 years" },
            { zh: "約 100 年", en: "About 100 years" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "自 794 年平安京建都至 1868 年遷都東京,京都當了約一千年的首都。",
            en: "From Heian-kyo's founding in 794 until the 1868 move to Tokyo — about a millennium.",
          },
        },
      },
      {
        name: { zh: "大阪", en: "Osaka" },
        blurb: {
          zh: "關西商業之都,以美食文化與直爽性格聞名,號稱「天下的廚房」。",
          en: "Kansai's merchant capital, famed for its food culture — 'the nation's kitchen'.",
        },
        trivia: {
          question: {
            zh: "哪一道料理發源於大阪,名字意思是「隨你喜歡地煎」?",
            en: "Which dish born in Osaka has a name meaning 'grilled as you like it'?",
          },
          options: [
            { zh: "大阪燒(お好み焼き)", en: "Okonomiyaki" },
            { zh: "章魚燒", en: "Takoyaki" },
            { zh: "壽喜燒", en: "Sukiyaki" },
            { zh: "天婦羅", en: "Tempura" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「お好み」意為隨你喜好,「焼き」是煎烤,是大阪庶民美食的代表。",
            en: "'Okonomi' means 'as you like', 'yaki' means grilled — Osaka comfort food at its best.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "日本有超過 5.5 萬名百歲人瑞,全球密度最高之一。",
        en: "Japan has over 55,000 centenarians — among the world's highest rates.",
      },
      {
        zh: "新幹線自 1964 年通車以來,因事故死亡的乘客為零。",
        en: "Since 1964, the Shinkansen has had zero passenger fatalities from accidents.",
      },
    ],
  },
  {
    id: "KOR",
    name: { zh: "南韓", en: "South Korea" },
    capital: { zh: "首爾", en: "Seoul" },
    flag: "🇰🇷",
    region: "asia",
    center: { lat: 36.5, lng: 127.9 },
    intro: {
      zh: "朝鮮半島南部的科技與流行文化強國,K-pop、韓劇與電影橫掃全球,三星、現代等企業撐起出口經濟,首爾都會區集中了全國一半人口。",
      en: "A tech and pop-culture powerhouse on the southern Korean peninsula. K-pop, dramas, and films sweep the globe, conglomerates like Samsung and Hyundai drive exports, and greater Seoul holds half the population.",
    },
    history: {
      zh: "古代歷經三國時代、統一新羅與高麗、朝鮮王朝,1910 年被日本併吞。1945 年光復後半島以北緯 38 度線分治,1950–53 年韓戰後分裂固定化。南韓從戰後廢墟出發,經歷軍事政權與「漢江奇蹟」的高速工業化,1987 年民主化,如今是全球前十大經濟體與文化輸出大國。",
      en: "After the Three Kingdoms, Silla, Goryeo, and the Joseon dynasty, Korea was annexed by Japan in 1910. Liberation in 1945 brought division at the 38th parallel, cemented by the 1950–53 Korean War. From postwar ruins, South Korea industrialized at breakneck speed — the 'Miracle on the Han' — democratized in 1987, and is now a top-ten economy and cultural exporter.",
    },
    cities: [
      {
        name: { zh: "首爾", en: "Seoul" },
        blurb: {
          zh: "六百年古都與 24 小時不夜城的結合體,漢江貫穿其中。",
          en: "A 600-year-old capital fused with a 24-hour megacity, bisected by the Han River.",
        },
        trivia: {
          question: {
            zh: "首爾的景福宮是哪個王朝的正宮?",
            en: "Gyeongbokgung Palace in Seoul was the main royal palace of which dynasty?",
          },
          options: [
            { zh: "朝鮮王朝", en: "The Joseon dynasty" },
            { zh: "高麗王朝", en: "The Goryeo dynasty" },
            { zh: "新羅", en: "Silla" },
            { zh: "百濟", en: "Baekje" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1395 年朝鮮太祖李成桂建景福宮,作為朝鮮王朝五百年的正宮。",
            en: "Built in 1395 by King Taejo, it served as the Joseon dynasty's principal palace for five centuries.",
          },
        },
      },
      {
        name: { zh: "釜山", en: "Busan" },
        blurb: {
          zh: "第二大城與最大港口,海雲台沙灘與國際影展齊名。",
          en: "The second city and largest port, known for Haeundae Beach and its international film festival.",
        },
        trivia: {
          question: {
            zh: "韓戰期間,釜山扮演了什麼關鍵角色?",
            en: "What critical role did Busan play during the Korean War?",
          },
          options: [
            { zh: "臨時首都與最後防線", en: "Temporary capital and last defensive line" },
            { zh: "停戰談判地點", en: "Site of armistice talks" },
            { zh: "北韓的南方司令部", en: "North Korea's southern HQ" },
            { zh: "中立非武裝城市", en: "A neutral demilitarized city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1950 年南韓政府退守釜山,「釜山環形防線」是聯軍反攻前的最後據點。",
            en: "In 1950 the government fell back to Busan; the 'Pusan Perimeter' was the last stand before the UN counteroffensive.",
          },
        },
      },
      {
        name: { zh: "慶州", en: "Gyeongju" },
        blurb: {
          zh: "新羅千年古都,被稱為「沒有圍牆的博物館」。",
          en: "Ancient capital of Silla — 'a museum without walls'.",
        },
        trivia: {
          question: {
            zh: "慶州曾是哪個古國的首都近千年?",
            en: "Gyeongju was the capital of which ancient kingdom for nearly a millennium?",
          },
          options: [
            { zh: "新羅", en: "Silla" },
            { zh: "高句麗", en: "Goguryeo" },
            { zh: "百濟", en: "Baekje" },
            { zh: "渤海國", en: "Balhae" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "新羅(前 57–935)以慶州為都,佛國寺與石窟庵皆為世界遺產。",
            en: "Silla (57 BC–935 AD) ruled from Gyeongju; Bulguksa Temple and Seokguram Grotto are World Heritage sites.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "韓國的網路平均速度長年位居世界前列。",
        en: "South Korea consistently ranks among the fastest internet speeds on Earth.",
      },
    ],
  },
  {
    id: "CHN",
    name: { zh: "中國", en: "China" },
    capital: { zh: "北京", en: "Beijing" },
    flag: "🇨🇳",
    region: "asia",
    center: { lat: 35.9, lng: 104.2 },
    intro: {
      zh: "世界人口第二多的國家與第二大經濟體,國土橫跨沙漠、高原到亞熱帶海岸。擁有連續數千年的文字與文明傳統,高鐵里程與製造業規模均居全球之冠。",
      en: "The world's second-most-populous country and second-largest economy, spanning deserts, plateaus, and subtropical coasts. Heir to millennia of continuous written civilization, it leads the world in high-speed rail and manufacturing scale.",
    },
    history: {
      zh: "自商周以降歷經秦漢隋唐宋元明清等王朝更迭,長期是東亞文明中心。19 世紀鴉片戰爭後陷入百年動盪,1912 年清帝退位、民國建立,1949 年中華人民共和國成立。1978 年改革開放後經濟高速成長四十年,使數億人脫貧,成為全球供應鏈的核心。",
      en: "From the Shang and Zhou through the Qin, Han, Tang, Song, Yuan, Ming, and Qing, China was East Asia's civilizational center. The Opium Wars began a century of upheaval; the Qing fell in 1912, and the People's Republic was founded in 1949. Reform and opening from 1978 powered four decades of breakneck growth, lifting hundreds of millions from poverty and making China the hub of global supply chains.",
    },
    cities: [
      {
        name: { zh: "北京", en: "Beijing" },
        blurb: {
          zh: "八百年帝都,紫禁城與胡同共存的政治文化中心。",
          en: "An imperial capital for 800 years — the Forbidden City and hutong alleys side by side.",
        },
        trivia: {
          question: {
            zh: "北京故宮(紫禁城)最初是哪位皇帝下令興建的?",
            en: "The Forbidden City in Beijing was originally commissioned by which emperor?",
          },
          options: [
            { zh: "明成祖永樂帝", en: "The Yongle Emperor (Ming)" },
            { zh: "秦始皇", en: "Qin Shi Huang" },
            { zh: "清康熙帝", en: "The Kangxi Emperor (Qing)" },
            { zh: "元世祖忽必烈", en: "Kublai Khan (Yuan)" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "永樂帝 1406 年下令興建,1420 年落成,此後五百年是明清兩朝的皇宮。",
            en: "Ordered by the Yongle Emperor in 1406 and completed in 1420, it housed Ming and Qing emperors for 500 years.",
          },
        },
      },
      {
        name: { zh: "上海", en: "Shanghai" },
        blurb: {
          zh: "最大城市與金融中心,外灘老建築群對望陸家嘴天際線。",
          en: "The largest city and financial hub — the historic Bund faces the Lujiazui skyline.",
        },
        trivia: {
          question: {
            zh: "上海在 19 世紀因什麼事件而開埠,迅速成為遠東第一大港?",
            en: "What 19th-century event opened Shanghai to foreign trade, launching its rise?",
          },
          options: [
            { zh: "鴉片戰爭後的南京條約", en: "The Treaty of Nanking after the Opium War" },
            { zh: "甲午戰爭", en: "The First Sino-Japanese War" },
            { zh: "義和團事件", en: "The Boxer Rebellion" },
            { zh: "太平天國之亂", en: "The Taiping Rebellion" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1842 年南京條約將上海列為五口通商口岸之一,租界時代造就了它的國際都會底色。",
            en: "The 1842 Treaty of Nanking made Shanghai a treaty port; the concession era shaped its cosmopolitan character.",
          },
        },
      },
      {
        name: { zh: "西安", en: "Xi'an" },
        blurb: {
          zh: "十三朝古都,絲路起點,兵馬俑的故鄉。",
          en: "Capital of 13 dynasties, the Silk Road's starting point, home of the Terracotta Army.",
        },
        trivia: {
          question: {
            zh: "西安的兵馬俑是為哪位統治者陪葬而建?",
            en: "The Terracotta Army near Xi'an was built to guard the tomb of which ruler?",
          },
          options: [
            { zh: "秦始皇", en: "Qin Shi Huang" },
            { zh: "漢武帝", en: "Emperor Wu of Han" },
            { zh: "唐太宗", en: "Emperor Taizong of Tang" },
            { zh: "隋煬帝", en: "Emperor Yang of Sui" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "中國第一位皇帝秦始皇以八千陶俑陪葬,1974 年由打井農民意外發現。",
            en: "China's first emperor was buried with 8,000 clay soldiers, discovered by well-digging farmers in 1974.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "中國高鐵營運里程超過 4 萬公里,占全球三分之二以上。",
        en: "China's high-speed rail network exceeds 40,000 km — over two-thirds of the world total.",
      },
    ],
  },
  {
    id: "IND",
    name: { zh: "印度", en: "India" },
    capital: { zh: "新德里", en: "New Delhi" },
    flag: "🇮🇳",
    region: "asia",
    center: { lat: 21.0, lng: 78.0 },
    intro: {
      zh: "世界人口最多的國家,也是最大的民主國家。二十多種官方語言、多元宗教與寶萊塢文化並存,IT 服務業與太空計畫展現科技實力。",
      en: "The world's most populous country and its largest democracy. Two dozen official languages, many faiths, and Bollywood coexist, while IT services and a thriving space program showcase its technical might.",
    },
    history: {
      zh: "印度河流域文明可追溯至四千五百年前,吠陀時代奠定印度教基礎,孔雀王朝與笈多王朝盛極一時,蒙兀兒帝國留下泰姬瑪哈陵等瑰寶。18 世紀起漸受英國統治,甘地領導非暴力抗爭後於 1947 年獨立並與巴基斯坦分治。獨立後維持民主體制,21 世紀成為成長最快的主要經濟體之一。",
      en: "The Indus Valley civilization dates back 4,500 years; the Vedic age shaped Hinduism, and the Maurya, Gupta, and Mughal empires left treasures like the Taj Mahal. British rule from the 18th century ended in 1947 after Gandhi's nonviolent movement, alongside Partition. India has remained democratic ever since and is now among the fastest-growing major economies.",
    },
    cities: [
      {
        name: { zh: "德里", en: "Delhi" },
        blurb: {
          zh: "舊城的蒙兀兒遺跡與新德里的政府建築交織的首都圈。",
          en: "Mughal monuments in Old Delhi interlace with New Delhi's government quarter.",
        },
        trivia: {
          question: {
            zh: "德里的紅堡(Red Fort)是哪個帝國的皇宮?",
            en: "The Red Fort in Delhi was the palace of which empire?",
          },
          options: [
            { zh: "蒙兀兒帝國", en: "The Mughal Empire" },
            { zh: "孔雀王朝", en: "The Maurya Empire" },
            { zh: "英屬印度", en: "British India" },
            { zh: "笈多王朝", en: "The Gupta Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "沙賈汗 1639 年建紅堡,印度總理每年獨立日仍在此升旗演說。",
            en: "Built by Shah Jahan from 1639; India's PM still raises the flag here every Independence Day.",
          },
        },
      },
      {
        name: { zh: "孟買", en: "Mumbai" },
        blurb: {
          zh: "金融首都與寶萊塢基地,兩千萬人的夢想之城。",
          en: "The financial capital and home of Bollywood — a city of 20 million dreams.",
        },
        trivia: {
          question: {
            zh: "孟買的「寶萊塢」每年電影產量與好萊塢相比如何?",
            en: "How does Bollywood's annual film output compare to Hollywood's?",
          },
          options: [
            { zh: "遠多於好萊塢", en: "Far more films than Hollywood" },
            { zh: "大約一半", en: "About half as many" },
            { zh: "大致相同", en: "Roughly the same" },
            { zh: "不到四分之一", en: "Less than a quarter" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "印度電影業年產上千部,遠超好萊塢,寶萊塢是其中最大的印地語分支。",
            en: "India produces well over a thousand films a year — far more than Hollywood; Bollywood is its Hindi-language core.",
          },
        },
      },
      {
        name: { zh: "阿格拉", en: "Agra" },
        blurb: {
          zh: "泰姬瑪哈陵所在地,蒙兀兒建築藝術的巔峰。",
          en: "Home of the Taj Mahal, the pinnacle of Mughal architecture.",
        },
        trivia: {
          question: {
            zh: "泰姬瑪哈陵是沙賈汗為誰而建?",
            en: "For whom did Shah Jahan build the Taj Mahal?",
          },
          options: [
            { zh: "愛妻慕塔芝·瑪哈", en: "His beloved wife Mumtaz Mahal" },
            { zh: "他的母親", en: "His mother" },
            { zh: "先王阿克巴", en: "His grandfather Akbar" },
            { zh: "他自己", en: "Himself" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "慕塔芝·瑪哈 1631 年難產去世,沙賈汗動員兩萬工匠花 22 年建成這座白色大理石陵墓。",
            en: "After Mumtaz Mahal died in childbirth in 1631, 20,000 artisans spent 22 years on her white-marble mausoleum.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "印度以不到俄羅斯十分之一的預算完成火星軌道任務。",
        en: "India reached Mars orbit on its first try — at a fraction of typical mission costs.",
      },
    ],
  },
  {
    id: "THA",
    name: { zh: "泰國", en: "Thailand" },
    capital: { zh: "曼谷", en: "Bangkok" },
    flag: "🇹🇭",
    region: "asia",
    center: { lat: 15.8, lng: 101.0 },
    intro: {
      zh: "東南亞觀光大國,以金碧輝煌的佛寺、街頭美食與熱情待客聞名,「微笑之國」每年吸引數千萬旅客,同時也是東南亞第二大經濟體。",
      en: "Southeast Asia's tourism giant, famed for gilded temples, street food, and hospitality. The 'Land of Smiles' draws tens of millions of visitors yearly and is the region's second-largest economy.",
    },
    history: {
      zh: "素可泰與大城王朝相繼興盛,18 世紀大城被緬甸攻滅後,卻克里王朝定都曼谷延續至今。泰國是東南亞唯一未被歐洲殖民的國家,19 世紀朱拉隆功大帝推動現代化改革,巧妙周旋於英法之間保住主權。20 世紀歷經多次政變與民主化循環,觀光與製造業成為經濟支柱。",
      en: "The Sukhothai and Ayutthaya kingdoms flourished in turn; after Ayutthaya fell to Burma, the Chakri dynasty founded Bangkok in 1782 and reigns still. Thailand was the only Southeast Asian nation never colonized — King Chulalongkorn modernized while balancing Britain and France. The 20th century brought cycles of coups and democracy, with tourism and manufacturing anchoring the economy.",
    },
    cities: [
      {
        name: { zh: "曼谷", en: "Bangkok" },
        blurb: {
          zh: "大皇宮、水上市場與空鐵交錯的千面之城。",
          en: "The Grand Palace, floating markets, and the Skytrain — a city of a thousand faces.",
        },
        trivia: {
          question: {
            zh: "曼谷的正式泰文全名有什麼特別之處?",
            en: "What is special about Bangkok's full ceremonial Thai name?",
          },
          options: [
            {
              zh: "是全世界最長的城市名稱",
              en: "It's the longest city name in the world",
            },
            { zh: "意思是「天使之城」的縮寫", en: "It's an abbreviation of 'City of Angels'" },
            { zh: "由國王每年重新命名", en: "The king renames it every year" },
            { zh: "只能在宮廷中使用", en: "It may only be used at court" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "全名長達 168 個拉丁字母,金氏世界紀錄認證最長地名,開頭 Krung Thep 意為天使之城。",
            en: "At 168 letters it holds the Guinness record for longest place name; it begins 'Krung Thep' — City of Angels.",
          },
        },
      },
      {
        name: { zh: "清邁", en: "Chiang Mai" },
        blurb: {
          zh: "北方玫瑰,蘭納古國首都,古城牆內三百座寺廟。",
          en: "The Rose of the North — capital of the old Lanna kingdom, with 300 temples inside its moated old city.",
        },
        trivia: {
          question: {
            zh: "清邁曾是哪個古王國的首都?",
            en: "Chiang Mai was the capital of which historical kingdom?",
          },
          options: [
            { zh: "蘭納王國", en: "The Lanna Kingdom" },
            { zh: "大城王國", en: "The Ayutthaya Kingdom" },
            { zh: "素可泰王國", en: "The Sukhothai Kingdom" },
            { zh: "吳哥王朝", en: "The Angkor Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1296 年孟萊王建清邁為蘭納王國首都,「清邁」意為「新城」。",
            en: "Founded in 1296 by King Mangrai as Lanna's capital — 'Chiang Mai' means 'new city'.",
          },
        },
      },
      {
        name: { zh: "普吉", en: "Phuket" },
        blurb: {
          zh: "安達曼海上最大島嶼,白沙海灘與離島跳島勝地。",
          en: "The largest island in the Andaman Sea, a hub of white-sand beaches and island-hopping.",
        },
        trivia: {
          question: {
            zh: "普吉島在 19 世紀因開採什麼礦產而繁榮?",
            en: "Phuket grew wealthy in the 19th century from mining what?",
          },
          options: [
            { zh: "錫礦", en: "Tin" },
            { zh: "金礦", en: "Gold" },
            { zh: "紅寶石", en: "Rubies" },
            { zh: "煤礦", en: "Coal" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "錫礦吸引大批華人移民,普吉老城的中葡式建築即是那段歲月的遺產。",
            en: "Tin mining drew Chinese migrants; Phuket Old Town's Sino-Portuguese shophouses date from that boom.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "泰國是東南亞唯一從未被歐洲列強殖民的國家。",
        en: "Thailand is the only Southeast Asian country never colonized by a European power.",
      },
    ],
  },
  {
    id: "VNM",
    name: { zh: "越南", en: "Vietnam" },
    capital: { zh: "河內", en: "Hanoi" },
    flag: "🇻🇳",
    region: "asia",
    center: { lat: 16.5, lng: 106.3 },
    intro: {
      zh: "南北狹長三千公里的海岸國家,從下龍灣石灰岩島到湄公河三角洲風景多變。咖啡出口全球第二,製造業快速崛起,河粉與法棍三明治風靡世界。",
      en: "A coastal country stretching 3,000 km from Ha Long Bay's limestone karsts to the Mekong Delta. The world's #2 coffee exporter and a fast-rising manufacturing hub — and the home of pho and banh mi.",
    },
    history: {
      zh: "曾受中國統治千年,10 世紀獨立後歷經李、陳、黎、阮各朝。19 世紀成為法屬印度支那一部分,二戰後胡志明宣布獨立,歷經對法戰爭與越戰,1975 年南北統一。1986 年「革新開放」後轉向市場經濟,近年成為全球供應鏈遷移的最大受益者之一。",
      en: "Ruled by China for a millennium before independence in the 10th century, then the Ly, Tran, Le, and Nguyen dynasties. Colonized as French Indochina in the 19th century; Ho Chi Minh declared independence after WWII, followed by wars with France and the US until reunification in 1975. The 1986 'Doi Moi' reforms opened the economy, and Vietnam is now a top beneficiary of shifting global supply chains.",
    },
    cities: [
      {
        name: { zh: "河內", en: "Hanoi" },
        blurb: {
          zh: "千年古都,三十六行古街與法式殖民建築並存。",
          en: "A thousand-year-old capital where the 36 guild streets meet French colonial boulevards.",
        },
        trivia: {
          question: {
            zh: "河內舊城區著名的「三十六行街」得名由來是?",
            en: "Hanoi's Old Quarter is famous for its '36 streets' — named after what?",
          },
          options: [
            { zh: "各行各業的同業聚集街", en: "Streets each dedicated to one craft or trade" },
            { zh: "36 座城門", en: "The city's 36 gates" },
            { zh: "36 個湖泊", en: "Its 36 lakes" },
            { zh: "建城 36 週年", en: "The city's 36th anniversary" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "古代同業工匠聚居一街,如銀街、麻街、紙街,街名沿用至今。",
            en: "Each street housed one guild — Silver Street, Hemp Street, Paper Street — names still used today.",
          },
        },
      },
      {
        name: { zh: "胡志明市", en: "Ho Chi Minh City" },
        blurb: {
          zh: "舊名西貢,越南最大城與經濟引擎,機車洪流的代名詞。",
          en: "Formerly Saigon — Vietnam's largest city and economic engine, famed for its rivers of motorbikes.",
        },
        trivia: {
          question: {
            zh: "胡志明市在 1976 年之前的名稱是什麼?",
            en: "What was Ho Chi Minh City called before 1976?",
          },
          options: [
            { zh: "西貢", en: "Saigon" },
            { zh: "順化", en: "Hue" },
            { zh: "峴港", en: "Da Nang" },
            { zh: "海防", en: "Hai Phong" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "南北統一後西貢改名紀念胡志明,但當地人日常仍常稱西貢。",
            en: "Renamed after reunification to honor Ho Chi Minh — though locals still casually say 'Saigon'.",
          },
        },
      },
      {
        name: { zh: "會安", en: "Hoi An" },
        blurb: {
          zh: "保存完好的古商港,燈籠之城,世界文化遺產。",
          en: "A beautifully preserved trading port and World Heritage 'city of lanterns'.",
        },
        trivia: {
          question: {
            zh: "會安古城最具代表性的地標「來遠橋」(日本橋)由誰所建?",
            en: "Hoi An's iconic covered bridge was built by which community?",
          },
          options: [
            { zh: "日本商人", en: "Japanese merchants" },
            { zh: "法國殖民政府", en: "The French colonial government" },
            { zh: "葡萄牙傳教士", en: "Portuguese missionaries" },
            { zh: "占婆王國", en: "The Champa kingdom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "16-17 世紀會安是國際商港,日本橋連接日本人街與華人街,是越南紙鈔上的圖案。",
            en: "In Hoi An's 16th–17th century heyday, Japanese traders built the bridge linking their quarter to the Chinese one — it appears on Vietnamese banknotes.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "越南是全球第二大咖啡出口國,以羅布斯塔豆為主。",
        en: "Vietnam is the world's #2 coffee exporter, mostly robusta beans.",
      },
    ],
  },
  {
    id: "PHL",
    name: { zh: "菲律賓", en: "Philippines" },
    capital: { zh: "馬尼拉", en: "Manila" },
    flag: "🇵🇭",
    region: "asia",
    center: { lat: 12.9, lng: 121.8 },
    intro: {
      zh: "由七千多座島嶼組成的群島國家,融合馬來、西班牙與美國文化。英語普及率高,海外移工遍布全球,長灘島與巴拉望的海島風光世界知名。",
      en: "An archipelago of over 7,000 islands blending Malay, Spanish, and American influences. English is widely spoken, Filipino workers span the globe, and Boracay and Palawan are world-famous island escapes.",
    },
    history: {
      zh: "16 世紀麥哲倫抵達後,西班牙殖民統治三百餘年,天主教因此成為主流信仰。1898 年美西戰爭後改由美國統治,二戰被日本佔領,1946 年獨立。馬可仕長期威權統治在 1986 年「人民力量革命」中和平落幕,此後民主政體延續,服務業與僑匯撐起經濟。",
      en: "After Magellan's arrival in 1521, Spain ruled for over 300 years, making Catholicism dominant. The US took over after the 1898 Spanish-American War; Japan occupied during WWII; independence came in 1946. The Marcos dictatorship ended peacefully in the 1986 People Power Revolution, and services plus overseas remittances now power the economy.",
    },
    cities: [
      {
        name: { zh: "馬尼拉", en: "Manila" },
        blurb: {
          zh: "首都圈人口密度世界前列,西班牙古城牆內是歷史起點。",
          en: "One of the world's densest capitals; the walled city of Intramuros is where it all began.",
        },
        trivia: {
          question: {
            zh: "馬尼拉的古城區「王城」(Intramuros)是哪國殖民時期建立的?",
            en: "Manila's walled old town, Intramuros, was built under which colonial power?",
          },
          options: [
            { zh: "西班牙", en: "Spain" },
            { zh: "美國", en: "The United States" },
            { zh: "葡萄牙", en: "Portugal" },
            { zh: "荷蘭", en: "The Netherlands" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1571 年西班牙人建城,Intramuros 意為「牆內」,是殖民統治三百年的核心。",
            en: "Founded by the Spanish in 1571 — 'Intramuros' means 'within the walls', the heart of 300 years of rule.",
          },
        },
      },
      {
        name: { zh: "宿霧", en: "Cebu" },
        blurb: {
          zh: "菲律賓最古老的城市,麥哲倫十字架的所在地。",
          en: "The oldest city in the Philippines, home of Magellan's Cross.",
        },
        trivia: {
          question: {
            zh: "1521 年在宿霧附近的馬克坦島戰死的著名航海家是誰?",
            en: "Which famous explorer was killed on Mactan Island near Cebu in 1521?",
          },
          options: [
            { zh: "麥哲倫", en: "Ferdinand Magellan" },
            { zh: "哥倫布", en: "Christopher Columbus" },
            { zh: "達伽馬", en: "Vasco da Gama" },
            { zh: "庫克船長", en: "Captain James Cook" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "麥哲倫在與酋長拉普拉普的戰鬥中身亡,其船隊餘部完成了史上首次環球航行。",
            en: "Magellan fell fighting chief Lapulapu; his surviving crew completed the first circumnavigation of the globe.",
          },
        },
      },
      {
        name: { zh: "達沃", en: "Davao" },
        blurb: {
          zh: "民答那峨島最大城,榴槤之都,鄰近菲律賓最高峰阿波火山。",
          en: "Mindanao's largest city, the durian capital, near Mt. Apo — the country's highest peak.",
        },
        trivia: {
          question: {
            zh: "達沃以盛產哪種氣味濃烈的水果聞名?",
            en: "Davao is famous for which notoriously pungent fruit?",
          },
          options: [
            { zh: "榴槤", en: "Durian" },
            { zh: "山竹", en: "Mangosteen" },
            { zh: "波羅蜜", en: "Jackfruit" },
            { zh: "紅毛丹", en: "Rambutan" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "達沃是菲律賓榴槤之都,市區還有榴槤造型的地標雕塑。",
            en: "Davao is the Philippines' durian capital — there's even a durian-shaped monument downtown.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "菲律賓是全球社群媒體使用時間最長的國家之一。",
        en: "Filipinos consistently rank among the world's heaviest social-media users.",
      },
    ],
  },
  {
    id: "IDN",
    name: { zh: "印尼", en: "Indonesia" },
    capital: { zh: "雅加達", en: "Jakarta" },
    flag: "🇮🇩",
    region: "asia",
    center: { lat: -2.5, lng: 118.0 },
    intro: {
      zh: "世界最大群島國家,一萬七千座島嶼橫跨三個時區,人口全球第四。穆斯林人口最多的國家,卻也擁有峇里島的印度教文化與婆羅浮屠佛塔。",
      en: "The world's largest archipelago — 17,000 islands across three time zones, with the fourth-largest population. Home to the world's biggest Muslim population, yet also Bali's Hindu culture and the Buddhist Borobudur.",
    },
    history: {
      zh: "室利佛逝與滿者伯夷等海上帝國曾主宰香料貿易,16 世紀起葡、荷相繼而來,荷蘭東印度公司統治三百餘年。1945 年蘇卡諾宣布獨立,經對荷獨立戰爭後獲承認。蘇哈托威權統治三十餘年後於 1998 年民主化,如今是 G20 成員與東南亞最大經濟體。",
      en: "Maritime empires like Srivijaya and Majapahit once ruled the spice trade; the Portuguese and then the Dutch followed, with the Dutch East India Company governing for over 300 years. Sukarno declared independence in 1945, secured after a war with the Dutch. Suharto's three-decade authoritarian rule ended in 1998, and Indonesia is now a G20 member and Southeast Asia's largest economy.",
    },
    cities: [
      {
        name: { zh: "雅加達", en: "Jakarta" },
        blurb: {
          zh: "三千萬人的大都會,正逐步將首都遷往加里曼丹的努山塔拉。",
          en: "A 30-million-person megacity — now gradually handing the capital role to Nusantara in Borneo.",
        },
        trivia: {
          question: {
            zh: "印尼為何決定把首都從雅加達遷到加里曼丹島的努山塔拉?",
            en: "Why is Indonesia moving its capital from Jakarta to Nusantara on Borneo?",
          },
          options: [
            {
              zh: "雅加達嚴重下陷且過度擁擠",
              en: "Jakarta is sinking and severely overcrowded",
            },
            { zh: "雅加達位於戰爭前線", en: "Jakarta is on a war frontier" },
            { zh: "宗教因素", en: "Religious reasons" },
            { zh: "配合奧運申辦", en: "To support an Olympic bid" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "雅加達部分地區每年下陷超過 10 公分,加上塞車與洪水,促成史上最大規模遷都計畫之一。",
            en: "Parts of Jakarta sink over 10 cm a year; with floods and gridlock, it spurred one of history's biggest capital relocations.",
          },
        },
      },
      {
        name: { zh: "日惹", en: "Yogyakarta" },
        blurb: {
          zh: "爪哇文化古都,鄰近婆羅浮屠與普蘭巴南兩大世界遺產。",
          en: "Java's cultural capital, near the twin World Heritage sites of Borobudur and Prambanan.",
        },
        trivia: {
          question: {
            zh: "日惹近郊的婆羅浮屠是世界最大的什麼建築?",
            en: "Borobudur near Yogyakarta is the world's largest what?",
          },
          options: [
            { zh: "佛教寺廟建築", en: "Buddhist temple" },
            { zh: "印度教神廟", en: "Hindu temple" },
            { zh: "清真寺", en: "Mosque" },
            { zh: "皇宮建築群", en: "Royal palace complex" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "9 世紀建成的婆羅浮屠以兩百萬塊火山岩砌成,是全球最大單體佛教建築。",
            en: "Built in the 9th century from two million volcanic stone blocks — the largest single Buddhist monument on Earth.",
          },
        },
      },
      {
        name: { zh: "峇里島登巴薩", en: "Denpasar (Bali)" },
        blurb: {
          zh: "峇里島首府,印度教文化與衝浪海灘的代名詞。",
          en: "Bali's capital — shorthand for Hindu culture and surf beaches.",
        },
        trivia: {
          question: {
            zh: "峇里島每年有一天全島停電、機場關閉、禁止外出,這個節日叫什麼?",
            en: "One day a year Bali shuts its airport and everyone stays home in silence. What is it called?",
          },
          options: [
            { zh: "安寧日(Nyepi)", en: "Nyepi (Day of Silence)" },
            { zh: "加隆安節(Galungan)", en: "Galungan" },
            { zh: "衛塞節", en: "Vesak" },
            { zh: "排燈節", en: "Diwali" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "峇里印度教新年「安寧日」全島靜默 24 小時,連機場都關閉,是世界唯一。",
            en: "For the Balinese Hindu new year, the whole island — airport included — falls silent for 24 hours. Unique in the world.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "印尼擁有全球最多的活火山,約 130 座。",
        en: "Indonesia has more active volcanoes than any other country — about 130.",
      },
    ],
  },
  {
    id: "MYS",
    name: { zh: "馬來西亞", en: "Malaysia" },
    capital: { zh: "吉隆坡", en: "Kuala Lumpur" },
    flag: "🇲🇾",
    region: "asia",
    center: { lat: 4.2, lng: 102.0 },
    intro: {
      zh: "橫跨馬來半島與婆羅洲的多元國家,馬來、華人、印度文化交融。雙峰塔曾是世界最高建築,棕櫚油與電子業是經濟支柱,美食融合度極高。",
      en: "Spanning the Malay Peninsula and Borneo, a mosaic of Malay, Chinese, and Indian cultures. The Petronas Towers were once the world's tallest, and palm oil plus electronics drive the economy — with legendary fusion food.",
    },
    history: {
      zh: "馬六甲蘇丹國 15 世紀掌控東西方香料航道,其後葡、荷、英相繼殖民,英國統治期間引入大量華人與印度勞工,奠定多元族群結構。1957 年馬來亞獨立,1963 年與沙巴、砂拉越、新加坡合組馬來西亞(新加坡 1965 年退出)。此後經濟多元化,成為東南亞重要的中等收入國家。",
      en: "The Malacca Sultanate controlled the spice route in the 15th century, followed by Portuguese, Dutch, and British rule; British-era migration shaped today's multiethnic society. Malaya gained independence in 1957 and merged with Sabah, Sarawak, and Singapore in 1963 to form Malaysia (Singapore left in 1965). It has since diversified into a leading middle-income economy.",
    },
    cities: [
      {
        name: { zh: "吉隆坡", en: "Kuala Lumpur" },
        blurb: {
          zh: "雙峰塔下的多元都會,錫礦小鎮蛻變的首都。",
          en: "A multicultural metropolis beneath the Petronas Towers — a tin-mining camp turned capital.",
        },
        trivia: {
          question: {
            zh: "吉隆坡的雙峰塔(Petronas Towers)以什麼紀錄聞名?",
            en: "The Petronas Towers in Kuala Lumpur are famous for holding what record?",
          },
          options: [
            {
              zh: "曾是世界最高建築,至今仍是最高雙塔",
              en: "Once the world's tallest buildings — still the tallest twin towers",
            },
            { zh: "世界最深地基", en: "The world's deepest foundations" },
            { zh: "世界最早的摩天大樓", en: "The world's first skyscrapers" },
            { zh: "最多電梯的建築", en: "The most elevators in a building" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1998–2004 年為世界第一高樓,雙塔間的空中天橋位於 41-42 樓。",
            en: "World's tallest from 1998–2004; the skybridge links the towers at floors 41–42.",
          },
        },
      },
      {
        name: { zh: "檳城喬治市", en: "George Town (Penang)" },
        blurb: {
          zh: "世界遺產老城與美食之都,南洋華人文化重鎮。",
          en: "A World Heritage old town and food capital, a stronghold of Straits Chinese culture.",
        },
        trivia: {
          question: {
            zh: "檳城喬治市與哪座城市一同在 2008 年列入世界文化遺產?",
            en: "George Town was inscribed as World Heritage in 2008 together with which city?",
          },
          options: [
            { zh: "馬六甲", en: "Malacca" },
            { zh: "新山", en: "Johor Bahru" },
            { zh: "怡保", en: "Ipoh" },
            { zh: "古晉", en: "Kuching" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "兩城以「馬六甲海峽歷史城市」之名共同入列,見證數百年海峽貿易史。",
            en: "Inscribed jointly as 'Historic Cities of the Straits of Malacca', testaments to centuries of strait trade.",
          },
        },
      },
      {
        name: { zh: "古晉", en: "Kuching" },
        blurb: {
          zh: "砂拉越首府,「貓城」,雨林與長屋文化的入口。",
          en: "Sarawak's capital, the 'Cat City' — gateway to rainforests and longhouse culture.",
        },
        trivia: {
          question: {
            zh: "古晉市名在馬來語中和哪種動物有關,城裡還有其雕像與博物館?",
            en: "Kuching's name is linked to which animal, celebrated with statues and a museum?",
          },
          options: [
            { zh: "貓", en: "Cats" },
            { zh: "紅毛猩猩", en: "Orangutans" },
            { zh: "犀鳥", en: "Hornbills" },
            { zh: "鱷魚", en: "Crocodiles" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Kucing 在馬來語是貓,古晉因此有貓博物館與多座貓雕像,砂拉越的象徵則是犀鳥。",
            en: "'Kucing' means cat in Malay — hence the cat museum and statues (Sarawak's state symbol is the hornbill).",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬來西亞的砂拉越擁有世界最大的洞穴廳堂——姆魯山鹿洞。",
        en: "Sarawak's Mulu caves contain the world's largest known cave chamber.",
      },
    ],
  },
  {
    id: "SGP",
    name: { zh: "新加坡", en: "Singapore" },
    capital: { zh: "新加坡", en: "Singapore" },
    flag: "🇸🇬",
    region: "asia",
    center: { lat: 1.35, lng: 103.82 },
    intro: {
      zh: "馬來半島南端的城市國家,面積僅 730 平方公里卻是全球金融、航運與轉機樞紐。以花園城市規劃、嚴明法治與小販中心美食聞名。",
      en: "A city-state at the tip of the Malay Peninsula — just 730 km² yet a global hub for finance, shipping, and air travel. Known for garden-city planning, strict rule of law, and hawker-centre food.",
    },
    history: {
      zh: "1819 年萊佛士登陸建立英國貿易港,自由港政策吸引各地移民。二戰被日本佔領三年餘,1963 年併入馬來西亞,1965 年被迫獨立。李光耀帶領這個「彈丸小國」發展出口工業與金融業,一代人之間從第三世界躍升第一世界,成為亞洲人均所得最高的國家之一。",
      en: "Stamford Raffles founded a British free port here in 1819, drawing migrants from across Asia. Occupied by Japan in WWII, it joined Malaysia in 1963 but was expelled into independence in 1965. Under Lee Kuan Yew, the tiny nation leapt 'from third world to first' in a generation, becoming one of Asia's richest countries per capita.",
    },
    cities: [
      {
        name: { zh: "市中心(濱海灣)", en: "Downtown (Marina Bay)" },
        blurb: {
          zh: "金沙酒店、擎天樹與金融區天際線的代表景觀。",
          en: "Marina Bay Sands, the Supertrees, and the financial skyline — Singapore's signature view.",
        },
        trivia: {
          question: {
            zh: "濱海灣花園的「擎天樹」(Supertrees)除了造景還有什麼功能?",
            en: "Besides being scenic, what do the Supertrees at Gardens by the Bay actually do?",
          },
          options: [
            {
              zh: "太陽能發電並為溫室降溫排氣",
              en: "Harvest solar power and vent the conservatories",
            },
            { zh: "純裝飾", en: "Purely decorative" },
            { zh: "行動通訊基地台", en: "They're cell towers" },
            { zh: "海水淡化裝置", en: "They desalinate seawater" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "部分擎天樹裝有太陽能板,並作為溫室冷卻系統的排氣塔,垂直花園種了十多萬株植物。",
            en: "Several harvest solar energy and act as exhaust stacks for the cooled conservatories, wrapped in 160,000+ plants.",
          },
        },
      },
      {
        name: { zh: "牛車水", en: "Chinatown" },
        blurb: {
          zh: "華人移民的歷史街區,廟宇、老店屋與小販美食聚集。",
          en: "The historic Chinese quarter — temples, shophouses, and hawker classics.",
        },
        trivia: {
          question: {
            zh: "新加坡的「小販中心」文化在 2020 年獲得什麼國際肯定?",
            en: "Singapore's hawker culture received what international recognition in 2020?",
          },
          options: [
            {
              zh: "列入聯合國非物質文化遺產",
              en: "UNESCO Intangible Cultural Heritage listing",
            },
            { zh: "米其林三星", en: "Three Michelin stars" },
            { zh: "世界文化遺產城區", en: "World Heritage district status" },
            { zh: "奧運指定餐飲", en: "Official Olympic catering" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "小販文化被 UNESCO 列入人類非物質文化遺產;新加坡也有全球最便宜的米其林星級小販攤。",
            en: "Hawker culture joined UNESCO's Intangible Heritage list — and Singapore boasts some of the cheapest Michelin-starred food anywhere.",
          },
        },
      },
      {
        name: { zh: "聖淘沙", en: "Sentosa" },
        blurb: {
          zh: "度假島嶼,環球影城與海灘樂園。",
          en: "The resort island — Universal Studios, beaches, and family fun.",
        },
        trivia: {
          question: {
            zh: "聖淘沙島在馬來語中的意思是什麼?",
            en: "What does 'Sentosa' mean in Malay?",
          },
          options: [
            { zh: "和平與安寧", en: "Peace and tranquility" },
            { zh: "黃金海岸", en: "Golden coast" },
            { zh: "獅子之島", en: "Island of lions" },
            { zh: "珍珠港灣", en: "Pearl harbor" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Sentosa 意為安寧;它曾名「絕後島」(Pulau Blakang Mati),改名後成了度假勝地。",
            en: "Sentosa means tranquility — a rebrand from its ominous old name Pulau Blakang Mati ('island behind death').",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "新加坡樟宜機場的室內瀑布「雨漩渦」高達 40 公尺,是全球最高室內瀑布。",
        en: "Changi Airport's 40 m Rain Vortex is the world's tallest indoor waterfall.",
      },
    ],
  },
  {
    id: "TUR",
    name: { zh: "土耳其", en: "Turkey" },
    capital: { zh: "安卡拉", en: "Ankara" },
    flag: "🇹🇷",
    region: "asia",
    center: { lat: 39.0, lng: 35.2 },
    intro: {
      zh: "橫跨歐亞兩洲的國家,伊斯坦堡扼守博斯普魯斯海峽。拜占庭與鄂圖曼兩大帝國的遺產遍布,卡帕多奇亞熱氣球與地中海度假海岸都是旅遊亮點。",
      en: "A country straddling Europe and Asia, with Istanbul guarding the Bosphorus. Layered with Byzantine and Ottoman heritage, it draws visitors to Cappadocia's balloons and Mediterranean resorts alike.",
    },
    history: {
      zh: "安納托利亞是人類最早的農業與城市文明搖籃之一,歷經西臺、希臘羅馬、拜占庭時代。1453 年鄂圖曼帝國攻陷君士坦丁堡,盛期版圖橫跨三洲。一戰帝國瓦解後,凱末爾 1923 年建立世俗共和國並推動大規模現代化改革。今日土耳其是 NATO 成員,位居歐亞地緣政治的樞紐。",
      en: "Anatolia cradled some of humanity's earliest farming towns, then Hittite, Greco-Roman, and Byzantine civilizations. The Ottomans took Constantinople in 1453 and ruled three continents at their peak. After WWI collapse, Atatürk founded a secular republic in 1923 with sweeping reforms. Modern Turkey is a NATO member at the pivot of Eurasian geopolitics.",
    },
    cities: [
      {
        name: { zh: "伊斯坦堡", en: "Istanbul" },
        blurb: {
          zh: "唯一橫跨兩洲的大都會,聖索菲亞與藍色清真寺隔街相望。",
          en: "The only metropolis on two continents — Hagia Sophia faces the Blue Mosque.",
        },
        trivia: {
          question: {
            zh: "伊斯坦堡在鄂圖曼帝國攻陷前的名稱是什麼?",
            en: "What was Istanbul called before the Ottoman conquest?",
          },
          options: [
            { zh: "君士坦丁堡", en: "Constantinople" },
            { zh: "亞歷山卓", en: "Alexandria" },
            { zh: "安條克", en: "Antioch" },
            { zh: "特洛伊", en: "Troy" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "君士坦丁大帝 330 年定都於此,1453 年鄂圖曼攻陷後逐漸改稱伊斯坦堡。",
            en: "Constantine made it his capital in 330 AD; after the 1453 conquest the name gradually became Istanbul.",
          },
        },
      },
      {
        name: { zh: "安卡拉", en: "Ankara" },
        blurb: {
          zh: "共和國首都與政治中心,凱末爾陵寢所在。",
          en: "The republic's capital and political center, site of Atatürk's mausoleum.",
        },
        trivia: {
          question: {
            zh: "土耳其為什麼在 1923 年把首都從伊斯坦堡遷到安卡拉?",
            en: "Why did Turkey move its capital from Istanbul to Ankara in 1923?",
          },
          options: [
            {
              zh: "安卡拉位居內陸中心,戰略上更安全",
              en: "Ankara's central inland location was strategically safer",
            },
            { zh: "伊斯坦堡地震毀損", en: "Istanbul was destroyed by an earthquake" },
            { zh: "安卡拉人口較多", en: "Ankara had a larger population" },
            { zh: "宗教因素", en: "Religious reasons" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "凱末爾選擇遠離列強艦砲威脅的內陸小城安卡拉,象徵與鄂圖曼舊都的切割。",
            en: "Atatürk chose an inland town beyond foreign gunboats' reach — and a clean break from the Ottoman past.",
          },
        },
      },
      {
        name: { zh: "卡帕多奇亞(格雷梅)", en: "Cappadocia (Göreme)" },
        blurb: {
          zh: "精靈煙囪與洞穴教堂的奇岩地景,熱氣球聖地。",
          en: "Fairy chimneys, cave churches, and the world's most famous balloon rides.",
        },
        trivia: {
          question: {
            zh: "卡帕多奇亞的「精靈煙囪」奇岩是怎麼形成的?",
            en: "How were Cappadocia's 'fairy chimney' rock spires formed?",
          },
          options: [
            {
              zh: "火山凝灰岩被風雨侵蝕",
              en: "Erosion of soft volcanic tuff",
            },
            { zh: "古人雕鑿", en: "Carved by ancient peoples" },
            { zh: "冰河切割", en: "Glacial carving" },
            { zh: "隕石撞擊", en: "Meteor impacts" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "火山灰堆積成軟岩,數百萬年風化後留下頂著硬岩帽的石柱;古人再鑿出洞穴住所與地下城。",
            en: "Soft volcanic ash eroded over millions of years, leaving capped spires — later hollowed into homes and underground cities.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "鬱金香原產於土耳其一帶,17 世紀才傳入荷蘭。",
        en: "Tulips are native to the Turkish region — they reached the Netherlands only in the 17th century.",
      },
    ],
  },
  {
    id: "SAU",
    name: { zh: "沙烏地阿拉伯", en: "Saudi Arabia" },
    capital: { zh: "利雅德", en: "Riyadh" },
    flag: "🇸🇦",
    region: "asia",
    center: { lat: 24.2, lng: 45.1 },
    intro: {
      zh: "阿拉伯半島上的石油大國,伊斯蘭教兩大聖城麥加與麥地那的所在。近年以「2030 願景」推動經濟轉型,興建未來城 NEOM 並大力發展觀光。",
      en: "The oil giant of the Arabian Peninsula and guardian of Islam's two holiest cities, Mecca and Medina. Its 'Vision 2030' drive is diversifying the economy, building futuristic NEOM and opening up to tourism.",
    },
    history: {
      zh: "七世紀伊斯蘭教在麥加誕生後,阿拉伯半島成為信仰中心。現代沙烏地由紹德家族經數十年征戰,於 1932 年統一建國;1938 年發現石油後一躍成為全球能源心臟。長期實行嚴格的瓦哈比教義,2017 年後在王儲主導下加速社會開放與經濟多元化。",
      en: "Islam was born in Mecca in the 7th century, making the peninsula the faith's heartland. The Al Saud family unified the modern kingdom in 1932; oil, struck in 1938, made it the heart of global energy. Long governed by strict Wahhabi doctrine, it has liberalized socially and diversified economically at speed since 2017 under the crown prince.",
    },
    cities: [
      {
        name: { zh: "利雅德", en: "Riyadh" },
        blurb: {
          zh: "沙漠中的首都,從綠洲小鎮長成八百萬人的商業中心。",
          en: "The desert capital — an oasis town grown into a business hub of eight million.",
        },
        trivia: {
          question: {
            zh: "利雅德的名字在阿拉伯語中是什麼意思?",
            en: "What does 'Riyadh' mean in Arabic?",
          },
          options: [
            { zh: "花園(複數)", en: "The gardens" },
            { zh: "沙漠之心", en: "Heart of the desert" },
            { zh: "國王之城", en: "City of kings" },
            { zh: "黎明", en: "The dawn" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Riyadh 是 rawdah(花園)的複數,因當地綠洲肥沃而得名。",
            en: "Riyadh is the plural of 'rawdah' (garden), named for its fertile oasis setting.",
          },
        },
      },
      {
        name: { zh: "麥加", en: "Mecca" },
        blurb: {
          zh: "伊斯蘭第一聖城,每年朝覲季湧入數百萬信徒。",
          en: "Islam's holiest city, drawing millions of pilgrims each Hajj season.",
        },
        trivia: {
          question: {
            zh: "全球穆斯林每日五次禮拜時面向麥加的哪個建築?",
            en: "Muslims worldwide face which structure in Mecca during daily prayers?",
          },
          options: [
            { zh: "卡巴天房", en: "The Kaaba" },
            { zh: "先知清真寺", en: "The Prophet's Mosque" },
            { zh: "滲滲泉", en: "The Zamzam Well" },
            { zh: "光明山", en: "Jabal al-Nour" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "禁寺中央的立方體聖殿卡巴是禮拜朝向(qibla),朝覲時信徒繞行七圈。",
            en: "The cube-shaped Kaaba at the Grand Mosque's center defines the qibla; pilgrims circle it seven times.",
          },
        },
      },
      {
        name: { zh: "吉達", en: "Jeddah" },
        blurb: {
          zh: "紅海門戶與商業港,老城區珊瑚石屋是世界遺產。",
          en: "The Red Sea gateway and merchant port; its coral-stone old town is World Heritage.",
        },
        trivia: {
          question: {
            zh: "吉達歷史城區的傳統建築以什麼材料建成?",
            en: "Old Jeddah's traditional tower houses are built from what material?",
          },
          options: [
            { zh: "紅海珊瑚石", en: "Red Sea coral stone" },
            { zh: "花崗岩", en: "Granite" },
            { zh: "泥磚", en: "Mud brick" },
            { zh: "大理石", en: "Marble" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴拉德老城以珊瑚礁石砌牆、木格窗(roshan)通風,2014 年列入世界遺產。",
            en: "Al-Balad's houses use coral stone with wooden roshan lattice windows — UNESCO-listed in 2014.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "沙烏地是全球最大的沙漠國家之一,境內沒有任何常年河流。",
        en: "Saudi Arabia has no permanent rivers — one of the largest countries without one.",
      },
    ],
  },
  {
    id: "ISR",
    name: { zh: "以色列", en: "Israel" },
    capital: { zh: "耶路撒冷", en: "Jerusalem" },
    flag: "🇮🇱",
    region: "asia",
    center: { lat: 31.4, lng: 35.0 },
    intro: {
      zh: "地中海東岸的科技創業之國,人均新創密度全球第一。耶路撒冷是猶太教、基督教與伊斯蘭教共同的聖地,死海與馬薩達則是自然與歷史奇觀。",
      en: "A startup nation on the eastern Mediterranean with the world's highest per-capita density of tech ventures. Jerusalem is sacred to Judaism, Christianity, and Islam; the Dead Sea and Masada add natural and historical wonders.",
    },
    history: {
      zh: "古代以色列與猶大王國之後,猶太人歷經兩千年流散。19 世紀末錫安主義興起,1948 年以色列建國,隨即與周邊阿拉伯國家多次戰爭。與埃及、約旦簽署和約,但以巴衝突延續至今。缺乏天然資源的以色列以軍事科技外溢帶動高科技產業,成為「新創之國」。",
      en: "After the ancient kingdoms of Israel and Judah, Jews lived in diaspora for two millennia. Zionism rose in the late 1800s; Israel declared statehood in 1948, followed by repeated wars with Arab neighbors. Peace treaties came with Egypt and Jordan, though the Israeli-Palestinian conflict endures. Resource-poor, Israel turned military R&D into a booming tech sector — the 'startup nation'.",
    },
    cities: [
      {
        name: { zh: "耶路撒冷", en: "Jerusalem" },
        blurb: {
          zh: "三大一神教的聖城,舊城牆內濃縮數千年信仰史。",
          en: "Holy to three faiths — millennia of belief compressed inside the Old City walls.",
        },
        trivia: {
          question: {
            zh: "耶路撒冷舊城的「西牆」是哪座古建築的遺跡?",
            en: "The Western Wall in Jerusalem's Old City is a remnant of what ancient structure?",
          },
          options: [
            { zh: "第二聖殿的擋土牆", en: "The Second Temple's retaining wall" },
            { zh: "大衛王宮殿", en: "King David's palace" },
            { zh: "羅馬競技場", en: "A Roman arena" },
            { zh: "十字軍城堡", en: "A Crusader castle" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "西牆是希律王擴建第二聖殿時的西側擋土牆,聖殿於西元 70 年被羅馬摧毀後僅存此段。",
            en: "It's the western retaining wall of Herod's Second Temple complex, destroyed by Rome in 70 AD.",
          },
        },
      },
      {
        name: { zh: "特拉維夫", en: "Tel Aviv" },
        blurb: {
          zh: "經濟與科技中心,地中海岸的不夜城與包浩斯建築之都。",
          en: "The economic and tech hub — a Mediterranean city that never sleeps, famed for Bauhaus architecture.",
        },
        trivia: {
          question: {
            zh: "特拉維夫的「白城」以哪種建築風格聞名並列入世界遺產?",
            en: "Tel Aviv's 'White City' is a World Heritage site for which architectural style?",
          },
          options: [
            { zh: "包浩斯(國際風格)", en: "Bauhaus (International Style)" },
            { zh: "新藝術風格", en: "Art Nouveau" },
            { zh: "鄂圖曼風格", en: "Ottoman" },
            { zh: "裝飾藝術", en: "Art Deco" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1930 年代逃離歐洲的猶太建築師在此蓋了四千多棟包浩斯建築,是全球最大聚落。",
            en: "Émigré architects fleeing 1930s Europe built 4,000+ Bauhaus buildings — the world's largest such collection.",
          },
        },
      },
      {
        name: { zh: "海法", en: "Haifa" },
        blurb: {
          zh: "北部港都,巴哈伊空中花園沿卡梅爾山層層而下。",
          en: "The northern port city, where the Baha'i Gardens cascade down Mount Carmel.",
        },
        trivia: {
          question: {
            zh: "海法著名的階梯式空中花園屬於哪個宗教的聖地?",
            en: "Haifa's famous terraced gardens are the holy site of which religion?",
          },
          options: [
            { zh: "巴哈伊信仰", en: "The Baha'i Faith" },
            { zh: "德魯茲教", en: "The Druze faith" },
            { zh: "猶太教", en: "Judaism" },
            { zh: "東正教", en: "Orthodox Christianity" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴哈伊信仰的世界中心設於海法,19 層階梯花園環繞巴孛陵寢,列入世界遺產。",
            en: "The Baha'i World Centre sits in Haifa; 19 garden terraces surround the Shrine of the Báb — a World Heritage site.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "以色列過半飲用水來自海水淡化,滴灌技術也發明於此。",
        en: "Over half of Israel's drinking water is desalinated, and drip irrigation was invented here.",
      },
    ],
  },
  {
    id: "IRN",
    name: { zh: "伊朗", en: "Iran" },
    capital: { zh: "德黑蘭", en: "Tehran" },
    flag: "🇮🇷",
    region: "asia",
    center: { lat: 32.4, lng: 53.7 },
    intro: {
      zh: "古波斯文明的繼承者,擁有兩千五百年的帝國史與詩歌傳統。伊斯法罕的清真寺磚藝、波斯地毯與波斯花園,展現獨樹一格的美學。",
      en: "Heir to ancient Persia, with 2,500 years of imperial history and poetry. Isfahan's tiled mosques, Persian carpets, and paradise gardens embody an aesthetic all its own.",
    },
    history: {
      zh: "居魯士大帝於西元前六世紀建立阿契美尼德帝國,是當時世上最大帝國。歷經亞歷山大征服、薩珊王朝與七世紀伊斯蘭化,波斯文化持續影響整個地區。二十世紀巴勒維王朝推動西化,1979 年伊斯蘭革命後建立政教合一體制,與西方關係緊張並受多年制裁,但豐富的文明遺產與年輕人口仍是重要底蘊。",
      en: "Cyrus the Great founded the Achaemenid Empire in the 6th century BC — the largest the world had seen. Through Alexander's conquest, the Sasanians, and 7th-century Islamization, Persian culture shaped the region. The Pahlavi shahs westernized in the 20th century until the 1979 Islamic Revolution created a theocracy; despite sanctions and tension with the West, its civilizational depth and young population endure.",
    },
    cities: [
      {
        name: { zh: "德黑蘭", en: "Tehran" },
        blurb: {
          zh: "厄爾布爾士山腳下的首都,博物館與地毯巴札之城。",
          en: "The capital beneath the Alborz mountains — museums and carpet bazaars.",
        },
        trivia: {
          question: {
            zh: "德黑蘭北方緊鄰的高山是哪座山脈,冬天可滑雪?",
            en: "Which mountain range looms directly north of Tehran, complete with ski resorts?",
          },
          options: [
            { zh: "厄爾布爾士山脈", en: "The Alborz range" },
            { zh: "札格羅斯山脈", en: "The Zagros range" },
            { zh: "高加索山脈", en: "The Caucasus" },
            { zh: "興都庫什山脈", en: "The Hindu Kush" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "厄爾布爾士山脈最高峰達馬萬德山 5,610 公尺,是中東最高峰,離市區僅一小時。",
            en: "The Alborz include 5,610 m Mt. Damavand — the Middle East's highest peak — an hour from downtown.",
          },
        },
      },
      {
        name: { zh: "伊斯法罕", en: "Isfahan" },
        blurb: {
          zh: "薩法維王朝故都,「伊斯法罕半天下」的清真寺與廣場。",
          en: "The Safavid capital — 'Isfahan is half the world', they said of its square and mosques.",
        },
        trivia: {
          question: {
            zh: "伊斯法罕的納克什-賈汗廣場曾是世界第二大廣場,建於哪個王朝?",
            en: "Isfahan's vast Naqsh-e Jahan Square was built under which dynasty?",
          },
          options: [
            { zh: "薩法維王朝", en: "The Safavid dynasty" },
            { zh: "阿契美尼德王朝", en: "The Achaemenids" },
            { zh: "卡札爾王朝", en: "The Qajars" },
            { zh: "塞爾柱王朝", en: "The Seljuks" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "阿拔斯大帝 1598 年遷都伊斯法罕後興建,廣場四周環繞皇家清真寺與大巴札。",
            en: "Shah Abbas I built it after moving his capital here in 1598, ringed by the royal mosque and grand bazaar.",
          },
        },
      },
      {
        name: { zh: "設拉子", en: "Shiraz" },
        blurb: {
          zh: "詩人之城,粉紅清真寺與波斯波利斯遺址的門戶。",
          en: "The city of poets, the Pink Mosque, and the gateway to Persepolis.",
        },
        trivia: {
          question: {
            zh: "設拉子近郊的波斯波利斯是哪個帝國的儀式首都?",
            en: "Persepolis near Shiraz was the ceremonial capital of which empire?",
          },
          options: [
            { zh: "阿契美尼德波斯帝國", en: "The Achaemenid Persian Empire" },
            { zh: "鄂圖曼帝國", en: "The Ottoman Empire" },
            { zh: "蒙兀兒帝國", en: "The Mughal Empire" },
            { zh: "巴比倫帝國", en: "The Babylonian Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "大流士一世約前 518 年始建,亞歷山大於前 330 年焚毀,石刻浮雕保存至今。",
            en: "Begun by Darius I around 518 BC and burned by Alexander in 330 BC; its stone reliefs still stand.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "波斯地毯編織技藝已傳承兩千五百年以上。",
        en: "Persian carpet weaving traditions stretch back more than 2,500 years.",
      },
    ],
  },
  {
    id: "ARE",
    name: { zh: "阿拉伯聯合大公國", en: "United Arab Emirates" },
    capital: { zh: "阿布達比", en: "Abu Dhabi" },
    flag: "🇦🇪",
    region: "asia",
    center: { lat: 23.9, lng: 54.3 },
    intro: {
      zh: "由七個酋長國組成的聯邦,半世紀內從採珠漁村變成全球金融與航空樞紐。杜拜擁有世界第一高樓哈里發塔,阿布達比則掌握石油財富。",
      en: "A federation of seven emirates that leapt from pearl-diving villages to a global finance and aviation hub in half a century. Dubai boasts the world's tallest tower; Abu Dhabi holds the oil wealth.",
    },
    history: {
      zh: "波斯灣沿岸的部落長期以採珠與貿易維生,19 世紀與英國簽訂停戰協定成為「特魯西爾諸國」。1958 年發現石油徹底改變命運,1971 年英軍撤離後七酋長國聯合建國。此後以石油財富投資基礎建設與主權基金,杜拜更以觀光、航空與金融實現非石油轉型。",
      en: "Gulf-coast tribes long lived on pearling and trade, becoming the British-protected 'Trucial States' in the 1800s. Oil, discovered in 1958, changed everything; when Britain withdrew in 1971, seven emirates federated. Oil wealth funded infrastructure and sovereign funds, while Dubai reinvented itself around tourism, aviation, and finance.",
    },
    cities: [
      {
        name: { zh: "杜拜", en: "Dubai" },
        blurb: {
          zh: "沙漠中的未來都市,哈里發塔、棕櫚島與全球轉機樞紐。",
          en: "A future-city in the desert — Burj Khalifa, the Palm, and a global transit hub.",
        },
        trivia: {
          question: {
            zh: "杜拜的哈里發塔高度約為多少,穩居世界第一高樓?",
            en: "Roughly how tall is the Burj Khalifa, the world's tallest building?",
          },
          options: [
            { zh: "約 828 公尺", en: "About 828 m" },
            { zh: "約 634 公尺", en: "About 634 m" },
            { zh: "約 1,000 公尺", en: "About 1,000 m" },
            { zh: "約 550 公尺", en: "About 550 m" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "2010 年落成的哈里發塔高 828 公尺、163 層,至今仍是世界最高建築。",
            en: "Completed in 2010 at 828 m and 163 floors — still unmatched worldwide.",
          },
        },
      },
      {
        name: { zh: "阿布達比", en: "Abu Dhabi" },
        blurb: {
          zh: "聯邦首都與石油重鎮,大清真寺與羅浮宮分館的所在。",
          en: "The federal capital and oil powerhouse, home to the Grand Mosque and the Louvre's outpost.",
        },
        trivia: {
          question: {
            zh: "阿布達比的謝赫扎耶德大清真寺以什麼聞名?",
            en: "What is Abu Dhabi's Sheikh Zayed Grand Mosque famous for?",
          },
          options: [
            {
              zh: "世界最大的手工地毯與白色大理石建築",
              en: "The world's largest hand-knotted carpet and white marble halls",
            },
            { zh: "世界最高的喚拜塔", en: "The world's tallest minaret" },
            { zh: "全金箔的圓頂", en: "A dome of solid gold leaf" },
            { zh: "建在人工島上", en: "Being built on an artificial island" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "主殿的手工波斯地毯達 5,700 平方公尺,由約 1,200 名織工耗時兩年完成。",
            en: "Its 5,700 m² hand-knotted carpet took some 1,200 weavers two years to complete.",
          },
        },
      },
      {
        name: { zh: "沙迦", en: "Sharjah" },
        blurb: {
          zh: "文化之都,博物館與書展重鎮,曾獲 UNESCO 阿拉伯文化之都。",
          en: "The culture capital — museums and book fairs, once UNESCO's Cultural Capital of the Arab World.",
        },
        trivia: {
          question: {
            zh: "沙迦與杜拜最大的生活差異之一是什麼?",
            en: "What notably distinguishes daily life in Sharjah from Dubai?",
          },
          options: [
            { zh: "全酋長國禁止酒精", en: "Alcohol is banned emirate-wide" },
            { zh: "不使用迪拉姆貨幣", en: "It uses a different currency" },
            { zh: "官方語言是英語", en: "English is the official language" },
            { zh: "汽車靠左行駛", en: "Cars drive on the left" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "沙迦是 UAE 中管制最嚴格的酋長國,全面禁酒,並以文化建設著稱。",
            en: "Sharjah is the UAE's most conservative emirate — fully dry, and proud of its cultural institutions.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "杜拜警方的超跑車隊包含藍寶堅尼與布加迪。",
        en: "Dubai police patrol in supercars, including Lamborghinis and Bugattis.",
      },
    ],
  },
];
