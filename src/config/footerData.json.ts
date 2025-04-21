export interface footerItem{
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}


 const footerData: footerItem[] =  [
    {
        text: "Home",
		link: "/",
    },
    {
		text: "About",
		link: "/about",
	},
	{
		text: " Services",
		link: "/services",
	},
	{
		text: "Gallery",
		link: "/gallery",
	},
	{
		text: "Contact",
		link: "#contact",
	},
]

export default footerData