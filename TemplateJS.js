$(document).ready(function () {
    $("#cloneTable").click(function () {
        $.get('template', function(data) {
            $("#list:last").clone().insertBefore($("#formButtons"));
            $("#list:first").html(data);
        }, 'text');
    })

    $("#addNewDateIssue").click(function () {
        $("#myTable").each(function () {
            let tds = '<tr>';
            jQuery.each($('tr:last td', this), function () {
                tds += '<td contenteditable="true" id="newDate"></td>';
            });
            tds += '</tr>';
            if ($('tbody', this).length > 0) {
                $('tbody', this).append(tds);
            } else {
                $(this).append(tds);
            }
        });
    })

    $('#jBold').click(function () {
        document.execCommand('bold');
    });

    $('#print').click(function () {
        $('*[id*=list]:visible').each(function (i, el) {
            if (el.innerText.trim() === '') {
                $(this).remove()
            }
        });
        window.print();
    });

    $('#addLink').click(function () {
        let linkURL = prompt('Enter a URL:', 'http://');
        let sText = document.getSelection();
        document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
        //  document.execCommand('createLink', true, 'http://' + window.getSelection());
    })
})