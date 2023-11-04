/* -- typing animation --*/

var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Graphic Designer", "Vlogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

})


/* aside */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a")
    a.addEventListener("click",function()
    {
        for (let j = 0; j < totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")

        if(window.innerWidth <1200){
            asideSectionTogglerBtn();
        }
    })
}

//navbar open and close

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside"),
bg = document.querySelector(".bgColor"),
image = document.querySelector(".home-img");

navTogglerBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    image.classList.toggle("open");
    bg.classList.toggle("open");

    for(let i=0; i<totalSection;i++ ){
        allSection[i].classList.toggle("open")
    }


}

// function for form input

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "atharvm2002@gmail.com",
        Password: "B072557905B60120EE7B46E300A282B43C4F",
        To: 'atharvx555@gmail.com',
        From: "msmemes5555@gmail.com",
        Subject: "Portfolio-Message",
        Body: "Name : " + document.getElementById("name").value +
            "<br> Email : " + document.getElementById("email").value +
            "<br> Subject : " + document.getElementById("subject").value +
            "<br> Message : " + document.getElementById("textarea").value
    })
}


//alert

function showAlert() {
    alert('Form submitted successfully!');
}


// reset form
const form = document.getElementById('myForm');

// Function to reset the form fields
function resetForm() {
    form.reset();
}

// Attach the resetForm function to the form's submit event
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    resetForm(); // Call the resetForm function to clear the form fields
});
