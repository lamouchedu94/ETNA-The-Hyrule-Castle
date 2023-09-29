export function makeBar(currentHp: number, maxHp: number) {

    let hpBar: string = "\x1B[0m[";
    for (let i = 0; i < currentHp; i += 1) {
        if (i < maxHp / 6) {
            hpBar += "\x1B[31m|\x1B[0m";
        } else if (i < (maxHp / 4) * 2) {
            hpBar += '\x1B[33m|\x1B[0m';
        } else {
            hpBar += '\x1B[32m|\x1B[0m';
        }
    }
    for (let i = 0; i < maxHp - currentHp; i += 1) {
        hpBar += "—";
    }
    return hpBar + "]";
    
  }