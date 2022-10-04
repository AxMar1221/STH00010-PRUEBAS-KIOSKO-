const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        console.log('Event')
        switch (btn.id) {
        }
    })
})