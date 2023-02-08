
const titulo = document.getElementById('titulo')
const btnNombre = document.getElementById('btnNombre')

let nombre = ''
let nombreLS = localStorage.getItem('nombre')

if (nombreLS) {
    nombre = nombreLS
} else {
    nombre = prompt('Ingrese su nombre')
    localStorage.setItem('nombre', nombre)
}

titulo.innerText = `Bienvenido ${nombre}`

//////boton borrar

btnNombre.addEventListener('click', () => {
    localStorage.removeItem('nombre')
    window.location.reload()
})

///con array predefinido////

// const usuariosArray = [
//     {
//         id: 1,
//         nombre: 'Conrado Lanusse',
//         curso: 'Javascript'
//     },
//     {
//         id: 2,
//         nombre: 'Agustin Garcia',
//         curso: 'Javascript'
//     },
//     {
//         id: 3,
//         nombre: 'Lautaro Amengual',
//         curso: 'Desarrollo Web'
//     },
// ]

// ///convertir array a string
// const usuariosArrayJSON = JSON.stringify(usuariosArray)
// localStorage.setItem('usuarios', usuariosArrayJSON)


// //// convertir array a parse

// const usuariosJSON = localStorage.getItem('usuarios')
// const usuarios = JSON.parse(usuariosJSON)

// /// pintar array

// const listaUsuarios = document.getElementById('listaUsuarios')

// usuarios.forEach((user) => {
//     const li = document.createElement('li')
//     li.innerHTML = `
//         <p>ID: ${user.id}
//         <h4>Nombre: ${user.nombre}</h4>
//         <p>Curso: ${user.curso}</p>
//     `

//     listaUsuarios.append(li)
// })

// /// boton vaciar localstorage
// const btnVaciar = document.getElementById('vaciar')

// btnVaciar.addEventListener('click', () => {
//     localStorage.removeItem('usuarios')
//     listaUsuarios.innerHTML = 'Se borró el listado'
// })




////forma 2////////////////

let usuarios2 = []
const usuariosLS = JSON.parse(localStorage.getItem('usuarios'))

if (usuariosLS) {
    usuarios2 = usuariosLS
}




const inputNombre = document.getElementById('inputNombre')
const selectCurso = document.getElementById('selectCurso')
const btnAgregar = document.getElementById('btnAgregar')



///boton agregar

btnAgregar.addEventListener('click', () => {
    const nombre = inputNombre.value
    const curso = selectCurso.value

    if (nombre === '') return

    const user = {
        id: usuarios2.length + 1,
        nombre: nombre,
        curso: curso
    }

    usuarios2.push(user)
    inputNombre.value = ''

    const usuarios2JSON = JSON.stringify(usuarios2)
    localStorage.setItem('usuarios', usuarios2JSON)

    
    
    const usuariosJSON = localStorage.getItem('usuarios')
    const usuarios = JSON.parse(usuariosJSON)
    
   
    
    
    const listaUsuarios = document.getElementById('listaUsuarios')

    usuarios2.forEach((user) => {
        const li = document.createElement('li')
        li.innerHTML += `
                <p>ID: ${user.id}
                <h4>Nombre: ${user.nombre}</h4>
                <p>Curso: ${user.curso}</p>
            `

        listaUsuarios.innerHTML = ""
        listaUsuarios.append(li)
    }) 
})



   
/// boton mostrar  


const listaUsuarios = document.getElementById('listaUsuarios')
const btnMostrar = document.getElementById('btnMostrar')
const usuariosJSON = localStorage.getItem('usuarios')
const usuarios = JSON.parse(usuariosJSON)

btnMostrar.addEventListener('click', () => {
    listaUsuarios.innerHTML = ""
    usuarios2.forEach((user) => {
        const li = document.createElement('li')
        li.innerHTML += `
                <p>ID: ${user.id}
                <h4>Nombre: ${user.nombre}</h4>
                <p>Curso: ${user.curso}</p>
            `
    
        listaUsuarios.append(li)
        })
        

})


/// boton vaciar localstorage


const btnVaciar = document.getElementById('vaciar')

btnVaciar.addEventListener('click', () => {
    localStorage.removeItem('usuarios')
    listaUsuarios.innerHTML = ""
    listaUsuarios.innerHTML = 'Se borró el listado'
}) 
console.log(usuarios)