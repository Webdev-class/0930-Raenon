const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    let obj = {}
    students.forEach(element => {
        if (!obj[element.club]){
            obj[`${element.club}`] = 1
        }
        else{
            obj[`${element.club}`]++;
        }
    });
    return obj
}

module.exports = f2;