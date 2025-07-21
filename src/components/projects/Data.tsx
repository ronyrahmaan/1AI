import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'LiDAR Infrastructure Safety - TxDOT Project',
    description:
      'Developed a robust pipeline for Texas Department of Transportation (TxDOT) to process Velodyne LiDAR sensor data in real time for infrastructure safety evaluation. The system segments PCAP files into fixed-time sequences and converts data to CSV format for analysis in VeloView & ParaView, ensuring lossless capture with multi-process parallelism for scalable deployment.',
    techStack: [
      'Python',
      'LiDAR Processing',
      'PCAP Analysis',
      'VeloView',
      'ParaView',
      'Real-time Data Processing',
      'Multiprocessing',
      'Computer Vision',
      'Sensor Data Analytics'
    ],
    date: '2024-2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Research Documentation',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/lidar-project-1.png',
        alt: 'LiDAR data processing pipeline',
      },
      {
        src: '/lidar-project-2.png',
        alt: 'Real-time sensor data visualization',
      },
    ],
  },
  {
    title: 'PolyHope - Hope Speech & Sarcasm Detection',
    description:
      'A dual-task neural framework leveraging Transformers and BiLSTM for multilingual classification of hope speech and sarcasm detection. Built for social media content moderation and sentiment analytics use cases, the system integrates multi-head attention and contextual embedding fusion for enhanced accuracy in understanding nuanced human language patterns.',
    techStack: [
      'Python',
      'PyTorch',
      'Transformers',
      'BiLSTM',
      'BERT',
      'Multi-head Attention',
      'NLP',
      'Sentiment Analysis',
      'Deep Learning'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'Research Paper',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/polyhope-1.png',
        alt: 'PolyHope model architecture',
      },
      {
        src: '/polyhope-2.png',
        alt: 'Sentiment analysis results',
      },
    ],
  },
  {
    title: 'AI vs Human Text Detection Framework',
    description:
      'Designed a sophisticated classifier using entropy, perplexity, and DetectGPT-based techniques to distinguish between AI-generated and human-written text. The system was tested against ChatGPT, Claude, and other LLM outputs using adversarial samples and deployed as a live Streamlit application for academic and journalistic integrity assessment.',
    techStack: [
      'Python',
      'Transformers',
      'DetectGPT',
      'Streamlit',
      'NLP',
      'Statistical Analysis',
      'Machine Learning',
      'Text Classification'
    ],
    date: '2024',
    links: [
      {
        name: 'Live Demo',
        url: 'https://github.com/ronyrahmaan',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/ronyrahmaan',
      }
    ],
    images: [
      {
        src: '/ai-detection-1.png',
        alt: 'AI text detection interface',
      },
      {
        src: '/ai-detection-2.png',
        alt: 'Detection accuracy results',
      }
    ],
  },
  {
    title: '3d Pong Game',
    description:
      "Transcendance is the final project of my 42 cursus. It's a 3D pong game with multiplayer capabilities, user authentication, and real-time gameplay. We had to do everything from scratch, so it was pretty challenging and we learned a lot.",
    techStack: ['Django', 'Python', 'JavaScript', 'Websockets', 'PostgreSQL', 'Docker', 'Nginx', 'Web3', 'Solidity'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Transcendance',
      },
    ],
    images: [
      {
        src: '/trans1.png',
        alt: 'Transcendance landing page',
      },
      {
        src: '/trans2.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans3.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans4.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans5.png',
        alt: 'Transcendance game',
      },
      {
        src: '/trans6.png',
        alt: 'Transcendance game',
      }

    ],
  },
  {
    title: 'Minishell',
    description:
      "Minishell is a project that aims to create a simple shell. It's a great introduction to process creation and management in C, offering fundamental Unix command-line functionality. This was a very challenging project, but I learned a lot from it.",
    techStack: ['C', 'Unix', 'Bash'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/Michelle-42',
      },
    ],
    images: [
      {
        src: '/minishell1.png',
        alt: 'Minishell landing page',
      }
    ],
  },
  {
    title: 'YouBot',
    description:
      'YouBot is a Python Bot that Scrapes Videos from Pexels, adds a random song from a Songs Folder, then auto-uploads the videos to your YouTube Channel for continuous content generation.',
    techStack: ['Python', 'YouTube API', 'Pexels API'],
    date: '2022',
    links: [
      {
        name: "YouTube Video",
        url: "https://youtu.be/vp1v5mBG7rA "
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/YouBot',
      }
    ],
    images: [
      {
        src: '/youbot1.jpg',
        alt: 'Youbot landing page',
      },
      {
        src: '/youbot2.png',
        alt: 'Youbot chatbot',
      },
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      'My previous traditional portfolio built with vanilla HTML, CSS and JS with GSAP animations for a smooth and interactive user experience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    date: '2022',
    links: [
      {
        name: 'Website',
        url: 'https://toukoum.github.io/oldPortfolio/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/portfolio',
      },
    ],
    images: [
      {
        src: '/oldport1.png',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/oldport2.png',
        alt: 'Old Portfolio projects',
      }
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Startup Project',
    title: 'Synto',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Synto' }} />,
  },
  {
    category: 'Fun Tool',
    title: 'Rrate',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'Rrate' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Defai',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'Defai' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Fitgear',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'Fitgear' }} />,
  },
  {
    category: 'Business Intelligence',
    title: 'Datai',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'Datai' }} />,
  },
  {
    category: '42 Project',
    title: '3d Pong Game',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: '3d Pong Game' }} />,
  },
  {
    category: '42 Project',
    title: 'Minishell',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Minishell' }} />,
  },
  {
    category: 'Automation',
    title: 'YouBot',
    src: '/youbotpreview.png',
    content: <ProjectContent project={{ title: 'YouBot' }} />,
  },
  {
    category: 'Web Development',
    title: 'Old Portfolio',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
];
