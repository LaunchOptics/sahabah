export interface Hero {
  id: string;
  name: string;
  arabicName: string;
  era: string;
  title: string;
  category: "Scholar" | "Explorer" | "Scientist" | "Leader" | "Companion";
  bio: string;
  legacy: string;
  quote: string;
  contributions: string[];
  color: string;
}

export const heroes: Hero[] = [
  {
    id: "khadijah",
    name: "Khadijah bint Khuwaylid",
    arabicName: "خَدِيجَة بِنْت خُوَيْلِد",
    era: "555 – 620 CE",
    title: "Mother of the Believers",
    category: "Companion",
    bio: "The first person to embrace Islam, Khadijah (RA) was a powerful businesswoman, devoted wife, and unwavering supporter of the Prophet ﷺ during the most difficult years of his mission.",
    legacy: "She sacrificed her entire wealth for Islam and was the Prophet's ﷺ greatest source of comfort. Her love and certainty in him never wavered, even when the whole world stood against the message.",
    quote: "By Allah, He will never disgrace you. You keep good relations with your kith and kin, help the poor and destitute, serve your guests generously, and assist those who are afflicted with calamities.",
    contributions: ["First Muslim", "Funded early Islamic dawah", "Moral backbone of the early community", "First wife of the Prophet ﷺ"],
    color: "#7c3aed",
  },
  {
    id: "ibn-battuta",
    name: "Ibn Battuta",
    arabicName: "ابن بطوطة",
    era: "1304 – 1368 CE",
    title: "The Greatest Traveler in History",
    category: "Explorer",
    bio: "Muhammad ibn Battuta traveled over 75,000 miles across three continents — more than any explorer before the age of steam. He documented the Islamic world in breathtaking detail across 30 years of travel.",
    legacy: "His book, the Rihla, is one of the most important historical documents of the medieval world. He visited over 40 modern-day countries and met sultans, scholars, and saints along the way.",
    quote: "Traveling — it leaves you speechless, then turns you into a storyteller.",
    contributions: ["Traveled 75,000+ miles", "Visited 40+ countries", "Wrote the Rihla — a world-historical document", "Documented cultures, rulers, and scholars"],
    color: "#0891b2",
  },
  {
    id: "ibn-sina",
    name: "Ibn Sina (Avicenna)",
    arabicName: "ابن سينا",
    era: "980 – 1037 CE",
    title: "Father of Early Modern Medicine",
    category: "Scientist",
    bio: "Abu Ali al-Husayn ibn Sina was a polymath who mastered medicine, philosophy, astronomy, and mathematics. He wrote the Canon of Medicine — a medical encyclopedia used in European universities for 600 years.",
    legacy: "His Canon of Medicine was the standard textbook at Oxford and Montpellier universities until the 17th century. He described the contagious nature of disease and stressed the connection between mind and body.",
    quote: "The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.",
    contributions: ["Canon of Medicine (used for 600 years)", "Discovered quarantine principles", "Major works in philosophy and logic", "Contributed to astronomy and mathematics"],
    color: "#059669",
  },
  {
    id: "salahuddin",
    name: "Salahuddin al-Ayyubi",
    arabicName: "صَلاح الدين الأيوبي",
    era: "1137 – 1193 CE",
    title: "Unifier of the Muslim World",
    category: "Leader",
    bio: "Salahuddin unified the fractured Muslim world and recaptured Jerusalem in 1187 CE — showing extraordinary mercy to its inhabitants, in sharp contrast to the Crusaders who had taken it 88 years earlier.",
    legacy: "Even his enemies respected him for his honor and chivalry. When Richard the Lionheart fell ill, Salahuddin sent him fruit and ice. He never violated a treaty and was known for his personal generosity.",
    quote: "I warn you against shedding blood, indulging in it, and making a habit of it, for blood never sleeps.",
    contributions: ["Recaptured Jerusalem (1187 CE)", "United Egypt, Syria, and the Levant", "Founded the Ayyubid Dynasty", "Known for mercy and chivalry in war"],
    color: "#b45309",
  },
  {
    id: "fatima-al-fihri",
    name: "Fatima al-Fihri",
    arabicName: "فَاطِمَة الفِهرية",
    era: "800 – 880 CE",
    title: "Founder of the World's First University",
    category: "Scholar",
    bio: "Fatima al-Fihri founded the University of al-Qarawiyyin in Fez, Morocco in 859 CE — the oldest continuously operating university in the world. She used her inheritance to fund it entirely.",
    legacy: "Al-Qarawiyyin still operates today. She fasted the entire time during its construction and only broke her fast when it was complete. She transformed education for the entire Muslim world and beyond.",
    quote: "She dedicated her life to learning and to the community — fasting until the day the university was complete.",
    contributions: ["Founded al-Qarawiyyin (859 CE)", "World's oldest university still operating", "Transformed access to Islamic education", "Inspired generations of Muslim scholars"],
    color: "#be185d",
  },
  {
    id: "ibn-khaldun",
    name: "Ibn Khaldun",
    arabicName: "ابن خلدون",
    era: "1332 – 1406 CE",
    title: "Father of Sociology & Historiography",
    category: "Scholar",
    bio: "Abd al-Rahman ibn Khaldun wrote the Muqaddimah — widely considered the greatest work ever written on history and social science. He developed theories about social cohesion, economics, and the rise and fall of civilizations 500 years before modern sociology.",
    legacy: "His concept of 'asabiyyah (social cohesion) is still studied in sociology today. He understood economics, demographics, and cultural cycles centuries before the modern world caught up.",
    quote: "Geography is the eye of history.",
    contributions: ["Wrote the Muqaddimah", "Founded sociology and historiography", "Developed economic and social theory", "Served as judge and diplomat across North Africa"],
    color: "#4f46e5",
  },
  {
    id: "imam-bukhari",
    name: "Imam al-Bukhari",
    arabicName: "الإمام البخاري",
    era: "810 – 870 CE",
    title: "Master of Hadith Sciences",
    category: "Scholar",
    bio: "Muhammad ibn Ismail al-Bukhari compiled the Sahih al-Bukhari — the most authentic book after the Quran, according to Islamic scholarship. He traveled thousands of miles, memorized over 300,000 hadith, and verified each narration with extraordinary rigor.",
    legacy: "His methodology of hadith verification remains the gold standard in Islamic scholarship. He performed two rak'at of prayer before recording every single hadith in his collection.",
    quote: "I did not record any hadith in this book without performing ablution and praying two rak'at.",
    contributions: ["Compiled Sahih al-Bukhari", "Developed hadith verification methodology", "Memorized 300,000+ hadiths", "Traveled across the Islamic world for knowledge"],
    color: "#0f766e",
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    arabicName: "الخوارزمي",
    era: "780 – 850 CE",
    title: "Father of Algebra",
    category: "Scientist",
    bio: "Muhammad ibn Musa al-Khwarizmi invented algebra and gave the world the concept of algorithms. The words 'algebra' and 'algorithm' both come directly from his name and his works.",
    legacy: "Without al-Khwarizmi, there is no computer science. His works were translated into Latin and dominated European mathematics for centuries. He also refined the Hindu-Arabic numeral system that the world uses today.",
    quote: "What is easiest and most useful in arithmetic — this is what I sought.",
    contributions: ["Invented algebra (Al-Kitab al-Mukhtasar)", "Created the concept of algorithms", "Refined the Hindu-Arabic numeral system", "Major works in astronomy and geography"],
    color: "#1d4ed8",
  },
];

export const heroCategories = ["All", "Scholar", "Explorer", "Scientist", "Leader", "Companion"] as const;
