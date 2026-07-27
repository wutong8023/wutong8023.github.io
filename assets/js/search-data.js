// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "Publication",
          description: "Last Updated - 8 Feb 2026.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publication/";
          },
        },{id: "nav-engagement",
          title: "Engagement",
          description: "My recent and upcoming academic engagements, including selected keynote speeches, invited tutorials, and panel discussions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Engagement/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/CV/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "My teaching experience, courses, and educational materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Teaching/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "My brilliant collaborators and friends.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Team/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-of-continual-relation-extraction-is-accepted-to-aaai-2021",
          title: 'One paper of Continual Relation Extraction is accepted to AAAI 2021.',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-at-ai-time-named-continual-relation-extraction",
          title: 'I will give a talk at AI-Time named “Continual Relation Extraction”.',
          description: "",
          section: "News",},{id: "news-one-paper-on-few-shot-event-detection-is-accepted-to-acl-ijcnlp-2021",
          title: 'One paper on Few-shot Event Detection is accepted to ACL-IJCNLP 2021.',
          description: "",
          section: "News",},{id: "news-i-am-invited-to-give-a-talk-to-joint-lab-on-knoweldge-engine-of-azft-named-advances-of-continual-learning-for-nlp-what-we-build-and-what-we-need",
          title: 'I am invited to give a talk to Joint Lab on Knoweldge Engine...',
          description: "",
          section: "News",},{id: "news-one-paper-on-empirical-analysis-of-cl-and-plm-is-accepted-to-iclr-2022",
          title: 'One paper on Empirical Analysis of CL and PLM is accepted to ICLR...',
          description: "",
          section: "News",},{id: "news-one-paper-on-speech-based-relation-extraction-is-accepted-to-emnlp-2022",
          title: 'One paper on Speech-based Relation Extraction is accepted to EMNLP 2022.',
          description: "",
          section: "News",},{id: "news-one-paper-on-zero-shot-relation-extraction-is-accepted-to-wwwj",
          title: 'One paper on Zero-shot Relation Extraction is accepted to WWWJ.',
          description: "",
          section: "News",},{id: "news-i-have-successfully-defended-my-phd-clap-grin-thanks-everyone",
          title: 'I have successfully defended my PhD! :clap:	:grin: Thanks everyone!',
          description: "",
          section: "News",},{id: "news-we-released-a-new-benchmark-dataset-on-version-controllable-code-generation-versicode",
          title: 'We released a new benchmark dataset on Version-controllable Code Generation (VersiCode)!',
          description: "",
          section: "News",},{id: "news-i-ll-be-giving-a-keynote-on-continual-learning-with-llms-at-cl-mm-2024-hope-to-see-you-there",
          title: 'I’ll be giving a keynote on Continual Learning with LLMs at CL@MM 2024,...',
          description: "",
          section: "News",},{id: "news-i-ll-be-giving-a-3-hour-tutorial-on-continual-learning-with-llms-at-ajcai-2024-hope-to-see-you-there",
          title: 'I’ll be giving a 3-hour tutorial on Continual Learning with LLMs at AJCAI...',
          description: "",
          section: "News",},{id: "news-i-will-be-delivering-a-3-hour-tutorial-on-continual-learning-with-llms-at-emnlp-2025-hope-to-see-you-there",
          title: 'I will be delivering a 3-hour tutorial on Continual Learning with LLMs at...',
          description: "",
          section: "News",},{id: "news-our-position-paper-on-lifespan-cognitive-systems-has-been-accepted-to-tmlr",
          title: 'Our position paper on LifeSpan Cognitive Systems has been accepted to TMLR.',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-give-a-talk-at-seu-and-njupt-i-look-forward-to-seeing-you-there",
          title: 'I have been invited to give a talk at SEU and NJUPT. I...',
          description: "",
          section: "News",},{id: "news-our-paper-on-error-detection-in-knowledge-graphs-has-been-accepted-to-dasfaa-2025",
          title: 'Our paper on Error Detection in Knowledge Graphs has been accepted to DASFAA...',
          description: "",
          section: "News",},{id: "news-our-paper-on-llms-understanding-of-knowledge-graphs-has-been-accepted-to-kbs",
          title: 'Our paper on LLMs’ Understanding of Knowledge Graphs has been accepted to KBS....',
          description: "",
          section: "News",},{id: "news-our-2-papers-on-complex-attribtion-assessment-and-multi-lingual-safty-alignment-have-been-accepted-to-the-main-conference-of-acl-2025",
          title: 'Our 2 papers on Complex Attribtion Assessment and Multi-lingual Safty Alignment have been...',
          description: "",
          section: "News",},{id: "news-our-paper-on-continual-speech-learning-has-been-accepted-to-interspeech-2025",
          title: 'Our paper on Continual Speech Learning has been accepted to InterSpeech 2025.',
          description: "",
          section: "News",},{id: "news-our-versicode-benchmark-has-been-officially-integrated-into-openhands",
          title: 'Our VersiCode benchmark has been officially integrated into OpenHands！',
          description: "",
          section: "News",},{id: "news-i-m-delighted-to-share-that-i-ve-been-invited-to-join-the-editorial-board-of-data-intelligence",
          title: 'I’m delighted to share that I’ve been invited to join the Editorial Board...',
          description: "",
          section: "News",},{id: "news-two-of-our-papers-on-continual-knowledge-learning-and-multilingual-llm-reasoning-have-been-accepted-to-neurips-2025-excitingly-the-multilingual-paper-has-been-selected-as-a-spotlight",
          title: 'Two of our papers on Continual Knowledge Learning and Multilingual LLM Reasoning have...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-area-chair-for-acl-arr-october-cycle",
          title: 'I will serve as an Area Chair for ACL ARR (October cycle).',
          description: "",
          section: "News",},{id: "news-our-paper-on-mathematical-reasoning-with-evolving-tax-laws-has-been-accepted-to-aaai-2026",
          title: 'Our paper on Mathematical Reasoning with Evolving Tax Laws has been accepted to...',
          description: "",
          section: "News",},{id: "news-we-ll-be-giving-a-3-hour-tutorial-at-emnlp-2025-t7-continual-learning-of-llms-november-8-happy-to-connect",
          title: 'We’ll be giving a 3-hour tutorial at EMNLP 2025 (T7 - Continual Learning...',
          description: "",
          section: "News",},{id: "news-our-paper-on-environment-aware-code-generation-has-been-accepted-to-icse-2026",
          title: 'Our paper on Environment-aware Code Generation has been accepted to ICSE 2026.',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-guest-editor-for-the-knowledge-engineering-review-special-issue-on-memory-augmented-llm-agents-submissions-are-very-welcome",
          title: 'I will serve as a guest editor for the Knowledge Engineering Review special...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-an-area-chair-for-the-acl-arr-january-2026-cycle",
          title: 'I will serve as an Area Chair for the ACL ARR January 2026...',
          description: "",
          section: "News",},{id: "news-our-paper-on-lifelong-scene-graph-generation-has-been-accepted-to-pattern-recognition",
          title: 'Our paper on Lifelong Scene Graph Generation has been accepted to Pattern Recognition....',
          description: "",
          section: "News",},{id: "news-our-paper-on-conditional-multi-agent-topology-design-has-been-accepted-to-iclr-2026",
          title: 'Our paper on Conditional Multi-Agent Topology Design has been accepted to ICLR 2026....',
          description: "",
          section: "News",},{id: "news-our-paper-on-uncertainty-aware-dynamic-rag-has-been-accepted-to-findings-of-acl-2026",
          title: 'Our paper on Uncertainty-aware Dynamic RAG has been accepted to Findings of ACL...',
          description: "",
          section: "News",},{id: "news-our-paper-on-new-benchmark-for-agentic-academic-reconstruction-has-been-accepted-to-acm-mm-2026",
          title: 'Our paper on New Benchmark for Agentic Academic Reconstruction has been accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-on-unified-agent-for-structured-knowledge-reasoning-has-been-accepted-to-tkde",
          title: 'Our paper on Unified Agent for Structured Knowledge Reasoning has been accepted to...',
          description: "",
          section: "News",},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/21/7109.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%75%74%6F%6E%67%38%30%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wutong8023", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tongtong-wu-177400110", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5752-9779", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=u1Qp8lUAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://research.monash.edu/en/persons/tongtong-wu", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
