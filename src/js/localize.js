// import i18next from "i18next"

i18next.init(
	{
		lng: 'cs',
		debug: true,
		resources: {
			cs: {
				translation: {
					'about-heading': 'Ahoj, jmenuji se Radovan',
					'about-text': `Jsem začínající front-end developer z Kroměříže.
                        Od doby ukončení studia jsem vystřídal různá zaměstnání.
                        Asi před rokem jsem se začal ve svém volném čase zajímat o web development a od té doby se 
                        neustále zlepšuji, poznávám nové technologie a snažím se vypilovat své stávající znalosti.
						Čím víc toho vím o web-developmentu tím je pro mě psaní kódu a řešení problémů větší zábava.
						Momentálně dělám Front-End a začínám se učit Back-end.`,
					'projects-heading': 'Mé projekty',
					'projects-subheading': 'Tady jsou některé z mých projektů',
					'contact-text': 'Kontakt',
					text1: 'Aplikace pro ukládání receptů a ingrediencí s nimi spojených.',
					text2: 'Tréninková aplikace pro ukládání a sledování cviků.',
					text3: 'Mapová aplikace na pro vyhledávání měst a informací o nich.',
					text4: 'Vyhledávač muziky a textů.'
				}
			},
			en: {
				translation: {
					'about-heading': 'Hello, my name is Radovan',
					'about-text': `I am a begginer front-end developer from Czech Republic.
                              Since the time i finished my studies i have had few different jobs.
                              About a year ago i tried web-development and since then i am constantly improving myself and learning new technologies.
							  The more i know about coding the the more exciting and fun it is to solve various problems with it.
							  Right now i am working on the Front-End and starting to learn Back-End`,
					'projects-heading': 'My Projects',
					'projects-subheading': 'Here are some of my projects',
					'contact-text': 'Contact',
					text1: 'Aplication used for storing recipes and ingredients used within the recipes.',
					text2: 'Traning app used for storing and running exercises.',
					text3: 'Map aplication used to search for cities and information about them.',
					text4: 'Song and Lyrics finder.'
				}
			}
		}
	},
	() => {
		updateContent();
	}
);

function updateContent() {
	document.querySelector('.about-heading').innerHTML = i18next.t('about-heading');
	document.querySelector('.about-text').innerHTML = i18next.t('about-text');
	document.querySelector('.projects-heading').innerHTML = i18next.t('projects-heading');
	document.querySelector('.text1').innerHTML = i18next.t('text1');
	document.querySelector('.text2').innerHTML = i18next.t('text2');
	document.querySelector('.text3').innerHTML = i18next.t('text3');
	document.querySelector('.text4').innerHTML = i18next.t('text4');
	document.querySelector('.contact-text').innerHTML = i18next.t('contact-text');
}

const changeLang = lang => {
	i18next.changeLanguage(lang);
};

i18next.on('languageChanged', () => {
	updateContent();
});
