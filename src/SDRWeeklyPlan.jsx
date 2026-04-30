import { useState } from "react";

const days = [
  {
    day: "DAY 1",
    label: "Monday",
    theme: "LinkedIn Profile + Hunter.io + Mailtrack",
    color: "#C8A96E",
    tasks: [
      {
        time: "9:00 – 10:30 AM",
        title: "LinkedIn Profile — Entry-Level SDR Positioning",
        priority: "CRITICAL",
        steps: [
          "Update your headline to: Entry-Level SDR | HubSpot Certified | Apollo · Hunter.io · Snov.io | Cold Outreach & CRM Pipeline | Open to Remote AU · SG · US",
          "Rewrite your 'About' section. Lead with: 'Before I knew what an SDR was, I was already doing the job — prospecting, pitching, and closing 9 sponsors across three student organizations.' Then list your tools: HubSpot (certified), Apollo, Hunter.io, Snov.io, Brevo, Loom. End with your availability and timezone.",
          "Set profile to 'Open to Work' → SDR, BDR, Inside Sales. Remote only. Regions: Australia, Singapore, United States.",
          "Upload a professional headshot (clear face, plain or blurred background, natural lighting).",
          "Add a Featured Section → this will hold your portfolio link and Loom video by end of the week.",
        ],
      },
      {
        time: "9:30 – 10:00 AM",
        title: "Install Mailtrack (Free — No Credit Card, 2 Minutes)",
        priority: "CRITICAL",
        steps: [
          "Go to mailtrack.io → click 'Sign up free'. Install the Chrome extension. Connect to your Gmail. No credit card needed — the free plan shows you when emails are opened in real time.",
          "Once installed, send yourself a test email. You'll see a double green checkmark when it's opened — exactly like WhatsApp read receipts.",
          "This gives you real-time open tracking on every cold email you send this week. When a prospect opens your email, that's your signal to follow up within the hour.",
          "Add 'Mailtrack (email open tracking)' to your tools list. It's a small add but signals you run data-driven outreach, not spray-and-pray.",
        ],
      },
      {
        time: "10:30 AM – 12:30 PM",
        title: "Learn Hunter.io (Free — No Credit Card)",
        priority: "CRITICAL",
        steps: [
          "Go to hunter.io → click 'Sign up free'. Use your Gmail. No credit card needed. Free plan gives you 25 searches/month — enough to build a case study.",
          "Once in: click 'Domain Search' → type any SaaS company's website (e.g. notion.so, trello.com). You'll see verified emails of employees. This is how SDRs find contact info without buying expensive tools.",
          "Next: go to 'Email Finder' → type a name + company domain. Hunter.io will find or predict the email format. Screenshot this workflow.",
          "Now use 'Email Verifier' → paste 5 emails you found. It will show if they're valid, risky, or invalid. Screenshot the results.",
          "Go to 'Campaigns' tab → Hunter.io has a free email drip feature. Create a campaign called 'AU SaaS Prospecting Test'. Add 3 fake prospect emails (use your own email as a test). Set up a 3-step sequence: Day 1 intro, Day 4 follow-up, Day 10 breakup email. Screenshot the sequence setup.",
          "Compile all screenshots into a new portfolio case study: 'Email Prospecting — Hunter.io: Domain Search, Email Verification & Drip Campaign Setup'. This is a real, hireable skill.",
        ],
      },
      {
        time: "1:30 – 3:00 PM",
        title: "Build Your 30-Company Target List",
        priority: "CRITICAL",
        steps: [
          "Open Apollo (already know this) → Companies tab. Filters: Industry = SaaS/Software | Employee count = 10–200 | Location = Australia. Export 30 companies into a Google Sheet.",
          "Columns: Company Name | Website | Industry | Headcount | HQ | LinkedIn URL | Hiring SDR? | Decision Maker Name | DM LinkedIn | DM Email (use Hunter.io to find) | Notes.",
          "For each company, spend 2–3 minutes on LinkedIn to find the Head of Sales, VP of Sales, or Founder. These are your outreach targets.",
          "Use Hunter.io's Domain Search on 10 of these companies to find and verify real emails. Log results in your sheet.",
        ],
      },
      {
        time: "3:00 – 5:00 PM",
        title: "Set Up HubSpot Job Application Pipeline (Free — Already Have Access)",
        priority: "HIGH",
        steps: [
          "You already have HubSpot — use it for your own job search pipeline instead of a separate tool. This keeps your stack clean and doubles as a live demo of HubSpot knowledge.",
          "In HubSpot CRM → go to Contacts → create a new list called 'SDR Job Applications'. Add pipeline stages: Applied → Followed Up → Replied → Interview Scheduled → Offer → Rejected.",
          "Create a second pipeline under Deals called 'Direct Outreach' with stages: Identified → Contacted → Replied → Meeting Booked → Closed.",
          "Add your first 5 target companies as Deals in the Outreach pipeline. Fill in: company name, contact person, date, link.",
          "Screenshot both pipelines. This is now a portfolio piece AND your live job search tracker — two birds, one tool. Hiring managers will love that you're dogfooding the product.",
        ],
      },
    ],
  },
  {
    day: "DAY 2",
    label: "Tuesday",
    theme: "Snov.io + LinkedIn Sales Nav + Loom",
    color: "#8BAF8B",
    tasks: [
      {
        time: "9:00 – 10:30 AM",
        title: "Learn Snov.io (Free — No Credit Card)",
        priority: "CRITICAL",
        steps: [
          "Go to snov.io → click 'Sign up free'. No credit card required. Free plan includes 150 credits/month and access to email drip campaigns.",
          "Install the Snov.io Chrome extension (LI Prospect Finder). Go to any LinkedIn profile → click the Snov.io icon in your Chrome toolbar → it will attempt to find their verified email. Try this on 5 LinkedIn profiles of AU sales leaders.",
          "In your Snov.io dashboard, go to 'Prospect Lists' → create a list called 'AU SaaS Ops Leaders'. Add the contacts you found via the Chrome extension.",
          "Go to 'Email Drip Campaigns' → create a new campaign. Name it 'AU SDR Job Outreach'. Add your prospect list. Set up a 4-step sequence: Day 1 (cold intro), Day 3 (value add), Day 7 (Loom video), Day 14 (breakup email).",
          "Screenshot: the Chrome extension finding an email on a LinkedIn profile, your prospect list, and the drip campaign sequence setup.",
          "Add to portfolio: 'Email Automation — Snov.io: LinkedIn Email Scraping + 4-Step Drip Sequence'. Now you have Apollo + HubSpot + Hunter.io + Snov.io on your CV. That's a very strong entry-level tool stack.",
        ],
      },
      {
        time: "10:30 AM – 12:00 PM",
        title: "LinkedIn Sales Navigator — Free Trial (30 Days)",
        priority: "CRITICAL",
        steps: [
          "Go to linkedin.com/sales → click 'Start free trial'. This requires a credit card but you will NOT be charged if you cancel before 30 days. Set a calendar reminder right now for Day 28 to cancel.",
          "Once in Sales Nav: use the Lead Filters. Set: Job Title = 'Head of Sales' OR 'VP Sales' OR 'Founder' | Industry = SaaS | Company Size = 10–200 | Geography = Australia. You'll see hundreds of qualified prospects instantly.",
          "Save 20 leads to a list called 'AU SaaS Decision Makers'. Sales Nav will now alert you when these people change jobs, post on LinkedIn, or get mentioned in the news — all buying signals.",
          "Screenshot: the advanced filter panel, your saved lead list, and the account insights view. This is portfolio gold — it shows enterprise-level prospecting awareness.",
          "Add to portfolio: 'Prospecting — LinkedIn Sales Navigator: Advanced Lead Filtering + Account Insights'. This one tool appearing on your CV signals you are ready for roles that target mid-market and enterprise accounts.",
          "Cross-reference your Sales Nav list with your Apollo list from Day 1. Where they overlap, those are your highest-priority outreach targets this week.",
        ],
      },
      {
        time: "1:00 – 2:30 PM",
        title: "Record Your Loom Video (Free — No Credit Card)",
        priority: "CRITICAL",
        steps: [
          "Go to loom.com → Sign up with Gmail. Free plan is fully functional — no credit card required.",
          "Script for your outreach Loom (record this): 'Hi [First Name] — Rifka here. I came across [Company] while researching AU SaaS teams. I noticed [specific thing — e.g. you recently expanded remote ops]. Quick question: how does your team currently manage pipeline visibility and outreach tracking across time zones? I've been building prospecting systems — Apollo lead lists, HubSpot sequences, Hunter.io email verification, and Snov.io drip campaigns — and I'd love 20 minutes to see if there's a fit. Link to my portfolio is below.'",
          "Set up: sit near a window for natural light, clean background, look directly at the camera lens (not the screen).",
          "Record 3 takes. Pick the most natural one — not the most polished. Authenticity beats perfection.",
          "In Loom, click 'Share' → copy the link. Go back to Snov.io → in your Day 7 drip step, paste the Loom link as part of the email body: 'I recorded a 90-second intro instead of writing a long email — [Loom link]'.",
          "Screenshot the Loom dashboard showing your recorded video. Add it to your portfolio under: 'Video Outreach — Loom: Personalized Prospect Video'.",
        ],
      },
      {
        time: "2:30 – 3:30 PM",
        title: "Cold Call Script Practice + LinkedIn Post",
        priority: "HIGH",
        steps: [
          "Write and memorize a 45-second cold call script. Structure: PATTERN INTERRUPT (5s): 'Hey [Name], this is Rifka — did I catch you at a bad time?' → BRIDGE (10s): 'I'll be quick. I'm reaching out because I work with B2B SaaS teams in Australia...' → PAIN QUESTION (10s): 'Quick question — how are your SDRs currently managing pipeline visibility across the team?' → VALUE (10s): 'The reason I ask is most ops leaders I talk to are choosing between too many check-ins or zero visibility.' → SOFT ASK (5s): 'Worth a 20-minute call to see if it's relevant?'",
          "Practice OUT LOUD 5 times. Time yourself — it should be 40–50 seconds.",
          "Record yourself on Loom doing the cold call standing up, naturally. This becomes another portfolio piece.",
          "IMPORTANT — Post this Loom publicly on LinkedIn: 'I'm preparing for entry-level SDR interviews. Here's me doing a cold call roleplay — be honest about what I should fix. [Loom link] #SDR #SalesRoleplay #EntryLevel'. This type of post gets comments from hiring managers, goes semi-viral in sales communities, and gets people reaching out to YOU. It is one of the highest-leverage things you can do this week.",
        ],
      },
      {
        time: "3:30 – 5:00 PM",
        title: "Build Cold Email Sequence in Snov.io (Case Study)",
        priority: "HIGH",
        steps: [
          "Go back to your Snov.io drip campaign. Write actual email copy for each step:",
          "Step 1 (Day 1): Subject: 'Quick question about [Company]'s outreach process'. Body: 'Hi {{firstName}}, I came across {{companyName}} while researching AU SaaS teams managing distributed pipelines. Quick question — how is your team currently tracking outreach activity across reps? I've been building prospecting systems using Apollo, HubSpot, and Snov.io for B2B teams and would love 20 minutes. Worth a chat? — Rifka'",
          "Step 2 (Day 3): Subject: 'Re: Quick question'. Body: 'Hi {{firstName}}, looping back on my note. I put together a short case study on how I built a HubSpot pipeline + 5-step sequence for a B2B team — happy to send it over if useful. — Rifka'",
          "Step 3 (Day 7): Subject: 'Recorded something for you'. Body: 'Hi {{firstName}}, instead of another text email — I recorded a 90-second Loom walkthrough of my prospecting setup: [Loom link]. No pitch, just showing how I work. — Rifka'",
          "Step 4 (Day 14): Subject: 'Closing the loop'. Body: 'Hi {{firstName}}, I'll keep this short — if the timing isn't right, totally understand. If it ever is, my portfolio is here: [link]. — Rifka'",
          "Screenshot the full campaign with email copy visible. This is now a complete, real SDR outreach sequence you built — a genuine portfolio piece.",
        ],
      },
    ],
  },
  {
    day: "DAY 3",
    label: "Wednesday",
    theme: "Job Applications + Direct Outreach",
    color: "#7A9DB5",
    tasks: [
      {
        time: "9:00 – 10:00 AM",
        title: "Set Up Job Alerts on 5 Platforms",
        priority: "CRITICAL",
        steps: [
          "LinkedIn Jobs: Search 'SDR remote' + 'entry level SDR'. Filter: Remote. Date: Past 24 hours. Set 'Daily Alert'.",
          "Seek.com.au: Search 'Sales Development Representative remote'. Set email alert. This is the #1 Australian job board.",
          "WeWorkRemotely.com: Go to Sales & Marketing. Bookmark — check daily. Free, no account needed.",
          "Remotive.com: Search 'SDR' or 'entry level sales'. Free job board focused on remote-first companies.",
          "Wellfound.com (AngelList): Create a free account. Search 'SDR' + filter Remote. Lots of AU and SG startups post here. Set job alert.",
          "Join RevGenius Slack (revgenius.com/community) → #jobs channel. Free to join — no credit card.",
        ],
      },
      {
        time: "10:00 AM – 12:30 PM",
        title: "Apply to 15 Jobs — Quality Over Volume",
        priority: "CRITICAL",
        steps: [
          "Target: 15 applications this week, not 25+. One personalized application with a direct outreach follow-up is worth 5 generic form submissions. Quality beats volume for remote roles from Indonesia.",
          "From your alerts and target list, identify 15 roles. Prioritize roles that mention: 'entry-level', 'no experience required', 'we'll train you', or tools you already know (HubSpot, Apollo, cold email, outbound).",
          "For EVERY application: write a 3-sentence personalized cover note. Template: '[Company] caught my attention because [specific thing]. I'm an entry-level SDR with HubSpot certification, Apollo, Hunter.io, Snov.io, Sales Navigator, and Brevo in my toolkit. I built real case studies for each — portfolio link: [link].'",
          "Always attach: CV (PDF) + portfolio link. Never submit 'Easy Apply' without at least a 3-line note.",
          "Log every application in HubSpot CRM (your pipeline from Day 1) → 'SDR Job Applications' → stage: Applied. Set a follow-up task for 48 hours after each application.",
        ],
      },
      {
        time: "1:30 – 3:30 PM",
        title: "Direct Outreach to 15 Hiring Managers",
        priority: "CRITICAL",
        steps: [
          "This is the most important activity of the week. 15 direct outreach contacts beats 25 job applications. A hiring manager who receives a cold email from an SDR candidate — using SDR skills — immediately sees you can do the job.",
          "From your Sales Navigator and Apollo lists, find the Head of Sales or VP of Sales for 15 companies. Use Hunter.io or Snov.io to find their email.",
          "LinkedIn connection request note (300 char limit): 'Hi [Name] — I'm an entry-level SDR with HubSpot, Apollo, Sales Nav & Snov.io experience. I built real prospecting case studies, not just certifications. Would love to connect — portfolio in my profile.'",
          "Cold email for 8 of them (where you found their email): Subject: 'Entry-level SDR — HubSpot certified + real outreach case studies'. Body: 'Hi [Name], I noticed [Company] [specific thing]. I'm an entry-level SDR based in West Java, available across AU time zones. I've built HubSpot pipelines, Apollo prospect lists, Sales Navigator lead filters, Hunter.io email verification, and Snov.io drip campaigns — all documented in my portfolio: [link]. Worth a 20-minute call? — Rifka'",
          "With Mailtrack installed, you'll see exactly who opens your emails — follow up with those people within 1 hour of an open.",
        ],
      },
      {
        time: "3:30 – 5:00 PM",
        title: "Freelance SDR Lead (Free Practice + Real Case Study)",
        priority: "HIGH",
        steps: [
          "Find 3–5 small Indonesian B2B businesses (coaches, consultants, small software vendors) on Instagram or LinkedIn. These will be your free practice clients.",
          "DM them: 'Halo [Name], saya Rifka — SDR dengan pengalaman HubSpot, Apollo, dan Snov.io. Saya sedang mencari 1–2 klien untuk proyek prospecting 2 minggu — gratis. Saya bantu build lead list, set up email sequence, dan book discovery calls. Boleh ngobrol 15 menit?'",
          "If 1 person says yes: you now have a live client. Use Snov.io (free) to build their email campaign. Use Hunter.io (free) to find prospects. Use HubSpot (free) to track the outreach. Every action becomes a real, documented case study.",
          "Goal: 1 YES by end of the week. This single freelance project — even if unpaid — becomes your most powerful interview story.",
        ],
      },
    ],
  },
  {
    day: "DAY 4",
    label: "Thursday",
    theme: "Salesforce Trailhead + Brevo + Portfolio Polish",
    color: "#B58BAF",
    tasks: [
      {
        time: "9:00 – 11:30 AM",
        title: "Salesforce Trailhead — SDR Trail (Free — No Credit Card, Ever)",
        priority: "CRITICAL",
        steps: [
          "Go to trailhead.salesforce.com → click 'Sign up free'. No credit card needed — ever. Trailhead is 100% free, permanently.",
          "Search for the trail: 'Sales Development Representative'. Complete the full trail — it takes 3–4 hours and covers: lead management, pipeline stages, activity logging, and outreach best practices inside Salesforce.",
          "As you complete each module, you earn badges. These badges appear on your public Trailhead profile, which you can link from LinkedIn and your portfolio.",
          "Why this matters: Salesforce is the #1 CRM in AU/US enterprise job descriptions. HubSpot knowledge is great, but 'Salesforce Trailhead certified' removes the single biggest objection hiring managers have about entry-level candidates: 'they only know HubSpot, not Salesforce'.",
          "Screenshot your completed trail badge. Add it to your LinkedIn certifications section and your portfolio tools list.",
          "Add to your portfolio bio: 'Salesforce Trailhead — Sales Development Representative trail (completed [date])'. Even one badge makes you significantly more hirable for enterprise-adjacent roles.",
        ],
      },
      {
        time: "11:30 AM – 1:30 PM",
        title: "Learn Brevo (Free Email Sequences — No Credit Card)",
        priority: "HIGH",
        steps: [
          "Go to brevo.com → click 'Sign up free'. No credit card required. Free plan lets you send 300 emails/day and access automation workflows — permanently free.",
          "Once in: go to 'Automation' → create a new workflow. Choose 'Welcome message' as the starting template. Rename it: 'SDR Prospect Onboarding Sequence'.",
          "Build a 3-step automated sequence: Email 1 (trigger: contact added) — cold intro. Email 2 (delay: 3 days) — follow-up with value. Email 3 (delay: 7 days) — Loom video step.",
          "Go to 'Email Campaigns' → create a campaign called 'B2B SaaS Outreach — AU Market'. Set it up with: sender name, subject line, and a simple text email body (paste your Day 2 Step 1 email copy).",
          "Screenshot: the automation workflow (showing delays and steps), the campaign setup dashboard, and the contact list view.",
          "Add to portfolio: 'Email Automation — Brevo: Workflow Automation + Campaign Management'. You now have HubSpot + Snov.io + Brevo in your email automation stack. That's an unusually strong toolkit for an entry-level candidate.",
        ],
      },
      {
        time: "2:00 – 3:30 PM",
        title: "Build a Notion SDR Playbook (Free — No Credit Card)",
        priority: "HIGH",
        steps: [
          "Go to notion.so → sign up free with Gmail. No credit card. Notion is used by sales teams to document SOPs, playbooks, and tracking systems.",
          "Create a new page called: 'SDR Prospecting Playbook — Rifka Fathia'. Add these sections with real content: 1) ICP Definition (Ideal Customer Profile for AU SaaS), 2) Prospecting Stack (Apollo → Sales Navigator → Hunter.io → Snov.io workflow), 3) Email Sequence Templates (paste your 4-step sequence), 4) Cold Call Script, 5) Weekly Metrics Dashboard (a Notion table with columns: Week | Emails Sent | Open Rate | Reply Rate | Meetings Booked).",
          "Make the page public: click Share → enable 'Share to web'. Copy the public link.",
          "This Notion playbook shows a hiring manager you don't just use tools — you document processes. That's the mindset of an SDR who can be trained into an AE.",
          "Add the Notion link to your portfolio and LinkedIn Featured section.",
        ],
      },
      {
        time: "3:30 – 5:00 PM",
        title: "Add Metrics + Updated Tool Stack to Portfolio",
        priority: "HIGH",
        steps: [
          "Open your portfolio case studies. Update the 'Tools Used' badge list to include: HubSpot (certified), Apollo, LinkedIn Sales Navigator, Hunter.io, Snov.io, Brevo, Mailtrack, Loom, Notion, Salesforce (Trailhead).",
          "Add benchmark targets to every case study. Example for your CRM case study: Cold email open rate target: 45–55% | Reply rate target: 8–12% | Discovery call booking: 3–5%.",
          "Add a new section to your portfolio intro: 'Entry-level SDR with a self-built tool stack. All tools learned independently — no bootcamp, no employer. Every case study was built from scratch using free-tier tools that real SDR teams use.'",
          "This framing turns your lack of paid experience into a strength: you learned everything yourself, without being paid to learn it. That signals drive and resourcefulness — exactly what hiring managers want.",
          "Follow up on all Day 3 outreach. Open HubSpot pipeline → any applications with no reply in 48 hours → send a follow-up with your Loom portfolio walkthrough link.",
        ],
      },
    ],
  },
  {
    day: "DAY 5",
    label: "Friday",
    theme: "Apply More + Community Networking",
    color: "#C87E7E",
    tasks: [
      {
        time: "9:00 – 10:30 AM",
        title: "Apply to 10 More Jobs + Log in HubSpot",
        priority: "CRITICAL",
        steps: [
          "Check all 5 job boards from Day 3 for new postings from the last 48 hours.",
          "Prioritize: roles that mention HubSpot, Apollo, Salesforce, Sales Navigator, cold email, or outbound — your exact stack. For these roles, you are already overqualified on tools even as an entry-level candidate.",
          "For AU roles: mention AU timezone overlap in your cover note. 'I'm based in West Java (GMT+7) and am available to overlap with AEST during standard working hours.'",
          "For SG roles: 'I'm based in West Java (GMT+7), which aligns with SGT with zero timezone friction.'",
          "Log every application in HubSpot CRM. You should have 20+ deals in your pipeline by end of Day 5.",
        ],
      },
      {
        time: "10:30 AM – 12:30 PM",
        title: "Activate in Free Sales Communities",
        priority: "HIGH",
        steps: [
          "RevGenius Slack (free): Go to #jobs channel. Post: 'Hey everyone — Rifka here from Indonesia. Entry-level SDR, HubSpot certified + Salesforce Trailhead, with case studies in Apollo, Sales Navigator, Hunter.io, Snov.io, Brevo, and Loom. Open to remote AU/SG/US roles. Happy to share portfolio — anyone hiring or know someone who is?'",
          "LinkedIn: Search 'SDR hiring' this week. Find 5 posts from hiring managers. Leave a thoughtful comment (not just 'great post'). Then DM: 'Hi [Name] — I commented on your post about [topic]. I'm also looking for an entry-level remote SDR role — would love to connect if you're open to it.'",
          "Engage with 10 posts from AU sales leaders, SaaS founders, or SDR managers. Genuine comments put you on their radar without a direct ask. Hiring managers often check commenters' profiles.",
          "Post your own LinkedIn update today: 'I spent this week building a full entry-level SDR toolkit — all free tools, all documented. HubSpot, Apollo, Sales Navigator, Hunter.io, Snov.io, Brevo, Salesforce Trailhead, Loom, and Notion. Here's what I learned: [2–3 bullet insights]. Actively looking for a remote SDR role — portfolio in the link. #SDR #EntryLevel #RemoteSales #B2BSales'",
        ],
      },
      {
        time: "1:30 – 3:00 PM",
        title: "Informational Interviews with Remote SDRs",
        priority: "MEDIUM",
        steps: [
          "Search LinkedIn for Indonesian or SEA-based SDRs working remotely for AU/US/SG companies. Search: 'SDR' + 'Indonesia' OR 'remote' in headline.",
          "Send this message: 'Hi [Name] — I came across your profile and saw you're working remotely as an SDR. I'm preparing to make the same transition and would love 15 minutes of your time — no ask, just genuinely curious about how you landed the role and what day-to-day looks like.'",
          "Goal: 2–3 replies this week. These conversations reveal which companies actually hire remote Indonesian SDRs, what the interview process looks like, and sometimes lead to direct referrals.",
        ],
      },
      {
        time: "3:00 – 5:00 PM",
        title: "Send 5 More Direct Outreach Emails to Hiring Managers",
        priority: "CRITICAL",
        steps: [
          "From your target company list, find 5 companies not actively posting but that look like a good fit.",
          "Send this subject line: 'Not sure if you're hiring — but here's my portfolio anyway.' Body: 'Hi [Name], I didn't see an open SDR role on your site, but I've been following [Company] and think I'd be a strong entry-level fit. I've built real case studies using Apollo, HubSpot, Sales Navigator, Hunter.io, Snov.io, Brevo, and Loom — all free tools, all documented. Salesforce Trailhead certified. Portfolio: [link]. If timing ever makes sense — I'm easy to find. — Rifka'",
          "Proactive outreach to non-posting companies books interviews that never appear on job boards. Many remote hires happen this way — especially for entry-level SDRs who stand out.",
          "Check Mailtrack — any of your earlier emails get opened today? Follow up immediately with those prospects. Timing your follow-up to an email open is one of the most effective SDR tactics there is.",
        ],
      },
    ],
  },
  {
    day: "DAY 6",
    label: "Saturday",
    theme: "Interview Prep",
    color: "#8BAFAB",
    tasks: [
      {
        time: "10:00 AM – 12:30 PM",
        title: "Master the 10 Most Common Entry-Level SDR Interview Questions",
        priority: "CRITICAL",
        steps: [
          "Q1: 'Tell me about yourself.' Framework (90 seconds): 1 sentence background → pivot to sales ('Before I knew the title, I was already doing the job') → 2 sentences on what you've built (HubSpot, Apollo, Sales Navigator, Salesforce Trailhead, case studies) → 1 sentence on what you're looking for.",
          "Q2: 'Why SDR if you have no professional experience?' Answer: 'I decided to remove that objection before the interview. I spent the last week building a full prospecting stack — Apollo, HubSpot (certified), LinkedIn Sales Navigator, Hunter.io, Snov.io, Brevo, Salesforce Trailhead, and Loom. Every tool is documented in a real case study. I'm entry-level in title only.'",
          "Q3: 'Cold call me right now.' Use your Day 2 script. Say it standing up, confidently. Don't apologize for doing it.",
          "Q4: 'How do you handle rejection?' Answer: 'I treat every no as data. No reply = adjust the subject line. Not now = 30-day follow-up. No in principle = ask for a referral. The process matters more than any individual outcome.'",
          "Q5: 'Walk me through your prospecting process.' Answer: Research & Segment (Apollo + LinkedIn Sales Navigator) → Find & Verify Emails (Hunter.io/Snov.io) → Build & Launch Sequence (Snov.io/Brevo) → Track Opens (Mailtrack) → Report (HubSpot pipeline). Walk through each step.",
          "Q6: 'What's your experience with CRM?' Answer: HubSpot (certified — walk through your pipeline case study: 9 custom stages, automated sequences, round-robin scheduling). Also Salesforce Trailhead certified — familiar with lead tracking, pipeline management, and activity logging in SFDC.",
          "Q7: 'How many touches before you give up on a prospect?' Answer: 'Minimum 6–8 touches across at least 2 channels before I close the loop. My Snov.io sequence is 4 emails. I add LinkedIn touchpoints in between. The breakup email often gets the most replies.'",
          "Q8: 'Do you have any questions for us?' Always ask: 'What does your SDR onboarding look like in the first 30 days? / What's the biggest challenge your SDRs face right now? / What CRM are you running — HubSpot or Salesforce?'",
          "Q9: 'What tools have you used?' Answer confidently: 'Apollo for prospecting, HubSpot for CRM and sequences (I'm certified), LinkedIn Sales Navigator for account-based targeting, Hunter.io for email finding and verification, Snov.io for drip campaigns, Brevo for email automation, Mailtrack for open tracking, Loom for video outreach, Salesforce (Trailhead certified), and Notion for playbook documentation. All self-taught, all with documented case studies.'",
          "Q10: 'What's your expected salary?' Research first: for remote AU roles, USD $1,200–$2,000/month base is realistic for an Indonesia-based entry-level SDR. Say: 'Based on my research for remote SDR roles targeting the AU market, I'm targeting [range]. Open to discussing structure if there's a strong base + commission component.'",
        ],
      },
      {
        time: "1:00 – 3:00 PM",
        title: "Mock Interview Practice",
        priority: "HIGH",
        steps: [
          "Record yourself answering all 10 questions on Loom. Watch it back immediately.",
          "Note: Are you looking at the camera (not your notes)? Are answers under 2 minutes? Do you sound confident or apologetic?",
          "Re-record any answer that felt uncertain, too long, or started with 'Um' or 'So'.",
          "Ask a friend or family member to roleplay as an interviewer — questions in random order. Time each answer.",
          "For the cold call question specifically: practice until you can do it without hesitating. This is the most common live test in SDR interviews and the one that separates candidates instantly.",
        ],
      },
      {
        time: "3:00 – 4:30 PM",
        title: "Salary Research + Entry-Level Negotiation Prep",
        priority: "MEDIUM",
        steps: [
          "Research on: Glassdoor ('SDR remote Australia'), Wellfound (AngelList salary data), RevGenius community for candid SDR pay discussions.",
          "Realistic entry-level ranges for Indonesia-based remote SDRs: Early-stage AU startup: USD $900–$1,500/month base. Mid-stage AU SaaS: USD $1,500–$2,200/month base. Plus commission OTE uplift of 20–40%.",
          "Know your number, know your minimum, and always try to make them say a number first: 'What's the budgeted range for this role?' is a legitimate and professional question.",
          "Your Salesforce Trailhead badge + Sales Navigator experience is real negotiation leverage for roles that mention Salesforce or enterprise sales. You are not 'free training cost' — you already know the tools.",
        ],
      },
    ],
  },
  {
    day: "DAY 7",
    label: "Sunday",
    theme: "Review, Optimize & Week 2 Plan",
    color: "#C8B96E",
    tasks: [
      {
        time: "10:00 – 11:30 AM",
        title: "Review Your Week's Numbers in HubSpot",
        priority: "CRITICAL",
        steps: [
          "Open HubSpot CRM → 'SDR Job Applications' pipeline. Count: Total deals (applications). By stage: Applied | Followed Up | Replied | Interview Scheduled.",
          "Open a Google Sheet or Notion and log: Applications sent | Direct outreach emails | LinkedIn DMs | Replies received | Interviews booked | Freelance client conversations | Mailtrack email opens.",
          "Week 1 target: 25+ applications, 15+ direct outreach emails, 10+ LinkedIn DMs, 2–3 replies, 1 freelance client conversation started.",
          "If below target: identify exactly where you slowed down and reframe: this is a sales pipeline. Low conversions don't mean stop — they mean increase volume and adjust your angle.",
        ],
      },
      {
        time: "11:30 AM – 1:00 PM",
        title: "Follow Up on Everything",
        priority: "CRITICAL",
        steps: [
          "In HubSpot, filter for all deals in 'Applied' stage with no activity in 48 hours. Send follow-up emails to all of them.",
          "Template: 'Hi [Name], just looping back on my note from [Day]. Still very interested in [Company]. Happy to do a 15-minute call or I can send a Loom walkthrough of my portfolio — whatever's easier. — Rifka'",
          "LinkedIn connections who accepted but didn't reply: 'Thanks for connecting! I'm actively looking for entry-level remote SDR roles — I built case studies across Apollo, HubSpot, Sales Navigator, Hunter.io, Snov.io, and Brevo. Happy to share the portfolio if useful.'",
          "Check Mailtrack — any emails opened but not replied to? Those are warm leads. Follow up today.",
          "80% of sales happen after the 5th follow-up. Most entry-level candidates give up after 1. Don't be most candidates. Following up is literally the job.",
        ],
      },
      {
        time: "1:00 – 2:30 PM",
        title: "Plan Week 2 — Double What's Working",
        priority: "HIGH",
        steps: [
          "Look at your HubSpot pipeline. Which channel got the most replies — LinkedIn DM, cold email, job boards, or community posts?",
          "Double down on that channel in Week 2. If LinkedIn DMs worked best, send 20/day instead of 10. If cold emails worked, send 10/day instead of 5.",
          "Week 2 goals: 25 more applications | Start freelance SDR project if you got a YES | Book 1 real intro call | Begin drafting a 30-60-90 day SDR plan (second-stage interviews often ask for this).",
          "Add these job boards to your Week 2 rotation: Otta.com (great for remote SaaS), Pallet.com (curated tech sales roles), and Greenhouse.io (startup-focused).",
          "Continue your Salesforce Trailhead trail in Week 2 — aim for 2–3 more badges. The more you complete, the stronger your Trailhead public profile looks to recruiters who check it.",
        ],
      },
      {
        time: "2:30 – 3:30 PM",
        title: "Mindset Reset + 3 Wins from This Week",
        priority: "MEDIUM",
        steps: [
          "Write down 3 wins from this week. Even small ones count: ran your first Sales Navigator search, completed Salesforce Trailhead trail, recorded your Loom, got one reply. These are real wins.",
          "Job hunting as an entry-level SDR is itself an SDR campaign. You are the product. The hiring manager is the prospect. The offer is the close. Treat your application pipeline exactly like a sales pipeline.",
          "Protect your energy: hard stop on job-related activity by 6 PM. Sleep, exercise, and rest will keep your energy high enough to sound confident in interviews.",
          "Final reminder: you went from 'no experience' to 'HubSpot certified + Salesforce Trailhead + Apollo + Sales Navigator + Hunter.io + Snov.io + Brevo + Mailtrack + Loom + Notion — all with documented case studies' in 7 days. That is not a weak candidate. That is a resourceful, self-directed SDR who just needs someone to give them the runway.",
        ],
      },
    ],
  },
];

