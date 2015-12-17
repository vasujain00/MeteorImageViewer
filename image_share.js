Images = new Mongo.Collection("images");
console.log(Images.find().count());


if (Meteor.isClient) {
 var img_data = [{

   img_src: "laptops.jpg",
   img_alt: "some loptops"

},
{

   img_src: "1.jpg",
   img_alt: "some Vasu"

},
{

   img_src: "53.jpg",
   img_alt: "some labels"

}
];

Template.images.helpers({images:img_data});
Template.images.events({
'click .js-image':function(event){
	$(event.target).css("width","50px");


}
 
});

 
}

if (Meteor.isServer) {
 console.log("server");
 
}
