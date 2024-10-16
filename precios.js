function togglePricing(type) {
    const individualPricing = document.getElementById('individualPricing');
    const enterprisePricing = document.getElementById('enterprisePricing');
    const individualBtn = document.getElementById('individualBtn');
    const enterpriseBtn = document.getElementById('enterpriseBtn');

    if (type === 'individual') {
        individualPricing.classList.remove('hidden');
        enterprisePricing.classList.add('hidden');
        individualBtn.classList.add('active');
        enterpriseBtn.classList.remove('active');
    } else {
        individualPricing.classList.add('hidden');
        enterprisePricing.classList.remove('hidden');
        individualBtn.classList.remove('active');
        enterpriseBtn.classList.add('active');
    }
}

// Inicializar la vista con el pricing individual
document.addEventListener('DOMContentLoaded', function() {
    togglePricing('individual');
});