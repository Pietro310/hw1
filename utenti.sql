
create DATABASE utenti;

create table utenti (
nome VARCHAR(255),
cognome VARCHAR(255),
email VARCHAR(255) UNIQUE,
userID VARCHAR(255) PRIMARY KEY ,
pass VARCHAR(255)
)Engine = InnoDB;

create table preferiti (
userID VARCHAR(255)
,copertina VARCHAR(255),
titolo VARCHAR(255),
ID INTEGER PRIMARY KEY AUTO_INCREMENT,
index idx_userID(userID),
FOREIGN KEY(userID)REFERENCES utenti(userID),
UNIQUE(userID,titolo))Engine = InnoDB;
