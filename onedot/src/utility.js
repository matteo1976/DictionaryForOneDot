

export function findIndexErrorInDictionary(dictionary,element){
    let errorIndexArray=[]
    //debugger
    dictionary.map((value,dictionaryIndex)=>{
            if(value.id!==element.id){
                if (element.domain===value.domain) {
                    errorIndexArray.push(dictionaryIndex) ///duble key
                }; 
                if (value.domain===element.range){
                    errorIndexArray.push(dictionaryIndex); ///value is a key
                };
                if (value.range===element.domain) {
                    errorIndexArray.push(dictionaryIndex) ///key is a value
                };         
            }
    })
    return[...new Set(errorIndexArray)]
}