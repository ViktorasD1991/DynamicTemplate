$(document).ready(function () {
    $("#cloneTable").click(function () {
        $("#list:last").clone().insertBefore($("#formButtons"));
        $("#list:first tbody tr td").html("");
    })

    $("#addNewDateIssue").click(function () {
        $("#myTable").each(function () {
            var tds = '<tr>';
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
        document.execCommand('createLink',true,'http://'+window.getSelection());

    })
})