// ─── Technology ecosystem (About page) ───────────────────────────────────────
// Technology names are proper nouns and are not translated; group titles live
// in messages/{locale}.json under About.techEcosystem.groups.<key>.
//
// To give a text-only pill an icon, drop the SVG into /public/logos and add an
// entry to TECH_LOGOS. Use `mono: true` for single-colour SVGs (fill
// "currentColor", e.g. from scripts/fetch-logos.mjs); omit it for full-colour
// brand SVGs, which are greyed out with a CSS filter until hover.

export type TechLogo = {
  src: string;
  mono?: boolean;
};

export const TECH_LOGOS: Record<string, TechLogo> = {
  // Microsoft (official full-colour icons)
  'Microsoft 365':    { src: '/logos/microsoft-365.svg' },
  'Teams':            { src: '/logos/teams.svg' },
  'SharePoint':       { src: '/logos/sharepoint.svg' },
  'Viva':             { src: '/logos/viva.svg' },
  'Copilot':          { src: '/logos/microsoft-copilot.svg' },
  'Power Platform':   { src: '/logos/power-platform.svg' },
  'Power Automate':   { src: '/logos/power-automate.svg' },
  'Dynamics 365':     { src: '/logos/dynamics-365.svg' },
  'Business Central': { src: '/logos/business-central.svg' },
  'Microsoft Fabric': { src: '/logos/microsoft-fabric.svg' },
  'Power BI':         { src: '/logos/power-bi.svg' },
  'Azure OpenAI':     { src: '/logos/azure-openai.svg' },
  'Logic Apps':       { src: '/logos/logic-apps.svg' },

  // Monochrome icons (simple-icons, via scripts/fetch-logos.mjs)
  'Snowflake':                    { src: '/logos/snowflake.svg', mono: true },
  'Databricks':                   { src: '/logos/databricks.svg', mono: true },
  'Claude':                       { src: '/logos/claude.svg', mono: true },
  'Python':                       { src: '/logos/python.svg', mono: true },
  'TypeScript':                   { src: '/logos/typescript.svg', mono: true },
  'LangGraph':                    { src: '/logos/langgraph.svg', mono: true },
  'Model Context Protocol (MCP)': { src: '/logos/mcp.svg', mono: true },
  'Next.js':                      { src: '/logos/nextjs.svg', mono: true },
  'Supabase':                     { src: '/logos/supabase.svg', mono: true },
  'Vercel':                       { src: '/logos/vercel.svg', mono: true },
  'Cloudflare':                   { src: '/logos/cloudflare.svg', mono: true },

  // Text-only for now: Copilot Studio, Azure AI Foundry, Semantic Kernel, OpenAI
};

export const TECH_GROUPS = [
  {
    key: 'microsoft',
    items: [
      'Microsoft 365',
      'Teams',
      'SharePoint',
      'Viva',
      'Copilot',
      'Copilot Studio',
      'Power Platform',
      'Power Automate',
      'Dynamics 365',
      'Business Central',
      'Microsoft Fabric',
      'Power BI',
    ],
  },
  {
    key: 'dataCloud',
    items: ['Snowflake', 'Databricks', 'Azure AI Foundry', 'Logic Apps'],
  },
  {
    key: 'aiModels',
    items: ['Claude', 'OpenAI', 'Azure OpenAI'],
  },
  {
    key: 'agentEngineering',
    items: ['Python', 'TypeScript', 'LangGraph', 'Semantic Kernel', 'Model Context Protocol (MCP)'],
  },
  {
    key: 'productEngineering',
    items: ['Next.js', 'Supabase', 'Vercel', 'Cloudflare'],
  },
] as const;
