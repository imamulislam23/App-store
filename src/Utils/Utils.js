//Get

export const  loadInstalled = () =>{
    try{
        const data = localStorage.getItem('installed')
        return data ? JSON.parse(data) : []
    }
catch (err){
    console.log(err)
    return []
}
}

//save 
export const updateList = product => {
    const installedList = loadInstalled()

    try{
        const isDuplicate = installedList.some(p => p.id === product.id )
        if (isDuplicate) return alert("already installed")

            const updatedList = [...installedList, product]
            localStorage.setItem('installed',JSON.stringify(updatedList))
    }
    catch(err){
        console.log(err)
    }

}

//delete
export const removeFromInstalled = id =>{
    const installedList = loadInstalled()
    try {
    const updatedList = installedList.filter(p => p.id !== id)
    localStorage.setItem('installed', JSON.stringify(updatedList))
  } catch (err) {
    console.log(err)
  }
}