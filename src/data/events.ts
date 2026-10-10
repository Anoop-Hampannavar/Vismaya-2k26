import { EventItem, EventCoordinatorGroup, Leadership } from '@/lib/types';

export const schedule: EventItem[] = [
  {
    day: 1,
    date: "12th October 2K26 (Monday)",
    title: "INAUGURATION OF VISMAYA ✂️🎉",
    theme: "Opening Ceremony, Flash Mob & Food Fest",
    venue: "OPEN AIR THEATRE",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfsF1dJhtKWpHe5nep1b2C84moqozoMwzQWmP92LLaZbOyDDg/viewform",
    details: "🎙️ 11:00 AM to 12:00 PM: Flash Mob & Grand Inauguration. 🍴 12:00 PM to 4:00 PM: Food Fest & Mind Games. Support your friends' culinary skills and sharpen your mind!"
  },
  {
    day: 2,
    date: "13th October 2K26 (Tuesday)",
    title: "CHARACTER DAY 🎭🎬",
    theme: "Dress up as Favorite Film Characters",
    venue: "COLLEGE CAMPUS",
    img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLScjlH1gAWUtN21xZVYzLP7zq3Bp0uqB9jjkLyN5yffGf4ajeQ/viewform",
    details: "🚶 11:00 AM to 12:00 PM: Ramp Walk (Show off your iconic costumes). 🎁 2:00 PM to 5:00 PM: Treasure Hunt. Explore the campus clues to claim victory!"
  },
  {
    day: 3,
    date: "14th October 2K26 (Wednesday)",
    title: "SQUAD DAY 🏏⚔️",
    theme: "Unity, Box Cricket & Tug of War",
    venue: "CAMPUS GROUND",
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfDfCeH0ponsYBcM7qfpd83gYZA5XNuRSq6jBN9oYqfxvqQJA/viewform",
    details: "🏏 10:00 AM to 1:00 PM: Box Cricket showdown. 🪢 2:00 PM to 5:00 PM: Tug of War battle of pure strength between departments!"
  },
  {
    day: 4,
    date: "15th October 2K26 (Thursday)",
    title: "JERSEY DAY ⚽🏆",
    theme: "Penalty Shootout / Ball Kick Challenge",
    venue: "CAMPUS ARENA",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfDdRlG2MxZPFJO-uXZrRDQ5HV5Yld38hmHZ9Ie289PL8tURw/viewform",
    details: "⚽ 11:00 AM – 1:00 PM: Penalty Shootout / Ball Kick Challenge. Set up a mini goalpost on campus where participants in jerseys try to score against a student goalkeeper!"
  },
  {
    day: 5,
    date: "16th October 2K26 (Friday)",
    title: "ಕನ್ನಡ ಸುಗ್ಗಿ ಸಂಭ್ರಮ 🚩🌾",
    theme: "Traditional Day & Kannada Suggi Sambhrama",
    venue: "OPEN AIR THEATRE",
    img: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1200&auto=format",
    regLink: "",
    details: "🟡🔴 10:00 AM – 2:00 PM: Traditional Karnataka attire, culture, traditional music, and celebrating the spirit of the land."
  }
];

export const eventCoordinators: EventCoordinatorGroup[] = [
  {
    event: "Inauguration (Flex & Flash Mob)",
    contacts: [
      { name: "Santosh Kotinatot (ME)", phone: "7676043085" },
      { name: "Omkar Jaganur (EEE)", phone: "9741012245" },
      { name: "Shreyas Upadhye", phone: "9482340883" },
      { name: "Anoop Hampannavar (CSE)", phone: "7760926543" }
    ]
  },
  {
    event: "Food Fest",
    contacts: [
      { name: "Rohit Sankeshwari (ECE)", phone: "8867036321" },
      { name: "Ritika Aparadh", phone: "7259132105" },
      { name: "Megha Sakkappanavar", phone: "8971103175" },
      { name: "Shyamgouda Ningnuri (ECE)", phone: "8618660605" }
    ]
  },
  {
    event: "Mind Games",
    contacts: [
      { name: "Vaishnavi Patil", phone: "8310950175" },
      { name: "Ashwat B.", phone: "9591193066" },
      { name: "Preeti Dhanawadi" }
    ]
  },
  {
    event: "Ramp Walk",
    contacts: [
      { name: "Rakhi Naik (ECE)", phone: "9448746822" },
      { name: "Srushti Hunashyal (CSE)", phone: "7019856323" },
      { name: "Pramod Pujari (CSE)", phone: "7795516587" },
      { name: "Karthik Uramanatti (ECE)", phone: "8431439932" },
      { name: "Anchan (ECE)" }
    ]
  },
  {
    event: "Treasure Hunt",
    contacts: [
      { name: "Basavaraj Nerli", phone: "9148699665" },
      { name: "Akash Hiremath", phone: "9663938442" },
      { name: "Sanjana Dhage", phone: "7204706531" },
      { name: "Amruta Prabhunatti" },
      { name: "Gundu Yadolli" }
    ]
  },
  {
    event: "Box Cricket",
    contacts: [
      { name: "Suraj Huddar (CSE)", phone: "6360696143" },
      { name: "Prateek Dhange (ECE)", phone: "7411505732" },
      { name: "Prashant Angadi (Mech)", phone: "9663438577" },
      { name: "Manoj Talawar (EEE)", phone: "6364684229" }
    ]
  },
  {
    event: "Tug of War",
    contacts: [
      { name: "Chetan Mantur (CSE)", phone: "8310209400" },
      { name: "Gundu Yandolli (ECE)", phone: "7380765826" },
      { name: "Vishal Pattar (CSE)", phone: "7619405393" },
      { name: "Ramesh Bastawad (EEE)", phone: "9686048159" }
    ]
  },
  {
    event: "Kannada Habba & Evening Artist Function",
    contacts: [
      { name: "Shyamgouda Ningnuri (ECE)", phone: "8618660605" },
      { name: "Karthik Uramanatti (ECE)", phone: "8431439932" },
      { name: "Vishal Pattar (CSE)", phone: "7619405393" }
    ]
  }
];

export const staffCoordinators: string[] = [
  "Prof. S. R. Malluramath (Convener)",
  "Prof. S. M. Patil (Convener)",
  "Prof. S. B. Patil (CSE)",
  "Prof. A. U. Neshti (EEE)",
  "Prof. B. P. Khot (ECE)",
  "Prof. P. M. Kokitkar (ME)",
  "Prof. I. N. Kambar (FY)"
];

export const leadership: Leadership = {
  conveners: "Prof. S. R. Malluramath & Prof. S. M. Patil",
  convenersTitle: "Conveners, Vismaya (HSIT SAMBHRAMA 2K26-27)",
  chiefConvener: "Dr. M. C. Sarsamba",
  chiefConvenerTitle: "Chief Convener (HSIT SAMBHRAMA 2K26-27)",
  principal: "Dr. S. C. Kamate",
  principalTitle: "Principal"
};
