addEventListener('load', (event) => {
    const body = document.getElementsByTagName("body")[0];

    const names = [
        "Kobe",
        "Casper",
        "Ben",
        "Wout",
        "Dokan",
        "Roel"
    ]
    
    names.forEach(name => {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h1text = document.createTextNode(`Hello ${name}`);
        
        const p = document.createElement("p");
        const ptext = document.createTextNode("Welcome to our Component");
        
        h1.appendChild(h1text);
        p.appendChild(ptext);
        div.appendChild(h1);
        div.appendChild(p);
        
        body.appendChild(div);
    })
});



