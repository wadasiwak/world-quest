import type { CountryExtras } from "../types";

// Advanced question banks for Central America and the Greater Antilles.
// Climate/travelTips live inline in the base country files, so these
// entries are quiz-only.

export const AMERICAS_MORE1_EXTRAS: Record<string, CountryExtras> = {
  GTM: {
    extraQuiz: [
      {
        question: {
          zh: "中美洲第一高峰位於瓜地馬拉,是哪一座火山?",
          en: "Central America's highest peak stands in Guatemala. Which volcano is it?",
        },
        options: [
          { zh: "塔胡穆爾科火山", en: "Tajumulco" },
          { zh: "阿卡特南戈火山", en: "Acatenango" },
          { zh: "富埃戈火山", en: "Fuego" },
          { zh: "阿瓜火山", en: "Agua" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "塔胡穆爾科火山海拔 4,220 公尺,是墨西哥以南整個中美洲的最高點,登頂健行通常從高原城市克薩爾特南戈出發。",
          en: "Tajumulco rises 4,220 meters — the highest point anywhere in Central America south of Mexico. Summit hikes usually start from the highland city of Quetzaltenango.",
        },
      },
      {
        question: {
          zh: "記載基切馬雅人創世神話與雙胞胎英雄傳說的聖書叫什麼名字?",
          en: "What is the name of the sacred book recording the K'iche' Maya creation myth and the Hero Twins legend?",
        },
        options: [
          { zh: "《波波爾·烏》", en: "The Popol Vuh" },
          { zh: "《契蘭·巴蘭》", en: "The Chilam Balam" },
          { zh: "《德勒斯登抄本》", en: "The Dresden Codex" },
          { zh: "《吉爾伽美什史詩》", en: "The Epic of Gilgamesh" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "《波波爾·烏》被譽為馬雅文學最重要的作品,現存最早的版本是 18 世紀初西班牙神父希門尼斯在奇奇卡斯特南戈抄錄的手稿。",
          en: "Hailed as the greatest work of Maya literature, the Popol Vuh survives through an early 18th-century manuscript copied by the Spanish friar Francisco Ximénez in Chichicastenango.",
        },
      },
      {
        question: {
          zh: "哪位瓜地馬拉的基切馬雅裔女性因推動原住民權益,獲得 1992 年諾貝爾和平獎?",
          en: "Which K'iche' Maya woman from Guatemala won the 1992 Nobel Peace Prize for her work on indigenous rights?",
        },
        options: [
          { zh: "里戈韋塔·門楚", en: "Rigoberta Menchú" },
          { zh: "加布列拉·米斯特拉爾", en: "Gabriela Mistral" },
          { zh: "旺加里·馬塔伊", en: "Wangari Maathai" },
          { zh: "翁山蘇姬", en: "Aung San Suu Kyi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "門楚在內戰期間為原住民與農民發聲,1992 年適逢哥倫布抵達美洲五百週年獲獎;瓜地馬拉另一位諾貝爾獎得主是 1967 年文學獎的阿斯圖里亞斯。",
          en: "Menchú spoke out for indigenous and peasant communities during the civil war, receiving the prize in 1992 — 500 years after Columbus reached the Americas. Guatemala's other laureate is Miguel Ángel Asturias, who won the 1967 Literature prize.",
        },
      },
    ],
  },
  BLZ: {
    extraQuiz: [
      {
        question: {
          zh: "馬雅遺址卡拉科爾(Caracol)至今仍保有貝里斯的什麼紀錄?",
          en: "The Maya site of Caracol still holds which record in Belize?",
        },
        options: [
          { zh: "其金字塔「卡納」仍是全國最高的人造建築", en: "Its Caana pyramid remains the tallest man-made structure in the country" },
          { zh: "它是美洲最早被發現的馬雅遺址", en: "It was the first Maya site ever discovered in the Americas" },
          { zh: "它是全世界面積最大的馬雅城市", en: "It is the largest Maya city in the world" },
          { zh: "它完全建造在天然洞穴之中", en: "It was built entirely inside a natural cave" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「卡納」(Caana)意為「天空宮殿」,高約 43 公尺,現代建築仍未超越;卡拉科爾在古典期曾擊敗強敵提卡爾,是貝里斯規模最大的馬雅遺址。",
          en: "Caana, the 'Sky Palace', stands about 43 meters tall and no modern building has topped it. Classic-era Caracol even defeated mighty Tikal in war and is Belize's largest Maya site.",
        },
      },
      {
        question: {
          zh: "貝里斯的加里富納(Garifuna)族群,源自哪兩群人的融合?",
          en: "Belize's Garifuna people descend from the blending of which two groups?",
        },
        options: [
          { zh: "西非人與加勒比原住民", en: "West Africans and indigenous Caribbean islanders" },
          { zh: "西班牙人與馬雅人", en: "Spaniards and the Maya" },
          { zh: "英國人與印度契約勞工", en: "The British and Indian indentured laborers" },
          { zh: "法國人與泰諾人", en: "The French and the Taíno" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "加里富納人的祖先在聖文森島上由西非人與島嶼加勒比人融合而成,1797 年遭英國流放後散居中美洲沿岸;其語言、舞蹈與音樂已獲聯合國教科文組織列為非物質文化遺產,貝里斯每年 11 月 19 日的「加里富納登陸日」是國定假日。",
          en: "The Garifuna arose on St. Vincent from West Africans and Island Caribs, and were exiled by the British in 1797 to the Central American coast. UNESCO recognizes their language, dance, and music as intangible heritage, and Belize marks Garifuna Settlement Day every November 19 as a public holiday.",
        },
      },
      {
        question: {
          zh: "貝里斯的國獸是哪種動物?",
          en: "What is the national animal of Belize?",
        },
        options: [
          { zh: "中美貘(貝爾德氏貘)", en: "Baird's tapir" },
          { zh: "美洲豹", en: "The jaguar" },
          { zh: "吼猴", en: "The howler monkey" },
          { zh: "白鼻浣熊", en: "The white-nosed coati" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "中美貘是中美洲體型最大的原生陸生哺乳動物,當地人暱稱牠「山牛」(mountain cow);貝里斯動物園收容的救援個體是近距離觀察牠們的好機會。",
          en: "Baird's tapir is the largest native land mammal in Central America, affectionately called the 'mountain cow'. Rescued individuals at the Belize Zoo offer a close-up look.",
        },
      },
    ],
  },
  HND: {
    extraQuiz: [
      {
        question: {
          zh: "宏都拉斯東北部莫斯基蒂亞叢林中,1982 年列入世界遺產的保護區是哪一座?",
          en: "Which reserve in the Mosquitia jungle of northeastern Honduras was listed as a World Heritage site in 1982?",
        },
        options: [
          { zh: "普拉塔諾河生物圈保留區", en: "The Río Plátano Biosphere Reserve" },
          { zh: "達連國家公園", en: "Darién National Park" },
          { zh: "蒙特維多雲霧森林保護區", en: "The Monteverde Cloud Forest Reserve" },
          { zh: "科科斯島國家公園", en: "Cocos Island National Park" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "普拉塔諾河生物圈保留區是宏都拉斯最大的保護區,保存著中美洲少數僅存的大片低地熱帶雨林,美洲豹與中美貘棲息其間,佩奇人與米斯基托人等原住民也世居於此。",
          en: "Honduras's largest protected area, the Río Plátano Biosphere Reserve shelters one of Central America's last great lowland rainforests — home to jaguars and Baird's tapirs, and to indigenous peoples like the Pech and Miskito.",
        },
      },
      {
        question: {
          zh: "1969 年宏都拉斯與哪個鄰國爆發俗稱「足球戰爭」的短暫戰爭?",
          en: "In 1969 Honduras fought a brief conflict nicknamed the 'Football War' with which neighbor?",
        },
        options: [
          { zh: "薩爾瓦多", en: "El Salvador" },
          { zh: "瓜地馬拉", en: "Guatemala" },
          { zh: "尼加拉瓜", en: "Nicaragua" },
          { zh: "貝里斯", en: "Belize" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩國因移民與土地糾紛積怨已深,1969 年 7 月適逢世界盃資格賽對戰引爆衝突;戰事僅約 100 小時就在美洲國家組織調停下停火,因此又稱「百小時戰爭」。",
          en: "Long-simmering tensions over migration and land boiled over around a July 1969 World Cup qualifier. The fighting lasted only about 100 hours before an OAS-brokered ceasefire — hence its other name, the 'Hundred Hours War'.",
        },
      },
      {
        question: {
          zh: "宏都拉斯的國鳥是哪種鳥?",
          en: "What is the national bird of Honduras?",
        },
        options: [
          { zh: "緋紅金剛鸚鵡", en: "The scarlet macaw" },
          { zh: "鳳尾綠咬鵑", en: "The resplendent quetzal" },
          { zh: "彩虹巨嘴鳥", en: "The keel-billed toucan" },
          { zh: "綠眉翠鴗", en: "The turquoise-browed motmot" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "緋紅金剛鸚鵡於 1993 年被定為國鳥,在馬雅文化中被視為神聖之鳥;科潘遺址一帶推行復育計畫,如今常能看到成群的金剛鸚鵡在古城上空飛翔。",
          en: "Declared the national bird in 1993, the scarlet macaw was sacred to the Maya. A reintroduction program around Copán means flocks once again wheel over the ancient city.",
        },
      },
    ],
  },
  SLV: {
    extraQuiz: [
      {
        question: {
          zh: "被稱為「美洲龐貝」的薩爾瓦多世界遺產霍亞德塞倫(Joya de Cerén),保存的是什麼?",
          en: "Joya de Cerén, El Salvador's World Heritage site dubbed the 'Pompeii of the Americas', preserves what?",
        },
        options: [
          { zh: "被火山灰掩埋的馬雅農村聚落", en: "A Maya farming village buried by volcanic ash" },
          { zh: "沉入湖底的西班牙殖民城市", en: "A Spanish colonial city sunk beneath a lake" },
          { zh: "海底的海盜沉船群", en: "A cluster of sunken pirate ships" },
          { zh: "巨石雕刻的地下神殿", en: "An underground temple carved from megaliths" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "約西元 600 年洛馬火山爆發,把整座村落連同田地、屋舍瞬間封存在火山灰下,罕見地保留了馬雅平民的日常生活,1993 年列入世界遺產。",
          en: "Around AD 600 the Loma Caldera eruption sealed the village — fields, homes, and all — under ash, uniquely preserving everyday Maya commoner life. It was inscribed by UNESCO in 1993.",
        },
      },
      {
        question: {
          zh: "薩爾瓦多的伊薩爾科火山曾持續噴發近兩百年,因此得到什麼綽號?",
          en: "El Salvador's Izalco volcano erupted almost continuously for nearly two centuries, earning what nickname?",
        },
        options: [
          { zh: "「太平洋的燈塔」", en: "The 'Lighthouse of the Pacific'" },
          { zh: "「中美洲的火爐」", en: "The 'Furnace of Central America'" },
          { zh: "「永恆的黑塔」", en: "The 'Eternal Black Tower'" },
          { zh: "「大地的煙囪」", en: "The 'Chimney of the Earth'" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "伊薩爾科自 1770 年左右幾乎不間斷噴發到 1958 年,夜裡的火光成為太平洋上船隻的天然航標;它也是中美洲最年輕的火山之一。",
          en: "From around 1770 until 1958 Izalco erupted almost without pause, its nighttime glow guiding ships at sea. It is also one of Central America's youngest volcanoes.",
        },
      },
      {
        question: {
          zh: "2018 年獲天主教會封聖、成為薩爾瓦多首位聖人的是誰?",
          en: "Who was canonized in 2018 as El Salvador's first saint?",
        },
        options: [
          { zh: "奧斯卡·羅梅羅總主教", en: "Archbishop Óscar Romero" },
          { zh: "德蕾莎修女", en: "Mother Teresa" },
          { zh: "胡安·迭戈", en: "Juan Diego" },
          { zh: "若望·保祿二世", en: "John Paul II" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "羅梅羅總主教因為窮人發聲,1980 年在主持彌撒時遇刺身亡,2018 年由教宗方濟各封聖;聖薩爾瓦多的國際機場如今也以他命名。",
          en: "A voice for the poor, Archbishop Romero was assassinated while saying Mass in 1980 and canonized by Pope Francis in 2018. San Salvador's international airport now bears his name.",
        },
      },
    ],
  },
  NIC: {
    extraQuiz: [
      {
        question: {
          zh: "哪座尼加拉瓜火山的火口內有翻騰的熔岩湖,西班牙殖民者稱它為「地獄之口」?",
          en: "Which Nicaraguan volcano holds a churning lava lake that Spanish colonists called the 'Mouth of Hell'?",
        },
        options: [
          { zh: "馬薩亞火山", en: "Masaya" },
          { zh: "莫莫通博火山", en: "Momotombo" },
          { zh: "康塞普西翁火山", en: "Concepción" },
          { zh: "聖克里斯托瓦爾火山", en: "San Cristóbal" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "16 世紀西班牙人在馬薩亞火口邊豎立十字架驅邪,史稱「博瓦迪利亞十字架」;1979 年馬薩亞成為尼加拉瓜第一座國家公園,夜間可在火口邊觀看熔岩湖的紅光。",
          en: "In the 16th century the Spanish planted the 'Bobadilla Cross' at the rim to exorcise the crater. Masaya became Nicaragua's first national park in 1979, and visitors can watch the lava lake glow after dark.",
        },
      },
      {
        question: {
          zh: "19 世紀中葉加州淘金熱時期,尼加拉瓜為什麼成為美國東西岸之間的熱門通道?",
          en: "During the mid-19th-century California Gold Rush, why did Nicaragua become a favorite route between the US coasts?",
        },
        options: [
          { zh: "可沿聖胡安河與尼加拉瓜湖以水路橫越地峽", en: "Travelers could cross the isthmus by water via the San Juan River and Lake Nicaragua" },
          { zh: "當時已建成跨洋鐵路", en: "A transoceanic railway had already been built there" },
          { zh: "當時已開通跨洋運河", en: "An interoceanic canal was already open" },
          { zh: "有橫越全境的驛馬車公路", en: "A stagecoach highway ran across the country" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "美國富豪范德比爾特的轉運公司經營這條河湖航線,旅客比繞行南美合恩角節省數週;「尼加拉瓜運河」的構想也因這條天然水道被討論了一百多年。",
          en: "Cornelius Vanderbilt's transit company ran the river-and-lake route, saving travelers weeks versus rounding Cape Horn. The same natural waterway kept the idea of a 'Nicaragua Canal' alive for over a century.",
        },
      },
      {
        question: {
          zh: "《古格恩塞》(El Güegüense)是尼加拉瓜列入聯合國非物質文化遺產的什麼?",
          en: "El Güegüense, inscribed by UNESCO as Nicaraguan intangible heritage, is what?",
        },
        options: [
          { zh: "諷刺殖民統治的傳統面具戲劇", en: "A traditional masked drama satirizing colonial rule" },
          { zh: "一種傳統玉米湯品", en: "A traditional corn soup" },
          { zh: "一種快節奏的舞曲", en: "An up-tempo dance rhythm" },
          { zh: "一種棕櫚葉編織工藝", en: "A palm-weaving craft" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這齣融合西班牙語與納瓦特語元素的街頭戲劇,描寫老商人古格恩塞以機智捉弄殖民官員,每年 1 月在迪里安巴的聖塞巴斯蒂安慶典演出,被視為尼加拉瓜民族認同的象徵。",
          en: "Blending Spanish and Nahuatl elements, the street play follows the wily old trader Güegüense outsmarting colonial officials. Performed each January at Diriamba's San Sebastián festival, it is an emblem of Nicaraguan identity.",
        },
      },
    ],
  },
  CRI: {
    extraQuiz: [
      {
        question: {
          zh: "哥斯大黎加的最高峰是哪一座?",
          en: "What is the highest peak in Costa Rica?",
        },
        options: [
          { zh: "奇里波山", en: "Cerro Chirripó" },
          { zh: "伊拉蘇火山", en: "Irazú Volcano" },
          { zh: "阿雷納火山", en: "Arenal Volcano" },
          { zh: "波阿斯火山", en: "Poás Volcano" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "奇里波山海拔約 3,820 公尺,並非火山,而是塔拉曼卡山脈的一部分;天氣晴朗時,山頂可同時望見太平洋與加勒比海。",
          en: "Cerro Chirripó rises about 3,820 meters and is not a volcano but part of the Talamanca range. On a clear day the summit offers views of both the Pacific and the Caribbean.",
        },
      },
      {
        question: {
          zh: "距哥斯大黎加本土約 550 公里、以鎚頭鯊群聞名的世界遺產島嶼是哪一座?",
          en: "Which World Heritage island, about 550 km off the Costa Rican mainland, is famous for its schools of hammerhead sharks?",
        },
        options: [
          { zh: "科科斯島", en: "Cocos Island" },
          { zh: "加拉巴哥群島", en: "The Galápagos Islands" },
          { zh: "馬爾佩洛島", en: "Malpelo Island" },
          { zh: "科伊巴島", en: "Coiba Island" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "科科斯島是東太平洋唯一擁有熱帶雨林的島嶼,1997 年列入世界遺產,島上無常住居民,只有國家公園管理員進駐,是進階潛水客的朝聖地。",
          en: "Cocos is the only island in the tropical eastern Pacific with a rainforest. A World Heritage site since 1997, it has no permanent residents beyond park rangers and is a pilgrimage for advanced divers.",
        },
      },
      {
        question: {
          zh: "哥斯大黎加哪項傳統工藝被聯合國教科文組織列為非物質文化遺產?",
          en: "Which Costa Rican tradition is recognized by UNESCO as intangible cultural heritage?",
        },
        options: [
          { zh: "彩繪牛車", en: "The painted oxcart" },
          { zh: "巴拿馬草帽編織", en: "Panama hat weaving" },
          { zh: "藍染布工藝", en: "Indigo dyeing" },
          { zh: "火山石雕刻", en: "Volcanic stone carving" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "牛車(carreta)曾是咖啡運銷的主力,車輪與車身繪滿繽紛圖案,不同地區花色各有特色;薩爾奇小鎮至今仍是彩繪牛車工藝的重鎮。",
          en: "Oxcarts once hauled the coffee harvest, their wheels and panels painted in vivid patterns that varied by region. The town of Sarchí remains the craft's stronghold today.",
        },
      },
    ],
  },
  DOM: {
    extraQuiz: [
      {
        question: {
          zh: "多明尼加西南部的恩里基約湖擁有什麼「地理之最」?",
          en: "What geographic extreme does Lake Enriquillo in the southwestern Dominican Republic hold?",
        },
        options: [
          { zh: "湖面低於海平面,是加勒比地區的最低點", en: "Its surface lies below sea level — the lowest point in the Caribbean" },
          { zh: "它是加勒比海拔最高的湖泊", en: "It is the highest-altitude lake in the Caribbean" },
          { zh: "它是世界最深的湖泊", en: "It is the deepest lake in the world" },
          { zh: "它是美洲最大的人工湖", en: "It is the largest artificial lake in the Americas" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "恩里基約湖是一座超鹹水湖,湖面低於海平面約 40 公尺,也是加勒比地區最大的湖泊,湖畔棲息著美洲鱷與紅鸛。",
          en: "Enriquillo is a hypersaline lake sitting roughly 40 meters below sea level, and also the largest lake in the Caribbean — home to American crocodiles and flamingos.",
        },
      },
      {
        question: {
          zh: "寶石「拉利瑪」(Larimar)有什麼特別之處?",
          en: "What makes the gemstone larimar special?",
        },
        options: [
          { zh: "全世界只在多明尼加出產的藍色寶石", en: "It is a blue gemstone found only in the Dominican Republic" },
          { zh: "世界上硬度最高的寶石", en: "It is the hardest gemstone in the world" },
          { zh: "只在隕石中發現的礦物", en: "It is a mineral found only in meteorites" },
          { zh: "只在深海熱泉形成的結晶", en: "It crystallizes only at deep-sea vents" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "拉利瑪是海藍色的針鈉鈣石,僅在西南部巴拉奧納省一帶開採;1974 年當地人梅嫩德斯以女兒的名字 Larissa 加上西班牙語的海(mar)為它命名。",
          en: "Larimar is a sea-blue variety of pectolite mined only around Barahona province. In 1974 local Miguel Méndez coined the name from his daughter Larissa plus 'mar', Spanish for sea.",
        },
      },
      {
        question: {
          zh: "為了紀念反抗獨裁者楚希佑而遇害的多明尼加米拉瓦爾三姊妹,聯合國把哪一天訂為「國際消除對婦女暴力日」?",
          en: "Honoring the Dominican Mirabal sisters, killed for opposing the dictator Trujillo, the UN designated which date as the International Day for the Elimination of Violence against Women?",
        },
        options: [
          { zh: "11 月 25 日", en: "November 25" },
          { zh: "3 月 8 日", en: "March 8" },
          { zh: "12 月 10 日", en: "December 10" },
          { zh: "6 月 1 日", en: "June 1" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "米拉瓦爾三姊妹以代號「蝴蝶」投身地下反抗運動,1960 年 11 月 25 日遇害;1999 年聯合國大會將這一天定為國際紀念日,她們的故事也被寫成小說《蝴蝶飛舞的時節》。",
          en: "Known by the code name 'Las Mariposas' (the Butterflies), the sisters were murdered on November 25, 1960; the UN General Assembly adopted the date in 1999, and their story inspired the novel 'In the Time of the Butterflies'.",
        },
      },
    ],
  },
  HTI: {
    extraQuiz: [
      {
        question: {
          zh: "「海地」(Haïti)這個國名源自泰諾語,原意是什麼?",
          en: "The name 'Haiti' comes from the Taíno language. What does it mean?",
        },
        options: [
          { zh: "高山之地", en: "Land of high mountains" },
          { zh: "陽光之島", en: "Island of sunshine" },
          { zh: "河流之母", en: "Mother of rivers" },
          { zh: "珍珠之灣", en: "Bay of pearls" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "海地全境約四分之三是山地,「Ayiti」正是原住民對這片多山土地的稱呼;1804 年獨立時,德薩林棄用殖民地名「聖多明格」,恢復了這個原住民名稱。",
          en: "About three-quarters of Haiti is mountainous, and 'Ayiti' was the indigenous name for this rugged land. At independence in 1804, Dessalines dropped the colonial name Saint-Domingue and restored it.",
        },
      },
      {
        question: {
          zh: "海地人每年 1 月 1 日獨立紀念日必喝的傳統湯品是什麼?",
          en: "Which traditional soup do Haitians drink every January 1 to mark Independence Day?",
        },
        options: [
          { zh: "南瓜湯(joumou 湯)", en: "Joumou (pumpkin) soup" },
          { zh: "海螺濃湯", en: "Conch chowder" },
          { zh: "牛尾湯", en: "Oxtail soup" },
          { zh: "花生雞湯", en: "Peanut chicken soup" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "殖民時代這道湯專屬法國主人,奴隸被禁止飲用;獨立後在新年喝 joumou 湯成為自由的象徵,2021 年列入聯合國非物質文化遺產,是海地首個入選項目。",
          en: "Under colonial rule the soup was reserved for French masters and forbidden to the enslaved; drinking it each New Year became a taste of freedom. In 2021 it became Haiti's first entry on UNESCO's intangible heritage list.",
        },
      },
      {
        question: {
          zh: "1816 年海地總統佩蒂翁提供船艦與武器,資助哪位人物的獨立事業?",
          en: "In 1816 Haitian president Alexandre Pétion supplied ships and weapons to support whose independence campaign?",
        },
        options: [
          { zh: "南美解放者西蒙·玻利瓦爾", en: "Simón Bolívar, the Liberator of South America" },
          { zh: "墨西哥神父伊達爾戈", en: "Miguel Hidalgo of Mexico" },
          { zh: "阿根廷將軍聖馬丁", en: "José de San Martín of Argentina" },
          { zh: "美國總統華盛頓", en: "George Washington of the United States" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "玻利瓦爾兵敗流亡時兩度獲海地庇護與援助,佩蒂翁唯一的條件是他必須在解放的土地上廢除奴隸制;這段歷史讓海地被稱為拉丁美洲獨立運動的推手。",
          en: "Twice a defeated exile, Bolívar found refuge and aid in Haiti — Pétion's sole condition being that he abolish slavery in the lands he freed. The episode earned Haiti a place as a patron of Latin American independence.",
        },
      },
    ],
  },
  JAM: {
    extraQuiz: [
      {
        question: {
          zh: "牙買加唯一的世界遺產「藍山與約翰克勞山脈」是自然與文化複合遺產,其文化價值與哪段歷史有關?",
          en: "Jamaica's only World Heritage site, the Blue and John Crow Mountains, is a mixed natural-cultural site. Which history underpins its cultural value?",
        },
        options: [
          { zh: "逃亡奴隸「馬隆人」在山中建立聚落抵抗英軍", en: "Escaped slaves known as Maroons built mountain settlements and resisted the British" },
          { zh: "海盜黑鬍子在此埋藏寶藏", en: "The pirate Blackbeard buried treasure there" },
          { zh: "泰諾人在此建造黃金城", en: "The Taíno built a city of gold there" },
          { zh: "二戰盟軍在此設立秘密基地", en: "Allied forces ran a secret WWII base there" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬隆人利用險峻山林與英軍長期周旋,1739 年迫使英國簽約承認其自治;領袖「保姆夫人」(Queen Nanny)被尊為民族英雄,肖像印在 500 牙買加元紙鈔上。",
          en: "Using the rugged forests, the Maroons fought the British to a 1739 treaty recognizing their autonomy. Their leader Queen Nanny is a national hero whose portrait graces the 500-dollar note.",
        },
      },
      {
        question: {
          zh: "牙買加國菜「阿基果炒鹹魚」中的阿基果(ackee),食用時要特別注意什麼?",
          en: "Ackee, the fruit in Jamaica's national dish of ackee and saltfish, requires what special caution?",
        },
        options: [
          { zh: "必須等果實成熟自然裂開才能吃,未熟時有毒", en: "It must ripen and split open naturally — unripe ackee is poisonous" },
          { zh: "必須生吃,加熱會產生毒素", en: "It must be eaten raw, as heat creates toxins" },
          { zh: "必須先發酵數週去除澀味", en: "It must ferment for weeks to lose its astringency" },
          { zh: "只有紅色果皮的部分能吃", en: "Only the red outer skin is edible" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "未熟的阿基果含次甘胺酸,誤食會引發俗稱「牙買加嘔吐病」的中毒;這種果樹 18 世紀自西非引進,學名 Blighia sapida 是以「邦蒂號」的布萊船長命名。",
          en: "Unripe ackee contains hypoglycin, which causes 'Jamaican vomiting sickness'. Brought from West Africa in the 18th century, the tree's scientific name Blighia sapida honors Captain Bligh of the Bounty.",
        },
      },
      {
        question: {
          zh: "1988 年卡加利冬季奧運,牙買加首次派隊參加哪個項目而轟動全球?",
          en: "At the 1988 Calgary Winter Olympics, Jamaica made global headlines by debuting in which event?",
        },
        options: [
          { zh: "有舵雪橇(雪車)", en: "Bobsled" },
          { zh: "花式滑冰", en: "Figure skating" },
          { zh: "越野滑雪", en: "Cross-country skiing" },
          { zh: "冰壺", en: "Curling" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這支來自熱帶島國的雪車隊雖然翻車未能完賽,卻贏得全場喝采,故事後來改編成 1993 年電影《癲瘋總動員》(Cool Runnings),牙買加雪車隊此後也多次重返冬奧。",
          en: "The tropical island's sled crashed short of the finish yet won the crowd's hearts, inspiring the 1993 film 'Cool Runnings' — and Jamaican bobsledders have returned to the Winter Games many times since.",
        },
      },
    ],
  },
  TTO: {
    extraQuiz: [
      {
        question: {
          zh: "就地質而言,千里達島與多數加勒比島嶼有什麼根本不同?",
          en: "Geologically, how does the island of Trinidad differ fundamentally from most Caribbean islands?",
        },
        options: [
          { zh: "它位於南美大陸棚上,冰河期曾與大陸相連", en: "It sits on the South American continental shelf and was joined to the mainland during the ice ages" },
          { zh: "它是珊瑚礁堆積而成的環礁", en: "It is an atoll built up from coral reefs" },
          { zh: "它是地函熱點噴發形成的火山島", en: "It is a volcanic island formed over a mantle hotspot" },
          { zh: "它是隕石撞擊造成的島嶼", en: "It was formed by a meteorite impact" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "千里達約一萬年前才因海平面上升與南美洲分離,最近處距委內瑞拉僅約 11 公里,因此島上的動植物相與南美大陸相近,物種數遠多於面積相仿的其他加勒比島嶼。",
          en: "Rising seas cut Trinidad off from South America only about 10,000 years ago — Venezuela lies just 11 km away at the nearest point — so its flora and fauna are continental, far richer than similarly sized Caribbean islands.",
        },
      },
      {
        question: {
          zh: "哥倫布 1498 年將千里達命名為「Trinidad」,這個西班牙語名字的意思是什麼?",
          en: "Columbus named Trinidad in 1498. What does the Spanish name mean?",
        },
        options: [
          { zh: "三位一體", en: "The Holy Trinity" },
          { zh: "富饒海岸", en: "The rich coast" },
          { zh: "聖母瑪利亞", en: "The Virgin Mary" },
          { zh: "新西班牙", en: "New Spain" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "哥倫布曾立誓將下一片發現的土地獻給三位一體,相傳他遠望島上三座山丘連成一線,視為神意的印證,便以「La Trinidad」命名。",
          en: "Columbus had vowed to dedicate his next landfall to the Holy Trinity; tradition holds that sighting three hills in a row on the island sealed the choice of 'La Trinidad'.",
        },
      },
      {
        question: {
          zh: "出生於千里達的印度裔作家 V.S. 奈波爾,在 2001 年獲得什麼獎項?",
          en: "V.S. Naipaul, the Indo-Trinidadian writer born in Trinidad, received which award in 2001?",
        },
        options: [
          { zh: "諾貝爾文學獎", en: "The Nobel Prize in Literature" },
          { zh: "諾貝爾和平獎", en: "The Nobel Peace Prize" },
          { zh: "普立茲小說獎", en: "The Pulitzer Prize for Fiction" },
          { zh: "奧斯卡最佳改編劇本獎", en: "The Academy Award for Best Adapted Screenplay" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "奈波爾 1932 年生於千里達的印度裔家庭,代表作《畢斯華斯先生的房子》正是以千里達為背景,他筆下的後殖民世界為他贏得 2001 年諾貝爾文學獎。",
          en: "Born in 1932 to an Indo-Trinidadian family, Naipaul set his masterpiece 'A House for Mr Biswas' in Trinidad; his portraits of the postcolonial world earned him the 2001 Nobel Prize in Literature.",
        },
      },
    ],
  },
  BHS: {
    extraQuiz: [
      {
        question: {
          zh: "巴哈馬全國的最高點阿爾弗尼亞山(Mount Alvernia)大約有多高?",
          en: "Roughly how high is Mount Alvernia, the highest point in the entire Bahamas?",
        },
        options: [
          { zh: "約 63 公尺", en: "About 63 meters" },
          { zh: "約 630 公尺", en: "About 630 meters" },
          { zh: "約 1,200 公尺", en: "About 1,200 meters" },
          { zh: "約 2,300 公尺", en: "About 2,300 meters" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "巴哈馬全境由低平的石灰岩島嶼組成,是世界地勢最低平的國家之一;貓島上這座 63 公尺的「高峰」頂端還建有一座小巧的石造隱修院。",
          en: "Built entirely of low limestone islands, the Bahamas is one of the flattest countries on Earth — and the 63-meter 'peak' on Cat Island is crowned by a tiny stone hermitage.",
        },
      },
      {
        question: {
          zh: "巴哈馬最盛大的傳統節慶「Junkanoo」大遊行在什麼時候登場?",
          en: "When does Junkanoo, the Bahamas' biggest traditional festival parade, take to the streets?",
        },
        options: [
          { zh: "12 月 26 日節禮日與元旦的凌晨", en: "In the early hours of Boxing Day (December 26) and New Year's Day" },
          { zh: "大齋期前的嘉年華週", en: "During Carnival week before Lent" },
          { zh: "復活節週末", en: "Over Easter weekend" },
          { zh: "萬聖節前夜", en: "On Halloween night" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "Junkanoo 源自奴隸制時代聖誕假期的慶祝活動,如今遊行隊伍身穿縐紙彩裝,以羊皮鼓、牛鈴與哨子徹夜競演,拿索灣街是最熱鬧的舞台。",
          en: "Junkanoo grew from celebrations during the Christmas holidays granted under slavery; today crews in crepe-paper costumes battle through the night with goatskin drums, cowbells, and whistles, with Nassau's Bay Street the grandest stage.",
        },
      },
      {
        question: {
          zh: "「巴哈馬」(Bahamas)的國名一般認為源自西班牙語「baja mar」,意思是什麼?",
          en: "The name 'Bahamas' is generally traced to the Spanish 'baja mar', meaning what?",
        },
        options: [
          { zh: "淺海", en: "Shallow sea" },
          { zh: "藍色群島", en: "Blue islands" },
          { zh: "新天堂", en: "New paradise" },
          { zh: "風之海岸", en: "Coast of winds" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "巴哈馬群島座落在遼闊的淺水石灰岩台地上,清澈見底的碧綠淺海連太空人都能一眼認出;也有學者認為國名可能源自原住民盧卡約人的語言。",
          en: "The islands rest on vast, shallow limestone banks whose turquoise waters are recognizable even from space — though some scholars argue the name may instead derive from the Lucayan language.",
        },
      },
    ],
  },
};
