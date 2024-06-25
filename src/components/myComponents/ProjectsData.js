import LemonWireFrame from "../../assets/ProjectImages/Design/little lemon hi-fi wireframe.png";
import Fintrackr from "../../assets/ProjectImages/WebDev/FintrackR Desktop -2.png";
import Handicraft from "../../assets/ProjectImages/WebDev/Screenshot (98)-min.png";
import LemonSite from "../../assets/ProjectImages/WebDev/Coursera Capstone Desktop.png";
import Xlounge from "../../assets/ProjectImages/WebDev/Xlounge_blog_desktop 2.png";
import Xpertgear from "../../assets/ProjectImages/WebDev/XpertGear Desktop-min.png";
import Luckyshrub from "../../assets/ProjectImages/WebDev/Lucky Shrub Demo Site Desktop.png";
import StudentSystem from "../../assets/ProjectImages/Misc/Student System Tkinter.png";
import Task1 from "../../assets/ProjectImages/Database/Data Task 1.png"
import Task2 from "../../assets/ProjectImages/Database/Data Task 2.png"
import Task3 from "../../assets/ProjectImages/Database/Data Task 3.png"
import Task4 from "../../assets/ProjectImages/Database/Data Task 4.png"
import Kaizen from "../../assets/ProjectImages/Misc/Kaizen Calculcator.png"
import StudentMng from "../../assets/ProjectImages/Misc/Student management.png"
import Ytdownloader from "../../assets/ProjectImages/Misc/yt downloader.png"
import ArngrenProto from "../../assets/ProjectImages/Design/Arngren prototype.png"
import meme from "../../assets/ProjectImages/Misc/meme-generator.png"




