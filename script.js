// Dummy Bus Data
const buses = [
    {
        busName: "Super Fast",
        busNumber: "KL-01-1234",
        from: "Kottayam",
        to: "Ernakulam",
        departureTime: "08:00 AM",
        arrivalTime: "10:00 AM",
        date: "2026-03-01"
    },
    {
        busName: "City Express",
        busNumber: "KL-02-5678",
        from: "Kottayam",
        to: "Ernakulam",
        departureTime: "02:00 PM",
        arrivalTime: "04:00 PM",
        date: "2026-03-01"
    },
    {
        busName: "Night Rider",
        busNumber: "KL-03-9999",
        from: "Kottayam",
        to: "Trivandrum",
        departureTime: "09:00 PM",
        arrivalTime: "12:00 AM",
        date: "2026-03-01"
    }
];

const form = document.getElementById("searchForm");
const busList = document.getElementById("busList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value.trim().toLowerCase();
    const to = document.getElementById("to").value.trim().toLowerCase();
    const date = document.getElementById("date").value;

    busList.innerHTML = "";

    const filteredBuses = buses.filter(bus =>
        bus.from.toLowerCase() === from &&
        bus.to.toLowerCase() === to &&
        bus.date === date
    );

    if (filteredBuses.length === 0) {
        busList.innerHTML = "<p>No buses found</p>";
        return;
    }

    filteredBuses.forEach(bus => {
        const busCard = `
            <div>
                <h3>${bus.busName}</h3>
                <p><strong>Bus No:</strong> ${bus.busNumber}</p>
                <p><strong>Departure:</strong> ${bus.departureTime}</p>
                <p><strong>Arrival:</strong> ${bus.arrivalTime}</p>
            </div>
        `;

        busList.innerHTML += busCard;
    });
});