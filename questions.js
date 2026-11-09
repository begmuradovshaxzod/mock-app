/*
  SAVOLLAR VA SOZLAMALAR FAYLI
  ===========================================================================
  1) PARTS   - har bir ko'nikma nechta qismdan iborat ekani (nomlarini o'zgartirish mumkin)
  2) DENEME  - "DENEME SINAVI" (to'liq imtihon). Mashq qismlari AVTOMATIK shundan olinadi:
               Okuma 1..5-qism va Dinleme 1..6-qism bo'limlari uchun alohida mashq paydo bo'ladi.
  3) EXAMS   - qo'shimcha alohida mashqlar (asosan Yazma va Konuşma uchun)

  Vaqt DAQIQADA (minutes). To'g'ri javob harfi: a:"B".
  Bo'lim (part) maydonlari:
    title, instruction (topshiriq izohi), text (umumiy matn), image (rasm yo'li),
    audio (audio yo'li), bank (A,B,C.. variantlar ro'yxati; bank bo'lsa savollarda o yozilmaydi)
  Savol (questions) maydonlari:
    q (savol matni, bo'sh bo'lishi mumkin), text (shu savolga alohida matn),
    o (variantlar ro'yxati; bank bo'lsa kerak emas), a (to'g'ri harf), e (izoh, ixtiyoriy)
*/

window.PARTS = {
  okuma:   [ {n:1,title:"1-qism"}, {n:2,title:"2-qism"}, {n:3,title:"3-qism"}, {n:4,title:"4-qism"}, {n:5,title:"5-qism"} ],
  dinleme: [ {n:1,title:"1-qism"}, {n:2,title:"2-qism"}, {n:3,title:"3-qism"}, {n:4,title:"4-qism"}, {n:5,title:"5-qism"}, {n:6,title:"6-qism"} ],
  yazma:   [ {n:1,title:"1-qism"}, {n:2,title:"2-qism"}, {n:3,title:"3-qism"} ],
  konusma: [ {n:1,title:"1-qism"}, {n:2,title:"2-qism"}, {n:3,title:"3-qism"} ]
};

const DY = ["Doğru","Yanlış"];
const DYV = ["Doğru","Yanlış","Verilmemiş"];

