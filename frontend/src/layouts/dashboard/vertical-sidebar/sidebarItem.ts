// icons
// import {
//   QuestionOutlined,
//   DashboardOutlined,
//   ChromeOutlined,
//   LoginOutlined,
//   ProfileOutlined,
//   FontSizeOutlined,
//   BgColorsOutlined,
//   BarcodeOutlined,
//   CrownOutlined
// } from '@ant-design/icons-vue';

import { FileImageOutlined, FontSizeOutlined, DatabaseOutlined } from '@ant-design/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

// const sidebarItem: menu[] = [
//   { header: 'Navigation' },
//   {
//     title: 'Dashboard',
//     icon: DashboardOutlined,
//     to: '/dashboard'
//   },
//   { header: 'Authentication' },
//   {
//     title: 'Login',
//     icon: LoginOutlined,
//     to: '/login1'
//   },
//   {
//     title: 'Register',
//     icon: ProfileOutlined,
//     to: '/register'
//   },
//   { header: 'Utilities' },
//   {
//     title: 'Typography',
//     icon: FontSizeOutlined,
//     to: '/typography'
//   },
//   {
//     title: 'Color',
//     icon: BgColorsOutlined,
//     to: '/colors'
//   },
//   {
//     title: 'Shadow',
//     icon: BarcodeOutlined,
//     to: '/shadow'
//   },
//   {
//     title: 'Ant Icons',
//     icon: CrownOutlined,
//     to: '/icon/ant'
//   },
//   { header: 'Support' },
//   {
//     title: 'Sample Page',
//     icon: ChromeOutlined,
//     to: '/sample-page'
//   },
//   {
//     title: 'Documentation',
//     icon: QuestionOutlined,
//     to: 'https://codedthemes.gitbook.io/mantis-vuetify/',
//     type: 'external',
//     chip: 'gitbook',
//     chipColor: 'secondary',
//     chipVariant: 'flat'
//   }
// ];

const sidebarItem: menu[] = [
  { header: 'Category' },
  {
    icon: FontSizeOutlined,
    title: 'Text Tools',
    children: [
      {
        title: 'Text Diff',
        to: '/text-diff'
      },
      {
        title: 'Loren Ipsum',
        to: '/loren-ipsum'
      },
      {
        title: 'Letter Counter',
        to: '/letter-counter'
      },
      {
        title: 'Text Splitter',
        to: '/split-text'
      },
      {
        title: 'Text Replacer',
        to: '/replace-text'
      },

    ]
  },
  {
    icon: FileImageOutlined,
    title: 'Image Tools',
    children: [
      {
        title: 'Image to Base64',
        to: '/base64-image'
      }
    ]
  },
  {
    icon: DatabaseOutlined,
    title: 'Data Tools',
    children: [
      {
        title: 'CSV 2 Json',
        to: '/csv-2-json'
      },
      {
        title: 'Json 2 CSV',
        to: '/csv-2-json'
      }
    ]
  }
];

export default sidebarItem;
