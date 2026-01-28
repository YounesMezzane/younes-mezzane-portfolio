import { Experience, Education, Skill, Language, Certification } from './types';
import { CONTACT_INFO } from './constants';

const SUMMARY_FR = "Un technicien spécialisé systèmes et réseaux professionnels dans la gestion de la sécurité de l'infrastructure des réseaux, la résolution de tous les problèmes liés au réseau, la mise en œuvre de solutions pour les besoins de l'entreprise, la conservation et la maintenance des appareils liés au réseau et la garantie du bon fonctionnement des services au sein d'un réseau.";

interface Translation {
  nav: {
    experience: string;
    education: string;
    skills: string;
    certifications: string;
    contact: string;
    cv: string;
  };
  hero: {
    badge: string;
    role: string;
    summary: string;
    contactBtn: string;
    cvBtn: string;
  };
  sectionTitles: {
    experience: string;
    education: string;
    skills: string;
    certifications: string;
    contact: string;
  };
  skills: {
    technical: string;
    soft: string;
    interests: string;
    languages: string;
    native: string;
    intermediate: string;
    softSkillsList: Skill[];
    interestsList: string[];
    technicalList: Skill[]; // Added to allow translation of skill names if needed
    languagesList: Language[];
  };
  certifications: {
    viewAll: string;
    list: Certification[];
  };
  contact: {
    description: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendBtn: string;
    phoneLabel: string;
    locationLabel: string;
    emailInfoLabel: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    disclaimer: string;
  };
  footer: {
    rights: string;
    socials: string;
    contact: string;
    desc: string;
  };
  experiences: Experience[];
  education: Education[];
}

