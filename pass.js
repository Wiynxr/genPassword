VANTA.BIRDS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0xffffff,
    color2: 0xffffff,
    birdSize: 1.10,
    speedLimit: 9.00,
    separation: 34.00,
    alignment: 26.00,
    cohesion: 47.00,
    backgroundAlpha: 0.49
  })


  const pass = document.getElementById("password")

  function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";

    for(let i = 0; i <= chars.length; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1)
    }
    document.getElementById("password").value = password
  }