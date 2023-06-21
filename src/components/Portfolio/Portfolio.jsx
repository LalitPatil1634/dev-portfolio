import { PortfolioCard } from "./PortfolioCards"

// Styling
import "./Portfolio.css"

//Assets
import img_01 from "../../assets/SS1.png"
import img_02 from "../../assets/SS2.png"
import img_03 from "../../assets/SS3.png"
import img_04 from "../../assets/SS4.png"
import img_05 from "../../assets/portfolio5.png"
import img_06 from "../../assets/portfolio6.jpg"


export const Portfolio = () => {
    return <div className="section portfolio_section" id="portfolio">
        <div className="section_intro">My Recent Work</div>
        <div className="section_title">Portfolio</div>
        <div className="portfolio_grid">
            {selfProjects.map(item => <PortfolioCard {...item} key={item.id} />)}
        </div>
    </div>
}

const selfProjects = [
    {
        title: "Amazon Clone using HTML and CSS",
        id: 0,
        image: img_01,
        githubRepo: "https://github.com/LalitPatil1634/amazon-prime-clone",
        liveDemo: "https://astonishing-kataifi-739cce.netlify.app"
    },
    {
        title: "Adventure Website",
        id: 2,
        image: img_02,
        githubRepo: "https://github.com/LalitPatil1634/Adventure-Website",
        liveDemo: "https://thunderous-cassata-a8ebb9.netlify.app"
    },
    {
        title: "Time Tracking Dashboard",
        id: 3,
        image: img_03,
        githubRepo: "https://github.com/LalitPatil1634/time-tracking-dashboard-project",
        liveDemo: "https://effortless-muffin-657f6c.netlify.app"
    },
    {
        title: "Portfolio",
        id: 4,
        image: img_04,
        githubRepo: "https://github.com/LalitPatil1634/dev-portfolio",
        liveDemo: "https://sweet-crumble-c9364c.netlify.app/"
    },
    {
        title: "Expense Management System",
        id: 5,
        image: img_05,
        githubRepo: "https://github.com/LalitPatil1634/Expense-Management-System",
        liveDemo: "https://extinct-teal-stockings.cyclic.app/"
    },
    {
        title: "Demo",
        id: 6,
        image: img_06,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
]