class userDTO {
    id;
    email;
    pseudo;
    firstname;
    lastname;

    constructor(id, email, pseudo, firstname, lastname){
        this.id = id;
        this.email = email;
        this.pseudo = pseudo;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}



module.exports = userDTO