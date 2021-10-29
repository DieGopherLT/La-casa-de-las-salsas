document.addEventListener('DOMContentLoaded', () => {
    const alerts = document.querySelectorAll('.alert');
    if (alerts.length > 0) {
        alerts.forEach(alert => {
            setTimeout(() => alert.remove(), 5000);
        })
    }
});
