import './App.css';
import MediaQuery from 'react-responsive';
import { Button, SideNav } from './lib/index.js';

function App() {

  const links = {
    "internal" : [
      {
        "link" : "/about",
        "title" : "ABOUT"
      },
      {
        "link" : "/photo",
        "title" : "PHOTO"
      },
      {
        "link" : "/music",
        "title" : "MUSIC"
      },
      {
        "link" : "/software",
        "title" : "SOFTWARE"
      }
    ],
    "external" : [
      {
        "link" : "https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg",
        "title" : "SPOTIFY"
      },
      {
        "link" : "https://www.instagram.com/abhi.velaga/",
        "title" : "INSTAGRAM"
      },
      {
        "link" : "https://www.instagram.com/abhi.film/",
        "title" : "FILM INSTAGRAM"
      },
      {
        "link" : "mailto:abhinav.velaga@utexas.edu",
        "title" : "CONTACT"
      }
    ]
  }

  return (
    <div className="App">
      {/* <Button /> */}
      <SideNav activeLink={"PHOTO"} mobile={false} title={"ABHI VELAGA"} subtitle={"austin, tx."} links={links}/>
    </div>
  );
}

export default App;