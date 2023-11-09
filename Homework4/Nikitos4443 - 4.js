
class PaginationHelper{

    constructor(elements = [], elementsOnPage) {
        this.elements = elements;
        this.elOnPage = elementsOnPage;
    }

    itemCount(){
        return this.elements.length;
    }

    pageCount(){


        let sum = 0;

        for(let k = 0; k<this.elements.length; k += this.elOnPage) {
            sum+=1
        }

        return sum;
    }

    pageItemCount(page){
        if(page<0)
            return -1;
        let array = []
        array = this.elements.slice(page * this.elOnPage, page * this.elOnPage + this.elOnPage)

        if(array.length == 0){
            let len = - 1
            return len;
        }

        return array.length;
    }

    pageIndex(index){


        let counter = 0;
        let i = 0;
        let a = 0

        do{
            if(index > this.elements.length-1 || index < 0)
                return -1
            i += this.elOnPage

            if(index >= a && index < i){
                return counter
            } else{
                a = i;
                counter ++
            }

        }while(i<this.elements.length)

        return -1
    }
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd',], 10)
console.log(helper.pageItemCount(-2))