document.addEventListener('DOMContentLoaded', function() {
    // Load saved collapsed state from localStorage
    let savedState = {};
    try {
        savedState = JSON.parse(localStorage.getItem('collapsedSections')) || {};
    } catch (e) {
        savedState = {};
    }

    function saveState() {
        localStorage.setItem('collapsedSections', JSON.stringify(savedState));
    }

    // Find all sections with .collapsible class
    const collapsibleSections = document.querySelectorAll('.cv-section.collapsible');

    collapsibleSections.forEach(section => {
        const heading = section.querySelector('h2');
        if (!heading) return;

        const headingText = heading.textContent.trim();
        const defaultCollapsed = section.classList.contains('collapsed');

        // Make heading clickable
        heading.style.cursor = 'pointer';
        heading.classList.add('collapsible');

        // Add toggle indicator
        const indicator = document.createElement('span');
        indicator.classList.add('toggle-indicator');
        indicator.textContent = ' ▼';
        heading.appendChild(indicator);

        // Get all content after h2
        const content = [];
        let nextElement = heading.nextElementSibling;

        while (nextElement) {
            content.push(nextElement);
            nextElement = nextElement.nextElementSibling;
        }

        // Wrap content in a collapsible container
        const container = document.createElement('div');
        container.classList.add('collapsible-content');

        // Insert container after heading
        heading.parentNode.insertBefore(container, heading.nextSibling);

        // Move content into container
        content.forEach(elem => {
            container.appendChild(elem);
        });

        // Set state: use saved state if exists, otherwise use default from class
        const isCollapsed = savedState.hasOwnProperty(headingText)
            ? savedState[headingText]
            : defaultCollapsed;

        if (isCollapsed) {
            container.classList.add('collapsed');
            indicator.textContent = ' ▶';
        }

        // Add click handler
        heading.addEventListener('click', function() {
            container.classList.toggle('collapsed');
            const nowCollapsed = container.classList.contains('collapsed');

            indicator.textContent = nowCollapsed ? ' ▶' : ' ▼';
            savedState[headingText] = nowCollapsed;
            saveState();
        });
    });

    // Experience tag filtering
    const tagFilters = document.querySelectorAll('.tag-filter');
    const experienceItems = document.querySelectorAll('.experience-item');

    function filterExperience() {
        // Get all checked tags
        const checkedTags = Array.from(tagFilters)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // If no tags are checked, hide all items
        if (checkedTags.length === 0) {
            experienceItems.forEach(item => {
                item.classList.add('hidden');
            });
            return;
        }

        // Show/hide items based on their tags
        experienceItems.forEach(item => {
            const itemTags = item.dataset.tags.split(',');
            const hasMatchingTag = itemTags.some(tag => checkedTags.includes(tag));

            if (hasMatchingTag) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Add event listeners to checkboxes
    tagFilters.forEach(filter => {
        filter.addEventListener('change', filterExperience);
    });

    // Initial filter (show all by default since all are checked)
    filterExperience();
});
