import self from "../img/self.jpeg";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Anup",
  lastName: "Jha",
  initials: "AJ", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer/Lead",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by Beer",
    },
    {
      emoji: "🌎",
      text: "based in the Bangalore",
    },
    {
      emoji: "💼",
      text: "Lead Engineer at Wrench",
    },
    {
      emoji: "📧",
      text: "anupkrjha@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com/imanupjha",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/anupjha",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/anupjha",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/anupkrjha",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/imanupjha",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Anup. I'm a lead engineer at Wrench. I studied MS Computer Science from BITS, Pilani. I've around 15 years of experience in Software Development and I enjoy writing code in JavaScript.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "redux",
      "TypeScript",
      "GraphQL",
      "react-native",
      "material-ui",
      "html5",
      "css3",
      "nodejs",
      "expressJs",
      "postgress",
      "git",
    ],
    exposedTo: [
      "D3",
      "Webpack",
      "Java",
      "Spring",
      "Open Liberty",
      "MongoDb",
      "InfluxDb",
      "Docker",
    ],
  },
  hobbies: [
    {
      label: "cricket",
      emoji: "🏏",
    },
    {
      label: "techno and house music",
      emoji: "🎧",
    },
    {
      label: "gardening",
      emoji: "👨‍🌾",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  experience: [
    // This is where your portfolio projects will be detailed
    {
      company: "Wrench",
      designation: "Lead Engineer",
      duration: "MARCH 2021 - Current",
    },
    {
      company: "Juniper Networks",
      designation: "Staff Engineer",
      duration: "OCTOBER 2018 - NOVEMBER 2020 ",
    },
    {
      company: "IBM Labs",
      designation: "Lead Engineer",
      duration: "AUGUST 2017 - APRIL 2018",
    },
    {
      company: "Alpha Nodus",
      designation: "Consulting Engineer",
      duration: "NOVEMBER 2016 - AUGUST 2017",
    },
    {
      company: "Oracle",
      designation: "Sr. Software Engineer",
      duration: "MARCH 2015 - NOVEMBER 2016",
    },
    {
      company: "Xerox",
      designation: "Sr. System Engineer",
      duration: "SEPTEMBER 2012 - FEBRUARY 2015",
    },
    {
      company: "Wipro",
      designation: "Tech Lead",
      duration: "FEBRUARY 2006 - SEPTEMBER 2012",
    },
  ],
};
