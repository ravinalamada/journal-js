console.log('it works');

// Creat an Entry object inside an array to restore the elements

 myEntry = [
    {
        title:"First blog letter",
        content:"Coding is the best thing I have ever done so far, I love it because it makes my brain work hard which I think is good for us " 
    },
    {
        title:"Today is a good day",
        content:"The weather is so wonderful today because although it is winter season, it is still sunny.So everyone looks so delighted"
    },
    {
        title: "An other day at onja",
        content:"We have been working hard here everyday which ia what we are supposed to do. All of the students focus on doing their exercise about javascript program"
    }
];

// Let's generate a prompt that will indicate the menu

    let myMenu = prompt("Welcome to my onja journal \n Choose (1) for listing all the entries \n Choose (2) for adding a new entry\n Choose (3) to quit");
    alert(`${myMenu}`);
    

//  Indicate the list of the entries
    for(let i = 0; i < myEntry.length; i++) {
        if (myMenu === "1") {
            alert(myEntry[0].title),
            alert(myEntry[0].content);
        }
    }
     
     