import globeIcon from "../assets/globeIcon.png";
import peopleIcon from "../assets/peopleIcon.png";
import billIcon from "../assets/billIcon.png";
import placeholder from "../assets/imgPlaceholder.png";
import serviceOne from "../assets/service01.png";
import serviceTwo from "../assets/service02.png";
import serviceThree from "../assets/service03.png";
import serviceFour from "../assets/service04.png";
import teamOne from "../assets/team01.png";
import teamTwo from "../assets/team02.png";
import teamThree from "../assets/team03.png";
import circlePlaceholder from "../assets/circlePlaceholder.png";

import { facebook, instagram, telegram, twitter } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About",
    url: "/about",
  },
  {
    id: "2",
    title: "Services",
    url: "/services",
  },
  {
    id: "3",
    title: "Our Team",
    url: "/team",
  },
  {
    id: "4",
    title: "Careers",
    url: "/careers",
    onlyMobile: true,
  },
];

export const aboutus = [
  {
    id: "0",
    title: "Our Core Purpose",
    desc: "We aim to redefine remote staffing by ensuring that every Filipino VA enjoys a healthy work–life balance while delivering world-class support to clients in the US and UK.",
    img: globeIcon,
  },
  {
    id: "1",
    title: "What Sets Us Apart",
    desc: "At LifeBalanceVA, we don’t treat VAs as replaceable workers — we treat them as partners. We invest in their well-being, provide ongoing training and cultivate a work environment that values both productivity and personal life. When our VAs thrive, your business thrives with them.",
    img: peopleIcon,
  },
  {
    id: "2",
    title: "Who We Serve",
    desc: "We support small businesses, growing startups and established companies across the US and UK. Whether you need a dedicated assistant or a full remote team, we deliver talent that performs with clarity, reliability and balance.",
    img: billIcon,
  },
];
export const solutions = [
  {
    id: "0",
    title: "Scalable Support for All Business Sizes",
    desc: "From startups to established enterprises, we match you with a VA who can grow with your goals and support your workflow without creating burnout for anyone.",
    img: placeholder,
  },
  {
    id: "1",
    title: "Customized VA Matching",
    desc: "We pair you with a VA whose skills, personality and experience fit your business needs — ensuring long-term compatibility and balanced performance.",
    img: placeholder,
  },
  {
    id: "2",
    title: "Operational Clarity & Efficiency",
    desc: "Our VAs help streamline tasks, reduce bottlenecks and create smoother day-to-day operations, giving you more time to focus on strategy while maintaining balance.",
    img: placeholder,
  },
  {
    id: "3",
    title: "People-First Remote Work System",
    desc: "We provide ongoing check-ins, structured support and wellness-focused work practices to ensure every VA performs at their best without sacrificing their personal life. A balanced VA is a high-performing VA.",
    img: placeholder,
  },
];
export const services = [
  {
    id: "0",
    title: "Administrative & Executive Support",
    desc: "Our VAs assist with email and calendar management, data organization, reporting, scheduling and daily operational tasks — giving you more time for high-value decisions.",
    img: serviceOne,
  },
  {
    id: "1",
    title: "Customer & Client Support",
    desc: "We provide dependable customer service, live chat support, inquiry handling and client follow-up to enhance your customer experience.",
    img: serviceTwo,
  },
  {
    id: "2",
    title: "Digital Operations & Marketing",
    desc: "Our team supports social media management, content assistance, e-commerce operations, lead generation and basic digital marketing tasks tailored to your brand.",
    img: serviceThree,
  },
  {
    id: "3",
    title: "Finance & Business Support",
    desc: "We offer bookkeeping assistance, invoicing, financial tracking and other core business support tasks to keep your operations running smoothly.",
    img: serviceFour,
  },
];
export const teams = [
  {
    id: "0",
    name: "Sean Lowery",
    pos: "Owner / Founder",
    title: "",
    img: teamOne,
  },
  {
    id: "1",
    name: "Phoebe Dawn Mahayag",
    pos: "Chief Executive Officer",
    title: "(CEO)",
    img: teamTwo,
  },
  {
    id: "2",
    name: "Shekina Madarcos Zafra",
    pos: "Content Marketing Manager",
    title: "(CMM)",
    img: teamThree,
  },
];
export const faqs = [
  {
    id: "0",
    question: "Why does LifeBalanceVA prioritize work–life balance for VAs?",
    answer:
      "Because people do their best work when they feel supported. A balanced VA is happier, more focused and more reliable — which means better results for your business.",
  },
  {
    id: "1",
    question: "What types of tasks can your VAs handle?",
    answer:
      "Our Filipino VAs can assist with admin work, customer support, social media, content tasks, e-commerce, bookkeeping, lead generation and industry-specific roles depending on your needs.",
  },
  {
    id: "2",
    question: "Will my VA be able to work in my time zone?",
    answer:
      "Yes. We match you with VAs who can work on US or UK business hours so communication stays smooth and timely.",
  },
  {
    id: "3",
    question: "How long does the hiring process take?",
    answer:
      "Once we understand your needs, we typically introduce a qualified VA within a few business days.",
  },
  {
    id: "4",
    question: "What if I need to replace or add another VA later?",
    answer:
      "We make it easy. You can scale your team anytime, and if you ever need adjustments, we’ll help you find the right fit quickly.",
  },
  {
    id: "5",
    question:
      "What kind of support does LifeBalanceVA provide after onboarding?",
    answer:
      "We stay connected with both you and your VA through check-ins, performance guidance and wellness-centered support to ensure a smooth, long-term partnership.",
  },
];
export const testimonials = [
  {
    id: "0",
    quote:
      "LifeBalanceVA gave us a VA who feels like part of our core team. Her consistency comes from the balance and support she receives, and we see it in the quality of her work.",
    name: "Michael Turner",
    position: "CEO",
    company: "Turner Global Logistics",
    img: circlePlaceholder,
  },
  {
    id: "1",
    quote:
      "Our new VA has transformed our workflow. I appreciate that LifeBalanceVA genuinely cares about their assistants’ well-being — it clearly reflects in their professionalism.",
    name: "Sophia Grant",
    position: "Founder",
    company: "Grant Creative Solutions",
    img: circlePlaceholder,
  },
  {
    id: "0",
    quote:
      "Finally, an agency that values people as much as performance. Our VA is happy, skilled and reliable — exactly what our business needed.",
    name: "Julian Ross",
    position: "Operations Director",
    company: "Northbridge Consulting",
    img: circlePlaceholder,
  },
];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
