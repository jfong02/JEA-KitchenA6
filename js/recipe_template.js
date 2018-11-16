// Calls this while document not ready
var ready = false;
if (!ready) {
	loading();
}
function loading() {
	console.log('loading...');
	$('#loading-icon').show();
}

var recipePageData = [
 	{  'title': 'Chicken and Kale Soup',
 	   'image':'./images/Chicken-Kale-Detox-Soup.jpg',
	   'ingredients': ['1 tablespoon extra virgin olive oil',
                       '1 large white onion, diced',
	                   '4 cloves garlic, crushed',
	                   '2 medium carrots, diced',
	                   '2 stalks celery, diced',
	                   '1 lb. organic boneless chicken breast, cubed',
	                   '5 cups organic chicken stock',
	                   '3-4 handfuls fresh kale, ribs',
	                   '1/2 teaspoon sea salt',
	                   '1/2 teaspoon ground pepper',
	                   '1 tablespoon parsley, roughly chopped'
	                  ],
		'steps': ['In a large pot over medium-low heat, heat oil.',
				  'Add in onion and garlic and pan fry for one minute.',
				  'Add in carrots and celery. pan fry for five minutes, until onion is translucent.',
				  'Pat chicken dry and season generously with salt and pepper.',
				  'Once onion is translucent, add in chicken and pan fry until chicken is opaque and fully cooked through. Should take about 8-10 minutes. Stir occasionally.',
				  'Pour in chicken stock and season with salt, pepper, ginger and lemon juice if using.',
				  'Add in kale.',
				  'Bring to a boil over high heat. Turn heat down to low and let simmer for 15 minutes. Taste and adjust seasoning as desired.'
				 ],

		'relatedRecipesIndex': [1,2,3],
		'relatedTitle': ['Kale Pesto',
		                 'Chinese Style Kale',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/kale-pesto.jpg',
		    'relatedIMG2':'./images/Chinese-Style-Kale.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF2':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',

	    'index': 0
    },
 	{'title': 'Kale Pesto',
 	   'image':'./images/kale-pesto.jpg',
	   'ingredients': ['2 to 3 cloves garlic',
	                   '3 cups packed kale',
	                   '3/4 cup hemp seeds or toasted walnuts or pecans',
	                   '2 tablespoons lemon juice',
	                   '3/4 teaspoon fine-grain sea salt',
	                   '3/4 teaspoon ground pepper',
	                  ],
		'steps': ['Make the pesto: In a food processor, add the peeled garlic cloves and process until the garlic is minced. Add the kale, hemp seeds, lemon juice, salt and pepper. Turn on the food processor and drizzle in the oil. Process until the pesto reaches your desired consistency, stopping to scrape down the sides as necessary. Taste and add more lemon, salt or pepper if necessary. (You can thin out the pesto with more oil, but if you’re serving with pasta, keep in mind that you can also thin it out with reserved pasta cooking water.)',
				  'Cook the pasta (optional): Bring a large pot of salted water to boil. Add the pasta and cook until al dente, according to package directions. Reserve one cup cooking liquid before draining the pasta. Let the pasta and pasta water cool for a minute to make sure the high heat doesn’t damage the flax oil pesto.',
				  'If you intend to have leftovers, transfer the amount of pasta you think you’ll be eating immediately to a serving bowl and mix in pesto with splashes of cooking water. Otherwise, you can mix the pasta and pesto together in your cooking pot, adding splashes of cooking water as necessary. Keep in mind that you have diluted the flavor a bit with the cooking water, so taste and add more lemon, salt or a drizzle of olive oil as necessary.'
				 ],

		'relatedRecipesIndex': [0,2,3],
		'relatedTitle': ['Chicken Kale Soup',
		                 'Chinese Style Kale',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/Chinese-Style-Kale.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 1
    },
 	{'title': 'Chinese Style Kale',
 	   'image':'./images/Chinese-Style-Kale.jpg',
	   'ingredients': ['1 tbsp vegetable oil',
	                   '1 large garlic clove, sliced',
	                   '200g bag kale',
	                   '1 tbsp soy sauce',
	                   '1 tbsp oyster sauce'
	                  ],
		'steps': ['Heat the oil in a large wok or frying pan, then tip in the garlic and cook for a few secs. Throw in the kale and toss around the pan to coat in the garlicky oil.',
				  'Pour over 100ml boiling water and cook for 7 mins more until the kale has wilted and is cooked through.',
				  'Stir in the soy and oyster sauces and heat through to serve.'
				 ],

		'relatedRecipesIndex': [0,1,3],
		'relatedTitle': ['Chicken Kale Soup',
		                 'Kale Pesto',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 2
    },
 	{'title': 'Cranberry Kale Salad',
 	    'image':'./images/Cranberry-Kale-Salad.jpg',
		'ingredients': ['3 tbsp olive oil, divided',
				  '1 shallot, peeled and thinly sliced',
				  '3 cloves garlic, coarsely chopped',
				  '1 cup dried cranberries',
				  '2 tbsp red wine vinegar',
				  '2 teaspoons honey',
				  'juice and zest of half a lemon',
				  '1/8 tsp salt',
				  '1/8 tsp ground pepper',
				  '1 bunch kale, very thinly sliced',
				  'cup sliced almonds',
				  '1/4 cup crumbled blue cheese or goat cheese'
				 ],
	   'steps': ['Heat 2 Tbsp. oil in a large saute pan over medium-high heat. Add shallot and saute for at least 5 minutes or until tender. Add garlic and saute for 1 minute. Then add cranberries, red wine vinegar, honey and lemon juice and zest, and stir to combine. Season with salt and pepper.',
	             'With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.'
	                  ],

		'relatedRecipesIndex': [0,1,2],
		'relatedTitle': ['Chicken Kale Soup',
		                 'Kale Pesto',
		                 'Chinese Style Kale'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Chinese-Style-Kale.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Chinese%20Style%20Kale',
	    'index': 3
    },
 	{'title': 'Kale Chips',
 	   'image':'./images/kale-chips.jpg',
	   'ingredients': ['1 tbsp olive oil',
	                   '1 tsp seasoned salt',
	                   '200g bag kale'
	                  ],
		'steps': ['Preheat an oven to 350 degrees F (175 degrees C). Line a non insulated cookie sheet with parchment paper.',
				  'With a knife or kitchen shears carefully remove the leaves from the thick stems and tear into bite size pieces. Wash and thoroughly dry kale with a salad spinner. Drizzle kale with olive oil and sprinkle with seasoning salt.',
				  'Bake until the edges brown but are not burnt, 10 to 15 minutes.'
				 ],

		'relatedRecipesIndex': [0,1,3],
		'relatedTitle': ['Chicken Kale Soup',
		                 'Kale Pesto',
		                 'Cranberry Kale Salad'],
		    'relatedIMG1':'./images/Chicken-Kale-Detox-Soup.jpg',
		    'relatedIMG2':'./images/kale-pesto.jpg',
		    'relatedIMG3':'./images/Cranberry-Kale-Salad.jpg',
		    'relatedREF1':'./recipe_template.html?recipe=Chicken%20and%20Kale%20Soup',
		    'relatedREF2':'./recipe_template.html?recipe=Kale%20Pesto',
		    'relatedREF3':'./recipe_template.html?recipe=Cranberry%20Kale%20Salad',
	    'index': 4
    }
]


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$('#loading-icon').hide();
	ready = true;
  console.log('recipe loaded');

  // compile the template
  var source   = $("#recipe-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedRecipe");

  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var queryParams = new URLSearchParams(window.location.search);
  var recipeTitle = queryParams.get('recipe');
  console.log('query for', recipeTitle);

  var ingList = undefined;
  var matchedItems = [];

  for (var i = 0; i < recipePageData.length; i++) {
    var curData = recipePageData[i];
    if (curData.title == recipeTitle) {
	    var curHtml = template(curData);
	    parentDiv.append(curHtml);
	    ingList = curData.ingredients;
    }
  }
  for ( var i = 0; i < ingList.length; i++ ) {
  	var currIng = ingList[i];
  	if( )
  }

//   check if favorites button is supposed to be addin or addout
	var checkfav = JSON.parse(localStorage.getItem('favoritedrecipes'));
	var recipeTitle = queryParams.get('recipe');
	if (checkfav) {
		for (i=0; i < checkfav.length; i++) {
			if (checkfav[i].name == recipeTitle) {
				$('#addin').hide();
				$('#addout').show();
				console.log('its favorited');
				break;
			}
		}
	}

	window.onclick = function(event) {
        if (event.target != document.getElementById('mainnav') && event.target !=document.getElementById('opensidebar') && event.target !=document.getElementById('closesidebar')) {
            closeNav();
        }
    }
 

});



// * Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mainnav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    $("#opensidebar").hide();
    $("#closesidebar").show();
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mainnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $("#opensidebar").show();
    $("#closesidebar").hide();
}

	function store() {
		var allrecipes = JSON.parse(localStorage.getItem("allrecipes"));
		var favoritestuff = JSON.parse(localStorage.getItem('favoritedrecipes'));
        var newfav = [];
        if (favoritestuff) {
            for (i=0; i < favoritestuff.length; i++) {
				newfav.push(favoritestuff[i]);
				console.log(favoritestuff[i]);
            }
        }
        console.log(newfav);

		if (allrecipes) {
            for (i=0; i < allrecipes.length; i++) {
				if (allrecipes[i].name=='Chicken and Kale Soup') {
					var push=allrecipes[0];
					newfav.push(push);
					console.log('found matching recipe to favorite');
				}
            }
        }

        // push data to local storage
        console.log(newfav);
        localStorage.setItem('favoritedrecipes',JSON.stringify(newfav));
	}

	function remove() {
		var favoritestuff = JSON.parse(localStorage.getItem('favoritedrecipes'));
		var newfav = [];
        if (favoritestuff) {
            for (i=0; i < favoritestuff.length; i++) {
				if (favoritestuff[i].name !='Chicken and Kale Soup') {
					newfav.push(favoritestuff[i]);
					console.log(favoritestuff[i]);
				}
            }
		}
		if (newfav.length<1)
			newfav = null;
		console.log(newfav);
        localStorage.setItem('favoritedrecipes',JSON.stringify(newfav));
	}

	function toggleadd() {
	    $("#addin").toggle();
	    $("#addout").toggle().css("background", "#a6d31d");
	}
