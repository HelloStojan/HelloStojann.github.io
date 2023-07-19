window.onload = () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", eventHandler)
    
    function eventHandler(event){
        
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log(email, name, message)
    }
}