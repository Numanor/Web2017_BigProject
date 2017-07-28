var rel_tree = '';

function add_rel() {
    if (rel_tree.length === 0) {
        $('#rl-tree').text('你');
        $('#rs-result').text('');
    }
    let i = $("#relation").val();
    let j = $('#rl-tree').text();
    switch (i) {
        case '1':
            $('#rl-tree').text(j + "的父亲");
            break;
        case '2':
            $('#rl-tree').text(j + "的母亲");
            break;
        case '3':
            $('#rl-tree').text(j + "的丈夫");
            break;
        case '4':
            $('#rl-tree').text(j + "的妻子");
            break;
        case '5':
            $('#rl-tree').text(j + "的哥哥");
            break;
        case '6':
            $('#rl-tree').text(j + "的姐姐");
            break;
        case '7':
            $('#rl-tree').text(j + "的弟弟");
            break;
        case '8':
            $('#rl-tree').text(j + "的妹妹");
            break;
        case '9':
            $('#rl-tree').text(j + "的儿子");
            break;
        case '10':
            $('#rl-tree').text(j + "的女儿");
            break;
    }
    rel_tree += i;
    let select_rel = $('#relation > option');
    $.each(select_rel, function () {
        $(this).css('display', 'none');
    });
    if ($.inArray(i, ['1', '2', '3', '4']) !== -1) {
        $.each(select_rel, function () {
            if ($.inArray($(this).val(), ['1', '2', '5', '6', '7', '8']) !== -1) {
                $(this).css('display', 'block');
            }
        });
    } else if ($.inArray(i, ['5', '6', '7', '8', '9', '10']) !== -1) {
        $.each(select_rel, function () {
            if ($.inArray($(this).val(), ['9', '10']) !== -1) {
                $(this).css('display', 'block');
            }
        });
    }
    if ($.inArray(i, ['5', '7', '9']) !== -1) {
        $.each(select_rel, function () {
            if ($(this).val() === '4') {
                $(this).css('display', 'block');
            }
        });
    } else if ($.inArray(i, ['5', '6', '7', '8', '9', '10']) !== -1) {
        $.each(select_rel, function () {
            if ($(this).val() === '3') {
                $(this).css('display', 'block');
            }
        });
    }
}

function rcl_rel() {
    if ($('#rl-tree').text().length > 1)
        $('#rl-tree').text($('#rl-tree').text().substr(0, $('#rl-tree').text().length - 3));
    if (rel_tree.length > 0)
        rel_tree = rel_tree.substr(0, rel_tree.length - 1);
    else {
        $('#rl-tree').text('你');
        $('#rs-result').text('');
    }
}

function set_rel() {
    if ($('#rs-result').text().length !== 0) {
        return;
    }
    alert(rel_tree);
    let select_rel = $('#relation > option');
    for (let i of salutions_storage) {
        if ($.inArray(rel_tree, i.num) !== -1) {
            $('#rs-result').text(i.salution.join(','));
            alert('yes');
            rel_tree = '';
            $.each(select_rel, function () {
                $(this).css('display', 'block');
            });
            return;
        }
    }
    alert("数据库暂无匹配的称呼!(No salutions are found!)");
    rel_tree = '';
    $.each(select_rel, function () {
        $(this).css('display', 'block');
    });
    return;
}
