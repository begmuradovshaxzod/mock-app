/*
  SAVOLLAR FAYLI
  ----------------------------------------------------------
  Yangi test qo'shish uchun pastdagi ro'yxatga yangi blok qo'ying
  (vergul bilan ajrating).

  skill:   "okuma" yoki "dinleme"
  title:   ro'yxatda ko'rinadigan nom
  minutes: vaqt (daqiqada)
  parts:   matnlar. Har bir matn ostida bir nechta savol bo'ladi.
    title: matn nomi (ixtiyoriy)
    text:  o'qish matni (Dinleme uchun bo'sh qoldiring)
    audio: audio fayl yo'li, masalan "audio/mock1-part1.mp3" (faqat Dinleme uchun)
    questions:
      q: savol matni
      o: 4 ta variant (A, B, C, D tartibida)
      a: to'g'ri javob harfi: "A", "B", "C" yoki "D"
      e: yechim izohi (o'zbekcha)
*/

window.EXAMS = [
  {
    id: "okuma-demo-1",
    skill: "okuma",
    title: "Okuma · Demo 1",
    minutes: 10,
    parts: [
      {
        title: "Ayşe'nin günü",
        text: "Ayşe her sabah saat yedide kalkar. Kahvaltıdan sonra otobüsle okula gider. Okulu evinden biraz uzaktır, bu yüzden yolculuk yaklaşık kırk dakika sürer. Akşam eve döndüğünde kitap okumayı sever.",
        questions: [
          {
            q: "Ayşe okula nasıl gider?",
            o: ["Yürüyerek", "Otobüsle", "Bisikletle", "Arabayla"],
            a: "B",
            e: "Matnda: «otobüsle okula gider». To‘g‘ri javob B."
          },
          {
            q: "Ayşe akşam eve döndüğünde ne yapmayı sever?",
            o: ["Televizyon izlemeyi", "Müzik dinlemeyi", "Kitap okumayı", "Yemek yapmayı"],
            a: "C",
            e: "Matnning oxirgi gapi: «kitap okumayı sever». To‘g‘ri javob C."
          }
        ]
      },
      {
        title: "Gramer",
        text: "",
        questions: [
          {
            q: "Dün arkadaşlarımla sinemaya ____.",
            o: ["gidiyorum", "gittim", "gideceğim", "gider"],
            a: "B",
            e: "«Dün» o‘tgan zamonni bildiradi, shuning uchun -di qo‘shimchasi: gittim."
          },
          {
            q: "Yarın hava güzel olursa pikniğe ____.",
            o: ["gideriz", "gittik", "gidiyorduk", "gitmiştik"],
            a: "A",
            e: "«Yarın» kelasi zamon + shart mayli (-sa). Kelasi/keng zamon: gideriz."
          }
        ]
      },
      {
        title: "Cümle",
        text: "Sınavdan önce çok ders çalıştığım için başarılı oldum.",
        questions: [
          {
            q: "Bu cümlede «için» neyi gösterir?",
            o: ["Zaman", "Sebep", "Karşılaştırma", "Şart"],
            a: "B",
            e: "«Çok ders çalıştığım için» = sabab. Natija: muvaffaqiyat."
          }
        ]
      }
    ]
  },

  {
    id: "dinleme-demo-1",
    skill: "dinleme",
    title: "Dinleme · Demo 1",
    minutes: 10,
    parts: [
      {
        title: "1-qism",
        text: "",
        audio: "",   // masalan: "audio/dinleme-demo-1.mp3"
        questions: [
          {
            q: "Konuşmacı nereye gidiyor?",
            o: ["Okula", "Markete", "Hastaneye", "Postaneye"],
            a: "B",
            e: "Bu namunaviy savol. Audio qo‘shilgach, o‘zingizning savolingizni yozing."
          }
        ]
      }
    ]
  }
];
