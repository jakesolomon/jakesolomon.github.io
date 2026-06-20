import {
  Text,
  Box,
  Anchor,
} from '@mantine/core';
import ExperienceEntry, {type ExperienceEntryDetails} from "./ExperienceEntry.tsx";

function ExperienceSection() {

  const markMacleanPainting: ExperienceEntryDetails = {
    title: "Mark Maclean Painting",
    role: "SEO and Web Development",
    dates: "2026",
    description:
      <Text>
        Mark MacLean Painting came to me looking to run paid ads to drive more business. After assessing their digital presence (a broken website, inconsistent business listings across the web, and an underdeveloped Google Business Profile) I recommended fixing the foundation first.
        <br/><br/>
        I audited and optimized their GBP, standardized NAP information across 10 business listings, and built a fast, keyword-targeted <Anchor target="_blank" href="https://www.markmacleanpainting.com/">marketing site</Anchor> from scratch (Next.js, AWS SES). The site scored a <Anchor target="_blank" href="https://lighthouse-metrics.com/lighthouse/checks/30502a34-0a9d-4ee4-b3a3-dec900c02983/runs/6d24f409-de2c-4118-960b-7d9ff37800ca">perfect 100 on Lighthouse SEO and 98 on performance</Anchor>. I then developed an ongoing GBP content campaign, shooting on-site photography and video at two job sites to fuel a series of scheduled posts. The work produced the client's first inbound inquiry within weeks of launch.
      </Text>
  }

  const theGrowingGuide: ExperienceEntryDetails = {
    title: "The Growing Guide",
    role: "Lead Engineer/Founder",
    dates: "2025–Present",
    description:
      <Text>
        <Anchor target="_blank" href="https://thegrowingguide.com/">The Growing Guide</Anchor> is a personalized gardening planner that generates customized, month-by-month planting schedules based on users’ locations and climate data.
        <br/><br/>
        I built this project solo from concept to production using a React/Typescript frontend, AWS backend services (Lambda, S3, SES), OpenAI integration for content generation, and a dynamic PDF generation pipeline using react-pdf. The app processes payment via Stripe, and fulfills orders with automated email delivery of generated guides. Acquired 300+ free-tier users and achieved a 34% visitor-to-signup conversion rate.
      </Text>
  }

  const aPriori: ExperienceEntryDetails = {
    title: "aPriori Technologies",
    role: "Software Engineer",
    dates: "2021–2024",
    description:
      <Text>
        <Anchor target="_blank" href="https://www.apriori.com/solutions/products/ap-design/">aP Design</Anchor> is an enterprise cost-optimization platform for manufacturing engineers. I worked on this product for three years at aPriori Technologies, joining at the V1 release and contributing to over a dozen features.
        <br/><br/>
        I built full-stack features using React/Typescript on the frontend and Java/Spring Boot microservices on the backend, deployed on AWS. My work included implementing complex UI components, integrating with REST APIs across five backend services, extending internationalization frameworks for global markets, and contributing to database schema design and query optimization. Beyond my technical contributions, I helped modernize the team’s delivery process: leading quarterly planning sessions for cross-team dependency resolution (while reducing average project timeline inflation from over 100% to below 15%), stepping in as scrum master to run Agile ceremonies, and regularly presenting technical demos to stakeholders.
      </Text>
  }

  const area: ExperienceEntryDetails = {
    title: "Area",
    role: "Contract Software Engineer",
    dates: "2020–2021",
    description:
      <Text>
        Area is a location-based content platform I built for a client on Upwork. Working remotely with a non-technical founder, I translated their product vision into a browser-based MVP, managing scope and timelines throughout the project. I built the application with React and integrated multiple third-party services: Google Maps API, Auth0 for authentication and authorization, Stripe for payments, Hasura Cloud for the GraphQL backend, and Cloudinary for media handling.
      </Text>
  }

  const tutorStat: ExperienceEntryDetails = {
    title: "TutorStat",
    role: "Contract Software Engineer",
    dates: "2020",
    description:
      <Text>
        TutorStat is an internal analytics dashboard I built for a test-prep center to track tutor performance and student outcomes. Built with React and Ruby data processing, it visualized key metrics using React Vis to inform training decisions and client communication.
      </Text>
  }

  return (
    <Box>
      <ExperienceEntry {...markMacleanPainting}/>
      <ExperienceEntry {...theGrowingGuide}/>
      <ExperienceEntry {...aPriori}/>
      <ExperienceEntry {...area}/>
      <ExperienceEntry {...tutorStat}/>
    </Box>
  )
}

export default ExperienceSection;