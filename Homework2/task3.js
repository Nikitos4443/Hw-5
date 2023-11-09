function anagramGroup(words){
    const objectAnagrams = {}

    function sort (word){
        return word.split('').sort().join('')
    }

    words.forEach(function(word){
        const sorted = sort(word);

        if (!objectAnagrams[sorted]){
            objectAnagrams[sorted] = [word]
        } else{
            objectAnagrams[sorted].push(word)
        }
    });

    const result = Object.values(objectAnagrams)
    return result;

}
const input = ["art", "atr", "tar", "star", "tars", "cheese", "eesch", "chesee"];
const output = anagramGroup(input);
console.log(output);