const _ = require('lodash');

const vertices = ['A4', 'B12', 'C1', 'D13'];
const edges = ['A->C','C->D', 'D->A'];

const finding = (vertices, edges) =>{
    let maxPositiveWeight = 0;
    let mapVertice = {};
    // find max positive weight in one vertices
    _.forEach(vertices, (value) => {
        let positiveWeight = Number(value.substring(1,value.length));
        let character = value.substring(0,1);
        maxPositiveWeight <  positiveWeight ? maxPositiveWeight =  positiveWeight  : null;
        mapVertice[character] = positiveWeight;
    });
    let firstStart = '';
    let countPositiveWeight = 0;
    _.forEach(edges, (value, index) => {
        let character = value.split('->');
        // count positive weight in one vertices from to of edges
        index == 0 ? firstStart = character[0] : null;
        if(character[1] != firstStart){
            countPositiveWeight += mapVertice[character[0]] + mapVertice[character[1]]
        }
    });
    if(maxPositiveWeight > countPositiveWeight) return maxPositiveWeight;
    return countPositiveWeight

}

console.log(finding(vertices, edges))