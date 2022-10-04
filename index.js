const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        console.log('Event')
        switch (btn.id) {
        }
    })
})

function getPlaylist(condition){
    if (window.nsignSDK) {
        window.nsignSDK.runCondition(condition);
    } else {
        console.log('No existe la condicion');
    }
}


