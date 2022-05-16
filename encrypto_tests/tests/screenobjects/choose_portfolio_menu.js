


class ChoosePortfolio {

    get header_en(){
        return $('//android.view.View[@content-desc="Choose Portfolio:"]')
    }

    get show_menu(){
        return $('~Show menu')
    }

    get username(){
        return $('~Dmitriy Kasinskiy')
    }

    get password_en(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText')
    }

    get ok_btn_en(){
        return $('~Ok')
    }
}

export default new ChoosePortfolio()