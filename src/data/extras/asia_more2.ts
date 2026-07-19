import type { CountryExtras } from "../types";

// Advanced question banks for East/Southeast Asia & the Caucasus.
// Climate/travelTips live inline in the base country files, so these
// entries are quiz-only.

export const ASIA_MORE2_EXTRAS: Record<string, CountryExtras> = {
  MNG: {
    extraQuiz: [
      {
        question: {
          zh: "蒙古最高峰庫伊騰峰(Khüiten Peak)海拔 4,374 公尺,它位於哪座山脈?",
          en: "Mongolia's highest peak, Khüiten Peak (4,374 m), stands in which mountain range?",
        },
        options: [
          { zh: "阿爾泰山脈", en: "The Altai Mountains" },
          { zh: "杭愛山脈", en: "The Khangai Mountains" },
          { zh: "天山山脈", en: "The Tian Shan" },
          { zh: "喜馬拉雅山脈", en: "The Himalayas" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "庫伊騰峰屬於蒙古最西端的塔萬博格德(五聖峰)山區,地處蒙古與中國邊界,峰頂終年積雪並有冰川。",
          en: "Khüiten crowns the Tavan Bogd ('Five Saints') massif in Mongolia's far west on the Chinese border, permanently snow-capped with glaciers.",
        },
      },
      {
        question: {
          zh: "戈壁沙漠中的「火焰崖」(Bayanzag)在古生物學史上以什麼發現聞名?",
          en: "The Flaming Cliffs (Bayanzag) in the Gobi Desert are famous in paleontology for what discovery?",
        },
        options: [
          {
            zh: "出土世界最早被科學界確認的恐龍蛋化石",
            en: "Yielding the first dinosaur eggs recognized by science",
          },
          { zh: "發現保存最完整的猛獁象遺骸", en: "The most complete mammoth remains ever found" },
          { zh: "出土亞洲最早的古人類化石", en: "Asia's earliest hominid fossils" },
          { zh: "發現世界最大的隕石坑", en: "The world's largest meteorite crater" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "1923 年美國探險家安德魯斯率隊在此發現恐龍蛋,震動學界;戈壁至今仍是恐龍化石寶庫,伶盜龍(迅猛龍)即出土於此。",
          en: "Roy Chapman Andrews's 1923 expedition unearthed dinosaur eggs here, stunning science; the Gobi remains a fossil treasure trove — Velociraptor was found in these beds.",
        },
      },
      {
        question: {
          zh: "蒙古國今日通行西里爾字母,而傳統蒙古文字的書寫方式是什麼?",
          en: "Mongolia today uses Cyrillic, but how is the traditional Mongolian script written?",
        },
        options: [
          {
            zh: "由上而下直書,行序由左至右",
            en: "Vertically from top to bottom, in columns running left to right",
          },
          { zh: "由右至左橫書", en: "Horizontally from right to left" },
          { zh: "由左至右橫書", en: "Horizontally from left to right" },
          { zh: "由下而上直書", en: "Vertically from bottom to top" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傳統蒙古文源自回鶻字母,是世界少數直書文字之一;中國內蒙古地區至今仍日常使用這套文字。",
          en: "Derived from the Uyghur alphabet, it is one of the world's few vertical scripts — still in everyday use in China's Inner Mongolia region.",
        },
      },
    ],
  },
  GEO: {
    extraQuiz: [
      {
        question: {
          zh: "喬治亞高加索深山的上斯瓦涅提(Upper Svaneti)以什麼景觀列入世界遺產?",
          en: "Upper Svaneti, deep in Georgia's Caucasus, is World Heritage-listed for what landscape?",
        },
        options: [
          {
            zh: "中世紀石造防禦塔樓村落",
            en: "Villages of medieval stone defensive towers",
          },
          { zh: "岩壁上開鑿的洞穴城市", en: "A cave city carved into cliffs" },
          { zh: "木造東正教教堂群", en: "An ensemble of wooden Orthodox churches" },
          { zh: "羅馬時代的堡壘遺址", en: "Roman-era fortress ruins" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "斯瓦涅提家家自建高塔防禦外敵與雪崩;塔樓村烏斯古里(Ushguli)海拔約 2,100 公尺,是歐洲海拔最高的長年有人定居聚落之一。",
          en: "Svan families built their own tower-houses against raiders and avalanches; the tower village of Ushguli, at about 2,100 m, is among Europe's highest continuously inhabited settlements.",
        },
      },
      {
        question: {
          zh: "蘇聯領導人史達林出生於喬治亞的哪座城市?",
          en: "Soviet leader Joseph Stalin was born in which Georgian city?",
        },
        options: [
          { zh: "哥里", en: "Gori" },
          { zh: "庫塔伊西", en: "Kutaisi" },
          { zh: "特拉維", en: "Telavi" },
          { zh: "祖格迪迪", en: "Zugdidi" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "史達林 1878 年生於哥里,當地保留他出生的小屋並設有史達林博物館,是喬治亞最特殊的歷史景點之一。",
          en: "Stalin was born in Gori in 1878; the town preserves his birth cottage inside the Stalin Museum, one of Georgia's most unusual historical sites.",
        },
      },
      {
        question: {
          zh: "喬治亞最具代表性的國民料理「哈恰普里」(khachapuri)是什麼食物?",
          en: "Georgia's signature national dish, khachapuri, is what kind of food?",
        },
        options: [
          { zh: "填滿起司的烤麵包", en: "A baked bread filled with cheese" },
          { zh: "帶湯汁的肉餡包子", en: "A juicy meat-filled dumpling" },
          { zh: "核桃醬燉雞", en: "Chicken stewed in walnut sauce" },
          { zh: "葡萄葉包飯捲", en: "Rice rolls wrapped in grape leaves" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "阿扎爾式哈恰普里做成小船形,出爐時在中央打上蛋黃與奶油;帶湯汁的欣卡利(khinkali)湯包則是另一道國民美食。",
          en: "The Adjarian version is boat-shaped and topped with an egg yolk and butter fresh from the oven; khinkali soup dumplings are the other national favorite.",
        },
      },
    ],
  },
  ARM: {
    extraQuiz: [
      {
        question: {
          zh: "亞美尼亞的塞凡湖以什麼地理特點著稱?",
          en: "Lake Sevan in Armenia is noted for what geographic distinction?",
        },
        options: [
          {
            zh: "海拔約 1,900 公尺,是高加索地區最大的湖泊",
            en: "Sitting at about 1,900 m, it is the largest lake in the Caucasus",
          },
          { zh: "是世界最深的湖泊", en: "It is the world's deepest lake" },
          { zh: "是鹽度極高的內陸鹹水湖", en: "It is an extremely salty inland lake" },
          { zh: "是火山口積水形成的火口湖", en: "It is a crater lake in a volcano" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "塞凡湖是歐亞大陸最大的高山淡水湖之一,其集水區約佔亞美尼亞國土面積六分之一,湖畔的塞凡修道院是著名景點。",
          en: "Sevan is among Eurasia's largest high-altitude freshwater lakes; the lakeside Sevanavank monastery is a famous landmark.",
        },
      },
      {
        question: {
          zh: "亞美尼亞國徽中央描繪的民族聖山亞拉拉特山,如今位於哪個國家境內?",
          en: "Mount Ararat, the national sacred mountain on Armenia's coat of arms, lies today in which country?",
        },
        options: [
          { zh: "土耳其", en: "Turkey" },
          { zh: "亞美尼亞", en: "Armenia" },
          { zh: "伊朗", en: "Iran" },
          { zh: "喬治亞", en: "Georgia" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "亞拉拉特山(5,137 公尺)位於土耳其東部、鄰近亞美尼亞邊境,相傳是諾亞方舟停泊之處;晴天從葉里溫即可清楚望見。",
          en: "Ararat (5,137 m) rises in eastern Turkey near the Armenian border and is the legendary resting place of Noah's Ark — clearly visible from Yerevan on fine days.",
        },
      },
      {
        question: {
          zh: "哪種水果的拉丁學名 Prunus armeniaca 意為「亞美尼亞李」,長久與這個國家連結在一起?",
          en: "Which fruit's Latin name, Prunus armeniaca, means 'Armenian plum', tying it to the country?",
        },
        options: [
          { zh: "杏桃", en: "The apricot" },
          { zh: "石榴", en: "The pomegranate" },
          { zh: "無花果", en: "The fig" },
          { zh: "櫻桃", en: "The cherry" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "古代歐洲人經亞美尼亞認識杏桃而如此命名;亞美尼亞國旗的橘色也常被聯想為杏桃色,傳統雙簧管「杜杜克笛」正是以杏木製作。",
          en: "Ancient Europeans met the apricot via Armenia, hence the name; the flag's orange stripe is popularly linked to apricot, and the duduk oboe is carved from apricot wood.",
        },
      },
    ],
  },
  AZE: {
    extraQuiz: [
      {
        question: {
          zh: "亞塞拜然東濱的裏海,擁有什麼世界之最?",
          en: "The Caspian Sea on Azerbaijan's eastern shore holds what world record?",
        },
        options: [
          {
            zh: "是世界最大的湖泊(內陸水體)",
            en: "It is the world's largest lake (enclosed inland body of water)",
          },
          { zh: "是世界最深的湖泊", en: "It is the world's deepest lake" },
          { zh: "是世界鹽度最高的水域", en: "It is the saltiest body of water on Earth" },
          { zh: "是世界最大的淡水湖", en: "It is the world's largest freshwater lake" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "裏海面積約 37 萬平方公里,雖名為「海」卻不與大洋相通;沿岸五國共享其豐富的油氣資源與鱘魚漁業。",
          en: "At roughly 370,000 square kilometers, the Caspian is called a sea but connects to no ocean; five littoral states share its oil, gas, and sturgeon fisheries.",
        },
      },
      {
        question: {
          zh: "巴庫近郊的戈布斯坦(Gobustan)以什麼列入世界遺產?",
          en: "Gobustan, near Baku, is inscribed as World Heritage for what?",
        },
        options: [
          { zh: "史前岩畫群", en: "Its prehistoric rock carvings" },
          { zh: "拜火教神廟群", en: "A complex of fire temples" },
          { zh: "絲路商隊客棧遺址", en: "Silk Road caravanserai ruins" },
          { zh: "中世紀地下水道系統", en: "A medieval underground aqueduct system" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "戈布斯坦保存六千多幅岩刻,描繪狩獵、舞蹈與蘆葦船,最早可追溯至上萬年前,2007 年列入世界遺產,園區旁還有著名的泥火山群。",
          en: "Gobustan preserves over 6,000 petroglyphs of hunts, dances, and reed boats, some more than 10,000 years old — listed in 2007, with famous mud volcanoes nearby.",
        },
      },
      {
        question: {
          zh: "亞塞拜然的哪項傳統工藝於 2010 年列入聯合國非物質文化遺產?",
          en: "Which traditional Azerbaijani craft was inscribed on UNESCO's Intangible Cultural Heritage list in 2010?",
        },
        options: [
          { zh: "地毯編織", en: "Carpet weaving" },
          { zh: "銅器鍛造", en: "Copper smithing" },
          { zh: "細密畫繪製", en: "Miniature painting" },
          { zh: "玻璃吹製", en: "Glassblowing" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "亞塞拜然各地毯產區風格各異,巴庫的國家地毯博物館建築外型就設計成一張捲起的地毯,十分醒目。",
          en: "Each region weaves its own style; Baku's national Carpet Museum is even built in the shape of a rolled-up carpet.",
        },
      },
    ],
  },
  MDV: {
    extraQuiz: [
      {
        question: {
          zh: "馬爾地夫的島鏈南北綿延近 900 公里,其國土跨越了哪條重要緯線?",
          en: "Stretching nearly 900 kilometers north to south, the Maldives' island chain crosses which major line of latitude?",
        },
        options: [
          { zh: "赤道", en: "The Equator" },
          { zh: "北回歸線", en: "The Tropic of Cancer" },
          { zh: "南回歸線", en: "The Tropic of Capricorn" },
          { zh: "本初子午線", en: "The Prime Meridian" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "最南端的阿杜環礁位於赤道以南,使馬爾地夫成為世界少數國土橫跨赤道的國家之一,南北氣候幾乎沒有差異。",
          en: "The southernmost Addu Atoll lies just south of the Equator, making the Maldives one of the few countries straddling it — with almost no climate difference end to end.",
        },
      },
      {
        question: {
          zh: "馬爾地夫官方語言迪維希語所使用的「塔納文」(Thaana),書寫方向是什麼?",
          en: "Thaana, the script of Dhivehi, the Maldives' official language, is written in which direction?",
        },
        options: [
          { zh: "由右至左橫書", en: "Horizontally from right to left" },
          { zh: "由左至右橫書", en: "Horizontally from left to right" },
          { zh: "由上而下直書", en: "Vertically from top to bottom" },
          { zh: "左右交互的牛耕式書寫", en: "Alternating directions, boustrophedon-style" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "塔納文與阿拉伯文同為右至左書寫,而且它最前面幾個字母正是由阿拉伯數字演變而來,是世界文字中罕見的例子。",
          en: "Like Arabic, Thaana runs right to left — and unusually, its first several letters derive from Arabic numerals, a rarity among the world's scripts.",
        },
      },
      {
        question: {
          zh: "馬爾地夫的芭環礁(Baa Atoll)是聯合國教科文組織生物圈保護區,其中哈尼法魯灣以什麼生態奇觀聞名?",
          en: "Baa Atoll is a UNESCO Biosphere Reserve — Hanifaru Bay there is famous for what natural spectacle?",
        },
        options: [
          {
            zh: "鬼蝠魟成群聚集覓食",
            en: "Huge feeding gatherings of manta rays",
          },
          { zh: "海龜集體上岸產卵", en: "Mass nesting of sea turtles" },
          { zh: "座頭鯨的繁殖育幼場", en: "A humpback whale nursery" },
          { zh: "大白鯊的季節性洄游", en: "Seasonal migrations of great white sharks" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "季風把浮游生物推進狹小的哈尼法魯灣,數十甚至上百隻鬼蝠魟連同鯨鯊前來覓食;芭環礁於 2011 年列為生物圈保護區。",
          en: "Monsoon currents funnel plankton into the small bay, drawing dozens — sometimes hundreds — of mantas along with whale sharks; Baa Atoll was designated in 2011.",
        },
      },
    ],
  },
  MMR: {
    extraQuiz: [
      {
        question: {
          zh: "哪座位於緬甸最北端的山峰,一般被視為東南亞的最高峰?",
          en: "Which mountain in Myanmar's far north is generally regarded as Southeast Asia's highest peak?",
        },
        options: [
          { zh: "開加博峰", en: "Hkakabo Razi" },
          { zh: "京那巴魯山", en: "Mount Kinabalu" },
          { zh: "番西邦峰", en: "Fansipan" },
          { zh: "查亞峰", en: "Puncak Jaya" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "開加博峰海拔約 5,881 公尺,位於喜馬拉雅山系東緣的克欽邦,山區偏遠且有冰雪地形,直到 1996 年才首次有人登頂。",
          en: "Hkakabo Razi rises about 5,881 m in Kachin State on the eastern edge of the Himalayas; remote and glaciated, it saw its first summit only in 1996.",
        },
      },
      {
        question: {
          zh: "緬甸茵萊湖的茵達族漁夫以什麼獨特技藝聞名於世?",
          en: "The Intha fishermen of Myanmar's Inle Lake are world-famous for what distinctive skill?",
        },
        options: [
          {
            zh: "單腳站立船尾、以另一條腿盤槳划船",
            en: "Standing on one leg at the stern and rowing with the other leg wrapped around the oar",
          },
          { zh: "徒手潛水捕魚", en: "Free-diving to catch fish by hand" },
          { zh: "訓練水獺把魚趕進網中", en: "Training otters to herd fish into nets" },
          { zh: "以鸕鶿叼魚上船", en: "Using cormorants to retrieve fish" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "單腿划槳能空出雙手撒網,也便於站高望穿佈滿水草的淺湖;茵萊湖上還有把菜園種在浮島上的獨特水上農業。",
          en: "Leg-rowing frees both hands for the net and gives a standing view over the weedy shallows; the lake is also known for gardens grown on floating islands.",
        },
      },
      {
        question: {
          zh: "緬甸的抹谷(Mogok)谷地以出產哪種寶石聞名,頂級成色有「鴿血」之稱?",
          en: "Myanmar's Mogok valley is famed for which gemstone, whose finest color is called 'pigeon's blood'?",
        },
        options: [
          { zh: "紅寶石", en: "Rubies" },
          { zh: "藍寶石", en: "Sapphires" },
          { zh: "祖母綠", en: "Emeralds" },
          { zh: "鑽石", en: "Diamonds" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "抹谷有「紅寶石之谷」的稱號,世界多數頂級紅寶石皆產於此;緬甸北部的帕敢一帶則以翡翠礦聞名。",
          en: "Known as the 'Valley of Rubies', Mogok has produced most of the world's finest rubies; northern Myanmar's Hpakant area is likewise famous for jadeite.",
        },
      },
    ],
  },
  KHM: {
    extraQuiz: [
      {
        question: {
          zh: "全盛時期的吳哥城市群,在世界城市史上擁有什麼地位?",
          en: "At its height, what place does Greater Angkor hold in the history of world cities?",
        },
        options: [
          {
            zh: "工業革命前世界規模最大的城市聚落",
            en: "The largest urban settlement of the pre-industrial world",
          },
          { zh: "世界最早使用紙幣的城市", en: "The first city to use paper money" },
          { zh: "世界最古老的大學所在地", en: "Home to the world's oldest university" },
          { zh: "世界最大的海上貿易港", en: "The world's largest maritime trading port" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "雷射空載掃描顯示大吳哥地區的水利與聚落網絡綿延約 1,000 平方公里,靠精密的運河與蓄水池系統養活近百萬人口。",
          en: "Lidar surveys reveal a network of canals, reservoirs, and settlements spanning roughly 1,000 square kilometers, supporting close to a million people.",
        },
      },
      {
        question: {
          zh: "高棉文以什麼特點列入金氏世界紀錄?",
          en: "The Khmer script holds a Guinness World Record for what?",
        },
        options: [
          { zh: "是字母數量最多的文字", en: "Having the most letters of any alphabet" },
          { zh: "是世界最古老的拼音文字", en: "Being the world's oldest alphabet" },
          { zh: "是唯一由右至左書寫的東南亞文字", en: "Being Southeast Asia's only right-to-left script" },
          { zh: "是筆畫最複雜的文字", en: "Having the most complex strokes" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "高棉文共 74 個字母,源自古印度的婆羅米文字系統;泰文與寮文的字母也都受到高棉文影響。",
          en: "With 74 letters, Khmer descends from ancient India's Brahmi script family — and it in turn shaped the Thai and Lao alphabets.",
        },
      },
      {
        question: {
          zh: "柬埔寨的國獸是哪種動物?",
          en: "What is Cambodia's national animal?",
        },
        options: [
          { zh: "野牛「柯普利」", en: "The kouprey, a wild forest ox" },
          { zh: "亞洲象", en: "The Asian elephant" },
          { zh: "印度支那虎", en: "The Indochinese tiger" },
          { zh: "長臂猿", en: "The gibbon" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "柯普利是 1937 年才被科學界描述的大型野牛,1960 年代由西哈努克國王定為國獸;數十年來再無確切目擊,可能已經滅絕。",
          en: "Described by science only in 1937 and declared national animal by King Sihanouk in the 1960s, the kouprey has not been reliably seen for decades and may be extinct.",
        },
      },
    ],
  },
  LAO: {
    extraQuiz: [
      {
        question: {
          zh: "寮國川壙高原上散布著數千個巨大石缸,考古學界認為這處「石缸平原」是什麼?",
          en: "Thousands of giant stone jars dot Laos's Xiangkhouang plateau — what do archaeologists believe the Plain of Jars was?",
        },
        options: [
          { zh: "鐵器時代的墓葬遺跡", en: "Iron Age burial grounds" },
          { zh: "古代的釀酒作坊", en: "Ancient wine-brewing workshops" },
          { zh: "隕石撞擊留下的坑群", en: "Craters left by meteorite impacts" },
          { zh: "祭天用的天文觀測台", en: "Astronomical platforms for sky worship" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "石缸周邊出土人骨與陪葬品,證實與鐵器時代喪葬儀式有關,2019 年列入世界遺產;當地傳說則說它們是巨人釀酒的酒缸。",
          en: "Human remains and grave goods around the jars tie them to Iron Age funerary rites; the site was World Heritage-listed in 2019 — local legend calls them giants' wine jars.",
        },
      },
      {
        question: {
          zh: "湄公河在寮國最南端的孔帕平瀑布(Khone Phapheng)擁有什麼之最?",
          en: "The Khone Phapheng Falls on the Mekong in far southern Laos hold what record?",
        },
        options: [
          {
            zh: "依水量計是東南亞最大的瀑布",
            en: "By volume, the largest waterfall in Southeast Asia",
          },
          { zh: "是世界落差最大的瀑布", en: "The tallest waterfall in the world" },
          { zh: "是世界海拔最高的瀑布", en: "The highest-altitude waterfall in the world" },
          { zh: "是亞洲最窄的瀑布", en: "The narrowest waterfall in Asia" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這道瀑布讓湄公河無法全線通航,法國殖民者為繞過它修築了寮國最早的鐵路;附近的四千美島是伊洛瓦底江豚的棲地。",
          en: "The falls block navigation on the Mekong — the French built Laos's first railway to bypass them; the nearby Si Phan Don islands shelter Irrawaddy dolphins.",
        },
      },
      {
        question: {
          zh: "哪種食物是寮國的主食,寮國人的人均食用量居世界之冠?",
          en: "Which staple food do Laotians eat more of per capita than anyone else in the world?",
        },
        options: [
          { zh: "糯米", en: "Sticky (glutinous) rice" },
          { zh: "米粉", en: "Rice noodles" },
          { zh: "玉米", en: "Corn" },
          { zh: "樹薯", en: "Cassava" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "糯米以竹簍蒸熟後用手捏食,搭配烤肉與涼拌青木瓜;寮國人甚至自稱「糯米之子」,足見糯米的文化地位。",
          en: "Steamed in bamboo baskets and eaten by hand with grilled meats and papaya salad, sticky rice is so central that Laotians call themselves 'children of sticky rice'.",
        },
      },
    ],
  },
  BRN: {
    extraQuiz: [
      {
        question: {
          zh: "汶萊的國土形狀有什麼特殊之處?",
          en: "What is unusual about the shape of Brunei's territory?",
        },
        options: [
          {
            zh: "被馬來西亞領土分隔成互不相連的兩部分",
            en: "It is split into two disconnected parts by Malaysian territory",
          },
          { zh: "完全被印尼領土包圍", en: "It is entirely surrounded by Indonesia" },
          { zh: "由上千座小島組成", en: "It consists of over a thousand small islands" },
          { zh: "與新加坡隔橋相連", en: "It is linked to Singapore by a bridge" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬來西亞砂拉越州的林夢地區把東邊的淡布隆區與汶萊本土隔開;2020 年通車的跨海大橋讓兩地不再需要繞經馬來西亞。",
          en: "Malaysia's Limbang district in Sarawak separates the Temburong district from the rest of Brunei; a cross-bay bridge opened in 2020 finally linked the two halves directly.",
        },
      },
      {
        question: {
          zh: "世界第三大島「婆羅洲」(Borneo)的名稱,一般認為源自什麼?",
          en: "The name of Borneo, the world's third-largest island, is generally thought to derive from what?",
        },
        options: [
          {
            zh: "歐洲人對「汶萊」一名的轉寫",
            en: "European renderings of the name 'Brunei'",
          },
          { zh: "葡萄牙語「美麗海岸」之意", en: "Portuguese for 'beautiful coast'" },
          { zh: "當地語言「大河之島」之意", en: "A local phrase meaning 'island of great rivers'" },
          { zh: "一位荷蘭探險家的姓氏", en: "The surname of a Dutch explorer" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "16 世紀歐洲航海者以強盛的汶萊帝國稱呼整座島嶼,輾轉演變成「Borneo」;馬來語則稱這座島為加里曼丹(Kalimantan)。",
          en: "Sixteenth-century European navigators named the whole island after the powerful Bruneian Empire, which evolved into 'Borneo'; in Malay the island is called Kalimantan.",
        },
      },
      {
        question: {
          zh: "汶萊的正式國名「汶萊達魯薩蘭國」中,「達魯薩蘭」(Darussalam)意為什麼?",
          en: "In Brunei's official name, 'Brunei Darussalam', what does 'Darussalam' mean?",
        },
        options: [
          { zh: "和平之邦(和平的居所)", en: "Abode of peace" },
          { zh: "黃金之國", en: "Land of gold" },
          { zh: "蘇丹的土地", en: "Land of the sultan" },
          { zh: "海上的明珠", en: "Pearl of the sea" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「達魯薩蘭」源自阿拉伯語,意為「和平的居所」;坦尚尼亞的大城三蘭港(Dar es Salaam)也是同一個詞源。",
          en: "'Darussalam' is Arabic for 'abode of peace' — the same phrase behind the name of Tanzania's largest city, Dar es Salaam.",
        },
      },
    ],
  },
  TLS: {
    extraQuiz: [
      {
        question: {
          zh: "東帝汶的歐庫西(Oecusse)地區有什麼地理特點?",
          en: "What is geographically distinctive about Timor-Leste's Oecusse region?",
        },
        options: [
          {
            zh: "是被印尼領土包圍的外飛地",
            en: "It is an exclave surrounded by Indonesian territory",
          },
          { zh: "是全國唯一的大型離島", en: "It is the country's only large offshore island" },
          { zh: "是全國最高峰的所在地", en: "It contains the country's highest peak" },
          { zh: "是與澳洲距離最近的地區", en: "It is the closest point to Australia" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "歐庫西位於帝汶島西半部的北岸,四周被印尼的西帝汶環繞;葡萄牙人 17 世紀最早在此地的利福(Lifau)建立據點,可說是東帝汶的發源地。",
          en: "Oecusse sits on the north coast of Indonesian West Timor, cut off from the rest of the country; the Portuguese first settled at Lifau there in the 17th century, making it the cradle of Timor-Leste.",
        },
      },
      {
        question: {
          zh: "東帝汶的貝洛主教與拉莫斯-霍塔,在 1996 年共同獲得哪個國際獎項?",
          en: "Bishop Belo and José Ramos-Horta of Timor-Leste jointly received which international award in 1996?",
        },
        options: [
          { zh: "諾貝爾和平獎", en: "The Nobel Peace Prize" },
          { zh: "諾貝爾文學獎", en: "The Nobel Prize in Literature" },
          { zh: "拉蒙·麥格塞塞獎", en: "The Ramon Magsaysay Award" },
          { zh: "聯合國教科文組織和平獎", en: "The UNESCO Peace Prize" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "兩人因致力於以公正與和平的方式解決東帝汶問題而獲獎,讓國際社會重新關注這片土地,為 1999 年的獨立公投鋪路。",
          en: "They were honored for working toward a just and peaceful solution for East Timor, refocusing world attention and paving the way for the 1999 independence referendum.",
        },
      },
      {
        question: {
          zh: "根據東帝汶流傳最廣的創世傳說,帝汶島是由什麼變成的?",
          en: "According to Timor-Leste's best-known origin legend, the island of Timor was formed from what?",
        },
        options: [
          { zh: "一隻巨大的鱷魚", en: "A giant crocodile" },
          { zh: "一位沉睡的巨人", en: "A sleeping giant" },
          { zh: "一頭擱淺的鯨魚", en: "A beached whale" },
          { zh: "一片海龜的背甲", en: "The shell of a sea turtle" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "傳說中老鱷魚為報答救命的男孩,化身為帝汶島供其子孫世代安居;當地人因此尊稱鱷魚為「祖父」,島嶼狹長的外形也常被比作鱷魚。",
          en: "In the tale, an old crocodile repaid the boy who saved it by becoming the island for his descendants; Timorese still call crocodiles 'grandfather', and the island's long shape is likened to one.",
        },
      },
    ],
  },
  PRK: {
    extraQuiz: [
      {
        question: {
          zh: "北韓與中國邊界上的白頭山是朝鮮半島最高峰,它的山頂有什麼著名地貌?",
          en: "Mount Paektu, the Korean peninsula's highest peak on the China border, is crowned by what famous feature?",
        },
        options: [
          { zh: "火山口湖「天池」", en: "The crater lake known as Heaven Lake" },
          { zh: "終年不化的大型冰川", en: "A large permanent glacier" },
          { zh: "巨型隕石撞擊坑", en: "A giant meteorite impact crater" },
          { zh: "石灰岩溶洞群", en: "A network of limestone caves" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "白頭山海拔 2,744 公尺,是一座休眠中的活火山,山頂天池是世界海拔最高的火口湖之一;它在南北兩韓文化中都被視為民族聖山。",
          en: "Paektu rises 2,744 m as a dormant volcano; its summit caldera holds Heaven Lake, among the highest crater lakes on Earth, and the mountain is sacred in both Koreas.",
        },
      },
      {
        question: {
          zh: "2004 年北韓第一處列入世界遺產名錄的是什麼?",
          en: "In 2004, what became North Korea's first UNESCO World Heritage site?",
        },
        options: [
          { zh: "高句麗古墓群", en: "The Complex of Koguryo (Goguryeo) Tombs" },
          { zh: "開城歷史建築群", en: "The historic monuments of Kaesong" },
          { zh: "白頭山天池", en: "Heaven Lake on Mount Paektu" },
          { zh: "平壤主體思想塔", en: "The Juche Tower in Pyongyang" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "散布於平壤一帶的數十座高句麗古墓以精美壁畫聞名,描繪狩獵、樂舞與星象,是研究這個古代王國生活的珍貴材料。",
          en: "Dozens of Goguryeo-era tombs around Pyongyang preserve vivid murals of hunts, music, dance, and constellations — a rare window into life in the ancient kingdom.",
        },
      },
      {
        question: {
          zh: "哪道以蕎麥麵條盛在冰涼湯頭中的料理,是平壤最具代表性的名菜?",
          en: "Which dish of buckwheat noodles served in an icy broth is Pyongyang's signature specialty?",
        },
        options: [
          { zh: "平壤冷麵", en: "Pyongyang naengmyeon (cold noodles)" },
          { zh: "參雞湯", en: "Samgyetang (ginseng chicken soup)" },
          { zh: "部隊鍋", en: "Budae-jjigae (army stew)" },
          { zh: "辣炒年糕", en: "Tteokbokki (spicy rice cakes)" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "平壤冷麵傳統上是冬季料理,以牛肉或雉雞高湯冰鎮後配蕎麥麵;製作習俗於 2022 年列入聯合國非物質文化遺產,玉流館是最著名的老店。",
          en: "Traditionally a winter dish of buckwheat noodles in chilled beef or pheasant broth, the custom was inscribed on UNESCO's Intangible Heritage list in 2022 — Okryu-gwan is its most famous restaurant.",
        },
      },
    ],
  },
};
