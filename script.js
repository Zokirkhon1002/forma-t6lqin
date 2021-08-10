let labels = document.querySelectorAll(".nazorat label");

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((harf,index)=> `<span style="transition-delay: ${index * 50}ms">${harf}</span>`)
    .join('')
})