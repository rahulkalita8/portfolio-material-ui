const AboutDetails = {
    name: 'Rahul Kalita',
    about: 'I develop things that I find interesting. I casually play Chess and TT for fun.',
    resumeURL: 'https://drive.google.com/file/d/1SZH9aS7aVsT4lS_bHYva73yp8Ie5tIX3/view?usp=sharing',
}

const SkillsDetails = {
    enable: true,
    whatIdo:
        'I learn and develop things. Small projects over the weekend, random tech talks and Reddit would interest me. I play table chess, tennis and cricket for fun. ',
    skills: [
        {
            skillName: 'Java',
            SkillPercent: '85%',
        },
        {
            skillName: 'Python',
            SkillPercent: '80%',
        },
        {
            skillName: 'ReactJS',
            SkillPercent: '70%',
        },
        {
            skillName: 'CSS',
            SkillPercent: '70%',
        },
        {
            skillName: 'MySQL',
            SkillPercent: '70%',
        },
        {
            skillName: 'InfluxDB',
            SkillPercent: '80%',
        },
        {
            skillName: 'GitHub',
            SkillPercent: '70%',
        },
        {
            skillName: 'Soft Skill',
            SkillPercent: '80%',
        },
    ],
}

const SocialMediaDetails = {
    facebook: {
        enable: true,
        url: 'https://www.facebook.com/rahul.kalita.98',
    },
    linkedIn: {
        enable: true,
        url: 'https://www.linkedin.com/in/rahul-kalita/',
    },
    instagram: {
        enable: true,
        url: 'https://www.instagram.com/_rahulkalita/',
    },
    github: {
        enable: true,
        url: 'https://github.com/rahulkalita8',
    },
    google: {
        enable: false,
        url: 'https://github.com',
    },
    twitter: {
        enable: false,
        url: 'https://github.com',
    },
    medium: {
        enable: false,
        url: 'https://github.com',
    },
    stackOverflow: {
        enable: false,
        url: 'https://github.com',
    },
    twitch: {
        enable: false,
        url: 'https://github.com',
    },
}

const EducationDetails = {
    enable: true,
    schools: [
        {
            name: 'SASTRA University',
            imageUrl: '/assets/images/SASTRA.jpg',
            imageTitle: 'SASTRA University',
            degree: "Bachelor's in Computer Science",
            years: '2015-2019',
            grade: '',
            details: [
                '1 Publication',
                'President of Hindi Literary Club',
                'Computer Society of India - Member',
            ],
        },
        // {
        //     name: 'NC State University',
        //     imageUrl: '/assets/images/nc-state-transparent.jpg',
        //     imageTitle: 'NC State University',
        //     degree: "Master's in Computer Science",
        //     years: '2021-Present',
        //     grade: 'NA',
        //     details: ['Still to go there', 'Hopefully TA', 'Get a Job'],
        // },
    ],
}

const WorkExperienceDetails = {
    enable: true,
    experience: [
        {
            name: 'PayPal',
            logo: '/assets/images/paypal-transparent.png',
            allDetails: [
                {
                    role: 'Software Engineer 2',
                    timeline: 'Apr 2021 - Present',
                    description:
                        "Working on PayPal's Next Generation Data Movement platform and also supporting current generation data movement tools. Taking responsibility of Metrics and Monitoring aspect of the platforms. Worked on Apache Gobblin, TICK Infrastructure, Visualization tools like Grafana and alerting tools like Pagerduty.",
                    details: ['HOLA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
                },
                {
                    role: 'Software Engineer 1',
                    timeline: 'Jul 2019 - Mar 2021',
                    description:
                        'Developed and released features on Batch and streaming data movement platforms. Tech Stack includes - Java, Scala, ReactJS, and Oracle.',
                    details: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    ],
                },
                {
                    role: 'Software Engineering Intern',
                    timeline: 'Jan 2019 - Jun 2019',
                    description:
                        'Developed an utility to maintain integrity between GitHub and production system. Added feature to dynamically migrate UC4 jobs. Tech Stack - Python, JS, CSS and MongoDB',
                    details: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    ],
                },
            ],
        },
        {
            name: 'Tata Consultancy Services',
            logo: '/assets/images/tcs-logo.png',
            allDetails: [
                {
                    role: 'Software Engineering Intern',
                    timeline: 'May 2018 - Jul 2018',
                    description:
                        'Built a hybrid recommendation system for an e-commerce customer. Merged Content-Based and Collaborative Filtering using WALS Algorithm. Tech Stack - Tensorflow for Python, JS.',
                    details: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    ],
                },
            ],
        },
    ],
}

