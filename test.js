let pop = 0

for (let p = 0; p < 3; p++) {
    switch (p) {
        case 0:
            pop = 1
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    console.log(`row-${pop}`)
                    pop++
                }
            }
            break;
    
        case 1:
            pop = 1
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    console.log(`row-${pop}`)
                    pop++
                }
            }
            break;
        case 2:
            pop = 1
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    console.log(`row-${pop}`)
                    pop++
                }
            }

            break
    }
    
}

