const btn = document.querySelector('button')
const eyeDropper = new EyeDropper()

btn.addEventListener('click', async () => {
    const color = await eyeDropper.open()
    console.log(color)
})