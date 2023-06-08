
export const imageUpload=async(formData)=>{
    const res = await fetch(`https://api.imgbb.com/1/upload?key=d55b10a415dec1b53c31850fdedbad2a`,{
     method:'POST',
     body: formData
    })
    const data = await res.json()
    return data
 }