import React, { useState } from 'react'

export default function Form() {
    const [data, setdata] = useState([])
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState("")
    function onsubmit(e) {
        e.preventDefault()
        if (name && email && age) {
            const person = { name: name, email: email ,age:age }
            setdata(() => {
                console.log(data)
                return [ ...data, person ]

            })


        }
        setname("")
        setemail("")
        setage("")
    }


    return (
        <>
            <div className='form'>
                <div className="name">
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" value={name} onChange={(e) => setname(e.target.value)} />
                </div>
                <div className="email">
                    <label htmlFor="fname">email:</label>
                    <input type="text" id="fname" name="fname" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="age">
                    <label htmlFor="fname">age:</label>
                    <input type="text" id="fname" name="fname" value={age} onChange={(e) => setage(e.target.value)} />
                </div>
                <button onClick={onsubmit}>submit</button>

            </div>
            {data.map((element) => {
                return <div>
                    <h1>your name is:{element.name}</h1>
                    <h1>your email is:{element.email}</h1>
                    <h1>your name is:{element.age}</h1>

                </div>
            })}

        </>
    )
}
