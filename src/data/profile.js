// =====================================================
//  All portfolio content lives here – edit this file
//  to update the whole website.
// =====================================================

export const profile = {
  name: 'Hema Narendra Reddy Narala',
  shortName: 'Hema Narendra Reddy',
  initials: 'HN',
  role: 'Data Analyst',
  summary:
    'Analytical B.Tech graduate in Computer Science & Engineering (Data Science) with hands-on skills in SQL, Python, Power BI, Tableau and Advanced Excel. I build clean dashboards and reliable reports that support data-driven decision-making.',
  email: 'naralahemanarendra@gmail.com',
  phone: '+91 7729034993',
  phoneLink: '+917729034993',
  location: 'Bangalore, India',
  linkedin: 'https://www.linkedin.com/in/hema-narendra-reddy-26607133a/',
  github: 'https://github.com/naralahemanarendrareddy',
  resume: '/Hema_Narendra_Reddy_Resume.pdf',
}

export const about = [
  'I am an analytical B.Tech graduate in Computer Science & Engineering (Data Science), seeking an entry-level Data Analyst role where I can transform data into actionable insights.',
  'My work covers the full analysis workflow: cleaning and preparing data, exploratory analysis, ETL, relational data modeling, KPI reporting and building interactive dashboards in Power BI and Tableau.',
  'I enjoy writing structured SQL – from multi-table joins and CTEs to window functions, views, stored procedures and triggers – and turning the results into clear, decision-ready reports.',
]

export const focusAreas = [
  { icon: 'chart', title: 'Data Analysis', text: 'Data cleaning, exploratory analysis and statistical analysis with Python, Pandas and NumPy.' },
  { icon: 'db', title: 'SQL & Databases', text: 'Relational modeling and advanced querying with joins, CTEs, window functions and stored procedures.' },
  { icon: 'dash', title: 'Dashboards & BI', text: 'KPI dashboards and visual reports built in Power BI, Tableau and Excel.' },
]

export const stats = [
  { value: '3', label: 'Data Analytics Projects' },
  { value: '3', label: 'Certifications' },
  { value: '88%', label: 'NASSCOM Assessment Score' },
  { value: '5', label: 'Core Analytics Tools' },
]

export const tools = ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel']

export const skills = [
  {
    title: 'Programming & Analysis',
    icon: 'code',
    items: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Analysis', 'Statistical Analysis', 'EDA', 'Automation'],
  },
  {
    title: 'Databases & SQL',
    icon: 'db',
    items: ['SQL', 'MySQL', 'DML / DDL', 'Multi-table JOINs', 'Subqueries', 'CTEs', 'Window Functions', 'Views', 'Stored Procedures', 'Triggers', 'Data Modeling'],
  },
  {
    title: 'BI & Data Visualization',
    icon: 'chart',
    items: ['Power BI', 'Tableau', 'Dashboard Development', 'Data Visualization', 'KPI Tracking', 'KPI Reporting', 'Report Automation'],
  },
  {
    title: 'Microsoft Excel',
    icon: 'excel',
    items: ['Pivot Tables', 'Power Query', 'Power Pivot', 'DAX Formulas'],
  },
]

export const education = [
  {
    level: 'Bachelor’s Degree',
    title: 'B.Tech – Computer Science & Engineering (Data Science)',
    institute: 'Nalla Narasimha Reddy Education Society’s Group of Institutions, Hyderabad',
    period: 'Dec 2021 – Jun 2025',
    result: 'CGPA: 7.29 / 10',
    note: 'Relevant coursework: Advanced Data Structures, DBMS, Machine Learning, Python for Data Analysis',
    icon: 'grad',
  },
  {
    level: 'Intermediate',
    title: 'MPC (Mathematics, Physics, Chemistry)',
    institute: 'Chaitanya Junior College, Nandigama',
    period: '2019 – 2021',
    result: 'Marks: 769',
    icon: 'college',
  },
  {
    level: 'Secondary School (10th)',
    title: 'Secondary School Education',
    institute: 'Apollo (EM) High School, Nandigama',
    period: '2019',
    result: 'GPA: 9.8',
    icon: 'school',
  },
]

