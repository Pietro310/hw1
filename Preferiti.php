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
                <script src="VisualizzaPreferiti.js" defer="true"></script>
                <link rel="stylesheet" href="Home.css"/>

                <meta name="viewport" content="width=device-width, initial-scale=1">
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
                                    <a id="cerca"href=Cerca.php>Info Prodotti</a>
                                    <a id="shop" href=giochidigitali.php>Giochi Digitali</a>
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
                            <h1>Ecco i tuoi prodotti preferiti <br> <p><?php echo$_SESSION['username']?></p> </h1>
                        </div>
                        <div id="oggetti_preferiti"> </div>
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