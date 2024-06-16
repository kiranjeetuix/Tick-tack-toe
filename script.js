let currentPlayer="X";
let array=Array(9).fill(null);

function handleClick(el){
    const id= Number(el.id);
    array[id]= currentPlayer;
    el.innerText=currentPlayer;

    if(
        (array[0]==array[1]&& array[1]==array[2]&& array[2]!==null)||
    (array[3]==array[4]&& array[4]==array[5]&& array[5]!==null)||
    (array[6]==array[7]&&array[7]==array[8]&&array[8]!==null)||
    (array[0]==array[3]&&array[3]==array[6]&&array[6]!==null)||
    (array[1]==array[4]&&array[4]==array[7]&&array[7]!==null)||
    (array[2]==array[5]&&array[5]==array[8]&&array[8]!==null)||
    (array[0]==array[4]&&array[4]==array[8]&&!array[8]==null)||
    (array[2]==array[4]&&array[4]==array[6]&&array[6]!==null)
    )
    {document.write(`Winner is + ${currentPlayer}`);
        console.log(`${currentPlayer}`);
        return;
    };
    currentPlayer= currentPlayer==="X"?"O":"X";
    if(!array.some(e => e===null )){
        document.write(`Draw!!!`);
        return ;
    }
}