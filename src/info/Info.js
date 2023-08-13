import self from "../img/self.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Duy",
    lastName: "Nguyen",
    initials: "dn", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Orange County, CA'
        },
        {
            emoji: "💼",
            text: "Software Engineer at System1"
        },
        {
            emoji: "📧",
            text: "duyng19@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [

        {
            label: 'badminton',
            emoji: '🏸'
        },
        {
            label: 'archery',
            emoji: '🏹'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'traveling',
            emoji: '🗺'
        }
    ]
}