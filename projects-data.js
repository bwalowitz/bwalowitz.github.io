/* Shared project data for the homepage gallery and every case-study page.
   Run `node generate-project-pages.mjs` after adding or removing a project. */
const PROJECTS = [
  {
    slug:"redwood-logistics",
    title:"Redwood Logistics",
    category:"Brand System",
    year:"",
    summary:"Five companies brought together under one clear Redwood identity.",
    accent:["#8f181c","#1b0d0d"],
    cover:"images/redwood-rebrand/redwood_weathered-mock-ups.jpg",
    intro:"One coherent brand architecture for a group that had outgrown its pieces.",
    body:[
      "Years of acquisitions had left a portfolio of logos, voices, and value propositions that did not add up to one story. The brief was to make it one company without erasing what each part had built.",
      "The work became an umbrella system: naming logic, a flexible identity, practical guidelines, and templates the internal team could use across sales, web, events, and print.",
      "The system extended across sales materials, digital channels, events, and environmental applications, giving every team a consistent foundation for telling the Redwood story."
    ],
    details:[["Client","Redwood Logistics"],["Scope","Naming · Identity · Brand System"],["Role","Creative Direction · Design"]],
    shots:[
      {image:"images/redwoodlogo-original-1.png",fit:"contain",background:"#ffffff"},
      {image:"images/redwood-rebrand/board-overview.jpg",wide:true,fit:"contain",background:"#ffffff",aspect:"1248/841"},
      {image:"images/redwood-rebrand/redwood-brandguide-foursecondarylogos.jpg",wide:true,fit:"contain",background:"#ffffff"},
      {image:"images/redwood-rebrand/redwood-brandguide-fourlogos.jpg",wide:true,fit:"contain",background:"#ffffff"},
      {image:"images/redwood-rebrand/Redwood_ColorGuideSheet-01.png",wide:true,fit:"contain",background:"#ffffff"},
      {image:"images/redwood-rebrand/Redwood_MasterLogoSheet-01.png",wide:true,fit:"contain",background:"#f3f1ed"},
      {image:"images/redwood-rebrand/redwood-brand-onepager.jpg",wide:true,fit:"contain",background:"#f3f1ed",aspect:"2550/3053"},
      {image:"images/redwood-rebrand/redwood_wood-and-steel-mock-ups_2.jpg",wide:true},
      {image:"images/redwood-rebrand/redwood_wood-and-steel-mock-ups.jpg",wide:true},
      {image:"images/redwood-rebrand/redwood_weathered-mock-ups.jpg",wide:true},
      {image:"images/redwood-rebrand/redwood_watercolor_72dpi.jpg",wide:true}
    ]
  },
  {
    slug:"ellen-shop",
    title:"Ellen Shop",
    category:"E-Commerce · Digital",
    year:"",
    summary:"Seasonal commerce design, merchandising, and responsive storefront experiences.",
    accent:["#4387e8","#a9e3ea"],
    cover:"images/ellenshop-2.png",
    intro:"A bright, flexible shopping experience built around products, clubs, and seasonal campaigns.",
    body:[
      "The commerce system moves comfortably between editorial storytelling, product discovery, and promotional moments.",
      "Color, photography, and simple category structures gave the storefront a playful personality without losing the practical work of helping people browse and buy.",
      "Responsive modules created a consistent experience across seasonal campaigns, featured collections, product categories, and membership-focused content."
    ],
    details:[["Client","Ellen Shop"],["Scope","E-Commerce · Campaigns · UX"],["Role","Creative Direction · Digital"]],
    shots:[
      {image:"images/ellenshop-2.png",wide:true,aspect:"16/10"},
      {image:"images/ellenshop-1.png",wide:true,fit:"contain",background:"#ffffff",aspect:"1433/756"},
      {image:"images/ellenshop-3.png",wide:true,fit:"contain",background:"#eef7fb",aspect:"1428/496"},
      {image:"images/ellenshop-4.png",wide:true,fit:"contain",background:"#ffffff",aspect:"1457/526"}
    ]
  },
  {
    slug:"redwood-sales-collateral",
    title:"Redwood Sales Collateral",
    category:"Sales Enablement · Print",
    year:"",
    summary:"Brochures, one-pagers, and event materials built from the Redwood system.",
    accent:["#243b7a","#8f181c"],
    cover:"images/redwood-folder-1.png",
    coverFit:"contain",
    coverBackground:"#e8e8e8",
    intro:"A practical collateral library designed to make the sales organization faster and more consistent.",
    body:[
      "This work translated the Redwood identity into the everyday materials used by sales and marketing teams.",
      "The system covered brochures, presentation-ready spreads, event pieces, quick-reference materials, and templates that could be reused without rebuilding the brand each time.",
      "A shared grid, type hierarchy, and repeatable content patterns kept the materials recognizable while allowing each piece to serve a specific sales or event need."
    ],
    details:[["Client","Redwood Logistics"],["Scope","Brochures · One-Pagers · Events"],["Role","Creative Direction · Design"]],
    shots:[
      {image:"images/redwood-folder-1.png",fit:"contain",background:"#e8e8e8"},
      {image:"images/redwood-rebrand/rdwd_brochure_11X17_Final_1.jpg",wide:true},
      {image:"images/redwood-rebrand/rdwd_brochure_11X17_Final_2.jpg",wide:true},
      {image:"images/redwood-rebrand/rdwd_brochure_11X17_Final_3.jpg",wide:true},
      {image:"images/redwood-rebrand/rdwd_brochure_11X17_Final_4.jpg",wide:true},
      {image:"images/redwood-rebrand/redwood_giftcard-giveaway-tablesign.jpg",fit:"contain",background:"#f0eee9"},
      {image:"images/redwood-rebrand/redwood_careerfair-banner_1.jpg",fit:"contain",background:"#8f181c"},
      {image:"images/redwood-rebrand/redwood_careerfair-banner_2.jpg",fit:"contain",background:"#8f181c"},
      {image:"images/redwood-rebrand/RedwoodPartyInvite_Finalw.jpg",fit:"contain",background:"#f0eee9"},
      {image:"images/redwood-rebrand/RedwoodParty_Invite_7X5_Bleed-1.jpg",fit:"contain",background:"#f0eee9"},
      {image:"images/redwood-rebrand/redwood_redwood_card.jpg",wide:true,fit:"contain",background:"#ece9e3"}
    ]
  },
  {
    slug:"abled",
    title:"Abled",
    category:"Editorial · Press Kit",
    year:"",
    summary:"A cinematic electronic press kit assembled as a complete editorial story.",
    accent:["#7e6d59","#182024"],
    cover:"images/abled-1.png",
    intro:"A long-form press kit built to introduce the people, story, and visual world of Abled.",
    body:[
      "The electronic press kit was structured as a complete editorial narrative, introducing the project through a deliberate sequence of imagery and information.",
      "Cinematic photography, restrained typography, pull quotes, and production details establish a consistent visual tone from the opening spread through the supporting material.",
      "The twelve-spread system balances atmosphere with practical information, giving press and industry audiences a clear, engaging overview of the work."
    ],
    details:[["Project","Abled"],["Scope","Press Kit · Editorial Design"],["Role","Creative Direction · Design"]],
    shots:[
      {image:"images/abled/Abled-EPK-11-1.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-2.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-3.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-4.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-5.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-6.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-7.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-8.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-9.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-10.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-11.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"},
      {image:"images/abled/Abled-EPK-11-12.jpg",wide:true,fit:"contain",background:"#111417",aspect:"5/3"}
    ]
  },
  {
    slug:"be-kind-by-ellen",
    title:"Be Kind by Ellen",
    category:"Responsive Digital",
    year:"",
    summary:"A responsive editorial and commerce experience centered on recurring unboxing content.",
    accent:["#9be4ea","#b7b9f3"],
    cover:"images/bekindbyellen-1.png",
    intro:"One campaign experience carried cleanly across phone, tablet, and desktop.",
    body:[
      "The campaign experience was designed around recurring editorial video and a direct path into the Be Kind subscription offering.",
      "The design balances editorial video, subscription messaging, and a direct commerce path while keeping the personality light and approachable.",
      "A flexible responsive system carries the same hierarchy and energy across desktop, tablet, and mobile without losing the campaign's warmth or clarity."
    ],
    details:[["Client","Be Kind by Ellen"],["Scope","Responsive Design · Campaign"],["Role","Creative Direction · Digital"]],
    shots:[
      {image:"images/bekindbyellen-1.png",wide:true,fit:"contain",background:"#cbeef2",aspect:"1547/1000"}
    ]
  },
  {
    slug:"roots-logistics-presentation",
    title:"Roots Logistics Presentation",
    category:"Sales Presentation",
    year:"",
    summary:"A presentation system for a logistics company moving under a new visual identity.",
    accent:["#1f8f43","#b6dcf2"],
    cover:"images/roots-presentation-1.png",
    coverFit:"contain",
    coverBackground:"#dbeaf2",
    intro:"A sales-story presentation designed to make a logistics offer easier to understand.",
    body:[
      "The presentation translates the Roots Logistics identity into a clear sales narrative built for live conversations.",
      "Fleet photography, service messaging, and the directional brand device work together to make the company's capabilities easy to follow.",
      "A consistent hierarchy gives presenters room to move from company overview to supporting detail without losing pace or visual continuity."
    ],
    details:[["Client","Roots Logistics"],["Scope","Presentation · Sales Enablement"],["Role","Creative Direction · Design"]],
    shots:[
      {image:"images/roots-presentation-1.png",fit:"contain",background:"#dbeaf2"},
      {image:"images/roots-1.png",wide:true,fit:"contain",background:"#ffffff",aspect:"945/764"},
      {image:"images/roots-2.png",fit:"contain",background:"#eeeeee"}
    ]
  },
  {
    slug:"redwood-games",
    title:"Redwood Games",
    category:"Event · Apparel",
    year:"",
    summary:"Event identity and apparel concepts for the SXMW Redwood Games.",
    accent:["#21a6b3","#f0c43c"],
    cover:"images/redwoodgames2019-3.png",
    coverFit:"contain",
    coverBackground:"#ffffff",
    intro:"A location-driven event graphic translated from rough concepts into finished apparel.",
    body:[
      "The Redwood Games project began with a broad set of hand-drawn shirt ideas and event motifs.",
      "The finished direction combined recognizable Monterey imagery with a playful illustrated style and a restrained event lockup.",
      "The process moved from a broad concept sheet into a resolved front-and-back apparel system, preserving the hand-drawn energy while creating a graphic that reads clearly at a distance."
    ],
    details:[["Client","Redwood Logistics"],["Scope","Event Identity · Apparel"],["Role","Creative Direction · Design"]],
    shots:[
      {image:"images/redwoodgames2019-2.jpeg",wide:true,fit:"contain",background:"#ffffff",aspect:"1440/1536"},
      {image:"images/redwoodgames2019-1.jpg",wide:true,fit:"contain",background:"#ffffff",aspect:"1440/717"},
      {image:"images/redwoodgames2019-3.png",fit:"contain",background:"#ffffff"}
    ]
  },
  {
    slug:"lightifier",
    title:"Lightifier",
    category:"Identity Design",
    year:"",
    summary:"A high-contrast identity exploration built around illumination and display typography.",
    accent:["#050505","#dfd5c4"],
    cover:"images/lightifier-1.png",
    coverFit:"contain",
    coverBackground:"#050505",
    intro:"A compact identity study using a light source as both symbol and typographic anchor.",
    body:[
      "Lightifier is a focused logo and identity exploration built around the visual language of illumination.",
      "The mark combines a radiating light form with contrasting letter styles, designed to work in both positive and reversed applications.",
      "Black and white lockups test the mark across light and dark environments while preserving contrast, legibility, and the character of the central symbol."
    ],
    details:[["Project","Lightifier"],["Scope","Logo · Identity"],["Role","Design"]],
    shots:[
      {image:"images/lightifier-black.jpeg",wide:true,fit:"contain",background:"#ffffff",aspect:"2026/817"},
      {image:"images/lightifier-white.jpeg",wide:true,fit:"contain",background:"#000000",aspect:"2026/817"},
      {image:"images/lightifier-1.png",fit:"contain",background:"#000000"}
    ]
  },
  {
    slug:"voices-of-learning",
    title:"Voices of Learning",
    category:"Video Production",
    year:"",
    summary:"A produced educational video series featuring Sarah Silverman.",
    accent:["#d7936a","#f4c979"],
    cover:"images/sarahsilverman-2.png",
    coverPosition:"center top",
    intro:"A multi-episode educational series shaped for clear, direct delivery on camera.",
    body:[
      "Produced as a six-episode educational series, Voices of Learning pairs Sarah Silverman's direct on-camera presence with concise, accessible storytelling.",
      "Each installment uses a consistent format and production approach, giving the series continuity while allowing every topic to stand on its own.",
      "The result is an approachable body of educational content built for clarity, personality, and repeat viewing."
    ],
    details:[["Project","Voices of Learning"],["Scope","Educational Video Series"],["Role","Video Producer"]],
    shots:[
      {video:"7O56hYuq7w4",title:"Sarah Silverman's Voices of Learning: Episode 1",wide:true},
      {video:"feD2OYZnzfw",title:"Sarah Silverman's Voices of Learning: Episode 2",wide:true},
      {video:"62bJxibZ0B0",title:"Sarah Silverman's Voices of Learning: Episode 3",wide:true},
      {video:"OqEGHXBvXlE",title:"Sarah Silverman's Voices of Learning: Episode 4",wide:true},
      {video:"D4e8vT-HnpY",title:"Sarah Silverman's Voices of Learning: Episode 5",wide:true},
      {video:"72dRZcbm-8U",title:"Sarah Silverman's Voices of Learning: Episode 6",wide:true}
    ]
  },
  {
    slug:"outstanding",
    title:"Outstanding",
    category:"Motion Design",
    year:"",
    summary:"A neon-glitch title exploration for Outstanding: A Comedy Revolution.",
    accent:["#44206f","#d43bd6"],
    cover:"images/outstanding-1.jpeg",
    intro:"A saturated motion identity built from neon color, distortion, and fragmented typography.",
    body:[
      "The motion identity for Outstanding: A Comedy Revolution uses saturated color, distortion, and fragmented typography to create a bold on-screen presence.",
      "Glitch transitions, dimensional letterforms, and a magenta-blue palette create the feeling of a title package in motion.",
      "The system balances the energy of live performance with the scale and polish of a documentary title sequence."
    ],
    details:[["Project","Outstanding"],["Scope","Title Design · Motion"],["Role","Creative Direction · Motion"]],
    shots:[
      {image:"images/outstanding-1.jpeg",wide:true,fit:"contain",background:"#100917",aspect:"16/9"}
    ]
  },
  {
    slug:"makeful",
    title:"Makeful",
    category:"Programming · Video",
    year:"",
    summary:"Craft and lifestyle programming developed, written, and produced for Makeful.",
    accent:["#eab8ad","#e9e1d5"],
    cover:"images/makeful-1.png",
    intro:"A collection of approachable craft programming designed for repeatable digital viewing.",
    body:[
      "As Director of Programming and Writer, I developed approachable craft and lifestyle formats designed for clear, repeatable digital viewing.",
      "The work spans quick DIY projects, practical tips, and host-led creative instruction, with each format built around an immediate, achievable idea.",
      "A concise structure and friendly editorial voice keep the projects accessible while giving the series a consistent Makeful personality."
    ],
    details:[["Client","Makeful"],["Scope","Programming · Writing · Video"],["Role","Director of Programming · Writer"]],
    shots:[
      {video:"UrrY814gYQk",title:"DIY Pom Pom Lamp Shade | 3 Minute DIY with Jeanine Amapola",wide:true},
      {video:"ZaoSsVsl6YE",title:"Mason Jar Candle Holders | 3 Minute DIY with Jeanine Amapola",wide:true},
      {video:"yvL2hjvBbbA",title:"Easy Travel Tips & Hacks | Girl, Get Your Life! | Makeful",wide:true},
      {video:"1peZkwhqj3o",title:"3 Easy Cake Decorating Hacks with Cutlery",wide:true},
      {video:"bC7xP1wmVro",title:"Try These Easy Fruit-Cutting Hacks!",wide:true},
      {video:"hMumsDg0lP4",title:"Learning To Paint | The Creative Lab | Makeful",wide:true}
    ]
  },
  {
    slug:"mr-kate",
    title:"Mr. Kate",
    category:"Video Production",
    year:"",
    summary:"A collection of produced lifestyle and design videos for Mr. Kate.",
    accent:["#bd829f","#53694f"],
    cover:"images/mrkate-1.png",
    intro:"Energetic lifestyle production built around personality, transformation, and reveal.",
    body:[
      "As Video Producer, I helped shape a lifestyle series centered on room transformations, creator personalities, and the emotional payoff of a strong reveal.",
      "Each episode turns an interior-design challenge into a clear narrative, moving from the client's needs through creative decisions, installation, and final reaction.",
      "The work ranges from celebrity collaborations and makeover competitions to personal, budget-conscious spaces, while maintaining the energetic voice of the Mr. Kate brand."
    ],
    details:[["Client","Mr. Kate"],["Scope","Lifestyle Video Series"],["Role","Video Producer"]],
    shots:[
      {video:"7BcNeFmdkQw",title:"Liza Koshy's Urban Outdoor Oasis Makeover! | OMG We're Coming Over",wide:true},
      {video:"R5P5N7jlPFg",title:"Design Vs. Design — Room Makeover Competition!",wide:true},
      {video:"EDZrHpKpmCs",title:"Colleen Ballinger's Nursery Makeover!",wide:true},
      {video:"PV_GHHXy7Po",title:"Joey Graceffa's Enchanted Gaming Room Makeover! | OMG We're Coming Over",wide:true},
      {video:"rsSCMAPD0Fg",title:"Interior Design For A Blind Person? Ft. Molly Burke x OMG We’re Coming Over",wide:true},
      {video:"A8u1jqvDsVY",title:"Surprise Brother and Sister Room Makeovers! | Mr. Kate Decorates",wide:true},
      {video:"o_az8-Kyd88",title:"Tween Bedroom on a Budget *emotional* | Mr. Kate Decorates",wide:true},
      {video:"cfLV2KDhxQQ",title:"Dolan Twins House Makeover! | OMG We're Coming Over",wide:true}
    ]
  },
  {
    slug:"roots-logistics-identity",
    title:"Roots Logistics Identity",
    category:"Branding",
    year:"",
    summary:"A clean logistics brand centered on a directional green arrow.",
    accent:["#1d9143","#efefef"],
    cover:"images/roots-2.png",
    coverFit:"contain",
    coverBackground:"#eeeeee",
    intro:"A direct, modern brand system built around movement and direction.",
    body:[
      "The Roots Logistics identity uses a minimal wordmark and a bold directional device.",
      "The green arrow creates a clear signal of movement and progress, giving the system a recognizable device that works independently or alongside the wordmark.",
      "The brand extends into fleet photography with a clean, practical visual language suited to a logistics business."
    ],
    details:[["Client","Roots Logistics"],["Scope","Branding · Logo · Identity"],["Role","Brand Design"]],
    shots:[
      {image:"images/roots-2.png",fit:"contain",background:"#eeeeee"},
      {image:"images/roots-1.png",wide:true,fit:"contain",background:"#ffffff",aspect:"945/764"}
    ]
  },
  {
    slug:"synergy-homecare",
    title:"SYNERGY HomeCare",
    category:"Brand · Performance",
    year:"2025",
    summary:"A franchise growth engine built on paid search and conversion-first creative.",
    accent:["#1f5e5a","#0b2225"],
    cover:"images/synergy-logo.svg",
    coverFit:"contain",
    coverBackground:"#1f5e5a",
    intro:"Turning a local home-care franchise into a measurable, repeatable growth machine.",
    body:[
      "SYNERGY HomeCare needed more than impressions — it needed booked consultations. The work began with the funnel: who is searching, what matters most to them, and what helps them feel ready to call.",
      "From there it became a tight loop — paid-search structure, landing pages written for intent, and creative that gives families clarity when they need it. Every dollar mapped to an outcome.",
      "The result is a system the owner can run and trust, and a template that scales to the next franchise, and the next."
    ],
    details:[["Client","SYNERGY HomeCare"],["Year","2025"],["Scope","Paid Search · Landing Pages · Creative"],["Role","Strategy · Creative Direction"]]
  },
  {
    slug:"ai-sales-coaches",
    title:"AI Sales & Onboarding Coaches",
    category:"AI · Sales Enablement",
    year:"",
    summary:"Interactive practice tools for logistics teams onboarding new sales representatives.",
    accent:["#28496a","#10202d"],
    cover:"C2C_Logo-hires-alpha-white.png",
    coverFit:"contain",
    coverBackground:"#16374d",
    caseCover:false,
    intro:"Training that feels like a coach, not a script.",
    body:[
      "I built a set of AI-assisted coaches for logistics sales teams: a Jargon Coach for industry language, an Objection Coach for difficult questions, and a Cold Call Coach for realistic practice.",
      "Each tool uses short sessions, plain-language guidance, and immediate feedback to help new representatives build clarity and confidence without adding more meetings.",
      "I led strategy, experience design, prompt development, content, and testing in collaboration with client subject-matter experts."
    ],
    details:[["Sector","Logistics Sales"],["Scope","AI Tools · Training · UX"],["Role","Strategy · Product Build"]]
  }
];
