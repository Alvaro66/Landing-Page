import react from "react";
const Carousel =() =>{
    return(
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
          <img src="https://mcn-images.bauersecure.com/PageFiles/687198/DUCATI_SUPERSPORT_950_S-3.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.totalmotorcycle.com/wp-content/uploads/2020/11/2021-Ducati-SuperSport-950b.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://wfprwpnressa01.blob.core.windows.net/redlive/2019/02/25/22/30/Ducati-Multistrada-950-S-2019-014.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  );
};

export default Carousel
