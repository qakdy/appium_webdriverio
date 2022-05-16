import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'

describe('registration test 2 en; Проверить создание портфолио при выборе на онбординг скрин радиокнопку "Master password only (the most secure)" с пустыми полями паролей " ', function(){

    it('PRECONDITION. Пользователь прошел онбординг скрин и выбрал на экране безопасность радиокнопку Master password only (the most secure)', function(){        

        const text_small_intro = 'Small Intro'
        const attr_small_intro = Small_Intro.header_en.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Next'
        const attr_next_btn = Small_Intro.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_en.click()

        const text_security_intro = 'Security Intro'
        const attr_security_intro = Security_Info.header_en.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_2 = 'Master password only (the most secure)';
        const attr_2_text = Security_Info.checkbox_2_en.getAttribute('content-desc')
        expect(attr_2_text).toBe(text_checkbox_2)
        Security_Info.checkbox_2_en.click()
        const attr_2 = Security_Info.checkbox_2_en.getAttribute('checked')
        expect(attr_2).toBe('true')
        
        const text_next_btn_1 = 'Next'
        const attr_next_btn_1 = Security_Info.next_btn_en.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_en.click()
        
    
    });

    it('STEP 1-2. Поле "My portfolio" оставить заполненным по умолчанию; Поля "master password", "confirm password" оставить пустыми', function(){
    
        const text_create_portfolio = 'Create portfolio'
        const attr_create_portfolio = Create_Portfolio.header_en.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'My portfolio, My portfolio'
        const attr_my_portfolio = Create_Portfolio.myportfolio.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        

        const text_master_password = 'master password'
        const attr_master_password = Create_Portfolio.password_1.getAttribute('text')
        expect(attr_master_password).toBe(text_master_password)
        

        const text_confirm_password = 'confirm password'
        const attr_confirm_password = Create_Portfolio.password_2.getAttribute('text')
        expect(attr_confirm_password).toBe(text_confirm_password)

       
    });

    it('STEP 3. Нажать кнопку [Сreate]', function(){

        const text_create_btn = 'Сreate'
        const attr_create_btn = Create_Portfolio.create_btn_en.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_en.click();
    });

    it('EXPECTED RESULT. Под полем "master password" отображается информационное сообщение красным цветом "Please Enter password". Под полем "confirm password"  отображается информационное сообщение  красным цветом "Please re enter password"', function(){

        const red_text2 = 'Please Enter password'
        const attr_red_text2 = Create_Portfolio.red_text2_en.getAttribute('content-desc')
        expect(red_text2).toBe(attr_red_text2)

        const red_text3 = 'Please re enter password'
        const attr_red_text3 = Create_Portfolio.red_text3_en.getAttribute('content-desc')
        expect(red_text3).toBe(attr_red_text3)
    });
});