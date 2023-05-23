$(document).ready(function() {
    // Adicionar nova tarefa a lista
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('ul');
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $('#nova-tarefa').val('');
    })

    // Marcar tarefa como feita ao clicar
    //$(selector).on(event,childSelector,function
    //$(this) para pegar o elemento clicado
    $('ul').on('click', 'li', function(){
        console.log($(this).text());
        if ($(this).css("text-decoration").includes("line-through")) {
            $(this).css("text-decoration", "none");
        } else {
            $(this).css("text-decoration", "line-through");
        }
    })
})