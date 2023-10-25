document.addEventListener("DOMContentLoaded", function () {
    const trackingForm = document.getElementById("tracking-form");
    const resultsContainer = document.getElementById("results");
    const quitDateInput = document.getElementById("quit-date");
    const dipPerDayInput = document.getElementById("dip-per-day");
    const dipsInPackInput = document.getElementById("dips-in-pack");
    const packPriceInput = document.getElementById("pack-price");

    // Load user data from localStorage if it exists
    if (localStorage.getItem("quitDate")) {
        quitDateInput.value = localStorage.getItem("quitDate");
        dipPerDayInput.value = localStorage.getItem("dipPerDay");
        dipsInPackInput.value = localStorage.getItem("dipsInPack");
        packPriceInput.value = localStorage.getItem("packPrice");
    }

    trackingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const quitDate = new Date(quitDateInput.value);
        const dipPerDay = parseInt(dipPerDayInput.value);
        const dipsInPack = parseInt(dipsInPackInput.value);
        const packPrice = parseFloat(packPriceInput.value);

        // Save user data in localStorage
        localStorage.setItem("quitDate", quitDateInput.value);
        localStorage.setItem("dipPerDay", dipPerDayInput.value);
        localStorage.setItem("dipsInPack", dipsInPackInput.value);
        localStorage.setItem("packPrice", packPriceInput.value);

        const today = new Date();
        const daysWithoutDipping = Math.floor((today - quitDate) / (1000 * 60 * 60 * 24));
        const dipsSaved = daysWithoutDipping * dipPerDay;
        const moneySaved = dipsSaved * (packPrice / dipsInPack);

        document.getElementById("days-without-dipping").textContent = daysWithoutDipping;
        document.getElementById("dips-saved").textContent = dipsSaved;
        document.getElementById("money-saved").textContent = moneySaved.toFixed(2);

        resultsContainer.style.display = "block";
    });
});
