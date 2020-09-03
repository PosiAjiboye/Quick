//immediate invoked function expression
(function() {
    const quotes = [
        {
            quote: 
            "Life is too short and sweet to be spent cribbling and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
            author: "- Life"
        },
        {
            quote: 
            "Humor is richly rewarding to the person whi employs it. It has some value in gaining and holding attention. But it hasno persuasive value at all",
            author: "- John Kenneth Galbraith"
        },   
        {
            quote: 
            "In life, pondering on peoples feedback is important, but having a stance on your vision is more Important because not everybody can envision your Dreams",
            author: "- Posi Ajiboye "
        },
        {
            quote: 
            "It is good that a man bear his yoke in the days of his youth",
            author: "- Lam. 3:27"
        },   
        {
            quote: 
            "Don't give heed to all the things that men say, otherwise, you'll hear your sevant cursing you",
            author: "- Eccl. 7:21"
        },
        {
            quote: 
            "Among other factors, imagination/Envisioning is more powerful than skill",
            author: "- Posi Ajiboye"
        },   
    ]
 
    const btn = document.getElementById('btn-generate');

    btn.addEventListener('click', function() {
        let random = Math.floor(Math.random()*quotes.length);
       console.log(random); 


       document.getElementById('quote').textContent = quotes[random].quote;
       document.querySelector('.author').textContent = quotes[random].author;
    });
})();