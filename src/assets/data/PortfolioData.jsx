import dashboardImg from "../images/dashboard.png"
import ecomImg from "../images/ecom.png"
import salonImg from "../images/salon.png"
import noteImg from "../images/note.png"
import portImg from "../images/port.png"
import portfolioImg from "../images/portoflio.png"
import movieImg from "../images/movie.png"
import contactImg from "../images/contact.png"
import textImg from "../images/text.png"


const portfolios = [
    {
      id: "01",
      imgUrl: movieImg,
      category: "Frontend",
      title: "Movie Info Website",
      description:
        "It is a responsive movie info website where we can find details about different movies and web series.TMDB api has been used",
      technologies: ["React", "Redux-Toolkit", "Sass"],
      siteUrl: "https://movie-info-app-three.vercel.app",
      github: "https://github.com/Hrithik100/movie_info_app"
    },
    {
      id: "02",
      imgUrl: ecomImg,
      category: "Full-Stack",
      title: "Ecommerce Website",
      description:
        "It is a responsive ecommerce website having different role based functionalities for user and admin and payment integration",
      technologies: ["React", "Bootstrap", "Context-Api", "Node.js", "MongoDB","Express"],
      siteUrl: "https://ecom-client-sigma.vercel.app",
      github: "https://github.com/Hrithik100/ecom"
    },
    {
      id: "03",
      imgUrl: salonImg,
      category: "Frontend",
      title: "Ipsa website",
      description:
        "It a salon booking website where we can add items from menu and book for a specific date",
      technologies: ["React", "Material UI"],
      siteUrl: "https://salon-phi.vercel.app",
      github: "https://github.com/Hrithik100/salon"
    },
    {
      id: "04",
      imgUrl: portfolioImg,
      category: "Frontend",
      title: "Portfolio",
      description:
        "It is a responsive portfolio created using react js and tailwind css",
      technologies: ["React", "Tailwind Css"],
      siteUrl: "https://portfolio-react-nine-tau.vercel.app",
      github: "https://github.com/Hrithik100/portfolio_react"
    },
    {
      id: "05",
      imgUrl: contactImg,
      category: "Frontend",
      title: "Contact Management Website",
      description:
        "It is a responsive contact management app having crud functionalities created using react js, redux toolkit and tailwind css",
      technologies: ["React", "Redux-Toolkit", "Tailwind Css"],
      siteUrl: "https://contact-management-lemon.vercel.app",
      github: "https://github.com/Hrithik100/contact_management"
    },
    {
      id: "06",
      imgUrl: textImg,
      category: "Frontend",
      title: "Text utility website",
      description:
        "It is a text utility app where we can do text utility functions created using react js and bootstrap",
      technologies: ["React", "Bootstrap"],
      siteUrl: "https://text-utils-swart.vercel.app",
      github: "https://github.com/Hrithik100/text_utils"
    },
    {
      id: "07",
      imgUrl: dashboardImg,
      category: "Frontend",
      title: "Omnibiz dashboard",
      description:
        "It is a admin dashboard created using react js and material ui",
      technologies: ["React", "Material Ui"],
      siteUrl: "",
      github: ""
    },
    {
      id: "08",
      imgUrl: noteImg,
      category: "Full-Stack",
      title: "E-Note website",
      description:
        "It is a note collecting website having crud functionalities and authentication",
      technologies: ["React", "Context-Api", "Bootstrap", "Node.js", "MongoDB","Express"],
      siteUrl: "",
      github: "https://github.com/Hrithik100/notebook_app"
    },
    {
      id: "09",
      imgUrl: portImg,
      category: "Frontend",
      title: "Portfolio Page",
      description:
        "It is simple portfolio landing page",
      technologies: ["Html","Css","Vanilla Javascript"],
      siteUrl: "",
      github: "https://github.com/Hrithik100/portfolio"
    },
  ];
  
  export default portfolios;