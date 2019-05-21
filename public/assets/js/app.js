const { fetch } = window

// const getBurgers = _ => {
//   fetch('/burgers')
//     .then(r => r.json())
//     .then(burgers => {
//       burgers.forEach(({ burger_name, devoured }) => {
//         let toDoDiv = document.createElement('div')
//         toDoDiv.innerHTML = `
//       <p>${text}</p>
//       <p>${isDone ? 'Yes' : 'No'}</p>
//       <hr>
//       `
//         document.querySelector('#toDoList').append(toDoDiv)
//         console.log(burgers)
//       })
//     })
//     .catch(e => console.error(e))
// }

document.addEventListener('click', e => {
  if (e.target.className === 'eatBtn') {
    let id = e.target.dataset.id
    fetch(`/burgers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        devoured: true
      })
    })
      .then(_ => {
        location.reload()
        // console.log('eaten')
      })
      .catch(e => console.log(e))
  } else if (e.target.id === 'submitName') {
    e.preventDefault()
    fetch('/burgers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        burger_name: document.querySelector('#burger_name').value
      })
    })
      .then(_ => {
        document.querySelector('#burger_name').value = ''
      })
      .catch(e => console.log(e))
  } else if (e.target.id === 'getBurgers') {
    fetch('/burgers')
      .then()
      .catch(e => console.log(e))

  }
})

// getBurgers()
