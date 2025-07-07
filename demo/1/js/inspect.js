document.addEventListener('keydown', function (event) {
    // Disable F12 (Developer Tools)
    if (event.key === 'F12') {
        event.preventDefault();
        alert('Developer tools are disabled!');
    }

    // Disable Ctrl+Shift+I (Inspect Element)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        alert('Inspect element is disabled!');
    }

    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        alert('Console is disabled!');
    }

    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('Viewing source is disabled!');
    }
});

// Detect if DevTools is open by measuring console output time
(function detectDevTools() {
    const threshold = 110;
    const detect = () => {
        const start = performance.now();
        debugger; // Debugger statement triggers a slow operation if DevTools is open
        const time = performance.now() - start;

        if (time > threshold) {
            alert('Developer tools detected and disabled!');
            window.location.href = 'about:blank'; // Optional: Redirect the user
        }
    };
    setInterval(detect, 1000); // Check every second
})();

// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-click is disabled!');
});
