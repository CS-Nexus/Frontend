import { ITeamData } from '../interfaces/iteam-data';

export const teamData: ITeamData[] = [
  {
    id: 0,
    name: 'ihab mahmoud',
    role: ['team leader', 'frontend', 'game developer'],
    description:
      "I'm ihab mahmoud a team leader of nexus, frontend developer, and game developer who focus on game environment.",
    social: [
      {
        icon: 'bootstrapGithub',
        link: 'https://github.com/EHAB3x',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'www.linkedin.com/in/ihabmahmoud1',
      },
      {
        icon: 'bootstrapGlobe',
        link: 'https://eh-ihabmahmoud.netlify.app/',
      },
    ],
    toolsUsed: ['Angular', 'Unity', 'TypeScript'],
    image: 'assets/media/images/team/avatars/ihab.jpg',
  },
  {
    id: 1,
    name: 'Ahmed galal',
    role: ['Graphic Designer', '3D Modeling'],
    description:
      'I designed the full visual identity of the project, including the logo, color palette, and overall theme.I also contributed to modeling 3D elements of the game environment using 3D modeling techniques.',
    social: [
      {
        icon: 'bootstrapBehance',
        link: 'https://www.behance.net/ahmedgalal165',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/ahmed-galal-406100265',
      },
      {
        icon: 'bootstrapInstagram',
        link: 'https://www.instagram.com/ahmedgalal_21/',
      },
    ],
    toolsUsed: ['Photoshop', 'Illustrator', 'Blender'],
    image: 'assets/media/images/team/avatars/galal.jpeg',
  },
  {
    id: 2,
    name: 'omar tarek',
    role: ['3D model', 'character designer', 'environment designer'],
    description:
      'I contributed to the design of 3D objects and models for 3D game environments using 3D techniques.',
    social: [
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/omar-bastawese-graphic-designer2dand3dandmotionandanimation?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
    ],
    toolsUsed: ['blender'],
    image: 'assets/media/images/team/avatars/omar.jpeg',
  },
  {
    id: 3,
    name: 'Nabil Abdullah',
    role: [' AI Developer'],
    description:
      "I'm passionate about AI and machine learning. I enjoy working on smart systems that can understand and respond like humans. I mainly focus on building and training models, and exploring how technology can solve real-world problems.",
    social: [
      {
        icon: 'bootstrapGithub',
        link: 'https://github.com/Nabil-Abdalla',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'http://www.linkedin.com/in/nabil-ibrahim-453529314',
      },
    ],
    toolsUsed: [
      'python',
      'Google 1.5 pro',
      'google. generativeai',
      'python-dotenv',
      'flask',
    ],
    image: 'assets/media/images/team/avatars/nabil.jpeg',
  },
  {
    id: 4,
    name: 'Esraa Morsii',
    role: ['UIUX Designer'],
    description:
      'My role was to blend functionality with creativity, guiding users through a powerful virtual reality experience where every screen teaches, supports, and prepares them for real-life emergencies.',
    social: [
      {
        icon: 'bootstrapBehance',
        link: 'https://www.behance.net/esraamorsii10',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/esraa-morsii-a9a65024a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
      {
        icon: 'bootstrapInstagram',
        link: 'https://www.instagram.com/esraamorsii?igsh=MTRydm44cjRmcWdpMg%3D%3D&utm_source=qr',
      },
    ],
    toolsUsed: ['Figma'],
    image: 'assets/media/images/team/avatars/esraa.jpg',
  },
  {
    id: 5,
    name: 'amera mahmoud',
    role: ['Backend Developer'],
    description:
      'As a backend developer on my graduation project Nexus Backend, I designed and implemented a secure, scalable RESTful API using ASP.NET Core (.NET 8). My role included developing JWT-based authentication, role-based authorization, Stripe payment integration, and real-time features with SignalR. I also structured the project using a modular architecture with Entity Framework Core and provided API documentation and testing support using Swagger/OpenAPI.',
    social: [
      {
        icon: 'bootstrapGithub',
        link: 'https://github.com/Ameramahmoud22',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/amera-elbassal-50b984272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
    ],
    toolsUsed: [
      '.NET',
      'SMTP',
      'SignalR',
      'Visual Studio',
      'SSMS',
      'git & GitHub',
      'Azure',
    ],
    image: 'assets/media/images/team/avatars/amera.jpg',
  },
  {
    id: 6,
    name: 'Eman Khater',
    role: ['3D Designer'],
    description:
      'Designed 3D assets and scenes to bring the VR training experience to life.',
    social: [
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/eman-khater-402055308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
      {
        icon: 'bootstrapInstagram',
        link: 'https://www.instagram.com/eman_m397?igsh=MWdvd3c0Njl5bHBseQ==',
      },
    ],
    toolsUsed: ['Blender'],
    image: 'assets/media/images/team/avatars/eman.jpg',
  },
  {
    id: 7,
    name: 'Muhammad Issa',
    role: ['Mobile App Developer'],
    description:
      'Developed a companion mobile app for the Nexus VR emergency response simulator.',
    social: [
      {
        icon: 'bootstrapGithub',
        link: 'https://github.com/mu7ammad-3issa',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/mu7ammad-3issa/',
      },
      {
        icon: 'bootstrapMailbox',
        link: 'mu7ammad.3issa@gmail.com',
      },
    ],
    toolsUsed: ['Flutter', 'Gemini', 'Figma', 'Azure', 'Firebase'],
    image: 'assets/media/images/team/avatars/muhammed.jpeg',
  },
  {
    id: 8,
    name: 'Amr Ahmed',
    role: ['AI Developer'],
    description:
      'Responsible for training and optimizing deep learning models used in burn detection.Python, TensorFlow, Keras, OpenCV, Flask',
    social: [
      {
        icon: 'bootstrapGithub',
        link: 'https://github.com/AmrAhmedZakaria',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'https://www.linkedin.com/in/amr-ahmed-1b529a223',
      },
    ],
    toolsUsed: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
    image: 'assets/media/images/team/avatars/amr.jpeg',
  },
  {
    id: 9,
    name: 'ihab mahmoud',
    role: ['team leader', 'frontend', 'game developer'],
    description:
      "I'm ihab mahmoud a team leader of nexus, frontend developer, and game developer who focus on game environment.",
    social: [
      {
        icon: 'bootstrapGithub',
        link: 'https://github.com/EHAB3x',
      },
      {
        icon: 'bootstrapLinkedin',
        link: 'www.linkedin.com/in/ihabmahmoud1',
      },
      {
        icon: 'bootstrapGlobe',
        link: 'https://eh-ihabmahmoud.netlify.app/',
      },
    ],
    toolsUsed: ['Angular', 'Unity', 'JavaScript', 'TypeScript'],
    image: 'assets/media/images/team/avatars/',
  },
];
