import type { CountryExtras } from "../types";

// Advanced question banks for the Middle East. Climate/travelTips live
// inline in the base country files, so these entries are quiz-only.

export const ASIA_MORE3_EXTRAS: Record<string, CountryExtras> = {
  IRQ: {
    extraQuiz: [
      {
        question: {
          zh: "伊拉克南部的世界遺產「阿瓦爾」濕地中,沼澤阿拉伯人傳統上以什麼材料建造宏偉的拱形集會屋?",
          en: "In the Ahwar marshes of southern Iraq, a World Heritage site, what material do the Marsh Arabs traditionally use to build their grand arched guest houses?",
        },
        options: [
          { zh: "蘆葦", en: "Reeds" },
          { zh: "泥磚", en: "Mud brick" },
          { zh: "石灰岩", en: "Limestone" },
          { zh: "棕櫚樹幹", en: "Palm trunks" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這種名為「穆迪夫」的拱形蘆葦屋不用一根釘子,工法可上溯至蘇美時代;阿瓦爾濕地於 2016 年以自然與文化雙重價值列入世界遺產。",
          en: "These arched reed halls, called mudhif, are built without a single nail, using techniques traced back to Sumerian times; the Ahwar was inscribed in 2016 as a mixed natural and cultural World Heritage site.",
        },
      },
      {
        question: {
          zh: "名列古代世界七大奇觀、傳說位於巴比倫城的是哪一項建築?",
          en: "Which of the Seven Wonders of the Ancient World was said to stand in the city of Babylon?",
        },
        options: [
          { zh: "空中花園", en: "The Hanging Gardens" },
          { zh: "亞歷山大燈塔", en: "The Lighthouse of Alexandria" },
          { zh: "羅德島巨像", en: "The Colossus of Rhodes" },
          { zh: "阿提米絲神殿", en: "The Temple of Artemis" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "空中花園是七大奇觀中唯一至今找不到確切遺址的一項,有學者認為它其實位於亞述的尼尼微;巴比倫城遺址本身則於 2019 年列入世界遺產。",
          en: "The Hanging Gardens are the only one of the Seven Wonders whose site has never been found — some scholars place them in Assyrian Nineveh instead. The ruins of Babylon itself became World Heritage in 2019.",
        },
      },
      {
        question: {
          zh: "沿著伊拉克東北部與伊朗的邊界綿延、涵蓋庫德地區高地的是哪條山脈?",
          en: "Which mountain range runs along northeastern Iraq's border with Iran, covering the Kurdish highlands?",
        },
        options: [
          { zh: "札格羅斯山脈", en: "The Zagros Mountains" },
          { zh: "托魯斯山脈", en: "The Taurus Mountains" },
          { zh: "高加索山脈", en: "The Caucasus Mountains" },
          { zh: "興都庫什山脈", en: "The Hindu Kush" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "伊拉克最高峰奇卡達爾峰(約 3,611 公尺)就位於札格羅斯山脈的庫德地區,與炎熱的南部平原形成鮮明對比。",
          en: "Iraq's highest peak, Cheekha Dar (about 3,611 meters), rises in the Kurdish stretch of the Zagros — a world apart from the hot southern plains.",
        },
      },
    ],
  },
  SYR: {
    extraQuiz: [
      {
        question: {
          zh: "敘利亞的最高峰是哪一座?它聳立在與黎巴嫩交界處,山頂終年常有積雪。",
          en: "What is Syria's highest peak, rising on the border with Lebanon and often snow-capped?",
        },
        options: [
          { zh: "黑門山(謝赫山)", en: "Mount Hermon (Jabal al-Shaykh)" },
          { zh: "西奈山", en: "Mount Sinai" },
          { zh: "亞拉拉特山", en: "Mount Ararat" },
          { zh: "內博山", en: "Mount Nebo" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "黑門山海拔約 2,814 公尺,阿拉伯語名「謝赫山」意為「長老之山」,形容白雪皚皚如長者白髮;它也是聖經中多次出現的名山。",
          en: "Mount Hermon reaches about 2,814 meters; its Arabic name Jabal al-Shaykh, 'mountain of the elder', likens its snows to an old man's white hair. It appears repeatedly in the Bible.",
        },
      },
      {
        question: {
          zh: "敘利亞境內哪座城堡保存極為完好,被公認為十字軍時代最傑出的軍事建築之一?",
          en: "Which castle in Syria, remarkably well preserved, is regarded as one of the finest examples of Crusader military architecture?",
        },
        options: [
          { zh: "騎士堡", en: "Krak des Chevaliers" },
          { zh: "阿勒坡城堡", en: "The Citadel of Aleppo" },
          { zh: "馬薩達要塞", en: "The fortress of Masada" },
          { zh: "羅德島騎士團長宮殿", en: "The Palace of the Grand Master of Rhodes" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "騎士堡由醫院騎士團在 12 至 13 世紀擴建,雙重城牆可駐軍數千,2006 年與薩拉丁堡一同列入世界遺產。",
          en: "Expanded by the Knights Hospitaller in the 12th and 13th centuries, its concentric double walls could garrison thousands; it joined the World Heritage list in 2006 alongside the Citadel of Saladin.",
        },
      },
      {
        question: {
          zh: "敘利亞沿海古城烏加里特出土的泥板,讓它在文字史上享有什麼地位?",
          en: "Clay tablets unearthed at Ugarit, an ancient city on Syria's coast, give it what place in the history of writing?",
        },
        options: [
          {
            zh: "出土了世界最早的字母文字系統之一",
            en: "It yielded one of the world's earliest alphabetic writing systems",
          },
          { zh: "出土了最早的紙莎草書卷", en: "It yielded the earliest papyrus scrolls" },
          { zh: "出土了最早的金屬鑄幣", en: "It yielded the earliest metal coinage" },
          { zh: "出土了最早的星象圖", en: "It yielded the earliest star chart" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "西元前 14 世紀左右的烏加里特字母以約 30 個楔形符號拼寫語音,其中一塊泥板還刻有目前所知最古老、可辨讀的樂譜。",
          en: "The Ugaritic alphabet of around the 14th century BC spelled sounds with some 30 cuneiform signs — and one tablet even preserves the oldest known readable piece of musical notation.",
        },
      },
    ],
  },
  JOR: {
    extraQuiz: [
      {
        question: {
          zh: "約旦的最高峰是哪一座?它位於南部瓦地倫沙漠一帶,鄰近沙烏地阿拉伯邊界。",
          en: "What is Jordan's highest peak, located in the Wadi Rum desert region near the Saudi border?",
        },
        options: [
          { zh: "烏姆達米山", en: "Jabal Umm ad Dami" },
          { zh: "倫姆山", en: "Jabal Rum" },
          { zh: "尼博山", en: "Mount Nebo" },
          { zh: "黑門山", en: "Mount Hermon" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "烏姆達米山海拔約 1,854 公尺,晴天時可從山頂眺望紅海;較著名的尼博山其實只有約 817 公尺,以摩西眺望應許之地的傳說聞名。",
          en: "Jabal Umm ad Dami rises about 1,854 meters, with Red Sea views on clear days; the more famous Mount Nebo, where Moses is said to have viewed the Promised Land, is only about 817 meters.",
        },
      },
      {
        question: {
          zh: "約旦城鎮馬達巴的聖喬治教堂地板上,保存著什麼舉世聞名的珍貴文物?",
          en: "The floor of St. George's Church in Madaba, Jordan, preserves what world-famous treasure?",
        },
        options: [
          {
            zh: "現存最古老的聖地馬賽克地圖",
            en: "The oldest surviving mosaic map of the Holy Land",
          },
          { zh: "十字軍時代的航海圖", en: "A Crusader-era nautical chart" },
          { zh: "鄂圖曼帝國的稅務地圖", en: "An Ottoman tax survey map" },
          { zh: "羅馬帝國的道路銅版圖", en: "A Roman bronze road map" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這幅 6 世紀拜占庭時代的馬賽克地圖以上百萬片彩石拼出耶路撒冷等聖地城鎮的鳥瞰圖,馬達巴也因此被稱為「馬賽克之城」。",
          en: "Laid in the 6th century under Byzantium, the mosaic maps Jerusalem and other holy cities in over a million colored tesserae — earning Madaba the nickname 'City of Mosaics'.",
        },
      },
      {
        question: {
          zh: "約旦河東岸的世界遺產「約旦河外伯大尼」,在基督教傳統中被視為什麼事件的發生地?",
          en: "Bethany Beyond the Jordan, a World Heritage site on the river's east bank, is held in Christian tradition to be the scene of what event?",
        },
        options: [
          { zh: "耶穌受洗", en: "The baptism of Jesus" },
          { zh: "最後的晚餐", en: "The Last Supper" },
          { zh: "五餅二魚的神蹟", en: "The miracle of the loaves and fishes" },
          { zh: "耶穌誕生", en: "The Nativity" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傳統認為施洗約翰在此為耶穌施洗,遺址於 2015 年列入世界遺產,歷任教宗都曾親訪這處河畔聖地。",
          en: "Tradition holds that John the Baptist baptized Jesus here; the site was inscribed as World Heritage in 2015 and has been visited by successive popes.",
        },
      },
    ],
  },
  LBN: {
    extraQuiz: [
      {
        question: {
          zh: "黎巴嫩的最高峰,同時也是整個黎凡特地區的最高點,是哪一座?",
          en: "What is Lebanon's highest peak — also the highest point in the entire Levant?",
        },
        options: [
          { zh: "庫爾納特・索達峰", en: "Qurnat as Sawda'" },
          { zh: "桑寧山", en: "Mount Sannine" },
          { zh: "黑門山", en: "Mount Hermon" },
          { zh: "西奈山", en: "Mount Sinai" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "庫爾納特・索達峰海拔約 3,088 公尺,屬黎巴嫩山脈;山麓的布沙里一帶保存著著名的「上帝雪松」古林,是世界遺產卡迪沙谷地的一部分。",
          en: "Qurnat as Sawda' rises about 3,088 meters in the Mount Lebanon range; below it near Bsharri stands the famed Cedars of God grove, part of the Qadisha Valley World Heritage site.",
        },
      },
      {
        question: {
          zh: "腓尼基古城泰爾在古代以出產什麼頂級奢侈品聞名整個地中海世界?",
          en: "The Phoenician city of Tyre was famed across the ancient Mediterranean for producing what supreme luxury?",
        },
        options: [
          { zh: "骨螺紫染料(泰爾紫)", en: "Murex purple dye (Tyrian purple)" },
          { zh: "絲綢", en: "Silk" },
          { zh: "番紅花", en: "Saffron" },
          { zh: "大理石雕像", en: "Marble statuary" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "泰爾紫從海螺腺體提煉,數千隻才能取得一克染料,昂貴到羅馬帝國將紫袍定為皇家專屬,「紫色」自此成為權力的代名詞。",
          en: "Extracted from the glands of sea snails — thousands per gram of dye — Tyrian purple was so costly that Rome reserved purple robes for emperors, making the color a byword for power.",
        },
      },
      {
        question: {
          zh: "散文詩集《先知》譯成上百種語言,它的作者是哪位出身黎巴嫩的文學家?",
          en: "The Prophet, a book of prose poetry translated into over a hundred languages, was written by which Lebanese-born author?",
        },
        options: [
          { zh: "紀伯倫", en: "Kahlil Gibran" },
          { zh: "魯米", en: "Rumi" },
          { zh: "奧瑪・珈音", en: "Omar Khayyam" },
          { zh: "哈菲茲", en: "Hafez" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "紀伯倫 1883 年生於黎巴嫩山區小鎮布沙里,後移居美國;《先知》1923 年於紐約出版,長銷至今,故鄉布沙里設有紀伯倫博物館。",
          en: "Born in 1883 in the mountain town of Bsharri before emigrating to the United States, Gibran published The Prophet in New York in 1923 — a perennial bestseller, with a museum in his hometown.",
        },
      },
    ],
  },
  KWT: {
    extraQuiz: [
      {
        question: {
          zh: "科威特外海的費萊卡島,在亞歷山大大帝之後的希臘化時代被希臘人稱為什麼?",
          en: "Failaka Island off Kuwait's coast was known by what name to the Greeks in the Hellenistic era after Alexander the Great?",
        },
        options: [
          { zh: "伊卡羅斯", en: "Ikaros" },
          { zh: "提洛斯", en: "Tylos" },
          { zh: "羅德斯", en: "Rhodos" },
          { zh: "納克索斯", en: "Naxos" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "塞琉古帝國曾在島上建立名為伊卡羅斯的殖民地,留下希臘式神殿與銘文;「提洛斯」則是希臘人對巴林的稱呼。",
          en: "The Seleucid empire planted a colony called Ikaros on the island, leaving a Greek temple and inscriptions; Tylos, by contrast, was the Greek name for Bahrain.",
        },
      },
      {
        question: {
          zh: "「科威特」這個國名在阿拉伯語中的原意是什麼?",
          en: "What does the name 'Kuwait' originally mean in Arabic?",
        },
        options: [
          { zh: "小堡壘", en: "Little fort" },
          { zh: "兩個海", en: "Two seas" },
          { zh: "珍珠之地", en: "Land of pearls" },
          { zh: "平靜的港灣", en: "Calm harbor" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "國名源自「kut」(堡壘)的指小詞,指 18 世紀海灣岸邊的一座小要塞聚落;「兩個海」則是鄰國巴林國名的意思。",
          en: "The name is a diminutive of 'kut' (fort), referring to a small stronghold on the bay in the 18th century; 'two seas' is the meaning of neighboring Bahrain's name.",
        },
      },
      {
        question: {
          zh: "1953 年成立的科威特投資局,通常被視為世界上最早的什麼機構?",
          en: "Founded in 1953, the Kuwait Investment Authority is generally regarded as the world's first what?",
        },
        options: [
          { zh: "主權財富基金", en: "Sovereign wealth fund" },
          { zh: "中央銀行", en: "Central bank" },
          { zh: "證券交易所", en: "Stock exchange" },
          { zh: "開發援助銀行", en: "Development aid bank" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "它比科威特獨立(1961 年)還早成立,把石油收入投資海外;其中的「未來世代基金」制度化地為石油枯竭後的世代儲蓄。",
          en: "Created even before Kuwait's independence in 1961, it invests oil revenue abroad; its Future Generations Fund systematically saves for the era after oil.",
        },
      },
    ],
  },
  QAT: {
    extraQuiz: [
      {
        question: {
          zh: "杜哈海濱的地標「伊斯蘭藝術博物館」,出自哪位建築大師之手,是他晚年的代表作之一?",
          en: "Doha's waterfront landmark, the Museum of Islamic Art, is a late masterpiece by which celebrated architect?",
        },
        options: [
          { zh: "貝聿銘", en: "I. M. Pei" },
          { zh: "札哈・哈蒂", en: "Zaha Hadid" },
          { zh: "諾曼・福斯特", en: "Norman Foster" },
          { zh: "法蘭克・蓋瑞", en: "Frank Gehry" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "博物館 2008 年開幕,幾何堆疊的量體靈感取自開羅的伊本・圖倫清真寺;貝聿銘堅持將它蓋在人工半島上,以免日後被高樓包圍。",
          en: "Opened in 2008, its stacked geometric volumes draw on Cairo's Ibn Tulun Mosque; Pei insisted it stand on its own artificial peninsula so towers could never crowd it.",
        },
      },
      {
        question: {
          zh: "卡達目前唯一列入 UNESCO 世界遺產名錄的地點是哪裡?",
          en: "What is currently Qatar's only site on the UNESCO World Heritage List?",
        },
        options: [
          { zh: "祖巴拉考古遺址", en: "The Al Zubarah archaeological site" },
          { zh: "瓦其夫市集", en: "Souq Waqif" },
          { zh: "珍珠人工島", en: "The Pearl artificial island" },
          { zh: "卡達國家博物館", en: "The National Museum of Qatar" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "祖巴拉是 18 至 19 世紀繁榮一時的採珠與貿易城鎮,廢棄後整座城被沙層封存,2013 年列入世界遺產。",
          en: "Al Zubarah flourished as a pearling and trading town in the 18th and 19th centuries; abandoned and sealed under sand, the whole town was inscribed in 2013.",
        },
      },
      {
        question: {
          zh: "卡達半島唯一接壤的陸上鄰國是哪一國?",
          en: "Which is the only country to share a land border with the Qatar peninsula?",
        },
        options: [
          { zh: "沙烏地阿拉伯", en: "Saudi Arabia" },
          { zh: "阿拉伯聯合大公國", en: "The United Arab Emirates" },
          { zh: "巴林", en: "Bahrain" },
          { zh: "科威特", en: "Kuwait" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "卡達三面環波斯灣,僅南側一小段與沙烏地阿拉伯相連,與巴林之間則隔海相望;2017 至 2021 年這條唯一陸界一度因斷交風波關閉。",
          en: "Surrounded by the Gulf on three sides, Qatar touches land only along a short southern border with Saudi Arabia, with Bahrain across the water — a border closed from 2017 to 2021 during a diplomatic rift.",
        },
      },
    ],
  },
  OMN: {
    extraQuiz: [
      {
        question: {
          zh: "阿曼的穆桑達姆省在地理上有什麼特殊之處?",
          en: "What is geographically unusual about Oman's Musandam governorate?",
        },
        options: [
          {
            zh: "是被阿拉伯聯合大公國隔開的飛地,俯瞰荷莫茲海峽",
            en: "It is an exclave separated from Oman by the UAE, overlooking the Strait of Hormuz",
          },
          { zh: "是阿曼唯一的島嶼省份", en: "It is Oman's only island governorate" },
          { zh: "全境位於海平面以下", en: "It lies entirely below sea level" },
          { zh: "是與葉門共管的特區", en: "It is a zone jointly administered with Yemen" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "穆桑達姆與阿曼本土之間隔著阿聯領土,半島的峽灣地形使它被稱為「阿拉伯的挪威」,腳下就是全球油輪必經的荷莫茲海峽。",
          en: "Cut off from the rest of Oman by UAE territory, Musandam's fjord-like inlets earn it the nickname 'Norway of Arabia' — and it looks straight down on the tanker lanes of the Strait of Hormuz.",
        },
      },
      {
        question: {
          zh: "阿曼列入世界遺產的「阿夫拉賈」(aflaj)指的是什麼?",
          en: "Oman's World Heritage 'aflaj' refers to what?",
        },
        options: [
          { zh: "傳統的灌溉水道系統", en: "Traditional irrigation channel systems" },
          { zh: "沙漠中的防禦城堡群", en: "Chains of desert fortresses" },
          { zh: "乳香貿易的倉庫群", en: "Warehouse complexes of the frankincense trade" },
          { zh: "史前的古墓塚群", en: "Prehistoric burial mound fields" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿夫拉賈利用重力把山區地下水引到村莊與棗園,部分渠道已使用上千年,至今仍由村民依古法分配水權,2006 年列入世界遺產。",
          en: "Aflaj use gravity alone to carry mountain groundwater to villages and date gardens; some channels have run for over a thousand years, with water shares still allocated by ancient custom. Inscribed in 2006.",
        },
      },
      {
        question: {
          zh: "阿曼最高峰「傑貝爾沙姆斯」的名字是什麼意思?",
          en: "What does the name of Oman's highest peak, Jebel Shams, mean?",
        },
        options: [
          { zh: "太陽之山", en: "Mountain of the Sun" },
          { zh: "月亮之山", en: "Mountain of the Moon" },
          { zh: "風之山", en: "Mountain of the Wind" },
          { zh: "駱駝之山", en: "Mountain of the Camel" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傑貝爾沙姆斯海拔約 3,000 公尺,是哈賈爾山脈的最高點;山旁深邃的古爾峽谷被稱為「阿拉伯的大峽谷」,是熱門健行路線。",
          en: "Jebel Shams rises about 3,000 meters, the crown of the Hajar range; beside it plunges Wadi Ghul, the 'Grand Canyon of Arabia', a favorite of hikers.",
        },
      },
    ],
  },
  YEM: {
    extraQuiz: [
      {
        question: {
          zh: "阿拉伯半島的最高峰位於葉門,是哪一座山?",
          en: "The highest peak of the Arabian Peninsula stands in Yemen. Which mountain is it?",
        },
        options: [
          { zh: "舒艾卜先知山", en: "Jabal an-Nabi Shu'ayb" },
          { zh: "傑貝爾沙姆斯", en: "Jebel Shams" },
          { zh: "索達山", en: "Jabal Sawda" },
          { zh: "黑門山", en: "Mount Hermon" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "舒艾卜先知山海拔約 3,666 公尺,聳立在首都沙那西側的高原上;葉門西部山地也因此成為阿拉伯半島地勢最高、降雨最多的區域之一。",
          en: "Jabal an-Nabi Shu'ayb reaches about 3,666 meters on the plateau west of Sana'a — making western Yemen among the highest and rainiest terrain on the peninsula.",
        },
      },
      {
        question: {
          zh: "11 至 12 世紀長期統治葉門、以興修水利與清真寺聞名的著名女王是誰?",
          en: "Which famous queen ruled Yemen through the 11th and 12th centuries, renowned for building waterworks and mosques?",
        },
        options: [
          { zh: "阿爾娃女王", en: "Queen Arwa" },
          { zh: "示巴女王", en: "The Queen of Sheba" },
          { zh: "芝諾比亞", en: "Zenobia" },
          { zh: "克麗奧佩脫拉", en: "Cleopatra" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "蘇萊希王朝的阿爾娃女王執政近半世紀,定都吉布拉,深受人民愛戴,被暱稱為「小示巴女王」;傳說中的示巴女王則屬於遠古時代。",
          en: "Queen Arwa of the Sulayhid dynasty reigned for nearly half a century from her capital at Jibla, so beloved she was nicknamed 'the little Queen of Sheba' — the legendary Sheba herself belongs to far earlier antiquity.",
        },
      },
      {
        question: {
          zh: "葉門男性傳統上佩戴在腰帶正中的彎刃短劍稱為什麼?",
          en: "What is the curved dagger traditionally worn at the center of the belt by Yemeni men called?",
        },
        options: [
          { zh: "詹比亞", en: "The janbiya" },
          { zh: "廓爾喀彎刀", en: "The kukri" },
          { zh: "克力士劍", en: "The kris" },
          { zh: "基爾潘短劍", en: "The kirpan" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "詹比亞的刀柄材質彰顯佩戴者的身分,傳統上以犀牛角柄最為貴重;如今它主要是服飾與儀式的一部分,而非實戰武器。",
          en: "A janbiya's hilt signals its owner's standing — rhino horn was traditionally the most prized. Today it is worn chiefly as dress and ceremony rather than as a weapon.",
        },
      },
    ],
  },
  CYP: {
    extraQuiz: [
      {
        question: {
          zh: "賽普勒斯的最高峰與希臘神話中的諸神之山同名,它是哪一座?",
          en: "Cyprus's highest peak shares its name with the mythical home of the Greek gods. Which mountain is it?",
        },
        options: [
          { zh: "奧林帕斯山", en: "Mount Olympus" },
          { zh: "五指山", en: "Pentadaktylos" },
          { zh: "伊達山", en: "Mount Ida" },
          { zh: "帕納索斯山", en: "Mount Parnassus" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這座奧林帕斯山是特羅多斯山脈的主峰,海拔 1,952 公尺;特羅多斯山區還藏著十座列入世界遺產的拜占庭彩繪教堂。",
          en: "This Olympus crowns the Troodos range at 1,952 meters; the same mountains shelter ten painted Byzantine churches inscribed as World Heritage.",
        },
      },
      {
        question: {
          zh: "賽普勒斯的世界遺產「喬伊魯科蒂亞」保存了什麼時代的遺跡?",
          en: "The World Heritage site of Choirokoitia in Cyprus preserves remains from what era?",
        },
        options: [
          {
            zh: "新石器時代的圓形石屋聚落",
            en: "A Neolithic settlement of round stone houses",
          },
          { zh: "邁錫尼時代的宮殿", en: "A Mycenaean palace" },
          { zh: "羅馬時代的別墅", en: "A Roman villa" },
          { zh: "十字軍時代的城堡", en: "A Crusader castle" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "喬伊魯科蒂亞的歷史可上溯約九千年,是地中海東部保存最完整的史前聚落之一,1998 年列入世界遺產,現場另建有復原屋供參觀。",
          en: "Occupied some 9,000 years ago, Choirokoitia is among the best-preserved prehistoric settlements in the eastern Mediterranean — listed in 1998, with reconstructed dwellings on site.",
        },
      },
      {
        question: {
          zh: "哪種野生動物是賽普勒斯的象徵,只棲息在島上西部的山林之中?",
          en: "Which wild animal, found only in the forested mountains of western Cyprus, serves as a symbol of the island?",
        },
        options: [
          { zh: "摩弗倫羊(野生綿羊)", en: "The mouflon (a wild sheep)" },
          { zh: "阿爾卑斯野山羊", en: "The Alpine ibex" },
          { zh: "歐洲野牛", en: "The European bison" },
          { zh: "伊比利亞猞猁", en: "The Iberian lynx" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "賽普勒斯摩弗倫羊是島上特有的野生綿羊,一度瀕臨絕種,如今受保護於帕福斯森林;牠的形象曾登上硬幣與賽普勒斯航空的機尾標誌。",
          en: "The Cyprus mouflon, a wild sheep unique to the island, was once nearly extinct and now thrives protected in the Paphos Forest — its image has graced coins and the tailfin of Cyprus Airways.",
        },
      },
    ],
  },
  PSE: {
    extraQuiz: [
      {
        question: {
          zh: "希伯崙老城的核心聖所,在猶太教、基督教與伊斯蘭教傳統中同被尊為哪位先知的安葬之地?",
          en: "The central shrine of Hebron's old town is revered in Jewish, Christian, and Islamic tradition alike as the burial place of which prophet?",
        },
        options: [
          { zh: "亞伯拉罕(易卜拉欣)", en: "Abraham (Ibrahim)" },
          { zh: "摩西", en: "Moses" },
          { zh: "大衛王", en: "King David" },
          { zh: "挪亞", en: "Noah" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這處建築群猶太傳統稱「族長之墓」,伊斯蘭傳統稱「易卜拉欣清真寺」,現存巨石圍牆建於希律王時代,老城於 2017 年列入世界遺產。",
          en: "Known as the Cave of the Patriarchs in Jewish tradition and the Ibrahimi Mosque in Islamic tradition, its massive enclosure walls date to Herod's era; the old town was inscribed as World Heritage in 2017.",
        },
      },
      {
        question: {
          zh: "西岸城市納布盧斯以哪種傳統甜點聞名,以當地白起司鋪底、覆上細絲麵皮再淋糖漿?",
          en: "The West Bank city of Nablus is famous for which traditional dessert, made of local white cheese topped with shredded pastry and syrup?",
        },
        options: [
          { zh: "庫納法", en: "Knafeh" },
          { zh: "果仁蜜餅", en: "Baklava" },
          { zh: "哈爾瓦酥糖", en: "Halva" },
          { zh: "玫瑰米布丁", en: "Rose rice pudding" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "納布盧斯被視為庫納法的名城,使用當地特產的納布盧斯起司,趁熱上桌時起司仍會拉絲,是老城市集裡最經典的味道。",
          en: "Nablus is regarded as the home city of knafeh, made with its signature Nabulsi cheese and served hot so the cheese still stretches — the defining taste of the old-city markets.",
        },
      },
      {
        question: {
          zh: "伯利恆附近的巴蒂爾村,以什麼樣的文化景觀列入世界遺產?",
          en: "The village of Battir near Bethlehem was inscribed as World Heritage for what kind of cultural landscape?",
        },
        options: [
          {
            zh: "以古老渠道灌溉的石砌梯田,種植橄欖與葡萄",
            en: "Stone-walled terraces irrigated by ancient channels, planted with olives and vines",
          },
          { zh: "沙漠中的拜占庭修道院群", en: "A cluster of Byzantine desert monasteries" },
          { zh: "羅馬時代的水道橋", en: "A Roman aqueduct" },
          { zh: "十字軍時代的城堡", en: "A Crusader castle" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這片名為「橄欖與葡萄之地」的梯田景觀 2014 年列入世界遺產,湧泉水依傳統輪流分配給各家族,農法已沿用上千年。",
          en: "Inscribed in 2014 as the 'Land of Olives and Vines', the terraces are watered by springs shared among families in traditional rotation, using methods over a thousand years old.",
        },
      },
    ],
  },
  BHR: {
    extraQuiz: [
      {
        question: {
          zh: "巴林沙漠中的名勝「生命之樹」,以什麼特點聞名於世?",
          en: "Bahrain's famous 'Tree of Life' in the desert is renowned for what?",
        },
        options: [
          {
            zh: "在幾乎無水的沙漠中獨自存活數百年",
            en: "Surviving alone for centuries in nearly waterless desert",
          },
          { zh: "是全世界最高的椰棗樹", en: "Being the world's tallest date palm" },
          { zh: "樹幹會湧出天然泉水", en: "Having a spring flowing from its trunk" },
          {
            zh: "由亞歷山大大帝親手種植",
            en: "Having been planted by Alexander the Great himself",
          },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這棵牧豆樹樹齡估計超過 400 年,方圓數公里不見其他樹木,水源至今成謎,一般認為深根觸及了地下水層。",
          en: "The mesquite tree is estimated at over 400 years old, with no other tree for kilometers around; its water source remains a mystery, most likely deep roots tapping groundwater.",
        },
      },
      {
        question: {
          zh: "就國土面積而言,巴林在阿拉伯國家之中有什麼地位?",
          en: "In terms of land area, where does Bahrain stand among Arab countries?",
        },
        options: [
          { zh: "是面積最小的阿拉伯國家", en: "It is the smallest Arab country" },
          { zh: "是人口最少的阿拉伯國家", en: "It is the least populous Arab country" },
          {
            zh: "是海岸線最長的阿拉伯國家",
            en: "It has the longest coastline of any Arab country",
          },
          { zh: "是最晚獨立的阿拉伯國家", en: "It was the last Arab country to gain independence" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "巴林面積約 780 平方公里,只比新加坡略大;透過持續填海造陸,這個小島國的國土至今仍在慢慢擴大。",
          en: "At roughly 780 square kilometers — only slightly larger than Singapore — Bahrain is still slowly growing through ongoing land reclamation.",
        },
      },
      {
        question: {
          zh: "在蘇美神話與《吉爾伽美什史詩》中,以巴林一帶為中心的迪爾蒙被描繪成什麼樣的地方?",
          en: "In Sumerian myth and the Epic of Gilgamesh, how is Dilmun — centered on the Bahrain area — portrayed?",
        },
        options: [
          {
            zh: "潔淨不朽的樂土,大洪水倖存者獲賜永生後的居所",
            en: "A pure, immortal paradise, home of the flood survivor granted eternal life",
          },
          { zh: "通往冥界的入口", en: "The gateway to the underworld" },
          { zh: "諸神鍛造武器的工坊", en: "The forge where the gods made their weapons" },
          { zh: "巨人族的故鄉", en: "The homeland of a race of giants" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "史詩中大洪水的倖存者烏特納比西丁獲得永生後便定居迪爾蒙;有學者認為這則「樂園」意象,可能影響了後世伊甸園傳說的想像。",
          en: "In the epic, the flood survivor Utnapishtim settles in Dilmun after receiving immortality; some scholars suggest this paradise imagery may have shaped later visions of the Garden of Eden.",
        },
      },
    ],
  },
};
