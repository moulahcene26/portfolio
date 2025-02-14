function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({
        behavior : 'smooth', block: 'center'
    });
}
document.getElementById("intro").getElementsByTagName("p")[0].innerHTML ="<strong>Moulahcene Abdelmounaim</strong>,<br>First-year CS Student @ESI Algiers";


function showSection(section){
    if (section == 'skill'){
        document.getElementById("project").style.display = "none";
        document.getElementById("skill").style.display = "flex";
        document.getElementById("skill").style.opacity = "1";

    }
    else if (section == 'project'){
        document.getElementById("skill").style.display = "none";
        document.getElementById("project").style.display = "flex";
        document.getElementById("project").style.opacity = "1";

    }
}
document.getElementById("Editing").getElementsByTagName("p")[0].innerHTML = "<strong>Video Editing</strong><br> With 3 years of After Effects experience, I can create magnificient motion graphics and animations on demand, with the ability to create cinematic scenes and more !"
document.getElementById("FrontEnd").getElementsByTagName("p")[0].innerHTML = "<strong>FrontEnd Development</strong><br> I specialize in HTML, CSS, and JavaScript, crafting engaging, responsive, and user-friendly web experiences."
document.getElementById("Kharajni").getElementsByTagName("p")[0].innerHTML = "<strong>Kharajni</strong><br> An AI-powered platform designed to guide Algerian men through the study abroad process, providing personalized advice, resources, and step-by-step assistance to make their journey seamless and successful."
document.getElementById("Portfolio").getElementsByTagName("p")[0].innerHTML = "<strong>My Portfolio</strong><br> A sleek and interactive website showcasing my skills, projects, and experience, built with clean design and smooth animations to leave a lasting impression on visitors."
