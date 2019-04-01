var btnBooking = document.forms['form-booking']['btnBooking'];
btnBooking.onclick = function () {
    if (validateForm()) {
        // alert(1);
        document.getElementById("btnValid").click();
    }

};

// Trả về true hoặc false.
function validateForm() {
    // Lưu trữ trạng thái validate của cả form.
    var isValid = true;
    // Lưu trữ trạng thái validate của first name.
    var isValidName = true;
    // Lưu trữ trạng thái validate của last name.
    var isValidEmail = true;
    // Lưu trữ trạng thái validate của password.
    var isValidPhone = true;
    // Lưu trữ trạng thái validate của confirm password.
    var isValidDate = true;
    var isValidTime = true;

    var txtName = document.forms['form-booking']['name'];
    // Lấy ra phần tử span nằm kế tiếp của txtFirstName. (dùng để hiển thị thông báo lỗi)
    var msgName = txtName.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtName.value == null || txtName.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgName.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgName.classList.add('msg-error');
        // Chuyển nội dung text.
        msgName.innerHTML = 'Name is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }

    var textEmail = document.forms['form-booking']['email'];
    var msgEmail = textEmail.nextElementSibling;
    if (textEmail.value == null || textEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
    } else if (textEmail.value != null && textEmail.value.indexOf("@") == -1) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email should include @ character!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok.';
    }

    var txtPhone = document.forms['form-booking']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone number is required!';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var dateDate = document.forms['form-booking']['date'];
    var txtDate = dateDate.nextElementSibling;
    if (dateDate.value == null || dateDate.value.length == 0) {
        txtDate.classList.remove('msg-success');
        txtDate.classList.add('msg-error');
        txtDate.innerHTML = 'Date is required!';
        isValidDate = false;
    } else {
        txtDate.classList.remove('msg-error');
        txtDate.classList.add('msg-success');
        txtDate.innerHTML = 'Ok!';
    }

    var timeTime = document.forms['form-booking']['time'];
    var txtTime = timeTime.nextElementSibling;
    if (timeTime.value == null || timeTime.value.length == 0) {
        txtTime.classList.remove('msg-success');
        txtTime.classList.add('msg-error');
        txtTime.innerHTML = 'Time is required';
        isValidTime = false;
    } else {
        txtTime.classList.remove('msg-error');
        txtTime.classList.add('msg-success');
        txtTime.innerHTML = 'Ok!';
    }

    isValid = isValidName && isValidEmail && isValidPhone && isValidDate && isValidTime;
    return isValid;
}