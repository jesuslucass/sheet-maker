modal = document.querySelector('.chardisplay')
formulario = document.querySelector('form')
addBtn = document.querySelector('.add')
createBtn = document.querySelector('.create')
cancelBtn = document.querySelector('.cancel')
char = document.querySelectorAll('.charinput')
// console.log(localStorage.getItem('@sheet'))
function getSheet(){
    const items = localStorage.getItem('@sheet')
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
getSheet()
addBtn.addEventListener('click', ()=>{modal.style.display = 'flex'})
cancelBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    modal.style.display = 'none'
    formulario.reset()
})
function buildCard(name, race, clase, level, str, dex, con, int, wis, cari){
    //const itemlist = [name, race, clase, level, str, dex, con, int, wis, cari]
    cards = document.querySelector('.cards')
    card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<img class="charimg" src="img/${clase}.jpg" alt="${clase}">
    <h1 class="charname">${name}</h1>
    <div class="specif">
        <h2 class="charspecif">${race}</h2>
        <h2 class="charspecif">${clase}</h2>
        <h2 class="charspecif">Level: ${level}</h2>
    </div>
    <p class="atributes">Strenght: ${str}</p>
    <p class="atributes">Dexterity: ${dex}</p>
    <p class="atributes">Constitution: ${con}</p>
    <p class="atributes">Inteligence: ${int}</p>
    <p class="atributes">Wisdom: ${wis}</p>
    <p class="atributes">Charisma: ${cari}</p>`
    cards.appendChild(card)
}
function keep(itemlist){
    
    localStorage.setItem('@sheet', itemlist)


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
