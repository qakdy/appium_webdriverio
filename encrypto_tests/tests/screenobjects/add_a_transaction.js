



class AddTransaction{

    get header_en(){
        return $('~Add a transaction')
    }

    get quantity_btc(){
        return $('//android.view.View/android.widget.EditText[1]')
    }

    get in(){
        return $('~In')
    }

    get out(){
        return $('~Out')
    }

    get buy(){
        return $('~Buy')
    }

    get transfer(){
        return $('~Transfer')
    }

    get exchange(){
        return $('~Exchange')
    }

    get mining(){
        return $('~Mining')
    }

    get staking(){
        return $('~Staking')
    }
    
    get dropdown_calendar_btc(){
        return $('//android.view.View/android.view.View/android.widget.Button')
    }

    get ok_btn_calendar_btc(){
        return $('//android.view.View/android.view.View/android.widget.Button')
    }

    get usd_form_btc(){
        return $('//android.view.View/android.widget.EditText[2]')
    }
    
    get wallet_dropdown(){
        return $('~Show menu')
    }

    get metamask(){
        return $('~Metamask')
    }

    get save(){
        return $('~Save')
    }

    get cancel(){
        return $('~Cancel')
    }

    get dropdown_in_out_btc(){
        return $('//android.view.View/android.widget.Button[1]')
    }

    get dropdown_buy_sell_btc(){
        return $('//android.view.View/android.widget.Button[2]')
    }
}
export default new AddTransaction()