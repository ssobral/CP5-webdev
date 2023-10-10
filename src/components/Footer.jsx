import {} from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'


function Footer(){
    return(
        <>
            <section>
                <h1>@2023 - Direitos reservados.</h1>
                <SocialIcon url="www.instagram.com" />
                <SocialIcon url="www.facebook.com" />
                <SocialIcon url="www.linkedin.com" />
                <SocialIcon url="www.email.com" />
            </section>
        </>
    )
}

export default Footer