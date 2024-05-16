import React from "react";
import Header from "../components/header";
import Button from "../components/buttons";
import Carousel from "../components/slides";
import Footer from "../components/footer";
const homePage = () => {
  return (
    <div>
      <Header />
      <Button />
      <p className="" style={{padding: '10px 10px 10px 10px', textAlign: 'justify'}}>Discover the artistry of Emiliano's fly tying skills, immerse yourself in his passion for fishing, and explore the breathtaking beaches he frequents. Whether you're an avid angler seeking inspiration or a newcomer to the world of fly fishing, join us on this journey as we celebrate the beauty of nature and the thrill of the catch. With Emiliano as your guide, prepare to embark on unforgettable fishing adventures and unlock the secrets of fly fishing mastery. Start your exploration now and dive into the world of fly fishing excellence with Emiliano!

</p>
      <Carousel />
      <Footer />
    
    </div>
  )
}

export default homePage