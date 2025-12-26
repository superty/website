document.addEventListener('DOMContentLoaded', function() {
    const fontChooser = document.getElementById('font-chooser');

    if (!fontChooser) return;

    // Font definitions - warm, sophisticated fonts to match Dark Autumn palette
    const fonts = {
        'system': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        'adwaita': '"Adwaita Sans", "Cantarell", sans-serif',
        'lora': '"Lora", Georgia, serif',
        'eb-garamond': '"EB Garamond", "Garamond", Georgia, serif',
        'crimson': '"Crimson Pro", Georgia, serif',
        'libre-baskerville': '"Libre Baskerville", Baskerville, Georgia, serif',
        'cormorant': '"Cormorant Garamond", Garamond, Georgia, serif',
        'fira-sans': '"Fira Sans", -apple-system, sans-serif',
        'mono': '"JetBrains Mono", "SF Mono", "Consolas", monospace'
    };

    // Google Fonts to load
    const googleFonts = {
        'lora': 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        'eb-garamond': 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        'crimson': 'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        'libre-baskerville': 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap',
        'cormorant': 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        'fira-sans': 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap',
        'mono': 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap'
    };

    // Load saved font preference
    const savedFont = localStorage.getItem('selectedFont') || 'system';
    fontChooser.value = savedFont;
    applyFont(savedFont);

    // Handle font changes
    fontChooser.addEventListener('change', function() {
        const selectedFont = this.value;
        applyFont(selectedFont);
        localStorage.setItem('selectedFont', selectedFont);
    });

    function applyFont(fontKey) {
        // Load Google Font if needed
        if (googleFonts[fontKey]) {
            loadGoogleFont(fontKey, googleFonts[fontKey]);
        }

        // Apply font
        document.body.style.fontFamily = fonts[fontKey];
    }

    function loadGoogleFont(fontKey, url) {
        // Check if already loaded
        const existingLink = document.querySelector(`link[data-font="${fontKey}"]`);
        if (existingLink) return;

        // Load the font
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-font', fontKey);
        document.head.appendChild(link);
    }
});
