// Generate a list of links
let myLink =  [
    {
        title: "html",
        url: "https/html.cool",
        author: "Robert"
    },
    {
        title: "css",
        url: "https/ccss.com",
        author: "Prisca"
    },
    {
        title: "javascritp",
        url: "https/js.coom",
        author: "John",
    }
];  
    let menu = `Choose an option:
    1: Show a link;
    2: Add a new link;
    3: Remove a link;
    4: quit the program;
    `
  
    let linkMenu = Number(prompt(menu));
    alert(`${linkMenu}`);

//    