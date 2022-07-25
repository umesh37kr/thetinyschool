import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import '../styles/pages/AboutTSS.css'
const AboutTSS = () => {
    const img = "images/page_header.jpg"
  return (
    <>
    <Navbar />
    <PageHeader name={img} />
    {/* principal message */}
    <div className='about-section'>
        <div className='principal-div'>
            <div className='principal-message'>
                <h2>The Summit School - Where Learning Has Purpose</h2>
                <p>
                    इंजीनियरिंग, पॉलिटेक्निक, प्रबंधन, शिक्षा और अब स्कूली शिक्षा के क्षेत्र में शिक्षा को बढ़ावा देने वाले IES ग्रुप ऑफ इंस्टीट्यूशंस की एक शाखा IES पब्लिक स्कूल में आपका स्वागत है। हम कई वर्षों से शिक्षा के क्षेत्र में हैं और आईईएस पब्लिक स्कूल हमारा नवीनतम मील का पत्थर है।
                    हमारे छोटे बच्चों के जिज्ञासु युवा मन को स्कूल समर्पित करते हुए मुझे बहुत खुशी हो रही है। हमारा विद्यालय केवल सीखने का नहीं, विकास का स्थान होगा। हमारे अथक प्रयास ज्ञान को व्यापक बनाने, स्वतंत्र सोच विकसित करने, व्यक्तित्व को विकसित करने और हमारी सदियों पुरानी मूल्य प्रणालियों को मजबूत करने पर केंद्रित होंगे।
                    हमारा जोर अपने मूल्यों को स्थिर रखते हुए एक स्वस्थ व्यक्तित्व के विकास पर रहेगा। आपकी रुचि और प्रेरणा उच्च दक्षता प्राप्त करने के हमारे प्रयासों में सहायक होगी। हम सब मिलकर यह सुनिश्चित करेंगे कि बच्चों द्वारा उनकी सीखने की यात्रा में उठाया गया छोटा कदम उन्हें जीवन के हर चरण में महत्वपूर्ण उपलब्धियों की ओर ले जाएगा।
                </p>
            </div>
            <div className='principal-image'>
                <img src="images/principal.jpg" alt="principal" />
            </div>
        </div>
    </div>

    {/* mission and vision */}
    <div className='mission-section'>
        <div className='vision'>
            <h2>Our Vision</h2>
            <p>आईईएस पब्लिक स्कूल को नैतिकता और मूल्य प्रणाली के साथ "युवा दिमाग" के लिए उत्कृष्टता वैश्विक प्रतिष्ठा के केंद्र के रूप में विकसित करना।</p>
        </div>
        <div className='mission'>
            <h2>Our mission</h2>
            <ul>
                <li><span>✔</span>विश्व स्तर का माहौल, पर्यावरण, बुनियादी ढांचा और सुविधा प्रदान करें।</li>
                <li><span>✔</span>सीखा और अनुभवी कम्यूटेड और समर्पित संकाय की उपलब्धता सुनिश्चित करना।</li>
                <li><span>✔</span>समग्र विकास के साथ मानवीय मूल्यों को विकसित करने के लिए समर्पित प्रयास।</li>
                <li><span>✔</span>"स्वस्थ मन और स्वस्थ शरीर" के आसपास केंद्रित केंद्रित प्रयास।</li>
            </ul>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default AboutTSS