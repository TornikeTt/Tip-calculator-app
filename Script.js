// input section
let bill =  document.querySelector(".billinput div input"); 
let NumberOfPeople = document.querySelector(".numberOfPeople div input");
// input section

//  percentages
let fivePercentage = document.querySelector(".fivePercentage");
let tenPercentage = document.querySelector(".tenPercentage");
let fifteenPercentage = document.querySelector(".fifteenPercentage");
let twentyfivePercentage = document.querySelector(".twentyfivePercentage");
let fiftyPercentage = document.querySelector(".fiftyPercentage");
let custom_Percentage = document.querySelector(".Percentage input")
//  percentages   

// output section
let EachPerson_Tip_Amount = document.querySelector(".TipAmount h1");
let Total = document.querySelector(".Total h1");
// output section 

// default option of Procention 
let Choose_Rercentage = (num) => {   
    /* 
        when we choose to click already optionaly procention then 
        our cuostom precentage will be blank
    */
    custom_Percentage.value = ""; 

    let String_procent = num.split(" ").toString(); // object convert to String
    let Number_procent = parseFloat(String_procent); // convert String to Number 

    let BillAmount = Number(bill.value); // Get Bill Amount 
    
    if( NumberOfPeople.value === "" ) { 
        document.querySelector(".numberOfPeople div").style.border = "2px solid red";
    } else { 
        if( BillAmount === 0 ) { 
            Total.innerHTML = "0.00";
        } 
        else { 
            document.querySelector(".numberOfPeople div").style.border = "none";
            // calculation total amount of tip.
            let Calculation = BillAmount * Number_procent / 100;  
            EachPerson_Tip_Calculation(Calculation);
            Total.innerHTML = Calculation.toFixed(2);
        }
    }


}
// default option of Procention 

// custom percentages =>>>>>>>>>
custom_Percentage.addEventListener("click", () => { 
    Total.innerHTML = "0.00";
    EachPerson_Tip_Amount.innerHTML = "0.00";
    custom_Percentage.value = "";
})


custom_Percentage.addEventListener("keyup", () => { 
    if( NumberOfPeople.value === "" ) { 
        document.querySelector(".numberOfPeople div").style.border = "2px solid red";
    } else { 
        document.querySelector(".numberOfPeople div").style.border = "none";

        let Create_percentage = Number(custom_Percentage.value);

        let Convert_Bill_To_NUmber = Number(bill.value);
        let BillAmount = Convert_Bill_To_NUmber.toFixed(2); 
        let calc = BillAmount * Create_percentage / 100;

        EachPerson_Tip_Calculation(calc);
        Total.innerHTML = calc;
    }
})
// custom percentages =>>>>>>>>>





// number of people section to Calculation each person's tip amount


let EachPerson_Tip_Calculation = (Calculation)  => { 
    let EachPerson = Number(NumberOfPeople.value);
    let BillAmount = Number(bill.value); 

    if( EachPerson === 0 || BillAmount === 0) { 
        EachPerson_Tip_Amount.innerHTML = "0.00";
    }else { 
        let Calculation_for_EachPerson = Calculation / EachPerson
        EachPerson_Tip_Amount.innerHTML = Calculation_for_EachPerson.toFixed(2);
    }

}



//NumberOfPeople.addEventListener("keyup", EachPerson_Tip_Calculation);
