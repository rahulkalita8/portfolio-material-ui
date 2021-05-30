const AboutDetails = {
    name: 'First LastName',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    resumeURL: '',
}

const SkillsDetails = {
    enable: true,
    whatIdo:
        'I learn and develop things. Small projects over the weekend, random tech talks and Reddit would interest me. I play table chess, tennis and cricket for fun. ',
    skills: [
        {
            skillName: 'C++',
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
            skillName: 'Java',
            SkillPercent: '100%',
        },
        {
            skillName: 'MySQL',
            SkillPercent: '70%',
        },
        {
            skillName: 'MongoDB',
            SkillPercent: '80%',
        },
        {
            skillName: 'Something',
            SkillPercent: '70%',
        },
        {
            skillName: 'Anything',
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
        enable: true,
        url: 'https://github.com',
    },
    twitter: {
        enable: true,
        url: 'https://github.com',
    },
    medium: {
        enable: true,
        url: 'https://github.com',
    },
    stackOverflow: {
        enable: true,
        url: 'https://github.com',
    },
    twitch: {
        enable: true,
        url: 'https://github.com',
    },
}

const EducationDetails = {
    enable: true,
    schools: [
        {
            name: 'University Exmaple 1',
            imageUrl: '/assets/images/SASTRA.jpg',
            imageTitle: 'SASTRA University',
            degree: "Bachelor's in Something",
            years: '2015-2019',
            grade: '',
            details: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
            ],
        },
        {
            name: 'University Example 2',
            imageUrl: '/assets/images/SASTRA.jpg',
            imageTitle: 'SASTRA University',
            degree: "Master's in Something",
            years: '2015-2019',
            grade: '',
            details: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
            ],
        },
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
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    details: ['HOLA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
                },
                {
                    role: 'Software Engineer 1',
                    timeline: 'Jul 2019 - Mar 2021',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    details: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    ],
                },
                {
                    role: 'Software Engineering Intern',
                    timeline: 'Jan 2019 - Jun 2019',
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        patents: [
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'Novemeber 2018',
                issuer: 'Patent Issuer',
                url: {
                    Patent: 'https://ieeexplore.ieee.org/document/8679257',
                },
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ],
        publications: [
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: '11/1/2018',
                publisher: 'Publishers Y',
                url: {
                    IEEE: 'https://ieeexplore.ieee.org/document/8679257',
                },
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ],
        projects: [
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                date: 'August 2018 - October 2018',
                url: {
                    Github: 'https://github.com',
                },
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                name: 'Lorem ipsum dolor sit amet',
                date: 'May 2018 - June 2018',
                url: {},
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
        ],
        awards: [
            {
                name: 'Lorem ipsum dolor sit',
                date: 'January 2018',
                issuer: 'Company X',
                url: {},
                details:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
        ],
    },
}

const ContactDetails = {
    enable: true,
    name: 'FirstName LastName',
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
