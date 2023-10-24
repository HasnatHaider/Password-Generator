class Password {
    constructor() {
        this.lowerCase = "abcdefghijklmnopqrstuvwxyz"
        this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.number = "1234567890"
        this.symbol = "@#$%^&*()_{}[]/"
    }

    weakPassword() {
        let pass = ""
        let i = 0
        let random1
        let random2
        while (i < 8) {
            i++
            random1 = this.lowerCase[Math.floor(Math.random() * this.lowerCase.length)]
            random2 = this.upperCase[Math.floor(Math.random() * this.upperCase.length)]
            pass += random1 + random2
        }
        pass = pass.substring(0, 8)
        return pass
    }

    strongPassword() {
        let pass = ""
        let i = 0
        let random1
        let random2
        let random3
        while (i < 12) {
            i++
            random1 = this.lowerCase[Math.floor(Math.random() * this.lowerCase.length)]
            random2 = this.upperCase[Math.floor(Math.random() * this.upperCase.length)]
            random3 = this.number[Math.floor(Math.random() * this.number.length)]
            pass += random1 + random2 + random3
        }
        pass = pass.substring(0, 12)
        return pass
    }

    veryStrongPassword() {
        let pass = ""
        let i = 0
        let random1
        let random2
        let random3
        let random4
        while (i < 16) {
            i++
            random1 = this.lowerCase[Math.floor(Math.random() * this.lowerCase.length)]
            random2 = this.upperCase[Math.floor(Math.random() * this.upperCase.length)]
            random3 = this.number[Math.floor(Math.random() * this.number.length)]
            random4 = this.symbol[Math.floor(Math.random() * this.symbol.length)]
            pass += random1 + random2 + random3 + random4
        }
        pass = pass.substring(0, 16)
        return pass
    }

    funnyPassword() {
        let pass = ""
        let arr = ["password", "secret", "iforgot", "user", "password123", "IAmMrRobot", "NewPassword", "SecretUser", "Super Hard Password", "Free Wifi", "NotForYou", "Hacker Password", "Helicopter Ninja", "Enter Email Address", "Lollipop"]
        let i = 0
        let random1
        while (i < 1) {
            i++
            random1 = arr[Math.floor(Math.random() * arr.length)]
            pass += random1
        }
        return pass
    }
}

let passwordInput = document.getElementById("passwordinput")
let checkbox = document.getElementsByClassName("check")
let btn = document.getElementById("btn")

let asign = new Password()

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let b;
    if (checkbox[0].checked) {
        b = asign.weakPassword()
    }

    else if (checkbox[1].checked) {
        b = asign.strongPassword()
    }

    else if (checkbox[2].checked) {
        b = asign.veryStrongPassword()
    }
        
    else if (checkbox[3].checked) {
        b = asign.funnyPassword()
    }

    passwordInput.value = b
})

