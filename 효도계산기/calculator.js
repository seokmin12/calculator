let step = 0;
let first = '';
let operator = '';
let second = '';
let output = '';


    $('button.gray').on('click', function () {
        if (step === 0) {
            first = first + $(this).text();
            output = first;
        } else {
            second = second + $(this).text();
            output = output + $(this).text();
        }

        $('input').val(output);

        // console.log($(this).text());

    });

    $('button.blue').on('click', function () {
        step = 1;
        operator = $(this).text();
        output = output + operator;
        $('input').val(output);

        // console.log($(this).text());
    });

    $('button.red').on('click', function () {
        if (operator === '*') {
            $('input').val(first * second);
        } else if (operator === '/') {
            $('input').val(first / second);
        }

        // console.log($(this).text());
    });

    $('button.clear').on('click', function () {
        step = 0;
        first = '';
        operator = '';
        second = '';
        output = '';
        $('input').val('0');

        // console.log($(this).text());
    })