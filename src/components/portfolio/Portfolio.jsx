import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["All", "NextJS", "Laravel"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/airbnb.png",
        title: "Airbnb",
        meta: "Nextjs",
        portfolioLink: "https://booking-nu-khaki.vercel.app/",
        githubLink: "https://github.com/yoannfab/airbnb"
      },
      {
        img: "/img/portfolio/netflix.png",
        title: "Netflix",
        meta: "Nextjs",
        portfolioLink: "https://netflix-sand-psi.vercel.app/",
        githubLink: "https://github.com/yoannfab/netflix"
      },
      {
        img: "/img/portfolio/la-haute-couture.png",
        title: "Clothing Shop",
        meta: "Laravel",
        portfolioLink: "https://la-haute-couture.com/",
        githubLink: "https://github.com/yoannfab/laravel-ecommerce"
      },
      {
        img: "/img/portfolio/laravelcinephile.png",
        title: "Movie Reviews",
        meta: "Laravel",
        portfolioLink: "http://laravelcinephile.com/",
        githubLink: "https://github.com/yoannfab/laravel-movies"
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/airbnb.png",
        title: "Airbnb",
        meta: "Nextjs",
        portfolioLink: "https://booking-nu-khaki.vercel.app/",
        githubLink: "https://github.com/yoannfab/airbnb"
      },
      {
        img: "/img/portfolio/netflix.png",
        title: "Netflix",
        meta: "Nextjs",
        portfolioLink: "https://netflix-sand-psi.vercel.app/",
        githubLink: "https://github.com/yoannfab/netflix"
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/la-haute-couture.png",
        title: "Clothing Shop",
        meta: "Laravel",
        portfolioLink: "https://la-haute-couture.com/",
        githubLink: "https://github.com/yoannfab/laravel-ecommerce"
      },
      {
        img: "/img/portfolio/laravelcinephile.png",
        title: "Movie Reviews",
        meta: "Laravel",
        portfolioLink: "http://laravelcinephile.com/",
        githubLink: "https://github.com/yoannfab/laravel-movies"
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="yoann_tm_section" id="portfolio">
      <div className="yoann_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="yoann_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>My Portfolio</h3>
                </div>
              </div>
            </div>
            {/* End yoann_tm_title */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}

                <div className="portfolio_list has-effect">
                  <Gallery>
                    {tabListContent.map((tabContent, i) => (
                      <TabPanel key={i}>
                        <ul className="gallery_zoom">
                          {tabContent.porftoliItems.map((val, i) => (
                            <li
                              key={i}
                              data-aos="fade-right"
                              data-aos-duration="1200"
                              data-aos-delay={val.delayAnimation}
                            >
                              <div className="inner">
                                <div className="entry yoann_tm_portfolio_animation_wrap">
                                  <Item
                                    original={val.img}
                                    thumbnail={val.img}
                                    width={1800}
                                    height={1000}
                                  >
                                    {({ ref, open }) => (
                                      <img
                                        src={val.img}
                                        alt="portfolio"
                                        role="button"
                                        ref={ref}
                                        onClick={open}
                                      />
                                    )}
                                  </Item>
                                </div>
                                <div className="mobile_title">
                                  <h3>
                                    <a
                                      href={val.portfolioLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {val.title}
                                    </a>
                                  </h3>
                                  <span>
                                  <a 
                                    href={val.githubLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    >
                                      <i className="devicon-github-original-wordmark colored github-icon"></i>
                                  </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                    ))}
                  </Gallery>
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
