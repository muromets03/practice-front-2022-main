import React from 'react';
import data from './pricing.json'
import styles from "./PricingPackages.module.scss"

const PricingPackages= () => {
    return (
        <div style={{fontFamily:"Raleway,sans-serif"}} >
            <h1 style={{fontSize:"24px", textAlign:"center",paddingTop:"15px"}}>Select a Package for your Managed Branding Contest</h1>
            {data.map(({id,heading,description,price, option, colorName})=> (
                 <div  key={id}>
                    <h1 style={{color:colorName}} className={styles.heading} >{heading}</h1>
                    <h3 className={styles.sub_heading}>{description}</h3>
                    <p  style={{color:colorName}}className={styles.pricing}>{price.currency}{price.amount}</p>
                    <ul> {option.map((opt)=>(
                            <li>{opt}</li>
                            ))}
                    
             
                            </ul>              
            
                    </div>
            ))}   
                        
                    
            

            
        </div>
        // {data.map(({ id, img,alt, heading, content }) => (
        //     <div className={styles.card} key={id}>
        //       <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />
  
        //       <h3>{heading}</h3>
        //       <p>{content}</p>
        //     </div>
        //   ))}
    );
}

export default PricingPackages;
