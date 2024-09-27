import React, { useState } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdMessage } from "react-icons/md";
import Button from "../button/Button";
import style from "./contactform.module.css";

const ConatactForm = () => {
  let [user, setUser] = useState({
    name:"",
    email:"",
    text:""

  })

  const onSubmitForm =(e)=>{
    e.preventDefault()
    console.log(e);
 let {name,value}=e.target 
 setUser({...user,[name]:value})
 
  
    

   

  }
  return (
    <section className={`${style.container}`}>
      <div className={style.contact_from}>
        <div className={style.top_btn}>
          <Button 
         
          text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button 
         
          text="VIA CALL" icon={<HiOutlinePhone />} />
        </div>
        <Button isOutline={true}
        text="VIA EMAIL FORM" icon={<HiOutlineMail />} />
<form 
onSubmit={onSubmitForm}
>

  <div className={style.form_control}>
  <label htmlFor="name">Name</label>
  <input type="text" name="name" />
  </div>
  <div className={style.form_control}>
  <label htmlFor="email">Email</label>
  <input type="email" name="email" />
  </div>
  <div className={style.form_control}>
  <label htmlFor="text">Text</label>
  <textarea name="text" id="" rows={6}></textarea>
  </div>
  <div style={{
    display:"flex",
    justifyContent:"end",
  }}>
  <Button text="Submit"/>
  </div>
  <div>
    {name + " "+ email +" "+ text +""}
  </div>

</form>
      </div>
      <div className={style.contact_img}>
        <img src="/images/Service 24_7-pana 1.svg" alt="Service 24/7 logo" />
      </div>
    </section>
  );
};

export default ConatactForm;
