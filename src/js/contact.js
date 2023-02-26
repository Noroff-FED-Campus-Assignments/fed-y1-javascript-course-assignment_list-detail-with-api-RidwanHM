const formEL = document.querySelector("form");
        const nameEL = document.querySelector("#js-name");
        const emailEL = document.querySelector("#js-email");
        const subjectEL = document.querySelector("#js-subject");
        const adressEL = document.querySelector("#js-adress");

        formEL.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = nameEL.value;
            const email = emailEL.value;
            const subject = subjectEL.value;
            const adress = adressEL.value;


            if (name === "") {
                alert("Please enter a name");
                return;
            }

            if (email === "") {
                alert("Please enter a name");
                return;
            }

            if (subject === "") {
                alert("Please enter a name");
                return;
            }

            if (adress === "") {
                alert("Please enter a name");
                return;
            }

            alert("form submitted");
        });

        nameEL.addEventListener("blur", (event) => {
            const name = event.target.value.trim();

            const minLengthRegex = /^[a-zA-Z ]{2,}$/;
            

            if (minLengthRegex.test(name)) {
                event.target.classList.add("is-success");
                event.target.classList.remove("is-error");
            } else {
                event.target.classList.add("is-error");
                event.target.classList.remove("is-success");
            }
        });

        emailEL.addEventListener("blur", (event) => {
            const email = event.target.value.trim();
        
            const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        
            if (emailRegex.test(email)) {
                event.target.classList.add("is-success");
                event.target.classList.remove("is-error");
            } else {
                event.target.classList.add("is-error");
                event.target.classList.remove("is-success");
            }
        });
        

        subjectEL.addEventListener("blur", (event) => {
            const name = event.target.value.trim();

            const subjectRegex = /^.{10,}$/;

            if (subjectRegex.test(name)) {
                event.target.classList.add("is-success");
                event.target.classList.remove("is-error");
            } else {
                event.target.classList.add("is-error");
                event.target.classList.remove("is-success");
            }
        });


        adressEL.addEventListener("blur", (event) => {
            const name = event.target.value.trim();

            const adressRegex = /^.{1,24}$/;
            

            if (adressRegex.test(name)) {
                event.target.classList.add("is-success");
                event.target.classList.remove("is-error");
            } else {
                event.target.classList.add("is-error");
                event.target.classList.remove("is-success");
            }
        });
