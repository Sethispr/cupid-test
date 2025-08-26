import type { StarlightPlugin } from '@astrojs/starlight/types';
import type { ProgressBarConfig } from './types.js';
const defaultConfig: Required<ProgressBarConfig> = {
  height: '1px',
  color: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
  position: 'top',
  animation: 'smooth',
  zIndex: 50,
  enabled: true,
  showOnMobile: true,
  showOnDesktop: true,
  debounce: 16,
  offset: 0,
  customCSS: {},
};
export default function starlightProgressBar(userConfig: ProgressBarConfig = {}): StarlightPlugin {
  const config = { ...defaultConfig, ...userConfig };
  return {
    name: 'starlight-progress-bar',
    hooks: {
      'config:setup': ({ updateConfig, logger }) => {
        logger.info('Setting up starlight-progress-bar plugin');
        const cssProperties = `
          :root {
            --spb-height: ${config.height};
            --spb-color: ${config.color};
            --spb-z-index: ${config.zIndex};
            --spb-position: ${config.position};
            --spb-offset: ${config.offset}px;
            --spb-transition: ${config.animation === 'smooth' ? 'width 0.2s ease-out' : 'none'};
          }
        `;
        const responsiveCSS = `
          .spb-progress {
            position: fixed;
            ${config.position}: var(--spb-offset);
            left: 0;
            width: 0;
            height: var(--spb-height);
            background: var(--spb-color);
            z-index: var(--spb-z-index);
            transition: var(--spb-transition);
            transform-origin: left center;
            will-change: width;
            contain: strict;
          }
          ${!config.showOnMobile ? '@media (max-width: 767px) { .spb-progress { display: none; } }' : ''}
          ${!config.showOnDesktop ? '@media (min-width: 768px) { .spb-progress { display: none; } }' : ''}
          ${Object.entries(config.customCSS).map(([key, value]) => `.spb-progress { ${key}: ${value}; }`).join('\n')}
        `;
        const scrollScript = `
          (function() {
            if (!${config.enabled}) return;
           
            let progressBar = null;
            let rafId = null;
            let lastScroll = 0;
            let lastUpdate = 0;
            function createProgressBar() {
              if (progressBar) return;
              progressBar = document.createElement('div');
              progressBar.className = 'spb-progress';
              progressBar.setAttribute('aria-hidden', 'true');
              document.body.appendChild(progressBar);
            }
            function updateProgress() {
              if (!progressBar) return;
             
              const scrollTop = window.scrollY;
              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
              const progress = scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;
             
              progressBar.style.width = ${config.animation === 'smooth'} ? \`\${progress}%\` : \`\${progress}%\`;
              rafId = null;
            }
            function debounceUpdate(timestamp) {
              if (timestamp - lastUpdate >= ${config.debounce}) {
                updateProgress();
                lastUpdate = timestamp;
              }
              if (rafId) cancelAnimationFrame(rafId);
              rafId = requestAnimationFrame(debounceUpdate);
            }
            function handleScroll() {
              const scrollTop = window.scrollY;
              if (Math.abs(scrollTop - lastScroll) > 5) {
                lastScroll = scrollTop;
                if (!rafId) rafId = requestAnimationFrame(debounceUpdate);
              }
            }
            function initialize() {
              createProgressBar();
              updateProgress();
              window.addEventListener('scroll', handleScroll, { passive: true });
              window.addEventListener('resize', updateProgress, { passive: true });
            }
            function cleanup() {
              if (progressBar) {
                progressBar.remove();
                progressBar = null;
              }
              window.removeEventListener('scroll', handleScroll);
              window.removeEventListener('resize', updateProgress);
              if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
              }
            }
            document.addEventListener('DOMContentLoaded', initialize);
            document.addEventListener('astro:page-load', initialize);
            document.addEventListener('astro:before-swap', cleanup);
            document.addEventListener('astro:after-swap', initialize);
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              progressBar?.style.setProperty('transition', 'none');
            }
          })();
        `;
        updateConfig({
          head: [
            { tag: 'style', content: cssProperties + responsiveCSS },
            { tag: 'script', content: scrollScript },
          ],
        });
        logger.info('starlight-progress-bar plugin configured successfully');
      },
    },
  };
}
export type { ProgressBarConfig };
