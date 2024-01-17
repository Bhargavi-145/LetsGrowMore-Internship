console.log('INFINITY TEAM API ');

function getData(a) {
    const url = "https://reqres.in/api/users?page=1";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            for (let i = 0; i < data.data.length; i++) {
                const user = data.data[i];
                const userNumber = i + 1;

                const imgSrc = user.avatar;
                document.getElementById(`p${userNumber}img`).src = imgSrc;

                const fullName = `${user.first_name} ${user.last_name}`;
                document.getElementById(`name${userNumber}`).innerHTML = fullName;

                const email = user.email;
                document.getElementById(`mail${userNumber}`).innerHTML = email;
            }
            const cards = document.querySelectorAll('.cards');
            cards.forEach(card => {
            card.style.display = 'inline-block'; // Or 'flex', depending on your layout
            });
        });
}
