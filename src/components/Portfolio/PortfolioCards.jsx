export const PortfolioCard = (props) => {
  return <div className="portfolio_card">
      <img className="portfolio_img" src={props.image} alt="portfolio1.jpg" />
      <div className="portfolio_content">
          <div className="portfolio_title">{props.title}</div>
          <div className="portfolio_btns">
              <a href={props.githubRepo} target="_blank" rel="noreferrer">
                  <button className="sec_btn">GitHub</button>
              </a>
              <a href={props.liveDemo} target="_blank" rel="noreferrer">
                  <button>Demo</button>
              </a>
          </div>
      </div>
  </div>
}