export const projects = [
  {
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics',
    type: 'End-to-End Analytics Project',
    tools: ['Excel', 'SQL', 'Power BI', 'Tableau'],
    github: 'https://github.com/naralahemanarendrareddy/Healthcare-Analytics-EMR',
    summary:
      'Analysis of healthcare data across patients, treatments, visits and financial performance, with SQL database solutions and interactive dashboards in Power BI and Tableau.',
    overview:
      'This project analyzes healthcare data across four business areas – patients, treatments, visits and financial performance – to identify actionable insights. The data was explored with SQL and presented through dashboards in both Power BI and Tableau.',
    highlights: [
      'Analyzed healthcare data across 4 business areas: patients, treatments, visits and financial performance.',
      'Built SQL database solutions using 5+ advanced techniques, including JOINs, subqueries, aggregate and window functions, views and stored procedures.',
      'Developed Power BI and Tableau dashboards covering 4 analysis areas: KPIs, treatment analysis, patient distribution and visit trends.',
    ],
    areas: ['KPI Overview', 'Treatment Analysis', 'Patient Distribution', 'Visit Trends'],
  },
  {
    slug: 'zomato-restaurant-analysis',
    title: 'Zomato Restaurant Analysis Dashboard',
    type: 'Power BI Dashboard',
    tools: ['Power BI', 'Power Query', 'DAX'],
    github: 'https://github.com/naralahemanarendrareddy/Zomato-Restaurant-Analysis',
    summary:
      'A dynamic Power BI dashboard built with ETL in Power Query, data modeling, DAX and data visualization to uncover restaurant trends.',
    overview:
      'A dynamic Power BI dashboard that turns restaurant data into interactive KPI views and analytical reports, helping surface trends and support data-driven business decisions.',
    highlights: [
      'Built a dynamic Power BI dashboard using 4 core analytics techniques: ETL with Power Query, data modeling, DAX and data visualization.',
      'Developed interactive KPI dashboards and analytical reports to identify trends and support data-driven business decisions.',
    ],
    areas: ['ETL with Power Query', 'Data Modeling', 'DAX Measures', 'Data Visualization'],
  },
  {
    slug: 'retail-sales-sql-reporting-engine',
    title: 'Retail Sales & SQL Reporting Engine',
    type: 'SQL Reporting Project',
    tools: ['MySQL', 'SQL'],
    github: 'https://github.com/naralahemanarendrareddy/Retail-Sales-SQL-Reporting-Engine',
    summary:
      'A relational retail database and SQL reporting solution with profitability and product-ranking analysis, automated audit logging and data-quality checks.',
    overview:
      'A relational retail database with a SQL reporting layer. It combines profitability and product-ranking analysis with automated audit logging and data-quality checks to generate actionable business insights.',
    highlights: [
      'Developed a relational retail database and SQL reporting solution using 7+ SQL capabilities: JOINs, CTEs, subqueries, window functions, views, stored procedures and triggers.',
      'Built profitability and product-ranking analysis with automated audit logging and data-quality checks to generate actionable business insights.',
    ],
    areas: ['Profitability Analysis', 'Product Ranking', 'Audit Logging (Triggers)', 'Data-Quality Checks'],
  },
]

export const certifications = [
  {
    title: 'Power BI Job Simulation',
    issuer: 'PwC & Forage',
    date: 'March 2025',
    detail:
      'Hands-on Power BI simulation covering 6 areas: call center trends, customer retention, diversity & inclusion, data modeling, KPI tracking and business insights.',
    link: 'https://github.com/naralahemanarendrareddy/Certifications/blob/main/Power-BI/Power-BI-Job-Simulation-Certificate.pdf',
  },
  {
    title: 'Certificate Program in Data Analyst',
    issuer: 'NASSCOM',
    date: 'August 2026',
    detail: 'Gold – 88% assessment score.',
    id: 'FSP/2026/8/10371259',
    link: 'https://github.com/naralahemanarendrareddy/Certifications/blob/main/Data-Analytics/NASSCOM-Data-Analyst-Certificate.pdf',
  },
  {
    title: 'Data Analyst Program',
    issuer: 'ExcelR',
    date: 'August 2026',
    detail: 'Certificate of Excellence.',
    id: '36655/EXCELR/36655',
    link: 'https://github.com/naralahemanarendrareddy/Certifications/blob/main/Data-Analytics/ExcelR-Data-Analyst-Certificate.pdf',
  },
]
