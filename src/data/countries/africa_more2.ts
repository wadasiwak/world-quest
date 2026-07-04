import type { Country } from "../types";

// Africa (batch 2): 13 countries. Content shape is LLM-generatable — see types.ts.

export const AFRICA_MORE2: Country[] = [
  {
    id: "CIV",
    name: { zh: "象牙海岸", en: "Côte d'Ivoire" },
    capital: { zh: "亞穆蘇克羅", en: "Yamoussoukro" },
    flag: "🇨🇮",
    region: "africa",
    center: { lat: 7.5, lng: -5.5 },
    intro: {
      zh: "西非幾內亞灣畔的可可王國,全球約四成的可可豆產自這裡。經濟重鎮阿必尚高樓林立,被稱為「西非小巴黎」;內陸則是廣袤的種植園與莽原,法語非洲最具經濟活力的國家之一。",
      en: "The cocoa kingdom on the Gulf of Guinea — around 40% of the world's cocoa beans grow here. Abidjan's skyline earned it the nickname 'Paris of West Africa', while inland stretches of plantations and savanna make it one of Francophone Africa's most dynamic economies.",
    },
    history: {
      zh: "此地曾有多個王國並存,1893 年成為法國殖民地,以象牙貿易得名。1960 年獨立後,開國總統烏弗埃-博瓦尼執政三十餘年,以可可與咖啡創造「象牙海岸奇蹟」。他去世後政局動盪,2002 年與 2010 年兩度爆發內戰;2011 年後局勢趨穩,經濟重回高速成長,再度成為西非成長引擎。",
      en: "Home to several precolonial kingdoms, the area became a French colony in 1893, named for its ivory trade. After independence in 1960, founding president Houphouët-Boigny ruled for over three decades, building the 'Ivorian miracle' on cocoa and coffee. His death brought turmoil and civil wars in 2002 and 2010; since 2011 stability has returned and the economy is again a West African growth engine.",
    },
    cities: [
      {
        name: { zh: "阿必尚", en: "Abidjan" },
        blurb: {
          zh: "最大城市與經濟首都,潟湖環繞的摩天大樓天際線是西非少見的景觀。",
          en: "The largest city and economic capital — a lagoon-ringed skyline rare in West Africa.",
        },
        trivia: {
          question: {
            zh: "阿必尚港是重要的可可出口門戶。象牙海岸的可可豆產量約占全球多少?",
            en: "Abidjan's port is a major cocoa gateway. Roughly what share of the world's cocoa beans does Côte d'Ivoire produce?",
          },
          options: [
            { zh: "約四成", en: "About 40%" },
            { zh: "約一成", en: "About 10%" },
            { zh: "約 5%", en: "About 5%" },
            { zh: "約八成", en: "About 80%" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "象牙海岸是全球最大可可生產國,產量約占全球四成,遠超第二名的迦納。",
            en: "Côte d'Ivoire is the world's top cocoa producer at roughly 40% of global supply, well ahead of second-place Ghana.",
          },
        },
      },
      {
        name: { zh: "亞穆蘇克羅", en: "Yamoussoukro" },
        blurb: {
          zh: "1983 年取代阿必尚成為法定首都,是開國總統烏弗埃-博瓦尼的故鄉。",
          en: "Made the official capital in 1983 — the hometown of founding president Houphouët-Boigny.",
        },
        trivia: {
          question: {
            zh: "亞穆蘇克羅的「和平之后聖殿」以什麼紀錄聞名?",
            en: "Yamoussoukro's Basilica of Our Lady of Peace is famous for holding what record?",
          },
          options: [
            { zh: "金氏紀錄認證的全球最大教堂", en: "The world's largest church, per Guinness World Records" },
            { zh: "全球最古老的教堂", en: "The world's oldest church" },
            { zh: "海拔最高的教堂", en: "The highest-altitude church" },
            { zh: "全球最大的木造教堂", en: "The world's largest wooden church" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座 1989 年落成的聖殿以羅馬聖彼得大教堂為藍本,獲金氏世界紀錄認證為全球面積最大的教堂。",
            en: "Completed in 1989 and modeled on St. Peter's Basilica, it is certified by Guinness World Records as the largest church on Earth.",
          },
        },
      },
      {
        name: { zh: "布瓦凱", en: "Bouaké" },
        blurb: {
          zh: "中部第二大城,棉花與腰果貿易的集散樞紐。",
          en: "The second city in the center of the country, a trading hub for cotton and cashews.",
        },
        trivia: {
          question: {
            zh: "2024 年初象牙海岸主辦非洲國家盃足球賽,布瓦凱是分賽場之一。最後奪冠的是哪一隊?",
            en: "Bouaké was a host venue for the Africa Cup of Nations held in early 2024. Which team won the title?",
          },
          options: [
            { zh: "地主象牙海岸", en: "Hosts Côte d'Ivoire" },
            { zh: "奈及利亞", en: "Nigeria" },
            { zh: "塞內加爾", en: "Senegal" },
            { zh: "埃及", en: "Egypt" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "象牙海岸在小組賽差點出局,卻一路逆轉,決賽擊敗奈及利亞,以地主身分第三度捧盃。",
            en: "After nearly crashing out in the group stage, the hosts staged repeated comebacks and beat Nigeria in the final for their third title.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "國名「Côte d'Ivoire」是法語「象牙海岸」,源自殖民時期的象牙貿易。",
        en: "The name Côte d'Ivoire is French for 'ivory coast', from the colonial-era ivory trade.",
      },
      {
        zh: "除了可可,象牙海岸也是全球最大的腰果原豆生產國之一。",
        en: "Beyond cocoa, Côte d'Ivoire is also among the world's top producers of raw cashew nuts.",
      },
    ],
    climate: {
      zh: "南部為濕熱的熱帶氣候,一年有兩個雨季;愈往北愈乾燥,轉為莽原氣候,12 月至 2 月會吹來撒哈拉的乾燥哈馬丹風。",
      en: "The humid tropical south has two rainy seasons; the north grows drier savanna, with the dusty Harmattan wind blowing off the Sahara from December to February.",
    },
    travelTips: [
      {
        zh: "阿必尚治安好壞區域差異大,夜間避免步行,搭乘正規計程車或叫車服務。",
        en: "Safety in Abidjan varies by district — avoid walking at night and use registered taxis or ride-hailing apps.",
      },
      {
        zh: "官方語言是法語,英語普及度不高,學幾句基本法語會方便很多。",
        en: "French is the official language and English is not widely spoken — a few basic French phrases go a long way.",
      },
      {
        zh: "入境通常需要黃熱病疫苗接種證明,行前記得辦妥。",
        en: "Proof of yellow fever vaccination is generally required for entry — sort it out before you travel.",
      },
    ],
  },
  {
    id: "BFA",
    name: { zh: "布吉納法索", en: "Burkina Faso" },
    capital: { zh: "瓦加杜古", en: "Ouagadougou" },
    flag: "🇧🇫",
    region: "africa",
    center: { lat: 12.2, lng: -1.6 },
    intro: {
      zh: "西非內陸國,國名意為「正直之人的土地」。北部漸入薩赫爾乾旱帶,南部是莽原與農田。雖然是全球較貧窮的國家之一,卻以非洲最大電影節與活躍的音樂、面具文化聞名。",
      en: "A landlocked West African nation whose name means 'land of upright people'. The north fades into the arid Sahel while the south is savanna and farmland. Despite being among the world's poorer countries, it is famed for Africa's biggest film festival and a vibrant music and mask culture.",
    },
    history: {
      zh: "莫西人自 11 世紀起在此建立王國,抵禦周邊帝國數百年。1896 年淪為法國殖民地,1960 年以「上伏塔」之名獨立。1983 年革命領袖桑卡拉上台,推動識字、疫苗與女權改革,並將國名改為布吉納法索;他 1987 年遇刺後,龔保雷執政 27 年至 2014 年民眾起義下台。近年薩赫爾地區武裝衝突外溢,2022 年接連發生政變,局勢仍不穩定。",
      en: "Mossi kingdoms ruled here from the 11th century, resisting surrounding empires for centuries. Colonized by France in 1896, the country gained independence in 1960 as Upper Volta. Revolutionary leader Thomas Sankara took power in 1983, pushing literacy, vaccination, and women's rights and renaming the country Burkina Faso; after his 1987 assassination, Blaise Compaoré ruled 27 years until a 2014 uprising. Sahel insurgencies have since spilled over, with two coups in 2022 and continuing instability.",
    },
    cities: [
      {
        name: { zh: "瓦加杜古", en: "Ouagadougou" },
        blurb: {
          zh: "首都與莫西王國的傳統中心,當地人暱稱它「瓦加」。",
          en: "The capital and traditional seat of the Mossi kingdom, known locally as 'Ouaga'.",
        },
        trivia: {
          question: {
            zh: "瓦加杜古每兩年舉辦一次的 FESPACO,是非洲規模最大的什麼活動?",
            en: "FESPACO, held in Ouagadougou every two years, is Africa's largest event of what kind?",
          },
          options: [
            { zh: "電影節", en: "Film festival" },
            { zh: "音樂節", en: "Music festival" },
            { zh: "時裝週", en: "Fashion week" },
            { zh: "書展", en: "Book fair" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "泛非電影電視節 FESPACO 自 1969 年創辦,是非洲影壇最重要的盛會,最高獎是「金馬鐙獎」。",
            en: "The Panafrican Film and Television Festival, running since 1969, is African cinema's premier event; its top prize is the Golden Stallion.",
          },
        },
      },
      {
        name: { zh: "波波迪烏拉索", en: "Bobo-Dioulasso" },
        blurb: {
          zh: "西南部第二大城,老城區保存傳統建築與活躍的音樂場景。",
          en: "The second city in the southwest, with a historic old quarter and a lively music scene.",
        },
        trivia: {
          question: {
            zh: "波波迪烏拉索著名的大清真寺屬於哪種建築風格?",
            en: "Bobo-Dioulasso's famous Grand Mosque is built in which architectural style?",
          },
          options: [
            { zh: "蘇丹-薩赫爾式泥造建築", en: "Sudano-Sahelian mud-brick architecture" },
            { zh: "拜占庭式", en: "Byzantine" },
            { zh: "摩爾式", en: "Moorish" },
            { zh: "鄂圖曼式", en: "Ottoman" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "清真寺以泥磚砌成,外牆插滿木樁作為維修鷹架,是西非薩赫爾地帶的代表性建築工法。",
            en: "Built of mud brick with wooden beams protruding as permanent scaffolding, it typifies the Sudano-Sahelian style of the West African Sahel.",
          },
        },
      },
      {
        name: { zh: "班福拉", en: "Banfora" },
        blurb: {
          zh: "西南部小城,周邊有瀑布、糖廠與奇岩地景。",
          en: "A small southwestern city surrounded by waterfalls, sugar plantations, and striking rock formations.",
        },
        trivia: {
          question: {
            zh: "班福拉附近著名的辛杜峰(Sindou Peaks)是什麼地貌?",
            en: "The famous Sindou Peaks near Banfora are what kind of landform?",
          },
          options: [
            { zh: "風化侵蝕出的砂岩尖峰群", en: "Eroded sandstone pinnacles" },
            { zh: "火山錐群", en: "Volcanic cones" },
            { zh: "石灰岩鐘乳石洞", en: "Limestone stalactite caves" },
            { zh: "花崗岩巨石陣", en: "Granite boulder fields" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "辛杜峰是砂岩經億萬年風化侵蝕形成的針狀岩峰,是布吉納法索最著名的自然景觀之一。",
            en: "The needle-like sandstone spires were carved by eons of erosion and rank among Burkina Faso's most famous natural sights.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "「布吉納法索」結合兩種本土語言,意為「正直之人的土地」,是 1984 年桑卡拉改的國名。",
        en: "'Burkina Faso' combines two local languages to mean 'land of upright people' — a name chosen by Sankara in 1984.",
      },
    ],
    climate: {
      zh: "熱帶莽原氣候,6 至 9 月為雨季,其餘大多乾燥炎熱;北部屬薩赫爾半乾旱帶,3、4 月最熱可近 40 度。",
      en: "Tropical savanna climate with a June–September rainy season and dry heat the rest of the year; the Sahelian north is semi-arid, with peaks near 40°C in March and April.",
    },
    travelTips: [
      {
        zh: "近年安全情勢變化快,行前務必查詢本國外交部門的最新旅遊警示。",
        en: "The security situation has been volatile in recent years — check your government's latest travel advisories before going.",
      },
      {
        zh: "北部與邊境地區風險較高,行程盡量集中在瓦加杜古等主要城市。",
        en: "Risks are higher in the north and border areas; keep itineraries focused on major cities like Ouagadougou.",
      },
      {
        zh: "乾季風沙大,護目、口罩與保濕用品會派上用場。",
        en: "Dry-season dust is intense — sunglasses, a mask, and moisturizer come in handy.",
      },
    ],
  },
  {
    id: "TGO",
    name: { zh: "多哥", en: "Togo" },
    capital: { zh: "洛美", en: "Lomé" },
    flag: "🇹🇬",
    region: "africa",
    center: { lat: 8.6, lng: 0.9 },
    intro: {
      zh: "西非細長如緞帶的小國,東西最窄處僅數十公里,卻從幾內亞灣海岸一路延伸到北方莽原。首都洛美就貼著迦納邊境,以自由港、椰林海灘與傳統巫毒文化聞名。",
      en: "A ribbon-thin West African country, only a few dozen kilometers across at its narrowest, yet stretching from the Gulf of Guinea coast to northern savanna. The capital Lomé hugs the Ghanaian border, known for its free port, palm-lined beaches, and Vodun traditions.",
    },
    history: {
      zh: "沿海地區曾是奴隸貿易的一環,1884 年成為德國殖民地「多哥蘭」,被視為德國的「模範殖民地」。一戰後由英法分治,西部併入後來的迦納,東部由法國託管,1960 年獨立。1967 年埃亞德馬政變上台,執政 38 年,是非洲在位最久的統治者之一;2005 年他去世後由兒子福雷接任總統至今,政治高度家族化。",
      en: "The coast was once part of the slave trade; in 1884 the area became German Togoland, touted as a 'model colony'. After WWI it was split between Britain and France — the west joined what became Ghana, the French east gained independence in 1960. Gnassingbé Eyadéma seized power in 1967 and ruled 38 years, one of Africa's longest-serving rulers; since his death in 2005 his son Faure has held the presidency, keeping politics a family affair.",
    },
    cities: [
      {
        name: { zh: "洛美", en: "Lomé" },
        blurb: {
          zh: "貼著迦納邊境的海濱首都,自由港與大市場是西非重要轉口樞紐。",
          en: "A seaside capital pressed against the Ghanaian border, whose free port and Grand Marché make it a key West African trade hub.",
        },
        trivia: {
          question: {
            zh: "洛美的阿科德塞瓦市場(Akodessewa)號稱全球最大的什麼市場?",
            en: "Lomé's Akodessewa market is billed as the world's largest market for what?",
          },
          options: [
            { zh: "巫毒(伏都)儀式用品", en: "Voodoo (Vodun) ritual supplies" },
            { zh: "香料", en: "Spices" },
            { zh: "二手衣", en: "Secondhand clothing" },
            { zh: "鮮魚", en: "Fresh fish" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "市場販售儀式所需的獸骨、草藥與護符,被稱為「巫毒超市」,反映伏都信仰在當地的深厚根基。",
            en: "Stalls sell animal bones, herbs, and talismans for rituals — a 'voodoo supermarket' reflecting Vodun's deep local roots.",
          },
        },
      },
      {
        name: { zh: "卡拉", en: "Kara" },
        blurb: {
          zh: "北部大城,是探訪世界遺產古塔瑪庫聚落的門戶。",
          en: "The major northern city and gateway to the World Heritage landscape of Koutammakou.",
        },
        trivia: {
          question: {
            zh: "卡拉附近的世界遺產古塔瑪庫(Koutammakou),以巴塔瑪利巴人的哪種建築聞名?",
            en: "Koutammakou near Kara is a World Heritage site famous for which type of building made by the Batammariba people?",
          },
          options: [
            { zh: "塔樓狀的泥造土屋", en: "Tower-like mud houses" },
            { zh: "石造金字塔", en: "Stone pyramids" },
            { zh: "水上高腳屋", en: "Stilt houses over water" },
            { zh: "洞穴民居", en: "Cave dwellings" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這種名為「塔基安塔」的泥塔屋兼具居住與防禦功能,聚落景觀 2004 年列入世界遺產。",
            en: "The mud tower-houses, called takienta, serve as both homes and fortresses; the landscape was inscribed by UNESCO in 2004.",
          },
        },
      },
      {
        name: { zh: "帕利梅", en: "Kpalimé" },
        blurb: {
          zh: "西南部山區小城,咖啡可可產區,周邊有瀑布與健行路線。",
          en: "A small town in the southwestern hills, at the heart of coffee and cocoa country, with waterfalls and hiking trails nearby.",
        },
        trivia: {
          question: {
            zh: "多哥最高峰阿古山(Mont Agou)就在帕利梅附近,它的海拔大約是多少?",
            en: "Mont Agou, Togo's highest peak, rises near Kpalimé. Roughly how tall is it?",
          },
          options: [
            { zh: "約 1,000 公尺", en: "About 1,000 meters" },
            { zh: "約 3,000 公尺", en: "About 3,000 meters" },
            { zh: "約 5,000 公尺", en: "About 5,000 meters" },
            { zh: "約 300 公尺", en: "About 300 meters" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "阿古山海拔 986 公尺,是這個地勢平緩的細長國家的最高點。",
            en: "Mont Agou tops out at 986 meters — the highest point of this mostly low-lying, elongated country.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "多哥東西最窄處不到 60 公里,南北卻綿延約 600 公里,是非洲形狀最細長的國家之一。",
        en: "Togo is under 60 km wide at its narrowest yet stretches about 600 km north to south — one of Africa's most elongated countries.",
      },
    ],
    climate: {
      zh: "南部熱帶濕潤,一年有兩個雨季;北部屬莽原氣候只有一個雨季,乾季受哈馬丹風影響乾燥多塵。",
      en: "The humid tropical south sees two rainy seasons; the savanna north has one, with the dusty Harmattan wind dominating its dry season.",
    },
    travelTips: [
      {
        zh: "洛美的海灘有離岸流,下水前先確認當地建議,勿單獨游泳。",
        en: "Lomé's beaches have rip currents — check local advice before swimming and never swim alone.",
      },
      {
        zh: "官方語言為法語,市場議價常用當地語言,保持微笑慢慢談。",
        en: "French is the official language; market bargaining often happens in local languages — smile and take your time.",
      },
      {
        zh: "入境需要黃熱病疫苗證明,並建議做好瘧疾防護。",
        en: "Yellow fever vaccination proof is required for entry, and malaria precautions are strongly advised.",
      },
    ],
  },
  {
    id: "BEN",
    name: { zh: "貝南", en: "Benin" },
    capital: { zh: "波多諾伏", en: "Porto-Novo" },
    flag: "🇧🇯",
    region: "africa",
    center: { lat: 9.3, lng: 2.3 },
    intro: {
      zh: "西非幾內亞灣畔的狹長國家,巫毒教(Vodun)的發源地。歷史上的達荷美王國以王宮浮雕與女戰士軍團聞名;今日法定首都是波多諾伏,經濟與政治活動則集中在海港大城柯多努。",
      en: "A slender country on the Gulf of Guinea and the birthplace of Vodun. The historic Kingdom of Dahomey was famed for its palace bas-reliefs and corps of women warriors; today Porto-Novo is the official capital, while commerce and government cluster in the port city of Cotonou.",
    },
    history: {
      zh: "17 世紀興起的達荷美王國以阿波美為都,靠奴隸貿易與強大軍隊(包括著名的女戰士軍團)稱霸沿海,該海岸因而被稱為「奴隸海岸」。1894 年被法國征服,1960 年以「達荷美」之名獨立,政變頻仍;1975 年克雷庫改國名為貝南並實行馬克思主義。1990 年貝南召開全國會議和平轉型,成為非洲民主化浪潮的先聲之一。",
      en: "The Kingdom of Dahomey, based at Abomey from the 17th century, dominated the coast through the slave trade and a formidable army that included its famous women warriors — the shoreline became known as the Slave Coast. Conquered by France in 1894, the country gained independence in 1960 as Dahomey amid frequent coups; in 1975 Kérékou renamed it Benin under Marxist rule. A peaceful national conference in 1990 made Benin an early model of Africa's democratization wave.",
    },
    cities: [
      {
        name: { zh: "柯多努", en: "Cotonou" },
        blurb: {
          zh: "最大城市與實質首都,機車計程車「zemidjan」穿梭於西非數一數二的大市場之間。",
          en: "The largest city and de facto capital, where zemidjan motorcycle taxis weave past one of West Africa's biggest markets.",
        },
        trivia: {
          question: {
            zh: "柯多努附近的甘維耶(Ganvié)有「非洲威尼斯」之稱,這個村落建在哪裡?",
            en: "Ganvié near Cotonou is nicknamed the 'Venice of Africa'. Where is the village built?",
          },
          options: [
            { zh: "諾庫埃湖上的高腳屋群", en: "On stilts over Lake Nokoué" },
            { zh: "紅樹林中的浮島", en: "On floating islands in mangroves" },
            { zh: "河中沙洲", en: "On a river sandbar" },
            { zh: "海上珊瑚礁", en: "On an offshore coral reef" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "數百年前托菲努人為躲避獵奴者遷居湖上,建起整座高腳屋水上村落,至今仍有數萬人居住。",
            en: "Centuries ago the Tofinu built the stilt village on the lake to escape slave raiders; tens of thousands still live there today.",
          },
        },
      },
      {
        name: { zh: "波多諾伏", en: "Porto-Novo" },
        blurb: {
          zh: "法定首都,融合葡式、法式與約魯巴風格的老建築散落街頭。",
          en: "The official capital, dotted with old buildings blending Portuguese, French, and Yoruba styles.",
        },
        trivia: {
          question: {
            zh: "波多諾伏是貝南的法定首都,但多數政府機關與經濟活動集中在哪座城市?",
            en: "Porto-Novo is Benin's official capital, but most government offices and business are concentrated in which city?",
          },
          options: [
            { zh: "柯多努", en: "Cotonou" },
            { zh: "阿波美", en: "Abomey" },
            { zh: "帕拉庫", en: "Parakou" },
            { zh: "維達", en: "Ouidah" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "柯多努擁有主要海港與國際機場,是實質上的行政與經濟中心,形成「雙首都」格局。",
            en: "Cotonou hosts the main seaport and international airport, serving as the de facto seat of government and commerce — a two-capital arrangement.",
          },
        },
      },
      {
        name: { zh: "維達", en: "Ouidah" },
        blurb: {
          zh: "昔日奴隸貿易大港,如今是巫毒信仰的聖城,每年 1 月舉行巫毒節。",
          en: "A former slave-trade port, now Vodun's holy city, hosting the annual Vodun festival every January.",
        },
        trivia: {
          question: {
            zh: "維達海邊的「不歸之門」紀念碑,悼念的是哪段歷史?",
            en: "The Door of No Return memorial on Ouidah's beach commemorates which chapter of history?",
          },
          options: [
            { zh: "跨大西洋奴隸貿易", en: "The transatlantic slave trade" },
            { zh: "殖民時期的黃金貿易", en: "The colonial gold trade" },
            { zh: "二戰的海上撤退", en: "A WWII naval evacuation" },
            { zh: "大航海時代的香料航線", en: "Age of Exploration spice routes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "無數非洲人曾沿「奴隸之路」被押送到這片海灘登船,一去不返;拱門於 1995 年落成以為紀念。",
            en: "Countless Africans were marched down the Slave Route to ships on this beach, never to return; the arch was erected in 1995 in their memory.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "巫毒教(Vodun)發源於貝南一帶,是官方承認的宗教,1 月 10 日為全國性的巫毒節。",
        en: "Vodun originated in the Benin region and is an officially recognized religion, celebrated nationally every January 10.",
      },
      {
        zh: "達荷美王國的女戰士軍團被歐洲人稱為「達荷美亞馬遜」,是近代史上罕見的正規女性部隊。",
        en: "Dahomey's corps of women warriors, dubbed the 'Dahomey Amazons' by Europeans, was a rare all-female regular army in modern history.",
      },
    ],
    climate: {
      zh: "南部沿海濕熱,一年有兩個雨季;北部轉為莽原氣候,乾雨季分明,12 月前後受哈馬丹風影響乾燥多塵。",
      en: "The humid coastal south has two rainy seasons; the savanna north has distinct wet and dry seasons, turning dusty under the Harmattan around December.",
    },
    travelTips: [
      {
        zh: "柯多努的機車計程車速度快但風險高,搭乘務必要求戴安全帽。",
        en: "Cotonou's motorcycle taxis are fast but risky — insist on a helmet if you ride.",
      },
      {
        zh: "想看巫毒節就安排 1 月 10 日前後造訪維達,住宿要提早訂。",
        en: "To catch the Vodun festival, visit Ouidah around January 10 and book lodging early.",
      },
      {
        zh: "北部邊境地區安全情勢較差,行前查詢最新旅遊警示。",
        en: "Security is weaker near the northern borders — check current travel advisories before heading up-country.",
      },
    ],
  },
  {
    id: "CMR",
    name: { zh: "喀麥隆", en: "Cameroon" },
    capital: { zh: "雅溫得", en: "Yaoundé" },
    flag: "🇨🇲",
    region: "africa",
    center: { lat: 5.7, lng: 12.7 },
    intro: {
      zh: "被稱為「小非洲」的中西非國家:南部雨林、西部火山、北部薩赫爾莽原濃縮於一國之內,兩百多個民族說著兩百多種語言。足球是全民信仰,「非洲雄獅」戰績輝煌。",
      en: "Nicknamed 'Africa in miniature', Cameroon packs southern rainforest, western volcanoes, and northern Sahel savanna into one country, with 200-plus ethnic groups and languages. Football is a national religion, and the Indomitable Lions boast a storied record.",
    },
    history: {
      zh: "15 世紀葡萄牙航海家抵達杜阿拉外海,因河中蝦群將河命名為「蝦河」,國名由此而來。1884 年成為德國保護地,一戰後由英法分治;法屬區 1960 年獨立,隔年英屬南喀麥隆公投併入,形成今日法英雙語並存的格局。阿希喬與 1982 年接任的比亞先後長期執政,比亞在位至今超過四十年;西北與西南英語區近年的分離主義衝突仍未平息。",
      en: "Portuguese sailors reaching the Douala coast in the 15th century named the river 'Rio dos Camarões' — river of shrimp — the origin of the country's name. A German protectorate from 1884, it was split between Britain and France after WWI; French Cameroon became independent in 1960, joined a year later by British Southern Cameroons, creating today's French-English bilingual state. Ahidjo and then Paul Biya, in power since 1982, have ruled for decades; separatist conflict in the anglophone Northwest and Southwest continues.",
    },
    cities: [
      {
        name: { zh: "雅溫得", en: "Yaoundé" },
        blurb: {
          zh: "建在連綿丘陵上的政治首都,氣候比沿海涼爽。",
          en: "The political capital, spread across rolling hills and cooler than the coast.",
        },
        trivia: {
          question: {
            zh: "喀麥隆有兩種官方語言,是哪兩種?",
            en: "Cameroon has two official languages. Which are they?",
          },
          options: [
            { zh: "法語與英語", en: "French and English" },
            { zh: "法語與葡萄牙語", en: "French and Portuguese" },
            { zh: "英語與阿拉伯語", en: "English and Arabic" },
            { zh: "法語與德語", en: "French and German" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "殖民時期英法分治留下的遺產:約八成人口住在法語區,兩成在西部英語區。",
            en: "A legacy of the post-WWI Franco-British partition: about 80% of the population lives in francophone regions, 20% in the anglophone west.",
          },
        },
      },
      {
        name: { zh: "杜阿拉", en: "Douala" },
        blurb: {
          zh: "最大城市與主要海港,烏里河口的經濟心臟。",
          en: "The largest city and main seaport, the economic heart at the mouth of the Wouri River.",
        },
        trivia: {
          question: {
            zh: "「喀麥隆」的國名源自葡萄牙語「Rio dos Camarões」,意思是什麼?",
            en: "Cameroon's name comes from the Portuguese 'Rio dos Camarões'. What does it mean?",
          },
          options: [
            { zh: "蝦之河", en: "River of shrimp" },
            { zh: "獅之河", en: "River of lions" },
            { zh: "黃金之河", en: "River of gold" },
            { zh: "鱷魚之河", en: "River of crocodiles" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "15 世紀葡萄牙人見杜阿拉附近的烏里河蝦群密布,便以蝦為河命名,後來演變成國名。",
            en: "Portuguese explorers found the Wouri River near Douala teeming with shrimp and named it accordingly — the name later stuck to the whole country.",
          },
        },
      },
      {
        name: { zh: "布埃亞", en: "Buea" },
        blurb: {
          zh: "喀麥隆火山山腳下的英語區城市,德國殖民時期曾是首府。",
          en: "An anglophone city at the foot of Mount Cameroon, once the capital of German Kamerun.",
        },
        trivia: {
          question: {
            zh: "布埃亞旁的喀麥隆火山是西非最高峰,海拔大約多少?",
            en: "Mount Cameroon, rising beside Buea, is West Africa's highest peak. Roughly how tall is it?",
          },
          options: [
            { zh: "約 4,100 公尺", en: "About 4,100 meters" },
            { zh: "約 2,000 公尺", en: "About 2,000 meters" },
            { zh: "約 5,900 公尺", en: "About 5,900 meters" },
            { zh: "約 1,200 公尺", en: "About 1,200 meters" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "喀麥隆火山高 4,095 公尺,是仍會噴發的活火山,當地人稱之為「雷神的戰車」。",
            en: "Mount Cameroon stands 4,095 meters tall and is still an active volcano, known locally as the 'Chariot of the Gods'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1990 年世界盃,喀麥隆成為第一支闖進八強的非洲球隊,38 歲的米拉大叔一戰成名。",
        en: "At the 1990 World Cup, Cameroon became the first African team to reach the quarterfinals, with 38-year-old Roger Milla stealing the show.",
      },
      {
        zh: "西南部的德本查(Debundscha)年雨量逾一萬毫米,是地球上最多雨的地方之一。",
        en: "Debundscha in the southwest receives over 10,000 mm of rain a year — one of the wettest places on Earth.",
      },
    ],
    climate: {
      zh: "南部與沿海為濕熱的赤道與熱帶氣候,雨量豐沛;往北漸乾,極北地區屬半乾旱薩赫爾氣候,乾雨季分明。",
      en: "The south and coast are hot and humid with abundant equatorial rain; conditions dry northward, and the far north is semi-arid Sahel with sharp wet and dry seasons.",
    },
    travelTips: [
      {
        zh: "西北、西南英語區與極北地區有安全疑慮,行前務必查詢最新旅遊警示。",
        en: "The anglophone Northwest and Southwest and the Far North carry security concerns — check current travel advisories first.",
      },
      {
        zh: "攀登喀麥隆火山需雇用當地嚮導,2 月的山地馬拉松是當地盛事。",
        en: "Climbing Mount Cameroon requires a local guide; the mountain race each February is a major local event.",
      },
      {
        zh: "全境為瘧疾疫區,防蚊與預防用藥不可少,入境需黃熱病疫苗證明。",
        en: "Malaria is present countrywide — bring repellent and prophylaxis, and carry proof of yellow fever vaccination for entry.",
      },
    ],
  },
  {
    id: "CAF",
    name: { zh: "中非共和國", en: "Central African Republic" },
    capital: { zh: "班基", en: "Bangui" },
    flag: "🇨🇫",
    region: "africa",
    center: { lat: 6.6, lng: 20.9 },
    intro: {
      zh: "位居非洲大陸幾何中心附近的內陸國,北部是莽原,南部沒入剛果盆地雨林。鑽石、木材與象群、低地大猩猩是它的自然財富,但長年政局動盪使它成為世界上最不為人知的國家之一。",
      en: "A landlocked country near the geographic heart of Africa, with savanna in the north and Congo Basin rainforest in the south. Diamonds, timber, forest elephants, and lowland gorillas are its natural riches, but chronic instability keeps it among the world's least-known nations.",
    },
    history: {
      zh: "19 世紀末法國以「烏班基-沙立」之名將此地納入法屬赤道非洲,殖民時期橡膠特許公司的壓榨惡名昭彰。1960 年獨立後政變不斷,1976 年博卡薩自封皇帝、改國號為「中非帝國」,加冕典禮耗費鉅資,1979 年即被推翻。2013 年塞雷卡叛軍攻陷班基引發內戰,教派民兵衝突延續至今,聯合國維和部隊長期駐守。",
      en: "France absorbed the area into French Equatorial Africa as Oubangui-Chari in the late 19th century, an era notorious for brutal rubber concessions. Independence in 1960 brought coup after coup; in 1976 Bokassa crowned himself emperor of a renamed 'Central African Empire' in a lavish ceremony, only to be ousted in 1979. The 2013 Séléka rebel seizure of Bangui ignited a civil war whose sectarian militia conflicts persist, with UN peacekeepers long deployed.",
    },
    cities: [
      {
        name: { zh: "班基", en: "Bangui" },
        blurb: {
          zh: "首都與最大城市,殖民時期的河港聚落發展而來。",
          en: "The capital and largest city, grown from a colonial river-port settlement.",
        },
        trivia: {
          question: {
            zh: "班基坐落在哪條河的河畔?",
            en: "Bangui sits on the banks of which river?",
          },
          options: [
            { zh: "烏班基河", en: "The Ubangi River" },
            { zh: "尼羅河", en: "The Nile" },
            { zh: "尼日河", en: "The Niger" },
            { zh: "三比西河", en: "The Zambezi" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "烏班基河是剛果河最大的右岸支流,1889 年法國人在急流旁建立班基據點,對岸即是剛果民主共和國。",
            en: "The Ubangi is the Congo's largest right-bank tributary; the French founded Bangui beside its rapids in 1889, facing the DR Congo across the water.",
          },
        },
      },
      {
        name: { zh: "貝爾貝拉蒂", en: "Berbérati" },
        blurb: {
          zh: "西南部大城,鄰近鑽石產區與剛果盆地雨林。",
          en: "A major southwestern city near diamond fields and the Congo Basin rainforest.",
        },
        trivia: {
          question: {
            zh: "中非共和國西南角的贊加-桑加(Dzanga-Sangha)保護區,以近距離觀察什麼動物聞名?",
            en: "The Dzanga-Sangha reserve in the far southwest is famous for close-up views of which animals?",
          },
          options: [
            { zh: "森林象與西部低地大猩猩", en: "Forest elephants and western lowland gorillas" },
            { zh: "獅子與長頸鹿", en: "Lions and giraffes" },
            { zh: "斑馬與牛羚", en: "Zebras and wildebeest" },
            { zh: "企鵝與海豹", en: "Penguins and seals" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "數十頭森林象每天聚集在贊加林間空地(Dzanga Bai)吸食礦物鹽,是全球罕見的觀察點。",
            en: "Dozens of forest elephants gather daily at the Dzanga Bai clearing to drink mineral-rich water — one of the world's rarest wildlife spectacles.",
          },
        },
      },
      {
        name: { zh: "班巴里", en: "Bambari" },
        blurb: {
          zh: "中部瓦卡河畔的城市,是國內主要的區域中心之一。",
          en: "A city on the Ouaka River in the center of the country, one of its main regional hubs.",
        },
        trivia: {
          question: {
            zh: "1976 年中非共和國曾短暫改為什麼政體?",
            en: "In 1976 the Central African Republic was briefly transformed into what?",
          },
          options: [
            { zh: "帝國(博卡薩自封皇帝)", en: "An empire, with Bokassa crowning himself emperor" },
            { zh: "君主立憲王國", en: "A constitutional monarchy" },
            { zh: "蘇丹國", en: "A sultanate" },
            { zh: "聯邦共和國", en: "A federal republic" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "博卡薩仿效拿破崙加冕稱帝,典禮花費估計占去該國一年預算的相當比例,1979 年帝制隨他倒台而終結。",
            en: "Bokassa staged a Napoleon-style coronation whose cost consumed a hefty share of the national budget; the empire ended with his overthrow in 1979.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "中非共和國的國土幾乎位於非洲大陸的正中心,卻是全球遊客最少造訪的國家之一。",
        en: "The country lies almost at the exact center of the African continent, yet ranks among the least-visited nations on Earth.",
      },
    ],
    climate: {
      zh: "熱帶氣候,南部濕潤、雨季長,北部乾季明顯;大致 5 至 10 月多雨,11 月至 4 月乾燥,北部乾季酷熱。",
      en: "Tropical, with a humid south and long rains and a markedly drier north; broadly wet from May to October and dry from November to April, when the north bakes.",
    },
    travelTips: [
      {
        zh: "多數國家對中非共和國發布最高等級旅遊警示,行前務必確認最新安全情勢與撤離方案。",
        en: "Most governments issue their highest-level travel advisories for CAR — verify the latest security situation and contingency plans before any trip.",
      },
      {
        zh: "如需前往,通常僅限班基市區並應安排可靠的當地接待與交通。",
        en: "If travel is essential, stay within Bangui and arrange trusted local contacts and transport.",
      },
      {
        zh: "醫療資源極有限,黃熱病疫苗證明為入境必備,並備妥瘧疾預防藥物。",
        en: "Medical facilities are extremely limited; yellow fever vaccination proof is required and malaria prophylaxis essential.",
      },
    ],
  },
  {
    id: "GAB",
    name: { zh: "加彭", en: "Gabon" },
    capital: { zh: "自由市", en: "Libreville" },
    flag: "🇬🇦",
    region: "africa",
    center: { lat: -0.6, lng: 11.6 },
    intro: {
      zh: "赤道橫貫的中非國家,將近九成的國土被雨林覆蓋,大象在海灘漫步、河馬在浪裡衝浪的畫面都出自這裡。石油讓它成為非洲人均所得較高的國家之一,也讓它有本錢把 13 座國家公園留給自然。",
      en: "Straddling the equator, Gabon is nearly 90% rainforest — this is where elephants stroll beaches and hippos surf the waves. Oil wealth gives it one of Africa's higher per-capita incomes, and the means to set aside 13 national parks for nature.",
    },
    history: {
      zh: "沿海自 15 世紀起與歐洲人通商,1849 年法國海軍安置獲釋奴隸建立「自由市」,後成為法屬赤道非洲一部分,1960 年獨立。1967 年邦戈就任總統,執政 42 年,2009 年由兒子阿里接班,父子統治超過半世紀;2023 年軍方政變終結邦戈家族時代。石油與錳礦支撐經濟,近年力推生態保育與森林碳匯。",
      en: "The coast traded with Europeans from the 15th century; in 1849 the French navy settled freed slaves at a site named Libreville — 'free town'. Part of French Equatorial Africa, Gabon became independent in 1960. Omar Bongo took the presidency in 1967 and ruled 42 years, succeeded in 2009 by his son Ali — over half a century of family rule ended by a 2023 military coup. Oil and manganese underpin the economy, now paired with a push into conservation and forest carbon.",
    },
    cities: [
      {
        name: { zh: "自由市", en: "Libreville" },
        blurb: {
          zh: "臨大西洋的首都,棕櫚海濱大道與石油財富塑造的現代市容。",
          en: "The Atlantic-facing capital, with a palm-lined corniche and a skyline shaped by oil money.",
        },
        trivia: {
          question: {
            zh: "首都「Libreville」這個地名的由來是什麼?",
            en: "How did the capital get the name 'Libreville'?",
          },
          options: [
            { zh: "1849 年獲釋奴隸在此建村,意為「自由之城」", en: "Freed slaves settled here in 1849 — it means 'free town'" },
            { zh: "以法國國王命名", en: "Named after a French king" },
            { zh: "當地語言「大河之口」的音譯", en: "From a local phrase meaning 'mouth of the great river'" },
            { zh: "葡萄牙語「美麗海灣」的轉寫", en: "From Portuguese for 'beautiful bay'" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法國海軍攔截奴隸船後,將獲釋者安置於此建立聚落,命名呼應美國殖民地時期的「自由城」蒙羅維亞。",
            en: "The French navy settled people freed from a slave ship here, naming the town in the same spirit as Monrovia's 'Freetown' counterparts.",
          },
        },
      },
      {
        name: { zh: "讓蒂爾港", en: "Port-Gentil" },
        blurb: {
          zh: "第二大城與石油工業之都,坐落於外海島嶼上,長期不通公路。",
          en: "The second city and oil capital, sitting on an island long unreachable by road.",
        },
        trivia: {
          question: {
            zh: "加彭經濟數十年來最主要的出口收入來源是什麼?",
            en: "For decades, what has been Gabon's dominant source of export income?",
          },
          options: [
            { zh: "石油", en: "Oil" },
            { zh: "咖啡", en: "Coffee" },
            { zh: "棉花", en: "Cotton" },
            { zh: "可可", en: "Cocoa" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "石油長期占出口大宗,讓蒂爾港是煉油與外海油田的基地;錳礦與木材則是重要的第二梯隊。",
            en: "Oil has long dominated exports, with Port-Gentil as the refining and offshore hub; manganese and timber form the second tier.",
          },
        },
      },
      {
        name: { zh: "蘭巴雷內", en: "Lambaréné" },
        blurb: {
          zh: "奧果韋河中的島城,因一座傳奇的叢林醫院聞名於世。",
          en: "A town on an island in the Ogooué River, world-famous for a legendary jungle hospital.",
        },
        trivia: {
          question: {
            zh: "20 世紀初,哪位後來的諾貝爾和平獎得主在蘭巴雷內創辦叢林醫院?",
            en: "In the early 20th century, which future Nobel Peace Prize laureate founded a jungle hospital at Lambaréné?",
          },
          options: [
            { zh: "史懷哲", en: "Albert Schweitzer" },
            { zh: "德蕾莎修女", en: "Mother Teresa" },
            { zh: "亨利·杜南", en: "Henry Dunant" },
            { zh: "阿爾伯特·盧圖利", en: "Albert Luthuli" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "神學家兼醫師史懷哲 1913 年在此行醫奉獻半世紀,1952 年獲諾貝爾和平獎,醫院至今仍在運作。",
            en: "Theologian-physician Albert Schweitzer served here from 1913 for half a century, winning the 1952 Nobel Peace Prize; the hospital still operates today.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "加彭奧克洛(Oklo)鈾礦是全球唯一已知的天然核反應爐遺跡,約 20 億年前曾自發進行核分裂連鎖反應。",
        en: "Gabon's Oklo uranium deposit is the only known natural nuclear reactor on Earth — it sustained fission chain reactions about two billion years ago.",
      },
      {
        zh: "2002 年加彭一口氣劃設 13 座國家公園,盧安果公園以「衝浪河馬」和漫步海灘的大象聞名。",
        en: "In 2002 Gabon created 13 national parks in one stroke; Loango is famed for its 'surfing hippos' and beach-strolling elephants.",
      },
    ],
    climate: {
      zh: "赤道氣候,終年高溫潮濕,年雨量豐沛;大致有兩個雨季與兩個較乾的季節,6 至 9 月的「大乾季」相對涼爽。",
      en: "Equatorial — hot and humid year-round with heavy rainfall, split into two wet and two drier seasons; the June–September 'long dry season' is relatively cool.",
    },
    travelTips: [
      {
        zh: "國家公園多無公路可達,需搭小飛機或船,行程與嚮導務必提前安排。",
        en: "Most national parks are reachable only by light aircraft or boat — book logistics and guides well in advance.",
      },
      {
        zh: "旅遊基礎設施有限且物價偏高,預算要抓寬鬆。",
        en: "Tourist infrastructure is limited and prices run high — budget generously.",
      },
      {
        zh: "入境需黃熱病疫苗證明,雨林行程請備妥防蚊與防水裝備。",
        en: "Yellow fever vaccination proof is required; pack insect repellent and waterproof gear for rainforest trips.",
      },
    ],
  },
  {
    id: "GNQ",
    name: { zh: "赤道幾內亞", en: "Equatorial Guinea" },
    capital: { zh: "馬拉博", en: "Malabo" },
    flag: "🇬🇶",
    region: "africa",
    center: { lat: 1.6, lng: 10.3 },
    intro: {
      zh: "由大陸的木尼河區與比奧科島等島嶼組成的小國,首都馬拉博在島上而非大陸。它是非洲唯一以西班牙語為主要官方語言的國家;1990 年代發現石油後暴富,人均產值一度高居非洲前列。",
      en: "A small country of the mainland Río Muni region plus islands including Bioko — the capital Malabo sits on an island, not the mainland. It is Africa's only country with Spanish as the main official language; oil discovered in the 1990s made it suddenly rich, with per-capita output once among Africa's highest.",
    },
    history: {
      zh: "比奧科島 15 世紀由葡萄牙人發現,18 世紀轉讓給西班牙,成為西屬幾內亞。1968 年獨立後,首任總統馬西亞斯實行恐怖統治,大量人口逃亡或遇害;1979 年其姪子奧比昂政變上台,執政至今超過四十年,是全球在位最久的總統之一。1990 年代外海油田開發帶來鉅額財富,但分配高度不均,政府並在大陸雨林中興建規劃新都「和平之城」。",
      en: "Bioko was sighted by the Portuguese in the 15th century and ceded to Spain in the 18th, becoming Spanish Guinea. After independence in 1968, first president Macías ruled by terror, killing or driving out a large share of the population; his nephew Obiang seized power in 1979 and has governed for over four decades — among the world's longest-serving presidents. Offshore oil from the 1990s brought vast but unevenly shared wealth, and a planned new capital, Ciudad de la Paz, is rising in the mainland rainforest.",
    },
    cities: [
      {
        name: { zh: "馬拉博", en: "Malabo" },
        blurb: {
          zh: "位於比奧科島北端的首都,火山山影下保存著西班牙殖民風情的老城。",
          en: "The capital on Bioko Island's northern tip, its Spanish colonial old town set beneath a volcano.",
        },
        trivia: {
          question: {
            zh: "赤道幾內亞是非洲唯一以哪種語言為主要官方語言的國家?",
            en: "Equatorial Guinea is the only African country with which language as its main official language?",
          },
          options: [
            { zh: "西班牙語", en: "Spanish" },
            { zh: "葡萄牙語", en: "Portuguese" },
            { zh: "義大利語", en: "Italian" },
            { zh: "荷蘭語", en: "Dutch" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "西屬幾內亞的殖民遺產使西班牙語成為主要官方語言,法語與葡萄牙語後來也列為官方語言。",
            en: "As former Spanish Guinea, it kept Spanish as the main official language, with French and Portuguese added later.",
          },
        },
      },
      {
        name: { zh: "巴塔", en: "Bata" },
        blurb: {
          zh: "大陸木尼河區的最大城市與主要港口,人口超過首都。",
          en: "The largest city and main port of mainland Río Muni, more populous than the capital.",
        },
        trivia: {
          question: {
            zh: "雖然國名叫「赤道」幾內亞,赤道其實並未穿過它的大陸領土。大陸部分位於赤道哪一側?",
            en: "Despite the name, the equator does not actually cross Equatorial Guinea's mainland. On which side of the equator does the mainland lie?",
          },
          options: [
            { zh: "北側", en: "North of it" },
            { zh: "南側", en: "South of it" },
            { zh: "赤道正好從大陸中央穿過", en: "The equator runs right through the mainland" },
            { zh: "赤道穿過首都馬拉博", en: "The equator passes through Malabo" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "木尼河區與比奧科島都在赤道以北,只有南方的安諾本小島位於赤道以南,國名取其「跨赤道」意象。",
            en: "Río Muni and Bioko both lie north of the equator; only the small island of Annobón sits south of it, giving the country its equator-spanning name.",
          },
        },
      },
      {
        name: { zh: "和平之城", en: "Ciudad de la Paz" },
        blurb: {
          zh: "在大陸雨林中從零打造的規劃新都,仍在建設中。",
          en: "A planned new capital being built from scratch in the mainland rainforest, still under construction.",
        },
        trivia: {
          question: {
            zh: "赤道幾內亞規劃新首都的名稱「Ciudad de la Paz」是什麼意思?",
            en: "What does 'Ciudad de la Paz', the name of Equatorial Guinea's planned new capital, mean?",
          },
          options: [
            { zh: "和平之城", en: "City of Peace" },
            { zh: "太陽之城", en: "City of the Sun" },
            { zh: "黃金之城", en: "City of Gold" },
            { zh: "森林之城", en: "City of the Forest" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座原名奧亞拉(Oyala)的新城以石油財富興建,目標是把首都機能從島上的馬拉博遷回大陸。",
            en: "Originally called Oyala, the oil-funded city aims to move capital functions from island-bound Malabo back to the mainland.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "全國人口只有一百多萬,是非洲大陸人口最少的國家之一,國土也被幾內亞灣分成島嶼與大陸兩塊。",
        en: "With just over a million people, it is one of continental Africa's least populous countries, its territory split by the Gulf of Guinea into islands and mainland.",
      },
    ],
    climate: {
      zh: "赤道與熱帶雨林氣候,終年濕熱,比奧科島雨量尤其驚人;大陸區乾雨季交替,但全年都可能降雨。",
      en: "Equatorial rainforest climate, hot and humid all year; Bioko Island is exceptionally rainy, while the mainland alternates wetter and drier spells with rain possible year-round.",
    },
    travelTips: [
      {
        zh: "簽證與入境規定嚴格且常變動,拍照(尤其政府建築)可能引來盤查,務必先確認規定。",
        en: "Visa and entry rules are strict and change often, and photography — especially of government buildings — can draw scrutiny; check the rules first.",
      },
      {
        zh: "旅遊業不發達,住宿與交通選擇有限,英語幾乎不通,會西班牙語最方便。",
        en: "Tourism is undeveloped with limited lodging and transport; English is rare, so Spanish helps enormously.",
      },
      {
        zh: "入境需黃熱病疫苗證明,並做好瘧疾防護。",
        en: "Yellow fever vaccination proof is required, and malaria precautions are essential.",
      },
    ],
  },
  {
    id: "COG",
    name: { zh: "剛果共和國", en: "Republic of the Congo" },
    capital: { zh: "布拉薩市", en: "Brazzaville" },
    flag: "🇨🇬",
    region: "africa",
    center: { lat: -0.7, lng: 15.2 },
    intro: {
      zh: "剛果河右岸的中非國家,常稱「剛果(布)」以區別對岸的剛果民主共和國。約三分之二國土是剛果盆地雨林,北部保護區藏著大猩猩與森林象;石油經濟集中在沿海的黑角。",
      en: "A Central African nation on the Congo River's right bank, often called 'Congo-Brazzaville' to distinguish it from the DR Congo across the water. About two-thirds of it is Congo Basin rainforest sheltering gorillas and forest elephants, while the oil economy centers on coastal Pointe-Noire.",
    },
    history: {
      zh: "此地曾屬剛果王國與泰凱王國勢力範圍,1880 年探險家布拉薩與泰凱王締約,使其成為法國殖民地,布拉薩市並成為法屬赤道非洲首府;二戰期間一度是自由法國的象徵性首都。1960 年獨立,1969 年成立非洲第一個馬克思-列寧主義政權「剛果人民共和國」,1991 年放棄一黨制。薩蘇-恩格索自 1979 年起兩度長期執政,1997 年內戰後掌權至今。",
      en: "Once within the orbit of the Kongo and Teke kingdoms, the area became French after explorer de Brazza's 1880 treaty with the Teke king, and Brazzaville served as capital of French Equatorial Africa — even the symbolic capital of Free France during WWII. Independent in 1960, it declared Africa's first Marxist-Leninist state, the People's Republic of the Congo, in 1969, abandoning one-party rule in 1991. Denis Sassou Nguesso has ruled in two long stints since 1979, holding power since the 1997 civil war.",
    },
    cities: [
      {
        name: { zh: "布拉薩市", en: "Brazzaville" },
        blurb: {
          zh: "剛果河畔的首都,以 19 世紀義裔法籍探險家布拉薩命名。",
          en: "The riverside capital, named for the 19th-century Italian-born French explorer de Brazza.",
        },
        trivia: {
          question: {
            zh: "布拉薩市與哪座外國首都隔剛果河相望,構成全球距離最近的兩座首都?",
            en: "Brazzaville faces which foreign capital across the Congo River, forming the world's closest pair of capital cities?",
          },
          options: [
            { zh: "金夏沙", en: "Kinshasa" },
            { zh: "羅安達", en: "Luanda" },
            { zh: "自由市", en: "Libreville" },
            { zh: "班基", en: "Bangui" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "兩座首都隔河直線距離只有幾公里,渡輪往返其間;它們分屬剛果共和國與剛果民主共和國兩個不同國家。",
            en: "The two capitals sit just a few kilometers apart across the river, linked by ferry — and belong to two different countries, the Republic of the Congo and the DR Congo.",
          },
        },
      },
      {
        name: { zh: "黑角", en: "Pointe-Noire" },
        blurb: {
          zh: "大西洋岸的第二大城,石油工業與深水港帶動的經濟首都。",
          en: "The Atlantic-coast second city, an economic capital powered by oil and a deep-water port.",
        },
        trivia: {
          question: {
            zh: "黑角是哪條殖民時期修築、以工程慘烈聞名的鐵路的終點?",
            en: "Pointe-Noire is the terminus of which colonial-era railway, infamous for its brutal construction?",
          },
          options: [
            { zh: "剛果-大洋鐵路", en: "The Congo-Ocean Railway" },
            { zh: "坦贊鐵路", en: "The TAZARA Railway" },
            { zh: "開普-開羅鐵路", en: "The Cape-to-Cairo Railway" },
            { zh: "達喀爾-尼日鐵路", en: "The Dakar-Niger Railway" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1920–30 年代法國以強迫勞動修築這條連接布拉薩市與海岸的鐵路,造成上萬名勞工死亡。",
            en: "France built the line linking Brazzaville to the coast with forced labor in the 1920s–30s, at the cost of well over ten thousand workers' lives.",
          },
        },
      },
      {
        name: { zh: "多利西", en: "Dolisie" },
        blurb: {
          zh: "南部第三大城,林業與鐵路交會的內陸樞紐。",
          en: "The third city in the south, an inland hub where forestry and the railway meet.",
        },
        trivia: {
          question: {
            zh: "剛果共和國約三分之二的國土被什麼覆蓋?",
            en: "About two-thirds of the Republic of the Congo is covered by what?",
          },
          options: [
            { zh: "熱帶雨林", en: "Tropical rainforest" },
            { zh: "沙漠", en: "Desert" },
            { zh: "高山草原", en: "Alpine grassland" },
            { zh: "鹽沼", en: "Salt marshes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "它是剛果盆地雨林的一部分——這片雨林是僅次於亞馬遜的全球第二大熱帶雨林。",
            en: "The forests are part of the Congo Basin — the world's second-largest tropical rainforest after the Amazon.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "1969 年成立的「剛果人民共和國」是非洲第一個馬克思-列寧主義國家。",
        en: "The People's Republic of the Congo, declared in 1969, was Africa's first Marxist-Leninist state.",
      },
      {
        zh: "1940 至 1943 年,布拉薩市曾是戴高樂領導的自由法國的象徵性首都。",
        en: "From 1940 to 1943, Brazzaville served as the symbolic capital of de Gaulle's Free France.",
      },
    ],
    climate: {
      zh: "赤道與熱帶氣候,終年濕熱;大致 10 月至 5 月多雨,6 至 9 月為較涼爽的乾季,北部雨林幾乎全年有雨。",
      en: "Equatorial and tropical, hot and humid year-round; rains fall roughly October to May with a cooler June–September dry season, while the northern rainforest sees rain nearly all year.",
    },
    travelTips: [
      {
        zh: "別把機票訂錯國家:布拉薩市屬剛果共和國,金夏沙屬剛果民主共和國,兩國簽證各自獨立。",
        en: "Don't book the wrong Congo: Brazzaville is in the Republic of the Congo, Kinshasa in the DR Congo, and each requires its own visa.",
      },
      {
        zh: "北部雨林保護區交通不便且費用高,需透過營地或旅行社提早安排。",
        en: "Northern rainforest reserves are remote and pricey — arrange visits through camps or operators well ahead.",
      },
      {
        zh: "入境需黃熱病疫苗證明,並備妥瘧疾防護。",
        en: "Yellow fever vaccination proof is required for entry; bring malaria protection.",
      },
    ],
  },
  {
    id: "COD",
    name: { zh: "剛果民主共和國", en: "Democratic Republic of the Congo" },
    capital: { zh: "金夏沙", en: "Kinshasa" },
    flag: "🇨🇩",
    region: "africa",
    center: { lat: -2.9, lng: 23.6 },
    intro: {
      zh: "非洲面積第二大的國家,常稱「剛果(金)」,首都金夏沙與對岸的布拉薩市隔剛果河相望。它擁有全球第二大雨林、世界最深的河流,以及電動車時代最關鍵的鈷礦,資源之豐與治理之難形成強烈對比。",
      en: "Africa's second-largest country by area, often called 'Congo-Kinshasa', its capital facing Brazzaville across the Congo River. It holds the world's second-largest rainforest, its deepest river, and the cobalt that powers the electric-vehicle era — vast riches shadowed by hard governance.",
    },
    history: {
      zh: "1885 年比利時國王利奧波德二世將此地據為私人領地「剛果自由邦」,橡膠採集的暴行震驚世界,1908 年改由比利時政府接管。1960 年獨立,首任總理盧蒙巴旋即遇害;莫布杜 1965 年政變上台,1971 年改國名為薩伊,貪腐統治三十餘年。1997 年卡比拉推翻莫布杜後爆發牽動九國的「非洲大戰」,和平協議後東部衝突仍未止息,2019 年完成首次和平政權轉移。",
      en: "In 1885 Belgium's King Leopold II claimed the territory as his personal 'Congo Free State', whose rubber-harvest atrocities shocked the world; Belgium took over in 1908. Independence came in 1960, and first prime minister Lumumba was soon assassinated; Mobutu seized power in 1965, renaming the country Zaire and ruling corruptly for three decades. Kabila's 1997 overthrow of Mobutu ignited the nine-nation 'Great African War'; despite peace deals, conflict smolders in the east, though 2019 brought the first peaceful transfer of power.",
    },
    cities: [
      {
        name: { zh: "金夏沙", en: "Kinshasa" },
        blurb: {
          zh: "上千萬人口的巨型首都,音樂與街頭文化的能量驚人。",
          en: "A megacapital of well over ten million, bursting with musical and street-culture energy.",
        },
        trivia: {
          question: {
            zh: "以人口計,金夏沙常被稱為全球最大的什麼城市?",
            en: "By population, Kinshasa is often called the world's largest city of what kind?",
          },
          options: [
            { zh: "法語城市", en: "French-speaking city" },
            { zh: "葡語城市", en: "Portuguese-speaking city" },
            { zh: "英語城市", en: "English-speaking city" },
            { zh: "阿拉伯語城市", en: "Arabic-speaking city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "金夏沙人口已超越巴黎,是全球人口最多的法語城市;法語是剛果民主共和國的官方語言。",
            en: "Kinshasa's population has surpassed Paris, making it the most populous Francophone city on Earth — French is the DRC's official language.",
          },
        },
      },
      {
        name: { zh: "盧本巴希", en: "Lubumbashi" },
        blurb: {
          zh: "東南部加丹加礦區的首府,全國礦業經濟的心臟。",
          en: "Capital of the Katanga mining belt in the southeast, the heart of the nation's mining economy.",
        },
        trivia: {
          question: {
            zh: "剛果民主共和國供應了全球約七成的哪種電池關鍵金屬?",
            en: "The DR Congo supplies roughly 70% of the world's output of which key battery metal?",
          },
          options: [
            { zh: "鈷", en: "Cobalt" },
            { zh: "鋰", en: "Lithium" },
            { zh: "鎳", en: "Nickel" },
            { zh: "錳", en: "Manganese" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "鈷是鋰電池正極的關鍵材料,主要產自加丹加銅鈷礦帶,使剛果(金)成為電動車供應鏈的樞紐。",
            en: "Cobalt, essential for lithium-ion battery cathodes, comes mainly from the Katanga copper-cobalt belt, making the DRC pivotal to the EV supply chain.",
          },
        },
      },
      {
        name: { zh: "戈馬", en: "Goma" },
        blurb: {
          zh: "東部基伍湖畔的城市,背倚活火山,是維龍加地區的門戶。",
          en: "An eastern city on Lake Kivu beneath an active volcano, the gateway to the Virunga region.",
        },
        trivia: {
          question: {
            zh: "戈馬北方的尼拉貢戈火山(Nyiragongo)以什麼聞名?",
            en: "Mount Nyiragongo, north of Goma, is famous for what?",
          },
          options: [
            { zh: "火山口內有全球數一數二大的熔岩湖", en: "One of the world's largest lava lakes in its crater" },
            { zh: "是全球最高的火山", en: "Being the world's tallest volcano" },
            { zh: "山頂終年覆蓋冰川", en: "A permanently glaciated summit" },
            { zh: "會噴發泥漿的泥火山", en: "Being a mud volcano" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "尼拉貢戈的火山口長期蓄積翻騰的熔岩湖,2002 與 2021 年熔岩流都曾直逼戈馬市區。",
            en: "Nyiragongo's crater has long held a churning lava lake; its lava flows reached the edges of Goma in both 2002 and 2021.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "剛果河是世界最深的河流,部分河段深逾 200 公尺;流量僅次於亞馬遜河。",
        en: "The Congo is the world's deepest river, plunging over 200 meters in places, and second only to the Amazon in discharge.",
      },
      {
        zh: "巴諾布猿(倭黑猩猩)在野外只分布於剛果民主共和國境內。",
        en: "Wild bonobos are found only within the Democratic Republic of the Congo.",
      },
    ],
    climate: {
      zh: "赤道橫貫,中部雨林終年濕熱多雨;南北兩側乾雨季相反,東部高地與火山區氣候較涼爽。",
      en: "The equator bisects the country: the central rainforest is hot and wet year-round, wet and dry seasons flip between north and south, and the eastern highlands stay cooler.",
    },
    travelTips: [
      {
        zh: "東部(北基伍、伊圖里等地)長期有武裝衝突,多國對該區發布最高等級旅遊警示,行前務必查詢最新情勢。",
        en: "The east (North Kivu, Ituri, and nearby areas) has long-running armed conflict and carries many governments' highest travel advisories — check the latest situation before planning.",
      },
      {
        zh: "金夏沙等西部城市相對可行,但治安與交通狀況仍需保持警覺,避免夜間外出。",
        en: "Western cities like Kinshasa are more feasible, but stay alert to crime and traffic conditions and avoid going out at night.",
      },
      {
        zh: "入境需黃熱病疫苗證明;基礎設施有限,國內移動以飛機為主。",
        en: "Yellow fever vaccination proof is required; with limited infrastructure, domestic travel is mostly by air.",
      },
    ],
  },
  {
    id: "AGO",
    name: { zh: "安哥拉", en: "Angola" },
    capital: { zh: "羅安達", en: "Luanda" },
    flag: "🇦🇴",
    region: "africa",
    center: { lat: -12.3, lng: 17.9 },
    intro: {
      zh: "非洲西南岸的葡語大國,石油與鑽石撐起經濟,首都羅安達曾多次名列外派人員生活成本最高的城市。內陸高原涼爽宜人,南部漸入沙漠,卡蘭杜拉瀑布與巨黑馬羚是自然名片。",
      en: "A big Portuguese-speaking country on Africa's southwest coast, its economy built on oil and diamonds — Luanda has repeatedly ranked among the priciest cities for expatriates. The interior highlands are cool and pleasant, the south fades into desert, and Kalandula Falls and the giant sable antelope are its natural icons.",
    },
    history: {
      zh: "葡萄牙人 1575 年建立羅安達,此後統治此地約四百年,安哥拉一度是大西洋奴隸貿易最大的來源地之一。1975 年獨立後,安人運(MPLA)與安盟(UNITA)隨即陷入冷戰代理人性質的內戰,打了 27 年,直到 2002 年薩文比戰死才結束。多斯桑托斯執政 38 年後於 2017 年交棒,石油財富推動重建,但貧富差距依然懸殊。",
      en: "The Portuguese founded Luanda in 1575 and ruled for roughly four centuries, during which Angola became one of the largest sources of the Atlantic slave trade. Independence in 1975 plunged the MPLA and UNITA into a Cold War proxy civil war that lasted 27 years, ending only with Savimbi's death in 2002. After 38 years, dos Santos handed over power in 2017; oil wealth funds reconstruction, though inequality remains stark.",
    },
    cities: [
      {
        name: { zh: "羅安達", en: "Luanda" },
        blurb: {
          zh: "臨大西洋的首都與最大城市,海灣大道與摩天樓見證石油榮景。",
          en: "The Atlantic capital and largest city, its bayfront boulevard and towers built on oil booms.",
        },
        trivia: {
          question: {
            zh: "安哥拉的官方語言是什麼?",
            en: "What is Angola's official language?",
          },
          options: [
            { zh: "葡萄牙語", en: "Portuguese" },
            { zh: "西班牙語", en: "Spanish" },
            { zh: "法語", en: "French" },
            { zh: "英語", en: "English" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "四百年葡萄牙殖民留下的語言遺產,安哥拉是全球葡語使用人口最多的國家之一,僅次於巴西。",
            en: "A legacy of four centuries of Portuguese rule — Angola has one of the world's largest Portuguese-speaking populations, second only to Brazil.",
          },
        },
      },
      {
        name: { zh: "本吉拉", en: "Benguela" },
        blurb: {
          zh: "中部海岸的歷史港城,以殖民建築與同名鐵路聞名。",
          en: "A historic port on the central coast, known for colonial architecture and the railway that bears its name.",
        },
        trivia: {
          question: {
            zh: "本吉拉鐵路從大西洋岸一路通往非洲內陸的哪個礦區?",
            en: "The Benguela Railway runs from the Atlantic coast to which mineral region of the African interior?",
          },
          options: [
            { zh: "剛果民主共和國與尚比亞的銅礦帶", en: "The copper belt of the DR Congo and Zambia" },
            { zh: "南非的金礦區", en: "South Africa's goldfields" },
            { zh: "撒哈拉的鹽礦", en: "Saharan salt mines" },
            { zh: "衣索比亞高原的咖啡產區", en: "Ethiopia's highland coffee country" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這條鐵路連接洛比托港與中非銅礦帶,內戰期間癱瘓多年,近年整修後成為礦產出口的「洛比托走廊」。",
            en: "The line links the port of Lobito to the Central African copper belt; wrecked during the civil war, it has been rebuilt as the mineral-exporting 'Lobito Corridor'.",
          },
        },
      },
      {
        name: { zh: "盧班戈", en: "Lubango" },
        blurb: {
          zh: "南部高原城市,氣候涼爽,鄰近壯觀的通達瓦拉斷崖。",
          en: "A cool southern highland city near the spectacular Tundavala escarpment.",
        },
        trivia: {
          question: {
            zh: "盧班戈山丘上矗立著一座讓人聯想到里約熱內盧的地標,那是什麼?",
            en: "A landmark overlooking Lubango recalls a famous sight in Rio de Janeiro. What is it?",
          },
          options: [
            { zh: "張開雙臂的巨型基督像", en: "A giant Christ statue with outstretched arms" },
            { zh: "巨型佛像", en: "A giant Buddha statue" },
            { zh: "方尖碑", en: "An obelisk" },
            { zh: "凱旋門", en: "A triumphal arch" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「基督君王像」建於葡萄牙殖民時期,與里約的救世基督像、里斯本的基督像系出同源的造型傳統。",
            en: "The Cristo Rei statue, built in the Portuguese colonial era, belongs to the same sculptural tradition as Rio's Christ the Redeemer and Lisbon's Cristo Rei.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "國徽級的象徵動物「巨黑馬羚」僅存於安哥拉,一度被認為在內戰中滅絕,2000 年代重新被證實存活。",
        en: "The giant sable antelope, a national symbol found only in Angola, was feared extinct during the civil war until rediscovered in the 2000s.",
      },
      {
        zh: "卡蘭杜拉瀑布落差約 105 公尺,是非洲最壯觀的大瀑布之一。",
        en: "Kalandula Falls drops about 105 meters, ranking among Africa's most spectacular waterfalls.",
      },
    ],
    climate: {
      zh: "沿海受本吉拉涼流影響,較乾燥且氣溫溫和;內陸高原涼爽,11 月至 4 月為雨季;南部鄰近納米比沙漠,極為乾燥。",
      en: "The cool Benguela Current keeps the coast dry and mild; the interior highlands are cooler with a November–April rainy season, while the far south verges on the Namib Desert.",
    },
    travelTips: [
      {
        zh: "羅安達的住宿與餐飲對外國人來說相當昂貴,預算要抓高。",
        en: "Luanda's hotels and dining are very expensive for foreigners — budget accordingly.",
      },
      {
        zh: "內戰遺留的地雷仍存在於部分偏遠地區,離開主要道路前先確認當地資訊。",
        en: "Landmines from the civil war persist in some remote areas — check local information before leaving main roads.",
      },
      {
        zh: "葡萄牙語幾乎是唯一通用語,英語普及度低。",
        en: "Portuguese is effectively the only lingua franca; English is not widely spoken.",
      },
    ],
  },
  {
    id: "UGA",
    name: { zh: "烏干達", en: "Uganda" },
    capital: { zh: "坎帕拉", en: "Kampala" },
    flag: "🇺🇬",
    region: "africa",
    center: { lat: 1.3, lng: 32.3 },
    intro: {
      zh: "赤道橫貫的東非內陸國,邱吉爾筆下的「非洲明珠」。維多利亞湖、尼羅河源頭、雪峰魯文佐里山與山地大猩猩的家園布恩迪森林齊聚一國,自然資產密度驚人,人口則是全球最年輕的之一。",
      en: "An equator-straddling East African country Churchill dubbed the 'Pearl of Africa'. Lake Victoria, the source of the Nile, the snow-capped Rwenzoris, and Bwindi's mountain gorillas all crowd into one nation — with one of the world's youngest populations.",
    },
    history: {
      zh: "布干達等古老王國在維多利亞湖畔繁盛數百年,1894 年成為英國保護國,1962 年獨立。1971 年阿敏政變上台,八年恐怖統治造成數十萬人喪生並驅逐亞裔族群,1979 年垮台;歷經動盪後,穆塞韋尼 1986 年掌權至今。近數十年經濟穩定成長,並接納大量周邊國家難民,以相對開放的難民政策著稱。",
      en: "Ancient kingdoms like Buganda flourished by Lake Victoria for centuries before the area became a British protectorate in 1894, gaining independence in 1962. Idi Amin's 1971 coup began eight years of terror that killed hundreds of thousands and expelled the Asian community, ending in 1979; after further turmoil, Museveni took power in 1986 and remains in office. Recent decades brought steady growth and a notably open policy toward refugees from neighboring countries.",
    },
    cities: [
      {
        name: { zh: "坎帕拉", en: "Kampala" },
        blurb: {
          zh: "建於七座山丘上的首都,布干達王國的王陵近在市郊。",
          en: "The capital spread over seven hills, with the royal tombs of Buganda on its outskirts.",
        },
        trivia: {
          question: {
            zh: "英國政治家邱吉爾曾以什麼稱號形容烏干達?",
            en: "British statesman Winston Churchill famously described Uganda with what epithet?",
          },
          options: [
            { zh: "非洲明珠", en: "The Pearl of Africa" },
            { zh: "非洲屋脊", en: "The Roof of Africa" },
            { zh: "彩虹之國", en: "The Rainbow Nation" },
            { zh: "非洲糧倉", en: "The Breadbasket of Africa" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "邱吉爾 1908 年遊歷後盛讚其風景與生態的多樣,「非洲明珠」自此成為烏干達的代名詞。",
            en: "After his 1908 travels Churchill praised its concentrated variety of scenery and life — 'the Pearl of Africa' has been Uganda's byname ever since.",
          },
        },
      },
      {
        name: { zh: "金賈", en: "Jinja" },
        blurb: {
          zh: "維多利亞湖畔的城市,以泛舟與探險活動聞名。",
          en: "A lakeside city famed for white-water rafting and adventure sports.",
        },
        trivia: {
          question: {
            zh: "金賈被視為哪條世界名河的源頭所在地?",
            en: "Jinja is celebrated as the source of which great river?",
          },
          options: [
            { zh: "尼羅河", en: "The Nile" },
            { zh: "剛果河", en: "The Congo" },
            { zh: "尼日河", en: "The Niger" },
            { zh: "三比西河", en: "The Zambezi" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "白尼羅河在金賈自維多利亞湖流出,1858 年探險家斯皮克在此認定尼羅河源頭,自此聲名大噪。",
            en: "The White Nile exits Lake Victoria at Jinja, identified as the Nile's source by explorer John Hanning Speke in 1858.",
          },
        },
      },
      {
        name: { zh: "恩德比", en: "Entebbe" },
        blurb: {
          zh: "湖畔小城,國際機場與植物園所在,曾是保護國時期的行政中心。",
          en: "A lakeside town hosting the international airport and botanical gardens, once the protectorate's administrative seat.",
        },
        trivia: {
          question: {
            zh: "恩德比坐落在哪座湖的湖畔——這也是非洲面積最大的湖泊?",
            en: "Entebbe sits on the shore of which lake — Africa's largest by area?",
          },
          options: [
            { zh: "維多利亞湖", en: "Lake Victoria" },
            { zh: "坦干伊喀湖", en: "Lake Tanganyika" },
            { zh: "馬拉威湖", en: "Lake Malawi" },
            { zh: "查德湖", en: "Lake Chad" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "維多利亞湖面積近 6.9 萬平方公里,是非洲第一、世界數一數二大的淡水湖,由烏干達、肯亞、坦尚尼亞共享。",
            en: "At nearly 69,000 square kilometers, Lake Victoria is Africa's largest lake and among the world's biggest freshwater bodies, shared by Uganda, Kenya, and Tanzania.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "布恩迪「無法穿越的森林」保護著全球近半數的山地大猩猩。",
        en: "Bwindi Impenetrable Forest shelters close to half of the world's mountain gorillas.",
      },
      {
        zh: "烏干達人口年齡中位數不到 20 歲,是全球最年輕的國家之一。",
        en: "With a median age under 20, Uganda has one of the youngest populations on Earth.",
      },
    ],
    climate: {
      zh: "赤道高原氣候,因海拔多在千米以上而終年溫和;大致有兩個雨季(約 3–5 月與 9–11 月),西部山區涼爽多雨。",
      en: "An equatorial highland climate, mild year-round thanks to elevations mostly above 1,000 m; two rainy seasons (roughly March–May and September–November), with the western mountains cool and wet.",
    },
    travelTips: [
      {
        zh: "大猩猩健行許可證數量有限且需提前數月申請,費用不低,請及早規劃。",
        en: "Gorilla trekking permits are limited, pricey, and often sell out months ahead — plan early.",
      },
      {
        zh: "坎帕拉的機車計程車「boda boda」方便但事故率高,搭乘務必戴安全帽。",
        en: "Kampala's boda boda motorcycle taxis are handy but accident-prone — always wear a helmet.",
      },
      {
        zh: "入境需黃熱病疫苗證明,湖區與低地請做好瘧疾防護。",
        en: "Yellow fever vaccination proof is required; take malaria precautions around the lakes and lowlands.",
      },
    ],
  },
  {
    id: "RWA",
    name: { zh: "盧安達", en: "Rwanda" },
    capital: { zh: "吉佳利", en: "Kigali" },
    flag: "🇷🇼",
    region: "africa",
    center: { lat: -2.0, lng: 29.9 },
    intro: {
      zh: "東非的「千丘之國」,層層丘陵與茶園覆蓋整個國家。從 1994 年種族滅絕的深淵中重生,如今以整潔的首都、火山山坡上的山地大猩猩與亮眼的治理成績,成為非洲最令人驚訝的轉型故事。",
      en: "East Africa's 'land of a thousand hills', blanketed in terraced slopes and tea fields. Reborn from the abyss of the 1994 genocide, it now stands out for its spotless capital, mountain gorillas on volcanic slopes, and striking governance record — one of Africa's most surprising turnarounds.",
    },
    history: {
      zh: "盧安達王國統治此地數百年,先後被德國與比利時殖民,殖民者強化胡圖、圖西的族群劃分埋下禍根。1962 年獨立後族群衝突反覆爆發,1994 年 4 月起約一百天內,針對圖西人的種族滅絕奪走約 80 萬條人命。卡加梅領導的愛國陣線終結屠殺後推動和解與重建,經濟持續成長、治安大幅改善,但政治自由度也持續受到外界討論。",
      en: "The Kingdom of Rwanda ruled for centuries before German and then Belgian colonization hardened the Hutu-Tutsi divide, sowing later catastrophe. After independence in 1962, ethnic violence recurred until, over about 100 days from April 1994, the genocide against the Tutsi killed roughly 800,000 people. Kagame's RPF ended the slaughter and drove reconciliation and rebuilding; the economy has grown steadily and security improved dramatically, though political freedoms remain debated.",
    },
    cities: [
      {
        name: { zh: "吉佳利", en: "Kigali" },
        blurb: {
          zh: "丘陵環抱的首都,常被評為非洲最整潔、最有秩序的城市之一。",
          en: "A capital draped over green hills, regularly rated among Africa's cleanest and most orderly cities.",
        },
        trivia: {
          question: {
            zh: "盧安達自 2008 年起全面禁止什麼,吉佳利因此以整潔聞名?",
            en: "Since 2008 Rwanda has banned what nationwide, helping make Kigali famously clean?",
          },
          options: [
            { zh: "塑膠袋", en: "Plastic bags" },
            { zh: "私家汽車", en: "Private cars" },
            { zh: "口香糖", en: "Chewing gum" },
            { zh: "戶外廣告看板", en: "Outdoor billboards" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "盧安達是全球最早全面禁用塑膠袋的國家之一,入境行李中的塑膠袋可能被沒收。",
            en: "Rwanda was among the first countries to ban plastic bags outright — they can even be confiscated from luggage at the border.",
          },
        },
      },
      {
        name: { zh: "穆桑澤", en: "Musanze" },
        blurb: {
          zh: "西北部山城,是進入火山國家公園的門戶。",
          en: "A northwestern mountain town, the gateway to Volcanoes National Park.",
        },
        trivia: {
          question: {
            zh: "穆桑澤旁的火山國家公園,以追蹤什麼動物的行程聞名全球?",
            en: "Volcanoes National Park near Musanze is world-famous for trekking to see which animal?",
          },
          options: [
            { zh: "山地大猩猩", en: "Mountain gorillas" },
            { zh: "黑猩猩", en: "Chimpanzees" },
            { zh: "獅子", en: "Lions" },
            { zh: "非洲象", en: "African elephants" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "維龍加火山群的竹林是山地大猩猩的重要棲地,傳奇學者黛安·弗西曾在此研究大猩猩近二十年。",
            en: "The bamboo forests of the Virunga volcanoes are key mountain gorilla habitat, where Dian Fossey studied the apes for nearly two decades.",
          },
        },
      },
      {
        name: { zh: "胡耶", en: "Huye" },
        blurb: {
          zh: "南部大學城,舊稱布塔雷,國家民族誌博物館所在地。",
          en: "A southern university town, formerly Butare, home to the national ethnographic museum.",
        },
        trivia: {
          question: {
            zh: "盧安達最廣為人知的暱稱是什麼?",
            en: "What is Rwanda's best-known nickname?",
          },
          options: [
            { zh: "千丘之國", en: "Land of a thousand hills" },
            { zh: "千湖之國", en: "Land of a thousand lakes" },
            { zh: "彩虹之國", en: "The Rainbow Nation" },
            { zh: "非洲之角", en: "The Horn of Africa" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "全國地形由連綿不絕的丘陵構成,平均海拔約 1,600 公尺,「千丘之國」名符其實。",
            en: "The whole country is a sea of rolling hills at an average elevation of about 1,600 m — the nickname fits perfectly.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "盧安達國會的女性議員比例長年居全球之冠,一度超過六成。",
        en: "Rwanda's parliament has long had the world's highest share of women — at times over 60%.",
      },
      {
        zh: "每月最後一個週六上午是全民社區服務日「Umuganda」,全國一起打掃與修繕。",
        en: "On the last Saturday morning of each month, the nation joins Umuganda — a communal day of cleaning and public works.",
      },
    ],
    climate: {
      zh: "熱帶高地氣候,因平均海拔高而終年溫和如春;一年有兩個雨季(約 3–5 月與 9–12 月),山區早晚偏涼。",
      en: "Tropical highland climate, spring-like all year thanks to high elevation; two rainy seasons (roughly March–May and September–December), with cool mornings and evenings in the mountains.",
    },
    travelTips: [
      {
        zh: "盧安達治安在非洲名列前茅,但入境禁帶塑膠袋,行李記得先檢查。",
        en: "Rwanda is among Africa's safest countries, but plastic bags are banned — check your luggage before arrival.",
      },
      {
        zh: "大猩猩許可證費用高且名額有限,務必提前透過官方管道預約。",
        en: "Gorilla permits are expensive and limited — book well ahead through official channels.",
      },
      {
        zh: "吉佳利種族滅絕紀念館值得參觀,請以肅穆的心態前往。",
        en: "The Kigali Genocide Memorial is well worth a visit — approach it with due solemnity.",
      },
    ],
  },
];
