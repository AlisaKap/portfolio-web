import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import  '@/app/info/info-page.scss'
import RotatedCheck from "@/components/RotatedCheck/RotatedCheck";


export default function InfoPage() {

    return (
        <div className="background-container">
            <img src='/images/info/mePhoto.png' alt="Card" />
            <div style={{position: "relative", height: "100vh"}}>
                <RotatedCheck
                    angle={5.03}
                    initialY={"100vh"}
                    delay={0.2}
                    backgroundColor="#AD3032"
                    content={
                        <>
                            <h5>Список побед и наград на</h5>
                            <h6>ХАКАТОНАХ </h6>
                            <div className="list-block-hack">
                                <p><b>2 место</b> в составе команды «АтомDev#» в хакатоне <br/>«АТОМХАК»
                                    при ВИШ НИЯУ МИФИ и АСЭ Росатом.
                                    <br/>20-21 марта 2024 г.
                                    <br/>Роль в команде: дизайнер.</p>

                                <p><b>Номинация “Лучшая защита проекта”</b>
                                    в составе команды «АтомDev#» в хакатоне
                                    VK Mini Apps х ITMO Hack.
                                    <br/>11-13 октября 2024 г.
                                    <br/>Роль в команде: дизайнер, фронтент.</p>

                                <p><b>1 место</b> в составе команды «АтомDev#»
                                    в хакатоне <br/> BIV Hack Challenge.
                                    15-17 ноября 2024 г.
                                    <br/>Роль в команде: дизайнер, фронтент.</p>

                                <p><b>2 место</b> в составе команды «АтомDev#»
                                    в хакатоне <br/>BEST HACK’25 при МГТУ Баумана.
                                    1-2 марта 2025 г.
                                    <br/>Роль в команде: дизайнер, фронтент.</p>

                                <p><b>Финалисты</b> в составе команды «АтомDev#»
                                    в хакатоне ВНЕДРЕЙД 2025 от Orion.
                                    7-8 июня 2025 г.
                                    <br/>Роль в команде: дизайнер, фронтент.</p>

                            </div>
                        </>
                    }
                    positionStyle={{top: "22%", left: "19%"}}
                />

                <RotatedCheck
                    angle={-5.97}
                    initialY={"120vh"}
                    delay={0.3}
                    backgroundColor="#FBECD5"
                    content={
                        <>
                            <h2>Creator</h2>
                            <h1>Капустина Алиса Сергеевна</h1>
                            <h3>Образование и опыт</h3>
                            <div className="list-block-educate">
                                <h4>Высшая школа технологии и энергетики СПбГУПТД. Дизайн (Красный диплом)</h4>
                                <p>Бакалавр. Очная форма обучения. Год окончания — 2025</p>

                                <h4>Интенсив по фото и видеосъемке от Городского студенческого пресс-центра СПб</h4>
                                <p>Продолжительность — 7 дней. Год окончания — 2022</p>

                                <h4>Образовательный курс “СНЯТО!”</h4>
                                <p>Продолжительность — месяц. Год окончания — 2023</p>

                                <h4>Работа в M&T Consulting ltd. Помощник дизайнера</h4>
                                <p>Продолжительность — 2 года. Год окончания — 2025</p>

                                <h4>Работа в АСЭ Росатом. Инженер 2 категории</h4>
                                <p>Продолжительность — год. Год окончания — 2025</p>

                            </div>
                            <h3>Программы </h3>
                            <div className="grid-list">
                                <div>
                                    <p>Adobe Illustrator</p>
                                    <p>Adobe Photoshop</p>
                                    <p>Adobe InDesign</p>
                                    <p>Adobe Premiere Pro</p>
                                    <p>Adobe Lightroom Classic</p>
                                    <p>Adobe After Effects</p>
                                </div>

                                <div>
                                    <p>Figma</p>
                                    <p>Coral Draw</p>
                                    <p>SketchUp</p>
                                    <p>Blender</p>
                                    <p>Unity</p>
                                    <p>Unreal Engine 5</p>

                                </div>
                            </div>
                        </>
                    }
                    positionStyle={{top: "3%", left: "48%"}}
                />
            </div>

        </div>
    );
}