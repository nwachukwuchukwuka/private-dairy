

export interface PromptPack {
  id: string;
  name: string;
  promptCount: number;
  author: string;
  description: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons';
  iconName: string;
  prompts: string[];
}


export interface PromptPack {
  id: string;
  name: string;
  promptCount: number;
  author: string;
  description: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons';
  iconName: string;
  prompts: string[];
}

export const promptPacksData: PromptPack[] = [
  {
    id: "gratitude",
    name: "Gratitude",
    promptCount: 37,
    author: "By The Day One Team",
    description: "Spark everyday thankfulness by noticing the large and small blessings that color your life.",
    iconFamily: 'MaterialCommunityIcons',
    iconName: 'cards-heart-outline',
    prompts: [
      "What small things happened today that I am grateful for?",
      "What simple pleasures do I cherish most?",
      "What are today's highlights so far?",
    ],
  },
  {
    id: "reflection",
    name: "Reflection",
    promptCount: 41,
    author: "By The Day One Team",
    description: "Dive deep with self-inquiry questions that clarify values, surface insights, and guide personal growth.",
    iconFamily: 'MaterialCommunityIcons',
    iconName: 'account-question-outline',
    prompts: [
      "What are my top three values?",
      "Which personal strengths help me most during challenges?",
      "What decision most shaped who I am today?",
      "What does happiness mean to me?",
    ],
  },
  {
    id: "fitness",
    name: "Fitness",
    promptCount: 30,
    author: "By The Day One Team",
    description: "Reflect on your movement, progress, and motivation.",
    iconFamily: 'Ionicons',
    iconName: 'fitness-outline',
    prompts: [
      "What is my one-line “why” for staying active?",
      "What fitness goal am I working towards?",
      "Who or what is motivating me right now?",
      "What barrier to my fitness can I remove this week?",
    ],
  },
  {
    id: "creativity",
    name: "Creativity",
    promptCount: 40,
    author: "By The Day One Team",
    description: "Stretch your imagination with playful prompts that spark ideas and bring fresh perspectives.",
    iconFamily: 'Ionicons',
    iconName: 'color-palette-outline',
    prompts: [
      "In what ways am I creative?",
      "How do I incorporate creativity into my daily life?",
      "Where do I find inspiration?",
      "Who are the creative people I admire?",
    ],
  },
  {
    id: "mindfulness",
    name: "Mindfulness",
    promptCount: 22,
    author: "By The Day One Team",
    description: "Ground yourself in the present moment through prompts that engage the senses, breath, and focused awareness.",
    iconFamily: 'MaterialCommunityIcons',
    iconName: 'brain',
    prompts: [
      "How am I feeling right now?",
      "If I engage with my senses right now, what am I noticing?",
      "What is my breath like right now?",
      "Where is my body tense?",
    ],
  },
  {
    id: "legacy",
    name: "Legacy",
    promptCount: 18,
    author: "By The Day One Team",
    description: "Explore the impact you hope to leave behind and the lessons you want future generations to remember.",
    iconFamily: 'MaterialCommunityIcons',
    iconName: 'color-brain-outline',
    prompts: [
      "How do I hope my family remembers me?",
      "What personal challenges have I overcome that could inspire others?",
      "What life lessons do I want future generations to carry forward?",
    ],
  },
  {
    id: "fun",
    name: "Fun",
    promptCount: 17,
    author: "By The Day One Team",
    description: "Light-hearted, quirky prompts designed to add humor, play, and a grin to your journaling routine.",
    iconFamily: 'MaterialCommunityIcons',
    iconName: 'brain',
    prompts: [
      "My favorite dad joke ...",
      "My favorite comedian is ...",
      "A funny memory that always cheers me up ...",
      "That time I laughed so hard I cried ...",
    ],
  },
  {
    id: "about-me",
    name: "About Me",
    promptCount: 33,
    author: "By The Day One Team",
    description: "Capture the essential facts, favorites, and milestones that define who you are right now.",
    iconFamily: 'Ionicons',
    iconName: 'brain',
    prompts: [
      "What is my name, birthdate, and gender?",
      "Where do I live?",
      "My physical appearance and attributes (height, weight, ethnicity, hair, eye color) ...",
      "My favorite foods and drinks are ...",
    ],
  },
];

export interface SettingsItem {
  title: string;
  iconFamily: 'Ionicons' | 'Feather' | 'MaterialCommunityIcons';
  iconName: string;
  route?: string;
  value?: string | number;
}

export const settingsData: SettingsItem[][] = [
  [
    { title: 'Sync', iconFamily: 'Ionicons', iconName: 'cloud-outline', value: 'Sign in' },
    { title: 'Journals', iconFamily: 'Ionicons', iconName: 'book-outline', value: 1 },
    { title: 'Prompt Packs', iconFamily: 'Ionicons', iconName: 'help-circle-outline' },
    { title: 'SMS to Journal', iconFamily: 'Ionicons', iconName: 'chatbubble-ellipses-outline' },
  ],
  [
    { title: 'Reminders', iconFamily: 'Ionicons', iconName: 'notifications-outline' },
    { title: 'Daily Prompts', iconFamily: 'Ionicons', iconName: 'chatbox-outline' },
    { title: 'Templates', iconFamily: 'Ionicons', iconName: 'list-outline', value: 0 },
    { title: 'On This Day', iconFamily: 'Ionicons', iconName: 'calendar-outline' },
    { title: 'Apple Intelligence', iconFamily: 'Ionicons', iconName: 'cog-outline' },
  ],
  [
    { title: 'Appearance', iconFamily: 'Ionicons', iconName: 'color-palette-outline', value: 'Lato System Font Size' },
    { title: 'Passcode & Face ID', iconFamily: 'Ionicons', iconName: 'lock-closed-outline' },
    { title: 'Import / Export', iconFamily: 'Ionicons', iconName: 'swap-vertical-outline' },
    { title: 'Book Printing', iconFamily: 'Ionicons', iconName: 'book-outline' },
    { title: 'App Icon', iconFamily: 'Ionicons', iconName: 'apps-outline' },
    { title: 'Advanced', iconFamily: 'Ionicons', iconName: 'cog-outline' },
  ],
  [
    { title: 'Location History', iconFamily: 'Ionicons', iconName: 'location-outline' },
    { title: 'Email to Journal', iconFamily: 'Ionicons', iconName: 'mail-outline' },
    { title: 'Apple Health', iconFamily: 'Ionicons', iconName: 'heart-outline' },
    { title: 'Integrations', iconFamily: 'Ionicons', iconName: 'git-network-outline' },
  ],
  [
    { title: 'Support', iconFamily: 'Ionicons', iconName: 'diamond-outline' },
    { title: 'Labs', iconFamily: 'Ionicons', iconName: 'flask-outline' },
    { title: 'About', iconFamily: 'Ionicons', iconName: 'information-circle-outline' },
  ],
];

