module.exports={
    ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        else{
            return (false)
        }
    },
    CheckPassword(inputtxt) 
    { 
        var passw= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(inputtxt.match(passw)) 
        { 
        return true;
        }
        else
        { 
        return false;
        }
    },
    allLetter(uname)
    { 
        if(uname !== undefined){
            var letters = /^[A-Za-z]+$/;
            if(uname.match(letters))
            {
            return true;
            }
            else
            {  
            return false;
            }
        }else{
            return false
        }
    },
    countryCode(inputtxt){  
        if(/^[0-9]+$/.test(inputtxt))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}