const priorityColors = {
  CRITICAL: { bg: "#3D1A1A", text: "#FF8080", border: "#FF4444" },
  HIGH: { bg: "#1A2D1A", text: "#80C880", border: "#44AA44" },
  MEDIUM: { bg: "#1A1A2D", text: "#8080C8", border: "#4444AA" },
};

const toolBadges = [
  { name: "HubSpot", status: "known", color: "#FF7A59" },
  { name: "Apollo", status: "known", color: "#7B68EE" },
  { name: "Hunter.io", status: "new", color: "#C8A96E" },
  { name: "Snov.io", status: "new", color: "#8BAF8B" },
  { name: "Sales Navigator", status: "new", color: "#0A66C2" },
  { name: "Salesforce", status: "new", color: "#00A1E0" },
  { name: "Brevo", status: "new", color: "#B58BAF" },
  { name: "Mailtrack", status: "new", color: "#C87E7E" },
  { name: "Loom", status: "new", color: "#625DF5" },
  { name: "Notion", status: "new", color: "#8BAFAB" },
];

export default function SDRWeeklyPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedTask, setExpandedTask] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});

  const toggleStep = (taskIdx, stepIdx) => {
    const key = `${activeDay}-${taskIdx}-${stepIdx}`;
    setCompletedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getCompletedCount = (dayIdx) => {
    let total = 0, done = 0;
    days[dayIdx].tasks.forEach((t, ti) => {
      t.steps.forEach((_, si) => {
        total++;
        if (completedSteps[`${dayIdx}-${ti}-${si}`]) done++;
      });
    });
    return { done, total };
  };

  const current = days[activeDay];

  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", fontFamily: "'Georgia', serif", color: "#E8E0D0" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #2A2A2A", padding: "28px 32px 20px", background: "#111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: "#666", marginBottom: 8, textTransform: "uppercase" }}>
            Rifka Fathia Hanie · Entry-Level SDR Job Hunt
          </div>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: "normal", color: "#E8E0D0", letterSpacing: 1 }}>
            7-Day Plan to Get Hired — Free Tools, Real Portfolio
          </h1>
          <p style={{ margin: "8px 0 16px", fontSize: 13, color: "#888", fontStyle: "italic" }}>
            All tools below are permanently free — no credit card, no trial expiry. Sales Navigator requires a card (cancel before Day 30).
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {toolBadges.map(t => (
              <div key={t.name} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 2,
                border: `1px solid ${t.color}44`,
                color: t.color,
                background: `${t.color}11`,
                letterSpacing: 0.5,
              }}>
                {t.status === "known" ? "✓ " : "+ "}{t.name}
                <span style={{ color: "#555", marginLeft: 4, fontSize: 10 }}>
                  {t.status === "known" ? "learned" : "this week"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Day Selector */}
      <div style={{ background: "#111", borderBottom: "1px solid #1E1E1E", overflowX: "auto" }}>
        <div style={{ display: "flex", maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
          {days.map((d, i) => {
            const { done, total } = getCompletedCount(i);
            const isActive = i === activeDay;
            return (
              <button key={i} onClick={() => { setActiveDay(i); setExpandedTask(null); }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "16px 18px 12px", position: "relative",
                  borderBottom: isActive ? `2px solid ${d.color}` : "2px solid transparent",
                  transition: "all 0.2s", minWidth: 88, textAlign: "center",
                }}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: isActive ? d.color : "#555", marginBottom: 3 }}>
                  {d.day}
                </div>
                <div style={{ fontSize: 12, color: isActive ? "#E8E0D0" : "#666" }}>{d.label}</div>
                {done > 0 && (
                  <div style={{
                    position: "absolute", top: 8, right: 8, width: 6, height: 6,
                    borderRadius: "50%", background: done === total ? "#44AA44" : d.color,
                  }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 32px 60px" }}>
        <div style={{ marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, color: current.color, marginBottom: 6, textTransform: "uppercase" }}>
              {current.day} · {current.label}
            </div>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: "normal", color: "#E8E0D0" }}>{current.theme}</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "#555", marginBottom: 2 }}>Progress</div>
            <div style={{ fontSize: 20, color: current.color, fontStyle: "italic" }}>
              {getCompletedCount(activeDay).done}/{getCompletedCount(activeDay).total}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {current.tasks.map((task, ti) => {
            const isExpanded = expandedTask === ti;
            const p = priorityColors[task.priority];
            const doneSteps = task.steps.filter((_, si) => completedSteps[`${activeDay}-${ti}-${si}`]).length;
            return (
              <div key={ti} style={{
                border: `1px solid ${isExpanded ? current.color + "55" : "#222"}`,
                borderRadius: 4, overflow: "hidden", transition: "border-color 0.2s",
              }}>
                <button onClick={() => setExpandedTask(isExpanded ? null : ti)}
                  style={{
                    width: "100%", background: isExpanded ? "#161616" : "#131313",
                    border: "none", cursor: "pointer", padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: 16, textAlign: "left",
                  }}>
                  <div style={{
                    fontSize: 10, letterSpacing: 1.5, color: p.text, background: p.bg,
                    border: `1px solid ${p.border}22`, padding: "2px 8px", borderRadius: 2,
                    flexShrink: 0, fontFamily: "monospace",
                  }}>{task.priority}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, color: "#E8E0D0", marginBottom: 2 }}>{task.title}</div>
                    <div style={{ fontSize: 11, color: "#555", fontStyle: "italic" }}>{task.time}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {doneSteps > 0 && (
                      <div style={{ fontSize: 11, color: current.color }}>{doneSteps}/{task.steps.length} done</div>
                    )}
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%", border: "1px solid #333",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#555", fontSize: 12,
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s",
                    }}>↓</div>
                  </div>
                </button>
                {isExpanded && (
                  <div style={{ background: "#0F0F0F", padding: "8px 20px 20px" }}>
                    <div style={{ height: 1, background: "#1E1E1E", marginBottom: 16 }} />
                    {task.steps.map((step, si) => {
                      const key = `${activeDay}-${ti}-${si}`;
                      const done = completedSteps[key];
                      return (
                        <div key={si} onClick={() => toggleStep(ti, si)}
                          style={{
                            display: "flex", gap: 14, marginBottom: 14, cursor: "pointer",
                            padding: "10px 12px", borderRadius: 3,
                            background: done ? "#141F14" : "transparent",
                            border: `1px solid ${done ? "#44AA4422" : "transparent"}`,
                            transition: "all 0.15s",
                          }}>
                          <div style={{ flexShrink: 0, marginTop: 2 }}>
                            <div style={{
                              width: 18, height: 18, borderRadius: 2,
                              border: `1px solid ${done ? "#44AA44" : "#333"}`,
                              background: done ? "#44AA44" : "transparent",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: 11, color: done ? "#fff" : "transparent", transition: "all 0.15s",
                            }}>✓</div>
                          </div>
                          <div style={{
                            fontSize: 13.5, lineHeight: 1.65,
                            color: done ? "#555" : "#C8C0B0",
                            textDecoration: done ? "line-through" : "none", transition: "color 0.15s",
                          }}>
                            <span style={{ color: done ? "#555" : current.color, fontStyle: "italic", marginRight: 6 }}>
                              {String(si + 1).padStart(2, "0")}.
                            </span>
                            {step}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div style={{
          marginTop: 36, padding: "20px 24px", background: "#111",
          border: "1px solid #1E1E1E", borderRadius: 4,
          display: "flex", gap: 32, flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#555", marginBottom: 6 }}>WEEK TARGET</div>
            <div style={{ fontSize: 13, color: "#E8E0D0" }}>25 Applications · 15 Direct Outreach · 10 New Tools</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#555", marginBottom: 6 }}>MARKET</div>
            <div style={{ fontSize: 13, color: "#E8E0D0" }}>AU SaaS · Remote · GMT+7</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#555", marginBottom: 6 }}>TOTAL STEPS</div>
            <div style={{ fontSize: 13, color: current.color }}>
              {Object.values(completedSteps).filter(Boolean).length} / {days.reduce((a, d) => a + d.tasks.reduce((b, t) => b + t.steps.length, 0), 0)} completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
