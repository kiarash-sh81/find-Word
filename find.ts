let text = "    aaa bbb'b ///  dfdfd ddd aaa bbbb bbbb bbbb AAA";

function fintTop3(text: string): Array<string> {

    text.trim();
    text = text.toLowerCase();
    let array: Array<string> | null = text.match(/[\w']+('[\w]+)*/g);
    if(array === null){
        array = []
    }
    array.map(e => e.toLowerCase())
    let count: any = {};
    array.forEach(word => {
        count[word] = (count[word] || 0) + 1;
    }); 

    const keyValue: Array<any> = Object.entries(count);

    keyValue.sort((a,b) =>  b[1] - a[1]);

    const top3 = keyValue.slice(0,3);

    const topKey = top3.map(e => e[0]);


    return topKey;

}

const resualt = fintTop3(text);
console.log(resualt);