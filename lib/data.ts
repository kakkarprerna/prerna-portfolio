export type Status = "SHIPPED" | "LIVE" | "IN BUILD";

export type IconName =
  | "MessagesSquare"
  | "BarChart3"
  | "ShieldCheck"
  | "Crown"
  | "Target"
  | "Layers"
  | "FileText"
  | "ShieldAlert"
  | "Search"
  | "PenTool"
  | "ListChecks"
  | "Hammer"
  | "Rocket"
  | "LineChart";

export type CaseStudy = {
  id: string;
  status: Status;
  name: string;
  role: string;
  timeframe: string;
  icon: IconName;
  summary: string;
  metrics: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "jinn-live",
    status: "SHIPPED",
    name: "Jinn Live",
    role: "Senior Product Manager",
    timeframe: "Oct 2024 - Dec 2025",
    icon: "MessagesSquare",
    summary:
      "Enterprise chatbots and voice agents built to hold real support conversations at volume, not scripted demos. I owned the roadmap from intent design through enterprise rollout, and the accuracy numbers that came out the other side.",
    metrics: [
      "30+ enterprise clients live",
      "100K+ monthly interactions handled",
      "95%+ intent accuracy in production",
    ],
    stack: ["Conversational AI", "Voice Agents", "Enterprise SaaS"],
    links: [],
  },
  {
    id: "ylytic",
    status: "SHIPPED",
    name: "Ylytic",
    role: "Senior Product Manager",
    timeframe: "Mar 2022 - Oct 2024",
    icon: "BarChart3",
    summary:
      "Joined early at an API-first creator analytics platform and helped push it toward an API-first influencer marketing product. Owned strategy, roadmap, pricing, and the integration flow that new customers actually had to live through.",
    metrics: [
      "60% reduction in integration time",
      "18% reduction in churn",
      "€1.2M ARR growth",
    ],
    stack: ["API-first Platform", "Analytics", "0-to-1"],
    links: [],
  },
  {
    id: "ai-governance-console",
    status: "LIVE",
    name: "AI Governance Console",
    role: "Independent build",
    timeframe: "Self-directed · Full PRD-to-ship cycle",
    icon: "ShieldCheck",
    summary:
      "A console for watching what an AI agent actually does against the policy it's supposed to follow. Built the way a real feature gets built: a PRD, design decisions logged as they were made, and an honest retrospective on what I'd change.",
    metrics: [
      "Live product, not a mockup",
      "Full PRD + design decision log published",
      "Retrospective included, not just a launch note",
    ],
    stack: ["AI Governance", "Agent Monitoring", "0-to-1"],
    links: [
      { label: "View live", href: "https://ai-governance-console.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/kakkarprerna/ai-governance-console",
      },
    ],
  },
  {
    id: "chess-coach",
    status: "IN BUILD",
    name: "Chess Coaching App",
    role: "Founder, solo build",
    timeframe: "In active development",
    icon: "Crown",
    summary:
      "An adaptive chess coach for my son, pairing a real chess engine with an AI tutor that explains the why behind a move, not just the best one. Built end to end, including the parts nobody asks a PM to do.",
    metrics: [
      "Stockfish WASM for engine analysis",
      "Gemini for move explanation & tutoring",
      "Supabase for progress tracking",
    ],
    stack: ["Next.js", "Supabase", "Stockfish WASM", "Gemini"],
    links: [],
  },
];

export const heroLedger = [
  { tag: "SHIPPED", text: "Jinn Live: 95%+ intent accuracy in production" },
  { tag: "SHIPPED", text: "Ylytic: 18% churn reduction, Senior PM" },
  { tag: "LIVE", text: "AI Governance Console: PRD to production, solo" },
];

// Impact stats bar
export const impactStats: {
  value: string;
  label: string;
  sublabel: string;
}[] = [
  { value: "10+", label: "Years in product", sublabel: "AI SaaS · API platforms" },
  { value: "30+", label: "Enterprise clients live", sublabel: "Jinn Live rollout" },
  { value: "100K+", label: "Monthly interactions", sublabel: "handled in production" },
  { value: "95%+", label: "Intent accuracy", sublabel: "at enterprise scale" },
  { value: "18%", label: "Churn reduction", sublabel: "Ylytic retention roadmap" },
  { value: "€1.2M", label: "ARR growth", sublabel: "Ylytic, as Senior PM" },
];

// How I Work, process loop
export const processStages: {
  stage: string;
  line: string;
  tools: string[];
  icon: IconName;
}[] = [
  {
    stage: "Discover",
    line: "Talk to the people living the problem before writing a roadmap.",
    tools: ["User interviews", "Support ticket analysis", "Stakeholder mapping"],
    icon: "Search",
  },
  {
    stage: "Define",
    line: "Turn ambiguity into a PRD the room can't misread.",
    tools: ["PRD writing", "Problem framing", "Success metrics"],
    icon: "PenTool",
  },
  {
    stage: "Prioritize",
    line: "Decide what doesn't get built this quarter, and say why.",
    tools: ["Impact vs effort", "Trade-off calls", "Roadmap sequencing"],
    icon: "ListChecks",
  },
  {
    stage: "Build",
    line: "Stay close enough to engineering to catch drift before it ships.",
    tools: ["Sprint planning", "Design reviews", "API contracts"],
    icon: "Hammer",
  },
  {
    stage: "Ship",
    line: "Roll out in a way you can roll back.",
    tools: ["Phased rollout", "Enterprise onboarding", "Release notes"],
    icon: "Rocket",
  },
  {
    stage: "Measure",
    line: "The number three months later is the real review.",
    tools: ["Intent accuracy", "Churn & retention", "Integration time", "ARR impact"],
    icon: "LineChart",
  },
];

