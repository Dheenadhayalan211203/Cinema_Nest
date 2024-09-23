import './Header.css'

const Header=()=>
{
     return(

        <>
        

        <section className="containerhead">
            <div className="logo">
                 <img src=" logo.png" alt="" />
            </div>

            <div className="searchbar">
                  <input type="text " placeholder='Search Your Event ' />
                  <button >Find my show</button>
            </div>

            <div className="accounts">
                 <button type='submit'>Signin</button>
                 <button type='submit'>Login</button>
            </div>
        </section>
        </>
     )
}

export default Header