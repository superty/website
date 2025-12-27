document.addEventListener('DOMContentLoaded', function() {
    const fontChooser = document.getElementById('font-chooser');
    const bodyFontChooser = document.getElementById('body-font-chooser');

    if (!fontChooser) return;

    // Clean up old settings
    localStorage.removeItem('selectedFont');

    // Serif fonts for headings
    const headingFonts = {
        'bitter': '"Bitter", Georgia, serif',
        'lora': '"Lora", Georgia, serif',
        'literata': '"Literata", Georgia, serif'
    };

    // Sans-serif fonts for body
    const bodyFonts = {
        'adwaita': { family: '"Adwaita Sans", "Cantarell", -apple-system, sans-serif', weight: 400, size: '0.95em' },
        'nunito': { family: '"Nunito", -apple-system, sans-serif', weight: 400, size: null },
        'be-vietnam-pro': { family: '"Be Vietnam Pro", -apple-system, sans-serif', weight: 300, size: '0.95em' }
    };

    // Google Fonts to load
    const googleFonts = {
        'bitter': 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700&display=swap',
        'lora': 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap',
        'literata': 'https://fonts.googleapis.com/css2?family=Literata:wght@400;500;600;700&display=swap',
        'nunito': 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap',
        'be-vietnam-pro': 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap'
    };

    // Load saved heading font preference
    const savedHeadingFont = localStorage.getItem('headingFont') || 'bitter';
    fontChooser.value = savedHeadingFont;
    applyHeadingFont(savedHeadingFont);

    // Load saved body font preference
    const savedBodyFont = localStorage.getItem('bodyFont') || 'adwaita';
    if (bodyFontChooser) {
        bodyFontChooser.value = savedBodyFont;
        applyBodyFont(savedBodyFont);
    }

    // Handle heading font changes
    fontChooser.addEventListener('change', function() {
        const selectedFont = this.value;
        applyHeadingFont(selectedFont);
        localStorage.setItem('headingFont', selectedFont);
    });

    // Handle body font changes
    if (bodyFontChooser) {
        bodyFontChooser.addEventListener('change', function() {
            const selectedFont = this.value;
            applyBodyFont(selectedFont);
            localStorage.setItem('bodyFont', selectedFont);
        });
    }

    function applyHeadingFont(fontKey) {
        if (googleFonts[fontKey]) {
            loadGoogleFont(fontKey, googleFonts[fontKey]);
        }
        const headings = document.querySelectorAll('.cv h1, .cv h2');
        headings.forEach(h => {
            h.style.fontFamily = headingFonts[fontKey];
        });
    }

    function applyBodyFont(fontKey) {
        if (googleFonts[fontKey]) {
            loadGoogleFont(fontKey, googleFonts[fontKey]);
        }
        document.body.style.fontFamily = bodyFonts[fontKey].family;
        document.body.style.fontWeight = bodyFonts[fontKey].weight;
        document.body.style.fontSize = bodyFonts[fontKey].size || '';
    }

    function loadGoogleFont(fontKey, url) {
        const existingLink = document.querySelector(`link[data-font="${fontKey}"]`);
        if (existingLink) return;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-font', fontKey);
        document.head.appendChild(link);
    }
});
