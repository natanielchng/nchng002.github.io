let converter = new showdown.Converter()

$(document).ready(function () {
    load_page("pages/home.md")

    $('#home').click(function () {
        load_page("pages/home.md")
    })

    $('#experiments').click(function () {
        load_page("pages/experiments.md")
    })

    $('#writeups').click(function () {
        load_page("pages/writeups.md")
    })

    $('#work').click(function () {
        load_page("pages/work.md")
    })
})

function load_page(page_file) {
    $.get(page_file, (response) => {
        $("#main").html(converter.makeHtml(response))
    })
}