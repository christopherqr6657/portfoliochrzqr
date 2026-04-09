document.addEventListener("DOMContentLoaded", (event)=>{


    setTimeout(()=>{
        document.querySelector('#load-iframe-map').innerHTML= `

            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62433.31528248179!2d-77.06632294341479!3d-12.037861526018458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1713731188949!5m2!1ses-419!2spe"></iframe>

    
        `;
    },500);
    
});