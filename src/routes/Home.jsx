import {} from 'react'
//importando a estrutura para maninupar as imagens
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState, useEffect} from 'react'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './estilo.module.css';


function Home (){

  //Hooks

    const [slidepreview, setSlidepreview] =useState(1);

  // crinado o ojeto de imagems
     const data =[
      {id: '1', image: './src/assets/supra.webp'},
      {id: '2', image: './src/assets/lancerevo.jpg'},
      {id: '3', image: './src/assets/eclipse.webp'},

    ];
// useEffect faz o efeito colateral 
    useEffect(() =>{
      function handleRezise(){
        if(window.innerWidth < 720){
          setSlidepreview(1);
        }else{
          setSlidepreview(2);
        }
      }
      handleRezise();

      //modifica toda vez que o usuario diminuir a tela
      window.addEventListener('resize', handleRezise);
      return()=>{
        window.removeEventListener('resize', handleRezise);
      };
      //retornando um array vazio
    },[]);


  return(
    <section>
      <p>Seja bem vindo a loja de carros mais sofisticada do Brasil, com uma variedade imensa no estoque e preços baixos.</p>
      <Swiper 
       slidepreview={slidepreview}
       pagination={{clickable:true}}
       navigation
      >
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