/**
 * common.js
 * Common script loader for Yılmaz Hukuk Bürosu
 * Loads analytics, chatbot, and other shared components
 */

(function () {
    'use strict';

    // Configuration
    const config = {
        basePath: getBasePath(),
        debug: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    };

    /**
     * Determine base path - simplified for local file support
     */
    function getBasePath() {
        // For file protocol or root, use relative current directory
        return '.';
    }

    /**
     * Load a script dynamically
     * @param {string} src - Script source path
     * @param {boolean} async - Load asynchronously
     * @returns {Promise} Resolves when script is loaded
     */
    function loadScript(src, async = true) {
        return new Promise((resolve, reject) => {
            // Check if already loaded
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.async = async;

            script.onload = () => {
                if (config.debug) {
                    console.log('✅ Loaded:', src);
                }
                resolve();
            };

            script.onerror = () => {
                console.error('❌ Failed to load:', src);
                reject(new Error(`Failed to load ${src}`));
            };

            document.body.appendChild(script);
        });
    }

    /**
     * Load a stylesheet dynamically
     * @param {string} href - Stylesheet href
     * @returns {Promise} Resolves when stylesheet is loaded
     */
    function loadStylesheet(href) {
        return new Promise((resolve, reject) => {
            // Check if already loaded
            if (document.querySelector(`link[href="${href}"]`)) {
                resolve();
                return;
            }

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;

            link.onload = () => {
                if (config.debug) {
                    console.log('✅ Loaded CSS:', href);
                }
                resolve();
            };

            link.onerror = () => {
                console.error('❌ Failed to load CSS:', href);
                reject(new Error(`Failed to load ${href}`));
            };

            document.head.appendChild(link);
        });
    }

    /**
     * Initialize all common components
     */
    async function init() {
        try {
            const basePath = config.basePath;

            // 1. Load chatbot CSS first
            await loadStylesheet(`${basePath}/css/chatbot.css`);

            // 2. Load analytics
            await loadScript(`${basePath}/js/utils/analytics.js`);

            // 3. Load chatbot DATA (Fixes CORS for local files)
            await loadScript(`${basePath}/js/chatbot/chatbot-data.js`);

            // 4. Load chatbot engine
            await loadScript(`${basePath}/js/chatbot/chatbot-engine.js`);

            // 5. Load chatbot UI (depends on engine)
            await loadScript(`${basePath}/js/chatbot/chatbot-ui.js`);

            if (config.debug) {
                console.log('✅ All common scripts loaded successfully');
            }

        } catch (error) {
            console.error('❌ Error loading common scripts:', error);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
