

// const values = ['Brussels', 'Cairo', 'Casablanca', 'Cengzhou', 'Caracas',
// 'Los Angeles', 'Osaka'];

// filterInput.addEventListener('keyup', filterProducts);

function filterProducts(){

    // remove all the childs from the current element
    while(grid.childNodes.length > 1){
        grid.removeChild(grid.lastChild)
    }

    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        let filterValue = filterInput.value.toUpperCase();
        let filterData = match(json, 'title', filterValue)

        for (const value of filterData){
            addElement(grid, value)
        }

    });

}



// match
const match = (values, filterby, input) => {
    const p = Array.from(input).reduce((a, v, i) => `${a}[^${input.substr(i)}]*?${v}`, '');
    const re = RegExp(p);

    return values.filter(v => v[filterby].toUpperCase().match(re))
    // console.log(p);
}

// console.log(match(values, "B"));