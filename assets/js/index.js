skills = document.getElementById('skills')
elements = skills.querySelectorAll(".skill")

var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
        element = entries[0]["target"]
        if(element) {
            console.log(element)
            element.classList.add(element.id)
        }
}, { threshold: [1] });


elements.forEach((e) => {
    observer.observe(e);
})

