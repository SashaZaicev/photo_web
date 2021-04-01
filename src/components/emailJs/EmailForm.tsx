import React from 'react';
import s from './EmailForm.module.css';
import emailjs from 'emailjs-com';


const EmailForm = () => {

    function sendEmail(e: any) {
        console.log(e)
        e.preventDefault();
        e.target.reset();

        emailjs.sendForm('service_1i4a8m8', 'template_f61p9zj', e.target, 'user_UvAgBrcpDMGIoNpmxFnZ0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={s.containerForm}>
            <form className={s.contactForm} onSubmit={sendEmail}>
                <input type="hidden" name="contact_number"/>
                <div className={s.firstBlock}>
                    <div><label>Name:</label>
                        <input type="text" name="from_name" placeholder="Введите Ваше имя"/></div>
                    <div><label>Email:</label>
                        <input type="email" name="user_email" placeholder="Введите Ваш Email"/></div>
                </div>
                <div className={s.secondBlock}>
                    <label>Message: </label>
                    <textarea rows={7} name="message"
                              placeholder="Введите Ваше сообщение адресату"/>
                </div>
                <div className={s.btnSend}><input type="submit" value="Send"/></div>
            </form>
        </div>
    );
}

export default EmailForm