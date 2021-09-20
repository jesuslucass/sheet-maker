modal = document.querySelector('.chardisplay')
formulario = document.querySelector('form')
addBtn = document.querySelector('.add')
createBtn = document.querySelector('.create')
cancelBtn = document.querySelector('.cancel')
char = document.querySelectorAll('.charinput')
// 0-1: -5, 2-3: -4, 4-5: -3, 6-7: -2, 8-9: -1, 10-11: 0, 12-13: 1, 14- 15: 2
namelist = []
// console.log(localStorage.getItem('@sheet'))
console.log(char)
function getSheet(){
    list = localStorage.getItem('namelist')
    // list ? namelist = list.split(','):return
    
    if (list!=null){
        namelist = list.split(',')
        for(var i = 0; i < namelist.length; i++){
            const items = localStorage.getItem(namelist[i])
            div = items.split(',')
            var name = div[0]
            var race = div[1]
            var clase = div[2]
            var level = div[3]
            var str = div[4]
            var dex = div[5]
            var con = div[6]
            var int = div[7]
            var wis = div[8]
            var cari = div[9]
            buildCard(name, race, clase, level, str, dex, con, int, wis, cari)
        }
    }
    else{
        return
    }
    
}
getSheet()
clearBtn = document.querySelectorAll('.fa-trash')
function funcaodoida(oi){
    oi.parentElement.remove()
    localStorage.removeItem(oi.id)
    namelist.splice(namelist.indexOf(oi.id), 1)
    localStorage.setItem('namelist', namelist)
}
addBtn.addEventListener('click', ()=>{modal.style.display = 'flex'})
cancelBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    modal.style.display = 'none'
    formulario.reset()
})
function modify(atrib){
    cont = 0
    modi = -5
    operador = ''
    if(cont === atrib || cont+1 === atrib){
        return `(${modi})`
    }  else{
        while(cont!=atrib){
            cont++
            modi+=0.5
            
        }
        arredondado = Math.floor(modi)
        if (arredondado>0){operador='+'}
        return `${operador}${arredondado}`
    }
    
    
    
}
function buildCard(name, race, clase, level, str, dex, con, int, wis, cari){
    //const itemlist = [name, race, clase, level, str, dex, con, int, wis, cari]
    
    cards = document.querySelector('.cards')
    card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
    <i onclick="funcaodoida(this)" id=${name} class="fas fa-trash"></i>
    <img class="charimg" src="img/${clase}.jpg" alt="${clase}">
    <h1 class="charname">${name}</h1>
    <div class="specif">
        <h2 class="charspecif">${race}</h2>
        <h2 class="charspecif">${clase}</h2>
        <h2 class="charspecif">Level: ${level}</h2>
    </div>
    <div class='display-atributs'><p class="atributes">Constitution: ${con}</p> <span class="modify">${modify(con)}</span></div>
    <div class='display-atributs'><p class="atributes">Dexterity: ${dex}</p> <span class="modify">${modify(dex)}</span></div>
    <div class='display-atributs'><p class="atributes">Strenght: ${str}</p> <span class="modify">${modify(str)}</span></div>
    <div class='display-atributs'><p class="atributes">Inteligence: ${int}</p> <span class="modify">${modify(int)}</span></div>
    <div class='display-atributs'><p class="atributes">Wisdom: ${wis}</p> <span class="modify">${modify(wis)}</span></div>
    <div class='display-atributs'><p class="atributes">Charisma: ${cari} </p><span class="modify">${modify(cari)}</span></div>`

    cards.appendChild(card)
}
function keep(itemlist){
    
    localStorage.setItem(itemlist[0], itemlist)
    namelist.push(itemlist[0])
    localStorage.setItem('namelist', namelist)


}

createBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    var name = char[0].value
    var race = char[1].value
    var clase = char[2].value
    var level = char[3].value
    var str = char[4].value
    var dex = char[5].value
    var con = char[6].value
    var int = char[7].value
    var wis = char[8].value
    var cari = char[9].value
    const itemlist = [name, race, clase, level, str, dex, con, int, wis, cari]
    modal.style.display = 'none'
    buildCard(name, race, clase, level, str, dex, con, int, wis, cari)
    keep(itemlist)
    formulario.reset()
})