const Projects = [
    {
        name: "Arngren Website Redesign",
        date:"17 May 2024",
        image: ArngrenProto,
        imageAlt: "Arngren redesign",
        link: "https://drive.google.com/file/d/1B4v9yc2e-I-i8P96dvWkP5YDRCtbGfrq/view?usp=sharing",
        category: "Design",
        info: ["- Figma", "- Diploma in I.T Course(Belgium Campus) assessment", "- Collaborated with a team member", "- I was responsible for the hi-fi design", "- I added animations and transitions on the wireframes"]
    },
    {
    name: "Little Lemon Form",
    date: "7 Jan 2024",
    image: LemonWireFrame,
    imageAlt: "Little Lemon Site Wireframes",
    link: "https://docs.google.com/document/d/e/2PACX-1vSbJtfiBzyx5IKTv9MLM35-KtQ8_ydD8meCGzazmXietQxRO85xl6WGPV28uEC03qNv2EdkGkHjLjJc/pub",
    category: "Design",
    info: ["- Figma", "- Coursera UX Design Assignment"]
},
{
    name: "'FinTrackR' SaaS",
    date: "20 Mar 2024",
    image: Fintrackr,
    imageAlt: "Finance management saas",
    link: "https://fintrackr-personal-finance-tracker.netlify.app/",
    category: "Web Development",
    info: ["- React | Tailwind CSS | ChartJs", "- Financial tracking and management web application", "- Part of internship program at Zidio Development", "- Collaborated with 5 members", "- I contributed to design and was hugely involved in development"]
},
{
    name: "'Handicraft' Shopify Store ",
    date: "5 Feb 2024",
    image: Handicraft,
    imageAlt: "",
    link: "",
    category: "Web Development",
    info: ["- Shopify", "- Freelance Project", "- I integrated a payment feature", "- Customised theme colors and layout", "- Added products and pages", "- Did copywriting and search engine optimisation"]
},
{
    name: "Restaurant Website",
    date: "30 Jan 2024",
    image: LemonSite,
    imageAlt: "",
    link: "https://coursera-capstone.netlify.app/",
    category: "Web Development",
    info: ["- React", "- Coursera Advanced React Capstone Project", "- Optimised for responsive design", "- Implemented dynamic controlled components for form validation"]
},
{
    name: "'XpertGear' Shopify Store",
    date: "20 Jan 2024",
    image: Xpertgear,
    imageAlt: "Xpertgear store",
    link: "",
    category: "Web Development",
    info: ["- Shopify | Canva", "- Personal Side Project", "- Configured payment gateway", "- Added products, pages and media", "- Designed logo", "Optimised images for performance","- Optimised pages for search engines", "- Added policies"]
},
{
    name: "'Xlounge' Blog Site",
    date: "23 Dec 2023",
    image: Xlounge,
    imageAlt: "Xlounge blog",
    link: "https://xlounge-blog.netlify.app/",
    category: "Web Development",
    info: ["- HTML | CSS | Eleventy.js | Nunjucks", "- Codementor.io Project", "- Configured static site generator 11ty"]
},
{
    name: "'Lucky Shrub' Website",
    date: "12 July 2023",
    image: Luckyshrub,
    imageAlt: "",
    link: "https://shiift38.github.io/Lucky-Shrub-Site/",
    category: "Web Development",
    info: ["- HTML | CSS | Javascript", "- Coursera web development fundamentals project","- Responsive design"]
},
{
    name: "Meme Generator",
    date: "28 May 2024",
    image: meme,
    imageAlt: "Meme generator",
    link: "https://meme-generator-reactwebapp.netlify.app/",
    category: "Miscellaneous",
    info: ["- React", "- Scrimba React.js project ", "- I utilised an API to fetch images to display", "- I programmed a react hook to render already-styled text dynamically"]
},
{
    name: "Youtube Downloader",
    date: "21 May 2023",
    image: Ytdownloader,
    imageAlt: "Pytube Application",
    link: "https://github.com/ShiiFt38/Youtube-Downloader",
    category: "Miscellaneous",
    info: ["- Python | Pytube | Custom Tkinter | Pyinstaller", "- Diploma in I.T Course (Belgium Campus) exercise", "- Original task was to build a downloader that works with a CLI interface", "- I made this a personal project and created a GUI", "- I included a functionality that enables the download options, audio or video", "- The app dynamically renders the youtube title after URL upload"]
},
{
    name: "Student Management System",
    date: "28 April 2024",
    image: StudentSystem,
    imageAlt: "",
    link: "https://github.com/ShiiFt38/School-Management-System",
    category: "Miscellaneous",
    info: ["- Python | Tkinter | SQLite3 | Pyinstaller", "- Diploma in I.T Course (Belgium Campus)", "- I developed a database programmatically using python scripts", "- Implemented CRUD functions", "- Created a executable file for easy app execution"]
},
{
    name: "'Global Events Data' Report",
    date: "7 November 2023",
    image: Task4,
    imageAlt: "Power BI report 4",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYjdkMjdkYzItYWMyZi00MmM5LTljNDMtN2M1Yjk0NzE3MjM0IiwidCI6ImVhMWE5MDliLTY2MDAtNGEyNS04MmE1LTBjNmVkN2QwNTEzYiIsImMiOjl9",
    category: "Database",
    info: ["- Microsoft Power BI", "- Diploma in I.T Course (Belgium Campus)", "- Report on global events sample data"]
},
{
    name: "'Global Country Teams' Report",
    date: "6 November 2023",
    image: Task3,
    imageAlt: "Power BI report 3",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOTRlOGYxNDItYTM4MS00N2NhLWJkOGMtODgxZTUwM2U3MTQyIiwidCI6ImVhMWE5MDliLTY2MDAtNGEyNS04MmE1LTBjNmVkN2QwNTEzYiIsImMiOjl9",
    category: "Database",
    info: ["- Microsoft Power BI", "- Diploma in I.T Course (Belgium Campus)", "- Report on sample data about global country teams and wins"]
},
{
    name: "'Damaged Vehicles Sample' Report",
    date: "1 November 2023",
    image: Task2,
    imageAlt: "Power BI report 2",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYTdlODE0NDktNjgxOS00NWE1LWIwMTMtM2Q4NDdjYjQ5NTBmIiwidCI6ImVhMWE5MDliLTY2MDAtNGEyNS04MmE1LTBjNmVkN2QwNTEzYiIsImMiOjl9",
    category: "Database",
    info: ["- Microsoft Power BI", "- Diploma in I.T Course (Belgium Campus)", "- Report on damaged vehicles sample data"]
},
{
    name: "'Global Financial Data' Report",
    date: "31 October 2023",
    image: Task1,
    imageAlt: "Power BI report 1",
    link: "https://app.powerbi.com/view?r=eyJrIjoiYmY3MzRhNWYtOWZiMy00NTNkLTgyYmQtNDc2NGVlMDBhNWQ0IiwidCI6ImVhMWE5MDliLTY2MDAtNGEyNS04MmE1LTBjNmVkN2QwNTEzYiIsImMiOjl9",
    category: "Database",
    info: ["- Microsoft Power BI", "- Diploma in I.T Course (Belgium Campus)", "- Report on global financial sample data"]
},
{
    name: "KPI Calculator",
    date: "7 June 2023",
    image: Kaizen,
    imageAlt: "Calculator",
    link: "https://github.com/ShiiFt38/KAIZEN-Business-Calculator",
    category: "Miscellaneous",
    info: ["- C# | .NET Framework", "- Personal Project", "- Calculator desktop application"]
},
{
    name: "Student Management System",
    date: "26 May 2023",
    image: StudentMng,
    imageAlt: "Management system",
    link: "https://github.com/ShiiFt38/Student-Management-System-C-",
    category: "Miscellaneous",
    info: ["- C# | .NET Framework | SQL | MS SQL Server", "- Diploma in I.T Course (Belgium Campus)", "- Worked with 2 team members","- Implemented functional user login and signup system", "- Incorporated CRUD functions", "- Designed and developed database for the system"]

}

];

export default Projects