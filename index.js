function scuberGreetingForFeet(someValue){
  // Write your code here!
    if (someValue <= 400) {
      return "This one is on me!";
    } else if (someValue >= 400 && someValue <= 2000) {
      return "That will be twenty bucks.";
    } else if (someValue > 2500) { 
      return "No can do.";
    } else { 
      return `I will gladly take your thirty bucks.`; 
    }
}

function ternaryCheckCity(city){
  // Write your code here!
  const result = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(charmFromTip){
  // Write your code here!
  switch(charmFromTip) {
    case "generous":
      return "Thank you so much.";
      break;
      case "not as generous":
        return "Thank you.";
        break;
        case "thanks for everything":
          return "Bye."
          break;
  }
}
