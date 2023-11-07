/*
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
@import '~leaflet/dist/leaflet.css';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins";
}

body {
    min-height: 100vh;
    background: url('assets/img/banner2.png') no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.3rem 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

.header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .1);
    backdrop-filter: blur(6px);
    z-index: -1;
}

.header::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
    transition: .5s;
}

.header:hover::after {
    left: 100%;
}

.logo {
    font-size: 2rem;
    color: #fff;
    text-decoration: none;
}

.navbar a {
    font-size: 1.15rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 2.5rem;
}

#check {
    display: none;
}

.icons {
    position: absolute;
    right: 5%;
    font-size: 2.8rem;
    color: #fff;
    cursor: pointer;
    display: none;
}

@media(max-width: 992px) {
    .header {
        padding: 1.3rem 5%;
    }
}

.card-loteo {
    width: 400px;
    height: 600px;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 40px;
    box-shadow: 4px 4px 12px #112c07;
    border-radius: 15px;
    transition: transform 0.3s ease;
    background: #fff;
    background-size: cover;
    background-position: center;
}

.card-loteo:hover {
    transform: translateY(-20px);
    transition: transform 0.3s ease;
    z-index: 1;
}

.map-loteo {
    position: static;
    width: 100%;
    height: 200px;
    background-color: lightgray;
    border-radius: 20px;
}

.card-link {
    text-decoration: none;
    color: inherit;
    width: calc(33.33% - 20px);
    margin-bottom: 40px;
}

.slider {
    display: flex;
    overflow: hidden;
    position: relative;
}

.slide {
    flex: 0 0 100%;
    text-align: center;
    position: relative;
}

.slide img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(0.9) saturate(0.7);
}

.slide h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px 20px;
    font-size: 3.7rem;
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 1);
}

.slider .slide {
    animation: slide 9s infinite;
}

@keyframes slide {

    0%,
    100% {
        transform: translateX(0);
    }

    33.33% {
        transform: translateX(-100%);
    }

    66.66% {
        transform: translateX(-200%);
    }
}

.titulo {
    font-size: 6.2rem;
    text-align: center;
    font-weight: 700;
    margin-top: 100px;
    color: #fff;
}

.container-text {
    height: 100vh;
    background-color: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2c5f15;
}




.container-parrafo {
    width: 80%;
    border-radius: 30px;
    background-color: #f0f0f0;
}

.container-text p {
    font-size: 23px;
    margin: 30px;
    line-height: 1.2;
}

.container-text h3 {
    font-size: 32px;
    margin: 20px;
    line-height: 1.2;
}

.icono-check {
    width: 1em;
    height: 1em;
    display: inline-block;
    background: url('assets/icons/check-mark-button-svgrepo-com.svg') center/contain no-repeat;
    vertical-align: middle;
}

.contenedor-loteos-full{
    display: column;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
}


#map {
    width: 100%;
    height: 600px;
    z-index: 1;
    border-radius: 30px;
}

.contenedor {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    margin-top: 85px;
    padding-left: 130px;
    padding-right: 130px;
    color: #2c5f15;
}


.contenedor-card {
    margin-top: 40px;
    display: flex;
    height: 80%;
}

.card-loteos-map {
    margin: 20px;
    border-radius: 30px;
}

.card-30 {
    width: 30%;
    text-align: left;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    color: #2c5f15;
}

.card-70 {
    width: 70%;
}



.container-img {
    margin-top: 85px;
    position: relative;
    min-height: 100vh;
    background: #ddd;
}

.container-img h2 {
    margin-top: 85px;
    font-size: 40px;
    font-weight: normal;
    padding: 15px;
    color: #2c5f15;
    text-align: center;
    text-transform: capitalize;
}

.container-img .image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    padding: 10px;
}

.container-img .image-container .image {
    height: 250px;
    width: 350px;
    border: 10px solid #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
    overflow: hidden;
    cursor: pointer;
}

.container-img .image-container .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: .2 linear;
}

.container-img .image-container .image:hover img {
    transform: scale(1.1);
}

.container-img .popup-image{
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .9);
    height: 100%;
    width: 100%;
    z-index: 100;
    display: none;
}

.container-img .popup-image span{
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 60px;
    font-weight: bolder;
    color: #fff;
    cursor: pointer;
    z-index: 100;
}

.container-img .popup-image img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 5px solid #fff;
    border-radius: 15px;
    width: 750px;
    object-fit: cover;
}

@media (max-width: 768px){

    .contenedor {
        padding: 10px;
        flex-direction: column;
    }

    .card-30,
    .card-70 {
        width: 90%;
    }

    .contenedor-card {
        display: grid;
    }

    #map {
        height: 400px;
    }

    .container-parrafo {
        width: 90%;
    }

    .container-text p {
        font-size: 18px;
        margin: 30px;
        line-height: 1.2;
    }

    .container-text h3 {
        font-size: 23px;
        margin: 20px;
        line-height: 1.2;
    }
    .slide img {
        position: center;

    }

    .icons {
        display: inline-flex;
    }

    #check:checked~.icons #menu-icon {
        display: none;
    }

    .icons #close-icon {
        display: none;
    }

    #check:checked~.icons #close-icon {
        display: block;
    }

    .navbar {
        position: absolute;
        z-index: 2;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0;
        background: rgba(0, 0, 0, .1);
        backdrop-filter: blur(6px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        overflow: hidden;
        transition: .3s ease;
    }

    #check:checked~.navbar {
        height: 17.7rem;
    }

    .navbar a {
        display: block;
        font-size: 1.1rem;
        margin: 1.5rem 0;
        text-align: center;
        transform: translateY(-50px);
        opacity: 0;
        transition: .3s ease;
    }

    #check:checked~.navbar a {
        transform: translateY(0);
        opacity: 1;
        transition-delay: calc(.15s *var(--i));
    }
    .container-img .popup-image img{
        width: 95%;
    }
}
*/