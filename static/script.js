async function askAI() {
    const question = document.getElementById('question').value
    const res = await fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
    })
    const data = await res.json()
    document.getElementById('answer').innerText = data.answer
}