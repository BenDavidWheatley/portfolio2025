const MacOne= require('../../media/MACOne.png');
const MacTwo= require('../../media/MACTwo.png');

const projects = [
    {
        title: "Motion Analysis Corp",
        description: `The website Motion Analysis is built using WordPress and the Oxygen theme. 
            It offers motion capture solutions, showcasing various hardware and software products designed for 
            industries like sports, research, and animation. The design is sleek and professional, emphasizing its 
            cutting-edge technology. Key features include sections for software products, hardware offerings 
            (such as cameras and markers), applications (like sports performance and VR training), and case studies. 
            This website is focused on providing detailed information about its products and services, as well as 
            offering a demo booking feature for potential clients.`,
        images:[{
            image: MacOne,
            altTag: '',
        },
        {
            image: MacTwo,
            altTag: 'Tiger in the forest',  
        }
        ],
        languages: [
            "Wordpress", 
            "Javascript", 
            "HTML", 
            "CSS", 
            "PHP", 
            "Figma"],
        link: "https://motionanalysis.com/"
    }, 
    {
        title: "Thembisa trust - coming soon",
        description: "Launching soon", 
        images:[{
            image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
            altTag: 'Tiger in the forest',
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/148/124/small/royal-bengal-tiger-see-the-target-photo.jpg",
            altTag: 'Tiger in the forest',  
        }
        ],
        languages: [
            "Wordpress",
            "Oxygen Theme",
            "Javascript",
            "HTML",
            "CSS",
            "CAF integration",
            "Figma"
        ],
        link: "https://thembisatrust.org/"
    },
    {
        title: "Portfolio 2025",
        description: `This website is a personal portfolio showcasing my skills and projects. 
            It is built using React, Redux, and styled-components, with a focus on modern design and user experience. 
            The site features a homepage with an animated hero section, an about section with information about me and my skills, 
            a projects section with detailed descriptions and images, and a contact form for potential clients. 
            The design is clean and minimalistic, with a dark theme and bold typography. Key features include a responsive layout, 
            smooth animations, and interactive elements like hover effects and scroll animations.`,
        images:[{
            image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
            altTag: 'Tiger in the forest',
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/148/124/small/royal-bengal-tiger-see-the-target-photo.jpg",
            altTag: 'Tiger in the forest',  
        }
        ],
        languages: [
            "React", 
            "Redux toolkit", 
            "Javascript", 
            "HTML", 
            "CSS", 
            "Jest", 
            "Node",
            "Figma"],
        link: ''
    },
    {
        title: "RESTful API partOne",
        description: `This Node.js-based RESTful API, developed for a CodeCademy project, 
            implements CRUD operations for managing data. Built with Node.js and Express, 
            it handles HTTP routing efficiently. The app utilizes Passport for password sanitization 
            and PostgreSQL for database management. It emphasizes scalability, best practices, and 
            includes Swagger for API documentation, providing an interactive interface for exploring API endpoints.`,
        images:[{
            image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
            altTag: 'Tiger in the forest',
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/148/124/small/royal-bengal-tiger-see-the-target-photo.jpg",
            altTag: 'Tiger in the forest',  
        }
        ],
        languages: [
            "Node",
            "Express",
            "Passport",
            "Postman",
            "PostgreSQL",
            "swagger",

        ],
        link: `https://github.com/BenDavidWheatley/redditFeeds`
    },
    {
        title: "RedditFeeds",
        description: `The "RedditFeeds" project, wireframed and designed in Figma, uses React and 
            Redux Toolkit for state management and fetching data from Reddit's public API. The app allows 
            users to view posts from subreddits, displaying titles, images, and links. It leverages 
            local storage to save titles of user-selected subreddits, dynamically creating personalized feeds. 
            The use of React for components and Redux Toolkit for efficient state handling ensures scalability 
            and smooth interaction, while the Figma wireframe guided the app's design.`,
        images:[{
            image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
            altTag: 'Tiger in the forest',
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/148/124/small/royal-bengal-tiger-see-the-target-photo.jpg",
            altTag: 'Tiger in the forest',  
        }
        ],
        languages: [
            "React",
            "Redux toolkit",
            "API",
            "Javascript",
            "HTML",
            "CSS",
            "Figma"
        ],
    },
    {
        title: 'Jammmin',
        description: `The Jammmin app is built using React and integrates with the Spotify API to 
            allow users to search and create custom playlists. Users can enter search terms, view Spotify's 
            results, and add tracks to their playlists. It leverages React's component-based architecture for 
            dynamic content and user interactions, providing a seamless experience. The app also incorporates 
            OAuth for Spotify authentication, making it easy for users to access and manage their music libraries 
            directly through the app.`,
        images:[{
            image: '',
            altTag: 'Tiger in the forest',
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/148/124/small/royal-bengal-tiger-see-the-target-photo.jpg",
            altTag: 'Tiger in the forest',  
        }
        ],
        languages: [
            "React",
            "API",
            "Javascript",
            "HTML",
            "CSS",
            "Figma"
        ],
    }
];

export default projects;