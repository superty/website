document.addEventListener('DOMContentLoaded', function() {
    // Sections to make collapsible and their default state
    const collapsibleSections = {
        'Talks': true,  // true = collapsed by default
        'Professional Service': true,
        'Undergraduate Activities': true,
        'Other Research': true,
        'Teaching': true
    };

    // Find all h2 elements
    const headings = document.querySelectorAll('.cv h2');

    headings.forEach(heading => {
        const headingText = heading.textContent.trim();

        if (collapsibleSections.hasOwnProperty(headingText)) {
            // Make heading clickable
            heading.style.cursor = 'pointer';
            heading.classList.add('collapsible');

            // Add toggle indicator
            const indicator = document.createElement('span');
            indicator.classList.add('toggle-indicator');
            indicator.textContent = ' ▼';
            heading.appendChild(indicator);

            // Get all content until next h2
            const content = [];
            let nextElement = heading.nextElementSibling;

            while (nextElement && nextElement.tagName !== 'H2') {
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

            // Set default state
            if (collapsibleSections[headingText]) {
                container.classList.add('collapsed');
                indicator.textContent = ' ▶';
            }

            // Add click handler
            heading.addEventListener('click', function() {
                container.classList.toggle('collapsed');

                if (container.classList.contains('collapsed')) {
                    indicator.textContent = ' ▶';
                } else {
                    indicator.textContent = ' ▼';
                }
            });
        }
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