const fr: Translation = {
  nav: {
    experience: 'Expérience',
    education: 'Formation',
    skills: 'Compétences',
    certifications: 'Certifications',
    contact: 'Contact',
    cv: 'Mon CV'
  },
  hero: {
    badge: 'Systèmes & Réseaux',
    role: 'Technicien Spécialisé Systèmes et Réseaux',
    summary: SUMMARY_FR,
    contactBtn: 'Me contacter',
    cvBtn: 'Mon CV'
  },
  sectionTitles: {
    experience: 'Expérience Professionnelle',
    education: 'Formation',
    skills: 'Compétences',
    certifications: 'Certifications',
    contact: 'Contact'
  },
  skills: {
    technical: 'Compétences Techniques',
    soft: 'Compétences Douces (Soft Skills)',
    interests: "Centres d'intérêt",
    languages: 'Langues',
    native: 'Natif',
    intermediate: 'Intermédiaire',
    technicalList: [
      { name: "Windows 7 / 10 / Server 2016 / 2022", category: "Technical", level: 95 },
      { name: "Cisco CCNA (Routing, Switching, Security)", category: "Technical", level: 85 },
      { name: "Administration Linux", category: "Technical", level: 80 },
      { name: "PowerShell & Scripting", category: "Technical", level: 75 },
      { name: "Câblage réseaux", category: "Technical", level: 85 },
      { name: "Virtualisation (VMware, VirtualBox, Hyper-V)", category: "Technical", level: 85 },
      { name: "Outils de gestion (GLPI, OCS Inventory)", category: "Technical", level: 90 },
      { name: "Outils à distance (TeamViewer, AnyDesk, RDP)", category: "Technical", level: 95 },
      { name: "Microsoft Office", category: "Technical", level: 90 },
      { name: "Bases Python", category: "Technical", level: 60 }
    ],
    softSkillsList: [
      { name: "Organisation & Anticipation", category: "Soft" },
      { name: "Communication & Écoute", category: "Soft" },
      { name: "Analyse & Synthèse", category: "Soft" },
      { name: "Travail d'équipe", category: "Soft" },
      { name: "Adaptation facile", category: "Soft" }
    ],
    interestsList: [
      "Jeu de construction LEGO",
      "Veille technologique",
      "Mixage musical",
      "Jeux vidéo",
      "Bricolage",
      "Soccer"
    ],
    languagesList: [
      { name: "Arabe", level: "Natif", score: 5 },
      { name: "Berbère", level: "Natif", score: 5 },
      { name: "Français", level: "Intermédiaire", score: 3 },
      { name: "Anglais", level: "Intermédiaire", score: 3 }
    ]
  },
  certifications: {
    viewAll: 'Voir toutes les certifications sur Credly',
    list: [
        { name: "PCAP: Programming Essentials in Python", issuer: "Cisco" },
        { name: "Networking Devices and Initial Configuration", issuer: "Cisco" },
        { name: "Hacker éthique", issuer: "Cisco" },
        { name: "Cybersecurity Essentials", issuer: "Cisco" },
        { name: "CCNA : essentiels sur la commutation, le routage et le sans fil", issuer: "Cisco" },
        { name: "+ 10 autres certifications", issuer: "Various" }
    ]
  },
  contact: {
    description: "Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour dire bonjour.",
    nameLabel: "Nom complet",
    emailLabel: "Email",
    messageLabel: "Message",
    sendBtn: "Envoyer l'email",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    emailInfoLabel: "Email",
    placeholderName: "Votre nom",
    placeholderEmail: "votre@email.com",
    placeholderMessage: "Votre message...",
    disclaimer: "Cela ouvrira votre application de messagerie par défaut."
  },
  footer: {
    rights: "Tous droits réservés.",
    socials: "Liens Sociaux",
    contact: "Contact",
    desc: "Technicien spécialisé systèmes et réseaux passionné par la sécurité informatique et l'administration système."
  },
  experiences: [
    {
      id: "0",
      role: "Network System Technician",
      company: "Faculté des Sciences Semlalia Marrakech",
      period: "08/2025 - Présent",
      location: "Marrakech, Maroc",
      description: [
        "Support technique et assistance aux utilisateurs internes : Diagnostic et résolution d’incidents systèmes et réseaux, installation Wi-Fi, gestion des tickets.",
        "Administration Windows Server 2022 : Active Directory, DNS, DHCP, GPO et sécurité de l’infrastructure.",
        "Sécurisation et gestion de l’accès distant : Déploiement et durcissement des accès RDP.",
        "Maintenance et supervision du parc informatique : Suivi préventif/correctif et optimisation des postes de travail.",
        "Automatisation via PowerShell : Scripts pour le démarrage/arrêt, ouverture d’applications et nettoyage.",
        "Maîtrise des outils de gestion de parc (GLPI, OCS Inventory) : Gestion des tickets, inventaire et supervision."
      ]
    },
    {
      id: "beingo",
      role: "Technicien informatique",
      company: "BeinGo Marrakech",
      period: "01/2025 - 08/2025",
      location: "Marrakech",
      description: [
        "Assurer le support technique : Résoudre les problèmes techniques des employés concernant le matériel, les logiciels et les réseaux.",
        "Installation et configuration : Installer et configurer les équipements informatiques (PC, casques, imprimantes) et les logiciels nécessaires.",
        "Surveillance des systèmes : Assurer la surveillance et le bon fonctionnement des systèmes informatiques pour éviter les interruptions.",
        "Mises à jour : Effectuer des mises à jour logicielles régulières et veiller à ce que les licences soient à jour."
      ]
    },
    {
      id: "micc",
      role: "Technicien informatique",
      company: "MICC Marrakech",
      period: "12/2024 - 08/2025",
      location: "Marrakech",
      description: [
        "Assurer le support technique : Résoudre les problèmes techniques des employés concernant le matériel, les logiciels et les réseaux.",
        "Installation et configuration : Installer et configurer les équipements informatiques (PC, casques, imprimantes) et les logiciels nécessaires.",
        "Surveillance des systèmes : Assurer la surveillance et le bon fonctionnement des systèmes informatiques pour éviter les interruptions.",
        "Mises à jour : Effectuer des mises à jour logicielles régulières et veiller à ce que les licences soient à jour."
      ]
    },
    {
      id: "1",
      role: "Technicien spécialisé systèmes et réseaux",
      company: "FSJES MARRAKECH (Contrat interim)",
      period: "06/2024 - 12/2024",
      location: "Marrakech",
      description: [
        "Fournir un support technique et résoudre les problèmes",
        "Installer, configurer et maintenir le matériel et les logiciels",
        "Administration et maintenance de l'infrastructure réseau",
        "Installation d'images sur les machines (ordinateurs portables et de bureau)",
        "Joindre les machines au domaine",
        "Installation et configuration des applications et logiciels nécessaires",
        "Administration des clients légers",
        "Gestion des opérations quotidiennes et maintenance des périphériques réseau"
      ]
    },
    {
      id: "4",
      role: "Programme motatawi3 (version 2)",
      company: "Barid Bank",
      period: "08/2024",
      location: "Marrakech, Maroc",
      description: [
        "7 jours de formation",
        "15 jours de stage en Barid Bank"
      ]
    },
    {
      id: "2",
      role: "Stagiaire technicien spécialisé en systèmes et réseaux",
      company: "ENSA Marrakech",
      period: "04/2024 - 04/2024",
      location: "Marrakech",
      description: [
        "Support réseau et système pour les étudiants et professeurs",
        "Maintenance préventive et corrective des équipements informatiques (serveurs, commutateurs, routeurs Aruba et Cisco)",
        "Assistance technique (sonorisation, imprimante, etc.)"
      ]
    },
    {
      id: "3",
      role: "Stage en service informatique",
      company: "Hôtel Mamounia Marrakech",
      period: "08/2023 - 08/2023",
      location: "Marrakech",
      description: [
        "Amélioration des compétences en résolution de problèmes informatiques complexes",
        "Collaboration avec des professionnels pour s'adapter aux systèmes informatiques de l'hôtellerie",
        "Maintenance régulière et mesures préventives"
      ]
    }
  ],
  education: [
    {
      id: "e1",
      degree: "Diplôme technicien spécialisé systèmes et réseaux",
      school: "EL JBEL LAKHDAR Marrakech",
      period: "01/2022 - 01/2024",
      details: [
        "Administration des services réseaux sous Linux",
        "Système d'exploitation open source",
        "Maintenance informatique",
        "Cisco CCNA V4 (1, 2, 3 et 4)"
      ]
    },
    {
      id: "e2",
      degree: "Baccalauréat (Sciences physiques français)",
      school: "Lycée Zerktouni",
      period: "01/2021 - 01/2022",
      details: ["Marrakech, Maroc"]
    }
  ]
};

