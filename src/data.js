const data = [
  {
    id: 1,
    voto: 5,
    recensione:
      "They did the job well and quick, no problems at all. Reasonable price as well. Highly recommended.",
    autore: "Kaisa P.",
  },
  {
    id: 2,
    voto: 5,
    recensione:
      "The guys were flexible, friendly and helpful and made my move a breeze. They treated my stuff with care and made sure things ended up in the right rooms / positions. Recommended!",
    autore: "Dave H.",
  },
  {
    id: 3,
    voto: 5,
    recensione:"Excellent service, bang on time and hard working. Very flexible and friendly and took good care of our stuff. They also collected a washing machine for us same day of asking which was above and beyond. Thanks guys.",
    autore: "Antony F.",
  },
  {
    id: 4,
    voto: 5,
    recensione:
      "Absolutely recommended! Tom and Victor are brilliant people who made our moving quick and fun. They will go absolutely above and beyond to accommodate your needs and they look after your stuff as if it were their own.",
    autore: "Marco C.",
  },
  {
    id: 5,
    voto: 5,
    recensione:
      "Tom and Victor were absolute stars are helping us get moved this week. Fantastic work etiquette and attitude and just really friendly. They made our move a very painless process, couldn't reccomend them enough 😊",
    autore: "Dan D.",
  },
  {
    id: 6,
    voto: 5,
    recensione:
      "What a brilliant experience we had on our moving day last Saturday, 23rd October. 2 very professional, pleasant, happy, funny and extremely hard working guys!",
    autore: "Caroline B",
  },
  {
    id: 7,
    voto: 5,
    recensione:
      "I contacted Keep on moving for a last minute moving. Vittorio was very kind and quickly available, and in one hour everything was sorted out! Quick, professional and absolutely amazing!",
    autore: "Ilaria R.",
  },
  {
    id: 8,
    voto: 5,
    recensione:"Respectful, pleasant and did a good job in good time! What more can you ask for during a house move? I would recommend based on today’s experience of Tom and Vic.  Thanks guys.",
    autore: "Martin L.",
  },
  {
  id: 9,
    voto: 5,
    recensione:"Was made aware of Keep Moving through a friend and wow I'm so glad I chose them to complete my home move. Guys were so professional from start to finish. Thanks alot guys 5 star service !!!",
    autore: "Steven P.",
  },
  {
    id: 10,
    voto: 5,
    recensione:"Thank you to Tom and Victor to taking the stress out of moving. Fast, professional and caring. Couldn't ask for anything more.",
    autore: "Karin F.",
  }, 
  {
    id: 11,
    voto: 5,
    recensione:"What can I say about these guys. They were fantastic. Took all the stress out of my move and they went up and beyond to help. Can't recommend these guys highly enough. Just brilliant 👏 👌 😀 Thanks again guys 👍👍😁😊",
    autore: "Julie B.",
  }, 
  {
    id: 12,
    voto: 5,
    recensione:"These guys are absolutely cracking. Never seen two people move so much stuff so efficiently, quickly and carefully. Would highly recommend them for your next move.",
    autore: "Matthew T.",
  }, 
  {
    id: 13,
    voto: 5,
    recensione:"Absolutely amazing guys! So helpful, so fast and so careful with all our things. Really great communication throughout, extremely efficient and affordable. Made us feel really comfortable, would highly recommend to anyone.",
    autore: "Stevie H.",
  }, 
  {
    id: 14,
    voto: 5,
    recensione:"We relocate a lot, but this could have been easily the less stressful of them all. Really good, I recommend it if you value a good job and pleasant people.",
    autore: "Francesco D.V.",
  },
  {
    id: 15,
    voto: 5,
    recensione:"Enquired about having my mattress swapped with another mattress in another location and was offered the next morning at a reasonable price. Service was great and efficient and movers friendly.",
    autore: "Eve C.",
  },
  {
    id: 16,
    voto: 5,
    recensione:"These guys did a great job this morning, moving stuff between 3 houses. Took great care and managed the whole process professionally and with a friendly manner. I would definitely use again",
    autore: "Lynne P.",
  },
  {
    id: 17,
    voto: 5,
    recensione:"These guys are great! Great communication all around, very responsive, and were friendly throughout! Highly recommend for a trouble-free move! Thank you for your help Victor😁",
    autore: "Eftychia J. M.",
  }, 
  {
    id: 18,
    voto: 5,
    recensione:"Keep on moving Edinburgh helped us on a very stressful moving day ! They stayed calm and patient and loaded up their van with skill . Reasonable cost and great communication",
    autore: "Jacqueline D.",
  }, 
  {
    id: 19,
    voto: 5,
    recensione:"Really brilliant service start to finish! Worked well independently and kept in contact through out the process. Have recommend to my friends who are moving soon!",
    autore: "Katie M.",
  }, 
  {
    id: 20,
    voto: 5,
    recensione:'I received an excellent service from this company very friendly and very professional. They were quick and efficient I cant fault them at all, I highly recommend "Keep On Moving Edinburgh".',
    autore: "Gianna W.",
  }, 
  {
    id: 21,
    voto: 5,
    recensione:"I will 100% be using this business for my next move. The guys were friendly and efficient. Cannot fault the experience at all.",
    autore: "Eater W.",
  }, 
  {
    id: 22,
    voto: 5,
    recensione:"Really friendly and super efficient! Would definitely use them again! :)",
    autore: "Nick M.T.",
  }, 
  {
    id: 23,
    voto: 5,
    recensione:"Very professional, hard working, communicative guys. They’ve been as fast as they could and nothing is impossible for them. Highly recommend.",
    autore: "Mirosława S.",
  }, 
  {
    id: 24,
    voto: 5,
    recensione:"Tom and Victor where totally reliable,professional, excellent services provide to me will definitely use them again,definitely 5 star service from this company",
    autore: "Stevie S.",
  }, 
  {
    id: 25,
    voto: 5,
    recensione:"The move was extra smooth! These guys work extra fast and efficient! Great service",
    autore: "Karolina M.",
  }, 
  {
    id: 26,
    voto: 5,
    recensione:"Lovely guys very quick and efficient,  great value for money, highly recommended",
    autore: "Dale R.",
  }, 
  {
    id: 27,
    voto: 5,
    recensione:"Really nice guys, very professional and efficient. Would recommend.",
    autore: "Mark C.",
  }, 
  {
    id: 28,
    voto: 5,
    recensione:"Would definitely recommend. Arrived on time, worked with a fuss, friendly and completed the job within the agreed time.",
    autore: "Emma H.",
  }, 
  {
    id: 29,
    voto: 5,
    recensione:"Reliable, quick response, great service, went over and above to help. Would recommend and use again.",
    autore: "Claire S.",
  }, 
  {
    id: 30,
    voto: 5,
    recensione:"Great guys. Quick and responsive and willing to go the extra mile. Would recommend!",
    autore: "Calum R.",
  }, 
  {
    id: 31,
    voto: 5,
    recensione:"Brilliant and reliable service. Highly recommended. Will certainly use again.",
    autore: "Caroline B.",
  }, 
  {
    id: 32,
    voto: 5,
    recensione:"Great guys - definitely will use again!",
    autore: "Thom M.",
  }, 
  {
    id: 33,
    voto: 5,
    recensione:"Friendly, professional guys ~ brilliant service & very efficient ☺️ Thanks so much again for helping with my house move !",
    autore: "Emma C.",
  }, 
  {
    id: 34,
    voto: 5,
    recensione:"the guys were amazing, friendly and professional! highly recommended!",
    autore: "Lisa B.",
  }, 
  {
    id: 35,
    voto: 5,
    recensione:"Best experience ever, professional, hard working guys , you cannot ask for more , thanks guys 100/100 Francesca",
    autore: "Francesca G.",
  }, 
  {
    id: 36,
    voto: 5,
    recensione:"Great service, helped me out at short notice with my house move, no stress no fuss. the guys are professional and got the job down. thanks for today guys!",
    autore: "Janis M",
  }, 
  {
    id: 37,
    voto: 5,
    recensione:"10/10 would use again. Top grafters. Good prices!",
    autore: "Kyle G.",
  }, 
  {
    id: 38,
    voto: 5,
    recensione:"Great service at affordable price, couldn't ask for better.",
    autore: "Diego G. N.",
  }, 
  {
    id: 39,
    voto: 5,
    recensione:"Definitely recommend these guys! On time, fast and cheap! will book in future",
    autore: "Val G.",
  }, 
  {
    id: 40,
    voto: 5,
    recensione:"Absolutely fantastic guys. Turned up when they said they would and worked like trojans. I would 100% recommend these people.",
    autore: "Glynis M",
  }, 
  {
    id: 41,
    voto: 5,
    recensione:"The guys were absolutely brilliant, friendly and efficient. They worked hard all day to move mountains of stuff. Nothing was too much trouble for them. I wouldn't hesitate to recommend them or use their services again.",
    autore: "Anrew R.",
  }, 
  {
    id: 42,
    voto: 5,
    recensione:"Great people, friendly and extremely professional! I hired them for a long distance home moving from Aberdeen to Edinburgh.",
    autore: "Maria I.S.",
  }, 
  /* 
  {
    id: ,
    voto: 5,
    recensione:"",
    autore: "",
  }, 
  */
];

export default data;
