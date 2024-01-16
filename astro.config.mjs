import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Oratio',
    description: 'Tutorials and tech explainers for digital humanists, from Codex Felis',
    favicon: '/favicon-32x32.png',
	customCss: [
        // Path to your Tailwind base styles:
        './src/styles.css',
		'@fontsource/eagle-lake/400.css',
		'@fontsource-variable/work-sans'
		
      ],
    social: {
      github: 'https://github.com/codexfelis/oratio'
    },
    sidebar: [{
      label: 'Welcome!',
	  autogenerate: {
        directory: 'guides'
      }

    }, {
      label: 'What is...',
	  items: [
		// Each item here is one entry in the navigation menu.
		{
		  label: 'GitHub?',
		  link: '/what-is/github/'
		}]
    }]
  }),    ]
});