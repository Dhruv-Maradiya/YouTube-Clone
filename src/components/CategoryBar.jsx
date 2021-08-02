import React from 'react';
import { useState } from 'react';
import '../css/CategoryBar.css';

const CategoryBar = () => {
    const [active, setActive] = useState("All");
    let tranRL = 0;
    const categories = ["All", "React Js", "Angular Js", "React Native", "Redux", "JavaScript", "TypeScript", "Python", "Django", "Flask", "All", "React Js", "Angular Js", "React Native", "Redux", "JavaScript", "TypeScript", "Python", "Flask", "All", "React Js", "Angular Js", "React Native", "Redux", "JavaScript", "TypeScript", "Python"]
    const translate = () => {
        let e = window.event;
        let maximumPixelToScroll = document.getElementsByClassName("categoryBar__items")[0].scrollWidth - document.getElementsByClassName("categoryBar")[0].offsetWidth;
        if (e.wheelDelta < 0) {
            tranRL += 150;
            if (maximumPixelToScroll < tranRL) {
                tranRL = maximumPixelToScroll;
            }
            document.getElementsByClassName('categoryBar__items')[0].scrollTo(tranRL, 0);
        } else {
            tranRL -= 150;
            if (tranRL < 0) {
                tranRL = 0;
            }
            document.getElementsByClassName('categoryBar__items')[0].scrollTo(tranRL, 0);
        }
    }
    return (
        <div className="categoryBar" onWheel={translate}>
            <div className="categoryBar__items" style={{ display: "flex" }}>
                {categories.map((item, index) => {
                    return (
                        <div className={active === item ? "categoryBar__item active" : "categoryBar__item"} key={index} onClick={() => { setActive(item) }}>
                            <h4>{item}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryBar;
