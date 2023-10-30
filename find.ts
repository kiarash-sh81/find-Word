//input text
let text = "    aaa bbb'b ///  dfdfd ddd aaa bbbb bbbb bbbb AAA";

function fintTop3(text: string): Array<string> {
    // remove bad space
    text.trim();
    // all letter should be lower
    text = text.toLowerCase();
    // the acceptabale text with regex
    let array: Array<string> | null = text.match(/[\w']+('[\w]+)*/g);
    // not null able
    if(array === null){
        array = []
    }
    // the object that save the counts
    let count: any = {};
    // compare and find the count of word
    array.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    }); 
    //give the entires of object exp: { key : value , key1: value1} => [[key, value], [key1, value1]]
    const keyValue: Array<any> = Object.entries(count);

    //sort the values to find top 0-3 one
    keyValue.sort((a,b) =>  b[1] - a[1]);
    // pop 0-3 one of the sorted 
    const top3 = keyValue.slice(0,3);
    // key name is in 0 index
    const topKey = top3.map(e => e[0]);


    return topKey;

}

const resualt = fintTop3(text);
console.log(resualt);