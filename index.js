let converter = new showdown.Converter()

$.get("index.md", (response) => {
    $("#main_content_div").html(converter.makeHtml(response))
})