// Disease Chart for Analytics & Insights
const ctx = document.getElementById('diseaseChart').getContext('2d');
const diseaseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Flu', 'Covid-19', 'Malaria', 'Dengue', 'Typhoid'],
        datasets: [{
            label: 'Cases Treated',
            data: [30, 50, 20, 15, 10],
            backgroundColor: [
                '#2ecc71', '#3498db', '#e74c3c', '#f1c40f', '#9b59b6'
            ],
            borderColor: '#2ecc71',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
