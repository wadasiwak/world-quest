import type { Country } from "../types";

// Africa: 10 countries. Content shape is LLM-generatable — see types.ts.

export const AFRICA: Country[] = [
  {
    id: "EGY",
    name: { zh: "埃及", en: "Egypt" },
    capital: { zh: "開羅", en: "Cairo" },
    flag: "🇪🇬",
    region: "africa",
    center: { lat: 26.8, lng: 30.0 },
    intro: {
      zh: "橫跨非洲東北角與西奈半島的文明古國,尼羅河縱貫全境,滋養了金字塔與神廟林立的五千年文化。蘇伊士運河連接地中海與紅海,是全球航運的咽喉要道。",
      en: "An ancient civilization spanning Africa's northeast corner and the Sinai Peninsula. The Nile runs its full length, nurturing 5,000 years of pyramids and temples, while the Suez Canal links the Mediterranean to the Red Sea as a chokepoint of global shipping.",
    },
    history: {
      zh: "約公元前 3100 年上下埃及統一,法老王朝延續近三千年,留下金字塔與象形文字。其後歷經亞歷山大征服與托勒密王朝、羅馬統治,641 年阿拉伯人帶來伊斯蘭教與阿拉伯語。19 世紀蘇伊士運河開通後受英國控制,1922 年獨立,1952 年革命廢除王室建立共和,納瑟推動阿拉伯民族主義,今日仍是阿拉伯世界人口最多的國家。",
      en: "Upper and Lower Egypt unified around 3100 BC, beginning nearly three millennia of pharaonic rule that left pyramids and hieroglyphs. Alexander's conquest brought the Ptolemies, then Rome; the Arab conquest of 641 introduced Islam and Arabic. British control followed the Suez Canal's opening; independence came in 1922, and the 1952 revolution ended the monarchy under Nasser. Egypt remains the Arab world's most populous nation.",
    },
    cities: [
      {
        name: { zh: "開羅", en: "Cairo" },
        blurb: {
          zh: "非洲最大都會區之一,伊斯蘭古城與現代市區在尼羅河畔交錯,吉薩金字塔就在城市邊緣。",
          en: "One of Africa's largest metro areas — a medieval Islamic city woven into a modern capital on the Nile, with the Giza pyramids at its edge.",
        },
        trivia: {
          question: {
            zh: "開羅近郊的吉薩大金字塔是為哪位法老所建?",
            en: "The Great Pyramid of Giza, near Cairo, was built for which pharaoh?",
          },
          options: [
            { zh: "古夫", en: "Khufu" },
            { zh: "拉美西斯二世", en: "Ramses II" },
            { zh: "圖坦卡門", en: "Tutankhamun" },
            { zh: "卡夫拉", en: "Khafre" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "大金字塔約建於公元前 2560 年,是古代世界七大奇蹟中唯一留存至今者;卡夫拉是古夫之子,建了旁邊第二大的金字塔。",
            en: "Built around 2560 BC, it is the only surviving Wonder of the Ancient World; Khafre, Khufu's son, built the second pyramid beside it.",
          },
        },
      },
      {
        name: { zh: "亞歷山卓", en: "Alexandria" },
        blurb: {
          zh: "亞歷山大大帝建立的地中海港都,古代曾以大圖書館與燈塔聞名於世。",
          en: "A Mediterranean port founded by Alexander the Great, famed in antiquity for its Great Library and lighthouse.",
        },
        trivia: {
          question: {
            zh: "古代亞歷山卓港口的哪座建築被列為古代世界七大奇蹟之一?",
            en: "Which structure in ancient Alexandria's harbor was counted among the Seven Wonders of the Ancient World?",
          },
          options: [
            { zh: "法羅斯燈塔", en: "The Lighthouse (Pharos) of Alexandria" },
            { zh: "羅德島巨像", en: "The Colossus of Rhodes" },
            { zh: "空中花園", en: "The Hanging Gardens" },
            { zh: "宙斯神像", en: "The Statue of Zeus" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法羅斯燈塔建於托勒密王朝,高度逾百公尺,後毀於地震,原址上如今是蓋特貝城堡。",
            en: "Built under the Ptolemies and over 100 m tall, the Pharos was toppled by earthquakes; the Citadel of Qaitbay now stands on its site.",
          },
        },
      },
      {
        name: { zh: "路克索", en: "Luxor" },
        blurb: {
          zh: "古都底比斯所在地,卡納克神廟與帝王谷隔尼羅河相望,被稱為「世界最大的露天博物館」。",
          en: "Ancient Thebes — Karnak Temple faces the Valley of the Kings across the Nile in 'the world's greatest open-air museum'.",
        },
        trivia: {
          question: {
            zh: "1922 年考古學家在路克索附近的帝王谷,發現了哪位法老幾乎未被盜掘的陵墓?",
            en: "In 1922, archaeologists found whose nearly intact tomb in the Valley of the Kings near Luxor?",
          },
          options: [
            { zh: "圖坦卡門", en: "Tutankhamun" },
            { zh: "拉美西斯二世", en: "Ramses II" },
            { zh: "娜芙蒂蒂", en: "Nefertiti" },
            { zh: "哈特謝普蘇特", en: "Hatshepsut" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "霍華德·卡特發現的圖坦卡門墓出土黃金面具等五千餘件文物,是埃及考古史上最轟動的發現。",
            en: "Howard Carter's discovery yielded the golden mask and over 5,000 artifacts — the most sensational find in Egyptology.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "埃及約 95% 的人口居住在僅占國土 5% 的尼羅河谷與三角洲地帶。",
        en: "About 95% of Egyptians live along the Nile valley and delta — roughly 5% of the country's land.",
      },
      {
        zh: "古埃及人發明了一年 365 天的太陽曆,是現代曆法的遠祖。",
        en: "The ancient Egyptians devised a 365-day solar calendar — a distant ancestor of the one we use today.",
      },
    ],
  },
  {
    id: "MAR",
    name: { zh: "摩洛哥", en: "Morocco" },
    capital: { zh: "拉巴特", en: "Rabat" },
    flag: "🇲🇦",
    region: "africa",
    center: { lat: 31.8, lng: -7.1 },
    intro: {
      zh: "位於非洲西北角,隔直布羅陀海峽與歐洲相望。阿特拉斯山脈與撒哈拉沙漠、大西洋與地中海在此交會,迷宮般的古城麥地那與塔吉鍋料理吸引著全球旅人。",
      en: "Perched on Africa's northwest corner, facing Europe across the Strait of Gibraltar. The Atlas Mountains meet the Sahara and the Atlantic meets the Mediterranean here, while labyrinthine medinas and tagine cuisine draw travelers from around the world.",
    },
    history: {
      zh: "柏柏爾人(阿馬齊格人)是這片土地的原住民,788 年伊德里斯王朝建立首個伊斯蘭王國,其後阿爾摩拉維與阿爾摩哈德帝國一度統治北非與伊比利半島大片土地。17 世紀阿拉維王朝建立並延續至今,是世界最古老的王室之一。1912 年淪為法國與西班牙保護國,1956 年獨立,現為君主立憲制國家,以農業、磷礦與觀光為經濟支柱。",
      en: "The Amazigh (Berber) peoples are the land's original inhabitants; the Idrisid dynasty founded its first Islamic kingdom in 788, and the Almoravid and Almohad empires later ruled swathes of North Africa and Iberia. The Alaouite dynasty, reigning since the 17th century, is among the world's oldest royal houses. A French-Spanish protectorate from 1912, Morocco regained independence in 1956 and is now a constitutional monarchy built on agriculture, phosphates, and tourism.",
    },
    cities: [
      {
        name: { zh: "拉巴特", en: "Rabat" },
        blurb: {
          zh: "大西洋岸的首都,烏達雅城堡與未完工的哈桑塔訴說王朝興衰,步調比其他大城悠閒。",
          en: "The Atlantic-coast capital — the Kasbah of the Udayas and the unfinished Hassan Tower recall past empires, at a calmer pace than its sister cities.",
        },
        trivia: {
          question: {
            zh: "拉巴特的地標「哈桑塔」是 12 世紀哪個王朝留下的未完工宣禮塔?",
            en: "Rabat's landmark Hassan Tower is an unfinished 12th-century minaret left by which dynasty?",
          },
          options: [
            { zh: "阿爾摩哈德王朝", en: "The Almohad dynasty" },
            { zh: "阿爾摩拉維王朝", en: "The Almoravid dynasty" },
            { zh: "馬林王朝", en: "The Marinid dynasty" },
            { zh: "薩阿德王朝", en: "The Saadian dynasty" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "阿爾摩哈德君主曼蘇爾 1195 年動工,原欲建成世界最大的清真寺,他去世後工程即告中斷。",
            en: "Begun in 1195 under the Almohad ruler al-Mansur as part of what was meant to be the world's largest mosque — work stopped at his death.",
          },
        },
      },
      {
        name: { zh: "馬拉喀什", en: "Marrakesh" },
        blurb: {
          zh: "沙漠邊緣的千年古城,德吉瑪廣場入夜後說書人、樂手與小吃攤齊聚,熱鬧非凡。",
          en: "A thousand-year-old city on the desert's edge — after dark, Jemaa el-Fnaa square fills with storytellers, musicians, and food stalls.",
        },
        trivia: {
          question: {
            zh: "馬拉喀什因為城中建築的色調而擁有什麼別稱?",
            en: "Marrakesh is nicknamed after the color of its buildings. What is it called?",
          },
          options: [
            { zh: "紅色之城", en: "The Red City" },
            { zh: "藍色之城", en: "The Blue City" },
            { zh: "白色之城", en: "The White City" },
            { zh: "金色之城", en: "The Golden City" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "老城以紅色砂岩與赭紅泥灰建成,整座城呈現溫暖的紅褐色;「藍色之城」指的是北部山城蕭安。",
            en: "Its old town glows with red sandstone and ochre plaster; the 'Blue City' is Chefchaouen in the north.",
          },
        },
      },
      {
        name: { zh: "非斯", en: "Fes" },
        blurb: {
          zh: "摩洛哥的精神與學術古都,老城巷弄如迷宮,傳統皮革染坊的景觀舉世聞名。",
          en: "Morocco's spiritual and scholarly capital — a labyrinthine medina famous for its centuries-old leather tanneries.",
        },
        trivia: {
          question: {
            zh: "非斯的卡拉維因大學創立於 859 年,常被認定為世界上最古老的什麼?",
            en: "Founded in 859, al-Qarawiyyin in Fes is often cited as the world's oldest what?",
          },
          options: [
            { zh: "持續運作至今的大學", en: "Continuously operating university" },
            { zh: "清真寺", en: "Mosque" },
            { zh: "公共醫院", en: "Public hospital" },
            { zh: "天文台", en: "Observatory" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "由女性創辦人法蒂瑪·菲赫利建立,金氏世界紀錄認證為現存最古老、持續辦學的高等教育機構。",
            en: "Founded by a woman, Fatima al-Fihri, it holds the Guinness record as the oldest existing, continually operating institution of higher learning.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "摩洛哥與歐洲最近處只隔約 14 公里寬的直布羅陀海峽。",
        en: "At its narrowest, only about 14 km of the Strait of Gibraltar separates Morocco from Europe.",
      },
      {
        zh: "摩洛哥堅果油(阿甘油)幾乎只產於此地,當地山羊還會爬上堅果樹覓食。",
        en: "Argan oil comes almost exclusively from Morocco — where goats famously climb argan trees to feed on the fruit.",
      },
    ],
  },
  {
    id: "ZAF",
    name: { zh: "南非", en: "South Africa" },
    capital: { zh: "普利托利亞", en: "Pretoria" },
    flag: "🇿🇦",
    region: "africa",
    center: { lat: -29.0, lng: 24.7 },
    intro: {
      zh: "非洲大陸最南端的「彩虹之國」,從開普敦的桌山、花園大道到克魯格國家公園的五大獸,自然景觀豐富多元。礦業與金融業發達,是非洲工業化程度最高的經濟體之一。",
      en: "The 'Rainbow Nation' at Africa's southern tip — from Table Mountain and the Garden Route to the Big Five of Kruger National Park. Rich in mining and finance, it is one of Africa's most industrialized economies.",
    },
    history: {
      zh: "科伊桑人與班圖民族世居此地,1652 年荷蘭東印度公司在開普建立補給站,其後英國奪取開普殖民地,與布爾人(荷裔移民)爆發兩次戰爭。1910 年成立南非聯邦,1948 年起實施種族隔離制度,曼德拉入獄 27 年成為反抗的象徵。1990 年代種族隔離瓦解,1994 年舉行首次不分種族大選,曼德拉當選總統,和平轉型成為民主典範。",
      en: "Home to Khoisan and Bantu peoples for millennia, the Cape became a Dutch East India Company outpost in 1652; Britain later seized it and fought two wars against the Boers. The Union of South Africa formed in 1910, and apartheid began in 1948 — Nelson Mandela's 27 years in prison made him its defining opponent. Apartheid collapsed in the early 1990s, and the 1994 all-race election that made Mandela president became a model of peaceful transition.",
    },
    cities: [
      {
        name: { zh: "普利托利亞", en: "Pretoria" },
        blurb: {
          zh: "行政首都,總統府所在的聯合大廈俯瞰市區;每年春天全城花樹盛開,染成一片紫色。",
          en: "The administrative capital, home to the presidential Union Buildings — each spring the whole city turns purple with blossoms.",
        },
        trivia: {
          question: {
            zh: "普利托利亞因春天滿城盛開的哪種花樹而被稱為「紫色之城」?",
            en: "Pretoria is called the purple city thanks to which flowering tree that blankets it every spring?",
          },
          options: [
            { zh: "藍花楹", en: "Jacaranda" },
            { zh: "鳳凰木", en: "Flame tree" },
            { zh: "紫藤", en: "Wisteria" },
            { zh: "櫻花", en: "Cherry blossom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "市區種有數萬株藍花楹,每年十月前後盛開,「藍花楹之城」是普利托利亞最著名的別稱。",
            en: "Tens of thousands of jacarandas bloom around October, earning Pretoria the nickname 'Jacaranda City'.",
          },
        },
      },
      {
        name: { zh: "開普敦", en: "Cape Town" },
        blurb: {
          zh: "立法首都與南非最古老的城市,坐落於桌灣之濱,是酒鄉與好望角之旅的起點。",
          en: "The legislative capital and South Africa's oldest city, set on Table Bay — gateway to the winelands and the Cape of Good Hope.",
        },
        trivia: {
          question: {
            zh: "俯瞰開普敦市區、以平坦山頂聞名的地標山峰叫什麼?",
            en: "Which famously flat-topped mountain looms over central Cape Town?",
          },
          options: [
            { zh: "桌山", en: "Table Mountain" },
            { zh: "獅頭山", en: "Lion's Head" },
            { zh: "魔鬼峰", en: "Devil's Peak" },
            { zh: "信號山", en: "Signal Hill" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "桌山山頂平坦如桌面,雲霧罩頂時被稱為「鋪上桌巾」;獅頭山、魔鬼峰與信號山都是它旁邊的山峰。",
            en: "Its summit is flat as a tabletop — clouds spilling over it are called the 'tablecloth'. Lion's Head, Devil's Peak, and Signal Hill are its neighbors.",
          },
        },
      },
      {
        name: { zh: "約翰尼斯堡", en: "Johannesburg" },
        blurb: {
          zh: "南非最大城市與經濟引擎,因淘金熱而誕生;索維托區見證了反種族隔離的抗爭歲月。",
          en: "South Africa's largest city and economic engine, born of a gold rush; its Soweto township was a crucible of the anti-apartheid struggle.",
        },
        trivia: {
          question: {
            zh: "約翰尼斯堡在 1886 年因為發現什麼而迅速崛起建城?",
            en: "Johannesburg boomed into existence after the 1886 discovery of what?",
          },
          options: [
            { zh: "金礦", en: "Gold" },
            { zh: "鑽石", en: "Diamonds" },
            { zh: "白金", en: "Platinum" },
            { zh: "煤礦", en: "Coal" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "維特瓦特斯蘭德金脈是史上最富的金礦區之一,約翰尼斯堡因此暴起;鑽石熱則屬於更早的慶伯利。",
            en: "The Witwatersrand reef was one of the richest goldfields ever found; the diamond rush belonged to earlier Kimberley.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "南非有三個首都:行政首都普利托利亞、立法首都開普敦、司法首都布隆泉。",
        en: "South Africa has three capitals: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial).",
      },
      {
        zh: "南非有 12 種官方語言,2023 年將南非手語列為第 12 種。",
        en: "South Africa recognizes 12 official languages — South African Sign Language became the 12th in 2023.",
      },
    ],
  },
  {
    id: "KEN",
    name: { zh: "肯亞", en: "Kenya" },
    capital: { zh: "奈洛比", en: "Nairobi" },
    flag: "🇰🇪",
    region: "africa",
    center: { lat: 0.2, lng: 37.9 },
    intro: {
      zh: "赤道橫貫的東非國家,以馬賽馬拉的動物大遷徙與長跑名將聞名全球。東非大裂谷縱貫西部,印度洋岸有斯瓦希里文化古城,奈洛比則是東非的商業與科技樞紐。",
      en: "An East African nation straddling the equator, world-famous for the Maasai Mara's great migration and its long-distance runners. The Great Rift Valley cuts through its west, Swahili port towns dot the Indian Ocean coast, and Nairobi anchors the region's business and tech scene.",
    },
    history: {
      zh: "肯亞是人類重要的發源地之一,裂谷地區出土大量早期人類化石。沿海斯瓦希里城邦自中世紀起與阿拉伯、波斯及印度商人貿易,其後葡萄牙與阿曼相繼控制海岸。1895 年成為英國東非保護地,殖民者修築鐵路並圈占高地農場,1950 年代茅茅起義動搖殖民統治,1963 年獨立,肯亞塔出任首任總統,今日是東非最大經濟體。",
      en: "Kenya is one of humanity's cradles — its Rift Valley has yielded a wealth of early hominid fossils. Swahili city-states traded with Arab, Persian, and Indian merchants from medieval times, before Portuguese and then Omani control of the coast. A British protectorate from 1895, with railways and settler farms in the highlands, it saw the Mau Mau uprising shake colonial rule in the 1950s. Independence came in 1963 under Jomo Kenyatta, and Kenya is now East Africa's largest economy.",
    },
    cities: [
      {
        name: { zh: "奈洛比", en: "Nairobi" },
        blurb: {
          zh: "東非門戶都會,市區旁就是能看到獅子與長頸鹿的國家公園,也是聯合國環境規劃署所在地。",
          en: "East Africa's gateway metropolis — a national park with lions and giraffes borders the city, which also hosts the UN Environment Programme.",
        },
        trivia: {
          question: {
            zh: "「奈洛比」這個地名源自馬賽語,原意是什麼?",
            en: "The name 'Nairobi' comes from a Maasai phrase meaning what?",
          },
          options: [
            { zh: "清涼之水的地方", en: "Place of cool waters" },
            { zh: "獅子之地", en: "Place of lions" },
            { zh: "紅色大地", en: "Red earth" },
            { zh: "風的交會處", en: "Meeting of the winds" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬賽語 Enkare Nyirobi 意為「清涼之水的地方」,指流經此地的奈洛比河;城市則因 1899 年鐵路補給站而興起。",
            en: "Enkare Nyirobi — 'place of cool waters' — referred to the Nairobi River; the city grew from an 1899 railway depot.",
          },
        },
      },
      {
        name: { zh: "蒙巴薩", en: "Mombasa" },
        blurb: {
          zh: "印度洋岸的千年港都,斯瓦希里、阿拉伯與葡萄牙文化層層堆疊,是肯亞第二大城。",
          en: "A thousand-year-old Indian Ocean port and Kenya's second city, layered with Swahili, Arab, and Portuguese history.",
        },
        trivia: {
          question: {
            zh: "蒙巴薩的地標「耶穌堡」建於 1593 年,是由哪個歐洲國家所建?",
            en: "Fort Jesus, Mombasa's landmark built in 1593, was constructed by which European power?",
          },
          options: [
            { zh: "葡萄牙", en: "Portugal" },
            { zh: "英國", en: "Britain" },
            { zh: "荷蘭", en: "The Netherlands" },
            { zh: "西班牙", en: "Spain" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "葡萄牙人為控制印度洋航線而建,後來被阿曼人攻占,如今是世界文化遺產。",
            en: "Portugal built it to control Indian Ocean trade routes; Omani forces later seized it, and it is now a World Heritage site.",
          },
        },
      },
      {
        name: { zh: "基蘇木", en: "Kisumu" },
        blurb: {
          zh: "肯亞西部大城,坐落於維多利亞湖畔,是湖區貿易與盧歐族文化的中心。",
          en: "Western Kenya's main city on the shores of Lake Victoria, a hub of lake trade and Luo culture.",
        },
        trivia: {
          question: {
            zh: "基蘇木臨著哪座非洲面積最大的湖泊?",
            en: "Kisumu sits on the shore of which lake, the largest in Africa by area?",
          },
          options: [
            { zh: "維多利亞湖", en: "Lake Victoria" },
            { zh: "坦干依喀湖", en: "Lake Tanganyika" },
            { zh: "馬拉威湖", en: "Lake Malawi" },
            { zh: "圖爾卡納湖", en: "Lake Turkana" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "維多利亞湖面積近 6.9 萬平方公里,由肯亞、烏干達與坦尚尼亞三國共享,也是世界最大的熱帶湖泊。",
            en: "At nearly 69,000 km², Lake Victoria is shared by Kenya, Uganda, and Tanzania — the world's largest tropical lake.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "肯亞 2007 年推出的 M-Pesa 是行動支付的先驅,比多數先進國家的行動錢包都早。",
        en: "Kenya's M-Pesa, launched in 2007, pioneered mobile money years before most developed countries had mobile wallets.",
      },
      {
        zh: "肯亞裂谷地區的卡倫金族跑者,長年稱霸世界馬拉松賽場。",
        en: "Kalenjin runners from Kenya's Rift Valley have dominated world marathon racing for decades.",
      },
    ],
  },
  {
    id: "NGA",
    name: { zh: "奈及利亞", en: "Nigeria" },
    capital: { zh: "阿布加", en: "Abuja" },
    flag: "🇳🇬",
    region: "africa",
    center: { lat: 9.1, lng: 8.7 },
    intro: {
      zh: "非洲人口最多的國家,超過兩億人、二百五十多個民族。石油產量居非洲前列,「諾萊塢」電影與非洲節拍音樂席捲全球,拉哥斯是撒哈拉以南最具活力的商業大城之一。",
      en: "Africa's most populous country — over 200 million people from more than 250 ethnic groups. A leading oil producer, it exports Nollywood films and Afrobeats worldwide, and Lagos ranks among sub-Saharan Africa's most dynamic commercial hubs.",
    },
    history: {
      zh: "諾克文化早在兩千多年前就發展出精湛的陶塑,其後北部豪薩城邦、西南部約魯巴諸王國與貝南王國各領風騷,貝南青銅器工藝名震四方。英國在 1914 年將南北保護地合併為奈及利亞殖民地,1960 年獨立,1967 至 70 年比亞法拉內戰造成重大傷亡,其後軍事政變頻仍,1999 年恢復民主,現為非洲最大經濟體之一。",
      en: "The Nok culture produced masterful terracottas over 2,000 years ago; later, Hausa city-states in the north, Yoruba kingdoms in the southwest, and the Kingdom of Benin — famed for its bronzes — each flourished. Britain amalgamated its northern and southern protectorates into Nigeria in 1914. Independence came in 1960, followed by the devastating Biafran War of 1967–70 and repeated coups; democracy returned in 1999, and Nigeria is now one of Africa's largest economies.",
    },
    cities: [
      {
        name: { zh: "阿布加", en: "Abuja" },
        blurb: {
          zh: "位於國土地理中心的計畫城市首都,巨大的阿蘇岩單體岩石俯瞰全城。",
          en: "A planned capital at the country's geographic center, watched over by the monolithic Aso Rock.",
        },
        trivia: {
          question: {
            zh: "1991 年阿布加成為奈及利亞首都,取代了哪座城市?",
            en: "In 1991 Abuja became Nigeria's capital, replacing which city?",
          },
          options: [
            { zh: "拉哥斯", en: "Lagos" },
            { zh: "卡諾", en: "Kano" },
            { zh: "伊巴丹", en: "Ibadan" },
            { zh: "哈科特港", en: "Port Harcourt" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "拉哥斯過度擁擠且偏處西南沿海,政府因此在內陸中心新建阿布加,以求地理與族群間的平衡。",
            en: "Lagos was overcrowded and tucked into the coastal southwest, so a new inland capital was built for geographic and ethnic balance.",
          },
        },
      },
      {
        name: { zh: "拉哥斯", en: "Lagos" },
        blurb: {
          zh: "前首都與非洲最大城市之一,橫跨潟湖與島嶼,是金融、科技新創與流行音樂的重鎮。",
          en: "The former capital and one of Africa's largest cities, sprawled across lagoons and islands — a powerhouse of finance, startups, and music.",
        },
        trivia: {
          question: {
            zh: "以拉哥斯為大本營的奈及利亞電影產業「諾萊塢」,年產量在全球處於什麼地位?",
            en: "Nollywood, Nigeria's film industry centered on Lagos, ranks where in global movie output?",
          },
          options: [
            {
              zh: "超越好萊塢,僅次於印度",
              en: "It out-produces Hollywood, second only to India",
            },
            { zh: "約為好萊塢的十分之一", en: "About a tenth of Hollywood's output" },
            { zh: "以紀錄片為主,劇情片極少", en: "Mostly documentaries, few features" },
            { zh: "尚未形成規模化產業", en: "Not yet an industry of scale" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "諾萊塢每年產出上千部電影,以數量計居全球第二,只有印度電影業超過它。",
            en: "Nollywood turns out well over a thousand films a year — second by volume worldwide, behind only India.",
          },
        },
      },
      {
        name: { zh: "卡諾", en: "Kano" },
        blurb: {
          zh: "北部千年古城與豪薩文化中心,以傳統靛藍染坑與古城牆聞名。",
          en: "A thousand-year-old northern city and heart of Hausa culture, known for its indigo dye pits and ancient walls.",
        },
        trivia: {
          question: {
            zh: "歷史上卡諾因位居哪條貿易路線的樞紐而繁榮數百年?",
            en: "Historically, Kano prospered for centuries as a hub on which trade route?",
          },
          options: [
            { zh: "跨撒哈拉商路", en: "The trans-Saharan trade routes" },
            { zh: "絲路", en: "The Silk Road" },
            { zh: "海上香料之路", en: "The maritime spice route" },
            { zh: "琥珀之路", en: "The Amber Road" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "駱駝商隊載著布匹、皮革、鹽與黃金往返撒哈拉,卡諾的織染業與市集因此興盛,古老染坑至今仍在運作。",
            en: "Camel caravans carried cloth, leather, salt, and gold across the Sahara; Kano's dyeing trade and markets thrived, and some ancient dye pits still operate today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "奈及利亞境內使用的語言超過 500 種,是世界語言最多元的國家之一。",
        en: "More than 500 languages are spoken in Nigeria — among the most linguistically diverse countries on Earth.",
      },
    ],
  },
  {
    id: "ETH",
    name: { zh: "衣索比亞", en: "Ethiopia" },
    capital: { zh: "阿迪斯阿貝巴", en: "Addis Ababa" },
    flag: "🇪🇹",
    region: "africa",
    center: { lat: 9.1, lng: 40.5 },
    intro: {
      zh: "東非高原上的內陸古國,人口居非洲第二。這裡是咖啡的原鄉、藍尼羅河的源頭,也擁有自己的曆法與文字。拉利貝拉岩石教堂與千年基督教傳統獨樹一幟。",
      en: "An ancient highland nation in the Horn of Africa with the continent's second-largest population. The birthplace of coffee and source of the Blue Nile, it keeps its own calendar and script, with the rock churches of Lalibela crowning a Christian tradition well over a millennium old.",
    },
    history: {
      zh: "阿克蘇姆王國在公元初期是紅海貿易強權,4 世紀便以基督教為國教,是世界最早的基督教國家之一。中世紀後所羅門王朝延續數百年,1896 年阿多瓦戰役擊敗義大利入侵,成為非洲少數未被殖民的國家。末代皇帝海爾·塞拉西 1974 年被軍事政權推翻,歷經內戰與饑荒,1991 年後改行聯邦制,近年經濟快速成長但族群矛盾仍待化解。",
      en: "The Aksumite kingdom was a Red Sea trading power in the early centuries AD and adopted Christianity as its state religion in the 4th century — among the world's first. The Solomonic dynasty ruled for centuries thereafter, and the 1896 victory at Adwa over invading Italy kept Ethiopia uncolonized, a rarity in Africa. Emperor Haile Selassie fell to a military junta in 1974; after civil war and famine, a federal system emerged in 1991, and rapid growth now coexists with unresolved ethnic tensions.",
    },
    cities: [
      {
        name: { zh: "阿迪斯阿貝巴", en: "Addis Ababa" },
        blurb: {
          zh: "海拔約 2,355 公尺的高原首都,名字意為「新的花朵」,常被稱為非洲的外交之都。",
          en: "A highland capital at about 2,355 m whose name means 'new flower' — often called Africa's diplomatic capital.",
        },
        trivia: {
          question: {
            zh: "哪個泛非洲國際組織的總部設在阿迪斯阿貝巴?",
            en: "Which pan-African organization has its headquarters in Addis Ababa?",
          },
          options: [
            { zh: "非洲聯盟", en: "The African Union" },
            { zh: "東非共同體", en: "The East African Community" },
            { zh: "阿拉伯聯盟", en: "The Arab League" },
            { zh: "聯合國環境規劃署", en: "The UN Environment Programme" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "非洲聯盟總部自其前身「非洲統一組織」1963 年成立起就設在此地,因此阿迪斯阿貝巴常被稱為非洲的政治首都。",
            en: "The AU and its predecessor, the Organisation of African Unity (founded 1963), have always been based here — hence the city's 'political capital of Africa' label.",
          },
        },
      },
      {
        name: { zh: "拉利貝拉", en: "Lalibela" },
        blurb: {
          zh: "北部山區聖城,以 11 座中世紀岩石教堂聞名,至今仍是重要的朝聖地。",
          en: "A holy town in the northern highlands, famed for its 11 medieval rock-hewn churches and still a major pilgrimage site.",
        },
        trivia: {
          question: {
            zh: "拉利貝拉的中世紀教堂群最特別之處是什麼?",
            en: "What makes Lalibela's medieval churches so extraordinary?",
          },
          options: [
            {
              zh: "整座教堂由岩盤向下鑿刻而成",
              en: "Each was carved downward out of solid rock",
            },
            { zh: "全部以黃金打造屋頂", en: "Their roofs are made of gold" },
            { zh: "建在懸崖峭壁的洞穴中", en: "They are built inside cliff caves" },
            { zh: "以進口大理石砌成", en: "They were built from imported marble" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "工匠自火山岩地表垂直向下開鑿,把整塊岩石雕成教堂,其中十字形的聖喬治教堂最為著名。",
            en: "Masons cut straight down into volcanic rock, sculpting entire churches from single blocks — the cross-shaped Church of St. George is the most famous.",
          },
        },
      },
      {
        name: { zh: "阿克蘇姆", en: "Aksum" },
        blurb: {
          zh: "古阿克蘇姆帝國的都城,巨型石碑林立,是衣索比亞正教會的聖地。",
          en: "Capital of the ancient Aksumite empire, dotted with giant stelae and sacred to the Ethiopian Orthodox Church.",
        },
        trivia: {
          question: {
            zh: "阿克蘇姆的錫安聖母瑪利亞教堂宣稱保存著哪件聖經中的聖物?",
            en: "The Church of Our Lady Mary of Zion in Aksum claims to house which biblical relic?",
          },
          options: [
            { zh: "約櫃", en: "The Ark of the Covenant" },
            { zh: "聖杯", en: "The Holy Grail" },
            { zh: "摩西的杖", en: "The Staff of Moses" },
            { zh: "死海古卷", en: "The Dead Sea Scrolls" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "衣索比亞正教會相信約櫃由所羅門王與示巴女王之子帶回,由一位終身不得離開的守護修士看管,外人一律不得觀看。",
            en: "Ethiopian Orthodox tradition holds that the Ark was brought here by the son of Solomon and the Queen of Sheba; a single guardian monk tends it, and no one else may see it.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "衣索比亞曆一年有 13 個月,比公曆晚約 7 到 8 年,新年在 9 月。",
        en: "The Ethiopian calendar has 13 months and runs about 7–8 years behind the Gregorian one, with New Year in September.",
      },
      {
        zh: "咖啡的原生地就在衣索比亞,傳說是牧羊人發現羊吃了咖啡果後異常興奮。",
        en: "Coffee originated in Ethiopia — legend says a goatherd noticed his goats frisking about after eating the berries.",
      },
    ],
  },
  {
    id: "TZA",
    name: { zh: "坦尚尼亞", en: "Tanzania" },
    capital: { zh: "杜篤瑪", en: "Dodoma" },
    flag: "🇹🇿",
    region: "africa",
    center: { lat: -6.4, lng: 34.9 },
    intro: {
      zh: "東非觀光大國,擁有非洲最高峰吉力馬札羅山、塞倫蓋提草原的動物大遷徙,以及香料群島尚吉巴的白沙海灘。斯瓦希里語是國語,也是東非通行最廣的語言。",
      en: "East Africa's safari heavyweight — home to Kilimanjaro, Africa's highest peak, the Serengeti's great migration, and the spice-island beaches of Zanzibar. Swahili, its national language, is East Africa's great lingua franca.",
    },
    history: {
      zh: "奧杜瓦伊峽谷出土的化石讓這裡被稱為「人類的搖籃」之一。沿海與尚吉巴自中世紀起是斯瓦希里與阿拉伯商人的貿易重鎮,19 世紀成為德屬東非,一戰後改由英國託管。坦干伊喀 1961 年獨立,1964 年與尚吉巴合併成坦尚尼亞,國父尼雷爾推動社會主義烏賈馬政策並奠定國家團結,今日以觀光、農業與礦業為經濟支柱。",
      en: "Fossils from Olduvai Gorge make Tanzania one of the cradles of humankind. The coast and Zanzibar were hubs of Swahili-Arab trade from medieval times, before German East Africa and then British mandate rule. Tanganyika gained independence in 1961 and merged with Zanzibar in 1964 to form Tanzania; founding father Julius Nyerere's ujamaa socialism forged a strong national identity. Tourism, farming, and mining anchor today's economy.",
    },
    cities: [
      {
        name: { zh: "杜篤瑪", en: "Dodoma" },
        blurb: {
          zh: "位居國土中央的首都,國會所在地,周圍是坦尚尼亞新興的葡萄酒產區。",
          en: "The centrally located capital and seat of parliament, surrounded by Tanzania's up-and-coming wine country.",
        },
        trivia: {
          question: {
            zh: "1974 年坦尚尼亞決定遷都杜篤瑪,取代了哪座沿海大城的首都地位?",
            en: "In 1974 Tanzania designated Dodoma as its capital, taking over from which coastal city?",
          },
          options: [
            { zh: "三蘭港", en: "Dar es Salaam" },
            { zh: "阿魯沙", en: "Arusha" },
            { zh: "姆萬扎", en: "Mwanza" },
            { zh: "坦加", en: "Tanga" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "政府看中杜篤瑪位居國土中心,決定遷都以平衡發展;不過搬遷歷時數十年,三蘭港至今仍是最大城市與商業中心。",
            en: "Dodoma's central location promised more balanced development, but the move took decades — Dar es Salaam remains the largest city and commercial hub.",
          },
        },
      },
      {
        name: { zh: "三蘭港", en: "Dar es Salaam" },
        blurb: {
          zh: "印度洋岸的最大城市與主要港口,是全國的商業與文化心臟。",
          en: "The largest city and main port on the Indian Ocean — the country's commercial and cultural heart.",
        },
        trivia: {
          question: {
            zh: "「三蘭港」的原名 Dar es Salaam 在阿拉伯語中是什麼意思?",
            en: "What does the Arabic name 'Dar es Salaam' mean?",
          },
          options: [
            { zh: "和平之家", en: "Abode of peace" },
            { zh: "香料之城", en: "City of spices" },
            { zh: "獅子之港", en: "Harbor of lions" },
            { zh: "白色海岸", en: "The white coast" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "19 世紀尚吉巴蘇丹在此建港,取名「和平之家」,期許它成為安寧的避風港。",
            en: "The Sultan of Zanzibar founded the harbor town in the 19th century, naming it 'abode of peace'.",
          },
        },
      },
      {
        name: { zh: "尚吉巴市", en: "Zanzibar City" },
        blurb: {
          zh: "香料群島的首府,石頭城的老街融合斯瓦希里、阿拉伯、波斯與印度風情,名列世界遺產。",
          en: "Capital of the spice islands — its World Heritage Stone Town blends Swahili, Arab, Persian, and Indian influences.",
        },
        trivia: {
          question: {
            zh: "1896 年的英國–尚吉巴戰爭以什麼紀錄載入史冊?",
            en: "The Anglo-Zanzibar War of 1896 holds what place in the record books?",
          },
          options: [
            { zh: "史上最短的戰爭", en: "The shortest war in history" },
            { zh: "史上第一場海空聯合作戰", en: "The first combined sea-air battle" },
            { zh: "非洲最後一場帆船海戰", en: "Africa's last battle under sail" },
            { zh: "最早有電影紀錄的戰爭", en: "The first war captured on film" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英國艦隊砲轟蘇丹宮殿,戰事僅持續約 40 分鐘便告結束,一般公認是史上最短的戰爭。",
            en: "British warships shelled the Sultan's palace and it was all over in roughly 40 minutes — generally counted as history's shortest war.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "吉力馬札羅山高 5,895 公尺,是非洲最高峰,也是世界最高的獨立山體。",
        en: "At 5,895 m, Kilimanjaro is Africa's highest peak and the world's tallest free-standing mountain.",
      },
      {
        zh: "皇后合唱團主唱佛萊迪·墨裘瑞 1946 年出生於尚吉巴的石頭城。",
        en: "Queen frontman Freddie Mercury was born in Zanzibar's Stone Town in 1946.",
      },
    ],
  },
  {
    id: "GHA",
    name: { zh: "迦納", en: "Ghana" },
    capital: { zh: "阿克拉", en: "Accra" },
    flag: "🇬🇭",
    region: "africa",
    center: { lat: 7.9, lng: -1.2 },
    intro: {
      zh: "西非幾內亞灣畔的國家,舊稱「黃金海岸」,黃金與可可至今仍是出口主力。政局穩定、民主成熟,加上熱情的高擊音樂與繽紛的肯特織布,使它成為西非的門面之一。",
      en: "A Gulf of Guinea nation once called the Gold Coast — gold and cocoa still lead its exports. Stable politics, a mature democracy, highlife music, and vibrant kente cloth make it one of West Africa's standout nations.",
    },
    history: {
      zh: "國名取自中世紀強盛的迦納帝國,雖然該帝國其實位於今日更西北方。內陸的阿散蒂王國以黃金與精緻工藝稱雄數百年,沿海則自 15 世紀起被葡、荷、英等國設立城堡,淪為大西洋奴隸貿易的重要據點。1957 年在恩克魯瑪領導下獨立,是撒哈拉以南非洲第一個脫離殖民統治的國家,歷經數次政變後,自 1992 年起維持穩定的民主體制。",
      en: "The country takes its name from the medieval Ghana Empire, which actually lay to its northwest. Inland, the Ashanti kingdom grew rich on gold and craftsmanship, while from the 15th century European powers built coastal forts that became hubs of the Atlantic slave trade. Under Kwame Nkrumah, Ghana became the first sub-Saharan colony to win independence in 1957; after several coups, it has sustained a stable democracy since 1992.",
    },
    cities: [
      {
        name: { zh: "阿克拉", en: "Accra" },
        blurb: {
          zh: "幾內亞灣畔的首都,獨立廣場的黑星拱門見證了非洲去殖民化浪潮的起點。",
          en: "The capital on the Gulf of Guinea — Black Star Square and Independence Arch mark where Africa's decolonization wave began.",
        },
        trivia: {
          question: {
            zh: "1957 年在阿克拉宣布迦納獨立、後來成為首任總統的領袖是誰?",
            en: "Who proclaimed Ghana's independence in Accra in 1957 and became its first president?",
          },
          options: [
            { zh: "夸梅·恩克魯瑪", en: "Kwame Nkrumah" },
            { zh: "喬莫·肯亞塔", en: "Jomo Kenyatta" },
            { zh: "朱利葉斯·尼雷爾", en: "Julius Nyerere" },
            { zh: "納爾遜·曼德拉", en: "Nelson Mandela" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "恩克魯瑪是泛非主義的代表人物,迦納獨立激勵了整個非洲的去殖民運動;肯亞塔與尼雷爾分別是肯亞與坦尚尼亞的開國領袖。",
            en: "A leading pan-Africanist, Nkrumah inspired decolonization across the continent; Kenyatta and Nyerere were the founding leaders of Kenya and Tanzania.",
          },
        },
      },
      {
        name: { zh: "庫馬西", en: "Kumasi" },
        blurb: {
          zh: "阿散蒂王國的古都,王宮與大市集延續著繁盛的傳統文化,被稱為「花園城市」。",
          en: "Historic capital of the Ashanti kingdom — its royal palace and vast central market keep a proud culture alive in the 'Garden City'.",
        },
        trivia: {
          question: {
            zh: "庫馬西曾是哪個以「黃金凳」為王權象徵的西非王國的都城?",
            en: "Kumasi was the capital of which West African kingdom, whose royal symbol is the Golden Stool?",
          },
          options: [
            { zh: "阿散蒂王國", en: "The Ashanti kingdom" },
            { zh: "達荷美王國", en: "The Kingdom of Dahomey" },
            { zh: "馬利帝國", en: "The Mali Empire" },
            { zh: "桑海帝國", en: "The Songhai Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "傳說黃金凳自天而降,象徵阿散蒂民族的靈魂,從不許任何人坐上;阿散蒂王室傳承至今仍駐於庫馬西。",
            en: "Legend says the Golden Stool descended from the sky bearing the soul of the Ashanti nation — no one may ever sit on it. The Ashanti royal line still resides in Kumasi.",
          },
        },
      },
      {
        name: { zh: "海岸角", en: "Cape Coast" },
        blurb: {
          zh: "殖民時期黃金海岸的舊都,城堡矗立海濱,是回顧大西洋奴隸貿易歷史的重要場域。",
          en: "The old capital of the colonial Gold Coast, its seaside castle a solemn memorial to a dark chapter of history.",
        },
        trivia: {
          question: {
            zh: "海岸角城堡的「不歸門」見證了哪段歷史?",
            en: "The 'Door of No Return' at Cape Coast Castle bears witness to which chapter of history?",
          },
          options: [
            { zh: "跨大西洋奴隸貿易", en: "The transatlantic slave trade" },
            { zh: "黃金出口貿易", en: "The gold export trade" },
            { zh: "傳教士登陸非洲", en: "The arrival of missionaries" },
            { zh: "二戰海軍基地歲月", en: "Its time as a WWII naval base" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "被擄的非洲人從這道門走向販奴船,從此再也無法回到故土;城堡現為世界遺產,歐巴馬夫婦 2009 年曾到訪。",
            en: "Enslaved Africans passed through this door onto slave ships, never to return. The castle is now a World Heritage site, visited by the Obamas in 2009.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "迦納的沃爾特湖是世界表面積最大的水庫之一,面積約 8,500 平方公里。",
        en: "Ghana's Lake Volta, at about 8,500 km², is one of the largest reservoirs on Earth by surface area.",
      },
      {
        zh: "迦納是世界第二大可可生產國,巧克力產業離不開它。",
        en: "Ghana is the world's second-largest cocoa producer — the chocolate industry depends on it.",
      },
    ],
  },
  {
    id: "TUN",
    name: { zh: "突尼西亞", en: "Tunisia" },
    capital: { zh: "突尼斯", en: "Tunis" },
    flag: "🇹🇳",
    region: "africa",
    center: { lat: 34.1, lng: 9.6 },
    intro: {
      zh: "北非最小的國家,卻濃縮了地中海海灘、羅馬遺跡與撒哈拉沙漠。古迦太基的故土、阿拉伯之春的發源地,藍白小鎮西迪布薩伊德是明信片上的常客。",
      en: "North Africa's smallest country packs in Mediterranean beaches, Roman ruins, and the Sahara. Heir to ancient Carthage and birthplace of the Arab Spring, its blue-and-white village of Sidi Bou Said is a postcard favorite.",
    },
    history: {
      zh: "腓尼基人約公元前 9 世紀建立迦太基,一度是地中海霸主,與羅馬三次布匿戰爭後城毀,此地成為羅馬帝國的「阿非利加行省」——「非洲」之名即源於此。7 世紀阿拉伯人到來,凱魯萬成為伊斯蘭名城,其後歷經鄂圖曼統治與 1881 年起的法國保護。1956 年獨立,2010 年底爆發的茉莉花革命推翻長期強人政權,點燃了阿拉伯之春。",
      en: "Phoenicians founded Carthage around the 9th century BC; after three Punic Wars with Rome the city fell, and the region became Rome's province of 'Africa' — the origin of the continent's name. Arabs arrived in the 7th century, making Kairouan a great Islamic center, followed by Ottoman rule and a French protectorate from 1881. Independent since 1956, Tunisia ignited the Arab Spring with its Jasmine Revolution of 2010–11.",
    },
    cities: [
      {
        name: { zh: "突尼斯", en: "Tunis" },
        blurb: {
          zh: "首都與最大城市,世界遺產老城麥地那巷弄縱橫,近郊就是迦太基遺址與藍白小鎮。",
          en: "The capital and largest city, with a World Heritage medina — the ruins of Carthage and the blue-white village of Sidi Bou Said lie just outside.",
        },
        trivia: {
          question: {
            zh: "突尼斯近郊保存著哪座曾與羅馬爭霸地中海的古城遺址?",
            en: "The suburbs of Tunis hold the ruins of which ancient city that once fought Rome for control of the Mediterranean?",
          },
          options: [
            { zh: "迦太基", en: "Carthage" },
            { zh: "特洛伊", en: "Troy" },
            { zh: "帕邁拉", en: "Palmyra" },
            { zh: "孟菲斯", en: "Memphis" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "迦太基名將漢尼拔曾率戰象翻越阿爾卑斯山直逼羅馬,公元前 146 年城破後,羅馬人又在原址重建為行省首府。",
            en: "Carthage's general Hannibal famously crossed the Alps with war elephants; after the city fell in 146 BC, Rome rebuilt it as a provincial capital.",
          },
        },
      },
      {
        name: { zh: "凱魯萬", en: "Kairouan" },
        blurb: {
          zh: "北非最早的伊斯蘭名城之一,建於 670 年,大清真寺是馬格里布地區清真寺的原型。",
          en: "One of North Africa's earliest great Islamic cities, founded in 670 — its Great Mosque became the prototype for mosques across the Maghreb.",
        },
        trivia: {
          question: {
            zh: "凱魯萬在伊斯蘭世界常被視為第幾聖城?",
            en: "In the Muslim world, Kairouan is often regarded as Islam's holiest city after which rank?",
          },
          options: [
            {
              zh: "第四聖城,次於麥加、麥地那與耶路撒冷",
              en: "The fourth holiest, after Mecca, Medina, and Jerusalem",
            },
            { zh: "第一聖城", en: "The holiest of all" },
            { zh: "第二聖城,僅次於麥加", en: "The second holiest, after Mecca" },
            { zh: "第七聖城", en: "The seventh holiest" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "凱魯萬由阿拉伯將領烏克巴建於 670 年,是伊斯蘭教向馬格里布傳播的基地,傳統上被許多穆斯林視為第四聖城。",
            en: "Founded in 670 by the Arab general Uqba ibn Nafi as a base for spreading Islam into the Maghreb, it is traditionally counted by many Muslims as the faith's fourth holiest city.",
          },
        },
      },
      {
        name: { zh: "蘇塞", en: "Sousse" },
        blurb: {
          zh: "地中海岸的度假與貿易古城,世界遺產老城由城牆環抱,見證阿拉伯早期的海防體系。",
          en: "A Mediterranean resort and trading city whose walled World Heritage medina preserves early Arab coastal defenses.",
        },
        trivia: {
          question: {
            zh: "蘇塞老城的地標「里巴特」是一種什麼樣的建築?",
            en: "The ribat, the landmark of Sousse's old town, is what kind of building?",
          },
          options: [
            {
              zh: "兼具堡壘與修道功能的伊斯蘭要塞",
              en: "An Islamic fortress-monastery",
            },
            { zh: "羅馬時代的圓形競技場", en: "A Roman amphitheater" },
            { zh: "拜占庭式大教堂", en: "A Byzantine cathedral" },
            { zh: "鄂圖曼蘇丹的行宮", en: "An Ottoman sultan's palace" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "里巴特是早期伊斯蘭世界的濱海要塞,駐守的信徒平時修行、戰時禦敵,蘇塞的里巴特是保存最完好的例子之一。",
            en: "Ribats were early Islamic coastal strongholds where devotees prayed in peacetime and fought in war — the one in Sousse is among the best preserved.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "星際大戰的沙漠星球「塔圖因」得名自突尼西亞小鎮塔塔溫,多場戲也在突尼西亞沙漠實地拍攝。",
        en: "Star Wars' desert planet Tatooine takes its name from the Tunisian town of Tataouine, and many scenes were shot in Tunisia's desert.",
      },
      {
        zh: "「非洲」一詞源自羅馬帝國對今日突尼西亞一帶的稱呼「阿非利加行省」。",
        en: "The name 'Africa' comes from the Roman province of Africa, centered on what is now Tunisia.",
      },
    ],
  },
  {
    id: "SEN",
    name: { zh: "塞內加爾", en: "Senegal" },
    capital: { zh: "達喀爾", en: "Dakar" },
    flag: "🇸🇳",
    region: "africa",
    center: { lat: 14.5, lng: -14.5 },
    intro: {
      zh: "西非大西洋岸的國家,首都達喀爾位居非洲大陸最西端的半島上。以「特朗加」待客之道、姆巴拉克斯音樂與摔角國技聞名,是西非法語圈最穩定的民主國家之一。",
      en: "A West African nation on the Atlantic, its capital Dakar sits on the continent's westernmost peninsula. Famed for 'teranga' hospitality, mbalax music, and wrestling as the national sport, it is one of Francophone West Africa's most stable democracies.",
    },
    history: {
      zh: "這片土地曾先後納入迦納、馬利等西非帝國的勢力範圍,之後由沃洛夫人的喬洛夫帝國統治。15 世紀起葡萄牙人抵達沿海,戈雷島淪為大西洋奴隸貿易的中轉站,其後法國殖民,達喀爾一度是整個法屬西非的首府。1960 年獨立,詩人總統桑戈爾治國二十年奠定文人政治傳統,獨立至今從未發生軍事政變,是非洲民主的模範生。",
      en: "The region fell within the orbit of the Ghana and Mali empires before the Wolof Jolof Empire ruled it. Portuguese traders arrived in the 15th century, and Gorée Island became a waypoint of the Atlantic slave trade; under French rule, Dakar served as capital of all French West Africa. Independent since 1960, led first by poet-president Léopold Senghor for two decades, Senegal has never suffered a coup — a standout democracy in Africa.",
    },
    cities: [
      {
        name: { zh: "達喀爾", en: "Dakar" },
        blurb: {
          zh: "非洲大陸最西端的首都,戈雷島與非洲復興紀念碑隔海相望,音樂與藝術活力十足。",
          en: "The westernmost capital on mainland Africa, where Gorée Island faces the African Renaissance Monument — a city buzzing with music and art.",
        },
        trivia: {
          question: {
            zh: "哪一項世界著名的越野拉力賽,曾長期以達喀爾作為終點並以它命名?",
            en: "Which world-famous off-road race long finished in Dakar and still bears its name?",
          },
          options: [
            { zh: "達喀爾拉力賽(巴黎-達喀爾)", en: "The Dakar Rally (Paris–Dakar)" },
            { zh: "蒙地卡羅拉力賽", en: "The Monte Carlo Rally" },
            { zh: "利曼 24 小時耐力賽", en: "The 24 Hours of Le Mans" },
            { zh: "東非野生動物拉力賽", en: "The East African Safari Rally" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1978 年創辦的巴黎-達喀爾拉力賽橫越撒哈拉直抵達喀爾,2009 年起因安全因素移師他洲,但賽名沿用至今。",
            en: "Founded in 1978, the Paris–Dakar crossed the Sahara to finish in Dakar; security concerns moved it to other continents from 2009, but the name endures.",
          },
        },
      },
      {
        name: { zh: "聖路易", en: "Saint-Louis" },
        blurb: {
          zh: "1659 年建立的法國殖民古城,曾是塞內加爾的首府,老城區名列世界遺產。",
          en: "A colonial city founded in 1659, once the capital of Senegal — its old town is a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "聖路易古城坐落於哪條河流的出海口?",
            en: "The historic city of Saint-Louis sits at the mouth of which river?",
          },
          options: [
            { zh: "塞內加爾河", en: "The Senegal River" },
            { zh: "甘比亞河", en: "The Gambia River" },
            { zh: "尼日河", en: "The Niger River" },
            { zh: "沃爾特河", en: "The Volta River" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "老城建在塞內加爾河口的小島上,是法國在西非最早的據點,河的對岸就是茅利塔尼亞方向的邊境地帶。",
            en: "The old town occupies an island in the Senegal River's estuary — France's earliest settlement in West Africa, near the border with Mauritania.",
          },
        },
      },
      {
        name: { zh: "圖巴", en: "Touba" },
        blurb: {
          zh: "塞內加爾第二大城與宗教聖城,巨大的清真寺尖塔遠遠可見,每年朝聖人潮數以百萬計。",
          en: "Senegal's second city and a holy city — its great mosque's minaret is visible for miles, and millions arrive on pilgrimage each year.",
        },
        trivia: {
          question: {
            zh: "圖巴是哪個蘇菲派教團的聖城,每年舉行大規模的「馬加勒」朝聖?",
            en: "Touba is the holy city of which Sufi brotherhood, host of the huge annual Magal pilgrimage?",
          },
          options: [
            { zh: "穆里德教團", en: "The Mouride brotherhood" },
            { zh: "提加尼教團", en: "The Tijaniyya" },
            { zh: "卡迪里教團", en: "The Qadiriyya" },
            { zh: "賽努西教團", en: "The Senussi order" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "穆里德教團由阿瑪杜·班巴於 19 世紀末創立,他 1887 年建立圖巴;大馬加勒朝聖紀念他被法國殖民當局流放的日子。",
            en: "Founded by Amadou Bamba, who established Touba in 1887, the Mourides hold the Grand Magal to commemorate his exile by the French colonial authorities.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "達喀爾近郊的雷特巴湖因嗜鹽藻類而呈現粉紅色,俗稱「玫瑰湖」。",
        en: "Lake Retba near Dakar turns pink from salt-loving algae — locals call it the Pink Lake.",
      },
      {
        zh: "達喀爾的非洲復興紀念碑高約 49 公尺,比自由女神像本體還高,是非洲最高的雕像。",
        en: "Dakar's African Renaissance Monument stands about 49 m tall — higher than the Statue of Liberty's figure — making it Africa's tallest statue.",
      },
    ],
  },
];
