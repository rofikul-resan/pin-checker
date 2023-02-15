let otpNumber = "";
let inputNumber = "";
const succuss = document.getElementById("success");
const fail = document.getElementById("fail");

function setValue(id, value) {
    let element = document.getElementById(id);
    element.value = value;
    return element
}
function randomNumber() {
    return Math.round(Math.random() * 10000)
}

function pinVerify() {
    if (otpNumber === inputNumber) {
        succuss.style.display = "block";
        fail.style.display = "none";
        otpNumber = "";
        inputNumber = "";
        setValue("form-control", otpNumber)
        setValue("input-fild", inputNumber)

    } else {
        succuss.style.display = "none";
        fail.style.display = "block";
        inputNumber = "";
        setValue("input-fild", inputNumber)

    }
}

document.getElementById("generat-btn").addEventListener("click", function (event) {
    otpNumber = randomNumber() + "";
    if (otpNumber.length === 4) {
        setValue("form-control", otpNumber)
    } else
        return randomNumber()
})

const buttons = document.getElementsByClassName("button");
for (btn of buttons) {
    btn.addEventListener("click", function (e) {
        const btnValue = e.target.innerText;
        if (isNaN(btnValue)) {

            if (btnValue === "C") {
                inputNumber = "";
                setValue("input-fild", inputNumber)
            } else if (btnValue === "<") {
                let inputArr = inputNumber.split("");
                inputArr.pop();
                inputNumber = inputArr.join("");
                setValue("input-fild", inputNumber);

            }
        } else {
            inputNumber += btnValue
            setValue("input-fild", inputNumber);
        }
    })
}

document.getElementById("submit").addEventListener("click", pinVerify);