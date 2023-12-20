$(document).ready(function () {
    $('#verificationForm').submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        var inputValue = $('#checkInput').val();

        if (inputValue.trim() !== "") {
            // Ajax
            $.ajax({
                type: 'POST',
                url: 'info.php',
                data: { check: inputValue },
                success: function (response) {
                    // Result
                    if(inputValue== "abc"){
                        $('#verificationResult').html(response).css('color', 'green'); // Corrected selector
                    }else{
                        $('#verificationResult').html(response).css('color', 'red'); // wrong selector
                    }
                }
            });
        } else {
            $('#verificationResult').html("Error: Input is empty.").css('color', 'red');
        }
    });
});
