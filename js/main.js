/**
 * ==========================================
 * Summed Medtech Regulatory Tracker - Main Script
 * ==========================================
 *
 * This file handles all interactive functionality.
 * Data is loaded from standards-data.js
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
        storageKeys: {
            language: 'summed_medtech_lang',
            tab: 'summed_medtech_tab',
            expandables: 'summed_medtech_expandables'
        },
        animations: {
            duration: 300
        }
    };

    // ============================================
    // LANGUAGE TOGGLE
    // ============================================
    function initLanguageToggle() {
        const langBtns = document.querySelectorAll('.lang-btn');
        const body = document.body;

        // Load saved language preference
        const savedLang = localStorage.getItem(CONFIG.storageKeys.language);
        if (savedLang) {
            setLanguage(savedLang);
            updateLangButtons(savedLang);
        }

        // Add click handlers
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
                updateLangButtons(lang);
                localStorage.setItem(CONFIG.storageKeys.language, lang);
            });
        });

        function setLanguage(lang) {
            body.className = lang === 'cn' ? 'lang-cn' : 'lang-en';
        }

        function updateLangButtons(lang) {
            langBtns.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        }
    }

    // ============================================
    // TAB NAVIGATION
    // ============================================
    function initTabNavigation() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        // Load saved tab preference
        const savedTab = localStorage.getItem(CONFIG.storageKeys.tab);
        if (savedTab) {
            switchToTab(savedTab);
        }

        // Add click handlers
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                switchToTab(tabId);
                localStorage.setItem(CONFIG.storageKeys.tab, tabId);
            });
        });

        function switchToTab(tabId) {
            // Remove active from all tabs
            tabBtns.forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
            });
            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === tabId);
            });

            // Scroll to top of tab content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // ============================================
    // SEARCH FUNCTIONALITY
    // ============================================
    function initSearch() {
        const searchInput = document.getElementById('searchInput');

        if (!searchInput) return;

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            // Debounce search for better performance
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performGlobalSearch(e.target.value.toLowerCase().trim());
            }, 300);
        });

        // Clear search on Escape
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                performGlobalSearch('');
                clearSearchResults();
            }
        });
    }

    /**
     * Perform global search across ALL standards data
     */
    function performGlobalSearch(searchTerm) {
        // Clear previous search results
        clearSearchResults();

        // Preserve original search term for display
        const originalSearchTerm = searchTerm;
        const searchLower = searchTerm.toLowerCase().trim();

        console.log('Search initiated:', { original: originalSearchTerm, normalized: searchLower });

        if (searchLower === '') {
            // Show all tables, hide search results
            showAllTables();
            return;
        }

        // Switch to dashboard or create search results view
        showSearchResultsView();

        // Search across all categories
        const results = {};
        let totalMatches = 0;

        Object.keys(STANDARDS_DATA).forEach(category => {
            const matches = STANDARDS_DATA[category].filter(item => {
                // Search in multiple fields individually
                const fields = [
                    item.code || '',
                    item.title_en || '',
                    item.title_cn || '',
                    item.version || '',
                    item.relevance || '',
                    item.criticality || '',
                    item.id || ''
                ];

                // Check if any field contains the search term
                return fields.some(field => {
                    if (!field) return false;
                    const fieldLower = field.toString().toLowerCase();
                    const found = fieldLower.indexOf(searchLower) !== -1;
                    return found;
                });
            });

            if (matches.length > 0) {
                results[category] = matches;
                totalMatches += matches.length;
                console.log(`Found ${matches.length} matches in category: ${category}`);
            }
        });

        // Also search in cross-reference data
        const crossRefMatches = CROSS_REFERENCE_DATA.filter(item => {
            // Search in multiple fields individually
            const fields = [
                item.topic_en || '',
                item.topic_cn || '',
                item.nmpa || '',
                item.fda || '',
                item.eu || '',
                item.iso || ''
            ];

            // Check if any field contains the search term
            return fields.some(field => {
                if (!field) return false;
                const fieldLower = field.toString().toLowerCase();
                return fieldLower.indexOf(searchLower) !== -1;
            });
        });

        if (crossRefMatches.length > 0) {
            results['cross-ref'] = crossRefMatches;
            totalMatches += crossRefMatches.length;
        }

        // Display results with original search term for display
        displaySearchResults(results, originalSearchTerm, searchLower, totalMatches);
    }

    /**
     * Display search results
     */
    function displaySearchResults(results, originalSearchTerm, searchLower, totalMatches) {
        const container = document.getElementById('search');
        if (!container) return;

        const resultsHeader = container.querySelector('.results-header');
        const resultsContent = container.querySelector('.results-content');

        // Update header with original search term
        resultsHeader.innerHTML = `
            <h2>
                <span class="text-en">🔍 Search Results: "${originalSearchTerm}"</span>
                <span class="text-cn">🔍 搜索结果: "${originalSearchTerm}"</span>
            </h2>
            <p>
                <span class="text-en">Found ${totalMatches} matches across ${Object.keys(results).length} categories</span>
                <span class="text-cn">在 ${Object.keys(results).length} 个类别中找到 ${totalMatches} 条匹配</span>
            </p>
        `;

        // Generate results by category
        let html = '';

        Object.keys(results).forEach(category => {
            const categoryNames = {
                'product': { en: '🔧 Product-Specific Standards', cn: '🔧 产品特定标准' },
                'iso': { en: '📋 ISO Standards', cn: '📋 ISO 标准' },
                'fda': { en: '🏛️ FDA Regulations', cn: '🏛️ FDA 法规' },
                'nmpa-laws': { en: '⚖️ NMPA Laws', cn: '⚖️ NMPA 法律' },
                'nmpa-gb': { en: '📘 GB Standards', cn: '📘 GB 标准' },
                'nmpa-yy': { en: '📕 YY Standards', cn: '📕 YY 标准' },
                'eu': { en: '🇪🇺 EU Regulations', cn: '🇪🇺 欧盟法规' },
                'iec': { en: '⚡ IEC Standards', cn: '⚡ IEC 标准' },
                'astm': { en: '🔬 ASTM Standards', cn: '🔬 ASTM 标准' },
                'cross-ref': { en: '🔗 Cross-Reference', cn: '🔗 对照表' }
            };

            const categoryName = categoryNames[category] || { en: category, cn: category };
            const items = results[category];

            html += `
                <div class="search-category">
                    <h3>${categoryName.en} <small>(${items.length} <span class="text-en">matches</span><span class="text-cn">条匹配</span>)</small></h3>
                    <div class="table-wrapper">
                        <table class="search-results-table">
                            <thead>
                                <tr>
                                    <th><span class="text-en">Code</span><span class="text-cn">代码</span></th>
                                    <th><span class="text-en">Title</span><span class="text-cn">标题</span></th>
                                    <th><span class="text-en">Version</span><span class="text-cn">版本</span></th>
                                    <th><span class="text-en">Status</span><span class="text-cn">状态</span></th>
                                    <th><span class="text-en">Relevance</span><span class="text-cn">相关性</span></th>
                                    <th><span class="text-en">Link</span><span class="text-cn">链接</span></th>
                                </tr>
                            </thead>
                            <tbody>
            `;

            items.forEach(item => {
                const statusIcon = getStatusIcon(item.status);
                const statusClass = getStatusClass(item.status);
                const criticality = item.criticality || '';

                // Handle cross-reference items differently
                if (category === 'cross-ref') {
                    html += `
                        <tr>
                            <td colspan="2"><strong>${item.topic_en}</strong> <small>(${item.topic_cn})</small></td>
                            <td>${item.nmpa}</td>
                            <td>${item.fda}</td>
                            <td>${item.eu}</td>
                            <td>${item.iso}</td>
                            <td></td>
                        </tr>
                    `;
                } else {
                    html += `
                        <tr>
                            <td><strong>${item.code}</strong></td>
                            <td>
                                <span class="text-en">${highlightMatch(item.title_en, searchLower)}</span>
                                <span class="text-cn">${highlightMatch(item.title_cn, searchLower)}</span>
                            </td>
                            <td>${item.version}</td>
                            <td><span class="${statusClass}">${statusIcon} ${criticality}</span></td>
                            <td>${item.relevance || ''}</td>
                            <td><a href="${item.url}" target="_blank" rel="noopener noreferrer">
                                <span class="text-en">Link</span><span class="text-cn">链接</span>
                            </a></td>
                        </tr>
                    `;
                }
            });

            html += `
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        });

        if (totalMatches === 0) {
            html = `
                <div class="no-results">
                    <p style="text-align: center; padding: 3rem; color: var(--gray);">
                        <span class="text-en">😕 No matches found for "${originalSearchTerm}"</span>
                        <span class="text-cn">😕 未找到 "${originalSearchTerm}" 的匹配项</span>
                    </p>
                    <p style="text-align: center; color: var(--gray);">
                        <span class="text-en">Try searching for:</span>
                        <span class="text-cn">尝试搜索:</span>
                    </p>
                    <ul style="text-align: center; list-style: none; padding: 0;">
                        <li><code>ISO 13485</code> <span class="text-en">or</span> <code>13485</code></li>
                        <li><code>risk management</code></li>
                        <li><code>质量管理体系</code> (Chinese)</li>
                        <li><code>🔧</code> <span class="text-en">or</span> <code>product-specific</code></li>
                    </ul>
                </div>
            `;
        }

        resultsContent.innerHTML = html;
    }

    /**
     * Highlight matching text in search results
     */
    function highlightMatch(text, searchTerm) {
        if (!searchTerm) return text;

        const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }

    /**
     * Escape special regex characters
     */
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Show search results view
     */
    function showSearchResultsView() {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Deactivate all tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });

        // Create or show search results tab
        let searchTab = document.getElementById('search');
        if (!searchTab) {
            searchTab = createSearchResultsTab();
            document.querySelector('.tabs').insertAdjacentHTML('beforeend', `
                <button class="tab-btn active" data-tab="search" role="tab" aria-selected="true">
                    <span class="text-en">🔍 Search Results</span>
                    <span class="text-cn">🔍 搜索结果</span>
                </button>
            `);
        }

        // Show search tab
        searchTab = document.getElementById('search');
        if (searchTab) {
            searchTab.classList.add('active');
        }
    }

    /**
     * Create search results tab content
     */
    function createSearchResultsTab() {
        const tabContent = document.createElement('div');
        tabContent.id = 'search';
        tabContent.className = 'tab-content active';
        tabContent.setAttribute('role', 'tabpanel');

        tabContent.innerHTML = `
            <div class="results-header"></div>
            <div class="results-content"></div>
        `;

        document.querySelector('.container').appendChild(tabContent);
        return tabContent;
    }

    /**
     * Clear search results
     */
    function clearSearchResults() {
        const searchTab = document.getElementById('search');
        if (searchTab) {
            searchTab.remove();
        }

        // Remove search tab button
        const searchBtn = document.querySelector('[data-tab="search"]');
        if (searchBtn) {
            searchBtn.remove();
        }
    }

    /**
     * Show all tables (when search is cleared)
     */
    function showAllTables() {
        // Restore original tab
        const savedTab = localStorage.getItem(CONFIG.storageKeys.tab) || 'dashboard';
        const tabBtn = document.querySelector(`[data-tab="${savedTab}"]`);
        if (tabBtn) {
            tabBtn.click();
        }
    }

    // ============================================
    // EXPANDABLE SECTIONS
    // ============================================
    function initExpandables() {
        const expandableHeaders = document.querySelectorAll('.expandable-header');

        expandableHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const expandable = header.parentElement;
                expandable.classList.toggle('open');
                saveExpandableState();
            });
        });

        // Restore saved expandable states
        restoreExpandableStates();
    }

    function saveExpandableState() {
        const expandables = document.querySelectorAll('.expandable');
        const states = {};

        expandables.forEach((exp, index) => {
            states[index] = exp.classList.contains('open');
        });

        localStorage.setItem(CONFIG.storageKeys.expandables, JSON.stringify(states));
    }

    function restoreExpandableStates() {
        const savedStates = localStorage.getItem(CONFIG.storageKeys.expandables);

        if (savedStates) {
            const states = JSON.parse(savedStates);
            const expandables = document.querySelectorAll('.expandable');

            expandables.forEach((exp, index) => {
                if (states[index]) {
                    exp.classList.add('open');
                }
            });
        }
    }

    // ============================================
    // KEYBOARD SHORTCUTS
    // ============================================
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }

            // Ctrl/Cmd + 1-9 for tabs
            if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '9') {
                e.preventDefault();
                const tabIndex = parseInt(e.key) - 1;
                const tabBtns = document.querySelectorAll('.tab-btn');
                const tabBtn = tabBtns[tabIndex];

                if (tabBtn) {
                    tabBtn.click();
                }
            }

            // Escape to clear search
            if (e.key === 'Escape') {
                const searchInput = document.getElementById('searchInput');
                if (searchInput && document.activeElement === searchInput) {
                    searchInput.value = '';
                    performSearch('');
                    searchInput.blur();
                }
            }
        });
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    /**
     * Get status icon for a given status code
     */
    function getStatusIcon(status) {
        const statusMap = {
            'current': '✅',
            'check': '⚠️',
            'obsolete': '❌',
            'draft': '📋'
        };
        return statusMap[status] || '';
    }

    /**
     * Get status class for a given status code
     */
    function getStatusClass(status) {
        return `status-${status}`;
    }

    /**
     * Format text with proper capitalization
     */
    function formatText(text) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    /**
     * Debounce function to limit execution rate
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ============================================
    // DATA RENDERING FUNCTIONS
    // ============================================

    /**
     * Render standards table from data array
     */
    function renderStandardsTable(data, tableId) {
        const table = document.getElementById(tableId);
        if (!table) return;

        // Get or create tbody
        let tbody = table.querySelector('tbody');
        if (!tbody) {
            tbody = document.createElement('tbody');
            table.appendChild(tbody);
        } else {
            tbody.innerHTML = '';
        }

        // Render rows
        data.forEach(item => {
            const row = document.createElement('tr');

            const statusIcon = getStatusIcon(item.status);
            const statusClass = getStatusClass(item.status);
            const criticality = item.criticality || '';

            row.innerHTML = `
                <td>${item.code}</td>
                <td>
                    <span class="text-en">${item.title_en}</span>
                    <span class="text-cn">${item.title_cn}</span>
                </td>
                <td>${item.version}</td>
                <td><span class="${statusClass}">${statusIcon} ${criticality}</span></td>
                <td>${item.relevance || ''}</td>
                <td><a href="${item.url}" target="_blank" rel="noopener noreferrer">
                    <span class="text-en">Link</span><span class="text-cn">链接</span>
                </a></td>
            `;
            tbody.appendChild(row);
        });
    }

    /**
     * Render cross-reference table
     */
    function renderCrossReferenceTable() {
        const table = document.getElementById('crossRefTable');
        if (!table) return;

        const tbody = table.querySelector('tbody');
        if (!tbody) return;

        tbody.innerHTML = '';

        CROSS_REFERENCE_DATA.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <span class="text-en">${item.topic_en}</span>
                    <span class="text-cn">${item.topic_cn}</span>
                </td>
                <td>${item.nmpa}</td>
                <td>${item.fda}</td>
                <td>${item.eu}</td>
                <td>${item.iso}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    /**
     * Render priority updates
     */
    function renderPriorityUpdates() {
        const container = document.getElementById('priorityContainer');
        if (!container) return;

        // High priority
        if (PRIORITY_UPDATES.high && PRIORITY_UPDATES.high.length > 0) {
            const section = document.createElement('div');
            section.innerHTML = '<h3 style="margin: 2rem 0 1rem 0;"><span class="text-en">🔴 HIGH PRIORITY</span><span class="text-cn">🔴 高优先级</span></h3>';

            PRIORITY_UPDATES.high.forEach(item => {
                const div = document.createElement('div');
                div.className = 'priority-item priority-high';
                div.innerHTML = `
                    <div style="flex: 1;">
                        <strong>${item.code}</strong>
                        <div style="font-size: 0.9rem; color: var(--gray);">
                            <span class="text-en">Current: ${item.current} | Latest: ${item.latest}</span>
                            <span class="text-cn">当前: ${item.current} | 最新: ${item.latest}</span>
                        </div>
                    </div>
                    <div>
                        <span class="${getStatusClass(item.status)}">${getStatusIcon(item.status)} ${item.action}</span>
                    </div>
                `;
                section.appendChild(div);
            });

            container.appendChild(section);
        }

        // Medium priority
        if (PRIORITY_UPDATES.medium && PRIORITY_UPDATES.medium.length > 0) {
            const section = document.createElement('div');
            section.innerHTML = '<h3 style="margin: 2rem 0 1rem 0;"><span class="text-en">⚠️ MEDIUM PRIORITY</span><span class="text-cn">⚠️ 中优先级</span></h3>';

            PRIORITY_UPDATES.medium.forEach(item => {
                const div = document.createElement('div');
                div.className = 'priority-item priority-medium';
                div.innerHTML = `
                    <div style="flex: 1;">
                        <strong>${item.code}</strong>
                        <div style="font-size: 0.9rem; color: var(--gray);">
                            <span class="text-en">Current: ${item.current} | Latest: ${item.latest}</span>
                            <span class="text-cn">当前: ${item.current} | 最新: ${item.latest}</span>
                        </div>
                    </div>
                    <div>
                        <span class="${getStatusClass(item.status)}">${getStatusIcon(item.status)} ${item.action}</span>
                    </div>
                `;
                section.appendChild(div);
            });

            container.appendChild(section);
        }

        // Draft
        if (PRIORITY_UPDATES.draft && PRIORITY_UPDATES.draft.length > 0) {
            const section = document.createElement('div');
            section.innerHTML = '<h3 style="margin: 2rem 0 1rem 0;"><span class="text-en">📋 DRAFT - Monitor</span><span class="text-cn">📋 草案 - 监控</span></h3>';

            PRIORITY_UPDATES.draft.forEach(item => {
                const div = document.createElement('div');
                div.className = 'priority-item priority-medium';
                div.innerHTML = `
                    <div style="flex: 1;">
                        <strong>${item.code}</strong>
                        <div style="font-size: 0.9rem; color: var(--gray);">
                            <span class="text-en">${item.current_en}</span>
                            <span class="text-cn">${item.current_cn}</span>
                        </div>
                    </div>
                    <div>
                        <span class="${getStatusClass(item.status)}">${getStatusIcon(item.status)} ${item.action}</span>
                    </div>
                `;
                section.appendChild(div);
            });

            container.appendChild(section);
        }
    }

    // ============================================
    // PRINT FUNCTIONALITY
    // ============================================
    function initPrintFunctionality() {
        // Add print class before printing
        window.addEventListener('beforeprint', () => {
            document.body.classList.add('printing');
        });

        // Remove print class after printing
        window.addEventListener('afterprint', () => {
            document.body.classList.remove('printing');
        });
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('Summed Medtech Regulatory Tracker initializing...');

        // Initialize all components
        initLanguageToggle();
        initTabNavigation();
        initSearch();
        initExpandables();
        initKeyboardShortcuts();
        initPrintFunctionality();

        // Render data tables dynamically
        renderAllStandardsTables();
        renderCrossReferenceTable();
        renderPriorityUpdates();

        console.log('Summed Medtech Regulatory Tracker initialized successfully.');
    }

    /**
     * Render all standards tables dynamically from data
     */
    function renderAllStandardsTables() {
        // Render each category's table
        Object.keys(STANDARDS_DATA).forEach(category => {
            const tableId = category + 'Table';
            let table = document.getElementById(tableId);

            // Create table if it doesn't exist
            if (!table) {
                table = createStandardsTable(category, tableId);
                const tabContent = document.getElementById(category);
                if (tabContent) {
                    // Clear placeholder text
                    const placeholder = tabContent.querySelector('p');
                    if (placeholder && placeholder.textContent.includes('Add')) {
                        placeholder.remove();
                    }
                    tabContent.appendChild(table);
                }
            }

            // Populate table
            renderStandardsTable(STANDARDS_DATA[category], tableId);
        });
    }

    /**
     * Create a standards table structure
     */
    function createStandardsTable(category, tableId) {
        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-wrapper';

        const table = document.createElement('table');
        table.id = tableId;

        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = [
            { en: 'Standard', cn: '标准号' },
            { en: 'Title', cn: '标题' },
            { en: 'Version', cn: '版本/年份' },
            { en: 'Status', cn: '状态' },
            { en: 'Relevance', cn: '相关性' },
            { en: 'Link', cn: '链接' }
        ];

        headers.forEach(h => {
            const th = document.createElement('th');
            th.innerHTML = `<span class="text-en">${h.en}</span><span class="text-cn">${h.cn}</span>`;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        tbody.id = tableId + 'Body';
        table.appendChild(tbody);

        tableWrapper.appendChild(table);
        return tableWrapper;
    }

    // Run initialization
    init();

    // ============================================
    // PUBLIC API (for external use if needed)
    // ============================================
    window.SummedMedtechTracker = {
        // Get all standards data
        getData: () => STANDARDS_DATA,

        // Get standards by category
        getByCategory: (category) => STANDARDS_DATA[category] || [],

        // Get cross-reference data
        getCrossReference: () => CROSS_REFERENCE_DATA,

        // Get priority updates
        getPriorityUpdates: () => PRIORITY_UPDATES,

        // Search standards
        search: (term) => {
            const results = {};
            Object.keys(STANDARDS_DATA).forEach(category => {
                results[category] = STANDARDS_DATA[category].filter(item => {
                    const searchStr = `${item.code} ${item.title_en} ${item.title_cn}`.toLowerCase();
                    return searchStr.includes(term.toLowerCase());
                });
            });
            return results;
        },

        // Switch language programmatically
        setLanguage: (lang) => {
            const body = document.body;
            body.className = lang === 'cn' ? 'lang-cn' : 'lang-en';
            localStorage.setItem(CONFIG.storageKeys.language, lang);

            // Update language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        },

        // Switch tab programmatically
        switchTab: (tabId) => {
            const tabBtn = document.querySelector(`[data-tab="${tabId}"]`);
            if (tabBtn) {
                tabBtn.click();
            }
        }
    };
});
