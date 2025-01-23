

export const userRegister = async (formData: { fullName: string; email: string; password: string }) => {
        
    try{
        const res = await fetch('http://localhost:5000/users', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const userInfo = await res.json();
        return userInfo;
    }catch(error){
        console.log(error)
    }
}