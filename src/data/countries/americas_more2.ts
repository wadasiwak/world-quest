import type { Country } from "../types";

// Americas (batch 3): 7 Eastern Caribbean island nations. These have no
// polygon in countries.geo.json and render as dot markers — `center` must be
// accurate. Content shape is LLM-generatable — see types.ts.

export const AMERICAS_MORE2: Country[] = [
  {
    id: "BRB",
    name: { zh: "巴貝多", en: "Barbados" },
    capital: { zh: "橋鎮", en: "Bridgetown" },
    flag: "🇧🇧",
    region: "americas",
    center: { lat: 13.17, lng: -59.55 },
    intro: {
      zh: "加勒比海最東端的珊瑚岩島國,以蘭姆酒、板球與細白沙灘聞名。島上地勢平緩,甘蔗田與英式教區教堂交錯,首都橋鎮的歷史城區與軍營區被列為世界遺產。2021 年改制為共和國,流行天后蕾哈娜是本國的國家英雄。",
      en: "The easternmost Caribbean nation, a low coral-limestone island famed for rum, cricket, and powdery beaches. Cane fields and English parish churches dot the countryside, and historic Bridgetown is a World Heritage Site. It became a republic in 2021, and pop star Rihanna is a National Hero.",
    },
    history: {
      zh: "阿拉瓦克與加勒比原住民曾先後在島上生活。1627 年英格蘭人建立殖民地,此後三百餘年從未被其他歐洲強權奪走,是加勒比極少數「純英屬」的島嶼。殖民時期靠奴隸種植甘蔗與製糖致富,1834 年廢除奴隸制後社會逐步轉型,1966 年脫離英國獨立但仍奉英王為元首;2021 年 11 月正式改制共和國,由本國總統取代英國君主,成為 21 世紀最新誕生的共和國之一。",
      en: "Arawak and Carib peoples lived here before the English founded a colony in 1627 — one that never changed hands for over three centuries, making Barbados a rare 'purely British' Caribbean island. Enslaved labor built a sugar economy until abolition in 1834. Independence came in 1966 with the British monarch retained as head of state, until November 2021, when Barbados became a republic with its own president.",
    },
    cities: [
      {
        name: { zh: "橋鎮", en: "Bridgetown" },
        blurb: {
          zh: "首都與最大城,老城區與加里森軍營區共同列為世界遺產。",
          en: "The capital and largest city — its old town and the Garrison area form a World Heritage Site.",
        },
        trivia: {
          question: {
            zh: "巴貝多在哪一年改制為共和國,不再奉英國君主為國家元首?",
            en: "In which year did Barbados become a republic, removing the British monarch as head of state?",
          },
          options: [
            { zh: "2021 年", en: "2021" },
            { zh: "1966 年", en: "1966" },
            { zh: "1997 年", en: "1997" },
            { zh: "2010 年", en: "2010" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1966 年獨立後仍奉英王為元首,直到 2021 年 11 月 30 日改制共和,由珊卓拉·梅森出任首任總統。",
            en: "Barbados kept the Crown after 1966 independence; on 30 November 2021 it became a republic, with Sandra Mason as first president.",
          },
        },
      },
      {
        name: { zh: "奧伊斯汀斯", en: "Oistins" },
        blurb: {
          zh: "南岸漁鎮,每週五晚的烤魚派對是全島最熱鬧的活動。",
          en: "A south-coast fishing town whose Friday-night fish fry is the island's liveliest weekly event.",
        },
        trivia: {
          question: {
            zh: "巴貝多的國菜是玉米糊(cou-cou)配哪一種魚?",
            en: "Barbados' national dish pairs cou-cou (a cornmeal mash) with which fish?",
          },
          options: [
            { zh: "飛魚", en: "Flying fish" },
            { zh: "鬼頭刀", en: "Mahi-mahi" },
            { zh: "紅鯛", en: "Red snapper" },
            { zh: "梭魚", en: "Barracuda" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴貝多素有「飛魚之地」的暱稱,飛魚配 cou-cou 是最具代表性的國菜。",
            en: "Barbados is nicknamed 'the land of the flying fish' — flying fish with cou-cou is its signature national dish.",
          },
        },
      },
      {
        name: { zh: "霍爾敦", en: "Holetown" },
        blurb: {
          zh: "西岸小鎮,歐洲人在巴貝多的第一個定居點,如今是高級度假區。",
          en: "A west-coast town, site of the first European settlement on Barbados and now an upscale resort area.",
        },
        trivia: {
          question: {
            zh: "1627 年在霍爾敦登陸並建立巴貝多殖民地的,是哪個歐洲國家的人?",
            en: "Settlers from which European country landed at Holetown in 1627 to found the Barbados colony?",
          },
          options: [
            { zh: "英格蘭", en: "England" },
            { zh: "法國", en: "France" },
            { zh: "西班牙", en: "Spain" },
            { zh: "荷蘭", en: "The Netherlands" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "英格蘭人於 1627 年在此建立殖民地,此後巴貝多一直由英國統治到 1966 年獨立,從未易主。",
            en: "The English settled here in 1627, and Barbados stayed under British rule — never changing hands — until independence in 1966.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "創立於 1703 年的 Mount Gay 是全球現存最古老的蘭姆酒品牌,蘭姆酒被認為就發源於巴貝多。",
        en: "Founded in 1703, Mount Gay is the world's oldest surviving rum brand — rum itself is widely credited to Barbados.",
      },
      {
        zh: "流行天后蕾哈娜出身巴貝多,2021 年共和國成立當天被封為國家英雄。",
        en: "Pop superstar Rihanna is Barbadian and was declared a National Hero on the day the republic was born in 2021.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,全年約 24–31°C,有東北信風調節。12 月至 5 月為乾季,6 月至 11 月較多雨;因位置偏東南,受颶風直接侵襲的頻率低於多數加勒比島嶼。",
      en: "Tropical maritime, 24–31°C year-round and tempered by trade winds. December–May is dry, June–November wetter; its southeasterly position means fewer direct hurricane hits than most Caribbean islands.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,租車前先熟悉圓環規則。",
        en: "Traffic drives on the left — brush up on roundabout rules before renting a car.",
      },
      {
        zh: "巴貝多元與美元固定 2:1 匯率,美元在多數店家可直接使用。",
        en: "The Barbadian dollar is pegged 2:1 to the US dollar, and USD is accepted almost everywhere.",
      },
      {
        zh: "週五晚上去奧伊斯汀斯魚市吃烤魚、聽現場音樂,是體驗在地生活的最佳方式。",
        en: "Hit the Oistins Fish Fry on Friday night for grilled fish and live music — the best slice of local life.",
      },
      {
        zh: "7 至 8 月的 Crop Over 豐收嘉年華是全島最大慶典,住宿需提早預訂。",
        en: "The Crop Over festival in July–August is the island's biggest party — book lodging well ahead.",
      },
    ],
  },
  {
    id: "LCA",
    name: { zh: "聖露西亞", en: "Saint Lucia" },
    capital: { zh: "卡斯翠", en: "Castries" },
    flag: "🇱🇨",
    region: "americas",
    center: { lat: 13.9, lng: -60.98 },
    intro: {
      zh: "小安地列斯群島中的火山島國,標誌性的皮通雙峰自海面拔起,雨林、硫磺泉與蜜月海灘齊備,是加勒比最熱門的度假地之一。歷史上在英法之間多次易手,留下英語官方語言與法語克里奧爾文化並存的獨特底蘊。",
      en: "A volcanic island in the Lesser Antilles where the iconic twin Pitons rise straight from the sea, packing rainforest, sulphur springs, and honeymoon beaches into one island. Fought over by Britain and France for centuries, it blends official English with a French Creole heritage.",
    },
    history: {
      zh: "原為阿拉瓦克與加勒比原住民的居地。17 世紀起英法兩國為了這座戰略要島反覆交戰,島嶼易手多達 14 次,直到 1814 年才確定歸屬英國。殖民時期以甘蔗種植園經濟為主,1979 年脫離英國獨立並加入大英國協,轉型為香蕉出口與觀光業經濟。小小島國培養出兩位諾貝爾獎得主;2007 年與中華民國(台灣)復交,是台灣在加勒比海的邦交國之一。",
      en: "Home to Arawak and Carib peoples before Britain and France fought over the strategic island from the 17th century — it changed hands 14 times before Britain's claim was settled in 1814. A sugar-plantation colony, it gained independence in 1979 and shifted to bananas and tourism. The small nation has produced two Nobel laureates, and since 2007 it has again maintained diplomatic ties with Taiwan.",
    },
    cities: [
      {
        name: { zh: "卡斯翠", en: "Castries" },
        blurb: {
          zh: "首都與郵輪母港,市集與大教堂圍繞著深水港灣。",
          en: "The capital and cruise port, its market and cathedral wrapped around a deep natural harbor.",
        },
        trivia: {
          question: {
            zh: "聖露西亞因英法兩國反覆爭奪、易手多達 14 次,獲得了什麼稱號?",
            en: "Fought over by Britain and France and changing hands 14 times, Saint Lucia earned which nickname?",
          },
          options: [
            { zh: "西印度的海倫", en: "The Helen of the West Indies" },
            { zh: "加勒比的珍珠", en: "The Pearl of the Caribbean" },
            { zh: "向風群島之后", en: "The Queen of the Windwards" },
            { zh: "小巴黎", en: "The Little Paris" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "如同引發特洛伊戰爭的絕世美女海倫,聖露西亞因美麗而讓英法兩強爭奪不休,故得此名。",
            en: "Like Helen of Troy, whose beauty sparked a war, Saint Lucia's charms kept Britain and France fighting over her.",
          },
        },
      },
      {
        name: { zh: "蘇弗里耶爾", en: "Soufrière" },
        blurb: {
          zh: "西南岸的法式老鎮,皮通雙峰與硫磺泉都在近郊。",
          en: "A French-founded town on the southwest coast, gateway to the Pitons and the sulphur springs.",
        },
        trivia: {
          question: {
            zh: "蘇弗里耶爾近郊的皮通雙峰(Pitons)是世界遺產,它們是如何形成的?",
            en: "The twin Pitons near Soufrière are a World Heritage Site. How were they formed?",
          },
          options: [
            { zh: "火山活動形成的岩峰", en: "Volcanic activity that left steep rock spires" },
            { zh: "石灰岩長期溶蝕", en: "Long-term dissolution of limestone" },
            { zh: "冰川切割山谷殘留", en: "Glacial carving of an ancient valley" },
            { zh: "珊瑚礁隆起抬升", en: "Uplift of an old coral reef" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "皮通雙峰是古老火山活動留下的錐狀岩峰,2004 年與周邊海陸區域一同列入世界遺產。",
            en: "The Pitons are volcanic spires left by ancient eruptions, inscribed with the surrounding area as a World Heritage Site in 2004.",
          },
        },
      },
      {
        name: { zh: "格羅斯島", en: "Gros Islet" },
        blurb: {
          zh: "北端的漁村與度假區,以週五街頭派對和鴿子島國家公園聞名。",
          en: "A fishing village turned resort area in the north, famed for its Friday street party and Pigeon Island park.",
        },
        trivia: {
          question: {
            zh: "格羅斯島外的鴿子島(Pigeon Island)原本是離島,後來靠什麼與聖露西亞本島相連?",
            en: "Pigeon Island off Gros Islet was once a separate islet. How was it joined to the Saint Lucia mainland?",
          },
          options: [
            { zh: "人工填築的堤道", en: "A man-made causeway" },
            { zh: "跨海吊橋", en: "A suspension bridge" },
            { zh: "海底隧道", en: "An undersea tunnel" },
            { zh: "天然沙洲自行淤積", en: "A naturally accreted sandbar" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1970 年代填築堤道後,這座曾是英軍要塞的小島與本島相連,現為國家地標公園。",
            en: "A causeway built in the 1970s linked the former British fort island to the mainland; it is now a national landmark park.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "人口不到 20 萬卻出了兩位諾貝爾獎得主:經濟學獎的路易斯與文學獎的沃克特,人均密度居全球前列。",
        en: "With under 200,000 people it boasts two Nobel laureates — economist Arthur Lewis and poet Derek Walcott — among the world's highest per-capita rates.",
      },
      {
        zh: "聖露西亞是台灣的邦交國,兩國於 2007 年恢復外交關係。",
        en: "Saint Lucia is a diplomatic ally of Taiwan; the two restored formal relations in 2007.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,全年約 25–31°C。12 月至 5 月為乾季,6 月至 11 月是雨季並可能受颶風影響;山區雨林降雨明顯多於沿海。",
      en: "Tropical maritime, around 25–31°C all year. December–May is dry; June–November brings rain and hurricane risk, with the rainforest interior far wetter than the coast.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,山路狹窄多彎,租車自駕要多留時間。",
        en: "Drive on the left — mountain roads are narrow and winding, so budget extra travel time.",
      },
      {
        zh: "通用貨幣為東加勒比元(EC$),美元也普遍可用,但找零多為東加勒比元。",
        en: "The Eastern Caribbean dollar (EC$) is the currency; USD is widely accepted but change comes in EC$.",
      },
      {
        zh: "攀登大皮通峰需聘請當地嚮導,建議清晨出發避開高溫。",
        en: "Climbing Gros Piton requires a local guide — start at dawn to beat the heat.",
      },
      {
        zh: "週五晚上的格羅斯島街頭派對有烤物攤與音樂,是最道地的夜生活。",
        en: "The Friday-night Gros Islet street party, with grill stalls and music, is the most local nightlife around.",
      },
    ],
  },
  {
    id: "VCT",
    name: { zh: "聖文森及格瑞那丁", en: "Saint Vincent and the Grenadines" },
    capital: { zh: "金石城", en: "Kingstown" },
    flag: "🇻🇨",
    region: "americas",
    center: { lat: 13.25, lng: -61.2 },
    intro: {
      zh: "由主島聖文森與南延的格瑞那丁群島共 32 個島嶼組成,從火山雨林到私人度假小島風貌多元,是帆船玩家心中的加勒比天堂。主島上的蘇弗里耶爾火山至今活躍,2021 年才剛大規模噴發過。",
      en: "A chain of 32 islands: volcanic Saint Vincent plus the Grenadines trailing south, spanning rainforest peaks to private resort isles — a sailors' Caribbean paradise. La Soufrière volcano on the main island is still active, last erupting on a large scale in 2021.",
    },
    history: {
      zh: "加勒比原住民與非洲人後裔融合成的「黑加勒比人」(加里富納人)曾長期抵抗歐洲殖民,英法兩國爭奪後由英國在 1783 年確立統治;1797 年英軍將數千名加里富納人流放至中美洲外海,形成今日中美洲的加里富納族群。島上經濟長期依賴甘蔗與葛粉種植,1979 年獨立,同年蘇弗里耶爾火山噴發。1981 年與中華民國(台灣)建交,邦誼延續至今。",
      en: "The Garifuna ('Black Caribs'), descendants of Carib islanders and Africans, long resisted colonization; Britain secured the island in 1783 and in 1797 deported thousands of Garifuna to islands off Central America, seeding today's Garifuna communities there. A sugar and arrowroot colony, it gained independence in 1979 — the year La Soufrière also erupted. It established diplomatic ties with Taiwan in 1981, unbroken since.",
    },
    cities: [
      {
        name: { zh: "金石城", en: "Kingstown" },
        blurb: {
          zh: "首都與主要港口,以石造拱廊街景得到「拱門之城」的稱號。",
          en: "The capital and main port, nicknamed the 'City of Arches' for its stone arcades.",
        },
        trivia: {
          question: {
            zh: "金石城植物園裡有一棵著名的麵包樹,相傳其源頭是 1793 年由哪位船長從太平洋帶來的?",
            en: "The Kingstown botanical garden has a famous breadfruit tree, said to descend from stock brought from the Pacific in 1793 by which captain?",
          },
          options: [
            { zh: "「邦蒂號」的布萊船長", en: "Captain Bligh of the Bounty" },
            { zh: "「奮進號」的庫克船長", en: "Captain Cook of the Endeavour" },
            { zh: "「金鹿號」的德瑞克船長", en: "Captain Drake of the Golden Hind" },
            { zh: "「小獵犬號」的費茲羅伊船長", en: "Captain FitzRoy of the Beagle" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "因「邦蒂號叛變」聞名的布萊船長,二度航行成功將大溪地麵包樹苗運抵此地;這座 1765 年創立的植物園是西半球最古老的植物園之一。",
            en: "William Bligh, of Bounty-mutiny fame, delivered Tahitian breadfruit here on his second voyage; the garden, founded in 1765, is among the Western Hemisphere's oldest.",
          },
        },
      },
      {
        name: { zh: "貝基亞島", en: "Bequia" },
        blurb: {
          zh: "格瑞那丁群島中最大的島,保有悠久的造船與航海傳統。",
          en: "The largest of the Grenadines, with a long boat-building and seafaring tradition.",
        },
        trivia: {
          question: {
            zh: "根據國際捕鯨委員會的規定,貝基亞島居民至今保留著什麼傳統活動的少量配額?",
            en: "Under International Whaling Commission rules, the people of Bequia retain a small quota for which traditional activity?",
          },
          options: [
            { zh: "捕鯨", en: "Whaling" },
            { zh: "採集海龜蛋", en: "Harvesting turtle eggs" },
            { zh: "獵捕海豹", en: "Seal hunting" },
            { zh: "採撈黑珊瑚", en: "Harvesting black coral" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "貝基亞島擁有原住民生計捕鯨的豁免,每年可獵捕極少量座頭鯨,是加勒比僅存的傳統捕鯨社群之一。",
            en: "Bequia holds an aboriginal-subsistence whaling exemption allowing a few humpbacks a year — one of the Caribbean's last traditional whaling communities.",
          },
        },
      },
      {
        name: { zh: "瑪斯蒂克島", en: "Mustique" },
        blurb: {
          zh: "私人管理的度假小島,名流別墅雲集而以低調隱密著稱。",
          en: "A privately managed resort island, famously discreet despite its concentration of celebrity villas.",
        },
        trivia: {
          question: {
            zh: "瑪斯蒂克島因哪位英國王室成員在島上擁有度假別墅而聲名大噪?",
            en: "Mustique became famous for the holiday villa of which member of the British royal family?",
          },
          options: [
            { zh: "瑪格麗特公主", en: "Princess Margaret" },
            { zh: "黛安娜王妃", en: "Princess Diana" },
            { zh: "安妮公主", en: "Princess Anne" },
            { zh: "菲利普親王", en: "Prince Philip" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1960 年代島主贈地給女王之妹瑪格麗特公主興建別墅,此後名流紛紛跟進,小島成為王室與明星的度假勝地。",
            en: "In the 1960s the island's owner gifted Princess Margaret land for a villa; celebrities followed, making Mustique a royal and star retreat.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "電影《神鬼奇航》系列曾在聖文森的瓦利拉布灣取景,片場遺跡至今仍保留供遊客參觀。",
        en: "The Pirates of the Caribbean films shot scenes at Wallilabou Bay on Saint Vincent — the set remains a visitor attraction.",
      },
      {
        zh: "聖文森自 1981 年起與台灣建交,是台灣在加勒比海長期穩固的邦交國。",
        en: "Saint Vincent has recognized Taiwan since 1981 and remains one of its steadfast Caribbean diplomatic allies.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,全年約 25–31°C。1 月至 5 月較乾,6 月至 11 月為雨季與颶風季;聖文森主島山區多雨,南方的格瑞那丁小島則相對乾燥。",
      en: "Tropical maritime, roughly 25–31°C year-round. January–May is drier; June–November brings rains and hurricane season. Mountainous Saint Vincent is wet, while the low Grenadines stay drier.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛;跳島主要靠渡輪與小型飛機,班次有限要先查好時刻表。",
        en: "Drive on the left; island-hopping relies on ferries and small planes with limited schedules — check timetables in advance.",
      },
      {
        zh: "通用貨幣為東加勒比元(EC$),離島小店多只收現金。",
        en: "The Eastern Caribbean dollar (EC$) is the currency, and small shops on the outer islands are often cash-only.",
      },
      {
        zh: "攀登蘇弗里耶爾火山來回約需一整天,務必請嚮導並確認火山活動狀態。",
        en: "Hiking La Soufrière volcano is a full-day trip — go with a guide and check current volcanic activity first.",
      },
    ],
  },
  {
    id: "GRD",
    name: { zh: "格瑞那達", en: "Grenada" },
    capital: { zh: "聖喬治", en: "St. George's" },
    flag: "🇬🇩",
    region: "americas",
    center: { lat: 12.1, lng: -61.68 },
    intro: {
      zh: "加勒比海東南部的「香料之島」,肉豆蔻、可可與肉桂的香氣瀰漫山間,國旗上就畫著一顆肉豆蔻。首都聖喬治依馬蹄形港灣而建,被譽為加勒比最美的港口城市之一,大安斯海灘則是招牌白沙勝地。",
      en: "The 'Isle of Spice' in the southeastern Caribbean, its hills fragrant with nutmeg, cocoa, and cinnamon — a nutmeg even appears on the flag. St. George's wraps around a horseshoe harbor often called one of the Caribbean's prettiest, and Grand Anse is its signature white-sand beach.",
    },
    history: {
      zh: "加勒比原住民曾激烈抵抗歐洲人,17 世紀中葉法國人建立殖民地,1763 年依巴黎條約割讓給英國。長期的甘蔗與香料種植園經濟後,1974 年脫離英國獨立。1979 年畢曉普領導左翼革命建立人民革命政府,1983 年他在內鬥中遇害,美國隨即出兵入侵格瑞那達,恢復民選政府。2004 年颶風伊凡重創全島與肉豆蔻產業,其後以觀光與香料業逐步重建。",
      en: "Carib islanders fiercely resisted Europeans before the French colonized Grenada in the mid-1600s; it passed to Britain in 1763 under the Treaty of Paris. After centuries of sugar and spice plantations, it gained independence in 1974. A 1979 leftist revolution under Maurice Bishop ended with his 1983 killing in an internal power struggle, triggering a US invasion that restored elected government. Hurricane Ivan devastated the island and its nutmeg groves in 2004, and tourism and spices have driven the rebuild.",
    },
    cities: [
      {
        name: { zh: "聖喬治", en: "St. George's" },
        blurb: {
          zh: "依火山口港灣而建的首都,彩色屋舍沿坡而上,港景如畫。",
          en: "The capital, built around a volcanic-crater harbor with colorful houses climbing the slopes.",
        },
        trivia: {
          question: {
            zh: "格瑞那達的國旗上畫著哪一種香料,呼應其「香料之島」的稱號?",
            en: "Which spice appears on Grenada's national flag, echoing its 'Isle of Spice' nickname?",
          },
          options: [
            { zh: "肉豆蔻", en: "Nutmeg" },
            { zh: "丁香", en: "Clove" },
            { zh: "肉桂", en: "Cinnamon" },
            { zh: "香草", en: "Vanilla" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "國旗左側畫有一顆裂開的肉豆蔻;格瑞那達曾是全球數一數二的肉豆蔻生產國。",
            en: "A split nutmeg pod sits on the flag's hoist side — Grenada has ranked among the world's top nutmeg producers.",
          },
        },
      },
      {
        name: { zh: "大安斯", en: "Grand Anse" },
        blurb: {
          zh: "首都南郊的度假區,三公里長的白沙灘是全國觀光門面。",
          en: "The resort area south of the capital, fronted by a three-kilometer white-sand beach.",
        },
        trivia: {
          question: {
            zh: "大安斯附近的莫里尼爾灣(Molinere Bay)海底,有一座什麼樣的「世界第一」景點?",
            en: "The seabed of Molinere Bay near Grand Anse hosts what world-first attraction?",
          },
          options: [
            { zh: "全球第一座水下雕塑公園", en: "The world's first underwater sculpture park" },
            { zh: "全球第一間水下郵局", en: "The world's first underwater post office" },
            { zh: "全球第一座水下酒窖", en: "The world's first underwater wine cellar" },
            { zh: "全球第一間水下旅館", en: "The world's first underwater hotel" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "藝術家泰勒 2006 年在此設置系列水下雕塑,兼作人工魚礁,開創了水下雕塑公園的先河。",
            en: "Sculptor Jason deCaires Taylor installed the first pieces in 2006, doubling as artificial reef — the world's first underwater sculpture park.",
          },
        },
      },
      {
        name: { zh: "古亞夫", en: "Gouyave" },
        blurb: {
          zh: "西岸漁鎮與肉豆蔻加工重鎮,號稱「不夜之鎮」。",
          en: "A west-coast fishing town and nutmeg-processing hub, nicknamed 'the town that never sleeps'.",
        },
        trivia: {
          question: {
            zh: "古亞夫每逢週五晚上以什麼活動吸引全島居民與遊客前來?",
            en: "What weekly Friday-night event draws locals and visitors from across Grenada to Gouyave?",
          },
          options: [
            { zh: "「魚肉週五」海鮮夜市", en: "The 'Fish Friday' seafood street fair" },
            { zh: "露天雷鬼演唱會", en: "An open-air reggae concert" },
            { zh: "夜間帆船賽", en: "A night sailing regatta" },
            { zh: "香料拍賣會", en: "A spice auction" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「Fish Friday」夜市上,攤販現烤現炸各式海鮮,配上音樂,是格瑞那達最有名的週間活動之一。",
            en: "At Fish Friday, stalls grill and fry fresh seafood to live music — one of Grenada's best-known weekly traditions.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "格瑞那達曾是僅次於印尼的全球第二大肉豆蔻生產國,2004 年颶風伊凡摧毀大半豆蔻樹後才逐步復原。",
        en: "Grenada was once the world's second-largest nutmeg producer after Indonesia, until Hurricane Ivan flattened most of its trees in 2004.",
      },
      {
        zh: "本地巧克力產業近年崛起,「樹到巧克力棒」的小型可可工坊成為觀光特色。",
        en: "A homegrown chocolate scene has bloomed, with small tree-to-bar cocoa workshops becoming a visitor draw.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,全年約 25–31°C。1 月至 5 月為乾季,6 月至 11 月為雨季;位置偏加勒比南部,颶風直擊機率較低,但 2004 年伊凡是慘痛例外。",
      en: "Tropical maritime, around 25–31°C year-round, dry January–May and wet June–November. Its southern position lowers hurricane risk — 2004's Ivan being the painful exception.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,山區道路陡窄,搭乘共乘小巴是便宜的在地選擇。",
        en: "Drive on the left; mountain roads are steep and narrow, and shared minibuses are a cheap local option.",
      },
      {
        zh: "通用貨幣為東加勒比元(EC$),美元多數飯店與餐廳可收。",
        en: "The Eastern Caribbean dollar (EC$) is the currency; most hotels and restaurants also take USD.",
      },
      {
        zh: "帶著浮潛裝備去莫里尼爾灣看水下雕塑,也可參加玻璃船或潛水行程。",
        en: "Bring snorkel gear to see the Molinere underwater sculptures, or join a glass-bottom boat or dive trip.",
      },
    ],
  },
  {
    id: "ATG",
    name: { zh: "安地卡及巴布達", en: "Antigua and Barbuda" },
    capital: { zh: "聖約翰", en: "St. John's" },
    flag: "🇦🇬",
    region: "americas",
    center: { lat: 17.08, lng: -61.8 },
    intro: {
      zh: "由安地卡、巴布達兩座主島組成的島國,號稱擁有 365 座海灘,「一天換一座」。安地卡是加勒比帆船運動的重鎮,英吉利港的喬治時代船塢名列世界遺產;巴布達則以潟湖與大批軍艦鳥棲地聞名。",
      en: "A two-island nation — Antigua and Barbuda — famously claiming 365 beaches, 'one for every day of the year'. Antigua is a Caribbean sailing capital whose Georgian dockyard at English Harbour is a World Heritage Site, while Barbuda is known for its lagoon and huge frigate bird colony.",
    },
    history: {
      zh: "阿拉瓦克與加勒比人之後,英國人於 1632 年殖民安地卡,發展出大規模甘蔗種植園;18 世紀英國皇家海軍以英吉利港為加勒比基地,納爾遜曾在此駐紮。1834 年廢奴時,安地卡跳過「學徒制」過渡期直接解放奴隸。1981 年在伯德家族主政下獨立,經濟轉向觀光。2017 年颶風厄瑪重創巴布達,全島居民一度撤離至安地卡。",
      en: "After Arawak and Carib settlement, the English colonized Antigua in 1632 and built vast sugar estates; in the 18th century the Royal Navy based itself at English Harbour, where Nelson served. At abolition in 1834, Antigua freed its enslaved people outright, skipping the 'apprenticeship' transition. Independence came in 1981 under the Bird family, with tourism replacing sugar. In 2017 Hurricane Irma devastated Barbuda, forcing the evacuation of the entire island to Antigua.",
    },
    cities: [
      {
        name: { zh: "聖約翰", en: "St. John's" },
        blurb: {
          zh: "首都與郵輪港,白色雙塔大教堂俯瞰著彩色街屋。",
          en: "The capital and cruise port, its twin-towered white cathedral overlooking colorful streets.",
        },
        trivia: {
          question: {
            zh: "安地卡及巴布達的觀光口號宣稱全國擁有幾座海灘?",
            en: "Antigua and Barbuda's tourism slogan claims the country has how many beaches?",
          },
          options: [
            { zh: "365 座", en: "365" },
            { zh: "100 座", en: "100" },
            { zh: "52 座", en: "52" },
            { zh: "1000 座", en: "1,000" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「365 座海灘,一天一座」是安地卡最著名的行銷口號,凸顯其曲折海岸與白沙灣澳之多。",
            en: "'365 beaches, one for every day of the year' is the islands' famous slogan, celebrating their countless sandy coves.",
          },
        },
      },
      {
        name: { zh: "英吉利港", en: "English Harbour" },
        blurb: {
          zh: "南岸的天然避風港,喬治時代海軍船塢至今仍在運作。",
          en: "A sheltered natural harbor on the south coast, home to a still-working Georgian naval dockyard.",
        },
        trivia: {
          question: {
            zh: "英吉利港的世界遺產船塢是以哪位英國海軍名將命名的?",
            en: "The World Heritage dockyard at English Harbour is named after which famous British naval commander?",
          },
          options: [
            { zh: "納爾遜", en: "Horatio Nelson" },
            { zh: "德瑞克", en: "Francis Drake" },
            { zh: "庫克", en: "James Cook" },
            { zh: "布萊", en: "William Bligh" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "納爾遜 1780 年代曾駐紮於此,船塢因而得名「納爾遜船塢」,2016 年列入世界遺產。",
            en: "Nelson was stationed here in the 1780s, giving Nelson's Dockyard its name; it became a World Heritage Site in 2016.",
          },
        },
      },
      {
        name: { zh: "科德林頓", en: "Codrington" },
        blurb: {
          zh: "巴布達島上唯一的聚落,緊鄰廣闊的潟湖保護區。",
          en: "Barbuda's only settlement, beside a vast protected lagoon.",
        },
        trivia: {
          question: {
            zh: "科德林頓潟湖以哪種海鳥的大型繁殖群聞名,規模居加勒比海前列?",
            en: "Codrington Lagoon is famous for one of the Caribbean's largest breeding colonies of which seabird?",
          },
          options: [
            { zh: "軍艦鳥", en: "Frigate birds" },
            { zh: "鵜鶘", en: "Pelicans" },
            { zh: "紅鶴", en: "Flamingos" },
            { zh: "信天翁", en: "Albatrosses" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "潟湖紅樹林中棲息著數以千計的華麗軍艦鳥,雄鳥求偶時鼓起鮮紅喉囊的景象是招牌畫面。",
            en: "Thousands of magnificent frigate birds nest in the lagoon's mangroves — males inflating scarlet throat pouches are the signature sight.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "板球傳奇維夫·理查茲出身安地卡,聖約翰的國家板球場就以他命名。",
        en: "Cricket legend Viv Richards is Antiguan — the national stadium outside St. John's bears his name.",
      },
      {
        zh: "每年 4 月底的安地卡帆船週是加勒比最負盛名的帆船賽事之一,吸引世界各地好手。",
        en: "Antigua Sailing Week each late April is one of the Caribbean's most prestigious regattas, drawing crews worldwide.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,全年約 25–30°C,是小安地列斯較乾燥的島嶼之一,乾季約 12 月至 4 月;6 月至 11 月為颶風季,2017 年厄瑪即在此期間侵襲。",
      en: "Tropical maritime at 25–30°C year-round, and among the drier Lesser Antilles, with a December–April dry season. June–November is hurricane season — Irma struck in 2017.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,租車需在當地購買臨時駕照。",
        en: "Drive on the left; renting a car requires buying a local temporary driving permit.",
      },
      {
        zh: "通用貨幣為東加勒比元(EC$),美元普遍可用,標價常兩者並列。",
        en: "The Eastern Caribbean dollar (EC$) is official, USD is widely accepted, and prices are often quoted in both.",
      },
      {
        zh: "去巴布達可搭渡輪或小飛機一日遊,班次少務必預約。",
        en: "Barbuda makes a good day trip by ferry or small plane — services are sparse, so book ahead.",
      },
      {
        zh: "週日傍晚上謝利高地(Shirley Heights)看夕陽、聽鋼鼓樂隊,俯瞰英吉利港全景。",
        en: "On Sunday evenings, head up Shirley Heights for sunset and steel-band music over English Harbour.",
      },
    ],
  },
  {
    id: "KNA",
    name: { zh: "聖克里斯多福及尼維斯", en: "Saint Kitts and Nevis" },
    capital: { zh: "巴士地", en: "Basseterre" },
    flag: "🇰🇳",
    region: "americas",
    center: { lat: 17.3, lng: -62.72 },
    intro: {
      zh: "由聖克里斯多福(聖啟茨)與尼維斯兩座火山島組成,是西半球面積與人口最小的主權國家。昔日的糖業王國留下觀光鐵道與要塞遺跡,如今以度假與郵輪觀光為主,也是台灣在加勒比海的邦交國。",
      en: "Two volcanic islands — Saint Kitts and Nevis — form the smallest sovereign state in the Western Hemisphere by both area and population. Its old sugar kingdom left a scenic railway and hilltop fortress, now anchoring a resort and cruise economy. It is also a diplomatic ally of Taiwan.",
    },
    history: {
      zh: "1623 年英國人在聖克里斯多福建立據點,是英國在加勒比的第一個殖民地,兩年後法國人也到來,兩國一度分治小島,因此聖啟茨被稱為「西印度群島之母」。此後三百年糖業主宰經濟,直到 2005 年才關閉最後的糖廠。1983 年與尼維斯共組聯邦獨立,是美洲最年輕的國家,並自獨立起即與中華民國(台灣)建交至今。",
      en: "In 1623 the English settled Saint Kitts — their first Caribbean colony — with the French arriving two years later to share the island for a time, earning it the title 'Mother Colony of the West Indies'. Sugar ruled for three centuries, with the last mill closing only in 2005. In 1983 it federated with Nevis and became independent — the youngest nation in the Americas — establishing ties with Taiwan at independence that continue today.",
    },
    cities: [
      {
        name: { zh: "巴士地", en: "Basseterre" },
        blurb: {
          zh: "首都與郵輪港,市中心的圓環廣場保留著維多利亞式鐘塔。",
          en: "The capital and cruise port, its central Circus roundabout crowned by a Victorian clock tower.",
        },
        trivia: {
          question: {
            zh: "聖克里斯多福首都「巴士地」(Basseterre)源自法語,原意是什麼?",
            en: "The name of Saint Kitts' capital, Basseterre, comes from French. What does it mean?",
          },
          options: [
            { zh: "低地", en: "Low land" },
            { zh: "高地", en: "High land" },
            { zh: "綠色海岸", en: "Green coast" },
            { zh: "安全的港", en: "Safe harbor" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法語 basse terre 意為「低地」,反映此地是法國分治時期在島上背風低處建立的據點。",
            en: "French basse terre means 'low land', reflecting the leeward lowland site the French settled during the island's shared era.",
          },
        },
      },
      {
        name: { zh: "查爾斯敦", en: "Charlestown" },
        blurb: {
          zh: "尼維斯島的主鎮,喬治式石屋與溫泉遺址保存完好。",
          en: "Nevis' main town, with well-preserved Georgian stone buildings and old thermal-bath ruins.",
        },
        trivia: {
          question: {
            zh: "哪位美國開國元勳出生於尼維斯島的查爾斯敦?",
            en: "Which US Founding Father was born in Charlestown on Nevis?",
          },
          options: [
            { zh: "亞歷山大·漢彌爾頓", en: "Alexander Hamilton" },
            { zh: "班傑明·富蘭克林", en: "Benjamin Franklin" },
            { zh: "湯瑪斯·傑佛遜", en: "Thomas Jefferson" },
            { zh: "約翰·亞當斯", en: "John Adams" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "美國首任財政部長漢彌爾頓約 1755 年生於此,故居原址現為博物館,音樂劇《漢密爾頓》讓小島再度聲名大噪。",
            en: "Alexander Hamilton, the first US Treasury Secretary, was born here around 1755; a museum stands at his birthplace, and the musical Hamilton renewed the island's fame.",
          },
        },
      },
      {
        name: { zh: "桑迪波因特", en: "Sandy Point" },
        blurb: {
          zh: "西北岸老鎮,山丘上聳立著巨大的硫磺石山要塞。",
          en: "An old northwest-coast town beneath the massive Brimstone Hill Fortress.",
        },
        trivia: {
          question: {
            zh: "桑迪波因特附近的硫磺石山要塞是世界遺產,它因堅固險峻而有什麼綽號?",
            en: "Brimstone Hill Fortress near Sandy Point is a World Heritage Site. What nickname did its formidable position earn it?",
          },
          options: [
            { zh: "西印度的直布羅陀", en: "The Gibraltar of the West Indies" },
            { zh: "加勒比的馬爾他", en: "The Malta of the Caribbean" },
            { zh: "新世界的君士坦丁堡", en: "The Constantinople of the New World" },
            { zh: "大西洋的長城", en: "The Great Wall of the Atlantic" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座 17、18 世紀由英軍設計、奴隸建造的山頂要塞居高臨下,因易守難攻獲稱「西印度的直布羅陀」。",
            en: "Designed by the British and built by enslaved Africans in the 17th–18th centuries, the hilltop citadel's commanding position earned it the name 'Gibraltar of the West Indies'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "聖克里斯多福及尼維斯自 1983 年獨立當年即與台灣建交,是台灣穩固的加勒比邦交國。",
        en: "Saint Kitts and Nevis established diplomatic ties with Taiwan upon independence in 1983 and remains a steadfast ally.",
      },
      {
        zh: "昔日運甘蔗的環島窄軌鐵路改為觀光列車,被稱為「加勒比最後的鐵路」。",
        en: "The old narrow-gauge cane railway now runs scenic tourist trains — billed as 'the last railway in the West Indies'.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,全年約 25–30°C,信風吹拂。乾季約 1 月至 4 月,雨季集中在下半年;6 月至 11 月為颶風季,山區比沿海濕潤。",
      en: "Tropical maritime, 25–30°C year-round with steady trade winds. January–April is dry, most rain falls late in the year, June–November is hurricane season, and the peaks are wetter than the coast.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,租車須購買當地臨時駕照。",
        en: "Drive on the left; a local temporary driver's permit is required to rent a car.",
      },
      {
        zh: "通用貨幣為東加勒比元(EC$),美元也普遍可用。",
        en: "The Eastern Caribbean dollar (EC$) is the currency, with USD widely accepted.",
      },
      {
        zh: "兩島之間有定期渡輪往返巴士地與查爾斯敦,約 45 分鐘,適合安排尼維斯一日遊。",
        en: "Regular ferries link Basseterre and Charlestown in about 45 minutes — ideal for a Nevis day trip.",
      },
    ],
  },
  {
    id: "DMA",
    name: { zh: "多米尼克", en: "Dominica" },
    capital: { zh: "羅索", en: "Roseau" },
    flag: "🇩🇲",
    region: "americas",
    center: { lat: 15.42, lng: -61.34 },
    intro: {
      zh: "號稱「自然之島」的火山島國,雨林覆蓋率極高,瀑布、溫泉與沸騰湖遍布山間,是加勒比生態旅遊的代表。注意別與多明尼加共和國混淆——這裡人口僅約 7 萬,主打健行與賞鯨而非大型度假村。",
      en: "The 'Nature Island', a rugged volcanic country blanketed in rainforest, laced with waterfalls, hot springs, and a boiling lake — the Caribbean's eco-tourism standard-bearer. Not to be confused with the Dominican Republic: home to only about 70,000 people, it favors hiking and whale watching over mega-resorts.",
    },
    history: {
      zh: "哥倫布 1493 年在星期日望見此島,以拉丁文「主日」為其命名。險峻地形讓卡里納哥(加勒比)原住民在此抵抗歐洲殖民最久,法英兩國爭奪後於 1763 年歸英國,法語克里奧爾文化仍深植民間。1978 年脫離英國獨立,翌年即遭颶風大衛重創;2017 年颶風瑪莉亞再度摧毀全島大部分建築,此後多米尼克宣示要成為全球第一個具氣候韌性的國家。",
      en: "Columbus sighted the island on a Sunday in 1493 and named it for the Lord's day. Its rugged terrain let the Kalinago (Carib) people resist colonization longer than anywhere nearby; after Anglo-French rivalry it went to Britain in 1763, though French Creole culture runs deep. Independence from Britain came in 1978, followed within a year by devastating Hurricane David; Hurricane Maria wrecked most buildings in 2017, after which Dominica pledged to become the world's first climate-resilient nation.",
    },
    cities: [
      {
        name: { zh: "羅索", en: "Roseau" },
        blurb: {
          zh: "西南岸的首都,克里奧爾式木造街屋背倚青翠山谷。",
          en: "The southwest-coast capital, its Creole timber townhouses backed by green valleys.",
        },
        trivia: {
          question: {
            zh: "羅索東北方的莫爾納三峰山國家公園裡,有一座世界罕見的什麼自然奇觀?",
            en: "Morne Trois Pitons National Park, northeast of Roseau, contains what rare natural wonder?",
          },
          options: [
            { zh: "終年翻滾的沸騰湖", en: "A perpetually bubbling boiling lake" },
            { zh: "熱帶高山冰川湖", en: "A tropical glacial lake" },
            { zh: "巨大的隕石坑湖", en: "A giant meteor-crater lake" },
            { zh: "粉紅色的鹽湖", en: "A pink salt lake" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "沸騰湖是火山噴氣加熱的灰藍色湖泊,為世界最大的同類湖泊之一,整座公園也是世界遺產。",
            en: "The Boiling Lake, a grey-blue flooded fumarole kept at a rolling boil, is among the world's largest of its kind; the park is a World Heritage Site.",
          },
        },
      },
      {
        name: { zh: "樸茨茅斯", en: "Portsmouth" },
        blurb: {
          zh: "北部第二大鎮,印第安河與卡布里茨半島的要塞遺跡近在咫尺。",
          en: "The second town, in the north, close to the Indian River and the fort ruins of the Cabrits peninsula.",
        },
        trivia: {
          question: {
            zh: "樸茨茅斯的印第安河曾是哪個好萊塢電影系列的取景地?",
            en: "The Indian River at Portsmouth served as a filming location for which Hollywood film series?",
          },
          options: [
            { zh: "《神鬼奇航》", en: "Pirates of the Caribbean" },
            { zh: "《侏羅紀公園》", en: "Jurassic Park" },
            { zh: "《007》", en: "James Bond" },
            { zh: "《印第安納瓊斯》", en: "Indiana Jones" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "《神鬼奇航 2》中女巫蒂雅·達爾瑪的河畔小屋場景就在印第安河拍攝,如今可搭無動力小船溯河參觀。",
            en: "Tia Dalma's riverside shack in Dead Man's Chest was shot on the Indian River, now visited by quiet rowboat tours.",
          },
        },
      },
      {
        name: { zh: "卡里納哥領地", en: "Kalinago Territory" },
        blurb: {
          zh: "東岸的原住民保留區,傳統工藝與部落文化在此延續。",
          en: "An indigenous reserve on the east coast where traditional crafts and communal culture live on.",
        },
        trivia: {
          question: {
            zh: "多米尼克的卡里納哥領地保存了加勒比海地區僅存的哪個原住民族社群?",
            en: "Dominica's Kalinago Territory is home to the Caribbean's last remaining community of which indigenous people?",
          },
          options: [
            { zh: "卡里納哥人(加勒比人)", en: "The Kalinago (Caribs)" },
            { zh: "泰諾人", en: "The Taíno" },
            { zh: "馬雅人", en: "The Maya" },
            { zh: "瓜拉尼人", en: "The Guaraní" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "「加勒比海」正是以加勒比人命名;約三千名卡里納哥人在此保留區內生活,是該族在島嶼加勒比僅存的聚居地。",
            en: "The Caribbean Sea itself is named for the Caribs; roughly 3,000 Kalinago live in this reserve, their people's last island-Caribbean homeland.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "國旗中央是紫色的西瑟羅鸚鵡(帝王亞馬遜鸚鵡),使多米尼克成為全球極少數國旗用到紫色的國家。",
        en: "The flag features the purple Sisserou parrot (imperial amazon), making Dominica one of the very few countries with purple on its flag.",
      },
      {
        zh: "多米尼克外海全年可見抹香鯨家族棲息,是全球少數能穩定觀察定居型抹香鯨的地方。",
        en: "Sperm whale families can be seen off Dominica year-round — one of the few places on Earth with a resident population.",
      },
    ],
    climate: {
      zh: "熱帶海洋性氣候,沿海全年約 25–31°C;高聳山區攔截信風水氣,內陸雨林年雨量極大,乾季約 2 月至 5 月,6 月至 11 月為颶風季。",
      en: "Tropical maritime, 25–31°C on the coast; the high interior wrings heavy rain from the trade winds year-round. February–May is drier, and June–November is hurricane season.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,島上山路陡峭蜿蜒,兩地之間車程常比地圖直覺長得多。",
        en: "Drive on the left; steep, winding roads make journeys far longer than map distances suggest.",
      },
      {
        zh: "通用貨幣為東加勒比元(EC$),鄉間店家以現金為主。",
        en: "The Eastern Caribbean dollar (EC$) is the currency, and rural shops mostly deal in cash.",
      },
      {
        zh: "沸騰湖健行來回約 6 小時且地形濕滑,建議聘請嚮導並穿防滑鞋。",
        en: "The Boiling Lake hike takes about six hours round trip over slick terrain — hire a guide and wear grippy shoes.",
      },
      {
        zh: "訂機票時留意別誤訂到多明尼加共和國,兩國機場代碼完全不同。",
        en: "When booking flights, double-check you are not headed to the Dominican Republic — the two countries' airports are entirely different.",
      },
    ],
  },
];
