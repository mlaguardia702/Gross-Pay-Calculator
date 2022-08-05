const calculate = (props) => {
    const StAmount = props.StHours * props.StHours;
    const OtAmount = props.OtHours * props.OtRateHour;
    const DtAmount = props.DtHours * props.DtRateHour;

    return StAmount + OtAmount + DtAmount;
};

//button
$('#submit').click(() =>{
    StHours = document.getElementById("hours").value;
    StRateHour = document.getElementById("RThours").value;
    OtHours = document.getElementById("OThours").value;
    OtRateHour = document.getElementById("OTrate").value;
    DtHours = document.getElementById("DThours").value;
    DtRateHour = document.getElementById("DTrate").value;

    //print result
    const grossPay = calculate({ StHours, StRateHour, OtHours, OtRateHour, DtHours, DtRateHour });

    const grossPayH1Element = document.createTextNode(`$${grossPay}`);
    document.getElementById('grossPayResult').appendChild(grossPayH1Element);
});


