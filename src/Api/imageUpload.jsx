
export const imageUpload=async(formData)=>{
    const res = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGE_UPLOAD}`,{
     method:'POST',
     body: formData
    })
    const data = await res.json()
    return data
 }