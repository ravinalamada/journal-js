console.log('it works');

// Creat an Entry object inside an array to restore the elements

 let myJournal = [
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
    let myMenu = prompt("Welcome to my onja journal \n Choose (1) for listing all the entries \n Choose (2) for adding a new entry\n Choose (3) to quit \n Choose (4) to delete the last entry \n Choose (5) delete a specific entry");
    alert(`${myMenu}`);
        
// Indicate the list of the entries
    if (myMenu === "1") {
        for(let i = 0; i < myJournal.length; i++) {
            alert('Title:' +' '+ myJournal[i].title + '\n'+ 'Content:' + ' ' + myJournal[i].content);
        };   
// Generated the code that repeat the new journal title and content which are added            

    }else if (myMenu === '2') {
        let newEntryTitle = prompt('Enter your journal title');
        let newEntryContent = prompt('Enter your journal content');
        let newJournalEntry = {
                                title: newEntryTitle,
                                content: newEntryContent
                               };
        myJournal.push(newJournalEntry);
        for(let i = 0; i < myJournal.length; i++) {
            alert('Title:' +' '+ myJournal[i].title + '\n'+ 'Content:' + ' ' + myJournal[i].content);
        }
// Generated a code that quit the journal program

    }else if(myMenu === "3") {
            alert("Thank you for reading");

// Generated a code that delete the last element in Array            
    }else if(myMenu === "4") {
        myJournal.pop();
        for(let i = 0; i < myJournal.length; i++) {
            alert('Title:' +' '+ myJournal[i].title + '\n'+ 'Content:' + ' ' + myJournal[i].content);
        };
// Generated the code that delete a specific element in Array        
    }else if (myMenu === "5") {
        let indexEntry = prompt("Which index do you want to delete: (1)");
        myJournal.splice(indexEntry, 1);
        for(let i = 0; i < myJournal.length; i++) {
            alert('Title:' +' '+ myJournal[i].title + '\n'+ 'Content:' + ' ' + myJournal[i].content);
        };
    };  
   
     