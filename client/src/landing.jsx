import {useState} from 'react'
export default function Landing(){
    const [url,setUrl] = useState("")
    function handleSubmit(){
        console.log(url)
        setUrl("")
    }
    return(
        <>
        <h1>Welcome to ChotaKaro</h1>
        <h3>Enter URL to shorten</h3>
        <input type="text" value = {url} placeholder='enter url'
        onChange={(e)=>setUrl(e.target.value)}
            />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}