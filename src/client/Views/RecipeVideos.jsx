import React, { useState } from "react";
import {
  Jumbotron,
  Modal,
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";


//jumbotron needs filled, buttons need centered, weird br thing route from cupcake needs taken off, delete unddeded recipe.md

const RecipeVideos = () => {
  const [mdShow1, setmdShow1] = useState(false);
  const [mdShow2, setmdShow2] = useState(false);
  const [mdShow3, setmdShow3] = useState(false);
  const [mdShow4, setmdShow4] = useState(false);
  const [mdShow5, setmdShow5] = useState(false);
  const [mdShow6, setmdShow6] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h2 className="text-center">Let's Get Cooking!</h2>
          </Container>
        </Jumbotron>
      </div>

      <Row>
        <Col lg={4} className="video-container 1">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/DqhqIfHww7g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header></Card.Header>

            <Card.Body>
              <Button
                type="button"
                class="btn btn-primary"
                onClick={() => setmdShow1(true)}
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click for Ingredients & Instructions
              </Button>
            </Card.Body>
          </Card>

          <Modal 
            size="md"
            show={mdShow1}
            onHide={() => setmdShow1(false)}
            aria-labelledby="example-modal-sizes-title-md"
          >
            <Modal.Header closeButton>
              <Modal.Title> Ingredients & Instructions </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <h3>Scrambled eggs</h3> 
             
              Take 3 eggs, 2 tbsp of milk combine and wisk stove to light heat
              pour eggs onto pan scramble eggs
              <hr />
              <h3>2 Ingredient Banana Pancakes</h3>
              
              Take 1 banana and mash into a bowl with 2 eggs. Wisk and scoop
              into a hot pan. Flip when ready, enjoy!
              <hr />
              <h3>Semi-Homemade Sticky Buns</h3>
            
              Take a muffin tin, place 1 slice of butter, 1 tbsp of brown sugar
              and a handful of chopped pecans in each tin. Add 1 biscuit from a
              can of niscuits into each tin, press firmly. Bake at 350 degrees
              for 8 minutes.
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Col>
        <Col lg={4} className="video-container 2">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/FcKvYl-GaAA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header></Card.Header>

            <Card.Body>
              <Button
               onClick={() => setmdShow2(true)}
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click for Ingredients & Instructions
              </Button>
            </Card.Body>
          </Card>

          <Modal
            size="md"
            show={mdShow2}
            onHide={() => setmdShow2(false)}
            aria-labelledby="example-modal-sizes-title-md"
          >
            <Modal.Header closeButton>
              <Modal.Title>Ingredients & Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <h3>Sugar Cookie Pizza</h3>
                   
                    ½ cup unsalted butter, 1 stick, softened 1 ½ teaspoons
                    vanilla extract, divided ½ cup granulated sugar 3
                    tablespoons light brown sugar 1 large egg, room temperature
                    1 ½ cups all-purpose flour 1 teaspoon cream of tartar ½
                    teaspoon baking soda 1 pinch salt 6 oz cream cheese, room
                    temperature ⅓ cup powdered sugar ⅓ cup chocolate hazelnut
                    spread optional toppings:
                    1 cup fresh berries peanut butter mini pretzel ½ cup fruit
                    cereal
                    <h5>Preparation</h5>
          Preheat the oven to 350˚F (180˚C). Line a 10-inch (25-cm)
                    cast iron pan with parchment paper. In a large bowl, mix the
                    butter with 1 teaspoon of vanilla extract until light and
                    fluffy. Add the granulated sugar, then the brown sugar, and
                    mix until well incorporated. Add the egg and stir until
                    thoroughly incorporated. Using a fine mesh sieve, sift the
                    flour, cream of tartar, baking soda, and salt into the
                    dough. Combine with a spatula until evenly mixed. Spread the
                    cookie dough in an even layer in the prepared pan. Chill in
                    the fridge for 30 minutes, then bake for 15-18 minutes until
                    lightly golden. Let cool. In a medium bowl, combine the
                    cream cheese, powdered sugar, and remaining ½ teaspoon of
                    vanilla extract until well incorporated. Spread half of the
                    frosting onto a quarter of the cooled cookie and the other
                    half on the diagonally opposite corner. Frost the other
                    quarters with the chocolate hazelnut spread. Decorate with
                    your favorite toppings. Enjoy!
                    <hr />
                   <h3>Cheesy Taco Breadsticks</h3> 
                    
                    1 small onion, diced 1 tablespoon garlic, minced 1 lb ground
                    beef 2 tablespoons taco seasoning 1 lb pizza dough, rolled
                    out into a rectangle 1 cup mexican cheese blend 1 tablespoon
                    olive oil salsa, for dipping guacamole, for dipping
                   
                    <h5>Preparation</h5>
                    
                    Sauté onions and garlic until transparent. Add the ground
                    beef and taco seasoning. Cook until browned. Remove from
                    heat and set aside. Preheat oven to 425˚F (220˚C). On a
                    floured surface, cut the pizza dough into 5 strips and place
                    spoonfuls of the beef mixture into the middle of each strip,
                    followed by the Mexican cheese blend. Fold and pinch the
                    dough around the cheese and meat along the entire strip,
                    ensuring to close off the ends. Brush each breadstick with
                    olive oil and transfer to a baking sheet. Bake for 10
                    minutes. Remove from the oven and top each breadstick with
                    more cheese. Bake for another 5 minutes or until the cheese
                    is golden brown. Enjoy!
                    <hr />
                   <h3>Aquarium Cookies</h3> 
                  
                    4 oz unsalted butter, softened ½ cup sugar 1 egg 2 cups
                    flour 20 pieces hard candy sprinkle, to taste ¼ cup white
                    chocolate, melted
                    
                   <h5>Preparation</h5> 
                    
                    In a medium bowl, mix softened butter and sugar until
                    smooth. Add the egg and stir well to combine. Sift in the
                    flour and fold until fully incorporated. Cover the dough
                    with plastic and rest in a fridge for at least 30 minutes.
                    Preheat the oven to 350˚F (180˚C).Sprinkle flour on the work
                    surface and rolling pin so the dough won’t stick. Roll out
                    the dough to ¼- to ⅛-inch (6- to 3-mm) thickness. Using a
                    3-inch (7-cm) round cookie cutter, cut out the dough. Cut
                    out center of each cookie with using a 2-inch (5-cm) round
                    cookie cutter. Place the cookie on a parchment-lined baking
                    sheet and bake for 10 minutes. Take out the sheet from the
                    oven and place hard candies in the center of each cookies.
                    Bake for 3-5 minutes or until the hard candy melts and
                    spreads out. Let the cookies cool completely. In a
                    microwave-safe bowl, melt the white chocolate, about 10-15
                    seconds. For the bottom cookies, add your favorite sprinkles
                    onto the hard candy. Take the top cookies and drizzle melted
                    chocolate around the rims. Immediately sandwich the 2
                    cookies and set in fridge for 15 minutes. Enjoy!
                    <hr />
                    <h3>Animal Pancakes</h3>
                   
                    6 cups pancake mix, prepared strawberry, for decoration
                    blueberry, for decoration banana, for decoration chocolate
                    chip, for decoration maple syrup, to top, optional
                   
                    <h5>Preparation</h5>
                   
                    pare pancake mix per box instructions. Heat a nonstick pan
                    or pancake griddle on medium heat. For large pancakes, pour
                    1 cup (235 ml) of batter onto the pan. For small pancakes,
                    pour a little less than ¼ cup (60 ml) of batter onto the
                    pan. For medium pancakes, pour ⅓ cup (80 ml) of batter onto
                    the pan. Allow to cook until bubbles form and begin to pop
                    all around the pancake. The pancake will also lose its shiny
                    sheen and begin to look more matte. Flip and cook on the
                    other side for 2-3 minutes, or until the bottom is lightly
                    browned.
                    <hr />
                    <h3>Hidden Vegetable Macaroni and Cheese</h3>
                   
                    1 lb elbow macaroni, cooked al dente ½ cup water 1 cup
                    cauliflower florets 1 cup butternut squash, diced 1 cup
                    carrot, sliced 2 cups milk 2 cups cheddar cheese, shredded 4
                    oz cream cheese
                  <h5>Preparation</h5>
                    
                    Add water, cauliflower, squash, and carrots in a pot over
                    medium heat. Cover and cook until vegetables are tender. Add
                    everything into a blender, including cooking water, and
                    blend until smooth. Return blended veggies to the pot over
                    medium heat, and add the milk, cheese, and cream cheese.
                    Stir until smooth. Add macaroni, reduce heat, mix
                    thoroughly, and cover for 20 minutes. Enjoy!
                    <hr/>
                    <h3>Super Soft Banana Bread Cookies</h3>
                   
                    ½ cup sugar ¼ cup brown sugar 1 teaspoon vanilla extract ½
                    cup butter, softened ½ cup greek yogurt 1 egg 2 ripe bananas
                    2 ½ cups flour ½ teaspoon baking powder ½ teaspoon baking
                    soda 1 pinch salt 2 teaspoons cinnamon ½ cup chocolate chips
                   <h5>  Preparation</h5>
                  
                    Preheat oven to 350˚F (180˚C). In a bowl, whisk sugar, brown
                    sugar, vanilla extract, and butter together until creamy.
                    Add Greek yogurt, egg, and bananas. Mash bananas and mix
                    thoroughly. Gently fold in the flour, baking powder, baking
                    soda, salt, and cinnamon just until combined. Add chocolate
                    chips and stir in gently. Like a baking sheet with parchment
                    paper and place spoonfuls of dough 2 inches (5 cm) apart.
                    SCROLL FOR MORE CONTENT Bake for 15 minutes and cool on a
                    cooling rack. Enjoy!
                    <hr/>
                    <h3>Unicorn Cheesecake</h3>
                   
                    Filling: 48 oz cream cheese 1 cup sugar 2 tablespoons vanilla
                    extract 2 cups milk 2 tablespoons gelatin food coloring,
                    blue, purple, and pink
                   Crust: 20 graham crackers 4 tablespoons unsalted butter ⅓ cup
                    Unicorn Horns: 9 mini waffle cones 2 cups white chocolate,
                    melted sprinkle, pink and blue
                    Garnish: sprinkle gumball swirl lollipop
                   <h3>Preparation</h3>
                    
                    Make the filling: In a large bowl, use an electric hand
                    mixer to combine the cream cheese, sugar, and vanilla.
                    Microwave the milk for 2 minutes and mix with the gelatin.
                    Add to the cream cheese mixture. Separate the batter into 3
                    medium bowls. Add a drop of food coloring to each bowl and
                    stir to combine. Make the crust: Add the graham crackers to
                    a zip-top plastic bag and use a rolling pie to crush until
                    they resemble coarse sand. Transfer to a medium bowl and add
                    the butter and sugar. Mix until thoroughly combined. Press
                    into a greased 8-inch springform pan and chill. r the blue
                    batter into the graham cracker crust and refrigerate for 30
                    minutes, or until firm. Add the purple batter, and
                    refrigerate for another 30 minutes. Add the pink batter, and
                    refrigerate for 60 minutes more. To make the unicorn horns,
                    dip each waffle cone into the white chocolate, top with
                    sprinkles, and chill until firm. Top the cheesecake with the
                    sprinkles, unicorn horns, gumballs, and the lollipop. Enjoy!
                    </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          
        </Col>
        <Col lg={4} className="video-container 3">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/zrXWIWlF5_M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header></Card.Header>

            <Card.Body>
              <Button
              onClick={()=>setmdShow3(true)}
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click for Ingredients & Instructions
              </Button>
            </Card.Body>
          </Card>
          <Modal
            size="md"
            show={mdShow3}
            onHide={() => setmdShow3(false)}
            aria-labelledby="example-modal-sizes-title-md"
          >
            <Modal.Header closeButton>
              <Modal.Title>Ingredients & Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <h3>Brown Paper popcorn</h3>
                    
                    <h5>Preparation</h5>
                   
                    Microwave 1/3 cup popcorn in a brown paper bag (folding down
                    the corners of the bag so it doesn't open) for about 2.5
                    minutes. When popping slows down, remove. Be sure to monitor
                    so nothing burns.
                    <hr />
                    <h3>Pop tarts</h3>
                   <h5>Preparation</h5>
                    Unroll a can of crescent rolls, keeping them as rectangles.
                    Pinch the seems closed. Spoon about 1 tablespoon jam in the
                    center of rectangle, leaving about 1/4 inch empty along the
                    edges. Place another rectangle on top and crimp edges with a
                    fork. Bake at 425 for about 8-10 minutes.
                    <hr />
                   <h3>Fruit Dip</h3> 
                    <h5>Preparation</h5>
                    Mix ¼ cup greek yogurt, ¼ cup almond butter, 1 tbsp honey, ¼
                    tsp cinnamon, ¼ tsp vanilla in a small bowl. Dip
                    strawberries and apples!
                    <hr />
                    <h3> Hummus Cocktail</h3>
                   <h5>Preparation</h5>
                    Scoop hummus into plastic cup. Optional Vegetables -
                    Carrots, Bell Pepper, Cucumber etc
                    <hr />
                    <h3>Mug Cake</h3>
                    <h5>Preparation</h5>
                    Mix 1 tbsp cocoa powder, 3 tbsp flour, 1/8 tsp salt, 1/4 tsp
                    baking powder, 1 tbsp sugar, 3 tsp coconut or vegetable oil,
                    3 tbsp milk, 1/2 tsp pure vanilla extract and 1 tbsp
                    kid-friendly protein powder in a bowl. Pour into a mug and
                    microwave for 1-1.5 minutes.
                    </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col lg={4} className="video-container 4">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/vrpof_QQUe0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header></Card.Header>

            <Card.Body>
              <Button
              onClick={()=>setmdShow4(true)}
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click for Ingredients & Instructions
              </Button>
            </Card.Body>
          </Card>

          <Modal
            size="md"
            show={mdShow4}
            onHide={() => setmdShow4(false)}
            aria-labelledby="example-modal-sizes-title-md"
          >
            <Modal.Header closeButton>
              <Modal.Title>Ingredients & Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                   <h3>Two Ingredient Chocolate Cake</h3>  
                   <h5>Preparation</h5>
                   4 eggs, whites and yolks separated 9 oz semi sweet chocolate
                    powdered sugar, to serve vanilla ice cream, to serve
                    seasonal fruit, to serve
                    Heat the oven to 325˚F (170˚C). Place the chocolate in a
                    microwave-safe bowl and melt completely, about 1 minute.
                    Separate the egg yolks and egg whites. Using a hand mixer,
                    whisk the whites until soft peaks form. Add the yolks, one
                    by one, into the bowl of chocolate, whisking to combine.
                    Using a rubber spatula, gently fold ⅓ of the whipped egg
                    whites into the yolk and chocolate mixture. Repeat with the
                    remaining egg whites, adding ⅓ at a time. Pour the batter in
                    a greased 6-inch (15 cm) cake mold. Bake for 30 minutes.
                    Once the cake is cool to the touch, gently invert it onto a
                    plate. Optional: Sprinkle with powdered sugar, slice and
                    serve top with ice cream. Serve with seasonal fruit. Enjoy!
                    <hr />
                  <h3>Two Ingredient Strawberry Sorbet</h3>  
                    <h5>Preparation</h5>
                     1 lb strawberry ¼ cup honey
                    Hull the strawberries by using a straw to push out the stem
                    of each strawberry. Cut strawberries in half and place on a
                    parchment paper-lined baking sheet and freeze until
                    hardened. Add the frozen strawberries and honey to a food
                    processor and combine until evenly mixed. Transfer to a loaf
                    pan and transfer to freezer until completely frozen. Enjoy!
                    <hr />
                    <h3>Two ingredient Pasta</h3>
                    <h5>Preparation</h5>
                    1 cup shredded mozzarella cheese 1 egg yolk
                    Add the mozzarella to a bowl and microwave for 1-2 minutes,
                    until melted. Allow the mozzarella to cool for 30 seconds.
                    With a spatula, gently fold the egg yolk into the cheese.
                    Turn the mixture out onto a parchment paper-lined baking
                    sheet. Place another piece of parchment paper on top of the
                    dough and press down with your hand until thin. Remove the
                    top piece of parchment and cut the dough into thin strips.
                    Place the “pasta” on a rack and refrigerate for four hours
                    or overnight. Place the “pasta” in boiling water for one
                    minute. Drain into a colander and run cool water over the
                    pasta to prevent sticking. Serve with your favorite sauce
                    and toppings. Enjoy!
                    <hr />
                   <h3>Two Ingredient flatbread</h3> 
                   <h5>Preparation</h5>
                    
                    1 cup whole fat greek yogurt 1 cup self-rising flour, plus
                    more for dusting In a large bowl, mix together yogurt and
                    flour until it forms a smooth dough. Transfer the dough to a
                    floured surface. Divide into 4 equal parts. Roll out each
                    piece of dough to about 8 inches (20 cm) in diameter, using
                    plenty of flour to prevent sticking or tearing. Cook the
                    bread in a dry pan over medium-high heat for 2-4 minutes per
                    side, until golden brown and cooked through. Enjoy! Two
                    <hr/>
                   <h3> 2Ingredient Chocolate Souffle</h3> 
                    
                   
                    <h5>Preparation</h5>
                     ½ cup chocolate hazelnut spread 2 eggs
                    Preheat the oven to 375˚F (190˚C). Separate the egg yolks
                    from the egg whites and place into two bowls. Mix the
                    chocolate hazelnut spread into the bowl with the egg yolks.
                    In the second bowl, whisk 2 egg whites until stiff peaks
                    form. Fold ⅓ of the whipped egg whites into the
                    chocolate/egg yolk mixture until fully incorporated. Add the
                    remaining egg whites to the mixture and fold gently, but
                    thoroughly, until the mixture is smooth. Pour the mixture
                    into a greased ramekin. Clean the rims so the soufflé rises
                    evenly, and bake for 15-17 minutes. Serve immediately.
                    Enjoy!
                    </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          
        </Col>

        <Col lg={4} className="video-container 5">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/fuEkA9rG_nI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header></Card.Header>

            <Card.Body>
              <Button
              onClick={() => setmdShow5(true)}
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click for Ingredients & Instructions
              </Button>
            </Card.Body>
          </Card>

          <Modal
            size="md"
            show={mdShow5}
            onHide={() => setmdShow5(false)}
            aria-labelledby="example-modal-sizes-title-md"
          >
            <Modal.Header closeButton>
              <Modal.Title>Ingredients & Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <h3>Yummy Fluffy Vanilla Cupcakes</h3>
                   
                    self raising flour 200 grams (7/8th of a cup) 200 grams of
                    castor sugar(7/8th of a cup) 200 grams of unsalted butter-
                    room temp(7/8th of a cup) 4 eggs vanilla extract 1 tsp
                    <h5>Preparation</h5>
                    
                    Pour Castor sugar in large mixing bowl first, then add
                    unsalted butter into the bowl. Mix for 60 seconds at high
                    speed. sift the 200 grams (7/8th of a cup) of self-rasing
                    flour into the bowl with the castor sugar and butter, Crack
                    4 eggs into bowl. Mix on slow for 30 seconds. Add in vanilla
                    - mix for 30 seconds on low. Take cupcake pan, fill each cup
                    with 2 tbsp of mixture. Place into 340 degree oven for 16-17
                    minutes. Let cool for 20 minutes before icing.
                    </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          
        </Col>
        <Col lg={4} className="video-container">
          <iframe
            title="Cooking"
            width="340"
            height="380"
            src="https://www.youtube.com/embed/CpDqOH3uyAI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <Card className=" mt-1 shadow border" style={{ width: "auto" }}>
            <Card.Header></Card.Header>

            <Card.Body>
              <Button
              onClick={() => setmdShow6(true)}
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Click for Ingredients & Instructions
              </Button>
            </Card.Body>
          </Card>
          <Modal
            size="md"
            show={mdShow6}
            onHide={() => setmdShow6(false)}
            aria-labelledby="example-modal-sizes-title-md"
          >
            <Modal.Header closeButton>
              <Modal.Title>Instructions & Ingredients</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <h3>Ice Cream Sandwich Cake Whipped Cream</h3>2 cups (or one container) whipping cream 3 tablespoons
                    powdered sugar approximately 3 teaspoons vanilla Cake
                    <h5>Preparation</h5>
                   12 ice cream sandwiches 12 oz container cool whip or
                    homemade whipped cream M&Ms (or chocolate candy of choice)
                    In an electric mixer with a whisk attachment (or large bowl
                    with hand mixer) add whipping cream and vanilla, mix
                    starting on low and move it to a medium-high speed until you
                    have soft peaks. Add in powdered sugar and mix until you
                    have medium peaks. Set aside. Unwrap and place 4 ice cream
                    sandwiches on your serving plate. Add two large scoops of
                    whipped cream on top of the ice cream sandwiches and smooth
                    out until flat. Add candies and drizzle fudge sauce (heat in
                    microwave for about 20 seconds if not drizzling well).
                    Repeat for 2 more layers Freeze for about 3 hours (or as
                    long as you can wait!)
                    <hr />
                    <h3>Semi Homemade Cannoli</h3>
                   2 cups Ricotta (one 16 oz container (full fat) - 1/3 cup
                    plus 2 tablespoons powdered sugar - 1/4 cup whipped cream
                    (left over from ice cream sandwich recipe) - 1/2 teaspoon
                    cinnamon
                    <h5>Preparation</h5>
                    
                    Whisk ricotta. Add in powdered sugar and whisk. Add cinnamon
                    and continue to whisk Fold in whipped cream with a spatula
                    Add chocolate chips Fill piping bag with mixture using a
                    large piping tip Pipe filling into a cone, going above the
                    edge. Sprinkle chocolate chips on top and serve NOTE: Best
                    to assemble right before serving, or you can refrigerate for
                    15 min, but any longer and the cones will get soggy.
                    <h3> Raspberry Mousse</h3>
                   
                    *amounts are all to taste* - Unsweetened greek yogurt (5%) -
                    about 2 tsp Honey (or maple syrup) - Lime - frozen
                    raspberries - Mini chocolate chips
                    <h5>Preparation</h5>
                    
                    Mix honey into yogurt Squeeze lime and stir. Stir in frozen
                    raspberries, smushing them to release their juices. Mix in
                    chocolate chips. Freeze for 30 minutes. Stir. Freeze again
                    for 15 min longer. Serve!
                    </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          
        </Col>
      </Row>
    </Container>
  );
};
export default RecipeVideos;
