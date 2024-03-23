import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // edited by kingisdave
		screens:{
			'bit': '320px',
			// => @media (min-width: 320px) { ... }
			
			'xx': '374px',
			// => @media (min-width: 374px) { ... }

			'xxe': '457px',
			// => @media (min-width: 457px) { ... }

			'xs': '520px',
			// => @media (min-width: 520px) { ... }

			'xsl':'600px',
			// => @media (min-width: 6000px) { ... }

			'sm': '680px',
      		// => @media (min-width: 680px) { ... }

			'sl':'760px',
			// => @media (min-width: 760px) { ... }

			'md': '820px',
			// => @media (min-width: 820px) { ... }

			'ml':'900px',
			// => @media (min-width: 900px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
				'lint':'0 1px 0 #091e4240',	
				'simp-card':'0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%)',
				'splash': '-1px 1px 15px rgba(0,0,0,0.1), 1px -1px 15px rgba(0,0,0,0.1)',
				'art':' -1.2px -0.5px 3px 0.3px rgba(0,0,0, 0.1), 1.2px 3px 5px 1.5px rgba(0,0,0,0.2)',
			},

			borderWidth: {
				'1.5':'1.5px',
				'1.8':'1.8px',
				'2.5':'2.5px',
				'3':'3px',
				'10':'10px',
				'12':'12px',
				'15':'15px',
				'18':'18px',
				'20':'20px',
			},
			borderRadius: {
				'4xl': '1.75rem',
			},

			maxWidth: {
				'1/3': '33.33%',
				'hf': '50%',
				'2/3': '66.66%',
				'3/4' :'75%',
				'4/5' : '80%',
				'2/5':'40%',
				'1/5':'20%',
				'3/5' : '60%',
				'xsm': ' 560px',
				'mx2h': '200px',
        'mx2.2h': '220px',
				'mx2.5h': '250px',
				'mx3h':'300px',
				'mx4h':'400px',
			},

			minWidth:{
				'1/3': '33.33%',
				'hf': '50%',
				'2/3': '66.66%',
				'3/4' :'75%',
				'4/5' : '80%',
				'2/5':'40%',
				'1/5':'20%',
				'3/5' : '60%',
				'xsm': ' 560px',
				'mx2h': '200px',
				'mx3h':'300px',
				'mx2.5h': '250px',
				'mx1.5h': '150px',
				'mx1h':'100px',
			},
			 
			minHeight: {	
				'1h':'100px',
				'1.2h':'120px',
				'1.5h':'150px',
				'2h':'200px',
				'2.5h':'250px',
				'72': '18rem',
				'2.8h':'208px',
				'3h':'300px',
				'4h':'400px',
				'30v':'30vh',			
				'40v':'40vh',			
				'50v':'50vh',			
				'55v':'55vh',			
				'60v':'60vh',	
				'65v':'65vh',		
				'70v':'70vh',
				'75v':'75vh',			
				'80v':'80vh',				
				'85v':'85vh',
				'86v':'86vh',
				'87v':'87vh',
				'88v':'88vh',	
				'89v':'89vh',
				'90v':'90vh',
				'91v':'91vh',
				'92v':'92vh',
				'93v':'93vh',
				'94v':'94vh',
				'95v':'95vh',
				'96v':'96vh',
				'97v':'97vh',
			},

			maxHeight: {			
				'30v':'30vh',			
				'40v':'40vh',			
				'50v':'50vh',			
				'60v':'60vh',	
				'65v':'65vh',		
				'70v':'70vh',
				'75v':'75vh',			
				'80v':'80vh',	
				'85v':'85vh',
				'88v':'88vh',
				'89v':'89vh',			
				'90v':'90vh',
				'92v':'92vh',
				'93v':'93vh',
				'94v':'94vh',
				'95v':'95vh',
				'96v':'96vh',
				'97v':'97vh',
			},

			spacing: {
				'13':'3.25rem',
				'15':'3.75rem',
				'17':'4.33rem',
				'18':'4.66rem',
				'21':'5.25rem',
				'22':'5.5rem',
				'23':'5.75rem',
				'25':'6.25rem',
				'1.5h':'150px',
        '1.7h': '170px',
        '1.8h': '180px',
				'2h':'200px',
        '2.2h':'220px',
        '2.4h':'240px',
        '2.5h':'250px',
        '2.8h':'280px',
				'3h':'300px',
				'3.5h':'350px',
				'4h':'400px',
				'4.5h':'450px',
				'4.2h':'420px',
				'4.3h':'430px',
				'5h':'500px',
				'5/5h':'550px',
				'6h':'600px',
				'4p':'4%',
				'5p':'5%',
				'6p':'6%',
				'8p':'8%',
				'10p':'10%',
				'12p':'12%',
				'15p':'15%',
				'20p':'20%',
				'25p':'25%',
				'45p':'45%',
				'48p':'48%',				
				'49p':'49%',
				'49.5p':'49.5%',
				'55p':'55%',
				'58p':'58%',
				'60p':'60%',
				'65p':'65%',
				'70p':'70%',
				'75p':'75%',
				'90p':'90%',
				'98p':'98%',
				'95p':'95%',
				'56':'14rem',
				'60':'15rem',
				'68': '17rem',
				'72': '18rem',
				'76':'19rem',
				'80':'20rem',
				'84': '21rem',
				'88':'22rem',
				'92':'23rem',		
				'fix-sm': "calc(100% - 3.75rem)",
				'fix-bg': "calc(100% - 4.66rem)",
				'noti-bottom': "calc(100vh-4rem)",
        '40vh':'40vh',
        '45vh':'45vh',
        '50vh':'50vh',
        '55vh':'55vh',
        '60vh':'60vh',
        '65vh':'65vh',
        '70vh':'70vh',
        '75vh':'75vh',
				'80vh':'80vh',
				'84vh':'84vh',
				'85vh':'85vh',
				'86vh':'86vh',
				'87vh':'87vh',
				'88vh':'88vh',	
				'89vh':'89vh',
				'90vh':'90vh',
				'91vh':'91vh',
				'92vh':'92vh',
				'93vh':'93vh',
				'94vh':'94vh',
				'95vh':'95vh',
				'96vh':'96vh',
				'97vh':'97vh'
			},
			fontSize:{
        'hd1':'2rem',
        'hd2':'1.5rem',
        'hd3':'1.17rem',
        'hd4':'1rem',
        'hd5':'0.83rem',
        'hd6':'0.67rem',
				'cx':'2rem',
				'cs':'2.5rem',
				'cs2':'2.75rem',
				'cl':'3.5rem',
				'cl2':'4.5rem',
				'fs-10':'10px',
				'fs-12':'12px',
				'1418':['14px','18px',],
				'1640':['16px', '40px'],
				'1624':['16px','24px',],
				'1828':['18px','28px',],
				'fs-hd':['30px', '40px'],
				'fs-hd2':['25px', '34px'],
				'inp-box': ['18px', '38px'],
				'type-box':['20px', '30px'],
				'team-slide-icon-bg': ['60px', '272px'],
				'team-slide-icon-sm': ['40px', '224px'],
			},
			colors:{
				'prm-red':"#D61A1B",
        'prm-red2':'#B10404',
        'feint-black':'#00000080',
				'prm-green':"#1EC004",
        'sec-green':'#1A8C07',
				'prm-yellow':'#F2C94C',
				'ash':'#333333', 
				'ash2':'#F5F5F580', 
				'ash3':'#D9D9D9', 
        'ash4':' #00000066',
				'ashn':'#ccc',

			},

			animation: {
				'spin-2e': 'spin 2s ease-in infinite',
				'spin-2l': 'spin 2s linear infinite',
				'spin-2eo': 'spin 2s ease-in-out infinite',
				'spin-2.5l': 'spin 2.5s linear infinite',
				'spin-3l': 'spin 3s linear infinite',
			 },

			inset: {
				'2p': '2%',
				'4p':'4%',
				'5p':'5%',
				'8p':'8%',
				'10p':'10%',
				'12p':'12%',
				'15p':'15%',
				'18p':'18%',
				'20p':'20%',
				'22p':'22%',
				'25p':'25%',
				'1.5':'0.375rem',
				'2.5':'0.625rem',
			 },

			 rotate: {
        '135': '135deg',
        '150': '150deg',
				'120': '120deg',
				'75': '75deg'
      }
    },
  },
  plugins: [],
};
export default config;
