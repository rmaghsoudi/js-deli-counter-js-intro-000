var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = katzDeliLine.length
return "Welcome, " + name +". You are number "+ position +" in line."

 }

 function takeANumber2(katzDeliLine, name){
   var position = 0
   var newPosition = position++
   return "Welcome, " + name +". You are number "+ newPosition +" in line."
 }


function nowServing(katzDeliLine) {
if(katzDeliLine == 0){
return 'There is nobody waiting to be served!';
}

var newCustomer = katzDeliLine.shift()
return "Currently serving "+ newCustomer + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  }

var line = [];
for(var i = 0; i < katzDeliLine.length; i++){
  line.push(i + 1 + ". " + katzDeliLine[i])
}
return "The line is currently: " + line.join(", ");
}
