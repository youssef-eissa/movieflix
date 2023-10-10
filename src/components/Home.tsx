import React from 'react'
import './Home.css'
type HomeProps = {
    children:React.ReactNode
}
function Home({children}:HomeProps) {
return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 p-0'>
                {children}
            </div>
        </div>
    </div>
)
}

export default Home