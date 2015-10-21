var values;
function makeBuffer(value) {

    function secondbuffer() {
         values=values+value;
        return makeBuffer;
    }
    return values;
}

var buffer = makeBuffer();

/* добавить значения к буферу */
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

/* получить текущее значение */
alert( buffer() ); // "Замыкания Использовать Нужно!"

buffer.clear();

alert( buffer() ); // ""