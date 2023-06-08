export const dbUser=async(user)=>{
    const res= await fetch(`${process.env.REACT_APP_PORT}/users`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(user)
    })
    const data = await res.json()
    return data
}