const AcheivementDetails = {
    enable: true,
    acheivements: [
        {
            name: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
            organization: 'Udemy',
            imageUrl: '/assets/images/udemy.jpg',
            details:
                'A simplified yet comphrensive introduction to Machine Learning. Topics includes but not limited to Regression, Classificiation, Clusterring, NN, NLP, DL. I chose the python track. ',
            date: 'January 2021',
            usefulLinks: [
                {
                    name: 'Certificate',
                    url: 'https://www.udemy.com/certificate/UC-94b2e938-574a-43e2-9806-61f82b539616/',
                },
            ],
        },
        {
            name: 'Neural Networks and Deep Learning',
            imageUrl: '/assets/images/coursera-logo.jpg',
            organization: 'Coursera',
            date: 'January 2021',
            details:
                'A very detailed course by Andrew NG on Neural Network and Deep Learning. This course starts with regression and classification with NN and later moves to Deep Learning.',
            usefulLinks: [
                {
                    name: 'Certificate',
                    url: 'https://coursera.org/share/447d5a0475fac24a23fcdf12650e1725',
                },
            ],
        },
        {
            name: 'Applied Machine Learning: Algorithms',
            imageUrl: '/assets/images/linkedin-name.jpg',
            organization: 'LinkedIn',
            date: 'January 2020',
            details:
                'A small course on the appliction of ML algorithms like Linear Regression, Gradient Descent, KNN etc.',
            usefulLinks: [
                {
                    name: 'Course',
                    url: 'http://www.linkedin.com/learning/applied-machine-learning-algorithms',
                },
            ],
        },
        {
            name: 'Machine Learning and AI Foundations: Recommendations',
            imageUrl: '/assets/images/linkedin-name.jpg',
            organization: 'LinkedIn',
            date: 'December 2019',
            details:
                'A short course on how to use machine learning to build programs that can make recommendations. This course explains Content Based, collaborative filtering and hybrid systems.',
            usefulLinks: [
                {
                    name: 'Course',
                    url: 'http://www.linkedin.com/learning/machine-learning-and-ai-foundations-recommendations',
                },
            ],
        },
    ],
}

const LicenseCertificateDetails = {
    enable: true,
    certificates: [
        {
            name: 'Neural Networks and Deep Learning',
            imageUrl: '/assets/images/coursera-logo.jpg',
            organization: 'Coursera',
            issueDate: 'Jan 2021',
            url: 'https://coursera.org/share/447d5a0475fac24a23fcdf12650e1725',
        },
        {
            name: 'Applied Machine Learning: Algorithms',
            imageUrl: '/assets/images/linkedin-name.jpg',
            organization: 'LinkedIn',
            issueDate: 'Jan 2021',
            url: '',
        },
    ],
}

const AccomplishmentsDetails = {
    enable: true,
    accomplishments: {
        patents: [],
        publications: [
            {
                name: 'SpinPad: A Secured PIN Number Based User authentication Scheme',
                date: '11/1/2018',
                publisher:
                    '2018 International Conference on Recent Trends in Advance Computing (ICRTAC)',
                url: {
                    IEEE: 'https://ieeexplore.ieee.org/document/8679257',
                },
                details: '',
            },
        ],
        projects: [
            {
                name: 'Collaborative Recommendation System Examining Serendipitous Items',
                date: 'August 2018 - October 2018',
                url: {},
                details:
                    'Built a recommendation system by optimizing the collaborative filtering using a novel method "Concise Satisfaction and Interest Injection (CSII). This method takes serendipitous items and suggests a top-N recommendation eliminating Matthew Effect in the e-Commerce industry. ',
            },
            {
                name: 'Hybrid Recommendation System',
                date: 'May 2018 - June 2018',
                url: {},
                details:
                    'Developed a hybrid recommendation system using content-based as well as collaborative filtering. WALS Algorithm of Tensorflow was used for collaborative filtering. Tested with Amazon dataset containing items list of apparel, toys, and books',
            },
        ],
        awards: [
            {
                name: 'Pattern Search and Visualisation - Winner',
                date: 'January 2018',
                issuer: 'KLA Tencor',
                url: {},
                details:
                    'Won the Pattern Search and Visualisation overnight hackathon conducted by KLA Tencor on January 6th 7th 2018 at SASTRA Deemed to be University',
            },
        ],
    },
}

const ContactDetails = {
    enable: true,
    name: 'Rahul Kalita',
    description: '',
    email: 'kalitarahul97gmail.com',
}

export {
    AboutDetails,
    SkillsDetails,
    SocialMediaDetails,
    EducationDetails,
    WorkExperienceDetails,
    AcheivementDetails,
    LicenseCertificateDetails,
    AccomplishmentsDetails,
    ContactDetails,
}
