import {} from 'react'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'
import { FaFacebookF as Face } from "react-icons/fa6";
import { FaInstagram as Insta } from "react-icons/fa6";
import { FaLinkedinIn as In } from "react-icons/fa6";
import { FaVoicemail as Mail } from "react-icons/fa6";
import styles from '../components/footer.module.css'


function Footer(){
    return(
        <>
            <section className={styles.footer}>
                <h1 className={styles.texto}>@2023 - Direitos reservados.</h1>
                <div className={styles.social}>
                    <Face/>
                    <Insta/>
                    <In/>
                    <Mail/>
                </div>
            </section>
            
        </>
    )
}

export default Footer