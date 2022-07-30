
// Page Home
import React , {useState}  from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import '../styles/styles.css'
import '../styles/menu.css'
import '../styles/slyder.css'

import DataSlider from "../components/DataSlider" 

// ***************
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";
import { array } from "prop-types"

  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    margin-top : 5px ;
    justify-content:center ;
`
const FeuturedImage = styled.img`
   width : 100% ; 
   max-height : 88vh  ;
   border-radius : 2vh;
`

export default ({}) => (
      <Layout>
                <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 800 ? 1 : "auto"}
                loop={true}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
                }}
                pagination={{
                clickable: true
                }}
                className="mySwiper"
                >
                    {/* <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[0].content}}/>
                        <img src={DataSlider[0].source}/>
                     </SwiperSlide>  
                <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[1].content}}/>
                        <img src={DataSlider[1].source}/>
                </SwiperSlide>
                <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[2].content}}/>
                        <img src={DataSlider[2].source}/>
                </SwiperSlide>
                <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[3].content}}/>
                        <img src={DataSlider[3].source}/>
                </SwiperSlide>
                <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[4].content}}/>
                        <img src={DataSlider[4].source}/>
                </SwiperSlide>
                <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[5].content}}/>
                        <img src={DataSlider[5].source}/>
                </SwiperSlide>
                <SwiperSlide>
                        <h1  dangerouslySetInnerHTML={{__html: DataSlider[6].content}}/>
                        <img src={DataSlider[6].source}/>
                </SwiperSlide> */}
                <SwiperSlide>
                     <ImageWrapper >
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[0].content}}/>
                        <FeuturedImage src={DataSlider[0].source}/>
                    </ImageWrapper>
                </SwiperSlide>  
                <SwiperSlide>
                    <ImageWrapper >
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[1].content}}/>
                        <FeuturedImage src={DataSlider[1].source}/>
                    </ImageWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageWrapper >
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[2].content}}/>
                        <FeuturedImage src={DataSlider[2].source}/>
                    </ImageWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageWrapper >
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[3].content}}/>
                        <FeuturedImage src={DataSlider[3].source}/>
                    </ImageWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageWrapper >
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[4].content}}/>
                        <FeuturedImage src={DataSlider[4].source}/>
                    </ImageWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageWrapper > 
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[5].content}}/>
                        <FeuturedImage src={DataSlider[5].source}/>
                    </ImageWrapper>
                </SwiperSlide>
                <SwiperSlide>
                    <ImageWrapper >
                        <h1  class="parag" dangerouslySetInnerHTML={{__html: DataSlider[6].content}}/>
                        <FeuturedImage src={DataSlider[6].source}/>
                    </ImageWrapper>
                </SwiperSlide>
                </Swiper>
     </Layout>
  )
