import type { Country } from "../types";

// Africa (more, batch 1): 13 countries — North Africa / Sahel / West African coast.
// Content shape is LLM-generatable — see types.ts.

export const AFRICA_MORE1: Country[] = [
  {
    id: "DZA",
    name: { zh: "阿爾及利亞", en: "Algeria" },
    capital: { zh: "阿爾及爾", en: "Algiers" },
    flag: "🇩🇿",
    region: "africa",
    center: { lat: 28.0, lng: 1.7 },
    intro: {
      zh: "非洲面積最大的國家,地中海岸的白色城市與綿延的撒哈拉沙漠形成強烈對比。北部的阿特拉斯山脈與葡萄園、南部的沙丘與史前岩畫,加上豐富的石油天然氣資源,構成這個馬格里布大國的多重面貌。",
      en: "Africa's largest country by area, where whitewashed Mediterranean cities contrast with the vast Sahara. The Atlas Mountains and vineyards in the north, dunes and prehistoric rock art in the south, plus abundant oil and gas, define this Maghreb giant.",
    },
    history: {
      zh: "柏柏人是這片土地最早的主人,先後歷經迦太基、羅馬與阿拉伯帝國的統治,伊斯蘭化後成為馬格里布重鎮,16 世紀起受鄂圖曼帝國節制。1830 年法國入侵並展開長達 132 年的殖民統治,1954 至 1962 年的獨立戰爭極為慘烈,最終於 1962 年獨立。1990 年代經歷內戰動盪,如今憑藉油氣出口成為北非重要經濟體。",
      en: "Berbers were the land's first inhabitants, followed by Carthaginian, Roman, and Arab rule; from the 16th century it fell under Ottoman influence. France invaded in 1830, beginning 132 years of colonization. A brutal war of independence from 1954 to 1962 ended in sovereignty. After civil conflict in the 1990s, Algeria is now a major North African economy powered by oil and gas exports.",
    },
    cities: [
      {
        name: { zh: "阿爾及爾", en: "Algiers" },
        blurb: {
          zh: "依山面海的首都,白色建築層層疊上山坡,人稱「白色之城」。",
          en: "The hillside capital cascading white buildings to the sea — nicknamed 'Algiers the White'.",
        },
        trivia: {
          question: {
            zh: "阿爾及爾老城區以其鄂圖曼時期的迷宮巷弄聞名,並被列入世界遺產,這個老城區叫什麼?",
            en: "Algiers' old quarter, a UNESCO-listed maze of Ottoman-era alleys, is known by what name?",
          },
          options: [
            { zh: "卡斯巴(Casbah)", en: "The Casbah" },
            { zh: "麥地那(Medina)", en: "The Medina" },
            { zh: "蘇克(Souk)", en: "The Souk" },
            { zh: "里亞德(Riad)", en: "The Riad" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "阿爾及爾的卡斯巴建於山坡上,巷弄如迷宮,1992 年被聯合國教科文組織列為世界遺產。",
            en: "Built on a steep hillside, the labyrinthine Casbah of Algiers was inscribed as a UNESCO World Heritage Site in 1992.",
          },
        },
      },
      {
        name: { zh: "奧蘭", en: "Oran" },
        blurb: {
          zh: "西部第一大港,融合西班牙與法國風情,也是一種著名音樂的發源地。",
          en: "The main western port, blending Spanish and French flavors — and the cradle of a famous music genre.",
        },
        trivia: {
          question: {
            zh: "哪一種融合北非民謠與流行元素的音樂類型,發源於奧蘭並風靡全球?",
            en: "Which music genre blending North African folk with pop elements originated in Oran and spread worldwide?",
          },
          options: [
            { zh: "萊伊(Raï)", en: "Raï" },
            { zh: "格納瓦(Gnawa)", en: "Gnawa" },
            { zh: "馬洛雅(Maloya)", en: "Maloya" },
            { zh: "姆巴蘭(Mbalax)", en: "Mbalax" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "萊伊音樂 20 世紀初誕生於奧蘭,歌詞直白反映庶民生活,後來成為國際知名的音樂類型。",
            en: "Raï emerged in Oran in the early 20th century, with frank lyrics about everyday life, and later became internationally famous.",
          },
        },
      },
      {
        name: { zh: "君士坦丁", en: "Constantine" },
        blurb: {
          zh: "建在峽谷之上的千年古城,以多座凌空飛架的橋樑聞名。",
          en: "An ancient city perched above a dramatic gorge, famous for its soaring bridges.",
        },
        trivia: {
          question: {
            zh: "君士坦丁因城市橫跨深谷、以多座大橋相連,而獲得什麼稱號?",
            en: "Constantine spans a deep gorge linked by dramatic bridges, earning it what nickname?",
          },
          options: [
            { zh: "橋之城", en: "City of Bridges" },
            { zh: "風之城", en: "City of Winds" },
            { zh: "千塔之城", en: "City of a Thousand Towers" },
            { zh: "玫瑰之城", en: "City of Roses" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "城市座落在魯邁勒河切出的深谷兩側,靠著多座壯觀的橋樑連接,因而被稱為「橋之城」。",
            en: "The city sits on cliffs carved by the Rhummel River, its halves joined by spectacular bridges — hence 'City of Bridges'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2011 年南蘇丹獨立使蘇丹面積縮小後,阿爾及利亞成為非洲面積最大的國家。",
        en: "Since South Sudan's 2011 secession shrank Sudan, Algeria has been Africa's largest country by area.",
      },
      {
        zh: "南部的塔西利那傑爾高原保存了上萬幅史前岩畫,被列為世界遺產。",
        en: "The Tassili n'Ajjer plateau in the south preserves thousands of prehistoric rock paintings and is a UNESCO site.",
      },
    ],
    climate: {
      zh: "北部沿海屬地中海型氣候,冬雨夏乾;越往內陸越乾燥,廣大的南部為極端乾熱的沙漠氣候,日夜溫差大。",
      en: "The northern coast is Mediterranean with wet winters and dry summers; inland turns arid, and the vast south is extreme desert with large day–night temperature swings.",
    },
    travelTips: [
      {
        zh: "多數旅客需事先申請簽證,行程與住宿文件備齊有助通關。",
        en: "Most visitors need a visa arranged in advance; having itinerary and accommodation documents ready helps at entry.",
      },
      {
        zh: "阿拉伯語為官方語言,法語通行;英語普及度較低,學幾句法語很實用。",
        en: "Arabic is official and French widely spoken; English is limited, so a few French phrases go a long way.",
      },
      {
        zh: "前往撒哈拉南部地區通常需透過當地旅行社安排並取得許可,勿自行深入沙漠。",
        en: "Trips into the deep Sahara generally require a local agency and permits — do not venture into the desert independently.",
      },
    ],
  },
  {
    id: "LBY",
    name: { zh: "利比亞", en: "Libya" },
    capital: { zh: "的黎波里", en: "Tripoli" },
    flag: "🇱🇾",
    region: "africa",
    center: { lat: 27.0, lng: 17.5 },
    intro: {
      zh: "北非地中海岸的產油大國,九成以上國土被撒哈拉沙漠覆蓋,人口集中在狹長的沿海地帶。境內保存了大萊普提斯、昔蘭尼等地中海世界數一數二完整的古希臘羅馬遺址。",
      en: "An oil-rich North African nation on the Mediterranean, with over 90% of its territory covered by the Sahara and its people clustered along the coast. It preserves some of the Mediterranean's finest Greco-Roman ruins, including Leptis Magna and Cyrene.",
    },
    history: {
      zh: "腓尼基人與希臘人先後在沿海建立殖民城市,羅馬時代的黎波里塔尼亞與昔蘭尼加繁榮一時,7 世紀後阿拉伯化,16 世紀起受鄂圖曼帝國統治。1911 年義大利入侵,1951 年在聯合國主導下獨立建國。1969 年格達費發動政變掌權長達 42 年,2011 年政權在內戰中垮台,此後利比亞長期處於分裂與動盪之中。",
      en: "Phoenicians and Greeks founded coastal colonies, and Roman-era Tripolitania and Cyrenaica flourished; Arabization followed from the 7th century, then Ottoman rule from the 16th. Italy invaded in 1911, and Libya gained independence under UN auspices in 1951. Gaddafi seized power in a 1969 coup and ruled 42 years until his regime fell in the 2011 civil war; the country has faced division and instability since.",
    },
    cities: [
      {
        name: { zh: "的黎波里", en: "Tripoli" },
        blurb: {
          zh: "地中海岸的首都,老城麥地那與紅堡見證多層歷史。",
          en: "The Mediterranean capital, its medina and Red Castle layered with history.",
        },
        trivia: {
          question: {
            zh: "「的黎波里」這個名字源自希臘語,原意是什麼?",
            en: "The name 'Tripoli' comes from Greek — what does it originally mean?",
          },
          options: [
            { zh: "三座城市", en: "Three cities" },
            { zh: "白色海港", en: "White harbor" },
            { zh: "獅子之地", en: "Land of lions" },
            { zh: "沙漠之門", en: "Gate of the desert" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "希臘語 Tripolis 意為「三城」,指古代的奧埃亞、薩布拉塔與大萊普提斯三座城市。",
            en: "Greek 'Tripolis' means 'three cities', referring to the ancient towns of Oea, Sabratha, and Leptis Magna.",
          },
        },
      },
      {
        name: { zh: "班加西", en: "Benghazi" },
        blurb: {
          zh: "東部第一大城與第二大城市,昔蘭尼加地區的中心。",
          en: "The largest city of the east and Libya's second city, heart of the Cyrenaica region.",
        },
        trivia: {
          question: {
            zh: "班加西所在的利比亞東部地區,因古希臘殖民城市昔蘭尼而得名,這個地區叫什麼?",
            en: "Benghazi's region of eastern Libya takes its name from the ancient Greek colony of Cyrene. What is the region called?",
          },
          options: [
            { zh: "昔蘭尼加", en: "Cyrenaica" },
            { zh: "的黎波里塔尼亞", en: "Tripolitania" },
            { zh: "費贊", en: "Fezzan" },
            { zh: "努米底亞", en: "Numidia" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "昔蘭尼加得名於西元前 7 世紀希臘人建立的昔蘭尼城,與西部的的黎波里塔尼亞、西南的費贊並列利比亞三大歷史地區。",
            en: "Cyrenaica is named after Cyrene, founded by Greeks in the 7th century BC; with Tripolitania and Fezzan it forms Libya's three historic regions.",
          },
        },
      },
      {
        name: { zh: "米蘇拉塔", en: "Misrata" },
        blurb: {
          zh: "第三大城與重要商港,以貿易傳統與自由貿易區聞名。",
          en: "The third city and a major trading port, known for its merchant tradition and free-trade zone.",
        },
        trivia: {
          question: {
            zh: "米蘇拉塔在利比亞經濟中主要扮演什麼角色?",
            en: "What role does Misrata primarily play in Libya's economy?",
          },
          options: [
            { zh: "重要商業港口與貿易中心", en: "A major commercial port and trade hub" },
            { zh: "內陸綠洲農業中心", en: "An inland oasis farming center" },
            { zh: "撒哈拉觀光門戶", en: "A gateway for Sahara tourism" },
            { zh: "高山滑雪度假地", en: "A mountain ski resort" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "米蘇拉塔位於地中海岸,擁有大型港口與自由貿易區,是利比亞最重要的商業城市之一。",
            en: "Sitting on the Mediterranean with a large port and free-trade zone, Misrata is one of Libya's most important commercial cities.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "大萊普提斯是地中海保存最完整的羅馬城市遺址之一,曾是羅馬皇帝塞維魯的故鄉。",
        en: "Leptis Magna is among the best-preserved Roman city ruins on the Mediterranean — birthplace of Emperor Septimius Severus.",
      },
      {
        zh: "利比亞阿齊濟耶的 58°C「世界最高溫」紀錄,在 2012 年被世界氣象組織認定無效。",
        en: "The 58°C 'world record' temperature at Al-'Aziziyah was invalidated by the World Meteorological Organization in 2012.",
      },
    ],
    climate: {
      zh: "沿海狹長地帶屬地中海型氣候,冬季溫和有雨;內陸絕大部分為酷熱乾燥的沙漠氣候,夏季常有吉卜利熱風侵襲。",
      en: "The narrow coast is Mediterranean with mild, wetter winters; the vast interior is scorching desert, and the hot ghibli wind sweeps in during summer.",
    },
    travelTips: [
      {
        zh: "多國對利比亞發布旅遊警示,行前務必確認最新官方公告與當地安全情勢。",
        en: "Many governments issue travel advisories for Libya — check the latest official guidance and local conditions before any trip.",
      },
      {
        zh: "簽證取得不易,通常需由當地機構擔保邀請,獨立旅行幾乎不可行。",
        en: "Visas are hard to obtain and usually require a local sponsor; independent travel is largely impractical.",
      },
      {
        zh: "利比亞屬保守的伊斯蘭社會,衣著應端莊,齋戒月期間白天避免在公共場合飲食。",
        en: "Libya is a conservative Muslim society — dress modestly and avoid eating in public during daylight in Ramadan.",
      },
    ],
  },
  {
    id: "SDN",
    name: { zh: "蘇丹", en: "Sudan" },
    capital: { zh: "喀土穆", en: "Khartoum" },
    flag: "🇸🇩",
    region: "africa",
    center: { lat: 15.5, lng: 30.2 },
    intro: {
      zh: "位於尼羅河中游的東北非大國,藍尼羅河與白尼羅河在首都喀土穆交匯。這裡是古代努比亞文明與庫施王國的故鄉,金字塔數量甚至超過埃及,近年則因內部衝突頻仍而動盪。",
      en: "A large northeast African nation on the middle Nile, where the Blue and White Niles meet at Khartoum. Homeland of ancient Nubia and the Kingdom of Kush — with more pyramids than Egypt — it has been shaken by repeated internal conflict in recent years.",
    },
    history: {
      zh: "古代努比亞與庫施王國在尼羅河畔興盛千年,庫施甚至一度征服埃及建立第 25 王朝。中世紀基督教王國之後逐漸伊斯蘭化,19 世紀受埃及與英國共管,1956 年獨立。獨立後南北內戰纏鬥數十年,2011 年南蘇丹分離建國;2019 年長期執政的巴希爾被推翻,2023 年爆發正規軍與快速支援部隊之間的內戰,人道危機嚴重。",
      en: "Ancient Nubia and the Kingdom of Kush thrived on the Nile for millennia — Kush even conquered Egypt as its 25th Dynasty. Medieval Christian kingdoms gave way to Islamization; Anglo-Egyptian rule ended with independence in 1956. Decades of north–south civil war led to South Sudan's secession in 2011. Long-time ruler al-Bashir was ousted in 2019, and in 2023 war erupted between the army and the RSF, causing a severe humanitarian crisis.",
    },
    cities: [
      {
        name: { zh: "喀土穆", en: "Khartoum" },
        blurb: {
          zh: "首都,座落在兩條尼羅河的交匯點,與恩圖曼、北喀土穆構成三城都會區。",
          en: "The capital at the meeting of two Niles, forming a tri-city metro with Omdurman and Khartoum North.",
        },
        trivia: {
          question: {
            zh: "哪兩條河流在喀土穆交匯,合流成為尼羅河幹流?",
            en: "Which two rivers meet at Khartoum to form the main Nile?",
          },
          options: [
            { zh: "藍尼羅河與白尼羅河", en: "The Blue Nile and the White Nile" },
            { zh: "尼羅河與阿特巴拉河", en: "The Nile and the Atbara" },
            { zh: "剛果河與尼羅河", en: "The Congo and the Nile" },
            { zh: "尼日河與白尼羅河", en: "The Niger and the White Nile" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "源自衣索比亞高原的藍尼羅河與源自東非湖區的白尼羅河在喀土穆合流,交匯處被稱為「摩格蘭」。",
            en: "The Blue Nile from the Ethiopian highlands and the White Nile from the East African lakes merge at Khartoum, at a point called al-Mogran.",
          },
        },
      },
      {
        name: { zh: "恩圖曼", en: "Omdurman" },
        blurb: {
          zh: "尼羅河西岸的蘇丹最大城市,馬赫迪運動的歷史都城。",
          en: "Sudan's largest city on the Nile's west bank, historic capital of the Mahdist movement.",
        },
        trivia: {
          question: {
            zh: "1898 年英軍在恩圖曼一役中擊敗了哪個政權,重新控制蘇丹?",
            en: "In the 1898 Battle of Omdurman, British forces defeated which state to retake Sudan?",
          },
          options: [
            { zh: "馬赫迪國", en: "The Mahdist State" },
            { zh: "鄂圖曼帝國", en: "The Ottoman Empire" },
            { zh: "阿克蘇姆王國", en: "The Kingdom of Aksum" },
            { zh: "桑海帝國", en: "The Songhai Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬赫迪起義曾推翻英埃統治並以恩圖曼為都,1898 年基奇納率英埃聯軍在此決戰獲勝,終結馬赫迪國。",
            en: "The Mahdist uprising had overthrown Anglo-Egyptian rule and made Omdurman its capital; Kitchener's forces crushed the Mahdist State here in 1898.",
          },
        },
      },
      {
        name: { zh: "蘇丹港", en: "Port Sudan" },
        blurb: {
          zh: "紅海岸的最大海港,蘇丹對外貿易的咽喉。",
          en: "The country's main Red Sea port and lifeline for foreign trade.",
        },
        trivia: {
          question: {
            zh: "蘇丹港面向哪一片海域,使它成為蘇丹最重要的對外門戶?",
            en: "Port Sudan faces which body of water, making it the country's key gateway to the world?",
          },
          options: [
            { zh: "紅海", en: "The Red Sea" },
            { zh: "地中海", en: "The Mediterranean Sea" },
            { zh: "亞丁灣", en: "The Gulf of Aden" },
            { zh: "幾內亞灣", en: "The Gulf of Guinea" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "蘇丹港建於 20 世紀初,是蘇丹在紅海岸的主要深水港,絕大多數進出口貨物都經此轉運。",
            en: "Built in the early 20th century, Port Sudan is the nation's main deep-water port on the Red Sea, handling most imports and exports.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "蘇丹的金字塔比埃及還多,光是麥羅埃遺址就有兩百餘座努比亞金字塔。",
        en: "Sudan has more pyramids than Egypt — the Meroë site alone holds over 200 Nubian pyramids.",
      },
    ],
    climate: {
      zh: "北部為酷熱沙漠氣候,幾乎終年無雨;向南漸轉半乾旱與莽原氣候,南部夏季有明顯雨季,全國大部分地區長年高溫。",
      en: "The north is scorching desert with almost no rain; conditions grade south into semi-arid and savanna zones with a summer wet season, and heat dominates year-round.",
    },
    travelTips: [
      {
        zh: "多國對蘇丹發布旅遊警示,行前務必確認最新官方公告與當地安全情勢。",
        en: "Many governments issue travel advisories for Sudan — check the latest official guidance and local conditions before any trip.",
      },
      {
        zh: "2023 年爆發的內戰嚴重影響全國基礎設施與交通,多數航線與服務中斷。",
        en: "The war that began in 2023 has severely disrupted infrastructure and transport, with many routes and services suspended.",
      },
      {
        zh: "蘇丹社會保守,拍攝政府建築與軍事設施屬敏感行為,務必避免。",
        en: "Sudanese society is conservative, and photographing government or military sites is highly sensitive — avoid it entirely.",
      },
    ],
  },
  {
    id: "SSD",
    name: { zh: "南蘇丹", en: "South Sudan" },
    capital: { zh: "朱巴", en: "Juba" },
    flag: "🇸🇸",
    region: "africa",
    center: { lat: 7.3, lng: 30.0 },
    intro: {
      zh: "2011 年才獨立的世界最年輕國家之一,白尼羅河貫穿全境,擁有世界最大濕地之一的蘇德沼澤。這裡族群多元、石油資源豐富,但建國以來飽受內部衝突與發展困境考驗。",
      en: "One of the world's youngest countries, independent only since 2011. The White Nile runs through it, feeding the Sudd — one of the largest wetlands on Earth. Ethnically diverse and oil-rich, it has been tested by conflict and development challenges since its birth.",
    },
    history: {
      zh: "尼羅特語系各民族如丁卡人、努爾人在此生活已久,19 世紀被納入埃及與英國治下的蘇丹。蘇丹 1956 年獨立後,南方因宗教與族群差異與北方爆發兩次長期內戰,合計超過四十年。2005 年和平協議賦予南方自治,2011 年公投以近 99% 的壓倒性同意獨立建國;2013 年起又陷入內戰,2018 年簽署和平協議後局勢仍脆弱。",
      en: "Nilotic peoples such as the Dinka and Nuer have long lived here; the region was absorbed into Anglo-Egyptian Sudan in the 19th century. After Sudan's 1956 independence, religious and ethnic divides fueled two civil wars spanning over four decades. A 2005 peace deal granted autonomy, and a 2011 referendum passed with nearly 99% support for independence. Civil war erupted again in 2013; a 2018 peace deal holds, but fragilely.",
    },
    cities: [
      {
        name: { zh: "朱巴", en: "Juba" },
        blurb: {
          zh: "白尼羅河畔的首都,建國後迅速擴張的年輕都市。",
          en: "The capital on the White Nile, a young city growing rapidly since independence.",
        },
        trivia: {
          question: {
            zh: "朱巴座落在哪一條河流的岸邊?",
            en: "Juba sits on the banks of which river?",
          },
          options: [
            { zh: "白尼羅河", en: "The White Nile" },
            { zh: "藍尼羅河", en: "The Blue Nile" },
            { zh: "剛果河", en: "The Congo River" },
            { zh: "尚比西河", en: "The Zambezi River" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "白尼羅河(此河段又稱山尼羅河)流經朱巴,是城市對外運輸與生活用水的命脈。",
            en: "The White Nile (locally the Bahr al-Jabal on this stretch) flows past Juba, serving as the city's transport and water lifeline.",
          },
        },
      },
      {
        name: { zh: "瓦烏", en: "Wau" },
        blurb: {
          zh: "西北部的重要城市,加扎勒河地區的商業與交通樞紐。",
          en: "A key northwestern city, the commercial and transport hub of the Bahr el Ghazal region.",
        },
        trivia: {
          question: {
            zh: "瓦烏是南蘇丹哪個地區的主要中心城市?",
            en: "Wau is the main urban center of which South Sudanese region?",
          },
          options: [
            { zh: "加扎勒河地區", en: "Bahr el Ghazal" },
            { zh: "上尼羅地區", en: "Upper Nile" },
            { zh: "赤道地區", en: "Equatoria" },
            { zh: "青尼羅地區", en: "Blue Nile" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瓦烏位於加扎勒河地區,是南蘇丹規模數一數二的城市,也是該國鐵路線的終點站所在。",
            en: "Wau anchors the Bahr el Ghazal region, ranks among South Sudan's largest cities, and is the terminus of the country's railway line.",
          },
        },
      },
      {
        name: { zh: "馬拉卡爾", en: "Malakal" },
        blurb: {
          zh: "白尼羅河畔的北部重鎮,上尼羅地區的門戶。",
          en: "A northern river town on the White Nile, gateway to the Upper Nile region.",
        },
        trivia: {
          question: {
            zh: "馬拉卡爾主要依靠哪一種交通方式與朱巴等城市聯繫?",
            en: "Malakal has traditionally been linked to Juba and other cities mainly by what means of transport?",
          },
          options: [
            { zh: "尼羅河河運", en: "River transport on the Nile" },
            { zh: "高速鐵路", en: "High-speed rail" },
            { zh: "跨國高速公路", en: "International highways" },
            { zh: "海運航線", en: "Ocean shipping routes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "南蘇丹公路網稀疏,白尼羅河的河運長期是馬拉卡爾與朱巴之間人員與物資往來的重要通道。",
            en: "With sparse road networks, White Nile river barges have long been a vital link for people and goods between Malakal and Juba.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "2011 年獨立公投中,近 99% 的選民投下贊成票,南蘇丹成為當今世界最年輕的公認國家之一。",
        en: "In the 2011 referendum nearly 99% voted for independence, making South Sudan one of the world's youngest recognized countries.",
      },
      {
        zh: "蘇德沼澤是世界最大的濕地之一,雨季時面積可膨脹到數萬平方公里。",
        en: "The Sudd is among the world's largest wetlands, swelling to tens of thousands of square kilometers in the wet season.",
      },
    ],
    climate: {
      zh: "屬熱帶莽原氣候,終年炎熱,大致 4 至 10 月為雨季,低窪地區常氾濫;11 月至隔年 3 月為乾季,塵土飛揚。",
      en: "Tropical savanna climate, hot year-round: rains fall roughly April to October, often flooding low-lying areas, while November to March is dry and dusty.",
    },
    travelTips: [
      {
        zh: "多國對南蘇丹發布旅遊警示,行前務必確認最新官方公告與當地安全情勢。",
        en: "Many governments issue travel advisories for South Sudan — check the latest official guidance and local conditions before any trip.",
      },
      {
        zh: "入境通常需事先取得簽證,並備妥黃熱病疫苗接種證明。",
        en: "A visa is generally required in advance, along with proof of yellow fever vaccination.",
      },
      {
        zh: "境內鋪面道路極少,雨季許多路段無法通行,城際移動多仰賴小型飛機。",
        en: "Paved roads are scarce and many routes become impassable in the rains; intercity travel often relies on small aircraft.",
      },
    ],
  },
  {
    id: "TCD",
    name: { zh: "查德", en: "Chad" },
    capital: { zh: "恩加美納", en: "N'Djamena" },
    flag: "🇹🇩",
    region: "africa",
    center: { lat: 15.4, lng: 18.7 },
    intro: {
      zh: "地處非洲心臟的內陸國,國土由北往南從撒哈拉沙漠、薩赫爾草原過渡到熱帶莽原,因此被稱為「非洲的死心臟」也是文化十字路口。西部的查德湖曾是非洲最大湖泊之一,如今大幅縮小。",
      en: "A landlocked state in the heart of Africa, its territory shifting from Sahara desert through Sahel steppe to tropical savanna as you move south. Lake Chad in the west, once among Africa's largest lakes, has shrunk dramatically.",
    },
    history: {
      zh: "查德湖周邊自古是跨撒哈拉貿易要衝,加涅姆—博爾努帝國自 9 世紀起在此興盛近千年,東部則有瓦達伊蘇丹國。20 世紀初成為法屬赤道非洲的一部分,1960 年獨立。獨立後政變與內戰頻仍,並多次與利比亞交戰;德比家族自 1990 年起長期掌權,2021 年老德比陣亡後由其子接任,政局仍不穩定。",
      en: "The Lake Chad basin was a crossroads of trans-Saharan trade; the Kanem–Bornu Empire flourished here for nearly a millennium from the 9th century, while the Wadai Sultanate ruled the east. Colonized into French Equatorial Africa in the early 20th century, Chad gained independence in 1960. Coups, civil wars, and conflicts with Libya followed; the Déby family has held power since 1990, the son succeeding after his father's 2021 battlefield death.",
    },
    cities: [
      {
        name: { zh: "恩加美納", en: "N'Djamena" },
        blurb: {
          zh: "沙里河畔的首都,與喀麥隆隔河相望。",
          en: "The capital on the Chari River, facing Cameroon across the water.",
        },
        trivia: {
          question: {
            zh: "恩加美納在 1973 年改為現名之前,原本叫什麼名字?",
            en: "Before being renamed in 1973, N'Djamena was known by what name?",
          },
          options: [
            { zh: "拉密堡(Fort-Lamy)", en: "Fort-Lamy" },
            { zh: "布拉薩市(Brazzaville)", en: "Brazzaville" },
            { zh: "自由城(Freetown)", en: "Freetown" },
            { zh: "阿必尚(Abidjan)", en: "Abidjan" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法國殖民時期以軍官拉密命名為「拉密堡」,1973 年去殖民化更名為恩加美納,取自附近村落名。",
            en: "Founded as Fort-Lamy after a French officer, the city was renamed N'Djamena in 1973 after a nearby village, shedding its colonial name.",
          },
        },
      },
      {
        name: { zh: "蒙杜", en: "Moundou" },
        blurb: {
          zh: "南部的第二大城,棉花產區與釀酒工業的中心。",
          en: "The southern second city, center of the cotton belt and brewing industry.",
        },
        trivia: {
          question: {
            zh: "蒙杜所在的查德南部,主要盛產哪一種經濟作物?",
            en: "Moundou's region in southern Chad is best known for growing which cash crop?",
          },
          options: [
            { zh: "棉花", en: "Cotton" },
            { zh: "咖啡", en: "Coffee" },
            { zh: "可可", en: "Cocoa" },
            { zh: "茶葉", en: "Tea" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "查德南部雨量較充足,是傳統棉花產區,蒙杜的棉花加工與啤酒釀造是當地工業支柱。",
            en: "Southern Chad's wetter climate supports cotton farming; ginning and brewing are pillars of Moundou's economy.",
          },
        },
      },
      {
        name: { zh: "阿貝歇", en: "Abéché" },
        blurb: {
          zh: "東部大城,昔日瓦達伊蘇丹國的都城與駝商重鎮。",
          en: "The main eastern city, once capital of the Wadai Sultanate and a caravan hub.",
        },
        trivia: {
          question: {
            zh: "阿貝歇在殖民時代之前,是哪個蘇丹國的都城?",
            en: "Before the colonial era, Abéché served as the capital of which sultanate?",
          },
          options: [
            { zh: "瓦達伊蘇丹國", en: "The Wadai Sultanate" },
            { zh: "索科托哈里發國", en: "The Sokoto Caliphate" },
            { zh: "桑吉巴蘇丹國", en: "The Sultanate of Zanzibar" },
            { zh: "摩洛哥蘇丹國", en: "The Sultanate of Morocco" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瓦達伊蘇丹國自 17 世紀起統治查德東部,阿貝歇是其都城,也是跨撒哈拉駝商路線的重要節點。",
            en: "The Wadai Sultanate ruled eastern Chad from the 17th century with Abéché as its capital, a key stop on trans-Saharan caravan routes.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "查德湖自 1960 年代以來面積縮小約九成,湖區由查德、尼日、奈及利亞與喀麥隆四國共享。",
        en: "Lake Chad has shrunk by roughly 90% since the 1960s; its basin is shared by Chad, Niger, Nigeria, and Cameroon.",
      },
      {
        zh: "北部提貝斯提山脈的庫西山高 3,445 公尺,是整個撒哈拉沙漠的最高峰。",
        en: "Emi Koussi in the northern Tibesti Mountains rises 3,445 m — the highest peak in the entire Sahara.",
      },
    ],
    climate: {
      zh: "北部為酷熱乾燥的沙漠氣候,中部薩赫爾地帶雨量稀少,南部屬熱帶莽原氣候,約 5 至 10 月有雨季,全國普遍炎熱。",
      en: "Scorching desert in the north, sparse Sahel rains in the center, and tropical savanna in the south with a May–October wet season — heat prevails everywhere.",
    },
    travelTips: [
      {
        zh: "多國對查德部分地區發布旅遊警示,行前務必確認最新官方公告與當地安全情勢。",
        en: "Many governments issue travel advisories for parts of Chad — check the latest official guidance and local conditions before any trip.",
      },
      {
        zh: "官方語言為法語與阿拉伯語,英語幾乎不通,基本法語會話很有幫助。",
        en: "French and Arabic are the official languages; English is rarely spoken, so basic French helps greatly.",
      },
      {
        zh: "前往札庫馬國家公園或恩內迪高原等地,需透過專業旅行社安排車隊與嚮導。",
        en: "Visits to Zakouma National Park or the Ennedi Plateau require an experienced operator with vehicles and guides.",
      },
    ],
  },
  {
    id: "NER",
    name: { zh: "尼日", en: "Niger" },
    capital: { zh: "尼阿美", en: "Niamey" },
    flag: "🇳🇪",
    region: "africa",
    center: { lat: 17.6, lng: 8.1 },
    intro: {
      zh: "以流經西南部的尼日河命名的內陸國,八成以上國土屬於撒哈拉沙漠。這裡有壯闊的泰內雷沙海、圖阿雷格人的駝商古城,以及全球數一數二年輕的人口結構,鈾礦是重要出口資源。",
      en: "A landlocked nation named for the Niger River in its southwest, with over 80% of its land in the Sahara. It boasts the sweeping Ténéré sand seas, Tuareg caravan towns, one of the world's youngest populations, and major uranium exports.",
    },
    history: {
      zh: "這片土地曾是跨撒哈拉貿易的通道,先後受加涅姆—博爾努、桑海等帝國影響,南部豪薩城邦與圖阿雷格部族並立。19 世紀末法國勢力進入,1922 年正式成為法屬殖民地,1960 年獨立。獨立後政變頻繁,1960 年代起開採鈾礦成為經濟支柱;2023 年再度發生軍事政變,政局與區域安全仍充滿變數。",
      en: "Long a corridor of trans-Saharan trade, the region felt the influence of the Kanem–Bornu and Songhai empires, with Hausa city-states and Tuareg confederations in the south and north. France formalized colonial rule by 1922; independence came in 1960. Coups have recurred since, uranium mining became an economic pillar from the 1960s, and a 2023 military takeover left politics and regional security uncertain.",
    },
    cities: [
      {
        name: { zh: "尼阿美", en: "Niamey" },
        blurb: {
          zh: "尼日河畔的首都,從河港小鎮發展成全國最大城市。",
          en: "The capital on the Niger River, grown from a small river town into the country's largest city.",
        },
        trivia: {
          question: {
            zh: "尼阿美座落在哪一條河流旁,這條河也是國名的由來?",
            en: "Niamey sits on which river — the same one that gives the country its name?",
          },
          options: [
            { zh: "尼日河", en: "The Niger River" },
            { zh: "塞內加爾河", en: "The Senegal River" },
            { zh: "尼羅河", en: "The Nile" },
            { zh: "沙里河", en: "The Chari River" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼日河是西非第一大河,流經尼阿美西南部國土,尼日與奈及利亞的國名都源自這條河。",
            en: "The Niger, West Africa's greatest river, flows through the country's southwest past Niamey; both Niger and Nigeria take their names from it.",
          },
        },
      },
      {
        name: { zh: "阿加德茲", en: "Agadez" },
        blurb: {
          zh: "撒哈拉南緣的駝商古城,泥造建築群被列為世界遺產。",
          en: "An ancient caravan city on the Sahara's southern edge, its mudbrick old town a UNESCO site.",
        },
        trivia: {
          question: {
            zh: "阿加德茲大清真寺最著名的特徵是什麼?",
            en: "What is the most famous feature of the Grand Mosque of Agadez?",
          },
          options: [
            { zh: "高聳的泥磚宣禮塔", en: "Its towering mudbrick minaret" },
            { zh: "黃金打造的圓頂", en: "Its gold-plated dome" },
            { zh: "全大理石的外牆", en: "Its all-marble facade" },
            { zh: "彩色玻璃花窗", en: "Its stained-glass windows" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座 16 世紀清真寺的泥磚宣禮塔高約 27 公尺,塔身插滿木樁以便年年整修,是撒哈拉泥造建築的代表作。",
            en: "The 16th-century mosque's mudbrick minaret rises about 27 m, studded with wooden beams used for annual repairs — an icon of Saharan earthen architecture.",
          },
        },
      },
      {
        name: { zh: "津德爾", en: "Zinder" },
        blurb: {
          zh: "南部的豪薩古城,曾是殖民時期的首府。",
          en: "A historic Hausa city in the south, once the colonial capital.",
        },
        trivia: {
          question: {
            zh: "津德爾在 1926 年之前擁有什麼地位?",
            en: "What status did Zinder hold until 1926?",
          },
          options: [
            { zh: "尼日的首府", en: "It was Niger's capital" },
            { zh: "全國唯一海港", en: "It was the country's only seaport" },
            { zh: "王室加冕之城", en: "It was the royal coronation city" },
            { zh: "大學城", en: "It was the university city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法屬尼日的首府原設於津德爾,1926 年因位置與水源考量遷往尼阿美,津德爾至今仍保有蘇丹王宮與老城。",
            en: "French Niger was first administered from Zinder; the capital moved to Niamey in 1926, but Zinder retains its sultan's palace and old quarters.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "尼日的人口年齡中位數只有約 15 歲,是全世界最年輕的國家之一。",
        en: "Niger's median age is only about 15, making it one of the youngest populations on Earth.",
      },
      {
        zh: "泰內雷沙漠中曾有一棵被稱為「世上最孤獨的樹」的孤樹,方圓數百公里內沒有其他樹木,1973 年被卡車撞倒後移入博物館保存。",
        en: "The lone 'Tree of Ténéré', once the most isolated tree on Earth with none for hundreds of kilometers, was knocked down by a truck in 1973 and is now kept in a museum.",
      },
    ],
    climate: {
      zh: "大部分國土為酷熱的沙漠氣候,南部薩赫爾地帶約 6 至 9 月有短暫雨季;熱季氣溫常超過 40°C,是世界上最炎熱的國家之一。",
      en: "Mostly hot desert, with a brief June–September rainy season in the southern Sahel; hot-season temperatures regularly top 40°C, among the highest anywhere.",
    },
    travelTips: [
      {
        zh: "多國對尼日發布旅遊警示,行前務必確認最新官方公告與當地安全情勢。",
        en: "Many governments issue travel advisories for Niger — check the latest official guidance and local conditions before any trip.",
      },
      {
        zh: "官方語言為法語,豪薩語是最通行的當地語言,英語幾乎不通。",
        en: "French is official and Hausa the most widely spoken local language; English is rarely understood.",
      },
      {
        zh: "3 至 5 月熱季酷熱難耐,規劃行程宜避開,並隨時補充水分。",
        en: "The March–May hot season is punishing — plan around it and stay constantly hydrated.",
      },
    ],
  },
  {
    id: "MLI",
    name: { zh: "馬利", en: "Mali" },
    capital: { zh: "巴馬科", en: "Bamako" },
    flag: "🇲🇱",
    region: "africa",
    center: { lat: 17.6, lng: -4.0 },
    intro: {
      zh: "西非內陸大國,尼日河如生命線般橫貫南部。中世紀的馬利帝國曾是黃金與學術的代名詞,廷巴克圖與傑內的泥造清真寺至今訴說著跨撒哈拉貿易的黃金年代,音樂傳統也享譽世界。",
      en: "A vast landlocked West African nation, with the Niger River as its southern lifeline. The medieval Mali Empire was synonymous with gold and scholarship; the mud mosques of Timbuktu and Djenné still evoke the golden age of trans-Saharan trade, and its musical heritage is world-famous.",
    },
    history: {
      zh: "迦納、馬利、桑海三大帝國先後在此興衰,14 世紀馬利帝國的曼薩·穆薩以驚人財富聞名於世,廷巴克圖成為伊斯蘭學術重鎮。19 世紀末淪為法屬蘇丹,1960 年與塞內加爾短暫組成聯邦後獨立。2012 年北部爆發叛亂與極端組織活動,2020 與 2021 年接連發生政變,安全局勢至今仍然嚴峻。",
      en: "The Ghana, Mali, and Songhai empires rose and fell here; in the 14th century Mansa Musa's legendary wealth made the Mali Empire world-famous, and Timbuktu became a center of Islamic learning. Colonized as French Sudan in the late 19th century, Mali became independent in 1960 after a brief federation with Senegal. A 2012 northern rebellion and insurgency, followed by coups in 2020 and 2021, keep the security situation tense.",
    },
    cities: [
      {
        name: { zh: "巴馬科", en: "Bamako" },
        blurb: {
          zh: "尼日河畔的首都,西非成長最快的大城市之一,音樂場景蓬勃。",
          en: "The capital on the Niger River, one of West Africa's fastest-growing cities with a thriving music scene.",
        },
        trivia: {
          question: {
            zh: "巴馬科橫跨哪一條西非大河的兩岸?",
            en: "Bamako straddles which great West African river?",
          },
          options: [
            { zh: "尼日河", en: "The Niger River" },
            { zh: "沃爾特河", en: "The Volta River" },
            { zh: "甘比亞河", en: "The Gambia River" },
            { zh: "貝努埃河", en: "The Benue River" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼日河流貫巴馬科,城市以多座大橋連接兩岸,河運與漁業自古是城市命脈。",
            en: "The Niger flows through Bamako, its banks linked by several bridges; river trade and fishing have long sustained the city.",
          },
        },
      },
      {
        name: { zh: "廷巴克圖", en: "Timbuktu" },
        blurb: {
          zh: "撒哈拉邊緣的傳奇古城,昔日的黃金貿易與學術之都。",
          en: "The legendary city on the Sahara's edge, once a capital of gold trade and scholarship.",
        },
        trivia: {
          question: {
            zh: "中世紀的廷巴克圖除了黃金與鹽的貿易,還以什麼聞名於伊斯蘭世界?",
            en: "Beyond its gold and salt trade, medieval Timbuktu was renowned across the Islamic world for what?",
          },
          options: [
            { zh: "大學與數十萬冊手抄本", en: "Its universities and hundreds of thousands of manuscripts" },
            { zh: "世界最大的港口", en: "The world's largest seaport" },
            { zh: "大理石宮殿群", en: "Its marble palace complexes" },
            { zh: "鐵礦冶煉技術", en: "Its iron-smelting technology" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "以桑科雷清真寺為核心的學術網絡吸引各地學者,城中累積了數十萬冊珍貴手抄本,堪稱沙漠中的大學城。",
            en: "Centered on the Sankoré mosque, Timbuktu's scholarly network drew students from afar and amassed hundreds of thousands of manuscripts — a university city in the desert.",
          },
        },
      },
      {
        name: { zh: "傑內", en: "Djenné" },
        blurb: {
          zh: "尼日河內三角洲的古城,擁有舉世聞名的泥造大清真寺。",
          en: "An ancient town in the Inner Niger Delta, home to the world-famous Great Mud Mosque.",
        },
        trivia: {
          question: {
            zh: "傑內大清真寺保持著什麼樣的世界紀錄?",
            en: "The Great Mosque of Djenné holds what world distinction?",
          },
          options: [
            { zh: "世界最大的泥磚建築", en: "The world's largest mudbrick building" },
            { zh: "世界最古老的石造教堂", en: "The world's oldest stone church" },
            { zh: "世界最高的木塔", en: "The world's tallest wooden tower" },
            { zh: "世界最深的地下清真寺", en: "The world's deepest underground mosque" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "現今的清真寺於 1907 年重建,是全球最大的泥磚建築;每年居民會舉行盛大的集體抹泥維護活動。",
            en: "Rebuilt in 1907, it is the largest mudbrick structure on Earth; each year townspeople replaster it together in a festive communal event.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "14 世紀的曼薩·穆薩赴麥加朝聖時沿途豪撒黃金,常被稱為史上最富有的人之一。",
        en: "On his 14th-century pilgrimage to Mecca, Mansa Musa gave away so much gold he is often called one of the richest people in history.",
      },
    ],
    climate: {
      zh: "北部為撒哈拉沙漠氣候,中部薩赫爾乾旱,南部莽原約 6 至 9 月有雨季;11 月至 2 月相對涼爽,是傳統上的旅遊季節。",
      en: "Saharan desert in the north, arid Sahel in the center, and savanna in the south with June–September rains; November to February is cooler and traditionally the travel season.",
    },
    travelTips: [
      {
        zh: "多國對馬利發布旅遊警示,行前務必確認最新官方公告與當地安全情勢。",
        en: "Many governments issue travel advisories for Mali — check the latest official guidance and local conditions before any trip.",
      },
      {
        zh: "官方語言為法語,班巴拉語通行全國;英語普及度很低。",
        en: "French is official and Bambara widely spoken nationwide; English is uncommon.",
      },
      {
        zh: "入境通常需要簽證與黃熱病疫苗接種證明。",
        en: "Entry generally requires a visa and proof of yellow fever vaccination.",
      },
    ],
  },
  {
    id: "MRT",
    name: { zh: "茅利塔尼亞", en: "Mauritania" },
    capital: { zh: "諾克少", en: "Nouakchott" },
    flag: "🇲🇷",
    region: "africa",
    center: { lat: 20.3, lng: -10.3 },
    intro: {
      zh: "橫跨阿拉伯世界與黑色非洲交界的沙漠國度,九成國土屬於撒哈拉。這裡有中世紀駝商古城欣蓋提、從太空清晰可見的「撒哈拉之眼」,以及載運鐵礦、長達數公里的傳奇列車。",
      en: "A desert nation straddling the Arab world and sub-Saharan Africa, with 90% of its land in the Sahara. It offers the medieval caravan town of Chinguetti, the space-visible 'Eye of the Sahara', and a legendary iron-ore train stretching kilometers long.",
    },
    history: {
      zh: "柏柏與阿拉伯部族長期主導這片沙漠,11 世紀興起的穆拉比特王朝曾從此地擴張至摩洛哥與西班牙。20 世紀初成為法國殖民地,1960 年獨立,並將小漁村諾克少建為新首都。獨立後政變頻仍,種族與蓄奴問題長期受國際關注——茅利塔尼亞是全球最後一個立法廢除奴隸制的國家。",
      en: "Berber and Arab peoples long dominated this desert; the 11th-century Almoravid movement expanded from here to Morocco and Spain. France colonized the territory in the early 20th century, and independence in 1960 saw the fishing village of Nouakchott built into a new capital. Coups followed, and ethnic divisions and slavery drew international scrutiny — Mauritania was the last country on Earth to legally abolish slavery.",
    },
    cities: [
      {
        name: { zh: "諾克少", en: "Nouakchott" },
        blurb: {
          zh: "1958 年才從小漁村規劃而成的首都,如今是撒哈拉地區最大城市之一。",
          en: "A capital planned from a fishing village only in 1958, now among the largest cities in the Sahara.",
        },
        trivia: {
          question: {
            zh: "諾克少成為首都之前,原本是什麼樣的聚落?",
            en: "Before becoming the capital, what kind of settlement was Nouakchott?",
          },
          options: [
            { zh: "小漁村", en: "A small fishing village" },
            { zh: "百萬人口古都", en: "An ancient city of a million people" },
            { zh: "殖民時期軍港", en: "A colonial naval base" },
            { zh: "內陸礦業城市", en: "An inland mining town" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1958 年獨立前夕,茅利塔尼亞選定大西洋岸的小漁村諾克少興建首都,數十年間人口成長至上百萬。",
            en: "On the eve of independence in 1958, Mauritania chose the tiny Atlantic fishing village of Nouakchott as its capital; it has since grown past a million people.",
          },
        },
      },
      {
        name: { zh: "努瓦迪布", en: "Nouadhibou" },
        blurb: {
          zh: "北部半島上的第二大城,漁業與鐵礦輸出的門戶。",
          en: "The second city on a northern peninsula, gateway for fishing and iron-ore exports.",
        },
        trivia: {
          question: {
            zh: "連接努瓦迪布與內陸礦區祖埃拉特的列車,以什麼特點聞名世界?",
            en: "The train linking Nouadhibou with the inland mines at Zouérat is world-famous for what?",
          },
          options: [
            { zh: "是世界最長的列車之一,可達兩公里以上", en: "Being among the world's longest trains, stretching over two kilometers" },
            { zh: "是世界最快的高速鐵路", en: "Being the world's fastest high-speed rail" },
            { zh: "行駛於海底隧道", en: "Running through an undersea tunnel" },
            { zh: "全程由蒸汽機車牽引", en: "Being pulled entirely by steam locomotives" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這列鐵礦火車常由兩百多節車廂組成,全長可超過兩公里,是地球上最長的列車之一,旅人甚至可以搭乘礦斗穿越沙漠。",
            en: "The iron-ore train often runs 200-plus wagons and over two kilometers long — one of the longest trains on Earth; travelers can even ride the ore hoppers across the desert.",
          },
        },
      },
      {
        name: { zh: "欣蓋提", en: "Chinguetti" },
        blurb: {
          zh: "撒哈拉中的中世紀駝商古城,以古老的沙漠圖書館聞名。",
          en: "A medieval caravan town deep in the Sahara, famed for its ancient desert libraries.",
        },
        trivia: {
          question: {
            zh: "欣蓋提最珍貴的文化資產是什麼?",
            en: "What is Chinguetti's most treasured cultural asset?",
          },
          options: [
            { zh: "收藏中世紀手抄本的沙漠圖書館", en: "Desert libraries holding medieval manuscripts" },
            { zh: "全金箔裝飾的宮殿", en: "A palace covered in gold leaf" },
            { zh: "羅馬時代的圓形劇場", en: "A Roman amphitheater" },
            { zh: "巨石陣遺跡", en: "A megalithic stone circle" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "欣蓋提是朝聖與駝商路線上的學術驛站,家族圖書館世代保存宗教、天文與法學手抄本,古城已列入世界遺產。",
            en: "A scholarly stop on pilgrimage and caravan routes, Chinguetti's family libraries preserve manuscripts on religion, astronomy, and law; the old town is UNESCO-listed.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "茅利塔尼亞是全球最後一個廢除奴隸制的國家:1981 年立法廢除,2007 年才將其入罪。",
        en: "Mauritania was the last country to abolish slavery — outlawed in 1981, and criminalized only in 2007.",
      },
      {
        zh: "「撒哈拉之眼」理查特結構直徑約 40 公里,是太空人辨識撒哈拉的著名地標。",
        en: "The Richat Structure, the 'Eye of the Sahara', spans about 40 km and is a famous landmark for astronauts orbiting overhead.",
      },
    ],
    climate: {
      zh: "絕大部分為酷熱乾燥的沙漠氣候,常有沙塵暴;大西洋沿岸受涼流與海風調節,氣溫較內陸溫和,南部邊緣有短暫雨季。",
      en: "Overwhelmingly hot, dry desert prone to sandstorms; the Atlantic coast is tempered by cool currents and sea breezes, and the far south gets a brief rainy season.",
    },
    travelTips: [
      {
        zh: "部分國家對茅利塔尼亞部分地區發布旅遊警示,行前務必確認最新官方公告。",
        en: "Some governments issue travel advisories for parts of Mauritania — check the latest official guidance before you go.",
      },
      {
        zh: "屬保守的伊斯蘭共和國,男女皆宜穿著寬鬆長袖衣物,並尊重當地習俗。",
        en: "It is a conservative Islamic republic — loose, long clothing is appropriate for everyone, and local customs deserve respect.",
      },
      {
        zh: "深入沙漠地區務必聘請當地嚮導並結伴同行,備足飲水與通訊設備。",
        en: "Never head into the desert without a local guide and company, plus ample water and communications gear.",
      },
    ],
  },
  {
    id: "GMB",
    name: { zh: "甘比亞", en: "The Gambia" },
    capital: { zh: "班竹", en: "Banjul" },
    flag: "🇬🇲",
    region: "africa",
    center: { lat: 13.45, lng: -15.4 },
    intro: {
      zh: "非洲大陸面積最小的國家,國土沿著甘比亞河兩岸延伸,像一條細長的舌頭嵌進塞內加爾之中。以大西洋岸的沙灘度假、豐富的鳥類生態與友善的民風聞名,被暱稱為「非洲的微笑海岸」。",
      en: "Mainland Africa's smallest country, a sliver of land hugging both banks of the Gambia River and wedged into Senegal. Known for Atlantic beach resorts, rich birdlife, and famously friendly people, it is nicknamed 'the Smiling Coast of Africa'.",
    },
    history: {
      zh: "甘比亞河流域曾是馬利帝國的勢力範圍,15 世紀起葡萄牙人抵達,其後數百年英法在此競逐,河流成為大西洋奴隸貿易的通道之一。1889 年英法劃定現今狹長國界,1965 年脫離英國獨立。1994 年賈梅政變上台統治 22 年,2017 年在區域壓力下和平交權,國家走向民主化。",
      en: "The river basin lay within the Mali Empire's orbit before Portuguese arrival in the 15th century; Britain and France then competed here for centuries, and the river became a corridor of the Atlantic slave trade. The narrow borders were drawn in 1889, and independence from Britain came in 1965. Yahya Jammeh seized power in 1994 and ruled 22 years, peacefully ceding power under regional pressure in 2017 as democracy took hold.",
    },
    cities: [
      {
        name: { zh: "班竹", en: "Banjul" },
        blurb: {
          zh: "建在甘比亞河口島嶼上的迷你首都,節奏悠閒。",
          en: "A tiny, laid-back capital built on an island at the mouth of the Gambia River.",
        },
        trivia: {
          question: {
            zh: "班竹的地理位置有什麼特別之處?",
            en: "What is geographically special about Banjul?",
          },
          options: [
            { zh: "它建在河口的島嶼上", en: "It is built on an island at a river mouth" },
            { zh: "它是全球海拔最高的首都", en: "It is the world's highest-altitude capital" },
            { zh: "它位於沙漠綠洲中", en: "It sits in a desert oasis" },
            { zh: "它橫跨兩個國家", en: "It straddles two countries" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "班竹座落在甘比亞河出海口的聖瑪麗島上,1816 年由英國人建城,舊名巴瑟斯特。",
            en: "Banjul occupies St Mary's Island at the Gambia River's mouth; the British founded it in 1816 as Bathurst.",
          },
        },
      },
      {
        name: { zh: "塞雷昆達", en: "Serekunda" },
        blurb: {
          zh: "全國最大的城市聚落,市集與交通樞紐,比首都熱鬧得多。",
          en: "The country's largest urban area, a bustling market and transport hub far livelier than the capital.",
        },
        trivia: {
          question: {
            zh: "塞雷昆達在甘比亞城市體系中的地位是什麼?",
            en: "What position does Serekunda hold among Gambian cities?",
          },
          options: [
            { zh: "全國最大的城市聚落", en: "The country's largest urban settlement" },
            { zh: "全國唯一的深水港", en: "The country's only deep-water port" },
            { zh: "歷史上的王國都城", en: "The historic royal capital" },
            { zh: "最北端的邊境城市", en: "The northernmost border town" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "受限於島嶼地形,首都班竹規模很小,人口與商業活動集中在鄰近的塞雷昆達,使它成為全國最大城市聚落。",
            en: "Hemmed in by its island site, Banjul stayed small — people and commerce concentrated in nearby Serekunda, now the nation's largest urban area.",
          },
        },
      },
      {
        name: { zh: "布里卡馬", en: "Brikama" },
        blurb: {
          zh: "西部大城,以木雕市集與音樂傳統聞名。",
          en: "A major western town, known for its woodcarving market and musical traditions.",
        },
        trivia: {
          question: {
            zh: "布里卡馬以哪一種傳統工藝聞名?",
            en: "Brikama is famous for which traditional craft?",
          },
          options: [
            { zh: "木雕", en: "Woodcarving" },
            { zh: "吹製玻璃", en: "Glassblowing" },
            { zh: "絲綢織造", en: "Silk weaving" },
            { zh: "青銅鑄造", en: "Bronze casting" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "布里卡馬的木雕市集匯集眾多工匠,面具、雕像等作品是甘比亞最具代表性的手工藝品之一。",
            en: "Brikama's woodcarving market gathers many artisans whose masks and figures are among The Gambia's signature crafts.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "甘比亞是非洲大陸最小的國家,國界大致沿著甘比亞河兩岸劃定,最窄處僅數十公里寬。",
        en: "The Gambia is mainland Africa's smallest country, its borders tracing the river's banks — only a few dozen kilometers wide at its narrowest.",
      },
      {
        zh: "境內記錄過的鳥類超過 500 種,是歐洲賞鳥人最愛的近程目的地之一。",
        en: "Over 500 bird species have been recorded here, making it a favorite short-haul destination for European birdwatchers.",
      },
    ],
    climate: {
      zh: "屬熱帶莽原氣候,約 6 至 10 月為雨季,潮濕悶熱;11 月至隔年 5 月為乾季,涼爽宜人,是旅遊旺季。",
      en: "Tropical savanna climate: a humid rainy season from roughly June to October, then a dry, pleasantly cooler season from November to May — peak travel time.",
    },
    travelTips: [
      {
        zh: "乾季(11 月至 5 月)氣候最舒適,也是賞鳥與海灘度假的最佳時節。",
        en: "The dry season (November–May) is the most comfortable — prime time for birding and the beaches.",
      },
      {
        zh: "英語為官方語言,溝通方便;當地人熱情,討價還價是市集常態。",
        en: "English is the official language, making communication easy; locals are warm, and bargaining is standard in markets.",
      },
      {
        zh: "可搭船遊甘比亞河,造訪世界遺產昆塔·金特島等奴隸貿易歷史遺址。",
        en: "Take a river cruise to visit Kunta Kinteh Island and other UNESCO-listed slave-trade heritage sites.",
      },
    ],
  },
  {
    id: "GNB",
    name: { zh: "幾內亞比索", en: "Guinea-Bissau" },
    capital: { zh: "比索", en: "Bissau" },
    flag: "🇬🇼",
    region: "africa",
    center: { lat: 12.0, lng: -15.0 },
    intro: {
      zh: "西非大西洋岸的小國,前葡萄牙殖民地,以腰果出口為經濟命脈。外海的比熱戈斯群島由數十座島嶼組成,紅樹林與潟湖間棲息著罕見的海水河馬與海龜,是生態旅遊的祕境。",
      en: "A small Atlantic nation in West Africa and former Portuguese colony, with cashew exports as its economic lifeline. Offshore, the Bijagós Archipelago's dozens of islands shelter rare saltwater-swimming hippos and sea turtles among mangroves and lagoons.",
    },
    history: {
      zh: "內陸的加布地區曾是承繼馬利帝國的卡阿布王國核心,19 世紀後期葡萄牙確立殖民統治,稱葡屬幾內亞。獨立運動領袖阿米卡爾·卡布拉爾領導游擊戰爭,雖於 1973 年遇刺,同年獨立宣言發布,1974 年獲葡萄牙承認。獨立後政變與政治動盪頻繁,至今仍是世界上政局最不穩定的國家之一。",
      en: "The inland Gabú region was the heartland of the Kaabu kingdom, heir to the Mali Empire, before Portugal consolidated colonial rule as Portuguese Guinea in the late 19th century. Independence leader Amílcar Cabral waged a guerrilla war; though assassinated in 1973, independence was declared that year and recognized by Portugal in 1974. Coups and instability have recurred ever since.",
    },
    cities: [
      {
        name: { zh: "比索", en: "Bissau" },
        blurb: {
          zh: "傑巴河口的首都與最大港,葡式老城與熱鬧的嘉年華並存。",
          en: "The capital and main port on the Geba estuary, mixing Portuguese-era streets with a lively carnival.",
        },
        trivia: {
          question: {
            zh: "比索最著名的年度文化盛事是什麼?",
            en: "What is Bissau's most famous annual cultural event?",
          },
          options: [
            { zh: "嘉年華(狂歡節)", en: "Carnival" },
            { zh: "冰雕藝術節", en: "An ice-sculpture festival" },
            { zh: "國際電影節", en: "An international film festival" },
            { zh: "熱氣球節", en: "A hot-air balloon festival" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "承襲葡語世界的傳統,比索每年大齋期前舉行嘉年華,各族群以面具、遊行與音樂共襄盛舉,是全國最大慶典。",
            en: "In the Lusophone tradition, Bissau holds a pre-Lenten carnival each year — masks, parades, and music from all the country's peoples make it the biggest national celebration.",
          },
        },
      },
      {
        name: { zh: "巴法塔", en: "Bafatá" },
        blurb: {
          zh: "傑巴河畔的內陸古鎮,獨立運動領袖的故鄉。",
          en: "An old inland town on the Geba River, birthplace of the independence movement's leader.",
        },
        trivia: {
          question: {
            zh: "哪位領導幾內亞比索獨立運動的革命家出生於巴法塔?",
            en: "Which revolutionary who led Guinea-Bissau's independence movement was born in Bafatá?",
          },
          options: [
            { zh: "阿米卡爾·卡布拉爾", en: "Amílcar Cabral" },
            { zh: "克瓦米·恩克魯瑪", en: "Kwame Nkrumah" },
            { zh: "尼爾森·曼德拉", en: "Nelson Mandela" },
            { zh: "桑戈爾", en: "Léopold Senghor" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "卡布拉爾 1924 年生於巴法塔,是非洲反殖民運動的代表性思想家與領袖,1973 年於獨立前夕遇刺身亡。",
            en: "Cabral was born in Bafatá in 1924 and became one of Africa's leading anticolonial thinkers and leaders; he was assassinated in 1973, months before independence.",
          },
        },
      },
      {
        name: { zh: "加布", en: "Gabú" },
        blurb: {
          zh: "東部商業重鎮,昔日卡阿布王國的核心地帶。",
          en: "The eastern trading hub, heartland of the historic kingdom of Kaabu.",
        },
        trivia: {
          question: {
            zh: "加布地區在殖民時代之前,是哪個王國的核心?",
            en: "Before colonial times, the Gabú region was the heartland of which kingdom?",
          },
          options: [
            { zh: "卡阿布王國", en: "The kingdom of Kaabu" },
            { zh: "祖魯王國", en: "The Zulu kingdom" },
            { zh: "阿散蒂王國", en: "The Ashanti kingdom" },
            { zh: "剛果王國", en: "The Kingdom of Kongo" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "卡阿布是曼丁哥人建立的王國,原為馬利帝國的西部行省,帝國衰落後獨立稱雄數百年,直到 19 世紀被富拉人擊敗。",
            en: "Kaabu was a Mandinka kingdom, once the Mali Empire's western province, that ruled independently for centuries until its 19th-century defeat by the Fula.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "比熱戈斯群島的河馬會在海水與紅樹林潟湖間游泳覓食,相當罕見。",
        en: "Hippos in the Bijagós Archipelago swim and forage in saltwater lagoons among the mangroves — a rare sight.",
      },
      {
        zh: "腰果佔幾內亞比索出口的絕大部分,全國經濟隨國際腰果價格起伏。",
        en: "Cashews dominate Guinea-Bissau's exports, tying the whole economy to world cashew prices.",
      },
    ],
    climate: {
      zh: "屬熱帶氣候,終年溫暖,約 6 至 10 月為雨季,降雨集中且潮濕悶熱;12 月至 4 月乾季較為舒適。",
      en: "Tropical and warm year-round, with a humid June–October rainy season of concentrated downpours; the December–April dry season is more comfortable.",
    },
    travelTips: [
      {
        zh: "官方語言為葡萄牙語,克里奧爾語最通行;英語幾乎不通。",
        en: "Portuguese is official and Kriol the lingua franca; English is rarely spoken.",
      },
      {
        zh: "入境通常需要簽證與黃熱病疫苗接種證明,瘧疾防護也不可少。",
        en: "Entry usually requires a visa and yellow fever certificate; malaria precautions are essential.",
      },
      {
        zh: "前往比熱戈斯群島的船班有限且不定,行程宜預留彈性時間。",
        en: "Boats to the Bijagós Islands are limited and irregular — build slack into your itinerary.",
      },
    ],
  },
  {
    id: "GIN",
    name: { zh: "幾內亞", en: "Guinea" },
    capital: { zh: "柯那克里", en: "Conakry" },
    flag: "🇬🇳",
    region: "africa",
    center: { lat: 10.4, lng: -11.0 },
    intro: {
      zh: "被稱為「西非水塔」的多雨國度,富塔賈隆高原孕育了尼日河、塞內加爾河與甘比亞河的源頭。地下蘊藏全球最豐富的鋁土礦,音樂與舞蹈傳統在西非影響深遠。",
      en: "A rain-soaked land dubbed the 'water tower of West Africa' — the Fouta Djallon highlands cradle the sources of the Niger, Senegal, and Gambia rivers. It holds the world's largest bauxite reserves, and its music and dance traditions resonate across the region.",
    },
    history: {
      zh: "這裡曾是迦納、馬利帝國的邊陲與富塔賈隆神權國家的所在,19 世紀薩摩里·杜爾曾頑強抵抗法國擴張。1958 年戴高樂舉行公投,幾內亞是唯一投下「否」票、立即獨立的法屬殖民地,首任總統塞古·杜爾以強硬路線執政至 1984 年。其後歷經軍事政權更迭,2021 年再度發生政變,礦業經濟與政治轉型仍在拉鋸。",
      en: "Once on the fringes of the Ghana and Mali empires and home to the Fouta Djallon theocracy, the region saw Samori Touré fiercely resist French expansion in the 19th century. In de Gaulle's 1958 referendum, Guinea was the only French colony to vote 'No', gaining immediate independence under the hardline Sékou Touré, who ruled until 1984. Military regimes followed, with another coup in 2021, as mining wealth and political transition remain in tension.",
    },
    cities: [
      {
        name: { zh: "柯那克里", en: "Conakry" },
        blurb: {
          zh: "延伸入大西洋的半島首都,全國政治與商業中心。",
          en: "The capital stretched along an Atlantic peninsula, the nation's political and commercial heart.",
        },
        trivia: {
          question: {
            zh: "柯那克里的城市地形有什麼特色?",
            en: "What is distinctive about Conakry's urban geography?",
          },
          options: [
            { zh: "沿著狹長半島與島嶼發展", en: "It grew along a narrow peninsula and island" },
            { zh: "建在高原火山口內", en: "It sits inside a volcanic crater" },
            { zh: "整座城市位於內陸綠洲", en: "It lies in an inland oasis" },
            { zh: "被冰川峽灣環繞", en: "It is ringed by glacial fjords" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "柯那克里發源於通博島,再沿卡盧姆半島向內陸延伸,狹長地形讓城市交通格外擁擠。",
            en: "Conakry began on Tombo Island and spread along the Kaloum Peninsula; the narrow strip shapes — and congests — the city's traffic to this day.",
          },
        },
      },
      {
        name: { zh: "康康", en: "Kankan" },
        blurb: {
          zh: "上幾內亞的最大城市,馬林凱文化與貿易的重鎮。",
          en: "Upper Guinea's largest city, a stronghold of Malinké culture and trade.",
        },
        trivia: {
          question: {
            zh: "康康是哪個民族的文化與商業中心?",
            en: "Kankan is the cultural and commercial center of which people?",
          },
          options: [
            { zh: "馬林凱人", en: "The Malinké" },
            { zh: "祖魯人", en: "The Zulu" },
            { zh: "柏柏人", en: "The Berbers" },
            { zh: "馬賽人", en: "The Maasai" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "康康位於米洛河畔,自古是曼丁哥(馬林凱)商人網絡的樞紐,也是伊斯蘭學術與貿易中心。",
            en: "On the Milo River, Kankan has long anchored Mandinka (Malinké) trading networks and served as a center of Islamic learning and commerce.",
          },
        },
      },
      {
        name: { zh: "拉貝", en: "Labé" },
        blurb: {
          zh: "富塔賈隆高原的中心城市,涼爽多瀑布的山城。",
          en: "The main city of the Fouta Djallon highlands, cool and surrounded by waterfalls.",
        },
        trivia: {
          question: {
            zh: "拉貝所在的富塔賈隆高原,因孕育多條西非大河的源頭而有什麼稱號?",
            en: "The Fouta Djallon highlands around Labé feed the sources of several great rivers, earning what nickname?",
          },
          options: [
            { zh: "西非水塔", en: "The water tower of West Africa" },
            { zh: "非洲屋脊", en: "The roof of Africa" },
            { zh: "綠色撒哈拉", en: "The green Sahara" },
            { zh: "黃金海岸", en: "The Gold Coast" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼日河、塞內加爾河與甘比亞河都發源於富塔賈隆高原,因此這裡被稱為「西非水塔」。",
            en: "The Niger, Senegal, and Gambia rivers all rise in the Fouta Djallon, hence its title as West Africa's water tower.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "幾內亞擁有全球最大的鋁土礦蘊藏量,是世界主要的鋁土礦出口國之一。",
        en: "Guinea holds the world's largest bauxite reserves and ranks among the top exporters of the ore.",
      },
      {
        zh: "1958 年公投中,幾內亞是唯一對戴高樂的法蘭西共同體投下「否」票的殖民地,因而立即獨立。",
        en: "In the 1958 referendum, Guinea was the only colony to vote 'No' to de Gaulle's French Community — and became independent at once.",
      },
    ],
    climate: {
      zh: "屬熱帶氣候,約 5 至 10 月雨季降雨豐沛,沿海的柯那克里是世界上最多雨的首都之一;富塔賈隆高原氣候較涼爽。",
      en: "Tropical, with abundant rain from May to October — coastal Conakry ranks among the world's wettest capitals — while the Fouta Djallon highlands stay cooler.",
    },
    travelTips: [
      {
        zh: "官方語言為法語,各地另有富拉語、馬林凱語等通行語言;英語不普及。",
        en: "French is official, with Fula, Malinké, and other languages widely spoken; English is uncommon.",
      },
      {
        zh: "入境通常需要簽證與黃熱病疫苗接種證明,並做好瘧疾防護。",
        en: "Entry generally requires a visa and yellow fever certificate; take malaria precautions.",
      },
      {
        zh: "雨季道路狀況差,前往富塔賈隆山區健行建議安排乾季成行並聘請當地嚮導。",
        en: "Roads deteriorate badly in the rains — plan Fouta Djallon treks for the dry season with a local guide.",
      },
    ],
  },
  {
    id: "SLE",
    name: { zh: "獅子山", en: "Sierra Leone" },
    capital: { zh: "自由城", en: "Freetown" },
    flag: "🇸🇱",
    region: "africa",
    center: { lat: 8.5, lng: -11.8 },
    intro: {
      zh: "國名源自葡萄牙語「獅子山脈」的西非國家,首都自由城依山面海,擁有世界數一數二的天然良港。歷經內戰與伊波拉疫情的考驗後,以白沙海灘、黑猩猩保育區與克里奧文化迎向重生。",
      en: "A West African nation whose name comes from the Portuguese for 'lion mountains'. Its capital Freetown climbs green hills above one of the world's great natural harbors. After surviving civil war and Ebola, it is reemerging with white-sand beaches, chimpanzee sanctuaries, and Krio culture.",
    },
    history: {
      zh: "1462 年葡萄牙航海家佩德羅·德·辛特拉望見沿岸山巒,命名「獅子山脈」。18 世紀末英國廢奴人士在此建立自由城,安置獲釋奴隸,其後成為英國殖民地,克里奧文化於焉誕生。1961 年獨立,1991 至 2002 年內戰奪走數萬人性命並因「血鑽石」惡名遠播;2014 至 2016 年又遭伊波拉疫情重創,如今政局漸趨穩定。",
      en: "In 1462 Portuguese navigator Pedro de Sintra named the coastal peaks 'Serra Lyoa' — lion mountains. In the late 18th century British abolitionists founded Freetown as a home for freed slaves, and the colony gave rise to Krio culture. Independence came in 1961; the 1991–2002 civil war killed tens of thousands and made 'blood diamonds' infamous, and Ebola struck in 2014–16. Stability has since gradually returned.",
    },
    cities: [
      {
        name: { zh: "自由城", en: "Freetown" },
        blurb: {
          zh: "依山面海的首都,為安置獲釋奴隸而建,克里奧文化的搖籃。",
          en: "The hillside capital founded as a home for freed slaves, cradle of Krio culture.",
        },
        trivia: {
          question: {
            zh: "自由城 18 世紀末建城的初衷是什麼?",
            en: "For what purpose was Freetown founded in the late 18th century?",
          },
          options: [
            { zh: "安置獲得自由的奴隸", en: "As a settlement for freed slaves" },
            { zh: "作為黃金交易所", en: "As a gold trading exchange" },
            { zh: "作為海軍造船廠", en: "As a naval shipyard" },
            { zh: "作為流放罪犯的殖民地", en: "As a penal colony" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英國廢奴運動者於 1787 年起在此安置獲釋奴隸,1792 年來自新斯科舍的黑人移民正式建立自由城,城名即由此而來。",
            en: "British abolitionists settled freed slaves here from 1787, and Black settlers from Nova Scotia founded Freetown in 1792 — the name says it all.",
          },
        },
      },
      {
        name: { zh: "博城", en: "Bo" },
        blurb: {
          zh: "南部第一大城與全國第二大城,教育與商業中心。",
          en: "The largest city of the south and second nationwide, a center of education and commerce.",
        },
        trivia: {
          question: {
            zh: "博城在獅子山的城市規模排名中位居第幾?",
            en: "Where does Bo rank among Sierra Leone's cities by size?",
          },
          options: [
            { zh: "第二大城", en: "Second-largest city" },
            { zh: "第一大城", en: "Largest city" },
            { zh: "第五大城", en: "Fifth-largest city" },
            { zh: "最小的城市", en: "Smallest city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "博城是僅次於自由城的第二大城,殖民時期著名的博學校培養了許多政治與社會領袖。",
            en: "Bo is the second city after Freetown; the colonial-era Bo School educated many of the country's political and social leaders.",
          },
        },
      },
      {
        name: { zh: "馬克尼", en: "Makeni" },
        blurb: {
          zh: "北部最大城市,農產集散與大學城。",
          en: "The largest city of the north, an agricultural trading center and university town.",
        },
        trivia: {
          question: {
            zh: "馬克尼是獅子山哪個區域的最大城市?",
            en: "Makeni is the largest city of which part of Sierra Leone?",
          },
          options: [
            { zh: "北部", en: "The north" },
            { zh: "南部沿海", en: "The southern coast" },
            { zh: "東部鑽石區", en: "The eastern diamond fields" },
            { zh: "西部半島", en: "The western peninsula" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬克尼是北部地區的行政與商業中心,周邊農產在此集散,也是泰姆奈人的文化重鎮。",
            en: "Makeni anchors the north as its administrative and commercial hub, gathering the region's farm produce, and is a center of Temne culture.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "「獅子山」之名來自 1462 年葡萄牙航海家對沿岸山脈的命名「Serra Lyoa」。",
        en: "The name Sierra Leone descends from 'Serra Lyoa' — lion mountains — coined by a Portuguese navigator in 1462.",
      },
      {
        zh: "自由城的芙拉灣學院創立於 1827 年,是西非最早的西式高等學府之一。",
        en: "Freetown's Fourah Bay College, founded in 1827, is one of the oldest Western-style universities in West Africa.",
      },
    ],
    climate: {
      zh: "屬熱帶季風氣候,約 5 至 11 月雨季降雨極為豐沛,自由城是全球最多雨的首都之一;12 月至 4 月乾季有哈馬丹風帶來塵霾。",
      en: "Tropical monsoon climate: torrential rains from May to November make Freetown one of the wettest capitals, while the December–April dry season brings hazy Harmattan dust.",
    },
    travelTips: [
      {
        zh: "英語為官方語言,克里奧語是實際上的通用語,溝通相對容易。",
        en: "English is official and Krio the everyday lingua franca, so getting by is relatively easy.",
      },
      {
        zh: "入境需備妥黃熱病疫苗證明,並全程做好瘧疾防護。",
        en: "Carry a yellow fever certificate and keep up malaria precautions throughout your stay.",
      },
      {
        zh: "自由城半島的河流二號海灘等白沙灘水清沙白,乾季前往體驗最佳。",
        en: "The Freetown Peninsula's white-sand beaches like River Number Two are stunning — best enjoyed in the dry season.",
      },
    ],
  },
  {
    id: "LBR",
    name: { zh: "賴比瑞亞", en: "Liberia" },
    capital: { zh: "蒙羅維亞", en: "Monrovia" },
    flag: "🇱🇷",
    region: "africa",
    center: { lat: 6.4, lng: -9.4 },
    intro: {
      zh: "由獲釋美國黑奴後裔於 19 世紀建立的國家,1847 年即宣告獨立,是非洲最古老的共和國。國名意為「自由之地」,國旗酷似美國星條旗;熱帶雨林覆蓋率高,並選出了非洲第一位民選女總統。",
      en: "Founded in the 19th century by freed Black Americans and independent since 1847, Liberia is Africa's oldest republic. Its name means 'land of the free', its flag echoes the Stars and Stripes, rainforest cloaks much of the land — and it elected Africa's first female president.",
    },
    history: {
      zh: "美國殖民協會自 1822 年起將獲釋黑奴送往此地屯墾,1847 年宣布獨立建國,是非洲第一個共和國,也是少數未被歐洲列強殖民的非洲國家。美裔賴比瑞亞人長期主導政治,1980 年政變終結其統治;1989 至 2003 年兩場內戰造成約二十餘萬人死亡。2005 年瑟利夫當選總統,成為非洲首位民選女性國家元首,國家逐步走向重建。",
      en: "The American Colonization Society began settling freed slaves here in 1822; independence was declared in 1847, creating Africa's first republic — and one of the few African states never colonized by European powers. Americo-Liberians dominated politics until a 1980 coup, and two civil wars from 1989 to 2003 killed over 200,000 people. Ellen Johnson Sirleaf's 2005 election made her Africa's first elected female head of state, and rebuilding has continued since.",
    },
    cities: [
      {
        name: { zh: "蒙羅維亞", en: "Monrovia" },
        blurb: {
          zh: "大西洋岸的首都,城名紀念一位美國總統。",
          en: "The Atlantic capital, named in honor of a US president.",
        },
        trivia: {
          question: {
            zh: "蒙羅維亞的名字是為了紀念哪一位美國總統?",
            en: "Monrovia is named after which US president?",
          },
          options: [
            { zh: "詹姆斯·門羅", en: "James Monroe" },
            { zh: "喬治·華盛頓", en: "George Washington" },
            { zh: "亞伯拉罕·林肯", en: "Abraham Lincoln" },
            { zh: "湯瑪斯·傑佛遜", en: "Thomas Jefferson" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "門羅總統任內支持美國殖民協會安置獲釋黑奴的計畫,1824 年這座聚落便以他命名,是少數以美國總統命名的外國首都。",
            en: "President Monroe backed the American Colonization Society's settlement project, and in 1824 the town took his name — a rare foreign capital named for a US president.",
          },
        },
      },
      {
        name: { zh: "布坎南", en: "Buchanan" },
        blurb: {
          zh: "第三大城與重要海港,鐵礦石輸出的門戶。",
          en: "The third city and a key seaport, the outlet for iron-ore exports.",
        },
        trivia: {
          question: {
            zh: "布坎南港在賴比瑞亞經濟中主要負責輸出哪種礦產?",
            en: "The port of Buchanan primarily ships which mineral for Liberia's economy?",
          },
          options: [
            { zh: "鐵礦石", en: "Iron ore" },
            { zh: "銅礦", en: "Copper" },
            { zh: "煤炭", en: "Coal" },
            { zh: "鋰礦", en: "Lithium" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "內陸寧巴山一帶的鐵礦經鐵路運抵布坎南港出口,鐵礦石長期是賴比瑞亞最重要的出口品之一。",
            en: "Ore from the Nimba range travels by rail to Buchanan for export; iron ore has long been among Liberia's top exports.",
          },
        },
      },
      {
        name: { zh: "邦加", en: "Gbarnga" },
        blurb: {
          zh: "中部邦州的首府,內陸農業與教育中心。",
          en: "Capital of central Bong County, an inland center of farming and education.",
        },
        trivia: {
          question: {
            zh: "邦加是賴比瑞亞哪一個州的首府?",
            en: "Gbarnga is the capital of which Liberian county?",
          },
          options: [
            { zh: "邦州", en: "Bong County" },
            { zh: "蒙特塞拉多州", en: "Montserrado County" },
            { zh: "寧巴州", en: "Nimba County" },
            { zh: "大巴薩州", en: "Grand Bassa County" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "邦加位於賴比瑞亞中部的邦州,是內陸交通要衝與農業集散地,設有卡廷頓大學。",
            en: "Gbarnga anchors central Bong County as a crossroads and farm-trade town, and is home to Cuttington University.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "賴比瑞亞國旗有 11 道紅白條紋,代表 1847 年在獨立宣言上簽名的 11 位代表。",
        en: "Liberia's flag bears 11 red and white stripes for the 11 signers of its 1847 declaration of independence.",
      },
      {
        zh: "2005 年當選的瑟利夫是非洲第一位民選女性國家元首,並於 2011 年獲頒諾貝爾和平獎。",
        en: "Ellen Johnson Sirleaf, elected in 2005, was Africa's first elected female head of state and won the 2011 Nobel Peace Prize.",
      },
    ],
    climate: {
      zh: "屬熱帶氣候,終年高溫潮濕,約 5 至 10 月為雨季,蒙羅維亞是全球降雨量最高的首都之一;11 月至 4 月乾季偶有哈馬丹風。",
      en: "Tropical, hot, and humid year-round: rains fall from about May to October, making Monrovia one of the rainiest capitals, while the dry season brings occasional Harmattan winds.",
    },
    travelTips: [
      {
        zh: "英語為官方語言,溝通方便,但基礎設施仍在重建,停電與路況不佳很常見。",
        en: "English is official, easing communication, but infrastructure is still recovering — power cuts and rough roads are common.",
      },
      {
        zh: "入境需備妥黃熱病疫苗接種證明,並全程做好瘧疾防護。",
        en: "Bring a yellow fever certificate and maintain malaria precautions throughout.",
      },
      {
        zh: "雨季(5 至 10 月)降雨驚人,內陸道路常中斷,行程宜安排在乾季。",
        en: "Rainy-season downpours (May–October) often cut inland roads — plan travel for the dry season.",
      },
    ],
  },
];