// Toolkit
export const toolkit: { category: string; items: string[] }[] = [
  {
    category: "Product Strategy",
    items: [
      "Product Strategy",
      "Roadmapping",
      "0-to-1 Product Build",
      "Go-to-Market Strategy",
      "Pricing Strategy",
    ],
  },
  {
    category: "AI Systems",
    items: [
      "Conversational AI",
      "API-first Product Design",
      "Agent Governance",
      "Human-in-the-loop Review",
    ],
  },
  {
    category: "Execution",
    items: [
      "Agile / Scrum",
      "Stakeholder Management",
      "PRD Writing",
      "Data-informed Decision Making",
    ],
  },
];

// Building with AI, modeled on the actual AI Governance Console
export const aiWorkflow: {
  step: string;
  line: string;
}[] = [
  { step: "Agent action", line: "The AI agent takes an action inside its allowed scope." },
  { step: "Policy check", line: "Every action is checked against the policy it's meant to follow." },
  { step: "Confidence signal", line: "Each check carries a confidence read, not just a pass or fail." },
  { step: "Auto-clear", line: "High-confidence, in-policy actions clear straight through." },
  { step: "Human review", line: "Low-confidence or borderline actions route to a human, with the reasoning attached." },
  { step: "Logged & fed back", line: "Every review outcome is logged, feeding the next design decision, not just a dashboard." },
];

export type CareerRole = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  bullets: string[];
};

export const career: CareerRole[] = [
  {
    company: "Jinn Live",
    role: "Senior Product Manager",
    dates: "Oct 2024 - Dec 2025",
    bullets: [
      "Owned end-to-end product strategy and roadmap for an AI-powered SaaS platform delivering enterprise chatbot and voice-agent solutions",
      "Scaled the platform to 30+ enterprise clients, supporting 100K+ monthly interactions in production",
      "Maintained 95%+ intent accuracy across concurrent enterprise deployments",
    ],
  },
  {
    company: "Ylytic",
    role: "Senior Product Manager",
    dates: "Mar 2022 - Oct 2024",
    location: "Remote",
    bullets: [
      "Joined as an early product leader and shaped the company's direction from a creator analytics tool into an API-first influencer marketing platform",
      "Owned product strategy, roadmap prioritisation, and pricing",
      "Reduced integration time by 60% through improved API design and onboarding flow",
      "Reduced churn by 18% and grew ARR by €1.2M through a retention-focused roadmap",
    ],
  },
  {
    company: "Freelance",
    role: "Product Manager (Consultant)",
    dates: "Aug 2019 - Apr 2022",
    location: "Plano, Texas",
    bullets: [
      "Partnered with 5+ early- and growth-stage SaaS startups to define product strategy, accelerate product-market fit, and improve delivery outcomes",
    ],
  },
  {
    company: "Aon and CoCubes",
    role: "Early Career",
    dates: "2013 - 2019",
    bullets: [
      "Assessment design, quality assurance, and analytics roles across enterprise-scale digital assessment platforms, building the operational and data foundation for later product work",
    ],
  },
];

export const credentials = {
  certifications: [
    "PMP (Project Management Professional)",
    "CSM (Certified ScrumMaster)",
  ],
  education: ["Executive Programme in Business Analytics, IIM Calcutta"],
};

export const about = {
  paragraphs: [
    "I'm a Senior Product Manager with over ten years across AI-powered SaaS, API-first marketplaces, conversational AI, and analytics products. Most recently, I built enterprise conversational AI at Jinn Live (2024 to 2025) and before that served as Senior Product Manager at Ylytic (2022 to 2024), where I joined early and helped shape the product's direction.",
    "My path into product ran through enterprise delivery at Aon and CoCubes (2013 to 2019), then independent product consulting with early-stage SaaS teams (2019 to 2022), before I moved into senior in-house PM roles. That consulting stretch meant running product alongside sales, marketing, and customer success at bootstrapped startups. It's scope I've since learned to frame precisely as IC product work, because that's what it was.",
    "PMP and CSM certified, with an Executive Programme in Business Analytics from IIM Calcutta. Based in Málaga, Spain, with EU work authorisation, and currently looking for Senior Product Manager (IC) roles across Spain and remote Europe.",
  ],
};

export const contact = {
  email: "prerna.kakkar.30@gmail.com",
  linkedin: "https://www.linkedin.com/in/prerna-kakkar-pmp-csm/",
  github: "https://github.com/kakkarprerna",
  location: "Málaga, Spain",
  openTo:
    "Open to Senior Product Manager (IC) roles: AI/ML products and API-first platforms, Spain and remote Europe.",
};
