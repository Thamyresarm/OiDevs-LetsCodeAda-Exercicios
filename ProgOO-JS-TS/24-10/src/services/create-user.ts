import prompt from 'prompt'

function main(){
    prompt.get(['name', 'peso', 'altura'], (err:object, result: object) => {
        if(err){
            console.log(err)
        }
        console.log(result)
    })
}

main()