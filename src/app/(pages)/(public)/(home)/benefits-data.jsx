
// images
import img1 from '@/assets/images/photos/3.jpg'
import img2 from '@/assets/images/photos/4.jpg'
import img3 from '@/assets/images/photos/5.jpg'
import img4 from '@/assets/images/photos/10.jpg'

const benefits = [
  {
    icon: (
      // <svg
      //   className="w-8 h-8 text-primary"
      //   viewBox="0 0 24 24"
      //   version="1.1"
      //   xmlns="http://www.w3.org/2000/svg"
      //   xmlnsXlink="http://www.w3.org/1999/xlink"
      // >
      //   <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      //     <rect id="bound" x={0} y={0} />
      //     <path
      //       d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M14.1654881,7.35483745 L9.61055177,10.3622525 C9.47921741,10.4489666 9.39637436,10.592455 9.38694497,10.7495509 L9.05991526,16.197949 C9.04337012,16.4735952 9.25341309,16.7104632 9.52905936,16.7270083 C9.63705011,16.7334903 9.74423017,16.7047714 9.83451193,16.6451626 L14.3894482,13.6377475 C14.5207826,13.5510334 14.6036256,13.407545 14.613055,13.2504491 L14.9400847,7.80205104 C14.9566299,7.52640477 14.7465869,7.28953682 14.4709406,7.27299168 C14.3629499,7.26650974 14.2557698,7.29522855 14.1654881,7.35483745 Z"
      //       id="Combined-Shape"
      //       fill="currentColor"
      //     />
      //   </g>
      // </svg>
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path d="M20 28h24v8H20z" fill="rgb(200,53,53)" />
        <path d="M24 24h16v4H24z" fill="rgb(200,53,53)" />
        <path d="M24 36h16v4H24z" fill="rgb(200,53,53)" />
        <circle cx="32" cy="16" r="3" fill="rgb(200,53,53)" />
        <circle cx="32" cy="48" r="3" fill="rgb(200,53,53)" />
        <circle cx="48" cy="32" r="3" fill="rgb(200,53,53)" />
        <circle cx="16" cy="32" r="3" fill="rgb(200,53,53)" />
        <line
          x1="32"
          y1="19"
          x2="32"
          y2="28"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <line
          x1="32"
          y1="36"
          x2="32"
          y2="45"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <line
          x1="35"
          y1="32"
          x2="45"
          y2="32"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <line
          x1="29"
          y1="32"
          x2="19"
          y2="32"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>

    ),
    title: 'Resource Management',
    description:
      "Centralizes and optimizes project resources and schedules",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 18c-4 0-6 2-6 4s2 4 6 4 6 2 6 4-2 4-6 4"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <line
          x1="32"
          y1="14"
          x2="32"
          y2="50"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <rect x="20" y="36" width="6" height="10" fill="rgb(200,53,53)" />
        <rect x="28" y="30" width="6" height="16" fill="rgb(200,53,53)" />
        <rect x="36" y="24" width="6" height="22" fill="rgb(200,53,53)" />
      </svg>
    ),
    title: 'Financial Tracking',
    description:
      'Integrates and delivers precise tracking of costs and budgets',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="10"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <line
          x1="30"
          y1="30"
          x2="38"
          y2="38"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <polyline
          points="14,40 24,30 34,34 44,20"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle cx="14" cy="40" r="2" fill="rgb(200,53,53)" />
        <circle cx="24" cy="30" r="2" fill="rgb(200,53,53)" />
        <circle cx="34" cy="34" r="2" fill="rgb(200,53,53)" />
        <circle cx="44" cy="20" r="2" fill="rgb(200,53,53)" />
      </svg>
    ),
    title: 'Predictive Analysis',
    description:
      'Equips users with tools to forecast resource needs and financial requirements',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="8"
          y="12"
          width="48"
          height="40"
          rx="4"
          ry="4"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <line
          x1="8"
          y1="20"
          x2="56"
          y2="20"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="26"
          width="12"
          height="20"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <rect
          x="28"
          y="34"
          width="12"
          height="12"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <rect
          x="42"
          y="30"
          width="8"
          height="16"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Executive Reporting',
    description:
      "Provides actionable KPIs for strategic insights.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M16 32c0-8.84 7.16-16 16-16s16 7.16 16 16"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 16v32"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 32h32"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Versatility',
    description:
      'Manages multiple projects and resource allocations with ease',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M16 32l12 12l24-24"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 16v32"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Efficiency',
    description:
      'Streamlines data collection and reporting, saving valuable time',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="16"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="8"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 16v2"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 48v-2"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M16 32h2"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M48 32h-2"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Accuracy',
    description:
      'Guarantees precise and consistent financial tracking and forecasting',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M48 16H16V48h32V16z"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 16v32"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M16 32h32"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="3"
          fill="rgb(200,53,53)"
        />
        <path
          d="M32 16l-8 8"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M32 48l-8 -8"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Strategic Planning',
    description:
      'Delivers actionable insights for superior decision-making and resource allocation.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <circle
          cx="32"
          cy="32"
          r="15"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="10"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="5"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Transparency',
    description:
      'Enhances visibility into project performance and financial health',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 64 64"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <path
          d="M16,32 L32,16 L48,32 L32,48 Z"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="5"
          fill="none"
          stroke="rgb(200,53,53)"
          strokeWidth="2"
        />
      </svg>
    ),
    title: 'Scalability',
    description:
      'Adapts to the needs of expanding organizations and complex projects',
  },
]

const gallery = [
  {
    id: 3,
    image: {
      src: img1,
      caption: 'Office Desks',
    },
  },
  {
    id: 4,
    image: {
      src: img2,
      caption: 'Meeting Room view',
    },
  },
  {
    id: 5,
    image: {
      src: img4,
      caption: 'Outside view',
    },
  },
  {
    id: 6,
    image: {
      src: img3,
      caption: 'A common seating area',
    },
  },
]

const vacancies = [
  {
    category: 'Engineering',
    jobs: [
      {
        designation: 'Techical Support Engineer',
        type: 'Remote',
      },
      {
        designation: 'Senior Software Engineer (Frontend)',
        type: 'Remote',
      },
      {
        designation: 'Senior Software Engineer (Backend)',
        type: 'Remote',
      },
      {
        designation: 'Engineering Manager',
        type: 'Remote',
      },
    ],
  },
  {
    category: 'Marketing',
    jobs: [
      {
        designation: 'Junior copywriter/editor',
        type: 'Remote',
      },
    ],
  },
]

export { benefits, gallery, vacancies }
