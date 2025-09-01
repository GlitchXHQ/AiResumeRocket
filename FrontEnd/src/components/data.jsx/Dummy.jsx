import banda from "../../assets/Templates/ProfessionalBanda.jpg"

const Dummy = {
    image: {banda}, // 🖼️ Replace with actual profile image URL

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

    skills: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'React' },
        { id: 3, name: 'MySQL' },
        { id: 4, name: 'React Native' }
    ]
}

export default Dummy;