window.DENEME = [
{
  id:"deneme-1",
  title:"DENEME SINAVI 1",

  /* ===== OKUMA: 35 savol, 60 daqiqa ===== */
  okuma:{ minutes:60, parts:[

    { title:"1. Okuma metni · Takvimler", part:1,
      instruction:"Sorular 1-6. Metni okuyunuz ve (A–H) sözcüklerini kullanarak boşlukları (1-6) doldurunuz. Her sözcük yalnızca bir defa kullanılabilir. Seçmemeniz gereken İKİ seçenek bulunmaktadır.",
      text:"Batıl inançlar, bilimsel bir temele dayanmayan, ancak birçok insanın günlük yaşamında etkili olan inanışlardır. Tarih boyunca insanlar, doğa olaylarını ve açıklayamadıkları durumları __________ (S1) güçlerle ilişkilendirmişlerdir. Bu inançlar, nesilden nesle aktarılmış ve bazıları günümüzde bile varlığını sürdürmektedir.\n\nEn yaygın batıl inançlardan biri, kara kedinin önünden geçmesinin __________ (S2) getireceğine inanılmasıdır. Bunun kökeni Orta Çağ’a dayanır; o dönemde kara kedilerin cadılarla ilişkilendirildiği düşünülürdü.\n\nBatıl inançlar sadece kötü şansla ilgili değildir; bazıları iyi şans getirdiğine inanılan ritüelleri de içerir. Örneğin, nazar boncuğu takmak, kişiyi kötü enerjilerden koruduğuna inanılan yaygın bir gelenektir. Nazar inancı, eski Türk kültürüne dayansa da, günümüzde Türkiye'nin ________ (S3) birçok farklı kültürde de yaygındır.\n\nBatıl inançların insanlar üzerindeki etkisi oldukça __________ (S4). Özellikle önemli kararlar alınırken ya da yeni bir işe başlanırken bu inançlar dikkate alınabilir. Örneğin, yeni bir eve taşınmadan önce eve tuz dökmenin kötü ruhları uzaklaştıracağına inanılır. Benzer şekilde, merdiven altından geçmenin kötü şans getirdiğine dair inanış da hâlâ birçok insan tarafından dikkate alınmaktadır.\n\nGünümüzde bilimin ilerlemesiyle batıl inançların _______ (S5) alanı azalmış olsa da, bu ________ (S6) inançlar kültürel mirasın bir parçası olarak yaşamaya devam etmektedir. İnsanların açıklayamadıkları olaylara karşı geliştirdikleri bu inanışlar, zamanla toplumların kimliklerinin bir parçası hâline gelmiştir.",
      bank:["derin","doğaüstü","kademsizlik","çeşit","yanı sıra","etki","köylerinde","yüzeysel"],
      questions:[
        {q:"Boşluk S1", a:"B"}, {q:"Boşluk S2", a:"C"}, {q:"Boşluk S3", a:"E"},
        {q:"Boşluk S4", a:"A"}, {q:"Boşluk S5", a:"F"}, {q:"Boşluk S6", a:"D"}
      ] },

    { title:"2. Okuma metni · Durumlar ve ilanlar", part:2,
      instruction:"Sorular 7-14. Durumları (A–J) ve bilgi metinlerini (7–14) okuyunuz. Her durum için uygun metni bulunuz. Her seçenek yalnız bir defa kullanılabilir. Seçilmemesi gereken İKİ seçenek bulunmaktadır.",
      bank:[
        "Baytar olarak çalışmak istiyorsunuz.",
        "Aracınızda bir arıza var, onarmak istiyorsunuz.",
        "Kangalınız kuduz olduğunda, sorunu çözmek istiyorsunuz.",
        "Bir yakınınız, yeni ve cazip bir apartmanda bir daire kiralamak istiyor.",
        "Evinizi tamir etmek istiyorsunuz.",
        "Evinizin duvarlarını boyatmak istiyorsunuz.",
        "Gece yarısı kızınız dental implant ağrısıyla uyandı.",
        "Komşunuz, özel bir yemek masası yaptırmak istiyor.",
        "İstanbul’da sakin ve yeşil bir ortamda yeni bir daire satın almak istiyorsunuz.",
        "Lazerle göz estetik yöntemleri hakkında bilgi almak istiyorsunuz."
      ],
      questions:[
        {q:"S7", a:"I", text:"İSTANBUL-SİLİVRİSARAY EVLERİ\n\nSilivrisaray Evleri; denize sıfır konumu, büyük bahçeleri, temiz havası, güvenli, huzurlu ve keyifli ortamıyla sakinlerine yeni bir daireden ziyade, yeni bir yaşam vaat ediyor.\n\nSatılık Dairelerin Teslim Tarihi: Hemen\nDaire Sayısı: 86\nToplam Proje Alanı: 20.000 m²\n\nİletişim Bilgileri:\nTel.: 0 (212) 728 05 32\nSatış Ofisi: Fatih Mahallesi Bağlar Sokak No:2 Silivri/İSTANBUL\nwww.silivrisaray.com"},
        {q:"S8", a:"D", text:"SARİSSA İSTANBUL\n\n“Sarissa İstanbul” adı, üç bloğun birbirine bir kuşakla sarılmış gibi bağlandığı mimarisiyle özdeşleşmiştir. 14.000 m² üzerinde biri saray konut, toplam beş blok ve 398 kiralık konuttan oluşan Sarissa İstanbul, işlevselliği ve eşsiz estetik tasarımıyla her anını keyifle yaşayacağınız bir kent…\n\nİletişim Bilgileri:\nTelefonlar: 0 (216) 415 13 10 – 0 (216) 415 13 08\nTemas Ofisi: Turcan Caddesi Hisar Sokak No:10 34775 Ümraniye/İSTANBUL\nİnternet adresi: www.sarissa.com.tr\nİlgili Kişi: Işıl Vaizoğlu"},
        {q:"S9", a:"A", text:"Hayvan hastanemize tecrübeli ya da tecrübesiz bayan veteriner hekim ve bayan veteriner sağlık teknisyenleri alınacaktır.\nÇalışma Şekli: Tam Zamanlı\nCinsiyet / Yaş: Bayan / 20–35 Yaş\n\nGold Dog Hospital\nFerdi Uludağ\nTel.: 0 (212) 6625510\nE-posta: ferdiuludag@hotmail.com"},
        {q:"S10", a:"F", text:"Binalarınızın dışında yapacağımız uygulama ile birlikte nem veya rutubet problemlerinize kesin çözümler getirmekteyiz.\n\nAyrıntılı bilgi için bizleri arayın, tanıtım elemanlarımız ve teknik personelimiz sizleri bilgilendirsinler.\n\nASA-MAR İnşaat\nCihangir/İSTANBUL\nTel. ve Fax: 0 (232) 463 48 68 (Pbx)\nŞube: 0 (232) 254 53 53"},
        {q:"S11", a:"G", text:"Hospident\n\nHer Türlü Diş Tedavi Hizmetleri\nAğız, Diş ve Çene Cerrahisi\n(Diş) Beyazlatma\nLazer Uygulamaları\nEstetik Diş Hekimliği ve Protez Uygulamaları\n\n7 gün-24 saat hizmet veren Hospident’i günün her saatinde arayabilirsiniz.\nTel.: 0 (212) 444 98 22"},
        {q:"S12", a:"C", text:"İstanbul MERKEZ VETERİNER KLİNİĞİ\n\n1996 yılında kurulmuş olan Merkez Veteriner Kliniği, Erdal Çalışkan ve Mehmet Çevik ortaklığı olup alanında bölgemizin lider kuruluşudur.\n\nÜrün ve Hizmetleri Hakkında:\n• Tüm evcil hayvanların tedavileri\n• Veteriner ilaçları satışı (hayvan sağlığında kullanılan tüm ürünler)\n• Köpek ve kedi mamaları\n• Dezenfektanlar – hijyen ürünleri\n• Koruyucu aşılamalar – ilaçlamalar\n• Koruyucu hekimlik, danışmanlık\nTel.: 0 (282) 260 49 91"},
        {q:"S13", a:"B", text:"Turay Oto Tamir, Bakım ve Yardım\n\nHer türlü araç tamir ve bakımı itinayla yapılır. Yol yardım hizmetimiz ile 12-24 ve haftanın 7 günü hizmetinizdeyiz.\nYolda kaldığınız zaman Muhittin Usta’ya ulaşın! Nerede olursanız olun, Muhittin olunca korkmanıza gerek yok!\n\nİstanbul\nTel.: 0 (212) 347 98 25"},
        {q:"S14", a:"H", text:"Ahşap Dekorasyon İstanbul\n\nİsteklerinize uygun, her konuma hitap eden; kaliteli, garantili, estetik, tatmin edici ve en ince noktaya kadar dikkatle hazırladığımız ahşap ürünlerini sizlere sunuyoruz.\n\nBize ulaşmak çok kolay! Hemen 0 536 540 97 84 numaralı telefonumuzdan bilgi alabilirsiniz."}
      ] },

    { title:"3. Okuma metni · Olimpiyat Oyunları 2024", part:3,
      instruction:"Sorular 15-20. Başlıkları (A-H) ve paragrafları (15-20) okuyunuz. Her paragraf için uygun bir başlık bulunuz. Her başlık yalnız bir defa kullanılabilir.",
      bank:[
        "Özbekistan’da Olimpiyat Ruhunun Modern Spor Üzerindeki Etkileri",
        "Paris 2024’te Sürdürülebilirlik Projelerinin Rolü",
        "Yeni Kuşağı Meraklandıran Spor Dalları",
        "Genç Sporcuların Olimpik Başarı Dinamikleri",
        "Sunulan Yeni Olanaklar",
        "Sporun Toplumlararası İlişkilere Etkisi",
        "Özbekistan’ın Paris 2024’teki Hedefleri",
        "Yenilikçi Olimpiyat Stratejileri"
      ],
      questions:[
        {q:"I. paragraf", a:"B", text:"Paris 2024 Olimpiyat Oyunları, modern olimpiyat tarihinin en önemli etkinliklerinden biri olarak kabul ediliyor. Bu oyunlar, Paris’in üçüncü kez ev sahipliği yaptığı oyunlar olarak tarihe geçecek. Ancak Paris 2024, sadece tarihi bir olay olmanın ötesinde, yenilikçi yaklaşımları ve çevre dostu projeleriyle de dikkat çekiyor. Sürdürülebilirlik, oyunların merkezinde yer alıyor ve kullanılan malzemelerin büyük çoğunluğu geri dönüştürülebilir olacak şekilde tasarlandı. Olimpiyat Köyü, enerji verimliliği göz önünde bulundurularak inşa edildi ve oyunlar sırasında çevreye verilen zararın minimuma indirgenmesi hedeflendi. Paris 2024, bu anlamda sadece bir spor etkinliği değil, aynı zamanda gelecekteki uluslararası organizasyonlara örnek teşkil edecek bir model olarak da görülüyor."},
        {q:"II. paragraf", a:"C", text:"Paris 2024, yenilikçi spor dallarını olimpiyatlara ekleyerek genç kuşağın ilgisini çekmeye çalışıyor. Özellikle tırmanış, kaykay, sörf gibi sporlar, olimpiyat tarihinde ilk kez resmi birer branş olarak yer alacak. Bu yenilikler, olimpiyat ruhunu korurken aynı zamanda oyunların gençler arasında popülerliğini artırmayı hedefliyor. Paris 2024, bu anlamda sadece geleneksel sporları değil, aynı zamanda gençlerin tutkuyla ilgilendiği sporları da kucaklıyor. Bu yeniliklerin olimpiyat oyunlarının evriminde nasıl bir rol oynayacağı, ilerleyen yıllarda daha net görülecek."},
        {q:"III. paragraf", a:"G", text:"Özbekistan, Paris 2024 Olimpiyatları’nda madalya sıralamasında önemli bir yer edinmeyi hedefliyor. Özellikle boks, judo ve halter gibi branşlarda başarı gösteren Özbek sporcular, Tokyo 2020’de elde ettikleri başarıyı Paris’te sürdürmeyi planlıyor. Tokyo'da altın madalya kazanan halterci Akbar Djuraev, Paris’te de büyük bir başarı elde etmeyi amaçlıyor. Bahodir Jalolov, boks dalında Tokyo’daki altın madalyasının ardından Paris'te unvanını korumak için mücadele edecek. Ayrıca, Özbekistan judo takımı da Paris 2024’te madalya için mücadele edecek. Özbekistan, sporculara yaptığı yatırımlarla dikkat çekiyor ve olimpiyatlardaki varlığını güçlendirmeyi amaçlıyor."},
        {q:"IV. paragraf", a:"E", text:"Paris 2024 Olimpiyat Köyü, sporcuların hem fiziksel hem de mental olarak rahat etmeleri için özel olarak tasarlandı. Köyde kullanılan malzemeler tamamen geri dönüştürülebilir olup, enerji verimliliği göz önünde bulundurularak inşa edildi. Sporcuların dinlenmesi ve sosyal aktivitelerde bulunması için özel alanlar yaratıldı. Ayrıca, Paris’in kültürel zenginlikleriyle iç içe olan bu köy, sporculara eşsiz bir olimpiyat deneyimi sunmayı hedefliyor. Sporcular, yarışlardan arta kalan zamanlarında Paris'in tarihi dokusunu keşfetme imkânına sahip olacak. Bu sayede, sadece fiziksel olarak değil, aynı zamanda kültürel anlamda da zengin bir deneyim yaşamaları sağlanacak."},
        {q:"V. paragraf", a:"F", text:"Olimpiyat Oyunları, sadece bir spor etkinliği değil, aynı zamanda kültürlerarası etkileşimin ve barışın sembolüdür. Paris 2024, bu mirası sürdürerek dünya genelinden sporcuları ve izleyicileri bir araya getirecek. Farklı kültürlerin buluştuğu bu platformda, spor aracılığıyla dayanışma ve dostluk ilişkileri güçleniyor. Paris’in tarihi atmosferi, oyunlara ev sahipliği yaparken, olimpiyat ruhunu daha da anlamlı kılıyor. Olimpiyatların evrensel dili, farklı ülkelerden gelen sporcuları bir araya getirerek küresel dayanışmanın en büyük göstergelerinden biri olarak kabul ediliyor. Paris 2024, bu anlamda olimpiyatların sosyal etkilerini derinlemesine hissettirecek bir etkinlik olacak."},
        {q:"VI. paragraf", a:"D", text:"Paris 2024 Olimpiyatları, Özbek sporcular için bir başarı sahnesi olacak. Özellikle genç sporcuların dikkat çekici performansları, ülkenin spor alanındaki büyümesini simgeliyor. Halterde Akbar Djuraev, boks dalında Bahodir Jalolov ve judoda Diyorbek Urozboev gibi sporcular, madalya umutlarını canlı tutuyor. Özbekistan’ın Paris’teki performansı, ülkenin spora yaptığı yatırımların ve genç yeteneklerin keşfinin ne denli önemli olduğunu gösteriyor. Özbek sporcuların bu başarısı, gelecek nesillere ilham verecek nitelikte ve olimpiyat oyunları tarihinde kalıcı bir iz bırakacak."}
      ] },

    { title:"4. Okuma metni · Dünüyle Bugünüyle Halk Oyunları ve Dans", part:4,
      instruction:"21-29. sorular için metni okuyunuz. 21-24: doğru seçeneği işaretleyiniz. 25-29: cümleler metne göre DOĞRU, YANLIŞ ya da VERİLMEMİŞ olabilir.",
      text:"Dünya tek bir hareketle ortaya çıktı. Sonra bu ilk hareket bir ritim tutturdu, insanlık tarihi boyunca renklerini değiştirerek, kendini geliştirerek varlığını sürdürmeye devam etti. Yeryüzünde hareketin başladığı andan itibaren insanın içinde bu ritim aslında hep vardı. İlk insanlar önce tepindiler, ellerini çırptılar ve çıkan seslere kulak vererek yaptıkları hareketleri anlamaya çalıştılar. Dansın en ilkel hâli, Neolitik Çağ insanlarının hareketlerinde saklı değil mi? Avlayacağı hayvanın neye benzediğini, nasıl saldırdığını, koştuğunu, atlayıp zıpladığını taklit yoluyla anlatmaya çalışan ilk insanlar, dansın en ilkel hâlini sergilemiyorlar mıydı? İnsanın gökyüzüyle dansına ne demeli? Gökyüzünün öfkeli bir gürültü ve ışık selinin arkasından, beklenmedik bir sürprizle yağmuru armağan etmesi veya büyük bir rüzgârla her şeyi silip süpürmesi, insanoğlunu hayrete düşürmüş. Tüm bu olanlar karşısında insan, heyecanını, korkularını veya sevincini beden hareketleriyle anlatma ihtiyacı duymuş ve dansın henüz adı konmadan ilk örnekleri ortaya çıkmıştır.\n\nZaman içinde dinî törenler, tapınmalar ve ibadet biçimleri, ham hâldeki dansın gelişimine katkı sağlamıştır. Yinelediği ritmik hareketlerin doğaüstü etkileri olduğunu fark eden insan, her ritüelde bu gizemli gücü yeniden yarattığı duygusuna kapılmış, dansı büyülü kılmıştır. Antik Çağ’daki bir rahibin kollarını yukarı kaldırıp döne döne tanrılara yakarışı, Orta Asya’daki bir Şaman’ın, ateşin etrafında dönerek düşmanın uzaklaşması için tanrıdan yardım dileyişi, dansı ilkel olmaktan kurtarıp, ona bilinç ve gelişme kazandıran ilk örnekler arasında yer almıştır. Uygarlıklar geliştikçe, toplum hayatı ve toplum kuralları şekillendikçe, dansta da birtakım kurallar ortaya çıktı. Dansın, kuralları olan bir sanat olarak ortaya çıkışı, Rönesans Dönemi’ne dayanmaktadır. 16. yüzyılda Fransız ve İtalyan besteciler, yalnız dans için besteler yapmaya başladılar. Rönesans’ın bizlere kazandırdığı zarafetin dansı Bale insanları kendine hayran bırakarak dansın yolunu açtı. Tüm dünyaya hızla yayılan dans, o yıllarda bazı tabuları bile yıkacak güce ulaştı. Cüretkâr figürler içeren “Volta” dansını çok beğenen İngiltere Kraliçesi I. Elizabeth, bu beğenisiyle din adamlarını dehşete düşürdü.\n\nFransız Devriminin getirdiği yeniliklerden dans sanatı da payına düşeni aldı. Dans tarihinin gönülleri fetheden türlerinden Viyana kökenli “Vals” ve Çek kökenli “Polka” bütün Batı’yı kasıp kavurdu. 19. yüzyılda, Brezilya’dan esen “Samba” rüzgârı ve Arjantin’in fakir işçi sınıfından doğan, hayal kırıklığı, asilik ve hırçınlığın dansı “Tango”, dans dünyasındaki ölümsüz yerlerini aldılar. II. Dünya Savaşı’ndan sonra dans, yeni dünyada yeniden kendi dünyasını kurdu. Dans salonları “Rock’n Roll” ve “Twist”le sallandı. Gençlerin kanını kaynatacak dansların ardı arkası kesilmedi. 20. yüzyılın ikinci yarısında, hızla gelişme gösteren ve çeşitlenen danslar birer uzmanlık alanı hâline gelerek büyük bir heyecan ve hevesle öğretilen-öğrenilen bir kimlik kazandı. Dans kursları açıldı. Danslar hangi müzikle icra ediliyorsa o isimle anılmaya, kategorilere ayrılmaya başlandı. Dans federasyonları kuruldu ve ülkeler arası dans şampiyonaları düzenlenmeye başlandı. Dansla ilgili dünyadaki tüm bu gelişmelerin, Türkiye’de de yansımalarını görebiliriz. Ancak Türk kültürü ve geleneklerinin hayat bulduğu dans türlerinin, bilhassa Anadolu’daki dansın, temelde üç ayrı kültür etkisinde kaldığı görülmektedir. Eski Anadolu uygarlıkları, Orta Asya’daki Şaman kültürü ve İslam dini, Anadolu’daki dans kültürünün oluşumuna etkide bulunmuşlardır. Bu bağlamda tek bir tarz ve biçimden bahsetmek oldukça zordur. İçinde bulunduğu çok kültürlülük ortamı dolayısıyla Türkiye’de dans, çok farklı görünümler sergilemektedir. Ege’de ağır ve mağrur bir duruş sergileyen “Zeybek”, Trakya’da dokuz sekizlik darbuka ritmiyle can bulan kıvrak figürlerle süslü “Roman Havası”, Karadeniz’de hızlı ve sert adımlarla oynanan “Horon”… Bunlar gibi daha niceleri, duyguların farklı dile getirilişinin örneklerini bizlere sunuyor. Vücut dili, kimi zaman tango, kimi zaman sambayla konuşuyor. Bazen bale, bazen de halayda hayat buluyor. Ama sonunda tüm danslar bir araya gelip 29 Nisan’da buluşuyor. Dans dünyasına büyük katkı sağlayan ünlü bir Fransız dansçı ve koreografın doğum günü olan bu tarih, 1982’den bu yana, tüm dünyada “Dünya Dans Günü” olarak kutlanıyor. İnsanlığın varoluşu ile ortaya çıkan ve günümüzün sevilen sanatları arasında gösterilen dans, ona eşlik eden müziği ile kulakların pasını silmiş, estetik ve ritmik hareketleri ile göz doldurmuştur.",
      questions:[
        {q:"S21. Metnin bütününe göre aşağıdaki yargılardan hangisine varılamaz?", a:"C", o:[
          "Dans sanatı zaman içinde daha da modernleşip gelişme göstermiş ve tüm dünyaya yayılmıştır.",
          "Eski insanlar dansın tılsımına inandıkları için dinî ritüellerinde ondan yararlanmışlardır.",
          "Dans, dünyadaki çok kültürlülük ortamından pek etkilenmemiş, aksine insanları tek bir kültür etrafında toplamıştır.",
          "Dansın gücü özgür düşüncenin önündeki kemikleşmiş bazı düşünceleri kırmayı başarmıştır."]},
        {q:"S22. Metinde geçen “yeni dünyada yeniden kendi dünyasını kurmak” sözüyle ne anlatılmaktadır?", a:"B", o:[
          "Bir sebeple bir yerde yeniden hayata başlamak",
          "Yenilenen dünyada yeniden kendi düzenini kurmak",
          "Başka bir coğrafyada kendi kurallarıyla yaşamak",
          "Dünyaya ayak uydurmayarak kendi kurallarıyla yaşamak"]},
        {q:"S23. Aşağıdakilerden hangisinde Avrupa ve Asya’daki dans ve onlara verilen vasıflandırmalar birbirine uyumsuzdur?", a:"A", o:[
          "Üst kademe sınıfından doğan, hayal kırıklığı, asilik ve hırçınlığın dansı “Tango”",
          "Ağır ve gururlu bir duruş sergileyen “Zeybek”",
          "Çevik figürlerle süslü “Roman Havası”",
          "Hızlı ve haşin adımlarla oynanan “Horon”"]},
        {q:"S24. Metne göre, aşağıdaki bilgilerden hangisi doğrudur?", a:"C", o:[
          "Dans, bilinçli gerçekleştirilen ve kuralları olan bir hareket olarak ortaya çıkmıştır.",
          "Farklı ülkelerde ortaya çıkan danslar, sadece o ülkede ses getirmiştir.",
          "20. yüzyılın sonlarına doğru dans sanatı, dünyada herkesin ortak bir günde kutladığı özel ve önemli bir güne kavuşmuştur.",
          "Türkiye’de dans, daha çok Batı etkisinde gelişme göstermiştir."]},
        {q:"S25. Dansın ilk örnekleri dini törenler ve ibadetlerle ilgili olarak ortaya çıkmıştır.", a:"B", o:DYV},
        {q:"S26. Dans, insanlığın varoluşundan bu yana sürekli olarak müzikle birlikte icra edilmiştir.", a:"C", o:DYV},
        {q:"S27. İlk insanlar hayvanları avlamadan önce onların hareketlerini taklit etmek suretiyle dans etmişlerdir.", a:"A", o:DYV},
        {q:"S28. Anadolu'daki dans kültürü, iki etkenden, Orta Asya’daki Şaman kültürü ve İslam dininden etkilenmiştir.", a:"B", o:DYV},
        {q:"S29. Dansın bilinç ve gelişme kazanması 
