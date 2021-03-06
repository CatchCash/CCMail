var $$ = mdui.JQ;

$$('.enroll-confirm-passwd').hide();
$$('.enroll-btn-list').hide();

$$('#log-login-btn').on('click', function(e) {
    var un = $$('#user-name').val(),
        fpw = $$('#first-passwd').val();
    if (un == "" || fpw == "") {
        mdui.snackbar({
            message: "请输入用户名/密码",
        });
        return;
    } else {
        this.form.action="login";
        this.form.submit();
    }
});

$$('#log-enroll-btn').on('click', function(e) {
    $$('.enroll-confirm-passwd').show();
    $$('.login-btn-list').hide();
    $$('.enroll-btn-list').show();
});

$$('#en-enroll-btn').on('click', function(e) {
    var un = $$('#user-name').val(),
        fpw = $$('#first-passwd').val();
    cpw = $$('#confirm-passwd').val();
    if (un == "" || fpw == "" || cpw == "") {
        mdui.snackbar({
            message: "请输入用户名/密码",
        });
        return;
    } else if (fpw != cpw) {
        mdui.snackbar({
            message: "两次输入的密码不一致",
        });
        return;
    } else {
        $$('.enroll-confirm-passwd').hide();
        $$('.enroll-btn-list').hide();
        $$('.login-btn-list').show();
        this.form.action="regist";
        this.form.submit();
    }
});

$$('#en-cancel-btn').on('click', function(e) {
    $$('.enroll-confirm-passwd').hide();
    $$('.enroll-btn-list').hide();
    $$('.login-btn-list').show();
});
