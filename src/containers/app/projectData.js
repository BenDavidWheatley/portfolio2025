const projects = [
    {
        title: "Motion Analysis",
        description: `Motion Analysis is a US-based manufacturer of motion capture technology. 
        In 2021 I came on board to rebuild their website, and I have been managing and improving it ever since.
        I built the website using WordPress and the Oxygen theme. The design is sleek and professional, emphasizing i
        ts cutting-edge technology. Key features include sections for software products, hardware offerings 
        (such as cameras and markers), applications (like sports performance and VR training), 
        case studies as well as support, sales and demo enquiry forms that integrate with the company’s CRM system (sales).
        We're in the early stages now of building an online shop to sell spare parts.`,

        images:[{
            image: false,
            altTag: '',
        },
        {
            image: false,
            altTag: '',  
        }
        ],
        languages: [
            "Wordpress", 
            "wooCommerce",
            "Oxygen Theme",
            "Javascript", 
            "HTML", 
            "CSS", 
            "PHP", 
            "Figma"],
        link: false,
        site: "https://motionanalysis.com/"
    },
   
    {
        title: "eCommerce application REST API",
        description: `This REST API allows eCommerce users to register and login via the API and to manage accounts, 
            carts and orders. Developed for a CodeCademy project, it implements CRUD operations for managing data. 
            Built with Node.js and Express, it handles HTTP routing efficiently. The app utilizes Passport for password 
            sanitization and PostgreSQL for database management. It emphasizes scalability, best practices, and includes 
            Swagger for API documentation, providing an interactive interface for exploring API endpoints. 
            I am currently working on the full-stack element, which will link the front-end to the back.`,
        images:[{
            image: false,
            altTag: ''
        },
        {
            image: false,
            altTag: ''
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
        link: 'https://github.com/BenDavidWheatley/RESTful_API_partOne',
        site: false
    },
    {
        title: "Reddit Feeds app",
        description: `The "Reddit Feeds" project - wireframed and designed in Figma - uses React and Redux Toolkit 
            for state management and fetching data from Reddit's public API. The app allows users to view and 
            filter posts and comments from subreddits, displaying titles, images, and links. 
            It leverages local storage to save titles of user-selected subreddits, dynamically 
            creating personalised feeds. The use of React for components and Redux Toolkit for efficient state 
            handling ensures scalability and smooth interaction. Unit tests for components used Jest.`,
        images:[{
            image: false,
            altTag: ''
        },
        {
            image: false,
            altTag: ''
        }
        ],
        languages: [
            "React",
            "Redux toolkit",
            "Reddit API",
            "Javascript",
            "HTML",
            "CSS",
            "Jest",
            "Figma"
        ],
        link: 'https://github.com/BenDavidWheatley/redditFeeds',
        site: false
    },
    {
        title: 'Spotify Jammmin app',
        description: `The 'Jammmin' app is built using React and integrates with the Spotify API to allow users to 
            search and create custom playlists. Users can enter search terms, view results from Spotify and add tracks 
            to their playlists. The app leverages React's component-based architecture for dynamic content and user interactions, 
            providing a seamless experience. The app also incorporates OAuth for Spotify authentication, making it 
            easy for users to access and manage their music libraries directly through the app.`,
        images:[{
            image: false,
            altTag: ''
        },
        {
            image: false,
            altTag: ''  
        }
        ],
        languages: [
            "React",
            "Spotify API",
            "Javascript",
            "HTML",
            "CSS",
            "Figma"
        ],
        link: 'https://github.com/BenDavidWheatley/jammmin',
        site: 'https://jammminbeats.netlify.app/'
    },
    {
        title: 'Online store - Wheatley studios',
        description: `The project is a full-stack online store, developed for the CodeSpace boot camp. 
            It features product viewing, cart management, user account creation, and newsletter subscription, 
            with data interactions via APIs. The store allows users to browse products, modify their cart, sign up, 
            and log in. The backend handles account creation, password hashing, and cart management through local storage. 
            Additionally, the checkout process collects delivery details and uses the Google Maps API for location display. 
            It's designed to demonstrate separating frontend and backend functionalities in web development.`,
        images:[{
            image: false,
            altTag: ''
        },
        {
            image: false,
            altTag: ''  
        }
        ],
        languages: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "PHP",
            "SQL",
            "API",
            "Slim framework"
        ],
        link: 'https://github.com/BenDavidWheatley/onlineStoreFullStack',
        site: false
    },
    {
        title: 'SQL - Authorization - app for Inner city library',
        description: `This web app was developed using PHP, MySQL, and HTML. 
            It allows librarians and library members to access book details online with secure authentication. 
            Members can search for books, while librarians have additional access to manage records and search for authors. 
            The database structure includes linked tables for books and authors, enabling organized data retrieval. 
            The app also features sorting options for books, authors, and genres.`,
        images:[{
            image: false,
            altTag: ''
        },
        {
            image: false,
            altTag: '' 
        }
        ],
        languages: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "PHP",
            "MySQL"
        ],
        link: 'https://github.com/BenDavidWheatley/SQL_authorization_app',
        site: false
    },

    {
        title: "The Thembisa trust - coming soon",
        description: `Having lived in South Africa for a few years, I am passionate about the vibrant 
            country and in upskilling local communities. The way I help is as a Trustee of The Thembisa Trust, 
            an Oxford-based charity that raises money to support grassroots projects in Southern Africa. 
            I put my web development skills to use here too. We are currently redesigning and developing the charity's website.`, 
        images:[{
            image: false,
            altTag: ''
        },
        {
            image: false,
            altTag: ''  
        }
        ],
        languages: [
            "Figma",
            "Wordpress",
            "Javascript",
            "HTML",
            "CSS",
            "CAF integration"
        ],
        link: false,
        site: "https://thembisatrust.org/"
    }
];

export default projects;