import React, {useState} from 'react';
import s from "./Project.module.css";

type ShowContainerType = {
    showImg: string
    title: string
    description: string
}

const ShowContainer: React.FC<ShowContainerType> = (props) => {

    return (
        <div className={s.holder}>
            <img src={props.showImg} alt=""/>
            <div className={s.block}>
                <div className={s.secondBlock}>
                    <div>
                        <a target='_blank' href="#">Заголовок ссылка</a>
                        <p>Описание</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ShowContainer;