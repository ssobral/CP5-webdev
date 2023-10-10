import {} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState, useEffect} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './estilo.module.css';
import eclipse from '../assets/eclipse.webp';
import lancerevo from '../assets/lancerevo.jpg';
import supra from '../assets/supra.webp';



function Home (){

    const [slidepreview, setSlidepreview] =useState(1);

     const data =[
      {id: '1', image: supra},
      {id: '2', image: lancerevo},
      {id: '3', image: eclipse},

    ];

    useEffect(() =>{
      function handleRezise(){
        if(window.innerWidth < 720){
          setSlidepreview(1);
        }else{
          setSlidepreview(2);
        }
      }
      handleRezise();


      window.addEventListener('resize', handleRezise);
      return()=>{
        window.removeEventListener('resize', handleRezise);
      };

    },[]);


  return(
    <section>
      <p>Seja bem vindo a loja de carros mais sofisticada do Brasil, com uma variedade imensa no estoque e preços baixos.</p>
      <Swiper slidepreview={slidepreview} pagination={{clickable:true}} navigation>
        {data.map((item)=>(
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="imagem" className={styles.slideItem}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Home