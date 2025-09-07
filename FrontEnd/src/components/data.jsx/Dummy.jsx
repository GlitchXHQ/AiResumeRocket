import banda from "../../assets/Templates/ProfessionalBanda.jpg"

const Dummy = {
    image: banda ,
    firstName: 'James',
    lastName: 'Carter',
    jobTitle: 'Full Stack Developer',
    address: '525 N Tryon Street, NC 28117',
    phone: '(123)-456-7890',
    email: 'example@gmail.com',
    themeColor: "#ff6666",
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    experience: [
        {
            id: 1,
            jobTitle: 'Full Stack Developer',
            companyName: 'Amazon',
            city: 'New York',
            state: 'NY',
            startDate: 'Jan 2021',
            endDate: '',
            currentlyWorking: true,
            workSummary:
                '• Designed, developed, and maintained full-stack applications using React and Node.js.\n' +
                '• Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers.\n' +
                '• Maintained the React Native in-house organization application.\n' +
                '• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems.'
        },
        {
            id: 2,
            jobTitle: 'Frontend Developer',
            companyName: 'Google',
            city: 'Charlotte',
            state: 'NC',
            startDate: 'May 2019',
            endDate: 'Jan 2021',
            currentlyWorking: false,
            workSummary:
                '• Designed, developed, and maintained front-end applications using React.\n' +
                '• Implemented responsive user interfaces ensuring seamless user experiences across various devices and browsers.\n' +
                '• Maintained React Native in-house organization application.\n' +
                '• Worked with RESTful APIs for communication between the front-end and back-end.'
        }
    ],

    education: [
        {
            id: 1,
            universityName: 'Western Illinois University',
            startDate: 'Aug 2018',
            endDate: 'Dec 2019',
            degree: 'Master',
            major: 'Computer Science',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            universityName: 'XYZ University',
            startDate: 'Aug 2014',
            endDate: 'May 2018',
            degree: 'Bachelor',
            major: 'Information Technology',
            description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ],

    // 🆕 Projects Section
    projects: [
        {
            id: 1,
            name: "Portfolio Website",
            date: "Mar 2023",
            link: "https://example.com",
            about: "A personal portfolio website built using React, Tailwind CSS, and deployed on Vercel."
        },
        {
            id: 2,
            name: "E-commerce App",
            date: "Jan 2022",
            link: "https://example.com/shop",
            about: "Developed a full-stack e-commerce application using MERN stack with Stripe integration for payments."
        }
    ],
    skills:[
        {
            name:"Language",
            heading:" C, C++, Java, JavaScript (ES6+)" 
        }
    ]
}

export default Dummy;
