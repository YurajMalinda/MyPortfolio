function clearPlaceOrderTextFields() {
    $("#cusId,#cusName, #cusAddress,#cusSalary,#selectItemFormItem,#selectFormCustomer,#itemId,#itemName,#price,#quantity,#orderQty,#cash,#balance,#discount").val("");
    $("#total").text(0.00);
    $("#subTotal").text(0.00);
}

function enabledOrDisabledBtn() {
    if (($("#selectFormCustomer").val() !== null) && ($("#selectItemFormItem").val() !== null) &&  ($("#cash").val().length!= 0) ){
        $("#btnPurchase").prop("disabled",false);
    }else {
        $("#btnPurchase").prop("disabled",true);
    }
}

function enabledCartBtn() {
    if (($("#selectFormCustomer").val() !== null) && ($("#selectItemFormItem").val() !== null) && ($("#orderQty").val().length!= 0)  ){
        $("#btnPlaceOrder").prop("disabled",false);
    }else {
        $("#btnPlaceOrder").prop("disabled",true);
    }
}