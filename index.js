const faqs = document.querySelector(".stack-faqs");


faqs.addEventListener('click', (e) => {
    const activeFAQ = e.target.closest(".stack-faq")
    if(!activeFAQ) return
    toggleFAQ(activeFAQ)
})

function toggleFAQ(faq) {
    const button = faq.querySelector("button");
    const answer = faq.querySelector(".faq-answer")
    const faqIcon = faq.querySelector(".icon-expand").children[0]

    if(button.getAttribute('aria-expanded').localeCompare('true') === 0) {
        button.setAttribute('aria-expanded', false)
        
        answer.setAttribute("aria-hidden", true);
        answer.setAttribute("hidden", '');
        
        faqIcon.setAttribute('href', "/assets/images/svgs.svg#icon-plus")
    } 
    else {
        button.setAttribute('aria-expanded', true)

        answer.setAttribute("aria-hidden", false);
        answer.removeAttribute("hidden");

        faqIcon.setAttribute('href', "/assets/images/svgs.svg#icon-minus")
    }

}