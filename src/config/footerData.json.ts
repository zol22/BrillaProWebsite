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
		link: "/#about",
	},
	{
		text: "My Work",
		link: "/portfolio",
	},
	{
		text: "Pricing",
		link: "/#pricing",
	},
	{
		text: "Contact",
		link: "/#contact",
	},
]

export default footerData