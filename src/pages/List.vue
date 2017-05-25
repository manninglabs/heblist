<template>
  <div>
<!--     <link rel="stylesheet" type="text/css" href="/static/css/list-style.css">
    <link rel="stylesheet" type="text/css" href="/static/css/list-style-max-767px.css" media="screen and (max-width: 767px)"> -->
    <site-nav-bar />
    <list-filter />
    <div class="container-fluid" id="list">
      <div class="row element-list" v-for="p in profiles">
        <list-item :hebamme="p"></list-item>
      </div>
    </div>
    <list-pagination />
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      profiles: [
        {
          id: 1,
          avatarFilename: 'avatar-1.png',
          address: 'Erich-Weinert Str. 43, 10439 Berlin',
          email: 'janebrown@gmail.com',
          website: 'www.janebrownhebamme.com',
          tel: '(030) 96064920',
          name: 'Jane Brown',
          areas: 'Prenzlauberg, Pankow, Mitte',
          professionalStatement: 'I was born in 1987 in the Wittgensteiner Land in Nordrhein-Westfalen, Germany. After that I moved to Cologne, where I started to work in the media industry. This short detour was necessary to show me my real vocation and after a voluntary year of social service in a day care facility for young children I finally started my training to become a midwife. Right after passing my midwifery exams at the Midwifery School Paderborn I packed my backpack in October 2012 and traveled to India, to get to know a foreign country, people and traditions. Half of the time I spent there, I was traveling around, half of it I worked in a German Birthing Center in Tamil Nadu. Accompanying lots of Indian women during their pregnancy, birth and postnatal period made it a very precious and interesting time, which let me gain a lot of experience in midwifery.',
          services: ['Advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management', 'homebirth'],
          courses: 'Birth preparation course, prenatal yoga',
          languages: 'English, German'
        },
        {
          id: 2,
          avatarFilename: 'avatar-2.png',
          address: 'Eberswalde Str. 32, 10964 Berlin',
          email: 'sarahsmith@gmail.com',
          website: 'www.sarahsmithhebamme.com',
          tel: '(030) 23459487',
          name: 'Sarah Smith',
          areas: 'Charlottenburg, Wilmersdorf',
          professionalStatement: 'Every woman who is covered by health insurance is entitled to midwife care, regardless of whether she is in a statutory or private health insurance. The ways I can look after you are very diverse: care in the pregnancy, advice and help with pregnancy problems, birth preparation. In the first days after birth, I come home to your home every day, look after mother and child, give tips on breastfeeding, help taking care of the child. All in all, I will go to you for about eight weeks (in case of persistent problems up to 12 weeks) after your childbirth, then at larger intervals. So that you feel safe and all your questions are answered. In addition, I still have the whole breastfeeding period (at least nine months) for you to help with breastfeeding.',
          services: ['Home visits', 'preventive screening', 'risk management', 'acupuncture', 'breastfeeding advice', 'aromatherapy'],
          courses: 'Postnatal gymnastics, breastfeeding course',
          languages: 'English, German'
        },
        {
          id: 3,
          avatarFilename: 'avatar-3.png',
          address: 'Bochumer Str. 23, 10556 Berlin',
          email: 'barbaraholz@gmail.com',
          website: 'www.barbaraholzhebamme.com',
          tel: '(030) 46574683',
          name: 'Barbara Holz',
          areas: 'Köpenick',
          professionalStatement: 'I am working as a freelance midwife in Berlin for over 10 years. After finishing my midwife exam in Hannover in 2005, I returned to my hometown of Berlin. Here I worked for several years in the birthplace and accompanied women and families from the beginning of their pregnancy, assisted during house births and hospital births, right after birth and until the end of lactation. After the birth of my first child, I moved the focus of my activity to the maternity care and preventive care as well as the postnatal support. In 2012, I completed my basic education in acupuncture.',
          services: ['Beleghebamme', 'home birth', 'prenatal care', 'postnatal care', 'breastfeeding advice', 'shift service in clinic', 'risk management'],
          courses: 'Postnatal gymnastics, breastfeeding course',
          languages: 'English, German'
        },
        {
          id: 4,
          avatarFilename: 'avatar-4.png',
          address: 'Bandel Str. 12, 10558 Berlin',
          email: 'lisagrey@gmail.com',
          website: 'www.lisagreyhebamme.com',
          tel: '(030) 98635693',
          name: 'Lisa Grey',
          areas: 'Zehlendorf, Dahlem',
          professionalStatement: 'I am a midwife with intention and love and a soap box for every aspect of my work. I feel incredibly honored and humbled before this work, as well as impassioned and invigorated by it on a daily basis. There are so, so many reasons why I am a midwife and why I choose to geek out exponentially over the world of sexual and reproductive health. To answer a lot of questions I have received recently about why midwifery, why nurse-midwifery, why reproductive justice, why abortion, why queer health, why leadership, etc., I have come to realize that for me, the answer to “But why are you a midwife AND this other thing too?” my response is, “To me, that’s midwifery!” So, here are some answers to “Why are you a midwife and…” to give perspective to all of the questions underneath and around and above and supporting what is “my midwifery.',
          services: ['Home visits', 'breastfeeding advice', 'preventive care'],
          courses: 'Birth preparation course',
          languages: 'English, German, French'
        },
        {
          id: 5,
          avatarFilename: 'avatar-5.png',
          address: 'Sonntag Str. 17, 10245 Berlin',
          email: 'julianeschmidt@gmail.com',
          website: 'www.julianeschmidthebamme.com',
          tel: '(030) 93502809',
          name: 'Juliane Schmidt',
          areas: 'Friedrichshain',
          professionalStatement: 'I am a midwife on purpose and with purpose. I am a midwife because I believe caring for women is the most important work in the world right now. I am a midwife because I believe that sexual and reproductive health matter to people’s lives, and the midwifery model of care is one that seeks to empower people through that lens. I am a midwife who believes that reproductive justice is vital to each and every movement, feminism and midwifery included. I am a midwife who believes that queer and trans sexual and reproductive healthcare should be brought to the forefront of the sexual and reproductive health conversation, because great midwifery care should mean great midwifery care for everyone. I am a midwife who believes abortion is healthcare and a human right and it should be available to anyone on demand without apology*. I am a midwife who believes in midwifery.',
          services: ['Beleghebamme', 'home birth', 'prenatal and postnatal care'],
          courses: 'Prenatal yoga',
          languages: 'English, German, Spanish'
        },
        {
          id: 6,
          avatarFilename: 'avatar-6.png',
          address: 'Mansfelder Str. 35, 13346 Berlin',
          email: 'annasagert@gmail.com',
          website: 'www.annasagerthebamme.com',
          tel: '(030) 17817964',
          name: 'Anna Sagert',
          areas: 'Kreuzberg, Friedrichshain',
          professionalStatement: 'I first heard the word ‘midwife’ in a women’s studies class at the University of Michigan (shout out to the awesome Lisa Kane Low and Joanne Bailey!). Like many midwives, I started out pre-med and learned, for a variety of reasons, that the medical model’s approach to teaching, learning, and patient care and individual empowerment did not align with my personal belief system. I switched to studying global health and medical anthropology, and by the time I sat down in a women’s studies class and learned about midwives, my mind was already in love with the world of public health (still is), and I wanted to ride that love train and work to support the globe on a broad scale for a while. So I did, working in microbicide research and HIV prevention methods for women.',
          services: ['Advice and assistance', 'breastfeeding advice'],
          courses: 'Postnatal gymnastics',
          languages: 'English, German'
        },
        {
          id: 7,
          avatarFilename: 'avatar-7.png',
          address: 'Kladower Damm 23, 14088 Berlin',
          email: 'katharinaflemming@gmail.com',
          website: 'www.katharinaflemminghebamme.com',
          tel: '(030) 98361964',
          name: 'Katharina Flemming',
          areas: 'Spandau',
          professionalStatement: 'My personal ambition is to accompany you carefully, respectfully and responsibly in this important phase of your life, from pregnancy through to the babys changing-off period. I would like to inform, support and promote your self-confidence for the birth and the future parenthood.',
          services: ['Advice and assistance', 'acupuncture'],
          courses: 'Baby massage, prenatal and postnatal yoga',
          languages: 'English, German'
        },
        {
          id: 8,
          avatarFilename: 'avatar-8.png',
          address: 'Mozartstr 12a, 14512 Berlin',
          email: 'juliaklein@gmail.com',
          website: 'www.juliakleinhebamme.com',
          tel: '(030) 11317810',
          name: 'Julia Klein',
          areas: 'Steglitz',
          professionalStatement: 'For over 10 years I am working as a freelance midwife in Berlin and in the southern region. After finishing my midwife exam in Hannover in 2005, I returned to my hometown of Berlin. Here I worked for several years in the birthplace and accompanied women and families from the beginning of their pregnancy, while house, - birth house and hospital births, in the weeks bed until the end of the lactation. After the birth of my first child, I moved the focus of my activity to the maternity care and preventive care as well as the weeks of bed support. In 2012, I completed my basic education for acupuncture and since then treat all the ailments in pregnancy and in a weeks bed in addition to naturopathic and homeopathic remedies successfully with acupuncture.',
          services: ['Pregnancy care', 'precaution at home', 'help with breeches', 'weekly childcare', 'breastfeeding consulting', 'acupuncture'],
          courses: 'Birth preparation course',
          languages: 'English, German, Polish'
        },
        {
          id: 9,
          avatarFilename: 'avatar-9.png',
          address: 'Schallweg 98, 14087 Berlin',
          email: 'viktoriajahn@gmail.com',
          website: 'www.viktoriajahnhebamme.com',
          tel: '(030) 66422217',
          name: 'Viktoria Jahn',
          areas: 'Prenzlauer Berg, Mitte',
          professionalStatement: 'I would like to help you in a time of intense physical and emotional changes. The care in the weeks bed can be claimed up to ten days after birth, in case of problems (eg breastfeeding) longer. In order to get to know each other and to discuss how the women  couple can prepare for the weeks bed, a joint discussion is helpful. From the time of the calculated date I usually contact the women in telephone contact.',
          services: ['Beleghebamme', 'home birth', 'breastfeeding consulting', 'acupuncture'],
          courses: 'Breastfeeding course, prenatal yoga',
          languages: 'English, German, Polish'
        },
        {
          id: 10,
          avatarFilename: 'avatar-10.png',
          address: 'Grazer Platz 11, 12156 Berlin',
          email: 'sonjagrothe@gmail.com',
          website: 'www.sonjagrothehebamme.com',
          tel: '(030) 76376318',
          name: 'Sonja Grothe',
          areas: 'Zehlendorf',
          professionalStatement: 'I look after both women after outpatient births, as well as women who have recently given birth, who have spent a few days on the ward. The changes which the female body experiences through and after birth are for the time being decisive. On the psychological level, too, it is a time of special sensitivities and altered perception. For the newborn, this time is associated with major adjustments.',
          services: ['Pregnancy care', 'breastfeeding consulting', 'acupuncture'],
          courses: 'Birth preparation course',
          languages: 'English, German'
        },
        {
          id: 11,
          avatarFilename: 'avatar-11.png',
          address: 'Kameruner 74, 13348 Berlin',
          email: 'christinwiemann@gmail.com',
          website: 'www.christinwiemann.com',
          tel: '(030) 11799931',
          name: 'Christin Wiemann',
          areas: 'Weissensee',
          professionalStatement: 'I quickly learned, after working abroad in multiple countries, that midwives run the show globally when it comes to caring for women. I loved public health’s approach to community care, but wanted deeper connections with individual people as a clinician and direct care provider. Midwifery was the one and only path that aligned the stars of all of my worlds: trusting other people to know whats best for their bodies, caring for women because ultimately that means caring for everyone, engaging an empowerment model that elevated voices of both care providers and care seekers, and mobilizing within a global community of strong voices. So I went back to school to, in my mind, join in the community of kickass people doing the best job in the world: full spectrum reproductive and sexual health care for women.',
          services: ['Home birth', 'hospital birth', 'prenatal care', 'postnatal care', 'aromatherapy'],
          courses: 'Baby massage, postnatal gymnastics',
          languages: 'English, German'
        },
        {
          id: 12,
          avatarFilename: 'avatar-12.png',
          address: 'Mansfelder Str. 35, 13346 Berlin',
          email: 'jennyschwarz@gmail.com',
          website: 'www.jennyschwarz.com',
          tel: '(030) 77731919',
          name: 'Jenny Schwarz',
          areas: 'Wilmersdorf, Zehlendorf',
          professionalStatement: 'I believe in the power of precepting, teaching by example, and being in an environment where education and evidence are the foundation of care. I love my profession and I feel so fortunate to be with students, showing them the excitement I have as a new provider, and encouraging the next generation of midwives to get into practice as quickly as possible. With each shift I am proud and invigorated by the awesome students who come through and challenge me at the same time as I work to challenge them. The university environment encourages constant thought about what could be different, how collaboration facilitates growth for all provider types, and ideas about what is next in sexual and reproductive health care for all people. I love learning and growing and collaborating: students and universities help me to keep doing all of those things.',
          services: ['Pregnancy care', 'breastfeeding consulting', 'acupuncture'],
          courses: 'Birth preparation course, prenatal yoga',
          languages: 'English, German'
        },
        {
          id: 13,
          avatarFilename: 'avatar-13.png',
          address: 'Teltower Damm 213, 14168 Berlin',
          email: 'michaelaleon@gmail.com',
          website: 'www.michaelaleon.com',
          tel: '(030) 99612112',
          name: 'Michaela Leon',
          areas: 'Reinickendorf',
          professionalStatement: 'Together, we talk about what the partner can do to help you with the birth and try different birth positions. You will find out which tasks have midwives, and which medical aids are offered. Pictures and parents reports illustrate the birth and provide variety. We will talk about the first hours of the babys life and days, and of course, there is room for exchange and questions.',
          services: ['Advice and assistance', 'home visits', 'family midwife', 'preventive screening', 'shift service in clinic', 'risk management'],
          courses: 'Birth preparation course',
          languages: 'English, German'
        },
        {
          id: 14,
          avatarFilename: 'avatar-14.png',
          address: 'Mozartstr 12a, 14512 Berlin',
          email: 'juliaklein@gmail.com',
          website: 'www.juliakleinhebamme.com',
          tel: '(030) 11317810',
          name: 'Julia Klein',
          areas: 'Steglitz',
          professionalStatement: 'I would like to accompany you as a midwife through your pregnancy and weeks. In my  birth preparation course  you learn everything important for the birth and life with your baby. Relax and strengthen in my course  Yoga for the recovery  from 6 weeks after the birth. Before that, your baby relaxes with the Ayurvedic Babymassage  and you get a lot of information which makes the life with your baby more beautiful.',
          services: ['Homebirth', 'acupuncture', 'breastfeeding advice', 'aromatherapy'],
          courses: 'Baby massage, postnatal yoga',
          languages: 'English, German, Spanish'
        },
        {
          id: 15,
          avatarFilename: 'avatar-15.png',
          address: 'Berliner Str. 123, 13467 Berlin',
          email: 'petrarichter@gmail.com',
          website: 'www.petrarichterhebamme.com',
          tel: '(030) 86367492',
          name: 'Petra Richter',
          areas: 'Mitte',
          professionalStatement: 'I am fortunate to have had, and continue to have, incredible midwife mentors, who encouraged my interest and participation in leadership (Thanks Amy Romano and Francie Likis!). I do my best to represent the voices of those midwives who I feel I was elected to represent: new midwives, queer midwives, pro-abortion midwives, reproductive justice midwives, and midwives seeking an organization diverse in all of its regards. I am proud to be a part of an organization that welcomes the intensity of my voice and of those whose voices I seek to elevate through serving in my role. And I am thankful for the seasoned midwives who midwife me in my leadership role, and continue to encourage me as I learn all of the things I see, and do not see, that I am still learning. (Thank you to everyone who voted for me, and for those who reach out to let me know what you love  what bugs you about midwifery right now: I am listening and working hard!)',
          services: ['Beleghebamme', 'prenatal care', 'postnatal care', 'shift service in clinic'],
          courses: 'Birth preparation course',
          languages: 'English, German, French'
        },
        {
          id: 16,
          avatarFilename: 'avatar-16.png',
          address: 'Zeltinger Str. 4, 13467 Berlin',
          email: 'elkeludwig@gmail.com',
          website: 'www.elkeludwighebamme.com',
          tel: '(030) 11317810',
          name: 'Elke Ludwig',
          areas: 'Steglitz, Zehlendorf, Dahlem',
          professionalStatement: 'As a practicing midwife and technical advisor on global health programs, I have met midwives throughout Africa, Southeast Asia, and beyond in very low-resource settings and challenging circumstances, working hard every day to ensure women and newborns receive the high-quality care they deserve.',
          services: ['Pregnancy care', 'breastfeeding consulting'],
          courses: 'Baby swimming, baby massage',
          languages: 'English, German'
        },
        {
          id: 17,
          avatarFilename: 'avatar-17.png',
          address: 'Hermsdorfer Damm 43a, 13467 Berlin',
          email: 'marlenemayer@gmail.com',
          website: 'www.marlenemayerhebamme.com',
          tel: '(030) 44567324',
          name: 'Marlene Mayer',
          areas: 'Prenzlauer Berg, Mitte',
          professionalStatement: 'As I work with midwives around the world I dispense more than just clinical advice. I show them how to help a mother breathe through a contraction, to make sure a woman in labor is covered and not lying there naked on a delivery bed that is separated from other clients by only a thin curtain, to talk to a client and her family respectfully.Because I am a midwife and this is what I do.',
          services: ['Pregnancy care', 'precaution at home', 'help with breeches', 'weekly childcare', 'breastfeeding consulting', 'acupuncture'],
          courses: 'Postnatal gymnastics',
          languages: 'English, German'
        },
        {
          id: 18,
          avatarFilename: 'avatar-18.png',
          address: 'Grimmstr 12a, 10968 Berlin',
          email: 'alexandrafox@gmail.com',
          website: 'www.alexandrafoxhebamme.com',
          tel: '(030) 96178780',
          name: 'Alexandra Fox',
          areas: 'Pankow, Prenzlauer Berg',
          professionalStatement: 'There are almost unlimited choices women can make surrounding their childbirth experiences. Choices range from from selecting prenatal education, to creating a nourishing pregnancy diet, to crafting a birth plan, to building a support team, to deciding where and with whom to give birth, to choosing health care providers for newborns, to incorporating cultural and personal rituals into birth and parenting. Midwives work in partnership with their clients in the decision-making process, assisting them in understanding the full range of options. Pregnant and parenting families make choices in the context of the rest of their lives because only they understand fully the complexities, pressures, and challenges under which they are living.',
          services: ['Beleghebamme', 'shift at a clinic', 'prenatal and postnatal care', 'breastfeeding advice'],
          courses: 'Birth preparation course, breastfeeding course',
          languages: 'English, German, Russian'
        },
        {
          id: 19,
          avatarFilename: 'avatar-19.png',
          address: 'Wildensteiner Str, 10, 10245 Berlin',
          email: 'marinanolte@gmail.com',
          website: 'www.marinanoltehebamme.com',
          tel: '(030) 55334352',
          name: 'Marina Nolte',
          areas: 'Charlottenburg',
          professionalStatement: 'A midwife-led birth gives a woman a measure of control generally unavailable with a physician-led hospital births—the freedom to move, eat, bathe, or whatever else might help her labor and birth more confidently. The role of a midwife is to monitor labor, guiding and supporting the birthing woman safely through the birth process. For many women, care with a midwife allows them to birth their way, safely and naturally, supported by the people they love. Many studies show that midwifery care through labor and delivery lowers complication rates and reduces the likelihood of unnecessary cesarean section.',
          services: ['Beleghebamme', 'prenatal care', 'breastfeeding consulting', 'home visits'],
          courses: 'Prenatal yoga',
          languages: 'English, German, Polish'
        },
        {
          id: 20,
          avatarFilename: 'avatar-20.png',
          address: 'Frankfurter Allee 94, 10245 Berlin',
          email: 'evakaminski@gmail.com',
          website: 'www.evakaminskihebamme.com',
          tel: '(030) 87787765',
          name: 'Eva Kaminski',
          areas: 'Tempelhof, Mitte',
          professionalStatement: 'Midwives hold the key to optimal birthing practices and cesarean prevention. Numerous studies have shown that birthing with a midwife significantly decreases the need for cesarean delivery and risk of premature birth. In addition, women and families who birth with midwives describe having a more empowering and satisfying experience. At this point in our national history, women and families deserve to not only survive childbirth but also enjoy it as a healthy bonding experience that will transform women and men into engaged, informed, and empowered parents of the children who will lead our next generation forward.',
          services: ['Pregnancy care', 'help with breeches', 'weekly childcare', 'breastfeeding consulting', 'acupuncture'],
          courses: 'Baby massage, baby swimming',
          languages: 'English, German, French, Spanish'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '/static/css/list-style.css';
@import '/static/css/list-style-max-767px.css';
</style>
