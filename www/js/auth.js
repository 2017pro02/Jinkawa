function login(){//役員としてログインするときに呼ばれる関数
    pass = document.getElementById("password").value;
    if(pass == "jinkawa7955" || pass == "*&igYwrzV!H5"){
        ons.notification.alert({
            title: '認証されました',
            messageHTML: 'あなたは役員としてログインしました',
            buttonlabel: 'OK',
            callback: function(){
                EditNavigator.pushPage('views/officer/officer_tab.html');
            }
        });
    }else if(pass == "Pr&ANch#SKd1" || pass.match(/jinkawa885500\d/)){
        var no = pass.slice(-1);
        ons.notification.alert({
            title: '認証されました',
            messageHTML: 'あなたは管理者 '+no+' としてログインしました',
            buttonlabel: 'OK',
            callback: function(){
                EditNavigator.pushPage('views/admin/admin_tab.html');
            }
        });
    }else{
        ons.notification.alert({
            title: 'パスワードが違います',
            messageHTML: 'パスワードを再入力してください',
            buttonlabel: 'OK',
            callback: function(){
                //document.getElementById("password").value=null;//入力欄をからにする
            }
        });
    }
}
