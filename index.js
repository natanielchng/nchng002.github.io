let converter = new showdown.Converter()

let html

let fileImport = new XMLHttpRequest()
fileImport.open('GET', 'index.md')
fileImport.onreadystatechange = () => {
    html = converter.makeHtml(fileImport.responseText)
    document.getElementById('main_content_div').innerHTML = html
}
fileImport.send()


