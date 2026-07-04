import type { Country } from "../types";

// Europe (batch 3): Balkans + microstates, 13 countries. Content shape is
// LLM-generatable — see types.ts. Microstates (MLT/AND/MCO/SMR/LIE/VAT) have
// no polygon in countries.geo.json and render as dots — centers must be exact.

export const EUROPE_MORE2: Country[] = [
  {
    id: "SRB",
    name: { zh: "塞爾維亞", en: "Serbia" },
    capital: { zh: "貝爾格勒", en: "Belgrade" },
    flag: "🇷🇸",
    region: "europe",
    center: { lat: 44.0, lng: 20.9 },
    intro: {
      zh: "巴爾幹半島中心的內陸國,多瑙河與薩瓦河在首都交會。曾是南斯拉夫的核心,如今以熱鬧的音樂節、河畔夜生活與傳統烤肉料理聞名,也是歐洲重要的覆盆子產地。",
      en: "A landlocked country at the heart of the Balkans, where the Danube meets the Sava in its capital. Once the core of Yugoslavia, it is now known for lively music festivals, riverside nightlife, grilled-meat cuisine, and world-leading raspberry farms.",
    },
    history: {
      zh: "中世紀塞爾維亞王國於 14 世紀杜尚皇帝時達到頂峰,1389 年科索沃戰役後逐步落入鄂圖曼統治近五百年。19 世紀經起義與外交爭取,1878 年柏林會議確認獨立。一戰後成為南斯拉夫的主體,1990 年代南斯拉夫解體引發多場戰爭,2006 年蒙特內哥羅分離後成為今日的塞爾維亞共和國,現為歐盟候選國。",
      en: "The medieval Serbian state peaked under Emperor Dušan in the 14th century, then fell under nearly five centuries of Ottoman rule after the 1389 Battle of Kosovo. Uprisings and diplomacy won recognized independence at the 1878 Congress of Berlin. After WWI it anchored Yugoslavia; the federation's violent breakup in the 1990s was followed by Montenegro's separation in 2006, leaving today's republic, now an EU candidate.",
    },
    cities: [
      {
        name: { zh: "貝爾格勒", en: "Belgrade" },
        blurb: {
          zh: "「白色之城」,卡萊梅格丹要塞俯瞰兩河交會,是巴爾幹最富活力的首都之一。",
          en: "The 'White City' — Kalemegdan fortress overlooks the meeting of two great rivers in one of the Balkans' liveliest capitals.",
        },
        trivia: {
          question: {
            zh: "貝爾格勒建於哪兩條河流的交會處?",
            en: "Belgrade sits at the confluence of which two rivers?",
          },
          options: [
            { zh: "薩瓦河與多瑙河", en: "The Sava and the Danube" },
            { zh: "德拉瓦河與多瑙河", en: "The Drava and the Danube" },
            { zh: "蒂薩河與多瑙河", en: "The Tisza and the Danube" },
            { zh: "摩拉瓦河與薩瓦河", en: "The Morava and the Sava" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "薩瓦河在卡萊梅格丹要塞下方匯入多瑙河,這個戰略位置使貝爾格勒歷史上被反覆爭奪、摧毀與重建。",
            en: "The Sava joins the Danube right below Kalemegdan fortress — a strategic spot that saw Belgrade besieged, razed, and rebuilt many times.",
          },
        },
      },
      {
        name: { zh: "諾維薩德", en: "Novi Sad" },
        blurb: {
          zh: "第二大城,多瑙河畔的文化之都,2022 年歐洲文化之都。",
          en: "The second city and a cultural hub on the Danube — European Capital of Culture 2022.",
        },
        trivia: {
          question: {
            zh: "諾維薩德著名的 EXIT 音樂節在哪座要塞舉行?",
            en: "Novi Sad's famous EXIT music festival is held in which fortress?",
          },
          options: [
            { zh: "彼得羅瓦拉丁要塞", en: "Petrovaradin Fortress" },
            { zh: "卡萊梅格丹要塞", en: "Kalemegdan Fortress" },
            { zh: "戈盧巴茨要塞", en: "Golubac Fortress" },
            { zh: "斯梅代雷沃要塞", en: "Smederevo Fortress" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "EXIT 音樂節 2000 年由學生運動發起,如今每年夏天在多瑙河畔的彼得羅瓦拉丁要塞登場,是歐洲最大音樂節之一。",
            en: "Born of a student movement in 2000, EXIT now fills the Danube-side Petrovaradin Fortress each summer — one of Europe's biggest festivals.",
          },
        },
      },
      {
        name: { zh: "尼什", en: "Niš" },
        blurb: {
          zh: "南部大城與古羅馬重鎮,君士坦丁大帝的出生地。",
          en: "The main city of the south and an ancient Roman center — birthplace of Constantine the Great.",
        },
        trivia: {
          question: {
            zh: "哪位羅馬皇帝出生於尼什(古稱 Naissus)?",
            en: "Which Roman emperor was born in Niš (ancient Naissus)?",
          },
          options: [
            { zh: "君士坦丁大帝", en: "Constantine the Great" },
            { zh: "戴克里先", en: "Diocletian" },
            { zh: "圖拉真", en: "Trajan" },
            { zh: "查士丁尼一世", en: "Justinian I" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "西元 272 年左右君士坦丁生於尼什,他後來將基督教合法化並建立君士坦丁堡,是羅馬史上最具影響力的皇帝之一。",
            en: "Constantine was born in Naissus around 272 AD; he later legalized Christianity and founded Constantinople.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "發明家特斯拉是塞爾維亞裔,貝爾格勒的特斯拉博物館保存著他的骨灰與手稿。",
        en: "Nikola Tesla was an ethnic Serb; the Tesla Museum in Belgrade holds his ashes and manuscripts.",
      },
      {
        zh: "塞爾維亞長年是全球最大的覆盆子出口國之一。",
        en: "Serbia is consistently among the world's top raspberry exporters.",
      },
    ],
    climate: {
      zh: "溫帶大陸性氣候,夏季炎熱可達 35 度以上,冬季寒冷常降雪,春秋短暫宜人,南部山區冬季更為嚴寒。",
      en: "Temperate continental: hot summers above 35°C, cold snowy winters, short pleasant springs and autumns; harsher winters in the southern mountains.",
    },
    travelTips: [
      {
        zh: "貨幣是塞爾維亞第納爾(RSD),不是歐元;傳統小酒館(kafana)多半只收現金。",
        en: "The currency is the Serbian dinar (RSD), not the euro; traditional kafana taverns are often cash-only.",
      },
      {
        zh: "城際移動以巴士最方便,班次遠多於火車。",
        en: "Intercity buses are far more frequent and reliable than trains.",
      },
      {
        zh: "夏天可體驗貝爾格勒河上的船屋夜店(splav),是當地招牌夜生活。",
        en: "In summer, try Belgrade's floating river clubs (splavovi) — the city's signature nightlife.",
      },
    ],
  },
  {
    id: "BIH",
    name: { zh: "波士尼亞與赫塞哥維納", en: "Bosnia and Herzegovina" },
    capital: { zh: "塞拉耶佛", en: "Sarajevo" },
    flag: "🇧🇦",
    region: "europe",
    center: { lat: 43.9, lng: 17.7 },
    intro: {
      zh: "巴爾幹山地之國,清真寺尖塔、天主教堂與東正教堂在同一條街上比鄰而立,被稱為「歐洲的耶路撒冷」。翠綠河谷、鄂圖曼老橋與濃郁的咖啡文化是它的招牌。",
      en: "A mountainous Balkan country where minarets, Catholic and Orthodox churches share the same streets — often called a 'Jerusalem of Europe'. Emerald river valleys, Ottoman bridges, and a deep coffee culture define it.",
    },
    history: {
      zh: "中世紀波士尼亞王國之後,15 世紀起受鄂圖曼統治四百餘年,伊斯蘭文化深植;1878 年改由奧匈帝國管治。1914 年塞拉耶佛刺殺事件點燃第一次世界大戰。二戰後成為南斯拉夫一員,1992 年獨立引發慘烈的波士尼亞戰爭,1995 年岱頓協議終戰,確立由波赫聯邦與塞族共和國兩個實體組成的複雜政體,延續至今。",
      en: "After a medieval Bosnian kingdom, four centuries of Ottoman rule from the 15th century rooted Islamic culture; Austria-Hungary took over in 1878. The 1914 Sarajevo assassination ignited WWI. Part of Yugoslavia after WWII, its 1992 independence triggered the devastating Bosnian War, ended by the 1995 Dayton Agreement, which created today's complex state of two entities — the Federation and Republika Srpska.",
    },
    cities: [
      {
        name: { zh: "塞拉耶佛", en: "Sarajevo" },
        blurb: {
          zh: "群山環抱的首都,鄂圖曼巴扎、奧匈建築與 1984 冬奧遺跡層層疊疊。",
          en: "A capital ringed by mountains, layering an Ottoman bazaar, Austro-Hungarian architecture, and 1984 Winter Olympics relics.",
        },
        trivia: {
          question: {
            zh: "1914 年在塞拉耶佛發生了什麼事件,成為第一次世界大戰的導火線?",
            en: "What happened in Sarajevo in 1914 that sparked the First World War?",
          },
          options: [
            {
              zh: "奧匈帝國皇儲斐迪南大公遇刺",
              en: "The assassination of Archduke Franz Ferdinand of Austria-Hungary",
            },
            { zh: "鄂圖曼帝國宣布參戰", en: "The Ottoman Empire's declaration of war" },
            { zh: "塞爾維亞入侵波士尼亞", en: "A Serbian invasion of Bosnia" },
            { zh: "巴爾幹同盟成立", en: "The founding of the Balkan League" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "1914 年 6 月 28 日,普林西普在拉丁橋附近刺殺斐迪南大公夫婦,一個月後歐洲各國相繼宣戰。",
            en: "On 28 June 1914 Gavrilo Princip shot the Archduke and his wife near the Latin Bridge; within a month Europe's powers were at war.",
          },
        },
      },
      {
        name: { zh: "莫斯塔爾", en: "Mostar" },
        blurb: {
          zh: "赫塞哥維納首府,以橫跨內雷特瓦河的古橋與跳水傳統聞名。",
          en: "Herzegovina's main city, famed for its old bridge over the Neretva and its diving tradition.",
        },
        trivia: {
          question: {
            zh: "莫斯塔爾古橋(Stari Most)最初由哪個帝國建造?",
            en: "Mostar's Old Bridge (Stari Most) was originally built by which empire?",
          },
          options: [
            { zh: "鄂圖曼帝國", en: "The Ottoman Empire" },
            { zh: "奧匈帝國", en: "The Austro-Hungarian Empire" },
            { zh: "威尼斯共和國", en: "The Republic of Venice" },
            { zh: "拜占庭帝國", en: "The Byzantine Empire" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "古橋建於 1566 年鄂圖曼時期,1993 年戰爭中被炸毀,2004 年依原工法重建,並列入世界遺產。",
            en: "Built in 1566 under the Ottomans, destroyed in the 1993 war, and rebuilt with original techniques by 2004 — now a World Heritage site.",
          },
        },
      },
      {
        name: { zh: "巴尼亞盧卡", en: "Banja Luka" },
        blurb: {
          zh: "西北部大城,綠樹成蔭,弗爾巴斯河畔以泛舟聞名。",
          en: "The leafy main city of the northwest, known for rafting on the Vrbas River.",
        },
        trivia: {
          question: {
            zh: "巴尼亞盧卡是波士尼亞與赫塞哥維納哪一個政治實體的行政中心?",
            en: "Banja Luka is the administrative center of which entity of Bosnia and Herzegovina?",
          },
          options: [
            { zh: "塞族共和國", en: "Republika Srpska" },
            { zh: "波赫聯邦", en: "The Federation of Bosnia and Herzegovina" },
            { zh: "布爾奇科特區", en: "The Brčko District" },
            { zh: "赫塞哥維納州", en: "The Herzegovina canton" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "岱頓協議把國家分為波赫聯邦與塞族共和國兩個實體,巴尼亞盧卡是後者的實質首府。",
            en: "The Dayton Agreement split the country into two entities; Banja Luka serves as the de facto capital of Republika Srpska.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "塞拉耶佛 1984 年主辦冬季奧運,是首個舉辦冬奧的社會主義國家城市。",
        en: "Sarajevo hosted the 1984 Winter Olympics — the first Winter Games in a socialist country.",
      },
      {
        zh: "波士尼亞咖啡以銅壺(džezva)慢煮,配方糖與軟糖上桌,是重要的社交儀式。",
        en: "Bosnian coffee is slow-brewed in a copper džezva and served with sugar cubes and Turkish delight — a social ritual in itself.",
      },
    ],
    climate: {
      zh: "內陸屬大陸性氣候,冬冷夏熱,山區降雪豐富;南部赫塞哥維納受地中海影響,夏季乾熱,莫斯塔爾常是全國最熱的城市。",
      en: "Continental inland with cold winters and snowy mountains; southern Herzegovina is Mediterranean-influenced, with hot dry summers — Mostar is often the country's hottest city.",
    },
    travelTips: [
      {
        zh: "貨幣是可兌換馬克(BAM),小店與市集以現金為主。",
        en: "The currency is the convertible mark (BAM); small shops and markets are mostly cash-based.",
      },
      {
        zh: "郊外健行務必走標示步道,山區仍有戰爭遺留的地雷警示區,看到警告標誌切勿進入。",
        en: "Stick to marked trails when hiking — some rural areas still have marked minefields from the war; never cross warning signs.",
      },
      {
        zh: "塞拉耶佛到莫斯塔爾的鐵路沿內雷特瓦河谷而行,被譽為歐洲最美火車路線之一。",
        en: "The Sarajevo–Mostar railway follows the Neretva valley and ranks among Europe's most scenic train rides.",
      },
    ],
  },
  {
    id: "MKD",
    name: { zh: "北馬其頓", en: "North Macedonia" },
    capital: { zh: "史高比耶", en: "Skopje" },
    flag: "🇲🇰",
    region: "europe",
    center: { lat: 41.6, lng: 21.7 },
    intro: {
      zh: "巴爾幹南部的內陸山國,奧赫里德湖的湖光與拜占庭教堂是最著名的風景。多元族群共處,融合斯拉夫、鄂圖曼與地中海元素,物價親民,是巴爾幹旅行的隱藏寶石。",
      en: "A landlocked, mountainous country in the southern Balkans, best known for Lake Ohrid's waters and Byzantine churches. Its mix of Slavic, Ottoman, and Mediterranean threads — at friendly prices — makes it a hidden Balkan gem.",
    },
    history: {
      zh: "古代屬佩奧尼亞與馬其頓王國的邊緣地帶,後歷經羅馬、拜占庭與長達五百年的鄂圖曼統治。1945 年成為南斯拉夫的馬其頓社會主義共和國,1991 年和平獨立,是南斯拉夫解體中少數未經戰火的共和國。因國名與希臘爭議多年,2018 年簽署普雷斯帕協議,2019 年改國名為北馬其頓,2020 年加入北約。",
      en: "On the fringes of ancient Paeonia and Macedon, the land passed through Roman, Byzantine, and five centuries of Ottoman rule. It became Yugoslavia's Macedonian republic in 1945 and seceded peacefully in 1991 — one of the few republics to avoid war. A long name dispute with Greece ended with the 2018 Prespa Agreement: renamed North Macedonia in 2019, it joined NATO in 2020.",
    },
    cities: [
      {
        name: { zh: "史高比耶", en: "Skopje" },
        blurb: {
          zh: "首都,老巴扎與滿城新古典雕像形成奇特混搭,瓦爾達爾河貫穿其中。",
          en: "The capital — an old Ottoman bazaar oddly paired with a forest of new neoclassical statues, split by the Vardar River.",
        },
        trivia: {
          question: {
            zh: "哪位諾貝爾和平獎得主 1910 年出生於史高比耶?",
            en: "Which Nobel Peace Prize laureate was born in Skopje in 1910?",
          },
          options: [
            { zh: "德蕾莎修女", en: "Mother Teresa" },
            { zh: "史懷哲", en: "Albert Schweitzer" },
            { zh: "翁山蘇姬", en: "Aung San Suu Kyi" },
            { zh: "曼德拉", en: "Nelson Mandela" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "德蕾莎修女出生於史高比耶的阿爾巴尼亞裔家庭,市中心設有她的紀念館,保存受洗紀錄。",
            en: "Mother Teresa was born in Skopje to an Albanian family; a memorial house downtown preserves her baptism record.",
          },
        },
      },
      {
        name: { zh: "奧赫里德", en: "Ohrid" },
        blurb: {
          zh: "湖畔古城,教堂與湖景兼具,罕見地同時擁有自然與文化雙重世界遺產。",
          en: "A lakeside old town of churches and water views — one of the rare places with both natural and cultural World Heritage status.",
        },
        trivia: {
          question: {
            zh: "奧赫里德為何有「巴爾幹的耶路撒冷」之稱?",
            en: "Why is Ohrid nicknamed the 'Jerusalem of the Balkans'?",
          },
          options: [
            {
              zh: "傳說城內曾有 365 座教堂",
              en: "Legend says it once had 365 churches",
            },
            { zh: "它是東正教的發源地", en: "It is the birthplace of Orthodox Christianity" },
            { zh: "三大一神教在此共存", en: "The three Abrahamic faiths coexisted here" },
            { zh: "耶路撒冷十字軍在此建城", en: "Crusaders from Jerusalem founded it" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "傳說奧赫里德一年 365 天每天都能到不同教堂做禮拜;中世紀時這裡也是斯拉夫文字與修道文化的重鎮。",
            en: "Legend holds Ohrid had a church for every day of the year; it was also a medieval hub of Slavic literacy and monasticism.",
          },
        },
      },
      {
        name: { zh: "比托拉", en: "Bitola" },
        blurb: {
          zh: "南部第二大城,鄂圖曼時代的「領事之城」,近郊有古城赫拉克利亞遺址。",
          en: "The southern second city — the Ottoman-era 'city of consuls', near the ruins of ancient Heraclea Lyncestis.",
        },
        trivia: {
          question: {
            zh: "土耳其國父凱末爾年輕時在比托拉(當時稱莫納斯提爾)做過什麼?",
            en: "What did Mustafa Kemal Atatürk, founder of modern Turkey, do in Bitola (then Monastir) in his youth?",
          },
          options: [
            { zh: "就讀軍事中學", en: "He attended its military high school" },
            { zh: "擔任駐地領事", en: "He served as a resident consul" },
            { zh: "經營菸草貿易", en: "He ran a tobacco trade" },
            { zh: "創辦第一份報紙", en: "He founded its first newspaper" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "凱末爾 1896–1899 年就讀莫納斯提爾軍事中學,今日比托拉的博物館仍保留相關展區。",
            en: "Atatürk studied at the Monastir Military High School from 1896–1899; Bitola's museum keeps a gallery devoted to him.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "奧赫里德湖存在超過一百萬年,是歐洲最古老的湖泊之一,棲息著兩百多種特有生物。",
        en: "Lake Ohrid is over a million years old — among Europe's oldest lakes — with 200+ endemic species.",
      },
      {
        zh: "史高比耶近郊沃德諾山上的千禧十字架高 66 公尺,是世界最高的十字架之一。",
        en: "The 66-meter Millennium Cross on Mount Vodno above Skopje is one of the tallest crosses in the world.",
      },
    ],
    climate: {
      zh: "以大陸性氣候為主,夏季乾熱、冬季寒冷多霧;瓦爾達爾河谷與南部受地中海影響,奧赫里德湖區夏季涼爽宜人。",
      en: "Mostly continental — dry hot summers and cold, foggy winters; the Vardar valley and south feel Mediterranean influence, and Lake Ohrid stays pleasantly mild in summer.",
    },
    travelTips: [
      {
        zh: "貨幣是馬其頓第納爾(MKD),市集與小餐館常只收現金。",
        en: "The currency is the Macedonian denar (MKD); markets and small eateries are often cash-only.",
      },
      {
        zh: "史高比耶到奧赫里德以巴士最方便,車程約三小時。",
        en: "Buses are the easiest way from Skopje to Ohrid — about a three-hour ride.",
      },
      {
        zh: "七、八月奧赫里德夏日藝術節期間人潮最多,住宿要提早預訂。",
        en: "Book Ohrid lodging early in July–August, when the Summer Festival draws the biggest crowds.",
      },
    ],
  },
  {
    id: "ALB",
    name: { zh: "阿爾巴尼亞", en: "Albania" },
    capital: { zh: "地拉那", en: "Tirana" },
    flag: "🇦🇱",
    region: "europe",
    center: { lat: 41.15, lng: 20.17 },
    intro: {
      zh: "亞得里亞海與愛奧尼亞海之濱的「山鷹之國」,曾是歐洲最封閉的國家,如今以未過度開發的里維耶拉海岸、鄂圖曼古城與親切好客的民風,成為歐洲最受矚目的新興旅遊地之一。",
      en: "The 'Land of the Eagles' on the Adriatic and Ionian coasts. Once Europe's most isolated country, it now draws travelers with an unspoiled Riviera, Ottoman-era towns, and famous hospitality — one of Europe's hottest emerging destinations.",
    },
    history: {
      zh: "阿爾巴尼亞人被視為古伊利里亞人的後裔。15 世紀民族英雄斯坎德培抵抗鄂圖曼帝國二十餘年,其後仍被統治四百多年,1912 年宣布獨立。二戰後霍查建立極端封閉的共產政權,與蘇聯、中國先後決裂,全國修築數十萬座碉堡。1991 年共產政權垮台,1997 年金字塔騙局引發動盪,此後逐步走向開放,2009 年加入北約,現為歐盟候選國。",
      en: "Albanians trace their roots to the ancient Illyrians. National hero Skanderbeg resisted the Ottomans for over two decades in the 15th century, but four more centuries of Ottoman rule followed until independence in 1912. After WWII, Enver Hoxha built an extreme isolationist communist state, breaking with both the USSR and China and studding the land with bunkers. Communism fell in 1991; after the 1997 pyramid-scheme crisis, Albania steadily opened up, joining NATO in 2009 as an EU candidate.",
    },
    cities: [
      {
        name: { zh: "地拉那", en: "Tirana" },
        blurb: {
          zh: "色彩繽紛的首都,斯坎德培廣場周邊咖啡館密度驚人,共產遺跡被改造成公共空間。",
          en: "A colorfully painted capital with a staggering café density around Skanderbeg Square, where communist relics have become public spaces.",
        },
        trivia: {
          question: {
            zh: "地拉那市中心的「金字塔」建築,最初的用途是什麼?",
            en: "The 'Pyramid' in central Tirana was originally built as what?",
          },
          options: [
            {
              zh: "獨裁者霍查的紀念博物館",
              en: "A memorial museum for dictator Enver Hoxha",
            },
            { zh: "天文台", en: "An astronomical observatory" },
            { zh: "國家歌劇院", en: "The national opera house" },
            { zh: "共產黨中央黨部", en: "The communist party headquarters" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "金字塔 1988 年落成,原是霍查紀念館,政權垮台後幾經荒廢,近年改建為青年科技教育中心。",
            en: "Completed in 1988 as Hoxha's memorial museum, it fell derelict after communism and has since been reborn as a youth tech-education center.",
          },
        },
      },
      {
        name: { zh: "培拉特", en: "Berat" },
        blurb: {
          zh: "「千窗之城」,白色鄂圖曼民居沿山坡層層堆疊,列入世界遺產。",
          en: "The 'City of a Thousand Windows' — tiers of white Ottoman houses stacked on a hillside, a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "培拉特的暱稱是什麼?",
            en: "What is Berat's famous nickname?",
          },
          options: [
            { zh: "千窗之城", en: "The City of a Thousand Windows" },
            { zh: "白色威尼斯", en: "The White Venice" },
            { zh: "石頭之城", en: "The City of Stone" },
            { zh: "鷹巢之城", en: "The City of Eagles' Nests" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "山坡上的鄂圖曼老屋窗戶層層相疊、面向河谷,遠望彷彿千扇窗子同時注視著你,因而得名。",
            en: "Rows of Ottoman houses climb the slope with windows stacked upon windows facing the valley — as if a thousand of them are watching you.",
          },
        },
      },
      {
        name: { zh: "吉羅卡斯特", en: "Gjirokastër" },
        blurb: {
          zh: "南部石城,石板屋頂的塔屋群與巨大城堡,是作家卡達萊與獨裁者霍查的故鄉。",
          en: "A southern stone town of slate-roofed tower houses beneath a huge castle — hometown of writer Ismail Kadare and dictator Enver Hoxha.",
        },
        trivia: {
          question: {
            zh: "吉羅卡斯特老城以什麼特色與培拉特一同列入世界遺產?",
            en: "For what feature was Gjirokastër inscribed as World Heritage alongside Berat?",
          },
          options: [
            {
              zh: "保存完好的鄂圖曼式石造塔屋",
              en: "Well-preserved Ottoman-era stone tower houses",
            },
            { zh: "古希臘劇場遺址", en: "Ancient Greek theater ruins" },
            { zh: "拜占庭馬賽克教堂", en: "Byzantine mosaic churches" },
            { zh: "威尼斯式運河街區", en: "A Venetian-style canal quarter" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "兩城以「培拉特與吉羅卡斯特歷史中心」之名入列,吉羅卡斯特的石板屋頂塔屋(kullë)是鄂圖曼巴爾幹民居的典範。",
            en: "Inscribed jointly as the historic centers of Berat and Gjirokastër; the slate-roofed kullë tower houses are exemplars of Ottoman Balkan architecture.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "霍查時代全國修建了超過 17 萬座混凝土碉堡,平均每十幾人一座,如今散落田野與海灘。",
        en: "The Hoxha regime built over 170,000 concrete bunkers — roughly one per dozen citizens — still dotting fields and beaches today.",
      },
      {
        zh: "阿爾巴尼亞人點頭表示「不」、搖頭表示「是」,與多數國家相反。",
        en: "In Albania a nod traditionally means 'no' and a head shake means 'yes' — the reverse of most countries.",
      },
    ],
    climate: {
      zh: "沿海屬地中海型氣候,夏季乾熱、冬季溫和多雨;內陸山區則冬季寒冷多雪,南部里維耶拉海岸日照時數居歐洲前列。",
      en: "Mediterranean on the coast — hot dry summers, mild rainy winters; the mountainous interior gets cold, snowy winters, while the southern Riviera enjoys some of Europe's most sunshine.",
    },
    travelTips: [
      {
        zh: "貨幣是列克(ALL),地拉那以外多數地方仍以現金為主。",
        en: "The currency is the lek (ALL); outside Tirana, cash still rules.",
      },
      {
        zh: "城際交通主要靠小巴(furgon),班表彈性大,建議早上出發並預留時間。",
        en: "Intercity travel relies on furgon minibuses with loose schedules — leave in the morning and build in buffer time.",
      },
      {
        zh: "七、八月里維耶拉海岸(薩蘭達、克薩米爾一帶)人潮擁擠,六月或九月造訪體驗更好。",
        en: "The Riviera around Saranda and Ksamil is packed in July–August; June or September is far more pleasant.",
      },
    ],
  },
  {
    id: "MNE",
    name: { zh: "蒙特內哥羅", en: "Montenegro" },
    capital: { zh: "波德里察", en: "Podgorica" },
    flag: "🇲🇪",
    region: "europe",
    center: { lat: 42.7, lng: 19.4 },
    intro: {
      zh: "「黑山之國」,面積僅約 1.4 萬平方公里,卻同時擁有亞得里亞海的中世紀港灣、歐洲最深的峽谷與高聳的杜米托爾群峰,是巴爾幹濃縮度最高的風景國度。",
      en: "The 'Black Mountain' country — barely 14,000 km², yet packing medieval Adriatic harbors, Europe's deepest canyon, and the high peaks of Durmitor into one hyper-condensed Balkan landscape.",
    },
    history: {
      zh: "中世紀的杜克利亞與澤塔公國之後,這片山地在主教親王(vladika)統治下長期抵抗鄂圖曼帝國,是巴爾幹少數未被完全征服的地區。1878 年柏林會議承認獨立,1910 年升格為王國,一戰後併入南斯拉夫。此後與塞爾維亞維持聯邦關係,2006 年公投以 55.5% 通過獨立,2017 年加入北約,現為歐盟候選國。",
      en: "After the medieval realms of Duklja and Zeta, this highland resisted the Ottomans for centuries under its prince-bishops (vladikas), never fully conquered. The 1878 Congress of Berlin recognized its independence; it became a kingdom in 1910, then joined Yugoslavia after WWI. Federated with Serbia until a 2006 referendum passed with 55.5%, it joined NATO in 2017 and is an EU candidate.",
    },
    cities: [
      {
        name: { zh: "波德里察", en: "Podgorica" },
        blurb: {
          zh: "現代化的首都與交通樞紐,社會主義時期曾更名「鐵托格勒」。",
          en: "The modern capital and transport hub — renamed 'Titograd' during the socialist era.",
        },
        trivia: {
          question: {
            zh: "波德里察在南斯拉夫時期(1946–1992)曾使用什麼名稱?",
            en: "What was Podgorica called during the Yugoslav era (1946–1992)?",
          },
          options: [
            { zh: "鐵托格勒", en: "Titograd" },
            { zh: "列寧格勒", en: "Leningrad" },
            { zh: "尼克希奇", en: "Nikšić" },
            { zh: "澤塔格勒", en: "Zetagrad" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "為紀念南斯拉夫領導人狄托,城市在 1946 年改名鐵托格勒,直到 1992 年才恢復舊名波德里察。",
            en: "The city was renamed Titograd in 1946 to honor Yugoslav leader Tito, reverting to Podgorica only in 1992.",
          },
        },
      },
      {
        name: { zh: "科托爾", en: "Kotor" },
        blurb: {
          zh: "峽灣般海灣深處的中世紀城牆之城,世界遺產,城牆沿峭壁直上山頂要塞。",
          en: "A walled medieval town at the head of a fjord-like bay — a World Heritage site whose ramparts climb the cliff to a hilltop fortress.",
        },
        trivia: {
          question: {
            zh: "科托爾灣常被稱為「南歐峽灣」,但它實際上是什麼地形?",
            en: "The Bay of Kotor is often called 'southern Europe's fjord' — but what is it really?",
          },
          options: [
            {
              zh: "河谷沉降形成的溺灣(ria)",
              en: "A submerged river valley (ria)",
            },
            { zh: "冰川侵蝕的峽灣", en: "A glacier-carved fjord" },
            { zh: "火山口塌陷的海灣", en: "A collapsed volcanic caldera" },
            { zh: "沙洲圍成的潟湖", en: "A lagoon enclosed by sandbars" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "科托爾灣是古河谷沒入海中形成的溺灣,並非冰川作用的峽灣,但兩側千米高山夾峙,景觀足以亂真。",
            en: "It's a drowned river canyon, not a glacial fjord — though the kilometer-high walls rising from the water make the resemblance uncanny.",
          },
        },
      },
      {
        name: { zh: "采蒂涅", en: "Cetinje" },
        blurb: {
          zh: "山中的舊王都,修道院與昔日各國公使館林立,保有濃厚的歷史氛圍。",
          en: "The old royal capital in the mountains, lined with a historic monastery and former foreign legations.",
        },
        trivia: {
          question: {
            zh: "采蒂涅在今日蒙特內哥羅的特殊地位是什麼?",
            en: "What special status does Cetinje hold in today's Montenegro?",
          },
          options: [
            {
              zh: "舊王都,憲法上的榮譽首都與總統駐地",
              en: "The old royal capital — honorary capital and seat of the presidency",
            },
            { zh: "最大的商業港口", en: "The largest commercial port" },
            { zh: "全國第一大城", en: "The country's biggest city" },
            { zh: "唯一的自治特區", en: "The only autonomous district" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "采蒂涅自 15 世紀起是蒙特內哥羅政教中心,今日雖非行政首都,仍是憲法明定的「舊王都」,總統官邸設於此。",
            en: "Montenegro's political and spiritual heart since the 15th century, Cetinje is the constitutionally designated Old Royal Capital and hosts the president's official residence.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "蒙特內哥羅並非歐盟成員,卻單方面採用歐元為法定貨幣。",
        en: "Montenegro is not an EU member, yet unilaterally uses the euro as its currency.",
      },
      {
        zh: "塔拉河峽谷深達約 1300 公尺,是歐洲最深的峽谷。",
        en: "The Tara River Canyon plunges about 1,300 meters — the deepest canyon in Europe.",
      },
    ],
    climate: {
      zh: "海岸屬地中海型氣候,夏季乾熱、冬季溫和;內陸山區冬季嚴寒多雪,北部山區與海岸氣候可在一小時車程內急遽轉換。",
      en: "Mediterranean on the coast with hot dry summers; the inland highlands get harsh snowy winters — the climate can flip completely within an hour's drive.",
    },
    travelTips: [
      {
        zh: "使用歐元,無需另外換匯。",
        en: "The euro is the currency — no exchange needed if you carry euros.",
      },
      {
        zh: "科托爾上午常有郵輪人潮,建議清晨或傍晚逛古城、爬城牆看日落。",
        en: "Cruise crowds fill Kotor by mid-morning; explore the old town at dawn or climb the walls at sunset instead.",
      },
      {
        zh: "科托爾灣沿岸道路狹窄多彎,自駕請預留時間並小心會車。",
        en: "Roads around the Bay of Kotor are narrow and winding — allow extra time and drive carefully.",
      },
      {
        zh: "北部杜米托爾山區即使夏天早晚也偏涼,健行要帶保暖衣物。",
        en: "In the Durmitor highlands, even summer mornings and evenings are chilly — pack warm layers for hikes.",
      },
    ],
  },
  {
    id: "KOS",
    name: { zh: "科索沃", en: "Kosovo" },
    capital: { zh: "普里斯提納", en: "Pristina" },
    flag: "🇽🇰",
    region: "europe",
    center: { lat: 42.56, lng: 20.9 },
    intro: {
      zh: "巴爾幹內陸的高原之地,2008 年宣布獨立,獲部分國家承認、其地位仍存爭議。人口是全歐最年輕之一,咖啡館文化興盛,鄂圖曼老城與塞爾維亞正教修道院同樣值得探訪。",
      en: "A highland territory in the inner Balkans that declared independence in 2008 — recognized by many states, though its status remains disputed. It has one of Europe's youngest populations, a thriving café culture, and both Ottoman old towns and Serbian Orthodox monasteries.",
    },
    history: {
      zh: "此地是中世紀塞爾維亞王國的核心地帶,留下多座重要修道院;1389 年科索沃戰役後逐步進入鄂圖曼時代,阿爾巴尼亞裔人口漸成多數。20 世紀屬南斯拉夫,曾是塞爾維亞轄下自治省。1998–99 年科索沃戰爭後由聯合國託管,2008 年宣布獨立,目前獲得約百餘國承認,但塞爾維亞等國不予承認,雙方持續在歐盟斡旋下對話。",
      en: "The heartland of the medieval Serbian kingdom, dotted with major monasteries, it passed into the Ottoman era after the 1389 Battle of Kosovo, with ethnic Albanians gradually becoming the majority. An autonomous province within Serbia under Yugoslavia, it came under UN administration after the 1998–99 Kosovo War and declared independence in 2008 — recognized by around a hundred states, though Serbia and others do not, with EU-mediated dialogue ongoing.",
    },
    cities: [
      {
        name: { zh: "普里斯提納", en: "Pristina" },
        blurb: {
          zh: "年輕而充滿活力的首都,前衛的國家圖書館建築與滿街咖啡館是招牌。",
          en: "A young, energetic capital known for its avant-garde National Library building and streets full of cafés.",
        },
        trivia: {
          question: {
            zh: "普里斯提納市中心的「NEWBORN」字母紀念碑,是為了慶祝什麼而揭幕?",
            en: "The 'NEWBORN' letter monument in central Pristina was unveiled to celebrate what?",
          },
          options: [
            {
              zh: "2008 年科索沃宣布獨立",
              en: "Kosovo's 2008 declaration of independence",
            },
            { zh: "1999 年戰爭結束", en: "The end of the war in 1999" },
            { zh: "加入聯合國", en: "Admission to the United Nations" },
            { zh: "首次舉辦國際博覽會", en: "Hosting its first international expo" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "紀念碑於 2008 年 2 月 17 日宣布獨立當天揭幕,此後每年獨立紀念日都會重新彩繪,成為城市地標。",
            en: "It was unveiled on 17 February 2008, the day independence was declared, and is repainted each anniversary — now a city landmark.",
          },
        },
      },
      {
        name: { zh: "普里茲倫", en: "Prizren" },
        blurb: {
          zh: "鄂圖曼風情最濃的古城,石橋、清真寺與山上要塞環抱,夏天舉辦紀錄片影展 Dokufest。",
          en: "The most Ottoman-flavored old town — stone bridge, mosques, and a hilltop fortress — home to the Dokufest documentary festival each summer.",
        },
        trivia: {
          question: {
            zh: "1878 年在普里茲倫成立、推動阿爾巴尼亞民族運動的組織是什麼?",
            en: "Which organization founded in Prizren in 1878 championed the Albanian national movement?",
          },
          options: [
            { zh: "普里茲倫同盟", en: "The League of Prizren" },
            { zh: "巴爾幹同盟", en: "The Balkan League" },
            { zh: "青年土耳其黨", en: "The Young Turks" },
            { zh: "內部馬其頓革命組織", en: "The Internal Macedonian Revolutionary Organization" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "普里茲倫同盟在柏林會議後成立,主張保衛阿爾巴尼亞人聚居地,被視為阿爾巴尼亞民族覺醒的里程碑,舊址現為博物館。",
            en: "Formed after the Congress of Berlin to defend Albanian-inhabited lands, the League is a milestone of the Albanian national awakening; its meeting house is now a museum.",
          },
        },
      },
      {
        name: { zh: "佩奇", en: "Peja / Peć" },
        blurb: {
          zh: "西部山城,鄰近魯戈瓦峽谷,城郊的佩奇牧首修道院是塞爾維亞正教會的歷史中樞、世界遺產。",
          en: "A western mountain town near the Rugova canyon; the Patriarchate of Peć monastery outside town is a historic seat of the Serbian Orthodox Church and a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "佩奇近郊的佩奇牧首修道院,在歷史上是哪個教會的牧首駐地?",
            en: "The Patriarchate of Peć monastery near the town historically served as the seat of which church's patriarchs?",
          },
          options: [
            { zh: "塞爾維亞正教會", en: "The Serbian Orthodox Church" },
            { zh: "希臘正教會", en: "The Greek Orthodox Church" },
            { zh: "保加利亞正教會", en: "The Bulgarian Orthodox Church" },
            { zh: "羅馬天主教會", en: "The Roman Catholic Church" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "13 世紀起這裡成為塞爾維亞大主教與牧首的駐地,與周邊中世紀修道院一同列入世界遺產。",
            en: "From the 13th century it housed Serbian archbishops and patriarchs; it is inscribed as World Heritage with other medieval monasteries of the region.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "科索沃人口年齡中位數約 30 歲上下,是全歐洲最年輕的社會之一。",
        en: "With a median age around 30, Kosovo has one of the youngest populations in Europe.",
      },
      {
        zh: "普里斯提納有一條柯林頓大道,還豎立著柯林頓的雕像,感謝其在 1999 年的角色。",
        en: "Pristina has a Bill Clinton Boulevard — complete with a Clinton statue — thanking him for his role in 1999.",
      },
    ],
    climate: {
      zh: "大陸性氣候為主,夏季溫暖乾燥、冬季寒冷降雪;西部山區雪季長,適合冬季活動,春秋短促。",
      en: "Mostly continental — warm dry summers and cold snowy winters; the western mountains keep snow for long stretches, with short springs and autumns.",
    },
    travelTips: [
      {
        zh: "科索沃使用歐元;物價是全歐洲最低之一,咖啡與餐飲非常便宜。",
        en: "Kosovo uses the euro, and prices are among Europe's lowest — coffee and meals are a bargain.",
      },
      {
        zh: "若行程同時包含塞爾維亞,建議先入境塞爾維亞再進科索沃:塞方可能不承認由科索沃入境的紀錄。",
        en: "If combining with Serbia, enter Serbia first, then Kosovo — Serbia may not recognize entry stamps issued at Kosovo's borders.",
      },
      {
        zh: "普里斯提納與各大城之間有頻繁的巴士,是主要的城際交通方式。",
        en: "Frequent buses link Pristina with the other main towns — the primary way to get around.",
      },
    ],
  },
  {
    id: "MDA",
    name: { zh: "摩爾多瓦", en: "Moldova" },
    capital: { zh: "奇西瑙", en: "Chișinău" },
    flag: "🇲🇩",
    region: "europe",
    center: { lat: 47.2, lng: 28.5 },
    intro: {
      zh: "夾在羅馬尼亞與烏克蘭之間的內陸小國,語言文化與羅馬尼亞同源。以綿延的葡萄園與深入地下的巨型酒窖聞名,是歐洲遊客最少、也最物超所值的葡萄酒之鄉。",
      en: "A small landlocked country between Romania and Ukraine, sharing language and culture with Romania. Famous for endless vineyards and colossal underground cellars, it is Europe's least-visited — and best-value — wine country.",
    },
    history: {
      zh: "中世紀屬摩爾達維亞公國,15 世紀斯特凡大公抵抗鄂圖曼帝國聲名遠播。1812 年比薩拉比亞地區被俄羅斯帝國兼併,兩次大戰之間短暫併入羅馬尼亞,二戰後成為蘇聯的摩爾達維亞共和國。1991 年獨立,隨即因德涅斯特河沿岸(聶斯特河左岸)問題爆發衝突,該地區至今實質自治、未獲國際承認。2022 年成為歐盟候選國。",
      en: "Part of the medieval Principality of Moldavia, famed for Stephen the Great's 15th-century resistance to the Ottomans. Bessarabia was annexed by the Russian Empire in 1812, joined Romania between the wars, then became a Soviet republic after WWII. Independence in 1991 was followed by conflict over Transnistria, which remains de facto self-governing and internationally unrecognized. Moldova became an EU candidate in 2022.",
    },
    cities: [
      {
        name: { zh: "奇西瑙", en: "Chișinău" },
        blurb: {
          zh: "綠意盎然的首都,蘇聯時期建築與公園交錯,是探索酒鄉的基地。",
          en: "A leafy capital where Soviet-era blocks alternate with parks — the base for exploring wine country.",
        },
        trivia: {
          question: {
            zh: "奇西瑙的主幹道以哪位中世紀摩爾達維亞大公命名?",
            en: "Chișinău's main boulevard is named after which medieval prince of Moldavia?",
          },
          options: [
            { zh: "斯特凡大公", en: "Stephen the Great (Ștefan cel Mare)" },
            { zh: "弗拉德三世(采佩什)", en: "Vlad III (the Impaler)" },
            { zh: "勇敢的米哈伊", en: "Michael the Brave" },
            { zh: "卡羅爾一世", en: "Carol I" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "斯特凡大公在位 47 年、屢敗鄂圖曼大軍,是摩爾多瓦的民族象徵,主幹道與中央公園都以他為名。",
            en: "Stephen the Great ruled for 47 years and repeatedly beat back Ottoman armies; Moldova's national icon lends his name to the main boulevard and central park.",
          },
        },
      },
      {
        name: { zh: "克里科瓦", en: "Cricova" },
        blurb: {
          zh: "奇西瑙近郊的酒鄉小鎮,以石灰岩開鑿的地下酒窖城市聞名。",
          en: "A wine town just outside Chișinău, famous for its underground cellar city carved from limestone.",
        },
        trivia: {
          question: {
            zh: "克里科瓦酒莊最著名的特色是什麼?",
            en: "What is the Cricova winery best known for?",
          },
          options: [
            {
              zh: "綿延上百公里、可開車進入的地下酒窖隧道",
              en: "Over a hundred kilometers of underground cellar tunnels you can drive through",
            },
            { zh: "歐洲最古老的橡木桶", en: "Europe's oldest oak barrels" },
            { zh: "全球最陡的梯田葡萄園", en: "The world's steepest terraced vineyards" },
            { zh: "香檳製法的發源地", en: "The birthplace of the champagne method" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "克里科瓦的酒窖由採石場改建,隧道以街道命名、車輛可直接駛入,存放大量氣泡酒與各國政要的珍藏。",
            en: "Converted from limestone quarries, Cricova's tunnels have street names and admit cars; they store vast stocks of sparkling wine and bottles owned by world leaders.",
          },
        },
      },
      {
        name: { zh: "索羅卡", en: "Soroca" },
        blurb: {
          zh: "北部邊城,德涅斯特河畔保存完好的中世紀圓形要塞是地標。",
          en: "A northern border town whose landmark is a well-preserved round medieval fortress on the Dniester.",
        },
        trivia: {
          question: {
            zh: "索羅卡要塞扼守的是哪一條河的渡口?",
            en: "Soroca Fortress guards a crossing of which river?",
          },
          options: [
            { zh: "德涅斯特河", en: "The Dniester" },
            { zh: "普魯特河", en: "The Prut" },
            { zh: "多瑙河", en: "The Danube" },
            { zh: "錫雷特河", en: "The Siret" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座圓形石要塞由斯特凡大公下令興建於德涅斯特河渡口,是摩爾達維亞防線的重要一環,保存至今幾乎完整。",
            en: "Commissioned under Stephen the Great at a Dniester ford, the circular stone fort anchored Moldavia's defensive line and survives nearly intact.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "米列什蒂米奇酒窖藏酒近兩百萬瓶,獲金氏世界紀錄認證為全球最大葡萄酒收藏。",
        en: "The Mileștii Mici cellars hold nearly two million bottles — a Guinness World Record for the largest wine collection.",
      },
      {
        zh: "摩爾多瓦的人均葡萄酒消費與葡萄園密度長年位居世界前列。",
        en: "Moldova consistently ranks near the top worldwide for per-capita wine consumption and vineyard density.",
      },
    ],
    climate: {
      zh: "溫和的大陸性氣候,夏季溫暖漫長、日照充足,冬季寒冷但少極端低溫,正是適合葡萄生長的風土。",
      en: "Moderate continental — long warm sunny summers and cold but rarely extreme winters, terroir well suited to grape-growing.",
    },
    travelTips: [
      {
        zh: "貨幣是摩爾多瓦列伊(MDL);奇西瑙以外提款機較少,備些現金。",
        en: "The currency is the Moldovan leu (MDL); ATMs thin out beyond Chișinău, so carry some cash.",
      },
      {
        zh: "克里科瓦、米列什蒂米奇等酒窖參觀採預約制,務必提前線上或電話預訂。",
        en: "Cellar tours at Cricova and Mileștii Mici are by reservation — book ahead online or by phone.",
      },
      {
        zh: "城際交通以小巴(marshrutka)為主,從奇西瑙中央巴士站發車。",
        en: "Marshrutka minibuses from Chișinău's central station are the main intercity transport.",
      },
      {
        zh: "若想前往德涅斯特河沿岸地區,先確認當下的通行規定與登記要求。",
        en: "If visiting the Transnistria region, check current crossing rules and registration requirements first.",
      },
    ],
  },
  {
    id: "MLT",
    name: { zh: "馬爾他", en: "Malta" },
    capital: { zh: "瓦萊塔", en: "Valletta" },
    flag: "🇲🇹",
    region: "europe",
    center: { lat: 35.94, lng: 14.38 },
    intro: {
      zh: "地中海中央的島國,面積僅 316 平方公里,卻濃縮了七千年歷史:比金字塔更古老的巨石神廟、騎士團的黃金石城與湛藍海灣,也是熱門的英語遊學地。",
      en: "An island nation in the central Mediterranean — just 316 km², yet packing 7,000 years of history: megalithic temples older than the pyramids, the Knights' golden-stone capital, azure coves, and a booming English-language study scene.",
    },
    history: {
      zh: "史前居民留下世界最古老的巨石神廟群,其後腓尼基、羅馬、阿拉伯與諾曼人相繼統治。1530 年聖約翰騎士團進駐,1565 年擊退鄂圖曼大軍的「馬爾他大圍攻」名震歐洲。1800 年起成為英國殖民地,二戰中全島因堅忍抗轟炸獲頒喬治十字勳章(如今繡在國旗上)。1964 年獨立,1974 年成為共和國,2004 年加入歐盟。",
      en: "Prehistoric islanders built the world's oldest megalithic temples, followed by Phoenician, Roman, Arab, and Norman rule. The Knights of St John arrived in 1530 and repelled the Ottomans in the famous Great Siege of 1565. British from 1800, the islands earned the George Cross — now on the flag — for enduring WWII bombardment. Independence came in 1964, a republic in 1974, and EU membership in 2004.",
    },
    cities: [
      {
        name: { zh: "瓦萊塔", en: "Valletta" },
        blurb: {
          zh: "騎士團建造的棋盤式石城首都,整座城市列入世界遺產。",
          en: "The Knights' grid-planned fortress capital in golden limestone — the entire city is a World Heritage site.",
        },
        trivia: {
          question: {
            zh: "首都瓦萊塔是以哪位人物命名的?",
            en: "Valletta, the capital of Malta, is named after whom?",
          },
          options: [
            {
              zh: "聖約翰騎士團大團長瓦萊特",
              en: "Jean de Valette, Grand Master of the Knights of St John",
            },
            { zh: "神聖羅馬皇帝查理五世", en: "Holy Roman Emperor Charles V" },
            { zh: "教宗庇護五世", en: "Pope Pius V" },
            { zh: "西班牙國王腓力二世", en: "King Philip II of Spain" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "瓦萊特率騎士團打贏 1565 年大圍攻後,隨即在半島上興建這座新城,城市便以他為名。",
            en: "After leading the Knights to victory in the 1565 Great Siege, Grand Master de Valette founded the new fortified city that bears his name.",
          },
        },
      },
      {
        name: { zh: "姆迪納", en: "Mdina" },
        blurb: {
          zh: "山丘上的古都,巷弄靜謐、車輛稀少,中世紀與巴洛克建築交織。",
          en: "The old hilltop capital — hushed lanes, few cars, and a weave of medieval and baroque architecture.",
        },
        trivia: {
          question: {
            zh: "馬爾他古都姆迪納有一個著名的暱稱,是什麼?",
            en: "Mdina, Malta's old capital, is known by which famous nickname?",
          },
          options: [
            { zh: "寂靜之城", en: "The Silent City" },
            { zh: "黃金之城", en: "The Golden City" },
            { zh: "風之城", en: "The City of Winds" },
            { zh: "白色之城", en: "The White City" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "騎士團把政治中心移往海邊後,姆迪納人口稀少、限制車輛進入,夜裡巷弄悄然無聲,「寂靜之城」由此得名。",
            en: "After the Knights moved power to the coast, Mdina's near-empty, largely car-free lanes fell quiet — hence 'the Silent City'.",
          },
        },
      },
      {
        name: { zh: "維多利亞(戈佐島)", en: "Victoria (Gozo)" },
        blurb: {
          zh: "戈佐島的中心城鎮,城塞(Cittadella)俯瞰全島,是離島慢活的據點。",
          en: "Gozo's central town, crowned by the Cittadella with island-wide views — the hub of slow island life.",
        },
        trivia: {
          question: {
            zh: "戈佐島上的吉甘提亞(Ġgantija)神廟,年代與埃及金字塔相比如何?",
            en: "How do Gozo's Ġgantija temples compare in age with Egypt's pyramids?",
          },
          options: [
            {
              zh: "比金字塔與巨石陣都更古老",
              en: "Older than both the pyramids and Stonehenge",
            },
            { zh: "與金字塔大致同期", en: "Roughly contemporary with the pyramids" },
            { zh: "比金字塔晚約一千年", en: "About a thousand years younger than the pyramids" },
            { zh: "屬於羅馬時期建築", en: "They date from the Roman era" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "吉甘提亞建於約公元前 3600 年,是世界最古老的獨立石造建築之一,早於吉薩金字塔近千年。",
            en: "Built around 3600 BC, Ġgantija is among the world's oldest free-standing stone structures — predating the Giza pyramids by nearly a millennium.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "馬爾他語是歐盟唯一的閃語族官方語言,源自阿拉伯語並混入大量義大利語詞彙。",
        en: "Maltese is the EU's only official Semitic language — Arabic-rooted with heavy Italian borrowings.",
      },
      {
        zh: "馬爾他沒有常年河流與湖泊,淡水高度依賴海水淡化。",
        en: "Malta has no permanent rivers or lakes; it relies heavily on desalination for fresh water.",
      },
    ],
    climate: {
      zh: "典型地中海氣候,夏季乾熱少雨、常有北非吹來的熱風,冬季溫和濕潤,全年日照超過三千小時,幾乎不見霜雪。",
      en: "Classic Mediterranean: hot dry summers with occasional North African winds, mild wet winters, 3,000+ hours of sunshine a year, and virtually no frost or snow.",
    },
    travelTips: [
      {
        zh: "島上大眾運輸只有公車,靠左行駛;自駕請先適應英式方向。",
        en: "Buses are the only public transport, and traffic drives on the left — adjust before renting a car.",
      },
      {
        zh: "往戈佐島的渡輪從北端的其爾克瓦(Ċirkewwa)出發,班次頻繁、回程才收費。",
        en: "Ferries to Gozo run frequently from Ċirkewwa in the north — you pay only on the return leg.",
      },
      {
        zh: "七、八月酷熱且人潮最多,春秋兩季氣候舒適,更適合步行遊覽石城。",
        en: "July–August is hot and crowded; spring and autumn are far more comfortable for exploring the stone cities on foot.",
      },
    ],
  },
  {
    id: "AND",
    name: { zh: "安道爾", en: "Andorra" },
    capital: { zh: "安道爾城", en: "Andorra la Vella" },
    flag: "🇦🇩",
    region: "europe",
    center: { lat: 42.506, lng: 1.522 },
    intro: {
      zh: "庇里牛斯山中的迷你公國,夾在法國與西班牙之間,以滑雪場、免稅購物與羅馬式小教堂聞名。加泰隆尼亞語是唯一官方語言,國家元首由兩位「共同親王」擔任。",
      en: "A tiny principality in the Pyrenees between France and Spain, known for ski slopes, duty-free shopping, and Romanesque chapels. Catalan is the sole official language, and two 'co-princes' share the role of head of state.",
    },
    history: {
      zh: "傳說查理曼賜予安道爾人特許狀;1278 年的「共主協定」確立由西班牙烏赫爾主教與法國富瓦伯爵共治,後者的權利輾轉傳給法國元首,形成延續七百多年的雙親王體制。安道爾長期以農牧與走私貿易維生,20 世紀因滑雪與免稅購物興起而致富,1993 年頒布首部憲法、加入聯合國,成為現代議會民主國家。",
      en: "Legend credits Charlemagne with chartering Andorra; the 1278 paréage settled joint rule between the Bishop of Urgell in Spain and the Count of Foix in France — the latter's rights eventually passing to the French head of state, a co-princedom lasting 700+ years. Long a land of herding and smuggling trade, it grew rich on skiing and duty-free retail in the 20th century, adopting its first constitution and joining the UN in 1993.",
    },
    cities: [
      {
        name: { zh: "安道爾城", en: "Andorra la Vella" },
        blurb: {
          zh: "山谷中的首都,購物大街與石砌老城區(Barri Antic)比鄰。",
          en: "The valley capital, where the shopping avenue meets the stone-built old quarter (Barri Antic).",
        },
        trivia: {
          question: {
            zh: "安道爾城保有一項歐洲首都之最,是什麼?",
            en: "Andorra la Vella holds which record among European capitals?",
          },
          options: [
            {
              zh: "海拔最高的首都(約 1000 公尺)",
              en: "The highest capital, at about 1,000 meters",
            },
            { zh: "人口最少的首都", en: "The least populous capital" },
            { zh: "最北端的首都", en: "The northernmost capital" },
            { zh: "唯一沒有機場的首都", en: "The only capital without an airport" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "安道爾城海拔約 1023 公尺,是全歐洲位置最高的首都,四周雪峰環繞。",
            en: "At roughly 1,023 meters above sea level, ringed by snowy peaks, it is Europe's highest capital city.",
          },
        },
      },
      {
        name: { zh: "萊塞斯卡爾德-恩戈爾達", en: "Escaldes-Engordany" },
        blurb: {
          zh: "與首都相連的溫泉城鎮,大型溫泉水療中心 Caldea 的玻璃尖塔是地標。",
          en: "A spa town fused with the capital, landmarked by the glass spire of the Caldea thermal complex.",
        },
        trivia: {
          question: {
            zh: "Escaldes(萊塞斯卡爾德)這個地名源自什麼?",
            en: "The name 'Escaldes' derives from what?",
          },
          options: [
            { zh: "當地湧出的天然溫泉", en: "The natural hot springs that rise there" },
            { zh: "山坡上的梯田", en: "The terraced hillsides" },
            { zh: "一座古羅馬石橋", en: "An ancient Roman stone bridge" },
            { zh: "牧羊人的高山牧場", en: "The shepherds' alpine pastures" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "地名意指「滾燙的水」,當地溫泉水溫可達約 70 度,如今供應 Caldea 水療中心,是南歐最大溫泉設施之一。",
            en: "The name refers to 'scalding water' — springs here emerge at around 70°C and now feed Caldea, one of southern Europe's largest spa complexes.",
          },
        },
      },
      {
        name: { zh: "奧爾迪諾", en: "Ordino" },
        blurb: {
          zh: "北部山谷的石造小鎮,保存傳統民居,是探索高山步道的門戶。",
          en: "A stone-built village in the northern valleys, rich in traditional houses and a gateway to high-mountain trails.",
        },
        trivia: {
          question: {
            zh: "奧爾迪諾山谷在 2020 年獲聯合國教科文組織列為什麼?",
            en: "In 2020, the Ordino valley was designated by UNESCO as what?",
          },
          options: [
            { zh: "生物圈保護區", en: "A Biosphere Reserve" },
            { zh: "世界文化遺產", en: "A World Heritage cultural site" },
            { zh: "世界記憶名錄", en: "A Memory of the World inscription" },
            { zh: "創意城市網絡成員", en: "A Creative Cities Network member" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "奧爾迪諾以人與高山環境和諧共存獲選為生物圈保護區,是安道爾首個獲此認證的地區。",
            en: "Ordino earned Biosphere Reserve status for the balance between its communities and the high-mountain environment — Andorra's first such designation.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "安道爾沒有機場也沒有鐵路,進出全靠公路連接法國與西班牙。",
        en: "Andorra has no airport and no railway — every arrival comes by road from France or Spain.",
      },
      {
        zh: "安道爾居民的平均壽命長年名列世界前茅。",
        en: "Andorrans consistently rank among the longest-lived people in the world.",
      },
    ],
    climate: {
      zh: "高山氣候,冬季寒冷多雪、滑雪季長達數月,夏季白天溫暖、早晚涼爽,天氣隨海拔變化劇烈。",
      en: "Alpine climate: cold snowy winters with a months-long ski season, warm summer days with cool mornings and evenings, and conditions that shift sharply with altitude.",
    },
    travelTips: [
      {
        zh: "沒有機場,一般從巴塞隆納或土魯斯搭直達巴士前往,車程約三小時。",
        en: "With no airport, most visitors take a direct bus from Barcelona or Toulouse — about three hours.",
      },
      {
        zh: "使用歐元;購物免稅便宜,但離境時法、西海關對菸酒等有攜帶上限,別超量。",
        en: "The euro is used; duty-free shopping is cheap, but French and Spanish customs enforce limits on tobacco and alcohol when you leave.",
      },
      {
        zh: "冬季上山滑雪、夏季健行皆宜,山區天氣多變,隨時備妥保暖防雨衣物。",
        en: "Ski in winter, hike in summer — but mountain weather turns fast, so pack warm and waterproof layers year-round.",
      },
    ],
  },
  {
    id: "MCO",
    name: { zh: "摩納哥", en: "Monaco" },
    capital: { zh: "摩納哥", en: "Monaco" },
    flag: "🇲🇨",
    region: "europe",
    center: { lat: 43.738, lng: 7.424 },
    intro: {
      zh: "地中海畔的城邦公國,面積僅約 2 平方公里,是世界第二小的國家,卻擁有蒙地卡羅賭場、F1 街道賽與雲集的富豪遊艇,由格里馬爾迪家族統治超過七百年。",
      en: "A city-state principality on the Mediterranean — about 2 km², the world's second-smallest country — yet home to the Monte-Carlo casino, a Formula 1 street race, and fleets of superyachts, ruled by the Grimaldi family for over 700 years.",
    },
    history: {
      zh: "1297 年格里馬爾迪家族奪取摩納哥岩上的要塞,此後在法、西等強權間周旋維持自治。1861 年將門通與羅克布倫割讓給法國、換取獨立獲承認,失去大半領土後靠新開設的賭場重振財政。1911 年立憲,1956 年蘭尼埃三世親王與好萊塢影星葛莉絲.凱莉的婚姻使小國聲名大噪,現任元首為亞伯特二世親王。",
      en: "In 1297 the Grimaldi family seized the fortress on the Rock of Monaco, then preserved autonomy by maneuvering between France and Spain. In 1861 Monaco ceded Menton and Roquebrune to France in exchange for recognized independence, and its new casino rescued the shrunken state's finances. A constitution followed in 1911; Prince Rainier III's 1956 marriage to Hollywood star Grace Kelly made the principality world-famous. Prince Albert II reigns today.",
    },
    cities: [
      {
        name: { zh: "摩納哥城(舊城區)", en: "Monaco-Ville (the Rock)" },
        blurb: {
          zh: "岩岬上的老城,親王宮、主教座堂與海洋博物館所在,葛莉絲王妃長眠於此。",
          en: "The old town on the rocky headland — home to the Prince's Palace, the cathedral where Princess Grace rests, and the Oceanographic Museum.",
        },
        trivia: {
          question: {
            zh: "傳說 1297 年格里馬爾迪家族的法蘭索瓦是如何奪下摩納哥的要塞?",
            en: "According to the famous account, how did Francesco Grimaldi seize Monaco's fortress in 1297?",
          },
          options: [
            {
              zh: "喬裝成修士騙開城門",
              en: "He disguised himself as a monk to get the gates opened",
            },
            { zh: "從海上炮轟守軍", en: "He bombarded the garrison from the sea" },
            { zh: "透過聯姻繼承取得", en: "He acquired it through marriage" },
            { zh: "以重金向熱那亞購買", en: "He bought it from Genoa for a fortune" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "法蘭索瓦人稱「狡猾者」,扮作方濟會修士夜叩城門後突襲奪城;摩納哥國徽上持劍的修士正是此典故。",
            en: "Francesco 'the Cunning' knocked at the gate dressed as a Franciscan friar, then stormed the fortress — the sword-wielding monks on Monaco's coat of arms recall the feat.",
          },
        },
      },
      {
        name: { zh: "蒙地卡羅", en: "Monte-Carlo" },
        blurb: {
          zh: "以賭場、歌劇院與奢華飯店聞名的區域,是摩納哥富麗形象的代名詞。",
          en: "The district of the casino, opera house, and grand hotels — shorthand for Monaco's glamour.",
        },
        trivia: {
          question: {
            zh: "蒙地卡羅賭場有一條著名規定,禁止哪類人進場賭博?",
            en: "The Monte-Carlo casino famously bars which group from gambling?",
          },
          options: [
            { zh: "摩納哥本國公民", en: "Citizens of Monaco" },
            { zh: "法國公民", en: "French citizens" },
            { zh: "神職人員", en: "Members of the clergy" },
            { zh: "未滿三十歲者", en: "Anyone under thirty" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "自 19 世紀起摩納哥公民便被禁止在賭場下注,賭場收益取之於外國訪客;本國人反而享有免繳所得稅等待遇。",
            en: "Since the 19th century Monegasques have been barred from the gaming tables — the casino profits from foreign visitors, while citizens enjoy perks like no income tax.",
          },
        },
      },
      {
        name: { zh: "拉孔達米訥(港區)", en: "La Condamine (Port Hercule)" },
        blurb: {
          zh: "環繞赫丘力港的市集與商業區,F1 大獎賽賽道貫穿其街道與海濱。",
          en: "The market and business quarter around Port Hercule, threaded by the streets of the F1 Grand Prix circuit.",
        },
        trivia: {
          question: {
            zh: "摩納哥 F1 大獎賽最大的特色是什麼?",
            en: "What makes the Monaco Formula 1 Grand Prix distinctive?",
          },
          options: [
            {
              zh: "在封閉的市區街道上比賽,自 1929 年延續至今",
              en: "It runs on closed city streets, a tradition since 1929",
            },
            { zh: "它是唯一的夜間賽事", en: "It is the only night race" },
            { zh: "它使用最長的賽道", en: "It uses the longest circuit" },
            { zh: "賽道建在海上浮橋", en: "The track floats on pontoons at sea" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "賽車沿港口、隧道與髮夾彎在市街競速,賽道狹窄且幾乎無超車空間,是 F1 最經典也最考驗技術的一站。",
            en: "Cars race past the harbor, through a tunnel and hairpins on narrow streets with almost no overtaking room — F1's most iconic and technical stop.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "摩納哥自 1869 年起不對居民課徵個人所得稅,百萬富翁密度居世界之冠。",
        en: "Monaco has levied no personal income tax on residents since 1869 and has the world's highest density of millionaires.",
      },
      {
        zh: "摩納哥的常備武力編制比其愛樂樂團還小,國防由法國負責。",
        en: "Monaco's standing forces number fewer than its philharmonic orchestra — France guarantees its defense.",
      },
    ],
    climate: {
      zh: "溫和的地中海氣候,夏季暖熱少雨、冬季溫和,一年日照約三百天,幾乎不降雪,四季皆宜人。",
      en: "Mild Mediterranean: warm dry summers, gentle winters, around 300 sunny days a year, and almost never snow — pleasant in every season.",
    },
    travelTips: [
      {
        zh: "從法國尼斯搭火車約 20 多分鐘即達,住宿選在尼斯、白天往返可省下大筆費用。",
        en: "The train from Nice takes just over 20 minutes — staying in Nice and day-tripping saves a fortune on lodging.",
      },
      {
        zh: "地勢高低落差大,善用市內免費的公共電梯與手扶梯移動。",
        en: "The terrain is steep — use the free public lifts and escalators that connect the levels of the city.",
      },
      {
        zh: "賭場主廳有服裝要求,傍晚後入場建議正式穿著並攜帶護照。",
        en: "The casino's main rooms enforce a dress code — dress smartly for evening entry and bring your passport.",
      },
      {
        zh: "F1 大獎賽(五月下旬)期間房價暴漲、街道封閉,非賽迷宜避開。",
        en: "During the late-May Grand Prix, prices soar and streets close — avoid those dates unless you're there to watch.",
      },
    ],
  },
  {
    id: "SMR",
    name: { zh: "聖馬利諾", en: "San Marino" },
    capital: { zh: "聖馬利諾市", en: "City of San Marino" },
    flag: "🇸🇲",
    region: "europe",
    center: { lat: 43.936, lng: 12.446 },
    intro: {
      zh: "被義大利完全包圍的山頂小國,自稱世界最古老的共和國,蒂塔諾山上的三座石塔俯瞰亞得里亞海平原。至今仍由每半年改選一次的兩位執政官共同領導。",
      en: "A hilltop microstate entirely surrounded by Italy, claiming to be the world's oldest republic. Three stone towers on Mount Titano overlook the Adriatic plain, and two Captains Regent — elected every six months — still jointly lead the state.",
    },
    history: {
      zh: "相傳西元 301 年,來自拉布島的基督徒石匠馬利努斯為躲避迫害,在蒂塔諾山上建立修道社群,共和國由此而生。憑藉山勢與靈活外交,聖馬利諾躲過中世紀諸侯兼併,拿破崙與義大利統一運動也都尊重其獨立;19 世紀曾庇護革命家加里波底。它沿用 1600 年的成文法規,兩位執政官每六個月改選的制度已延續數百年。",
      en: "Tradition holds that in 301 AD Marinus, a Christian stonemason from the island of Rab fleeing persecution, founded a community on Mount Titano — the republic's origin. Mountain terrain and deft diplomacy carried it past medieval conquerors; Napoleon and Italy's unifiers both respected its independence, and it sheltered Garibaldi in the 19th century. Its statutes of 1600 still apply, and the twin Captains Regent have been re-elected every six months for centuries.",
    },
    cities: [
      {
        name: { zh: "聖馬利諾市", en: "City of San Marino" },
        blurb: {
          zh: "蒂塔諾山巔的首都,石板街道蜿蜒串起三座古塔與政府宮。",
          en: "The capital on Mount Titano's crest, where cobbled lanes wind between the three towers and the Public Palace.",
        },
        trivia: {
          question: {
            zh: "相傳聖馬利諾共和國是由什麼身分的人建立的?",
            en: "According to tradition, what was the founder of San Marino by trade?",
          },
          options: [
            { zh: "逃避迫害的基督徒石匠", en: "A Christian stonemason fleeing persecution" },
            { zh: "退役的羅馬將軍", en: "A retired Roman general" },
            { zh: "拜占庭派駐的主教", en: "A bishop sent from Byzantium" },
            { zh: "倫巴底王國的貴族", en: "A noble of the Lombard kingdom" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "石匠馬利努斯約於西元 301 年避居蒂塔諾山,建立起自治的信仰社群,聖馬利諾因此自豪地以「最古老的共和國」自居。",
            en: "The stonemason Marinus took refuge on Mount Titano around 301 AD and founded a self-governing community — the basis of San Marino's claim as the oldest republic.",
          },
        },
      },
      {
        name: { zh: "博爾戈馬焦雷", en: "Borgo Maggiore" },
        blurb: {
          zh: "山腰的市集城鎮,自中世紀起便是全國的商業集散地。",
          en: "The market town on the mountainside, the republic's trading hub since the Middle Ages.",
        },
        trivia: {
          question: {
            zh: "從博爾戈馬焦雷前往山頂的聖馬利諾市,最著名的交通方式是什麼?",
            en: "What is the best-known way to travel from Borgo Maggiore up to the City of San Marino?",
          },
          options: [
            { zh: "空中纜車", en: "An aerial cable car" },
            { zh: "齒軌登山鐵路", en: "A rack railway" },
            { zh: "地下電扶梯隧道", en: "An underground escalator tunnel" },
            { zh: "觀光馬車道", en: "A tourist carriage road" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "纜車只需約兩分鐘就能把乘客從山腰市鎮送上首都,沿途可眺望亞得里亞海岸平原。",
            en: "The cable car whisks passengers from the market town to the capital in about two minutes, with views across the plain to the Adriatic coast.",
          },
        },
      },
      {
        name: { zh: "塞拉瓦萊", en: "Serravalle" },
        blurb: {
          zh: "地勢最低、人口最多的城鎮,國家體育場所在地,是共和國的現代生活區。",
          en: "The lowest-lying and most populous town, home to the national stadium — the republic's modern quarter.",
        },
        trivia: {
          question: {
            zh: "主場設於塞拉瓦萊的聖馬利諾國家足球隊,以什麼「紀錄」聞名於世?",
            en: "San Marino's national football team, based in Serravalle, is famous for what kind of record?",
          },
          options: [
            {
              zh: "長期在國際足總排名墊底,勝場屈指可數",
              en: "Sitting at the bottom of the FIFA rankings, with only a handful of wins",
            },
            { zh: "從未在正式比賽失球", en: "Never conceding in competitive matches" },
            { zh: "連續晉級世界盃會內賽", en: "Qualifying for consecutive World Cups" },
            { zh: "擁有最年長的現役球員", en: "Fielding the oldest active player" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "人口僅三萬多的聖馬利諾長年是世界排名最末的球隊之一,罕見的勝利與進球反而讓球迷舉國歡騰。",
            en: "With barely 30,000 citizens, San Marino has long propped up the world rankings — which makes its rare goals and wins occasions for national celebration.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "美國總統林肯曾接受聖馬利諾授予的榮譽公民,並回信盛讚這個小共和國。",
        en: "Abraham Lincoln accepted honorary citizenship of San Marino and wrote back praising the little republic.",
      },
      {
        zh: "國徽上的三座塔——瓜伊塔、切斯塔與蒙塔萊——至今仍矗立在蒂塔諾山稜線上。",
        en: "The three towers on the coat of arms — Guaita, Cesta, and Montale — still crown the ridge of Mount Titano.",
      },
    ],
    climate: {
      zh: "溫和的亞平寧丘陵氣候,夏季溫暖、冬季涼冷偶有降雪;山頂視野開闊但風大,早晚溫差明顯。",
      en: "Mild Apennine hill climate — warm summers and cool winters with occasional snow; the summit is breezy with wide views and marked day-night temperature swings.",
    },
    travelTips: [
      {
        zh: "沒有機場與火車站,一般從義大利里米尼搭巴士上山,車程約 50 分鐘。",
        en: "There is no airport or train station — take the bus from Rimini in Italy, about 50 minutes uphill.",
      },
      {
        zh: "遊客中心可付費在護照蓋上聖馬利諾紀念章,是人氣紀念品。",
        en: "The tourist office will stamp your passport with a souvenir San Marino visa for a small fee — a favorite keepsake.",
      },
      {
        zh: "老城石板路陡峭,建議穿好走的鞋,並沿城牆步道串遊三塔。",
        en: "The old town's cobbles are steep — wear sturdy shoes and follow the ridge path linking the three towers.",
      },
    ],
  },
  {
    id: "LIE",
    name: { zh: "列支敦斯登", en: "Liechtenstein" },
    capital: { zh: "瓦都茲", en: "Vaduz" },
    flag: "🇱🇮",
    region: "europe",
    center: { lat: 47.14, lng: 9.52 },
    intro: {
      zh: "夾在瑞士與奧地利之間的阿爾卑斯小公國,面積僅 160 平方公里。金融業與精密工業使它成為全球最富裕的國家之一,親王家族至今仍住在俯瞰首都的城堡裡。",
      en: "An Alpine principality wedged between Switzerland and Austria, just 160 km². Banking and precision industry make it one of the world's wealthiest countries, and the princely family still lives in the castle above the capital.",
    },
    history: {
      zh: "1719 年,神聖羅馬帝國將許內勒貝格與瓦都茲兩塊領地合併,升格為以列支敦斯登家族為名的公國。1806 年隨萊茵邦聯獲得主權,1866 年德意志邦聯解散後完全獨立,1868 年裁撤軍隊、宣布永久中立。原依附奧匈經濟,一戰後轉向瑞士,1923 年締結關稅同盟並使用瑞士法郎,二戰後從農業窮國蛻變為金融與工業強國。",
      en: "In 1719 the Holy Roman Empire merged the lordships of Schellenberg and Vaduz into a principality named for the Liechtenstein family. Sovereignty came via the Confederation of the Rhine in 1806 and full independence with the German Confederation's dissolution in 1866; the army was disbanded in 1868. Economically tied to Austria-Hungary until WWI, it pivoted to Switzerland — customs union in 1923, Swiss franc as currency — and after WWII grew from a poor farming land into a financial and industrial powerhouse.",
    },
    cities: [
      {
        name: { zh: "瓦都茲", en: "Vaduz" },
        blurb: {
          zh: "萊茵河谷中的迷你首都,美術館、郵票博物館與山坡上的親王城堡是亮點。",
          en: "A miniature capital in the Rhine valley, highlighted by its art museum, stamp museum, and the prince's castle on the hillside.",
        },
        trivia: {
          question: {
            zh: "俯瞰首都的瓦都茲城堡,目前的用途是什麼?",
            en: "What is Vaduz Castle, overlooking the capital, used for today?",
          },
          options: [
            {
              zh: "親王家族的居所,不對外開放",
              en: "The residence of the princely family, closed to the public",
            },
            { zh: "國會議事堂", en: "The parliament building" },
            { zh: "國立美術館", en: "The national art museum" },
            { zh: "五星級城堡飯店", en: "A five-star castle hotel" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "列支敦斯登親王一家自 1938 年起定居瓦都茲城堡,城堡不開放參觀,但每年國慶日(8 月 15 日)親王會在城堡草坪宴請國民。",
            en: "The princely family has lived in the castle since 1938; it isn't open for tours, but each National Day (15 August) the prince hosts the public on its grounds.",
          },
        },
      },
      {
        name: { zh: "尚恩", en: "Schaan" },
        blurb: {
          zh: "全國人口最多的城鎮與工業重鎮,緊鄰首都瓦都茲。",
          en: "The most populous town and the industrial heart of the country, right next to Vaduz.",
        },
        trivia: {
          question: {
            zh: "總部位於尚恩的 Ivoclar 公司,使列支敦斯登成為全球哪項產品的重要生產國?",
            en: "Thanks to Schaan-based Ivoclar, Liechtenstein is a world-leading maker of which product?",
          },
          options: [
            { zh: "假牙(義齒)", en: "False teeth (dentures)" },
            { zh: "精密手錶", en: "Precision watches" },
            { zh: "巧克力", en: "Chocolate" },
            { zh: "光學鏡片", en: "Optical lenses" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "Ivoclar 是全球最大的假牙與牙科材料製造商之一,小小的列支敦斯登因此被稱為「假牙王國」。",
            en: "Ivoclar is among the world's largest makers of dentures and dental materials — earning tiny Liechtenstein the nickname of the world's false-teeth capital.",
          },
        },
      },
      {
        name: { zh: "巴爾采斯", en: "Balzers" },
        blurb: {
          zh: "最南端的村鎮,岩丘上的古騰堡城堡是全國最上鏡的地標之一。",
          en: "The southernmost village, whose rocky-hilltop Gutenberg Castle is one of the country's most photogenic landmarks.",
        },
        trivia: {
          question: {
            zh: "巴爾采斯的古騰堡城堡,與活字印刷術先驅古騰堡是什麼關係?",
            en: "What is the connection between Gutenberg Castle in Balzers and Johannes Gutenberg, the printing pioneer?",
          },
          options: [
            {
              zh: "毫無關係,只是名稱相同",
              en: "None at all — they merely share the name",
            },
            { zh: "古騰堡出生於此", en: "Gutenberg was born there" },
            { zh: "他在城堡裡印出第一本書", en: "He printed his first book in the castle" },
            { zh: "城堡由古騰堡家族出資興建", en: "His family financed its construction" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "這座中世紀城堡的名稱源自當地地名,與美因茲的印刷術發明人約翰尼斯.古騰堡無關,是常見的美麗誤會。",
            en: "The medieval castle takes its name from the local site, not from Mainz-born Johannes Gutenberg — a charming but common mix-up.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "列支敦斯登與烏茲別克是全球僅有的兩個「雙重內陸國」——連鄰國也全是內陸國。",
        en: "Liechtenstein and Uzbekistan are the world's only doubly landlocked countries — even their neighbors are landlocked.",
      },
      {
        zh: "該國自 1868 年裁軍至今沒有軍隊,治安則由規模很小的警察部隊維持。",
        en: "It has had no army since 1868; security rests with a very small police force.",
      },
    ],
    climate: {
      zh: "溫帶高山氣候,冬季寒冷多雪、夏季溫和;焚風(Föhn)常沿萊茵河谷吹拂,使氣溫回暖並利於葡萄種植。",
      en: "Temperate alpine climate — snowy winters and mild summers; the warm Föhn wind sweeping the Rhine valley softens temperatures and even supports vineyards.",
    },
    travelTips: [
      {
        zh: "沒有機場與長途火車站,一般從瑞士薩爾甘斯或布克斯、奧地利費爾德基希轉搭巴士入境。",
        en: "With no airport or mainline station, arrive by bus from Sargans or Buchs in Switzerland, or Feldkirch in Austria.",
      },
      {
        zh: "法定貨幣是瑞士法郎,多數商家也收歐元但匯率較差。",
        en: "The Swiss franc is the currency; most shops accept euros too, at unfavorable rates.",
      },
      {
        zh: "瓦都茲遊客中心可付費蓋紀念入境章,全國巴士一日票即可玩遍主要城鎮。",
        en: "Get a souvenir passport stamp at the Vaduz tourist office, and use a one-day bus pass to cover all the main towns.",
      },
    ],
  },
  {
    id: "VAT",
    name: { zh: "梵蒂岡", en: "Vatican City" },
    capital: { zh: "梵蒂岡城", en: "Vatican City" },
    flag: "🇻🇦",
    region: "europe",
    center: { lat: 41.904, lng: 12.453 },
    intro: {
      zh: "被羅馬市區環抱的世界最小主權國家,面積僅 0.44 平方公里、常住人口數百人,卻是全球十多億天主教徒的信仰中樞,坐擁聖彼得大教堂與米開朗基羅的曠世傑作。",
      en: "The world's smallest sovereign state, enclosed within Rome — just 0.44 km² with only a few hundred residents — yet the spiritual center for over a billion Catholics, home to St. Peter's Basilica and Michelangelo's masterpieces.",
    },
    history: {
      zh: "教宗自 8 世紀起統治義大利中部大片的教宗國,1870 年義大利統一運動攻入羅馬後領土盡失,教宗自囚於梵蒂岡近六十年。1929 年教廷與義大利簽署拉特朗條約,梵蒂岡城國正式成立,確立其主權地位。今日它由教宗全權統治,擁有自己的郵政、電台、報紙與瑞士近衛隊,是全球唯一整體列入世界遺產的國家。",
      en: "From the 8th century the popes ruled the extensive Papal States of central Italy, lost when unified Italy took Rome in 1870 — leaving pontiffs 'prisoners in the Vatican' for nearly sixty years. The 1929 Lateran Treaty with Italy created Vatican City State and settled its sovereignty. Ruled directly by the pope, it runs its own post, radio, newspaper, and Swiss Guard, and is the only country inscribed in its entirety as a World Heritage site.",
    },
    cities: [
      {
        name: { zh: "聖彼得大教堂區", en: "St. Peter's Basilica" },
        blurb: {
          zh: "天主教會最重要的教堂之一,建於聖彼得墓上,登穹頂可俯瞰全羅馬。",
          en: "One of Catholicism's greatest churches, built over St. Peter's tomb — climb the dome for a view across all of Rome.",
        },
        trivia: {
          question: {
            zh: "聖彼得大教堂的巨大穹頂,主要出自哪位藝術家的設計?",
            en: "The great dome of St. Peter's Basilica was principally designed by which artist?",
          },
          options: [
            { zh: "米開朗基羅", en: "Michelangelo" },
            { zh: "貝尼尼", en: "Gian Lorenzo Bernini" },
            { zh: "拉斐爾", en: "Raphael" },
            { zh: "布拉曼特", en: "Donato Bramante" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "米開朗基羅 71 歲接任總建築師並重新設計穹頂,雖未及完工便離世,後人大體依其構想建成;堂內還有他 24 歲的名作《聖殤》。",
            en: "Michelangelo took over as chief architect at 71 and redesigned the dome, completed largely to his plan after his death; his Pietà, carved at 24, stands inside.",
          },
        },
      },
      {
        name: { zh: "梵蒂岡博物館", en: "The Vatican Museums" },
        blurb: {
          zh: "歷代教宗收藏匯聚的巨型博物館群,終點是米開朗基羅繪滿天頂的西斯汀禮拜堂。",
          en: "A vast museum complex of papal collections, culminating in the Sistine Chapel beneath Michelangelo's painted ceiling.",
        },
        trivia: {
          question: {
            zh: "梵蒂岡的西斯汀禮拜堂除了藝術價值,還有什麼重要功能?",
            en: "Beyond its art, what important function does the Sistine Chapel serve?",
          },
          options: [
            {
              zh: "教宗選舉祕密會議的舉行地",
              en: "It hosts the conclave that elects the pope",
            },
            { zh: "教宗的加冕大典場地", en: "It is the venue for papal coronations" },
            { zh: "冊封聖人的儀式場所", en: "It is where saints are canonized" },
            { zh: "樞機主教的日常議事廳", en: "It is the cardinals' daily council chamber" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "樞機們在此閉門投票選出新教宗,煙囪冒出白煙即代表選舉成功——「白煙升起」因此成為全球矚目的時刻。",
            en: "Cardinals vote here behind locked doors to choose a new pope; white smoke from the chimney signals success — a moment watched worldwide.",
          },
        },
      },
      {
        name: { zh: "聖彼得廣場", en: "St. Peter's Square" },
        blurb: {
          zh: "巨大的橢圓形廣場,兩道柱廊如臂膀環抱信眾,中央矗立古埃及方尖碑。",
          en: "A vast elliptical square whose twin colonnades embrace visitors like open arms, centered on an ancient Egyptian obelisk.",
        },
        trivia: {
          question: {
            zh: "聖彼得廣場環抱式的橢圓柱廊,是哪位巴洛克大師的設計?",
            en: "The embracing oval colonnades of St. Peter's Square were designed by which Baroque master?",
          },
          options: [
            { zh: "貝尼尼", en: "Gian Lorenzo Bernini" },
            { zh: "波羅米尼", en: "Francesco Borromini" },
            { zh: "馬代爾諾", en: "Carlo Maderno" },
            { zh: "米開朗基羅", en: "Michelangelo" },
          ],
          answerIndex: 0,
          explanation: {
            zh: "貝尼尼於 17 世紀設計了這對四排柱、共 284 根石柱的柱廊,象徵教會張開雙臂擁抱世人。",
            en: "Bernini designed the 284-column, four-deep colonnades in the 17th century to symbolize the church's arms welcoming the world.",
          },
        },
      },
    ],
    funFacts: [
      {
        zh: "守衛教宗的瑞士近衛隊創立於 1506 年,新兵須為瑞士籍天主教徒,制服色彩繽紛如文藝復興再現。",
        en: "The Swiss Guard, founded in 1506, recruits only Swiss Catholic men — their colorful uniforms look straight out of the Renaissance.",
      },
      {
        zh: "梵蒂岡發行自己的歐元硬幣與郵票,還擁有全球最短的國家鐵路之一。",
        en: "Vatican City mints its own euro coins, issues its own stamps, and has one of the shortest national railways in the world.",
      },
    ],
    climate: {
      zh: "與羅馬相同的地中海氣候,夏季乾熱、七八月常超過 30 度,冬季溫和多雨,春秋最適合排隊參觀。",
      en: "The same Mediterranean climate as Rome — hot dry summers often topping 30°C in July–August, mild rainy winters, and spring or autumn best for queueing outdoors.",
    },
    travelTips: [
      {
        zh: "梵蒂岡博物館務必提前線上購票免排長龍;多數週日閉館,僅每月最後一個週日免費開放。",
        en: "Book Vatican Museums tickets online to skip the long lines; they close most Sundays, opening free only on the last Sunday of each month.",
      },
      {
        zh: "進入教堂與博物館有服裝規定:須遮蓋肩膀與膝蓋。",
        en: "A dress code applies in the basilica and museums — shoulders and knees must be covered.",
      },
      {
        zh: "聖彼得大教堂免費參觀但安檢隊伍長,清晨抵達最省時。",
        en: "St. Peter's Basilica is free but the security line is long — arrive at opening time to save hours.",
      },
      {
        zh: "教宗通常於週日中午在廣場帶領三鐘經祈禱,週三上午有公開接見,想參與請先確認行程。",
        en: "The pope usually leads the Sunday noon Angelus in the square and holds Wednesday morning audiences — check the schedule if you want to attend.",
      },
    ],
  },
];
