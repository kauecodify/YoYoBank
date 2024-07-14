        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('nav a');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });

/*ações passando na time*/
document.addEventListener('DOMContentLoaded', () => {
    const ticker = document.querySelector('.ticker');

    const actions = [
        { name: 'Ação 1', value: 2.34 },
        { name: 'Ação 2', value: -1.12 },
        { name: 'Ação 3', value: 0.56 },
        { name: 'Ação 4', value: 1.56 },
        { name: 'Ação 5', value: 0.96 },
        { name: 'Ação 6', value: 0.84 },
        { name: 'Ação 7', value: 3.26 },
        { name: 'Ação 8', value: 2.76 },
        { name: 'Ação 9', value: 5.46 },
        { name: 'Ação 10', value: -0.93 },
        { name: 'Ação 11', value: 8.40 },
        { name: 'Ação 12', value: -4.56 },
        { name: 'Ação 13', value: 7.44 }
    ];

    actions.forEach(action => {
        const span = document.createElement('span');
        span.className = 'ticker-item';

        if (action.value > 1) {
            span.classList.add('positive');
        } else if (action.value >= 0 && action.value <= 1) {
            span.classList.add('near-zero');
        } else {
            span.classList.add('negative');
        }

        span.textContent = `${action.name}: ${action.value.toFixed(2)}%`;
        ticker.appendChild(span);
    });
});
