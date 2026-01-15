const legalTerms = [
    // --- A ---
    {
        term: "Adli Kontrol",
        definition: "Tutuklama sebeplerinin varlığına rağmen, şüphelinin tutuklanması yerine denetim altına alınmasını sağlayan koruma tedbiri (Örn: İmza atmak, yurt dışı yasağı).",
        category: "Ceza"
    },
    {
        term: "Ağır Ceza Mahkemesi",
        definition: "Kanunların ayrıca görevli kıldığı haller saklı kalmak üzere, ağırlaştırılmış müebbet hapis, müebbet hapis ve on yıldan fazla hapis cezalarını gerektiren suçlarla ilgili davalara bakan mahkeme.",
        category: "Ceza"
    },
    {
        term: "Akıllı Sözleşme (Smart Contract)",
        definition: "Blokzincir üzerinde çalışan, kodlanmış koşullar gerçekleştiğinde (örn: ödeme yapıldığında) kendiliğinden icra edilen otonom sözleşme protokolü. 2026 Borçlar Kanunu düzenlemesiyle delil niteliği güçlendirilmiştir.",
        category: "Teknoloji (2026)"
    },
    {
        term: "Algoritmik Ayrımcılık",
        definition: "Yapay zeka sistemlerinin veya algoritmaların, eğitim verilerindeki önyargılar nedeniyle belirli gruplara karşı haksız veya ayrımcı kararlar (örn: kredi reddi, işe alım) üretmesi durumu.",
        category: "Teknoloji (2026)"
    },
    {
        term: "Anayasa Mahkemesi",
        definition: "Kanunların, kanun hükmünde kararnamelerin ve Türkiye Büyük Millet Meclisi İçtüzüğünün Anayasaya şekil ve esas bakımlarından uygunluğunu denetleyen yüksek mahkeme.",
        category: "Genel"
    },
    {
        term: "Arabuluculuk",
        definition: "Tarafların arasındaki hukuki uyuşmazlığı, tarafsız bir üçüncü kişi (arabulucu) yönetiminde müzakere ederek çözüme kavuşturdukları yöntem. İş ve ticaret davalarında dava şartıdır.",
        category: "Genel"
    },
    {
        term: "Asliye Ceza Mahkemesi",
        definition: "Ağır ceza mahkemelerinin görev alanı dışında kalan ve sulh ceza hakimliklerinin görevine girmeyen tüm ceza davalarına bakan temel mahkeme.",
        category: "Ceza"
    },
    {
        term: "Azil",
        definition: "Vekalet verenin, vekili (avukatı) tek taraflı irade beyanıyla görevden alması işlemi.",
        category: "Genel"
    },

    // --- B ---
    {
        term: "Bağlantıyı Kesme Hakkı (Right to Disconnect)",
        definition: "Çalışanların mesai saatleri dışında işveren tarafından gelen e-posta, arama veya mesajlara yanıt vermeme yasal hakkı. 2026 İş Kanunu değişikliği ile güvence altına alınmıştır.",
        category: "İş"
    },
    {
        term: "Beraat",
        definition: "Ceza davası sonucunda sanığın suçsuz bulunması veya suçun yasal unsurlarının oluşmaması nedeniyle hakkında ceza verilmesine yer olmadığı kararı.",
        category: "Ceza"
    },
    {
        term: "Bilirkişi",
        definition: "Çözümü hukuk dışında özel veya teknik bir bilgiyi gerektiren hallerde, mahkemenin veya savcılığın başvurduğu uzman kişi.",
        category: "Genel"
    },
    {
        term: "Biyometrik Veri",
        definition: "Kişinin fiziksel veya davranışsal özelliklerini (parmak izi, retina, ses) tanımlayan özel nitelikli kişisel veri. 2026 KVKK reformu ile işlenmesi katı şartlara bağlanmıştır.",
        category: "KVKK"
    },
    {
        term: "Bononun İptali",
        definition: "Zayi olan veya rızası dışında elinden çıkan bononun hükümsüz kılınması için açılan dava.",
        category: "Ticaret"
    },
    {
        term: "Boşanma",
        definition: "Evlilik birliğinin mahkeme kararı ile sona erdirilmesi. Anlaşmalı ve çekişmeli olarak ikiye ayrılır.",
        category: "Aile"
    },

    // --- C ---
    {
        term: "Ceza Ehliyeti",
        definition: "Kişinin işlediği suçun hukuki anlam ve sonuçlarını algılama ve davranışlarını yönlendirme yeteneği. 12 yaşından küçüklerin ceza ehliyeti yoktur.",
        category: "Ceza"
    },
    {
        term: "Celse",
        definition: "Davanın görülmesi için mahkemede yapılan her bir oturum.",
        category: "Genel"
    },
    {
        term: "Cevap Dilekçesi",
        definition: "Davalının, kendisine tebliğ edilen dava dilekçesine karşı iddia ve savunmalarını bildirdiği dilekçe.",
        category: "Genel"
    },
    {
        term: "Cayma Hakkı",
        definition: "Tüketicinin, mesafeli satış sözleşmelerinde (internet alışverişi vb.) 14 gün içinde herhangi bir gerekçe göstermeksizin sözleşmeden dönme hakkı.",
        category: "Ticaret"
    },

    // --- Ç ---
    {
        term: "Çekişmeli Boşanma",
        definition: "Tarafların boşanma, nafaka, velayet veya tazminat konularında anlaşamadığı ve kararı hakimin verdiği boşanma türü.",
        category: "Aile"
    },
    {
        term: "Çek",
        definition: "Bir bankaya hitaben yazılmış, ödeme emri niteliğindeki kıymetli evrak.",
        category: "Ticaret"
    },

    // --- D ---
    {
        term: "Danıştay",
        definition: "İdari mahkemelerce verilen kararların son inceleme mercii olan yüksek idare mahkemesi.",
        category: "Genel"
    },
    {
        term: "Dava Şartı",
        definition: "Bir davanın esastan görülebilmesi için kanunun aradığı zorunlu koşullar (Örn: Arabuluculuğa başvurmuş olmak).",
        category: "Genel"
    },
    {
        term: "Deepfake Suçu",
        definition: "Yapay zeka kullanılarak bir kişinin sesini veya görüntüsünü, o kişinin rızası olmadan gerçeğe aykırı şekilde üretme eylemi. TCK kapsamında suçtur.",
        category: "Teknoloji (2026)"
    },
    {
        term: "Def'i",
        definition: "Davalının, davacının hakkını kabul etmekle birlikte, özel bir nedenle (örn: zamanaşımı) bu borcu ödemekten kaçınma hakkı.",
        category: "Genel"
    },
    {
        term: "Değer Artış Kazancı Vergisi",
        definition: "Gayrimenkullerin iktisap tarihinden itibaren 5 yıl içinde elden çıkarılmasından doğan kazanç üzerinden alınan vergi.",
        category: "Vergi"
    },
    {
        term: "Dijital Miras",
        definition: "Kişinin vefatından sonra geride bıraktığı ekonomik değeri olan dijital varlıklar (kripto para, NFT, sosyal medya hesapları).",
        category: "Teknoloji (2026)"
    },
    {
        term: "Duruşma",
        definition: "Yargılama makamının (hakim), tarafları, tanıkları ve bilirkişileri dinlediği, delilleri incelediği yargılama evresi.",
        category: "Genel"
    },

    // --- E ---
    {
        term: "Edinilmiş Mallar",
        definition: "Evlilik birliği süresince eşlerin karşılığını vererek elde ettikleri ekonomik değerler. Boşanmada yarı yarıya paylaşılır.",
        category: "Aile"
    },
    {
        term: "E-Duruşma",
        definition: "Avukatların mahkemeye gitmeden, video konferans sistemiyle duruşmalara katılabildiği sistem.",
        category: "Teknoloji"
    },
    {
        term: "Ecrimisil",
        definition: "Bir malın sahibinin rızası dışında ve haksız olarak kullanılması nedeniyle ödenen kullanım tazminatı (Haksız işgal tazminatı).",
        category: "Eşya"
    },
    {
        term: "Ehliyet",
        definition: "Kişinin haklara sahip olabilme ve borç altına girebilme yeteneği.",
        category: "Genel"
    },
    {
        term: "Emredici Hukuk Kuralları",
        definition: "Tarafların kendi iradeleriyle değiştiremeyecekleri, kamu düzenini ve zayıfın korunmasını amaçlayan hukuk kuralları.",
        category: "Genel"
    },

    // --- F ---
    {
        term: "Fezleke",
        definition: "Soruşturma evresinde polisin veya jandarmanın olayla ilgili yaptığı araştırmayı özetleyen ve savcıya sunduğu rapor.",
        category: "Ceza"
    },
    {
        term: "Fikri Mülkiyet",
        definition: "Telif hakları, patentler, markalar gibi zihinsel yaratımların üzerindeki hukuki haklar.",
        category: "Ticaret"
    },
    {
        term: "Fintech Hukuku",
        definition: "Finansal teknolojiler, dijital bankacılık, ödeme sistemleri ve kripto varlıkları düzenleyen hukuk dalı.",
        category: "Teknoloji"
    },

    // --- G ---
    {
        term: "Gaiplik",
        definition: "Bir kimsenin ölüm tehlikesi içinde kaybolması veya kendisinden uzun süre haber alınamaması durumunda, mahkeme kararıyla hukuken ölmüş sayılması.",
        category: "Genel"
    },
    {
        term: "GDPR (General Data Protection Regulation)",
        definition: "Avrupa Birliği'nin katı kişisel veri koruma tüzüğü. Türkiye'deki KVKK ile büyük benzerlikler gösterir.",
        category: "KVKK"
    },
    {
        term: "Gözaltı",
        definition: "Kanunun verdiği yetkiye dayanılarak, soruşturma yönünden zorunlu olduğu hallerde şüphelinin kısa süreli olarak kolluk kuvvetlerince alıkonulması.",
        category: "Ceza"
    },

    // --- H ---
    {
        term: "Haciz",
        definition: "Kesinleşmiş bir borcun ödenmemesi üzerine, alacaklının talebiyle borçlunun mallarına devlet zoruyla el konulması.",
        category: "İcra"
    },
    {
        term: "Hak Düşürücü Süre",
        definition: "Kanunda belirtilen süre içinde kullanılmadığı takdirde hakkın tamamen sona ermesine neden olan süre.",
        category: "Genel"
    },
    {
        term: "Hükmün Açıklanmasının Geri Bırakılması (HAGB)",
        definition: "Sanık hakkında verilen cezanın, 5 yıl süresince denetim altında tutulması ve bu sürede yeni bir suç işlenmemesi halinde cezanın yok sayılması.",
        category: "Ceza"
    },

    // --- İ ---
    {
        term: "İbranamme",
        definition: "Alacaklının, borçludan alacağını aldığını ve borçluyu serbest bıraktığını gösteren belge (Özellikle iş hukukunda yaygındır).",
        category: "Borçlar"
    },
    {
        term: "İçtihat",
        definition: "Yüksek mahkemelerin (Yargıtay, Danıştay) benzer konularda verdiği ve yerel mahkemelere yol gösterici nitelikteki kararlar.",
        category: "Genel"
    },
    {
        term: "İddianame",
        definition: "Cumhuriyet savcısının, şüpheli hakkında topladığı delillere dayanarak mahkemeye sunduğu ve kamu davası açılmasını talep eden yazılı belge.",
        category: "Ceza"
    },
    {
        term: "İhtarname",
        definition: "Bir hakkın kullanılması veya borcun ödenmesi için karşı tarafa noter aracılığıyla gönderilen resmi uyarı yazısı.",
        category: "Genel"
    },
    {
        term: "İnfaz",
        definition: "Mahkemece verilen ve kesinleşen ceza veya hukuk kararlarının yerine getirilmesi işlemi.",
        category: "Genel"
    },
    {
        term: "İstinaf",
        definition: "Yerel mahkeme kararlarına karşı, bir üst mahkeme olan Bölge Adliye Mahkemesi'ne yapılan başvuru ve itiraz yolu.",
        category: "Genel"
    },
    {
        term: "İş Kazası",
        definition: "Sigortalının işyerinde bulunduğu sırada veya işverence yürütülen iş nedeniyle meydana gelen ve bedence veya ruhça zarara uğratan olay.",
        category: "İş"
    },

    // --- K ---
    {
        term: "Kanun Yolu",
        definition: "Mahkemelerce verilen kararların yanlış olduğu iddiasıyla bir üst mahkemeye (İstinaf, Yargıtay) başvurulması hakkı.",
        category: "Genel"
    },
    {
        term: "Kat Mülkiyeti",
        definition: "Tamamlanmış bir yapının kat, daire, iş bürosu gibi bölümlerinin, bağımsız mülkiyet ve kulanım hakkına konu olması.",
        category: "Eşya"
    },
    {
        term: "Kavuşturma",
        definition: "İddianamenin kabulüyle başlayıp hükmün kesinleşmesine kadar geçen yargılama evresi.",
        category: "Ceza"
    },
    {
        term: "Kıdem Tazminatı",
        definition: "İşçinin en az 1 yıl çalıştıktan sonra belirli sebeplerle (haksız fesih, emeklilik, evlilik vb.) işten ayrılması durumunda işverence ödenen toplu para.",
        category: "İş"
    },
    {
        term: "Kişisel Veri",
        definition: "Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi (KVKK m.3).",
        category: "KVKK"
    },
    {
        term: "Konkordato",
        definition: "Borçlarını ödemekte zorlanan şirketlerin, mahkeme denetiminde alacaklılarla anlaşarak borçlarını yeniden yapılandırması.",
        category: "Ticaret"
    },
    {
        term: "Kovuşturmaya Yer Olmadığı Kararı (KYOK)",
        definition: "Savcılığın, yapılan soruşturma sonunda dava açmak için yeterli delil bulunmadığına veya suçun oluşmadığına karar vererek dosyayı kapatması. Takipsizlik olarak da bilinir.",
        category: "Ceza"
    },

    // --- M ---
    {
        term: "Maddi Tazminat",
        definition: "Hukuka aykırı bir eylem nedeniyle kişinin malvarlığında meydana gelen azalmanın (zararın) giderilmesi için ödenen para.",
        category: "Genel"
    },
    {
        term: "Manevi Tazminat",
        definition: "Kişilik haklarına (onur, şeref, vücut bütünlüğü) yapılan saldırı nedeniyle duyulan acı ve elemin giderilmesi için ödenen para.",
        category: "Genel"
    },
    {
        term: "Meşru Müdafaa",
        definition: "Kendisine veya başkasına yönelmiş haksız bir saldırıyı, o anda hal ve koşullara göre saldırı ile orantılı biçimde defetme hali. Ceza verilmez.",
        category: "Ceza"
    },
    {
        term: "Metaverse Hukuku",
        definition: "Sanal evrenlerdeki mülkiyet hakları, avatar suçları ve dijital varlık transferlerini konu alan, gelişmekte olan hukuk alanı.",
        category: "Teknoloji (2026)"
    },
    {
        term: "Mirasçılık Belgesi (Veraset İlamı)",
        definition: "Miras bırakanın ölümünden sonra kimlerin mirasçı olduğunu ve miras paylarını gösteren resmi belge.",
        category: "Miras"
    },
    {
        term: "Mobbing",
        definition: "İşyerinde bir veya birkaç çalışanın, diğer bir çalışana yönelik sistematik, düşmanca ve ahlak dışı taciz ve yıldırma davranışı.",
        category: "İş"
    },
    {
        term: "Mücbir Sebep",
        definition: "Tarafların iradesi dışında gelişen, önceden öngörülemeyen ve borcun ifasını imkansız kılan olay (Deprem, salgın vb.).",
        category: "Borçlar"
    },
    {
        term: "Müdafi",
        definition: "Ceza yargılamasında şüpheli veya sanığı savunan avukat.",
        category: "Ceza"
    },

    // --- N ---
    {
        term: "Nafaka",
        definition: "Boşanma veya ayrılık durumunda, ihtiyaç sahibi eşe veya çocuklara ödenmesine karar verilen aylık maddi destek.",
        category: "Aile"
    },
    {
        term: "Noter",
        definition: "Hukuki işlemleri belgelendiren ve onaylayan, imza sirküleri, ihtarname, vekaletname gibi resmi belgeleri düzenleyen kamu görevlisi.",
        category: "Genel"
    },

    // --- O ---
    {
        term: "Olağanüstü Kanun Yolu",
        definition: "Kesinleşmiş mahkeme kararlarına karşı gidilebilen istisnai başvuru yolları (Örn: Yargılamanın yenilenmesi).",
        category: "Genel"
    },

    // --- Ö ---
    {
        term: "Ön İnceleme Duruşması",
        definition: "Hukuk davalarında, tahkikat aşamasına geçilmeden önce uyuşmazlığın tespiti ve delillerin sunulması için yapılan ilk duruşma.",
        category: "Genel"
    },
    {
        term: "Özel Nitelikli Kişisel Veri",
        definition: "Kişilerin ırkı, siyasi düşüncesi, inancı, sağlığı, cinsel hayatı ve biyometrik verileri gibi, başkaları tarafından öğrenildiğinde ayrımcılığa uğrama riski taşıyan hassas veriler.",
        category: "KVKK"
    },

    // --- P ---
    {
        term: "Para Cezası (Adli)",
        definition: "Mahkemece suçlu bulunan kişiye, hapis cezası yerine veya hapis cezasıyla birlikte verilen, devlete ödenmesi gereken para.",
        category: "Ceza"
    },
    {
        term: "Protokol",
        definition: "Taraflar arasında yapılan anlaşmanın maddelerini içeren yazılı belge (Örn: Anlaşmalı boşanma protokolü).",
        category: "Genel"
    },

    // --- R ---
    {
        term: "Rücu",
        definition: "Bir kişinin başkası adına ödediği parayı, asıl borçludan geri isteme hakkı.",
        category: "Borçlar"
    },

    // --- S ---
    {
        term: "Sabıka Kaydı (Adli Sicil)",
        definition: "Kişi hakkında kesinleşmiş ceza mahkumiyetlerine ilişkin bilgilerin yer aldığı resmi kayıt.",
        category: "Ceza"
    },
    {
        term: "Saklı Pay",
        definition: "Miras bırakanın, vasiyetname ile dahi başkasına devredemeyeceği, altsoy, eş ve ebeveynin mirastaki dokunulmaz payı.",
        category: "Miras"
    },
    {
        term: "Sanık",
        definition: "Hakkında suç işlediği şüphesiyle ceza davası açılmış olan kişi.",
        category: "Ceza"
    },
    {
        term: "Soruşturma",
        definition: "Suç şüphesinin öğrenilmesinden iddianamenin kabulüne kadar geçen, savcılık tarafından yürütülen evre.",
        category: "Ceza"
    },
    {
        term: "Sulh Ceza Hakimliği",
        definition: "Soruşturma aşamasında tutuklama, arama, el koyma gibi kararları veren yargı mercii.",
        category: "Ceza"
    },
    {
        term: "Süreli Fesih (İhbar Süresi)",
        definition: "Belirsiz süreli iş sözleşmelerinde, tarafların kanunda belirtilen sürelere uyarak sözleşmeyi sona erdirmesi.",
        category: "İş"
    },

    // --- Ş ---
    {
        term: "Şikayet",
        definition: "Mağdurun, suç işleyen kişinin cezalandırılması talebiyle yetkili makamlara başvurması. Takibi şikayete bağlı suçlarda şarttır.",
        category: "Ceza"
    },
    {
        term: "Şüpheli",
        definition: "Soruşturma evresinde suç işlediği iddiasıyla hakkında işlem yapılan kişi.",
        category: "Ceza"
    },

    // --- T ---
    {
        term: "Tahkikat",
        definition: "Hukuk davalarında, delillerin toplandığı, incelendiği ve tanıkların dinlendiği, davanın esasına ilişkin yargılama aşaması.",
        category: "Genel"
    },
    {
        term: "Tahliye",
        definition: "Tutuklu bulunan kişinin serbest bırakılması veya kiracının taşınmazdan çıkarılması.",
        category: "Genel"
    },
    {
        term: "Takipsizlik Kararı",
        definition: "Bkz: Kovuşturmaya Yer Olmadığı Kararı (KYOK).",
        category: "Ceza"
    },
    {
        term: "Tanık (Şahit)",
        definition: "Dava konusu olay hakkında görgü ve bilgisini mahkemeye anlatan üçüncü kişi.",
        category: "Genel"
    },
    {
        term: "Tebligat",
        definition: "Hukuki işlemlerin (dava dilekçesi, karar, ihtar) muhatabına resmi usulle bildirilmesi.",
        category: "Genel"
    },
    {
        term: "Tedbir Nafakası",
        definition: "Boşanma davası devam ederken, eşin ve çocukların geçimini sağlamak için mahkemece geçici olarak hükmedilen nafaka.",
        category: "Aile"
    },
    {
        term: "Tekzip",
        definition: "Basın yayın organlarında çıkan gerçeğe aykırı haberlere karşı, ilgili kişinin düzeltme ve cevap yazısı yayınlatma hakkı.",
        category: "Medya"
    },
    {
        term: "Temerrüt",
        definition: "Borçlunun, borcunu zamanında ödememesi veya alacaklının ifayı kabul etmemesi durumu (Direnme).",
        category: "Borçlar"
    },
    {
        term: "Temyiz",
        definition: "İstinaf mahkemesi kararlarına karşı hukuksal denetim için Yargıtay'a başvurulması.",
        category: "Genel"
    },
    {
        term: "Tereke",
        definition: "Ölen kişinin mirasçılarına kalan malvarlığı, hakları ve borçlarının tümü.",
        category: "Miras"
    },
    {
        term: "Tutuklama",
        definition: "Kuvvetli suç şüphesi ve kaçma/delil karartma ihtimali bulunan hallerde, hakimin kararıyla şüphelinin cezaevine konulması.",
        category: "Ceza"
    },

    // --- U ---
    {
        term: "Uzlaştırma",
        definition: "Bazı suçlarda, mağdur ve şüphelinin tarafsız bir uzlaştırmacı aracılığıyla anlaştırılması ve davanın düşürülmesi sistemi.",
        category: "Ceza"
    },

    // --- V ---
    {
        term: "Vasi",
        definition: "Küçük veya kısıtlı kişilerin haklarını korumak ve mallarını yönetmek üzere mahkemece atanan yasal temsilci.",
        category: "Aile"
    },
    {
        term: "Vekaletname",
        definition: "Bir kişinin, başka bir kişiyi (genellikle avukatı) kendi adına işlem yapması için yetkilendirdiğini gösteren noter onaylı resmi belge.",
        category: "Genel"
    },
    {
        term: "Velayet",
        definition: "Ergin olmayan çocukların bakımı, eğitimi ve temsili konusunda anne-babanın sahip olduğu hak ve yetkiler.",
        category: "Aile"
    },
    {
        term: "Veraset İlamı",
        definition: "Bkz: Mirasçılık Belgesi.",
        category: "Miras"
    },

    // --- Y ---
    {
        term: "Yakalamalı Haciz",
        definition: "Borçluya ait araç vb. taşınır malların kolluk kuvvetlerince görülüğü yerde yakalanarak muhafaza altına alınması işlemi.",
        category: "İcra"
    },
    {
        term: "Yargıtay",
        definition: "Adliye mahkemelerince verilen kararların son inceleme mercii olan yüksek mahkeme.",
        category: "Genel"
    },
    {
        term: "Yoksulluk Nafakası",
        definition: "Boşanma yüzünden yoksulluğa düşecek olan kusuru daha az olan tarafa, diğer tarafça süresiz olarak ödenen nafaka.",
        category: "Aile"
    },
    {
        term: "Yürütmenin Durdurulması",
        definition: "İdari yargıda, idari işlemin uygulanması halinde telafisi güç zararlar doğacaksa, dava sonuçlanana kadar işlemin uygulanmasının durdurulması.",
        category: "İdare"
    },

    // --- Z ---
    {
        term: "Zamanaşımı",
        definition: "Kanunda öngörülen sürenin geçmesiyle, bir hakkın dava edilebilme veya cezalandırılabilme niteliğini kaybetmesi.",
        category: "Genel"
    },
    {
        term: "Zilyetlik",
        definition: "Bir mal üzerinde fiili hakimiyet kurma durumu (Örn: Kiracının ev üzerindeki sahipliği).",
        category: "Eşya"
    },
    {
        term: "Zorunlu Müdafilik",
        definition: "Çocuklar, sağır ve dilsizler veya kendini savunamayacak durumdakiler için avukat görevlendirilmesinin kanunen şart olması.",
        category: "Ceza"
    }
];

// Dışarıya aktarma (Eğer module sistemi kullanılsaydı)
// export default legalTerms;
