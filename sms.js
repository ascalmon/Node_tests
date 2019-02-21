const greetings = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


sendSmsMessage = (msg) => {

  const greetings = msg;                                                        // Incoming raw message
  const sizeSMS = 160;                                                          // Maximum size of the output SMS buffer
  const extraRoom = 2;                                                          // Extra space to acomodate 'non-braking words'
  let ok = false;                                                               // Boolean to express end of process

  let messages = Math.floor(msg.length / sizeSMS) + extraRoom;                  // Estimated size of array elements

  let buffer = [];                                                              // Output buffer array for all pieces of the SMS
  let nextWord = 0;                                                             // Points to the next word to be included in the buffer
  words = greetings.split(' ');                                                 // Split the incoming message by 'spaces' - array words
  let numOfWords = words.length;                                                // numOfWord - number of items in the words array
  words.push('end');                                                            // word pushed at the end of the array words to allow us to check next + 1 word

  for (let msgNumber = 0; msgNumber < messages; msgNumber++ ){                  // Number of array items
    buffer[msgNumber] = '';                                                     // Clear the first position for length calculation
    for (let word = nextWord; word < numOfWords; word++){                       // Size of the buffer (160) reached?
      if (buffer[msgNumber].length + words[word + 1].length < sizeSMS ) {       // Size of the buffer + size of next word >= (160)?
        if (word < numOfWords - 1){                                             // Not the last word
          buffer[msgNumber] += words[word] + ' ';                               // Save new word + ' '
        } else {
          buffer[msgNumber] += words[word];                                     // Last word - Save only word
        }
      } else {
        nextWord = word;                                                        // Size of the buffer reached
        ok = true;                                                              // More words to come
        break;                                                                  // Move to the next buffer array item
      }
    }
    if (ok != true)  {                                                          // Size of the buffer not reached but end of words
      break;                                                                    // Finish process
    } else {
      ok = false;                                                               // Not end of words
    }
  }


  return buffer;                                                                // Return final buffer arrau
}
console.log(greetings);
console.log();
console.log(sendSmsMessage(greetings));                                         // Call function sendSmsMessage
