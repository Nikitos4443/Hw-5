let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
class VigenèreCipher{
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet
    }

    encode(message){
        let success = []
        this.key = this.key.toLowerCase()
        message = message.toLowerCase()
        for (let i = 0; i < message.length; i++){
            let index = this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(this.key[i])
            if(index > 25){
                index -= 26
            }
            success.push(this.alphabet[index])
        }
        console.log(success.join(''))
    }
    decode(message){
        let success = []
        this.key = this.key.toLowerCase()
        message = message.toLowerCase()
        for (let i = 0; i < message.length; i++){
            let index = this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(this.key[i])
            if(index < 0){
                index += 26
            }
            success.push(this.alphabet[index])
        }
        console.log(success.join(''))
    }
}

let get = new VigenèreCipher("abcdefghijklmnopr", alphabet)
get.decode("dfxvgmuvtqejzlo")
//get.encode("devschoolhuynya")
