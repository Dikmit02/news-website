const request=require('request')



const source=(category,callback)=>{
    const url='https://newsapi.org/v2/top-headlines?country=in&category='+encodeURIComponent(category)+'&apiKey=ebc60ba7721d4be2a0b1b1dd7fdb37e4'
    
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Provide the correct address',undefined)
        }
        else if(body.articles.length==0){
            callback('No news in this category',undefined)
        }
        else{
            callback(undefined,{
                articles:body.articles
            })

        }
    })

}
module.exports=source