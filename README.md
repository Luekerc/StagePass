# StagePass
##Experience the music scene from the inside by hosting band practice.

Do more than just support local music, be a *_part_* of it. Participate and make new friends (meet chicks or future rock stars...or BOTH!) by sharing any unused space you have like a garage, a barn or a basement with a band who needs a place to practice. Musicians need a place to collaborate and _you_ can offer that missing piece.  Even if you know nothing about music, this is your door into that world of which you've always wanted to be a part. 

If you have a space you'd like to share, you can become a Space Master by filling out your profile at the StagePass website.  The registration form will ask you a little bit about your place like where it is, what kind and how big.  Bands are generally friendly people and be happy to follow any rules you set out before hand: no smoking indoors, band members only, etc... However, in the rare instance you do find a bad apple you can tell them to go pound sand and then write a review about them on their band profile page.

Most people in bands are pretty cool (like duh!) so this is an excellent opportunity to make some new friends.  Depending on what kind of arrangements you work out, you might find yourself backstage at the next big concert.  At the very least, you can always reserve some bragging rights about how you knew them "when". 

##User Stories
Here's the link to my Trello user story page.  [StagePass](https://trello.com/b/ChH0vNBb/final-project-stagepass)

##Wireframe
As attached

##Models
There are two models in this website: Band and Space Master.  
Band: {
	name: "",
	pic: "",
	genre: "",[rock, country, heavy metal, pop]
	number: ,
	average age: ,
	open practice: y/n,
	city:"",
	website: "",
	agree to terms of use: y/n,
	contact info: ""
}

Space Master:{
	name: "",
	preferred genres: "",[rock, country, heavy metal, pop]
	open practice: booelan, (defined as  guests other than band members allowed)
	city: "",
	space type: "", [garage, bedroom, basement, barn, shed]
	alcohol ok?: y/n,
	smoking? y/n,
	storage ok?: y/n,
	loading issues: {
			stairs: y/n,
			drive up?: y/n,
			Entrance type:{
					garage door
					house door
					barn door
					sliding glass
					chimney
				}
		}
	pictures: img,
	agree to terms of use?: y/n
}
## API's, Plugins, Libraries and Frameworks
        *Sails
        *Bower
        *Angular
        *Javascript
        *JQuery
        *Google Maps API (optional) 

