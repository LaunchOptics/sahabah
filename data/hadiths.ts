export interface Hadith {
  arabic: string;
  translation: string;
  narrator: string;
  source: string;
  theme: string;
}

export const hadiths: Hadith[] = [
  {
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    translation: "Actions are judged by intentions.",
    narrator: "Umar ibn al-Khattab (RA)",
    source: "Bukhari & Muslim",
    theme: "Intention",
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    translation: "A Muslim is the one from whose tongue and hand other Muslims are safe.",
    narrator: "Abdullah ibn Amr (RA)",
    source: "Bukhari",
    theme: "Character",
  },
  {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    translation: "The best of you are those who learn the Quran and teach it.",
    narrator: "Uthman ibn Affan (RA)",
    source: "Bukhari",
    theme: "Quran",
  },
  {
    arabic: "الدِّينُ النَّصِيحَةُ",
    translation: "Religion is sincere advice.",
    narrator: "Tamim al-Dari (RA)",
    source: "Muslim",
    theme: "Sincerity",
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْراً أَوْ لِيَصْمُت",
    translation: "Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    narrator: "Abu Hurairah (RA)",
    source: "Bukhari & Muslim",
    theme: "Speech",
  },
  {
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    translation: "Seeking knowledge is an obligation upon every Muslim.",
    narrator: "Anas ibn Malik (RA)",
    source: "Ibn Majah",
    theme: "Knowledge",
  },
  {
    arabic: "الصَّبْرُ نِصْفُ الإِيمَانِ",
    translation: "Patience is half of faith.",
    narrator: "Abu Musa al-Ash'ari (RA)",
    source: "Bayhaqi",
    theme: "Patience",
  },
  {
    arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    translation: "Indeed Allah is Beautiful and loves beauty.",
    narrator: "Ibn Mas'ud (RA)",
    source: "Muslim",
    theme: "Beauty",
  },
  {
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    translation: "Be in this world as if you were a stranger or a traveler.",
    narrator: "Ibn Umar (RA)",
    source: "Bukhari",
    theme: "Dunya",
  },
  {
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translation: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Anas ibn Malik (RA)",
    source: "Bukhari & Muslim",
    theme: "Brotherhood",
  },
];

export function getDailyHadith(): Hadith {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return hadiths[(dayOfYear + 3) % hadiths.length];
}
