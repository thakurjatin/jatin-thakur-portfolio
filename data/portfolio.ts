export const profile = {
  name: 'Jatin Thakur',
  initials: 'JT',
  title: 'Senior Software Engineer',
  specialty: 'Backend & Distributed Systems',
  location: 'Delhi, India',
  experience: '7+ years',
  email: 'thakurjatin096@gmail.com',
  linkedin: 'https://linkedin.com/in/jatin-thakur',
  github: 'https://github.com/thakurjatin',
  resumePath: '/resume.pdf',
  openToOpportunities: true,
};

export const skillGroups = [
  { title: 'Core backend', items: ['Java 8/11', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Microservices', 'REST APIs', 'Kafka', 'Multithreading'] },
  { title: 'Cloud & delivery', items: ['AWS (EC2, S3, RDS, Lambda, IAM, VPC, CloudWatch)', 'Docker', 'Jenkins', 'GitLab CI/CD', 'Linux / Unix'] },
  { title: 'Data & migration', items: ['MSSQL', 'Sybase', 'Schema migration', 'Query optimization', 'DB2', 'MySQL', 'SQL / NoSQL design'] },
  { title: 'Security & quality', items: ['Secure API design', 'Authentication & authorization', 'Data encryption', 'OWASP', 'Checkmarx', 'Black Duck', 'Coverity', 'TDD', 'Root-cause analysis'] },
  { title: 'Also worked with', items: ['SOAP', 'JMS', 'Servlets & JSP', 'CometD', 'Python / Django', 'HTML / CSS / JS', 'System design', 'Code reviews'] },
];

export const experience = [
  {
    company: 'NatWest Group',
    role: 'Senior Software Engineer',
    period: 'Nov 2022 — Present',
    summary: 'Own end-to-end backend engineering for critical Market Risk and trade surveillance platforms that power regulated US/UK employee compliance and monitoring systems at enterprise scale.',
    highlights: [
      'Design and build Java / Spring Boot microservices and REST APIs handling high-volume regulated financial data under strict SLA requirements.',
      'Led a large-scale Sybase-to-MSSQL migration across multiple production applications: schema redesign, data-access layer refactoring, and integration with US-based application services, improving query performance and reducing maintenance overhead.',
      'Build and integrate secure REST and third-party APIs with authentication, authorization, and data encryption to meet financial regulatory standards.',
      'Containerize services with Docker and work with platform teams on AWS deployments, with Jenkins and GitLab CI/CD pipelines.',
      'Run production root-cause analysis and ship permanent fixes that reduce incident recurrence; contribute to architecture discussions, code reviews, and performance work.',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'REST', 'Sybase → MSSQL', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    company: 'Capgemini Engineering',
    role: 'Software Engineer',
    period: 'Jun 2019 — Nov 2022',
    summary: 'Developed Java and Spring Boot applications and enterprise web services, with a focus on maintainability, search, and secure delivery.',
    highlights: [
      'Designed and developed backend applications and RESTful web services.',
      'Enhanced web functionality and real-time communication features using CometD.',
      'Upgraded Lucene-based search functionality for tickets and problem records.',
      'Identified and addressed code security issues using Coverity, Black Duck, and Checkmarx.',
      'Worked with QA and product teams on technical design, code reviews, Agile delivery, and production fixes.',
    ],
    tags: ['Java', 'Spring Boot', 'Lucene', 'CometD', 'Security'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'Sybase → MSSQL Modernization',
    type: 'FLAGSHIP CASE STUDY',
    description: 'Modernizing database dependencies across multiple production applications while preserving application compatibility and operational stability.',
    tags: ['Sybase', 'MSSQL', 'Java', 'SQL'],
    context: 'A multi-application database migration within an enterprise banking environment.',
    approach: ['Review schema and SQL compatibility between database platforms.', 'Refactor application data-access components for the target database.', 'Coordinate application integration and migration validation.', 'Consider regression testing, data integrity checks, deployment sequencing, and rollback readiness.'],
    outcome: 'Improved query performance and reduced maintenance overhead across the migrated applications.', // TODO: add 1-2 real, non-confidential numbers (e.g. % faster queries, applications migrated)
    note: 'Generalized case study. Detailed implementation and operational information is intentionally omitted to protect employer confidentiality.',
  },
  {
    number: '02',
    title: 'Market Risk & Trade Surveillance',
    type: 'PROFESSIONAL EXPERIENCE',
    description: 'Backend engineering for regulated financial monitoring systems, with emphasis on secure APIs, database-backed services, and production reliability.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'AWS'],
    context: 'Enterprise systems supporting monitoring and compliance workflows.',
    approach: ['Design and maintain backend services and REST endpoints.', 'Build database-backed capabilities with reliability and security in mind.', 'Collaborate across engineering, QA, architecture, and product teams.', 'Support production troubleshooting and continuous improvement.'],
    outcome: 'End-to-end ownership of delivery and production support for regulated US/UK compliance platforms, from design through root-cause analysis.',
    note: 'Generalized professional case study. No internal system names, proprietary business rules, or confidential architecture are included.',
  },
  {
    number: '03',
    title: 'Secure Enterprise API Integration',
    type: 'ENGINEERING FOCUS',
    description: 'A high-level look at the practices behind reliable integration between enterprise services and third-party APIs.',
    tags: ['REST', 'SOAP', 'JSON', 'Spring Boot'],
    context: 'Enterprise integration work requiring consistent service communication and secure handling of requests and responses.',
    approach: ['Design clear API contracts and map JSON payloads.', 'Apply authentication and authorization controls appropriate to the integration.', 'Handle errors and unexpected responses defensively.', 'Keep integration code maintainable and observable.'],
    outcome: 'Integrations that stay secure, maintainable, and easy to debug as requirements and partner APIs change.',
    note: 'Generalized engineering focus based on professional experience; not a separate public product.',
  },
  {
    number: '04',
    title: 'Lucene Search Optimization',
    type: 'CAPGEMINI EXPERIENCE',
    description: 'Enhancements to Lucene-based search functionality for tickets and problem records.',
    tags: ['Java', 'Apache Lucene', 'Search'],
    context: 'Existing enterprise applications where search quality and usability matter to day-to-day workflows.',
    approach: ['Improve existing search functionality within the application context.', 'Consider relevance, usability, and maintainability when enhancing search.', 'Validate behavior against expected ticket and problem-record workflows.'],
    outcome: 'Significantly improved search speed and usability for ticket and problem-record search.',
    note: 'Based on professional experience. Implementation details and source code are not public.',
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', detail: 'SAA-C03 · Amazon Web Services', date: 'Aug 2026', mark: 'AWS' },
  { name: 'Full Stack Web Developer Nanodegree', detail: 'Udacity', date: 'Nov 2024', mark: 'U' },
];

export const personalProjects = [
  {
    title: 'Java Interview Preparation',
    description: 'Hands-on Java implementations covering multithreading, trees and data structures, Java 8 features, design patterns, and a REST API example.',
    tags: ['Java', 'Multithreading', 'Design Patterns', 'Java 8', 'REST'],
    github: 'https://github.com/thakurjatin/javainterviewpreparation',
    live: '',
  },
  // Add more personal projects here (a Spring Boot + Kafka service on AWS with an architecture diagram would be a strong addition).
];
