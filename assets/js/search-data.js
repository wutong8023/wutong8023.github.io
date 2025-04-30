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
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publication/";
          },
        },{id: "nav-engagement",
          title: "Engagement",
          description: "My recent and upcoming academic engagements, including keynote speeches, invited tutorials, and panel discussions.",
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
          section: "News",},{id: "news-our-paper-on-non-monotonic-reasoning-capability-of-llms-has-been-accepted-to-ijcai-2025",
          title: 'Our paper on Non-monotonic Reasoning Capability of LLMs has been accepted to IJCAI...',
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
