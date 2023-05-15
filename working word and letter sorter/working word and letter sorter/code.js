var list = ["apple", "banana", "dice", "app", "bat", "gift", "grape", "strawberry", "rapper", "cookie", "heart", "avid", "avocado", "add"];
function filter(results) {
  var filteredList = [];
  var firstLetter;
  results = filteredList.sort();
  for (var i = 0; i < list.length; i++) {
     firstLetter = list[i].substring(0, 1);
    if (firstLetter == "a") {
      appendItem(filteredList, list[i]);
    }
  }
  return results;
}
console.log(filter());
