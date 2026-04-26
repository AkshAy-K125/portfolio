import cIcon from '@/assets/skills/c.png';
import cplusIcon from '@/assets/skills/cplus.png';
import pythonIcon from '@/assets/skills/python.png';
import jsIcon from '@/assets/skills/js.png';
import htmlIcon from '@/assets/skills/html.png';
import cssIcon from '@/assets/skills/css.png';
import bootstrapIcon from '@/assets/skills/bootstrap.png';
import tailwindIcon from '@/assets/skills/tailwind.png';
import figmaIcon from '@/assets/skills/figma.png';
import reactIcon from '@/assets/skills/react.png';
import mongoIcon from '@/assets/skills/mongo.png';
import sqlIcon from '@/assets/skills/sql.png';
import googleosIcon from '@/assets/skills/googleos.png';
import appSheetsIcon from '@/assets/skills/appSheets.png';
import msofficeIcon from '@/assets/skills/msoffice.png';
import ec2Icon from '@/assets/skills/ec2.png';
import emrIcon from '@/assets/skills/emr.png';
import cognitoIcon from '@/assets/skills/cognito.png';
import apiGatewayIcon from '@/assets/skills/apiGateway.png';
import cloudWatchIcon from '@/assets/skills/cloudWatch.png';
import eventBridgeIcon from '@/assets/skills/eventBridge.png';
import lambdaIcon from '@/assets/skills/lambda.png';

import flipkartLogo from '@/assets/companies/flipkart.png';
import alnisrLogo from '@/assets/companies/alnisr.png';
import faceprepLogo from '@/assets/companies/faceprep.png';
import faceLogo from '@/assets/companies/face.png';
import iiitbLogo from '@/assets/companies/iiitb.png';

import ytTrendsThumb from '@/assets/projects/ytTrends.png';
import wormHoleThumb from '@/assets/projects/worm-hole.png';
import nisrCmsThumb from '@/assets/projects/nisr-cms.png';

import introPhoto from '@/assets/intro_photo.png';

export interface Skill {
  key: string;
  name: string;
  alt: string;
  icon: string;
  link: string;
}

export interface Company {
  key: string;
  name: string;
  logo: string;
  link: string;
  header: string;
  role: string;
  location: string;
  body: string;
}

export interface Project {
  key: string;
  title: string;
  stacks: string[];
  description: string;
  thumbnail?: string;
  sourceCode: string;
  liveLink: string;
}

export interface Social {
  key: string;
  label: string;
  link: string;
}

export const profile = {
  name: 'Akshay Kumar',
  monogram: 'AK',
  role: 'Application Engineer',
  company: 'Flipkart',
  tagline: 'Building data-driven systems & crafted web experiences.',
  location: 'Bengaluru, India',
  email: 'akshay.raviraj@gmail.com',
  resume: 'https://drive.google.com/file/d/1hHjXxXxXxXxXxXxXxXxXxXxXxXxXx/view',
  introPhoto,
};

