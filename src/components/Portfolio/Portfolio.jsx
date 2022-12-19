import { PortfolioCard } from "./PortfolioCards"

// Styling
import "./Portfolio.css"

//Assets
import img_01 from "../../assets/portfolio1.jpg"
import img_02 from "../../assets/portfolio2.jpg"
import img_03 from "../../assets/portfolio3.jpg"
import img_04 from "../../assets/portfolio4.jpg"
import img_05 from "../../assets/portfolio5.png"
import img_06 from "../../assets/portfolio6.jpg"


export const Portfolio = () => {
    return <div className="section portfolio_section" id="portfolio">
        <div className="section_intro">My Recent Work</div>
        <div className="section_title">Portfolio</div>
        <div className="portfolio_grid">
            {fakeProjects.map(item => <PortfolioCard {...item} key={item.id} />)}
        </div>
    </div>
}

const fakeProjects = [
    {
        title: "Crypto Currency Dashboard & Financial Visualization",
        id: 0,
        image: img_01,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
    {
        title: "Crypto Currency Dashboard & Financial Visualization",
        id: 2,
        image: img_02,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
    {
        title: "Crypto Currency Dashboard & Financial Visualization",
        id: 3,
        image: img_03,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
    {
        title: "Crypto Currency Dashboard & Financial Visualization",
        id: 4,
        image: img_04,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
    {
        title: "Crypto Currency Dashboard & Financial Visualization",
        id: 5,
        image: img_05,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
    {
        title: "Crypto Currency Dashboard & Financial Visualization",
        id: 6,
        image: img_06,
        githubRepo: "https://github.com/",
        liveDemo: ""
    },
]