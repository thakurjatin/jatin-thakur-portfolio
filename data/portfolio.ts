export const profile = {
  name: 'Jatin Thakur',
  initials: 'JT',
  title: 'Senior Software Engineer',
  specialty: 'Backend & Distributed Systems',
  location: 'Delhi, India',
  experience: '7+ years',
  email: 'thakurjatin096@gmail.com',
  linkedin: 'https://linkedin.com/in/jatin-thakur',
  github: '',
  resumePath: '/resume.pdf',
  openToOpportunities: false,
};

export const skillGroups = [
  { title: 'Backend engineering', items: ['Java 8/11', 'Spring Boot', 'Spring MVC', 'Spring Security', 'REST APIs', 'Microservices', 'SOAP', 'Servlets & JSP', 'Multithreading', 'JMS', 'CometD'] },
  { title: 'Cloud & delivery', items: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'IAM', 'VPC', 'CloudWatch', 'Docker', 'Jenkins', 'GitLab CI/CD', 'Linux / Unix'] },
  { title: 'Data & integration', items: ['Sybase', 'MSSQL', 'DB2', 'MySQL', 'SQL', 'Schema migration', 'Query optimization', 'Kafka', 'JSON mapping', 'Third-party APIs'] },
  { title: 'Quality & practices', items: ['Secure API design', 'Authentication', 'Authorization', 'Data encryption', 'Coverity', 'Black Duck', 'Checkmarx', 'OWASP', 'System design', 'Code reviews', 'TDD', 'Root-cause analysis'] },
];

export const experience = [
  {
    company: 'NatWest Group',
    role: 'Senior Software Engineer',
    period: 'Nov 2022 — Present',
    summary: 'Building and supporting backend capabilities for critical Market Risk and trade surveillance platforms in a regulated financial environment.',
    highlights: [
      'Design and develop Java and Spring Boot microservices and RESTful APIs for enterprise monitoring systems.',
      'Led a Sybase-to-MSSQL migration across multiple applications, including schema redesign, data-access refactoring, and integration with US-based application services.',
      'Build secure integrations with authentication, authorization, and data encryption considerations.',
      'Collaborate on Docker-based services, AWS deployments, and Jenkins / GitLab CI/CD workflows.',
      'Investigate production issues, perform root-cause analysis, and contribute to code reviews and performance improvements.',
    ],
    tags: ['Java', 'Spring Boot', 'Sybase', 'MSSQL', 'AWS', 'Docker'],
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
    outcome: 'The resume records improved query performance and reduced maintenance overhead. No unverified performance metrics are published.',
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
    outcome: 'Contributed to the ongoing development and support of enterprise financial platforms.',
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
    outcome: 'Highlights the integration, security, and maintainability concerns that shape enterprise backend work.',
    note: 'Generalized engineering focus based on skills and responsibilities in the resume; not presented as a separate public product.',
  },
  {
    number: '04',
    title: 'Lucene Search Optimization',
    type: 'CAPGEMINI EXPERIENCE',
    description: 'Enhancements to Lucene-based search functionality for tickets and problem records.',
    tags: ['Java', 'Apache Lucene', 'Search'],
    context: 'Existing enterprise applications where search quality and usability matter to day-to-day workflows.',
    approach: ['Improve existing search functionality within the application context.', 'Consider relevance, usability, and maintainability when enhancing search.', 'Validate behavior against expected ticket and problem-record workflows.'],
    outcome: 'The resume describes improved search speed and usability; no additional benchmark figures are claimed.',
    note: 'Based on professional experience. Implementation details and source code are not public.',
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', detail: 'SAA-C03 · Amazon Web Services', date: 'Aug 2026', mark: 'AWS' },
  { name: 'Full Stack Web Developer Nanodegree', detail: 'Udacity', date: 'Nov 2024', mark: 'U' },
];
