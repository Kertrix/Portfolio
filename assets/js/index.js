
let observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
        element = entries[0]["target"]
        if(element) {
            element.classList.add(element.id)
        }
}, { threshold: [1] });

skills = document.getElementById('skills')
elements = skills.querySelectorAll(".skill")


observer.observe(elements[0]);
observer.observe(elements[1]);
observer.observe(elements[2]);
observer.observe(elements[3]);
observer.observe(elements[4]);

