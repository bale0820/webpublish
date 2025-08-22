

class Member {
    #id;
    #password;
    constructor(id,password){
        this.#id = id;
        this.#password = password;
    }

    getId = () => this.#id;
    getPassword = () => this.#password;
    display = () => {
        return {
            'id' : this.getId(),
            'password' : this.getPassword()
        }
    } 
}


function signupCheck() {
   let id = document.querySelector('input[type=text]').value;
   let password = document.querySelector('input[type=password]').value;
   console.log(id,password);
   
   let member = new Member(id, password);
   console.log(member.display());
    
}