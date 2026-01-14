/**
 * analytics.js
 * Lightweight analytics tracking for Yılmaz Hukuk Bürosu
 * KVKK compliant - no personal data collection
 */

class Analytics {
    constructor() {
        this.sessionId = this.getOrCreateSessionId();
        this.events = [];
        this.maxStoredEvents = 100;
    }

    getOrCreateSessionId() {
        let id = sessionStorage.getItem('analytics_session');
        if (!id) {
            id = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('analytics_session', id);
        }
        return id;
    }

    /**
     * Track a generic event
     * @param {string} eventName - Name of the event
     * @param {object} properties - Additional properties
     */
    track(eventName, properties = {}) {
        const event = {
            name: eventName,
            properties: {
                ...properties,
                timestamp: Date.now(),
                sessionId: this.sessionId,
                page: window.location.pathname,
                referrer: document.referrer || 'direct'
            }
        };

        this.events.push(event);

        // Google Analytics 4 (if available)
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: properties.category || 'General',
                event_label: properties.label || '',
                value: properties.value || 0
            });
        }

        // Console log for debugging (remove in production)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('📊 Analytics:', eventName, properties);
        }

        // Save to LocalStorage periodically
        if (this.events.length >= 5) {
            this.saveToStorage();
        }
    }

    /**
     * Save events to LocalStorage for later analysis
     */
    saveToStorage() {
        try {
            const stored = localStorage.getItem('analytics_events');
            const existing = stored ? JSON.parse(stored) : [];
            const combined = [...existing, ...this.events].slice(-this.maxStoredEvents);
            localStorage.setItem('analytics_events', JSON.stringify(combined));
            this.events = [];
        } catch (e) {
            console.warn('Analytics storage failed:', e);
            this.events = [];
        }
    }

    /**
     * Track chatbot specific events
     * @param {string} action - Chatbot action (opened, closed, message_sent, etc.)
     * @param {object} metadata - Additional metadata
     */
    trackChatbot(action, metadata = {}) {
        this.track('chatbot_' + action, {
            category: 'Chatbot',
            ...metadata
        });
    }

    /**
     * Track page views
     */
    trackPageView() {
        this.track('page_view', {
            category: 'Navigation',
            title: document.title,
            path: window.location.pathname
        });
    }

    /**
     * Track form submissions
     * @param {string} formName - Name of the form
     * @param {boolean} success - Whether submission was successful
     */
    trackFormSubmission(formName, success = true) {
        this.track('form_submission', {
            category: 'Forms',
            label: formName,
            success: success
        });
    }

    /**
     * Track CTA clicks
     * @param {string} ctaName - Name/label of the CTA
     * @param {string} location - Where on the page
     */
    trackCTAClick(ctaName, location = 'unknown') {
        this.track('cta_click', {
            category: 'Engagement',
            label: ctaName,
            location: location
        });
    }

    /**
     * Get all stored events (for admin/debugging)
     * @returns {array} Stored events
     */
    getStoredEvents() {
        try {
            const stored = localStorage.getItem('analytics_events');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            return [];
        }
    }

    /**
     * Clear stored events
     */
    clearStoredEvents() {
        localStorage.removeItem('analytics_events');
        this.events = [];
    }

    /**
     * Flush any remaining events to storage
     */
    flush() {
        if (this.events.length > 0) {
            this.saveToStorage();
        }
    }
}

// Create global instance
window.Analytics = Analytics;
window.analytics = new Analytics();

// Track page view on load
document.addEventListener('DOMContentLoaded', function () {
    window.analytics.trackPageView();
});

// Flush events before page unload
window.addEventListener('beforeunload', function () {
    window.analytics.flush();
});
