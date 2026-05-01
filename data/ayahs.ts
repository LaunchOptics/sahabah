export interface Ayah {
  arabic: string;
  transliteration: string;
  translation: string;
  surah: string;
  ayahNumber: string;
  theme: string;
}

export const ayahs: Ayah[] = [
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    transliteration: "Inna ma'al-'usri yusraa",
    translation: "Indeed, with hardship will be ease.",
    surah: "Al-Inshirah",
    ayahNumber: "94:6",
    theme: "Hope",
  },
  {
    arabic: "وَبَشِّرِ الصَّابِرِينَ",
    transliteration: "Wa bashshiri-s-saabireen",
    translation: "And give good tidings to the patient.",
    surah: "Al-Baqarah",
    ayahNumber: "2:155",
    theme: "Patience",
  },
  {
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    transliteration: "Allahu nooru-s-samaawaati wal-ard",
    translation: "Allah is the Light of the heavens and the earth.",
    surah: "An-Nur",
    ayahNumber: "24:35",
    theme: "Light",
  },
  {
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
    transliteration: "Wa idhaa sa-alaka 'ibaadee 'annee fa-innee qareeb",
    translation: "And when My servants ask you concerning Me — indeed I am near.",
    surah: "Al-Baqarah",
    ayahNumber: "2:186",
    theme: "Closeness to Allah",
  },
  {
    arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ",
    transliteration: "Wa laa tay-asoo mir-rawhi-llah",
    translation: "And do not despair of the mercy of Allah.",
    surah: "Yusuf",
    ayahNumber: "12:87",
    theme: "Mercy",
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    transliteration: "Fadh-kurooni adh-kurkum",
    translation: "So remember Me; I will remember you.",
    surah: "Al-Baqarah",
    ayahNumber: "2:152",
    theme: "Dhikr",
  },
  {
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
    transliteration: "Wa huwa ma'akum ayna maa kuntum",
    translation: "And He is with you wherever you are.",
    surah: "Al-Hadid",
    ayahNumber: "57:4",
    theme: "Allah's Presence",
  },
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
    transliteration: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanah",
    translation: "Our Lord, give us good in this world and good in the Hereafter.",
    surah: "Al-Baqarah",
    ayahNumber: "2:201",
    theme: "Dua",
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    transliteration: "Innallaha ma'as-saabireen",
    translation: "Indeed, Allah is with the patient.",
    surah: "Al-Baqarah",
    ayahNumber: "2:153",
    theme: "Patience",
  },
  {
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    transliteration: "Qul huwa-llahu ahad",
    translation: "Say: He is Allah, the One.",
    surah: "Al-Ikhlas",
    ayahNumber: "112:1",
    theme: "Tawheed",
  },
  {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    transliteration: "Wa maa tawfeeqee illaa billaah",
    translation: "And my success is not but through Allah.",
    surah: "Hud",
    ayahNumber: "11:88",
    theme: "Tawakkul",
  },
  {
    arabic: "إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ",
    transliteration: "Inna akramakum 'indallahi atqaakum",
    translation: "Indeed, the most noble of you in the sight of Allah is the most righteous.",
    surah: "Al-Hujurat",
    ayahNumber: "49:13",
    theme: "Taqwa",
  },
];

export function getDailyAyah(): Ayah {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return ayahs[dayOfYear % ayahs.length];
}
