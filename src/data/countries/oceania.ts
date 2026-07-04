import type { Country } from "../types";

// Oceania: 4 countries. Content shape is LLM-generatable — see types.ts.

export const OCEANIA: Country[] = [
  {
    id: "AUS",
    name: { zh: "澳洲", en: "Australia" },
    capital: { zh: "坎培拉", en: "Canberra" },
    flag: "🇦🇺",
    region: "oceania",
    center: { lat: -25.3, lng: 133.8 },
    intro: {
      zh: "世界面積第六大的國家,也是唯一獨占一整塊大陸的國家。內陸是廣袤的紅色荒漠,東北岸外海有世界最大的珊瑚礁群大堡礁,袋鼠、無尾熊等特有動物舉世聞名。人口高度集中於沿海大城,礦產與農產出口撐起經濟,是南半球最發達的經濟體之一。",
      en: "The world's sixth-largest country and the only one to span an entire continent. Vast red deserts fill the interior, the Great Barrier Reef — the largest coral reef system on Earth — lies off the northeast coast, and kangaroos and koalas are found nowhere else. Most people live in coastal cities, and mining and farm exports power one of the Southern Hemisphere's most advanced economies.",
    },
    history: {
      zh: "澳洲原住民在這片大陸生活超過六萬年,是世界上最古老的連續文化之一。1770 年庫克船長宣布東岸為英國領土,1788 年首批流放船隊抵達雪梨灣建立殖民地。19 世紀中葉淘金熱吸引大批移民,1901 年六個殖民地合組澳大利亞聯邦。二戰後逐步將重心從英國轉向亞太,1970 年代廢除「白澳政策」改行多元文化移民,如今是全球重要的資源出口國與移民社會。",
      en: "Aboriginal Australians have lived on the continent for over 60,000 years — among the oldest continuous cultures on Earth. Captain Cook claimed the east coast for Britain in 1770, and the First Fleet of convicts landed at Sydney Cove in 1788. Gold rushes drew mass migration in the mid-1800s, and six colonies federated into the Commonwealth of Australia in 1901. After WWII the country pivoted from Britain toward the Asia-Pacific, scrapping the White Australia policy in the 1970s for multicultural immigration; today it is a major resource exporter and migrant society.",
    },
    cities: [
      {
        name: { zh: "坎培拉", en: "Canberra" },
        blurb: {
          zh: "為了當首都而規劃興建的城市,國會大廈與格里芬湖構成城市軸線。",
          en: "A city planned from scratch to be the capital — Parliament House and Lake Burley Griffin form its central axis.",
        },
        trivia: {
          question: {
            zh: "澳洲的首都為什麼是坎培拉,而不是雪梨或墨爾本?",
            en: "Why is Canberra Australia's capital, rather than Sydney or Melbourne?",
          },
          options: [
            {
              zh: "雪梨與墨爾本相持不下,折衷新建一座首都",
              en: "Sydney and Melbourne both wanted the title, so a new capital was built as a compromise",
            },
            { zh: "坎培拉是全國最古老的城市", en: "Canberra is the country's oldest city" },
            { zh: "坎培拉擁有全國最大的港口", en: "Canberra has the country's largest harbor" },
            { zh: "原首都毀於大火後被迫遷都", en: "The old capital burned down, forcing a move" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1901 年聯邦成立後兩大城爭當首都,最後在兩城之間的內陸新建坎培拉,由美國建築師格里芬規劃,國會 1927 年遷入。",
            en: "After federation in 1901 the rival cities deadlocked, so a new capital was built between them, designed by American architect Walter Burley Griffin; parliament moved in by 1927.",
          },
        },
      },
      {
        name: { zh: "雪梨", en: "Sydney" },
        blurb: {
          zh: "澳洲最大城,歌劇院與港灣大橋構成世界知名的海港天際線。",
          en: "Australia's largest city — the Opera House and Harbour Bridge frame one of the world's most recognizable waterfronts.",
        },
        trivia: {
          question: {
            zh: "雪梨歌劇院的建築師約恩·烏松(Jørn Utzon)來自哪個國家?",
            en: "Jørn Utzon, the architect of the Sydney Opera House, came from which country?",
          },
          options: [
            { zh: "丹麥", en: "Denmark" },
            { zh: "澳洲", en: "Australia" },
            { zh: "英國", en: "The United Kingdom" },
            { zh: "美國", en: "The United States" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "丹麥建築師烏松的帆形設計在 1957 年國際競圖中勝出,歌劇院 1973 年落成,2007 年列入世界遺產。",
            en: "The Danish architect's sail-like design won a 1957 international competition; the Opera House opened in 1973 and became a World Heritage site in 2007.",
          },
        },
      },
      {
        name: { zh: "墨爾本", en: "Melbourne" },
        blurb: {
          zh: "澳洲的文化與咖啡之都,巷弄藝術與大型運動賽事之城,多次獲評全球最宜居城市。",
          en: "Australia's culture and coffee capital, famed for laneway art and big sporting events — repeatedly ranked among the world's most livable cities.",
        },
        trivia: {
          question: {
            zh: "1956 年墨爾本成為南半球第一座舉辦哪項國際賽事的城市?",
            en: "In 1956, Melbourne became the first Southern Hemisphere city to host which international event?",
          },
          options: [
            { zh: "夏季奧運", en: "The Summer Olympics" },
            { zh: "世界盃足球賽", en: "The FIFA World Cup" },
            { zh: "世界博覽會", en: "The World Expo" },
            { zh: "網球四大滿貫賽", en: "A tennis Grand Slam tournament" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1956 年墨爾本奧運是奧運首次移師南半球;因澳洲嚴格的動物檢疫規定,馬術項目還特別移到瑞典斯德哥爾摩舉行。",
            en: "The 1956 Games were the first Olympics held in the Southern Hemisphere — though strict quarantine rules pushed the equestrian events all the way to Stockholm.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "大堡礁綿延約 2,300 公里,是地球上最大的活體生物構造。",
        en: "The Great Barrier Reef stretches about 2,300 km — the largest structure on Earth built by living organisms.",
      },
      {
        zh: "澳洲的袋鼠數量比人口還多,估計有數千萬隻。",
        en: "Australia has more kangaroos than people — tens of millions of them.",
      },
    ],
  },
  {
    id: "NZL",
    name: { zh: "紐西蘭", en: "New Zealand" },
    capital: { zh: "威靈頓", en: "Wellington" },
    flag: "🇳🇿",
    region: "oceania",
    center: { lat: -41.5, lng: 172.8 },
    intro: {
      zh: "南太平洋的島國,由北島與南島兩大島及眾多小島組成。冰河峽灣、火山溫泉與綿延牧場構成電影般的地景,《魔戒》系列即在此取景。毛利文化與英式傳統交織,人口僅五百多萬,羊的數量卻遠多於人,以農產出口與戶外探險觀光聞名於世。",
      en: "An island nation in the South Pacific made up of the North and South Islands plus many smaller ones. Glacial fjords, volcanic hot springs, and rolling pastures form a cinematic landscape — 'The Lord of the Rings' was filmed here. Maori culture interweaves with British heritage; sheep far outnumber the five-million-plus population, and farm exports and adventure tourism define the country abroad.",
    },
    history: {
      zh: "毛利人約於 13 世紀自玻里尼西亞乘遠洋獨木舟抵達,發展出獨特的部落社會。1642 年荷蘭人塔斯曼是首位抵達的歐洲人,1769 年庫克船長詳細測繪海岸線。1840 年英國王室與毛利各部落簽訂《懷唐伊條約》,紐西蘭成為英國殖民地。1893 年成為全球第一個賦予女性投票權的國家,1907 年升格為自治領,如今以農業出口、電影產業與毛利、歐裔雙元文化立足世界。",
      en: "Maori voyagers arrived from Polynesia around the 13th century in ocean-going canoes and built a distinctive tribal society. The Dutchman Abel Tasman was the first European to sight the islands in 1642, and Captain Cook charted the coasts in 1769. In 1840 the British Crown and Maori chiefs signed the Treaty of Waitangi, making New Zealand a British colony. In 1893 it became the first country to grant women the vote, gained dominion status in 1907, and today stands on farm exports, filmmaking, and a bicultural Maori-European identity.",
    },
    cities: [
      {
        name: { zh: "威靈頓", en: "Wellington" },
        blurb: {
          zh: "依山面海的緊湊首都,以強勁海風、咖啡文化與電影特效產業聞名。",
          en: "A compact harbor capital wedged between hills and sea, known for fierce winds, coffee culture, and its film-effects industry.",
        },
        trivia: {
          question: {
            zh: "紐西蘭首都威靈頓保有什麼「世界之最」?",
            en: "Wellington, New Zealand's capital, holds which world record?",
          },
          options: [
            {
              zh: "全球最南端的主權國家首都",
              en: "The world's southernmost capital of a sovereign country",
            },
            { zh: "全球降雨量最多的首都", en: "The world's rainiest capital" },
            { zh: "全球海拔最高的首都", en: "The world's highest-altitude capital" },
            { zh: "全球面積最小的首都", en: "The world's smallest capital by area" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "威靈頓位於約南緯 41 度,是全球最南端的主權國家首都,也因庫克海峽的強風被暱稱「風城」。",
            en: "At about 41 degrees south, Wellington is the southernmost national capital on Earth — and the gales off Cook Strait earn it the nickname 'Windy Wellington'.",
          },
        },
      },
      {
        name: { zh: "奧克蘭", en: "Auckland" },
        blurb: {
          zh: "紐西蘭最大城,「帆船之都」,全國約三分之一人口居住於此。",
          en: "New Zealand's largest city, the 'City of Sails' — home to roughly a third of the national population.",
        },
        trivia: {
          question: {
            zh: "紐西蘭最大城奧克蘭建立在什麼特殊的地質環境上?",
            en: "Auckland, New Zealand's largest city, is built on what unusual geological setting?",
          },
          options: [
            { zh: "約 50 座火山組成的火山區", en: "A volcanic field of about 50 volcanoes" },
            { zh: "巨大的珊瑚環礁", en: "A giant coral atoll" },
            { zh: "冰河切割出的峽灣", en: "A glacier-carved fjord" },
            { zh: "大河沖積的三角洲", en: "A river delta" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "奧克蘭火山區有約 50 座火山錐,伊甸山等錐丘如今是市區的制高點與公園。",
            en: "The Auckland volcanic field contains around 50 cones; peaks like Mt Eden now serve as lookouts and parks within the city.",
          },
        },
      },
      {
        name: { zh: "皇后鎮", en: "Queenstown" },
        blurb: {
          zh: "南島湖畔的「冒險之都」,高空彈跳、滑雪與噴射快艇的聖地。",
          en: "The lakeside 'adventure capital' of the South Island — a mecca for bungy jumping, skiing, and jet boating.",
        },
        trivia: {
          question: {
            zh: "1988 年皇后鎮附近的卡瓦勞橋(Kawarau Bridge)誕生了世界第一個什麼商業設施?",
            en: "In 1988, the Kawarau Bridge near Queenstown became the world's first commercial site for what activity?",
          },
          options: [
            { zh: "商業高空彈跳", en: "Bungy jumping" },
            { zh: "商業高空滑索", en: "Ziplining" },
            { zh: "商業跳傘", en: "Skydiving" },
            { zh: "商業飛行傘", en: "Paragliding" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "紐西蘭人 AJ·哈克特在此開設全球第一個商業高空彈跳據點,靈感來自萬那杜的陸地跳躍成年儀式。",
            en: "New Zealander AJ Hackett opened the world's first commercial bungy operation here, inspired by the land-diving ritual of Vanuatu.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1893 年紐西蘭成為全球第一個讓女性擁有投票權的國家。",
        en: "In 1893, New Zealand became the first country in the world to give women the vote.",
      },
      {
        zh: "紐西蘭人自稱「Kiwi」,名字來自本土不會飛的奇異鳥。",
        en: "New Zealanders call themselves 'Kiwis', after the flightless bird found only there.",
      },
    ],
  },
  {
    id: "FJI",
    name: { zh: "斐濟", en: "Fiji" },
    capital: { zh: "蘇瓦", en: "Suva" },
    flag: "🇫🇯",
    region: "oceania",
    center: { lat: -17.7, lng: 178.0 },
    intro: {
      zh: "南太平洋的群島國家,由三百多座島嶼組成,僅約三分之一有人居住。碧綠潟湖、珊瑚礁與白沙灘使它成為度假天堂,原住民斐濟文化與印度裔社群並存。觀光與蔗糖是經濟支柱,七人制橄欖球是舉國瘋狂的國民運動,首都蘇瓦則是南太平洋的區域中樞之一。",
      en: "A South Pacific archipelago of more than 300 islands, only about a third of them inhabited. Turquoise lagoons, coral reefs, and white-sand beaches make it a holiday paradise, where indigenous Fijian culture lives alongside a large Indo-Fijian community. Tourism and sugar anchor the economy, rugby sevens is a national obsession, and the capital Suva is a regional hub for the South Pacific.",
    },
    history: {
      zh: "南島語族先民約三千年前帶著拉皮塔文化抵達斐濟群島,發展出酋邦社會。1874 年酋長們將斐濟割讓給英國,殖民政府自 1879 年起引進大批印度契約勞工種植甘蔗,形塑了今日的印裔斐濟社群。1970 年獨立,其後歷經 1987、2000 與 2006 年多次政變,族群關係長期是政治主軸。如今觀光業是最大產業,斐濟也是太平洋島國外交的重要舞台。",
      en: "Austronesian settlers bearing the Lapita culture reached Fiji some 3,000 years ago and developed chiefly societies. In 1874 the chiefs ceded Fiji to Britain, and from 1879 the colonial government brought in Indian indentured laborers for the sugar plantations, shaping today's Indo-Fijian community. Independence came in 1970, followed by coups in 1987, 2000, and 2006, with ethnic politics a recurring theme. Tourism is now the biggest industry, and Fiji is a key stage for Pacific island diplomacy.",
    },
    cities: [
      {
        name: { zh: "蘇瓦", en: "Suva" },
        blurb: {
          zh: "南太平洋最大的都會之一,大學與區域組織雲集的政經中心。",
          en: "One of the South Pacific's largest urban centers — a political and economic hub packed with universities and regional organizations.",
        },
        trivia: {
          question: {
            zh: "在蘇瓦之前,斐濟的首都是哪一座城市?",
            en: "Before Suva, which town served as Fiji's capital?",
          },
          options: [
            { zh: "雷武卡(Levuka)", en: "Levuka" },
            { zh: "南迪(Nadi)", en: "Nadi" },
            { zh: "勞托卡(Lautoka)", en: "Lautoka" },
            { zh: "薩武薩武(Savusavu)", en: "Savusavu" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "位於歐瓦勞島的雷武卡是斐濟第一個殖民首都,因腹地狹小於 1882 年遷都蘇瓦;雷武卡老城現為世界遺產。",
            en: "Levuka on Ovalau Island was Fiji's first colonial capital; hemmed in by cliffs, it lost the role to Suva in 1882 and is now a World Heritage town.",
          },
        },
      },
      {
        name: { zh: "南迪", en: "Nadi" },
        blurb: {
          zh: "國際機場所在的觀光門戶,前往瑪瑪努卡與亞薩瓦離島群的跳板。",
          en: "The tourism gateway with Fiji's main international airport — the springboard to the Mamanuca and Yasawa islands.",
        },
        trivia: {
          question: {
            zh: "斐濟南迪著名的斯里西瓦蘇布拉馬尼亞廟(Sri Siva Subramaniya)是哪種宗教的寺廟?",
            en: "The famous Sri Siva Subramaniya temple in Nadi, Fiji, belongs to which religion?",
          },
          options: [
            { zh: "印度教", en: "Hinduism" },
            { zh: "佛教", en: "Buddhism" },
            { zh: "錫克教", en: "Sikhism" },
            { zh: "伊斯蘭教", en: "Islam" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英國殖民時期引進的印度契約勞工後裔約占斐濟人口三分之一,色彩繽紛的印度教寺廟因此成為南迪的地標。",
            en: "Descendants of Indian indentured laborers make up roughly a third of Fiji's population, so this colorful Hindu temple became a Nadi landmark.",
          },
        },
      },
      {
        name: { zh: "勞托卡", en: "Lautoka" },
        blurb: {
          zh: "斐濟第二大城,甘蔗產業的集散港口。",
          en: "Fiji's second city and the shipping port of the sugar-cane belt.",
        },
        trivia: {
          question: {
            zh: "斐濟第二大城勞托卡的別稱是什麼?",
            en: "Lautoka, Fiji's second city, goes by what nickname?",
          },
          options: [
            { zh: "糖城", en: "Sugar City" },
            { zh: "珍珠城", en: "Pearl City" },
            { zh: "香料城", en: "Spice City" },
            { zh: "椰子城", en: "Coconut City" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "勞托卡周邊是斐濟最大的甘蔗產區,城裡的糖廠自 1903 年運轉至今,因而得名「糖城」。",
            en: "Lautoka sits at the heart of Fiji's biggest cane-growing region, with a sugar mill running since 1903 — hence 'Sugar City'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "180 度經線穿過斐濟的塔妙尼島,島上立有「跨越換日線」的標誌,不過實際的國際換日線繞道而行,讓全國同屬一個日期。",
        en: "The 180th meridian crosses Fiji's Taveuni Island, where a sign marks the spot — though the actual date line detours so the whole country shares one date.",
      },
      {
        zh: "2016 年里約奧運,斐濟靠七人制橄欖球奪下建國以來第一面奧運獎牌——而且直接是金牌。",
        en: "At the 2016 Rio Olympics, Fiji won its first Olympic medal ever — a gold, in rugby sevens.",
      },
    ],
  },
  {
    id: "PNG",
    name: { zh: "巴布亞紐幾內亞", en: "Papua New Guinea" },
    capital: { zh: "莫爾斯比港", en: "Port Moresby" },
    flag: "🇵🇬",
    region: "oceania",
    center: { lat: -6.5, lng: 145.0 },
    intro: {
      zh: "占據新幾內亞島東半部及周邊六百多座島嶼,是太平洋島國中面積與人口最大者。高山與雨林覆蓋大部分國土,部落文化極其多元,現存語言超過八百種,居世界之冠。礦產、天然氣與咖啡是主要出口,許多內陸社區至今只能靠小飛機聯外。",
      en: "Covering the eastern half of New Guinea and more than 600 surrounding islands, it is the largest Pacific island nation by both area and population. Mountains and rainforest blanket most of the country, tribal cultures are extraordinarily diverse, and its 800-plus living languages are the most of any country. Minerals, natural gas, and coffee lead exports, while many inland communities are still reachable only by small plane.",
    },
    history: {
      zh: "人類約五萬年前就抵達新幾內亞,高地居民更是世界上最早獨立發展農業的族群之一。16 世紀歐洲航海家將此地命名為「新幾內亞」,19 世紀末東半部被德國與英國瓜分為南北兩塊,一戰後交由澳洲統一管理。二戰期間科科達小徑是太平洋戰場的慘烈戰線,1975 年和平脫離澳洲獨立。今日部落傳統與現代國家體制並存,資源開發是經濟的最大變數。",
      en: "Humans reached New Guinea about 50,000 years ago, and its highlanders were among the first peoples anywhere to invent agriculture independently. European navigators named the island 'New Guinea' in the 16th century; in the late 1800s the eastern half was split between Germany and Britain, then placed under Australian administration after WWI. The Kokoda Track saw brutal fighting in WWII, and in 1975 the country gained independence from Australia peacefully. Tribal traditions coexist with the modern state, and resource projects remain the economy's biggest wildcard.",
    },
    cities: [
      {
        name: { zh: "莫爾斯比港", en: "Port Moresby" },
        blurb: {
          zh: "座落於巴布亞灣畔的首都與最大城,全國的政治與航空樞紐。",
          en: "The capital and largest city on the Gulf of Papua — the nation's political center and aviation hub.",
        },
        trivia: {
          question: {
            zh: "巴布亞紐幾內亞首都莫爾斯比港與國內其他主要城市之間的交通,有什麼罕見的特點?",
            en: "What is unusual about travel between Port Moresby, Papua New Guinea's capital, and the country's other major cities?",
          },
          options: [
            {
              zh: "沒有公路相連,主要得靠飛機往來",
              en: "No roads connect them — you mostly have to fly",
            },
            { zh: "只能靠一條窄軌鐵路聯絡", en: "They are linked only by a narrow-gauge railway" },
            { zh: "全靠跨海大橋相連", en: "They are all linked by sea bridges" },
            { zh: "有全國高速公路網貫通", en: "A national expressway network connects them" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "全境山高林密,首都與萊城、高地各大城之間沒有公路相連,國內航空因此格外發達。",
            en: "Rugged mountains and jungle mean no highway links the capital to Lae or the highlands, making domestic aviation essential.",
          },
        },
      },
      {
        name: { zh: "萊城", en: "Lae" },
        blurb: {
          zh: "第二大城與最大貨運港,通往高地的公路起點。",
          en: "The second city and busiest cargo port, where the Highlands Highway begins.",
        },
        trivia: {
          question: {
            zh: "1937 年,哪位著名飛行員從巴布亞紐幾內亞的萊城起飛後失蹤,下落至今成謎?",
            en: "In 1937, which famous aviator vanished after taking off from Lae, Papua New Guinea?",
          },
          options: [
            { zh: "愛蜜莉亞·艾爾哈特", en: "Amelia Earhart" },
            { zh: "查爾斯·林白", en: "Charles Lindbergh" },
            { zh: "霍華·休斯", en: "Howard Hughes" },
            { zh: "聖修伯里", en: "Antoine de Saint-Exupery" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "艾爾哈特在環球飛行途中自萊城起飛,前往豪蘭島時失去聯繫,成為航空史上最著名的失蹤懸案。",
            en: "On her round-the-world attempt, Earhart left Lae for Howland Island and was never heard from again — aviation's most famous disappearance.",
          },
        },
      },
      {
        name: { zh: "戈羅卡", en: "Goroka" },
        blurb: {
          zh: "東高地省首府,咖啡產區的中心,以年度部落文化盛會聞名。",
          en: "Capital of Eastern Highlands Province and heart of the coffee country, famed for its annual tribal festival.",
        },
        trivia: {
          question: {
            zh: "巴布亞紐幾內亞一年一度的「戈羅卡秀」(Goroka Show)以什麼聞名?",
            en: "The annual Goroka Show in Papua New Guinea is famous for what?",
          },
          options: [
            {
              zh: "上百個部落齊聚的傳統歌舞盛會",
              en: "A gathering of over a hundred tribes for traditional song and dance",
            },
            { zh: "國際咖啡博覽會", en: "An international coffee expo" },
            { zh: "熱氣球嘉年華", en: "A hot-air balloon carnival" },
            { zh: "獨木舟越洋競賽", en: "An ocean canoe race" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "自 1957 年起舉辦的「sing-sing」盛會上,各部落以羽飾、彩繪與歌舞展現傳統,是太平洋地區最大型的文化聚會之一。",
            en: "Held since 1957, this 'sing-sing' brings tribes together in feathers, paint, and dance — one of the Pacific's largest cultural gatherings.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "巴布亞紐幾內亞約有 840 種現存語言,超過全球語言總數的十分之一,是世界上語言最多的國家。",
        en: "Papua New Guinea has about 840 living languages — over a tenth of the world's total, more than any other country.",
      },
      {
        zh: "高地的庫克早期農業遺址證明,新幾內亞是世界上少數獨立發明農業的地方之一,歷史可追溯近萬年。",
        en: "The Kuk Early Agricultural Site in the highlands shows New Guinea was one of the few places on Earth where farming was invented independently, nearly 10,000 years ago.",
      },
    ],
  },
];
