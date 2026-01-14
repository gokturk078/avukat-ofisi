/**
 * chatbot-ui.js (v5.0 - Ultra Premium UI)
 * Features:
 * - Category Tree Sidebar
 * - Rich Message Cards (Info, FAQ, Lawyer, Calculator)
 * - Premium Animations
 * - Voice Recognition
 * - Dark Mode Support
 * - Mobile Responsive
 */

class ChatbotUI {
    constructor() {
        this.engine = null;
        this.isOpen = false;
        this.isSidebarOpen = true;
        this.isTyping = false;
        this.recognition = null;
        this.isDarkMode = false;
        this.init();
    }

    async init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    async setup() {
        this.engine = new SmartLegalChatbot();
        await this.waitForEngine();
        this.createChatWidget();
        this.attachEventListeners();
        this.initVoiceRecognition();
        this.checkDarkModePreference();

        setTimeout(() => this.showWelcomeNotification(), 4000);

        console.log('✅ Ultra Premium Legal Chatbot UI v5.0 initialized');
    }

    async waitForEngine() {
        let attempts = 0;
        while (!this.engine.isLoaded && attempts < 20) {
            await this.delay(150);
            attempts++;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // CREATE WIDGET
    // ═══════════════════════════════════════════════════════════

    createChatWidget() {
        const widget = document.createElement('div');
        widget.id = 'chatbot-container';
        widget.className = 'premium';
        widget.innerHTML = `
            <!-- Mobile Overlay -->
            <div id="chatbot-overlay" class="chatbot-overlay" style="display: none;"></div>

            <!-- Premium Toggle Button -->
            <button id="chatbot-toggle" class="chatbot-toggle premium">
                <div class="toggle-icon-wrapper">
                    <span class="chatbot-icon chat-icon">⚖️</span>
                    <span class="chatbot-icon close-icon">✕</span>
                </div>
                <span class="chatbot-pulse"></span>
                <span class="toggle-badge">Yardım</span>
            </button>

            <!-- Main Chat Window -->
            <div id="chatbot-window" class="chatbot-window premium" style="display: none;">
                <!-- Sidebar (Category Tree) -->
                <aside class="chatbot-sidebar" id="chatbot-sidebar">
                    <div class="sidebar-header">
                        <h3>📚 Hukuk Alanları</h3>
                        <button class="sidebar-toggle" id="sidebar-toggle" title="Menüyü Kapat">◀</button>
                    </div>
                    <nav class="category-tree" id="category-tree">
                        <!-- Dynamically populated -->
                    </nav>
                    <div class="sidebar-footer">
                        <button class="sidebar-action" data-action="contact">
                            <span>📞</span> İletişim
                        </button>
                    </div>
                </aside>

                <!-- Main Chat Area -->
                <main class="chatbot-main">
                    <!-- Header -->
                    <header class="chatbot-header premium">
                        <button class="menu-toggle" id="menu-toggle" title="Menü">☰</button>
                        <div class="header-info">
                            <div class="avatar-wrapper">
                                <img class="avatar" src="images/avatar-assistant.jpg" alt="Sanal Avukat" 
                                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231a2b4a%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2260%22 text-anchor=%22middle%22 font-size=%2240%22 fill=%22white%22>⚖️</text></svg>'">
                                <span class="online-dot"></span>
                            </div>
                            <div class="header-text">
                                <h4>Hukuk Danışmanı</h4>
                                <span class="status-text" id="status-text">● Çevrimiçi</span>
                            </div>
                        </div>
                        <div class="header-actions">
                            <button class="header-btn" id="theme-toggle" title="Tema Değiştir">
                                <span class="theme-icon">🌙</span>
                            </button>
                            <button class="header-btn chatbot-close" id="chatbot-close" title="Kapat">✕</button>
                        </div>
                    </header>

                    <!-- Messages Container -->
                    <div class="chatbot-messages" id="chatbot-messages">
                        <!-- Welcome Message -->
                        <div class="welcome-section">
                            <div class="welcome-icon">⚖️</div>
                            <h3>Hoş Geldiniz!</h3>
                            <p>Yılmaz Hukuk Bürosu'na hoş geldiniz. Size nasıl yardımcı olabilirim?</p>
                        </div>
                    </div>

                    <!-- Typing Indicator -->
                    <div class="typing-indicator" id="typing-indicator">
                        <span class="typing-text">Yanıt hazırlanıyor</span>
                        <div class="typing-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="quick-actions" id="quick-actions">
                        <button data-intent="is_hukuku">💼 İş Hukuku</button>
                        <button data-intent="aile_hukuku">💔 Aile Hukuku</button>
                        <button data-intent="ceza_hukuku">⚖️ Ceza Hukuku</button>
                        <button data-intent="randevu">📅 Randevu</button>
                    </div>

                    <!-- Suggestions -->
                    <div class="chatbot-suggestions" id="chatbot-suggestions"></div>

                    <!-- Input Area -->
                    <div class="chatbot-input-area">
                        <button id="voice-btn" class="input-btn voice-btn" title="Sesli konuş">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                                <line x1="12" y1="19" x2="12" y2="23"/>
                                <line x1="8" y1="23" x2="16" y2="23"/>
                            </svg>
                        </button>
                        <input type="text" id="chatbot-input" placeholder="Hukuki sorunuzu yazın..." autocomplete="off">
                        <button id="chatbot-send" class="input-btn send-btn" title="Gönder">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    </div>
                </main>
            </div>
        `;
        document.body.appendChild(widget);

        // Render category tree
        this.renderCategoryTree();
    }

    renderCategoryTree() {
        const container = document.getElementById('category-tree');
        if (!container || !this.engine.isLoaded) return;

        const categories = this.engine.getCategoryTree();

        container.innerHTML = categories.map(cat => `
            <div class="category-item" data-category="${cat.id}">
                <div class="category-header">
                    <span class="category-label">${cat.label}</span>
                    <span class="category-arrow">▸</span>
                </div>
                <div class="category-children">
                    ${cat.children.map(child => `
                        <button class="subcategory-btn" data-category="${cat.id}" data-subcategory="${child.id}">
                            ${child.icon} ${child.label}
                        </button>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // ═══════════════════════════════════════════════════════════
    // EVENT LISTENERS
    // ═══════════════════════════════════════════════════════════

    attachEventListeners() {
        // Toggle chat
        document.getElementById('chatbot-toggle').addEventListener('click', () => this.toggleChat());
        document.getElementById('chatbot-close').addEventListener('click', () => this.closeChat());
        document.getElementById('chatbot-overlay')?.addEventListener('click', () => this.closeChat());

        // Sidebar toggle
        document.getElementById('sidebar-toggle')?.addEventListener('click', () => this.toggleSidebar());
        document.getElementById('menu-toggle')?.addEventListener('click', () => this.toggleSidebar());

        // Theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());

        // Send message
        document.getElementById('chatbot-send').addEventListener('click', () => this.sendMessage());
        document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); this.sendMessage(); }
        });

        // Voice
        document.getElementById('voice-btn')?.addEventListener('click', () => this.toggleVoice());

        // Dynamic clicks (delegation)
        document.getElementById('chatbot-messages').addEventListener('click', (e) => this.handleMessageClicks(e));
        document.getElementById('chatbot-suggestions').addEventListener('click', (e) => this.handleSuggestionClicks(e));
        document.getElementById('quick-actions').addEventListener('click', (e) => this.handleQuickActionClicks(e));
        document.getElementById('category-tree')?.addEventListener('click', (e) => this.handleCategoryClicks(e));

        // Sidebar actions
        document.querySelector('.sidebar-footer')?.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]');
            if (action) this.handleSidebarAction(action.dataset.action);
        });
    }

    handleMessageClicks(e) {
        // Action buttons in cards
        const actionBtn = e.target.closest('.action-btn');
        if (actionBtn) {
            if (actionBtn.dataset.url) {
                window.location.href = actionBtn.dataset.url;
            }
            return;
        }

        // Card option buttons
        const optionBtn = e.target.closest('.card-option-btn');
        if (optionBtn) {
            this.sendUserMessage(optionBtn.textContent.trim());
            return;
        }

        // Calculator submit
        const calcBtn = e.target.closest('.calc-submit');
        if (calcBtn) {
            this.handleCalculatorSubmit(e);
        }
    }

    handleSuggestionClicks(e) {
        const chip = e.target.closest('.suggestion-chip');
        if (chip) {
            this.sendUserMessage(chip.dataset.message || chip.textContent);
        }
    }

    handleQuickActionClicks(e) {
        const btn = e.target.closest('button[data-intent]');
        if (btn) {
            const intent = btn.dataset.intent;
            this.sendUserMessage(intent.replace('_', ' '));
            this.hideQuickActions();
        }
    }

    handleCategoryClicks(e) {
        // Category header (accordion toggle)
        const header = e.target.closest('.category-header');
        if (header) {
            const item = header.closest('.category-item');
            item.classList.toggle('expanded');
            return;
        }

        // Subcategory button
        const subBtn = e.target.closest('.subcategory-btn');
        if (subBtn) {
            const catId = subBtn.dataset.category;
            const subId = subBtn.dataset.subcategory;
            this.navigateToCategory(catId, subId);
        }
    }

    async navigateToCategory(categoryId, subCategoryId) {
        const response = this.engine.navigateToCategory(categoryId, subCategoryId);
        this.renderResponse(response);

        // Mobile: close sidebar after selection
        if (this.isMobile()) {
            this.closeSidebar();
        }
    }

    handleSidebarAction(action) {
        if (action === 'contact') {
            this.sendUserMessage('iletişim bilgileri');
        }
    }

    // ═══════════════════════════════════════════════════════════
    // MESSAGING
    // ═══════════════════════════════════════════════════════════

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        if (!message) return;

        input.value = '';
        await this.sendUserMessage(message);
    }

    async sendUserMessage(message) {
        // Add user message to chat
        this.addMessage(message, 'user');
        this.hideSuggestions();
        this.hideQuickActions();

        // Show typing
        this.setTyping(true);

        try {
            const response = await this.engine.processMessage(message);
            await this.delay(600 + Math.random() * 400);

            this.setTyping(false);
            this.renderResponse(response);
        } catch (error) {
            console.error('Message processing error:', error);
            this.setTyping(false);
            this.addMessage("Bir hata oluştu. Lütfen tekrar deneyin.", 'bot', 'error');
        }
    }

    renderResponse(response) {
        // Hide welcome section after first interaction
        const welcome = document.querySelector('.welcome-section');
        if (welcome) welcome.style.display = 'none';

        // Render based on template type
        if (response.template) {
            switch (response.template.type) {
                case 'info_card':
                    this.renderInfoCard(response);
                    break;
                case 'faq_card':
                    this.renderFAQCard(response);
                    break;
                case 'faq_list':
                    this.renderFAQList(response);
                    break;
                case 'calculator':
                    this.renderCalculator(response);
                    break;
                case 'lawyer_list':
                    this.renderLawyerList(response);
                    break;
                case 'category_overview':
                    this.renderCategoryOverview(response);
                    break;
                default:
                    this.addMessage(response.message, 'bot');
            }
        } else {
            this.addMessage(response.message, 'bot');
        }

        // Show suggestions
        if (response.suggestions && response.suggestions.length > 0) {
            this.showSuggestions(response.suggestions);
        }

        // Show recommended lawyer if available
        if (response.recommendedLawyer) {
            setTimeout(() => this.renderLawyerCard(response.recommendedLawyer), 300);
        }
    }

    addMessage(text, sender, type = '') {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = `chat-message ${sender}-message ${type} message-enter`;

        const time = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

        div.innerHTML = `
            <div class="message-bubble">
                <div class="message-text">${this.formatMessageText(text)}</div>
                <span class="message-time">${time}</span>
            </div>
        `;

        container.appendChild(div);
        this.scrollToBottom();

        // Trigger animation
        requestAnimationFrame(() => div.classList.add('visible'));
    }

    formatMessageText(text) {
        // Convert **bold** to <strong>
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert URLs to links
        text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
        return text;
    }

    // ═══════════════════════════════════════════════════════════
    // RICH CARDS
    // ═══════════════════════════════════════════════════════════

    renderInfoCard(response) {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = 'chat-message bot-message message-enter';

        const tmpl = response.template;
        let html = `
            <div class="rich-card info-card">
                <div class="card-header">
                    <span class="card-icon">${tmpl.icon || '📋'}</span>
                    <span class="card-title">${tmpl.title}</span>
                </div>
                ${response.message ? `<div class="card-body">${response.message}</div>` : ''}
        `;

        if (tmpl.bullets && tmpl.bullets.length) {
            html += '<ul class="card-list">';
            tmpl.bullets.forEach(b => html += `<li>${b}</li>`);
            html += '</ul>';
        }

        if (tmpl.actions && tmpl.actions.length) {
            html += '<div class="card-actions">';
            tmpl.actions.forEach(a => {
                if (a.type === 'redirect') {
                    html += `<a href="${a.url}" class="action-btn primary">${a.label}</a>`;
                } else if (a.type === 'tel') {
                    html += `<a href="tel:${a.number}" class="action-btn call">${a.label}</a>`;
                } else if (a.type === 'modal') {
                    html += `<button class="action-btn secondary" data-action="${a.action}">${a.label}</button>`;
                }
            });
            html += '</div>';
        }

        html += '</div>';
        div.innerHTML = html;
        container.appendChild(div);
        this.scrollToBottom();
        requestAnimationFrame(() => div.classList.add('visible'));
    }

    renderFAQCard(response) {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = 'chat-message bot-message message-enter';

        div.innerHTML = `
            <div class="rich-card faq-card">
                <div class="faq-question">
                    <span class="faq-icon">❓</span>
                    <span>${response.template.question}</span>
                </div>
                <div class="faq-answer">${response.template.answer}</div>
            </div>
        `;

        container.appendChild(div);
        this.scrollToBottom();
        requestAnimationFrame(() => div.classList.add('visible'));
    }

    renderFAQList(response) {
        const container = document.getElementById('chatbot-messages');
        const tmpl = response.template;

        // First add the message
        this.addMessage(response.message, 'bot');

        // If there are FAQs, render them
        if (tmpl.faqs && tmpl.faqs.length > 0) {
            const div = document.createElement('div');
            div.className = 'chat-message bot-message message-enter';

            div.innerHTML = `
                <div class="rich-card info-card">
                    <div class="card-header">
                        <span class="card-icon">📚</span>
                        <span class="card-title">${tmpl.title} - Sık Sorulan Sorular</span>
                    </div>
                    ${tmpl.faqs.map(faq => `
                        <div class="faq-item" style="padding: 12px 16px; border-bottom: 1px solid var(--cb-border-light);">
                            <div class="faq-question" style="font-weight: 600; margin-bottom: 6px; color: var(--cb-text);">
                                ❓ ${faq.question}
                            </div>
                            <div class="faq-answer" style="font-size: 13px; color: var(--cb-text-secondary); line-height: 1.5;">
                                ${faq.answer}
                            </div>
                        </div>
                    `).join('')}
                    <div class="card-actions">
                        <button class="action-btn" data-url="contact.html">📅 Randevu Al</button>
                        <button class="action-btn call" onclick="window.location.href='tel:02129876543'">📞 Hemen Ara</button>
                    </div>
                </div>
            `;

            container.appendChild(div);
            this.scrollToBottom();
            requestAnimationFrame(() => div.classList.add('visible'));
        } else {
            // No FAQs, show generic info
            const div = document.createElement('div');
            div.className = 'chat-message bot-message message-enter';

            div.innerHTML = `
                <div class="rich-card info-card">
                    <div class="card-header">
                        <span class="card-icon">ℹ️</span>
                        <span class="card-title">${tmpl.title}</span>
                    </div>
                    <p class="card-body">Bu konuda detaylı bilgi almak için avukatlarımızla görüşmenizi öneriyoruz.</p>
                    <div class="card-actions">
                        <button class="action-btn" data-url="contact.html">📅 Randevu Al</button>
                        <button class="action-btn call" onclick="window.location.href='tel:02129876543'">📞 Hemen Ara</button>
                    </div>
                </div>
            `;

            container.appendChild(div);
            this.scrollToBottom();
            requestAnimationFrame(() => div.classList.add('visible'));
        }
    }

    renderCalculator(response) {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = 'chat-message bot-message message-enter';

        const calc = response.template.calculator;
        if (!calc) {
            this.addMessage(response.message, 'bot');
            return;
        }

        let inputsHtml = calc.inputs.map(input => `
            <div class="calc-field">
                <label for="calc-${input.id}">${input.label}</label>
                <input type="${input.type}" id="calc-${input.id}" 
                       ${input.min !== undefined ? `min="${input.min}"` : ''} 
                       ${input.max !== undefined ? `max="${input.max}"` : ''}
                       placeholder="0">
            </div>
        `).join('');

        div.innerHTML = `
            <div class="rich-card calculator-card" data-calc-type="${calc.id}">
                <div class="card-header">
                    <span class="card-icon">🧮</span>
                    <span class="card-title">${calc.title}</span>
                </div>
                <div class="calc-form">
                    ${inputsHtml}
                    <button class="calc-submit">Hesapla</button>
                </div>
                <div class="calc-result" style="display: none;">
                    <div class="result-label">Tahmini Sonuç:</div>
                    <div class="result-value"></div>
                    <div class="result-note">${calc.note || ''}</div>
                </div>
            </div>
        `;

        container.appendChild(div);
        this.scrollToBottom();
        requestAnimationFrame(() => div.classList.add('visible'));
    }

    handleCalculatorSubmit(e) {
        const card = e.target.closest('.calculator-card');
        if (!card) return;

        const type = card.dataset.calcType;
        const resultDiv = card.querySelector('.calc-result');
        const resultValue = card.querySelector('.result-value');

        if (type === 'kidem') {
            const years = parseFloat(card.querySelector('#calc-years')?.value) || 0;
            const months = parseFloat(card.querySelector('#calc-months')?.value) || 0;
            const salary = parseFloat(card.querySelector('#calc-salary')?.value) || 0;

            if (years === 0 && months === 0) {
                resultValue.textContent = 'Lütfen çalışma süresini girin';
                resultDiv.style.display = 'block';
                return;
            }

            const result = this.engine.calculateKidem(years, months, salary);
            resultValue.innerHTML = `<strong>${result.total.toLocaleString('tr-TR')} TL</strong>`;
            if (result.note) {
                card.querySelector('.result-note').textContent = result.note;
            }
        } else if (type === 'nafaka') {
            resultValue.textContent = 'Nafaka miktarı için avukat görüşmesi gereklidir.';
        }

        resultDiv.style.display = 'block';
    }

    renderLawyerCard(lawyer) {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = 'chat-message bot-message message-enter';

        div.innerHTML = `
            <div class="rich-card lawyer-card">
                <div class="lawyer-header">
                    <img class="lawyer-photo" src="${lawyer.image}" alt="${lawyer.name}"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%231a2b4a%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2265%22 text-anchor=%22middle%22 font-size=%2235%22 fill=%22white%22>👨‍⚖️</text></svg>'">
                    <div class="lawyer-info">
                        <h4>${lawyer.name}</h4>
                        <span class="lawyer-title">${lawyer.title}</span>
                        <span class="lawyer-exp">${lawyer.experience} deneyim</span>
                    </div>
                </div>
                <p class="lawyer-bio">${lawyer.bio}</p>
                <div class="card-actions">
                    <a href="${lawyer.page}" class="action-btn primary">Profili Gör</a>
                    <a href="tel:${lawyer.phone.replace(/\s/g, '')}" class="action-btn call">Ara</a>
                </div>
            </div>
        `;

        container.appendChild(div);
        this.scrollToBottom();
        requestAnimationFrame(() => div.classList.add('visible'));
    }

    renderLawyerList(response) {
        const lawyers = this.engine.getAllLawyers();
        if (!lawyers.length) {
            this.addMessage(response.message, 'bot');
            return;
        }

        this.addMessage("İşte deneyimli avukat kadromuz:", 'bot');
        lawyers.forEach((lawyer, i) => {
            setTimeout(() => this.renderLawyerCard(lawyer), i * 200);
        });
    }

    renderCategoryOverview(response) {
        const container = document.getElementById('chatbot-messages');
        const div = document.createElement('div');
        div.className = 'chat-message bot-message message-enter';

        const tmpl = response.template;

        div.innerHTML = `
            <div class="rich-card category-card">
                <div class="card-header">
                    <span class="card-icon">${tmpl.category.label.split(' ')[0]}</span>
                    <span class="card-title">${tmpl.category.label.split(' ').slice(1).join(' ')}</span>
                </div>
                <p class="card-body">${tmpl.category.description}</p>
                <div class="category-buttons">
                    ${tmpl.children.map(child => `
                        <button class="card-option-btn">${child.icon} ${child.label}</button>
                    `).join('')}
                </div>
            </div>
        `;

        container.appendChild(div);
        this.scrollToBottom();
        requestAnimationFrame(() => div.classList.add('visible'));
    }

    // ═══════════════════════════════════════════════════════════
    // SUGGESTIONS & QUICK ACTIONS
    // ═══════════════════════════════════════════════════════════

    showSuggestions(suggestions) {
        const container = document.getElementById('chatbot-suggestions');
        container.innerHTML = '';
        container.style.display = 'flex';

        suggestions.forEach(s => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-chip';
            btn.textContent = s.label;
            btn.dataset.message = s.message;
            container.appendChild(btn);
        });

        this.scrollToBottom();
    }

    hideSuggestions() {
        const container = document.getElementById('chatbot-suggestions');
        container.style.display = 'none';
        container.innerHTML = '';
    }

    hideQuickActions() {
        const container = document.getElementById('quick-actions');
        if (container) container.style.display = 'none';
    }

    // ═══════════════════════════════════════════════════════════
    // UI CONTROLS
    // ═══════════════════════════════════════════════════════════

    toggleChat() {
        this.isOpen = !this.isOpen;
        const win = document.getElementById('chatbot-window');
        const toggle = document.getElementById('chatbot-toggle');

        if (this.isOpen) {
            win.style.display = 'flex';
            toggle.classList.add('active');
            // Prevent body scroll on mobile
            if (this.isMobile()) {
                document.body.classList.add('chatbot-open');
            }
            // Focus input after animation
            setTimeout(() => {
                document.getElementById('chatbot-input')?.focus();
            }, 350);
            // Re-render category tree if needed
            if (!document.querySelector('.category-item')) {
                this.renderCategoryTree();
            }
            // Create backdrop for mobile sidebar
            this.createSidebarBackdrop();

            // Show overlay on mobile
            if (this.isMobile()) {
                document.getElementById('chatbot-overlay').style.display = 'block';
            }
        } else {
            win.style.display = 'none';
            toggle.classList.remove('active');
            document.body.classList.remove('chatbot-open');
            this.closeSidebar();
            this.removeSidebarBackdrop();
            document.getElementById('chatbot-overlay').style.display = 'none';
        }
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbot-window').style.display = 'none';
        document.getElementById('chatbot-toggle').classList.remove('active');
        document.body.classList.remove('chatbot-open');
        this.closeSidebar();
        this.closeSidebar();
        this.removeSidebarBackdrop();
        document.getElementById('chatbot-overlay').style.display = 'none';
    }

    toggleSidebar() {
        const sidebar = document.getElementById('chatbot-sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');

        if (this.isMobile()) {
            // Mobile: overlay style
            if (sidebar.classList.contains('open')) {
                this.closeSidebar();
            } else {
                this.openSidebar();
            }
        } else {
            // Desktop: collapse style
            this.isSidebarOpen = !this.isSidebarOpen;
            const container = document.getElementById('chatbot-container');

            if (this.isSidebarOpen) {
                sidebar.classList.remove('collapsed');
                container.classList.remove('sidebar-closed');
            } else {
                sidebar.classList.add('collapsed');
                container.classList.add('sidebar-closed');
            }
        }
    }

    openSidebar() {
        const sidebar = document.getElementById('chatbot-sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');
        sidebar.classList.add('open');
        sidebar.classList.remove('collapsed');
        if (backdrop) backdrop.classList.add('visible');
    }

    closeSidebar() {
        const sidebar = document.getElementById('chatbot-sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');
        sidebar.classList.remove('open');
        if (this.isMobile()) {
            sidebar.classList.add('collapsed');
        }
        if (backdrop) backdrop.classList.remove('visible');
    }

    createSidebarBackdrop() {
        if (!document.getElementById('sidebar-backdrop')) {
            const backdrop = document.createElement('div');
            backdrop.id = 'sidebar-backdrop';
            backdrop.className = 'sidebar-backdrop';
            backdrop.addEventListener('click', () => this.closeSidebar());
            document.getElementById('chatbot-window')?.appendChild(backdrop);
        }
    }

    removeSidebarBackdrop() {
        const backdrop = document.getElementById('sidebar-backdrop');
        if (backdrop) backdrop.remove();
    }

    isMobile() {
        return window.innerWidth <= 768;
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const container = document.getElementById('chatbot-container');
        const icon = document.querySelector('.theme-icon');

        if (this.isDarkMode) {
            container.classList.add('dark-mode');
            icon.textContent = '☀️';
        } else {
            container.classList.remove('dark-mode');
            icon.textContent = '🌙';
        }

        localStorage.setItem('chatbot-dark-mode', this.isDarkMode);
    }

    checkDarkModePreference() {
        const saved = localStorage.getItem('chatbot-dark-mode');
        if (saved === 'true' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.isDarkMode = true;
            document.getElementById('chatbot-container')?.classList.add('dark-mode');
            const icon = document.querySelector('.theme-icon');
            if (icon) icon.textContent = '☀️';
        }
    }

    setTyping(isTyping) {
        const indicator = document.getElementById('typing-indicator');
        indicator.style.display = isTyping ? 'flex' : 'none';
        if (isTyping) this.scrollToBottom();
    }

    scrollToBottom() {
        const el = document.getElementById('chatbot-messages');
        if (!el) return;

        // Function to perform the scroll
        const scroll = () => {
            // Option 1: Scroll to last element (best for ensuring new message is visible)
            const lastMsg = el.lastElementChild;
            if (lastMsg) {
                lastMsg.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else {
                // Fallback: Scroll container to bottom
                el.scrollTop = el.scrollHeight;
            }
        };

        // 1. Immediate scroll
        el.scrollTop = el.scrollHeight;

        // 2. Next frame (after layout paint)
        requestAnimationFrame(() => {
            scroll();

            // 3. Delayed check (for images/fonts loading or slow reflows)
            setTimeout(() => {
                scroll();
                // 4. Extra safety check
                setTimeout(() => {
                    const isAtBottom = Math.abs((el.scrollHeight - el.scrollTop) - el.clientHeight) < 50;
                    if (!isAtBottom) scroll();
                }, 200);
            }, 100);
        });
    }

    // ═══════════════════════════════════════════════════════════
    // VOICE RECOGNITION
    // ═══════════════════════════════════════════════════════════

    initVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.lang = 'tr-TR';
            this.recognition.interimResults = false;

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('chatbot-input').value = transcript;
                this.setVoiceActive(false);
                this.sendMessage();
            };

            this.recognition.onerror = () => this.setVoiceActive(false);
            this.recognition.onend = () => this.setVoiceActive(false);
        }
    }

    toggleVoice() {
        if (!this.recognition) {
            alert("Tarayıcınız sesli komutu desteklemiyor.");
            return;
        }
        this.setVoiceActive(true);
        this.recognition.start();
    }

    setVoiceActive(isActive) {
        const btn = document.getElementById('voice-btn');
        if (isActive) {
            btn.classList.add('recording');
        } else {
            btn.classList.remove('recording');
        }
    }

    // ═══════════════════════════════════════════════════════════
    // NOTIFICATIONS
    // ═══════════════════════════════════════════════════════════

    showWelcomeNotification() {
        if (this.isOpen || sessionStorage.getItem('chatbot-welcomed')) return;

        const toggle = document.getElementById('chatbot-toggle');
        const badge = toggle.querySelector('.toggle-badge');
        if (badge) {
            badge.textContent = 'Yardım?';
            badge.classList.add('pulse');
            setTimeout(() => badge.classList.remove('pulse'), 3000);
        }

        sessionStorage.setItem('chatbot-welcomed', 'true');
    }

    // ═══════════════════════════════════════════════════════════
    // UTILITIES
    // ═══════════════════════════════════════════════════════════

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize
window.ChatbotUI = ChatbotUI;
if (document.readyState !== 'loading') {
    window.chatbot = new ChatbotUI();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        window.chatbot = new ChatbotUI();
    });
}
