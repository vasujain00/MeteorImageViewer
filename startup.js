if(Meteor.isServer)
{

Meteor.startup(function() {
if(Images.find().count() == 0)
{

Images.insert(
             {

             img_src: "laptops.jpg",
             img_alt: "some lappy"

             }


	);
Images.insert(
             {

             img_src: "1.jpg",
             img_alt: "some Vasu"

             }


	);

Images.insert(
             {

             img_src: "53.jpg",
             img_alt: "some labels"

             }


	);

}


});



}