
async function pobierzDane() {
    const response = await fetch('csv/systemy.csv'); 
    const data = await response.text();
    
 
    const parsedData = Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
    }).data;

 
    const labels = parsedData.map(row => row['OS']);
    const values = parsedData.map(row => row['Market Share Perc. (Jan 2025 - Jan 2026)']);

    wykresSłupkowy(labels, values);
     wykresKołowy(labels, values)
}


function wykresSłupkowy(labels, values) {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar', // slupowy
        data: {
            labels: labels,
            datasets: [{
                label: 'Udział w rynku (%)',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // kolory slupkow
                borderColor: 'rgba(54, 162, 235, 1)',     
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // by y zaczynal sie od zera
                }
            }
        }
    });
}


function wykresKołowy(labels, values) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie', //kolowy
        data: {
            labels: labels,
            datasets: [{
                label: 'Udział w rynku (%)',
                data: values,
               
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true
           
        }
    });
}

pobierzDane();