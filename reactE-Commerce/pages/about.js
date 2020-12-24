import React from "react";
import Navigator from "../components/navigator";

const About = (props) => {
  return (
    <>
      <Navigator currentPage={props.match.url} isProductPage={false} />
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
              alt="about us"
              className="about-img"
            />
          </div>
          <div className="col-md-6">
            <h1>Our Story</h1>
            <div
              className="nav-item-underline about-underline"
              style={{ width: "120px", height: "5px" }}
            ></div>
            <p className="about-text">
              Standart BMW M5, 4.4 litrelik çift turbolu V8 motoruyla 600 beygir
              gücü ve 750 Nm tork üretebiliyor. Bu da, aracın 0-100 km/sa
              hızlanmasını 3.2 saniyede tamamlayabilmesini sağlıyor. M5
              Competition ise aynı motordan 617 beygir gücü ve 750 Nm tork
              çıkışı alabiliyor. Bu model, 0'dan 100 km/sa hıza 3.1 saniyede
              ulaşabiliyor. Her iki model de opsiyonel M Sürücü Paketi ile 250
              km/sa veya 305 km/sa hıza ulaşabiliyor.Motorda üretilen güç, sekiz
              vitesli otomatik şanzıman ile M xDrive dört tekerlekten çekiş
              sistemine gönderiliyor. Yeni BMW M5, standart olarak direksiyon
              asistanlı şerit takip sistemi, yaya algılayan acil durum fren
              sistemi, çapraz trafik asistanı ve otomatik uzun far asistanı gibi
              güvenlik donanımları ile birlikte geliyor. Kullanıcılar, Driving
              Assistance Professional paketini de ekstra ücreti ile satın
              alabilecek.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
