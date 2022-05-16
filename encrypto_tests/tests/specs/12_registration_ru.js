import Small_Intro from '../screenobjects/small_intro'
import Security_Info from '../screenobjects/security_intro'
import Create_Portfolio from '../screenobjects/create_portfolio'



describe('registration test 12 ru; Проверить создание портфолио при выборе на онбординг скрин   радиокнопку  "Только отпечаток пальца/FaceID(компромиссный вариант)" на экране "Безопастность"? или "Ничего, мне не о чем беспокоится " на экране "Безопастность" с пустым полем "Мое портфолио"', function(){

    it('PRECONDITION. Пользователь прошел онбординг скрин и выбрал на экране безопасность радиокнопку  "Только отпечаток пальца/FaceID(компромиссный вариант)" на экране "Безопастность"? или "Ничего, мне не о чем беспокоится " на экране "Безопастность"', function(){        

        const text_small_intro = 'Введение'
        const attr_small_intro = Small_Intro.header_ru.getAttribute('content-desc')
        expect(attr_small_intro).toBe(text_small_intro)

        const text_next_btn = 'Далее'
        const attr_next_btn = Small_Intro.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn).toBe(text_next_btn)

        Small_Intro.next_btn_ru.click()

        const text_security_intro = 'Безопасность'
        const attr_security_intro = Security_Info.header_ru.getAttribute('content-desc')
        expect(attr_security_intro).toBe(text_security_intro)

        const text_checkbox_4 = 'Ничего, мне не о чем беспокоиться';
        const attr_4_text = Security_Info.checkbox_4_ru.getAttribute('content-desc')
        expect(attr_4_text).toBe(text_checkbox_4)
        Security_Info.checkbox_4_ru.click()
        const attr_4 = Security_Info.checkbox_4_ru.getAttribute('checked')
        expect(attr_4).toBe('true')
        
        const text_next_btn_1 = 'Далее'
        const attr_next_btn_1 = Security_Info.next_btn_ru.getAttribute('content-desc')
        expect(attr_next_btn_1).toBe(text_next_btn_1)

        Security_Info.next_btn_ru.click()

    });
   
    it('STEP 1. Удалить данные из  поля "Мое портфолио"  ', function(){
    
        const text_create_portfolio = 'Создать портфолио'
        const attr_create_portfolio = Create_Portfolio.header_ru.getAttribute('content-desc')
        expect(attr_create_portfolio).toBe(text_create_portfolio)

        const text_my_portfolio = 'Мое портфолио, Мое портфолио'
        const attr_my_portfolio = Create_Portfolio.myportfolio_4.getAttribute('text')
        expect(attr_my_portfolio).toBe(text_my_portfolio)
        Create_Portfolio.myportfolio_4.click()
        Create_Portfolio.myportfolio_4.clearValue()
        
       
    });

    it('STEP 2. Нажать кнопку [Создать]', function(){

        const text_create_btn = 'Создать'
        const attr_create_btn = Create_Portfolio.create_btn_ru.getAttribute('content-desc')
        expect(attr_create_btn).toBe(text_create_btn)
        Create_Portfolio.create_btn_ru.click();
    });

    it('EXPECTED RESULT. После нажатия кнопки [Создать] Под полем "Мое портфолио"отображается информационное сообщение красным цветом" Пожалуйста, введите имя".  ', function(){
        
        const red_text1 = 'Пожалуйста, введите имя'
        const attr_red_text1 = Create_Portfolio.red_text1_ru.getAttribute('content-desc')
        expect(red_text1).toBe(attr_red_text1)

    });
});