const en: Translation = {
  nav: {
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
    contact: 'Contact',
    cv: 'My CV'
  },
  hero: {
    badge: 'Systems & Networks',
    role: 'Specialized Systems and Networks Technician',
    summary: "A specialized professional systems and networks technician in managing network infrastructure security, resolving all network-related issues, implementing solutions for business needs, preserving and maintaining network-related devices, and ensuring the proper functioning of services within a network.",
    contactBtn: 'Contact Me',
    cvBtn: 'My CV'
  },
  sectionTitles: {
    experience: 'Professional Experience',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
    contact: 'Contact'
  },
  skills: {
    technical: 'Technical Skills',
    soft: 'Soft Skills',
    interests: "Interests",
    languages: 'Languages',
    native: 'Native',
    intermediate: 'Intermediate',
    technicalList: [
      { name: "Windows 7 / 10 / Server 2016 / 2022", category: "Technical", level: 95 },
      { name: "Cisco CCNA (Routing, Switching, Security)", category: "Technical", level: 85 },
      { name: "Linux Administration", category: "Technical", level: 80 },
      { name: "PowerShell & Scripting", category: "Technical", level: 75 },
      { name: "Network Cabling", category: "Technical", level: 85 },
      { name: "Virtualization (VMware, VirtualBox, Hyper-V)", category: "Technical", level: 85 },
      { name: "Management Tools (GLPI, OCS Inventory)", category: "Technical", level: 90 },
      { name: "Remote Tools (TeamViewer, AnyDesk, RDP)", category: "Technical", level: 95 },
      { name: "Microsoft Office", category: "Technical", level: 90 },
      { name: "Python Basics", category: "Technical", level: 60 }
    ],
    softSkillsList: [
      { name: "Organization & Anticipation", category: "Soft" },
      { name: "Communication & Listening", category: "Soft" },
      { name: "Analysis & Synthesis", category: "Soft" },
      { name: "Teamwork", category: "Soft" },
      { name: "Easy Adaptation", category: "Soft" }
    ],
    interestsList: [
      "LEGO Construction",
      "Tech Watch",
      "Music Mixing",
      "Video Games",
      "DIY",
      "Soccer"
    ],
    languagesList: [
      { name: "Arabic", level: "Native", score: 5 },
      { name: "Berber", level: "Native", score: 5 },
      { name: "French", level: "Intermediate", score: 3 },
      { name: "English", level: "Intermediate", score: 3 }
    ]
  },
  certifications: {
    viewAll: 'View all certifications on Credly',
    list: [
        { name: "PCAP: Programming Essentials in Python", issuer: "Cisco" },
        { name: "Networking Devices and Initial Configuration", issuer: "Cisco" },
        { name: "Ethical Hacker", issuer: "Cisco" },
        { name: "Cybersecurity Essentials", issuer: "Cisco" },
        { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco" },
        { name: "+ 10 other certifications", issuer: "Various" }
    ]
  },
  contact: {
    description: "I am currently looking for new opportunities. Feel free to contact me to discuss your projects or just to say hello.",
    nameLabel: "Full Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendBtn: "Send Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    emailInfoLabel: "Email",
    placeholderName: "Your Name",
    placeholderEmail: "your@email.com",
    placeholderMessage: "Your message...",
    disclaimer: "This will open your default email application."
  },
  footer: {
    rights: "All rights reserved.",
    socials: "Social Links",
    contact: "Contact",
    desc: "Specialized Systems and Networks Technician passionate about IT security and system administration."
  },
  experiences: [
    {
      id: "0",
      role: "Network System Technician",
      company: "Faculty of Sciences Semlalia Marrakech",
      period: "08/2025 - Present",
      location: "Marrakech, Morocco",
      description: [
        "Technical support and assistance for internal users: Diagnosis and resolution of system and network incidents, Wi-Fi installation, ticket management.",
        "Windows Server 2022 Administration: Active Directory, DNS, DHCP, GPO and infrastructure security.",
        "Securing and managing remote access: Deployment and hardening of RDP access.",
        "IT fleet maintenance and supervision: Preventive/corrective monitoring and workstation optimization.",
        "Automation via PowerShell: Scripts for start/stop, application opening, and cleaning.",
        "Mastery of fleet management tools (GLPI, OCS Inventory): Ticket management, inventory, and supervision."
      ]
    },
    {
      id: "beingo",
      role: "IT Technician",
      company: "BeinGo Marrakech",
      period: "01/2025 - 08/2025",
      location: "Marrakech",
      description: [
        "Provide technical support: Resolve employee technical issues regarding hardware, software, and networks.",
        "Installation and configuration: Install and configure IT equipment (PCs, headsets, printers) and necessary software.",
        "System monitoring: Ensure monitoring and proper functioning of IT systems to prevent interruptions.",
        "Updates: Perform regular software updates and ensure licenses are up to date."
      ]
    },
    {
      id: "micc",
      role: "IT Technician",
      company: "MICC Marrakech",
      period: "12/2024 - 08/2025",
      location: "Marrakech",
      description: [
        "Provide technical support: Resolve employee technical issues regarding hardware, software, and networks.",
        "Installation and configuration: Install and configure IT equipment (PCs, headsets, printers) and necessary software.",
        "System monitoring: Ensure monitoring and proper functioning of IT systems to prevent interruptions.",
        "Updates: Perform regular software updates and ensure licenses are up to date."
      ]
    },
    {
      id: "1",
      role: "Specialized Systems and Networks Technician",
      company: "FSJES MARRAKECH (Interim Contract)",
      period: "06/2024 - 12/2024",
      location: "Marrakech",
      description: [
        "Provide technical support and resolve issues",
        "Install, configure and maintain hardware and software",
        "Network infrastructure administration and maintenance",
        "Deploying images on machines (laptops and desktops)",
        "Joining machines to the domain",
        "Installation and configuration of necessary applications and software",
        "Thin client administration",
        "Daily operations management and network device maintenance"
      ]
    },
    {
      id: "4",
      role: "Motatawi3 Program (Version 2)",
      company: "Barid Bank",
      period: "08/2024",
      location: "Marrakech, Morocco",
      description: [
        "7 days of training",
        "15 days internship at Barid Bank"
      ]
    },
    {
      id: "2",
      role: "Specialized Systems and Networks Technician Intern",
      company: "ENSA Marrakech",
      period: "04/2024 - 04/2024",
      location: "Marrakech",
      description: [
        "Network and system support for students and professors",
        "Preventive and corrective maintenance of IT equipment (servers, switches, Aruba and Cisco routers)",
        "Technical assistance (sound systems, printers, etc.)"
      ]
    },
    {
      id: "3",
      role: "IT Service Internship",
      company: "Hotel Mamounia Marrakech",
      period: "08/2023 - 08/2023",
      location: "Marrakech",
      description: [
        "Improved complex IT problem-solving skills",
        "Collaborated with professionals to adapt to hospitality IT systems",
        "Regular maintenance and preventive measures"
      ]
    }
  ],
  education: [
    {
      id: "e1",
      degree: "Specialized Systems and Networks Technician Diploma",
      school: "EL JBEL LAKHDAR Marrakech",
      period: "01/2022 - 01/2024",
      details: [
        "Network services administration under Linux",
        "Open source operating system",
        "IT Maintenance",
        "Cisco CCNA V4 (1, 2, 3 and 4)"
      ]
    },
    {
      id: "e2",
      degree: "Baccalaureate (Physical Sciences French)",
      school: "Lycée Zerktouni",
      period: "01/2021 - 01/2022",
      details: ["Marrakech, Morocco"]
    }
  ]
};

const ar: Translation = {
  nav: {
    experience: 'الخبرة',
    education: 'التعليم',
    skills: 'المهارات',
    certifications: 'الشهادات',
    contact: 'اتصل بي',
    cv: 'سيرتي الذاتية'
  },
  hero: {
    badge: 'الأنظمة والشبكات',
    role: 'تقني متخصص في الأنظمة والشبكات',
    summary: "تقني متخصص في الأنظمة والشبكات، محترف في إدارة أمن البنية التحتية للشبكات، وحل جميع المشاكل المتعلقة بالشبكة، وتنفيذ الحلول لتلبية احتياجات الشركة، والحفاظ على الأجهزة المتعلقة بالشبكة وصيانتها، وضمان حسن سير الخدمات داخل الشبكة.",
    contactBtn: 'تواصل معي',
    cvBtn: 'سيرتي الذاتية'
  },
  sectionTitles: {
    experience: 'الخبرة المهنية',
    education: 'التعليم',
    skills: 'المهارات',
    certifications: 'الشهادات',
    contact: 'اتصل بي'
  },
  skills: {
    technical: 'المهارات التقنية',
    soft: 'المهارات الشخصية (Soft Skills)',
    interests: "الاهتمامات",
    languages: 'اللغات',
    native: 'اللغة الأم',
    intermediate: 'متوسط',
    technicalList: [
      { name: "Windows 7 / 10 / Server 2016 / 2022", category: "Technical", level: 95 },
      { name: "Cisco CCNA (Routing, Switching, Security)", category: "Technical", level: 85 },
      { name: "إدارة Linux", category: "Technical", level: 80 },
      { name: "PowerShell & Scripting", category: "Technical", level: 75 },
      { name: "كابلات الشبكات", category: "Technical", level: 85 },
      { name: "المحاكاة الافتراضية (VMware, VirtualBox, Hyper-V)", category: "Technical", level: 85 },
      { name: "أدوات الإدارة (GLPI, OCS Inventory)", category: "Technical", level: 90 },
      { name: "أدوات التحكم عن بعد (TeamViewer, AnyDesk, RDP)", category: "Technical", level: 95 },
      { name: "Microsoft Office", category: "Technical", level: 90 },
      { name: "أساسيات Python", category: "Technical", level: 60 }
    ],
    softSkillsList: [
      { name: "التنظيم والاستباقية", category: "Soft" },
      { name: "التواصل والاستماع", category: "Soft" },
      { name: "التحليل والتركيب", category: "Soft" },
      { name: "العمل الجماعي", category: "Soft" },
      { name: "سهولة التكيف", category: "Soft" }
    ],
    interestsList: [
      "تركيب LEGO",
      "المراقبة التكنولوجية",
      "الميكساج الموسيقي",
      "ألعاب الفيديو",
      "الأعمال اليدوية",
      "كرة القدم"
    ],
    languagesList: [
      { name: "العربية", level: "اللغة الأم", score: 5 },
      { name: "الأمازيغية", level: "اللغة الأم", score: 5 },
      { name: "الفرنسية", level: "متوسط", score: 3 },
      { name: "الإنجليزية", level: "متوسط", score: 3 }
    ]
  },
  certifications: {
    viewAll: 'عرض جميع الشهادات على Credly',
    list: [
        { name: "PCAP: Programming Essentials in Python", issuer: "Cisco" },
        { name: "Networking Devices and Initial Configuration", issuer: "Cisco" },
        { name: "Ethical Hacker", issuer: "Cisco" },
        { name: "Cybersecurity Essentials", issuer: "Cisco" },
        { name: "CCNA : essentiels sur la commutation, le routage et le sans fil", issuer: "Cisco" },
        { name: "+ 10 شهادات أخرى", issuer: "متنوعة" }
    ]
  },
  contact: {
    description: "أبحث حالياً عن فرص جديدة. لا تتردد في الاتصال بي لمناقشة مشاريعك أو لمجرد إلقاء التحية.",
    nameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    messageLabel: "الرسالة",
    sendBtn: "إرسال البريد الإلكتروني",
    phoneLabel: "الهاتف",
    locationLabel: "الموقع",
    emailInfoLabel: "البريد الإلكتروني",
    placeholderName: "اسمك",
    placeholderEmail: "your@email.com",
    placeholderMessage: "رسالتك...",
    disclaimer: "سيؤدي هذا إلى فتح تطبيق البريد الإلكتروني الافتراضي لديك."
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    socials: "روابط اجتماعية",
    contact: "اتصل بي",
    desc: "تقني متخصص في الأنظمة والشبكات، شغوف بأمن المعلومات وإدارة الأنظمة."
  },
  experiences: [
    {
      id: "0",
      role: "تقني أنظمة وشبكات",
      company: "كلية العلوم السملالية مراكش",
      period: "08/2025 - الحاضر",
      location: "مراكش، المغرب",
      description: [
        "الدعم الفني والمساعدة للمستخدمين الداخليين: تشخيص وحل حوادث الأنظمة والشبكات، تثبيت Wi-Fi، إدارة التذاكر.",
        "إدارة Windows Server 2022: Active Directory و DNS و DHCP و GPO وأمن البنية التحتية.",
        "تأمين وإدارة الوصول عن بعد: نشر وتعزيز الوصول عبر RDP.",
        "صيانة وإشراف على الحظيرة المعلوماتية: المراقبة الوقائية/التصحيحية وتحسين محطات العمل.",
        "الأتمتة عبر PowerShell: نصوص برمجية للتشغيل/الإيقاف، وفتح التطبيقات، والتنظيف.",
        "إتقان أدوات إدارة الحظيرة (GLPI, OCS Inventory): إدارة التذاكر، والجرد، والإشراف."
      ]
    },
    {
      id: "beingo",
      role: "تقني معلوميات",
      company: "BeinGo Marrakech",
      period: "01/2025 - 08/2025",
      location: "مراكش",
      description: [
        "تقديم الدعم الفني: حل المشاكل التقنية للموظفين فيما يتعلق بالأجهزة والبرامج والشبكات.",
        "التثبيت والإعداد: تثبيت وإعداد المعدات المعلوماتية (أجهزة الكمبيوتر، السماعات، الطابعات) والبرامج اللازمة.",
        "مراقبة الأنظمة: ضمان مراقبة وحسن سير الأنظمة المعلوماتية لتجنب الانقطاعات.",
        "التحديثات: إجراء تحديثات منتظمة للبرامج والتأكد من تحديث التراخيص."
      ]
    },
    {
      id: "micc",
      role: "تقني معلوميات",
      company: "MICC Marrakech",
      period: "12/2024 - 08/2025",
      location: "مراكش",
      description: [
        "تقديم الدعم الفني: حل المشاكل التقنية للموظفين فيما يتعلق بالأجهزة والبرامج والشبكات.",
        "التثبيت والإعداد: تثبيت وإعداد المعدات المعلوماتية (أجهزة الكمبيوتر، السماعات، الطابعات) والبرامج اللازمة.",
        "مراقبة الأنظمة: ضمان مراقبة وحسن سير الأنظمة المعلوماتية لتجنب الانقطاعات.",
        "التحديثات: إجراء تحديثات منتظمة للبرامج والتأكد من تحديث التراخيص."
      ]
    },
    {
      id: "1",
      role: "تقني متخصص في الأنظمة والشبكات",
      company: "FSJES MARRAKECH (عقد مؤقت)",
      period: "06/2024 - 12/2024",
      location: "مراكش",
      description: [
        "تقديم الدعم الفني وحل المشاكل",
        "تثبيت وتكوين وصيانة الأجهزة والبرامج",
        "إدارة وصيانة البنية التحتية للشبكة",
        "تثبيت الصور على الأجهزة (المحمولة والمكتبية)",
        "ضم الأجهزة إلى المجال (Domain)",
        "تثبيت وتكوين التطبيقات والبرامج اللازمة",
        "إدارة العملاء الخفيفين (Thin clients)",
        "إدارة العمليات اليومية وصيانة أجهزة الشبكة"
      ]
    },
    {
      id: "4",
      role: "برنامج متطوع (النسخة 2)",
      company: "بريد بنك",
      period: "08/2024",
      location: "مراكش، المغرب",
      description: [
        "7 أيام من التدريب",
        "15 يوماً تدريب في بريد بنك"
      ]
    },
    {
      id: "2",
      role: "متدرب تقني متخصص في الأنظمة والشبكات",
      company: "ENSA Marrakech",
      period: "04/2024 - 04/2024",
      location: "مراكش",
      description: [
        "دعم الشبكة والنظام للطلاب والأساتذة",
        "الصيانة الوقائية والتصحيحية للمعدات المعلوماتية (الخوادم، المحولات، أجهزة توجيه Aruba و Cisco)",
        "المساعدة التقنية (أنظمة الصوت، الطابعات، إلخ)"
      ]
    },
    {
      id: "3",
      role: "تدريب في قسم تكنولوجيا المعلومات",
      company: "فندق المأمونية مراكش",
      period: "08/2023 - 08/2023",
      location: "مراكش",
      description: [
        "تحسين المهارات في حل المشاكل المعلوماتية المعقدة",
        "التعاون مع المحترفين للتكيف مع الأنظمة المعلوماتية في مجال الفندقة",
        "الصيانة الدورية والتدابير الوقائية"
      ]
    }
  ],
  education: [
    {
      id: "e1",
      degree: "دبلوم تقني متخصص في الأنظمة والشبكات",
      school: "الجبل الأخضر مراكش",
      period: "01/2022 - 01/2024",
      details: [
        "إدارة خدمات الشبكات تحت Linux",
        "نظام تشغيل مفتوح المصدر",
        "صيانة الكمبيوتر",
        "Cisco CCNA V4 (1, 2, 3 و 4)"
      ]
    },
    {
      id: "e2",
      degree: "بكالوريا (علوم فيزيائية خيار فرنسية)",
      school: "ثانوية الزرقطوني",
      period: "01/2021 - 01/2022",
      details: ["مراكش، المغرب"]
    }
  ]
};

export const translations = {
  fr,
  en,
  ar
};