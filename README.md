# endroit facile

Place your furnitures in personalised environments and find the right combination of furnitures for your home decor.

## Inspiration

I moved to a new city and we were renovating our house, just then I realized how frustrating it is to match the furniture settings to your decor. We had to go through a series of trying and replacement of furniture before we were able to find the right match. Just then the idea popped up of placing virtual furniture. There are a lot of existing solutions but the ease of placing it through Instagram as well as sharing and getting reviews from friends and family through the social platform would make it so less frustrating. Hence we decided to build "endroit facile".

## What it does

It lets you try out different furniture in real time right through your Instagram camera while being able to resize, scale, position, and rotate. At the same time it displays the scale of the placed 3D furniture in percentage proportionate to 50%.

## How I built it
The theme for this Hackathon was "World AR Effects", in that we specifically focused on plane tracking. We are basically placing 3D models of furniture on the tracked plane. We are also facilitating the user to resize, scale, position, and rotate the placed 3D object via Screen Pan, Screen Pinch and Screen Rotate patches attached with the specific properties of the furniture models. Also we are using the Native UI Picker provided by the Spark AR Studios to switch between different 3D models.


## Challenges I ran into
* One of the key challenge that we ran into was bring the size of are project to fit for Instagram, because we are using multiple 3D models in the project the size of the project was way too big.
* We didn't want the user to try just one furniture in the filter so we had to figure out a way to give multiple choices of furniture to the user.
* We wanted to give the user a rough idea of the size of the furniture, so we had to display a number to represent the scale but dealing with signals were causing an issue. The 2D text receives a string input but the scale output was of type number.  

## Accomplishments that I'm proud of


## What I learned
* Reducing the size of the 3D models to fit the effect.
* How to use Native UI picker.
* How to convert a number data type to string data using basic scripting techniques. 

## What's next for Endroit Facile

* Improving texture in 3D Models.
* Giving choice to user of changing material/texture/polish of the furniture.
* Making efficient 3D Models to allow them to choose from more variety of furniture.

