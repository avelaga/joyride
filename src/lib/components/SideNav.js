import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import './styles/components.css';

export default function SideNav({title, subtitle, links}){

  const internalLinks = links["internal"];
  const externalLinks = links["external"];

  const [activeLink, setActiveLink] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    const urlArr = window.location.href.split("/");
    const currPage = urlArr[urlArr.length-1];
  
    for(let link of internalLinks){
      if(link["link"] === "/"+currPage){
        setActiveLink(link["title"]);
      }
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  let [collapsed, setCollapsed] = useState(width > 768 ? false : true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const activeStyle = {
    backgroundColor: 'red',
    color: 'white',
    width: '160px'
  };

  const activeTextStyle = {
    color: 'white'
  };

  return (
    <div className="nav-back">
      <div className="header-back" >
        <div className="sidenav">
          <div>

            {/* desktop  */}
            < MediaQuery minDeviceWidth={500} >
              <a href="/"><div className="nav-title" >{title}</div></a>
            </MediaQuery>

            {/* mobile  */}
            < MediaQuery maxDeviceWidth={500} >
              <div className="nav-header">
                <a href="/"><div className="nav-title" >{title}</div></a>
                {collapsed && <div className="menu-button" onClick={toggleCollapsed}>+ MENU</div>}
                {!collapsed && <div className="menu-button" onClick={toggleCollapsed}>- MENU</div>}
              </div>
            </MediaQuery>

          </div>

        <div className="subtitle">{subtitle}</div>

        {!collapsed &&
          <div className="appear">

            {internalLinks.map((value, index) => {
              return (            
                <a href={value.link} key={index}>
                  <div className="link">
                    <div className="link-color" style={activeLink === value.title ? activeStyle : {}}></div>
                    <div className="link-text" style={activeLink === value.title ? activeTextStyle : {}}>
                      <div>{value.title}</div>
                    </div>
                  </div>
                </a>
              )
            })}

            <div className="external-link"></div>

            {externalLinks.map((value, index) => {
              return (
                <a href={value.link} target="_blank" rel="noreferrer" key={index}>
                  <div className="external-link">{value.title}</div>
                </a>
              )
            })}
          </div>
        }
      </div>
    </div>
  </div>)
}