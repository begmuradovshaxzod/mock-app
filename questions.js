/*
  SAVOLLAR VA SOZLAMALAR (asosiy fayl)
  ============================================================
  Bu fayl: qismlar nomi (PARTS), DENEME sozlamalari (vaqt, Yazma, Konuşma) va qo'shimcha mashqlar (EXAMS).
  Okuma va Dinleme savollari alohida fayllarda: okuma-1.js, okuma-2.js, ..., dinleme-1.js.
  Vaqt DAQIQADA (minutes). Dinleme vaqti: audio uzunligi + extra daqiqa.
  Yangi fayl qo'shsangiz, pastdagi FILES ro'yxatiga nomini yozing.
*/

window.PARTS = {
 "okuma": [
  {
   "n": 1,
   "title": "1-qism"
  },
  {
   "n": 2,
   "title": "2-qism"
  },
  {
   "n": 3,
   "title": "3-qism"
  },
  {
   "n": 4,
   "title": "4-qism"
  },
  {
   "n": 5,
   "title": "5-qism"
  }
 ],
 "dinleme": [
  {
   "n": 1,
   "title": "1-qism"
  },
  {
   "n": 2,
   "title": "2-qism"
  },
  {
   "n": 3,
   "title": "3-qism"
  },
  {
   "n": 4,
   "title": "4-qism"
  },
  {
   "n": 5,
   "title": "5-qism"
  },
  {
   "n": 6,
   "title": "6-qism"
  }
 ],
 "yazma": [
  {
   "n": 1,
   "title": "1-qism"
  },
  {
   "n": 2,
   "title": "2-qism"
  },
  {
   "n": 3,
   "title": "3-qism"
  }
 ],
 "konusma": [
  {
   "n": 1,
   "title": "1-qism"
  },
  {
   "n": 2,
   "title": "2-qism"
  },
  {
   "n": 3,
   "title": "3-qism"
  }
 ]
};

window.DENEME = [{
 "id": "deneme-1",
 "title": "DENEME SINAVI 1",
 "okuma": {
  "minutes": 60,
  "parts": []
 },
 "dinleme": {
  "extra": 10,
  "parts": []
 },
 "yazma": {
  "minutes": 60,
  "tasks": [
   {
    "title": "Task 1.1 · norasmiy xat",
    "prompt": "Arkadaşınıza Türkiye’de yaptığınız tatili anlatan bir e-posta yazınız. Nereye gittiğinizi, ne yaptığınızı ve neden beğendiğinizi anlatınız.",
    "words": "100-120"
   },
   {
    "title": "Task 1.2 · rasmiy xat",
    "prompt": "(Bu topshiriqni o‘zingiz tahrirlaysiz.)",
    "words": "100-120"
   },
   {
    "title": "Part 2 · esse",
    "prompt": "Teknolojinin hayatımıza etkileri hakkında düşüncelerinizi yazınız.",
    "words": "180-200"
   }
  ]
 },
 "konusma": {
  "minutes": 15,
  "items": [
   {
    "title": "1-qism",
    "prompt": "Kendinizi tanıtın ve ailenizden bahsedin."
   },
   {
    "title": "2-qism",
    "prompt": "Boş zamanlarınızda neler yapmayı seversiniz? Neden?"
   },
   {
    "title": "3-qism",
    "prompt": "Şehirde mi yoksa köyde mi yaşamayı tercih edersiniz? Neden?"
   }
  ]
 }
}];

window.EXAMS = [
 {
  "id": "yazma-1-demo",
  "skill": "yazma",
  "part": 1,
  "title": "Yazma · 1-qism · Demo",
  "minutes": 20,
  "tasks": [
   {
    "title": "Task 1.1",
    "prompt": "Arkadaşınıza Türkiye’de yaptığınız tatili anlatan bir e-posta yazınız.",
    "words": "100-120"
   }
  ]
 },
 {
  "id": "konusma-1-demo",
  "skill": "konusma",
  "part": 1,
  "title": "Konuşma · 1-qism · Demo",
  "minutes": 5,
  "items": [
   {
    "title": "Savol 1",
    "prompt": "Kendinizi tanıtın: adınız, yaşınız, mesleğiniz ve hobileriniz nelerdir?"
   }
  ]
 }
];

/* Savollar fayllari (ketma-ket yuklanadi) */
(function(){
  var FILES = ["okuma-1.js","okuma-2.js","okuma-3.js","okuma-4.js","dinleme-1.js"];
  FILES.forEach(function(n){ document.write('<script src="'+n+'?t='+Date.now()+'"><\/script>'); });
})();
