# joyride
 a react ui component library by abhi velaga

## side navigation bar
<img src="https://media.giphy.com/media/YbFaD8r0EVXImIAa0B/giphy.gif" width="500" height="500" />

an animating, mobile responsive navigation bar that's pinned to the top left of the desktop screen and renders two sets of differently styled links for use as page navigation links and external links

*usage:*
```jsx
import { SideNav } from 'joyride';

export default function App() {

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
	};

	return (
		<div>
			<SideNav title={"ABHI VELAGA"} subtitle={"austin, tx."} links={links}/>
		</div>
	)
};

```