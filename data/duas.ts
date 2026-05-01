export interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  occasion: string;
  source: string;
  category: DuaCategory;
}

export type DuaCategory =
  | "Morning & Evening"
  | "Prayer"
  | "Eating & Drinking"
  | "Studying"
  | "Anxiety & Hardship"
  | "Gratitude"
  | "Entering & Leaving"
  | "Travel"
  | "Sleep";

export const duas: Dua[] = [
  // Morning & Evening
  {
    id: "morning-1",
    title: "Waking Up",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transliteration: "Alhamdu lillaahil-ladhee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor",
    translation: "All praise is for Allah who gave us life after death and to Him is the resurrection.",
    occasion: "Immediately upon waking up",
    source: "Bukhari",
    category: "Morning & Evening",
  },
  {
    id: "morning-2",
    title: "Morning Remembrance",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
    transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah",
    translation: "We have reached the morning, and the sovereignty belongs to Allah, and all praise is for Allah.",
    occasion: "In the morning",
    source: "Muslim",
    category: "Morning & Evening",
  },
  {
    id: "evening-1",
    title: "Evening Remembrance",
    arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    transliteration: "Allahumma bika amsaynaa wa bika asbahnaa wa bika nahyaa wa bika namootu wa ilayka-l-maseer",
    translation: "O Allah, by You we enter the evening and by You we enter the morning, by You we live and by You we die, and to You is the final destination.",
    occasion: "In the evening",
    source: "Tirmidhi",
    category: "Morning & Evening",
  },
  // Eating & Drinking
  {
    id: "eating-before",
    title: "Before Eating",
    arabic: "بِسْمِ اللهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah.",
    occasion: "Before every meal",
    source: "Bukhari & Muslim",
    category: "Eating & Drinking",
  },
  {
    id: "eating-after",
    title: "After Eating",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلا قُوَّةٍ",
    transliteration: "Alhamdu lillaahil-ladhee at'amanee haadha wa razaqaneehi min ghayri hawlin minnee wa laa quwwah",
    translation: "All praise is for Allah who fed me this and provided it for me without any might or power on my part.",
    occasion: "After finishing a meal",
    source: "Abu Dawud & Tirmidhi",
    category: "Eating & Drinking",
  },
  // Studying
  {
    id: "study-1",
    title: "Before Studying",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidnee 'ilmaa",
    translation: "My Lord, increase me in knowledge.",
    occasion: "Before studying or seeking knowledge",
    source: "Quran 20:114",
    category: "Studying",
  },
  {
    id: "study-2",
    title: "For Understanding",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    transliteration: "Allahumma innee as-aluka 'ilman naafi'an wa rizqan tayyiban wa 'amalan mutaqabbala",
    translation: "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
    occasion: "Morning dua for students",
    source: "Ibn Majah",
    category: "Studying",
  },
  // Anxiety & Hardship
  {
    id: "anxiety-1",
    title: "When Anxious or Distressed",
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration: "Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen",
    translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    occasion: "Dua of Yunus (AS) from inside the whale — for any hardship",
    source: "Quran 21:87 & Tirmidhi",
    category: "Anxiety & Hardship",
  },
  {
    id: "anxiety-2",
    title: "For Relief",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallaahu wa ni'mal-wakeel",
    translation: "Allah is sufficient for us, and He is the best Disposer of affairs.",
    occasion: "When overwhelmed or facing difficulty",
    source: "Bukhari",
    category: "Anxiety & Hardship",
  },
  // Gratitude
  {
    id: "gratitude-1",
    title: "General Gratitude",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ",
    transliteration: "Alhamdu lillaahil-ladhee bini'matihi tatimmus-saalihaat",
    translation: "Praise be to Allah by whose blessing good things are completed.",
    occasion: "When something good happens",
    source: "Ibn Majah",
    category: "Gratitude",
  },
  // Prayer
  {
    id: "prayer-1",
    title: "Before Entering the Masjid",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    transliteration: "Allahummaf-tah lee abwaaba rahmatik",
    translation: "O Allah, open the gates of Your mercy for me.",
    occasion: "When entering the masjid",
    source: "Muslim",
    category: "Prayer",
  },
  // Entering & Leaving
  {
    id: "home-entering",
    title: "Entering Home",
    arabic: "بِسْمِ اللهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى اللهِ رَبِّنَا تَوَكَّلْنَا",
    transliteration: "Bismillaahi walajna wa bismillaahi kharajna wa 'alallaahi rabbinaa tawakkalnaa",
    translation: "In the name of Allah we enter, and in the name of Allah we leave, and upon Allah our Lord we place our trust.",
    occasion: "When entering your home",
    source: "Abu Dawud",
    category: "Entering & Leaving",
  },
  // Sleep
  {
    id: "sleep-1",
    title: "Before Sleeping",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika-llahumma amootu wa ahyaa",
    translation: "In Your name, O Allah, I die and I live.",
    occasion: "When lying down to sleep",
    source: "Bukhari",
    category: "Sleep",
  },
  {
    id: "sleep-2",
    title: "Ayat al-Kursi Before Sleep",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    transliteration: "Allahu laa ilaaha illaa huwal-hayyul-qayyoom",
    translation: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence.",
    occasion: "Recite Ayat al-Kursi before sleep — a guardian angel protects you until morning",
    source: "Bukhari",
    category: "Sleep",
  },
  // Travel
  {
    id: "travel-1",
    title: "When Traveling",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ",
    transliteration: "Subhaanal-ladhee sakhkhara lanaa haadha wa maa kunnaa lahu muqrineen wa innaa ilaa rabbinaa lamunqaliboon",
    translation: "Glory be to the One who has subjected this to us, and we could not have done it ourselves. And indeed to our Lord we will return.",
    occasion: "When boarding a vehicle or beginning a journey",
    source: "Muslim",
    category: "Travel",
  },
];

export const duaCategories: DuaCategory[] = [
  "Morning & Evening",
  "Prayer",
  "Eating & Drinking",
  "Studying",
  "Anxiety & Hardship",
  "Gratitude",
  "Entering & Leaving",
  "Travel",
  "Sleep",
];
