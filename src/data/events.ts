import { EventItem, EventCoordinatorGroup, Leadership } from '@/lib/types';

export const schedule: EventItem[] = [
  {
    day: 1,
    date: "12th October 2K26 (Monday)",
    title: "INAUGURATION OF VISMAYA ✂️🎉",
    theme: "Opening Ceremony, Flash Mob & Food Fest",
    venue: "OPEN AIR THEATRE",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format",
    regLink: "https://forms.gle/xvdGkEPG67AqjDjK7",
    details: "🎙️ 11:00 AM to 12:00 PM: Flash Mob & Grand Inauguration. 🍴 12:00 PM to 4:00 PM: Food Fest & Mind Games. Support your friends' culinary skills and sharpen your mind!"
  },
  {
    day: 2,
    date: "13th October 2K26 (Tuesday)",
    title: "CHARACTER DAY 🎭🎬",
    theme: "Dress up as Favorite Film Characters",
    venue: "COLLEGE CAMPUS",
    img: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1000&auto=format",
    regLink: "https://forms.gle/S9QBZyokt4BQoJPE7",
    details: "🚶 11:00 AM to 12:00 PM: Ramp Walk (Show off your iconic costumes). 🎁 2:00 PM to 5:00 PM: Treasure Hunt. Explore the campus clues to claim victory!"
  },
  {
    day: 3,
    date: "14th October 2K26 (Wednesday)",
    title: "SQUAD DAY 🏏⚔️",
    theme: "Unity, Box Cricket & Tug of War",
    venue: "CAMPUS GROUND",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format",
    regLink: "https://forms.gle/YSQV7MHUjprPxLqQ6",
    details: "🏏 10:00 AM to 1:00 PM: Box Cricket showdown. 🪢 2:00 PM to 5:00 PM: Tug of War battle of pure strength between departments!"
  },
  {
    day: 4,
    date: "15th October 2K26 (Thursday)",
    title: "JERSEY DAY ⚽🏆",
    theme: "Penalty Shootout / Ball Kick Challenge",
    venue: "CAMPUS ARENA",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format",
    regLink: "",
    details: "⚽ 11:00 AM – 1:00 PM: Penalty Shootout / Ball Kick Challenge. Set up a mini goalpost on campus where participants in jerseys try to score against a student goalkeeper!"
  },
  {
    day: 5,
    date: "16th October 2K26 (Friday)",
    title: "ಕನ್ನಡ ಸುಗ್ಗಿ ಸಂಭ್ರಮ 🚩🌾",
    theme: "Traditional Day & Kannada Suggi Sambhrama",
    venue: "OPEN AIR THEATRE",
    img: "/day5.jpg",
    regLink: "",
    details: "🟡🔴 10:00 AM – 2:00 PM: Traditional Karnataka attire, culture, traditional music, and celebrating the spirit of the land."
  }
];

export const eventCoordinators: EventCoordinatorGroup[] = [
  {
    event: "Inauguration (Flex & Flash Mob) & Anchoring",
    contacts: [
      { name: "Santosh Kotinatot (ME)", phone: "7676043085" },
      { name: "Onkar Jaganur (EEE)", phone: "9741012245" },
      { name: "Nayan Bongale (ECE)", role: "Anchoring" },
      { name: "Shreyas Upadhye", phone: "9482340883" },
      { name: "Anoop Hampannavar (CSE)" }
    ]
  },
  {
    event: "Food Fest",
    contacts: [
      { name: "Rohit Sankeshwari (ECE)", phone: "8867036321" },
      { name: "Ritika Aparadh", phone: "7259132105" },
      { name: "Megha Sakkappanavar", phone: "8971103175" },
      { name: "Shayamgouda Ningnuri (ECE)" }
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
      { name: "Srushti Humashyal (CSE)", phone: "7019856323" },
      { name: "Pramod Pujari (CSE)", phone: "7795516587" },
      { name: "Karthik Uramratti (ECE)" },
      { name: "Anchan (ECE)" },
      { name: "Nayan Bongale" }
    ]
  },
  {
    event: "Treasure Hunt",
    contacts: [
      { name: "Basavaraj Nerli", phone: "9148699665" },
      { name: "Akash Hiremath", phone: "9663938442" },
      { name: "Sanjana Naddhage", phone: "7204706531" },
      { name: "Amruta Prabhunatti" },
      { name: "Gundu Yandolli" }
    ]
  },
  {
    event: "Box Cricket",
    contacts: [
      { name: "Suraj Huddar (CSE)", phone: "6360696143" },
      { name: "Prateek Dhange (ECE)", phone: "7411505732" },
      { name: "Prashant Anigaddi (Mech)", phone: "9663438577" },
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
      { name: "Karthik Uramratti (ECE)", phone: "8431439932" },
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