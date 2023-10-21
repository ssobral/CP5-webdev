import {} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState, useEffect} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles/estilo.module.css';
import comidajaponesa1 from '../assets/comidajaponesa1.webp';
import comidajaponesa2 from '../assets/comidajaponesa2.webp';
import comidajaponesa3 from '../assets/comidajaponesa3.jpg';





function Home (){

    const [slidepreview, setSlidepreview] =useState(1);

     const data =[
      {id: '1', image: comidajaponesa1},
      {id: '2', image: comidajaponesa2},
      {id: '3', image: comidajaponesa3},

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
      <Swiper slidepreview={slidepreview} pagination={{clickable:true}} navigation>
        {data.map((item)=>(
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="imagem" className={styles.slideItem}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.espaco_texto}> 
      <p className={styles.texto}>Seja bem vindo ao restaurante de comida japonesa mais sofisticado do Brasil, com uma variedade imensa de receitas e preços baixos.</p>
      </div>
      
    </section>
  )
}
export default Home