export const skills: Skill[] = [
  { key: 'c', name: 'C', alt: 'C programming language logo', icon: cIcon, link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { key: 'cplus', name: 'C++', alt: 'C++ logo', icon: cplusIcon, link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
  { key: 'python', name: 'Python', alt: 'Python logo', icon: pythonIcon, link: 'https://www.python.org/' },
  { key: 'js', name: 'JavaScript', alt: 'JavaScript logo', icon: jsIcon, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { key: 'html', name: 'HTML', alt: 'HTML logo', icon: htmlIcon, link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
  { key: 'css', name: 'CSS', alt: 'CSS logo', icon: cssIcon, link: 'https://developer.mozilla.org/en-US/docs/Learn/css' },
  { key: 'bootstrap', name: 'Bootstrap', alt: 'Bootstrap logo', icon: bootstrapIcon, link: 'https://getbootstrap.com/' },
  { key: 'tailwind', name: 'Tailwind', alt: 'Tailwind CSS logo', icon: tailwindIcon, link: 'https://tailwindcss.com/' },
  { key: 'figma', name: 'Figma', alt: 'Figma logo', icon: figmaIcon, link: 'https://www.figma.com/' },
  { key: 'react', name: 'React', alt: 'React logo', icon: reactIcon, link: 'https://react.dev/' },
  { key: 'mongo', name: 'MongoDB', alt: 'MongoDB logo', icon: mongoIcon, link: 'https://www.mongodb.com/' },
  { key: 'sql', name: 'SQL', alt: 'MySQL logo', icon: sqlIcon, link: 'https://www.mysql.com/' },
  { key: 'googleos', name: 'Google OS', alt: 'Google Open Source logo', icon: googleosIcon, link: 'https://opensource.google/' },
  { key: 'appSheets', name: 'AppSheet', alt: 'Google AppSheet logo', icon: appSheetsIcon, link: 'https://about.appsheet.com/home/' },
  { key: 'msoffice', name: 'MS Office', alt: 'Microsoft Office logo', icon: msofficeIcon, link: 'https://www.microsoft.com/en/' },
  { key: 'ec2', name: 'AWS EC2', alt: 'AWS EC2 logo', icon: ec2Icon, link: 'https://aws.amazon.com/ec2/' },
  { key: 'emr', name: 'AWS EMR', alt: 'AWS EMR logo', icon: emrIcon, link: 'https://aws.amazon.com/emr/' },
  { key: 'cognito', name: 'AWS Cognito', alt: 'AWS Cognito logo', icon: cognitoIcon, link: 'https://aws.amazon.com/pm/cognito/' },
  { key: 'apiGateway', name: 'API Gateway', alt: 'AWS API Gateway logo', icon: apiGatewayIcon, link: 'https://aws.amazon.com/api-gateway/' },
  { key: 'cloudWatch', name: 'CloudWatch', alt: 'AWS CloudWatch logo', icon: cloudWatchIcon, link: 'https://aws.amazon.com/cloudwatch/' },
  { key: 'eventBridge', name: 'EventBridge', alt: 'AWS EventBridge logo', icon: eventBridgeIcon, link: 'https://aws.amazon.com/eventbridge/' },
  { key: 'lambda', name: 'AWS Lambda', alt: 'AWS Lambda logo', icon: lambdaIcon, link: 'https://aws.amazon.com/lambda/' },
];

export const companies: Company[] = [
  {
    key: 'flipkart',
    name: 'flipkart',
    logo: flipkartLogo,
    link: 'https://www.flipkart.com/',
    header: 'Flipkart India Pvt Ltd',
    role: 'Application Engineer · Jul 2025 — Present',
    location: 'Bengaluru, India',
    body: `<p>Working as an <b>Application Engineer 2</b> at Flipkart — software development, system ownership, and collaborative problem-solving on robust, scalable applications.</p>
<p>Leading end-to-end application development including <b>design, implementation, testing, and deployment</b>. Proactively monitoring application health and performance to ensure high availability and reliability.</p>
<p>Working across <b>Python, distributed systems, microservices architecture, and API design</b>. Day-to-day with <b>SQL/NoSQL databases, Linux/Unix environments, CI/CD pipelines, and AWS</b>.</p>`,
  },
  {
    key: 'alnisr',
    name: 'alnisr',
    logo: alnisrLogo,
    link: 'https://www.alnisraluminium.com/',
    header: 'Al Nisr Aluminium & Metal Fabrication',
    role: 'IT & Operations Specialist · Oct 2021 — Nov 2024',
    location: 'Manama, Bahrain',
    body: `<p>Worked mainly as a <b>Software Engineer</b>, designing and shipping data-driven tools for optimal workflows.</p>
<p>Managed critical data and databases; <b>developed, deployed, and maintained</b> in-house web app systems, and migrated hard data into digital environments.</p>
<p>Worked across <b>Python, SQL, Spark, AWS Architecture</b>. Shipped pipelines for real estate, dashboards for healthcare, and recommender optimization for e-commerce.</p>`,
  },
  {
    key: 'iiitb',
    name: 'iiitb',
    logo: iiitbLogo,
    link: 'https://www.iiitb.ac.in/',
    header: 'IIIT Bangalore',
    role: 'PGDM in Data Engineering · May 2022 — Jun 2023',
    location: 'Bengaluru, India',
    body: `<p>Executive PG Specialization in <b>Data Engineering</b> from <b>IIIT Bengaluru</b> in collaboration with <b>UpGrad</b>.</p>
<p>Curriculum covered <b>data integration, modeling, warehousing, and governance</b> using <b>Python, SQL, Spark, Hadoop, Kafka, and AWS</b>.</p>
<p>Capstone: real-time data pipeline for hospital IoT vitals — ingest, process, and alert on streamed clinical data.</p>`,
  },
  {
    key: 'faceprep',
    name: 'faceprep',
    logo: faceprepLogo,
    link: 'https://www.faceprep.in/',
    header: 'FACE Prep',
    role: 'Instructional Design Engineer · Jun 2020 — Jul 2021',
    location: 'Bengaluru, India',
    body: `<p>Worked as a <b>Product Manager</b> leading the development and launch of user-centric products — planning, execution, requirements, and vision.</p>
<p>Partnered closely with engineering, sales, and support to lift retention, engagement, and revenue. Used data analytics for data-driven product decisions.</p>`,
  },
  {
    key: 'face',
    name: 'face',
    logo: faceLogo,
    link: 'https://www.facebook.com/focusacademy/',
    header: 'Focus Academy',
    role: 'Training / QA Manager · Jul 2017 — Jun 2020',
    location: 'Pune, India',
    body: `<p>As a <b>Technical Training QA Manager</b>, built compelling content for multiple industries and ran cost-cutting initiatives via <b>statistical analysis and visualization</b> in Python and Google Data Studio.</p>
<p>Shipped content across <b>C, C++, Python</b> for blogs, e-books, and online courses. Ran Faculty Development Programs and trained <b>10,000+ students</b> across data science, ML, and web/cloud.</p>`,
  },
];

export const projects: Project[] = [
  {
    key: 'ytTopTrends',
    title: 'YouTube Trends · Top 10',
    stacks: ['React', 'YouTube API', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Mobile-first, multi-device app that analyzes current YouTube trends across categories — Music, Movies, Gaming — by chosen country.',
    thumbnail: ytTrendsThumb,
    sourceCode: 'https://github.com/AkshAy-K125/top_trends_yt',
    liveLink: 'https://yt-top-trends.netlify.app/',
  },
  {
    key: 'particleBg',
    title: 'Space Gravity Chaos',
    stacks: ['React', 'three.js'],
    description:
      'A WebGL playground: click anywhere to spawn a black hole; control panel exposes physics knobs for the particle field.',
    thumbnail: wormHoleThumb,
    sourceCode: 'https://github.com/AkshAy-K125/worm-hole-points',
    liveLink: 'https://worm-hole-particles.netlify.app/',
  },
  {
    key: 'nisrCMS',
    title: 'Nisr CMS',
    stacks: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Google Cloud'],
    description:
      'In-house customer management system: real-time quotations, job orders, invoices, warranties, LPOs, employee dashboard, and fiscal analysis.',
    thumbnail: nisrCmsThumb,
    sourceCode: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/Nisr%20CMS',
    liveLink: 'https://nisr-cms.netlify.app/',
  },
  {
    key: 'healthAlertSys',
    title: 'Emergency Health Alert System',
    stacks: ['Spark', 'Kafka', 'Hive', 'Sqoop', 'HBase'],
    description:
      'Real-time healthcare data pipeline: ingests IoT vitals, processes streams, and notifies subscribers when thresholds are breached.',
    sourceCode: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/Emergency%20Health%20Alert%20System',
    liveLink: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/Emergency%20Health%20Alert%20System',
  },
  {
    key: 'etlPipeline',
    title: 'ETL Pipeline',
    stacks: ['MySQL', 'Spark', 'Redshift'],
    description:
      "Batch ETL across a bank's transactional data — analytical queries on inactivity, failures, and withdrawals; lands transformed facts/dimensions in Redshift.",
    sourceCode: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/ETL%20Pipeline',
    liveLink: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/ETL%20Pipeline',
  },
  {
    key: 'retailAnalysis',
    title: 'Retail Data Analysis',
    stacks: ['Hadoop', 'AWS', 'HDFS'],
    description:
      'Big-data KPIs for an e-commerce retailer: real-time order intelligence over HDFS for sales performance and operational decisions.',
    sourceCode: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/Retail%20Data%20Analysis',
    liveLink: 'https://github.com/AkshAy-K125/CV-Repos/tree/main/Retail%20Data%20Analysis',
  },
];

export const socials: Social[] = [
  { key: 'mail', label: 'Email', link: 'mailto:akshay.raviraj@gmail.com?subject=Hello%20Akshay' },
  { key: 'git', label: 'GitHub', link: 'https://github.com/AkshAy-K125' },
  { key: 'linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/akshay-kumar-370008121' },
  { key: 'insta', label: 'Instagram', link: 'https://www.instagram.com/sleeping__budha__/' },
  { key: 'redit', label: 'Reddit', link: 'https://www.reddit.com/user/Sleeping_Budha_' },
];
