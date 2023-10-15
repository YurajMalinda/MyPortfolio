function clearPlaceOrderTextFields() {
    $("#cusId,#cusName, #cusAddress,#cusSalary,#selectItemFormItem,#selectFormCustomer,#itemId,#itemName,#price,#quantity,#orderQty,#cash,#balance,#discount").val("");
    $("#total").text(0.00);
    $("#subTotal").text(0.00);
}
