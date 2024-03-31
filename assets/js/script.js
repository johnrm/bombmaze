function buildGrid (width, height) {
    let grid=[];
    let row=[];
    for (let y=0; y<10; y++) {
        row=[];
        for (let x=0; x<10; x++) {
            row.push(Math.floor(Math.random()*2))
        }
    }
    }