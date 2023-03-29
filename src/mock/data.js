import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Duong Dong Quan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Dong Quan',
  subtitle: "I'm the Self-taught Developer.",
  cta: 'hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hi, I'm a creative person and interested in almost everything. And finally, I stop at web programming. I am impressed with website design, application products since I have started to learn them. I found my passion and decided to follow it. Fight to improve myself for my passion.",
  paragraphTwo:
    'With the desire of learning new knowledge, exprience, skills as well as contributing in the development of your company. I would like to join your team as a fresher developer.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1F_Z0LOgh_Bp_MA480aI3Xxb4XaGlm6oR/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ipaymy.png',
    title: 'ipaymy',
    info: 'Re-design and redevelop the entire web application. Start with small fixes to learn the code base, simple improvements, and finally complex features.Manage deployment and expansion of website marketing responsibilities with minimal guidance, with no uptime interruptions.',
    info2: '(ReactJS/Redux, TypeScript, SASS, GitLab)',
    url: 'https://www.ipaymy.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'myshop.jpg',
    title: 'My Shop',
    info: 'A full-stack web application with the account security system. Website specialize in selling and buying clothes online. Setting payment via Visa.',
    info2: '(ReactJS/Redux, NodeJS/ExpressJS, Knex.js, Firebase, Heroku)',
    url: 'https://crwn-clothingw.netlify.app',
    repo: 'https://github.com/dongquan1504/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'monsteria.jpg',
    title: 'Greek Monster',
    info: 'A website app with monster picture cards, this website allows you to search all Greek monsters',
    info2: '(ReactJS/Redux, CSS, HTML5, tachyons)',
    url: 'https://dongquan1504.github.io/Greek-Monster',
    repo: 'https://github.com/dongquan1504/Greek-Monster', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smartBrain.png',
    title: 'Face Detection',
    info: 'A full-stack web application with the latest technologies, this app allows you to identify the detection of faces in any image supplied (using the artificial intelligence API named Clarifai)',
    info2: '(ReactJS/Redux, NodeJS/ExpressJS, js, Heroku)',
    url: 'https://face-detection1504.netlify.app',
    repo: 'https://github.com/dongquan1504/Face-Detection', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dongquan15041@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ngQunDng1',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/dongquan1504',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/quan1504',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dongquan1504',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
