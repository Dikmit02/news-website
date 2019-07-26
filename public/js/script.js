$(()=>{


    $('.nav-link').click(function (event) {

       
    event.preventDefault();
        
    const cc=event.target.href.substring(23).toLowerCase()

     fetch('http://localhost:28280/source?category='+cc).then((response) => {
        response.json().then((data) => {
            if (data.error) {
    
                
                $("#p1").text(data.error)
            } else {
                
                for(i=1;i<10;i++){
                    $('#div'+i).css("border","0.5px dashed black")
                    $('#a'+i).attr("href",data.articles[i].url).text(data.articles[i].description);

                }


            }
        })
    })
    
});

    
   
    
})
/*$(()=>{
    const weatherForm = document.querySelector('form')
    const search = document.querySelector('input')
    const messageOne=document.querySelector('#message-1')
    const messageTwo=document.querySelector('#message-2')
    
    

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault()
    
        const location = search.value
        messageOne.textContent='Loading...'
        messageTwo.textContent=""
    
        fetch('/weather?address='+location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    // console.log(data.error)
                    messageOne.textContent=data.error
                } else {
                    messageOne.textContent=data.location
                    messageTwo.textContent=data.forecast
                    console.log(data.location)
                    console.log(data.forecast)
                }
            })
        })
    })
})*/