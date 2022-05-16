





class Myportfolio {

    get default_header_ru(){
        return $('~Мое портфолио')
    }

    get fullname_header_ru(){
        return $('~Дмитрий Касинский')
    }

    get fullname_header_en(){
        return $('~Dmitriy Kasinskiy')
    }

    get balance_ru(){
        return $('~Баланс кошелька $ 0.0 Показать меню Вклады')
    }

    get plus(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[2]')
    }

    
}

export default new Myportfolio()