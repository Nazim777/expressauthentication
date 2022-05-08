import {modeluser,modeluser1} from "../model/usermodel.js";
import bcrypt from 'bcrypt'
class controlleruser{
    static home= async(req,res)=>{
        try {
           
            res.render('index')
        } catch (error) {
            console.log(error)
            
        }

    }

    static register= async(req,res)=>{
        try {
           
            res.render('registration')
        } catch (error) {
            console.log(error)
            
        }
    }
    static login=async(req, res)=>{
        try {
          
            res.render('login')
        } catch (error) {
            console.log(error)
            
        }
       
    }

    static registrationdata=async(req, res)=>{
         // console.log(req.body)
         /*
         //without hashpassword
        try {
            
           const {name, email, password} = req.body
           
           const data= new modeluser({
               name, email, password
           })
           const result =await data.save()
           console.log(result)
        
           res.render('afterregistration',{name})
           //res.redirect('/login')
           
         
        

        } catch (error) {
            console.log(error)
            
        }

        */




        try {
            // with hashpassword
           const {name, email,password} = req.body
           const hashpassword = await bcrypt.hash(password, 10)
           
           const data= new modeluser({
               name, email, password:hashpassword
           })
           const result =await data.save()
           console.log(result)
        
         //  res.render('afterregistration',{name})
         res.redirect('/login')
           
         
        

        } catch (error) {
            console.log(error)
            
        }




    }



    static logindata= async(req,res)=>{
       // console.log(req.body)
       /*
       try {

        const {email, password} = req.body
        const result = await modeluser.findOne({email})
        if(result !=null){
            
             //without hashpassword
            if(result.email==email && result.password==password){
               const data= modeluser1({ //save login data on database
                    email, password
                })
                const data1= await data.save()
                console.log(data1)
                
                res.render('dashboard')
                

                //with hashpassword



            }else{
                res.send('<h1>password not matched<h1/>')
            }


           // console.log(result)
            //res.send('login ')
        }else{
            res.send('<h1>this email is not a registered user<h1/>')
        }
      

      
       } catch (error) {
           console.log(error)
           
       }
       */


       try {
           const {email, password}= req.body
          const result = await modeluser.findOne({email})
          console.log(result)
          
           if(result!=null){
            const matchpassword= await bcrypt.compare(password, result.password)
               if(result.email==email && matchpassword){
                   res.render('dashboard')
               }else{
                   res.send('<h1>password not match<h1/>')
               }

           }else{
               res.send('<h1>this email is not resistered<h1/>')
           }


           
       } catch (error) {
           console.log(error)
       }



    }

  
}


export default controlleruser