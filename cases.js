"use strict";

window.memoThemes = [
  {
    id: "probe", name: "试探", en: "Probing", topic: "身体与感知", color: "#273bc0", tint: "#e4e6fa",
    question: "一种新感官，从一个新动词开始。",
    intro: "一副耳机能让脚步停下，城市也可以用字幕重写。沿着这些作品，看看一处地方会怎样向不同身体显露自己。",
    works: [
      {
        id: "missing-voice", title: "失踪的声音", creator: "Janet Cardiff", year: "1999",
        copy: "耳机里的女人带你穿过伦敦东区。录音里驶来一辆车，眼前的街上却空着，你的身体仍可能替这辆车停下来。",
        url: "https://www.artangel.org.uk/project/the-missing-voice-case-study-b/",
        image: "https://media.artangel.org.uk/images/1999tmv_01.f2e068dc.fill-2000x500.jpg",
        alt: "《失踪的声音》作品档案中的伦敦街景", crop: "65% 50%", credit: "摄影 Gerrie van Noord / Artangel",
        media: { type: "audio-embed", src: "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F215530848", link: "https://soundcloud.com/artangel-2/talk-the-missing-voice-01" }
      },
      {
        id: "drift-table", title: "漂流茶几", creator: "William Gaver 与 Interaction Research Studio", year: "2003",
        copy: "在茶几一侧放下一本书，桌心圆窗里的航拍地貌就朝重量偏移。从伦敦飘到德文郡，可能需要几天。",
        url: "https://research.northumbria.ac.uk/irs/the-drift-table/",
        image: "https://irs.mikevanis.com/wp-content/uploads/2003/02/Drift_06_2000px_72dpi-1024x768.jpg",
        alt: "一张带圆形取景窗的漂流茶几", credit: "图源 Interaction Research Studio"
      },
      {
        id: "pore-city", title: "毛孔城市－占领计划", creator: "表层工作室 · 高伟恩、谭宇宏", year: "2025",
        copy: "上百座喷雾装置让北美馆广场像皮肤一样散热。脚下网面微微起伏，水雾触到手臂，热岛效应在这几步路里有了触感。",
        url: "https://www.tfam.museum/Exhibition/Exhibition_Special.aspx?ddlLang=zh-tw&id=791",
        image: "https://i.ytimg.com/vi/fu8w-90Rmvo/hqdefault.jpg", alt: "《毛孔城市－占领计划》现场影片封面", credit: "影片封面 / 台北市立美术馆",
        media: { type: "video-embed", src: "https://www.youtube-nocookie.com/embed/fu8w-90Rmvo", link: "https://www.youtube.com/watch?v=fu8w-90Rmvo" }
      },
      {
        id: "negative-shanshui", title: "Negative Shanshui", en: true, creator: "Aven Le Zhou、Dong Zhang 与 DIV Lab", year: "2024",
        copy: "戴上头显，视线落处的水墨山水经由生成模型逐渐变成荒地。你看向哪里，哪里就开始改变。",
        url: "https://www.dong-zhang.com/work/negative-shanshui",
        image: "https://www.dong-zhang.com/media/images/projects/negative-shanshui/sequence.webp", alt: "水墨山水在连续画面中逐渐变得荒芜", credit: "作品过程图 / Dong Zhang"
      },
      {
        "id": "captioning-the-city",
        "title": "给城市加字幕",
        "creator": "Christine Sun Kim",
        "year": "2021",
        "copy": "她把方括号里的声音描述写上曼彻斯特的墙、船和飞机横幅。聋人中心的那一句，写的是英国手语发问时的声音。",
        "url": "https://factoryinternational.org/whats-on/captioning-the-city/",
        "image": "https://thumbor.factoryinternational.org/-SHiGbKEv2V1m0zCLkwqYzdAn0M=/adaptive-fit-in/1600x0/filters:format(webp):quality(60)/https://publicydn4hdgozyjrg.blob.core.windows.net/public/dd/images/Christine_Sun_Kim_-_Captioning_the_City_Manchester_Deaf_Centre_-_credit_Lee_Baxter__0347.437c275.jpg",
        "alt": "曼彻斯特聋人中心的砖墙上贴着一段白色大写字幕",
        "credit": "摄影 Lee Baxter / Factory International"
      },
      {
        "id": "arachnoarcano",
        "title": "ArachnoAnarcóArcano",
        "en": true,
        "creator": "Tomás Saraceno 与 Arachnophilia",
        "year": "2023",
        "copy": "一座旧告解亭接入蛛网的振动。特制麦克风和地板里的振动器，把微弱信号送到人的脚下。",
        "url": "https://studiotomassaraceno.org/web-s-of-life/",
        "image": "https://studiotomassaraceno.org/files/18gbr_london_serpentinegallery_exhibition_15649-1920x2879.jpg",
        "alt": "黑暗展厅中的木制告解亭，顶部有一只巨大的蜘蛛形雕塑",
        "credit": "摄影 Studio Tomás Saraceno"
      }
    ]
  },
  {
    id: "afterheat", name: "余温", en: "Afterheat", topic: "气候与时间", color: "#9b3727", tint: "#f1ded4",
    question: "事件结束以后，什么还留在现场？",
    intro: "底片留住一整场电影的光，城市管网接住机器的废热。物质会把事情留到什么时候？谁又能在事后用上它？",
    works: [
      {
        id: "four-rooms", title: "4 Rooms", en: true, creator: "Jacob Kirkegaard", year: "2005–2006",
        copy: "在切尔诺贝利禁区的四个空房间里，他把录下的环境声原地播放，再录下来。几次循环之后，房间自身的共振逐渐清晰。",
        url: "https://fonik.dk/works/FourRooms.html",
        image: "https://fonik.dk/images/works/aion/aion-swim.jpg", alt: "作品录音所用的一座废弃游泳池", credit: "图源 Jacob Kirkegaard 作品档案",
        media: { type: "audio-link", link: "https://jacobkirkegaardreleases.bandcamp.com/album/4-rooms" }
      },
      {
        id: "vatnajokull", title: "冰川电话", creator: "Katie Paterson", year: "2007–2008",
        copy: "一个水听器沉在冰川末端的冰湖里，连到一条电话号码。来电的人能从听筒里听见冰川在水下消融。",
        url: "https://katiepaterson.org/artwork/vatnajokull-the-sound-of/",
        image: "https://i0.wp.com/katiepaterson.org/wp-content/uploads/2022/02/Katie_Paterson_Vatnajokull_3-1.jpg?resize=1200%2C902&ssl=1",
        alt: "瓦特纳冰川融水湖中的浮冰", credit: "图源 Katie Paterson 作品档案",
      },
      {
        id: "theater", title: "Prospect Park Theater", en: true, creator: "杉本博司", year: "1977",
        copy: "快门从电影开场一直开到散场。影片的光在底片上累积成一块发白的银幕，它照亮过的剧院还在。",
        url: "https://ueshima-collection.com/en/collection-list/42",
        image: "https://d1bw7jutr5f4fb.cloudfront.net/public_window/display_images/collection-42_thumb-1.webp?v=1747731814",
        alt: "杉本博司长曝光下的剧院，银幕呈白色", credit: "© Hiroshi Sugimoto / Ueshima Collection"
      },
      {
        id: "helsinki-heat", title: "给赫尔辛基供暖的数据中心", creator: "Helen 与 Telia", year: "2023 起",
        copy: "赫尔辛基一座数据中心把机器排出的热送进区域供暖网。计算完成之后，余热还能继续为附近的住户供暖。",
        url: "https://www.helen.fi/en/news/2025/helen-and-telias-collaboration-brings-even-more-data-center-heat-to-helsinki-residents",
        art: "Waste heat"
      },
      {
        "id": "pornainen-sand-battery",
        "title": "波尔奈宁砂电池",
        "creator": "Polar Night Energy × Loviisan Lämpö",
        "year": "2025",
        "copy": "壁炉厂的皂石碎料装进一座十三米高的罐子。小镇把便宜时段的电存成热，隔几天再送进供暖管网。",
        "url": "https://polarnightenergy.com/news/worlds-largest-sand-battery-now-in-operation/",
        "image": "https://polarnightenergy.com/wp-content/uploads/PNE-toukokuu-2025-10_grade-scaled-jpg.webp",
        "alt": "芬兰波尔奈宁供热系统中的圆柱形砂电池储热装置",
        "credit": "Polar Night Energy",
        "originalTitle": "Pornainen Sand Battery"
      },
      {
        "id": "paris-oasis-schoolyards",
        "title": "巴黎绿洲校园",
        "creator": "巴黎市 × 学校社群 × CAUE 75",
        "year": "2018—至今",
        "copy": "巴黎把沥青操场改成带树荫、饮水处和透水地面的院子。部分校门周六会再打开，让邻居也进来乘凉。",
        "url": "https://www.paris.fr/pages/les-cours-oasis-7389",
        "image": "https://cdn.paris.fr/paris/2025/12/10/huge-f8f774b58872593c9e8f08f48d9038f6.jpg",
        "alt": "巴黎舒瓦西与奥古斯特·佩雷小学的孩子在改造后的绿洲操场照料植物",
        "credit": "Laurent Bourgogne / Ville de Paris",
        "originalTitle": "Cours Oasis"
      }
    ]
  },
  {
    id: "borrow", name: "借力", en: "Borrowed Forces", topic: "材料与机械", color: "#3e5b39", tint: "#e4e8d8",
    question: "让天气自己开窗。",
    intro: "湿气让木片合拢，海风让机械迈步，树根会沿着人留下的方向长。设计图交出去以后，别的力量还在继续做工。",
    works: [
      {
        id: "hygroskin", title: "HygroSkin", en: true, creator: "Achim Menges、Oliver David Krieg、Steffen Reichert / ICD", year: "2013",
        copy: "木片像云杉球果的鳞片，吸湿就弯。亭子表面的上千个开口跟着空气开合，天气改变了穿进建筑的光。",
        url: "https://www.icd.uni-stuttgart.de/projects/hygroskin-meteorosensitive-pavilion/",
        image: "https://www.icd.uni-stuttgart.de/img/icd-imagedb/Web_HygroSkin_Main.jpg",
        alt: "HygroSkin 木质展亭表面的孔洞", credit: "图源 ICD University of Stuttgart",
        media: { type: "video-embed", src: "https://player.vimeo.com/video/73727749", link: "https://vimeo.com/73727749" }
      },
      {
        id: "solar-sinter", title: "Solar Sinter", en: true, creator: "Markus Kayser", year: "2011",
        copy: "在撒哈拉，聚焦的阳光逐层熔结沙子。碗上粗粝的层纹，记录着一把沙怎样在太阳下变成玻璃器物。",
        url: "https://kayserworks.com/798817030644",
        image: "https://images.squarespace-cdn.com/content/v1/5adf2e4655b02c56208f06e4/1524585143971-MOFEPM2LX6UYOEV03AEW/MarkusKayser_SolarSinter_01.jpg",
        alt: "撒哈拉沙漠中的太阳能烧结设备", credit: "图源 Markus Kayser 作品档案",
        media: { type: "video-embed", src: "https://player.vimeo.com/video/27002363", link: "https://vimeo.com/27002363" }
      },
      {
        id: "cloud-house", title: "Cloud House", en: true, creator: "Matthew Mazzotta", year: "2016",
        copy: "坐进摇椅，水泵把先前储下的雨送回屋顶。你在铁皮下听雨，窗边的植物也被浇到。旱时水箱空了，这朵云便沉默。",
        url: "https://www.matthewmazzotta.com/cloudhouse",
        image: "https://images.squarespace-cdn.com/content/v1/597f76a26f4ca327db3b6f3d/1501972137506-R5A0KP2Q98XY7D40DJOH/image-asset.jpeg",
        alt: "屋顶上方悬着云状装置的小木屋", credit: "图源 Matthew Mazzotta 作品档案",
        media: { type: "video-embed", src: "https://player.vimeo.com/video/189592923", link: "https://vimeo.com/189592923" }
      },
      {
        id: "strandbeest", title: "海滩兽", creator: "Theo Jansen", year: "1990 起",
        copy: "海风经过帆和连杆，变成沙滩上许多条腿的步态。有些后来的兽还能把风存进瓶子，在风停以后继续走。",
        url: "https://www.strandbeest.com/",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jansen-Strandbeest.jpg",
        alt: "Theo Jansen 用细管和连杆构成的步行机械", credit: "摄影 Eloquence / Wikimedia Commons（公有领域）",
        media: { type: "video-embed", src: "https://player.vimeo.com/video/645055721", link: "https://vimeo.com/645055721" }
      },
      {
        "id": "living-breakwaters",
        "title": "活体防波堤",
        "creator": "SCAPE × 纽约州 × Billion Oyster Project",
        "year": "2024—2026",
        "copy": "斯塔滕岛外的八座防波堤在礁脊间给海水和鱼留了通道。工程队撤场后，牡蛎团队继续往堤上引入幼体。",
        "url": "https://www.scapestudio.com/projects/living-breakwaters",
        "image": "https://www.baunetzwissen.de/imgs/3/1/8/1/0/8/1/LBW_05__c__SCAPE___Ty_Cole-0b507ca4668cea10.jpg",
        "alt": "拉里坦湾海面上的活体防波堤，石质礁脊从长条形堤体伸向水中",
        "credit": "SCAPE / Ty Cole",
        "originalTitle": "Living Breakwaters"
      },
      {
        "id": "meghalaya-living-root-bridges",
        "title": "梅加拉亚活根桥",
        "creator": "梅加拉亚的卡西与詹蒂亚社群",
        "year": "代际营造",
        "copy": "建桥的人把橡胶榕的气根牵向对岸。一代人的桥还在长，下一代又把新根编进桥面。",
        "url": "https://whc.unesco.org/en/tentativelists/6606/",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Double_Decker_Root_Bridge%2C_Nongriat.jpg?utm_campaign=index&utm_content=original&utm_source=commons.wikimedia.org",
        "alt": "印度梅加拉亚农里亚特村雨季的双层活根桥，交织的树根从岩壁跨过溪谷",
        "credit": "Wann Majaw / Wikimedia Commons · CC0 1.0",
        "originalTitle": "Jingkieng Jri"
      }
    ]
  },
  {
    id: "clutch", name: "离合", en: "Disengaging", topic: "自动化与决定权", color: "#53418c", tint: "#e8e0f1",
    question: "把事情交给机器以后，谁能把它接回来？",
    intro: "快门、家门与一段训练数据，都有某个时刻把决定交给了别人。这几件作品把那一刻做成了可见的东西。",
    works: [
      {
        id: "camera-restricta", title: "Camera Restricta", en: true, creator: "Philipp Schmitt", year: "2015",
        copy: "举起相机，机械挡片却升了起来。它发现附近已有太多带定位的照片，于是封住取景器。拍照的许可交给了一个计数器。",
        url: "https://philippschmitt.com/archive/2018/work/camera-restricta.html",
        image: "https://philippschmitt.com/archive/2018/work/img/restricta-camera.jpg", alt: "装有机械遮挡机构的 Camera Restricta 相机", credit: "图源 Philipp Schmitt 项目档案",
        media: { type: "video-embed", src: "https://player.vimeo.com/video/137595414", link: "https://vimeo.com/137595414" }
      },
      {
        id: "the-call", title: "The Call", en: true, creator: "Holly Herndon、Mat Dryhurst 与社区合唱团", year: "2024",
        copy: "十五支社区合唱团按一份新写的歌本录制训练数据。歌者也进入数据治理实验，参与决定这些声音怎样被使用。",
        url: "https://www.serpentinegalleries.org/whats-on/holly-herndon-mat-dryhurst-the-call/",
        art: "The Call"
      },
      {
        id: "lauren", title: "LAUREN", en: true, creator: "Lauren Lee McCarthy", year: "2017",
        copy: "志愿者家里多了一组传感器和智能开关。从远处为他们开门、调灯、预判需求的，是艺术家本人。",
        url: "https://get-lauren.net/LAUREN",
        image: "https://freight.cargo.site/t/original/i/99b72aa9f34edf37f19d0700e59382fbff1420a80e7012bbbc313b550294deee/_1290511_edited_o.jpg",
        alt: "LAUREN 使用的智能家居设备", credit: "图源 Lauren Lee McCarthy 作品档案",
        media: { type: "video-embed", label: "看参与者访谈", src: "https://player.vimeo.com/video/397068136", link: "https://vimeo.com/397068136" }
      },
      {
        id: "whose-utopia", title: "谁的乌托邦", creator: "曹斐", year: "2006",
        copy: "佛山灯泡厂的生产线还在运转，工人已经在过道上跳起芭蕾、弹起吉他。流水线的节拍和身体自己选的节拍短暂同框。",
        url: "https://www.moma.org/collection/works/399823",
        image: "https://www.moma.org/media/W1siZiIsIjQ4MjE5NyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=5352d2ebdb4b46f5",
        alt: "《谁的乌托邦》工厂场景剧照", credit: "剧照 © 曹斐 / MoMA"
      },
      {
        "id": "artist-is-absent",
        "title": "艺术家缺席",
        "creator": "Kevin Esherick",
        "year": "2026",
        "copy": "凯文·埃舍里克给自己定下一年停工期。受过他作品训练的模型继续推出新作，留给他的，是原来用来创作的时间。",
        "url": "https://heftgallery.com/exhibition/the-artist-is-absent",
        "image": "https://images.ctfassets.net/wd5scvjofn8n/1HTNxvM1yefHs62tnovjG8/ee2660bf01498336a1d0d9e063929364/install4_1_2.png",
        "alt": "白墙上有六幅小幅风景画和一张坐着的男子肖像",
        "credit": "Kevin Esherick / Heft Gallery，展览现场",
        "originalTitle": "The Artist Is Absent"
      },
      {
        "id": "ai-aint-i-a-woman",
        "title": "AI，我难道不是女人吗？",
        "creator": "Joy Buolamwini",
        "year": "2018",
        "copy": "软件把奥普拉的脸标成男性。乔伊·布奥拉姆维尼把商用系统的判词剪进一首朗诵诗，让人重新听见被标签盖过的名字。",
        "url": "https://www.youtube.com/watch?v=QxuyfWoVV98",
        "image": "https://i.ytimg.com/vi/QxuyfWoVV98/hqdefault.jpg",
        "alt": "乔伊·布奥拉姆维尼发布的《AI，我难道不是女人吗？》视频缩略图",
        "credit": "Joy Buolamwini，作者发布的视频",
        "media": {
          "type": "video-embed",
          "src": "https://www.youtube-nocookie.com/embed/QxuyfWoVV98",
          "link": "https://www.youtube.com/watch?v=QxuyfWoVV98"
        },
        "originalTitle": "AI, Ain’t I A Woman?"
      }
    ]
  },
  {
    id: "opacity", name: "不透明", en: "Opacity", topic: "关系与可见性", color: "#263e70", tint: "#e0e6ed",
    question: "一段关系能容下多少不知道？",
    intro: "有些事被系统漏掉，有些事由当事人保留。看不见的东西，也有不同的来历和主人。",
    works: [
      {
        id: "not-to-be-seen", title: "如何不被看见", creator: "Hito Steyerl", year: "2013",
        copy: "一本正经的假教程把镜头对准旧航空摄影校准靶。身体试图从图像里消失，像素尺寸也成了决定谁能现身的尺度。",
        url: "https://www.moma.org/collection/works/181784",
        image: "https://www.moma.org/media/W1siZiIsIjMwMTA5NyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=614574028bd3a7f4",
        alt: "Hito Steyerl 影片中用于测量分辨率的标靶和人物", credit: "剧照 © Hito Steyerl / MoMA",
        media: { type: "video-embed", label: "看艺术家访谈与片段", src: "https://www.youtube-nocookie.com/embed/kKAKgrZZ_ww", link: "https://www.youtube.com/watch?v=kKAKgrZZ_ww" }
      },
      {
        id: "missing-datasets", title: "缺失数据集图书馆", creator: "Mimi Ọnụọha", year: "2016 起",
        copy: "空文件夹写着那些从未被采集的数据。后续版本另有一只上锁的柜子，给可能危及当事人的资料留出不被收集的位置。",
        url: "https://zkm.de/en/artwork/the-library-of-missing-datasets",
        image: "https://images.squarespace-cdn.com/content/v1/5147c437e4b096a97cf3defd/1545713178110-LXCQ4DUY39TVUU8BFLOP/Installation.1.72.jpg",
        alt: "缺失数据集图书馆第二版的文件柜装置", credit: "第二版装置图 / Mimi Ọnụọha"
      },
      {
        id: "mukurtu", title: "Mukurtu Wumpurrarni-kari", en: true, creator: "Warumungu 社群、Kimberly Christen 等", year: "2007",
        copy: "照片和录音进入数字档案后，Warumungu 社群仍决定谁可以观看、怎样流通。档案也保存了知识原有的分享关系。",
        url: "https://wumpurrarni-kari.libraries.wsu.edu/",
        image: "https://webdoc.sub.gwdg.de/edoc/aw/d-lib/dlib/may17/christen/christen-fig1.png",
        alt: "Mukurtu 早期档案的公开入口界面", credit: "图源项目团队发表的论文"
      },
      {
        id: "ai-nushu", title: "AI 女书", creator: "Yuqian Sun 与团队", year: "2023 起",
        copy: "两个 AI 在展厅里交换自己创造的符号。作品从湖南江永女性之间流传的女书出发，让观众做机器语言的学习者。",
        url: "https://calls.ars.electronica.art/2025/prix/winners/19963/",
        image: "https://i.ytimg.com/vi/Iyrh_OPA2L0/hqdefault.jpg", alt: "《AI 女书》团队影片封面", credit: "影片封面 / AI 女书项目团队",
        media: { type: "video-embed", src: "https://www.youtube-nocookie.com/embed/Iyrh_OPA2L0", link: "https://www.youtube.com/watch?v=Iyrh_OPA2L0" }
      },
      {
        "id": "rongo",
        "title": "Rongo",
        "en": true,
        "creator": "Te Hiku Media",
        "year": "2022",
        "copy": "毛利语发音工具在手机上听、评估和反馈。只有使用者主动分享，录音和发音评分才交给社区媒体机构保管。",
        "url": "https://apps.apple.com/us/app/rongo/id1630758000"
      },
      {
        "id": "triple-chaser",
        "title": "Triple-Chaser",
        "en": true,
        "creator": "Forensic Architecture 与 Praxis Films",
        "year": "2019",
        "copy": "研究团队用模拟图像教机器在公开视频里找同一型号的催泪罐。散落在现场的物件，成了追问供应链的线索。",
        "url": "https://www.praxisfilms.org/shorts/triple-chaser",
        "image": "https://whitneymedia.org/assets/image/823556/large_2019_BIENNIAL-72E.jpg",
        "alt": "惠特尼双年展中播放《Triple-Chaser》动画段落的展览现场",
        "credit": "摄影 Ron Amstutz / Whitney Museum",
        "media": {
          "type": "video-embed",
          "src": "https://player.vimeo.com/video/335501310",
          "link": "https://www.praxisfilms.org/shorts/triple-chaser"
        }
      }
    ]
  },
  {
    id: "handover", name: "交班", en: "Handover", topic: "照料与基础设施", color: "#775328", tint: "#eee4d1",
    question: "作品在你请假的那天开始。",
    intro: "一片林子、几栋房子、一份封存手稿。它们的下一版，要等下一任使用者和维护者来写。",
    works: [
      {
        id: "future-library", title: "未来图书馆", creator: "Katie Paterson 与 Future Library Trust", year: "2014–2114",
        copy: "奥斯陆种下一千棵树，每年请一位作家交来封存的手稿。到了 2114 年，未来的人会用这片林子造纸，第一次印出这些书。",
        url: "https://katiepaterson.org/artwork/future-library/",
        image: "https://www.futurelibrary.no/assets/images/pages/author/margaretatwoodhandovervideo.jpg",
        alt: "Margaret Atwood 在奥斯陆林地交出手稿", credit: "图源 Future Library 项目档案"
      },
      {
        id: "granby", title: "Granby Four Streets", en: true, creator: "Granby Four Streets CLT 与 Assemble", year: "2013 起",
        copy: "利物浦居民清扫、栽种、粉刷多年，随后成立社区土地信托。空屋逐步修复为可负担住宅，街坊也有了能接下去的组织。",
        url: "https://assemblestudio.co.uk/projects/granby-four-streets-2",
        image: "https://api.assemblestudio.co.uk/wp-content/uploads/img_0509-1600x1096.jpg",
        alt: "利物浦 Granby 修缮后的砖砌街屋", credit: "图源 Assemble 项目档案"
      },
      {
        id: "tree-mountain", title: "树山", creator: "Agnes Denes 与志愿种植者", year: "1992–1996",
        copy: "芬兰一座废弃砂石坑长出由一万一千棵树构成的几何图案。林地按四百年的尺度保护，森林还会经过许多人的一生。",
        url: "https://www.mcadmanila.org.ph/wp-content/uploads/2023/06/062023_Adaptation_Exhibition-Booklet.pdf",
        image: "https://live.staticflickr.com/5526/9373702344_be2072cc54_o.jpg",
        alt: "芬兰树山的树阵和周边林地", credit: "摄影 Strata Suomi / CC BY 2.0"
      },
      {
        id: "blue-house", title: "We 嘩藍屋", creator: "蓝屋居民组、圣雅各福群会等", year: "2010 起",
        copy: "香港湾仔修复了这排旧唐楼，让原住户能够留下。留在楼里的人和邻里关系，也参与了这座房子的下一班。",
        url: "https://www.devb.gov.hk/en/home/my_blog/index_id_277.html",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Exterior_of_Blue_House.jpg",
        alt: "香港湾仔蓝屋的临街外立面", credit: "摄影 Asatsuyu2022 / CC BY-SA 4.0 / Wikimedia Commons"
      },
      {
        "id": "ancestral-voices",
        "title": "祖先的声音",
        "creator": "Passamaquoddy 社群 × 美国民俗生活中心",
        "year": "2015–2018（首轮）",
        "copy": "蜡筒里一首三分钟的旧歌，长者有时要听上整天。归还录音之后，社群自己来写唱的是谁、为什么唱、可以怎样听。",
        "url": "https://www.loc.gov/collections/ancestral-voices/about-this-collection/",
        "image": "https://www.loc.gov/static/managed-content/uploads/sites/9/2023/10/H1-Passamaquoddy-Dwayne-Tomah-and-Donald-Soctomah-on-Pine-Island-1.jpg",
        "alt": "德韦恩·托马与唐纳德·索科托马站在林地",
        "credit": "PBS《Native America》／美国国会图书馆活动档案",
        "originalTitle": "Ancestral Voices"
      },
      {
        "id": "fixing-factory",
        "title": "修理工厂",
        "creator": "Possible × The Restart Project",
        "year": "2022 至今",
        "copy": "伦敦人拎着坏掉的烤面包机走进橙色店铺。有些人把东西修好就回家，有些人后来留下来教别人怎么拆。",
        "url": "https://www.fixingfactory.org/about",
        "image": "https://therestartproject.org/wp-content/uploads/2022/11/Camden-launch.jpg",
        "alt": "坎登修理工厂开张日，志愿者和街坊聚在橙色店铺门口",
        "credit": "Mark A Phillips / The Restart Project，CC BY 2.0",
        "originalTitle": "Fixing Factory"
      }
    ]
  }
];
