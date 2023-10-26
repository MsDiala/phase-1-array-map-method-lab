const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
    // Use the map() method to convert each title to title case
    return tutorials.map(title => {
      // Split the title into words
      const words = title.split(' ');
  
      // Capitalize the first letter of each word and join them back
      const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
      // Join the title case words into a single string
      return titleCaseWords.join(' ');
    });
  };

// Call the titleCased function to get the result
const titleCasedTutorials = titleCased();

// console.log(titleCasedTutorials);