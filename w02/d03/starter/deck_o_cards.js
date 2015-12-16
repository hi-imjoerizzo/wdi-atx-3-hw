// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards(values, suits) {
	var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  	var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
};


deck_o_cards('');


	// Create the arrays for the deck, and shuffled deck
	var cards = [];
	// Make 52 card objects and store them in the "cards" array

	// Shuffle the Deck

	// Pull the top card

	// Console log the results
}

// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}



/*
'{suit: 'hearts' , value: '2'}'
{suit: 'hearts' , value: '3'}
{suit: 'hearts' , value: '4'}
{suit: 'hearts' , value: '5'}
{suit: 'hearts' , value: '6'}
{suit: 'hearts' , value: '7'}
{suit: 'hearts' , value: '8'}
{suit: 'hearts' , value: '9'}
{suit: 'hearts' , value: '10'}
{suit: 'hearts' , value: 'Jack'}
{suit: 'hearts' , value: 'Queen'}
{suit: 'hearts' , value: 'King'}
{suit: 'hearts' , value: 'Ace'}

{suit: 'diamonds' , value: '2'}
{suit: 'diamonds' , value: '3'}
{suit: 'diamonds' , value: '4'}
{suit: 'diamonds' , value: '5'}
{suit: 'diamonds' , value: '6'}
{suit: 'diamonds' , value: '7'}
{suit: 'diamonds' , value: '8'}
{suit: 'diamonds' , value: '9'}
{suit: 'diamonds' , value: '10'}
{suit: 'diamonds' , value: 'Jack'}
{suit: 'diamonds' , value: 'Queen'}
{suit: 'diamonds' , value: 'King'}
{suit: 'diamonds' , value: 'Ace'}

{suit: 'clubs' , value: '2'}
{suit: 'clubs' , value: '3'}
{suit: 'clubs' , value: '4'}
{suit: 'clubs' , value: '5'}
{suit: 'clubs' , value: '6'}
{suit: 'clubs' , value: '7'}
{suit: 'clubs' , value: '8'}
{suit: 'clubs' , value: '9'}
{suit: 'clubs' , value: '10'}
{suit: 'clubs' , value: 'Jack'}
{suit: 'clubs' , value: 'Queen'}
{suit: 'clubs' , value: 'King'}
{suit: 'clubs' , value: 'Ace'}

{suit: 'spades' , value: '2'}
{suit: 'spades' , value: '3'}
{suit: 'spades' , value: '4'}
{suit: 'spades' , value: '5'}
{suit: 'spades' , value: '6'}
{suit: 'spades' , value: '7'}
{suit: 'spades' , value: '8'}
{suit: 'spades' , value: '9'}
{suit: 'spades' , value: '10'}
{suit: 'spades' , value: 'Jack'}
{suit: 'spades' , value: 'Queen'}
{suit: 'spades' , value: 'King'}
{suit: 'spades' , value: 'Ace'}
*/
