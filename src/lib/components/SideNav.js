import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import './styles/components.css';

export default function SideNav({activeLink, mobile, title, subtitle, links}){

  let [collapsed, setCollapsed] = useState((activeLink === "HOME" || !mobile) ? false : true);
  const internalLinks = links["internal"];
  const externalLinks = links["external"];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  const activeStyle = {
    backgroundColor: 'red',
    color: 'white',
    width: '160px'
  }

  const activeMobileStyle = {
    backgroundColor: 'red',
    color: 'white',
    width: '203px'
  }

  const activeTextStyle = {
    color: 'white',
  }
  const black = {
    color: 'black'
  }

  return (
    <div className={collapsed && activeLink != "HOME" ? "nav-back" : ""} >
      <div className={collapsed && (activeLink != "PHOTO" && activeLink != "MIAMI" && activeLink != "PORTFOLIO" && activeLink != "USERVOID" && activeLink != "HOME" && activeLink != "PUBLISHED") ? "header-back" : {}} >
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
                <a href={value.link} target="_blank" key={index}>
                  <div className="external-link">{value.title}</div>
                </a>
              )
            })}
          </div>
        }
      </div>
    </div >
    </div>
  )
}