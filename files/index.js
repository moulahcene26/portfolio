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

let main = document.getElementById("body");
let personal = document.getElementById("personal");
let social = document.getElementById("social");
let  mpb1 = document.getElementById("mail");
let  mpb2 = document.getElementById("phone");
let  mpb3 = document.getElementById("birth");
let projects = document.getElementById("projects");
let  up = document.getElementById("up");
let  efkp1 = document.getElementById("Editing");
let  efkp2 = document.getElementById("FrontEnd");
let  efkp3 = document.getElementById("Kharajni");
let  efkp4 = document.getElementById("Portfolio");

let img = document.getElementById("modeimg")

let Dark = false;

function ToggleDark() {
    Dark = !Dark; 
    if (img.src.includes("images/light.png")) {
        img.src = "images/dark.png";  
    } else {
        img.src = "images/light.png"; 
    }

    if (Dark) {
        
        main.style.backgroundColor = "#685d48";
        personal.style.backgroundColor = "#86795e";
        social.style.backgroundColor = "#6d614b";
        mpb1.style.backgroundColor = "#6d614b";
        mpb2.style.backgroundColor = "#6d614b";
        mpb3.style.backgroundColor = "#6d614b";
        up.style.backgroundColor = "#87795e";
        efkp1.style.backgroundColor = "#6d614b";
        efkp2.style.backgroundColor = "#6d614b";
        efkp3.style.backgroundColor = "#6d614b";
        efkp4.style.backgroundColor = "#6d614b";
        projects.style.backgroundColor = "#383227";
        efkp1.style.color = "#ffffed";
        efkp2.style.color = "#ffffed";
        efkp3.style.color = "#ffffed";
        efkp4.style.color = "#ffffed";
        mpb1.style.color = "#ffffed";
        mpb2.style.color = "#ffffed";
        mpb3.style.color = "#ffffed";
        up.style.color = "#ffffed";
    } else {
        
        main.style.backgroundColor = "#B3D8A8";
        personal.style.backgroundColor = "#3D8D7A";
        social.style.backgroundColor = "#A3D1C6";
        mpb1.style.backgroundColor = "#A3D1C6";
        mpb2.style.backgroundColor = "#A3D1C6";
        mpb3.style.backgroundColor = "#A3D1C6";
        up.style.backgroundColor = "#3D8D7A";
        efkp1.style.backgroundColor = "#A3D1C6";
        efkp2.style.backgroundColor = "#A3D1C6";
        efkp3.style.backgroundColor = "#A3D1C6";
        efkp4.style.backgroundColor = "#A3D1C6";
        projects.style.backgroundColor = "#FBFFE4";
        efkp1.style.color = "black";
        efkp2.style.color = "black";
        efkp3.style.color = "black";
        efkp4.style.color = "black";
        mpb1.style.color = "black";
        mpb2.style.color = "black";
        mpb3.style.color = "black";
        up.style.color = "black";
    }
}
