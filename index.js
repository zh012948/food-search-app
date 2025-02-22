const checked = document.getElementById('checked');
const btnCat = document.querySelectorAll(".category button");
const burgers = document.querySelectorAll(".burgers");
const pizzas = document.querySelectorAll(".pizzas");
const pastas = document.querySelectorAll(".pastas");
const btnBurger = document.getElementById('btnBurger');
const btnPizza = document.getElementById('btnPizza');
const btnPasta = document.getElementById('btnPasta');
let searchQuery = document.getElementById('searchQuery');





checked.style.background = 'goldenrod';

// Filling Button effect
btnCat.forEach(button => {
    button.addEventListener('click', () => {

        btnCat.forEach(btn => {
            btn.style.background = "gold"
        })

        button.style.background = "goldenrod"
    })
})



searchQuery.addEventListener('input', () => {

    switch (searchQuery.value.toLowerCase()) {
        case "burgers":
            burgers.forEach(b => {
                b.style.display = "block";
            });

            pizzas.forEach(p => {
                p.style.display = "none";
            });

            pastas.forEach(p => {
                p.style.display = "none";
            });

            break;


        case "pizzas":
            burgers.forEach(b => {
                b.style.display = "none";
            });

            pizzas.forEach(p => {
                p.style.display = "block";
            });

            pastas.forEach(p => {
                p.style.display = "none";
            })

            break;


        case "pastas":

            burgers.forEach(b => {
                b.style.display = "none";
            });

            pizzas.forEach(p => {
                p.style.display = "none";
            });

            pastas.forEach(p => {
                p.style.display = "block";
            });
            break;

        default:
            burgers.forEach(b => {
                b.style.display = "block";
            });

            pizzas.forEach(p => {
                p.style.display = "block";
            });

            pastas.forEach(p => {
                p.style.display = "block";
            })
            break;
    }
})




btnBurger.addEventListener('click', () => {
    burgers.forEach(b => {
        b.style.display = "block";
    });

    pizzas.forEach(p => {
        p.style.display = "none";
    });

    pastas.forEach(p => {
        p.style.display = "none";
    })
});


btnPizza.addEventListener('click', () => {
    burgers.forEach(b => {
        b.style.display = "none";
    });

    pizzas.forEach(p => {
        p.style.display = "block";
    });

    pastas.forEach(p => {
        p.style.display = "none";
    });
})


btnPasta.addEventListener('click', () => {
    burgers.forEach(b => {
        b.style.display = "none";
    });

    pizzas.forEach(p => {
        p.style.display = "none";
    });

    pastas.forEach(p => {
        p.style.display = "block";
    })
})



checked.addEventListener('click', () => {
    burgers.forEach(b => {
        b.style.display = "block";
    });

    pizzas.forEach(p => {
        p.style.display = "block";
    });

    pastas.forEach(p => {
        p.style.display = "block";
    })
})