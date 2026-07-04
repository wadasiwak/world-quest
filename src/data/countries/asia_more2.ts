import type { Country } from "../types";

// Asia (batch 3): 17 more countries. Content shape is LLM-generatable — see types.ts.

export const ASIA_MORE2: Country[] = [
  {
    id: "MMR",
    name: { zh: "緬甸", en: "Myanmar" },
    capital: { zh: "奈比多", en: "Naypyidaw" },
    flag: "🇲🇲",
    region: "asia",
    center: { lat: 21.5, lng: 96.0 },
    intro: {
      zh: "東南亞大陸面積最大的國家,伊洛瓦底江縱貫南北,孕育出「佛塔之國」的稱號。金光閃耀的大金寺、蒲甘平原上數千座佛塔,與多達百餘個民族的多元文化,構成獨特而深邃的風景。",
      en: "The largest country on mainland Southeast Asia, threaded by the Irrawaddy River and nicknamed the 'land of pagodas'. The gilded Shwedagon, thousands of temples on the Bagan plain, and over a hundred ethnic groups make for a deep, singular landscape.",
    },
    history: {
      zh: "11 世紀蒲甘王朝統一緬甸並奠定上座部佛教傳統,其後東吁、貢榜王朝相繼興起。19 世紀經三次英緬戰爭淪為英屬印度的一省,1948 年獨立。1962 年軍方政變後長期軍事統治與鎖國,2011 年起短暫改革開放,2021 年再度發生政變,政局至今動盪。",
      en: "The Pagan Kingdom unified Myanmar in the 11th century and rooted Theravada Buddhism; the Taungoo and Konbaung dynasties followed. Three Anglo-Burmese wars made it a province of British India; independence came in 1948. A 1962 coup began decades of military rule and isolation, reforms opened the country from 2011, and a 2021 coup returned it to turmoil.",
    },
    cities: [
      {
        name: { zh: "仰光", en: "Yangon" },
        blurb: {
          zh: "前首都與最大城市,大金寺的金色塔尖是全國的精神地標。",
          en: "The former capital and largest city — the golden spire of Shwedagon Pagoda is the nation's spiritual landmark.",
        },
        trivia: {
          question: {
            zh: "仰光大金寺(Shwedagon)的主塔外層覆蓋著什麼?",
            en: "The main stupa of Yangon's Shwedagon Pagoda is covered in what?",
          },
          options: [
            { zh: "金箔與金板", en: "Gold leaf and gold plates" },
            { zh: "銅片", en: "Copper sheets" },
            { zh: "彩色瓷磚", en: "Colored ceramic tiles" },
            { zh: "白色大理石", en: "White marble" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塔身貼滿信眾捐獻的金箔與金板,塔頂寶傘更鑲有數千顆鑽石與寶石。",
            en: "The stupa is sheathed in donated gold leaf and plates, and its crown umbrella is studded with thousands of diamonds and gems.",
          },
        },
      },
      {
        name: { zh: "曼德勒", en: "Mandalay" },
        blurb: {
          zh: "第二大城與上緬甸文化中心,緬甸王朝時代的最後王都。",
          en: "The second city and cultural heart of Upper Myanmar — the last royal capital of the Burmese kingdoms.",
        },
        trivia: {
          question: {
            zh: "曼德勒是緬甸哪個王朝的最後一座王都?",
            en: "Mandalay was the final royal capital of which Burmese dynasty?",
          },
          options: [
            { zh: "貢榜王朝", en: "The Konbaung dynasty" },
            { zh: "蒲甘王朝", en: "The Pagan dynasty" },
            { zh: "東吁王朝", en: "The Taungoo dynasty" },
            { zh: "阿瓦王朝", en: "The Ava kingdom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "敏東王 1857 年建都曼德勒,1885 年英國吞併上緬甸後,貢榜王朝隨之終結。",
            en: "King Mindon founded the capital in 1857; when Britain annexed Upper Burma in 1885, the Konbaung dynasty came to an end.",
          },
        },
      },
      {
        name: { zh: "蒲甘", en: "Bagan" },
        blurb: {
          zh: "伊洛瓦底江畔的古都平原,現存兩千餘座佛塔與寺廟。",
          en: "An ancient plain beside the Irrawaddy, still dotted with over 2,000 temples and stupas.",
        },
        trivia: {
          question: {
            zh: "蒲甘在 11 至 13 世紀是哪個王國的首都,留下了數千座佛塔?",
            en: "Bagan was the capital of which kingdom from the 11th to 13th centuries, leaving thousands of temples?",
          },
          options: [
            { zh: "蒲甘王國", en: "The Pagan Kingdom" },
            { zh: "吳哥王朝", en: "The Angkor Empire" },
            { zh: "素可泰王國", en: "The Sukhothai Kingdom" },
            { zh: "瀾滄王國", en: "The Lan Xang Kingdom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "蒲甘王國全盛時期興建逾萬座宗教建築,現存約兩千兩百座,2019 年列入世界遺產。",
            en: "At its height the Pagan Kingdom built over 10,000 religious monuments; about 2,200 survive, inscribed as World Heritage in 2019.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "緬甸男女日常多穿筒裙「籠基」,並以「特納卡」樹皮粉塗抹臉頰防曬。",
        en: "Burmese men and women alike wear the longyi sarong, and thanaka bark paste on the cheeks doubles as sunscreen.",
      },
      {
        zh: "緬甸與美國、賴比瑞亞並列全球少數未全面採用公制的國家。",
        en: "Myanmar is one of the few countries — with the US and Liberia — that has not fully adopted the metric system.",
      },
    ],
    climate: {
      zh: "熱帶季風氣候,5 至 10 月西南季風帶來雨季,11 月至 2 月涼爽乾燥。中部平原為乾燥區,北部山地氣溫較低。",
      en: "Tropical monsoon climate: the southwest monsoon brings rain from May to October, with a cool dry season from November to February. The central plain is a dry zone and the northern mountains are cooler.",
    },
    travelTips: [
      {
        zh: "2021 年政變後政局不穩,多國發布旅遊警示,行前務必確認最新官方公告。",
        en: "Since the 2021 coup the situation is unstable and many governments have issued travel advisories — check the latest official guidance before any trip.",
      },
      {
        zh: "現金社會,信用卡不普及;美元需為無摺痕的新鈔才易兌換。",
        en: "It is a cash economy with limited card acceptance; US dollar bills must be crisp and unmarked to be exchanged.",
      },
      {
        zh: "進入佛寺與佛塔須脫鞋脫襪,衣著需遮蓋肩膀與膝蓋。",
        en: "Remove shoes and socks at pagodas and temples, and cover shoulders and knees.",
      },
    ],
  },
  {
    id: "KHM",
    name: { zh: "柬埔寨", en: "Cambodia" },
    capital: { zh: "金邊", en: "Phnom Penh" },
    flag: "🇰🇭",
    region: "asia",
    center: { lat: 12.5, lng: 104.9 },
    intro: {
      zh: "中南半島上的高棉之國,吳哥窟的宏偉石殿是民族榮光的象徵,也印在國旗中央。洞里薩湖滋養著稻田與漁村,金邊的法式街廓與王宮訴說近代故事,觀光與成衣業是經濟支柱。",
      en: "The land of the Khmer on the Indochinese peninsula. The great stone halls of Angkor Wat — emblazoned on the national flag — embody its glory, while Tonle Sap lake feeds rice fields and fishing villages. Tourism and garments anchor the economy.",
    },
    history: {
      zh: "9 至 15 世紀的吳哥王朝是東南亞最強盛的帝國之一,建造了吳哥窟等曠世建築群。1863 年成為法國保護國,1953 年獨立。1975 至 1979 年紅色高棉統治造成大量人口死亡,經越南出兵與聯合國介入,1993 年恢復君主立憲,此後致力於重建與發展。",
      en: "The Angkor Empire (9th–15th centuries) was among Southeast Asia's mightiest, raising monuments like Angkor Wat. A French protectorate from 1863, Cambodia gained independence in 1953. The Khmer Rouge regime of 1975–79 killed a vast share of the population; after Vietnamese intervention and a UN mission, the constitutional monarchy was restored in 1993.",
    },
    cities: [
      {
        name: { zh: "金邊", en: "Phnom Penh" },
        blurb: {
          zh: "四河交匯處的首都,金色王宮與法式建築沿河岸展開。",
          en: "The capital at the meeting of rivers, where the golden Royal Palace and French colonial blocks line the waterfront.",
        },
        trivia: {
          question: {
            zh: "根據傳說,金邊(Phnom Penh)的名稱來自哪位人物?",
            en: "According to legend, Phnom Penh is named after which figure?",
          },
          options: [
            { zh: "在河邊發現佛像的奔夫人", en: "Lady Penh, who found Buddha statues by the river" },
            { zh: "吳哥王朝的國王", en: "A king of the Angkor Empire" },
            { zh: "法國殖民總督", en: "A French colonial governor" },
            { zh: "雲遊四方的高僧", en: "A wandering monk" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "傳說奔夫人在河中拾獲佛像,便在小山丘上建塔供奉,「金邊」原意即「奔夫人之丘」。",
            en: "Legend says Lady Penh retrieved Buddha statues from the river and built a hilltop shrine — 'Phnom Penh' means 'Penh's hill'.",
          },
        },
      },
      {
        name: { zh: "暹粒", en: "Siem Reap" },
        blurb: {
          zh: "吳哥遺址群的門戶城市,世界各地旅人朝聖吳哥窟的起點。",
          en: "Gateway to the Angkor ruins — the starting point for pilgrims to Angkor Wat from around the world.",
        },
        trivia: {
          question: {
            zh: "吳哥窟最初興建時,是供奉哪位印度教神祇的寺廟?",
            en: "When first built, Angkor Wat was a Hindu temple dedicated to which deity?",
          },
          options: [
            { zh: "毗濕奴", en: "Vishnu" },
            { zh: "濕婆", en: "Shiva" },
            { zh: "梵天", en: "Brahma" },
            { zh: "因陀羅", en: "Indra" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "12 世紀蘇利耶跋摩二世建吳哥窟獻給毗濕奴,後來逐漸轉為佛教寺院,是世界最大宗教建築群之一。",
            en: "Suryavarman II built it for Vishnu in the 12th century; it later became Buddhist, and remains one of the largest religious monuments on Earth.",
          },
        },
      },
      {
        name: { zh: "馬德望", en: "Battambang" },
        blurb: {
          zh: "西部大城,以殖民老街與「竹火車」聞名,周邊是主要稻米產區。",
          en: "The western hub, known for colonial streets and the bamboo train, surrounded by Cambodia's key rice lands.",
        },
        trivia: {
          question: {
            zh: "馬德望周邊平原物產豐饒,讓它獲得柬埔寨的什麼稱號?",
            en: "The fertile plains around Battambang earned it what nickname in Cambodia?",
          },
          options: [
            { zh: "米倉", en: "The rice bowl" },
            { zh: "漁港之都", en: "The fishing capital" },
            { zh: "絲綢之都", en: "The silk capital" },
            { zh: "咖啡之鄉", en: "The coffee heartland" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬德望省長期是柬埔寨最重要的稻米產區,被稱為全國的米倉。",
            en: "Battambang province has long been Cambodia's most important rice-growing region — the nation's rice bowl.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "柬埔寨國旗中央繪有吳哥窟,是世界少數以建築為主要圖案的國旗。",
        en: "Cambodia's flag features Angkor Wat — one of the world's few national flags centered on a building.",
      },
      {
        zh: "洞里薩湖雨季時面積可擴大數倍,是東南亞最大的淡水湖。",
        en: "Tonle Sap swells to several times its dry-season size in the rains — Southeast Asia's largest freshwater lake.",
      },
    ],
    climate: {
      zh: "熱帶季風氣候,全年炎熱,5 至 10 月為雨季,11 月至 4 月乾季,3、4 月最熱,常超過 35°C。",
      en: "Tropical monsoon climate, hot year-round: a rainy season from May to October and a dry season from November to April, with March–April peaks above 35°C.",
    },
    travelTips: [
      {
        zh: "美元在境內廣泛流通,小額找零多用瑞爾,兩者並用最方便。",
        en: "US dollars circulate widely; small change comes in riel — carrying both is easiest.",
      },
      {
        zh: "參觀王宮與寺廟需遮蓋肩膀與膝蓋,吳哥部分塔殿有服裝檢查。",
        en: "Cover shoulders and knees at the Royal Palace and temples; some Angkor towers enforce a dress check.",
      },
      {
        zh: "雨季鄉間道路易泥濘,行程宜保留彈性。",
        en: "Rural roads get muddy in the wet season — build slack into your itinerary.",
      },
    ],
  },
  {
    id: "LAO",
    name: { zh: "寮國", en: "Laos" },
    capital: { zh: "永珍", en: "Vientiane" },
    flag: "🇱🇦",
    region: "asia",
    center: { lat: 19.5, lng: 103.0 },
    intro: {
      zh: "東南亞唯一的內陸國,湄公河沿西境流淌,生活節奏緩慢悠閒。龍坡邦的晨間布施、波羅芬高原的咖啡園與四千美島的河中風光,讓它成為背包客鍾愛的祕境,水力發電是重要出口。",
      en: "Southeast Asia's only landlocked country, traced by the Mekong along its western edge and famously unhurried. Alms-giving mornings in Luang Prabang, coffee farms on the Bolaven Plateau, and the Si Phan Don river islands charm backpackers; hydropower is a key export.",
    },
    history: {
      zh: "1353 年法昂王建立瀾滄王國,意為「百萬大象之地」,盛極一時;18 世紀分裂為永珍、龍坡邦與占巴塞三國,相繼受暹羅控制,19 世紀末併入法屬印度支那。1953 年獨立為王國,越戰期間遭受猛烈轟炸,1975 年巴特寮建立寮人民民主共和國,1986 年起逐步開放市場經濟。",
      en: "King Fa Ngum founded Lan Xang — 'a million elephants' — in 1353. It split into Vientiane, Luang Prabang, and Champasak in the 18th century, falling under Siamese sway, then joined French Indochina. Independent as a kingdom in 1953, heavily bombed during the Vietnam War era, it became the Lao PDR under the Pathet Lao in 1975 and began market reforms from 1986.",
    },
    cities: [
      {
        name: { zh: "永珍", en: "Vientiane" },
        blurb: {
          zh: "湄公河畔的低調首都,金色塔鑾與凱旋門是地標。",
          en: "A low-key capital on the Mekong, marked by the golden That Luang stupa and the Patuxai arch.",
        },
        trivia: {
          question: {
            zh: "寮國國徽上的金色佛塔,是永珍的哪座建築?",
            en: "The golden stupa on Laos's national emblem is which Vientiane monument?",
          },
          options: [
            { zh: "塔鑾", en: "Pha That Luang" },
            { zh: "凱旋門", en: "Patuxai" },
            { zh: "西沙格寺", en: "Wat Si Saket" },
            { zh: "香昆佛像公園", en: "Buddha Park (Xieng Khuan)" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "塔鑾是寮國最神聖的佛塔與國家象徵,傳統上據信供奉佛陀舍利。",
            en: "Pha That Luang is Laos's holiest stupa and national symbol, traditionally believed to enshrine a relic of the Buddha.",
          },
        },
      },
      {
        name: { zh: "龍坡邦", en: "Luang Prabang" },
        blurb: {
          zh: "瀾滄王國古都與世界遺產城,寺廟與法式老屋依山傍水。",
          en: "The old royal capital and World Heritage town, its temples and French villas nestled between river and hills.",
        },
        trivia: {
          question: {
            zh: "龍坡邦每天清晨最著名的傳統活動是什麼?",
            en: "What famous tradition takes place in Luang Prabang at dawn each day?",
          },
          options: [
            { zh: "僧侶列隊托缽布施", en: "Monks filing through town to receive alms" },
            { zh: "放水燈儀式", en: "A river lantern ceremony" },
            { zh: "皇宮升旗典禮", en: "A palace flag-raising ceremony" },
            { zh: "大象遊行", en: "An elephant procession" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "數百名橘袍僧侶天未亮便沿街托缽,居民跪地奉上糯米飯,是延續數百年的日常儀式。",
            en: "Hundreds of orange-robed monks walk the streets before sunrise as residents kneel to offer sticky rice — a centuries-old daily rite.",
          },
        },
      },
      {
        name: { zh: "巴色", en: "Pakse" },
        blurb: {
          zh: "南部門戶,鄰近波羅芬高原咖啡產區與湄公河四千美島。",
          en: "The southern gateway, close to the Bolaven Plateau coffee country and the Si Phan Don river islands.",
        },
        trivia: {
          question: {
            zh: "巴色附近的波羅芬高原以生產什麼農作物聞名?",
            en: "The Bolaven Plateau near Pakse is famous for growing which crop?",
          },
          options: [
            { zh: "咖啡", en: "Coffee" },
            { zh: "茶葉", en: "Tea" },
            { zh: "橡膠", en: "Rubber" },
            { zh: "甘蔗", en: "Sugarcane" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "高原涼爽的氣候與火山土壤適合咖啡,法國殖民時期引入,如今是寮國咖啡的主要產地。",
            en: "The plateau's cool climate and volcanic soil suit coffee, introduced in French colonial times — it remains Laos's main coffee region.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "越戰期間寮國承受了超過兩百萬噸炸彈,是史上人均遭投彈量最高的國家。",
        en: "Over two million tons of bombs fell on Laos during the Vietnam War era — the most heavily bombed country per capita in history.",
      },
      {
        zh: "瀾滄王國的名字意為「百萬大象之地」,大象至今仍是寮國的象徵。",
        en: "Lan Xang means 'land of a million elephants' — the elephant remains a national symbol.",
      },
    ],
    climate: {
      zh: "熱帶季風氣候,5 至 10 月雨季、11 月至 4 月乾季;北部山區冬季夜晚涼冷,南部低地全年炎熱。",
      en: "Tropical monsoon climate with a May–October wet season and November–April dry season; northern mountain nights turn cool in winter while southern lowlands stay hot.",
    },
    travelTips: [
      {
        zh: "鄉間仍有戰爭遺留的未爆彈,健行請走標示過的步道並聽從當地指引。",
        en: "Unexploded ordnance from the war era remains in rural areas — stick to marked trails and follow local guidance when hiking.",
      },
      {
        zh: "觀看清晨布施請保持距離與安靜,勿用閃光燈近拍僧侶。",
        en: "At the morning alms-giving, keep a respectful distance and stay quiet — no flash photos in monks' faces.",
      },
      {
        zh: "山區公路蜿蜒費時,城際移動時間宜抓寬鬆。",
        en: "Mountain roads are winding and slow — allow generous time for intercity travel.",
      },
    ],
  },
  {
    id: "BRN",
    name: { zh: "汶萊", en: "Brunei" },
    capital: { zh: "斯里巴卡旺", en: "Bandar Seri Begawan" },
    flag: "🇧🇳",
    region: "asia",
    center: { lat: 4.5, lng: 114.7 },
    intro: {
      zh: "婆羅洲北岸的小型蘇丹國,靠石油與天然氣累積驚人財富,人民享有免所得稅與高額補貼的福利。金頂清真寺、水上村落與保存完好的雨林,讓這個安靜的國度自成一格。",
      en: "A small sultanate on Borneo's north coast, made wealthy by oil and gas — citizens pay no income tax and enjoy generous subsidies. Gold-domed mosques, a stilt-house water village, and pristine rainforest give this quiet nation its own character.",
    },
    history: {
      zh: "汶萊帝國在 15 至 16 世紀達到鼎盛,勢力一度涵蓋婆羅洲大部與菲律賓南部,其後因殖民勢力擴張與內亂逐漸縮小。1888 年成為英國保護國,1929 年發現石油徹底改變國運,1984 年完全獨立。現任王室已延續六百餘年,是世界最古老的王朝之一。",
      en: "The Bruneian Empire peaked in the 15th–16th centuries, once holding much of Borneo and the southern Philippines, before shrinking under colonial pressure. A British protectorate from 1888, transformed by the 1929 oil discovery, it became fully independent in 1984. Its royal house, over six centuries old, is among the world's oldest reigning dynasties.",
    },
    cities: [
      {
        name: { zh: "斯里巴卡旺", en: "Bandar Seri Begawan" },
        blurb: {
          zh: "首都,金頂的奧瑪清真寺倒映水面,一旁是延續數百年的水上村落。",
          en: "The capital, where the golden Omar Ali Saifuddien Mosque mirrors on the lagoon beside a centuries-old water village.",
        },
        trivia: {
          question: {
            zh: "斯里巴卡旺的水上村落「甘榜亞逸」(Kampong Ayer)有什麼稱號?",
            en: "Kampong Ayer, the stilt-house water village in Bandar Seri Begawan, is known by what nickname?",
          },
          options: [
            { zh: "東方威尼斯", en: "The Venice of the East" },
            { zh: "東方直布羅陀", en: "The Gibraltar of the East" },
            { zh: "婆羅洲明珠", en: "The Pearl of Borneo" },
            { zh: "小杜拜", en: "Little Dubai" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "甘榜亞逸是世界最大的水上高腳屋聚落之一,居民上萬,已有數百年歷史,被稱為「東方威尼斯」。",
            en: "One of the world's largest stilt settlements, home to thousands for centuries — hence 'the Venice of the East'.",
          },
        },
      },
      {
        name: { zh: "詩里亞", en: "Seria" },
        blurb: {
          zh: "西部油田小鎮,汶萊石油工業的發源地。",
          en: "A western oil town — the birthplace of Brunei's petroleum industry.",
        },
        trivia: {
          question: {
            zh: "詩里亞有一座著名紀念碑,慶祝汶萊達成什麼里程碑?",
            en: "Seria has a famous monument celebrating which national milestone?",
          },
          options: [
            { zh: "產出第十億桶石油", en: "Producing its billionth barrel of oil" },
            { zh: "建國一百週年", en: "The centenary of the state" },
            { zh: "蘇丹加冕五十週年", en: "The sultan's 50th coronation anniversary" },
            { zh: "第一座清真寺落成", en: "Completion of the first mosque" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "詩里亞油田 1929 年發現,「十億桶紀念碑」紀念 1991 年當地累計產出十億桶原油。",
            en: "The Seria field was discovered in 1929; the Billionth Barrel Monument marks the billionth barrel produced there, reached in 1991.",
          },
        },
      },
      {
        name: { zh: "都東", en: "Tutong" },
        blurb: {
          zh: "都東區首府,以多元原住民文化與傳統市集聞名。",
          en: "Seat of Tutong district, known for its indigenous cultures and traditional market.",
        },
        trivia: {
          question: {
            zh: "都東區的美林本湖(Tasek Merimbun)是汶萊最大的什麼?",
            en: "Tasek Merimbun in Tutong district is Brunei's largest what?",
          },
          options: [
            { zh: "天然湖泊", en: "Natural lake" },
            { zh: "人工水庫", en: "Man-made reservoir" },
            { zh: "紅樹林保護區", en: "Mangrove reserve" },
            { zh: "瀑布群", en: "Waterfall complex" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "美林本湖是汶萊最大的天然湖泊,深色湖水與豐富生態使它被列為東協自然遺產公園。",
            en: "Brunei's largest natural lake, with dark tannin waters and rich wildlife, is designated an ASEAN Heritage Park.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "汶萊人民不需繳個人所得稅,教育與醫療大量由政府補貼。",
        en: "Bruneians pay no personal income tax, and education and healthcare are heavily state-subsidized.",
      },
      {
        zh: "蘇丹的努洛伊曼皇宮擁有上千個房間,是世界最大的居住宮殿之一。",
        en: "The sultan's Istana Nurul Iman palace has well over a thousand rooms — among the largest residential palaces on Earth.",
      },
    ],
    climate: {
      zh: "赤道熱帶雨林氣候,全年高溫潮濕,月均溫約 27°C,降雨豐沛且無明顯乾季,午後常有雷陣雨。",
      en: "Equatorial rainforest climate: hot and humid year-round, averaging about 27°C, with abundant rain, no real dry season, and frequent afternoon thunderstorms.",
    },
    travelTips: [
      {
        zh: "境內不販售酒類,非穆斯林旅客僅可依規定攜帶限量酒品入境自用。",
        en: "Alcohol is not sold in Brunei; non-Muslim visitors may only bring in a small duty-free allowance for private use.",
      },
      {
        zh: "衣著宜保守,進清真寺需著長袍並脫鞋,女性需戴頭巾。",
        en: "Dress modestly; mosque visits require a robe, removed shoes, and head coverings for women.",
      },
      {
        zh: "齋戒月期間白天避免在公共場所飲食,許多餐廳僅提供外帶。",
        en: "During Ramadan avoid eating or drinking in public by day — many restaurants switch to takeaway only.",
      },
    ],
  },
  {
    id: "TLS",
    name: { zh: "東帝汶", en: "Timor-Leste" },
    capital: { zh: "帝力", en: "Dili" },
    flag: "🇹🇱",
    region: "asia",
    center: { lat: -8.8, lng: 125.9 },
    intro: {
      zh: "帝汶島東半部的年輕國家,2002 年恢復獨立,是 21 世紀第一個誕生的新國家。葡萄牙語遺緒、山區咖啡園與未經雕琢的珊瑚礁海岸,加上阿陶羅島周邊世界級的潛水環境,正等待旅人發掘。",
      en: "A young nation on the eastern half of Timor island — restored to independence in 2002 as the 21st century's first new country. Portuguese heritage, highland coffee farms, unspoiled reef coasts, and world-class diving around Atauro Island await discovery.",
    },
    history: {
      zh: "葡萄牙自 16 世紀起殖民帝汶島東部,統治四百餘年。1975 年東帝汶宣布獨立,九天後遭印尼出兵佔領並強行併吞,其後爆發長期抵抗運動。1999 年在聯合國監督下公投,壓倒性支持獨立,經聯合國過渡管理,2002 年 5 月 20 日正式恢復獨立,此後以石油基金與咖啡出口支撐重建。",
      en: "Portugal colonized eastern Timor from the 16th century, ruling for over 400 years. Timor-Leste declared independence in 1975 but was invaded and annexed by Indonesia nine days later, sparking a long resistance. A UN-supervised referendum in 1999 voted overwhelmingly for independence, and after UN transitional administration, full sovereignty was restored on 20 May 2002.",
    },
    cities: [
      {
        name: { zh: "帝力", en: "Dili" },
        blurb: {
          zh: "海濱首都,山丘上的基督君王像俯瞰整個海灣。",
          en: "The seaside capital, watched over by the Cristo Rei statue on the headland above the bay.",
        },
        trivia: {
          question: {
            zh: "帝力著名的「基督君王像」(Cristo Rei)高 27 公尺,興建當時這個數字象徵什麼?",
            en: "Dili's Cristo Rei statue stands 27 meters tall — what did that number symbolize when it was built?",
          },
          options: [
            {
              zh: "當時印尼的 27 個省份(東帝汶被列為其一)",
              en: "Indonesia's 27 provinces at the time (East Timor counted as one)",
            },
            { zh: "耶穌傳道的年數", en: "The years of Jesus's ministry" },
            { zh: "殉道者的人數", en: "The number of martyrs" },
            { zh: "獨立抗爭的年數", en: "The years of the independence struggle" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "雕像 1996 年由印尼政府所建,高度 27 公尺對應當時印尼的 27 省;如今已成為帝力最醒目的地標。",
            en: "Built by the Indonesian government in 1996, its 27 meters matched Indonesia's then 27 provinces — today it is Dili's best-known landmark.",
          },
        },
      },
      {
        name: { zh: "包考", en: "Baucau" },
        blurb: {
          zh: "第二大城,保留葡式老城區與殖民時期的粉色建築。",
          en: "The second city, with a Portuguese-era old town and pastel colonial buildings.",
        },
        trivia: {
          question: {
            zh: "東帝汶的官方語言,除了德頓語之外還有哪一種?",
            en: "Besides Tetum, what is Timor-Leste's other official language?",
          },
          options: [
            { zh: "葡萄牙語", en: "Portuguese" },
            { zh: "西班牙語", en: "Spanish" },
            { zh: "荷蘭語", en: "Dutch" },
            { zh: "英語", en: "English" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "四百多年葡萄牙統治留下語言遺緒,獨立後憲法將德頓語與葡萄牙語並列官方語言。",
            en: "Four centuries of Portuguese rule left their mark — the constitution makes Tetum and Portuguese co-official.",
          },
        },
      },
      {
        name: { zh: "毛比西", en: "Maubisse" },
        blurb: {
          zh: "海拔約 1,400 公尺的山中小鎮,氣候涼爽的咖啡產地。",
          en: "A highland town at about 1,400 meters — cool air and coffee country.",
        },
        trivia: {
          question: {
            zh: "東帝汶最重要的出口農產品是什麼,毛比西一帶正是主要產區?",
            en: "What is Timor-Leste's most important agricultural export, grown in the hills around Maubisse?",
          },
          options: [
            { zh: "咖啡", en: "Coffee" },
            { zh: "可可", en: "Cocoa" },
            { zh: "茶葉", en: "Tea" },
            { zh: "香草", en: "Vanilla" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "有機阿拉比卡咖啡是東帝汶石油之外最主要的出口品,山區小農多以蔭下栽培。",
            en: "Organic arabica coffee is the top non-oil export, mostly shade-grown by smallholders in the highlands.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "東帝汶是 21 世紀第一個獨立的新國家,流通貨幣使用美元。",
        en: "Timor-Leste was the first new sovereign state of the 21st century — and it uses the US dollar.",
      },
      {
        zh: "周邊海域位於珊瑚大三角,阿陶羅島曾錄得世界數一數二高的礁魚多樣性。",
        en: "Its seas sit in the Coral Triangle — surveys off Atauro Island have recorded some of the highest reef-fish diversity on Earth.",
      },
    ],
    climate: {
      zh: "熱帶氣候,乾雨季分明,約 12 月至 5 月為雨季;北岸較乾、南岸雨季更長,山區氣溫明顯涼爽。",
      en: "Tropical with distinct wet (roughly December–May) and dry seasons; the north coast is drier, the south coast wetter, and the highlands notably cool.",
    },
    travelTips: [
      {
        zh: "基礎設施仍有限,山區道路顛簸,城際移動建議使用四輪傳動車並預留時間。",
        en: "Infrastructure is limited and mountain roads are rough — use a 4WD and allow extra time between towns.",
      },
      {
        zh: "以美元現金為主,ATM 集中在帝力,離開首都前先備妥現金。",
        en: "It is a cash (US dollar) economy; ATMs cluster in Dili, so stock up before leaving the capital.",
      },
      {
        zh: "屬瘧疾與登革熱風險區,請做好防蚊並諮詢旅遊醫學門診。",
        en: "Malaria and dengue are present — use mosquito protection and consult a travel clinic beforehand.",
      },
    ],
  },
  {
    id: "PRK",
    name: { zh: "北韓", en: "North Korea" },
    capital: { zh: "平壤", en: "Pyongyang" },
    flag: "🇰🇵",
    region: "asia",
    center: { lat: 40.0, lng: 127.0 },
    intro: {
      zh: "朝鮮半島北部的社會主義國家,正式名稱為朝鮮民主主義人民共和國,以主體思想與高度集中的體制著稱,是世界上最封閉的國家之一。平壤的紀念碑式建築與大型團體操表演,呈現出獨一無二的國家面貌。",
      en: "A socialist state on the northern Korean peninsula — officially the DPRK — known for its Juche ideology and highly centralized system, and among the most closed countries in the world. Pyongyang's monumental architecture and mass games present a face unlike anywhere else.",
    },
    history: {
      zh: "1945 年日本投降後,朝鮮半島以北緯 38 度線分治,1948 年金日成在蘇聯支持下建立政權。1950 年韓戰爆發,1953 年停戰,至今未簽署和平條約。戰後推行主體思想與計畫經濟,權力由金日成、金正日傳至金正恩三代;1990 年代經歷嚴重饑荒,其後因核武與飛彈計畫長期受到國際制裁。",
      en: "After Japan's 1945 surrender the peninsula was divided at the 38th parallel, and Kim Il-sung founded the northern state in 1948 with Soviet backing. The Korean War ended in a 1953 armistice — no peace treaty was ever signed. Power passed through three generations to Kim Jong-un; the 1990s brought severe famine, and its nuclear and missile programs have kept it under broad international sanctions.",
    },
    cities: [
      {
        name: { zh: "平壤", en: "Pyongyang" },
        blurb: {
          zh: "首都與櫥窗城市,主體思想塔與凱旋門沿大同江矗立。",
          en: "The showcase capital, where the Juche Tower and Arch of Triumph rise along the Taedong River.",
        },
        trivia: {
          question: {
            zh: "平壤地鐵以什麼特點著稱?",
            en: "The Pyongyang Metro is famous for what feature?",
          },
          options: [
            {
              zh: "深逾百公尺,是世界最深的地鐵系統之一",
              en: "Lying over 100 meters down — among the world's deepest metro systems",
            },
            { zh: "是世界路線最長的地鐵", en: "Having the world's longest network" },
            { zh: "是亞洲最古老的地鐵", en: "Being Asia's oldest metro" },
            { zh: "全線無人自動駕駛", en: "Being fully driverless" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "車站深入地下逾百公尺,兼具防空洞功能,站內以吊燈與壁畫裝飾,宛如地下宮殿。",
            en: "Stations sit more than 100 meters underground, doubling as shelters, and are decorated with chandeliers and murals like underground palaces.",
          },
        },
      },
      {
        name: { zh: "開城", en: "Kaesong" },
        blurb: {
          zh: "鄰近南北分界線的古都,高麗王朝遺跡列入世界遺產。",
          en: "An ancient capital near the inter-Korean border, its Koryo-era monuments inscribed as World Heritage.",
        },
        trivia: {
          question: {
            zh: "開城曾是哪個王朝的首都?",
            en: "Kaesong was the capital of which Korean dynasty?",
          },
          options: [
            { zh: "高麗王朝", en: "The Goryeo (Koryo) dynasty" },
            { zh: "朝鮮王朝", en: "The Joseon dynasty" },
            { zh: "新羅", en: "Silla" },
            { zh: "高句麗", en: "Goguryeo" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "高麗王朝(918–1392)定都開城,「Korea」一名即源自高麗;開城的高麗遺跡群 2013 年列入世界遺產。",
            en: "Goryeo (918–1392) ruled from Kaesong — the name 'Korea' derives from it; the city's Koryo monuments became World Heritage in 2013.",
          },
        },
      },
      {
        name: { zh: "元山", en: "Wonsan" },
        blurb: {
          zh: "東海岸港口城市,近年被打造為海濱度假區。",
          en: "An east-coast port city, recently developed as a beach resort zone.",
        },
        trivia: {
          question: {
            zh: "元山附近的馬息嶺以什麼設施聞名?",
            en: "Masikryong, near Wonsan, is known for what facility?",
          },
          options: [
            { zh: "滑雪場", en: "A ski resort" },
            { zh: "核能發電廠", en: "A nuclear power plant" },
            { zh: "賽車場", en: "A racing circuit" },
            { zh: "天文台", en: "An observatory" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "馬息嶺滑雪場 2013 年啟用,是北韓對外宣傳的重點觀光建設之一。",
            en: "The Masikryong ski resort opened in 2013 as one of North Korea's flagship tourism projects.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "北韓使用「主體曆」,以金日成出生的 1912 年為元年。",
        en: "North Korea uses the Juche calendar, counting years from 1912 — the birth year of Kim Il-sung.",
      },
      {
        zh: "平壤的柳京飯店高 330 公尺,動工於 1987 年,至今仍未正式開幕。",
        en: "Pyongyang's 330-meter Ryugyong Hotel broke ground in 1987 and has still never officially opened.",
      },
    ],
    climate: {
      zh: "大陸性氣候,冬季嚴寒乾燥,北部山區可達 -20°C 以下;夏季短暫濕熱,降雨集中在 6 至 8 月。",
      en: "Continental climate: winters are bitterly cold and dry, dipping below -20°C in the northern mountains, while summers are short and humid with rains concentrated in June–August.",
    },
    travelTips: [
      {
        zh: "僅能參加官方核准的導覽行程,全程由指定導遊陪同,不得自由行動,攝影、通訊與言行皆受嚴格限制。",
        en: "Visits are possible only on state-approved guided tours with escorts at all times — no independent movement, and photography, communications, and speech are tightly restricted.",
      },
      {
        zh: "多國對北韓發布旅遊警示(美國原則上禁止公民前往),行前務必確認本國最新官方公告與入境規定。",
        en: "Many governments issue travel advisories for North Korea (the US generally bars its citizens from visiting) — check your government's latest guidance and entry rules before planning.",
      },
      {
        zh: "對領袖塑像與畫像須保持敬意,拍攝前應先徵詢導遊同意,避免任何政治性言論。",
        en: "Show respect at leader statues and portraits, ask guides before taking photos, and avoid any political remarks.",
      },
    ],
  },
  {
    id: "IRQ",
    name: { zh: "伊拉克", en: "Iraq" },
    capital: { zh: "巴格達", en: "Baghdad" },
    flag: "🇮🇶",
    region: "asia",
    center: { lat: 33.0, lng: 43.7 },
    intro: {
      zh: "底格里斯河與幼發拉底河之間的「美索不達米亞」故土,人類最早的城市與文字在此誕生。今日的伊拉克以石油為經濟命脈,巴格達曾是伊斯蘭黃金時代的世界學術中心,北部庫德地區自治發展。",
      en: "The old land of Mesopotamia between the Tigris and Euphrates, where humanity's first cities and writing were born. Modern Iraq runs on oil; Baghdad was once the scholarly capital of the Islamic Golden Age, and the Kurdish north governs itself autonomously.",
    },
    history: {
      zh: "蘇美、巴比倫、亞述等古文明在此相繼興起,發明了楔形文字與成文法典。8 世紀阿拔斯王朝定都巴格達,成為伊斯蘭世界的學術與貿易中心。16 世紀起受鄂圖曼統治,一戰後成為英國託管地,1932 年獨立。海珊長期統治期間歷經兩伊戰爭與波斯灣戰爭,2003 年美軍入侵後政權更替,重建之路至今仍在持續。",
      en: "Sumer, Babylon, and Assyria rose here in turn, inventing cuneiform writing and written law codes. The Abbasid caliphate made Baghdad its capital in the 8th century, the hub of Islamic learning and trade. Ottoman rule gave way to a British mandate after WWI, with independence in 1932. Saddam Hussein's era brought the Iran–Iraq and Gulf wars; the 2003 US-led invasion toppled his regime, and reconstruction continues.",
    },
    cities: [
      {
        name: { zh: "巴格達", en: "Baghdad" },
        blurb: {
          zh: "底格里斯河畔的首都,阿拔斯王朝時代曾是世界最大城市之一。",
          en: "The capital on the Tigris — under the Abbasids, one of the largest cities in the world.",
        },
        trivia: {
          question: {
            zh: "阿拔斯王朝在巴格達設立的著名學術機構叫什麼,曾匯集各地學者翻譯典籍?",
            en: "What famed institution in Abbasid Baghdad gathered scholars to translate the world's texts?",
          },
          options: [
            { zh: "智慧宮", en: "The House of Wisdom" },
            { zh: "柏拉圖學院", en: "Plato's Academy" },
            { zh: "亞歷山大圖書館", en: "The Library of Alexandria" },
            { zh: "君士坦丁堡大學", en: "The University of Constantinople" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "智慧宮將希臘、波斯、印度典籍譯為阿拉伯文,推動數學、天文與醫學發展,是伊斯蘭黃金時代的象徵。",
            en: "The House of Wisdom translated Greek, Persian, and Indian works into Arabic, advancing math, astronomy, and medicine — the emblem of the Islamic Golden Age.",
          },
        },
      },
      {
        name: { zh: "巴斯拉", en: "Basra" },
        blurb: {
          zh: "南部大城與主要港口,棕櫚樹成蔭的「東方威尼斯」運河老城。",
          en: "The great southern port city, its palm-lined canals once earning it 'Venice of the East' comparisons.",
        },
        trivia: {
          question: {
            zh: "巴斯拉位於哪條水道旁?這條水道由底格里斯河與幼發拉底河匯流而成,是伊拉克的出海通道。",
            en: "Basra sits on which waterway, formed by the meeting of the Tigris and Euphrates and serving as Iraq's outlet to the sea?",
          },
          options: [
            { zh: "阿拉伯河", en: "The Shatt al-Arab" },
            { zh: "約旦河", en: "The Jordan River" },
            { zh: "卡倫河", en: "The Karun River" },
            { zh: "尼羅河", en: "The Nile" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "兩河在古爾奈匯流成阿拉伯河,流經巴斯拉注入波斯灣,是伊拉克石油輸出的咽喉。",
            en: "The two rivers merge at Qurna to form the Shatt al-Arab, flowing past Basra into the Gulf — the chokepoint of Iraq's oil exports.",
          },
        },
      },
      {
        name: { zh: "艾比爾", en: "Erbil" },
        blurb: {
          zh: "庫德斯坦自治區首府,市中心的古城堡歷史悠久。",
          en: "Capital of the Kurdistan Region, centered on an ancient citadel mound.",
        },
        trivia: {
          question: {
            zh: "艾比爾城堡據信有什麼世界級的紀錄?",
            en: "The Erbil Citadel is believed to hold what world-class distinction?",
          },
          options: [
            {
              zh: "世界上持續有人居住最古老的聚落之一",
              en: "One of the oldest continuously inhabited settlements on Earth",
            },
            { zh: "世界最大的十字軍城堡", en: "The largest Crusader castle in the world" },
            { zh: "亞歷山大大帝所建的要塞", en: "A fortress built by Alexander the Great" },
            { zh: "世界最高的土造建築", en: "The tallest earthen structure in the world" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座土丘上的聚落歷史可追溯數千年,居住紀錄綿延不絕,2014 年列入世界遺產。",
            en: "Settlement on the citadel mound stretches back thousands of years with a near-unbroken record — it became World Heritage in 2014.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "世界最早的文字——楔形文字,約五千年前誕生於今日伊拉克境內的蘇美城邦。",
        en: "The world's earliest writing — cuneiform — emerged some 5,000 years ago in the Sumerian cities of today's Iraq.",
      },
      {
        zh: "伊拉克是全球椰棗的重要原鄉,棕櫚樹曾多達數千萬棵。",
        en: "Iraq is a historic homeland of the date palm, once counting tens of millions of trees.",
      },
    ],
    climate: {
      zh: "大部分屬乾旱與半乾旱氣候,夏季酷熱漫長,常超過 45°C;冬季溫和,北部山區降雪,春季偶有沙塵暴。",
      en: "Mostly arid to semi-arid: long scorching summers often above 45°C, mild winters with snow in the northern mountains, and occasional spring dust storms.",
    },
    travelTips: [
      {
        zh: "多國對伊拉克部分地區發布旅遊警示,行前務必確認最新官方公告。",
        en: "Many governments issue travel advisories for parts of Iraq — always check the latest official guidance before traveling.",
      },
      {
        zh: "北部庫德斯坦自治區與其他地區的簽證及入境規定不同,需分別確認。",
        en: "The Kurdistan Region has separate visa and entry rules from the rest of Iraq — verify each independently.",
      },
      {
        zh: "夏季極端炎熱,戶外參觀請安排在清晨並隨時補充水分。",
        en: "Summer heat is extreme — plan outdoor visits for early morning and stay hydrated.",
      },
    ],
  },
  {
    id: "SYR",
    name: { zh: "敘利亞", en: "Syria" },
    capital: { zh: "大馬士革", en: "Damascus" },
    flag: "🇸🇾",
    region: "asia",
    center: { lat: 35.0, lng: 38.5 },
    intro: {
      zh: "地中海東岸的文明十字路口,大馬士革與阿勒坡都名列世界上持續有人居住最古老的城市。絲路商隊、羅馬神殿與伊斯蘭古城在此層層疊疊,惟 2011 年起的內戰使許多瑰寶受創。",
      en: "A crossroads of civilizations on the eastern Mediterranean — Damascus and Aleppo both rank among the oldest continuously inhabited cities on Earth. Silk Road caravans, Roman temples, and Islamic old towns layer its history, though the war that began in 2011 scarred many treasures.",
    },
    history: {
      zh: "腓尼基、亞述、希臘、羅馬各文明相繼在此留下印記;661 年烏瑪雅王朝定都大馬士革,統治橫跨三洲的帝國。其後歷經阿拔斯、鄂圖曼統治,一戰後成為法國託管地,1946 年獨立。1970 年起阿薩德家族長期執政,2011 年爆發內戰,造成大規模傷亡與難民潮;2024 年底政權更替,國家進入過渡與重建階段。",
      en: "Phoenicians, Assyrians, Greeks, and Romans all left their mark; in 661 the Umayyad caliphate made Damascus capital of an empire spanning three continents. Abbasid and Ottoman rule followed, then a French mandate until independence in 1946. The Assad family governed from 1970; civil war from 2011 brought devastation and mass displacement, and after the government fell in late 2024 the country entered a transition.",
    },
    cities: [
      {
        name: { zh: "大馬士革", en: "Damascus" },
        blurb: {
          zh: "首都,舊城的烏瑪雅清真寺與直街見證數千年歷史。",
          en: "The capital, whose old city — the Umayyad Mosque and the Street Called Straight — testifies to millennia of history.",
        },
        trivia: {
          question: {
            zh: "大馬士革在世界城市史上常被賦予什麼稱號?",
            en: "In urban history, Damascus is often described as what?",
          },
          options: [
            {
              zh: "世界上持續有人居住最古老的城市之一",
              en: "One of the oldest continuously inhabited cities in the world",
            },
            { zh: "世界最大的港口城市", en: "The world's largest port city" },
            { zh: "羅馬帝國的首都", en: "The capital of the Roman Empire" },
            { zh: "絲路的最東端起點", en: "The easternmost start of the Silk Road" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "考古證據顯示大馬士革一帶的聚落史可上溯數千年,城市生活未曾中斷,舊城列為世界遺產。",
            en: "Archaeology traces settlement here back thousands of years without interruption; the old city is a World Heritage site.",
          },
        },
      },
      {
        name: { zh: "阿勒坡", en: "Aleppo" },
        blurb: {
          zh: "北部古商城,巨大的城堡與長達數公里的傳統市集聞名於世。",
          en: "The great northern trading city, famed for its massive citadel and kilometers of covered souks.",
        },
        trivia: {
          question: {
            zh: "阿勒坡最著名的傳統特產是什麼,以月桂油與橄欖油製成?",
            en: "Aleppo's most famous traditional product, made from laurel and olive oil, is what?",
          },
          options: [
            { zh: "阿勒坡古皂", en: "Aleppo soap" },
            { zh: "大馬士革鋼刀", en: "Damascus steel blades" },
            { zh: "手工地毯", en: "Handwoven carpets" },
            { zh: "玫瑰香水", en: "Rose perfume" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "阿勒坡皂以橄欖油為基底、加入月桂油熬製,傳統工法已延續上千年,被視為現代香皂的始祖之一。",
            en: "Made from olive oil enriched with laurel oil, Aleppo soap has been crafted for over a thousand years and is often called an ancestor of modern soap.",
          },
        },
      },
      {
        name: { zh: "帕米拉", en: "Palmyra" },
        blurb: {
          zh: "沙漠中的綠洲古城,羅馬時代商隊之路上的明珠。",
          en: "An oasis city in the desert — a jewel on the caravan routes of the Roman era.",
        },
        trivia: {
          question: {
            zh: "3 世紀時,帕米拉出了一位起兵對抗羅馬帝國的著名女王,她是誰?",
            en: "In the 3rd century, Palmyra produced a famous queen who rose against Rome. Who was she?",
          },
          options: [
            { zh: "芝諾比亞", en: "Zenobia" },
            { zh: "克麗奧佩脫拉", en: "Cleopatra" },
            { zh: "示巴女王", en: "The Queen of Sheba" },
            { zh: "狄多", en: "Dido" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "芝諾比亞女王一度征服埃及並自立帝國,271 年後遭羅馬皇帝奧勒良擊敗,帕米拉的傳奇因她流傳至今。",
            en: "Queen Zenobia briefly conquered Egypt and carved out her own empire before Emperor Aurelian defeated her — her legend still defines Palmyra.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "「大馬士革鋼」與「大馬士革玫瑰」皆以這座城市命名,見證其工藝與物產的盛名。",
        en: "Both 'Damascus steel' and the 'Damask rose' take their names from the city — testaments to its craft and produce.",
      },
    ],
    climate: {
      zh: "沿海為地中海型氣候,冬雨夏乾;內陸大部分為乾旱草原與沙漠,夏季炎熱,冬季山區寒冷可降雪。",
      en: "Mediterranean along the coast with wet winters and dry summers; the interior is arid steppe and desert, hot in summer, with cold, sometimes snowy winters in the mountains.",
    },
    travelTips: [
      {
        zh: "多國對敘利亞發布旅遊警示,行前務必確認最新官方公告與入境規定。",
        en: "Many governments maintain travel advisories for Syria — check the latest official guidance and entry rules before any trip.",
      },
      {
        zh: "多年戰事影響,基礎設施與醫療資源有限,保險與後援安排需格外周全。",
        en: "Years of conflict have limited infrastructure and medical services — arrange insurance and support plans carefully.",
      },
      {
        zh: "古蹟區域可能有管制或修復工程,參觀前先確認開放狀況。",
        en: "Heritage sites may be restricted or under restoration — confirm access before visiting.",
      },
    ],
  },
  {
    id: "JOR",
    name: { zh: "約旦", en: "Jordan" },
    capital: { zh: "安曼", en: "Amman" },
    flag: "🇯🇴",
    region: "asia",
    center: { lat: 31.2, lng: 36.5 },
    intro: {
      zh: "夾在沙漠與死海之間的哈希姆王國,以佩特拉玫瑰色岩城、瓦地倫沙漠與死海漂浮體驗聞名,是中東相對穩定友善的旅遊國度,《阿拉伯的勞倫斯》與多部星戰電影都在此取景。",
      en: "The Hashemite Kingdom between desert and Dead Sea, famous for the rose-red city of Petra, the Wadi Rum desert, and floating in the Dead Sea. A relatively stable, welcoming corner of the Middle East — and a film set for Lawrence of Arabia and Star Wars alike.",
    },
    history: {
      zh: "納巴泰人以佩特拉為都掌控香料商路,羅馬時代的傑拉什等十城區至今保存完好。7 世紀起伊斯蘭化,長期屬鄂圖曼帝國;一戰後英國託管設立外約旦酋長國,1946 年獨立為約旦哈希姆王國。歷經數次中東戰爭並接納大量難民,在區域動盪中維持穩定,觀光與服務業日益重要。",
      en: "The Nabataeans ruled the incense routes from Petra, and Roman Decapolis cities like Jerash still stand remarkably intact. Islamized from the 7th century and long Ottoman, the area became the British-mandated Emirate of Transjordan after WWI, independent as the Hashemite Kingdom in 1946. Through regional wars it absorbed waves of refugees while staying stable, with tourism ever more vital.",
    },
    cities: [
      {
        name: { zh: "安曼", en: "Amman" },
        blurb: {
          zh: "建在山丘上的白色首都,羅馬劇場與現代咖啡館並存。",
          en: "A white-stone capital draped over hills, where a Roman theater sits below modern cafés.",
        },
        trivia: {
          question: {
            zh: "安曼在希臘羅馬時代曾使用什麼名字?",
            en: "In Greco-Roman times, Amman went by what name?",
          },
          options: [
            { zh: "費城(Philadelphia)", en: "Philadelphia" },
            { zh: "安條克", en: "Antioch" },
            { zh: "以弗所", en: "Ephesus" },
            { zh: "帕加馬", en: "Pergamon" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "托勒密二世「費拉德爾甫斯」重建此城後以己名命名,「費城」之名沿用整個羅馬時代。",
            en: "Rebuilt by Ptolemy II Philadelphus and named for him, the city was 'Philadelphia' throughout the Roman era.",
          },
        },
      },
      {
        name: { zh: "佩特拉", en: "Petra" },
        blurb: {
          zh: "鑿在玫瑰色岩壁中的古城,約旦最負盛名的世界遺產。",
          en: "A city carved into rose-colored cliffs — Jordan's most celebrated World Heritage site.",
        },
        trivia: {
          question: {
            zh: "佩特拉是哪個古代民族的都城?",
            en: "Petra was the capital of which ancient people?",
          },
          options: [
            { zh: "納巴泰人", en: "The Nabataeans" },
            { zh: "腓尼基人", en: "The Phoenicians" },
            { zh: "亞述人", en: "The Assyrians" },
            { zh: "西臺人", en: "The Hittites" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "納巴泰人靠香料貿易致富,在岩壁間鑿出神殿與墓室,並以精巧的水利系統支撐沙漠都城。",
            en: "The Nabataeans grew rich on the incense trade, carving temples and tombs into the rock and sustaining their desert capital with ingenious waterworks.",
          },
        },
      },
      {
        name: { zh: "阿卡巴", en: "Aqaba" },
        blurb: {
          zh: "紅海之濱的度假與港口城市,以珊瑚礁潛水聞名。",
          en: "A Red Sea resort and port city, known for coral-reef diving.",
        },
        trivia: {
          question: {
            zh: "阿卡巴是約旦唯一的什麼?",
            en: "Aqaba is Jordan's only what?",
          },
          options: [
            { zh: "海港城市", en: "Seaport city" },
            { zh: "綠洲城市", en: "Oasis city" },
            { zh: "山城", en: "Mountain city" },
            { zh: "河港城市", en: "River port city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "約旦海岸線僅約 26 公里,全集中在阿卡巴灣,使它成為全國唯一的出海口與海港。",
            en: "Jordan's coastline is only about 26 km, all on the Gulf of Aqaba — making Aqaba the country's sole seaport and outlet to the sea.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "死海湖面低於海平面約 430 公尺,是地球陸地的最低點,湖水鹽度高到人可自然漂浮。",
        en: "The Dead Sea's surface lies about 430 meters below sea level — the lowest point on land — and is so salty that swimmers float effortlessly.",
      },
    ],
    climate: {
      zh: "大部分為乾旱沙漠氣候,西部高地屬地中海型,冬季涼爽多雨,安曼偶爾降雪;夏季乾熱,日夜溫差大。",
      en: "Mostly arid desert, with a Mediterranean climate in the western highlands — cool rainy winters (Amman occasionally sees snow), hot dry summers, and big day-night temperature swings.",
    },
    travelTips: [
      {
        zh: "「約旦通票」(Jordan Pass)涵蓋簽證費與佩特拉等景點門票,行前線上購買最划算。",
        en: "The Jordan Pass bundles the visa fee with entry to Petra and other sites — buying it online before arrival saves the most.",
      },
      {
        zh: "沙漠與高地日夜溫差大,即使夏季也建議攜帶保暖外套。",
        en: "Desert and highland temperatures plunge after dark — pack a warm layer even in summer.",
      },
      {
        zh: "齋戒月期間白天請避免在公共場所飲食,對當地習俗保持尊重。",
        en: "During Ramadan, avoid eating and drinking in public by day out of respect for local custom.",
      },
    ],
  },
  {
    id: "LBN",
    name: { zh: "黎巴嫩", en: "Lebanon" },
    capital: { zh: "貝魯特", en: "Beirut" },
    flag: "🇱🇧",
    region: "asia",
    center: { lat: 33.9, lng: 35.8 },
    intro: {
      zh: "地中海東岸的山海小國,國旗中央是象徵千年的黎巴嫩雪松。腓尼基古城、羅馬神殿與法式風情層疊交融,美食與夜生活聞名中東;近年雖歷經經濟危機,文化活力依舊。",
      en: "A small country of mountains and sea on the eastern Mediterranean, its flag bearing the ancient cedar. Phoenician ports, Roman temples, and French flair layer together, with food and nightlife famous across the Middle East — resilient in culture despite recent economic crisis.",
    },
    history: {
      zh: "腓尼基人從這片海岸出發,將字母文字傳向地中海世界;其後羅馬、拜占庭、阿拉伯與鄂圖曼相繼統治。一戰後成為法國託管地,1943 年獨立,貝魯特一度是中東金融與文化之都。1975 至 1990 年內戰重創全國,戰後重建又接連遭遇政治動盪、2019 年起的經濟崩潰與 2020 年貝魯特港爆炸,復甦之路仍在繼續。",
      en: "From this coast the Phoenicians spread the alphabet across the Mediterranean; Rome, Byzantium, the Arabs, and the Ottomans followed. A French mandate after WWI, independent in 1943, Beirut became the Middle East's banking and cultural capital. The 1975–90 civil war devastated the country, and recovery has been battered again by political turmoil, the economic collapse from 2019, and the 2020 port explosion.",
    },
    cities: [
      {
        name: { zh: "貝魯特", en: "Beirut" },
        blurb: {
          zh: "屢毀屢建的首都,咖啡館、藝廊與夜生活充滿生命力。",
          en: "A capital destroyed and rebuilt time and again, alive with cafés, galleries, and nightlife.",
        },
        trivia: {
          question: {
            zh: "20 世紀中葉,貝魯特因繁華與國際化獲得什麼稱號?",
            en: "In the mid-20th century, cosmopolitan Beirut earned which nickname?",
          },
          options: [
            { zh: "中東巴黎", en: "The Paris of the Middle East" },
            { zh: "東方威尼斯", en: "The Venice of the East" },
            { zh: "黎凡特倫敦", en: "The London of the Levant" },
            { zh: "地中海馬德里", en: "The Madrid of the Mediterranean" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法式林蔭道、銀行與時尚夜生活讓貝魯特被譽為「中東巴黎」,是當時區域的金融與文化中心。",
            en: "French boulevards, banking, and glamorous nightlife made Beirut 'the Paris of the Middle East' — the region's financial and cultural hub of its day.",
          },
        },
      },
      {
        name: { zh: "比布魯斯", en: "Byblos" },
        blurb: {
          zh: "世界上持續有人居住最古老的城市之一,腓尼基文明的搖籃。",
          en: "One of the oldest continuously inhabited cities on Earth — a cradle of Phoenician civilization.",
        },
        trivia: {
          question: {
            zh: "「聖經」(Bible)一詞源自比布魯斯的希臘名,因為這座城曾是什麼商品的貿易中心?",
            en: "The word 'Bible' derives from the Greek name for Byblos, because the city was a trading hub for what commodity?",
          },
          options: [
            { zh: "紙莎草", en: "Papyrus" },
            { zh: "香料", en: "Spices" },
            { zh: "紫色染料", en: "Purple dye" },
            { zh: "雪松木", en: "Cedar timber" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "希臘人經比布魯斯進口埃及紙莎草,便以城名稱呼書卷(biblion),「Bible」一詞由此而來。",
            en: "Greeks imported Egyptian papyrus through Byblos and named scrolls 'biblion' after the city — the root of 'Bible'.",
          },
        },
      },
      {
        name: { zh: "巴勒貝克", en: "Baalbek" },
        blurb: {
          zh: "貝卡谷地的古城,保存著羅馬帝國最宏偉的神殿群之一。",
          en: "An ancient city in the Bekaa Valley, holding some of the Roman Empire's grandest temples.",
        },
        trivia: {
          question: {
            zh: "巴勒貝克神殿群中規模最宏大、以巨型石柱聞名的神殿,是供奉哪位羅馬神祇?",
            en: "The largest temple at Baalbek, famed for its colossal columns, honored which Roman god?",
          },
          options: [
            { zh: "朱庇特", en: "Jupiter" },
            { zh: "阿波羅", en: "Apollo" },
            { zh: "瑪爾斯", en: "Mars" },
            { zh: "涅普頓", en: "Neptune" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "朱庇特神殿的石柱高約 20 公尺,基座使用重達數百噸的巨石,是羅馬帝國最大神殿之一。",
            en: "The Temple of Jupiter's columns rise some 20 meters on foundation stones weighing hundreds of tons — among the largest temples Rome ever built.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "黎巴嫩是中東少數冬季可以滑雪的國家,理論上同一天能滑雪又下海游泳。",
        en: "Lebanon is one of the few Middle Eastern countries with ski resorts — in theory you can ski and swim in the sea on the same day.",
      },
      {
        zh: "國旗中央的黎巴嫩雪松自古聞名,腓尼基人曾用它造船,聖經中也多次提及。",
        en: "The cedar on the flag has been prized since antiquity — Phoenician shipwrights used it, and it appears throughout the Bible.",
      },
    ],
    climate: {
      zh: "地中海型氣候,沿海冬季溫和多雨、夏季炎熱乾燥;黎巴嫩山冬季積雪深厚,貝卡谷地則較乾燥。",
      en: "Mediterranean: mild rainy winters and hot dry summers on the coast, deep winter snow on Mount Lebanon, and a drier Bekaa Valley inland.",
    },
    travelTips: [
      {
        zh: "區域局勢變化快,多國不時發布旅遊警示,行前務必確認最新官方公告。",
        en: "The regional situation shifts quickly and advisories are common — check the latest official guidance before traveling.",
      },
      {
        zh: "經濟危機後美元現金最為實用,匯率牌價與實際市場行情可能落差極大。",
        en: "Since the financial crisis, US dollar cash is most practical; official and street exchange rates can differ hugely.",
      },
      {
        zh: "供電不穩,旅館多靠發電機,外出建議攜帶行動電源。",
        en: "Power cuts are routine and hotels rely on generators — carry a power bank.",
      },
    ],
  },
  {
    id: "KWT",
    name: { zh: "科威特", en: "Kuwait" },
    capital: { zh: "科威特市", en: "Kuwait City" },
    flag: "🇰🇼",
    region: "asia",
    center: { lat: 29.3, lng: 47.6 },
    intro: {
      zh: "波斯灣頂端的石油富國,坐擁世界名列前茅的原油儲量,國民享有豐厚福利。科威特塔的藍綠球體是天際線的標誌,採珠與航海的傳統則保留在老城的木船與市集裡。",
      en: "An oil-rich state at the head of the Persian Gulf, holding some of the world's largest crude reserves and generous citizen benefits. The blue-green spheres of the Kuwait Towers define the skyline, while dhows and souks keep its pearling and seafaring past alive.",
    },
    history: {
      zh: "18 世紀起,薩巴赫家族領導的商港小邦以採珠與轉口貿易維生,1899 年尋求英國保護以抗衡周邊強權。1938 年發現巨大油田,二戰後石油出口帶來爆發性財富,1961 年獨立。1990 年遭伊拉克入侵併吞,次年經美國領導的聯軍於波斯灣戰爭中解放,此後重建並持續以石油支撐高福利經濟。",
      en: "From the 18th century the Al Sabah family led a small pearling and trading port, seeking British protection in 1899 against regional powers. Huge oil finds from 1938 brought explosive postwar wealth, and independence came in 1961. Iraq invaded and annexed Kuwait in 1990; a US-led coalition liberated it in the 1991 Gulf War, and oil has funded its welfare economy ever since.",
    },
    cities: [
      {
        name: { zh: "科威特市", en: "Kuwait City" },
        blurb: {
          zh: "首都與商業中心,科威特塔矗立海濱,老市集與摩天樓並存。",
          en: "The capital and commercial heart — the Kuwait Towers stand on the waterfront between old souks and skyscrapers.",
        },
        trivia: {
          question: {
            zh: "科威特塔上的巨大球體,除了觀景餐廳之外還有什麼實際功能?",
            en: "Besides a viewing restaurant, what practical purpose do the giant spheres of the Kuwait Towers serve?",
          },
          options: [
            { zh: "儲存飲用水", en: "Storing drinking water" },
            { zh: "儲存原油", en: "Storing crude oil" },
            { zh: "天文觀測", en: "Astronomical observation" },
            { zh: "廣播訊號發射", en: "Broadcasting signals" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "科威特塔屬於全國供水塔系統的一環,球體內是巨大水槽——在缺乏淡水的沙漠國家,儲水本身就是地標。",
            en: "The towers belong to the national water-tower system, their spheres holding vast reservoirs — in a desert nation, water storage itself became the landmark.",
          },
        },
      },
      {
        name: { zh: "艾哈邁迪", en: "Al Ahmadi" },
        blurb: {
          zh: "南部的石油公司城鎮,為石油工業而規劃興建。",
          en: "A southern company town, purpose-built for the oil industry.",
        },
        trivia: {
          question: {
            zh: "艾哈邁迪鄰近的布爾甘油田有什麼世界級地位?",
            en: "The Burgan field near Al Ahmadi holds what world-class status?",
          },
          options: [
            { zh: "世界最大的油田之一", en: "One of the largest oil fields in the world" },
            { zh: "世界最深的油井", en: "The deepest oil well in the world" },
            { zh: "世界最早發現的油田", en: "The first oil field ever discovered" },
            { zh: "世界最大的天然氣田", en: "The largest natural gas field in the world" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1938 年發現的大布爾甘油田是全球數一數二的巨型油田,奠定科威特的石油財富。",
            en: "Discovered in 1938, Greater Burgan ranks among the largest oil fields on Earth and underpins Kuwait's wealth.",
          },
        },
      },
      {
        name: { zh: "賈赫拉", en: "Al Jahra" },
        blurb: {
          zh: "西郊綠洲城鎮,紅堡見證了科威特建國初期的關鍵一役。",
          en: "An oasis town on the western outskirts, whose Red Fort witnessed a defining early battle.",
        },
        trivia: {
          question: {
            zh: "賈赫拉紅堡與 1920 年的哪場戰役有關?",
            en: "The Red Fort of Al Jahra is tied to which battle of 1920?",
          },
          options: [
            {
              zh: "抵禦阿拉伯半島瓦哈比武裝進攻的賈赫拉之戰",
              en: "The Battle of Jahra, repelling Wahhabi raiders from Arabia",
            },
            { zh: "波斯灣戰爭的首場戰役", en: "The opening battle of the Gulf War" },
            { zh: "鄂圖曼帝國的登陸戰", en: "An Ottoman landing battle" },
            { zh: "英國艦隊的砲擊戰", en: "A British naval bombardment" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1920 年科威特人在賈赫拉紅堡抵擋來自內志的伊赫萬武裝,此役被視為捍衛科威特存續的關鍵時刻。",
            en: "In 1920 Kuwaitis held the Red Fort against Ikhwan forces from Nejd — a battle remembered as pivotal to Kuwait's survival.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "科威特第納爾長期是全球面值最高的流通貨幣。",
        en: "The Kuwaiti dinar has long been the highest-valued circulating currency in the world.",
      },
      {
        zh: "1991 年撤退的伊拉克軍隊點燃七百多口油井,大火燃燒數月才被全部撲滅。",
        en: "Retreating Iraqi forces set over 700 oil wells ablaze in 1991 — the fires took months to fully extinguish.",
      },
    ],
    climate: {
      zh: "炎熱的沙漠氣候,夏季是全球最熱的地區之一,氣溫可逼近 50°C;冬季短暫溫和,春季常有沙塵暴。",
      en: "A hot desert climate — summers rank among the hottest on Earth, approaching 50°C, with short mild winters and springtime dust storms.",
    },
    travelTips: [
      {
        zh: "科威特全面禁酒,攜帶或飲用酒類皆屬違法。",
        en: "Kuwait is completely dry — importing or consuming alcohol is illegal.",
      },
      {
        zh: "夏季白天酷熱難耐,行程多安排在室內或清晨與夜間。",
        en: "Summer days are brutally hot — plan around indoor venues, early mornings, and evenings.",
      },
      {
        zh: "齋戒月期間白天於公共場所飲食可能觸法,請留意當地規定。",
        en: "Eating or drinking in public during Ramadan daytime can be an offense — mind local rules.",
      },
    ],
  },
  {
    id: "QAT",
    name: { zh: "卡達", en: "Qatar" },
    capital: { zh: "杜哈", en: "Doha" },
    flag: "🇶🇦",
    region: "asia",
    center: { lat: 25.3, lng: 51.2 },
    intro: {
      zh: "伸入波斯灣的半島小國,憑藉龐大的天然氣財富躍居全球最富裕國家之列。杜哈的未來感天際線、伊斯蘭藝術博物館與半島電視台,加上 2022 年世界盃,讓它的國際能見度遠超國土大小。",
      en: "A small peninsula jutting into the Gulf, propelled by vast natural gas wealth into the ranks of the world's richest countries. Doha's futuristic skyline, the Museum of Islamic Art, Al Jazeera, and the 2022 World Cup give it visibility far beyond its size.",
    },
    history: {
      zh: "沿岸居民世代以採珠與漁業維生,19 世紀中葉阿勒薩尼家族崛起執政至今。1916 年成為英國保護國,1971 年獨立;20 世紀初珍珠業因日本養珠沒落,所幸戰後發現石油與巨大天然氣田,一躍成為富國。1996 年創立半島電視台,2022 年主辦中東首屆世界盃,積極以體育與外交擴大影響力。",
      en: "Coastal communities long lived on pearling and fishing; the Al Thani family rose to rule in the mid-19th century and still reigns. A British protectorate from 1916, independent in 1971, Qatar saw pearling collapse before oil and immense gas fields transformed it into a wealthy state. It founded Al Jazeera in 1996 and hosted the Middle East's first World Cup in 2022, projecting influence through sport and diplomacy.",
    },
    cities: [
      {
        name: { zh: "杜哈", en: "Doha" },
        blurb: {
          zh: "首都與最大城,海濱長廊連接老市集與玻璃帷幕高樓群。",
          en: "The capital and largest city, its corniche linking the old souk to a wall of glass towers.",
        },
        trivia: {
          question: {
            zh: "2022 年卡達主辦了什麼國際賽事,是該賽事首次在中東舉行?",
            en: "In 2022 Qatar hosted which international event — its first time ever in the Middle East?",
          },
          options: [
            { zh: "FIFA 世界盃足球賽", en: "The FIFA World Cup" },
            { zh: "夏季奧林匹克運動會", en: "The Summer Olympics" },
            { zh: "世界博覽會", en: "The World Expo" },
            { zh: "橄欖球世界盃", en: "The Rugby World Cup" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "2022 年世界盃是首屆在中東與阿拉伯世界舉行的世界盃,也首度改在冬季開踢以避開酷暑。",
            en: "The 2022 World Cup was the first held in the Middle East and Arab world — and the first moved to winter to dodge the summer heat.",
          },
        },
      },
      {
        name: { zh: "沃克拉", en: "Al Wakrah" },
        blurb: {
          zh: "杜哈南方的海濱城市,由傳統漁村蛻變為現代市鎮。",
          en: "A seaside city south of Doha, grown from a traditional fishing village into a modern town.",
        },
        trivia: {
          question: {
            zh: "沃克拉在石油時代來臨之前,主要以什麼產業維生?",
            en: "Before the oil era, Al Wakrah lived mainly from which industries?",
          },
          options: [
            { zh: "採珠與漁業", en: "Pearling and fishing" },
            { zh: "煉油業", en: "Oil refining" },
            { zh: "紡織業", en: "Textiles" },
            { zh: "椰棗種植", en: "Date farming" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "沃克拉曾是重要的採珠港,老港區至今保留木造單桅帆船;世界盃球場的造型靈感也來自傳統帆船。",
            en: "Al Wakrah was a key pearling port — dhows still dot its harbor, and its World Cup stadium was designed to evoke the traditional boats.",
          },
        },
      },
      {
        name: { zh: "豪爾", en: "Al Khor" },
        blurb: {
          zh: "北部海灣城市,鄰近支撐卡達財富的天然氣工業區。",
          en: "A northern bay city near the gas-industry hub that powers Qatar's wealth.",
        },
        trivia: {
          question: {
            zh: "卡達的財富主要來自哪種天然資源?其主要產區「北方氣田」就在豪爾外海。",
            en: "Qatar's wealth flows mainly from which resource, tapped at the North Field offshore from Al Khor?",
          },
          options: [
            { zh: "天然氣", en: "Natural gas" },
            { zh: "金礦", en: "Gold" },
            { zh: "鋁土礦", en: "Bauxite" },
            { zh: "磷礦", en: "Phosphates" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "卡達與伊朗共享的北方氣田是世界最大的天然氣田,使卡達成為頂尖的液化天然氣出口國。",
            en: "The North Field, shared with Iran, is the world's largest natural gas field, making Qatar a top LNG exporter.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "半島電視台 1996 年創立於杜哈,改寫了阿拉伯世界的媒體版圖。",
        en: "Al Jazeera, founded in Doha in 1996, reshaped the media landscape of the Arab world.",
      },
      {
        zh: "卡達的人均 GDP 長年名列世界最前段。",
        en: "Qatar's GDP per capita consistently ranks among the very highest in the world.",
      },
    ],
    climate: {
      zh: "炎熱的沙漠氣候,夏季高溫濕熱,常超過 40°C;冬季溫和宜人,全年降雨稀少。",
      en: "A hot desert climate: humid summers regularly topping 40°C, pleasantly mild winters, and scant rainfall year-round.",
    },
    travelTips: [
      {
        zh: "夏季戶外酷熱,但室內冷氣極強,隨身備薄外套。",
        en: "Summer streets are scorching but indoor air conditioning is fierce — carry a light layer.",
      },
      {
        zh: "公共場合衣著宜端莊,肩膀與膝蓋以遮蓋為宜。",
        en: "Dress modestly in public — covering shoulders and knees is the norm.",
      },
      {
        zh: "酒類僅限持有執照的旅館與餐廳供應,公共場所飲酒違法。",
        en: "Alcohol is served only in licensed hotels and restaurants — drinking in public is illegal.",
      },
    ],
  },
  {
    id: "OMN",
    name: { zh: "阿曼", en: "Oman" },
    capital: { zh: "馬斯開特", en: "Muscat" },
    flag: "🇴🇲",
    region: "asia",
    center: { lat: 21.0, lng: 57.0 },
    intro: {
      zh: "阿拉伯半島東南角的蘇丹國,峽灣、沙漠與翠綠的季風海岸兼備,以乳香貿易與航海傳統聞名。相較於高樓林立的鄰國,阿曼刻意保留低矮的白色建築與傳統風貌,被視為阿拉伯世界的靜謐角落。",
      en: "A sultanate on the southeastern corner of Arabia, spanning fjords, desert, and a monsoon-green coast, famed for frankincense and seafaring. Unlike its high-rise neighbors, Oman deliberately keeps its low white architecture and traditional character — a serene corner of the Arab world.",
    },
    history: {
      zh: "古代的乳香之路使阿曼富甲一方,朵法爾的乳香樹景觀已列世界遺產。17 世紀驅逐葡萄牙人後建立海上帝國,勢力一度遠達東非尚吉巴。20 世紀中葉仍相對封閉,1970 年卡布斯蘇丹即位後以石油收入推動現代化,鋪路、建校、辦醫,五十年間徹底改變國家面貌,並以中立外交在區域中扮演調人角色。",
      en: "The ancient frankincense routes made Oman wealthy — Dhofar's frankincense landscape is now World Heritage. After expelling the Portuguese in the 17th century it built a maritime empire reaching Zanzibar. Still isolated by the mid-20th century, it was transformed after 1970, when Sultan Qaboos used oil revenue to build roads, schools, and hospitals, while neutral diplomacy made Oman a regional mediator.",
    },
    cities: [
      {
        name: { zh: "馬斯開特", en: "Muscat" },
        blurb: {
          zh: "山海之間的首都,白色屋宇沿岩岸展開,老城仍有古堡守望。",
          en: "A capital squeezed between mountains and sea, its white houses tracing the rocky shore beneath old Portuguese forts.",
        },
        trivia: {
          question: {
            zh: "馬斯開特的蘇丹卡布斯大清真寺,以什麼室內陳設聞名,完工時曾是世界最大?",
            en: "Muscat's Sultan Qaboos Grand Mosque is famous for what furnishing, the world's largest when completed?",
          },
          options: [
            { zh: "單件手工編織地毯", en: "A single hand-woven carpet" },
            { zh: "彩繪玻璃穹頂", en: "A stained-glass dome" },
            { zh: "黃金打造的講壇", en: "A golden minbar" },
            { zh: "大理石噴泉", en: "A marble fountain" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "禮拜殿中的波斯地毯由數百名織工耗時多年織成,重達 21 噸,2001 年完工時是全球最大的單件手織地毯。",
            en: "The prayer-hall carpet took hundreds of weavers years to complete and weighs 21 tons — the world's largest single hand-woven carpet when finished in 2001.",
          },
        },
      },
      {
        name: { zh: "尼茲瓦", en: "Nizwa" },
        blurb: {
          zh: "內陸綠洲古都,巨大的圓形砲塔城堡與傳統市集聞名。",
          en: "An oasis city of the interior, known for its massive round-towered fort and traditional souk.",
        },
        trivia: {
          question: {
            zh: "尼茲瓦市集以販售哪種阿曼傳統物品聞名?它也出現在阿曼國徽上。",
            en: "Nizwa's souk is famous for which traditional Omani item, also featured on the national emblem?",
          },
          options: [
            { zh: "彎刀(khanjar)", en: "The khanjar dagger" },
            { zh: "手工地毯", en: "Handwoven carpets" },
            { zh: "銅製水壺", en: "Copper ewers" },
            { zh: "珍珠飾品", en: "Pearl jewelry" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "彎柄短劍「khanjar」是阿曼男性的傳統佩飾與工藝象徵,國徽上即是彎刀與雙劍的圖案。",
            en: "The curved khanjar dagger is Oman's signature craft and ceremonial dress item — the national emblem shows a khanjar crossed with two swords.",
          },
        },
      },
      {
        name: { zh: "撒拉拉", en: "Salalah" },
        blurb: {
          zh: "南部朵法爾的首府,乳香之鄉,夏季因季風化為一片翠綠。",
          en: "Capital of southern Dhofar, the frankincense heartland that turns lush green each summer monsoon.",
        },
        trivia: {
          question: {
            zh: "撒拉拉每年夏季因什麼現象而變得綠意盎然,與阿拉伯半島其他地區截然不同?",
            en: "What phenomenon turns Salalah green each summer, unlike anywhere else on the Arabian Peninsula?",
          },
          options: [
            {
              zh: "「凱里夫」季風帶來的涼爽雨霧",
              en: "The cool mists and rain of the khareef monsoon",
            },
            { zh: "河流的季節性氾濫", en: "Seasonal river flooding" },
            { zh: "湧出地表的地下泉水", en: "Springs welling up from underground" },
            { zh: "大規模人工灌溉", en: "Large-scale artificial irrigation" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "6 至 9 月印度洋季風邊緣掠過朵法爾山區,帶來細雨與濃霧,山坡轉綠、瀑布出現,吸引大批灣區遊客避暑。",
            en: "From June to September the edge of the Indian Ocean monsoon brushes the Dhofar mountains with drizzle and fog — hillsides turn green, waterfalls flow, and Gulf visitors flock to cool off.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "阿曼的「乳香之地」遺產群見證了數千年的乳香貿易,乳香至今仍是國家的香氣名片。",
        en: "Oman's 'Land of Frankincense' sites testify to millennia of incense trade — frankincense remains the country's signature scent.",
      },
      {
        zh: "19 世紀阿曼帝國一度將首都設在東非的尚吉巴島。",
        en: "In the 19th century the Omani empire even moved its capital to Zanzibar, off East Africa.",
      },
    ],
    climate: {
      zh: "大部分為炎熱乾燥的沙漠氣候,沿海夏季濕熱;哈賈爾山區較涼爽,南部撒拉拉 6 至 9 月受季風影響,多霧涼爽。",
      en: "Mostly hot, dry desert with humid coastal summers; the Hajar mountains run cooler, and Salalah in the south turns misty and mild during the June–September monsoon.",
    },
    travelTips: [
      {
        zh: "衣著宜保守,肩膀與膝蓋應遮蓋,進清真寺需長袖長褲、女性戴頭巾。",
        en: "Dress modestly with shoulders and knees covered; mosques require long sleeves and trousers, with headscarves for women.",
      },
      {
        zh: "景點分散,租車自駕最方便,前往沙漠或山區建議四輪傳動並結伴。",
        en: "Sights are spread out, so self-driving is easiest — take a 4WD and company for desert or mountain routes.",
      },
      {
        zh: "夏季內陸酷熱,10 月至 4 月是最舒適的旅遊季節。",
        en: "The interior is scorching in summer — October to April is the comfortable season.",
      },
    ],
  },
  {
    id: "YEM",
    name: { zh: "葉門", en: "Yemen" },
    capital: { zh: "沙那", en: "Sana'a" },
    flag: "🇾🇪",
    region: "asia",
    center: { lat: 15.5, lng: 47.5 },
    intro: {
      zh: "阿拉伯半島南端的古國,曾是傳說中示巴女王的故土與「幸福阿拉伯」的核心。沙那老城的塔樓民居、希巴姆的泥磚高樓與索科特拉島的奇特生態舉世無雙,惟多年戰亂使它成為世界最艱困的國家之一。",
      en: "An ancient land at Arabia's southern tip — home of the legendary Queen of Sheba and the heart of 'Arabia Felix'. Sana'a's tower houses, Shibam's mud-brick high-rises, and Socotra's otherworldly ecology are unmatched, though years of war have made it one of the world's most stricken countries.",
    },
    history: {
      zh: "古代示巴等王國憑乳香與沒藥貿易繁榮,留下馬里布水壩等偉大工程;摩卡港更讓葉門咖啡名揚世界。近代北部受鄂圖曼影響、南部亞丁為英國殖民地,南北分別獨立後於 1990 年統一。2011 年政局動盪,2014 年起內戰全面爆發並引發嚴重人道危機,和平進程至今仍未完成。",
      en: "Ancient kingdoms like Sheba prospered on frankincense and myrrh, building marvels such as the Marib dam, while the port of Mocha made Yemeni coffee world-famous. The Ottoman-influenced north and British-ruled Aden in the south became independent separately, uniting in 1990. Upheaval from 2011 led to full civil war in 2014 and a grave humanitarian crisis; peace remains unfinished.",
    },
    cities: [
      {
        name: { zh: "沙那", en: "Sana'a" },
        blurb: {
          zh: "海拔約 2,300 公尺的高原古都,老城的塔樓民居如童話場景。",
          en: "A highland capital at about 2,300 meters, its old-city tower houses like a scene from a storybook.",
        },
        trivia: {
          question: {
            zh: "沙那老城以什麼建築特色列入世界遺產?",
            en: "The old city of Sana'a earned World Heritage status for what architectural signature?",
          },
          options: [
            {
              zh: "以土磚砌成、飾以白色石膏花紋的多層塔樓民居",
              en: "Multi-story tower houses of rammed earth traced with white gypsum patterns",
            },
            { zh: "成片的圓頂清真寺群", en: "A skyline of domed mosques" },
            { zh: "岩壁鑿出的洞穴住宅", en: "Cave dwellings cut into cliffs" },
            { zh: "珊瑚石建造的宮殿", en: "Palaces built of coral stone" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "老城數千棟塔樓民居已矗立數百年,土色牆面配上白色石膏窗飾,是伊斯蘭世界最獨特的城市景觀之一。",
            en: "Thousands of centuries-old tower houses, earthen walls trimmed with white gypsum friezes, form one of the Islamic world's most distinctive townscapes.",
          },
        },
      },
      {
        name: { zh: "亞丁", en: "Aden" },
        blurb: {
          zh: "南部大港,扼守紅海通往印度洋的航道咽喉。",
          en: "The great southern port, guarding the passage between the Red Sea and the Indian Ocean.",
        },
        trivia: {
          question: {
            zh: "亞丁的老城區「克雷特」(Crater)建在什麼地形之上?",
            en: "Aden's old quarter, aptly named Crater, is built on what landform?",
          },
          options: [
            { zh: "死火山的火山口", en: "The crater of an extinct volcano" },
            { zh: "珊瑚礁島", en: "A coral island" },
            { zh: "河口三角洲", en: "A river delta" },
            { zh: "巨大沙丘之間", en: "Between giant sand dunes" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "亞丁半島本身就是一座死火山,老城坐落在火山口中,天然的環形山勢自古便是理想的港口屏障。",
            en: "The Aden peninsula is an extinct volcano; the old town sits inside its crater, whose natural walls have sheltered the harbor since antiquity.",
          },
        },
      },
      {
        name: { zh: "希巴姆", en: "Shibam" },
        blurb: {
          zh: "哈德拉毛谷地中的古城,五百棟泥磚高樓拔地而起。",
          en: "An ancient walled city in the Hadhramaut valley, where some 500 mud-brick towers rise from the desert floor.",
        },
        trivia: {
          question: {
            zh: "希巴姆因高聳密集的泥磚樓群,獲得什麼別稱?",
            en: "Its dense cluster of tall mud-brick towers earned Shibam what nickname?",
          },
          options: [
            { zh: "沙漠中的曼哈頓", en: "The Manhattan of the Desert" },
            { zh: "阿拉伯的巴比倫", en: "The Babylon of Arabia" },
            { zh: "東方的威尼斯", en: "The Venice of the East" },
            { zh: "紅海的珍珠", en: "The Pearl of the Red Sea" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "16 世紀起居民便以泥磚蓋起五至十一層的高樓,密集的「摩天」天際線讓它被稱為「沙漠中的曼哈頓」。",
            en: "Since the 16th century residents have stacked mud-brick towers five to eleven stories high — a skyline so dense it's called 'the Manhattan of the Desert'.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "「摩卡」咖啡之名源自葉門的摩卡港,這裡曾壟斷世界咖啡貿易數百年。",
        en: "'Mocha' coffee takes its name from Yemen's port of Mocha, which dominated the world coffee trade for centuries.",
      },
      {
        zh: "索科特拉島有超過三分之一的植物是全球獨有,傘狀的龍血樹是其標誌。",
        en: "Over a third of Socotra Island's plants exist nowhere else on Earth — the umbrella-shaped dragon's blood tree is its emblem.",
      },
    ],
    climate: {
      zh: "沿海平原全年炎熱潮濕,內陸沙漠極度乾燥;西部高原氣候溫和,沙那因高海拔而涼爽,山區夏季有季風降雨。",
      en: "The coastal plains are hot and humid year-round and the interior desert extremely dry; the western highlands are temperate — Sana'a stays cool at altitude, with summer monsoon rains in the mountains.",
    },
    travelTips: [
      {
        zh: "多國對葉門發布旅遊警示,行前務必確認最新官方公告。",
        en: "Many governments maintain travel advisories for Yemen — always check the latest official guidance before considering travel.",
      },
      {
        zh: "戰事影響下基礎設施與醫療資源嚴重不足,航班與航線經常變動。",
        en: "Conflict has left infrastructure and medical services severely limited, and flight routes change frequently.",
      },
      {
        zh: "當地社會保守,衣著與言行請格外尊重伊斯蘭習俗。",
        en: "Society is deeply conservative — dress and behave with particular respect for Islamic customs.",
      },
    ],
  },
  {
    id: "CYP",
    name: { zh: "賽普勒斯", en: "Cyprus" },
    capital: { zh: "尼柯西亞", en: "Nicosia" },
    flag: "🇨🇾",
    region: "asia",
    center: { lat: 35.1, lng: 33.2 },
    intro: {
      zh: "地中海東部第三大島,傳說中愛神阿芙蘿黛蒂的誕生地。陽光、沙灘、葡萄酒與哈魯米起司是它的招牌;1974 年起島嶼南北分治,首都尼柯西亞至今仍被緩衝區一分為二。",
      en: "The third-largest island in the eastern Mediterranean and the legendary birthplace of Aphrodite. Sunshine, beaches, wine, and halloumi are its calling cards; divided since 1974, its capital Nicosia remains split by a buffer zone.",
    },
    history: {
      zh: "銅礦讓賽普勒斯自青銅時代便富庶,「銅」(copper)一詞即與島名同源;其後希臘人、腓尼基人、羅馬、拜占庭、威尼斯與鄂圖曼相繼統治。1878 年起由英國治理,1960 年獨立;1974 年政變與土耳其出兵後島嶼南北分治至今。南部的賽普勒斯共和國 2004 年加入歐盟,觀光與航運服務業發達。",
      en: "Copper made Cyprus rich from the Bronze Age — the word 'copper' shares its root with the island's name. Greeks, Phoenicians, Rome, Byzantium, Venice, and the Ottomans ruled in turn, then Britain from 1878, with independence in 1960. A 1974 coup and Turkish intervention split the island; the Republic of Cyprus joined the EU in 2004, thriving on tourism and shipping services.",
    },
    cities: [
      {
        name: { zh: "尼柯西亞", en: "Nicosia" },
        blurb: {
          zh: "威尼斯星形城牆環繞的首都,老城中央有一道分隔南北的緩衝區。",
          en: "A capital ringed by Venetian star-shaped walls, its old town split by the buffer zone between north and south.",
        },
        trivia: {
          question: {
            zh: "尼柯西亞在世界首都之中有什麼獨特之處?",
            en: "What makes Nicosia unique among the world's capitals?",
          },
          options: [
            {
              zh: "是世界上最後一座被分隔的首都",
              en: "It is the world's last divided capital",
            },
            { zh: "是世界海拔最高的首都", en: "It is the world's highest capital" },
            { zh: "是世界最小的首都", en: "It is the world's smallest capital" },
            { zh: "是唯一沒有機場的首都", en: "It is the only capital without an airport" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1974 年以來,聯合國維和的「綠線」貫穿尼柯西亞市中心,南北各自管轄,是世界僅存的分隔首都。",
            en: "Since 1974 the UN-patrolled Green Line has run through central Nicosia, leaving it the last capital city divided in two.",
          },
        },
      },
      {
        name: { zh: "利馬索", en: "Limassol" },
        blurb: {
          zh: "南岸港都與度假勝地,城堡、遊艇碼頭與酒莊環繞。",
          en: "A south-coast port and resort city of castles, marinas, and wineries.",
        },
        trivia: {
          question: {
            zh: "利馬索每年舉辦的節慶中,哪一個呼應了賽普勒斯數千年的釀酒傳統?",
            en: "Which of Limassol's annual festivals celebrates Cyprus's millennia-old winemaking tradition?",
          },
          options: [
            { zh: "葡萄酒節", en: "The Wine Festival" },
            { zh: "啤酒節", en: "A beer festival" },
            { zh: "橄欖油節", en: "An olive-oil festival" },
            { zh: "柑橘節", en: "A citrus festival" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "賽普勒斯釀酒史悠久,甜酒「卡曼達蕾雅」被認為是世界最古老仍在生產的具名葡萄酒之一,利馬索酒節已辦數十年。",
            en: "Cyprus has made wine for millennia — its sweet Commandaria is often called the world's oldest named wine still in production, and Limassol's festival has run for decades.",
          },
        },
      },
      {
        name: { zh: "帕福斯", en: "Paphos" },
        blurb: {
          zh: "西岸古城,羅馬別墅馬賽克與愛神傳說之岸,整城列為世界遺產。",
          en: "An ancient western city of Roman villa mosaics and Aphrodite lore — inscribed wholesale as World Heritage.",
        },
        trivia: {
          question: {
            zh: "希臘神話中,哪位女神據說在帕福斯附近的海岸從浪花中誕生?",
            en: "In Greek myth, which goddess is said to have risen from the sea foam near Paphos?",
          },
          options: [
            { zh: "阿芙蘿黛蒂", en: "Aphrodite" },
            { zh: "雅典娜", en: "Athena" },
            { zh: "赫拉", en: "Hera" },
            { zh: "阿蒂蜜絲", en: "Artemis" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "傳說愛與美之神阿芙蘿黛蒂自帕福斯外海的浪花中誕生,岸邊的「愛神岩」至今仍是著名景點。",
            en: "Legend places Aphrodite's birth in the foam off Paphos — Petra tou Romiou, 'Aphrodite's Rock', still draws visitors to the spot.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "哈魯米起司是賽普勒斯的招牌特產,煎烤不融化,已行銷全球。",
        en: "Halloumi, the island's signature cheese, grills without melting and has conquered menus worldwide.",
      },
      {
        zh: "賽普勒斯地理上屬亞洲,政治與文化上卻深度歐洲化,並且是歐盟成員國。",
        en: "Geographically in Asia yet thoroughly European in politics and culture, Cyprus is a member of the EU.",
      },
    ],
    climate: {
      zh: "典型地中海型氣候,夏季漫長乾熱、日照充足,冬季溫和多雨;特羅多斯山區冬季降雪,甚至可以滑雪。",
      en: "Classic Mediterranean: long, dry, sun-drenched summers and mild rainy winters, with winter snow — even skiing — in the Troodos mountains.",
    },
    travelTips: [
      {
        zh: "車輛靠左行駛,是英國統治留下的習慣,租車自駕請留意。",
        en: "Traffic drives on the left — a British legacy — so take care when renting a car.",
      },
      {
        zh: "跨越南北需經指定檢查站並攜帶護照,行前確認各檢查站的開放狀況。",
        en: "Crossing between south and north requires designated checkpoints and a passport — confirm which crossings are open.",
      },
      {
        zh: "夏季日照強烈,防曬與補水不可少;7、8 月海灘旺季人潮最多。",
        en: "Summer sun is intense — bring sunscreen and water; July and August are peak beach season.",
      },
    ],
  },
  {
    id: "PSE",
    name: { zh: "巴勒斯坦", en: "Palestine" },
    capital: { zh: "拉姆安拉(行政中心)", en: "Ramallah (administrative center)" },
    flag: "🇵🇸",
    region: "asia",
    center: { lat: 31.9, lng: 35.2 },
    intro: {
      zh: "地中海東岸的古老土地,包含約旦河西岸與加薩走廊,2012 年起為聯合國觀察員國。橄欖園、傳統刺繡與伯利恆、耶利哥等千年古城,承載著猶太教、基督教與伊斯蘭教共同交織的深厚歷史。",
      en: "An ancient land on the eastern Mediterranean comprising the West Bank and Gaza Strip, a UN observer state since 2012. Olive groves, traditional embroidery, and millennia-old towns like Bethlehem and Jericho carry a deep history woven through Judaism, Christianity, and Islam.",
    },
    history: {
      zh: "此地自古是迦南、以色列諸王國、羅馬、拜占庭與伊斯蘭各時期文明的交會之處。一戰後由英國託管,1948 年以色列建國前後歷經戰爭與大規模流離。1993 年奧斯陸協議成立巴勒斯坦自治政府,2012 年聯合國大會授予觀察員國地位;最終地位問題至今仍待以巴雙方透過談判解決。",
      en: "The land has passed through Canaanite, Israelite, Roman, Byzantine, and Islamic eras. After WWI it fell under British mandate; the wars surrounding Israel's founding in 1948 brought large-scale displacement. The 1993 Oslo Accords created the Palestinian Authority, and in 2012 the UN General Assembly granted observer-state status; final-status questions remain subject to negotiation.",
    },
    cities: [
      {
        name: { zh: "拉姆安拉", en: "Ramallah" },
        blurb: {
          zh: "約旦河西岸的山城,咖啡館與文化活動聚集的行政中心。",
          en: "A hill town in the West Bank — the administrative center, buzzing with cafés and cultural life.",
        },
        trivia: {
          question: {
            zh: "拉姆安拉在巴勒斯坦扮演什麼角色?",
            en: "What role does Ramallah play in Palestine?",
          },
          options: [
            {
              zh: "巴勒斯坦自治政府的行政中心",
              en: "The administrative center of the Palestinian Authority",
            },
            { zh: "最大的海港城市", en: "The largest seaport" },
            { zh: "主要的工業重鎮", en: "The main industrial hub" },
            { zh: "最古老的宗教聖城", en: "The oldest holy city" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "自治政府的總統府與多數部會設於拉姆安拉,使它成為西岸實際上的政治與行政中樞。",
            en: "The PA's presidential compound and most ministries sit in Ramallah, making it the de facto political and administrative hub of the West Bank.",
          },
        },
      },
      {
        name: { zh: "伯利恆", en: "Bethlehem" },
        blurb: {
          zh: "基督教傳統中耶穌誕生之城,聖誕教堂是朝聖核心。",
          en: "The town of Jesus's birth in Christian tradition, centered on the Church of the Nativity.",
        },
        trivia: {
          question: {
            zh: "伯利恆的聖誕教堂,據信建於什麼地點之上?",
            en: "The Church of the Nativity in Bethlehem is believed to stand over what site?",
          },
          options: [
            { zh: "耶穌誕生的洞穴", en: "The grotto of Jesus's birth" },
            { zh: "最後晚餐的房間", en: "The room of the Last Supper" },
            { zh: "耶穌受洗的河岸", en: "The riverbank of Jesus's baptism" },
            { zh: "登山寶訓的山丘", en: "The hill of the Sermon on the Mount" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "4 世紀君士坦丁大帝時代便在此建堂,是基督教最古老的教堂之一,2012 年列入世界遺產。",
            en: "A church has stood here since Constantine's time in the 4th century — among Christianity's oldest, inscribed as World Heritage in 2012.",
          },
        },
      },
      {
        name: { zh: "耶利哥", en: "Jericho" },
        blurb: {
          zh: "約旦河谷中的綠洲城市,考古遺址的歷史上溯萬年。",
          en: "An oasis city in the Jordan Valley, with archaeological layers reaching back ten millennia.",
        },
        trivia: {
          question: {
            zh: "耶利哥同時擁有哪兩項世界之最的稱號?",
            en: "Jericho claims which two world superlatives at once?",
          },
          options: [
            {
              zh: "最古老的持續有人居住城市之一,也是海拔最低的城市",
              en: "One of the oldest continuously inhabited cities — and the lowest-lying city on Earth",
            },
            {
              zh: "最熱的城市,也是最乾燥的城市",
              en: "The hottest city and the driest city",
            },
            {
              zh: "最小的城市,也是人口最少的城市",
              en: "The smallest city and the least populated",
            },
            {
              zh: "最多城牆的城市,也是最多城門的城市",
              en: "The city with the most walls and the most gates",
            },
          ],
          answerIndex: 0,
          explanation: {
            zh: "耶利哥的聚落遺跡可上溯約一萬年,城區位於海平面下約 250 公尺,雙重紀錄舉世無雙。",
            en: "Settlement at Jericho goes back some 10,000 years, and the city sits about 250 meters below sea level — a double record without rival.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "巴勒斯坦傳統刺繡「塔特里茲」於 2021 年列入聯合國教科文組織非物質文化遺產。",
        en: "Tatreez, the art of Palestinian embroidery, was inscribed on UNESCO's Intangible Cultural Heritage list in 2021.",
      },
      {
        zh: "橄欖樹是巴勒斯坦的文化象徵,部分老樹樹齡據估已達數百年以上。",
        en: "The olive tree is a cultural symbol of Palestine — some ancient trees are estimated to be many centuries old.",
      },
    ],
    climate: {
      zh: "地中海型氣候,夏季乾熱、冬季溫和多雨;山地城市較涼爽,約旦河谷與死海沿岸則全年炎熱乾燥。",
      en: "Mediterranean: hot dry summers and mild rainy winters, cooler in the hill towns, while the Jordan Valley and Dead Sea shore stay hot and arid year-round.",
    },
    travelTips: [
      {
        zh: "多國對此地區發布旅遊警示,行前務必確認最新官方公告。",
        en: "Many governments issue travel advisories for the region — always check the latest official guidance before traveling.",
      },
      {
        zh: "進出西岸城市需經以色列管制的檢查站,請隨身攜帶護照並預留通行時間。",
        en: "Entering and leaving West Bank cities involves Israeli-controlled checkpoints — carry your passport and allow extra time.",
      },
      {
        zh: "參觀教堂與清真寺等宗教場所,衣著務必端莊並遵守現場規定。",
        en: "Dress modestly and follow site rules when visiting churches, mosques, and other holy places.",
      },
    ],
  },
  {
    id: "BHR",
    name: { zh: "巴林", en: "Bahrain" },
    capital: { zh: "麥納瑪", en: "Manama" },
    flag: "🇧🇭",
    region: "asia",
    center: { lat: 26.05, lng: 50.55 },
    intro: {
      zh: "波斯灣中的島國,由三十多座島嶼組成,國名在阿拉伯語中意為「兩個海」。古代迪爾蒙文明的貿易樞紐、近代波斯灣採珠業的中心,如今以金融業與一級方程式賽車聞名,是海灣地區風氣較開放的國家。",
      en: "An island nation of more than 30 islands in the Persian Gulf, its name meaning 'two seas' in Arabic. Once the trading hub of ancient Dilmun and the center of Gulf pearling, it is now known for banking and Formula 1 — among the more open societies in the Gulf.",
    },
    history: {
      zh: "四千多年前,迪爾蒙文明以巴林為樞紐,串起美索不達米亞與印度河流域的貿易。其後歷經波斯與葡萄牙勢力,18 世紀哈利法家族執政至今;19 世紀成為英國保護國,天然珍珠採集業盛極一時。1932 年成為波斯灣阿拉伯地區最早發現石油的國家,1971 年獨立,並轉型為區域金融中心。",
      en: "Over 4,000 years ago the Dilmun civilization made Bahrain the linchpin of trade between Mesopotamia and the Indus Valley. Persian and Portuguese powers followed; the Al Khalifa family has ruled since the 18th century, with British protection from the 19th, when natural pearling boomed. In 1932 it became the first place on the Arab side of the Gulf to strike oil, gained independence in 1971, and reinvented itself as a financial hub.",
    },
    cities: [
      {
        name: { zh: "麥納瑪", en: "Manama" },
        blurb: {
          zh: "首都與金融中心,近郊的巴林堡下埋著四千年的文明層。",
          en: "The capital and financial center — beneath the nearby Bahrain Fort lie 4,000 years of settlement layers.",
        },
        trivia: {
          question: {
            zh: "麥納瑪近郊的巴林堡(Qal'at al-Bahrain)遺址,曾是哪個古文明的都城?",
            en: "The Qal'at al-Bahrain site near Manama was once the capital of which ancient civilization?",
          },
          options: [
            { zh: "迪爾蒙", en: "Dilmun" },
            { zh: "亞述", en: "Assyria" },
            { zh: "納巴泰", en: "The Nabataeans" },
            { zh: "米諾斯", en: "The Minoans" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴林堡土丘下疊壓著迪爾蒙文明的都城遺址,見證數千年的貿易史,2005 年列入世界遺產。",
            en: "The tell beneath the fort holds the capital of Dilmun, witnessing millennia of trade — inscribed as World Heritage in 2005.",
          },
        },
      },
      {
        name: { zh: "穆哈拉格", en: "Muharraq" },
        blurb: {
          zh: "舊都與傳統文化重鎮,珍珠商人的老宅沿巷弄保存至今。",
          en: "The former capital and traditional heart, where pearl merchants' houses still line the lanes.",
        },
        trivia: {
          question: {
            zh: "穆哈拉格的「採珠之路」列入世界遺產,見證了巴林什麼產業的黃金年代?",
            en: "Muharraq's World Heritage 'Pearling Path' commemorates the golden age of which Bahraini industry?",
          },
          options: [
            { zh: "天然珍珠採集業", en: "Natural pearl diving" },
            { zh: "椰棗貿易", en: "The date trade" },
            { zh: "木造帆船製造業", en: "Dhow shipbuilding" },
            { zh: "織布業", en: "Weaving" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "20 世紀初日本養珠興起前,巴林是世界天然珍珠的中心,採珠之路串起商宅、倉庫與外海珠場。",
            en: "Before Japanese cultured pearls rose in the early 20th century, Bahrain was the world's natural-pearl capital — the path links merchant houses, warehouses, and oyster beds.",
          },
        },
      },
      {
        name: { zh: "阿阿里", en: "A'ali" },
        blurb: {
          zh: "以傳統製陶聞名的市鎮,周邊平原散布著壯觀的古墓塚群。",
          en: "A town famed for traditional pottery, surrounded by plains of spectacular ancient burial mounds.",
        },
        trivia: {
          question: {
            zh: "阿阿里周邊成千上萬座土丘,其實是什麼?",
            en: "The thousands of earthen mounds around A'ali are actually what?",
          },
          options: [
            { zh: "迪爾蒙時期的古墓塚", en: "Burial mounds from the Dilmun era" },
            { zh: "廢棄的鹽田", en: "Abandoned salt pans" },
            { zh: "古代的防禦工事", en: "Ancient defensive earthworks" },
            { zh: "乾涸的灌溉蓄水池", en: "Dried-up irrigation reservoirs" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "巴林曾有世界密度最高的古墓塚群之一,迪爾蒙墓塚 2019 年列入世界遺產,阿阿里一帶的王家墓塚最為高大。",
            en: "Bahrain holds one of the world's densest concentrations of ancient burial mounds; the Dilmun tumuli became World Heritage in 2019, with the grandest royal mounds at A'ali.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "「巴林」在阿拉伯語中意為「兩個海」,一說指環島海水與地下湧出的淡水泉並存。",
        en: "'Bahrain' means 'two seas' in Arabic — often said to refer to the salt water around the islands and the fresh springs beneath them.",
      },
      {
        zh: "2004 年巴林舉辦了中東第一場一級方程式大獎賽。",
        en: "In 2004 Bahrain hosted the Middle East's first Formula 1 Grand Prix.",
      },
    ],
    climate: {
      zh: "炎熱的沙漠氣候,夏季濕熱難耐,常超過 40°C;冬季溫和舒適,全年降雨稀少。",
      en: "A hot desert climate: oppressively humid summers often above 40°C, mild pleasant winters, and very little rain year-round.",
    },
    travelTips: [
      {
        zh: "民風在海灣國家中相對開放,但公共場合衣著仍以端莊為宜。",
        en: "Bahrain is relatively liberal for the Gulf, but modest dress in public is still the norm.",
      },
      {
        zh: "11 月至 3 月天氣最舒適,也是 F1 賽季等大型活動期間,住宿需提早預訂。",
        en: "November to March is the pleasant season — and F1 time — so book accommodation early.",
      },
      {
        zh: "與沙烏地阿拉伯之間有法赫德國王跨海大橋相連,自駕通關需備妥簽證與車輛文件。",
        en: "The King Fahd Causeway links Bahrain to Saudi Arabia — driving across requires the right visas and vehicle papers.",
      },
    ],
  },
];
