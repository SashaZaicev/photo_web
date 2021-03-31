import React from 'react';
import s from "./Project.module.css"
import ShowContainer from "./ShowContainer";
import show1 from "../img/show1.jpg";
import show2 from "../img/show2.jpg";
import show3 from "../img/show3.jpg";

const Project = () => {
    const state = [
        {img: show1, title: "ssilka", description: 'Sea BREEZE'},
        {img: show2, title: "ssilka", description: 'Sea BREEZE'},
        {img: show3, title: "ssilka", description: 'Sea BREEZE'},
    ]


    return (
        <div>
            <div className={s.gridContainer}>
                {state.map(el => {
                    return <ShowContainer
                        showImg={el.img}
                        key={el.title + el.description}
                        title={el.title}
                        description={el.description}
                    />
                })}

            </div>
        </div>
    );
};

export default Project;