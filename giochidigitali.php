<?php
    session_start();

    if(!isset($_SESSION['username'])){
        header("Location: Login.php");
        exit;
    }
?>

<!DOCTYPE html>
    <html>
        <head>
            <title >TechHub</title>

            <script src="giochidigitali.js" defer="true"></script>
            <script src="Cerca.js" defer="true"></script>

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <link rel="stylesheet" href="Home.css"/>
            
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Montserrat:wght@300&family=Roboto&display=swap" rel="stylesheet">
        </head>

        <body>

            <article>
                <header> 

                

                    <nav>
                    
                        <div id="intestazione">
                            <div id="menu">
                                     
                                <a id="home"href=Home.php>Home</a>
                                <a id="preferiti" href=Preferiti.php>Profilo</a>
                                <a id="shop"href=Cerca.php>Info Prodotti</a>
                                <a id="logout"href=Logout.php>Logout</a>
                                    

                            </div>
                        </div>
                       
                        <h1>
                            <strong>Tech<span>HUB</span></strong><br/>
                        </h1>
                        

                    </nav>

                    
                </header>

                <section>
                         <div id="titoloPreferiti">
                            <h1><p><?php echo$_SESSION['username']?></p>Cerca la migliori offerte sui giochi</h1>
                        </div>
                        <div id="form"> 
  <form id="ricerca">
    <label>
      <input type='text' id='contenuto' placeholder="Cerca Gioco">
    </label>
    <input type="submit" id="btn-ricerca">
  </form>
</div>


<section id="offerte"></section>

                      

                </section>
    
            </article>
            <footer>
        <div>
            <p>Copyright © 2023 TechHUB.</p>
        </div>
        <div>
            <p>Contatti:</p>
            <ul>
                <li>Nome: Pietro</li>
                <li>Cognome: Alberio</li>
                <li>Matricola: 1000016054</li>
                <li>Indirizzo: Catania, Italia</li>
                <li>Email: techhub@gmail.com</li>
            </ul>
        </div>
    </footer>

        </body>

    </html>