import { links } from "../data/data";
import Link from "next/link"
import { cor } from "../styles/themes";
export default function HomeScreen (){
    return (

    <>
    

<main>
    <section>
        
                <h1>
                    Meus Links  👨‍💻
                </h1>
                <ul>

                        {links.map((links , i )=>{ 

                            return (
                                <>

                                <li>
                                    <Link href={links.link}>
                                        <a > {links.texto} </a>
                                    </Link>
                                </li>

                                </>
                            )
                        })}

                </ul>
    </section>
</main>


        






    
    <style jsx>


        {`
        
        
        main{
            background:${cor.fundo};
            min-height:100vh;
            padding:1rem;
        }
        
        h1{
            font-size:3rem;
            color:${cor.rosa};
            text-align:center;
        }
        

        section{
            width:700px;
            margin:0 auto;
        }
        ul{
            display:flex;
            flex-direction:column;
            list-style-type: none;
            width:100%;
            justify-content:center;
            align-items:center;
            padding: 0;

        }
        

        li{
            list-style-type: none;
           
            width:90%;
            text-align:center;
        }

        

     

        a{
            background:${cor.branco};
            font-size:1.5rem;
            padding: 1rem 1rem ;
            display:block;
            width:80%;
            margin:0 auto ;
            margin-bottom:1rem;
            border-radius:20px;
            font-weight: 700;
            

        }

        a:hover{
            transition: all 700ms ;
            transform: scale(1.102);
            background:${cor.cinza
            };
            color:${cor.verde};
        }


        @media(max-width:796px){
            section{
                width:600px;
                margin:0 auto;
            }
        }

        @media(max-width:703px){
            section{
                width:500px;
                margin:0 auto;
            }
        }

        @media(max-width:603px){
            section{
                width:500px;
                margin:0 auto;
            }
            h1{
            font-size:2.5rem;


            
        }


        a{
            background:${cor.branco};
            font-size:1.5rem;
            padding: 1rem 1rem ;
            display:block;
            width:80%;
            margin:0 auto ;
            margin-bottom:1rem;
            border-radius:20px;
            font-weight: 700;
            

        }


        }

        @media(max-width:503px){
            section{
                width:400px;
                margin:0 auto;
            }
        }

        @media(max-width:403px){
            section{
                width:300px;
                margin:0 auto;
            }
            
            
        }

        }

        
        `} 
    </style>
    
        
    
    
    </> )
}