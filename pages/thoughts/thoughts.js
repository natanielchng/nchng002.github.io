let converter = new showdown.Converter()

let html

let fileImport = new XMLHttpRequest()
fileImport.open('GET', 'thoughts.md')
fileImport.onreadystatechange = () => {
    html = converter.makeHtml(fileImport.responseText)
    document.getElementById('articles_div').innerHTML = html
}
fileImport.send()


