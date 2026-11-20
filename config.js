// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Ayesha Mehmood",
    program: "Automation Engineering Technology/ BTech",
    university: "McMaster University, Canada",
    email: "mehmoa3@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "SUMO-Based Traffic Simulation and Analysis of Finch Avenue East and Tapscott Road",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Traffic simulation of the HDV and AV cars"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Digital traffic modelling helps evaluate intersection operations under different traffic conditions.",
			"This study focuses on Finch Avenue East and Tapscott Road in Toronto, using SUMO to simulate traffic flow.",
			"The study compares 100% human-driven vehicles (HDVs) with 100% connected and autonomous vehicles (CAVs).",
			"A third scenario modifies traffic signal timing from 27 to 18 seconds to evaluate its impact on traffic performance."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"A digital traffic baseline is needed to understand existing intersection conditions and identify potential traffic issues.",
			"The impact of 100% CAV traffic compared to 100% HDV traffic must be evaluated under consistent simulation conditions.",
			"The effectiveness of traffic signal modifications is uncertain and requires testing before real-world implementation.",
			"The study compares speed-density relationships on Edge E16 to determine how vehicle behaviour and reduced signal timing affect traffic performance."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Develop a SUMO traffic model of Finch Avenue East and Tapscott Road in Toronto.",
			"Establish baseline traffic conditions using 100% human-driven vehicles (HDVs).",
			"Compare 100% HDV and 100% connected and autonomous vehicle (CAV) traffic using speed-density relationships",
			"Evaluate the impact of reducing green-light phases from 27 to 18 seconds on traffic performance along Edge E16."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Roadway Network Development (SUMO)",
				text: "Develop the Finch Avenue East and Tapscott Road network using GIS maps and SUMO NetEdit.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: Baseline Traffic Simulation (100% HDV)",
				text: "Add traffic demand and signal timing to establish baseline conditions over 3,600 seconds.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Autonomous Vehicle Simulation (100% CAV)",
				text: "Compare CAV and HDV traffic performance using consistent roadway and traffic conditions.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Traffic Signal Intervention (Scenario 2),
				text: "Reduce green-light phases from 27 to 18 seconds and evaluate speed-density changes on Edge E16.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Roadway Network Development (SUMO)",
        bullets: [
				  { text: "Develop the Finch Avenue East and Tapscott Road network using GIS maps and SUMO NetEdit." },
          { text: "Configure major roads, local roads, lane configurations, and turning movements." },
          { text: "Check roadway connectivity, junction geometry, and intersection connections." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Baseline Traffic Simulation (100% HDV)",
        bullets: [
          { text: "Introduce traffic demand of 150 vehicles/hour per permitted lane movement." },
          { text: "Configure two 27-second green phases and two 3-second yellow phases." },
          { text: "Run a 3,600-second simulation and collect speed-density data from Edge E16." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Autonomous Vehicle Simulation (100% CAV)",
        bullets: [
				  { text: "Replace 100% HDVs with 100% CAVs using the CACC car-following model." },
          { text: "Apply CAV settings: 2.9 m/s² acceleration, 7.5 m/s² deceleration, and 0.6-second time headway." },
          { text: "Maintain consistent traffic conditions and compare speed-density results on Edge E16." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Traffic Signal Timing Intervention (Scenario 2)",
        bullets: [
          { text: "Reduce both green-light phases from 27 to 18 seconds while keeping 3-second yellow phases." },
          { text: "Shorten the overall signal cycle from 60 to 42 seconds under 100% HDV conditions." },
          { text: "Compare speed-density relationships on Edge E16 before and after the intervention." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	
{
  title: "Results & Potential Improvements",
  subtitle:
    "Speed-density analysis of Edge E16 comparing HDV and CAV traffic performance and evaluating the effects of modified traffic signal timing.",

  charts: {
    left: {
      title: "Scenario 1 — 100% HDV vs. 100% CAV",
      src: "assets/img/image6.jpg",
      alt: "Speed-density comparison between the Base Scenario with 100% HDVs and Scenario 1 with 100% CAVs"
    },
    right: {
      title: "Scenario 2 — Base vs. Signal Timing Intervention",
      src: "assets/img/image7.jpg",
      alt: "Speed-density comparison between the Base Scenario and Scenario 2 with reduced traffic signal timing"
    }
  },

  discussionTitle: "Results & Discussion",
  discussionBullets: [
    "Base Scenario (100% HDV): Estimated free-flow speed of 4.39 m/s and jam density of 185.2 veh/km.",
    "Scenario 1 (100% CAV): Free-flow speed increased slightly to 4.46 m/s, while jam density decreased to 181.5 veh/km.",
    "Scenario 2 (Signal Intervention): Free-flow speed increased to 4.51 m/s, while jam density decreased to 175 veh/km.",
    "Observed vehicle speeds remained similar across scenarios at comparable traffic densities, showing no clear overall improvement.",
    "Both interventions require further investigation through additional simulations and alternative traffic conditions."
  ]
},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Rail Scheduling & Signaling + Digital Twin I, Immersive VR Visualization + Results & Communication" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
