/**
 * chatbot-engine.js (v5.0 - Ultra Smart Legal Chatbot)
 * Features:
 * - Category Tree Navigation
 * - Enhanced NLP with Synonym Expansion
 * - 6 Decision Tree Flows
 * - Calculator Integration
 * - Lawyer Matching
 * - Context Memory
 * - Sentiment Analysis
 */

class SmartLegalChatbot {
    constructor() {
        this.data = null;
        this.isLoaded = false;

        // Conversation Context
        this.context = {
            sessionId: this.generateSessionId(),
            currentFlow: null,
            currentNode: null,
            variables: {},
            history: [],
            userProfile: {
                emotionalState: 'neutral',
                urgencyLevel: 'normal',
                preferredArea: null,
                visitedCategories: []
            }
        };

        // NLP Configuration
        this.threshold = { high: 0.65, medium: 0.4, low: 0.25 };

        // Synonym Map for Turkish Legal Terms
        this.synonymMap = new Map([
            ['işten çıkarıldım', ['kovuldum', 'işimi kaybettim', 'işime son verildi', 'atıldım']],
            ['kıdem', ['kıdem tazminatı', 'kıdem hakkı', 'yıllık tazminat']],
            ['boşanma', ['ayrılmak', 'evliliği bitirmek', 'eşimden ayrılmak']],
            ['nafaka', ['aylık ödeme', 'destek ödemesi', 'çocuk nafakası']],
            ['acil', ['çok acil', 'hemen', 'şimdi', 'ivedi', 'derhal']],
            ['avukat', ['hukukçu', 'vekil', 'savunucu']],
            ['dava', ['mahkeme', 'yargılama', 'hukuki süreç']],
            ['miras', ['veraset', 'kalıtım', 'tereke']],
            ['tapu', ['gayrimenkul', 'emlak', 'taşınmaz']],
            ['şirket', ['firma', 'işletme', 'limited', 'anonim']]
        ]);

        this.init();
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    async init() {
        try {
            // Priority 1: Load from global variable (Local File Support)
            if (typeof CHATBOT_DATA !== 'undefined') {
                this.data = CHATBOT_DATA;
                console.log('📂 Loaded data from local script');
            }
            // Priority 2: Fetch from JSON (Server Support)
            else {
                const response = await fetch('js/chatbot/chatbot-data.json');
                if (!response.ok) throw new Error('Fetch failed');
                this.data = await response.json();
            }

            if (this.data) {
                this.prepareKeywords();
                this.isLoaded = true;
                console.log('🧠 Ultra Smart Legal Chatbot v5.0 Loaded');
                console.log(`📊 ${this.data.intents.length} intents, ${this.data.supported_flows || 6} flows loaded`);
            } else {
                console.error('❌ Failed to load chatbot data');
            }

        } catch (error) {
            console.error('❌ Critical Error initializing Chatbot:', error);
        }
    }

    // Data is now loaded externally via chatbot-data.js 
    // to support local file:// execution without CORS errors

    prepareKeywords() {
        this.data.intents.forEach(intent => {
            intent.keywords = [];
            intent.patterns.forEach(pattern => {
                const words = pattern.toLowerCase().split(/\s+/).filter(w => w.length > 2);
                intent.keywords.push(...words);
                // Add synonyms
                words.forEach(word => {
                    const synonyms = this.getSynonyms(word);
                    intent.keywords.push(...synonyms);
                });
            });
            intent.keywords = [...new Set(intent.keywords)];
        });
    }

    getSynonyms(word) {
        for (const [key, synonyms] of this.synonymMap) {
            if (key.includes(word) || synonyms.some(s => s.includes(word))) {
                return synonyms;
            }
        }
        return [];
    }

    // ═══════════════════════════════════════════════════════════
    // MAIN PROCESSING
    // ═══════════════════════════════════════════════════════════

    async processMessage(userMessage) {
        if (!this.isLoaded) {
            return { message: "Sistem hazırlanıyor, lütfen bekleyin...", isError: true };
        }

        // Store in history
        this.context.history.push({ role: 'user', message: userMessage, time: new Date() });

        let normalizedMsg = this.normalizeText(userMessage);

        // 0. Apply Typo Correction
        const corrected = this.correctTypos(normalizedMsg);
        if (corrected.corrected) {
            normalizedMsg = corrected.text;
        }

        // 1. Check Active Flow (Decision Tree)
        if (this.context.currentFlow) {
            return this.handleFlowStep(userMessage);
        }

        // 2. Check for Follow-up Questions (Context Aware)
        const followUp = this.detectFollowUpQuestion(normalizedMsg);
        if (followUp) {
            return this.handleFollowUpQuestion(followUp);
        }

        // 3. Sentiment & Urgency Analysis
        const sentiment = this.analyzeSentiment(normalizedMsg);
        this.context.userProfile.emotionalState = sentiment;

        // 4. Check for urgent patterns first
        if (sentiment === 'urgent') {
            const urgentIntent = this.data.intents.find(i => i.tag === 'acil_durum');
            if (urgentIntent) {
                return this.formatResponse(urgentIntent, sentiment);
            }
        }

        // 5. Intent Matching
        const match = this.findBestMatch(normalizedMsg);

        // 6. Process matched intent
        if (match && match.score > this.threshold.medium) {
            // Track topic for context
            this.context.lastTopic = match.intent.tag;

            // Check if intent triggers a flow
            if (match.intent.flow_trigger && match.score > this.threshold.high) {
                return this.startFlow(match.intent.flow_trigger);
            }
            return this.formatResponse(match.intent, sentiment);
        }

        // 7. Try FAQ search
        const faqMatch = this.searchFAQ(normalizedMsg);
        if (faqMatch) {
            return this.formatFAQResponse(faqMatch);
        }

        // 8. Fallback with predictive suggestions
        return this.getFallbackResponse(sentiment);
    }

    // ═══════════════════════════════════════════════════════════
    // TYPO CORRECTION
    // ═══════════════════════════════════════════════════════════

    correctTypos(text) {
        // Turkish phonetic map
        const phoneticMap = {
            'ş': 's', 'ı': 'i', 'ö': 'o', 'ü': 'u', 'ç': 'c', 'ğ': 'g'
        };

        // Common typo corrections
        const typoCorrections = {
            'bosanma': 'boşanma',
            'bosama': 'boşanma',
            'bşoanma': 'boşanma',
            'avukta': 'avukat',
            'avkat': 'avukat',
            'tazmiant': 'tazminat',
            'kidem': 'kıdem',
            'nafka': 'nafaka',
            'mahkmee': 'mahkeme',
            'dava': 'dava',
            'veklaet': 'vekalet',
            'icra': 'icra',
            'veraest': 'veraset',
            'miras': 'miras',
            'sirket': 'şirket',
            'sozslesme': 'sözleşme',
            'is hukuku': 'iş hukuku',
            'calisma': 'çalışma',
            'isci': 'işçi',
            'işten cikarilma': 'işten çıkarılma',
            'ise iade': 'işe iade'
        };

        let corrected = false;
        let result = text;

        // Apply direct corrections
        for (const [typo, correct] of Object.entries(typoCorrections)) {
            if (text.includes(typo)) {
                result = result.replace(new RegExp(typo, 'gi'), correct);
                corrected = true;
            }
        }

        // If no direct match, try phonetic normalization for matching
        if (!corrected) {
            // Normalize text by replacing Turkish chars
            let normalized = text;
            for (const [turk, latin] of Object.entries(phoneticMap)) {
                normalized = normalized.replace(new RegExp(turk, 'g'), latin);
            }

            // Check if normalized version matches any correction
            for (const [typo, correct] of Object.entries(typoCorrections)) {
                let normalizedTypo = typo;
                for (const [turk, latin] of Object.entries(phoneticMap)) {
                    normalizedTypo = normalizedTypo.replace(new RegExp(turk, 'g'), latin);
                }
                if (normalized.includes(normalizedTypo)) {
                    result = correct;
                    corrected = true;
                    break;
                }
            }
        }

        return { text: result, corrected };
    }

    // ═══════════════════════════════════════════════════════════
    // FOLLOW-UP QUESTION DETECTION
    // ═══════════════════════════════════════════════════════════

    detectFollowUpQuestion(text) {
        const followUpPatterns = {
            how: ['nasıl', 'ne şekilde', 'hangi yolla', 'ne yapmalıyım', 'nasıl yaparım'],
            when: ['ne zaman', 'süre', 'kaç gün', 'ne kadar sürer'],
            cost: ['ne kadar', 'ücret', 'fiyat', 'masraf', 'maliyet'],
            who: ['kim', 'hangi avukat', 'kime başvuracağım'],
            what_next: ['peki', 'sonra', 'sonraki adım', 'şimdi ne yapayım'],
            more_info: ['daha fazla', 'detay', 'ayrıntı', 'açıklar mısın']
        };

        for (const [type, patterns] of Object.entries(followUpPatterns)) {
            if (patterns.some(p => text.includes(p))) {
                return { type, text };
            }
        }

        return null;
    }

    handleFollowUpQuestion(followUp) {
        const lastTopic = this.context.lastTopic;
        const lastBotMessage = this.context.history.filter(h => h.role === 'bot').slice(-1)[0];

        // Contextual responses based on follow-up type
        const responses = {
            how: {
                is_hukuku: "İş davası açmak için: 1) İş mahkemesine dilekçe verin, 2) SGK kayıtlarını hazırlayın, 3) Tanık listesi oluşturun. Avukat desteği almanızı öneririz.",
                aile_hukuku: "Boşanma süreci: 1) Anlaşmalı ise protokol hazırlanır, 2) Dilekçe ile mahkemeye başvurulur, 3) Duruşma günü beklenir.",
                ceza_hukuku: "Ceza davasında: 1) Avukat tutun, 2) Delilleri toplayın, 3) İfade vermeden önce avukatınızla görüşün.",
                default: "Bu konuda detaylı yardım almak için bir avukatımızla görüşmenizi öneririm."
            },
            cost: {
                is_hukuku: "İş davası ücretleri dava türüne göre değişir. Kıdem davası için genellikle %10-15 vekalet ücreti alınır. İlk görüşme ücretsizdir.",
                aile_hukuku: "Boşanma davası ücretleri: Anlaşmalı 5.000-15.000 TL, çekişmeli 15.000-50.000 TL arasında değişir.",
                default: "Ücretlendirme dava türüne göre değişir. Ücretsiz ön görüşme için bizi arayın: 0212 987 65 43"
            },
            when: {
                is_hukuku: "İş davaları genellikle 6-12 ay sürer. İşe iade davası 2 hafta içinde açılmalıdır!",
                aile_hukuku: "Anlaşmalı boşanma 1-2 ay, çekişmeli boşanma 1-3 yıl sürebilir.",
                default: "Süre dava türüne göre değişir. Detaylı bilgi için avukatlarımızla görüşün."
            },
            who: {
                is_hukuku: "İş hukuku davalarınız için Av. Mehmet Yılmaz'ı öneriyoruz. 25+ yıl deneyimli.",
                aile_hukuku: "Aile hukuku konularında Av. Ayşe Kara size yardımcı olabilir.",
                ceza_hukuku: "Ceza davalarında Av. Emre Demir ile görüşmenizi öneririz.",
                default: "Size en uygun avukatı belirlemek için konunuzu biraz daha açar mısınız?"
            },
            what_next: {
                default: "Bir sonraki adım olarak ücretsiz ön görüşme için randevu almanızı öneririm."
            },
            more_info: {
                default: "Bu konuda daha detaylı bilgi almak ister misiniz? Hangi yönü merak ediyorsunuz?"
            }
        };

        const typeResponses = responses[followUp.type] || responses.more_info;
        const message = typeResponses[lastTopic] || typeResponses.default;

        return {
            message: message,
            suggestions: [
                { label: '📅 Randevu Al', message: 'randevu almak istiyorum' },
                { label: '📞 Hemen Ara', message: 'telefon numarası' },
                { label: '🏠 Ana Menü', message: 'merhaba' }
            ],
            isContextual: true
        };
    }

    // ═══════════════════════════════════════════════════════════
    // PREDICTIVE SUGGESTIONS
    // ═══════════════════════════════════════════════════════════

    getPredictiveSuggestions() {
        const suggestions = [];
        const history = this.context.history;
        const messageCount = history.filter(h => h.role === 'user').length;

        // Based on time of day
        const hour = new Date().getHours();
        if (hour >= 9 && hour <= 18) {
            // Business hours - work law more common
            suggestions.push({ label: '💼 İş Hukuku', message: 'iş hukuku' });
        }

        // Based on visited categories
        const visited = this.context.userProfile.visitedCategories;
        if (visited.length > 0 && !visited.includes('randevu')) {
            suggestions.push({ label: '📅 Randevu Al', message: 'randevu' });
        }

        // Based on session length
        if (messageCount >= 3 && !suggestions.some(s => s.message === 'randevu')) {
            suggestions.push({ label: '📞 Uzman ile Görüş', message: 'avukatla görüşmek istiyorum' });
        }

        // Based on last topic
        const lastTopic = this.context.lastTopic;
        if (lastTopic) {
            const relatedSuggestions = {
                'is_hukuku': [{ label: '💰 Kıdem Hesapla', message: 'kıdem tazminatı hesapla' }],
                'aile_hukuku': [{ label: '💵 Nafaka Hesapla', message: 'nafaka hesapla' }],
                'ceza_hukuku': [{ label: '🚨 Acil Avukat', message: 'acil yardım' }]
            };
            if (relatedSuggestions[lastTopic]) {
                suggestions.push(...relatedSuggestions[lastTopic]);
            }
        }

        return suggestions.slice(0, 4);
    }

    // ═══════════════════════════════════════════════════════════
    // CATEGORY TREE NAVIGATION
    // ═══════════════════════════════════════════════════════════

    getCategoryTree() {
        if (!this.data || !this.data.categoryTree) return [];
        return Object.values(this.data.categoryTree);
    }

    navigateToCategory(categoryId, subCategoryId = null) {
        const category = this.data.categoryTree[categoryId];
        if (!category) {
            return { message: "Kategori bulunamadı.", isError: true };
        }

        // Track visit
        if (!this.context.userProfile.visitedCategories.includes(categoryId)) {
            this.context.userProfile.visitedCategories.push(categoryId);
        }
        this.context.userProfile.preferredArea = categoryId;

        if (subCategoryId) {
            // Navigate to subcategory FAQ
            const subCat = category.children.find(c => c.id === subCategoryId);
            if (subCat) {
                const relevantFaqs = Object.values(this.data.faqs).filter(f =>
                    f.category === categoryId && f.keywords.some(k => subCategoryId.includes(k))
                );
                return {
                    message: `${subCat.icon} **${subCat.label}** hakkında bilgi:`,
                    template: {
                        type: 'faq_list',
                        title: subCat.label,
                        faqs: relevantFaqs.slice(0, 3),
                        category: categoryId
                    },
                    suggestions: [
                        { label: '📅 Randevu Al', message: 'randevu almak istiyorum' },
                        { label: '📞 Hemen Ara', message: 'telefon numarası' }
                    ]
                };
            }
        }

        // Check for corresponding intent
        const intent = this.data.intents.find(i => i.tag === categoryId);
        if (intent && intent.flow_trigger) {
            return this.startFlow(intent.flow_trigger);
        }

        // Return category overview
        return {
            message: `${category.label} alanında size nasıl yardımcı olabilirim?`,
            template: {
                type: 'category_overview',
                category: category,
                children: category.children
            },
            suggestions: category.children.map(c => ({
                label: `${c.icon} ${c.label}`,
                message: c.label.toLowerCase()
            })).slice(0, 4)
        };
    }

    // ═══════════════════════════════════════════════════════════
    // DECISION TREE FLOWS
    // ═══════════════════════════════════════════════════════════

    startFlow(flowId) {
        const flow = this.data.flows[flowId];
        if (!flow) {
            console.warn(`Flow not found: ${flowId}`);
            return this.getFallbackResponse('neutral');
        }

        this.context.currentFlow = flowId;
        this.context.currentNode = flow.start_node;
        this.context.variables = {};

        console.log(`🚀 Starting flow: ${flowId}`);
        return this.renderFlowNode(flow.nodes[flow.start_node]);
    }

    handleFlowStep(userInput) {
        const flow = this.data.flows[this.context.currentFlow];
        if (!flow) {
            this.resetFlow();
            return this.getFallbackResponse('neutral');
        }

        const currentNode = flow.nodes[this.context.currentNode];
        if (!currentNode) {
            this.resetFlow();
            return this.getFallbackResponse('neutral');
        }

        // 1. Capture Input (if node expects it)
        if (currentNode.capture_variable) {
            this.context.variables[currentNode.capture_variable] = userInput;
        }

        // 2. Determine Next Node
        let nextNodeId = null;

        if (currentNode.options) {
            const normalizedInput = this.normalizeText(userInput);

            // Match by option label or keywords
            const selectedOption = currentNode.options.find(opt => {
                const normalizedLabel = this.normalizeText(opt.label);
                if (normalizedLabel === normalizedInput) return true;
                if (normalizedInput.includes(normalizedLabel)) return true;
                if (opt.keywords && opt.keywords.some(k => normalizedInput.includes(k.toLowerCase()))) return true;
                // Fuzzy match
                if (this.calculateSimilarity(normalizedInput, normalizedLabel) > 0.6) return true;
                return false;
            });

            if (selectedOption) {
                nextNodeId = selectedOption.next;
            } else {
                // Invalid input - show options again
                return {
                    message: "Lütfen yukarıdaki seçeneklerden birini seçin:",
                    suggestions: currentNode.options.map(opt => ({ label: opt.label, message: opt.label }))
                };
            }
        } else if (currentNode.next) {
            nextNodeId = currentNode.next;
        }

        // 3. Transition to next node
        if (nextNodeId) {
            if (nextNodeId === 'END') {
                const endMessage = this.renderEndMessage();
                this.resetFlow();
                return endMessage;
            }

            const nextNode = flow.nodes[nextNodeId];
            if (!nextNode) {
                this.resetFlow();
                return this.getFallbackResponse('neutral');
            }

            this.context.currentNode = nextNodeId;
            return this.renderFlowNode(nextNode);
        }

        this.resetFlow();
        return this.getFallbackResponse('neutral');
    }

    renderFlowNode(node) {
        // Replace variables in message
        let message = node.message;
        for (const [key, value] of Object.entries(this.context.variables)) {
            message = message.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
        }

        const response = {
            message: message,
            suggestions: node.options ? node.options.map(o => ({ label: o.label, message: o.label })) : [],
            template: node.template || null,
            input_type: node.input_type || 'text',
            isFlow: true
        };

        // Add template for calculator if specified
        if (node.template && node.template.type === 'calculator') {
            response.template = {
                type: 'calculator',
                calculator: this.data.calculators[node.template.calculator_id]
            };
        }

        return response;
    }

    renderEndMessage() {
        return {
            message: "Görüşmemiz için teşekkür ederim! 🙏 Başka bir konuda yardımcı olabilir miyim?",
            suggestions: [
                { label: '📅 Randevu Al', message: 'randevu al' },
                { label: '📞 Bizi Arayın', message: 'iletişim' },
                { label: '🏠 Ana Menü', message: 'merhaba' }
            ],
            isFlowEnd: true
        };
    }

    resetFlow() {
        this.context.currentFlow = null;
        this.context.currentNode = null;
        this.context.variables = {};
    }

    // ═══════════════════════════════════════════════════════════
    // FAQ SEARCH
    // ═══════════════════════════════════════════════════════════

    searchFAQ(query) {
        if (!this.data.faqs) return null;

        const faqs = Object.values(this.data.faqs);
        let bestMatch = null;
        let bestScore = 0;

        for (const faq of faqs) {
            const questionScore = this.calculateSimilarity(query, this.normalizeText(faq.question));
            const keywordScore = faq.keywords ?
                faq.keywords.filter(k => query.includes(k.toLowerCase())).length / faq.keywords.length : 0;

            const totalScore = (questionScore * 0.7) + (keywordScore * 0.3);

            if (totalScore > bestScore && totalScore > 0.3) {
                bestScore = totalScore;
                bestMatch = faq;
            }
        }

        return bestMatch;
    }

    formatFAQResponse(faq) {
        return {
            message: faq.answer,
            template: {
                type: 'faq_card',
                question: faq.question,
                answer: faq.answer,
                category: faq.category
            },
            suggestions: [
                { label: '📚 Daha Fazla Soru', message: `${faq.category} hakkında` },
                { label: '📅 Randevu Al', message: 'randevu almak istiyorum' }
            ]
        };
    }

    // ═══════════════════════════════════════════════════════════
    // CALCULATOR
    // ═══════════════════════════════════════════════════════════

    getCalculator(type) {
        return this.data.calculators ? this.data.calculators[type] : null;
    }

    calculateKidem(years, months, salary) {
        const totalYears = years + (months / 12);
        const maxKidem = 35058.58; // 2024 ceiling
        const perYear = Math.min(salary, maxKidem);
        const total = totalYears * perYear;
        return {
            total: Math.round(total),
            perYear: Math.round(perYear),
            years: totalYears,
            note: salary > maxKidem ? `Kıdem tavanı uygulandı (${maxKidem.toLocaleString('tr-TR')} TL)` : null
        };
    }

    // ═══════════════════════════════════════════════════════════
    // LAWYER MATCHING
    // ═══════════════════════════════════════════════════════════

    getRecommendedLawyer(area) {
        if (!this.data.lawyers) return null;

        const lawyers = Object.values(this.data.lawyers);
        const matching = lawyers.filter(l => l.expertise && l.expertise.includes(area));

        return matching.length > 0 ? matching[0] : lawyers[0];
    }

    getAllLawyers() {
        return this.data.lawyers ? Object.values(this.data.lawyers) : [];
    }

    // ═══════════════════════════════════════════════════════════
    // SENTIMENT ANALYSIS
    // ═══════════════════════════════════════════════════════════

    analyzeSentiment(text) {
        const urgentPatterns = ['acil', 'hemen', 'çok acil', 'yardım', 'tutuklama', 'tutuklandım', 'polis', 'gözaltı', 'tehdit', 'ölüm'];
        const negativePatterns = ['kötü', 'berbat', 'dolandırıldım', 'şikayet', 'mağdur', 'rezalet', 'korkuyorum', 'tedirginim'];
        const positivePatterns = ['teşekkür', 'sağol', 'güzel', 'harika', 'memnun', 'başarılı', 'mutlu'];

        if (urgentPatterns.some(p => text.includes(p))) return 'urgent';
        if (negativePatterns.some(p => text.includes(p))) return 'negative';
        if (positivePatterns.some(p => text.includes(p))) return 'positive';
        return 'neutral';
    }

    // ═══════════════════════════════════════════════════════════
    // INTENT MATCHING
    // ═══════════════════════════════════════════════════════════

    findBestMatch(text) {
        let bestScore = 0;
        let bestIntent = null;

        for (const intent of this.data.intents) {
            let maxPatternScore = 0;

            // Check each pattern
            for (const pattern of intent.patterns) {
                const normalizedPattern = this.normalizeText(pattern);

                // Exact match
                if (text === normalizedPattern) {
                    return { intent, score: 1.0 };
                }

                // Contains check
                if (text.includes(normalizedPattern) || normalizedPattern.includes(text)) {
                    const containsScore = Math.min(normalizedPattern.length, text.length) / Math.max(normalizedPattern.length, text.length);
                    if (containsScore > maxPatternScore) maxPatternScore = Math.max(containsScore, 0.7);
                }

                // Similarity check
                const similarity = this.calculateSimilarity(text, normalizedPattern);
                if (similarity > maxPatternScore) maxPatternScore = similarity;
            }

            // Keyword bonus
            if (intent.keywords) {
                const matchedKeywords = intent.keywords.filter(k => text.includes(k.toLowerCase()));
                if (matchedKeywords.length > 0) {
                    maxPatternScore += 0.1 * (matchedKeywords.length / intent.keywords.length);
                }
            }

            if (maxPatternScore > bestScore) {
                bestScore = maxPatternScore;
                bestIntent = intent;
            }
        }

        return bestIntent ? { intent: bestIntent, score: Math.min(bestScore, 1) } : null;
    }

    // ═══════════════════════════════════════════════════════════
    // RESPONSE FORMATTING
    // ═══════════════════════════════════════════════════════════

    formatResponse(intent, sentiment) {
        let responseText = intent.responses[Math.floor(Math.random() * intent.responses.length)];

        // Adjust for sentiment
        if (sentiment === 'urgent' && intent.responses_urgent) {
            responseText = intent.responses_urgent[0];
        } else if (sentiment === 'negative' && intent.responses_empathy) {
            responseText = intent.responses_empathy[0];
        }

        const response = {
            message: responseText,
            template: intent.template || null,
            suggestions: this.getSuggestions(intent),
            action: intent.action || null,
            redirect: intent.redirect || null,
            isError: false
        };

        // Add lawyer recommendation for area-specific intents
        if (['is_hukuku', 'aile_hukuku', 'ceza_hukuku', 'miras_hukuku', 'gayrimenkul', 'ticaret_hukuku'].includes(intent.tag)) {
            const lawyer = this.getRecommendedLawyer(intent.tag);
            if (lawyer) {
                response.recommendedLawyer = lawyer;
            }
        }

        // Store in history
        this.context.history.push({ role: 'bot', message: responseText, intent: intent.tag, time: new Date() });

        return response;
    }

    getSuggestions(intent) {
        const suggestions = [];

        // Add related intents
        if (intent.related) {
            for (const tag of intent.related.slice(0, 3)) {
                const relatedIntent = this.data.intents.find(i => i.tag === tag);
                if (relatedIntent && relatedIntent.label) {
                    suggestions.push({ label: relatedIntent.label, message: relatedIntent.patterns[0] });
                }
            }
        }

        // Always add randevu option if not already present
        if (!suggestions.some(s => s.message && s.message.includes('randevu'))) {
            suggestions.push({ label: '📅 Randevu Al', message: 'randevu al' });
        }

        return suggestions.slice(0, 4);
    }

    getFallbackResponse(sentiment) {
        if (sentiment === 'urgent') {
            return {
                message: "🚨 Çok acil bir durum olduğunu anlıyorum. Lütfen hemen 0212 987 65 43 numarasından bize ulaşın!",
                template: {
                    type: 'info_card',
                    title: 'ACİL YARDIM HATTI',
                    icon: '🚨',
                    actions: [{ type: 'tel', label: 'HEMEN ARA', number: '02129876543' }]
                }
            };
        }

        const fallbacks = this.data.fallback_responses || [
            "Bunu tam anlayamadım. Hangi hukuk alanıyla ilgili yardım istersiniz?"
        ];

        return {
            message: fallbacks[Math.floor(Math.random() * fallbacks.length)],
            suggestions: this.data.quickActions ?
                this.data.quickActions.slice(0, 4).map(qa => ({ label: qa.label, message: qa.intent })) : []
        };
    }

    // ═══════════════════════════════════════════════════════════
    // UTILITIES
    // ═══════════════════════════════════════════════════════════

    normalizeText(text) {
        return text.toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '')
            .replace(/\s{2,}/g, ' ')
            .trim();
    }

    calculateSimilarity(s1, s2) {
        if (!s1 || !s2) return 0;
        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;
        if (longer.length === 0) return 1.0;
        return (longer.length - this.levenshteinDistance(longer, shorter)) / parseFloat(longer.length);
    }

    levenshteinDistance(s1, s2) {
        const costs = [];
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0) {
                    costs[j] = j;
                } else if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    }

    // Get quick actions for UI
    getQuickActions() {
        return this.data.quickActions || [];
    }
}

// Export
window.ChatbotEngine = SmartLegalChatbot;
window.SmartLegalChatbot = SmartLegalChatbot;
