import type { CountryExtras } from "../types";

// Advanced question banks for Central and Southern Africa.
// Climate/travelTips live inline in the base country files, so these
// entries are quiz-only.

export const AFRICA_MORE3_EXTRAS: Record<string, CountryExtras> = {
  COD: {
    extraQuiz: [
      {
        question: {
          zh: "非洲歷史最悠久的國家公園於 1925 年在剛果民主共和國東部成立,它是哪一座?",
          en: "Africa's oldest national park was established in 1925 in the eastern DR Congo. Which one is it?",
        },
        options: [
          { zh: "維龍加國家公園", en: "Virunga National Park" },
          { zh: "克魯格國家公園", en: "Kruger National Park" },
          { zh: "塞倫蓋提國家公園", en: "Serengeti National Park" },
          { zh: "埃托沙國家公園", en: "Etosha National Park" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "維龍加最初名為「亞伯特國家公園」,是非洲第一座國家公園,1979 年列入世界遺產,園內同時擁有活火山、冰川山峰與山地大猩猩。",
          en: "Founded as Albert National Park, Virunga was Africa's first national park and became a World Heritage Site in 1979, spanning active volcanoes, glaciated peaks, and mountain gorilla habitat.",
        },
      },
      {
        question: {
          zh: "1971 至 1997 年間,剛果民主共和國曾使用哪個國名?",
          en: "Between 1971 and 1997, the Democratic Republic of the Congo went by what name?",
        },
        options: [
          { zh: "薩伊", en: "Zaire" },
          { zh: "剛果自由邦", en: "The Congo Free State" },
          { zh: "比屬剛果", en: "The Belgian Congo" },
          { zh: "加丹加", en: "Katanga" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "莫布杜 1971 年推行「本土化」政策,將國名改為薩伊(取自剛果河的古名);1997 年卡比拉推翻莫布杜後才恢復現名。",
          en: "Under his 'authenticity' campaign, Mobutu renamed the country Zaire in 1971, after an old name for the Congo River; the current name returned when Kabila toppled him in 1997.",
        },
      },
      {
        question: {
          zh: "1974 年在金夏沙舉行、阿里擊倒福爾曼奪回重量級拳王的傳奇比賽,綽號是什麼?",
          en: "The legendary 1974 Kinshasa bout in which Muhammad Ali knocked out George Foreman to reclaim the heavyweight title is known by what nickname?",
        },
        options: [
          { zh: "叢林之戰", en: "The Rumble in the Jungle" },
          { zh: "馬尼拉之戰", en: "The Thrilla in Manila" },
          { zh: "世紀之戰", en: "The Fight of the Century" },
          { zh: "蒙特婁之戰", en: "The Brawl in Montreal" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這場比賽於 1974 年 10 月 30 日在當時的薩伊舉行,阿里以「倚繩戰術」消耗福爾曼後在第八回合將他擊倒,被視為 20 世紀最偉大的體育事件之一。",
          en: "Held on October 30, 1974 in what was then Zaire, Ali wore Foreman down with his 'rope-a-dope' tactic before an eighth-round knockout — often ranked among the greatest sporting events of the 20th century.",
        },
      },
    ],
  },
  AGO: {
    extraQuiz: [
      {
        question: {
          zh: "17 世紀率領恩東戈與馬塔姆巴王國,以外交與游擊戰長期對抗葡萄牙人的傳奇女王是誰?",
          en: "Which legendary 17th-century queen of Ndongo and Matamba resisted the Portuguese for decades through diplomacy and guerrilla war?",
        },
        options: [
          { zh: "恩津加女王", en: "Queen Nzinga" },
          { zh: "雅阿·阿桑特瓦", en: "Yaa Asantewaa" },
          { zh: "阿瑪尼雷納絲", en: "Amanirenas" },
          { zh: "拉娜瓦洛娜一世", en: "Ranavalona I" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "恩津加(約 1583–1663)以談判桌上的機智與數十年的武裝抵抗聞名,至今仍是安哥拉的民族英雄,羅安達立有她的雕像。",
          en: "Nzinga (c. 1583–1663) is remembered for her wit at the negotiating table and decades of armed resistance; she remains an Angolan national heroine, honored with a statue in Luanda.",
        },
      },
      {
        question: {
          zh: "安哥拉哪個盛產石油的省分是一塊「飛地」,被剛果民主共和國的領土與本土隔開?",
          en: "Which oil-rich Angolan province is an exclave, separated from the rest of the country by DR Congo territory?",
        },
        options: [
          { zh: "卡賓達", en: "Cabinda" },
          { zh: "本吉拉", en: "Benguela" },
          { zh: "威拉", en: "Huíla" },
          { zh: "納米貝", en: "Namibe" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "剛果民主共和國沿剛果河出海的狹長走廊,把卡賓達與安哥拉本土切開;這塊飛地的近海油田長期貢獻安哥拉可觀的石油產量。",
          en: "The DRC's narrow corridor to the sea along the Congo River cuts Cabinda off from mainland Angola; the exclave's offshore fields have long supplied a large share of Angola's oil.",
        },
      },
      {
        question: {
          zh: "起源於安哥拉、名稱在金邦杜語中意為「派對」,如今風靡全球舞池的雙人舞音樂風格是什麼?",
          en: "Which partner-dance music style, born in Angola and named after the Kimbundu word for 'party', now fills dance floors worldwide?",
        },
        options: [
          { zh: "奇宗巴", en: "Kizomba" },
          { zh: "騷莎", en: "Salsa" },
          { zh: "巴恰塔", en: "Bachata" },
          { zh: "探戈", en: "Tango" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "奇宗巴 1980 年代在羅安達從傳統森巴(semba)音樂演變而來,節奏緩慢貼身,如今在歐洲與世界各地都有大批愛好者。",
          en: "Kizomba evolved in 1980s Luanda from Angola's traditional semba music; slow and close-embrace, it has since won devoted followings across Europe and beyond.",
        },
      },
    ],
  },
  UGA: {
    extraQuiz: [
      {
        question: {
          zh: "烏干達最高點瑪格麗塔峰(5,109 公尺)位於哪座被稱為「月亮山」的山脈?",
          en: "Uganda's highest point, Margherita Peak (5,109 m), rises in which range nicknamed the 'Mountains of the Moon'?",
        },
        options: [
          { zh: "魯文佐里山脈", en: "The Rwenzori Mountains" },
          { zh: "維龍加山脈", en: "The Virunga Mountains" },
          { zh: "阿伯德爾山脈", en: "The Aberdare Range" },
          { zh: "阿特拉斯山脈", en: "The Atlas Mountains" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "魯文佐里橫跨烏干達與剛果(金)邊界,瑪格麗塔峰是非洲第三高峰,赤道上竟有冰川;「月亮山」之名可追溯到古希臘地理學家托勒密的記載。",
          en: "Straddling the Uganda-DRC border, the Rwenzoris hold Africa's third-highest peak — glaciated despite sitting on the equator. The 'Mountains of the Moon' epithet traces back to the ancient geographer Ptolemy.",
        },
      },
      {
        question: {
          zh: "烏干達境內延續數百年的布干達王國,其國王的傳統稱號是什麼?",
          en: "In Uganda's centuries-old kingdom of Buganda, what is the traditional title of the king?",
        },
        options: [
          { zh: "卡巴卡", en: "Kabaka" },
          { zh: "奧巴", en: "Oba" },
          { zh: "阿散蒂赫內", en: "Asantehene" },
          { zh: "尼格斯", en: "Negus" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "布干達是烏干達境內最大的傳統王國,「烏干達」的國名即源自布干達;卡巴卡今日仍是文化上的領袖,王宮與卡蘇比王陵都在坎帕拉近郊。",
          en: "Buganda is Uganda's largest traditional kingdom and the source of the country's name; the Kabaka remains a cultural figurehead, with the palace and Kasubi royal tombs near Kampala.",
        },
      },
      {
        question: {
          zh: "烏干達的代表性主食「馬托給」(matoke)是用什麼食材蒸煮搗製而成?",
          en: "Uganda's signature staple dish, matoke, is steamed and mashed from what ingredient?",
        },
        options: [
          { zh: "青綠色的烹飪用香蕉", en: "Green cooking bananas" },
          { zh: "玉米粉", en: "Maize flour" },
          { zh: "樹薯", en: "Cassava" },
          { zh: "小米", en: "Millet" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬托給用東非高地特有的烹飪蕉,以蕉葉包裹蒸熟後搗成泥,配花生醬或燉肉;烏干達是全球人均香蕉消費量最高的國家之一。",
          en: "Matoke uses East African Highland cooking bananas, steamed in banana leaves and mashed, served with groundnut sauce or stew — Ugandans rank among the world's top per-capita banana eaters.",
        },
      },
    ],
  },
  RWA: {
    extraQuiz: [
      {
        question: {
          zh: "盧安達與剛果(金)交界的基伍湖,深層湖水蘊藏大量什麼,並被抽取出來發電?",
          en: "Lake Kivu, on the border between Rwanda and the DR Congo, holds vast amounts of what in its deep waters, now extracted to generate electricity?",
        },
        options: [
          { zh: "甲烷", en: "Methane gas" },
          { zh: "石油", en: "Crude oil" },
          { zh: "硫磺", en: "Sulfur" },
          { zh: "岩鹽", en: "Rock salt" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "火山活動與湖底分解作用讓基伍湖深處溶有巨量甲烷與二氧化碳,盧安達的 KivuWatt 電廠將甲烷抽出發電,同時降低湖水氣體噴發的風險。",
          en: "Volcanic activity and decomposition have saturated Kivu's depths with methane and CO2; Rwanda's KivuWatt plant siphons the methane for power while reducing the risk of a dangerous gas eruption.",
        },
      },
      {
        question: {
          zh: "盧安達在非洲相當罕見,幾乎全體國民都說同一種本土語言,那是哪種語言?",
          en: "Unusually for Africa, nearly all Rwandans share a single indigenous language. Which one?",
        },
        options: [
          { zh: "基尼亞盧安達語", en: "Kinyarwanda" },
          { zh: "史瓦希里語", en: "Swahili" },
          { zh: "林加拉語", en: "Lingala" },
          { zh: "盧干達語", en: "Luganda" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "基尼亞盧安達語是全國通行的母語,與蒲隆地的基隆迪語高度互通;盧安達的官方語言另包括英語、法語與史瓦希里語。",
          en: "Kinyarwanda is the mother tongue spoken nationwide and is largely mutually intelligible with Burundi's Kirundi; English, French, and Swahili are also official languages.",
        },
      },
      {
        question: {
          zh: "第一次世界大戰後至獨立前,盧安達與哪個鄰國一起被比利時合併治理為「盧安達-烏隆迪」?",
          en: "After World War I and until independence, Rwanda was administered by Belgium together with which neighbor as 'Ruanda-Urundi'?",
        },
        options: [
          { zh: "蒲隆地", en: "Burundi" },
          { zh: "烏干達", en: "Uganda" },
          { zh: "坦尚尼亞", en: "Tanzania" },
          { zh: "剛果民主共和國", en: "The DR Congo" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這片原屬德屬東非的土地,一戰後成為比利時受國際聯盟委任統治的「盧安達-烏隆迪」,1962 年分別獨立為盧安達與蒲隆地兩國。",
          en: "Carved from German East Africa, the territory became a Belgian League of Nations mandate; in 1962 it split into the two independent states of Rwanda and Burundi.",
        },
      },
    ],
  },
  ZMB: {
    extraQuiz: [
      {
        question: {
          zh: "1970 年代在中國援建下完成的坦贊鐵路,讓內陸的尚比亞不經白人政權統治的羅德西亞,直通哪個印度洋港口?",
          en: "The TAZARA railway, completed in the 1970s with Chinese assistance, gave landlocked Zambia a route to which Indian Ocean port, bypassing white-ruled Rhodesia?",
        },
        options: [
          { zh: "三蘭港", en: "Dar es Salaam" },
          { zh: "蒙巴薩", en: "Mombasa" },
          { zh: "德班", en: "Durban" },
          { zh: "貝拉", en: "Beira" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "這條約 1,860 公里的鐵路從尚比亞的卡皮里姆波希通往坦尚尼亞的三蘭港,是當時中國在非洲最大的援外工程,讓銅礦出口不必仰賴南方的白人政權。",
          en: "Running about 1,860 km from Kapiri Mposhi to Dar es Salaam in Tanzania, it was China's largest foreign-aid project in Africa at the time, freeing copper exports from dependence on white-minority regimes to the south.",
        },
      },
      {
        question: {
          zh: "尚比亞西部洛齊人的年度盛典「庫翁博卡」(Kuomboka)中,國王(Litunga)會進行什麼儀式?",
          en: "In the Kuomboka, the annual ceremony of Zambia's Lozi people, what does the king (the Litunga) do?",
        },
        options: [
          { zh: "乘皇家巨舟從氾濫的平原遷往高地", en: "Sails a royal barge from the flooded plains to higher ground" },
          { zh: "登上聖山點燃整夜的篝火", en: "Climbs a sacred mountain to light an all-night bonfire" },
          { zh: "徒步橫越沙漠進行朝聖", en: "Walks a pilgrimage across the desert" },
          { zh: "在瀑布下沐浴祈求豐收", en: "Bathes beneath a waterfall to pray for the harvest" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「庫翁博卡」意為「離開水面」:雨季尾聲尚比西河淹沒巴羅策平原時,國王乘上黑白條紋的皇家巨舟 Nalikwanda,在鼓聲中率族人遷往高地王宮。",
          en: "Kuomboka means 'to get out of the water': as the Zambezi floods the Barotse plain late in the rains, the Litunga boards the striped royal barge Nalikwanda and leads his people to the highland capital amid drumming.",
        },
      },
      {
        question: {
          zh: "尚比亞北部的班韋烏盧溼地,是哪種外型宛如史前生物的巨鳥最著名的棲息地之一?",
          en: "Zambia's Bangweulu Wetlands are one of the most famous strongholds of which huge, prehistoric-looking bird?",
        },
        options: [
          { zh: "鯨頭鸛", en: "The shoebill" },
          { zh: "鴕鳥", en: "The ostrich" },
          { zh: "禿鸛", en: "The marabou stork" },
          { zh: "蛇鷲", en: "The secretary bird" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "鯨頭鸛站立可超過一公尺,巨大的鞋狀喙專門捕食肺魚,只分布於非洲中東部的沼澤;班韋烏盧是全球最容易觀察牠的地點之一。",
          en: "Standing over a meter tall with a massive shoe-shaped bill built for catching lungfish, the shoebill lives only in central-eastern African swamps — and Bangweulu is one of the best places on Earth to see one.",
        },
      },
    ],
  },
  MWI: {
    extraQuiz: [
      {
        question: {
          zh: "探險家李文斯頓因夜裡漁火點點如繁星,給了馬拉威湖什麼詩意的別稱?",
          en: "Struck by fishermen's lanterns twinkling at night, explorer David Livingstone gave Lake Malawi what poetic nickname?",
        },
        options: [
          { zh: "星星之湖", en: "The Lake of Stars" },
          { zh: "風暴之湖", en: "The Lake of Storms" },
          { zh: "黃金之湖", en: "The Lake of Gold" },
          { zh: "天空之鏡", en: "The Mirror of the Sky" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「星星之湖」之名沿用至今,馬拉威最著名的國際音樂節「Lake of Stars」就以此命名,每年在湖畔沙灘舉行。",
          en: "The name endures today — Malawi's best-known international music festival, Lake of Stars, is named after it and takes place on the lake's beaches.",
        },
      },
      {
        question: {
          zh: "馬拉威南部哪座巨大的花崗岩山塊,以 3,002 公尺的薩皮圖瓦峰成為全國最高點?",
          en: "Which huge granite massif in southern Malawi contains the country's highest point, Sapitwa Peak at 3,002 m?",
        },
        options: [
          { zh: "穆蘭傑山", en: "Mount Mulanje" },
          { zh: "松巴高原", en: "The Zomba Plateau" },
          { zh: "尼卡高原", en: "The Nyika Plateau" },
          { zh: "納穆利山", en: "Mount Namuli" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "穆蘭傑山拔地而起於茶園平原之上,當地人稱之為「霧中之島」;特有的穆蘭傑雪松是馬拉威的國樹。薩皮圖瓦在當地語中意為「勿往之地」。",
          en: "Mulanje rises abruptly from tea-covered plains and is locally called an 'island in the sky'; the endemic Mulanje cedar is Malawi's national tree. 'Sapitwa' means 'do not go there' in the local tongue.",
        },
      },
      {
        question: {
          zh: "馬拉威奇瓦族(Chewa)由祕密結社表演、獲聯合國教科文組織登錄的面具「大舞」叫什麼?",
          en: "What is the name of the masked 'great dance' of Malawi's Chewa people, performed by a secret society and recognized by UNESCO?",
        },
        options: [
          { zh: "古勒瓦姆庫魯", en: "Gule Wamkulu" },
          { zh: "馬基希面具舞", en: "The Makishi masquerade" },
          { zh: "因托雷舞", en: "The Intore dance" },
          { zh: "傑魯薩雷馬舞", en: "The Mbende Jerusarema dance" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "古勒瓦姆庫魯由尼奧(Nyau)祕密結社的舞者扮成祖靈、野獸與各種角色演出,流傳於馬拉威、尚比亞與莫三比克的奇瓦族社群,2008 年列入人類非物質文化遺產代表作名錄。",
          en: "Danced by the Nyau secret society, whose members embody spirits, beasts, and archetypes, Gule Wamkulu is practiced among Chewa communities of Malawi, Zambia, and Mozambique and joined UNESCO's intangible heritage list in 2008.",
        },
      },
    ],
  },
  MOZ: {
    extraQuiz: [
      {
        question: {
          zh: "莫三比克巴扎魯托群島的海草床,庇護著西印度洋最後一個可長期存續的哪種海洋哺乳類族群?",
          en: "The seagrass beds of Mozambique's Bazaruto Archipelago shelter the western Indian Ocean's last viable population of which marine mammal?",
        },
        options: [
          { zh: "儒艮", en: "The dugong" },
          { zh: "海牛", en: "The manatee" },
          { zh: "座頭鯨", en: "The humpback whale" },
          { zh: "南非海狗", en: "The Cape fur seal" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "儒艮是以海草為食的「海中牛」,傳說中人魚的原型之一;牠與海牛是近親,但儒艮尾鰭似鯨、生活在海裡,海牛則主要棲息於大西洋沿岸與淡水。",
          en: "The seagrass-grazing dugong, one inspiration for mermaid legends, is a cousin of the manatee — but has a whale-like fluked tail and lives in the sea, while manatees favor Atlantic coasts and fresh water.",
        },
      },
      {
        question: {
          zh: "莫三比克的貨幣「梅蒂卡爾」(metical)得名於阿拉伯世界的一種什麼?",
          en: "Mozambique's currency, the metical, takes its name from what item of the Arab world?",
        },
        options: [
          { zh: "古代的重量與金幣單位", en: "An old unit of weight and gold coinage" },
          { zh: "一種航海用的帆船", en: "A type of sailing dhow" },
          { zh: "一種香料", en: "A spice" },
          { zh: "一種織品", en: "A woven cloth" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "「metical」源自阿拉伯語 mithqal,是古代通行於印度洋貿易圈的重量與金幣單位,反映莫三比克海岸上千年的斯瓦希里-阿拉伯貿易史;1980 年它取代殖民時期的埃斯庫多。",
          en: "The name derives from the Arabic mithqal, a weight and gold-coin unit used across the Indian Ocean trade world — a nod to the coast's millennium of Swahili-Arab commerce. It replaced the colonial escudo in 1980.",
        },
      },
      {
        question: {
          zh: "莫三比克南部的喬皮人(Chopi)以哪種樂器的大型合奏聞名,並獲聯合國教科文組織登錄為非物質文化遺產?",
          en: "The Chopi people of southern Mozambique are famed for large orchestras of which instrument, recognized by UNESCO as intangible heritage?",
        },
        options: [
          { zh: "木琴(廷比拉)", en: "Xylophones (timbila)" },
          { zh: "科拉琴", en: "The kora harp" },
          { zh: "馬林巴鼓", en: "Talking drums" },
          { zh: "瓦利哈筒琴", en: "The valiha tube zither" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "廷比拉木琴以木鍵下懸掛葫蘆共鳴,喬皮人的樂團可多達數十人,連同舞蹈演出完整的組曲,2008 年列入人類非物質文化遺產代表作名錄。",
          en: "Timbila xylophones use gourd resonators beneath wooden keys; Chopi orchestras of dozens of players perform full suites with dancers, and the tradition joined UNESCO's intangible heritage list in 2008.",
        },
      },
    ],
  },
  ZWE: {
    extraQuiz: [
      {
        question: {
          zh: "在大辛巴威遺址出土、如今成為國徽與國旗核心圖案的雕刻文物是什麼?",
          en: "What carved artifact, unearthed at the Great Zimbabwe ruins, now forms the centerpiece of the national flag and coat of arms?",
        },
        options: [
          { zh: "皂石雕成的「辛巴威鳥」", en: "The soapstone 'Zimbabwe Bird'" },
          { zh: "黃金獅子像", en: "A golden lion figure" },
          { zh: "石雕大象", en: "A stone elephant" },
          { zh: "青銅犀牛像", en: "A bronze rhinoceros" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "大辛巴威出土了八尊皂石鳥雕,造型一般認為取材自魚鷹之類的猛禽;殖民時期部分雕像被運往國外,歸還與否至今仍是文化資產議題。",
          en: "Eight soapstone birds, thought to be modeled on a raptor such as the fish eagle, were found at Great Zimbabwe; some were carried abroad in colonial times, and their return remains a heritage issue today.",
        },
      },
      {
        question: {
          zh: "辛巴威的最高峰是東部高地的哪座山,海拔 2,592 公尺?",
          en: "Zimbabwe's highest mountain, at 2,592 m in the Eastern Highlands, is which peak?",
        },
        options: [
          { zh: "尼揚加尼山", en: "Mount Nyangani" },
          { zh: "賓加山", en: "Mount Binga" },
          { zh: "穆蘭傑山", en: "Mount Mulanje" },
          { zh: "塔巴納恩特萊尼亞納山", en: "Thabana Ntlenyana" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "尼揚加尼山位於尼揚加國家公園內,山頂常隱於雲霧;賓加山則是鄰國莫三比克的最高峰,正好座落在兩國交界的奇馬尼馬尼山區。",
          en: "Nyangani stands in Nyanga National Park, its summit often wrapped in mist; Mount Binga, by contrast, is Mozambique's highest peak, sitting on the border in the Chimanimani range.",
        },
      },
      {
        question: {
          zh: "紹納人音樂與祭儀的核心樂器,是哪種以手指撥奏金屬簧片的「拇指琴」?",
          en: "Central to Shona music and spiritual ceremonies is which 'thumb piano', played by plucking metal keys?",
        },
        options: [
          { zh: "姆比拉琴", en: "The mbira" },
          { zh: "科拉琴", en: "The kora" },
          { zh: "巴拉風木琴", en: "The balafon" },
          { zh: "恩戈尼琴", en: "The ngoni" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "姆比拉在木板上排列金屬簧片,常置於葫蘆中增加共鳴,用於與祖靈溝通的儀式;其製作與演奏技藝於 2020 年列入聯合國教科文組織非物質文化遺產。",
          en: "The mbira mounts metal keys on a wooden board, often set in a gourd resonator, and accompanies ceremonies calling on ancestral spirits; its crafting and playing joined UNESCO's intangible heritage list in 2020.",
        },
      },
    ],
  },
  BWA: {
    extraQuiz: [
      {
        question: {
          zh: "波札那的貨幣「普拉」(pula)在茨瓦納語中是什麼意思?",
          en: "What does 'pula', the name of Botswana's currency, mean in Setswana?",
        },
        options: [
          { zh: "雨水", en: "Rain" },
          { zh: "黃金", en: "Gold" },
          { zh: "牛群", en: "Cattle" },
          { zh: "太陽", en: "The sun" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "在喀拉哈里沙漠環繞的國度,雨水珍貴如祝福,「Pula!」同時是國家格言與歡呼語;輔幣「thebe」則意為「盾牌」。",
          en: "In a land ringed by the Kalahari, rain is a blessing — 'Pula!' doubles as the national motto and a cheer, while the sub-unit 'thebe' means 'shield'.",
        },
      },
      {
        question: {
          zh: "波札那東北部哪片全球數一數二大的鹽沼群,是遠古超級湖泊乾涸後的遺跡?",
          en: "Which vast salt pans in northeastern Botswana, among the largest in the world, are the remnants of an ancient superlake?",
        },
        options: [
          { zh: "馬卡迪卡迪鹽沼", en: "The Makgadikgadi Pans" },
          { zh: "埃托沙鹽沼", en: "The Etosha Pan" },
          { zh: "達納基爾鹽原", en: "The Danakil salt flats" },
          { zh: "傑里德鹽湖", en: "Chott el Djerid" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "馬卡迪卡迪是曾覆蓋波札那北部的古馬卡迪卡迪湖乾涸後的殘跡,鹽殼面積上萬平方公里;雨季積水時會引來大批紅鶴與斑馬遷徙。",
          en: "The pans are what remains of ancient Lake Makgadikgadi, which once covered northern Botswana; the salt crust spans thousands of square kilometers and, when seasonal rains pool, draws flamingo flocks and zebra migrations.",
        },
      },
      {
        question: {
          zh: "波札那西北部哪處世界遺產岩丘,因保存四千多幅史前岩畫而被稱為「沙漠中的羅浮宮」?",
          en: "Which World Heritage hills in northwestern Botswana are called the 'Louvre of the Desert' for their 4,500-plus prehistoric rock paintings?",
        },
        options: [
          { zh: "措迪洛岩丘", en: "The Tsodilo Hills" },
          { zh: "馬托博丘陵", en: "The Matobo Hills" },
          { zh: "布蘭德山", en: "Brandberg Mountain" },
          { zh: "德拉肯斯堡山脈", en: "The Drakensberg" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "措迪洛 2001 年列入世界遺產,岩畫最早可追溯至千年以上,至今仍被桑人與漢巴庫舒人視為祖靈居住的聖地。",
          en: "Inscribed in 2001, Tsodilo's paintings span more than a millennium, and the hills remain sacred to the San and Hambukushu peoples as a dwelling place of ancestral spirits.",
        },
      },
    ],
  },
  NAM: {
    extraQuiz: [
      {
        question: {
          zh: "納米布沙漠特有的哪種奇特植物,一生只長兩片不斷延展的葉子,壽命可超過 1,000 年?",
          en: "Which bizarre plant endemic to the Namib Desert grows only two ever-lengthening leaves in its lifetime and can live over 1,000 years?",
        },
        options: [
          { zh: "百歲蘭", en: "Welwitschia" },
          { zh: "箭袋樹", en: "The quiver tree" },
          { zh: "猴麵包樹", en: "The baobab" },
          { zh: "半人樹", en: "The halfmens" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "百歲蘭僅分布於納米比亞與安哥拉的納米布沙漠,兩片帶狀葉被風撕裂成叢後貌似多葉;它也出現在納米比亞的國徽上。",
          en: "Found only in the Namib of Namibia and Angola, Welwitschia's two strap-like leaves shred in the wind into a tangled mass; the plant also features on Namibia's coat of arms.",
        },
      },
      {
        question: {
          zh: "納米比亞南部哪座峽谷長約 160 公里、深達 550 公尺,常被稱為非洲最大的峽谷?",
          en: "Which canyon in southern Namibia, about 160 km long and up to 550 m deep, is often called Africa's largest?",
        },
        options: [
          { zh: "魚河峽谷", en: "The Fish River Canyon" },
          { zh: "布萊德河峽谷", en: "The Blyde River Canyon" },
          { zh: "奧杜韋峽谷", en: "Olduvai Gorge" },
          { zh: "藍尼羅河峽谷", en: "The Blue Nile Gorge" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "魚河是納米比亞境內最長的河流,乾季時峽谷底只剩串串水潭;沿峽谷健行的五日路線是南部非洲最經典的徒步挑戰之一。",
          en: "The Fish River is Namibia's longest, dwindling to a chain of pools in the dry season; the five-day hike along the canyon floor is one of southern Africa's classic trekking challenges.",
        },
      },
      {
        question: {
          zh: "儘管德語與南非語仍廣泛通行,納米比亞 1990 年獨立後憲法規定的唯一官方語言是什麼?",
          en: "Although German and Afrikaans are still widely spoken, what did Namibia's 1990 constitution make the sole official language?",
        },
        options: [
          { zh: "英語", en: "English" },
          { zh: "德語", en: "German" },
          { zh: "南非語", en: "Afrikaans" },
          { zh: "葡萄牙語", en: "Portuguese" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "獨立後為避免偏袒任一族群、並與種族隔離時期的語言政策切割,納米比亞選擇了母語人口極少的英語作為唯一官方語言;奧萬博語等本土語言則是最多人使用的母語。",
          en: "To favor no single group and break with apartheid-era language policy, Namibia chose English — the mother tongue of very few residents — as its only official language; Oshiwambo languages are the most widely spoken at home.",
        },
      },
    ],
  },
  LSO: {
    extraQuiz: [
      {
        question: {
          zh: "南部非洲的最高峰位於賴索托東部,海拔 3,482 公尺,它是哪座山?",
          en: "Southern Africa's highest peak, at 3,482 m in eastern Lesotho, is which mountain?",
        },
        options: [
          { zh: "塔巴納恩特萊尼亞納山", en: "Thabana Ntlenyana" },
          { zh: "馬法迪山", en: "Mafadi" },
          { zh: "香檳城堡峰", en: "Champagne Castle" },
          { zh: "水源山", en: "Mont-aux-Sources" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "山名在塞索托語中意為「美麗的小黑山」;馬法迪山(3,450 公尺)則是南非的最高點,正好位於兩國邊界的德拉肯斯堡山脊上。",
          en: "The name means 'beautiful little black mountain' in Sesotho; Mafadi (3,450 m), on the Drakensberg escarpment along the border, is South Africa's highest point.",
        },
      },
      {
        question: {
          zh: "2006 年啟用的賴索托國旗中央,放的是哪件民族象徵物?",
          en: "At the center of Lesotho's flag, adopted in 2006, is which national symbol?",
        },
        options: [
          { zh: "傳統圓錐草帽「莫科羅特洛」", en: "The mokorotlo, the traditional conical straw hat" },
          { zh: "巴索托毛毯", en: "A Basotho blanket" },
          { zh: "長矛與盾牌", en: "A spear and shield" },
          { zh: "一匹巴索托小馬", en: "A Basotho pony" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "莫科羅特洛的造型據說取自國父莫舒舒一世據守的山寨山形,2006 年獨立四十週年時取代舊旗上的盾牌武器圖案,象徵和平。",
          en: "The mokorotlo's shape is said to echo the mountain stronghold of founding king Moshoeshoe I; in 2006, for the 40th anniversary of independence, it replaced the old flag's shield and weapons as a symbol of peace.",
        },
      },
      {
        question: {
          zh: "哪種早期小型恐龍以賴索托命名,化石出土於當地的上艾略特地層?",
          en: "Which small early dinosaur is named after Lesotho, its fossils found in the local Upper Elliot rock formation?",
        },
        options: [
          { zh: "賴索托龍", en: "Lesothosaurus" },
          { zh: "馬拉威龍", en: "Malawisaurus" },
          { zh: "尼日龍", en: "Nigersaurus" },
          { zh: "大椎龍", en: "Massospondylus" },
        ],
        answerIndex: 0,
        explanation: {
          zh: "賴索托龍是侏羅紀早期約一至二公尺長的植食性恐龍,1978 年命名,意為「賴索托的蜥蜴」;賴索托山區也以大量恐龍足跡化石聞名。",
          en: "Lesothosaurus was a one-to-two-meter plant-eater of the Early Jurassic, named in 1978 as the 'lizard from Lesotho'; the kingdom's highlands are also famous for abundant fossil dinosaur trackways.",
        },
      },
    ],
  },
};
