import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); 

    const delay = Number(event.target.elements.delay.value); 
    const shouldResolve = event.target.elements.state.value === "fulfilled"; 

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
    .then((delay) => {
        iziToast.success({
            title: "Ok",
            message: `Fulfilled promise in ${delay}ms`,
            position: "topRight",
            class: "icon-svg-success",
            iconUrl: "/img/success.svg", 
            backgroundColor: "#59a10d",
            titleColor: "#fff",
            messageColor: "#fff",
        });
    })
    .catch((delay) => {
        iziToast.error({
            title: "Error",
            message: `Rejected promise in ${delay}ms`,
            position: "topRight",
            class: "icon-svg-error",
            backgroundColor: "#ef4040",
            titleColor: "#fff",
            messageColor: "#fff",
            iconUrl: "/img/error.svg",
            
        });
    });
}